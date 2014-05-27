/* ******************************************************************************************************** */
/* This file has been augmented by Fyodor Soikin, after downloading from Microsoft.
/* History:
/*      2012-12-12:     Added "error", "success", and "complete" methods to the JQueryXHR interface
/*      2012-12-14:     Fixed signature of JQuery.each method
/*      2012-12-14:     Fixed signature of JQuery.map method; added overload that takes object for first argument.
/*      2013-02-16:     Added "fail", "done", and "always" methods to the JQueryXHR interface
/* ******************************************************************************************************** */

/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

// Typing for the jQuery library, version 1.7.x

/*
    Interface for the AJAX setting that will configure the AJAX request 
*/
interface JQueryAjaxSettings {
    accepts?: any;
    async?: boolean;
    beforeSend?(jqXHR: JQueryXHR, settings: JQueryAjaxSettings): void;
    cache?: boolean;
    complete?(jqXHR: JQueryXHR, textStatus: string): void;
    contents?: { [key: string]: any; };
    contentType?: string;
    context?: any;
    converters?: { [key: string]: any; };
    crossDomain?: boolean;
    data?: any;
    dataFilter?(data: any, ty: any): any;
    dataType?: string;
    error?(jqXHR: JQueryXHR, textStatus: string, errorThrow: string): any;
    global?: boolean;
    headers?: { [key: string]: any; };
    ifModified?: boolean;
    isLocal?: boolean;
    jsonp?: string;
    jsonpCallback?: any;
    mimeType?: string;
    password?: string;
    processData?: boolean;
    scriptCharset?: string;
    statusCode?: { [key: string]: any; };
    success?(data: any, textStatus: string, jqXHR: JQueryXHR): void;
    timeout?: number;
    traditional?: boolean;
    type?: string;
    url?: string;
    username?: string;
    xhr?: any;
    xhrFields?: { [key: string]: any; };
}

/*
    Interface for the jqXHR object
*/
interface JQueryXHR extends XMLHttpRequest {
    overrideMimeType(): void;

    error( callback: (jqXhr: JQueryXHR, textStatus: string, errorThrown: string) => void ): JQueryXHR;
    success(callback: (data: any, textStatus: string, jqXhr: JQueryXHR) => void ): JQueryXHR;
    complete(callback: (jqXhr: JQueryXHR, textStatus: string) => void ): JQueryXHR;

    fail(callback: (jqXhr: JQueryXHR, textStatus: string, errorThrown: string) => void ): JQueryXHR;
    done(callback: (data: any, textStatus: string, jqXhr: JQueryXHR) => void ): JQueryXHR;
    always(callback: (jqXhr: JQueryXHR, textStatus: string) => void ): JQueryXHR;
}

/*
    Interface for the JQuery callback
*/
interface JQueryCallback {
    add(...callbacks: any[]): any;
    disable(): any;
    empty(): any;
    fire(...arguments: any[]): any;
    fired(): boolean;
    fireWith(context: any, ...args: any[]): any;
    has(callback: any): boolean;
    lock(): any;
    locked(): boolean;
    removed(...callbacks: any[]): any;
}

/*
    Interface for the JQuery promise, part of callbacks
*/
interface JQueryPromise {
    always(...alwaysCallbacks: any[]): JQueryDeferred;
    done(...doneCallbacks: any[]): JQueryDeferred;
    fail(...failCallbacks: any[]): JQueryDeferred;
    pipe(doneFilter?: (x: any) => any, failFilter?: (x: any) => any, progressFilter?: (x: any) => any): JQueryPromise;
    then(doneCallbacks: any, failCallbacks: any, progressCallbacks?: any): JQueryDeferred;
}

/*
    Interface for the JQuery deferred, part of callbacks
*/
interface JQueryDeferred extends JQueryPromise {
    notify(...args: any[]): JQueryDeferred;
    notifyWith(context: any, ...args: any[]): JQueryDeferred;

    pipe(doneFilter?: any, failFilter?: any, progressFilter?: any): JQueryPromise;
    progress(...progressCallbacks: any[]): JQueryDeferred;
    reject(...args: any[]): JQueryDeferred;
    rejectWith(context:any, ...args: any[]): JQueryDeferred;
    resolve(...args: any[]): JQueryDeferred;
    resolveWith(context:any, ...args: any[]): JQueryDeferred;
    state(): string;
    then(doneCallbacks: any, failCallbacks: any, progressCallbacks?: any): JQueryDeferred;
}

