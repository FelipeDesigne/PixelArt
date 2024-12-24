var e,t=Object.defineProperty,n=(e,n,r)=>((e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r)(e,"symbol"!=typeof n?n+"":n,r);function r(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var s={exports:{}},l={},c={exports:{}},u={},d=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),y=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,E={};function j(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||S}function O(){}function T(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||S}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var C=T.prototype=new O;C.constructor=T,k(C,j.prototype),C.isPureReactComponent=!0;var N=Array.isArray,P=Object.prototype.hasOwnProperty,A={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function M(e,t,n){var r,i={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)P.call(t,r)&&!I.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:d,type:e,key:o,ref:a,props:i,_owner:A.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===d}var R=/\/+/g;function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function U(e,t,n,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case d:case h:a=!0}}if(a)return i=i(a=e),e=""===r?"."+L(a,0):r,N(i)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),U(i,t,n,"",(function(e){return e}))):null!=i&&(D(i)&&(i=function(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=""===r?".":r+":",N(e))for(var s=0;s<e.length;s++){var l=r+L(o=e[s],s);a+=U(o,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=_&&e[_]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(o=e.next()).done;)a+=U(o=o.value,t,n,l=r+L(o,s++),i);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function F(e,t,n){if(null==e)return e;var r=[],i=0;return U(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},B={transition:null},V={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:B,ReactCurrentOwner:A};function q(){throw Error("act(...) is not supported in production builds of React.")}u.Children={map:F,forEach:function(e,t,n){F(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return F(e,(function(){t++})),t},toArray:function(e){return F(e,(function(e){return e}))||[]},only:function(e){if(!D(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},u.Component=j,u.Fragment=f,u.Profiler=m,u.PureComponent=T,u.StrictMode=p,u.Suspense=b,u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,u.act=q,u.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=k({},e.props),i=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=A.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)P.call(t,l)&&!I.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:d,type:e.type,key:i,ref:o,props:r,_owner:a}},u.createContext=function(e){return(e={$$typeof:y,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:g,_context:e},e.Consumer=e},u.createElement=M,u.createFactory=function(e){var t=M.bind(null,e);return t.type=e,t},u.createRef=function(){return{current:null}},u.forwardRef=function(e){return{$$typeof:v,render:e}},u.isValidElement=D,u.lazy=function(e){return{$$typeof:x,_payload:{_status:-1,_result:e},_init:z}},u.memo=function(e,t){return{$$typeof:w,type:e,compare:void 0===t?null:t}},u.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},u.unstable_act=q,u.useCallback=function(e,t){return $.current.useCallback(e,t)},u.useContext=function(e){return $.current.useContext(e)},u.useDebugValue=function(){},u.useDeferredValue=function(e){return $.current.useDeferredValue(e)},u.useEffect=function(e,t){return $.current.useEffect(e,t)},u.useId=function(){return $.current.useId()},u.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},u.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},u.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},u.useMemo=function(e,t){return $.current.useMemo(e,t)},u.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},u.useRef=function(e){return $.current.useRef(e)},u.useState=function(e){return $.current.useState(e)},u.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},u.useTransition=function(){return $.current.useTransition()},u.version="18.3.1",c.exports=u;var W=c.exports;const H=o(W),K=r({__proto__:null,default:H},[W]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G=W,Y=Symbol.for("react.element"),Q=Symbol.for("react.fragment"),X=Object.prototype.hasOwnProperty,J=G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,t,n){var r,i={},o=null,a=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(a=t.ref),t)X.call(t,r)&&!Z.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:Y,type:e,key:o,ref:a,props:i,_owner:J.current}}l.Fragment=Q,l.jsx=ee,l.jsxs=ee,s.exports=l;var te=s.exports,ne={exports:{}},re={},ie={exports:{}},oe={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>i(l,n))c<o&&0>i(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,d=null,h=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function b(e){for(var i=n(c);null!==i;){if(null===i.callback)r(c);else{if(!(i.startTime<=e))break;r(c),i.sortIndex=i.expirationTime,t(l,i)}i=n(c)}}function w(e){if(m=!1,b(e),!p)if(null!==n(l))p=!0,A(x);else{var t=n(c);null!==t&&I(w,t.startTime-e)}}function x(t,i){p=!1,m&&(m=!1,y(E),E=-1),f=!0;var o=h;try{for(b(i),d=n(l);null!==d&&(!(d.expirationTime>i)||t&&!T());){var a=d.callback;if("function"==typeof a){d.callback=null,h=d.priorityLevel;var s=a(d.expirationTime<=i);i=e.unstable_now(),"function"==typeof s?d.callback=s:d===n(l)&&r(l),b(i)}else r(l);d=n(l)}if(null!==d)var u=!0;else{var g=n(c);null!==g&&I(w,g.startTime-i),u=!1}return u}finally{d=null,h=o,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var _,S=!1,k=null,E=-1,j=5,O=-1;function T(){return!(e.unstable_now()-O<j)}function C(){if(null!==k){var t=e.unstable_now();O=t;var n=!0;try{n=k(!0,t)}finally{n?_():(S=!1,k=null)}}else S=!1}if("function"==typeof v)_=function(){v(C)};else if("undefined"!=typeof MessageChannel){var N=new MessageChannel,P=N.port2;N.port1.onmessage=C,_=function(){P.postMessage(null)}}else _=function(){g(C,0)};function A(e){k=e,S||(S=!0,_())}function I(t,n){E=g((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,A(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},e.unstable_scheduleCallback=function(r,i,o){var a=e.unstable_now();switch("object"==typeof o&&null!==o?o="number"==typeof(o=o.delay)&&0<o?a+o:a:o=a,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return r={id:u++,callback:i,priorityLevel:r,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(r.sortIndex=o,t(c,r),null===n(l)&&r===n(c)&&(m?(y(E),E=-1):m=!0,I(w,o-a))):(r.sortIndex=s,t(l,r),p||f||(p=!0,A(x))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}}(oe),ie.exports=oe;var ae=ie.exports,se=W,le=ae;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ce(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ue=new Set,de={};function he(e,t){fe(e,t),fe(e+"Capture",t)}function fe(e,t){for(de[e]=t,e=0;e<t.length;e++)ue.add(t[e])}var pe=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),me=Object.prototype.hasOwnProperty,ge=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ye={},ve={};function be(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){we[e]=new be(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];we[t]=new be(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){we[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){we[e]=new be(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){we[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){we[e]=new be(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){we[e]=new be(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){we[e]=new be(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){we[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)}));var xe=/[\-:]([a-z])/g;function _e(e){return e[1].toUpperCase()}function Se(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!me.call(ve,e)||!me.call(ye,e)&&(ge.test(e)?ve[e]=!0:(ye[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(xe,_e);we[t]=new be(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(xe,_e);we[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(xe,_e);we[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){we[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)})),we.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){we[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)}));var ke=se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),je=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),Ce=Symbol.for("react.profiler"),Ne=Symbol.for("react.provider"),Pe=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),Ue=Symbol.iterator;function Fe(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Ue&&e[Ue]||e["@@iterator"])?e:null}var ze,$e=Object.assign;function Be(e){if(void 0===ze)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ze=t&&t[1]||""}return"\n"+ze+e}var Ve=!1;function qe(e,t){if(!e||Ve)return"";Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(qj){var r=qj}Reflect.construct(e,[],t)}else{try{t.call()}catch(qj){r=qj}e.call(t.prototype)}else{try{throw Error()}catch(qj){r=qj}e()}}catch(qj){if(qj&&r&&"string"==typeof qj.stack){for(var i=qj.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Be(e):""}function We(e){switch(e.tag){case 5:return Be(e.type);case 16:return Be("Lazy");case 13:return Be("Suspense");case 19:return Be("SuspenseList");case 0:case 2:case 15:return e=qe(e.type,!1);case 11:return e=qe(e.type.render,!1);case 1:return e=qe(e.type,!0);default:return""}}function He(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case Oe:return"Fragment";case je:return"Portal";case Ce:return"Profiler";case Te:return"StrictMode";case Ie:return"Suspense";case Me:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Pe:return(e.displayName||"Context")+".Consumer";case Ne:return(e._context.displayName||"Context")+".Provider";case Ae:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case De:return null!==(t=e.displayName||null)?t:He(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return He(e(t))}catch(n){}}return null}function Ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return He(t);case 8:return t===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function Ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function Ye(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Qe(e){e._valueTracker||(e._valueTracker=function(e){var t=Ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Xe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ye(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Je(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Ze(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function et(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Ge(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function tt(e,t){null!=(t=t.checked)&&Se(e,"checked",t,!1)}function nt(e,t){tt(e,t);var n=Ge(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?it(e,t.type,n):t.hasOwnProperty("defaultValue")&&it(e,t.type,Ge(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function rt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function it(e,t,n){"number"===t&&Je(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ot=Array.isArray;function at(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ge(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function st(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(ce(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lt(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(ce(92));if(ot(n)){if(1<n.length)throw Error(ce(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Ge(n)}}function ct(e,t){var n=Ge(t.value),r=Ge(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ut(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function dt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?dt(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ft,pt,mt=(pt=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ft=ft||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ft.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return pt(e,t)}))}:pt);function gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vt=["Webkit","ms","Moz","O"];function bt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||yt.hasOwnProperty(e)&&yt[e]?(""+t).trim():t+"px"}function wt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=bt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(yt).forEach((function(e){vt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yt[t]=yt[e]}))}));var xt=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(e,t){if(t){if(xt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(ce(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(ce(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(ce(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(ce(62))}}function St(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kt=null;function Et(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var jt=null,Ot=null,Tt=null;function Ct(e){if(e=ko(e)){if("function"!=typeof jt)throw Error(ce(280));var t=e.stateNode;t&&(t=jo(t),jt(e.stateNode,e.type,t))}}function Nt(e){Ot?Tt?Tt.push(e):Tt=[e]:Ot=e}function Pt(){if(Ot){var e=Ot,t=Tt;if(Tt=Ot=null,Ct(e),t)for(e=0;e<t.length;e++)Ct(t[e])}}function At(e,t){return e(t)}function It(){}var Mt=!1;function Dt(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return At(e,t,n)}finally{Mt=!1,(null!==Ot||null!==Tt)&&(It(),Pt())}}function Rt(e,t){var n=e.stateNode;if(null===n)return null;var r=jo(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(ce(231,t,typeof n));return n}var Lt=!1;if(pe)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Lt=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch(pt){Lt=!1}function Ft(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var zt=!1,$t=null,Bt=!1,Vt=null,qt={onError:function(e){zt=!0,$t=e}};function Wt(e,t,n,r,i,o,a,s,l){zt=!1,$t=null,Ft.apply(qt,arguments)}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Kt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Gt(e){if(Ht(e)!==e)throw Error(ce(188))}function Yt(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ht(e)))throw Error(ce(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Gt(i),e;if(o===r)return Gt(i),t;o=o.sibling}throw Error(ce(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==r)throw Error(ce(190))}if(3!==n.tag)throw Error(ce(188));return n.stateNode.current===n?e:t}(e))?Qt(e):null}function Qt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Qt(e);if(null!==t)return t;e=e.sibling}return null}var Xt=le.unstable_scheduleCallback,Jt=le.unstable_cancelCallback,Zt=le.unstable_shouldYield,en=le.unstable_requestPaint,tn=le.unstable_now,nn=le.unstable_getCurrentPriorityLevel,rn=le.unstable_ImmediatePriority,on=le.unstable_UserBlockingPriority,an=le.unstable_NormalPriority,sn=le.unstable_LowPriority,ln=le.unstable_IdlePriority,cn=null,un=null;var dn=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(hn(e)/fn|0)|0},hn=Math.log,fn=Math.LN2;var pn=64,mn=4194304;function gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=gn(s):0!==(o&=a)&&(r=gn(o))}else 0!==(a=n&~i)?r=gn(a):0!==o&&(r=gn(o));if(0===r)return 0;if(0!==t&&t!==r&&!(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&4194240&o))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-dn(t)),r|=e[n],t&=~i;return r}function vn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function bn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function wn(){var e=pn;return!(4194240&(pn<<=1))&&(pn=64),e}function xn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _n(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-dn(t)]=n}function Sn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var kn=0;function En(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var jn,On,Tn,Cn,Nn,Pn=!1,An=[],In=null,Mn=null,Dn=null,Rn=new Map,Ln=new Map,Un=[],Fn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zn(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ln.delete(t.pointerId)}}function $n(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=ko(t))&&On(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Bn(e){var t=So(e.target);if(null!==t){var n=Ht(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Kt(n)))return e.blockedOn=t,void Nn(e.priority,(function(){Tn(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Vn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=er(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ko(n))&&On(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);kt=r,n.target.dispatchEvent(r),kt=null,t.shift()}return!0}function qn(e,t,n){Vn(e)&&n.delete(t)}function Wn(){Pn=!1,null!==In&&Vn(In)&&(In=null),null!==Mn&&Vn(Mn)&&(Mn=null),null!==Dn&&Vn(Dn)&&(Dn=null),Rn.forEach(qn),Ln.forEach(qn)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Pn||(Pn=!0,le.unstable_scheduleCallback(le.unstable_NormalPriority,Wn)))}function Kn(e){function t(t){return Hn(t,e)}if(0<An.length){Hn(An[0],e);for(var n=1;n<An.length;n++){var r=An[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==In&&Hn(In,e),null!==Mn&&Hn(Mn,e),null!==Dn&&Hn(Dn,e),Rn.forEach(t),Ln.forEach(t),n=0;n<Un.length;n++)(r=Un[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&null===(n=Un[0]).blockedOn;)Bn(n),null===n.blockedOn&&Un.shift()}var Gn=ke.ReactCurrentBatchConfig,Yn=!0;function Qn(e,t,n,r){var i=kn,o=Gn.transition;Gn.transition=null;try{kn=1,Jn(e,t,n,r)}finally{kn=i,Gn.transition=o}}function Xn(e,t,n,r){var i=kn,o=Gn.transition;Gn.transition=null;try{kn=4,Jn(e,t,n,r)}finally{kn=i,Gn.transition=o}}function Jn(e,t,n,r){if(Yn){var i=er(e,t,n,r);if(null===i)Gi(e,t,r,Zn,n),zn(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return In=$n(In,e,t,n,r,i),!0;case"dragenter":return Mn=$n(Mn,e,t,n,r,i),!0;case"mouseover":return Dn=$n(Dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rn.set(o,$n(Rn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ln.set(o,$n(Ln.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(zn(e,r),4&t&&-1<Fn.indexOf(e)){for(;null!==i;){var o=ko(i);if(null!==o&&jn(o),null===(o=er(e,t,n,r))&&Gi(e,t,r,Zn,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Gi(e,t,r,null,n)}}var Zn=null;function er(e,t,n,r){if(Zn=null,null!==(e=So(e=Et(r))))if(null===(t=Ht(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Kt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zn=e,null}function tr(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nn()){case rn:return 1;case on:return 4;case an:case sn:return 16;case ln:return 536870912;default:return 16}default:return 16}}var nr=null,rr=null,ir=null;function or(){if(ir)return ir;var e,t,n=rr,r=n.length,i="value"in nr?nr.value:nr.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return ir=i.slice(e,1<t?1-t:void 0)}function ar(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function sr(){return!0}function lr(){return!1}function cr(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?sr:lr,this.isPropagationStopped=lr,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var ur,dr,hr,fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pr=cr(fr),mr=$e({},fr,{view:0,detail:0}),gr=cr(mr),yr=$e({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&"mousemove"===e.type?(ur=e.screenX-hr.screenX,dr=e.screenY-hr.screenY):dr=ur=0,hr=e),ur)},movementY:function(e){return"movementY"in e?e.movementY:dr}}),vr=cr(yr),br=cr($e({},yr,{dataTransfer:0})),wr=cr($e({},mr,{relatedTarget:0})),xr=cr($e({},fr,{animationName:0,elapsedTime:0,pseudoElement:0})),_r=$e({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sr=cr(_r),kr=cr($e({},fr,{data:0})),Er={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Or={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Or[e])&&!!t[e]}function Cr(){return Tr}var Nr=$e({},mr,{key:function(e){if(e.key){var t=Er[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=ar(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?jr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(e){return"keypress"===e.type?ar(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?ar(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pr=cr(Nr),Ar=cr($e({},yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ir=cr($e({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr})),Mr=cr($e({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Dr=$e({},yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rr=cr(Dr),Lr=[9,13,27,32],Ur=pe&&"CompositionEvent"in window,Fr=null;pe&&"documentMode"in document&&(Fr=document.documentMode);var zr=pe&&"TextEvent"in window&&!Fr,$r=pe&&(!Ur||Fr&&8<Fr&&11>=Fr),Br=String.fromCharCode(32),Vr=!1;function qr(e,t){switch(e){case"keyup":return-1!==Lr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Hr=!1;var Kr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Kr[e.type]:"textarea"===t}function Yr(e,t,n,r){Nt(r),0<(t=Qi(t,"onChange")).length&&(n=new pr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,Xr=null;function Jr(e){Bi(e,0)}function Zr(e){if(Xe(Eo(e)))return e}function ei(e,t){if("change"===e)return t}var ti=!1;if(pe){var ni;if(pe){var ri="oninput"in document;if(!ri){var ii=document.createElement("div");ii.setAttribute("oninput","return;"),ri="function"==typeof ii.oninput}ni=ri}else ni=!1;ti=ni&&(!document.documentMode||9<document.documentMode)}function oi(){Qr&&(Qr.detachEvent("onpropertychange",ai),Xr=Qr=null)}function ai(e){if("value"===e.propertyName&&Zr(Xr)){var t=[];Yr(t,Xr,e,Et(e)),Dt(Jr,t)}}function si(e,t,n){"focusin"===e?(oi(),Xr=n,(Qr=t).attachEvent("onpropertychange",ai)):"focusout"===e&&oi()}function li(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Zr(Xr)}function ci(e,t){if("click"===e)return Zr(t)}function ui(e,t){if("input"===e||"change"===e)return Zr(t)}var di="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function hi(e,t){if(di(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!me.call(t,i)||!di(e[i],t[i]))return!1}return!0}function fi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pi(e,t){var n,r=fi(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fi(r)}}function mi(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?mi(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function gi(){for(var e=window,t=Je();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Je((e=t.contentWindow).document)}return t}function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function vi(e){var t=gi(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mi(n.ownerDocument.documentElement,n)){if(null!==r&&yi(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pi(n,o);var a=pi(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bi=pe&&"documentMode"in document&&11>=document.documentMode,wi=null,xi=null,_i=null,Si=!1;function ki(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Si||null==wi||wi!==Je(r)||("selectionStart"in(r=wi)&&yi(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},_i&&hi(_i,r)||(_i=r,0<(r=Qi(xi,"onSelect")).length&&(t=new pr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wi)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ji={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},Oi={},Ti={};function Ci(e){if(Oi[e])return Oi[e];if(!ji[e])return e;var t,n=ji[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ti)return Oi[e]=n[t];return e}pe&&(Ti=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);var Ni=Ci("animationend"),Pi=Ci("animationiteration"),Ai=Ci("animationstart"),Ii=Ci("transitionend"),Mi=new Map,Di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(e,t){Mi.set(e,t),he(t,[e])}for(var Li=0;Li<Di.length;Li++){var Ui=Di[Li];Ri(Ui.toLowerCase(),"on"+(Ui[0].toUpperCase()+Ui.slice(1)))}Ri(Ni,"onAnimationEnd"),Ri(Pi,"onAnimationIteration"),Ri(Ai,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Ii,"onTransitionEnd"),fe("onMouseEnter",["mouseout","mouseover"]),fe("onMouseLeave",["mouseout","mouseover"]),fe("onPointerEnter",["pointerout","pointerover"]),fe("onPointerLeave",["pointerout","pointerover"]),he("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),he("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),he("onBeforeInput",["compositionend","keypress","textInput","paste"]),he("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zi=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function $i(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,a,s,l){if(Wt.apply(this,arguments),zt){if(!zt)throw Error(ce(198));var c=$t;zt=!1,$t=null,Bt||(Bt=!0,Vt=c)}}(r,t,void 0,e),e.currentTarget=null}function Bi(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;$i(i,s,c),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;$i(i,s,c),o=l}}}if(Bt)throw e=Vt,Bt=!1,Vt=null,e}function Vi(e,t){var n=t[wo];void 0===n&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(Ki(t,e,2,!1),n.add(r))}function qi(e,t,n){var r=0;t&&(r|=4),Ki(n,e,r,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function Hi(e){if(!e[Wi]){e[Wi]=!0,ue.forEach((function(t){"selectionchange"!==t&&(zi.has(t)||qi(t,!1,e),qi(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Wi]||(t[Wi]=!0,qi("selectionchange",!1,t))}}function Ki(e,t,n,r){switch(tr(t)){case 1:var i=Qn;break;case 4:i=Xn;break;default:i=Jn}n=i.bind(null,t,n,e),i=void 0,!Lt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Gi(e,t,n,r,i){var o=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=So(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}Dt((function(){var r=o,i=Et(n),a=[];e:{var s=Mi.get(e);if(void 0!==s){var l=pr,c=e;switch(e){case"keypress":if(0===ar(n))break e;case"keydown":case"keyup":l=Pr;break;case"focusin":c="focus",l=wr;break;case"focusout":c="blur",l=wr;break;case"beforeblur":case"afterblur":l=wr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=vr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=br;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Ir;break;case Ni:case Pi:case Ai:l=xr;break;case Ii:l=Mr;break;case"scroll":l=gr;break;case"wheel":l=Rr;break;case"copy":case"cut":case"paste":l=Sr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Ar}var u=!!(4&t),d=!u&&"scroll"===e,h=u?null!==s?s+"Capture":null:s;u=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=Rt(p,h))&&u.push(Yi(p,m,f)))),d)break;p=p.return}0<u.length&&(s=new l(s,c,null,n,i),a.push({event:s,listeners:u}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===kt||!(c=n.relatedTarget||n.fromElement)||!So(c)&&!c[bo])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?So(c):null)&&(c!==(d=Ht(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=vr,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=Ar,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==l?s:Eo(l),f=null==c?s:Eo(c),(s=new u(m,p+"leave",l,n,i)).target=d,s.relatedTarget=f,m=null,So(i)===r&&((u=new u(h,p+"enter",c,n,i)).target=f,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(h=c,p=0,f=u=l;f;f=Xi(f))p++;for(f=0,m=h;m;m=Xi(m))f++;for(;0<p-f;)u=Xi(u),p--;for(;0<f-p;)h=Xi(h),f--;for(;p--;){if(u===h||null!==h&&u===h.alternate)break e;u=Xi(u),h=Xi(h)}u=null}else u=null;null!==l&&Ji(a,s,l,u,!1),null!==c&&null!==d&&Ji(a,d,c,u,!0)}if("select"===(l=(s=r?Eo(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=ei;else if(Gr(s))if(ti)g=ui;else{g=li;var y=si}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ci);switch(g&&(g=g(e,r))?Yr(a,g,n,i):(y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&it(s,"number",s.value)),y=r?Eo(r):window,e){case"focusin":(Gr(y)||"true"===y.contentEditable)&&(wi=y,xi=r,_i=null);break;case"focusout":_i=xi=wi=null;break;case"mousedown":Si=!0;break;case"contextmenu":case"mouseup":case"dragend":Si=!1,ki(a,n,i);break;case"selectionchange":if(bi)break;case"keydown":case"keyup":ki(a,n,i)}var v;if(Ur)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Hr?qr(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&($r&&"ko"!==n.locale&&(Hr||"onCompositionStart"!==b?"onCompositionEnd"===b&&Hr&&(v=or()):(rr="value"in(nr=i)?nr.value:nr.textContent,Hr=!0)),0<(y=Qi(r,b)).length&&(b=new kr(b,e,null,n,i),a.push({event:b,listeners:y}),v?b.data=v:null!==(v=Wr(n))&&(b.data=v))),(v=zr?function(e,t){switch(e){case"compositionend":return Wr(t);case"keypress":return 32!==t.which?null:(Vr=!0,Br);case"textInput":return(e=t.data)===Br&&Vr?null:e;default:return null}}(e,n):function(e,t){if(Hr)return"compositionend"===e||!Ur&&qr(e,t)?(e=or(),ir=rr=nr=null,Hr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $r&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Qi(r,"onBeforeInput")).length&&(i=new kr("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Bi(a,t)}))}function Yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Rt(e,n))&&r.unshift(Yi(e,o,i)),null!=(o=Rt(e,t))&&r.push(Yi(e,o,i))),e=e.return}return r}function Xi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Ji(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Rt(n,o))&&a.unshift(Yi(n,l,s)):i||null!=(l=Rt(n,o))&&a.push(Yi(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Zi=/\r\n?/g,eo=/\u0000|\uFFFD/g;function to(e){return("string"==typeof e?e:""+e).replace(Zi,"\n").replace(eo,"")}function no(e,t,n){if(t=to(t),to(e)!==t&&n)throw Error(ce(425))}function ro(){}var io=null,oo=null;function ao(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var so="function"==typeof setTimeout?setTimeout:void 0,lo="function"==typeof clearTimeout?clearTimeout:void 0,co="function"==typeof Promise?Promise:void 0,uo="function"==typeof queueMicrotask?queueMicrotask:void 0!==co?function(e){return co.resolve(null).then(e).catch(ho)}:so;function ho(e){setTimeout((function(){throw e}))}function fo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Kn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Kn(t)}function po(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function mo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),yo="__reactFiber$"+go,vo="__reactProps$"+go,bo="__reactContainer$"+go,wo="__reactEvents$"+go,xo="__reactListeners$"+go,_o="__reactHandles$"+go;function So(e){var t=e[yo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bo]||n[yo]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=mo(e);null!==e;){if(n=e[yo])return n;e=mo(e)}return t}n=(e=n).parentNode}return null}function ko(e){return!(e=e[yo]||e[bo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Eo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(ce(33))}function jo(e){return e[vo]||null}var Oo=[],To=-1;function Co(e){return{current:e}}function No(e){0>To||(e.current=Oo[To],Oo[To]=null,To--)}function Po(e,t){To++,Oo[To]=e.current,e.current=t}var Ao={},Io=Co(Ao),Mo=Co(!1),Do=Ao;function Ro(e,t){var n=e.type.contextTypes;if(!n)return Ao;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Lo(e){return null!=(e=e.childContextTypes)}function Uo(){No(Mo),No(Io)}function Fo(e,t,n){if(Io.current!==Ao)throw Error(ce(168));Po(Io,t),Po(Mo,n)}function zo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(ce(108,Ke(e)||"Unknown",i));return $e({},n,r)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ao,Do=Io.current,Po(Io,e),Po(Mo,Mo.current),!0}function Bo(e,t,n){var r=e.stateNode;if(!r)throw Error(ce(169));n?(e=zo(e,t,Do),r.__reactInternalMemoizedMergedChildContext=e,No(Mo),No(Io),Po(Io,e)):No(Mo),Po(Mo,n)}var Vo=null,qo=!1,Wo=!1;function Ho(e){null===Vo?Vo=[e]:Vo.push(e)}function Ko(){if(!Wo&&null!==Vo){Wo=!0;var e=0,t=kn;try{var n=Vo;for(kn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Vo=null,qo=!1}catch($j){throw null!==Vo&&(Vo=Vo.slice(e+1)),Xt(rn,Ko),$j}finally{kn=t,Wo=!1}}return null}var Go=[],Yo=0,Qo=null,Xo=0,Jo=[],Zo=0,ea=null,ta=1,na="";function ra(e,t){Go[Yo++]=Xo,Go[Yo++]=Qo,Qo=e,Xo=t}function ia(e,t,n){Jo[Zo++]=ta,Jo[Zo++]=na,Jo[Zo++]=ea,ea=e;var r=ta;e=na;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var o=32-dn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,ta=1<<32-dn(t)+i|n<<i|r,na=o+e}else ta=1<<o|n<<i|r,na=e}function oa(e){null!==e.return&&(ra(e,1),ia(e,1,0))}function aa(e){for(;e===Qo;)Qo=Go[--Yo],Go[Yo]=null,Xo=Go[--Yo],Go[Yo]=null;for(;e===ea;)ea=Jo[--Zo],Jo[Zo]=null,na=Jo[--Zo],Jo[Zo]=null,ta=Jo[--Zo],Jo[Zo]=null}var sa=null,la=null,ca=!1,ua=null;function da(e,t){var n=Du(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ha(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,sa=e,la=po(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,sa=e,la=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ea?{id:ta,overflow:na}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Du(18,null,null,0)).stateNode=t,n.return=e,e.child=n,sa=e,la=null,!0);default:return!1}}function fa(e){return!(!(1&e.mode)||128&e.flags)}function pa(e){if(ca){var t=la;if(t){var n=t;if(!ha(e,t)){if(fa(e))throw Error(ce(418));t=po(n.nextSibling);var r=sa;t&&ha(e,t)?da(r,n):(e.flags=-4097&e.flags|2,ca=!1,sa=e)}}else{if(fa(e))throw Error(ce(418));e.flags=-4097&e.flags|2,ca=!1,sa=e}}}function ma(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;sa=e}function ga(e){if(e!==sa)return!1;if(!ca)return ma(e),ca=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ao(e.type,e.memoizedProps)),t&&(t=la)){if(fa(e))throw ya(),Error(ce(418));for(;t;)da(e,t),t=po(t.nextSibling)}if(ma(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(ce(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){la=po(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}la=null}}else la=sa?po(e.stateNode.nextSibling):null;return!0}function ya(){for(var e=la;e;)e=po(e.nextSibling)}function va(){la=sa=null,ca=!1}function ba(e){null===ua?ua=[e]:ua.push(e)}var wa=ke.ReactCurrentBatchConfig;function xa(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(ce(309));var r=n.stateNode}if(!r)throw Error(ce(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(ce(284));if(!n._owner)throw Error(ce(290,e))}return e}function _a(e,t){throw e=Object.prototype.toString.call(t),Error(ce(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sa(e){return(0,e._init)(e._payload)}function ka(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Lu(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=$u(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var o=n.type;return o===Oe?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===Re&&Sa(o)===t.type)?((r=i(t,n.props)).ref=xa(e,t,n),r.return=e,r):((r=Uu(n.type,n.key,n.props,null,e.mode,r)).ref=xa(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Bu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,o){return null===t||7!==t.tag?((t=Fu(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=$u(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case Ee:return(n=Uu(t.type,t.key,t.props,null,e.mode,n)).ref=xa(e,null,t),n.return=e,n;case je:return(t=Bu(t,e.mode,n)).return=e,t;case Re:return d(e,(0,t._init)(t._payload),n)}if(ot(t)||Fe(t))return(t=Fu(t,e.mode,n,null)).return=e,t;_a(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case Ee:return n.key===i?l(e,t,n,r):null;case je:return n.key===i?c(e,t,n,r):null;case Re:return h(e,t,(i=n._init)(n._payload),r)}if(ot(n)||Fe(n))return null!==i?null:u(e,t,n,r,null);_a(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case Ee:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case je:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Re:return f(e,t,n,(0,r._init)(r._payload),i)}if(ot(r)||Fe(r))return u(t,e=e.get(n)||null,r,i,null);_a(t,r)}return null}return function s(l,c,u,p){if("object"==typeof u&&null!==u&&u.type===Oe&&null===u.key&&(u=u.props.children),"object"==typeof u&&null!==u){switch(u.$$typeof){case Ee:e:{for(var m=u.key,g=c;null!==g;){if(g.key===m){if((m=u.type)===Oe){if(7===g.tag){n(l,g.sibling),(c=i(g,u.props.children)).return=l,l=c;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===Re&&Sa(m)===g.type){n(l,g.sibling),(c=i(g,u.props)).ref=xa(l,g,u),c.return=l,l=c;break e}n(l,g);break}t(l,g),g=g.sibling}u.type===Oe?((c=Fu(u.props.children,l.mode,p,u.key)).return=l,l=c):((p=Uu(u.type,u.key,u.props,null,l.mode,p)).ref=xa(l,c,u),p.return=l,l=p)}return a(l);case je:e:{for(g=u.key;null!==c;){if(c.key===g){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(c=i(c,u.children||[])).return=l,l=c;break e}n(l,c);break}t(l,c),c=c.sibling}(c=Bu(u,l.mode,p)).return=l,l=c}return a(l);case Re:return s(l,c,(g=u._init)(u._payload),p)}if(ot(u))return function(i,a,s,l){for(var c=null,u=null,p=a,m=a=0,g=null;null!==p&&m<s.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=h(i,p,s[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),a=o(y,a,m),null===u?c=y:u.sibling=y,u=y,p=g}if(m===s.length)return n(i,p),ca&&ra(i,m),c;if(null===p){for(;m<s.length;m++)null!==(p=d(i,s[m],l))&&(a=o(p,a,m),null===u?c=p:u.sibling=p,u=p);return ca&&ra(i,m),c}for(p=r(i,p);m<s.length;m++)null!==(g=f(p,i,m,s[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),a=o(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&p.forEach((function(e){return t(i,e)})),ca&&ra(i,m),c}(l,c,u,p);if(Fe(u))return function(i,a,s,l){var c=Fe(s);if("function"!=typeof c)throw Error(ce(150));if(null==(s=c.call(s)))throw Error(ce(151));for(var u=c=null,p=a,m=a=0,g=null,y=s.next();null!==p&&!y.done;m++,y=s.next()){p.index>m?(g=p,p=null):g=p.sibling;var v=h(i,p,y.value,l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),a=o(v,a,m),null===u?c=v:u.sibling=v,u=v,p=g}if(y.done)return n(i,p),ca&&ra(i,m),c;if(null===p){for(;!y.done;m++,y=s.next())null!==(y=d(i,y.value,l))&&(a=o(y,a,m),null===u?c=y:u.sibling=y,u=y);return ca&&ra(i,m),c}for(p=r(i,p);!y.done;m++,y=s.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),a=o(y,a,m),null===u?c=y:u.sibling=y,u=y);return e&&p.forEach((function(e){return t(i,e)})),ca&&ra(i,m),c}(l,c,u,p);_a(l,u)}return"string"==typeof u&&""!==u||"number"==typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(c=i(c,u)).return=l,l=c):(n(l,c),(c=$u(u,l.mode,p)).return=l,l=c),a(l)):n(l,c)}}var Ea=ka(!0),ja=ka(!1),Oa=Co(null),Ta=null,Ca=null,Na=null;function Pa(){Na=Ca=Ta=null}function Aa(e){var t=Oa.current;No(Oa),e._currentValue=t}function Ia(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ma(e,t){Ta=e,Na=Ca=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(!!(e.lanes&t)&&(Sl=!0),e.firstContext=null)}function Da(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},null===Ca){if(null===Ta)throw Error(ce(308));Ca=e,Ta.dependencies={lanes:0,firstContext:e}}else Ca=Ca.next=e;return t}var Ra=null;function La(e){null===Ra?Ra=[e]:Ra.push(e)}function Ua(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,La(t)):(n.next=i.next,i.next=n),t.interleaved=n,Fa(e,r)}function Fa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var za=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Va(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Ac){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Fa(e,n)}return null===(i=r.interleaved)?(t.next=t,La(r)):(t.next=i.next,i.next=t),r.interleaved=t,Fa(e,n)}function Wa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Sn(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ka(e,t,n,r){var i=e.updateQueue;za=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var h=s.lane,f=s.eventTime;if((r&h)===h){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(h=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(h="function"==typeof(p=m.payload)?p.call(f,d,h):p))break e;d=$e({},d,h);break e;case 2:za=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[s]:h.push(s))}else f={eventTime:f,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,a|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(h=s).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);zc|=a,e.lanes=a,e.memoizedState=d}}function Ga(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(ce(191,i));i.call(r)}}}var Ya={},Qa=Co(Ya),Xa=Co(Ya),Ja=Co(Ya);function Za(e){if(e===Ya)throw Error(ce(174));return e}function es(e,t){switch(Po(Ja,t),Po(Xa,e),Po(Qa,Ya),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ht(null,"");break;default:t=ht(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}No(Qa),Po(Qa,t)}function ts(){No(Qa),No(Xa),No(Ja)}function ns(e){Za(Ja.current);var t=Za(Qa.current),n=ht(t,e.type);t!==n&&(Po(Xa,e),Po(Qa,n))}function rs(e){Xa.current===e&&(No(Qa),No(Xa))}var is=Co(0);function os(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var as=[];function ss(){for(var e=0;e<as.length;e++)as[e]._workInProgressVersionPrimary=null;as.length=0}var ls=ke.ReactCurrentDispatcher,cs=ke.ReactCurrentBatchConfig,us=0,ds=null,hs=null,fs=null,ps=!1,ms=!1,gs=0,ys=0;function vs(){throw Error(ce(321))}function bs(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!di(e[n],t[n]))return!1;return!0}function ws(e,t,n,r,i,o){if(us=o,ds=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ls.current=null===e||null===e.memoizedState?rl:il,e=n(r,i),ms){o=0;do{if(ms=!1,gs=0,25<=o)throw Error(ce(301));o+=1,fs=hs=null,t.updateQueue=null,ls.current=ol,e=n(r,i)}while(ms)}if(ls.current=nl,t=null!==hs&&null!==hs.next,us=0,fs=hs=ds=null,ps=!1,t)throw Error(ce(300));return e}function xs(){var e=0!==gs;return gs=0,e}function _s(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===fs?ds.memoizedState=fs=e:fs=fs.next=e,fs}function Ss(){if(null===hs){var e=ds.alternate;e=null!==e?e.memoizedState:null}else e=hs.next;var t=null===fs?ds.memoizedState:fs.next;if(null!==t)fs=t,hs=e;else{if(null===e)throw Error(ce(310));e={memoizedState:(hs=e).memoizedState,baseState:hs.baseState,baseQueue:hs.baseQueue,queue:hs.queue,next:null},null===fs?ds.memoizedState=fs=e:fs=fs.next=e}return fs}function ks(e,t){return"function"==typeof t?t(e):t}function Es(e){var t=Ss(),n=t.queue;if(null===n)throw Error(ce(311));n.lastRenderedReducer=e;var r=hs,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var u=c.lane;if((us&u)===u)null!==l&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===l?(s=l=d,a=r):l=l.next=d,ds.lanes|=u,zc|=u}c=c.next}while(null!==c&&c!==o);null===l?a=r:l.next=s,di(r,t.memoizedState)||(Sl=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,ds.lanes|=o,zc|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function js(e){var t=Ss(),n=t.queue;if(null===n)throw Error(ce(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{o=e(o,a.action),a=a.next}while(a!==i);di(o,t.memoizedState)||(Sl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Os(){}function Ts(e,t){var n=ds,r=Ss(),i=t(),o=!di(r.memoizedState,i);if(o&&(r.memoizedState=i,Sl=!0),r=r.queue,zs(Ps.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==fs&&1&fs.memoizedState.tag){if(n.flags|=2048,Ds(9,Ns.bind(null,n,r,i,t),void 0,null),null===Ic)throw Error(ce(349));30&us||Cs(n,t,i)}return i}function Cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ds.updateQueue)?(t={lastEffect:null,stores:null},ds.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ns(e,t,n,r){t.value=n,t.getSnapshot=r,As(t)&&Is(e)}function Ps(e,t,n){return n((function(){As(t)&&Is(e)}))}function As(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!di(e,n)}catch(r){return!0}}function Is(e){var t=Fa(e,1);null!==t&&au(t,e,1,-1)}function Ms(e){var t=_s();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:e},t.queue=e,e=e.dispatch=Js.bind(null,ds,e),[t.memoizedState,e]}function Ds(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ds.updateQueue)?(t={lastEffect:null,stores:null},ds.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Rs(){return Ss().memoizedState}function Ls(e,t,n,r){var i=_s();ds.flags|=e,i.memoizedState=Ds(1|t,n,void 0,void 0===r?null:r)}function Us(e,t,n,r){var i=Ss();r=void 0===r?null:r;var o=void 0;if(null!==hs){var a=hs.memoizedState;if(o=a.destroy,null!==r&&bs(r,a.deps))return void(i.memoizedState=Ds(t,n,o,r))}ds.flags|=e,i.memoizedState=Ds(1|t,n,o,r)}function Fs(e,t){return Ls(8390656,8,e,t)}function zs(e,t){return Us(2048,8,e,t)}function $s(e,t){return Us(4,2,e,t)}function Bs(e,t){return Us(4,4,e,t)}function Vs(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function qs(e,t,n){return n=null!=n?n.concat([e]):null,Us(4,4,Vs.bind(null,t,e),n)}function Ws(){}function Hs(e,t){var n=Ss();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&bs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ks(e,t){var n=Ss();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&bs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gs(e,t,n){return 21&us?(di(n,t)||(n=wn(),ds.lanes|=n,zc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Sl=!0),e.memoizedState=n)}function Ys(e,t){var n=kn;kn=0!==n&&4>n?n:4,e(!0);var r=cs.transition;cs.transition={};try{e(!1),t()}finally{kn=n,cs.transition=r}}function Qs(){return Ss().memoizedState}function Xs(e,t,n){var r=ou(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zs(e))el(t,n);else if(null!==(n=Ua(e,t,n,r))){au(n,e,r,iu()),tl(n,t,r)}}function Js(e,t,n){var r=ou(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zs(e))el(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,di(s,a)){var l=t.interleaved;return null===l?(i.next=i,La(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(qj){}null!==(n=Ua(e,t,i,r))&&(au(n,e,r,i=iu()),tl(n,t,r))}}function Zs(e){var t=e.alternate;return e===ds||null!==t&&t===ds}function el(e,t){ms=ps=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tl(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Sn(e,n)}}var nl={readContext:Da,useCallback:vs,useContext:vs,useEffect:vs,useImperativeHandle:vs,useInsertionEffect:vs,useLayoutEffect:vs,useMemo:vs,useReducer:vs,useRef:vs,useState:vs,useDebugValue:vs,useDeferredValue:vs,useTransition:vs,useMutableSource:vs,useSyncExternalStore:vs,useId:vs,unstable_isNewReconciler:!1},rl={readContext:Da,useCallback:function(e,t){return _s().memoizedState=[e,void 0===t?null:t],e},useContext:Da,useEffect:Fs,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Ls(4194308,4,Vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ls(4,2,e,t)},useMemo:function(e,t){var n=_s();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_s();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xs.bind(null,ds,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},_s().memoizedState=e},useState:Ms,useDebugValue:Ws,useDeferredValue:function(e){return _s().memoizedState=e},useTransition:function(){var e=Ms(!1),t=e[0];return e=Ys.bind(null,e[1]),_s().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ds,i=_s();if(ca){if(void 0===n)throw Error(ce(407));n=n()}else{if(n=t(),null===Ic)throw Error(ce(349));30&us||Cs(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fs(Ps.bind(null,r,o,e),[e]),r.flags|=2048,Ds(9,Ns.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=_s(),t=Ic.identifierPrefix;if(ca){var n=na;t=":"+t+"R"+(n=(ta&~(1<<32-dn(ta)-1)).toString(32)+n),0<(n=gs++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ys++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},il={readContext:Da,useCallback:Hs,useContext:Da,useEffect:zs,useImperativeHandle:qs,useInsertionEffect:$s,useLayoutEffect:Bs,useMemo:Ks,useReducer:Es,useRef:Rs,useState:function(){return Es(ks)},useDebugValue:Ws,useDeferredValue:function(e){return Gs(Ss(),hs.memoizedState,e)},useTransition:function(){return[Es(ks)[0],Ss().memoizedState]},useMutableSource:Os,useSyncExternalStore:Ts,useId:Qs,unstable_isNewReconciler:!1},ol={readContext:Da,useCallback:Hs,useContext:Da,useEffect:zs,useImperativeHandle:qs,useInsertionEffect:$s,useLayoutEffect:Bs,useMemo:Ks,useReducer:js,useRef:Rs,useState:function(){return js(ks)},useDebugValue:Ws,useDeferredValue:function(e){var t=Ss();return null===hs?t.memoizedState=e:Gs(t,hs.memoizedState,e)},useTransition:function(){return[js(ks)[0],Ss().memoizedState]},useMutableSource:Os,useSyncExternalStore:Ts,useId:Qs,unstable_isNewReconciler:!1};function al(e,t){if(e&&e.defaultProps){for(var n in t=$e({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function sl(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:$e({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ll={isMounted:function(e){return!!(e=e._reactInternals)&&Ht(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=iu(),i=ou(e),o=Va(r,i);o.payload=t,null!=n&&(o.callback=n),null!==(t=qa(e,o,i))&&(au(t,e,i,r),Wa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=iu(),i=ou(e),o=Va(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=qa(e,o,i))&&(au(t,e,i,r),Wa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=iu(),r=ou(e),i=Va(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=qa(e,i,r))&&(au(t,e,r,n),Wa(t,e,r))}};function cl(e,t,n,r,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!hi(n,r)||!hi(i,o))}function ul(e,t,n){var r=!1,i=Ao,o=t.contextType;return"object"==typeof o&&null!==o?o=Da(o):(i=Lo(t)?Do:Io.current,o=(r=null!=(r=t.contextTypes))?Ro(e,i):Ao),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ll,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function dl(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ll.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$a(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=Da(o):(o=Lo(t)?Do:Io.current,i.context=Ro(e,o)),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(sl(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&ll.enqueueReplaceState(i,i.state,null),Ka(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function fl(e,t){try{var n="",r=t;do{n+=We(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ml(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var gl="function"==typeof WeakMap?WeakMap:Map;function yl(e,t,n){(n=Va(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gc||(Gc=!0,Yc=r),ml(0,t)},n}function vl(e,t,n){(n=Va(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ml(0,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){ml(0,t),"function"!=typeof r&&(null===Qc?Qc=new Set([this]):Qc.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function bl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new gl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function wl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xl(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Va(-1,1)).tag=2,qa(n,t,1))),n.lanes|=1),e)}var _l=ke.ReactCurrentOwner,Sl=!1;function kl(e,t,n,r){t.child=null===e?ja(t,null,n,r):Ea(t,e.child,n,r)}function El(e,t,n,r,i){n=n.render;var o=t.ref;return Ma(t,i),r=ws(e,t,n,r,o,i),n=xs(),null===e||Sl?(ca&&n&&oa(t),t.flags|=1,kl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gl(e,t,i))}function jl(e,t,n,r,i){if(null===e){var o=n.type;return"function"!=typeof o||Ru(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Uu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ol(e,t,o,r,i))}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:hi)(a,r)&&e.ref===t.ref)return Gl(e,t,i)}return t.flags|=1,(e=Lu(o,r)).ref=t.ref,e.return=t,t.child=e}function Ol(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(hi(o,r)&&e.ref===t.ref){if(Sl=!1,t.pendingProps=r=o,!(e.lanes&i))return t.lanes=e.lanes,Gl(e,t,i);131072&e.flags&&(Sl=!0)}}return Nl(e,t,n,r,i)}function Tl(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Po(Lc,Rc),Rc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Po(Lc,Rc),Rc|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Po(Lc,Rc),Rc|=n;else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Po(Lc,Rc),Rc|=r;return kl(e,t,i,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nl(e,t,n,r,i){var o=Lo(n)?Do:Io.current;return o=Ro(t,o),Ma(t,i),n=ws(e,t,n,r,o,i),r=xs(),null===e||Sl?(ca&&r&&oa(t),t.flags|=1,kl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gl(e,t,i))}function Pl(e,t,n,r,i){if(Lo(n)){var o=!0;$o(t)}else o=!1;if(Ma(t,i),null===t.stateNode)Kl(e,t),ul(t,n,r),hl(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"==typeof c&&null!==c?c=Da(c):c=Ro(t,c=Lo(n)?Do:Io.current);var u=n.getDerivedStateFromProps,d="function"==typeof u||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||l!==c)&&dl(t,a,r,c),za=!1;var h=t.memoizedState;a.state=h,Ka(t,r,a,i),l=t.memoizedState,s!==r||h!==l||Mo.current||za?("function"==typeof u&&(sl(t,n,u,r),l=t.memoizedState),(s=za||cl(t,n,s,r,h,l,c))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:al(t.type,s),a.props=c,d=t.pendingProps,h=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=Da(l):l=Ro(t,l=Lo(n)?Do:Io.current);var f=n.getDerivedStateFromProps;(u="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==d||h!==l)&&dl(t,a,r,l),za=!1,h=t.memoizedState,a.state=h,Ka(t,r,a,i);var p=t.memoizedState;s!==d||h!==p||Mo.current||za?("function"==typeof f&&(sl(t,n,f,r),p=t.memoizedState),(c=za||cl(t,n,c,r,h,p,l)||!1)?(u||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=c):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Al(e,t,n,r,o,i)}function Al(e,t,n,r,i,o){Cl(e,t);var a=!!(128&t.flags);if(!r&&!a)return i&&Bo(t,n,!1),Gl(e,t,o);r=t.stateNode,_l.current=t;var s=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=Ea(t,e.child,null,o),t.child=Ea(t,null,s,o)):kl(e,t,s,o),t.memoizedState=r.state,i&&Bo(t,n,!0),t.child}function Il(e){var t=e.stateNode;t.pendingContext?Fo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Fo(0,t.context,!1),es(e,t.containerInfo)}function Ml(e,t,n,r,i){return va(),ba(i),t.flags|=256,kl(e,t,n,r),t.child}var Dl,Rl,Ll,Ul,Fl={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function $l(e,t,n){var r,i=t.pendingProps,o=is.current,a=!1,s=!!(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&!!(2&o)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Po(is,1&o),null===e)return pa(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},1&i||null===a?a=zu(s,i,0,null):(a.childLanes=0,a.pendingProps=s),e=Fu(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=zl(n),t.memoizedState=Fl,e):Bl(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,a){if(n)return 256&t.flags?(t.flags&=-257,Vl(e,t,a,r=pl(Error(ce(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=zu({mode:"visible",children:r.children},i,0,null),(o=Fu(o,i,a,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,1&t.mode&&Ea(t,e.child,null,a),t.child.memoizedState=zl(a),t.memoizedState=Fl,o);if(!(1&t.mode))return Vl(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Vl(e,t,a,r=pl(o=Error(ce(419)),r,void 0))}if(s=!!(a&e.childLanes),Sl||s){if(null!==(r=Ic)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=i&(r.suspendedLanes|a)?0:i)&&i!==o.retryLane&&(o.retryLane=i,Fa(e,i),au(r,e,i,-1))}return bu(),Vl(e,t,a,r=pl(Error(ce(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,la=po(i.nextSibling),sa=t,ca=!0,ua=null,null!==e&&(Jo[Zo++]=ta,Jo[Zo++]=na,Jo[Zo++]=ea,ta=e.id,na=e.overflow,ea=t),t=Bl(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,o,n);if(a){a=i.fallback,s=t.mode,r=(o=e.child).sibling;var l={mode:"hidden",children:i.children};return 1&s||t.child===o?(i=Lu(o,l)).subtreeFlags=14680064&o.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null),null!==r?a=Lu(r,a):(a=Fu(a,s,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=null===(s=e.child.memoizedState)?zl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=Fl,i}return e=(a=e.child).sibling,i=Lu(a,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Bl(e,t){return(t=zu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Vl(e,t,n,r){return null!==r&&ba(r),Ea(t,e.child,null,n),(e=Bl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ql(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ia(e.return,t,n)}function Wl(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Hl(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(kl(e,t,r.children,n),2&(r=is.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ql(e,n,t);else if(19===e.tag)ql(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Po(is,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===os(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===os(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wl(t,!0,n,null,o);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Kl(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),zc|=t.lanes,!(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(ce(153));if(null!==t.child){for(n=Lu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Yl(e,t){if(!ca)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xl(e,t,n){var r=t.pendingProps;switch(aa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ql(t),null;case 1:case 17:return Lo(t.type)&&Uo(),Ql(t),null;case 3:return r=t.stateNode,ts(),No(Mo),No(Io),ss(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ga(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==ua&&(uu(ua),ua=null))),Rl(e,t),Ql(t),null;case 5:rs(t);var i=Za(Ja.current);if(n=t.type,null!==e&&null!=t.stateNode)Ll(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(ce(166));return Ql(t),null}if(e=Za(Qa.current),ga(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yo]=t,r[vo]=o,e=!!(1&t.mode),n){case"dialog":Vi("cancel",r),Vi("close",r);break;case"iframe":case"object":case"embed":Vi("load",r);break;case"video":case"audio":for(i=0;i<Fi.length;i++)Vi(Fi[i],r);break;case"source":Vi("error",r);break;case"img":case"image":case"link":Vi("error",r),Vi("load",r);break;case"details":Vi("toggle",r);break;case"input":et(r,o),Vi("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Vi("invalid",r);break;case"textarea":lt(r,o),Vi("invalid",r)}for(var a in _t(n,o),i=null,o)if(o.hasOwnProperty(a)){var s=o[a];"children"===a?"string"==typeof s?r.textContent!==s&&(!0!==o.suppressHydrationWarning&&no(r.textContent,s,e),i=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(!0!==o.suppressHydrationWarning&&no(r.textContent,s,e),i=["children",""+s]):de.hasOwnProperty(a)&&null!=s&&"onScroll"===a&&Vi("scroll",r)}switch(n){case"input":Qe(r),rt(r,o,!0);break;case"textarea":Qe(r),ut(r);break;case"select":case"option":break;default:"function"==typeof o.onClick&&(r.onclick=ro)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{a=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=dt(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yo]=t,e[vo]=r,Dl(e,t,!1,!1),t.stateNode=e;e:{switch(a=St(n,r),n){case"dialog":Vi("cancel",e),Vi("close",e),i=r;break;case"iframe":case"object":case"embed":Vi("load",e),i=r;break;case"video":case"audio":for(i=0;i<Fi.length;i++)Vi(Fi[i],e);i=r;break;case"source":Vi("error",e),i=r;break;case"img":case"image":case"link":Vi("error",e),Vi("load",e),i=r;break;case"details":Vi("toggle",e),i=r;break;case"input":et(e,r),i=Ze(e,r),Vi("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Vi("invalid",e);break;case"textarea":lt(e,r),i=st(e,r),Vi("invalid",e)}for(o in _t(n,i),s=i)if(s.hasOwnProperty(o)){var l=s[o];"style"===o?wt(e,l):"dangerouslySetInnerHTML"===o?null!=(l=l?l.__html:void 0)&&mt(e,l):"children"===o?"string"==typeof l?("textarea"!==n||""!==l)&&gt(e,l):"number"==typeof l&&gt(e,""+l):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(de.hasOwnProperty(o)?null!=l&&"onScroll"===o&&Vi("scroll",e):null!=l&&Se(e,o,l,a))}switch(n){case"input":Qe(e),rt(e,r,!1);break;case"textarea":Qe(e),ut(e);break;case"option":null!=r.value&&e.setAttribute("value",""+Ge(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?at(e,!!r.multiple,o,!1):null!=r.defaultValue&&at(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ql(t),null;case 6:if(e&&null!=t.stateNode)Ul(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(ce(166));if(n=Za(Ja.current),Za(Qa.current),ga(t)){if(r=t.stateNode,n=t.memoizedProps,r[yo]=t,(o=r.nodeValue!==n)&&null!==(e=sa))switch(e.tag){case 3:no(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&no(r.nodeValue,n,!!(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[yo]=t,t.stateNode=r}return Ql(t),null;case 13:if(No(is),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ca&&null!==la&&1&t.mode&&!(128&t.flags))ya(),va(),t.flags|=98560,o=!1;else if(o=ga(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(ce(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(ce(317));o[yo]=t}else va(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ql(t),o=!1}else null!==ua&&(uu(ua),ua=null),o=!0;if(!o)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&is.current?0===Uc&&(Uc=3):bu())),null!==t.updateQueue&&(t.flags|=4),Ql(t),null);case 4:return ts(),Rl(e,t),null===e&&Hi(t.stateNode.containerInfo),Ql(t),null;case 10:return Aa(t.type._context),Ql(t),null;case 19:if(No(is),null===(o=t.memoizedState))return Ql(t),null;if(r=!!(128&t.flags),null===(a=o.rendering))if(r)Yl(o,!1);else{if(0!==Uc||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(a=os(e))){for(t.flags|=128,Yl(o,!1),null!==(r=a.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(a=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Po(is,1&is.current|2),t.child}e=e.sibling}null!==o.tail&&tn()>Hc&&(t.flags|=128,r=!0,Yl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=os(a))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Yl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!a.alternate&&!ca)return Ql(t),null}else 2*tn()-o.renderingStartTime>Hc&&1073741824!==n&&(t.flags|=128,r=!0,Yl(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=o.last)?n.sibling=a:t.child=a,o.last=a)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=tn(),t.sibling=null,n=is.current,Po(is,r?1&n|2:1&n),t):(Ql(t),null);case 22:case 23:return mu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Rc)&&(Ql(t),6&t.subtreeFlags&&(t.flags|=8192)):Ql(t),null;case 24:case 25:return null}throw Error(ce(156,t.tag))}function Jl(e,t){switch(aa(t),t.tag){case 1:return Lo(t.type)&&Uo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ts(),No(Mo),No(Io),ss(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return rs(t),null;case 13:if(No(is),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(ce(340));va()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return No(is),null;case 4:return ts(),null;case 10:return Aa(t.type._context),null;case 22:case 23:return mu(),null;default:return null}}Dl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rl=function(){},Ll=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Za(Qa.current);var o,a=null;switch(n){case"input":i=Ze(e,i),r=Ze(e,r),a=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),a=[];break;case"textarea":i=st(e,i),r=st(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=ro)}for(c in _t(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(de.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(s=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(null!=l||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(c,n)),n=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(a=a||[]).push(c,l)):"children"===c?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(de.hasOwnProperty(c)?(null!=l&&"onScroll"===c&&Vi("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Ul=function(e,t,n,r){n!==r&&(t.flags|=4)};var Zl=!1,ec=!1,tc="function"==typeof WeakSet?WeakSet:Set,nc=null;function rc(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){Tu(e,t,r)}else n.current=null}function ic(e,t,n){try{n()}catch(r){Tu(e,t,r)}}var oc=!1;function ac(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&ic(t,n,o)}i=i.next}while(i!==r)}}function sc(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lc(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function cc(e){var t=e.alternate;null!==t&&(e.alternate=null,cc(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[yo],delete t[vo],delete t[wo],delete t[xo],delete t[_o])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e){return 5===e.tag||3===e.tag||4===e.tag}function dc(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function hc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=ro));else if(4!==r&&null!==(e=e.child))for(hc(e,t,n),e=e.sibling;null!==e;)hc(e,t,n),e=e.sibling}function fc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(fc(e,t,n),e=e.sibling;null!==e;)fc(e,t,n),e=e.sibling}var pc=null,mc=!1;function gc(e,t,n){for(n=n.child;null!==n;)yc(e,t,n),n=n.sibling}function yc(e,t,n){if(un&&"function"==typeof un.onCommitFiberUnmount)try{un.onCommitFiberUnmount(cn,n)}catch(s){}switch(n.tag){case 5:ec||rc(n,t);case 6:var r=pc,i=mc;pc=null,gc(e,t,n),mc=i,null!==(pc=r)&&(mc?(e=pc,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):pc.removeChild(n.stateNode));break;case 18:null!==pc&&(mc?(e=pc,n=n.stateNode,8===e.nodeType?fo(e.parentNode,n):1===e.nodeType&&fo(e,n),Kn(e)):fo(pc,n.stateNode));break;case 4:r=pc,i=mc,pc=n.stateNode.containerInfo,mc=!0,gc(e,t,n),pc=r,mc=i;break;case 0:case 11:case 14:case 15:if(!ec&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(2&o||4&o)&&ic(n,t,a),i=i.next}while(i!==r)}gc(e,t,n);break;case 1:if(!ec&&(rc(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Tu(n,t,s)}gc(e,t,n);break;case 21:gc(e,t,n);break;case 22:1&n.mode?(ec=(r=ec)||null!==n.memoizedState,gc(e,t,n),ec=r):gc(e,t,n);break;default:gc(e,t,n)}}function vc(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new tc),t.forEach((function(t){var r=Au.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function bc(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;null!==s;){switch(s.tag){case 5:pc=s.stateNode,mc=!1;break e;case 3:case 4:pc=s.stateNode.containerInfo,mc=!0;break e}s=s.return}if(null===pc)throw Error(ce(160));yc(o,a,i),pc=null,mc=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(qj){Tu(i,t,qj)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bc(t,e),xc(e),4&r){try{ac(3,e,e.return),sc(3,e)}catch(Bj){Tu(e,e.return,Bj)}try{ac(5,e,e.return)}catch(Bj){Tu(e,e.return,Bj)}}break;case 1:bc(t,e),xc(e),512&r&&null!==n&&rc(n,n.return);break;case 5:if(bc(t,e),xc(e),512&r&&null!==n&&rc(n,n.return),32&e.flags){var i=e.stateNode;try{gt(i,"")}catch(Bj){Tu(e,e.return,Bj)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,a=null!==n?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===o.type&&null!=o.name&&tt(i,o),St(s,a);var c=St(s,o);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];"style"===u?wt(i,d):"dangerouslySetInnerHTML"===u?mt(i,d):"children"===u?gt(i,d):Se(i,u,d,c)}switch(s){case"input":nt(i,o);break;case"textarea":ct(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?at(i,!!o.multiple,f,!1):h!==!!o.multiple&&(null!=o.defaultValue?at(i,!!o.multiple,o.defaultValue,!0):at(i,!!o.multiple,o.multiple?[]:"",!1))}i[vo]=o}catch(Bj){Tu(e,e.return,Bj)}}break;case 6:if(bc(t,e),xc(e),4&r){if(null===e.stateNode)throw Error(ce(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(Bj){Tu(e,e.return,Bj)}}break;case 3:if(bc(t,e),xc(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(Bj){Tu(e,e.return,Bj)}break;case 4:default:bc(t,e),xc(e);break;case 13:bc(t,e),xc(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Wc=tn())),4&r&&vc(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(ec=(c=ec)||u,bc(t,e),ec=c):bc(t,e),xc(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!u&&1&e.mode)for(nc=e,u=e.child;null!==u;){for(d=nc=u;null!==nc;){switch(f=(h=nc).child,h.tag){case 0:case 11:case 14:case 15:ac(4,h,h.return);break;case 1:rc(h,h.return);var p=h.stateNode;if("function"==typeof p.componentWillUnmount){r=h,n=h.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(Bj){Tu(r,n,Bj)}}break;case 5:rc(h,h.return);break;case 22:if(null!==h.memoizedState){Ec(d);continue}}null!==f?(f.return=h,nc=f):Ec(d)}u=u.sibling}e:for(u=null,d=e;;){if(5===d.tag){if(null===u){u=d;try{i=d.stateNode,c?"function"==typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=d.stateNode,a=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=bt("display",a))}catch(Bj){Tu(e,e.return,Bj)}}}else if(6===d.tag){if(null===u)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(Bj){Tu(e,e.return,Bj)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bc(t,e),xc(e),4&r&&vc(e);case 21:}}function xc(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(uc(n)){var r=n;break e}n=n.return}throw Error(ce(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(gt(i,""),r.flags&=-33),fc(e,dc(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;hc(e,dc(e),o);break;default:throw Error(ce(161))}}catch(a){Tu(e,e.return,a)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function _c(e,t,n){nc=e,Sc(e)}function Sc(e,t,n){for(var r=!!(1&e.mode);null!==nc;){var i=nc,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Zl;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||ec;s=Zl;var c=ec;if(Zl=a,(ec=l)&&!c)for(nc=i;null!==nc;)l=(a=nc).child,22===a.tag&&null!==a.memoizedState?jc(i):null!==l?(l.return=a,nc=l):jc(i);for(;null!==o;)nc=o,Sc(o),o=o.sibling;nc=i,Zl=s,ec=c}kc(e)}else 8772&i.subtreeFlags&&null!==o?(o.return=i,nc=o):kc(e)}}function kc(e){for(;null!==nc;){var t=nc;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:ec||sc(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ec)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:al(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ga(t,o,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ga(t,a,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var u=c.memoizedState;if(null!==u){var d=u.dehydrated;null!==d&&Kn(d)}}}break;default:throw Error(ce(163))}ec||512&t.flags&&lc(t)}catch(Vj){Tu(t,t.return,Vj)}}if(t===e){nc=null;break}if(null!==(n=t.sibling)){n.return=t.return,nc=n;break}nc=t.return}}function Ec(e){for(;null!==nc;){var t=nc;if(t===e){nc=null;break}var n=t.sibling;if(null!==n){n.return=t.return,nc=n;break}nc=t.return}}function jc(e){for(;null!==nc;){var t=nc;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sc(4,t)}catch(l){Tu(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Tu(t,i,l)}}var o=t.return;try{lc(t)}catch(l){Tu(t,o,l)}break;case 5:var a=t.return;try{lc(t)}catch(l){Tu(t,a,l)}}}catch(l){Tu(t,t.return,l)}if(t===e){nc=null;break}var s=t.sibling;if(null!==s){s.return=t.return,nc=s;break}nc=t.return}}var Oc,Tc=Math.ceil,Cc=ke.ReactCurrentDispatcher,Nc=ke.ReactCurrentOwner,Pc=ke.ReactCurrentBatchConfig,Ac=0,Ic=null,Mc=null,Dc=0,Rc=0,Lc=Co(0),Uc=0,Fc=null,zc=0,$c=0,Bc=0,Vc=null,qc=null,Wc=0,Hc=1/0,Kc=null,Gc=!1,Yc=null,Qc=null,Xc=!1,Jc=null,Zc=0,eu=0,tu=null,nu=-1,ru=0;function iu(){return 6&Ac?tn():-1!==nu?nu:nu=tn()}function ou(e){return 1&e.mode?2&Ac&&0!==Dc?Dc&-Dc:null!==wa.transition?(0===ru&&(ru=wn()),ru):0!==(e=kn)?e:e=void 0===(e=window.event)?16:tr(e.type):1}function au(e,t,n,r){if(50<eu)throw eu=0,tu=null,Error(ce(185));_n(e,n,r),2&Ac&&e===Ic||(e===Ic&&(!(2&Ac)&&($c|=n),4===Uc&&du(e,Dc)),su(e,r),1===n&&0===Ac&&!(1&t.mode)&&(Hc=tn()+500,qo&&Ko()))}function su(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-dn(o),s=1<<a,l=i[a];-1===l?s&n&&!(s&r)||(i[a]=vn(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=yn(e,e===Ic?Dc:0);if(0===r)null!==n&&Jt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Jt(n),1===t)0===e.tag?function(e){qo=!0,Ho(e)}(hu.bind(null,e)):Ho(hu.bind(null,e)),uo((function(){!(6&Ac)&&Ko()})),n=null;else{switch(En(r)){case 1:n=rn;break;case 4:n=on;break;case 16:default:n=an;break;case 536870912:n=ln}n=Iu(n,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lu(e,t){if(nu=-1,ru=0,6&Ac)throw Error(ce(327));var n=e.callbackNode;if(ju()&&e.callbackNode!==n)return null;var r=yn(e,e===Ic?Dc:0);if(0===r)return null;if(30&r||r&e.expiredLanes||t)t=wu(e,r);else{t=r;var i=Ac;Ac|=2;var o=vu();for(Ic===e&&Dc===t||(Kc=null,Hc=tn()+500,gu(e,t));;)try{_u();break}catch(s){yu(e,s)}Pa(),Cc.current=o,Ac=i,null!==Mc?t=0:(Ic=null,Dc=0,t=Uc)}if(0!==t){if(2===t&&(0!==(i=bn(e))&&(r=i,t=cu(e,i))),1===t)throw n=Fc,gu(e,0),du(e,r),su(e,tn()),n;if(6===t)du(e,r);else{if(i=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!di(o(),i))return!1}catch(a){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=wu(e,r),2===t&&(o=bn(e),0!==o&&(r=o,t=cu(e,o))),1!==t)))throw n=Fc,gu(e,0),du(e,r),su(e,tn()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ce(345));case 2:case 5:Eu(e,qc,Kc);break;case 3:if(du(e,r),(130023424&r)===r&&10<(t=Wc+500-tn())){if(0!==yn(e,0))break;if(((i=e.suspendedLanes)&r)!==r){iu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=so(Eu.bind(null,e,qc,Kc),t);break}Eu(e,qc,Kc);break;case 4:if(du(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dn(r);o=1<<a,(a=t[a])>i&&(i=a),r&=~o}if(r=i,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tc(r/1960))-r)){e.timeoutHandle=so(Eu.bind(null,e,qc,Kc),r);break}Eu(e,qc,Kc);break;default:throw Error(ce(329))}}}return su(e,tn()),e.callbackNode===n?lu.bind(null,e):null}function cu(e,t){var n=Vc;return e.current.memoizedState.isDehydrated&&(gu(e,t).flags|=256),2!==(e=wu(e,t))&&(t=qc,qc=n,null!==t&&uu(t)),e}function uu(e){null===qc?qc=e:qc.push.apply(qc,e)}function du(e,t){for(t&=~Bc,t&=~$c,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function hu(e){if(6&Ac)throw Error(ce(327));ju();var t=yn(e,0);if(!(1&t))return su(e,tn()),null;var n=wu(e,t);if(0!==e.tag&&2===n){var r=bn(e);0!==r&&(t=r,n=cu(e,r))}if(1===n)throw n=Fc,gu(e,0),du(e,t),su(e,tn()),n;if(6===n)throw Error(ce(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Eu(e,qc,Kc),su(e,tn()),null}function fu(e,t){var n=Ac;Ac|=1;try{return e(t)}finally{0===(Ac=n)&&(Hc=tn()+500,qo&&Ko())}}function pu(e){null!==Jc&&0===Jc.tag&&!(6&Ac)&&ju();var t=Ac;Ac|=1;var n=Pc.transition,r=kn;try{if(Pc.transition=null,kn=1,e)return e()}finally{kn=r,Pc.transition=n,!(6&(Ac=t))&&Ko()}}function mu(){Rc=Lc.current,No(Lc)}function gu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,lo(n)),null!==Mc)for(n=Mc.return;null!==n;){var r=n;switch(aa(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Uo();break;case 3:ts(),No(Mo),No(Io),ss();break;case 5:rs(r);break;case 4:ts();break;case 13:case 19:No(is);break;case 10:Aa(r.type._context);break;case 22:case 23:mu()}n=n.return}if(Ic=e,Mc=e=Lu(e.current,null),Dc=Rc=t,Uc=0,Fc=null,Bc=$c=zc=0,qc=Vc=null,null!==Ra){for(t=0;t<Ra.length;t++)if(null!==(r=(n=Ra[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}Ra=null}return e}function yu(e,t){for(;;){var n=Mc;try{if(Pa(),ls.current=nl,ps){for(var r=ds.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ps=!1}if(us=0,fs=hs=ds=null,ms=!1,gs=0,Nc.current=null,null===n||null===n.return){Uc=1,Fc=t,Mc=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Dc,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var c=l,u=s,d=u.tag;if(!(1&u.mode||0!==d&&11!==d&&15!==d)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=wl(a);if(null!==f){f.flags&=-257,xl(f,a,s,0,t),1&f.mode&&bl(o,c,t),l=c;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){bl(o,c,t),bu();break e}l=Error(ce(426))}else if(ca&&1&s.mode){var g=wl(a);if(null!==g){!(65536&g.flags)&&(g.flags|=256),xl(g,a,s,0,t),ba(fl(l,s));break e}}o=l=fl(l,s),4!==Uc&&(Uc=2),null===Vc?Vc=[o]:Vc.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ha(o,yl(0,l,t));break e;case 1:s=l;var y=o.type,v=o.stateNode;if(!(128&o.flags||"function"!=typeof y.getDerivedStateFromError&&(null===v||"function"!=typeof v.componentDidCatch||null!==Qc&&Qc.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t,Ha(o,vl(o,s,t));break e}}o=o.return}while(null!==o)}ku(n)}catch(b){t=b,Mc===n&&null!==n&&(Mc=n=n.return);continue}break}}function vu(){var e=Cc.current;return Cc.current=nl,null===e?nl:e}function bu(){0!==Uc&&3!==Uc&&2!==Uc||(Uc=4),null===Ic||!(268435455&zc)&&!(268435455&$c)||du(Ic,Dc)}function wu(e,t){var n=Ac;Ac|=2;var r=vu();for(Ic===e&&Dc===t||(Kc=null,gu(e,t));;)try{xu();break}catch($j){yu(e,$j)}if(Pa(),Ac=n,Cc.current=r,null!==Mc)throw Error(ce(261));return Ic=null,Dc=0,Uc}function xu(){for(;null!==Mc;)Su(Mc)}function _u(){for(;null!==Mc&&!Zt();)Su(Mc)}function Su(e){var t=Oc(e.alternate,e,Rc);e.memoizedProps=e.pendingProps,null===t?ku(e):Mc=t,Nc.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Jl(n,t)))return n.flags&=32767,void(Mc=n);if(null===e)return Uc=6,void(Mc=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Xl(n,t,Rc)))return void(Mc=n);if(null!==(t=t.sibling))return void(Mc=t);Mc=t=e}while(null!==t);0===Uc&&(Uc=5)}function Eu(e,t,n){var r=kn,i=Pc.transition;try{Pc.transition=null,kn=1,function(e,t,n,r){do{ju()}while(null!==Jc);if(6&Ac)throw Error(ce(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ce(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,o),e===Ic&&(Mc=Ic=null,Dc=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Xc||(Xc=!0,Iu(an,(function(){return ju(),null}))),o=!!(15990&n.flags),!!(15990&n.subtreeFlags)||o){o=Pc.transition,Pc.transition=null;var a=kn;kn=1;var s=Ac;Ac|=4,Nc.current=null,function(e,t){if(io=Yn,yi(e=gi())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,d=e,h=null;t:for(;;){for(var f;d!==n||0!==i&&3!==d.nodeType||(s=a+i),d!==o||0!==r&&3!==d.nodeType||(l=a+r),3===d.nodeType&&(a+=d.nodeValue.length),null!==(f=d.firstChild);)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++c===i&&(s=a),h===o&&++u===r&&(l=a),null!==(f=d.nextSibling))break;h=(d=h).parentNode}d=f}n=-1===s||-1===l?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(oo={focusedElem:e,selectionRange:n},Yn=!1,nc=t;null!==nc;)if(e=(t=nc).child,1028&t.subtreeFlags&&null!==e)e.return=t,nc=e;else for(;null!==nc;){t=nc;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:al(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(ce(163))}}catch(w){Tu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,nc=e;break}nc=t.return}p=oc,oc=!1}(e,n),wc(n,e),vi(oo),Yn=!!io,oo=io=null,e.current=n,_c(n),en(),Ac=s,kn=a,Pc.transition=o}else e.current=n;if(Xc&&(Xc=!1,Jc=e,Zc=i),o=e.pendingLanes,0===o&&(Qc=null),function(e){if(un&&"function"==typeof un.onCommitFiberRoot)try{un.onCommitFiberRoot(cn,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),su(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gc)throw Gc=!1,e=Yc,Yc=null,e;!!(1&Zc)&&0!==e.tag&&ju(),o=e.pendingLanes,1&o?e===tu?eu++:(eu=0,tu=e):eu=0,Ko()}(e,t,n,r)}finally{Pc.transition=i,kn=r}return null}function ju(){if(null!==Jc){var e=En(Zc),t=Pc.transition,n=kn;try{if(Pc.transition=null,kn=16>e?16:e,null===Jc)var r=!1;else{if(e=Jc,Jc=null,Zc=0,6&Ac)throw Error(ce(331));var i=Ac;for(Ac|=4,nc=e.current;null!==nc;){var o=nc,a=o.child;if(16&nc.flags){var s=o.deletions;if(null!==s){for(var l=0;l<s.length;l++){var c=s[l];for(nc=c;null!==nc;){var u=nc;switch(u.tag){case 0:case 11:case 15:ac(8,u,o)}var d=u.child;if(null!==d)d.return=u,nc=d;else for(;null!==nc;){var h=(u=nc).sibling,f=u.return;if(cc(u),u===c){nc=null;break}if(null!==h){h.return=f,nc=h;break}nc=f}}}var p=o.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}nc=o}}if(2064&o.subtreeFlags&&null!==a)a.return=o,nc=a;else e:for(;null!==nc;){if(2048&(o=nc).flags)switch(o.tag){case 0:case 11:case 15:ac(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,nc=y;break e}nc=o.return}}var v=e.current;for(nc=v;null!==nc;){var b=(a=nc).child;if(2064&a.subtreeFlags&&null!==b)b.return=a,nc=b;else e:for(a=v;null!==nc;){if(2048&(s=nc).flags)try{switch(s.tag){case 0:case 11:case 15:sc(9,s)}}catch(x){Tu(s,s.return,x)}if(s===a){nc=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,nc=w;break e}nc=s.return}}if(Ac=i,Ko(),un&&"function"==typeof un.onPostCommitFiberRoot)try{un.onPostCommitFiberRoot(cn,e)}catch(x){}r=!0}return r}finally{kn=n,Pc.transition=t}}return!1}function Ou(e,t,n){e=qa(e,t=yl(0,t=fl(n,t),1),1),t=iu(),null!==e&&(_n(e,1,t),su(e,t))}function Tu(e,t,n){if(3===e.tag)Ou(e,e,n);else for(;null!==t;){if(3===t.tag){Ou(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Qc||!Qc.has(r))){t=qa(t,e=vl(t,e=fl(n,e),1),1),e=iu(),null!==t&&(_n(t,1,e),su(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=iu(),e.pingedLanes|=e.suspendedLanes&n,Ic===e&&(Dc&n)===n&&(4===Uc||3===Uc&&(130023424&Dc)===Dc&&500>tn()-Wc?gu(e,0):Bc|=n),su(e,t)}function Nu(e,t){0===t&&(1&e.mode?(t=mn,!(130023424&(mn<<=1))&&(mn=4194304)):t=1);var n=iu();null!==(e=Fa(e,t))&&(_n(e,t,n),su(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Nu(e,n)}function Au(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ce(314))}null!==r&&r.delete(t),Nu(e,n)}function Iu(e,t){return Xt(e,t)}function Mu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Du(e,t,n,r){return new Mu(e,t,n,r)}function Ru(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lu(e,t){var n=e.alternate;return null===n?((n=Du(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Uu(e,t,n,r,i,o){var a=2;if(r=e,"function"==typeof e)Ru(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case Oe:return Fu(n.children,i,o,t);case Te:a=8,i|=8;break;case Ce:return(e=Du(12,n,t,2|i)).elementType=Ce,e.lanes=o,e;case Ie:return(e=Du(13,n,t,i)).elementType=Ie,e.lanes=o,e;case Me:return(e=Du(19,n,t,i)).elementType=Me,e.lanes=o,e;case Le:return zu(n,i,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Ne:a=10;break e;case Pe:a=9;break e;case Ae:a=11;break e;case De:a=14;break e;case Re:a=16,r=null;break e}throw Error(ce(130,null==e?e:typeof e,""))}return(t=Du(a,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Fu(e,t,n,r){return(e=Du(7,e,r,t)).lanes=n,e}function zu(e,t,n,r){return(e=Du(22,e,r,t)).elementType=Le,e.lanes=n,e.stateNode={isHidden:!1},e}function $u(e,t,n){return(e=Du(6,e,null,t)).lanes=n,e}function Bu(e,t,n){return(t=Du(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qu(e,t,n,r,i,o,a,s,l){return e=new Vu(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Du(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(o),e}function Wu(e){if(!e)return Ao;e:{if(Ht(e=e._reactInternals)!==e||1!==e.tag)throw Error(ce(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(ce(171))}if(1===e.tag){var n=e.type;if(Lo(n))return zo(e,n,t)}return t}function Hu(e,t,n,r,i,o,a,s,l){return(e=qu(n,r,!0,e,0,o,0,s,l)).context=Wu(null),n=e.current,(o=Va(r=iu(),i=ou(n))).callback=null!=t?t:null,qa(n,o,i),e.current.lanes=i,_n(e,i,r),su(e,r),e}function Ku(e,t,n,r){var i=t.current,o=iu(),a=ou(i);return n=Wu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Va(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=qa(i,t,a))&&(au(e,i,a,o),Wa(e,i,a)),a}function Gu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Yu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Qu(e,t){Yu(e,t),(e=e.alternate)&&Yu(e,t)}Oc=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Mo.current)Sl=!0;else{if(!(e.lanes&n||128&t.flags))return Sl=!1,function(e,t,n){switch(t.tag){case 3:Il(t),va();break;case 5:ns(t);break;case 1:Lo(t.type)&&$o(t);break;case 4:es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Po(Oa,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Po(is,1&is.current),t.flags|=128,null):n&t.child.childLanes?$l(e,t,n):(Po(is,1&is.current),null!==(e=Gl(e,t,n))?e.sibling:null);Po(is,1&is.current);break;case 19:if(r=!!(n&t.childLanes),128&e.flags){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Po(is,is.current),r)break;return null;case 22:case 23:return t.lanes=0,Tl(e,t,n)}return Gl(e,t,n)}(e,t,n);Sl=!!(131072&e.flags)}else Sl=!1,ca&&1048576&t.flags&&ia(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kl(e,t),e=t.pendingProps;var i=Ro(t,Io.current);Ma(t,n),i=ws(null,t,r,e,i,n);var o=xs();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lo(r)?(o=!0,$o(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,$a(t),i.updater=ll,t.stateNode=i,i._reactInternals=t,hl(t,r,e,n),t=Al(null,t,r,!0,o,n)):(t.tag=0,ca&&o&&oa(t),kl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Ru(e)?1:0;if(null!=e){if((e=e.$$typeof)===Ae)return 11;if(e===De)return 14}return 2}(r),e=al(r,e),i){case 0:t=Nl(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=El(null,t,r,e,n);break e;case 14:t=jl(null,t,r,al(r.type,e),n);break e}throw Error(ce(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Nl(e,t,r,i=t.elementType===r?i:al(r,i),n);case 1:return r=t.type,i=t.pendingProps,Pl(e,t,r,i=t.elementType===r?i:al(r,i),n);case 3:e:{if(Il(t),null===e)throw Error(ce(387));r=t.pendingProps,i=(o=t.memoizedState).element,Ba(e,t),Ka(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ml(e,t,r,n,i=fl(Error(ce(423)),t));break e}if(r!==i){t=Ml(e,t,r,n,i=fl(Error(ce(424)),t));break e}for(la=po(t.stateNode.containerInfo.firstChild),sa=t,ca=!0,ua=null,n=ja(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(va(),r===i){t=Gl(e,t,n);break e}kl(e,t,r,n)}t=t.child}return t;case 5:return ns(t),null===e&&pa(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,a=i.children,ao(r,i)?a=null:null!==o&&ao(r,o)&&(t.flags|=32),Cl(e,t),kl(e,t,a,n),t.child;case 6:return null===e&&pa(t),null;case 13:return $l(e,t,n);case 4:return es(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Ea(t,null,r,n):kl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,El(e,t,r,i=t.elementType===r?i:al(r,i),n);case 7:return kl(e,t,t.pendingProps,n),t.child;case 8:case 12:return kl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Po(Oa,r._currentValue),r._currentValue=a,null!==o)if(di(o.value,a)){if(o.children===i.children&&!Mo.current){t=Gl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){a=o.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===o.tag){(l=Va(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var u=(c=c.shared).pending;null===u?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),Ia(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===o.tag)a=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(a=o.return))throw Error(ce(341));a.lanes|=n,null!==(s=a.alternate)&&(s.lanes|=n),Ia(a,n,t),a=o.sibling}else a=o.child;if(null!==a)a.return=o;else for(a=o;null!==a;){if(a===t){a=null;break}if(null!==(o=a.sibling)){o.return=a.return,a=o;break}a=a.return}o=a}kl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ma(t,n),r=r(i=Da(i)),t.flags|=1,kl(e,t,r,n),t.child;case 14:return i=al(r=t.type,t.pendingProps),jl(e,t,r,i=al(r.type,i),n);case 15:return Ol(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:al(r,i),Kl(e,t),t.tag=1,Lo(r)?(e=!0,$o(t)):e=!1,Ma(t,n),ul(t,r,i),hl(t,r,i,n),Al(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return Tl(e,t,n)}throw Error(ce(156,t.tag))};var Xu="function"==typeof reportError?reportError:function(e){console.error(e)};function Ju(e){this._internalRoot=e}function Zu(e){this._internalRoot=e}function ed(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function td(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function nd(){}function rd(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"==typeof i){var s=i;i=function(){var e=Gu(a);s.call(e)}}Ku(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var o=r;r=function(){var e=Gu(a);o.call(e)}}var a=Hu(t,r,e,0,null,!1,0,"",nd);return e._reactRootContainer=a,e[bo]=a.current,Hi(8===e.nodeType?e.parentNode:e),pu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=Gu(l);s.call(e)}}var l=qu(e,0,!1,null,0,!1,0,"",nd);return e._reactRootContainer=l,e[bo]=l.current,Hi(8===e.nodeType?e.parentNode:e),pu((function(){Ku(t,l,n,r)})),l}(n,t,e,i,r);return Gu(a)}Zu.prototype.render=Ju.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(ce(409));Ku(e,t,null,null)},Zu.prototype.unmount=Ju.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;pu((function(){Ku(null,e,null,null)})),t[bo]=null}},Zu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&0!==t&&t<Un[n].priority;n++);Un.splice(n,0,e),0===n&&Bn(e)}},jn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gn(t.pendingLanes);0!==n&&(Sn(t,1|n),su(t,tn()),!(6&Ac)&&(Hc=tn()+500,Ko()))}break;case 13:pu((function(){var t=Fa(e,1);if(null!==t){var n=iu();au(t,e,1,n)}})),Qu(e,1)}},On=function(e){if(13===e.tag){var t=Fa(e,134217728);if(null!==t)au(t,e,134217728,iu());Qu(e,134217728)}},Tn=function(e){if(13===e.tag){var t=ou(e),n=Fa(e,t);if(null!==n)au(n,e,t,iu());Qu(e,t)}},Cn=function(){return kn},Nn=function(e,t){var n=kn;try{return kn=e,t()}finally{kn=n}},jt=function(e,t,n){switch(t){case"input":if(nt(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jo(r);if(!i)throw Error(ce(90));Xe(r),nt(r,i)}}}break;case"textarea":ct(e,n);break;case"select":null!=(t=n.value)&&at(e,!!n.multiple,t,!1)}},At=fu,It=pu;var id={usingClientEntryPoint:!1,Events:[ko,Eo,jo,Nt,Pt,fu]},od={findFiberByHostInstance:So,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ad={bundleType:od.bundleType,version:od.version,rendererPackageName:od.rendererPackageName,rendererConfig:od.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Yt(e))?null:e.stateNode},findFiberByHostInstance:od.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var sd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sd.isDisabled&&sd.supportsFiber)try{cn=sd.inject(ad),un=sd}catch(pt){}}re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=id,re.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ed(t))throw Error(ce(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:je,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},re.createRoot=function(e,t){if(!ed(e))throw Error(ce(299));var n=!1,r="",i=Xu;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=qu(e,1,!1,null,0,n,0,r,i),e[bo]=t.current,Hi(8===e.nodeType?e.parentNode:e),new Ju(t)},re.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(ce(188));throw e=Object.keys(e).join(","),Error(ce(268,e))}return e=null===(e=Yt(t))?null:e.stateNode},re.flushSync=function(e){return pu(e)},re.hydrate=function(e,t,n){if(!td(t))throw Error(ce(200));return rd(null,e,t,!0,n)},re.hydrateRoot=function(e,t,n){if(!ed(e))throw Error(ce(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",a=Xu;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=Hu(t,null,e,1,null!=n?n:null,i,0,o,a),e[bo]=t.current,Hi(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zu(t)},re.render=function(e,t,n){if(!td(t))throw Error(ce(200));return rd(null,e,t,!1,n)},re.unmountComponentAtNode=function(e){if(!td(e))throw Error(ce(40));return!!e._reactRootContainer&&(pu((function(){rd(null,null,e,!1,(function(){e._reactRootContainer=null,e[bo]=null}))})),!0)},re.unstable_batchedUpdates=fu,re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!td(n))throw Error(ce(200));if(null==e||void 0===e._reactInternals)throw Error(ce(38));return rd(e,t,n,!1,r)},re.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),ne.exports=re;var ld=ne.exports;const cd=o(ld);var ud,dd,hd,fd=ld;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pd(){return pd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pd.apply(this,arguments)}ud=fd.createRoot,fd.hydrateRoot,(hd=dd||(dd={})).Pop="POP",hd.Push="PUSH",hd.Replace="REPLACE";const md="popstate";function gd(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=dd.Pop,l=null,c=u();null==c&&(c=0,a.replaceState(pd({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){s=dd.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:m.location,delta:t})}function h(e,t){s=dd.Push;let n=wd(m.location,e,t);c=u()+1;let r=bd(n,c),d=m.createHref(n);try{a.pushState(r,"",d)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;i.location.assign(d)}o&&l&&l({action:s,location:m.location,delta:1})}function f(e,t){s=dd.Replace;let n=wd(m.location,e,t);c=u();let r=bd(n,c),i=m.createHref(n);a.replaceState(r,"",i),o&&l&&l({action:s,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:xd(e);return n=n.replace(/ $/,"%20"),yd(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return s},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(md,d),l=e,()=>{i.removeEventListener(md,d),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:h,replace:f,go:e=>a.go(e)};return m}((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return wd("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:xd(t)}),0,e)}function yd(e,t){if(!1===e||null==e)throw new Error(t)}function vd(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch($j){}}}function bd(e,t){return{usr:e.state,key:e.key,idx:t}}function wd(e,t,n,r){return void 0===n&&(n=null),pd({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?_d(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function xd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function _d(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var Sd,kd;function Ed(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let i="string"==typeof t?_d(t):t,o=Fd(i.pathname||"/",n);if(null==o)return null;let a=jd(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let s=null;for(let l=0;null==s&&l<a.length;++l){let e=Ud(o);s=Rd(a[l],e,r)}return s}(e,t,n,!1)}function jd(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(yd(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=Vd([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(yd(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),jd(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:Dd(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of Od(e.path))i(e,t,r);else i(e,t)})),t}function Od(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=Od(r.join("/")),s=[];return s.push(...a.map((e=>""===e?o:[o,e].join("/")))),i&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}(kd=Sd||(Sd={})).data="data",kd.deferred="deferred",kd.redirect="redirect",kd.error="error";const Td=/^:[\w-]+$/,Cd=3,Nd=2,Pd=1,Ad=10,Id=-2,Md=e=>"*"===e;function Dd(e,t){let n=e.split("/"),r=n.length;return n.some(Md)&&(r+=Id),t&&(r+=Nd),n.filter((e=>!Md(e))).reduce(((e,t)=>e+(Td.test(t)?Cd:""===t?Pd:Ad)),r)}function Rd(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=Ld({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=Ld({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:Vd([o,u.pathname]),pathnameBase:qd(Vd([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=Vd([o,u.pathnameBase]))}return a}function Ld(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);vd("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:a,pattern:e}}function Ud(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return vd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Fd(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function zd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function $d(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function Bd(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=_d(e):(i=pd({},e),yd(!i.pathname||!i.pathname.includes("?"),zd("?","pathname","search",i)),yd(!i.pathname||!i.pathname.includes("#"),zd("#","pathname","hash",i)),yd(!i.search||!i.search.includes("#"),zd("#","search","hash",i)));let o,a=""===e||""===i.pathname,s=a?"/":i.pathname;if(null==s)o=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?_d(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:Wd(r),hash:Hd(i)}}(i,o),c=s&&"/"!==s&&s.endsWith("/"),u=(a||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const Vd=e=>e.join("/").replace(/\/\/+/g,"/"),qd=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wd=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Hd=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const Kd=["post","put","patch","delete"];new Set(Kd);const Gd=["get",...Kd];
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Yd(){return Yd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yd.apply(this,arguments)}new Set(Gd);const Qd=W.createContext(null),Xd=W.createContext(null),Jd=W.createContext(null),Zd=W.createContext(null),eh=W.createContext({outlet:null,matches:[],isDataRoute:!1}),th=W.createContext(null);function nh(){return null!=W.useContext(Zd)}function rh(){return nh()||yd(!1),W.useContext(Zd).location}function ih(e){W.useContext(Jd).static||W.useLayoutEffect(e)}function oh(){let{isDataRoute:e}=W.useContext(eh);return e?function(){let{router:e}=function(){let e=W.useContext(Qd);return e||yd(!1),e}(fh.UseNavigateStable),t=mh(ph.UseNavigateStable),n=W.useRef(!1);ih((()=>{n.current=!0}));let r=W.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,Yd({fromRouteId:t},i)))}),[e,t]);return r}():function(){nh()||yd(!1);let e=W.useContext(Qd),{basename:t,future:n,navigator:r}=W.useContext(Jd),{matches:i}=W.useContext(eh),{pathname:o}=rh(),a=JSON.stringify($d(i,n.v7_relativeSplatPath)),s=W.useRef(!1);ih((()=>{s.current=!0}));let l=W.useCallback((function(n,i){if(void 0===i&&(i={}),!s.current)return;if("number"==typeof n)return void r.go(n);let l=Bd(n,JSON.parse(a),o,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:Vd([t,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)}),[t,r,a,o,e]);return l}()}const ah=W.createContext(null);function sh(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=W.useContext(Jd),{matches:i}=W.useContext(eh),{pathname:o}=rh(),a=JSON.stringify($d(i,r.v7_relativeSplatPath));return W.useMemo((()=>Bd(e,JSON.parse(a),o,"path"===n)),[e,a,o,n])}function lh(e,t){return function(e,t,n,r){nh()||yd(!1);let{navigator:i}=W.useContext(Jd),{matches:o}=W.useContext(eh),a=o[o.length-1],s=a?a.params:{};!a||a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c,u=rh();if(t){var d;let e="string"==typeof t?_d(t):t;"/"===l||(null==(d=e.pathname)?void 0:d.startsWith(l))||yd(!1),c=e}else c=u;let h=c.pathname||"/",f=h;if("/"!==l){let e=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let p=Ed(e,{pathname:f}),m=function(e,t,n,r){var i;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var o;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(o=r)&&o.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let a=e,s=null==(i=n)?void 0:i.errors;if(null!=s){let e=a.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||yd(!1),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<a.length;u++){let e=a[u];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(c=u),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){l=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight(((e,r,i)=>{let o,u=!1,d=null,h=null;n&&(o=s&&r.route.id?s[r.route.id]:void 0,d=r.route.errorElement||uh,l&&(c<0&&0===i?(u=!0,h=null):c===i&&(u=!0,h=r.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,i+1)),p=()=>{let t;return t=o?d:u?h:r.route.Component?W.createElement(r.route.Component,null):r.route.element?r.route.element:e,W.createElement(hh,{match:r,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?W.createElement(dh,{location:n.location,revalidation:n.revalidation,component:d,error:o,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()}),null)}(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:Vd([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:Vd([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,n,r);if(t&&m)return W.createElement(Zd.Provider,{value:{location:Yd({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:dd.Pop}},m);return m}(e,t)}function ch(){let e=function(){var e;let t=W.useContext(th),n=function(){let e=W.useContext(Xd);return e||yd(!1),e}(ph.UseRouteError),r=mh(ph.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},t),n?W.createElement("pre",{style:r},n):null,null)}const uh=W.createElement(ch,null);class dh extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?W.createElement(eh.Provider,{value:this.props.routeContext},W.createElement(th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hh(e){let{routeContext:t,match:n,children:r}=e,i=W.useContext(Qd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),W.createElement(eh.Provider,{value:t},r)}var fh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fh||{}),ph=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ph||{});function mh(e){let t=function(){let e=W.useContext(eh);return e||yd(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||yd(!1),n.route.id}const gh={};const yh=(e,t,n)=>{var r;gh[r="⚠️ React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+n+"."]||(gh[r]=!0,console.warn(r))};function vh(e){let{to:t,replace:n,state:r,relative:i}=e;nh()||yd(!1);let{future:o,static:a}=W.useContext(Jd),{matches:s}=W.useContext(eh),{pathname:l}=rh(),c=oh(),u=Bd(t,$d(s,o.v7_relativeSplatPath),l,"path"===i),d=JSON.stringify(u);return W.useEffect((()=>c(JSON.parse(d),{replace:n,state:r,relative:i})),[c,d,i,n,r]),null}function bh(e){return function(e){let t=W.useContext(eh).outlet;return t?W.createElement(ah.Provider,{value:e},t):t}(e.context)}function wh(e){yd(!1)}function xh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=dd.Pop,navigator:o,static:a=!1,future:s}=e;nh()&&yd(!1);let l=t.replace(/^\/*/,"/"),c=W.useMemo((()=>({basename:l,navigator:o,static:a,future:Yd({v7_relativeSplatPath:!1},s)})),[l,s,o,a]);"string"==typeof r&&(r=_d(r));let{pathname:u="/",search:d="",hash:h="",state:f=null,key:p="default"}=r,m=W.useMemo((()=>{let e=Fd(u,l);return null==e?null:{location:{pathname:e,search:d,hash:h,state:f,key:p},navigationType:i}}),[l,u,d,h,f,p,i]);return null==m?null:W.createElement(Jd.Provider,{value:c},W.createElement(Zd.Provider,{children:n,value:m}))}function _h(e){let{children:t,location:n}=e;return lh(Sh(t),n)}function Sh(e,t){void 0===t&&(t=[]);let n=[];return W.Children.forEach(e,((e,r)=>{if(!W.isValidElement(e))return;let i=[...t,r];if(e.type===W.Fragment)return void n.push.apply(n,Sh(e.props.children,i));e.type!==wh&&yd(!1),e.props.index&&e.props.children&&yd(!1);let o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=Sh(e.props.children,i)),n.push(o)})),n}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kh(){return kh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kh.apply(this,arguments)}function Eh(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function jh(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}new Promise((()=>{}));const Oh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Th=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch($j){}const Ch=W.createContext({isTransitioning:!1}),Nh=K.startTransition;function Ph(e){let{basename:t,children:n,future:r,window:i}=e,o=W.useRef();null==o.current&&(o.current=gd({window:i,v5Compat:!0}));let a=o.current,[s,l]=W.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},u=W.useCallback((e=>{c&&Nh?Nh((()=>l(e))):l(e)}),[l,c]);return W.useLayoutEffect((()=>a.listen(u)),[a,u]),W.useEffect((()=>{return null!=(e=r)&&e.v7_startTransition||yh("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),void(null!=e&&e.v7_relativeSplatPath||t||yh("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"));var e,t}),[r]),W.createElement(xh,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const Ah="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mh=W.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:c,preventScrollReset:u,viewTransition:d}=e,h=Eh(e,Oh),{basename:f}=W.useContext(Jd),p=!1;if("string"==typeof c&&Ih.test(c)&&(n=c,Ah))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=Fd(t.pathname,f);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:p=!0}catch($j){}let m=function(e,t){let{relative:n}=void 0===t?{}:t;nh()||yd(!1);let{basename:r,navigator:i}=W.useContext(Jd),{hash:o,pathname:a,search:s}=sh(e,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:Vd([r,a])),i.createHref({pathname:l,search:s,hash:o})}(c,{relative:i}),g=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=void 0===t?{}:t,l=oh(),c=rh(),u=sh(e,{relative:a});return W.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:xd(c)===xd(u);l(e,{replace:n,state:i,preventScrollReset:o,relative:a,viewTransition:s})}}),[c,l,u,r,i,n,e,o,a,s])}(c,{replace:a,state:s,target:l,preventScrollReset:u,relative:i,viewTransition:d});return W.createElement("a",kh({},h,{href:n||m,onClick:p||o?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))})),Dh=W.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:i="",end:o=!1,style:a,to:s,viewTransition:l,children:c}=e,u=Eh(e,Th),d=sh(s,{relative:u.relative}),h=rh(),f=W.useContext(Xd),{navigator:p,basename:m}=W.useContext(Jd),g=null!=f&&function(e,t){void 0===t&&(t={});let n=W.useContext(Ch);null==n&&yd(!1);let{basename:r}=function(){let e=W.useContext(Qd);return e||yd(!1),e}(Rh.useViewTransitionState),i=sh(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Fd(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Fd(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=Ld(i.pathname,a)||null!=Ld(i.pathname,o)}(d)&&!0===l,y=p.encodeLocation?p.encodeLocation(d).pathname:d.pathname,v=h.pathname,b=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;r||(v=v.toLowerCase(),b=b?b.toLowerCase():null,y=y.toLowerCase()),b&&m&&(b=Fd(b,m)||b);const w="/"!==y&&y.endsWith("/")?y.length-1:y.length;let x,_=v===y||!o&&v.startsWith(y)&&"/"===v.charAt(w),S=null!=b&&(b===y||!o&&b.startsWith(y)&&"/"===b.charAt(y.length)),k={isActive:_,isPending:S,isTransitioning:g},E=_?n:void 0;x="function"==typeof i?i(k):[i,_?"active":null,S?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let j="function"==typeof a?a(k):a;return W.createElement(Mh,kh({},u,{"aria-current":E,className:x,ref:t,style:j,to:s,viewTransition:l}),"function"==typeof c?c(k):c)}));var Rh,Lh,Uh,Fh;function zh(e){let t=W.useRef(jh(e)),n=W.useRef(!1),r=rh(),i=W.useMemo((()=>function(e,t){let n=jh(e);return t&&t.forEach(((e,r)=>{n.has(r)||t.getAll(r).forEach((e=>{n.append(r,e)}))})),n}(r.search,n.current?null:t.current)),[r.search]),o=oh(),a=W.useCallback(((e,t)=>{const r=jh("function"==typeof e?e(i):e);n.current=!0,o("?"+r,t)}),[o,i]);return[i,a]}(Lh=Rh||(Rh={})).UseScrollRestoration="useScrollRestoration",Lh.UseSubmit="useSubmit",Lh.UseSubmitFetcher="useSubmitFetcher",Lh.UseFetcher="useFetcher",Lh.useViewTransitionState="useViewTransitionState",(Fh=Uh||(Uh={})).UseFetcher="useFetcher",Fh.UseFetchers="useFetchers",Fh.UseScrollRestoration="useScrollRestoration";var $h={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Vh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,a=o?e[i+1]:0,s=i+2<e.length,l=s?e[i+2]:0,c=t>>2,u=(3&t)<<4|a>>4;let d=(15&a)<<2|l>>6,h=63&l;s||(h=64,o||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Bh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const s=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==a||null==s)throw new qh;const l=t<<2|o>>4;if(r.push(l),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==s){const e=a<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class qh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wh=function(e){return function(e){const t=Bh(e);return Vh.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Hh=function(e){try{return Vh.decodeString(e,!0)}catch($j){console.error("base64Decode failed: ",$j)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kh=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Gh=()=>{try{return Kh()||(()=>{if("undefined"==typeof process)return;const e=$h.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch($j){return}const t=e&&Hh(e[1]);return t&&JSON.parse(t)})()}catch($j){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${$j}`)}},Yh=e=>{var t,n;return null===(n=null===(t=Gh())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Qh=()=>{var e;return null===(e=Gh())||void 0===e?void 0:e.config},Xh=e=>{var t;return null===(t=Gh())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Jh=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ef(){return!function(){var e;const t=null===(e=Gh())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch($j){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class tf extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,tf.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nf.prototype.create)}}class nf{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(rf,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new tf(r,a,n)}}const rf=/\{\$([^}]+)}/g;function of(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(af(n)&&af(o)){if(!of(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function af(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function lf(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function cf(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class uf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=df),void 0===r.error&&(r.error=df),void 0===r.complete&&(r.complete=df);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch($j){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch($j){"undefined"!=typeof console&&console.error&&console.error($j)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function df(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(e){return e&&e._delegate?e._delegate:e}class ff{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Jh;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch($j){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch($j){if(r)return null;throw $j}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:pf})}catch($j){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch($j){}}}}clearInstance(e=pf){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=pf){return this.instances.has(e)}getOptions(e=pf){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===pf?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=pf){return this.component?this.component.multipleInstances?e:pf:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class gf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yf,vf;(vf=yf||(yf={}))[vf.DEBUG=0]="DEBUG",vf[vf.VERBOSE=1]="VERBOSE",vf[vf.INFO=2]="INFO",vf[vf.WARN=3]="WARN",vf[vf.ERROR=4]="ERROR",vf[vf.SILENT=5]="SILENT";const bf={debug:yf.DEBUG,verbose:yf.VERBOSE,info:yf.INFO,warn:yf.WARN,error:yf.ERROR,silent:yf.SILENT},wf=yf.INFO,xf={[yf.DEBUG]:"log",[yf.VERBOSE]:"log",[yf.INFO]:"info",[yf.WARN]:"warn",[yf.ERROR]:"error"},_f=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=xf[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Sf{constructor(e){this.name=e,this._logLevel=wf,this._logHandler=_f,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in yf))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,yf.DEBUG,...e),this._logHandler(this,yf.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,yf.VERBOSE,...e),this._logHandler(this,yf.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,yf.INFO,...e),this._logHandler(this,yf.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,yf.WARN,...e),this._logHandler(this,yf.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,yf.ERROR,...e),this._logHandler(this,yf.ERROR,...e)}}let kf,Ef;const jf=new WeakMap,Of=new WeakMap,Tf=new WeakMap,Cf=new WeakMap,Nf=new WeakMap;let Pf={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Of.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Tf.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mf(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Af(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Df(this),t),Mf(jf.get(this))}:function(...t){return Mf(e.apply(Df(this),t))}:function(t,...n){const r=e.call(Df(this),t,...n);return Tf.set(r,t.sort?t.sort():[t]),Mf(r)}}function If(e){return"function"==typeof e?Af(e):(e instanceof IDBTransaction&&function(e){if(Of.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));Of.set(e,t)}(e),t=e,(kf||(kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Pf):e);var t}function Mf(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(Mf(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&jf.set(t,e)})).catch((()=>{})),Nf.set(t,e),t}(e);if(Cf.has(e))return Cf.get(e);const t=If(e);return t!==e&&(Cf.set(e,t),Nf.set(t,e)),t}const Df=e=>Nf.get(e);const Rf=["get","getKey","getAll","getAllKeys","count"],Lf=["put","add","delete","clear"],Uf=new Map;function Ff(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Uf.get(t))return Uf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Lf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Rf.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return Uf.set(t,o),o}Pf=(e=>({...e,get:(t,n,r)=>Ff(t,n)||e.get(t,n,r),has:(t,n)=>!!Ff(t,n)||e.has(t,n)}))(Pf);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const $f="@firebase/app",Bf="0.10.13",Vf=new Sf("@firebase/app"),qf="@firebase/app-compat",Wf="@firebase/analytics-compat",Hf="@firebase/analytics",Kf="@firebase/app-check-compat",Gf="@firebase/app-check",Yf="@firebase/auth",Qf="@firebase/auth-compat",Xf="@firebase/database",Jf="@firebase/data-connect",Zf="@firebase/database-compat",ep="@firebase/functions",tp="@firebase/functions-compat",np="@firebase/installations",rp="@firebase/installations-compat",ip="@firebase/messaging",op="@firebase/messaging-compat",ap="@firebase/performance",sp="@firebase/performance-compat",lp="@firebase/remote-config",cp="@firebase/remote-config-compat",up="@firebase/storage",dp="@firebase/storage-compat",hp="@firebase/firestore",fp="@firebase/vertexai-preview",pp="@firebase/firestore-compat",mp="firebase",gp="[DEFAULT]",yp={[$f]:"fire-core",[qf]:"fire-core-compat",[Hf]:"fire-analytics",[Wf]:"fire-analytics-compat",[Gf]:"fire-app-check",[Kf]:"fire-app-check-compat",[Yf]:"fire-auth",[Qf]:"fire-auth-compat",[Xf]:"fire-rtdb",[Jf]:"fire-data-connect",[Zf]:"fire-rtdb-compat",[ep]:"fire-fn",[tp]:"fire-fn-compat",[np]:"fire-iid",[rp]:"fire-iid-compat",[ip]:"fire-fcm",[op]:"fire-fcm-compat",[ap]:"fire-perf",[sp]:"fire-perf-compat",[lp]:"fire-rc",[cp]:"fire-rc-compat",[up]:"fire-gcs",[dp]:"fire-gcs-compat",[hp]:"fire-fst",[pp]:"fire-fst-compat",[fp]:"fire-vertex","fire-js":"fire-js",[mp]:"fire-js-all"},vp=new Map,bp=new Map,wp=new Map;function xp(e,t){try{e.container.addComponent(t)}catch($j){Vf.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,$j)}}function _p(e){const t=e.name;if(wp.has(t))return Vf.debug(`There were multiple attempts to register component ${t}.`),!1;wp.set(t,e);for(const n of vp.values())xp(n,e);for(const n of bp.values())xp(n,e);return!0}function Sp(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function kp(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new nf("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jp{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ff("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ep.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="10.14.1";function Tp(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:gp,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Ep.create("bad-app-name",{appName:String(i)});if(n||(n=Qh()),!n)throw Ep.create("no-options");const o=vp.get(i);if(o){if(of(n,o.options)&&of(r,o.config))return o;throw Ep.create("duplicate-app",{appName:i})}const a=new gf(i);for(const l of wp.values())a.addComponent(l);const s=new jp(n,r,a);return vp.set(i,s),s}function Cp(e=gp){const t=vp.get(e);if(!t&&e===gp&&Qh())return Tp();if(!t)throw Ep.create("no-app",{appName:e});return t}function Np(e,t,n){var r;let i=null!==(r=yp[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Vf.warn(e.join(" "))}_p(new ff(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="firebase-heartbeat-store";let Ap=null;function Ip(){return Ap||(Ap=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=Mf(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(Mf(a.result),e.oldVersion,e.newVersion,Mf(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Pp)}catch($j){console.warn($j)}}}).catch((e=>{throw Ep.create("idb-open",{originalErrorMessage:e.message})}))),Ap}async function Mp(e,t){try{const n=(await Ip()).transaction(Pp,"readwrite"),r=n.objectStore(Pp);await r.put(t,Dp(e)),await n.done}catch($j){if($j instanceof tf)Vf.warn($j.message);else{const t=Ep.create("idb-set",{originalErrorMessage:null==$j?void 0:$j.message});Vf.warn(t.message)}}}function Dp(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Up(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lp();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch($j){Vf.warn($j)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Lp(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Fp(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=Wh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch($j){return Vf.warn($j),""}}}function Lp(){return(new Date).toISOString().substring(0,10)}class Up{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch($j){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Ip()).transaction(Pp),n=await t.objectStore(Pp).get(Dp(e));return await t.done,n}catch($j){if($j instanceof tf)Vf.warn($j.message);else{const t=Ep.create("idb-get",{originalErrorMessage:null==$j?void 0:$j.message});Vf.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mp(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mp(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Fp(e){return Wh(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zp;zp="",_p(new ff("platform-logger",(e=>new zf(e)),"PRIVATE")),_p(new ff("heartbeat",(e=>new Rp(e)),"PRIVATE")),Np($f,Bf,zp),Np($f,Bf,"esm2017"),Np("fire-js","");var $p=function(){return $p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},$p.apply(this,arguments)};function Bp(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Vp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}"function"==typeof SuppressedError&&SuppressedError;const qp=Vp,Wp=new nf("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Hp=new Sf("@firebase/auth");function Kp(e,...t){Hp.logLevel<=yf.ERROR&&Hp.error(`Auth (${Op}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(e,...t){throw Jp(e,...t)}function Yp(e,...t){return Jp(e,...t)}function Qp(e,t,n){const r=Object.assign(Object.assign({},qp()),{[t]:n});return new nf("auth","Firebase",r).create(t,{appName:e.name})}function Xp(e){return Qp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jp(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Wp.create(e,...t)}function Zp(e,t,...n){if(!e)throw Jp(t,...n)}function em(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Kp(t),new Error(t)}function tm(e,t){e||em(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function rm(){return"http:"===im()||"https:"===im()}function im(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(rm()||function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class am{constructor(e,t){this.shortDelay=e,this.longDelay=t,tm(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zh())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return om()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(e,t){tm(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void em("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void em("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void em("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},um=new am(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function hm(e,t,n,r,i={}){return fm(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const a=sf(Object.assign({key:e.config.apiKey},o)).slice(1),s=await e._getAdditionalHeaders();s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:s},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),lm.fetch()(mm(e,e.config.apiHost,n,a),l)}))}async function fm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},cm),t);try{const t=new ym(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vm(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw vm(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw vm(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw vm(e,"user-disabled",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Qp(e,s,a);Gp(e,s)}}catch($j){if($j instanceof tf)throw $j;Gp(e,"network-request-failed",{message:String($j)})}}async function pm(e,t,n,r,i={}){const o=await hm(e,t,n,r,i);return"mfaPendingCredential"in o&&Gp(e,"multi-factor-auth-required",{_serverResponse:o}),o}function mm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?sm(e.config,i):`${e.config.apiScheme}://${i}`}function gm(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ym{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Yp(this.auth,"network-request-failed"))),um.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function vm(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yp(e,t,r);return i.customData._tokenResponse=n,i}function bm(e){return void 0!==e&&void 0!==e.enterprise}class wm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return gm(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function xm(e,t){return hm(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch($j){}}function Sm(e){return 1e3*Number(e)}function km(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Kp("JWT malformed, contained fewer than 3 sections"),null;try{const e=Hh(n);return e?JSON.parse(e):(Kp("Failed to decode base64 JWT payload"),null)}catch($j){return Kp("Caught error parsing JWT payload as JSON",null==$j?void 0:$j.toString()),null}}function Em(e){const t=km(e);return Zp(t,"internal-error"),Zp(void 0!==t.exp,"internal-error"),Zp(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jm(e,t,n=!1){if(n)return t;try{return await t}catch($j){throw $j instanceof tf&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */($j)&&e.auth.currentUser===e&&await e.auth.signOut(),$j}}class Om{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch($j){return void("auth/network-request-failed"===(null==$j?void 0:$j.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_m(this.lastLoginAt),this.creationTime=_m(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(e){var t;const n=e.auth,r=await e.getIdToken(),i=await jm(e,xm(n,{idToken:r}));Zp(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?Nm(o.providerUserInfo):[],s=(l=e.providerData,c=a,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==s?void 0:s.length)),h=!!u&&d,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Tm(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,f)}function Nm(e){return e.map((e=>{var{providerId:t}=e,n=Bp(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pm{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Zp(e.idToken,"internal-error"),Zp(void 0!==e.idToken,"internal-error"),Zp(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Zp(0!==e.length,"internal-error");const t=Em(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Zp(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await fm(e,{},(async()=>{const n=sf({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=mm(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lm.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Pm;return n&&(Zp("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(Zp("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(Zp("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pm,this.toJSON())}_performRefresh(){return em("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(e,t){Zp("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Im{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Om(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await jm(this,this.stsTokenManager.getToken(this.auth,e));return Zp(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=hf(e),r=await n.getIdToken(t),i=km(r);Zp(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:_m(Sm(i.auth_time)),issuedAtTime:_m(Sm(i.iat)),expirationTime:_m(Sm(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=hf(e);await Cm(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Zp(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Im(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Zp(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Cm(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kp(this.auth.app))return Promise.reject(Xp(this.auth));const e=await this.getIdToken();return await jm(this,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return hm(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:_}=t;Zp(v&&_,e,"internal-error");const S=Pm.fromJSON(this.name,_);Zp("string"==typeof v,e,"internal-error"),Am(u,e.name),Am(d,e.name),Zp("boolean"==typeof b,e,"internal-error"),Zp("boolean"==typeof w,e,"internal-error"),Am(h,e.name),Am(f,e.name),Am(p,e.name),Am(m,e.name),Am(g,e.name),Am(y,e.name);const k=new Im({uid:v,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(k.providerData=x.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new Pm;r.updateFromServerResponse(t);const i=new Im({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Cm(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Zp(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?Nm(r.providerUserInfo):[],o=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),a=new Pm;a.updateFromIdToken(n);const s=new Im({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Tm(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(s,l),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new Map;function Dm(e){tm(e instanceof Function,"Expected a class definition");let t=Mm.get(e);return t?(tm(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Mm.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rm.type="NONE";const Lm=Rm;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(e,t,n){return`firebase:${e}:${t}:${n}`}class Fm{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Um(this.userKey,r.apiKey,i),this.fullPersistenceKey=Um("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Im._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Fm(Dm(Lm),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Dm(Lm);const o=Um(n,e.config.apiKey,e.name);let a=null;for(const c of t)try{const t=await c._get(o);if(t){const n=Im._fromJSON(e,t);c!==i&&(a=n),i=c;break}}catch(l){}const s=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(l){}}))),new Fm(i,e,n)):new Fm(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($m(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hm(t))return"Blackberry";if(Km(t))return"Webos";if(Bm(t))return"Safari";if((t.includes("chrome/")||Vm(t))&&!t.includes("edge/"))return"Chrome";if(Wm(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function $m(e=Zh()){return/firefox\//i.test(e)}function Bm(e=Zh()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Vm(e=Zh()){return/crios\//i.test(e)}function qm(e=Zh()){return/iemobile/i.test(e)}function Wm(e=Zh()){return/android/i.test(e)}function Hm(e=Zh()){return/blackberry/i.test(e)}function Km(e=Zh()){return/webos/i.test(e)}function Gm(e=Zh()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ym(){return function(){const e=Zh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Qm(e=Zh()){return Gm(e)||Wm(e)||Km(e)||Hm(e)||/windows phone/i.test(e)||qm(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(e,t=[]){let n;switch(e){case"Browser":n=zm(Zh());break;case"Worker":n=`${zm(Zh())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Op}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch($j){r($j)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch($j){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==$j?void 0:$j.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,a;const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(o=s.containsNumericCharacter)||void 0===o||o),s.isValid&&(s.isValid=null===(a=s.containsNonAlphanumericCharacter)||void 0===a||a),s}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ng(this),this.idTokenSubscription=new ng(this),this.beforeStateQueue=new Jm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dm(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Fm.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch($j){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await xm(this,{idToken:e}),n=await Im._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(kp(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch($j){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject($j)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Zp(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch($j){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cm(e)}catch($j){if("auth/network-request-failed"!==(null==$j?void 0:$j.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kp(this.app))return Promise.reject(Xp(this));const t=e?hf(e):null;return t&&Zp(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Zp(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return kp(this.app)?Promise.reject(Xp(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kp(this.app)?Promise.reject(Xp(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(Dm(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return hm(e,"GET","/v2/passwordPolicy",dm(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new Zm(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nf("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return hm(e,"POST","/v2/accounts:revokeToken",dm(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dm(e)||this._popupRedirectResolver;Zp(t,this,"argument-error"),this.redirectPersistenceManager=await Fm.create(this,[Dm(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Zp(a,this,"internal-error"),a.then((()=>{o||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Zp(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Hp.logLevel<=yf.WARN&&Hp.warn(`Auth (${Op}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function tg(e){return hf(e)}class ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new uf(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Zp(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ig(e){return rg.loadJS(e)}class og{constructor(e){this.type="recaptcha-enterprise",this.auth=tg(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{(async function(e,t){return hm(e,"GET","/v2/recaptchaConfig",dm(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new wm(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;bm(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&bm(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=rg.recaptchaEnterpriseScript;0!==t.length&&(t+=n),ig(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function ag(e,t,n,r=!1){const i=new og(e);let o;try{o=await i.verify(n)}catch(s){o=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function sg(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ag(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await ag(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(e,t,n){const r=tg(e);Zp(r._canInitEmulator,r,"emulator-config-failed"),Zp(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=cg(t),{host:o,port:a}=function(e){const t=cg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ug(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ug(t)}}}(t),s=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${o}${s}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function cg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ug(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class dg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return em("not implemented")}_getIdTokenResponse(e){return em("not implemented")}_linkToIdToken(e,t){return em("not implemented")}_getReauthenticationResolver(e){return em("not implemented")}}async function hg(e,t){return hm(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(e,t){return pm(e,"POST","/v1/accounts:signInWithPassword",dm(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pg extends dg{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new pg(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pg(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return sg(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",fg);case"emailLink":return async function(e,t){return pm(e,"POST","/v1/accounts:signInWithEmailLink",dm(e,t))}(e,{email:this._email,oobCode:this._password});default:Gp(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return sg(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hg);case"emailLink":return async function(e,t){return pm(e,"POST","/v1/accounts:signInWithEmailLink",dm(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Gp(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(e,t){return pm(e,"POST","/v1/accounts:signInWithIdp",dm(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg extends dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gg(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gp("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Bp(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new gg(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return mg(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,mg(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mg(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sf(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){var t,n,r,i,o,a;const s=lf(cf(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,c=null!==(n=s.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);Zp(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=lf(cf(e)).link,n=t?lf(cf(t)).deep_link_id:null,r=lf(cf(e)).deep_link_id;return(r?lf(cf(r)).link:null)||r||n||t||e}(e);try{return new yg(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.providerId=vg.PROVIDER_ID}static credential(e,t){return pg._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=yg.parseLink(t);return Zp(n,"argument-error"),pg._fromEmailAndCode(e,n.code,n.tenantId)}}vg.PROVIDER_ID="password",vg.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vg.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends bg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends wg{constructor(){super("facebook.com")}static credential(e){return gg._fromParams({providerId:xg.PROVIDER_ID,signInMethod:xg.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xg.credentialFromTaggedObject(e)}static credentialFromError(e){return xg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xg.credential(e.oauthAccessToken)}catch(t){return null}}}xg.FACEBOOK_SIGN_IN_METHOD="facebook.com",xg.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _g extends wg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gg._fromParams({providerId:_g.PROVIDER_ID,signInMethod:_g.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _g.credentialFromTaggedObject(e)}static credentialFromError(e){return _g.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _g.credential(t,n)}catch(r){return null}}}_g.GOOGLE_SIGN_IN_METHOD="google.com",_g.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sg extends wg{constructor(){super("github.com")}static credential(e){return gg._fromParams({providerId:Sg.PROVIDER_ID,signInMethod:Sg.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sg.credentialFromTaggedObject(e)}static credentialFromError(e){return Sg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Sg.credential(e.oauthAccessToken)}catch(t){return null}}}Sg.GITHUB_SIGN_IN_METHOD="github.com",Sg.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kg extends wg{constructor(){super("twitter.com")}static credential(e,t){return gg._fromParams({providerId:kg.PROVIDER_ID,signInMethod:kg.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kg.credentialFromTaggedObject(e)}static credentialFromError(e){return kg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return kg.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Eg(e,t){return pm(e,"POST","/v1/accounts:signUp",dm(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kg.TWITTER_SIGN_IN_METHOD="twitter.com",kg.PROVIDER_ID="twitter.com";class jg{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Im._fromIdTokenResponse(e,n,r),o=Og(n);return new jg({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Og(n);return new jg({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Og(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends tf{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Tg.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Tg(e,t,n,r)}}function Cg(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Tg._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ng(e,t,n=!1){const{auth:r}=e;if(kp(r.app))return Promise.reject(Xp(r));const i="reauthenticate";try{const o=await jm(e,Cg(r,i,t,e),n);Zp(o.idToken,r,"internal-error");const a=km(o.idToken);Zp(a,r,"internal-error");const{sub:s}=a;return Zp(e.uid===s,r,"user-mismatch"),jg._forOperation(e,i,o)}catch($j){throw"auth/user-not-found"===(null==$j?void 0:$j.code)&&Gp(r,"user-mismatch"),$j}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(e,t,n=!1){if(kp(e.app))return Promise.reject(Xp(e));const r="signIn",i=await Cg(e,r,t),o=await jg._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ag(e){const t=tg(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Ig(e,t,n){return kp(e.app)?Promise.reject(Xp(e)):async function(e,t){return Pg(tg(e),t)}(hf(e),vg.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Ag(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mg(e,t){const n={identifier:t,continueUri:rm()?nm():"http://localhost"},{signinMethods:r}=await async function(e,t){return hm(e,"POST","/v1/accounts:createAuthUri",dm(e,t))}(hf(e),n);return r||[]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dg(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=hf(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await jm(r,async function(e,t){return hm(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Rg(e,t){return async function(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};n&&(o.password=n);const a=await jm(e,async function(e,t){return hm(e,"POST","/v1/accounts:update",t)}(r,o));await e._updateTokensIfNecessary(a,!0)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(hf(e),0,t)}function Lg(e,t){return hf(e).setPersistence(t)}const Ug="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ug,"1"),this.storage.removeItem(Ug),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Fg{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ym()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zg.type="LOCAL";const $g=zg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg extends Fg{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Bg.type="SESSION";const Vg=Bg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qg(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map((async e=>e(t.origin,i))),s=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wg(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qg.receivers=[];class Hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((a,s)=>{const l=Wg("",20);r.port1.start();const c=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(c),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gg(){return void 0!==Kg().WorkerGlobalScope&&"function"==typeof Kg().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yg="firebaseLocalStorageDb",Qg="firebaseLocalStorage",Xg="fbase_key";class Jg{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Zg(e,t){return e.transaction([Qg],t?"readwrite":"readonly").objectStore(Qg)}function ey(){const e=indexedDB.open(Yg,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Qg,{keyPath:Xg})}catch($j){n($j)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Qg)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Yg);return new Jg(e).toPromise()}(),t(await ey()))}))}))}async function ty(e,t,n){const r=Zg(e,!0).put({[Xg]:t,value:n});return new Jg(r).toPromise()}function ny(e,t){const n=Zg(e,!0).delete(t);return new Jg(n).toPromise()}class ry{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ey()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch($j){if(t++>3)throw $j;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qg._getInstance(Gg()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Hg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ey();return await ty(e,Ug,"1"),await ny(e,Ug),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ty(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Zg(e,!1).get(t),r=await new Jg(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ny(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Zg(e,!1).getAll();return new Jg(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ry.type="LOCAL";const iy=ry;new am(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oy extends dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mg(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mg(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mg(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ay(e){return Pg(e.auth,new oy(e),e.bypassAuthState)}function sy(e){const{auth:t,user:n}=e;return Zp(n,t,"internal-error"),Ng(n,new oy(e),e.bypassAuthState)}async function ly(e){const{auth:t,user:n}=e;return Zp(n,t,"internal-error"),async function(e,t,n=!1){const r=await jm(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jg._forOperation(e,"link",r)}(n,new oy(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch($j){this.reject($j)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch($j){this.reject($j)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ay;case"linkViaPopup":case"linkViaRedirect":return ly;case"reauthViaPopup":case"reauthViaRedirect":return sy;default:Gp(this.auth,"internal-error")}}resolve(e){tm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new am(2e3,1e4);class dy extends cy{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,dy.currentPopupAction&&dy.currentPopupAction.cancel(),dy.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Zp(e,this.auth,"internal-error"),e}async onExecution(){tm(1===this.filter.length,"Popup operations only handle one event");const e=Wg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Yp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Yp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dy.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Yp(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,uy.get())};e()}}dy.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hy="pendingRedirect",fy=new Map;class py extends cy{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=fy.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Um(hy,e.config.apiKey,e.name)}(t),r=function(e){return Dm(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch($j){e=()=>Promise.reject($j)}fy.set(this.auth._key(),e)}return this.bypassAuthState||fy.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function my(e,t){fy.set(e._key(),t)}async function gy(e,t,n=!1){if(kp(e.app))return Promise.reject(Xp(e));const r=tg(e),i=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?Dm(t):(Zp(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),o=new py(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return by(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!by(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Yp(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(vy(e))}saveEventToCache(e){this.cachedEventUids.add(vy(e)),this.lastProcessedEventTime=Date.now()}}function vy(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function by({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xy=/^https?/;async function _y(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return hm(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Sy(r))return}catch(n){}Gp(e,"unauthorized-domain")}function Sy(e){const t=nm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!xy.test(n))return!1;if(wy.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new am(3e4,6e4);function Ey(){const e=Kg().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function jy(e){return new Promise(((t,n)=>{var r,i,o;function a(){Ey(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ey(),n(Yp(e,"network-request-failed"))},timeout:ky.get()})}if(null===(i=null===(r=Kg().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Kg().gapi)||void 0===o?void 0:o.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Kg()[t]=()=>{gapi.load?a():n(Yp(e,"network-request-failed"))},ig(`${rg.gapiScript}?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw Oy=null,e}))}let Oy=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ty=new am(5e3,15e3),Cy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ny=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Py(e){const t=e.config;Zp(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?sm(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Op},i=Ny.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${sf(r).slice(1)}`}async function Ay(e){const t=await function(e){return Oy=Oy||jy(e),Oy}(e),n=Kg().gapi;return Zp(n,e,"internal-error"),t.open({where:document.body,url:Py(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cy,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Yp(e,"network-request-failed"),o=Kg().setTimeout((()=>{r(i)}),Ty.get());function a(){Kg().clearTimeout(o),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class My{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch($j){}}}function Dy(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Iy),{width:r.toString(),height:i.toString(),top:o,left:a}),c=Zh().toLowerCase();n&&(s=Vm(c)?"_blank":n),$m(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Zh()){var t;return Gm(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",s),new My(null);const d=window.open(t||"",s,u);Zp(d,e,"popup-blocked");try{d.focus()}catch($j){}return new My(d)}const Ry="__/auth/handler",Ly="emulator/auth/handler",Uy=encodeURIComponent("fac");async function Fy(e,t,n,r,i,o){Zp(e.config.authDomain,e,"auth-domain-config-required"),Zp(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Op,eventId:i};if(t instanceof bg){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))a[e]=t}if(t instanceof wg){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const u of Object.keys(s))void 0===s[u]&&delete s[u];const l=await e._getAppCheckToken(),c=l?`#${Uy}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Ry}`;return sm(e,Ly)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${sf(s).slice(1)}${c}`}const zy="webStorageSupport";const $y=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vg,this._completeRedirectFn=gy,this._overrideRedirectResult=my}async _openPopup(e,t,n,r){var i;tm(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Dy(e,await Fy(e,t,n,nm(),r),Wg())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Kg().location.href=e}(await Fy(e,t,n,nm(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(tm(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ay(e),n=new yy(e);return t.register("authEvent",(t=>{Zp(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zy,{type:zy},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[zy];void 0!==i&&t(!!i),Gp(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_y(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qm()||Bm()||Gm()}};var By="@firebase/auth",Vy="1.7.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Zp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wy=Xh("authIdTokenMaxAge")||300;let Hy=null;function Ky(e=Cp()){const t=Sp(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Sp(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(of(n.getOptions(),null!=t?t:{}))return e;Gp(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:$y,persistence:[iy,$g,Vg]}),r=Xh("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Wy)return;const r=null==t?void 0:t.token;Hy!==r&&(Hy=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){hf(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){hf(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const o=Yh("auth");return o&&lg(n,`http://${o}`),n}var Gy,Yy;Gy={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Yp("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},rg=Gy,Yy="Browser",_p(new ff("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;Zp(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const s={apiKey:o,authDomain:a,clientPlatform:Yy,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xm(Yy)},l=new eg(n,r,i,s);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dm);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),_p(new ff("auth-internal",(e=>{const t=tg(e.getProvider("auth").getImmediate());return new qy(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Np(By,Vy,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Yy)),Np(By,Vy,"esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Np("firebase","10.14.1","app");var Qy,Xy,Jy="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],a=t+(o^n&(i^o))+r[0]+3614090360&4294967295;a=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=n+(a<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(o^n&(i^o))+r[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(o^n&(i^o))+r[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(o^n&(i^o))+r[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^o&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^o&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^o&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^o&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^o)+r[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^o)+r[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^o)+r[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^o)+r[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~o))+r[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(o|~n))+r[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(o^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~o))+r[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(o|~n))+r[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(o^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~o))+r[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(o|~n))+r[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(o^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((o=(t=n+((a=t+(i^(n|~o))+r[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=o+((a=i+(t^(o|~n))+r[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=0|e[i];r&&o==t||(n[i]=o,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,o=this.h,a=0;a<t;){if(0==o)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(i[o++]=e.charCodeAt(a++),o==this.blockSize){n(this,i),o=0;break}}else for(;a<t;)if(i[o++]=e[a++],o==this.blockSize){n(this,i),o=0;break}}this.h=o,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function o(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return s;if(0>e)return h(a(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var s=o(0),l=o(1),c=o(16777216);function u(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return-1==e.h}function h(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(h(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(s,s);if(d(e))return t=g(h(e),t),new m(h(t.g),h(t.h));if(d(t))return t=g(e,h(t)),new m(h(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),o=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var c=o.add(r);0>=c.l(e)&&(i=i.add(n),o=c),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=s;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),c=(o=a(n)).j(t);d(c)||0<c.l(e);)c=(o=a(n-=r)).j(t);u(o)&&(o=l),i=i.add(o),e=f(e,c)}return new m(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,o=[],a=0;a<i;a++)o[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(o,e.h)}(e=r.prototype).m=function(){if(d(this))return-h(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(d(this))return"-"+h(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,o=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return d(e=f(this,e))?-1:u(e)?0:1},e.abs=function(){return d(this)?h(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,o=0;o<=t;o++){var a=i+(65535&this.i(o))+(65535&e.i(o)),s=(a>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);i=s>>>16,a&=65535,s&=65535,n[o]=s<<16|a}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return s;if(d(this))return d(e)?h(this).j(h(e)):h(h(this).j(e));if(d(e))return h(this.j(h(e)));if(0>this.l(c)&&0>e.l(c))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var o=0;o<e.g.length;o++){var l=this.i(i)>>>16,f=65535&this.i(i),m=e.i(o)>>>16,g=65535&e.i(o);n[2*i+2*o]+=f*g,p(n,2*i+2*o),n[2*i+2*o+1]+=l*g,p(n,2*i+2*o+1),n[2*i+2*o+1]+=f*m,p(n,2*i+2*o+1),n[2*i+2*o+2]+=l*m,p(n,2*i+2*o+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,Xy=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return h(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=s,o=0;o<t.length;o+=8){var l=Math.min(8,t.length-o),c=parseInt(t.substring(o,o+l),n);8>l?(l=a(Math.pow(n,l)),i=i.j(l).add(a(c))):i=(i=i.j(r)).add(a(c))}return i},Qy=r}).apply(void 0!==Jy?Jy:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Zy,ev,tv,nv,rv,iv,ov,av,sv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof sv&&sv];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var o=0;o<e.length-1;o++){var a=e[o];if(!(a in i))break e;i=i[a]}(r=r(o=i[e=e[e.length-1]]))!=o&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function o(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function s(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?s:l).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function h(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(o(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function b(e){const t={};for(const n in e)t[n]=e[n];return t}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<w.length;t++)n=w[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function _(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function S(e){i.setTimeout((()=>{throw e}),0)}function k(){var e=C;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var E=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new j),(e=>e.reset()));class j{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let O,T=!1,C=new class{constructor(){this.h=this.g=null}add(e,t){const n=E.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},N=()=>{const e=i.Promise.resolve(void 0);O=()=>{e.then(P)}};var P=()=>{for(var e;e=k();){try{e.h.call(e.g)}catch(n){S(n)}var t=E;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}T=!1};function A(){this.s=this.s,this.C=this.C}function I(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.s=!1,A.prototype.ma=function(){this.s||(this.s=!0,this.N())},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},I.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function D(e,t){if(I.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:R[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&D.aa.h.call(this)}}d(D,I);var R={2:"touch",3:"pen",4:"mouse"};D.prototype.h=function(){D.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),U=0;function F(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++U,this.da=this.fa=!1}function z(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function $(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=Array.prototype.indexOf.call(i,t,void 0);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function V(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.da&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}$.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var a=V(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new F(t,this.src,o,!!r,i)).fa=n,e.push(t)),t};var q="closure_lm_"+(1e6*Math.random()|0),W={};function H(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)H(e,t[o],n,r,i);return null}return n=Z(n),e&&e[L]?e.K(t,n,a(r)?!!r.capture:!!r,i):function(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=a(i)?!!i.capture:!!i,l=X(e);if(l||(e[q]=l=new $(e)),n=l.add(t,n,r,s,o),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Q;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)M||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Y(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function K(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)K(e,t[o],n,r,i);else r=a(r)?!!r.capture:!!r,n=Z(n),e&&e[L]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=V(o=e.g[t],n,r,i))&&(z(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=X(e))&&(t=e.g[t.toString()],e=-1,t&&(e=V(t,n,r,i)),(n=-1<e?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[L])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Y(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=X(t))?(B(n,e),0==n.h&&(n.src=null,t[q]=null)):z(e)}}}function Y(e){return e in W?W[e]:W[e]="on"+e}function Q(e,t){if(e.da)e=!0;else{t=new D(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&G(e),e=n.call(r,t)}return e}function X(e){return(e=e[q])instanceof $?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function ee(){A.call(this),this.i=new $(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new I(t,e);else if(t instanceof I)t.target=t.target||e;else{var i=t;x(t=new I(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var a=t.g=n[o];i=ne(a,r,!0,t)&&i}if(i=ne(a=t.g=e,r,!0,t)&&i,i=ne(a,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=ne(a=t.g=n[o],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var a=t[o];if(a&&!a.da&&a.capture==n){var s=a.listener,l=a.ha||a.src;a.fa&&B(e.i,a),i=!1!==s.call(l,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}d(ee,A),ee.prototype[L]=!0,ee.prototype.removeEventListener=function(e,t,n,r){K(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)z(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class oe extends A{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(e){A.call(this),this.h=e,this.g={}}d(ae,A);var se=[];function le(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&G(e)}),e),e.g={}}ae.prototype.N=function(){ae.aa.N.call(this),le(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=i.JSON.stringify,ue=i.JSON.parse,de=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function he(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}he.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){I.call(this,"d")}function ye(){I.call(this,"c")}d(ge,I),d(ye,I);var ve={},be=null;function we(){return be=be||new ee}function xe(e){I.call(this,ve.La,e)}function _e(e){const t=we();te(t,new xe(t))}function Se(e,t){I.call(this,ve.STAT_EVENT,e),this.stat=t}function ke(e){const t=we();te(t,new Se(t,e))}function Ee(e,t){I.call(this,ve.Ma,e),this.size=t}function je(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Oe(){this.g=!0}function Te(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var a=1;a<i.length;a++)i[a]=""}}}return ce(n)}catch(s){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",d(xe,I),ve.STAT_EVENT="statevent",d(Se,I),ve.Ma="timingevent",d(Ee,I),Oe.prototype.xa=function(){this.g=!1},Oe.prototype.info=function(){};var Ce,Ne={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pe={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Ae(){}function Ie(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ae(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Me}function Me(){this.i=null,this.g="",this.h=!1}d(Ae,he),Ae.prototype.g=function(){return new XMLHttpRequest},Ae.prototype.i=function(){return{}},Ce=new Ae;var De={},Re={};function Le(e,t,n){e.L=1,e.v=ct(it(t)),e.m=n,e.P=!0,Ue(e,null)}function Ue(e,t){e.F=Date.now(),$e(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),St(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Me,e.g=dn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new oe(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(se[0]=i.toString()),i=se);for(var o=0;o<i.length;o++){var a=H(n,i[o],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),_e(),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var a="",s=o.split("&"),l=0;l<s.length;l++){var c=s[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");a=2<=d.length&&"type"==d[1]?a+(u+"=")+c+"&":a+(u+"=redacted&")}}else a=null;else a=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Fe(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function ze(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Re:(n=Number(t.substring(n,r)),isNaN(n)?De:(r+=1)+n>t.length?Re:(t=t.slice(r,r+n),e.C=r+n,t))}function $e(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=je(c(e.ba,e),t)}function Ve(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function qe(e){0==e.j.G||e.J||an(e.j,e)}function We(e){Ve(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function He(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Xe(n.h,e)))if(!e.K&&Xe(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(qj){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;on(n),Gt(n)}tn(n),ke(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=je(c(n.Za,n),6e3));if(1>=Qe(n.h)&&n.ca){try{n.ca()}catch(qj){}n.ca=void 0}}else ln(n,11)}else if((e.K||n.g==e)&&on(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const t=c[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=c[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Je(o,o.h),o.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,lt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var a=e;if((r=n).qa=un(r,r.J?r.ia:null,r.W),a.K){Ze(r.h,a);var s=a,l=r.L;l&&(s.I=l),s.B&&(Ve(s),$e(s)),r.g=a}else en(r);0<n.i.length&&Qt(n)}else"stop"!=c[0]&&"close"!=c[0]||ln(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?ln(n,7):Kt(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}_e()}catch(qj){}}Ie.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Vt(e)?t.j():this.Y(e)},Ie.prototype.Y=function(e){try{if(e==this.g)e:{const h=Vt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||qt(this.g)))){this.J||4!=h||7==t||_e(),Ve(this);var n=this.g.Z();this.X=n;t:if(Fe(this)){var r=qt(this.g);e="";var o=r.length,a=4==Vt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){We(this),qe(this);var s="";break t}this.h.i=new i.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(a&&t==o-1)});r.length=0,this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,o,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+a}))}(this.i,this.u,this.A,this.l,this.R,h,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var u=l;break t}}u=null}if(!(n=u)){this.o=!1,this.s=3,ke(12),We(this),qe(this);break e}Te(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,He(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<s.length;){if(e=ze(this,s),e==Re){4==h&&(this.s=4,ke(14),n=!1),Te(this.i,this.l,null,"[Incomplete Response]");break}if(e==De){this.s=4,ke(15),Te(this.i,this.l,s,"[Invalid Chunk]"),n=!1;break}Te(this.i,this.l,e,null),He(this,e)}if(Fe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=s.length||this.h.h||(this.s=1,ke(16),n=!1),this.o=this.o&&n,n){if(0<s.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),nn(d),d.M=!0,ke(11))}}else Te(this.i,this.l,s,"[Invalid Chunked Response]"),We(this),qe(this)}else Te(this.i,this.l,s,null),He(this,s);4==h&&We(this),this.o&&!this.J&&(4==h?an(this.j,this):(this.o=!1,$e(this)))}else(function(e){const t={};e=(e.g&&2<=Vt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=_(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),We(this),qe(this)}}}catch(h){}},Ie.prototype.cancel=function(){this.J=!0,We(this)},Ie.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(_e(),ke(17)),We(this),this.s=2,qe(this)):Be(this,this.S-e)};var Ke=class{constructor(e,t){this.g=e,this.map=t}};function Ge(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ye(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Qe(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return h(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(o(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(o(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(o(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}Ge.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,ot(this,e.j),this.o=e.o,this.g=e.g,at(this,e.s),this.l=e.l;var t=e.i,n=new bt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),st(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,ot(this,t[1]||"",!0),this.o=ut(t[2]||""),this.g=ut(t[3]||"",!0),at(this,t[4]),this.l=ut(t[5]||"",!0),st(this,t[6]||"",!0),this.m=ut(t[7]||"")):(this.h=!1,this.i=new bt(null,this.h))}function it(e){return new rt(e)}function ot(e,t,n){e.j=n?ut(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function at(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function st(e,t,n){t instanceof bt?(e.i=t,function(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(xt(this,t),St(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=dt(t,yt)),e.i=new bt(t,e.h))}function lt(e,t,n){e.i.set(t,n)}function ct(e){return lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ut(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ht),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ht(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dt(t,ft,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,ft,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dt(n,"/"==n.charAt(0)?gt:mt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",dt(n,vt)),e.join("")};var ft=/[#\/\?@]/g,mt=/[#\?:]/g,gt=/[#\?]/g,yt=/[#\?@]/g,vt=/#/g;function bt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function xt(e,t){wt(e),t=kt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _t(e,t){return wt(e),t=kt(e,t),e.g.has(t)}function St(e,t,n){xt(e,t),0<n.length&&(e.i=null,e.g.set(kt(e,t),h(n)),e.h+=n.length)}function kt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Et(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(o){}}function jt(){this.g=new de}function Ot(e,t,n){const r=n||"";try{tt(e,(function(e,n){let i=e;a(e)&&(i=ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch($j){throw t.push(r+"type="+encodeURIComponent("_badmap")),$j}}function Tt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Ct(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Nt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Pt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,At(e)}function At(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function It(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Mt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=It(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):lt(e,t,n))}function Dt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=bt.prototype).add=function(e,t){wt(this),this.i=null,e=kt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){wt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){wt(this);let t=[];if("string"==typeof e)_t(this,e)&&(t=t.concat(this.g.get(kt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return wt(this),this.i=null,_t(this,e=kt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=o;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},d(Tt,he),Tt.prototype.g=function(){return new Ct(this.l,this.j)},Tt.prototype.i=function(e){return function(){return e}}({}),d(Ct,ee),(e=Ct.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,At(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,At(this)),this.g&&(this.readyState=3,At(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pt(this):At(this),3==this.readyState&&Nt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Pt(this))},e.Qa=function(e){this.g&&(this.response=e,Pt(this))},e.ga=function(){this.g&&Pt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ct.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(Dt,ee);var Rt=/^https?$/i,Lt=["POST","PUT"];function Ut(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Ft(e),$t(e)}function Ft(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function zt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=Vt(e)||2!=e.Z()))if(e.u&&4==Vt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==Vt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var o;if(o=0===r){var a=String(e.D).match(nt)[1]||null;!a&&i.self&&i.self.location&&(a=i.self.location.protocol.slice(0,-1)),o=!Rt.test(a?a.toLowerCase():"")}n=o}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var s=2<Vt(e)?e.g.statusText:""}catch(l){s=""}e.l=s+" ["+e.Z()+"]",Ft(e)}}finally{$t(e)}}}function $t(e,t){if(e.g){Bt(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{n.onreadystatechange=r}catch($j){}}}function Bt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function Vt(e){return e.g?e.g.readyState:0}function qt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Wt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ht(e){this.Aa=0,this.i=[],this.j=new Oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wt("baseRetryDelayMs",5e3,e),this.cb=Wt("retryDelaySeedMs",1e4,e),this.Wa=Wt("forwardChannelMaxRetries",2,e),this.wa=Wt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Ge(e&&e.concurrentRequestLimit),this.Da=new jt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Kt(e){if(Yt(e),3==e.G){var t=e.U++,n=it(e.I);if(lt(n,"SID",e.K),lt(n,"RID",t),lt(n,"TYPE","terminate"),Jt(e,n),(t=new Ie(e,e.j,t)).L=2,t.v=ct(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=dn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),$e(t)}cn(e)}function Gt(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function Yt(e){Gt(e),e.u&&(i.clearTimeout(e.u),e.u=null),on(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Qt(e){if(!Ye(e.h)&&!e.s){e.s=!0;var t=e.Ga;O||N(),T||(O(),T=!0),C.add(t,e),e.B=0}}function Xt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);lt(r,"SID",e.K),lt(r,"RID",n),lt(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Mt(r,e.m,e.o),n=new Ie(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Zt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Je(e.h,n),Le(n,r,t)}function Jt(e,t){e.H&&v(e.H,(function(e,n){lt(t,n,e)})),e.l&&tt({},(function(e,n){lt(t,n,e)}))}function Zt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let a=!0;for(let s=0;s<n;s++){let n=i[s].g;const l=i[s].map;if(n-=t,0>n)t=Math.max(0,i[s].g-100),a=!1;else try{Ot(l,e,"req"+n+"_")}catch(o){r&&r(l)}}if(a){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function en(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;O||N(),T||(O(),T=!0),C.add(t,e),e.v=0}}function tn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=je(c(e.Fa,e),sn(e,e.v)),e.v++,!0)}function nn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function rn(e){e.g=new Ie(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);lt(t,"RID","rpc"),lt(t,"SID",e.K),lt(t,"AID",e.T),lt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&lt(t,"TO",e.ja),lt(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Mt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ct(it(t)),n.m=null,n.P=!0,Ue(n,e)}function on(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function an(e,t){var n=null;if(e.g==t){on(e),nn(e),e.g=null;var r=2}else{if(!Xe(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=we(),new Ee(r,n)),Qt(e)}else en(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Qe(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=je(c(e.Ga,e,t),sn(e,e.B)),e.B++,0)))}(e,t)||2==r&&tn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ln(e,5);break;case 4:ln(e,10);break;case 3:ln(e,6);break;default:ln(e,2)}}function sn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function ln(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||ot(r,"https"),ct(r),t?function(e,t){const n=new Oe;if(i.Image){const r=new Image;r.onload=u(Et,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(Et,n,"TestLoadImage: error",!1,t,r),r.onabort=u(Et,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(Et,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Oe;const n=new AbortController,r=setTimeout((()=>{n.abort(),Et(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?Et(0,0,!0,t):Et(0,0,!1,t)})).catch((()=>{clearTimeout(r),Et(0,0,!1,t)}))}(r.toString(),n)}else ke(2);e.G=0,e.l&&e.l.sa(t),cn(e),Yt(e)}function cn(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,h(e.i),e.i.length=0),e.l.ra()}}function un(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),at(r,r.s);else{var o=i.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var a=new rt(null);r&&ot(a,r),t&&(a.g=t),o&&at(a,o),n&&(a.l=n),r=a}return n=e.D,t=e.ya,n&&t&&lt(r,n,t),lt(r,"VER",e.la),Jt(e,r),r}function dn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Dt(new Tt({eb:n})):new Dt(e.pa)).Ha(e.J),t}function hn(){}function fn(){}function pn(e,t){ee.call(this),this.g=new Ht(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new yn(this)}function mn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function yn(e){this.g=e}(e=Dt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ce.g(),this.v=this.o?fe(this.o):fe(Ce),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(a){return void Ut(this,a)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),o=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Lt,t,void 0))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,s]of n)this.g.setRequestHeader(i,s);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bt(this),this.u=!0,this.g.send(e),this.u=!1}catch(a){Ut(this,a)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),$t(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$t(this,!0)),Dt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?zt(this):this.bb())},e.bb=function(){zt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch(pt){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(pt){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ue(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Ht.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){ke(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=un(this,null,this.W),Qt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Ie(this,this.j,e);let o=this.o;if(this.S&&(o?(o=b(o),x(o,this.S)):o=this.S),null!==this.m||this.O||(i.H=o,o=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zt(this,i,t),lt(n=it(this.I),"RID",e),lt(n,"CVER",22),this.D&&lt(n,"X-HTTP-Session-Id",this.D),Jt(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(It(o)))+"&"+t:this.m&&Mt(n,this.m,o)),Je(this.h,i),this.Ua&&lt(n,"TYPE","init"),this.P?(lt(n,"$req",t),lt(n,"SID","null"),i.T=!0,Le(i,n,null)):Le(i,n,t),this.G=2}}else 3==this.G&&(e?Xt(this,e):0==this.i.length||Ye(this.h)||Xt(this))},e.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=je(c(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Gt(this),rn(this))},e.Za=function(){null!=this.C&&(this.C=null,Gt(this),tn(this),ke(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=hn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},fn.prototype.g=function(e,t){return new pn(e,t)},d(pn,ee),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Kt(this.g)},pn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ce(e),e=n);t.i.push(new Ke(t.Ya++,e)),3==t.G&&Qt(t)},pn.prototype.N=function(){this.g.l=null,delete this.j,Kt(this.g),delete this.g,pn.aa.N.call(this)},d(mn,ge),d(gn,ye),d(yn,hn),yn.prototype.ua=function(){te(this.g,"a")},yn.prototype.ta=function(e){te(this.g,new mn(e))},yn.prototype.sa=function(e){te(this.g,new gn)},yn.prototype.ra=function(){te(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,av=function(){return new fn},ov=function(){return we()},iv=ve,rv={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ne.NO_ERROR=0,Ne.TIMEOUT=8,Ne.HTTP_ERROR=6,nv=Ne,Pe.COMPLETE="complete",tv=Pe,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,ev=pe,Dt.prototype.listenOnce=Dt.prototype.L,Dt.prototype.getLastError=Dt.prototype.Ka,Dt.prototype.getLastErrorCode=Dt.prototype.Ba,Dt.prototype.getStatus=Dt.prototype.Z,Dt.prototype.getResponseJson=Dt.prototype.Oa,Dt.prototype.getResponseText=Dt.prototype.oa,Dt.prototype.send=Dt.prototype.ea,Dt.prototype.setWithCredentials=Dt.prototype.Ha,Zy=Dt}).apply(void 0!==sv?sv:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const lv="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cv=class{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};cv.UNAUTHENTICATED=new cv(null),cv.GOOGLE_CREDENTIALS=new cv("google-credentials-uid"),cv.FIRST_PARTY=new cv("first-party-uid"),cv.MOCK_USER=new cv("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let uv="10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Sf("@firebase/firestore");function hv(){return dv.logLevel}function fv(e,...t){if(dv.logLevel<=yf.DEBUG){const n=t.map(gv);dv.debug(`Firestore (${uv}): ${e}`,...n)}}function pv(e,...t){if(dv.logLevel<=yf.ERROR){const n=t.map(gv);dv.error(`Firestore (${uv}): ${e}`,...n)}}function mv(e,...t){if(dv.logLevel<=yf.WARN){const n=t.map(gv);dv.warn(`Firestore (${uv}): ${e}`,...n)}}function gv(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(Bj){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(e="Unexpected state"){const t=`FIRESTORE (${uv}) INTERNAL ASSERTION FAILED: `+e;throw pv(t),new Error(t)}function vv(e,t){e||yv()}function bv(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xv extends tf{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(cv.UNAUTHENTICATED)))}shutdown(){}}class Ev{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jv{constructor(e){this.t=e,this.currentUser=cv.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){vv(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new _v;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _v,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{fv("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(fv("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _v)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(fv("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(vv("string"==typeof t.accessToken),new Sv(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return vv(null===e||"string"==typeof e),new cv(e)}}class Ov{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=cv.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Tv{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Ov(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(cv.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Cv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){vv(void 0===this.o);const n=e=>{null!=e.error&&fv("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,fv("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{fv("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):fv("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(vv("string"==typeof e.token),this.R=e.token,new Cv(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=Pv(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function Iv(e,t){return e<t?-1:e>t?1:0}function Mv(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new xv(wv.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new xv(wv.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new xv(wv.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new xv(wv.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Dv.fromMillis(Date.now())}static fromDate(e){return Dv.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Dv(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Iv(this.nanoseconds,e.nanoseconds):Iv(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Rv(e)}static min(){return new Rv(new Dv(0,0))}static max(){return new Rv(new Dv(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t,n){void 0===t?t=0:t>e.length&&yv(),void 0===n?n=e.length-t:n>e.length-t&&yv(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Lv.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Lv?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Uv extends Lv{construct(e,t,n){return new Uv(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new xv(wv.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Uv(t)}static emptyPath(){return new Uv([])}}const Fv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zv extends Lv{construct(e,t,n){return new zv(e,t,n)}static isValidIdentifier(e){return Fv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zv.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new zv(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new xv(wv.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new xv(wv.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new xv(wv.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new xv(wv.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zv(t)}static emptyPath(){return new zv([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.path=e}static fromPath(e){return new $v(Uv.fromString(e))}static fromName(e){return new $v(Uv.fromString(e).popFirst(5))}static empty(){return new $v(Uv.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Uv.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Uv.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $v(new Uv(e.slice()))}}function Bv(e){return new Vv(e.readTime,e.key,-1)}class Vv{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Vv(Rv.min(),$v.empty(),-1)}static max(){return new Vv(Rv.max(),$v.empty(),-1)}}function qv(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=$v.comparator(e.documentKey,t.documentKey),0!==n?n:Iv(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Wv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(e){if(e.code!==wv.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;fv("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&yv(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Kv(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Kv?t:Kv.resolve(t)}catch(t){return Kv.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Kv.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Kv.reject(t)}static resolve(e){return new Kv(((t,n)=>{t(e)}))}static reject(e){return new Kv(((t,n)=>{n(e)}))}static waitFor(e){return new Kv(((t,n)=>{let r=0,i=0,o=!1;e.forEach((e=>{++r,e.next((()=>{++i,o&&i===r&&t()}),(e=>n(e)))})),o=!0,i===r&&t()}))}static or(e){let t=Kv.resolve(!1);for(const n of e)t=t.next((e=>e?Kv.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Kv(((n,r)=>{const i=e.length,o=new Array(i);let a=0;for(let s=0;s<i;s++){const l=s;t(e[l]).next((e=>{o[l]=e,++a,a===i&&n(o)}),(e=>r(e)))}}))}static doWhile(e,t){return new Kv(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function Gv(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function Qv(e){return null==e}function Xv(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jv(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Zv(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yv.oe=-1;class tb{constructor(e,t){this.comparator=e,this.root=t||rb.EMPTY}insert(e,t){return new tb(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rb.BLACK,null,null))}remove(e){return new tb(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rb.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nb(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nb(this.root,e,this.comparator,!1)}getReverseIterator(){return new nb(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nb(this.root,e,this.comparator,!0)}}class nb{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rb{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:rb.RED,this.left=null!=r?r:rb.EMPTY,this.right=null!=i?i:rb.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new rb(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return rb.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return rb.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rb.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rb.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yv();if(this.right.isRed())throw yv();const e=this.left.check();if(e!==this.right.check())throw yv();return e+(this.isRed()?0:1)}}rb.EMPTY=null,rb.RED=!0,rb.BLACK=!1,rb.EMPTY=new class{constructor(){this.size=0}get key(){throw yv()}get value(){throw yv()}get color(){throw yv()}get left(){throw yv()}get right(){throw yv()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rb(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ib{constructor(e){this.comparator=e,this.data=new tb(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ob(this.data.getIterator())}getIteratorFrom(e){return new ob(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ib))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ib(this.comparator);return t.data=e,t}}class ob{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.fields=e,e.sort(zv.comparator)}static empty(){return new ab([])}unionWith(e){let t=new ib(zv.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ab(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mv(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new sb("Invalid base64 string: "+t):t}}(e);return new lb(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new lb(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Iv(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lb.EMPTY_BYTE_STRING=new lb("");const cb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ub(e){if(vv(!!e),"string"==typeof e){let t=0;const n=cb.exec(e);if(vv(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:db(e.seconds),nanos:db(e.nanos)}}function db(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function hb(e){return"string"==typeof e?lb.fromBase64String(e):lb.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pb(e){const t=e.mapValue.fields.__previous_value__;return fb(t)?pb(t):t}function mb(e){const t=ub(e.mapValue.fields.__local_write_time__.timestampValue);return new Dv(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,t,n,r,i,o,a,s,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=s,this.useFetchStreams=l}}class yb{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yb("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof yb&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb={fields:{__type__:{stringValue:"__max__"}}};function bb(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fb(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?10:11:yv()}function wb(e,t){if(e===t)return!0;const n=bb(e);if(n!==bb(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return mb(e).isEqual(mb(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ub(e.timestampValue),r=ub(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,hb(e.bytesValue).isEqual(hb(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return db(e.geoPointValue.latitude)===db(t.geoPointValue.latitude)&&db(e.geoPointValue.longitude)===db(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return db(e.integerValue)===db(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=db(e.doubleValue),r=db(t.doubleValue);return n===r?Xv(n)===Xv(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Mv(e.arrayValue.values||[],t.arrayValue.values||[],wb);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Jv(n)!==Jv(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!wb(n[i],r[i])))return!1;return!0}(e,t);default:return yv()}var r}function xb(e,t){return void 0!==(e.values||[]).find((e=>wb(e,t)))}function _b(e,t){if(e===t)return 0;const n=bb(e),r=bb(t);if(n!==r)return Iv(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Iv(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=db(e.integerValue||e.doubleValue),r=db(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Sb(e.timestampValue,t.timestampValue);case 4:return Sb(mb(e),mb(t));case 5:return Iv(e.stringValue,t.stringValue);case 6:return function(e,t){const n=hb(e),r=hb(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Iv(n[i],r[i]);if(0!==e)return e}return Iv(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Iv(db(e.latitude),db(t.latitude));return 0!==n?n:Iv(db(e.longitude),db(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return kb(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,o;const a=e.fields||{},s=t.fields||{},l=null===(n=a.value)||void 0===n?void 0:n.arrayValue,c=null===(r=s.value)||void 0===r?void 0:r.arrayValue,u=Iv((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(o=null==c?void 0:c.values)||void 0===o?void 0:o.length)||0);return 0!==u?u:kb(l,c)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===vb&&t===vb)return 0;if(e===vb)return 1;if(t===vb)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let a=0;a<r.length&&a<o.length;++a){const e=Iv(r[a],o[a]);if(0!==e)return e;const t=_b(n[r[a]],i[o[a]]);if(0!==t)return t}return Iv(r.length,o.length)}(e.mapValue,t.mapValue);default:throw yv()}}function Sb(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Iv(e,t);const n=ub(e),r=ub(t),i=Iv(n.seconds,r.seconds);return 0!==i?i:Iv(n.nanos,r.nanos)}function kb(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=_b(n[i],r[i]);if(e)return e}return Iv(n.length,r.length)}function Eb(e){return jb(e)}function jb(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ub(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?hb(e.bytesValue).toBase64():"referenceValue"in e?function(e){return $v.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=jb(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${jb(e.fields[i])}`;return n+"}"}(e.mapValue):yv()}function Ob(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Tb(e){return!!e&&"integerValue"in e}function Cb(e){return!!e&&"arrayValue"in e}function Nb(e){return!!e&&"nullValue"in e}function Pb(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ab(e){return!!e&&"mapValue"in e}function Ib(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Zv(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ib(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ib(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Mb{constructor(e){this.value=e}static empty(){return new Mb({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ab(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ib(t)}setAll(e){let t=zv.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ib(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ab(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wb(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ab(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Zv(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Mb(Ib(this.value))}}function Db(e){const t=[];return Zv(e.fields,((e,n)=>{const r=new zv([e]);if(Ab(n)){const e=Db(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ab(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rb{constructor(e,t,n,r,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rb(e,0,Rv.min(),Rv.min(),Rv.min(),Mb.empty(),0)}static newFoundDocument(e,t,n,r){return new Rb(e,1,t,Rv.min(),n,r,0)}static newNoDocument(e,t){return new Rb(e,2,t,Rv.min(),Rv.min(),Mb.empty(),0)}static newUnknownDocument(e,t){return new Rb(e,3,t,Rv.min(),Rv.min(),Mb.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Rv.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mb.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mb.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Rv.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Rb&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rb(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t){this.position=e,this.inclusive=t}}function Ub(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],a=e.position[i];if(r=o.field.isKeyField()?$v.comparator($v.fromName(a.referenceValue),n.key):_b(a,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Fb(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!wb(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,t="asc"){this.field=e,this.dir=t}}function $b(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{}class Vb extends Bb{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Qb(e,t,n):"array-contains"===t?new ew(e,n):"in"===t?new tw(e,n):"not-in"===t?new nw(e,n):"array-contains-any"===t?new rw(e,n):new Vb(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Xb(e,n):new Jb(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(_b(t,this.value)):null!==t&&bb(this.value)===bb(t)&&this.matchesComparison(_b(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return yv()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qb extends Bb{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new qb(e,t)}matches(e){return Wb(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wb(e){return"and"===e.op}function Hb(e){return function(e){for(const t of e.filters)if(t instanceof qb)return!1;return!0}(e)&&Wb(e)}function Kb(e){if(e instanceof Vb)return e.field.canonicalString()+e.op.toString()+Eb(e.value);if(Hb(e))return e.filters.map((e=>Kb(e))).join(",");{const t=e.filters.map((e=>Kb(e))).join(",");return`${e.op}(${t})`}}function Gb(e,t){return e instanceof Vb?(n=e,(r=t)instanceof Vb&&n.op===r.op&&n.field.isEqual(r.field)&&wb(n.value,r.value)):e instanceof qb?function(e,t){return t instanceof qb&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Gb(n,t.filters[r])),!0)}(e,t):void yv();var n,r}function Yb(e){return e instanceof Vb?`${(t=e).field.canonicalString()} ${t.op} ${Eb(t.value)}`:e instanceof qb?function(e){return e.op.toString()+" {"+e.getFilters().map(Yb).join(" ,")+"}"}(e):"Filter";var t}class Qb extends Vb{constructor(e,t,n){super(e,t,n),this.key=$v.fromName(n.referenceValue)}matches(e){const t=$v.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xb extends Vb{constructor(e,t){super(e,"in",t),this.keys=Zb("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Jb extends Vb{constructor(e,t){super(e,"not-in",t),this.keys=Zb("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Zb(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>$v.fromName(e.referenceValue)))}class ew extends Vb{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cb(t)&&xb(t.arrayValue,this.value)}}class tw extends Vb{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&xb(this.value.arrayValue,t)}}class nw extends Vb{constructor(e,t){super(e,"not-in",t)}matches(e){if(xb(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!xb(this.value.arrayValue,t)}}class rw extends Vb{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cb(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>xb(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t=null,n=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function ow(e,t=null,n=[],r=[],i=null,o=null,a=null){return new iw(e,t,n,r,i,o,a)}function aw(e){const t=bv(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Kb(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Qv(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Eb(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Eb(e))).join(",")),t.ue=e}return t.ue}function sw(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!$b(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Gb(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fb(e.startAt,t.startAt)&&Fb(e.endAt,t.endAt)}function lw(e){return $v.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t=null,n=[],r=[],i=null,o="F",a=null,s=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=s,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uw(e){return new cw(e)}function dw(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function hw(e){return null!==e.collectionGroup}function fw(e){const t=bv(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new ib(zv.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new zb(r,n))})),e.has(zv.keyField().canonicalString())||t.ce.push(new zb(zv.keyField(),n))}return t.ce}function pw(e){const t=bv(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return ow(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new zb(e.field,t)}));const n=e.endAt?new Lb(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Lb(e.startAt.position,e.startAt.inclusive):null;return ow(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,fw(e))),t.le}function mw(e,t){const n=e.filters.concat([t]);return new cw(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function gw(e,t,n){return new cw(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yw(e,t){return sw(pw(e),pw(t))&&e.limitType===t.limitType}function vw(e){return`${aw(pw(e))}|lt:${e.limitType}`}function bw(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Yb(e))).join(", ")}]`),Qv(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Eb(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Eb(e))).join(",")),`Target(${t})`}(pw(e))}; limitType=${e.limitType})`}function ww(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$v.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of fw(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Ub(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,fw(n),r)||n.endAt&&!function(e,t,n){const r=Ub(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,fw(n),r)));var n,r}function xw(e){return(t,n)=>{let r=!1;for(const i of fw(e)){const e=_w(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function _w(e,t,n){const r=e.field.isKeyField()?$v.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?_b(r,i):yv()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return yv()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Zv(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return eb(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new tb($v.comparator);function Ew(){return kw}const jw=new tb($v.comparator);function Ow(...e){let t=jw;for(const n of e)t=t.insert(n.key,n);return t}function Tw(e){let t=jw;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Cw(){return Pw()}function Nw(){return Pw()}function Pw(){return new Sw((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Aw=new tb($v.comparator),Iw=new ib($v.comparator);function Mw(...e){let t=Iw;for(const n of e)t=t.add(n);return t}const Dw=new ib(Iv);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rw(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xv(t)?"-0":t}}function Lw(e){return{integerValue:""+e}}function Uw(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Xv(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Lw(t):Rw(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this._=void 0}}function zw(e,t,n){return e instanceof Vw?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&fb(t)&&(t=pb(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof qw?Ww(e,t):e instanceof Hw?Kw(e,t):function(e,t){const n=Bw(e,t),r=Yw(n)+Yw(e.Pe);return Tb(n)&&Tb(e.Pe)?Lw(r):Rw(e.serializer,r)}(e,t)}function $w(e,t,n){return e instanceof qw?Ww(e,t):e instanceof Hw?Kw(e,t):n}function Bw(e,t){return e instanceof Gw?Tb(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Vw extends Fw{}class qw extends Fw{constructor(e){super(),this.elements=e}}function Ww(e,t){const n=Qw(t);for(const r of e.elements)n.some((e=>wb(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Hw extends Fw{constructor(e){super(),this.elements=e}}function Kw(e,t){let n=Qw(t);for(const r of e.elements)n=n.filter((e=>!wb(e,r)));return{arrayValue:{values:n}}}class Gw extends Fw{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Yw(e){return db(e.integerValue||e.doubleValue)}function Qw(e){return Cb(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t){this.field=e,this.transform=t}}class Jw{constructor(e,t){this.version=e,this.transformResults=t}}class Zw{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zw}static exists(e){return new Zw(void 0,e)}static updateTime(e){return new Zw(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ex(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tx{}function nx(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new hx(e.key,Zw.none()):new sx(e.key,e.data,Zw.none());{const n=e.data,r=Mb.empty();let i=new ib(zv.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new lx(e.key,r,new ab(i.toArray()),Zw.none())}}function rx(e,t,n){var r;e instanceof sx?function(e,t,n){const r=e.value.clone(),i=ux(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof lx?function(e,t,n){if(!ex(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ux(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(cx(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function ix(e,t,n,r){return e instanceof sx?function(e,t,n,r){if(!ex(e.precondition,t))return n;const i=e.value.clone(),o=dx(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof lx?function(e,t,n,r){if(!ex(e.precondition,t))return n;const i=dx(e.fieldTransforms,r,t),o=t.data;return o.setAll(cx(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,o=n,ex(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o);var i,o}function ox(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Bw(r.transform,e||null);null!=i&&(null===n&&(n=Mb.empty()),n.set(r.field,i))}return n||null}function ax(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Mv(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof qw&&r instanceof qw||n instanceof Hw&&r instanceof Hw?Mv(n.elements,r.elements,wb):n instanceof Gw&&r instanceof Gw?wb(n.Pe,r.Pe):n instanceof Vw&&r instanceof Vw);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class sx extends tx{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class lx extends tx{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cx(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ux(e,t,n){const r=new Map;vv(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],a=o.transform,s=t.data.field(o.field);r.set(o.field,$w(a,s,n[i]))}return r}function dx(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,zw(e,o,t))}return r}class hx extends tx{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fx extends tx{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&rx(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ix(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ix(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Nw();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const s=nx(o,a);null!==s&&n.set(r.key,s),o.isValidDocument()||o.convertToNoDocument(Rv.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Mw())}isEqual(e){return this.batchId===e.batchId&&Mv(this.mutations,e.mutations,((e,t)=>ax(e,t)))&&Mv(this.baseMutations,e.baseMutations,((e,t)=>ax(e,t)))}}class mx{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){vv(e.mutations.length===n.length);let r=function(){return Aw}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new mx(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gx=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vx,bx;function wx(e){if(void 0===e)return pv("GRPC error has no .code"),wv.UNKNOWN;switch(e){case vx.OK:return wv.OK;case vx.CANCELLED:return wv.CANCELLED;case vx.UNKNOWN:return wv.UNKNOWN;case vx.DEADLINE_EXCEEDED:return wv.DEADLINE_EXCEEDED;case vx.RESOURCE_EXHAUSTED:return wv.RESOURCE_EXHAUSTED;case vx.INTERNAL:return wv.INTERNAL;case vx.UNAVAILABLE:return wv.UNAVAILABLE;case vx.UNAUTHENTICATED:return wv.UNAUTHENTICATED;case vx.INVALID_ARGUMENT:return wv.INVALID_ARGUMENT;case vx.NOT_FOUND:return wv.NOT_FOUND;case vx.ALREADY_EXISTS:return wv.ALREADY_EXISTS;case vx.PERMISSION_DENIED:return wv.PERMISSION_DENIED;case vx.FAILED_PRECONDITION:return wv.FAILED_PRECONDITION;case vx.ABORTED:return wv.ABORTED;case vx.OUT_OF_RANGE:return wv.OUT_OF_RANGE;case vx.UNIMPLEMENTED:return wv.UNIMPLEMENTED;case vx.DATA_LOSS:return wv.DATA_LOSS;default:return yv()}}(bx=vx||(vx={}))[bx.OK=0]="OK",bx[bx.CANCELLED=1]="CANCELLED",bx[bx.UNKNOWN=2]="UNKNOWN",bx[bx.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",bx[bx.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",bx[bx.NOT_FOUND=5]="NOT_FOUND",bx[bx.ALREADY_EXISTS=6]="ALREADY_EXISTS",bx[bx.PERMISSION_DENIED=7]="PERMISSION_DENIED",bx[bx.UNAUTHENTICATED=16]="UNAUTHENTICATED",bx[bx.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",bx[bx.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",bx[bx.ABORTED=10]="ABORTED",bx[bx.OUT_OF_RANGE=11]="OUT_OF_RANGE",bx[bx.UNIMPLEMENTED=12]="UNIMPLEMENTED",bx[bx.INTERNAL=13]="INTERNAL",bx[bx.UNAVAILABLE=14]="UNAVAILABLE",bx[bx.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xx=new Qy([4294967295,4294967295],0);function _x(e){const t=(new TextEncoder).encode(e),n=new Xy;return n.update(t),new Uint8Array(n.digest())}function Sx(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Qy([n,r],0),new Qy([i,o],0)]}class kx{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ex(`Invalid padding: ${t}`);if(n<0)throw new Ex(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Ex(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Ex(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Qy.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Qy.fromNumber(n)));return 1===r.compare(xx)&&(r=new Qy([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=_x(e),[n,r]=Sx(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new kx(i,r,t);return n.forEach((e=>o.insert(e))),o}insert(e){if(0===this.Ie)return;const t=_x(e),[n,r]=Sx(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ex extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ox.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new jx(Rv.min(),r,new tb(Iv),Ew(),Mw())}}class Ox{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ox(n,t,Mw(),Mw(),Mw())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class Cx{constructor(e,t){this.targetId=e,this.me=t}}class Nx{constructor(e,t,n=lb.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Px{constructor(){this.fe=0,this.ge=Mx(),this.pe=lb.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Mw(),t=Mw(),n=Mw();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:yv()}})),new Ox(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Mx()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,vv(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ax{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ew(),this.qe=Ix(),this.Qe=new tb(Iv)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:yv()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(lw(i))if(0===n){const e=new $v(i.path);this.Ue(t,e,Rb.newNoDocument(e,Rv.min()))}else vv(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=hb(n).toUint8Array()}catch(s){if(s instanceof sb)return mv("Decoding the base64 bloom filter in existence filter failed ("+s.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw s}try{a=new kx(o,r,i)}catch(s){return mv(s instanceof Ex?"BloomFilter error: ":"Applying bloom filter failed: ",s),null}return 0===a.Ie?null:a}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(o)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&lw(i.target)){const t=new $v(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,Rb.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=Mw();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new jx(e,t,this.Qe,this.ke,n);return this.ke=Ew(),this.qe=Ix(),this.Qe=new tb(Iv),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Px,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ib(Iv),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||fv("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Px),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ix(){return new tb($v.comparator)}function Mx(){return new tb($v.comparator)}const Dx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Lx=(()=>({and:"AND",or:"OR"}))();class Ux{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fx(e,t){return e.useProto3Json||Qv(t)?t:{value:t}}function zx(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $x(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Bx(e,t){return zx(e,t.toTimestamp())}function Vx(e){return vv(!!e),Rv.fromTimestamp(function(e){const t=ub(e);return new Dv(t.seconds,t.nanos)}(e))}function qx(e,t){return Wx(e,t).canonicalString()}function Wx(e,t){const n=(r=e,new Uv(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function Hx(e){const t=Uv.fromString(e);return vv(u_(t)),t}function Kx(e,t){return qx(e.databaseId,t.path)}function Gx(e,t){const n=Hx(t);if(n.get(1)!==e.databaseId.projectId)throw new xv(wv.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new xv(wv.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $v(Xx(n))}function Yx(e,t){return qx(e.databaseId,t)}function Qx(e){return new Uv(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Xx(e){return vv(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Jx(e,t,n){return{name:Kx(e,t),fields:n.value.mapValue.fields}}function Zx(e,t){return{documents:[Yx(e,t.path)]}}function e_(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yx(e,i);const o=function(e){if(0!==e.length)return l_(qb.create(e,"and"))}(t.filters);o&&(n.structuredQuery.where=o);const a=function(e){if(0!==e.length)return e.map((e=>{return{field:a_((t=e).field),direction:r_(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const s=Fx(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i};var l}function t_(e){let t=function(e){const t=Hx(e);return 4===t.length?Uv.emptyPath():Xx(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){vv(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=n_(e);return t instanceof qb&&Hb(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>{return new zb(s_((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let s=null;n.limit&&(s=function(e){let t;return t="object"==typeof e?e.value:e,Qv(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Lb(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Lb(n,t)}(n.endAt)),function(e,t,n,r,i,o,a,s){return new cw(e,t,n,r,i,o,a,s)}(t,i,a,o,s,"F",l,c)}function n_(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=s_(e.unaryFilter.field);return Vb.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=s_(e.unaryFilter.field);return Vb.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=s_(e.unaryFilter.field);return Vb.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=s_(e.unaryFilter.field);return Vb.create(i,"!=",{nullValue:"NULL_VALUE"});default:return yv()}}(e):void 0!==e.fieldFilter?(t=e,Vb.create(s_(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return yv()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return qb.create(e.compositeFilter.filters.map((e=>n_(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return yv()}}(e.compositeFilter.op))}(e):yv();var t}function r_(e){return Dx[e]}function i_(e){return Rx[e]}function o_(e){return Lx[e]}function a_(e){return{fieldPath:e.canonicalString()}}function s_(e){return zv.fromServerFormat(e.fieldPath)}function l_(e){return e instanceof Vb?function(e){if("=="===e.op){if(Pb(e.value))return{unaryFilter:{field:a_(e.field),op:"IS_NAN"}};if(Nb(e.value))return{unaryFilter:{field:a_(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Pb(e.value))return{unaryFilter:{field:a_(e.field),op:"IS_NOT_NAN"}};if(Nb(e.value))return{unaryFilter:{field:a_(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:a_(e.field),op:i_(e.op),value:e.value}}}(e):e instanceof qb?function(e){const t=e.getFilters().map((e=>l_(e)));return 1===t.length?t[0]:{compositeFilter:{op:o_(e.op),filters:t}}}(e):yv()}function c_(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function u_(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t,n,r,i=Rv.min(),o=Rv.min(),a=lb.EMPTY_BYTE_STRING,s=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=s}withSequenceNumber(e){return new d_(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new d_(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new d_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new d_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.ct=e}}function f_(e){const t=t_({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?gw(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.un=new m_}addToCollectionParentIndex(e,t){return this.un.add(t),Kv.resolve()}getCollectionParents(e,t){return Kv.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Kv.resolve()}deleteFieldIndex(e,t){return Kv.resolve()}deleteAllFieldIndexes(e){return Kv.resolve()}createTargetIndexes(e,t){return Kv.resolve()}getDocumentsMatchingTarget(e,t){return Kv.resolve(null)}getIndexType(e,t){return Kv.resolve(0)}getFieldIndexes(e,t){return Kv.resolve([])}getNextCollectionGroupToUpdate(e){return Kv.resolve(null)}getMinOffset(e,t){return Kv.resolve(Vv.min())}getMinOffsetFromCollectionGroup(e,t){return Kv.resolve(Vv.min())}updateCollectionGroup(e,t,n){return Kv.resolve()}updateIndexEntries(e,t){return Kv.resolve()}}class m_{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ib(Uv.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ib(Uv.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new g_(0)}static kn(){return new g_(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.changes=new Sw((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Rb.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Kv.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&ix(n.mutation,e,ab.empty(),Dv.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Mw()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Mw()){const r=Cw();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ow();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Cw();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Mw())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ew();const o=Pw(),a=Pw();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof lx)?i=i.insert(t.key,t):void 0!==a?(o.set(t.key,a.mutation.getFieldMask()),ix(a.mutation,t,a.mutation.getFieldMask(),Dv.now())):o.set(t.key,ab.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new v_(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Pw();let r=new tb(((e,t)=>e-t)),i=Mw();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let a=n.get(e)||ab.empty();a=i.applyToLocalView(o,a),n.set(e,a);const s=(r.get(i.batchId)||Mw()).add(e);r=r.insert(i.batchId,s)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),s=r.key,l=r.value,c=Nw();l.forEach((e=>{if(!i.has(e)){const r=nx(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,s,c))}return Kv.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,$v.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):hw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Kv.resolve(Cw());let a=-1,s=i;return o.next((t=>Kv.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?Kv.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{s=s.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,s,t,Mw()))).next((e=>({batchId:a,changes:Tw(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $v(t)).next((e=>{let t=Ow();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=Ow();return this.indexManager.getCollectionParents(e,i).next((a=>Kv.forEach(a,(a=>{const s=(l=t,c=a.child(i),new cw(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,c;return this.getDocumentsMatchingCollectionQuery(e,s,n,r).next((e=>{e.forEach(((e,t)=>{o=o.insert(e,t)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Rb.newInvalidDocument(r)))}));let n=Ow();return e.forEach(((e,r)=>{const o=i.get(e);void 0!==o&&ix(o.mutation,r,ab.empty(),Dv.now()),ww(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Kv.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:(n=t).id,version:n.version,createTime:Vx(n.createTime)}),Kv.resolve();var n}getNamedQuery(e,t){return Kv.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:(n=t).name,query:f_(n.bundledQuery),readTime:Vx(n.readTime)}),Kv.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.overlays=new tb($v.comparator),this.Ir=new Map}getOverlay(e,t){return Kv.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Cw();return Kv.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Kv.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),Kv.resolve()}getOverlaysForCollection(e,t,n){const r=Cw(),i=t.length+1,o=new $v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const e=a.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Kv.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new tb(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Cw(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Cw(),s=i.getIterator();for(;s.hasNext()&&(s.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=r)););return Kv.resolve(a)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new gx(t,n));let i=this.Ir.get(t);void 0===i&&(i=Mw(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.sessionToken=lb.EMPTY_BYTE_STRING}getSessionToken(e){return Kv.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Kv.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.Tr=new ib(k_.Er),this.dr=new ib(k_.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new k_(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new k_(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new $v(new Uv([])),n=new k_(t,e),r=new k_(t,e+1),i=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),i.push(e.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $v(new Uv([])),n=new k_(t,e),r=new k_(t,e+1);let i=Mw();return this.dr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new k_(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class k_{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $v.comparator(e.key,t.key)||Iv(e.wr,t.wr)}static Ar(e,t){return Iv(e.wr,t.wr)||$v.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ib(k_.Er)}checkEmpty(e){return Kv.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new px(i,t,n,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new k_(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Kv.resolve(o)}lookupMutationBatch(e,t){return Kv.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return Kv.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Kv.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return Kv.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new k_(t,0),r=new k_(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);i.push(t)})),Kv.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ib(Iv);return t.forEach((e=>{const t=new k_(e,0),r=new k_(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),Kv.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;$v.isDocumentKey(i)||(i=i.child(""));const o=new k_(new $v(i),0);let a=new ib(Iv);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.wr)),!0)}),o),Kv.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){vv(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Kv.forEach(t.mutations,(r=>{const i=new k_(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new k_(t,0),r=this.br.firstAfterOrEqual(n);return Kv.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Kv.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.Mr=e,this.docs=new tb($v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Kv.resolve(n?n.document.mutableCopy():Rb.newInvalidDocument(t))}getEntries(e,t){let n=Ew();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Rb.newInvalidDocument(e))})),Kv.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Ew();const o=t.path,a=new $v(o.child("")),s=this.docs.getIteratorFrom(a);for(;s.hasNext();){const{key:e,value:{document:a}}=s.getNext();if(!o.isPrefixOf(e.path))break;e.path.length>o.length+1||qv(Bv(a),n)<=0||(r.has(a.key)||ww(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return Kv.resolve(i)}getAllFromCollectionGroup(e,t,n,r){yv()}Or(e,t){return Kv.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new O_(this)}getSize(e){return Kv.resolve(this.size)}}class O_ extends y_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),Kv.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.persistence=e,this.Nr=new Sw((e=>aw(e)),sw),this.lastRemoteSnapshotVersion=Rv.min(),this.highestTargetId=0,this.Lr=0,this.Br=new S_,this.targetCount=0,this.kr=g_.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),Kv.resolve()}getLastRemoteSnapshotVersion(e){return Kv.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Kv.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Kv.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),Kv.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new g_(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Kv.resolve()}updateTargetData(e,t){return this.Kn(t),Kv.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Kv.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach(((o,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),Kv.waitFor(i).next((()=>r))}getTargetCount(e){return Kv.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return Kv.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),Kv.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Kv.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Kv.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return Kv.resolve(n)}containsKey(e,t){return Kv.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Yv(0),this.Kr=!1,this.Kr=!0,this.$r=new __,this.referenceDelegate=e(this),this.Ur=new T_(this),this.indexManager=new p_,this.remoteDocumentCache=new j_((e=>this.referenceDelegate.Wr(e))),this.serializer=new h_(t),this.Gr=new w_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new x_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new E_(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){fv("MemoryPersistence","Starting transaction:",e);const r=new N_(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return Kv.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class N_ extends Wv{constructor(e){super(),this.currentSequenceNumber=e}}class P_{constructor(e){this.persistence=e,this.Jr=new S_,this.Yr=null}static Zr(e){return new P_(e)}get Xr(){if(this.Yr)return this.Yr;throw yv()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),Kv.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),Kv.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Kv.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Kv.forEach(this.Xr,(n=>{const r=$v.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,Rv.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return Kv.or([()=>Kv.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=Mw(),r=Mw();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new A_(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=ef()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(Zh())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Zi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new I_;return this.Xi(e,t,n).next((r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>i.result))}es(e,t,n,r){return n.documentReadCount<this.ji?(hv()<=yf.DEBUG&&fv("QueryEngine","SDK will not create cache indexes for query:",bw(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Kv.resolve()):(hv()<=yf.DEBUG&&fv("QueryEngine","Query:",bw(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(hv()<=yf.DEBUG&&fv("QueryEngine","The SDK decides to create cache indexes for query:",bw(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pw(t))):Kv.resolve())}Yi(e,t){if(dw(t))return Kv.resolve(null);let n=pw(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=gw(t,null,"F"),n=pw(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Mw(...r);return this.Ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.ts(t,r);return this.ns(t,o,i,n.readTime)?this.Yi(e,gw(t,null,"F")):this.rs(e,o,t,n)}))))})))))}Zi(e,t,n,r){return dw(t)||r.isEqual(Rv.min())?Kv.resolve(null):this.Ji.getDocuments(e,n).next((i=>{const o=this.ts(t,i);return this.ns(t,o,n,r)?Kv.resolve(null):(hv()<=yf.DEBUG&&fv("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),bw(t)),this.rs(e,o,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Rv.fromTimestamp(1e9===r?new Dv(n+1,0):new Dv(n,r));return new Vv(i,$v.empty(),t)}(r,-1)).next((e=>e)))}))}ts(e,t){let n=new ib(xw(e));return t.forEach(((t,r)=>{ww(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return hv()<=yf.DEBUG&&fv("QueryEngine","Using full collection scan to execute query:",bw(t)),this.Ji.getDocumentsMatchingQuery(e,t,Vv.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new tb(Iv),this._s=new Sw((e=>aw(e)),sw),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new b_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}async function R_(e,t){const n=bv(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],o=[];let a=Mw();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({hs:e,removedBatchIds:i,addedBatchIds:o})))}))}))}function L_(e){const t=bv(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function U_(e,t){const n=bv(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];t.targetChanges.forEach(((o,s)=>{const l=i.get(s);if(!l)return;a.push(n.Ur.removeMatchingKeys(e,o.removedDocuments,s).next((()=>n.Ur.addMatchingKeys(e,o.addedDocuments,s))));let c=l.withSequenceNumber(e.currentSequenceNumber);var u,d,h;null!==t.targetMismatches.get(s)?c=c.withResumeToken(lb.EMPTY_BYTE_STRING,Rv.min()).withLastLimboFreeSnapshotVersion(Rv.min()):o.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(o.resumeToken,r)),i=i.insert(s,c),d=c,h=o,(0===(u=l).resumeToken.approximateByteSize()||d.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&a.push(n.Ur.updateTargetData(e,c))}));let s=Ew(),l=Mw();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(function(e,t,n){let r=Mw(),i=Mw();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ew();return n.forEach(((n,o)=>{const a=e.get(n);o.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(Rv.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):fv("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),{Ps:r,Is:i}}))}(e,o,t.documentUpdates).next((e=>{s=e.Ps,l=e.Is}))),!r.isEqual(Rv.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return Kv.waitFor(a).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,s,l))).next((()=>s))})).then((e=>(n.os=i,e)))}function F_(e,t){const n=bv(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function z_(e,t,n){const r=bv(e),i=r.os.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(a){if(!Gv(a))throw a;fv("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function $_(e,t,n){const r=bv(e);let i=Rv.min(),o=Mw();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=bv(e),i=r._s.get(n);return void 0!==i?Kv.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,pw(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:Rv.min(),n?o:Mw()))).next((e=>(function(e,t,n){let r=e.us.get(t)||Rv.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ts:o})))))}class B_{constructor(){this.activeTargetIds=Dw}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class V_{constructor(){this.so=new B_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new B_,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){fv("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){fv("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H_=null;function K_(){return null===H_?H_=268435456+Math.round(2147483648*Math.random()):H_++,"0x"+H_.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const G_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="WebChannelConnection";class X_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const o=K_(),a=this.xo(e,t.toUriEncodedString());fv("RestConnection",`Sending RPC '${e}' ${o}:`,a,n);const s={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(s,r,i),this.No(e,a,s,n).then((t=>(fv("RestConnection",`Received RPC '${e}' ${o}: `,t),t)),(t=>{throw mv("RestConnection",`RPC '${e}' ${o} failed with error: `,t,"url: ",a,"request:",n),t}))}Lo(e,t,n,r,i,o){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+uv,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=G_[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=K_();return new Promise(((o,a)=>{const s=new Zy;s.setWithCredentials(!0),s.listenOnce(tv.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case nv.NO_ERROR:const t=s.getResponseJson();fv(Q_,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),o(t);break;case nv.TIMEOUT:fv(Q_,`RPC '${e}' ${i} timed out`),a(new xv(wv.DEADLINE_EXCEEDED,"Request time out"));break;case nv.HTTP_ERROR:const n=s.getStatus();if(fv(Q_,`RPC '${e}' ${i} failed with status:`,n,"response text:",s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(wv).indexOf(t)>=0?t:wv.UNKNOWN}(t.status);a(new xv(e,t.message))}else a(new xv(wv.UNKNOWN,"Server responded with status "+s.getStatus()))}else a(new xv(wv.UNAVAILABLE,"Connection failed."));break;default:yv()}}finally{fv(Q_,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);fv(Q_,`RPC '${e}' ${i} sending request:`,r),s.send(t,"POST",l,n,15)}))}Bo(e,t,n){const r=K_(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=av(),a=ov(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(s.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(s.useFetchStreams=!0),this.Oo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const c=i.join("");fv(Q_,`Creating RPC '${e}' stream ${r}: ${c}`,s);const u=o.createWebChannel(c,s);let d=!1,h=!1;const f=new Y_({Io:t=>{h?fv(Q_,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(fv(Q_,`Opening RPC '${e}' stream ${r} transport.`),u.open(),d=!0),fv(Q_,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},To:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,ev.EventType.OPEN,(()=>{h||(fv(Q_,`RPC '${e}' stream ${r} transport opened.`),f.yo())})),p(u,ev.EventType.CLOSE,(()=>{h||(h=!0,fv(Q_,`RPC '${e}' stream ${r} transport closed`),f.So())})),p(u,ev.EventType.ERROR,(t=>{h||(h=!0,mv(Q_,`RPC '${e}' stream ${r} transport errored:`,t),f.So(new xv(wv.UNAVAILABLE,"The operation could not be completed")))})),p(u,ev.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];vv(!!i);const o=i,a=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(a){fv(Q_,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=vx[e];if(void 0!==t)return wx(t)}(t),i=a.message;void 0===n&&(n=wv.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),h=!0,f.So(new xv(n,i)),u.close()}else fv(Q_,`RPC '${e}' stream ${r} received:`,i),f.bo(i)}})),p(a,iv.STAT_EVENT,(t=>{t.stat===rv.PROXY?fv(Q_,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===rv.NOPROXY&&fv(Q_,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}function J_(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(e){return new Ux(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&fv("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t,n,r,i,o,a,s){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=s,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new eS(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===wv.RESOURCE_EXHAUSTED?(pv(t.toString()),pv("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===wv.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new xv(wv.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return fv("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(fv("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nS extends tS{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:yv(),o=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(vv(void 0===t||"string"==typeof t),lb.fromBase64String(t||"")):(vv(void 0===t||t instanceof Buffer||t instanceof Uint8Array),lb.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,l=s&&function(e){const t=void 0===e.code?wv.UNKNOWN:wx(e.code);return new xv(t,e.message||"")}(s);n=new Nx(i,o,a,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gx(e,r.document.name),o=Vx(r.document.updateTime),a=r.document.createTime?Vx(r.document.createTime):Rv.min(),s=new Mb({mapValue:{fields:r.document.fields}}),l=Rb.newFoundDocument(i,o,a,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Tx(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Gx(e,r.document),o=r.readTime?Vx(r.readTime):Rv.min(),a=Rb.newNoDocument(i,o),s=r.removedTargetIds||[];n=new Tx([],s,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Gx(e,r.document),o=r.removedTargetIds||[];n=new Tx([],o,i,null)}else{if(!("filter"in t))return yv();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,o=new yx(r,i),a=e.targetId;n=new Cx(a,o)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Rv.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Rv.min():t.readTime?Vx(t.readTime):Rv.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Qx(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=lw(r)?{documents:Zx(e,r)}:{query:e_(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=$x(e,t.resumeToken);const r=Fx(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Rv.min())>0){n.readTime=zx(e,t.snapshotVersion.toTimestamp());const r=Fx(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return yv()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Qx(this.serializer),t.removeTarget=e,this.a_(t)}}class rS extends tS{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return vv(!!e.streamToken),this.lastStreamToken=e.streamToken,vv(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){vv(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=function(e,t){return e&&e.length>0?(vv(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Vx(e.updateTime):Vx(t);return n.isEqual(Rv.min())&&(n=Vx(t)),new Jw(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Vx(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Qx(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof sx)n={update:Jx(e,t.key,t.value)};else if(t instanceof hx)n={delete:Kx(e,t.key)};else if(t instanceof lx)n={update:Jx(e,t.key,t.data),updateMask:c_(t.fieldMask)};else{if(!(t instanceof fx))return yv();n={verify:Kx(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Vw)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof qw)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Hw)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Gw)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw yv()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Bx(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:yv())),n;var r,i}(this.serializer,e)))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new xv(wv.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Mo(e,Wx(t,n),r,i,o))).catch((e=>{throw"FirebaseError"===e.name?(e.code===wv.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new xv(wv.UNKNOWN,e.toString())}))}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Lo(e,Wx(t,n),r,o,a,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===wv.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new xv(wv.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class oS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(pv(t),this.D_=!1):fv("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((e=>{n.enqueueAndForget((async()=>{mS(this)&&(fv("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=bv(e);t.L_.add(4),await lS(t),t.q_.set("Unknown"),t.L_.delete(4),await sS(t)}(this))}))})),this.q_=new oS(n,r)}}async function sS(e){if(mS(e))for(const t of e.B_)await t(!0)}async function lS(e){for(const t of e.B_)await t(!1)}function cS(e,t){const n=bv(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),pS(n)?fS(n):IS(n).r_()&&dS(n,t))}function uS(e,t){const n=bv(e),r=IS(n);n.N_.delete(t),r.r_()&&hS(n,t),0===n.N_.size&&(r.r_()?r.o_():mS(n)&&n.q_.set("Unknown"))}function dS(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Rv.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}IS(e).A_(t)}function hS(e,t){e.Q_.xe(t),IS(e).R_(t)}function fS(e){e.Q_=new Ax({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),IS(e).start(),e.q_.v_()}function pS(e){return mS(e)&&!IS(e).n_()&&e.N_.size>0}function mS(e){return 0===bv(e).L_.size}function gS(e){e.Q_=void 0}async function yS(e){e.q_.set("Online")}async function vS(e){e.N_.forEach(((t,n)=>{dS(e,t)}))}async function bS(e,t){gS(e),pS(e)?(e.q_.M_(t),fS(e)):e.q_.set("Unknown")}async function wS(e,t,n){if(e.q_.set("Online"),t instanceof Nx&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(r){fv("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await xS(e,r)}else if(t instanceof Tx?e.Q_.Ke(t):t instanceof Cx?e.Q_.He(t):e.Q_.We(t),!n.isEqual(Rv.min()))try{const t=await L_(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(lb.EMPTY_BYTE_STRING,r.snapshotVersion)),hS(e,t);const i=new d_(r.target,t,n,r.sequenceNumber);dS(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){fv("RemoteStore","Failed to raise snapshot:",i),await xS(e,i)}}async function xS(e,t,n){if(!Gv(t))throw t;e.L_.add(1),await lS(e),e.q_.set("Offline"),n||(n=()=>L_(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{fv("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await sS(e)}))}function _S(e,t){return t().catch((n=>xS(e,n,t)))}async function SS(e){const t=bv(e),n=MS(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;kS(t);)try{const e=await F_(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,ES(t,e)}catch(i){await xS(t,i)}jS(t)&&OS(t)}function kS(e){return mS(e)&&e.O_.length<10}function ES(e,t){e.O_.push(t);const n=MS(e);n.r_()&&n.V_&&n.m_(t.mutations)}function jS(e){return mS(e)&&!MS(e).n_()&&e.O_.length>0}function OS(e){MS(e).start()}async function TS(e){MS(e).p_()}async function CS(e){const t=MS(e);for(const n of e.O_)t.m_(n.mutations)}async function NS(e,t,n){const r=e.O_.shift(),i=mx.from(r,t,n);await _S(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await SS(e)}async function PS(e,t){t&&MS(e).V_&&await async function(e,t){if(function(e){switch(e){default:return yv();case wv.CANCELLED:case wv.UNKNOWN:case wv.DEADLINE_EXCEEDED:case wv.RESOURCE_EXHAUSTED:case wv.INTERNAL:case wv.UNAVAILABLE:case wv.UNAUTHENTICATED:return!1;case wv.INVALID_ARGUMENT:case wv.NOT_FOUND:case wv.ALREADY_EXISTS:case wv.PERMISSION_DENIED:case wv.FAILED_PRECONDITION:case wv.ABORTED:case wv.OUT_OF_RANGE:case wv.UNIMPLEMENTED:case wv.DATA_LOSS:return!0}}(n=t.code)&&n!==wv.ABORTED){const n=e.O_.shift();MS(e).s_(),await _S(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await SS(e)}var n}(e,t),jS(e)&&OS(e)}async function AS(e,t){const n=bv(e);n.asyncQueue.verifyOperationInProgress(),fv("RemoteStore","RemoteStore received new credentials");const r=mS(n);n.L_.add(3),await lS(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await sS(n)}function IS(e){return e.K_||(e.K_=function(e,t,n){const r=bv(e);return r.w_(),new nS(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:yS.bind(null,e),Ro:vS.bind(null,e),mo:bS.bind(null,e),d_:wS.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),pS(e)?fS(e):e.q_.set("Unknown")):(await e.K_.stop(),gS(e))}))),e.K_}function MS(e){return e.U_||(e.U_=function(e,t,n){const r=bv(e);return r.w_(),new rS(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:TS.bind(null,e),mo:PS.bind(null,e),f_:CS.bind(null,e),g_:NS.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await SS(e)):(await e.U_.stop(),e.O_.length>0&&(fv("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class DS{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _v,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new DS(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new xv(wv.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function RS(e,t){if(pv("AsyncQueue",`${t}: ${e}`),Gv(e))return new xv(wv.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$v.comparator(t.key,n.key):(e,t)=>$v.comparator(e.key,t.key),this.keyedMap=Ow(),this.sortedSet=new tb(this.comparator)}static emptySet(e){return new LS(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof LS))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new LS;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.W_=new tb($v.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):yv():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class FS{constructor(e,t,n,r,i,o,a,s,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=s,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new FS(e,t,LS.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yw(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class $S{constructor(){this.queries=BS(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=bv(e),r=n.queries;n.queries=BS(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new xv(wv.ABORTED,"Firestore shutting down"))}}function BS(){return new Sw((e=>vw(e)),yw)}async function VS(e,t){const n=bv(e);let r=3;const i=t.query;let o=n.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new zS,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const e=RS(a,`Initialization of query '${bw(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,o),o.j_.push(t),t.Z_(n.onlineState),o.z_&&t.X_(o.z_)&&KS(n)}async function qS(e,t){const n=bv(e),r=t.query;let i=3;const o=n.queries.get(r);if(o){const e=o.j_.indexOf(t);e>=0&&(o.j_.splice(e,1),0===o.j_.length?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function WS(e,t){const n=bv(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&KS(n)}function HS(e,t,n){const r=bv(e),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(t)}function KS(e){e.Y_.forEach((e=>{e.next()}))}var GS,YS;(YS=GS||(GS={})).ea="default",YS.Cache="cache";class QS{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new FS(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=FS.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==GS.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.key=e}}class JS{constructor(e){this.key=e}}class ZS{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Mw(),this.mutatedKeys=Mw(),this.Aa=xw(e),this.Ra=new LS(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new US,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const s="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=ww(this.query,t)?t:null,d=!!c&&this.mutatedKeys.has(c.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?d!==h&&(n.track({type:3,doc:u}),f=!0):this.ga(c,u)||(n.track({type:2,doc:u}),f=!0,(s&&this.Aa(u,s)>0||l&&this.Aa(u,l)<0)&&(a=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(s||l)&&(a=!0)),f&&(u?(o=o.add(u),i=h?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:o,fa:n,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yv()}};return n(e)-n(t)}(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const a=t&&!r?this.ya():[],s=0===this.da.size&&this.current&&!r?1:0,l=s!==this.Ea;return this.Ea=s,0!==o.length||l?{snapshot:new FS(this.query,e.Ra,i,o,e.mutatedKeys,0===s,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new US,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Mw(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new JS(e))})),this.da.forEach((n=>{e.has(n)||t.push(new XS(n))})),t}ba(e){this.Ta=e.Ts,this.da=Mw();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return FS.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class ek{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class tk{constructor(e){this.key=e,this.va=!1}}class nk{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Sw((e=>vw(e)),yw),this.Ma=new Map,this.xa=new Set,this.Oa=new tb($v.comparator),this.Na=new Map,this.La=new S_,this.Ba={},this.ka=new Map,this.qa=g_.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function rk(e,t,n=!0){const r=kk(e);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await ok(r,t,n,!0),i}async function ik(e,t){const n=kk(e);await ok(n,t,!0,!1)}async function ok(e,t,n,r){const i=await function(e,t){const n=bv(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((i=>i?(r=i,Kv.resolve(r)):n.Ur.allocateTargetId(e).next((i=>(r=new d_(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}(e.localStore,pw(t)),o=i.targetId,a=e.sharedClientState.addLocalQueryTarget(o,n);let s;return r&&(s=await async function(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await $_(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,i))));const o=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o,a);return vk(e,t.targetId,s.wa),s.snapshot}(e,t,n,r);const o=await $_(e.localStore,t,!0),a=new ZS(t,o.Ts),s=a.ma(o.documents),l=Ox.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=a.applyChanges(s,e.isPrimaryClient,l);vk(e,n,c.wa);const u=new ek(t,n,a);return e.Fa.set(t,u),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),c.snapshot}(e,t,o,"current"===a,i.resumeToken)),e.isPrimaryClient&&n&&cS(e.remoteStore,i),s}async function ak(e,t,n){const r=bv(e),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter((e=>!yw(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await z_(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&uS(r.remoteStore,i.targetId),gk(r,i.targetId)})).catch(Hv)):(gk(r,i.targetId),await z_(r.localStore,i.targetId,!0))}async function sk(e,t){const n=bv(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),uS(n.remoteStore,r.targetId))}async function lk(e,t,n){const r=function(e){const t=bv(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hk.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fk.bind(null,t),t}(e);try{const e=await function(e,t){const n=bv(e),r=Dv.now(),i=t.reduce(((e,t)=>e.add(t.key)),Mw());let o,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let s=Ew(),l=Mw();return n.cs.getEntries(e,i).next((e=>{s=e,s.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,s))).next((i=>{o=i;const a=[];for(const e of t){const t=ox(e,o.get(e.key).overlayedDocument);null!=t&&a.push(new lx(e.key,t,Db(t.value.mapValue),Zw.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(o,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:Tw(o)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new tb(Iv)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await xk(r,e.changes),await SS(r.remoteStore)}catch(i){const e=RS(i,"Failed to persist write");n.reject(e)}}async function ck(e,t){const n=bv(e);try{const e=await U_(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(vv(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?vv(r.va):e.removedDocuments.size>0&&(vv(r.va),r.va=!1))})),await xk(n,e,t)}catch(r){await Hv(r)}}function uk(e,t,n){const r=bv(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=bv(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)})),r&&KS(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dk(e,t,n){const r=bv(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),o=i&&i.key;if(o){let e=new tb($v.comparator);e=e.insert(o,Rb.newNoDocument(o,Rv.min()));const n=Mw().add(o),i=new jx(Rv.min(),new Map,new tb(Iv),e,n);await ck(r,i),r.Oa=r.Oa.remove(o),r.Na.delete(t),wk(r)}else await z_(r.localStore,t,!1).then((()=>gk(r,t,n))).catch(Hv)}async function hk(e,t){const n=bv(e),r=t.batch.batchId;try{const e=await function(e,t){const n=bv(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let a=Kv.resolve();return o.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);vv(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Mw();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);mk(n,r,null),pk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xk(n,e)}catch(i){await Hv(i)}}async function fk(e,t,n){const r=bv(e);try{const e=await function(e,t){const n=bv(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(vv(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);mk(r,t,n),pk(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await xk(r,e)}catch(i){await Hv(i)}}function pk(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function mk(e,t,n){const r=bv(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function gk(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||yk(e,t)}))}function yk(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(uS(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),wk(e))}function vk(e,t,n){for(const r of n)r instanceof XS?(e.La.addReference(r.key,t),bk(e,r)):r instanceof JS?(fv("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||yk(e,r.key)):yv()}function bk(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(fv("SyncEngine","New document in limbo: "+n),e.xa.add(r),wk(e))}function wk(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new $v(Uv.fromString(t)),r=e.qa.next();e.Na.set(r,new tk(n)),e.Oa=e.Oa.insert(n,r),cS(e.remoteStore,new d_(pw(uw(n.path)),r,"TargetPurposeLimboResolution",Yv.oe))}}async function xk(e,t,n){const r=bv(e),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,s)=>{a.push(r.Ka(s,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(s.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(s.targetId,i?"current":"not-current")}if(e){i.push(e);const t=A_.Wi(s.targetId,e);o.push(t)}})))})),await Promise.all(a),r.Ca.d_(i),await async function(e,t){const n=bv(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Kv.forEach(t,(t=>Kv.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Kv.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!Gv(r))throw r;fv("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,o))}async function _k(e,t){const n=bv(e);if(!n.currentUser.isEqual(t)){fv("SyncEngine","User change. New user:",t.toKey());const e=await R_(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach((e=>{e.forEach((e=>{e.reject(new xv(wv.CANCELLED,i))}))})),r.ka.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await xk(n,e.hs)}var r,i}function Sk(e,t){const n=bv(e),r=n.Na.get(t);if(r&&r.va)return Mw().add(r.key);{let e=Mw();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function kk(e){const t=bv(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ck.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sk.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dk.bind(null,t),t.Ca.d_=WS.bind(null,t.eventManager),t.Ca.$a=HS.bind(null,t.eventManager),t}class Ek{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Z_(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return function(e,t,n,r){return new D_(e,t,n,r)}(this.persistence,new M_,e.initialUser,this.serializer)}Ga(e){return new C_(P_.Zr,this.serializer)}Wa(e){return new V_}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ek.provider={build:()=>new Ek};class jk{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>uk(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=_k.bind(null,this.syncEngine),await async function(e,t){const n=bv(e);t?(n.L_.delete(2),await sS(n)):t||(n.L_.add(2),await lS(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $S}createDatastore(e){const t=Z_(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new X_(r));var r;return function(e,t,n,r){return new iS(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>uk(this.syncEngine,e,0),o=W_.D()?new W_:new q_,new aS(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return function(e,t,n,r,i,o,a){const s=new nk(e,t,n,r,i,o);return a&&(s.Qa=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=bv(e);fv("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await lS(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}jk.provider={build:()=>new jk};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ok{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):pv("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=cv.UNAUTHENTICATED,this.clientId=Av.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{fv("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(fv("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _v;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(Bj){const n=RS(Bj,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ck(e,t){e.asyncQueue.verifyOperationInProgress(),fv("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await R_(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Nk(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){fv("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ck(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===wv.FAILED_PRECONDITION||n.code===wv.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;mv("Error using user provided cache. Falling back to memory cache: "+i),await Ck(e,new Ek)}}else fv("FirestoreClient","Using default OfflineComponentProvider"),await Ck(e,new Ek);var n;return e._offlineComponents}(e);fv("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>AS(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>AS(t.remoteStore,n))),e._onlineComponents=t}async function Pk(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(fv("FirestoreClient","Using user provided OnlineComponentProvider"),await Nk(e,e._uninitializedComponentsProvider._online)):(fv("FirestoreClient","Using default OnlineComponentProvider"),await Nk(e,new jk))),e._onlineComponents}async function Ak(e){const t=await Pk(e),n=t.eventManager;return n.onListen=rk.bind(null,t.syncEngine),n.onUnlisten=ak.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ik.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=sk.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ik(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Mk=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(e,t,n){if(!n)throw new xv(wv.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Rk(e){if(!$v.isDocumentKey(e))throw new xv(wv.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Lk(e){if($v.isDocumentKey(e))throw new xv(wv.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Uk(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":yv()}function Fk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new xv(wv.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uk(e);throw new xv(wv.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new xv(wv.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new xv(wv.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new xv(wv.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ik(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new xv(wv.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new xv(wv.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new xv(wv.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class $k{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zk({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new xv(wv.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new xv(wv.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zk(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new kv;switch(e.type){case"firstParty":return new Tv(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new xv(wv.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Mk.get(e);t&&(fv("ComponentProvider","Removing Datastore"),Mk.delete(e),t.terminate())}(this),Promise.resolve()}}function Bk(e,t,n,r={}){var i;const o=(e=Fk(e,$k))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&mv("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=cv.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Wh(JSON.stringify({alg:"none",type:"JWT"})),Wh(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new xv(wv.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new cv(o)}e._authCredentials=new Ev(new Sv(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Vk(this.firestore,e,this._query)}}class qk{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wk(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qk(this.firestore,e,this._key)}}class Wk extends Vk{constructor(e,t,n){super(e,t,uw(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qk(this.firestore,null,new $v(e))}withConverter(e){return new Wk(this.firestore,e,this._path)}}function Hk(e,t,...n){if(e=hf(e),Dk("collection","path",t),e instanceof $k){const r=Uv.fromString(t,...n);return Lk(r),new Wk(e,null,r)}{if(!(e instanceof qk||e instanceof Wk))throw new xv(wv.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Uv.fromString(t,...n));return Lk(r),new Wk(e.firestore,null,r)}}function Kk(e,t,...n){if(e=hf(e),1===arguments.length&&(t=Av.newId()),Dk("doc","path",t),e instanceof $k){const r=Uv.fromString(t,...n);return Rk(r),new qk(e,null,new $v(r))}{if(!(e instanceof qk||e instanceof Wk))throw new xv(wv.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Uv.fromString(t,...n));return Rk(r),new qk(e.firestore,e instanceof Wk?e.converter:null,new $v(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new eS(this,"async_queue_retry"),this.Vu=()=>{const e=J_();e&&fv("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=J_();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=J_();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new _v;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch($j){if(!Gv($j))throw $j;fv("AsyncQueue","Operation failed with retryable error: "+$j)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((e=>{this.Eu=e,this.du=!1;throw pv("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.du=!1,e))))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=DS.createAndSchedule(this,e,t,n,(e=>this.yu(e)));return this.Tu.push(r),r}fu(){this.Eu&&yv()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Yk(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}class Qk extends $k{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Gk,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gk(e),this._firestoreClient=void 0,await e}}}function Xk(e){if(e._terminated)throw new xv(wv.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),o=(a=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,c=i,new gb(a,s,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ik(c.experimentalLongPollingOptions),c.useFetchStreams));var a,s,l,c;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new Tk(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class Jk{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jk(lb.fromBase64String(e))}catch(t){throw new xv(wv.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jk(lb.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new xv(wv.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zv(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new xv(wv.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new xv(wv.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Iv(this._lat,e._lat)||Iv(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=/^__.*__$/;class iE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new lx(e,this.data,this.fieldMask,t,this.fieldTransforms):new sx(e,this.data,t,this.fieldTransforms)}}class oE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new lx(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yv()}}class sE{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new sE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return _E(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(aE(this.Cu)&&rE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class lE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Z_(e)}Qu(e,t,n,r=!1){return new sE({Cu:e,methodName:t,qu:n,path:zv.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cE(e){const t=e._freezeSettings(),n=Z_(e._databaseId);return new lE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function uE(e,t,n,r,i,o={}){const a=e.Qu(o.merge||o.mergeFields?2:0,t,n,i);vE("Data must be an object, but it was:",a,r);const s=gE(r,a);let l,c;if(o.merge)l=new ab(a.fieldMask),c=a.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=bE(t,r,n);if(!a.contains(i))throw new xv(wv.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);SE(e,i)||e.push(i)}l=new ab(e),c=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=a.fieldTransforms;return new iE(new Mb(s),l,c)}class dE extends eE{_toFieldTransform(e){if(2!==e.Cu)throw 1===e.Cu?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dE}}class hE extends eE{_toFieldTransform(e){return new Xw(e.path,new Vw)}isEqual(e){return e instanceof hE}}function fE(e,t,n,r){const i=e.Qu(1,t,n);vE("Data must be an object, but it was:",i,r);const o=[],a=Mb.empty();Zv(r,((e,r)=>{const s=xE(t,e,n);r=hf(r);const l=i.Nu(s);if(r instanceof dE)o.push(s);else{const e=mE(r,l);null!=e&&(o.push(s),a.set(s,e))}}));const s=new ab(o);return new oE(a,s,i.fieldTransforms)}function pE(e,t,n,r,i,o){const a=e.Qu(1,t,n),s=[bE(t,r,n)],l=[i];if(o.length%2!=0)throw new xv(wv.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<o.length;h+=2)s.push(bE(t,o[h])),l.push(o[h+1]);const c=[],u=Mb.empty();for(let h=s.length-1;h>=0;--h)if(!SE(c,s[h])){const e=s[h];let t=l[h];t=hf(t);const n=a.Nu(e);if(t instanceof dE)c.push(e);else{const r=mE(t,n);null!=r&&(c.push(e),u.set(e,r))}}const d=new ab(c);return new oE(u,d,a.fieldTransforms)}function mE(e,t){if(yE(e=hf(e)))return vE("Unsupported field value:",t,e),gE(e,t);if(e instanceof eE)return function(e,t){if(!aE(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=mE(i,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=hf(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Uw(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Dv.fromDate(e);return{timestampValue:zx(t.serializer,n)}}if(e instanceof Dv){const n=new Dv(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:zx(t.serializer,n)}}if(e instanceof tE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Jk)return{bytesValue:$x(t.serializer,e._byteString)};if(e instanceof qk){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:qx(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof nE)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw n.Bu("VectorValues must only contain numeric values.");return Rw(n.serializer,e)}))}}}}};var n;throw t.Bu(`Unsupported field value: ${Uk(e)}`)}(e,t)}function gE(e,t){const n={};return eb(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Zv(e,((e,r)=>{const i=mE(r,t.Mu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function yE(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Dv||e instanceof tE||e instanceof Jk||e instanceof qk||e instanceof eE||e instanceof nE)}function vE(e,t,n){if(!yE(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Uk(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}var r}function bE(e,t,n){if((t=hf(t))instanceof Zk)return t._internalPath;if("string"==typeof t)return xE(e,t);throw _E("Field path arguments must be of type string or ",e,!1,void 0,n)}const wE=new RegExp("[~\\*/\\[\\]]");function xE(e,t,n){if(t.search(wE)>=0)throw _E(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zk(...t.split("."))._internalPath}catch(Vj){throw _E(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function _E(e,t,n,r,i){const o=r&&!r.isEmpty(),a=void 0!==i;let s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(o||a)&&(l+=" (found",o&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new xv(wv.INVALID_ARGUMENT,s+e+l)}function SE(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qk(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new EE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jE("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class EE extends kE{data(){return super.data()}}function jE(e,t){return"string"==typeof t?xE(e,t):t instanceof Zk?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new xv(wv.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class TE{}class CE extends TE{}function NE(e,t,...n){let r=[];t instanceof TE&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof IE)).length,n=e.filter((e=>e instanceof PE)).length;if(t>1||t>0&&n>0)throw new xv(wv.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class PE extends CE{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new PE(e,t,n)}_apply(e){const t=this._parse(e);return UE(e._query,t),new Vk(e.firestore,e.converter,mw(e._query,t))}_parse(e){const t=cE(e.firestore),n=function(e,t,n,r,i,o,a){let s;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new xv(wv.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){LE(a,o);const t=[];for(const n of a)t.push(RE(r,e,n));s={arrayValue:{values:t}}}else s=RE(r,e,a)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||LE(a,o),s=function(e,t,n,r=!1){return mE(n,e.Qu(r?4:3,t))}(n,t,a,"in"===o||"not-in"===o);return Vb.create(i,o,s)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function AE(e,t,n){const r=t,i=jE("where",e);return PE._create(i,r,n)}class IE extends TE{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new IE(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:qb.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)UE(n,i),n=mw(n,i)}(e._query,t),new Vk(e.firestore,e.converter,mw(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class ME extends CE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ME(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new xv(wv.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new xv(wv.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zb(t,n)}(e._query,this._field,this._direction);return new Vk(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new cw(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function DE(e,t="asc"){const n=t,r=jE("orderBy",e);return ME._create(r,n)}function RE(e,t,n){if("string"==typeof(n=hf(n))){if(""===n)throw new xv(wv.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hw(t)&&-1!==n.indexOf("/"))throw new xv(wv.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Uv.fromString(n));if(!$v.isDocumentKey(r))throw new xv(wv.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ob(e,new $v(r))}if(n instanceof qk)return Ob(e,n._key);throw new xv(wv.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uk(n)}.`)}function LE(e,t){if(!Array.isArray(e)||0===e.length)throw new xv(wv.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function UE(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new xv(wv.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new xv(wv.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class FE{convertValue(e,t="none"){switch(bb(e)){case 0:return null;case 1:return e.booleanValue;case 2:return db(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hb(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw yv()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Zv(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>db(e.doubleValue)));return new nE(i)}convertGeoPoint(e){return new tE(db(e.latitude),db(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=pb(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(mb(e));default:return null}}convertTimestamp(e){const t=ub(e);return new Dv(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Uv.fromString(e);vv(u_(n));const r=new yb(n.get(1),n.get(3)),i=new $v(n.popFirst(5));return r.isEqual(t)||pv(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class $E{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BE extends kE{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new VE(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(jE("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class VE extends BE{data(e={}){return super.data(e)}}class qE{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new $E(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new VE(this._firestore,this._userDataWriter,n.key,n,new $E(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new xv(wv.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new VE(e._firestore,e._userDataWriter,n.doc.key,n.doc,new $E(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new VE(e._firestore,e._userDataWriter,t.doc.key,t.doc,new $E(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:WE(t.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function WE(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yv()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(e){e=Fk(e,qk);const t=Fk(e.firestore,Qk);return function(e,t,n={}){const r=new _v;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new Ok({next:s=>{o.Za(),t.enqueueAndForget((()=>qS(e,a)));const l=s.docs.has(n);!l&&s.fromCache?i.reject(new xv(wv.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&s.fromCache&&r&&"server"===r.source?i.reject(new xv(wv.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new QS(uw(n.path),o,{includeMetadataChanges:!0,_a:!0});return VS(e,a)}(await Ak(e),e.asyncQueue,t,n,r))),r.promise}(Xk(t),e._key).then((n=>ej(t,e,n)))}class KE extends FE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jk(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qk(this.firestore,null,t)}}function GE(e){e=Fk(e,Vk);const t=Fk(e.firestore,Qk),n=Xk(t),r=new KE(t);return OE(e._query),function(e,t,n={}){const r=new _v;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new Ok({next:n=>{o.Za(),t.enqueueAndForget((()=>qS(e,a))),n.fromCache&&"server"===r.source?i.reject(new xv(wv.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new QS(n,o,{includeMetadataChanges:!0,_a:!0});return VS(e,a)}(await Ak(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new qE(t,r,e,n)))}function YE(e,t,n,...r){e=Fk(e,qk);const i=Fk(e.firestore,Qk),o=cE(i);let a;return a="string"==typeof(t=hf(t))||t instanceof Zk?pE(o,"updateDoc",e._key,t,n,r):fE(o,"updateDoc",e._key,t),ZE(i,[a.toMutation(e._key,Zw.exists(!0))])}function QE(e){return ZE(Fk(e.firestore,Qk),[new hx(e._key,Zw.none())])}function XE(e,t){const n=Fk(e.firestore,Qk),r=Kk(e),i=zE(e.converter,t);return ZE(n,[uE(cE(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Zw.exists(!1))]).then((()=>r))}function JE(e,...t){var n,r,i;e=hf(e);let o={includeMetadataChanges:!1,source:"default"},a=0;"object"!=typeof t[a]||Yk(t[a])||(o=t[a],a++);const s={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Yk(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,c,u;if(e instanceof qk)c=Fk(e.firestore,Qk),u=uw(e._key.path),l={next:n=>{t[a]&&t[a](ej(c,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Fk(e,Vk);c=Fk(n.firestore,Qk),u=n._query;const r=new KE(c);l={next:e=>{t[a]&&t[a](new qE(c,r,n,e))},error:t[a+1],complete:t[a+2]},OE(e._query)}return function(e,t,n,r){const i=new Ok(r),o=new QS(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>VS(await Ak(e),o))),()=>{i.Za(),e.asyncQueue.enqueueAndForget((async()=>qS(await Ak(e),o)))}}(Xk(c),u,s,l)}function ZE(e,t){return function(e,t){const n=new _v;return e.asyncQueue.enqueueAndForget((async()=>lk(await function(e){return Pk(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Xk(e),t)}function ej(e,t,n){const r=n.docs.get(t._key),i=new KE(e);return new BE(e,i,t._key,r,new $E(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=cE(e)}set(e,t,n){this._verifyNotCommitted();const r=nj(e,this._firestore),i=zE(r.converter,t,n),o=uE(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(o.toMutation(r._key,Zw.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=nj(e,this._firestore);let o;return o="string"==typeof(t=hf(t))||t instanceof Zk?pE(this._dataReader,"WriteBatch.update",i._key,t,n,r):fE(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Zw.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=nj(e,this._firestore);return this._mutations=this._mutations.concat(new hx(t._key,Zw.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new xv(wv.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function nj(e,t){if((e=hf(e)).firestore!==t)throw new xv(wv.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function rj(){return new hE("serverTimestamp")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ij(e){return Xk(e=Fk(e,Qk)),new tj(e,(t=>ZE(e,t)))}!function(e,t=!0){uv=Op,_p(new ff("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new Qk(new jv(e.getProvider("auth-internal")),new Nv(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new xv(wv.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yb(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),Np(lv,"4.7.3",e),Np(lv,"4.7.3","esm2017")}();const oj=Tp({apiKey:"AIzaSyBYSW8hld83rMuUp2QGrbNzghVtZn4C-4U",authDomain:"novopixel-21feb.firebaseapp.com",projectId:"novopixel-21feb",storageBucket:"novopixel-21feb.firebasestorage.app",messagingSenderId:"54425792702",appId:"1:54425792702:web:96091c37e1294f8206eeef"}),aj=Ky(oj),sj=function(e){const t="string"==typeof e?e:"(default)",n=Sp("object"==typeof e?e:Cp(),"firestore").getImmediate({identifier:t});if(!n._initialized){const e=(e=>{const t=Yh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&Bk(n,...e)}return n}(oj),lj=W.createContext({});function cj(){return W.useContext(lj)}function uj({children:e}){const[t,n]=W.useState(null),[r,i]=W.useState(!1),[o,a]=W.useState(!0),[s,l]=W.useState(localStorage.getItem("lastRoute")||""),c=oh(),u=async e=>{if(console.log("Checking admin status for:",e.email),"felipebdias98@gmail.com"===e.email)return console.log("Main admin email detected"),!0;const t=NE(Hk(sj,"users"),AE("uid","==",e.uid)),n=await GE(t);if(!n.empty){const e=n.docs[0].data();return console.log("User data from Firestore:",e),"admin"===e.role}return console.log("No user data found in Firestore"),!1};W.useEffect((()=>{console.log("Setting up auth listener"),Lg(aj,$g).then((()=>{var e,t,r;return e=async e=>{if(console.log("Auth state changed. User:",null==e?void 0:e.email),e){n(e);const t=await u(e);console.log("Admin status determined:",t),i(t),localStorage.setItem("authUser",JSON.stringify(e)),localStorage.setItem("isAdmin",JSON.stringify(t));const r=localStorage.getItem("lastRoute");c(r||(t?"/admin":"/user"))}else{const e=localStorage.getItem("authUser"),r=localStorage.getItem("isAdmin");if(e){const o=JSON.parse(e);n(o),i("true"===r);try{await Lg(aj,$g),await aj.signInWithCustomToken(o.stsTokenManager.accessToken)}catch(t){console.log("Failed to reauth:",t),localStorage.removeItem("authUser"),localStorage.removeItem("isAdmin"),localStorage.removeItem("lastRoute"),n(null),i(!1),c("/login")}}else console.log("No user logged in"),n(null),i(!1),localStorage.removeItem("authUser"),localStorage.removeItem("isAdmin"),localStorage.removeItem("lastRoute"),"/login"!==window.location.pathname&&c("/login")}a(!1)},hf(aj).onAuthStateChanged(e,t,r)})).catch((e=>{console.error("Error setting persistence:",e)}))}),[c]);const d={user:t,isAdmin:r,loading:o,signIn:async(e,t)=>{try{console.log("Attempting sign in for:",e);const r=await Ig(aj,e,t);n(r.user);const o=await u(r.user);return console.log("Sign in successful. Admin status:",o),i(o),localStorage.setItem("authUser",JSON.stringify(r.user)),localStorage.setItem("isAdmin",JSON.stringify(o)),o}catch(r){switch(console.error("Sign in error:",r),n(null),i(!1),r.code){case"auth/invalid-email":throw new Error("Email inválido");case"auth/user-disabled":throw new Error("Esta conta foi desativada");case"auth/user-not-found":throw new Error("Usuário não encontrado");case"auth/wrong-password":throw new Error("Senha incorreta");case"auth/too-many-requests":throw new Error("Muitas tentativas de login. Tente novamente mais tarde");case"auth/network-request-failed":throw new Error("Erro de conexão. Verifique sua internet");default:throw new Error("Erro ao fazer login. Tente novamente")}}},signOut:async()=>{try{console.log("Attempting to sign out"),await(e=aj,hf(e).signOut()),console.log("Firebase sign out successful"),n(null),i(!1),localStorage.removeItem("authUser"),localStorage.removeItem("isAdmin"),localStorage.removeItem("lastRoute"),console.log("Local state and storage cleared"),c("/login"),console.log("Redirected to login page")}catch(t){throw console.error("Sign out error:",t),new Error("Erro ao fazer logout. Tente novamente.")}var e},lastRoute:s,setLastRoute:e=>{localStorage.setItem("lastRoute",e),l(e)}};return te.jsx(lj.Provider,{value:d,children:!o&&e})}const dj=W.createContext(void 0);function hj({children:e}){const[t,n]=W.useState(0),[r,i]=W.useState([]),[o,a]=W.useState(0),[s,l]=W.useState([]),[c,u]=W.useState(0),{isAdmin:d,user:h}=cj();return W.useEffect((()=>{if(!d||!h)return;const e=JE(NE(Hk(sj,"messages"),AE("isAdmin","==",!1),AE("read","==",!1),DE("createdAt","desc")),(e=>{n(e.size);const t=new Map;e.docs.forEach((e=>{const n=e.data(),r=n.chatId;if(t.has(r)){const e=t.get(r);e.count++,t.set(r,e)}else t.set(r,{senderName:n.senderName||"Usuário",count:1,chatId:r})}));const r=Array.from(t.values());i(r)}));return()=>e()}),[d,h]),W.useEffect((()=>{if(d||!h)return;const e=JE(NE(Hk(sj,"messages"),AE("chatId","==",h.uid),AE("isAdmin","==",!0),AE("read","==",!1)),(e=>{console.log("User unread messages:",e.size),u(e.size)}));return()=>e()}),[d,h]),W.useEffect((()=>{if(!d||!h)return;const e=JE(NE(Hk(sj,"requests"),AE("read","==",!1),DE("createdAt","desc")),(e=>{a(e.size)}));return()=>e()}),[d,h]),te.jsx(dj.Provider,{value:{unreadMessages:t,unreadByUser:r,unreadRequests:o,unreadRequestsByUser:s,unreadAdminMessages:c},children:e})}function fj(){const e=W.useContext(dj);if(void 0===e)throw new Error("useNotification must be used within a NotificationProvider");return e}const pj=W.createContext(void 0);function mj({children:e}){const[t,n]=W.useState((()=>{const e=localStorage.getItem("theme");return"dark"===e||null===e&&window.matchMedia("(prefers-color-scheme: dark)").matches}));W.useEffect((()=>{t?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))}),[t]);return te.jsx(pj.Provider,{value:{isDarkMode:t,toggleTheme:()=>{n((e=>!e))}},children:e})}let gj,yj,vj,bj={data:""},wj=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,xj=/\/\*[^]*?\*\/|  +/g,_j=/\n+/g,Sj=(e,t)=>{let n="",r="",i="";for(let o in e){let a=e[o];"@"==o[0]?"i"==o[1]?n=o+" "+a+";":r+="f"==o[1]?Sj(a,o):o+"{"+Sj(a,"k"==o[1]?"":t)+"}":"object"==typeof a?r+=Sj(a,t?t.replace(/([^,])+/g,(e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=a&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Sj.p?Sj.p(o,a):o+":"+a+";")}return n+(t&&i?t+"{"+i+"}":i)+r},kj={},Ej=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+Ej(e[n]);return t}return e};function jj(e){let t=this||{},n=e.call?e(t.p):e;return((e,t,n,r,i)=>{let o=Ej(e),a=kj[o]||(kj[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!kj[a]){let t=o!==e?e:(e=>{let t,n,r=[{}];for(;t=wj.exec(e.replace(xj,""));)t[4]?r.shift():t[3]?(n=t[3].replace(_j," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(_j," ").trim();return r[0]})(e);kj[a]=Sj(i?{["@keyframes "+a]:t}:t,n?"":"."+a)}let s=n&&kj.g?kj.g:null;return n&&(kj.g=kj[a]),l=kj[a],c=t,u=r,(d=s)?c.data=c.data.replace(d,l):-1===c.data.indexOf(l)&&(c.data=u?l+c.data:c.data+l),a;var l,c,u,d})(n.unshift?n.raw?((e,t,n)=>e.reduce(((e,r,i)=>{let o=t[i];if(o&&o.call){let e=o(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":Sj(e,""):!1===e?"":e}return e+r+(null==o?"":o)}),""))(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,(r=t.target,"object"==typeof window?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||bj),t.g,t.o,t.k);var r}jj.bind({g:1});let Oj=jj.bind({k:1});function Tj(e,t){let n=this||{};return function(){let t=arguments;return function r(i,o){let a=Object.assign({},i),s=a.className||r.className;n.p=Object.assign({theme:yj&&yj()},a),n.o=/ *go\d+/.test(s),a.className=jj.apply(n,t)+(s?" "+s:"");let l=e;return e[0]&&(l=a.as||e,delete a.as),vj&&l[0]&&vj(a),gj(l,a)}}}var Cj=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,Nj=(()=>{let e=0;return()=>(++e).toString()})(),Pj=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Aj=new Map,Ij=e=>{if(Aj.has(e))return;let t=setTimeout((()=>{Aj.delete(e),Lj({type:4,toastId:e})}),1e3);Aj.set(e,t)},Mj=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=Aj.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?Mj(e,{type:1,toast:n}):Mj(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?Ij(r):e.toasts.forEach((e=>{Ij(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+i})))}}},Dj=[],Rj={toasts:[],pausedAt:void 0},Lj=e=>{Rj=Mj(Rj,e),Dj.forEach((e=>{e(Rj)}))},Uj={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Fj=e=>(t,n)=>{let r=((e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||Nj()}))(t,e,n);return Lj({type:2,toast:r}),r.id},zj=(e,t)=>Fj("blank")(e,t);zj.error=Fj("error"),zj.success=Fj("success"),zj.loading=Fj("loading"),zj.custom=Fj("custom"),zj.dismiss=e=>{Lj({type:3,toastId:e})},zj.remove=e=>Lj({type:4,toastId:e}),zj.promise=(e,t,n)=>{let r=zj.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(zj.success(Cj(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e))).catch((e=>{zj.error(Cj(t.error,e),{id:r,...n,...null==n?void 0:n.error})})),e};var $j,Bj,Vj,qj,Wj=(e,t)=>{Lj({type:1,toast:{id:e,height:t}})},Hj=()=>{Lj({type:5,time:Date.now()})},Kj=e=>{let{toasts:t,pausedAt:n}=((e={})=>{let[t,n]=W.useState(Rj);W.useEffect((()=>(Dj.push(n),()=>{let e=Dj.indexOf(n);e>-1&&Dj.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||Uj[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:r}})(e);W.useEffect((()=>{if(n)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>zj.dismiss(t.id)),n);t.visible&&zj.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let r=W.useCallback((()=>{n&&Lj({type:6,time:Date.now()})}),[n]),i=W.useCallback(((e,n)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:o}=n||{},a=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),s=a.findIndex((t=>t.id===e.id)),l=a.filter(((e,t)=>t<s&&e.visible)).length;return a.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+i),0)}),[t]);return{toasts:t,handlers:{updateHeight:Wj,startPause:Hj,endPause:r,calculateOffset:i}}},Gj=Oj`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Yj=Oj`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Qj=Oj`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Xj=Tj("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Gj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Yj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Qj} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Jj=Oj`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Zj=Tj("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Jj} 1s linear infinite;
`,eO=Oj`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,tO=Oj`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,nO=Tj("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${tO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,rO=Tj("div")`
  position: absolute;
`,iO=Tj("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,oO=Oj`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,aO=Tj("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${oO} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,sO=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return void 0!==t?"string"==typeof t?W.createElement(aO,null,t):t:"blank"===n?null:W.createElement(iO,null,W.createElement(Zj,{...r}),"loading"!==n&&W.createElement(rO,null,"error"===n?W.createElement(Xj,{...r}):W.createElement(nO,{...r})))},lO=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,cO=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,uO=Tj("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,dO=Tj("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,hO=W.memo((({toast:e,position:t,style:n,children:r})=>{let i=e.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,i]=Pj()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[lO(n),cO(n)];return{animation:t?`${Oj(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Oj(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=W.createElement(sO,{toast:e}),a=W.createElement(dO,{...e.ariaProps},Cj(e.message,e));return W.createElement(uO,{className:e.className,style:{...i,...n,...e.style}},"function"==typeof r?r({icon:o,message:a}):W.createElement(W.Fragment,null,o,a))}));$j=W.createElement,Sj.p=Bj,gj=$j,yj=Vj,vj=qj;var fO=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let o=W.useCallback((t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;r(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,r]);return W.createElement("div",{ref:o,className:t,style:n},i)},pO=jj`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,mO=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:o,containerClassName:a})=>{let{toasts:s,handlers:l}=Kj(n);return W.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:a,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map((n=>{let o=n.position||t,a=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Pj()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}})(o,l.calculateOffset(n,{reverseOrder:e,gutter:r,defaultPosition:t}));return W.createElement(fO,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?pO:"",style:a},"custom"===n.type?Cj(n.message,n):i?i(n):W.createElement(hO,{toast:n,position:o}))})))},gO=zj;const yO=W.createContext(void 0);function vO({children:e}){const[t,n]=W.useState(null),[r,i]=W.useState(!1),[o,a]=W.useState(!1);return W.useEffect((()=>{const e=()=>{const e=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://");i(e),console.log("[PWA] Is Standalone:",e)},t=window.matchMedia("(display-mode: standalone)");t.addListener(e);const r=e=>{console.log("[PWA] Before Install Prompt Event triggered"),e.preventDefault(),n(e),a(!0)};return e(),window.addEventListener("beforeinstallprompt",r),window.addEventListener("appinstalled",(()=>{console.log("[PWA] App installed"),i(!0),n(null)})),(async()=>{if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.register("/sw.js",{scope:"/"});console.log("[PWA] Service Worker registered:",e),e.addEventListener("updatefound",(()=>{const t=e.installing;t&&t.addEventListener("statechange",(()=>{"installed"===t.state&&navigator.serviceWorker.controller&&zj.success("Nova versão disponível! Recarregue a página.",{duration:5e3,icon:"🔄"})}))}))}catch(e){console.error("[PWA] Service Worker registration failed:",e)}})(),()=>{t.removeListener(e),window.removeEventListener("beforeinstallprompt",r)}}),[]),te.jsx(yO.Provider,{value:{deferredPrompt:t,setDeferredPrompt:n,isStandalone:r,isInstallable:o},children:e})}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
//# sourceMappingURL=index-Ba03iYcQ.js.map