/*
    Interface of the JQuery extension of the W3C event object
*/
interface JQueryEventObject extends Event {
	data: any;
	delegateTarget: Element;
	isDefaultPrevented(): boolean;
	isImmediatePropogationStopped(): boolean;
	isPropogationStopped(): boolean;
	namespace: string;
	preventDefault(): any;
	relatedTarget: Element;
	result: any;
	stopImmediatePropagation(): void;
	stopPropagation(): void;
	pageX: number;
	pageY: number;
	which: number;
	metaKey: any;
	ctrlKey: boolean;
	shiftKey: boolean;
}

/*
    Collection of properties of the current browser
*/
interface JQueryBrowserInfo {
    safari:boolean;
    opera:boolean;
    msie:boolean;
    mozilla:boolean;
    version:string;
}

interface JQuerySupport {
    ajax?: boolean;
    boxModel?: boolean;
    changeBubbles?: boolean;
    checkClone?: boolean;
    checkOn?: boolean;
    cors?: boolean;
    cssFloat?: boolean;
    hrefNormalized?: boolean;
    htmlSerialize?: boolean;
    leadingWhitespace?: boolean;
    noCloneChecked?: boolean;
    noCloneEvent?: boolean;
    opacity?: boolean;
    optDisabled?: boolean;
    optSelected?: boolean;
    scriptEval?(): boolean;
    style?: boolean;
    submitBubbles?: boolean;
    tbody?: boolean;
}

/*
    Static members of jQuery (those on $ and jQuery themselves)
*/
interface JQueryStatic {

    /****
     AJAX
    *****/
    ajax(settings: JQueryAjaxSettings): JQueryXHR;
    ajax( url: string, settings: JQueryAjaxSettings ): JQueryXHR;

    ajaxPrefilter(dataTypes: string, handler: (opts: any, originalOpts: any, jqXHR: JQueryXHR) => any): any;
    ajaxPrefilter(handler: (opts: any, originalOpts: any, jqXHR: JQueryXHR) => any): any;

    ajaxSetup(options: any): void;

    get(url: string, data?: any, success?: any, dataType?: any): JQueryXHR;
    getJSON(url: string, data?: any, success?: any): JQueryXHR;
    getScript(url: string, success?: any): JQueryXHR;

    param(obj: any): string;
    param(obj: any, traditional: boolean): string;

    post(url: string, data?: any, success?: any, dataType?: any): JQueryXHR;

    /*********
     CALLBACKS
    **********/
    Callbacks(flags: any): JQueryCallback;

    /****
     CORE
    *****/
    holdReady(hold: boolean): any;

    (selector: string, context?: any): JQuery;
    (element: Element): JQuery;
    (object: { }): JQuery;
    (elementArray: Element[]): JQuery;
    (object: JQuery): JQuery;
    (func: Function): JQuery;
    (): JQuery;

    noConflict(removeAll?: boolean): Object;

    when(...deferreds: any[]): JQueryPromise;

    /***
     CSS
    ****/
    css(e: any, propertyName: string, value?: any): void;
    css(e: any, propertyName: any, value?: any): void;
    cssHooks: { [key: string]: any; };

    /****
     DATA
    *****/
    data(element: Element, key: string, value: any): Object;

    dequeue(element: Element, queueName?: string): any;

    hasData(element: Element): boolean;

    queue(element: Element, queueName?: string): any[];
    queue(element: Element, queueName: string, newQueueOrCallback: any): JQuery;

    removeData(element: Element, name?: string): JQuery;

    /*******
     EFFECTS
    ********/
    fx: { tick: () => void; interval: number; stop: () => void; speeds: { slow: number; fast: number; }; off: boolean; step: any; };

    /******
     EVENTS
    *******/
    proxy(func: Function, context: any): any;
    proxy(context: any, name: string): any;

    /*********
     INTERNALS
    **********/
    error(message: any): void;
    
    /*************
     MISCELLANEOUS
    **************/
    expr: any;
    fn: any;  //TODO: Decide how we want to type this
    isReady: boolean;

    /**********
     PROPERTIES
    ***********/
    browser: JQueryBrowserInfo;
    support: JQuerySupport;

    /*********
     UTILITIES
    **********/
    contains(container: Element, contained: Element): boolean;

    each(collection: any, callback: (indexInArray: any, valueOfElement: any) => any): any;

    extend(target: any, ...objs: any[]): any;
    extend(deep: boolean, target: any, ...objs: any[]): any;

    globalEval(code: string): any;

    grep(array: any[], func: any, invert: boolean): any[];

    inArray(value: any, array: any[], fromIndex?: number): number;

    isArray(obj: any): boolean;
    isEmptyObject(obj: any): boolean;
    isFunction(obj: any): boolean;
    isNumeric(value: any): boolean;
    isPlainObject(obj: any): boolean;
    isWindow(obj: any): boolean;
    isXMLDoc(node: Node): boolean;

    makeArray(obj: any): any[];
		makeArray<T>( obj: { length: number; [index: number]: T; } ): T[];

		map<T, U>( array: T[], callback: ( elementOfArray: T, indexInArray: number ) => U ): U[];
		map<T, U>( array: T[], callback: ( elementOfArray: T, indexInArray: number ) => U[] ): U[];
    map(obj: any, callback: (value: any, key: string) =>any): any[];
    
    merge(first: any[], second: any[]): any[];

    noop(): any;

    now(): number;

    parseJSON(json: string): any;

    //FIXME: This should return an XMLDocument
    parseXML(data: string): any;

    queue(element: Element, queueName: string, newQueue: any[]): JQuery;

    trim(str: string): string;

    type(obj: any): string;

    unique(arr: any[]): any[];
}

/*
    The jQuery instance members
*/
interface JQuery {
    /****
     AJAX
    *****/
    ajaxComplete(handler: any): JQuery;
    ajaxError(handler: (evt: any, xhr: any, opts: any) => any): JQuery;
    ajaxSend(handler: (evt: any, xhr: any, opts: any) => any): JQuery;
    ajaxStart(handler: () => any): JQuery;
    ajaxStop(handler: () => any): JQuery;
    ajaxSuccess(handler: (evt: any, xml: any, opts: any) => any): JQuery;

    load(url: string, data?: any, complete?: any): JQuery;

    serialize(): string;
    serializeArray(): any[];

    /**********
     ATTRIBUTES
    ***********/
    addClass(classNames: string): JQuery;
    addClass(func: (index: any, currentClass: any) => JQuery): JQuery;

    attr(attributeName: string): string;
    attr(attributeName: string, value: any): JQuery;
    attr(map: { [key: string]: any; }): JQuery;
    attr(attributeName: string, func: (index: any, attr: any) => any): JQuery;

    hasClass(className: string): boolean;

    html(htmlString: string): JQuery;
    html(): string;

    prop(propertyName: string): string;
    prop(propertyName: string, value: any): JQuery;
    prop(map: any): JQuery;
    prop(propertyName: string, func: (index: any, oldPropertyValue: any) => any): JQuery;

    removeAttr(attributeName: any): JQuery;

    removeClass(className?: any): JQuery;
    removeClass(func: (index: any, cls: any) => any): JQuery;

    removeProp(propertyName: any): JQuery;

    toggleClass(className: any, swtch?: boolean): JQuery;
    toggleClass(swtch?: boolean): JQuery;
    toggleClass(func: (index: any, cls: any, swtch: any) => any): JQuery;

    val(): any;
    val(value: string[]): JQuery;
    val(value: string): JQuery;
    val(func: (index: any, value: any) => any): JQuery;

    /***
     CSS
    ****/
		css( map: { [propertyName: string]: any } ): JQuery;
    css(propertyName: string, value: any): JQuery;
    css(propertyName: string): string;
		css(propertyNames: string[]): string[];
    
    height(): number;
    height(value: number): JQuery;
    height(func: (index: any, height: any) => any): JQuery;

    innerHeight(): number;
    innerWidth(): number;

    offset(): { top: number; left: number; };
    offset(coordinates: any): JQuery;
    offset(func: (index: any, coords: any) => any): JQuery;

    outerHeight(includeMargin?: boolean): number;
    outerWidth(includeMargin?: boolean): number;

    position(): { top: number; left: number; };

    scrollLeft(): number;
    scrollLeft(value: number): JQuery;

    scrollTop(): number;
    scrollTop(value: number): JQuery;

    width(): number;
    width(value: number): JQuery;
    width(func: (index: any, height: any) => any): JQuery;

    /****
     DATA
    *****/
    clearQueue(queueName?: string): JQuery;

    data(key: string, value: any): JQuery;
    data(obj: { [key: string]: any; }): JQuery;
    data(key?: string): any;

    dequeue(queueName?: string): JQuery;

    removeData(nameOrList?: any): JQuery;

    /********
     DEFERRED
    *********/
    promise(type?: any, target?: any): JQueryPromise;

    /*******
     EFFECTS
    ********/
    animate(properties: any, duration?: any, easing?: string, complete?: Function): JQuery;
    animate(properties: any, options: { duration?: any; easing?: string; complete?: Function; step?: Function; queue?: boolean; specialEasing?: any; }): JQuery;

    delay(duration: number, queueName?: string): JQuery;

    fadeIn(duration?: any, callback?: any): JQuery;
    fadeIn(duration?: any, easing?: string, callback?: any): JQuery;

    fadeOut(duration?: any, callback?: any): JQuery;
    fadeOut(duration?: any, easing?: string, callback?: any): JQuery;

    fadeTo(duration: any, opacity: number, callback?: any): JQuery;
    fadeTo(duration: any, opacity: number, easing?: string, callback?: any): JQuery;

    fadeToggle(duration?: any, easing?: string, callback?: any): JQuery;

    hide(duration?: any, callback?: any): JQuery;
    hide(duration?: any, easing?: string, callback?: any): JQuery;

    show(duration?: any, callback?: any): JQuery;
    show(duration?: any, easing?: string, callback?: any): JQuery;

    slideDown(duration?: any, callback?: any): JQuery;
    slideDown(duration?: any, easing?: string, callback?: any): JQuery;

    slideToggle(duration?: any, callback?: any): JQuery;
    slideToggle(duration?: any, easing?: string, callback?: any): JQuery;

    slideUp(duration?: any, callback?: any): JQuery;
    slideUp(duration?: any, easing?: string, callback?: any): JQuery;

    stop(clearQueue?: boolean, jumpToEnd?: boolean): JQuery;
    stop(queue?:any, clearQueue?: boolean, jumpToEnd?: boolean): JQuery;

    toggle(duration?: any, callback?: any): JQuery;
    toggle(duration?: any, easing?: string, callback?: any): JQuery;
    toggle(showOrHide: boolean): JQuery;

    /******
     EVENTS
    *******/
    bind(eventType: string, eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    bind(eventType: string, eventData: any, preventBubble:boolean): JQuery;
    bind(eventType: string, preventBubble:boolean): JQuery;
    bind(...events: any[]): JQuery;

    blur(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    blur(handler: (eventObject: JQueryEventObject) => any): JQuery;

    change(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    change(handler: (eventObject: JQueryEventObject) => any): JQuery;

    click(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    click(handler: (eventObject: JQueryEventObject) => any): JQuery;

    dblclick(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    dblclick(handler: (eventObject: JQueryEventObject) => any): JQuery;

    delegate(selector: any, eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;


    focus(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    focus(handler: (eventObject: JQueryEventObject) => any): JQuery;

    focusin(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    focusin(handler: (eventObject: JQueryEventObject) => any): JQuery;

    focusout(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    focusout(handler: (eventObject: JQueryEventObject) => any): JQuery;

    hover(handlerIn: (eventObject: JQueryEventObject) => any, handlerOut: (eventObject: JQueryEventObject) => any): JQuery;
    hover(handlerInOut: (eventObject: JQueryEventObject) => any): JQuery;

    keydown(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    keydown(handler: (eventObject: JQueryEventObject) => any): JQuery;

    keypress(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    keypress(handler: (eventObject: JQueryEventObject) => any): JQuery;

    keyup(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    keyup(handler: (eventObject: JQueryEventObject) => any): JQuery;

    mousedown(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    mousedown(handler: (eventObject: JQueryEventObject) => any): JQuery;

    mouseevent(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    mouseevent(handler: (eventObject: JQueryEventObject) => any): JQuery;

    mouseenter(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    mouseenter(handler: (eventObject: JQueryEventObject) => any): JQuery;

    mouseleave(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    mouseleave(handler: (eventObject: JQueryEventObject) => any): JQuery;

    mousemove(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    mousemove(handler: (eventObject: JQueryEventObject) => any): JQuery;

    mouseout(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    mouseout(handler: (eventObject: JQueryEventObject) => any): JQuery;

    mouseover(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    mouseover(handler: (eventObject: JQueryEventObject) => any): JQuery;

    mouseup(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    mouseup(handler: (eventObject: JQueryEventObject) => any): JQuery;

    off(events?: string, selector?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    off(eventsMap: {}, selector?: any): JQuery;

    on(events: string, selector?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    on(events: string, selector?: any, data?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    on(eventsMap: {}, selector?: any, data?: any): JQuery;

    one(events: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    one(events: string, selector?: any, data?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    one(eventsMap: {}, selector?: any, data?: any): JQuery;

    ready(handler: any): JQuery;

    resize(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    resize(handler: (eventObject: JQueryEventObject) => any): JQuery;

    scroll(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    scroll(handler: (eventObject: JQueryEventObject) => any): JQuery;

    select(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    select(handler: (eventObject: JQueryEventObject) => any): JQuery;

    submit(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    submit(handler: (eventObject: JQueryEventObject) => any): JQuery;

    trigger(eventType: string, ...extraParameters: any[]): JQuery;
    trigger(event: JQueryEventObject): JQuery;

    triggerHandler(eventType: string, ...extraParameters: any[]): Object;

    unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    unbind(eventType: string, fls: boolean): JQuery;
    unbind(evt: any): JQuery;

    undelegate(): JQuery;
    undelegate(selector: any, eventType: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    undelegate(selector: any, events: any): JQuery;
    undelegate(namespace: string): JQuery;

    /*********
     INTERNALS
    **********/
    
    context: Element;
    jquery: string;
    pushStack(elements: any[]): JQuery;
    pushStack(elements: any[], name: any, arguments: any): JQuery;

    /************
     MANIPULATION
    *************/
    after(...content: any[]): JQuery;
    after(func: (index: any) => any): JQuery;

    append(...content: any[]): JQuery;
    append(func: (index: any, html: any) => any): JQuery;

    appendTo(target: any): JQuery;

    before(...content: any[]): JQuery;
    before(func: (index: any) => any): JQuery;

    clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): JQuery;

    detach(selector?: any): JQuery;

    empty(): JQuery;

    insertAfter(target: any): JQuery;
    insertBefore(target: any): JQuery;

    prepend(...content: any[]): JQuery;
    prepend(func: (index: any, html: any) =>any): JQuery;

    prependTo(target: any): JQuery;

    remove(selector?: any): JQuery;

    replaceAll(target: any): JQuery;

    replaceWith(func: any): JQuery;
    
    text(textString: string): JQuery;
    text(): string;

    toArray(): HTMLElement[];

    unwrap(): JQuery;

    wrap(wrappingElement: any): JQuery;
    wrap(func: (index: any) =>any): JQuery;

    wrapAll(wrappingElement: any): JQuery;

    wrapInner(wrappingElement: any): JQuery;
    wrapInner(func: (index: any) =>any): JQuery;

    /*************
     MISCELLANEOUS
    **************/
    each(func: (index: any, elem: Element) => void): JQuery;
    
    get(index?: number): any;
    
    index(selectorOrElement?: any): number;

    /**********
     PROPERTIES
    ***********/
    length: number;
    //[x: string]: HTMLElement;
    [x: number]: HTMLElement;

    /**********
     TRAVERSING
    ***********/
    add(selector: string, context?: any): JQuery;
    add(...elements: any[]): JQuery;
    add(html: string): JQuery;
    add(obj: JQuery): JQuery;

    andSelf(): JQuery;

    children(selector?: any): JQuery;

    closest(selector: string): JQuery;
    closest(selector: string, context?: Element): JQuery;
    closest(obj: JQuery): JQuery;
    closest(element: any): JQuery;
    closest(selectors: any, context?: Element): any[];

    contents(): JQuery;

    end(): JQuery;

    eq(index: number): JQuery;

    filter(selector: string): JQuery;
    filter(func: (index: any) =>any): JQuery;
    filter(element: any): JQuery;
    filter(obj: JQuery): JQuery;

    find(selector: string): JQuery;
    find(element: any): JQuery;
    find(obj: JQuery): JQuery;

    first(): JQuery;

    has(selector: string): JQuery;
    has(contained: Element): JQuery;

    is(selector: string): boolean;
    is(func: (index: any) =>any): boolean;
    is(element: any): boolean;
    is(obj: JQuery): boolean;

    last(): JQuery;

    map(callback: (index: any, domElement: Element) =>any): JQuery;

    next(selector?: string): JQuery;
    
    nextAll(selector?: string): JQuery;

    nextUntil(selector?: string, filter?: string): JQuery;
    nextUntil(element?: Element, filter?: string): JQuery;

    not(selector: string): JQuery;
    not(func: (index: any) =>any): JQuery;
    not(element: any): JQuery;
    not(obj: JQuery): JQuery;

    offsetParent(): JQuery;

    parent(selector?: string): JQuery;

    parents(selector?: string): JQuery;

    parentsUntil(selector?: string, filter?: string): JQuery;
    parentsUntil(element?: Element, filter?: string): JQuery;
    parentsUntil(element?: JQuery, filter?: string): JQuery;

    prev(selector?: string): JQuery;

    prevAll(selector?: string): JQuery;

    prevUntil(selector?: string, filter?:string): JQuery;
    prevUntil(element?: Element, filter?:string): JQuery;

    siblings(selector?: string): JQuery;

    slice(start: number, end?: number): JQuery;

    /*********
     UTILITIES
    **********/
    
    queue(queueName?: string): any[];
    queue(queueName: string, newQueueOrCallback: any): JQuery;
    queue(newQueueOrCallback: any): JQuery;
}

declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;