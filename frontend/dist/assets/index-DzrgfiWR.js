var gN=Object.defineProperty;var vN=(e,t,n)=>t in e?gN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var K=(e,t,n)=>(vN(e,typeof t!="symbol"?t+"":t,n),n);function bN(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function kC(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var SC={exports:{}},Lf={},_C={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc=Symbol.for("react.element"),yN=Symbol.for("react.portal"),xN=Symbol.for("react.fragment"),wN=Symbol.for("react.strict_mode"),kN=Symbol.for("react.profiler"),SN=Symbol.for("react.provider"),_N=Symbol.for("react.context"),CN=Symbol.for("react.forward_ref"),ON=Symbol.for("react.suspense"),EN=Symbol.for("react.memo"),TN=Symbol.for("react.lazy"),jy=Symbol.iterator;function jN(e){return e===null||typeof e!="object"?null:(e=jy&&e[jy]||e["@@iterator"],typeof e=="function"?e:null)}var CC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},OC=Object.assign,EC={};function Qa(e,t,n){this.props=e,this.context=t,this.refs=EC,this.updater=n||CC}Qa.prototype.isReactComponent={};Qa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function TC(){}TC.prototype=Qa.prototype;function Hv(e,t,n){this.props=e,this.context=t,this.refs=EC,this.updater=n||CC}var Uv=Hv.prototype=new TC;Uv.constructor=Hv;OC(Uv,Qa.prototype);Uv.isPureReactComponent=!0;var Py=Array.isArray,jC=Object.prototype.hasOwnProperty,Wv={current:null},PC={key:!0,ref:!0,__self:!0,__source:!0};function NC(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)jC.call(t,r)&&!PC.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:lc,type:e,key:i,ref:a,props:o,_owner:Wv.current}}function PN(e,t){return{$$typeof:lc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vv(e){return typeof e=="object"&&e!==null&&e.$$typeof===lc}function NN(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ny=/\/+/g;function Up(e,t){return typeof e=="object"&&e!==null&&e.key!=null?NN(""+e.key):t.toString(36)}function Gu(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case lc:case yN:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Up(a,0):r,Py(o)?(n="",e!=null&&(n=e.replace(Ny,"$&/")+"/"),Gu(o,t,n,"",function(c){return c})):o!=null&&(Vv(o)&&(o=PN(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ny,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Py(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Up(i,s);a+=Gu(i,t,n,l,o)}else if(l=jN(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Up(i,s++),a+=Gu(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $c(e,t,n){if(e==null)return e;var r=[],o=0;return Gu(e,r,"","",function(i){return t.call(n,i,o++)}),r}function RN(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $t={current:null},Xu={transition:null},AN={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Xu,ReactCurrentOwner:Wv};function RC(){throw Error("act(...) is not supported in production builds of React.")}Se.Children={map:$c,forEach:function(e,t,n){$c(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $c(e,function(){t++}),t},toArray:function(e){return $c(e,function(t){return t})||[]},only:function(e){if(!Vv(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Se.Component=Qa;Se.Fragment=xN;Se.Profiler=kN;Se.PureComponent=Hv;Se.StrictMode=wN;Se.Suspense=ON;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AN;Se.act=RC;Se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=OC({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Wv.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)jC.call(t,l)&&!PC.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:lc,type:e.type,key:o,ref:i,props:r,_owner:a}};Se.createContext=function(e){return e={$$typeof:_N,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:SN,_context:e},e.Consumer=e};Se.createElement=NC;Se.createFactory=function(e){var t=NC.bind(null,e);return t.type=e,t};Se.createRef=function(){return{current:null}};Se.forwardRef=function(e){return{$$typeof:CN,render:e}};Se.isValidElement=Vv;Se.lazy=function(e){return{$$typeof:TN,_payload:{_status:-1,_result:e},_init:RN}};Se.memo=function(e,t){return{$$typeof:EN,type:e,compare:t===void 0?null:t}};Se.startTransition=function(e){var t=Xu.transition;Xu.transition={};try{e()}finally{Xu.transition=t}};Se.unstable_act=RC;Se.useCallback=function(e,t){return $t.current.useCallback(e,t)};Se.useContext=function(e){return $t.current.useContext(e)};Se.useDebugValue=function(){};Se.useDeferredValue=function(e){return $t.current.useDeferredValue(e)};Se.useEffect=function(e,t){return $t.current.useEffect(e,t)};Se.useId=function(){return $t.current.useId()};Se.useImperativeHandle=function(e,t,n){return $t.current.useImperativeHandle(e,t,n)};Se.useInsertionEffect=function(e,t){return $t.current.useInsertionEffect(e,t)};Se.useLayoutEffect=function(e,t){return $t.current.useLayoutEffect(e,t)};Se.useMemo=function(e,t){return $t.current.useMemo(e,t)};Se.useReducer=function(e,t,n){return $t.current.useReducer(e,t,n)};Se.useRef=function(e){return $t.current.useRef(e)};Se.useState=function(e){return $t.current.useState(e)};Se.useSyncExternalStore=function(e,t,n){return $t.current.useSyncExternalStore(e,t,n)};Se.useTransition=function(){return $t.current.useTransition()};Se.version="18.3.1";_C.exports=Se;var k=_C.exports;const Y=Hi(k),MN=bN({__proto__:null,default:Y},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LN=k,IN=Symbol.for("react.element"),DN=Symbol.for("react.fragment"),$N=Object.prototype.hasOwnProperty,FN=LN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zN={key:!0,ref:!0,__self:!0,__source:!0};function AC(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)$N.call(t,r)&&!zN.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:IN,type:e,key:i,ref:a,props:o,_owner:FN.current}}Lf.Fragment=DN;Lf.jsx=AC;Lf.jsxs=AC;SC.exports=Lf;var m=SC.exports,bh={},MC={exports:{}},pn={},LC={exports:{}},IC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,U){var Q=N.length;N.push(U);e:for(;0<Q;){var Z=Q-1>>>1,$=N[Z];if(0<o($,U))N[Z]=U,N[Q]=$,Q=Z;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var U=N[0],Q=N.pop();if(Q!==U){N[0]=Q;e:for(var Z=0,$=N.length,F=$>>>1;Z<F;){var D=2*(Z+1)-1,z=N[D],j=D+1,le=N[j];if(0>o(z,Q))j<$&&0>o(le,z)?(N[Z]=le,N[j]=Q,Z=j):(N[Z]=z,N[D]=Q,Z=D);else if(j<$&&0>o(le,Q))N[Z]=le,N[j]=Q,Z=j;else break e}}return U}function o(N,U){var Q=N.sortIndex-U.sortIndex;return Q!==0?Q:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,d=null,p=3,h=!1,g=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=N)r(c),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(c)}}function S(N){if(v=!1,w(N),!g)if(n(l)!==null)g=!0,J(C);else{var U=n(c);U!==null&&M(S,U.startTime-N)}}function C(N,U){g=!1,v&&(v=!1,y(E),E=-1),h=!0;var Q=p;try{for(w(U),d=n(l);d!==null&&(!(d.expirationTime>U)||N&&!A());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,p=d.priorityLevel;var $=Z(d.expirationTime<=U);U=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(l)&&r(l),w(U)}else r(l);d=n(l)}if(d!==null)var F=!0;else{var D=n(c);D!==null&&M(S,D.startTime-U),F=!1}return F}finally{d=null,p=Q,h=!1}}var _=!1,O=null,E=-1,T=5,P=-1;function A(){return!(e.unstable_now()-P<T)}function I(){if(O!==null){var N=e.unstable_now();P=N;var U=!0;try{U=O(!0,N)}finally{U?X():(_=!1,O=null)}}else _=!1}var X;if(typeof b=="function")X=function(){b(I)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,V=H.port2;H.port1.onmessage=I,X=function(){V.postMessage(null)}}else X=function(){x(I,0)};function J(N){O=N,_||(_=!0,X())}function M(N,U){E=x(function(){N(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,J(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var U=3;break;default:U=p}var Q=p;p=U;try{return N()}finally{p=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=p;p=N;try{return U()}finally{p=Q}},e.unstable_scheduleCallback=function(N,U,Q){var Z=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Z+Q:Z):Q=Z,N){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=Q+$,N={id:u++,callback:U,priorityLevel:N,startTime:Q,expirationTime:$,sortIndex:-1},Q>Z?(N.sortIndex=Q,t(c,N),n(l)===null&&N===n(c)&&(v?(y(E),E=-1):v=!0,M(S,Q-Z))):(N.sortIndex=$,t(l,N),g||h||(g=!0,J(C))),N},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(N){var U=p;return function(){var Q=p;p=U;try{return N.apply(this,arguments)}finally{p=Q}}}})(IC);LC.exports=IC;var BN=LC.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HN=k,un=BN;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var DC=new Set,bl={};function Ui(e,t){Na(e,t),Na(e+"Capture",t)}function Na(e,t){for(bl[e]=t,e=0;e<t.length;e++)DC.add(t[e])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=Object.prototype.hasOwnProperty,UN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ry={},Ay={};function WN(e){return yh.call(Ay,e)?!0:yh.call(Ry,e)?!1:UN.test(e)?Ay[e]=!0:(Ry[e]=!0,!1)}function VN(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function YN(e,t,n,r){if(t===null||typeof t>"u"||VN(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ft(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_t[e]=new Ft(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_t[t]=new Ft(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_t[e]=new Ft(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_t[e]=new Ft(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_t[e]=new Ft(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_t[e]=new Ft(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_t[e]=new Ft(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_t[e]=new Ft(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_t[e]=new Ft(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yv=/[\-:]([a-z])/g;function Gv(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yv,Gv);_t[t]=new Ft(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yv,Gv);_t[t]=new Ft(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yv,Gv);_t[t]=new Ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_t[e]=new Ft(e,1,!1,e.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_t[e]=new Ft(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xv(e,t,n,r){var o=_t.hasOwnProperty(t)?_t[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(YN(t,n,o,r)&&(n=null),r||o===null?WN(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jr=HN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fc=Symbol.for("react.element"),aa=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),qv=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),$C=Symbol.for("react.provider"),FC=Symbol.for("react.context"),Kv=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),kh=Symbol.for("react.suspense_list"),Qv=Symbol.for("react.memo"),go=Symbol.for("react.lazy"),zC=Symbol.for("react.offscreen"),My=Symbol.iterator;function ps(e){return e===null||typeof e!="object"?null:(e=My&&e[My]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Object.assign,Wp;function Ms(e){if(Wp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wp=t&&t[1]||""}return`
`+Wp+e}var Vp=!1;function Yp(e,t){if(!e||Vp)return"";Vp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Vp=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ms(e):""}function GN(e){switch(e.tag){case 5:return Ms(e.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return e=Yp(e.type,!1),e;case 11:return e=Yp(e.type.render,!1),e;case 1:return e=Yp(e.type,!0),e;default:return""}}function Sh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sa:return"Fragment";case aa:return"Portal";case xh:return"Profiler";case qv:return"StrictMode";case wh:return"Suspense";case kh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case FC:return(e.displayName||"Context")+".Consumer";case $C:return(e._context.displayName||"Context")+".Provider";case Kv:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qv:return t=e.displayName||null,t!==null?t:Sh(e.type)||"Memo";case go:t=e._payload,e=e._init;try{return Sh(e(t))}catch{}}return null}function XN(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(t);case 8:return t===qv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function BC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qN(e){var t=BC(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zc(e){e._valueTracker||(e._valueTracker=qN(e))}function HC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=BC(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Cd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _h(e,t){var n=t.checked;return nt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ly(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zo(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function UC(e,t){t=t.checked,t!=null&&Xv(e,"checked",t,!1)}function Ch(e,t){UC(e,t);var n=zo(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oh(e,t.type,zo(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Iy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oh(e,t,n){(t!=="number"||Cd(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ls=Array.isArray;function ka(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zo(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Eh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return nt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dy(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(Ls(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zo(n)}}function WC(e,t){var n=zo(t.value),r=zo(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $y(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function VC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Th(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?VC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bc,YC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bc=Bc||document.createElement("div"),Bc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KN=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(e){KN.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qs[t]=qs[e]})});function GC(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qs.hasOwnProperty(e)&&qs[e]?(""+t).trim():t+"px"}function XC(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=GC(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var QN=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jh(e,t){if(t){if(QN[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Ph(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=null;function Jv(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rh=null,Sa=null,_a=null;function Fy(e){if(e=dc(e)){if(typeof Rh!="function")throw Error(q(280));var t=e.stateNode;t&&(t=zf(t),Rh(e.stateNode,e.type,t))}}function qC(e){Sa?_a?_a.push(e):_a=[e]:Sa=e}function KC(){if(Sa){var e=Sa,t=_a;if(_a=Sa=null,Fy(e),t)for(e=0;e<t.length;e++)Fy(t[e])}}function QC(e,t){return e(t)}function JC(){}var Gp=!1;function ZC(e,t,n){if(Gp)return e(t,n);Gp=!0;try{return QC(e,t,n)}finally{Gp=!1,(Sa!==null||_a!==null)&&(JC(),KC())}}function xl(e,t){var n=e.stateNode;if(n===null)return null;var r=zf(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var Ah=!1;if(Hr)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){Ah=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Ah=!1}function JN(e,t,n,r,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ks=!1,Od=null,Ed=!1,Mh=null,ZN={onError:function(e){Ks=!0,Od=e}};function eR(e,t,n,r,o,i,a,s,l){Ks=!1,Od=null,JN.apply(ZN,arguments)}function tR(e,t,n,r,o,i,a,s,l){if(eR.apply(this,arguments),Ks){if(Ks){var c=Od;Ks=!1,Od=null}else throw Error(q(198));Ed||(Ed=!0,Mh=c)}}function Wi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function eO(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zy(e){if(Wi(e)!==e)throw Error(q(188))}function nR(e){var t=e.alternate;if(!t){if(t=Wi(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return zy(o),e;if(i===r)return zy(o),t;i=i.sibling}throw Error(q(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function tO(e){return e=nR(e),e!==null?nO(e):null}function nO(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nO(e);if(t!==null)return t;e=e.sibling}return null}var rO=un.unstable_scheduleCallback,By=un.unstable_cancelCallback,rR=un.unstable_shouldYield,oR=un.unstable_requestPaint,ct=un.unstable_now,iR=un.unstable_getCurrentPriorityLevel,Zv=un.unstable_ImmediatePriority,oO=un.unstable_UserBlockingPriority,Td=un.unstable_NormalPriority,aR=un.unstable_LowPriority,iO=un.unstable_IdlePriority,If=null,vr=null;function sR(e){if(vr&&typeof vr.onCommitFiberRoot=="function")try{vr.onCommitFiberRoot(If,e,void 0,(e.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:uR,lR=Math.log,cR=Math.LN2;function uR(e){return e>>>=0,e===0?32:31-(lR(e)/cR|0)|0}var Hc=64,Uc=4194304;function Is(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jd(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Is(s):(i&=a,i!==0&&(r=Is(i)))}else a=n&~o,a!==0?r=Is(a):i!==0&&(r=Is(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xn(t),o=1<<n,r|=e[n],t&=~o;return r}function dR(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fR(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Xn(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=dR(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Lh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function aO(){var e=Hc;return Hc<<=1,!(Hc&4194240)&&(Hc=64),e}function Xp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xn(t),e[t]=n}function pR(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function e0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Pe=0;function sO(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lO,t0,cO,uO,dO,Ih=!1,Wc=[],To=null,jo=null,Po=null,wl=new Map,kl=new Map,yo=[],mR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hy(e,t){switch(e){case"focusin":case"focusout":To=null;break;case"dragenter":case"dragleave":jo=null;break;case"mouseover":case"mouseout":Po=null;break;case"pointerover":case"pointerout":wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(t.pointerId)}}function hs(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=dc(t),t!==null&&t0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function hR(e,t,n,r,o){switch(t){case"focusin":return To=hs(To,e,t,n,r,o),!0;case"dragenter":return jo=hs(jo,e,t,n,r,o),!0;case"mouseover":return Po=hs(Po,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return wl.set(i,hs(wl.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,kl.set(i,hs(kl.get(i)||null,e,t,n,r,o)),!0}return!1}function fO(e){var t=mi(e.target);if(t!==null){var n=Wi(t);if(n!==null){if(t=n.tag,t===13){if(t=eO(n),t!==null){e.blockedOn=t,dO(e.priority,function(){cO(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Nh=r,n.target.dispatchEvent(r),Nh=null}else return t=dc(n),t!==null&&t0(t),e.blockedOn=n,!1;t.shift()}return!0}function Uy(e,t,n){qu(e)&&n.delete(t)}function gR(){Ih=!1,To!==null&&qu(To)&&(To=null),jo!==null&&qu(jo)&&(jo=null),Po!==null&&qu(Po)&&(Po=null),wl.forEach(Uy),kl.forEach(Uy)}function gs(e,t){e.blockedOn===t&&(e.blockedOn=null,Ih||(Ih=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,gR)))}function Sl(e){function t(o){return gs(o,e)}if(0<Wc.length){gs(Wc[0],e);for(var n=1;n<Wc.length;n++){var r=Wc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(To!==null&&gs(To,e),jo!==null&&gs(jo,e),Po!==null&&gs(Po,e),wl.forEach(t),kl.forEach(t),n=0;n<yo.length;n++)r=yo[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yo.length&&(n=yo[0],n.blockedOn===null);)fO(n),n.blockedOn===null&&yo.shift()}var Ca=Jr.ReactCurrentBatchConfig,Pd=!0;function vR(e,t,n,r){var o=Pe,i=Ca.transition;Ca.transition=null;try{Pe=1,n0(e,t,n,r)}finally{Pe=o,Ca.transition=i}}function bR(e,t,n,r){var o=Pe,i=Ca.transition;Ca.transition=null;try{Pe=4,n0(e,t,n,r)}finally{Pe=o,Ca.transition=i}}function n0(e,t,n,r){if(Pd){var o=Dh(e,t,n,r);if(o===null)om(e,t,r,Nd,n),Hy(e,r);else if(hR(o,e,t,n,r))r.stopPropagation();else if(Hy(e,r),t&4&&-1<mR.indexOf(e)){for(;o!==null;){var i=dc(o);if(i!==null&&lO(i),i=Dh(e,t,n,r),i===null&&om(e,t,r,Nd,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else om(e,t,r,null,n)}}var Nd=null;function Dh(e,t,n,r){if(Nd=null,e=Jv(r),e=mi(e),e!==null)if(t=Wi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=eO(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Nd=e,null}function pO(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iR()){case Zv:return 1;case oO:return 4;case Td:case aR:return 16;case iO:return 536870912;default:return 16}default:return 16}}var wo=null,r0=null,Ku=null;function mO(){if(Ku)return Ku;var e,t=r0,n=t.length,r,o="value"in wo?wo.value:wo.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ku=o.slice(e,1<r?1-r:void 0)}function Qu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vc(){return!0}function Wy(){return!1}function mn(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vc:Wy,this.isPropagationStopped=Wy,this}return nt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vc)},persist:function(){},isPersistent:Vc}),t}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},o0=mn(Ja),uc=nt({},Ja,{view:0,detail:0}),yR=mn(uc),qp,Kp,vs,Df=nt({},uc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:i0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vs&&(vs&&e.type==="mousemove"?(qp=e.screenX-vs.screenX,Kp=e.screenY-vs.screenY):Kp=qp=0,vs=e),qp)},movementY:function(e){return"movementY"in e?e.movementY:Kp}}),Vy=mn(Df),xR=nt({},Df,{dataTransfer:0}),wR=mn(xR),kR=nt({},uc,{relatedTarget:0}),Qp=mn(kR),SR=nt({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),_R=mn(SR),CR=nt({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),OR=mn(CR),ER=nt({},Ja,{data:0}),Yy=mn(ER),TR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NR(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=PR[e])?!!t[e]:!1}function i0(){return NR}var RR=nt({},uc,{key:function(e){if(e.key){var t=TR[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jR[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:i0,charCode:function(e){return e.type==="keypress"?Qu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),AR=mn(RR),MR=nt({},Df,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gy=mn(MR),LR=nt({},uc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:i0}),IR=mn(LR),DR=nt({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),$R=mn(DR),FR=nt({},Df,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zR=mn(FR),BR=[9,13,27,32],a0=Hr&&"CompositionEvent"in window,Qs=null;Hr&&"documentMode"in document&&(Qs=document.documentMode);var HR=Hr&&"TextEvent"in window&&!Qs,hO=Hr&&(!a0||Qs&&8<Qs&&11>=Qs),Xy=" ",qy=!1;function gO(e,t){switch(e){case"keyup":return BR.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vO(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var la=!1;function UR(e,t){switch(e){case"compositionend":return vO(t);case"keypress":return t.which!==32?null:(qy=!0,Xy);case"textInput":return e=t.data,e===Xy&&qy?null:e;default:return null}}function WR(e,t){if(la)return e==="compositionend"||!a0&&gO(e,t)?(e=mO(),Ku=r0=wo=null,la=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hO&&t.locale!=="ko"?null:t.data;default:return null}}var VR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ky(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!VR[e.type]:t==="textarea"}function bO(e,t,n,r){qC(r),t=Rd(t,"onChange"),0<t.length&&(n=new o0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Js=null,_l=null;function YR(e){jO(e,0)}function $f(e){var t=da(e);if(HC(t))return e}function GR(e,t){if(e==="change")return t}var yO=!1;if(Hr){var Jp;if(Hr){var Zp="oninput"in document;if(!Zp){var Qy=document.createElement("div");Qy.setAttribute("oninput","return;"),Zp=typeof Qy.oninput=="function"}Jp=Zp}else Jp=!1;yO=Jp&&(!document.documentMode||9<document.documentMode)}function Jy(){Js&&(Js.detachEvent("onpropertychange",xO),_l=Js=null)}function xO(e){if(e.propertyName==="value"&&$f(_l)){var t=[];bO(t,_l,e,Jv(e)),ZC(YR,t)}}function XR(e,t,n){e==="focusin"?(Jy(),Js=t,_l=n,Js.attachEvent("onpropertychange",xO)):e==="focusout"&&Jy()}function qR(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $f(_l)}function KR(e,t){if(e==="click")return $f(t)}function QR(e,t){if(e==="input"||e==="change")return $f(t)}function JR(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zn=typeof Object.is=="function"?Object.is:JR;function Cl(e,t){if(Zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!yh.call(t,o)||!Zn(e[o],t[o]))return!1}return!0}function Zy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function e1(e,t){var n=Zy(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zy(n)}}function wO(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wO(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kO(){for(var e=window,t=Cd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cd(e.document)}return t}function s0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ZR(e){var t=kO(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wO(n.ownerDocument.documentElement,n)){if(r!==null&&s0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=e1(n,i);var a=e1(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var e4=Hr&&"documentMode"in document&&11>=document.documentMode,ca=null,$h=null,Zs=null,Fh=!1;function t1(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fh||ca==null||ca!==Cd(r)||(r=ca,"selectionStart"in r&&s0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zs&&Cl(Zs,r)||(Zs=r,r=Rd($h,"onSelect"),0<r.length&&(t=new o0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ca)))}function Yc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ua={animationend:Yc("Animation","AnimationEnd"),animationiteration:Yc("Animation","AnimationIteration"),animationstart:Yc("Animation","AnimationStart"),transitionend:Yc("Transition","TransitionEnd")},em={},SO={};Hr&&(SO=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function Ff(e){if(em[e])return em[e];if(!ua[e])return e;var t=ua[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in SO)return em[e]=t[n];return e}var _O=Ff("animationend"),CO=Ff("animationiteration"),OO=Ff("animationstart"),EO=Ff("transitionend"),TO=new Map,n1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qo(e,t){TO.set(e,t),Ui(t,[e])}for(var tm=0;tm<n1.length;tm++){var nm=n1[tm],t4=nm.toLowerCase(),n4=nm[0].toUpperCase()+nm.slice(1);qo(t4,"on"+n4)}qo(_O,"onAnimationEnd");qo(CO,"onAnimationIteration");qo(OO,"onAnimationStart");qo("dblclick","onDoubleClick");qo("focusin","onFocus");qo("focusout","onBlur");qo(EO,"onTransitionEnd");Na("onMouseEnter",["mouseout","mouseover"]);Na("onMouseLeave",["mouseout","mouseover"]);Na("onPointerEnter",["pointerout","pointerover"]);Na("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r4=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function r1(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tR(r,t,void 0,e),e.currentTarget=null}function jO(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;r1(o,s,c),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;r1(o,s,c),i=l}}}if(Ed)throw e=Mh,Ed=!1,Mh=null,e}function ze(e,t){var n=t[Wh];n===void 0&&(n=t[Wh]=new Set);var r=e+"__bubble";n.has(r)||(PO(t,e,2,!1),n.add(r))}function rm(e,t,n){var r=0;t&&(r|=4),PO(n,e,r,t)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function Ol(e){if(!e[Gc]){e[Gc]=!0,DC.forEach(function(n){n!=="selectionchange"&&(r4.has(n)||rm(n,!1,e),rm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gc]||(t[Gc]=!0,rm("selectionchange",!1,t))}}function PO(e,t,n,r){switch(pO(t)){case 1:var o=vR;break;case 4:o=bR;break;default:o=n0}n=o.bind(null,t,n,e),o=void 0,!Ah||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function om(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=mi(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}ZC(function(){var c=i,u=Jv(n),d=[];e:{var p=TO.get(e);if(p!==void 0){var h=o0,g=e;switch(e){case"keypress":if(Qu(n)===0)break e;case"keydown":case"keyup":h=AR;break;case"focusin":g="focus",h=Qp;break;case"focusout":g="blur",h=Qp;break;case"beforeblur":case"afterblur":h=Qp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Vy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=wR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=IR;break;case _O:case CO:case OO:h=_R;break;case EO:h=$R;break;case"scroll":h=yR;break;case"wheel":h=zR;break;case"copy":case"cut":case"paste":h=OR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Gy}var v=(t&4)!==0,x=!v&&e==="scroll",y=v?p!==null?p+"Capture":null:p;v=[];for(var b=c,w;b!==null;){w=b;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,y!==null&&(S=xl(b,y),S!=null&&v.push(El(b,S,w)))),x)break;b=b.return}0<v.length&&(p=new h(p,g,null,n,u),d.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Nh&&(g=n.relatedTarget||n.fromElement)&&(mi(g)||g[Ur]))break e;if((h||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=c,g=g?mi(g):null,g!==null&&(x=Wi(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=c),h!==g)){if(v=Vy,S="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(v=Gy,S="onPointerLeave",y="onPointerEnter",b="pointer"),x=h==null?p:da(h),w=g==null?p:da(g),p=new v(S,b+"leave",h,n,u),p.target=x,p.relatedTarget=w,S=null,mi(u)===c&&(v=new v(y,b+"enter",g,n,u),v.target=w,v.relatedTarget=x,S=v),x=S,h&&g)t:{for(v=h,y=g,b=0,w=v;w;w=Ji(w))b++;for(w=0,S=y;S;S=Ji(S))w++;for(;0<b-w;)v=Ji(v),b--;for(;0<w-b;)y=Ji(y),w--;for(;b--;){if(v===y||y!==null&&v===y.alternate)break t;v=Ji(v),y=Ji(y)}v=null}else v=null;h!==null&&o1(d,p,h,v,!1),g!==null&&x!==null&&o1(d,x,g,v,!0)}}e:{if(p=c?da(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var C=GR;else if(Ky(p))if(yO)C=QR;else{C=qR;var _=XR}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=KR);if(C&&(C=C(e,c))){bO(d,C,n,u);break e}_&&_(e,p,c),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Oh(p,"number",p.value)}switch(_=c?da(c):window,e){case"focusin":(Ky(_)||_.contentEditable==="true")&&(ca=_,$h=c,Zs=null);break;case"focusout":Zs=$h=ca=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,t1(d,n,u);break;case"selectionchange":if(e4)break;case"keydown":case"keyup":t1(d,n,u)}var O;if(a0)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else la?gO(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(hO&&n.locale!=="ko"&&(la||E!=="onCompositionStart"?E==="onCompositionEnd"&&la&&(O=mO()):(wo=u,r0="value"in wo?wo.value:wo.textContent,la=!0)),_=Rd(c,E),0<_.length&&(E=new Yy(E,e,null,n,u),d.push({event:E,listeners:_}),O?E.data=O:(O=vO(n),O!==null&&(E.data=O)))),(O=HR?UR(e,n):WR(e,n))&&(c=Rd(c,"onBeforeInput"),0<c.length&&(u=new Yy("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=O))}jO(d,t)})}function El(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rd(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xl(e,n),i!=null&&r.unshift(El(e,i,o)),i=xl(e,t),i!=null&&r.push(El(e,i,o))),e=e.return}return r}function Ji(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function o1(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,o?(l=xl(n,i),l!=null&&a.unshift(El(n,l,s))):o||(l=xl(n,i),l!=null&&a.push(El(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var o4=/\r\n?/g,i4=/\u0000|\uFFFD/g;function i1(e){return(typeof e=="string"?e:""+e).replace(o4,`
`).replace(i4,"")}function Xc(e,t,n){if(t=i1(t),i1(e)!==t&&n)throw Error(q(425))}function Ad(){}var zh=null,Bh=null;function Hh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,a4=typeof clearTimeout=="function"?clearTimeout:void 0,a1=typeof Promise=="function"?Promise:void 0,s4=typeof queueMicrotask=="function"?queueMicrotask:typeof a1<"u"?function(e){return a1.resolve(null).then(e).catch(l4)}:Uh;function l4(e){setTimeout(function(){throw e})}function im(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Sl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Sl(t)}function No(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function s1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Za=Math.random().toString(36).slice(2),pr="__reactFiber$"+Za,Tl="__reactProps$"+Za,Ur="__reactContainer$"+Za,Wh="__reactEvents$"+Za,c4="__reactListeners$"+Za,u4="__reactHandles$"+Za;function mi(e){var t=e[pr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ur]||n[pr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=s1(e);e!==null;){if(n=e[pr])return n;e=s1(e)}return t}e=n,n=e.parentNode}return null}function dc(e){return e=e[pr]||e[Ur],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function da(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function zf(e){return e[Tl]||null}var Vh=[],fa=-1;function Ko(e){return{current:e}}function He(e){0>fa||(e.current=Vh[fa],Vh[fa]=null,fa--)}function Fe(e,t){fa++,Vh[fa]=e.current,e.current=t}var Bo={},At=Ko(Bo),Xt=Ko(!1),ji=Bo;function Ra(e,t){var n=e.type.contextTypes;if(!n)return Bo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function qt(e){return e=e.childContextTypes,e!=null}function Md(){He(Xt),He(At)}function l1(e,t,n){if(At.current!==Bo)throw Error(q(168));Fe(At,t),Fe(Xt,n)}function NO(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(q(108,XN(e)||"Unknown",o));return nt({},n,r)}function Ld(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bo,ji=At.current,Fe(At,e),Fe(Xt,Xt.current),!0}function c1(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=NO(e,t,ji),r.__reactInternalMemoizedMergedChildContext=e,He(Xt),He(At),Fe(At,e)):He(Xt),Fe(Xt,n)}var Nr=null,Bf=!1,am=!1;function RO(e){Nr===null?Nr=[e]:Nr.push(e)}function d4(e){Bf=!0,RO(e)}function Qo(){if(!am&&Nr!==null){am=!0;var e=0,t=Pe;try{var n=Nr;for(Pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nr=null,Bf=!1}catch(o){throw Nr!==null&&(Nr=Nr.slice(e+1)),rO(Zv,Qo),o}finally{Pe=t,am=!1}}return null}var pa=[],ma=0,Id=null,Dd=0,wn=[],kn=0,Pi=null,Mr=1,Lr="";function ci(e,t){pa[ma++]=Dd,pa[ma++]=Id,Id=e,Dd=t}function AO(e,t,n){wn[kn++]=Mr,wn[kn++]=Lr,wn[kn++]=Pi,Pi=e;var r=Mr;e=Lr;var o=32-Xn(r)-1;r&=~(1<<o),n+=1;var i=32-Xn(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Mr=1<<32-Xn(t)+o|n<<o|r,Lr=i+e}else Mr=1<<i|n<<o|r,Lr=e}function l0(e){e.return!==null&&(ci(e,1),AO(e,1,0))}function c0(e){for(;e===Id;)Id=pa[--ma],pa[ma]=null,Dd=pa[--ma],pa[ma]=null;for(;e===Pi;)Pi=wn[--kn],wn[kn]=null,Lr=wn[--kn],wn[kn]=null,Mr=wn[--kn],wn[kn]=null}var cn=null,sn=null,qe=!1,Bn=null;function MO(e,t){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function u1(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,cn=e,sn=No(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,cn=e,sn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pi!==null?{id:Mr,overflow:Lr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,cn=e,sn=null,!0):!1;default:return!1}}function Yh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gh(e){if(qe){var t=sn;if(t){var n=t;if(!u1(e,t)){if(Yh(e))throw Error(q(418));t=No(n.nextSibling);var r=cn;t&&u1(e,t)?MO(r,n):(e.flags=e.flags&-4097|2,qe=!1,cn=e)}}else{if(Yh(e))throw Error(q(418));e.flags=e.flags&-4097|2,qe=!1,cn=e}}}function d1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;cn=e}function qc(e){if(e!==cn)return!1;if(!qe)return d1(e),qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hh(e.type,e.memoizedProps)),t&&(t=sn)){if(Yh(e))throw LO(),Error(q(418));for(;t;)MO(e,t),t=No(t.nextSibling)}if(d1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){sn=No(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}sn=null}}else sn=cn?No(e.stateNode.nextSibling):null;return!0}function LO(){for(var e=sn;e;)e=No(e.nextSibling)}function Aa(){sn=cn=null,qe=!1}function u0(e){Bn===null?Bn=[e]:Bn.push(e)}var f4=Jr.ReactCurrentBatchConfig;function bs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function Kc(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function f1(e){var t=e._init;return t(e._payload)}function IO(e){function t(y,b){if(e){var w=y.deletions;w===null?(y.deletions=[b],y.flags|=16):w.push(b)}}function n(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function r(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function o(y,b){return y=Lo(y,b),y.index=0,y.sibling=null,y}function i(y,b,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<b?(y.flags|=2,b):w):(y.flags|=2,b)):(y.flags|=1048576,b)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,b,w,S){return b===null||b.tag!==6?(b=pm(w,y.mode,S),b.return=y,b):(b=o(b,w),b.return=y,b)}function l(y,b,w,S){var C=w.type;return C===sa?u(y,b,w.props.children,S,w.key):b!==null&&(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===go&&f1(C)===b.type)?(S=o(b,w.props),S.ref=bs(y,b,w),S.return=y,S):(S=od(w.type,w.key,w.props,null,y.mode,S),S.ref=bs(y,b,w),S.return=y,S)}function c(y,b,w,S){return b===null||b.tag!==4||b.stateNode.containerInfo!==w.containerInfo||b.stateNode.implementation!==w.implementation?(b=mm(w,y.mode,S),b.return=y,b):(b=o(b,w.children||[]),b.return=y,b)}function u(y,b,w,S,C){return b===null||b.tag!==7?(b=ki(w,y.mode,S,C),b.return=y,b):(b=o(b,w),b.return=y,b)}function d(y,b,w){if(typeof b=="string"&&b!==""||typeof b=="number")return b=pm(""+b,y.mode,w),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fc:return w=od(b.type,b.key,b.props,null,y.mode,w),w.ref=bs(y,null,b),w.return=y,w;case aa:return b=mm(b,y.mode,w),b.return=y,b;case go:var S=b._init;return d(y,S(b._payload),w)}if(Ls(b)||ps(b))return b=ki(b,y.mode,w,null),b.return=y,b;Kc(y,b)}return null}function p(y,b,w,S){var C=b!==null?b.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return C!==null?null:s(y,b,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Fc:return w.key===C?l(y,b,w,S):null;case aa:return w.key===C?c(y,b,w,S):null;case go:return C=w._init,p(y,b,C(w._payload),S)}if(Ls(w)||ps(w))return C!==null?null:u(y,b,w,S,null);Kc(y,w)}return null}function h(y,b,w,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(w)||null,s(b,y,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fc:return y=y.get(S.key===null?w:S.key)||null,l(b,y,S,C);case aa:return y=y.get(S.key===null?w:S.key)||null,c(b,y,S,C);case go:var _=S._init;return h(y,b,w,_(S._payload),C)}if(Ls(S)||ps(S))return y=y.get(w)||null,u(b,y,S,C,null);Kc(b,S)}return null}function g(y,b,w,S){for(var C=null,_=null,O=b,E=b=0,T=null;O!==null&&E<w.length;E++){O.index>E?(T=O,O=null):T=O.sibling;var P=p(y,O,w[E],S);if(P===null){O===null&&(O=T);break}e&&O&&P.alternate===null&&t(y,O),b=i(P,b,E),_===null?C=P:_.sibling=P,_=P,O=T}if(E===w.length)return n(y,O),qe&&ci(y,E),C;if(O===null){for(;E<w.length;E++)O=d(y,w[E],S),O!==null&&(b=i(O,b,E),_===null?C=O:_.sibling=O,_=O);return qe&&ci(y,E),C}for(O=r(y,O);E<w.length;E++)T=h(O,y,E,w[E],S),T!==null&&(e&&T.alternate!==null&&O.delete(T.key===null?E:T.key),b=i(T,b,E),_===null?C=T:_.sibling=T,_=T);return e&&O.forEach(function(A){return t(y,A)}),qe&&ci(y,E),C}function v(y,b,w,S){var C=ps(w);if(typeof C!="function")throw Error(q(150));if(w=C.call(w),w==null)throw Error(q(151));for(var _=C=null,O=b,E=b=0,T=null,P=w.next();O!==null&&!P.done;E++,P=w.next()){O.index>E?(T=O,O=null):T=O.sibling;var A=p(y,O,P.value,S);if(A===null){O===null&&(O=T);break}e&&O&&A.alternate===null&&t(y,O),b=i(A,b,E),_===null?C=A:_.sibling=A,_=A,O=T}if(P.done)return n(y,O),qe&&ci(y,E),C;if(O===null){for(;!P.done;E++,P=w.next())P=d(y,P.value,S),P!==null&&(b=i(P,b,E),_===null?C=P:_.sibling=P,_=P);return qe&&ci(y,E),C}for(O=r(y,O);!P.done;E++,P=w.next())P=h(O,y,E,P.value,S),P!==null&&(e&&P.alternate!==null&&O.delete(P.key===null?E:P.key),b=i(P,b,E),_===null?C=P:_.sibling=P,_=P);return e&&O.forEach(function(I){return t(y,I)}),qe&&ci(y,E),C}function x(y,b,w,S){if(typeof w=="object"&&w!==null&&w.type===sa&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Fc:e:{for(var C=w.key,_=b;_!==null;){if(_.key===C){if(C=w.type,C===sa){if(_.tag===7){n(y,_.sibling),b=o(_,w.props.children),b.return=y,y=b;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===go&&f1(C)===_.type){n(y,_.sibling),b=o(_,w.props),b.ref=bs(y,_,w),b.return=y,y=b;break e}n(y,_);break}else t(y,_);_=_.sibling}w.type===sa?(b=ki(w.props.children,y.mode,S,w.key),b.return=y,y=b):(S=od(w.type,w.key,w.props,null,y.mode,S),S.ref=bs(y,b,w),S.return=y,y=S)}return a(y);case aa:e:{for(_=w.key;b!==null;){if(b.key===_)if(b.tag===4&&b.stateNode.containerInfo===w.containerInfo&&b.stateNode.implementation===w.implementation){n(y,b.sibling),b=o(b,w.children||[]),b.return=y,y=b;break e}else{n(y,b);break}else t(y,b);b=b.sibling}b=mm(w,y.mode,S),b.return=y,y=b}return a(y);case go:return _=w._init,x(y,b,_(w._payload),S)}if(Ls(w))return g(y,b,w,S);if(ps(w))return v(y,b,w,S);Kc(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,b!==null&&b.tag===6?(n(y,b.sibling),b=o(b,w),b.return=y,y=b):(n(y,b),b=pm(w,y.mode,S),b.return=y,y=b),a(y)):n(y,b)}return x}var Ma=IO(!0),DO=IO(!1),$d=Ko(null),Fd=null,ha=null,d0=null;function f0(){d0=ha=Fd=null}function p0(e){var t=$d.current;He($d),e._currentValue=t}function Xh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oa(e,t){Fd=e,d0=ha=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Gt=!0),e.firstContext=null)}function Tn(e){var t=e._currentValue;if(d0!==e)if(e={context:e,memoizedValue:t,next:null},ha===null){if(Fd===null)throw Error(q(308));ha=e,Fd.dependencies={lanes:0,firstContext:e}}else ha=ha.next=e;return t}var hi=null;function m0(e){hi===null?hi=[e]:hi.push(e)}function $O(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,m0(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wr(e,r)}function Wr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vo=!1;function h0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function FO(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ro(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Oe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Wr(e,n)}return o=r.interleaved,o===null?(t.next=t,m0(r)):(t.next=o.next,o.next=t),r.interleaved=t,Wr(e,n)}function Ju(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,e0(e,n)}}function p1(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zd(e,t,n,r){var o=e.updateQueue;vo=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?i=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;a=0,u=c=l=null,s=i;do{var p=s.lane,h=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,v=s;switch(p=t,h=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(h,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,p=typeof g=="function"?g.call(h,d,p):g,p==null)break e;d=nt({},d,p);break e;case 2:vo=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ri|=a,e.lanes=a,e.memoizedState=d}}function m1(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(q(191,o));o.call(r)}}}var fc={},br=Ko(fc),jl=Ko(fc),Pl=Ko(fc);function gi(e){if(e===fc)throw Error(q(174));return e}function g0(e,t){switch(Fe(Pl,t),Fe(jl,e),Fe(br,fc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Th(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Th(t,e)}He(br),Fe(br,t)}function La(){He(br),He(jl),He(Pl)}function zO(e){gi(Pl.current);var t=gi(br.current),n=Th(t,e.type);t!==n&&(Fe(jl,e),Fe(br,n))}function v0(e){jl.current===e&&(He(br),He(jl))}var Ze=Ko(0);function Bd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sm=[];function b0(){for(var e=0;e<sm.length;e++)sm[e]._workInProgressVersionPrimary=null;sm.length=0}var Zu=Jr.ReactCurrentDispatcher,lm=Jr.ReactCurrentBatchConfig,Ni=0,et=null,pt=null,vt=null,Hd=!1,el=!1,Nl=0,p4=0;function Et(){throw Error(q(321))}function y0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zn(e[n],t[n]))return!1;return!0}function x0(e,t,n,r,o,i){if(Ni=i,et=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zu.current=e===null||e.memoizedState===null?v4:b4,e=n(r,o),el){i=0;do{if(el=!1,Nl=0,25<=i)throw Error(q(301));i+=1,vt=pt=null,t.updateQueue=null,Zu.current=y4,e=n(r,o)}while(el)}if(Zu.current=Ud,t=pt!==null&&pt.next!==null,Ni=0,vt=pt=et=null,Hd=!1,t)throw Error(q(300));return e}function w0(){var e=Nl!==0;return Nl=0,e}function ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=e:vt=vt.next=e,vt}function jn(){if(pt===null){var e=et.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var t=vt===null?et.memoizedState:vt.next;if(t!==null)vt=t,pt=e;else{if(e===null)throw Error(q(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?et.memoizedState=vt=e:vt=vt.next=e}return vt}function Rl(e,t){return typeof t=="function"?t(e):t}function cm(e){var t=jn(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=pt,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,c=i;do{var u=c.lane;if((Ni&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,et.lanes|=u,Ri|=u}c=c.next}while(c!==null&&c!==i);l===null?a=r:l.next=s,Zn(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,et.lanes|=i,Ri|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function um(e){var t=jn(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Zn(i,t.memoizedState)||(Gt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function BO(){}function HO(e,t){var n=et,r=jn(),o=t(),i=!Zn(r.memoizedState,o);if(i&&(r.memoizedState=o,Gt=!0),r=r.queue,k0(VO.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,Al(9,WO.bind(null,n,r,o,t),void 0,null),xt===null)throw Error(q(349));Ni&30||UO(n,t,o)}return o}function UO(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=et.updateQueue,t===null?(t={lastEffect:null,stores:null},et.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function WO(e,t,n,r){t.value=n,t.getSnapshot=r,YO(t)&&GO(e)}function VO(e,t,n){return n(function(){YO(t)&&GO(e)})}function YO(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zn(e,n)}catch{return!0}}function GO(e){var t=Wr(e,1);t!==null&&qn(t,e,1,-1)}function h1(e){var t=ar();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:e},t.queue=e,e=e.dispatch=g4.bind(null,et,e),[t.memoizedState,e]}function Al(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=et.updateQueue,t===null?(t={lastEffect:null,stores:null},et.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function XO(){return jn().memoizedState}function ed(e,t,n,r){var o=ar();et.flags|=e,o.memoizedState=Al(1|t,n,void 0,r===void 0?null:r)}function Hf(e,t,n,r){var o=jn();r=r===void 0?null:r;var i=void 0;if(pt!==null){var a=pt.memoizedState;if(i=a.destroy,r!==null&&y0(r,a.deps)){o.memoizedState=Al(t,n,i,r);return}}et.flags|=e,o.memoizedState=Al(1|t,n,i,r)}function g1(e,t){return ed(8390656,8,e,t)}function k0(e,t){return Hf(2048,8,e,t)}function qO(e,t){return Hf(4,2,e,t)}function KO(e,t){return Hf(4,4,e,t)}function QO(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function JO(e,t,n){return n=n!=null?n.concat([e]):null,Hf(4,4,QO.bind(null,t,e),n)}function S0(){}function ZO(e,t){var n=jn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&y0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function eE(e,t){var n=jn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&y0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tE(e,t,n){return Ni&21?(Zn(n,t)||(n=aO(),et.lanes|=n,Ri|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Gt=!0),e.memoizedState=n)}function m4(e,t){var n=Pe;Pe=n!==0&&4>n?n:4,e(!0);var r=lm.transition;lm.transition={};try{e(!1),t()}finally{Pe=n,lm.transition=r}}function nE(){return jn().memoizedState}function h4(e,t,n){var r=Mo(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rE(e))oE(t,n);else if(n=$O(e,t,n,r),n!==null){var o=Dt();qn(n,e,r,o),iE(n,t,r)}}function g4(e,t,n){var r=Mo(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rE(e))oE(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Zn(s,a)){var l=t.interleaved;l===null?(o.next=o,m0(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=$O(e,t,o,r),n!==null&&(o=Dt(),qn(n,e,r,o),iE(n,t,r))}}function rE(e){var t=e.alternate;return e===et||t!==null&&t===et}function oE(e,t){el=Hd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function iE(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,e0(e,n)}}var Ud={readContext:Tn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},v4={readContext:Tn,useCallback:function(e,t){return ar().memoizedState=[e,t===void 0?null:t],e},useContext:Tn,useEffect:g1,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ed(4194308,4,QO.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ed(4194308,4,e,t)},useInsertionEffect:function(e,t){return ed(4,2,e,t)},useMemo:function(e,t){var n=ar();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ar();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=h4.bind(null,et,e),[r.memoizedState,e]},useRef:function(e){var t=ar();return e={current:e},t.memoizedState=e},useState:h1,useDebugValue:S0,useDeferredValue:function(e){return ar().memoizedState=e},useTransition:function(){var e=h1(!1),t=e[0];return e=m4.bind(null,e[1]),ar().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=et,o=ar();if(qe){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),xt===null)throw Error(q(349));Ni&30||UO(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,g1(VO.bind(null,r,i,e),[e]),r.flags|=2048,Al(9,WO.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ar(),t=xt.identifierPrefix;if(qe){var n=Lr,r=Mr;n=(r&~(1<<32-Xn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=p4++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},b4={readContext:Tn,useCallback:ZO,useContext:Tn,useEffect:k0,useImperativeHandle:JO,useInsertionEffect:qO,useLayoutEffect:KO,useMemo:eE,useReducer:cm,useRef:XO,useState:function(){return cm(Rl)},useDebugValue:S0,useDeferredValue:function(e){var t=jn();return tE(t,pt.memoizedState,e)},useTransition:function(){var e=cm(Rl)[0],t=jn().memoizedState;return[e,t]},useMutableSource:BO,useSyncExternalStore:HO,useId:nE,unstable_isNewReconciler:!1},y4={readContext:Tn,useCallback:ZO,useContext:Tn,useEffect:k0,useImperativeHandle:JO,useInsertionEffect:qO,useLayoutEffect:KO,useMemo:eE,useReducer:um,useRef:XO,useState:function(){return um(Rl)},useDebugValue:S0,useDeferredValue:function(e){var t=jn();return pt===null?t.memoizedState=e:tE(t,pt.memoizedState,e)},useTransition:function(){var e=um(Rl)[0],t=jn().memoizedState;return[e,t]},useMutableSource:BO,useSyncExternalStore:HO,useId:nE,unstable_isNewReconciler:!1};function Fn(e,t){if(e&&e.defaultProps){t=nt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:nt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uf={isMounted:function(e){return(e=e._reactInternals)?Wi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Dt(),o=Mo(e),i=zr(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ro(e,i,o),t!==null&&(qn(t,e,o,r),Ju(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Dt(),o=Mo(e),i=zr(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ro(e,i,o),t!==null&&(qn(t,e,o,r),Ju(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),r=Mo(e),o=zr(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ro(e,o,r),t!==null&&(qn(t,e,r,n),Ju(t,e,r))}};function v1(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Cl(n,r)||!Cl(o,i):!0}function aE(e,t,n){var r=!1,o=Bo,i=t.contextType;return typeof i=="object"&&i!==null?i=Tn(i):(o=qt(t)?ji:At.current,r=t.contextTypes,i=(r=r!=null)?Ra(e,o):Bo),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uf,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function b1(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uf.enqueueReplaceState(t,t.state,null)}function Kh(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},h0(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Tn(i):(i=qt(t)?ji:At.current,o.context=Ra(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(qh(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Uf.enqueueReplaceState(o,o.state,null),zd(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ia(e,t){try{var n="",r=t;do n+=GN(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function dm(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var x4=typeof WeakMap=="function"?WeakMap:Map;function sE(e,t,n){n=zr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vd||(Vd=!0,sg=r),Qh(e,t)},n}function lE(e,t,n){n=zr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Qh(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qh(e,t),typeof r!="function"&&(Ao===null?Ao=new Set([this]):Ao.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function y1(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new x4;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=M4.bind(null,e,t,n),t.then(e,e))}function x1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function w1(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zr(-1,1),t.tag=2,Ro(n,t,1))),n.lanes|=1),e)}var w4=Jr.ReactCurrentOwner,Gt=!1;function Lt(e,t,n,r){t.child=e===null?DO(t,null,n,r):Ma(t,e.child,n,r)}function k1(e,t,n,r,o){n=n.render;var i=t.ref;return Oa(t,o),r=x0(e,t,n,r,i,o),n=w0(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vr(e,t,o)):(qe&&n&&l0(t),t.flags|=1,Lt(e,t,r,o),t.child)}function S1(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!N0(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,cE(e,t,i,r,o)):(e=od(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Cl,n(a,r)&&e.ref===t.ref)return Vr(e,t,o)}return t.flags|=1,e=Lo(i,r),e.ref=t.ref,e.return=t,t.child=e}function cE(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Cl(i,r)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,Vr(e,t,o)}return Jh(e,t,n,r,o)}function uE(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(va,on),on|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Fe(va,on),on|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Fe(va,on),on|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Fe(va,on),on|=r;return Lt(e,t,o,n),t.child}function dE(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jh(e,t,n,r,o){var i=qt(n)?ji:At.current;return i=Ra(t,i),Oa(t,o),n=x0(e,t,n,r,i,o),r=w0(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vr(e,t,o)):(qe&&r&&l0(t),t.flags|=1,Lt(e,t,n,o),t.child)}function _1(e,t,n,r,o){if(qt(n)){var i=!0;Ld(t)}else i=!1;if(Oa(t,o),t.stateNode===null)td(e,t),aE(t,n,r),Kh(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=qt(n)?ji:At.current,c=Ra(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&b1(t,a,r,c),vo=!1;var p=t.memoizedState;a.state=p,zd(t,r,a,o),l=t.memoizedState,s!==r||p!==l||Xt.current||vo?(typeof u=="function"&&(qh(t,n,u,r),l=t.memoizedState),(s=vo||v1(t,n,s,r,p,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,FO(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Fn(t.type,s),a.props=c,d=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=qt(n)?ji:At.current,l=Ra(t,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||p!==l)&&b1(t,a,r,l),vo=!1,p=t.memoizedState,a.state=p,zd(t,r,a,o);var g=t.memoizedState;s!==d||p!==g||Xt.current||vo?(typeof h=="function"&&(qh(t,n,h,r),g=t.memoizedState),(c=vo||v1(t,n,c,r,p,g,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Zh(e,t,n,r,i,o)}function Zh(e,t,n,r,o,i){dE(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&c1(t,n,!1),Vr(e,t,i);r=t.stateNode,w4.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ma(t,e.child,null,i),t.child=Ma(t,null,s,i)):Lt(e,t,s,i),t.memoizedState=r.state,o&&c1(t,n,!0),t.child}function fE(e){var t=e.stateNode;t.pendingContext?l1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&l1(e,t.context,!1),g0(e,t.containerInfo)}function C1(e,t,n,r,o){return Aa(),u0(o),t.flags|=256,Lt(e,t,n,r),t.child}var eg={dehydrated:null,treeContext:null,retryLane:0};function tg(e){return{baseLanes:e,cachePool:null,transitions:null}}function pE(e,t,n){var r=t.pendingProps,o=Ze.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Fe(Ze,o&1),e===null)return Gh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Yf(a,r,0,null),e=ki(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=tg(n),t.memoizedState=eg,e):_0(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return k4(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Lo(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Lo(s,i):(i=ki(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?tg(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=eg,r}return i=e.child,e=i.sibling,r=Lo(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _0(e,t){return t=Yf({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qc(e,t,n,r){return r!==null&&u0(r),Ma(t,e.child,null,n),e=_0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k4(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=dm(Error(q(422))),Qc(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Yf({mode:"visible",children:r.children},o,0,null),i=ki(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ma(t,e.child,null,a),t.child.memoizedState=tg(a),t.memoizedState=eg,i);if(!(t.mode&1))return Qc(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(q(419)),r=dm(i,r,void 0),Qc(e,t,a,r)}if(s=(a&e.childLanes)!==0,Gt||s){if(r=xt,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Wr(e,o),qn(r,e,o,-1))}return P0(),r=dm(Error(q(421))),Qc(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=L4.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,sn=No(o.nextSibling),cn=t,qe=!0,Bn=null,e!==null&&(wn[kn++]=Mr,wn[kn++]=Lr,wn[kn++]=Pi,Mr=e.id,Lr=e.overflow,Pi=t),t=_0(t,r.children),t.flags|=4096,t)}function O1(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xh(e.return,t,n)}function fm(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function mE(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Lt(e,t,r.children,n),r=Ze.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&O1(e,n,t);else if(e.tag===19)O1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Fe(Ze,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Bd(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fm(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Bd(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fm(t,!0,n,null,i);break;case"together":fm(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function td(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ri|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=Lo(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lo(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function S4(e,t,n){switch(t.tag){case 3:fE(t),Aa();break;case 5:zO(t);break;case 1:qt(t.type)&&Ld(t);break;case 4:g0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Fe($d,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Fe(Ze,Ze.current&1),t.flags|=128,null):n&t.child.childLanes?pE(e,t,n):(Fe(Ze,Ze.current&1),e=Vr(e,t,n),e!==null?e.sibling:null);Fe(Ze,Ze.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mE(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Fe(Ze,Ze.current),r)break;return null;case 22:case 23:return t.lanes=0,uE(e,t,n)}return Vr(e,t,n)}var hE,ng,gE,vE;hE=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ng=function(){};gE=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gi(br.current);var i=null;switch(n){case"input":o=_h(e,o),r=_h(e,r),i=[];break;case"select":o=nt({},o,{value:void 0}),r=nt({},r,{value:void 0}),i=[];break;case"textarea":o=Eh(e,o),r=Eh(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ad)}jh(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bl.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ze("scroll",e),i||s===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};vE=function(e,t,n,r){n!==r&&(t.flags|=4)};function ys(e,t){if(!qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _4(e,t,n){var r=t.pendingProps;switch(c0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return qt(t.type)&&Md(),Tt(t),null;case 3:return r=t.stateNode,La(),He(Xt),He(At),b0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bn!==null&&(ug(Bn),Bn=null))),ng(e,t),Tt(t),null;case 5:v0(t);var o=gi(Pl.current);if(n=t.type,e!==null&&t.stateNode!=null)gE(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return Tt(t),null}if(e=gi(br.current),qc(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pr]=t,r[Tl]=i,e=(t.mode&1)!==0,n){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<Ds.length;o++)ze(Ds[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":Ly(r,i),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ze("invalid",r);break;case"textarea":Dy(r,i),ze("invalid",r)}jh(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Xc(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Xc(r.textContent,s,e),o=["children",""+s]):bl.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ze("scroll",r)}switch(n){case"input":zc(r),Iy(r,i,!0);break;case"textarea":zc(r),$y(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ad)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=VC(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[pr]=t,e[Tl]=r,hE(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ph(n,r),n){case"dialog":ze("cancel",e),ze("close",e),o=r;break;case"iframe":case"object":case"embed":ze("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ds.length;o++)ze(Ds[o],e);o=r;break;case"source":ze("error",e),o=r;break;case"img":case"image":case"link":ze("error",e),ze("load",e),o=r;break;case"details":ze("toggle",e),o=r;break;case"input":Ly(e,r),o=_h(e,r),ze("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=nt({},r,{value:void 0}),ze("invalid",e);break;case"textarea":Dy(e,r),o=Eh(e,r),ze("invalid",e);break;default:o=r}jh(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?XC(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&YC(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yl(e,l):typeof l=="number"&&yl(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(bl.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ze("scroll",e):l!=null&&Xv(e,i,l,a))}switch(n){case"input":zc(e),Iy(e,r,!1);break;case"textarea":zc(e),$y(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zo(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ka(e,!!r.multiple,i,!1):r.defaultValue!=null&&ka(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ad)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tt(t),null;case 6:if(e&&t.stateNode!=null)vE(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=gi(Pl.current),gi(br.current),qc(t)){if(r=t.stateNode,n=t.memoizedProps,r[pr]=t,(i=r.nodeValue!==n)&&(e=cn,e!==null))switch(e.tag){case 3:Xc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xc(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pr]=t,t.stateNode=r}return Tt(t),null;case 13:if(He(Ze),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&sn!==null&&t.mode&1&&!(t.flags&128))LO(),Aa(),t.flags|=98560,i=!1;else if(i=qc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(q(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(q(317));i[pr]=t}else Aa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Tt(t),i=!1}else Bn!==null&&(ug(Bn),Bn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ze.current&1?mt===0&&(mt=3):P0())),t.updateQueue!==null&&(t.flags|=4),Tt(t),null);case 4:return La(),ng(e,t),e===null&&Ol(t.stateNode.containerInfo),Tt(t),null;case 10:return p0(t.type._context),Tt(t),null;case 17:return qt(t.type)&&Md(),Tt(t),null;case 19:if(He(Ze),i=t.memoizedState,i===null)return Tt(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)ys(i,!1);else{if(mt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bd(e),a!==null){for(t.flags|=128,ys(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Fe(Ze,Ze.current&1|2),t.child}e=e.sibling}i.tail!==null&&ct()>Da&&(t.flags|=128,r=!0,ys(i,!1),t.lanes=4194304)}else{if(!r)if(e=Bd(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ys(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!qe)return Tt(t),null}else 2*ct()-i.renderingStartTime>Da&&n!==1073741824&&(t.flags|=128,r=!0,ys(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ct(),t.sibling=null,n=Ze.current,Fe(Ze,r?n&1|2:n&1),t):(Tt(t),null);case 22:case 23:return j0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?on&1073741824&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function C4(e,t){switch(c0(t),t.tag){case 1:return qt(t.type)&&Md(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return La(),He(Xt),He(At),b0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return v0(t),null;case 13:if(He(Ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));Aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Ze),null;case 4:return La(),null;case 10:return p0(t.type._context),null;case 22:case 23:return j0(),null;case 24:return null;default:return null}}var Jc=!1,Pt=!1,O4=typeof WeakSet=="function"?WeakSet:Set,re=null;function ga(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ot(e,t,r)}else n.current=null}function rg(e,t,n){try{n()}catch(r){ot(e,t,r)}}var E1=!1;function E4(e,t){if(zh=Pd,e=kO(),s0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var h;d!==n||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++c===o&&(s=a),p===i&&++u===r&&(l=a),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bh={focusedElem:e,selectionRange:n},Pd=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,x=g.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?v:Fn(t.type,v),x);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(S){ot(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return g=E1,E1=!1,g}function tl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rg(t,n,i)}o=o.next}while(o!==r)}}function Wf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function og(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bE(e){var t=e.alternate;t!==null&&(e.alternate=null,bE(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pr],delete t[Tl],delete t[Wh],delete t[c4],delete t[u4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yE(e){return e.tag===5||e.tag===3||e.tag===4}function T1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yE(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ig(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ad));else if(r!==4&&(e=e.child,e!==null))for(ig(e,t,n),e=e.sibling;e!==null;)ig(e,t,n),e=e.sibling}function ag(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ag(e,t,n),e=e.sibling;e!==null;)ag(e,t,n),e=e.sibling}var kt=null,zn=!1;function lo(e,t,n){for(n=n.child;n!==null;)xE(e,t,n),n=n.sibling}function xE(e,t,n){if(vr&&typeof vr.onCommitFiberUnmount=="function")try{vr.onCommitFiberUnmount(If,n)}catch{}switch(n.tag){case 5:Pt||ga(n,t);case 6:var r=kt,o=zn;kt=null,lo(e,t,n),kt=r,zn=o,kt!==null&&(zn?(e=kt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(zn?(e=kt,n=n.stateNode,e.nodeType===8?im(e.parentNode,n):e.nodeType===1&&im(e,n),Sl(e)):im(kt,n.stateNode));break;case 4:r=kt,o=zn,kt=n.stateNode.containerInfo,zn=!0,lo(e,t,n),kt=r,zn=o;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&rg(n,t,a),o=o.next}while(o!==r)}lo(e,t,n);break;case 1:if(!Pt&&(ga(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ot(n,t,s)}lo(e,t,n);break;case 21:lo(e,t,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,lo(e,t,n),Pt=r):lo(e,t,n);break;default:lo(e,t,n)}}function j1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new O4),t.forEach(function(r){var o=I4.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Dn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:kt=s.stateNode,zn=!1;break e;case 3:kt=s.stateNode.containerInfo,zn=!0;break e;case 4:kt=s.stateNode.containerInfo,zn=!0;break e}s=s.return}if(kt===null)throw Error(q(160));xE(i,a,o),kt=null,zn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ot(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wE(t,e),t=t.sibling}function wE(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dn(t,e),rr(e),r&4){try{tl(3,e,e.return),Wf(3,e)}catch(v){ot(e,e.return,v)}try{tl(5,e,e.return)}catch(v){ot(e,e.return,v)}}break;case 1:Dn(t,e),rr(e),r&512&&n!==null&&ga(n,n.return);break;case 5:if(Dn(t,e),rr(e),r&512&&n!==null&&ga(n,n.return),e.flags&32){var o=e.stateNode;try{yl(o,"")}catch(v){ot(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&UC(o,i),Ph(s,a);var c=Ph(s,i);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?XC(o,d):u==="dangerouslySetInnerHTML"?YC(o,d):u==="children"?yl(o,d):Xv(o,u,d,c)}switch(s){case"input":Ch(o,i);break;case"textarea":WC(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?ka(o,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?ka(o,!!i.multiple,i.defaultValue,!0):ka(o,!!i.multiple,i.multiple?[]:"",!1))}o[Tl]=i}catch(v){ot(e,e.return,v)}}break;case 6:if(Dn(t,e),rr(e),r&4){if(e.stateNode===null)throw Error(q(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){ot(e,e.return,v)}}break;case 3:if(Dn(t,e),rr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sl(t.containerInfo)}catch(v){ot(e,e.return,v)}break;case 4:Dn(t,e),rr(e);break;case 13:Dn(t,e),rr(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(E0=ct())),r&4&&j1(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(c=Pt)||u,Dn(t,e),Pt=c):Dn(t,e),rr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(re=e,u=e.child;u!==null;){for(d=re=u;re!==null;){switch(p=re,h=p.child,p.tag){case 0:case 11:case 14:case 15:tl(4,p,p.return);break;case 1:ga(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){ot(r,n,v)}}break;case 5:ga(p,p.return);break;case 22:if(p.memoizedState!==null){N1(d);continue}}h!==null?(h.return=p,re=h):N1(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=GC("display",a))}catch(v){ot(e,e.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){ot(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dn(t,e),rr(e),r&4&&j1(e);break;case 21:break;default:Dn(t,e),rr(e)}}function rr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yE(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(yl(o,""),r.flags&=-33);var i=T1(e);ag(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=T1(e);ig(e,s,a);break;default:throw Error(q(161))}}catch(l){ot(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function T4(e,t,n){re=e,kE(e)}function kE(e,t,n){for(var r=(e.mode&1)!==0;re!==null;){var o=re,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Jc;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Pt;s=Jc;var c=Pt;if(Jc=a,(Pt=l)&&!c)for(re=o;re!==null;)a=re,l=a.child,a.tag===22&&a.memoizedState!==null?R1(o):l!==null?(l.return=a,re=l):R1(o);for(;i!==null;)re=i,kE(i),i=i.sibling;re=o,Jc=s,Pt=c}P1(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,re=i):P1(e)}}function P1(e){for(;re!==null;){var t=re;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pt||Wf(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Fn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&m1(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}m1(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Sl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Pt||t.flags&512&&og(t)}catch(p){ot(t,t.return,p)}}if(t===e){re=null;break}if(n=t.sibling,n!==null){n.return=t.return,re=n;break}re=t.return}}function N1(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var n=t.sibling;if(n!==null){n.return=t.return,re=n;break}re=t.return}}function R1(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wf(4,t)}catch(l){ot(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ot(t,o,l)}}var i=t.return;try{og(t)}catch(l){ot(t,i,l)}break;case 5:var a=t.return;try{og(t)}catch(l){ot(t,a,l)}}}catch(l){ot(t,t.return,l)}if(t===e){re=null;break}var s=t.sibling;if(s!==null){s.return=t.return,re=s;break}re=t.return}}var j4=Math.ceil,Wd=Jr.ReactCurrentDispatcher,C0=Jr.ReactCurrentOwner,On=Jr.ReactCurrentBatchConfig,Oe=0,xt=null,dt=null,St=0,on=0,va=Ko(0),mt=0,Ml=null,Ri=0,Vf=0,O0=0,nl=null,Vt=null,E0=0,Da=1/0,Pr=null,Vd=!1,sg=null,Ao=null,Zc=!1,ko=null,Yd=0,rl=0,lg=null,nd=-1,rd=0;function Dt(){return Oe&6?ct():nd!==-1?nd:nd=ct()}function Mo(e){return e.mode&1?Oe&2&&St!==0?St&-St:f4.transition!==null?(rd===0&&(rd=aO()),rd):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:pO(e.type)),e):1}function qn(e,t,n,r){if(50<rl)throw rl=0,lg=null,Error(q(185));cc(e,n,r),(!(Oe&2)||e!==xt)&&(e===xt&&(!(Oe&2)&&(Vf|=n),mt===4&&xo(e,St)),Kt(e,r),n===1&&Oe===0&&!(t.mode&1)&&(Da=ct()+500,Bf&&Qo()))}function Kt(e,t){var n=e.callbackNode;fR(e,t);var r=jd(e,e===xt?St:0);if(r===0)n!==null&&By(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&By(n),t===1)e.tag===0?d4(A1.bind(null,e)):RO(A1.bind(null,e)),s4(function(){!(Oe&6)&&Qo()}),n=null;else{switch(sO(r)){case 1:n=Zv;break;case 4:n=oO;break;case 16:n=Td;break;case 536870912:n=iO;break;default:n=Td}n=PE(n,SE.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function SE(e,t){if(nd=-1,rd=0,Oe&6)throw Error(q(327));var n=e.callbackNode;if(Ea()&&e.callbackNode!==n)return null;var r=jd(e,e===xt?St:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gd(e,r);else{t=r;var o=Oe;Oe|=2;var i=CE();(xt!==e||St!==t)&&(Pr=null,Da=ct()+500,wi(e,t));do try{R4();break}catch(s){_E(e,s)}while(!0);f0(),Wd.current=i,Oe=o,dt!==null?t=0:(xt=null,St=0,t=mt)}if(t!==0){if(t===2&&(o=Lh(e),o!==0&&(r=o,t=cg(e,o))),t===1)throw n=Ml,wi(e,0),xo(e,r),Kt(e,ct()),n;if(t===6)xo(e,r);else{if(o=e.current.alternate,!(r&30)&&!P4(o)&&(t=Gd(e,r),t===2&&(i=Lh(e),i!==0&&(r=i,t=cg(e,i))),t===1))throw n=Ml,wi(e,0),xo(e,r),Kt(e,ct()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:ui(e,Vt,Pr);break;case 3:if(xo(e,r),(r&130023424)===r&&(t=E0+500-ct(),10<t)){if(jd(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Dt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Uh(ui.bind(null,e,Vt,Pr),t);break}ui(e,Vt,Pr);break;case 4:if(xo(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Xn(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*j4(r/1960))-r,10<r){e.timeoutHandle=Uh(ui.bind(null,e,Vt,Pr),r);break}ui(e,Vt,Pr);break;case 5:ui(e,Vt,Pr);break;default:throw Error(q(329))}}}return Kt(e,ct()),e.callbackNode===n?SE.bind(null,e):null}function cg(e,t){var n=nl;return e.current.memoizedState.isDehydrated&&(wi(e,t).flags|=256),e=Gd(e,t),e!==2&&(t=Vt,Vt=n,t!==null&&ug(t)),e}function ug(e){Vt===null?Vt=e:Vt.push.apply(Vt,e)}function P4(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Zn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xo(e,t){for(t&=~O0,t&=~Vf,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xn(t),r=1<<n;e[n]=-1,t&=~r}}function A1(e){if(Oe&6)throw Error(q(327));Ea();var t=jd(e,0);if(!(t&1))return Kt(e,ct()),null;var n=Gd(e,t);if(e.tag!==0&&n===2){var r=Lh(e);r!==0&&(t=r,n=cg(e,r))}if(n===1)throw n=Ml,wi(e,0),xo(e,t),Kt(e,ct()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ui(e,Vt,Pr),Kt(e,ct()),null}function T0(e,t){var n=Oe;Oe|=1;try{return e(t)}finally{Oe=n,Oe===0&&(Da=ct()+500,Bf&&Qo())}}function Ai(e){ko!==null&&ko.tag===0&&!(Oe&6)&&Ea();var t=Oe;Oe|=1;var n=On.transition,r=Pe;try{if(On.transition=null,Pe=1,e)return e()}finally{Pe=r,On.transition=n,Oe=t,!(Oe&6)&&Qo()}}function j0(){on=va.current,He(va)}function wi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,a4(n)),dt!==null)for(n=dt.return;n!==null;){var r=n;switch(c0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Md();break;case 3:La(),He(Xt),He(At),b0();break;case 5:v0(r);break;case 4:La();break;case 13:He(Ze);break;case 19:He(Ze);break;case 10:p0(r.type._context);break;case 22:case 23:j0()}n=n.return}if(xt=e,dt=e=Lo(e.current,null),St=on=t,mt=0,Ml=null,O0=Vf=Ri=0,Vt=nl=null,hi!==null){for(t=0;t<hi.length;t++)if(n=hi[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}hi=null}return e}function _E(e,t){do{var n=dt;try{if(f0(),Zu.current=Ud,Hd){for(var r=et.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Hd=!1}if(Ni=0,vt=pt=et=null,el=!1,Nl=0,C0.current=null,n===null||n.return===null){mt=1,Ml=t,dt=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=St,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=x1(a);if(h!==null){h.flags&=-257,w1(h,a,s,i,t),h.mode&1&&y1(i,c,t),t=h,l=c;var g=t.updateQueue;if(g===null){var v=new Set;v.add(l),t.updateQueue=v}else g.add(l);break e}else{if(!(t&1)){y1(i,c,t),P0();break e}l=Error(q(426))}}else if(qe&&s.mode&1){var x=x1(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),w1(x,a,s,i,t),u0(Ia(l,s));break e}}i=l=Ia(l,s),mt!==4&&(mt=2),nl===null?nl=[i]:nl.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=sE(i,l,t);p1(i,y);break e;case 1:s=l;var b=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof b.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ao===null||!Ao.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=lE(i,s,t);p1(i,S);break e}}i=i.return}while(i!==null)}EE(n)}catch(C){t=C,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(!0)}function CE(){var e=Wd.current;return Wd.current=Ud,e===null?Ud:e}function P0(){(mt===0||mt===3||mt===2)&&(mt=4),xt===null||!(Ri&268435455)&&!(Vf&268435455)||xo(xt,St)}function Gd(e,t){var n=Oe;Oe|=2;var r=CE();(xt!==e||St!==t)&&(Pr=null,wi(e,t));do try{N4();break}catch(o){_E(e,o)}while(!0);if(f0(),Oe=n,Wd.current=r,dt!==null)throw Error(q(261));return xt=null,St=0,mt}function N4(){for(;dt!==null;)OE(dt)}function R4(){for(;dt!==null&&!rR();)OE(dt)}function OE(e){var t=jE(e.alternate,e,on);e.memoizedProps=e.pendingProps,t===null?EE(e):dt=t,C0.current=null}function EE(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=C4(n,t),n!==null){n.flags&=32767,dt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{mt=6,dt=null;return}}else if(n=_4(n,t,on),n!==null){dt=n;return}if(t=t.sibling,t!==null){dt=t;return}dt=t=e}while(t!==null);mt===0&&(mt=5)}function ui(e,t,n){var r=Pe,o=On.transition;try{On.transition=null,Pe=1,A4(e,t,n,r)}finally{On.transition=o,Pe=r}return null}function A4(e,t,n,r){do Ea();while(ko!==null);if(Oe&6)throw Error(q(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(pR(e,i),e===xt&&(dt=xt=null,St=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zc||(Zc=!0,PE(Td,function(){return Ea(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=On.transition,On.transition=null;var a=Pe;Pe=1;var s=Oe;Oe|=4,C0.current=null,E4(e,n),wE(n,e),ZR(Bh),Pd=!!zh,Bh=zh=null,e.current=n,T4(n),oR(),Oe=s,Pe=a,On.transition=i}else e.current=n;if(Zc&&(Zc=!1,ko=e,Yd=o),i=e.pendingLanes,i===0&&(Ao=null),sR(n.stateNode),Kt(e,ct()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Vd)throw Vd=!1,e=sg,sg=null,e;return Yd&1&&e.tag!==0&&Ea(),i=e.pendingLanes,i&1?e===lg?rl++:(rl=0,lg=e):rl=0,Qo(),null}function Ea(){if(ko!==null){var e=sO(Yd),t=On.transition,n=Pe;try{if(On.transition=null,Pe=16>e?16:e,ko===null)var r=!1;else{if(e=ko,ko=null,Yd=0,Oe&6)throw Error(q(331));var o=Oe;for(Oe|=4,re=e.current;re!==null;){var i=re,a=i.child;if(re.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(re=c;re!==null;){var u=re;switch(u.tag){case 0:case 11:case 15:tl(8,u,i)}var d=u.child;if(d!==null)d.return=u,re=d;else for(;re!==null;){u=re;var p=u.sibling,h=u.return;if(bE(u),u===c){re=null;break}if(p!==null){p.return=h,re=p;break}re=h}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}re=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,re=a;else e:for(;re!==null;){if(i=re,i.flags&2048)switch(i.tag){case 0:case 11:case 15:tl(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,re=y;break e}re=i.return}}var b=e.current;for(re=b;re!==null;){a=re;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,re=w;else e:for(a=b;re!==null;){if(s=re,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wf(9,s)}}catch(C){ot(s,s.return,C)}if(s===a){re=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,re=S;break e}re=s.return}}if(Oe=o,Qo(),vr&&typeof vr.onPostCommitFiberRoot=="function")try{vr.onPostCommitFiberRoot(If,e)}catch{}r=!0}return r}finally{Pe=n,On.transition=t}}return!1}function M1(e,t,n){t=Ia(n,t),t=sE(e,t,1),e=Ro(e,t,1),t=Dt(),e!==null&&(cc(e,1,t),Kt(e,t))}function ot(e,t,n){if(e.tag===3)M1(e,e,n);else for(;t!==null;){if(t.tag===3){M1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ao===null||!Ao.has(r))){e=Ia(n,e),e=lE(t,e,1),t=Ro(t,e,1),e=Dt(),t!==null&&(cc(t,1,e),Kt(t,e));break}}t=t.return}}function M4(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Dt(),e.pingedLanes|=e.suspendedLanes&n,xt===e&&(St&n)===n&&(mt===4||mt===3&&(St&130023424)===St&&500>ct()-E0?wi(e,0):O0|=n),Kt(e,t)}function TE(e,t){t===0&&(e.mode&1?(t=Uc,Uc<<=1,!(Uc&130023424)&&(Uc=4194304)):t=1);var n=Dt();e=Wr(e,t),e!==null&&(cc(e,t,n),Kt(e,n))}function L4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),TE(e,n)}function I4(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),TE(e,n)}var jE;jE=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xt.current)Gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Gt=!1,S4(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,qe&&t.flags&1048576&&AO(t,Dd,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;td(e,t),e=t.pendingProps;var o=Ra(t,At.current);Oa(t,n),o=x0(null,t,r,e,o,n);var i=w0();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qt(r)?(i=!0,Ld(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,h0(t),o.updater=Uf,t.stateNode=o,o._reactInternals=t,Kh(t,r,e,n),t=Zh(null,t,r,!0,i,n)):(t.tag=0,qe&&i&&l0(t),Lt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(td(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=$4(r),e=Fn(r,e),o){case 0:t=Jh(null,t,r,e,n);break e;case 1:t=_1(null,t,r,e,n);break e;case 11:t=k1(null,t,r,e,n);break e;case 14:t=S1(null,t,r,Fn(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Fn(r,o),Jh(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Fn(r,o),_1(e,t,r,o,n);case 3:e:{if(fE(t),e===null)throw Error(q(387));r=t.pendingProps,i=t.memoizedState,o=i.element,FO(e,t),zd(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ia(Error(q(423)),t),t=C1(e,t,r,n,o);break e}else if(r!==o){o=Ia(Error(q(424)),t),t=C1(e,t,r,n,o);break e}else for(sn=No(t.stateNode.containerInfo.firstChild),cn=t,qe=!0,Bn=null,n=DO(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Aa(),r===o){t=Vr(e,t,n);break e}Lt(e,t,r,n)}t=t.child}return t;case 5:return zO(t),e===null&&Gh(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Hh(r,o)?a=null:i!==null&&Hh(r,i)&&(t.flags|=32),dE(e,t),Lt(e,t,a,n),t.child;case 6:return e===null&&Gh(t),null;case 13:return pE(e,t,n);case 4:return g0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ma(t,null,r,n):Lt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Fn(r,o),k1(e,t,r,o,n);case 7:return Lt(e,t,t.pendingProps,n),t.child;case 8:return Lt(e,t,t.pendingProps.children,n),t.child;case 12:return Lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Fe($d,r._currentValue),r._currentValue=a,i!==null)if(Zn(i.value,a)){if(i.children===o.children&&!Xt.current){t=Vr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=zr(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Xh(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(q(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Xh(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Lt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Oa(t,n),o=Tn(o),r=r(o),t.flags|=1,Lt(e,t,r,n),t.child;case 14:return r=t.type,o=Fn(r,t.pendingProps),o=Fn(r.type,o),S1(e,t,r,o,n);case 15:return cE(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Fn(r,o),td(e,t),t.tag=1,qt(r)?(e=!0,Ld(t)):e=!1,Oa(t,n),aE(t,r,o),Kh(t,r,o,n),Zh(null,t,r,!0,e,n);case 19:return mE(e,t,n);case 22:return uE(e,t,n)}throw Error(q(156,t.tag))};function PE(e,t){return rO(e,t)}function D4(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,t,n,r){return new D4(e,t,n,r)}function N0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $4(e){if(typeof e=="function")return N0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kv)return 11;if(e===Qv)return 14}return 2}function Lo(e,t){var n=e.alternate;return n===null?(n=Cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function od(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")N0(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case sa:return ki(n.children,o,i,t);case qv:a=8,o|=8;break;case xh:return e=Cn(12,n,t,o|2),e.elementType=xh,e.lanes=i,e;case wh:return e=Cn(13,n,t,o),e.elementType=wh,e.lanes=i,e;case kh:return e=Cn(19,n,t,o),e.elementType=kh,e.lanes=i,e;case zC:return Yf(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $C:a=10;break e;case FC:a=9;break e;case Kv:a=11;break e;case Qv:a=14;break e;case go:a=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=Cn(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function ki(e,t,n,r){return e=Cn(7,e,r,t),e.lanes=n,e}function Yf(e,t,n,r){return e=Cn(22,e,r,t),e.elementType=zC,e.lanes=n,e.stateNode={isHidden:!1},e}function pm(e,t,n){return e=Cn(6,e,null,t),e.lanes=n,e}function mm(e,t,n){return t=Cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function F4(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xp(0),this.expirationTimes=Xp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xp(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function R0(e,t,n,r,o,i,a,s,l){return e=new F4(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Cn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},h0(i),e}function z4(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:aa,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function NE(e){if(!e)return Bo;e=e._reactInternals;e:{if(Wi(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if(qt(n))return NO(e,n,t)}return t}function RE(e,t,n,r,o,i,a,s,l){return e=R0(n,r,!0,e,o,i,a,s,l),e.context=NE(null),n=e.current,r=Dt(),o=Mo(n),i=zr(r,o),i.callback=t??null,Ro(n,i,o),e.current.lanes=o,cc(e,o,r),Kt(e,r),e}function Gf(e,t,n,r){var o=t.current,i=Dt(),a=Mo(o);return n=NE(n),t.context===null?t.context=n:t.pendingContext=n,t=zr(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ro(o,t,a),e!==null&&(qn(e,o,a,i),Ju(e,o,a)),a}function Xd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function L1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function A0(e,t){L1(e,t),(e=e.alternate)&&L1(e,t)}function B4(){return null}var AE=typeof reportError=="function"?reportError:function(e){console.error(e)};function M0(e){this._internalRoot=e}Xf.prototype.render=M0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Gf(e,t,null,null)};Xf.prototype.unmount=M0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ai(function(){Gf(null,e,null,null)}),t[Ur]=null}};function Xf(e){this._internalRoot=e}Xf.prototype.unstable_scheduleHydration=function(e){if(e){var t=uO();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yo.length&&t!==0&&t<yo[n].priority;n++);yo.splice(n,0,e),n===0&&fO(e)}};function L0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function I1(){}function H4(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Xd(a);i.call(c)}}var a=RE(t,r,e,0,null,!1,!1,"",I1);return e._reactRootContainer=a,e[Ur]=a.current,Ol(e.nodeType===8?e.parentNode:e),Ai(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Xd(l);s.call(c)}}var l=R0(e,0,!1,null,null,!1,!1,"",I1);return e._reactRootContainer=l,e[Ur]=l.current,Ol(e.nodeType===8?e.parentNode:e),Ai(function(){Gf(t,l,n,r)}),l}function Kf(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Xd(a);s.call(l)}}Gf(t,a,e,o)}else a=H4(n,t,e,o,r);return Xd(a)}lO=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Is(t.pendingLanes);n!==0&&(e0(t,n|1),Kt(t,ct()),!(Oe&6)&&(Da=ct()+500,Qo()))}break;case 13:Ai(function(){var r=Wr(e,1);if(r!==null){var o=Dt();qn(r,e,1,o)}}),A0(e,1)}};t0=function(e){if(e.tag===13){var t=Wr(e,134217728);if(t!==null){var n=Dt();qn(t,e,134217728,n)}A0(e,134217728)}};cO=function(e){if(e.tag===13){var t=Mo(e),n=Wr(e,t);if(n!==null){var r=Dt();qn(n,e,t,r)}A0(e,t)}};uO=function(){return Pe};dO=function(e,t){var n=Pe;try{return Pe=e,t()}finally{Pe=n}};Rh=function(e,t,n){switch(t){case"input":if(Ch(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=zf(r);if(!o)throw Error(q(90));HC(r),Ch(r,o)}}}break;case"textarea":WC(e,n);break;case"select":t=n.value,t!=null&&ka(e,!!n.multiple,t,!1)}};QC=T0;JC=Ai;var U4={usingClientEntryPoint:!1,Events:[dc,da,zf,qC,KC,T0]},xs={findFiberByHostInstance:mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W4={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tO(e),e===null?null:e.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||B4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{If=eu.inject(W4),vr=eu}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U4;pn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!L0(t))throw Error(q(200));return z4(e,t,null,n)};pn.createRoot=function(e,t){if(!L0(e))throw Error(q(299));var n=!1,r="",o=AE;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=R0(e,1,!1,null,null,n,!1,r,o),e[Ur]=t.current,Ol(e.nodeType===8?e.parentNode:e),new M0(t)};pn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=tO(t),e=e===null?null:e.stateNode,e};pn.flushSync=function(e){return Ai(e)};pn.hydrate=function(e,t,n){if(!qf(t))throw Error(q(200));return Kf(null,e,t,!0,n)};pn.hydrateRoot=function(e,t,n){if(!L0(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=AE;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=RE(t,null,e,1,n??null,o,!1,i,a),e[Ur]=t.current,Ol(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xf(t)};pn.render=function(e,t,n){if(!qf(t))throw Error(q(200));return Kf(null,e,t,!1,n)};pn.unmountComponentAtNode=function(e){if(!qf(e))throw Error(q(40));return e._reactRootContainer?(Ai(function(){Kf(null,null,e,!1,function(){e._reactRootContainer=null,e[Ur]=null})}),!0):!1};pn.unstable_batchedUpdates=T0;pn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qf(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Kf(e,t,n,!1,r)};pn.version="18.3.1-next-f1338f8080-20240426";function ME(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ME)}catch(e){console.error(e)}}ME(),MC.exports=pn;var Qf=MC.exports;const vi=Hi(Qf);var D1=Qf;bh.createRoot=D1.createRoot,bh.hydrateRoot=D1.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ll(){return Ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ll.apply(this,arguments)}var So;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(So||(So={}));const $1="popstate";function V4(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return dg("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:qd(o)}return G4(t,n,null,e)}function tt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function LE(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Y4(){return Math.random().toString(36).substr(2,8)}function F1(e,t){return{usr:e.state,key:e.key,idx:t}}function dg(e,t,n,r){return n===void 0&&(n=null),Ll({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?es(t):t,{state:n,key:t&&t.key||r||Y4()})}function qd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function es(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function G4(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=So.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Ll({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){s=So.Pop;let x=u(),y=x==null?null:x-c;c=x,l&&l({action:s,location:v.location,delta:y})}function p(x,y){s=So.Push;let b=dg(v.location,x,y);c=u()+1;let w=F1(b,c),S=v.createHref(b);try{a.pushState(w,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(S)}i&&l&&l({action:s,location:v.location,delta:1})}function h(x,y){s=So.Replace;let b=dg(v.location,x,y);c=u();let w=F1(b,c),S=v.createHref(b);a.replaceState(w,"",S),i&&l&&l({action:s,location:v.location,delta:0})}function g(x){let y=o.location.origin!=="null"?o.location.origin:o.location.href,b=typeof x=="string"?x:qd(x);return b=b.replace(/ $/,"%20"),tt(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let v={get action(){return s},get location(){return e(o,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener($1,d),l=x,()=>{o.removeEventListener($1,d),l=null}},createHref(x){return t(o,x)},createURL:g,encodeLocation(x){let y=g(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:h,go(x){return a.go(x)}};return v}var z1;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(z1||(z1={}));function X4(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?es(t):t,o=$a(r.pathname||"/",n);if(o==null)return null;let i=IE(e);q4(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let l=aA(o);a=oA(i[s],l)}return a}function IE(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(tt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Io([r,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(tt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),IE(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:nA(c,i.index),routesMeta:u})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of DE(i.path))o(i,a,l)}),t}function DE(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=DE(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function q4(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:rA(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const K4=/^:[\w-]+$/,Q4=3,J4=2,Z4=1,eA=10,tA=-2,B1=e=>e==="*";function nA(e,t){let n=e.split("/"),r=n.length;return n.some(B1)&&(r+=tA),t&&(r+=J4),n.filter(o=>!B1(o)).reduce((o,i)=>o+(K4.test(i)?Q4:i===""?Z4:eA),r)}function rA(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function oA(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",u=fg({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=s.route;i.push({params:r,pathname:Io([o,u.pathname]),pathnameBase:uA(Io([o,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(o=Io([o,u.pathnameBase]))}return i}function fg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=iA(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:p,isOptional:h}=u;if(p==="*"){let v=s[d]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const g=s[d];return h&&!g?c[p]=void 0:c[p]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function iA(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),LE(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function aA(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return LE(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $a(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function sA(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?es(e):e;return{pathname:n?n.startsWith("/")?n:lA(n,t):t,search:dA(r),hash:fA(o)}}function lA(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function hm(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cA(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function I0(e,t){let n=cA(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function D0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=es(e):(o=Ll({},e),tt(!o.pathname||!o.pathname.includes("?"),hm("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),hm("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),hm("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=sA(o,s),c=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Io=e=>e.join("/").replace(/\/\/+/g,"/"),uA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $E=["post","put","patch","delete"];new Set($E);const mA=["get",...$E];new Set(mA);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Il.apply(this,arguments)}const Jf=k.createContext(null),FE=k.createContext(null),Zr=k.createContext(null),Zf=k.createContext(null),kr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),zE=k.createContext(null);function hA(e,t){let{relative:n}=t===void 0?{}:t;ts()||tt(!1);let{basename:r,navigator:o}=k.useContext(Zr),{hash:i,pathname:a,search:s}=ep(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Io([r,a])),o.createHref({pathname:l,search:s,hash:i})}function ts(){return k.useContext(Zf)!=null}function ns(){return ts()||tt(!1),k.useContext(Zf).location}function BE(e){k.useContext(Zr).static||k.useLayoutEffect(e)}function Jo(){let{isDataRoute:e}=k.useContext(kr);return e?NA():gA()}function gA(){ts()||tt(!1);let e=k.useContext(Jf),{basename:t,future:n,navigator:r}=k.useContext(Zr),{matches:o}=k.useContext(kr),{pathname:i}=ns(),a=JSON.stringify(I0(o,n.v7_relativeSplatPath)),s=k.useRef(!1);return BE(()=>{s.current=!0}),k.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let d=D0(c,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Io([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,a,i,e])}const vA=k.createContext(null);function bA(e){let t=k.useContext(kr).outlet;return t&&k.createElement(vA.Provider,{value:e},t)}function yA(){let{matches:e}=k.useContext(kr),t=e[e.length-1];return t?t.params:{}}function ep(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Zr),{matches:o}=k.useContext(kr),{pathname:i}=ns(),a=JSON.stringify(I0(o,r.v7_relativeSplatPath));return k.useMemo(()=>D0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function xA(e,t){return wA(e,t)}function wA(e,t,n,r){ts()||tt(!1);let{navigator:o}=k.useContext(Zr),{matches:i}=k.useContext(kr),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=ns(),u;if(t){var d;let x=typeof t=="string"?es(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||tt(!1),u=x}else u=c;let p=u.pathname||"/",h=p;if(l!=="/"){let x=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let g=X4(e,{pathname:h}),v=OA(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Io([l,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Io([l,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&v?k.createElement(Zf.Provider,{value:{location:Il({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:So.Pop}},v):v}function kA(){let e=PA(),t=pA(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,null)}const SA=k.createElement(kA,null);class _A extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(kr.Provider,{value:this.props.routeContext},k.createElement(zE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CA(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(Jf);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(kr.Provider,{value:t},r)}function OA(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let u=a.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);u>=0||tt(!1),a=a.slice(0,Math.min(a.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<a.length;u++){let d=a[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:p,errors:h}=n,g=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||g){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,d,p)=>{let h,g=!1,v=null,x=null;n&&(h=s&&d.route.id?s[d.route.id]:void 0,v=d.route.errorElement||SA,l&&(c<0&&p===0?(g=!0,x=null):c===p&&(g=!0,x=d.route.hydrateFallbackElement||null)));let y=t.concat(a.slice(0,p+1)),b=()=>{let w;return h?w=v:g?w=x:d.route.Component?w=k.createElement(d.route.Component,null):d.route.element?w=d.route.element:w=u,k.createElement(CA,{match:d,routeContext:{outlet:u,matches:y,isDataRoute:n!=null},children:w})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?k.createElement(_A,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:b(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):b()},null)}var HE=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(HE||{}),Kd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Kd||{});function EA(e){let t=k.useContext(Jf);return t||tt(!1),t}function TA(e){let t=k.useContext(FE);return t||tt(!1),t}function jA(e){let t=k.useContext(kr);return t||tt(!1),t}function UE(e){let t=jA(),n=t.matches[t.matches.length-1];return n.route.id||tt(!1),n.route.id}function PA(){var e;let t=k.useContext(zE),n=TA(Kd.UseRouteError),r=UE(Kd.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function NA(){let{router:e}=EA(HE.UseNavigateStable),t=UE(Kd.UseNavigateStable),n=k.useRef(!1);return BE(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Il({fromRouteId:t},i)))},[e,t])}function WE(e){let{to:t,replace:n,state:r,relative:o}=e;ts()||tt(!1);let{future:i,static:a}=k.useContext(Zr),{matches:s}=k.useContext(kr),{pathname:l}=ns(),c=Jo(),u=D0(t,I0(s,i.v7_relativeSplatPath),l,o==="path"),d=JSON.stringify(u);return k.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:o}),[c,d,o,n,r]),null}function RA(e){return bA(e.context)}function Ut(e){tt(!1)}function AA(e){let{basename:t="/",children:n=null,location:r,navigationType:o=So.Pop,navigator:i,static:a=!1,future:s}=e;ts()&&tt(!1);let l=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:l,navigator:i,static:a,future:Il({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=es(r));let{pathname:u="/",search:d="",hash:p="",state:h=null,key:g="default"}=r,v=k.useMemo(()=>{let x=$a(u,l);return x==null?null:{location:{pathname:x,search:d,hash:p,state:h,key:g},navigationType:o}},[l,u,d,p,h,g,o]);return v==null?null:k.createElement(Zr.Provider,{value:c},k.createElement(Zf.Provider,{children:n,value:v}))}function MA(e){let{children:t,location:n}=e;return xA(pg(t),n)}new Promise(()=>{});function pg(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,pg(r.props.children,i));return}r.type!==Ut&&tt(!1),!r.props.index||!r.props.children||tt(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=pg(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qd(){return Qd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qd.apply(this,arguments)}function VE(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function LA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function IA(e,t){return e.button===0&&(!t||t==="_self")&&!LA(e)}const DA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$A=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],FA="6";try{window.__reactRouterVersion=FA}catch{}const zA=k.createContext({isTransitioning:!1}),BA="startTransition",H1=MN[BA];function HA(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=V4({window:o,v5Compat:!0}));let a=i.current,[s,l]=k.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},u=k.useCallback(d=>{c&&H1?H1(()=>l(d)):l(d)},[l,c]);return k.useLayoutEffect(()=>a.listen(u),[a,u]),k.createElement(AA,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const UA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$0=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:c,preventScrollReset:u,unstable_viewTransition:d}=t,p=VE(t,DA),{basename:h}=k.useContext(Zr),g,v=!1;if(typeof c=="string"&&WA.test(c)&&(g=c,UA))try{let w=new URL(window.location.href),S=c.startsWith("//")?new URL(w.protocol+c):new URL(c),C=$a(S.pathname,h);S.origin===w.origin&&C!=null?c=C+S.search+S.hash:v=!0}catch{}let x=hA(c,{relative:o}),y=YA(c,{replace:a,state:s,target:l,preventScrollReset:u,relative:o,unstable_viewTransition:d});function b(w){r&&r(w),w.defaultPrevented||y(w)}return k.createElement("a",Qd({},p,{href:g||x,onClick:v||i?r:b,ref:n,target:l}))}),_n=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:l,unstable_viewTransition:c,children:u}=t,d=VE(t,$A),p=ep(l,{relative:d.relative}),h=ns(),g=k.useContext(FE),{navigator:v,basename:x}=k.useContext(Zr),y=g!=null&&GA(p)&&c===!0,b=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,w=h.pathname,S=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(w=w.toLowerCase(),S=S?S.toLowerCase():null,b=b.toLowerCase()),S&&x&&(S=$a(S,x)||S);const C=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let _=w===b||!a&&w.startsWith(b)&&w.charAt(C)==="/",O=S!=null&&(S===b||!a&&S.startsWith(b)&&S.charAt(b.length)==="/"),E={isActive:_,isPending:O,isTransitioning:y},T=_?r:void 0,P;typeof i=="function"?P=i(E):P=[i,_?"active":null,O?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A=typeof s=="function"?s(E):s;return k.createElement($0,Qd({},d,{"aria-current":T,className:P,ref:n,style:A,to:l,unstable_viewTransition:c}),typeof u=="function"?u(E):u)});var mg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mg||(mg={}));var U1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(U1||(U1={}));function VA(e){let t=k.useContext(Jf);return t||tt(!1),t}function YA(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=Jo(),c=ns(),u=ep(e,{relative:a});return k.useCallback(d=>{if(IA(d,n)){d.preventDefault();let p=r!==void 0?r:qd(c)===qd(u);l(e,{replace:p,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[c,l,u,r,o,n,e,i,a,s])}function GA(e,t){t===void 0&&(t={});let n=k.useContext(zA);n==null&&tt(!1);let{basename:r}=VA(mg.useViewTransitionState),o=ep(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=$a(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=$a(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fg(o.pathname,a)!=null||fg(o.pathname,i)!=null}var YE={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(i=o(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var s in i)t.call(i,s)&&i[s]&&(a=o(a,s));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(YE);var GE=YE.exports;const ee=Hi(GE),XA=["xxl","xl","lg","md","sm","xs"],qA="xs",tp=k.createContext({prefixes:{},breakpoints:XA,minBreakpoint:qA});function fe(e,t){const{prefixes:n}=k.useContext(tp);return e||n[t]||t}function XE(){const{breakpoints:e}=k.useContext(tp);return e}function qE(){const{minBreakpoint:e}=k.useContext(tp);return e}function F0(){const{dir:e}=k.useContext(tp);return e==="rtl"}const Qt=k.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...o},i)=>{const a=fe(e,"container"),s=typeof t=="string"?`-${t}`:"-fluid";return m.jsx(n,{ref:i,...o,className:ee(r,t?`${a}${s}`:a)})});Qt.displayName="Container";var W1={exports:{}},hg={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r){function o(a,s,l,c,u,d){var p=c||"<<anonymous>>",h=d||l;if(s[l]==null)return a?new Error("Required "+u+" `"+h+"` was not specified "+("in `"+p+"`.")):null;for(var g=arguments.length,v=Array(g>6?g-6:0),x=6;x<g;x++)v[x-6]=arguments[x];return r.apply(void 0,[s,l,p,u,h].concat(v))}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}e.exports=t.default})(hg,hg.exports);var KA=hg.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=KA,r=o(n);function o(a){return a&&a.__esModule?a:{default:a}}function i(){for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];function c(){for(var u=arguments.length,d=Array(u),p=0;p<u;p++)d[p]=arguments[p];var h=null;return s.forEach(function(g){if(h==null){var v=g.apply(void 0,d);v!=null&&(h=v)}}),h}return(0,r.default)(c)}e.exports=t.default})(W1,W1.exports);function gg(){return gg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gg.apply(null,arguments)}function KE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function V1(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function QA(e){var t=JA(e,"string");return typeof t=="symbol"?t:String(t)}function JA(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function QE(e,t,n){var r=k.useRef(e!==void 0),o=k.useState(t),i=o[0],a=o[1],s=e!==void 0,l=r.current;return r.current=s,!s&&l&&i!==t&&a(t),[s?e:i,k.useCallback(function(c){for(var u=arguments.length,d=new Array(u>1?u-1:0),p=1;p<u;p++)d[p-1]=arguments[p];n&&n.apply(void 0,[c].concat(d)),a(c)},[n])]}function JE(e,t){return Object.keys(t).reduce(function(n,r){var o,i=n,a=i[V1(r)],s=i[r],l=KE(i,[V1(r),r].map(QA)),c=t[r],u=QE(s,a,e[c]),d=u[0],p=u[1];return gg({},l,(o={},o[r]=d,o[c]=p,o))},e)}function vg(e,t){return vg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},vg(e,t)}function ZA(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,vg(e,t)}var eM=Function.prototype.bind.call(Function.prototype.call,[].slice);function di(e,t){return eM(e.querySelectorAll(t))}function tM(){const[,e]=k.useReducer(t=>!t,!1);return e}const Y1=e=>!e||typeof e=="function"?e:t=>{e.current=t};function nM(e,t){const n=Y1(e),r=Y1(t);return o=>{n&&n(o),r&&r(o)}}function eo(e,t){return k.useMemo(()=>nM(e,t),[e,t])}const z0=k.createContext(null);z0.displayName="NavContext";const rM=k.createContext(null),B0=(e,t=null)=>e!=null?String(e):t||null,Jd=rM,ZE=k.createContext(null),oM="data-rr-ui-",iM="rrUi";function np(e){return`${oM}${e}`}function aM(e){return`${iM}${e}`}function sM(e){const t=k.useRef(e);return k.useEffect(()=>{t.current=e},[e]),t}function bt(e){const t=sM(e);return k.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const lM=["as","disabled"];function cM(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function uM(e){return!e||e.trim()==="#"}function H0({tagName:e,disabled:t,href:n,target:r,rel:o,role:i,onClick:a,tabIndex:s=0,type:l}){e||(n!=null||r!=null||o!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},c];const u=p=>{if((t||e==="a"&&uM(n))&&p.preventDefault(),t){p.stopPropagation();return}a==null||a(p)},d=p=>{p.key===" "&&(p.preventDefault(),u(p))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:u,onKeyDown:d},c]}const eT=k.forwardRef((e,t)=>{let{as:n,disabled:r}=e,o=cM(e,lM);const[i,{tagName:a}]=H0(Object.assign({tagName:n,disabled:r},o));return m.jsx(a,Object.assign({},o,i,{ref:t}))});eT.displayName="Button";const dM=["as","active","eventKey"];function fM(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function tT({key:e,onClick:t,active:n,id:r,role:o,disabled:i}){const a=k.useContext(Jd),s=k.useContext(z0),l=k.useContext(ZE);let c=n;const u={role:o};if(s){!o&&s.role==="tablist"&&(u.role="tab");const d=s.getControllerId(e??null),p=s.getControlledId(e??null);u[np("event-key")]=e,u.id=d||r,c=n==null&&e!=null?s.activeKey===e:n,(c||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(u["aria-controls"]=p)}return u.role==="tab"&&(u["aria-selected"]=c,c||(u.tabIndex=-1),i&&(u.tabIndex=-1,u["aria-disabled"]=!0)),u.onClick=bt(d=>{i||(t==null||t(d),e!=null&&a&&!d.isPropagationStopped()&&a(e,d))}),[u,{isActive:c}]}const nT=k.forwardRef((e,t)=>{let{as:n=eT,active:r,eventKey:o}=e,i=fM(e,dM);const[a,s]=tT(Object.assign({key:B0(o,i.href),active:r},i));return a[np("active")]=s.isActive,m.jsx(n,Object.assign({},i,a,{ref:t}))});nT.displayName="NavItem";const pM=nT,mM=["as","onSelect","activeKey","role","onKeyDown"];function hM(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const G1=()=>{},X1=np("event-key"),rT=k.forwardRef((e,t)=>{let{as:n="div",onSelect:r,activeKey:o,role:i,onKeyDown:a}=e,s=hM(e,mM);const l=tM(),c=k.useRef(!1),u=k.useContext(Jd),d=k.useContext(ZE);let p,h;d&&(i=i||"tablist",o=d.activeKey,p=d.getControlledId,h=d.getControllerId);const g=k.useRef(null),v=w=>{const S=g.current;if(!S)return null;const C=di(S,`[${X1}]:not([aria-disabled=true])`),_=S.querySelector("[aria-selected=true]");if(!_||_!==document.activeElement)return null;const O=C.indexOf(_);if(O===-1)return null;let E=O+w;return E>=C.length&&(E=0),E<0&&(E=C.length-1),C[E]},x=(w,S)=>{w!=null&&(r==null||r(w,S),u==null||u(w,S))},y=w=>{if(a==null||a(w),!d)return;let S;switch(w.key){case"ArrowLeft":case"ArrowUp":S=v(-1);break;case"ArrowRight":case"ArrowDown":S=v(1);break;default:return}S&&(w.preventDefault(),x(S.dataset[aM("EventKey")]||null,w),c.current=!0,l())};k.useEffect(()=>{if(g.current&&c.current){const w=g.current.querySelector(`[${X1}][aria-selected=true]`);w==null||w.focus()}c.current=!1});const b=eo(t,g);return m.jsx(Jd.Provider,{value:x,children:m.jsx(z0.Provider,{value:{role:i,activeKey:B0(o),getControlledId:p||G1,getControllerId:h||G1},children:m.jsx(n,Object.assign({},s,{onKeyDown:y,ref:b,role:i}))})})});rT.displayName="Nav";const gM=Object.assign(rT,{Item:pM}),Vi=k.createContext(null);Vi.displayName="NavbarContext";const U0=k.createContext(null);U0.displayName="CardHeaderContext";const oT=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"nav-item"),m.jsx(n,{ref:o,className:ee(e,t),...r})));oT.displayName="NavItem";function bg(){return k.useState(null)}function W0(){const e=k.useRef(!0),t=k.useRef(()=>e.current);return k.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function vM(e){const t=k.useRef(null);return k.useEffect(()=>{t.current=e}),t.current}const bM=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",yM=typeof document<"u",Zd=yM||bM?k.useLayoutEffect:k.useEffect,xM=["onKeyDown"];function wM(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function kM(e){return!e||e.trim()==="#"}const iT=k.forwardRef((e,t)=>{let{onKeyDown:n}=e,r=wM(e,xM);const[o]=H0(Object.assign({tagName:"a"},r)),i=bt(a=>{o.onKeyDown(a),n==null||n(a)});return kM(r.href)||r.role==="button"?m.jsx("a",Object.assign({ref:t},r,o,{onKeyDown:i})):m.jsx("a",Object.assign({ref:t},r,{onKeyDown:n}))});iT.displayName="Anchor";const aT=k.forwardRef(({bsPrefix:e,className:t,as:n=iT,active:r,eventKey:o,disabled:i=!1,...a},s)=>{e=fe(e,"nav-link");const[l,c]=tT({key:B0(o,a.href),active:r,disabled:i,...a});return m.jsx(n,{...a,...l,ref:s,disabled:i,className:ee(t,e,i&&"disabled",c.isActive&&"active")})});aT.displayName="NavLink";const sT=k.forwardRef((e,t)=>{const{as:n="div",bsPrefix:r,variant:o,fill:i=!1,justify:a=!1,navbar:s,navbarScroll:l,className:c,activeKey:u,...d}=JE(e,{activeKey:"onSelect"}),p=fe(r,"nav");let h,g,v=!1;const x=k.useContext(Vi),y=k.useContext(U0);return x?(h=x.bsPrefix,v=s??!0):y&&({cardHeaderBsPrefix:g}=y),m.jsx(gM,{as:n,ref:t,activeKey:u,className:ee(c,{[p]:!v,[`${h}-nav`]:v,[`${h}-nav-scroll`]:v&&l,[`${g}-${o}`]:!!g,[`${p}-${o}`]:!!o,[`${p}-fill`]:i,[`${p}-justified`]:a}),...d})});sT.displayName="Nav";const Zi=Object.assign(sT,{Item:oT,Link:aT}),lT=k.forwardRef(({bsPrefix:e,className:t,as:n,...r},o)=>{e=fe(e,"navbar-brand");const i=n||(r.href?"a":"span");return m.jsx(i,{...r,ref:o,className:ee(t,e)})});lT.displayName="NavbarBrand";function rs(e){return e&&e.ownerDocument||document}function SM(e){var t=rs(e);return t&&t.defaultView||window}function _M(e,t){return SM(e).getComputedStyle(e,t)}var CM=/([A-Z])/g;function OM(e){return e.replace(CM,"-$1").toLowerCase()}var EM=/^ms-/;function tu(e){return OM(e).replace(EM,"-ms-")}var TM=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function jM(e){return!!(e&&TM.test(e))}function Br(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(tu(t))||_M(e).getPropertyValue(tu(t));Object.keys(t).forEach(function(o){var i=t[o];!i&&i!==0?e.style.removeProperty(tu(o)):jM(o)?r+=o+"("+i+") ":n+=tu(o)+": "+i+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}var cT={exports:{}},PM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",NM=PM,RM=NM;function uT(){}function dT(){}dT.resetWarningCache=uT;var AM=function(){function e(r,o,i,a,s,l){if(l!==RM){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:dT,resetWarningCache:uT};return n.PropTypes=n,n};cT.exports=AM();var Yi=cT.exports;const f=Hi(Yi),q1={disabled:!1},fT=Y.createContext(null);var MM=function(t){return t.scrollTop},$s="unmounted",bo="exited",Hn="entering",Ar="entered",Dl="exiting",to=function(e){ZA(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?s?(l=bo,i.appearStatus=Hn):l=Ar:r.unmountOnExit||r.mountOnEnter?l=$s:l=bo,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===$s?{status:bo}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==Hn&&a!==Ar&&(i=Hn):(a===Hn||a===Ar)&&(i=Dl)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Hn){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:vi.findDOMNode(this);a&&MM(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===bo&&this.setState({status:$s})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,l=this.props.nodeRef?[s]:[vi.findDOMNode(this),s],c=l[0],u=l[1],d=this.getTimeouts(),p=s?d.appear:d.enter;if(!o&&!a||q1.disabled){this.safeSetState({status:Ar},function(){i.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:Hn},function(){i.props.onEntering(c,u),i.onTransitionEnd(p,function(){i.safeSetState({status:Ar},function(){i.props.onEntered(c,u)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:vi.findDOMNode(this);if(!i||q1.disabled){this.safeSetState({status:bo},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Dl},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:bo},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:vi.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===$s)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=KE(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Y.createElement(fT.Provider,{value:null},typeof a=="function"?a(o,s):Y.cloneElement(Y.Children.only(a),s))},t}(Y.Component);to.contextType=fT;to.propTypes={};function ea(){}to.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ea,onEntering:ea,onEntered:ea,onExit:ea,onExiting:ea,onExited:ea};to.UNMOUNTED=$s;to.EXITED=bo;to.ENTERING=Hn;to.ENTERED=Ar;to.EXITING=Dl;const os=!!(typeof window<"u"&&window.document&&window.document.createElement);var yg=!1,xg=!1;try{var gm={get passive(){return yg=!0},get once(){return xg=yg=!0}};os&&(window.addEventListener("test",gm,gm),window.removeEventListener("test",gm,!0))}catch{}function pT(e,t,n,r){if(r&&typeof r!="boolean"&&!xg){var o=r.once,i=r.capture,a=n;!xg&&o&&(a=n.__once||function s(l){this.removeEventListener(t,s,i),n.call(this,l)},n.__once=a),e.addEventListener(t,a,yg?r:i)}e.addEventListener(t,n,r)}function wg(e,t,n,r){var o=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}function Ir(e,t,n,r){return pT(e,t,n,r),function(){wg(e,t,n,r)}}function LM(e,t,n,r){if(r===void 0&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}function IM(e){var t=Br(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function DM(e,t,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||LM(e,"transitionend",!0)},t+n),i=Ir(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),i()}}function mT(e,t,n,r){n==null&&(n=IM(e)||0);var o=DM(e,n,r),i=Ir(e,"transitionend",t);return function(){o(),i()}}function K1(e,t){const n=Br(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function V0(e,t){const n=K1(e,"transitionDuration"),r=K1(e,"transitionDelay"),o=mT(e,i=>{i.target===e&&(o(),t(i))},n+r)}function ws(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...o){t.apply(this,o),n.apply(this,o)}},null)}function hT(e){e.offsetHeight}function ef(e){return e&&"setState"in e?vi.findDOMNode(e):e??null}const Y0=Y.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:i,addEndListener:a,children:s,childRef:l,...c},u)=>{const d=k.useRef(null),p=eo(d,l),h=_=>{p(ef(_))},g=_=>O=>{_&&d.current&&_(d.current,O)},v=k.useCallback(g(e),[e]),x=k.useCallback(g(t),[t]),y=k.useCallback(g(n),[n]),b=k.useCallback(g(r),[r]),w=k.useCallback(g(o),[o]),S=k.useCallback(g(i),[i]),C=k.useCallback(g(a),[a]);return m.jsx(to,{ref:u,...c,onEnter:v,onEntered:y,onEntering:x,onExit:b,onExited:S,onExiting:w,addEndListener:C,nodeRef:d,children:typeof s=="function"?(_,O)=>s(_,{...O,ref:h}):Y.cloneElement(s,{ref:h})})}),$M={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function FM(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=t[n],o=$M[e];return r+parseInt(Br(t,o[0]),10)+parseInt(Br(t,o[1]),10)}const zM={[bo]:"collapse",[Dl]:"collapsing",[Hn]:"collapsing",[Ar]:"collapse show"},gT=Y.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,className:i,children:a,dimension:s="height",in:l=!1,timeout:c=300,mountOnEnter:u=!1,unmountOnExit:d=!1,appear:p=!1,getDimensionValue:h=FM,...g},v)=>{const x=typeof s=="function"?s():s,y=k.useMemo(()=>ws(_=>{_.style[x]="0"},e),[x,e]),b=k.useMemo(()=>ws(_=>{const O=`scroll${x[0].toUpperCase()}${x.slice(1)}`;_.style[x]=`${_[O]}px`},t),[x,t]),w=k.useMemo(()=>ws(_=>{_.style[x]=null},n),[x,n]),S=k.useMemo(()=>ws(_=>{_.style[x]=`${h(x,_)}px`,hT(_)},r),[r,h,x]),C=k.useMemo(()=>ws(_=>{_.style[x]=null},o),[x,o]);return m.jsx(Y0,{ref:v,addEndListener:V0,...g,"aria-expanded":g.role?l:null,onEnter:y,onEntering:b,onEntered:w,onExit:S,onExiting:C,childRef:a.ref,in:l,timeout:c,mountOnEnter:u,unmountOnExit:d,appear:p,children:(_,O)=>Y.cloneElement(a,{...O,className:ee(i,a.props.className,zM[_],x==="width"&&"collapse-horizontal")})})}),vT=k.forwardRef(({children:e,bsPrefix:t,...n},r)=>{t=fe(t,"navbar-collapse");const o=k.useContext(Vi);return m.jsx(gT,{in:!!(o&&o.expanded),...n,children:m.jsx("div",{ref:r,className:t,children:e})})});vT.displayName="NavbarCollapse";const bT=k.forwardRef(({bsPrefix:e,className:t,children:n,label:r="Toggle navigation",as:o="button",onClick:i,...a},s)=>{e=fe(e,"navbar-toggler");const{onToggle:l,expanded:c}=k.useContext(Vi)||{},u=bt(d=>{i&&i(d),l&&l()});return o==="button"&&(a.type="button"),m.jsx(o,{...a,ref:s,onClick:u,"aria-label":r,className:ee(t,e,!c&&"collapsed"),children:n||m.jsx("span",{className:`${e}-icon`})})});bT.displayName="NavbarToggle";const kg=new WeakMap,Q1=(e,t)=>{if(!e||!t)return;const n=kg.get(t)||new Map;kg.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function BM(e,t=typeof window>"u"?void 0:window){const n=Q1(e,t),[r,o]=k.useState(()=>n?n.matches:!1);return Zd(()=>{let i=Q1(e,t);if(!i)return o(!1);let a=kg.get(t);const s=()=>{o(i.matches)};return i.refCount++,i.addListener(s),s(),()=>{i.removeListener(s),i.refCount--,i.refCount<=0&&(a==null||a.delete(i.media)),i=void 0}},[e]),r}function HM(e){const t=Object.keys(e);function n(s,l){return s===l?l:s?`${s} and ${l}`:l}function r(s){return t[Math.min(t.indexOf(s)+1,t.length-1)]}function o(s){const l=r(s);let c=e[l];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function i(s){let l=e[s];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function a(s,l,c){let u;typeof s=="object"?(u=s,c=l,l=!0):(l=l||!0,u={[s]:l});let d=k.useMemo(()=>Object.entries(u).reduce((p,[h,g])=>((g==="up"||g===!0)&&(p=n(p,i(h))),(g==="down"||g===!0)&&(p=n(p,o(h))),p),""),[JSON.stringify(u)]);return BM(d,c)}return a}const UM=HM({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function vm(e){e===void 0&&(e=rs());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function $l(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function WM(e){const t=k.useRef(e);return t.current=e,t}function G0(e){const t=WM(e);k.useEffect(()=>()=>t.current(),[])}function VM(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const J1=np("modal-open");class X0{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return VM(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(Br(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(J1,""),Br(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(J1),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const yT=k.createContext(os?window:void 0);yT.Provider;function q0(){return k.useContext(yT)}const bm=(e,t)=>os?e==null?(t||rs()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function Sg(e,t){const n=q0(),[r,o]=k.useState(()=>bm(e,n==null?void 0:n.document));if(!r){const i=bm(e);i&&o(i)}return k.useEffect(()=>{},[t,r]),k.useEffect(()=>{const i=bm(e);i!==r&&o(i)},[e,r]),r}function YM({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){const i=k.useRef(null),a=k.useRef(t),s=bt(n);k.useEffect(()=>{t?a.current=!0:s(i.current)},[t,s]);const l=eo(i,e.ref),c=k.cloneElement(e,{ref:l});return t?c:o||!a.current&&r?null:c}function xT(e){return e.code==="Escape"||e.keyCode===27}function GM(){const e=k.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const XM=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function qM(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function KM(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:i,onExited:a,addEndListener:s,children:l}=e,c=qM(e,XM);const{major:u}=GM(),d=u>=19?l.props.ref:l.ref,p=k.useRef(null),h=eo(p,typeof l=="function"?null:d),g=_=>O=>{_&&p.current&&_(p.current,O)},v=k.useCallback(g(t),[t]),x=k.useCallback(g(n),[n]),y=k.useCallback(g(r),[r]),b=k.useCallback(g(o),[o]),w=k.useCallback(g(i),[i]),S=k.useCallback(g(a),[a]),C=k.useCallback(g(s),[s]);return Object.assign({},c,{nodeRef:p},t&&{onEnter:v},n&&{onEntering:x},r&&{onEntered:y},o&&{onExit:b},i&&{onExiting:w},a&&{onExited:S},s&&{addEndListener:C},{children:typeof l=="function"?(_,O)=>l(_,Object.assign({},O,{ref:h})):k.cloneElement(l,{ref:h})})}const QM=["component"];function JM(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const ZM=k.forwardRef((e,t)=>{let{component:n}=e,r=JM(e,QM);const o=KM(r);return m.jsx(n,Object.assign({ref:t},o))});function eL({in:e,onTransition:t}){const n=k.useRef(null),r=k.useRef(!0),o=bt(t);return Zd(()=>{if(!n.current)return;let i=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>i}),()=>{i=!0}},[e,o]),Zd(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function tL({children:e,in:t,onExited:n,onEntered:r,transition:o}){const[i,a]=k.useState(!t);t&&i&&a(!1);const s=eL({in:!!t,onTransition:c=>{const u=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(a(!0),n==null||n(c.element)))};Promise.resolve(o(c)).then(u,d=>{throw c.in||a(!0),d})}}),l=eo(s,e.ref);return i&&!t?null:k.cloneElement(e,{ref:l})}function _g(e,t,n){return e?m.jsx(ZM,Object.assign({},n,{component:e})):t?m.jsx(tL,Object.assign({},n,{transition:t})):m.jsx(YM,Object.assign({},n))}const nL=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function rL(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let ym;function oL(e){return ym||(ym=new X0({ownerDocument:e==null?void 0:e.document})),ym}function iL(e){const t=q0(),n=e||oL(t),r=k.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:k.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:k.useCallback(o=>{r.current.backdrop=o},[])})}const wT=k.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:i,children:a,backdrop:s=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:u,transition:d,runTransition:p,backdropTransition:h,runBackdropTransition:g,autoFocus:v=!0,enforceFocus:x=!0,restoreFocus:y=!0,restoreFocusOptions:b,renderDialog:w,renderBackdrop:S=ae=>m.jsx("div",Object.assign({},ae)),manager:C,container:_,onShow:O,onHide:E=()=>{},onExit:T,onExited:P,onExiting:A,onEnter:I,onEntering:X,onEntered:H}=e,V=rL(e,nL);const J=q0(),M=Sg(_),N=iL(C),U=W0(),Q=vM(n),[Z,$]=k.useState(!n),F=k.useRef(null);k.useImperativeHandle(t,()=>N,[N]),os&&!Q&&n&&(F.current=vm(J==null?void 0:J.document)),n&&Z&&$(!1);const D=bt(()=>{if(N.add(),ge.current=Ir(document,"keydown",G),Ce.current=Ir(document,"focus",()=>setTimeout(j),!0),O&&O(),v){var ae,Ye;const we=vm((ae=(Ye=N.dialog)==null?void 0:Ye.ownerDocument)!=null?ae:J==null?void 0:J.document);N.dialog&&we&&!$l(N.dialog,we)&&(F.current=we,N.dialog.focus())}}),z=bt(()=>{if(N.remove(),ge.current==null||ge.current(),Ce.current==null||Ce.current(),y){var ae;(ae=F.current)==null||ae.focus==null||ae.focus(b),F.current=null}});k.useEffect(()=>{!n||!M||D()},[n,M,D]),k.useEffect(()=>{Z&&z()},[Z,z]),G0(()=>{z()});const j=bt(()=>{if(!x||!U()||!N.isTopModal())return;const ae=vm(J==null?void 0:J.document);N.dialog&&ae&&!$l(N.dialog,ae)&&N.dialog.focus()}),le=bt(ae=>{ae.target===ae.currentTarget&&(c==null||c(ae),s===!0&&E())}),G=bt(ae=>{l&&xT(ae)&&N.isTopModal()&&(u==null||u(ae),ae.defaultPrevented||E())}),Ce=k.useRef(),ge=k.useRef(),xe=(...ae)=>{$(!0),P==null||P(...ae)};if(!M)return null;const ce=Object.assign({role:r,ref:N.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},V,{style:i,className:o,tabIndex:-1});let Re=w?w(ce):m.jsx("div",Object.assign({},ce,{children:k.cloneElement(a,{role:"document"})}));Re=_g(d,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:T,onExiting:A,onExited:xe,onEnter:I,onEntering:X,onEntered:H,children:Re});let Ae=null;return s&&(Ae=S({ref:N.setBackdropRef,onClick:le}),Ae=_g(h,g,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Ae})),m.jsx(m.Fragment,{children:vi.createPortal(m.jsxs(m.Fragment,{children:[Ae,Re]}),M)})});wT.displayName="Modal";const kT=Object.assign(wT,{Manager:X0}),aL={[Hn]:"show",[Ar]:"show"},Fa=k.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},i)=>{const a={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},s=k.useCallback((l,c)=>{hT(l),r==null||r(l,c)},[r]);return m.jsx(Y0,{ref:i,addEndListener:V0,...a,onEnter:s,childRef:t.ref,children:(l,c)=>k.cloneElement(t,{...c,className:ee("fade",e,t.props.className,aL[l],n[l])})})});Fa.displayName="Fade";const ST=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"offcanvas-body"),m.jsx(n,{ref:o,className:ee(e,t),...r})));ST.displayName="OffcanvasBody";const sL={[Hn]:"show",[Ar]:"show"},_T=k.forwardRef(({bsPrefix:e,className:t,children:n,in:r=!1,mountOnEnter:o=!1,unmountOnExit:i=!1,appear:a=!1,...s},l)=>(e=fe(e,"offcanvas"),m.jsx(Y0,{ref:l,addEndListener:V0,in:r,mountOnEnter:o,unmountOnExit:i,appear:a,...s,childRef:n.ref,children:(c,u)=>k.cloneElement(n,{...u,className:ee(t,n.props.className,(c===Hn||c===Dl)&&`${e}-toggling`,sL[c])})})));_T.displayName="OffcanvasToggling";const K0=k.createContext({onHide(){}}),lL={"aria-label":f.string,onClick:f.func,variant:f.oneOf(["white"])},Q0=k.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},o)=>m.jsx("button",{ref:o,type:"button",className:ee("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));Q0.displayName="CloseButton";Q0.propTypes=lL;const CT=k.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...i},a)=>{const s=k.useContext(K0),l=bt(()=>{s==null||s.onHide(),r==null||r()});return m.jsxs("div",{ref:a,...i,children:[o,n&&m.jsx(Q0,{"aria-label":e,variant:t,onClick:l})]})}),OT=k.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},i)=>(e=fe(e,"offcanvas-header"),m.jsx(CT,{ref:i,...o,className:ee(t,e),closeLabel:n,closeButton:r})));OT.displayName="OffcanvasHeader";const rp=e=>k.forwardRef((t,n)=>m.jsx("div",{...t,ref:n,className:ee(t.className,e)})),cL=rp("h5"),ET=k.forwardRef(({className:e,bsPrefix:t,as:n=cL,...r},o)=>(t=fe(t,"offcanvas-title"),m.jsx(n,{ref:o,className:ee(e,t),...r})));ET.displayName="OffcanvasTitle";function Cg(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function uL(e,t){e.classList?e.classList.add(t):Cg(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Z1(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function dL(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Z1(e.className,t):e.setAttribute("class",Z1(e.className&&e.className.baseVal||"",t))}const ta={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class TT extends X0{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,Br(n,{[t]:`${parseFloat(Br(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],Br(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(uL(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";di(n,ta.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,t.scrollBarWidth)),di(n,ta.STICKY_CONTENT).forEach(i=>this.adjustAndStore(o,i,-t.scrollBarWidth)),di(n,ta.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(o,i,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();dL(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";di(n,ta.FIXED_CONTENT).forEach(i=>this.restore(r,i)),di(n,ta.STICKY_CONTENT).forEach(i=>this.restore(o,i)),di(n,ta.NAVBAR_TOGGLER).forEach(i=>this.restore(o,i))}}let xm;function jT(e){return xm||(xm=new TT(e)),xm}function fL(e){return m.jsx(_T,{...e})}function pL(e){return m.jsx(Fa,{...e})}const PT=k.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:o="start",responsive:i,show:a=!1,backdrop:s=!0,keyboard:l=!0,scroll:c=!1,onEscapeKeyDown:u,onShow:d,onHide:p,container:h,autoFocus:g=!0,enforceFocus:v=!0,restoreFocus:x=!0,restoreFocusOptions:y,onEntered:b,onExit:w,onExiting:S,onEnter:C,onEntering:_,onExited:O,backdropClassName:E,manager:T,renderStaticNode:P=!1,...A},I)=>{const X=k.useRef();e=fe(e,"offcanvas");const{onToggle:H}=k.useContext(Vi)||{},[V,J]=k.useState(!1),M=UM(i||"xs","up");k.useEffect(()=>{J(i?a&&!M:a)},[a,i,M]);const N=bt(()=>{H==null||H(),p==null||p()}),U=k.useMemo(()=>({onHide:N}),[N]);function Q(){return T||(c?(X.current||(X.current=new TT({handleContainerOverflow:!1})),X.current):jT())}const Z=(z,...j)=>{z&&(z.style.visibility="visible"),C==null||C(z,...j)},$=(z,...j)=>{z&&(z.style.visibility=""),O==null||O(...j)},F=k.useCallback(z=>m.jsx("div",{...z,className:ee(`${e}-backdrop`,E)}),[E,e]),D=z=>m.jsx("div",{...z,...A,className:ee(t,i?`${e}-${i}`:e,`${e}-${o}`),"aria-labelledby":r,children:n});return m.jsxs(m.Fragment,{children:[!V&&(i||P)&&D({}),m.jsx(K0.Provider,{value:U,children:m.jsx(kT,{show:V,ref:I,backdrop:s,container:h,keyboard:l,autoFocus:g,enforceFocus:v&&!c,restoreFocus:x,restoreFocusOptions:y,onEscapeKeyDown:u,onShow:d,onHide:N,onEnter:Z,onEntering:_,onEntered:b,onExit:w,onExiting:S,onExited:$,manager:Q(),transition:fL,backdropTransition:pL,renderBackdrop:F,renderDialog:D})})]})});PT.displayName="Offcanvas";const mL=Object.assign(PT,{Body:ST,Header:OT,Title:ET}),NT=k.forwardRef((e,t)=>{const n=k.useContext(Vi);return m.jsx(mL,{ref:t,show:!!(n!=null&&n.expanded),...e,renderStaticNode:!0})});NT.displayName="NavbarOffcanvas";const RT=k.forwardRef(({className:e,bsPrefix:t,as:n="span",...r},o)=>(t=fe(t,"navbar-text"),m.jsx(n,{ref:o,className:ee(e,t),...r})));RT.displayName="NavbarText";const AT=k.forwardRef((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:o="light",bg:i,fixed:a,sticky:s,className:l,as:c="nav",expanded:u,onToggle:d,onSelect:p,collapseOnSelect:h=!1,...g}=JE(e,{expanded:"onToggle"}),v=fe(n,"navbar"),x=k.useCallback((...w)=>{p==null||p(...w),h&&u&&(d==null||d(!1))},[p,h,u,d]);g.role===void 0&&c!=="nav"&&(g.role="navigation");let y=`${v}-expand`;typeof r=="string"&&(y=`${y}-${r}`);const b=k.useMemo(()=>({onToggle:()=>d==null?void 0:d(!u),bsPrefix:v,expanded:!!u,expand:r}),[v,u,r,d]);return m.jsx(Vi.Provider,{value:b,children:m.jsx(Jd.Provider,{value:x,children:m.jsx(c,{ref:t,...g,className:ee(l,v,r&&y,o&&`${v}-${o}`,i&&`bg-${i}`,s&&`sticky-${s}`,a&&`fixed-${a}`)})})})});AT.displayName="Navbar";const nu=Object.assign(AT,{Brand:lT,Collapse:vT,Offcanvas:NT,Text:RT,Toggle:bT});function ex(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ex(Object(n),!0).forEach(function(r){gt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ex(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tf(e){"@babel/helpers - typeof";return tf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tf(e)}function hL(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gL(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vL(e,t,n){return t&&gL(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J0(e,t){return yL(e)||wL(e,t)||MT(e,t)||SL()}function pc(e){return bL(e)||xL(e)||MT(e)||kL()}function bL(e){if(Array.isArray(e))return Og(e)}function yL(e){if(Array.isArray(e))return e}function xL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wL(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,a,s;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));o=!0);}catch(l){i=!0,s=l}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function MT(e,t){if(e){if(typeof e=="string")return Og(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Og(e,t)}}function Og(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tx=function(){},Z0={},LT={},IT=null,DT={mark:tx,measure:tx};try{typeof window<"u"&&(Z0=window),typeof document<"u"&&(LT=document),typeof MutationObserver<"u"&&(IT=MutationObserver),typeof performance<"u"&&(DT=performance)}catch{}var _L=Z0.navigator||{},nx=_L.userAgent,rx=nx===void 0?"":nx,Ho=Z0,Ue=LT,ox=IT,ru=DT;Ho.document;var no=!!Ue.documentElement&&!!Ue.head&&typeof Ue.addEventListener=="function"&&typeof Ue.createElement=="function",$T=~rx.indexOf("MSIE")||~rx.indexOf("Trident/"),ou,iu,au,su,lu,Yr="___FONT_AWESOME___",Eg=16,FT="fa",zT="svg-inline--fa",Mi="data-fa-i2svg",Tg="data-fa-pseudo-element",CL="data-fa-pseudo-element-pending",eb="data-prefix",tb="data-icon",ix="fontawesome-i2svg",OL="async",EL=["HTML","HEAD","STYLE","SCRIPT"],BT=function(){try{return!0}catch{return!1}}(),Be="classic",it="sharp",nb=[Be,it];function mc(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Be]}})}var Fl=mc((ou={},gt(ou,Be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),gt(ou,it,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ou)),zl=mc((iu={},gt(iu,Be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),gt(iu,it,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),iu)),Bl=mc((au={},gt(au,Be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),gt(au,it,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),au)),TL=mc((su={},gt(su,Be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),gt(su,it,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),su)),jL=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,HT="fa-layers-text",PL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,NL=mc((lu={},gt(lu,Be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),gt(lu,it,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),lu)),UT=[1,2,3,4,5,6,7,8,9,10],RL=UT.concat([11,12,13,14,15,16,17,18,19,20]),AL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hl=new Set;Object.keys(zl[Be]).map(Hl.add.bind(Hl));Object.keys(zl[it]).map(Hl.add.bind(Hl));var ML=[].concat(nb,pc(Hl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",bi.GROUP,bi.SWAP_OPACITY,bi.PRIMARY,bi.SECONDARY]).concat(UT.map(function(e){return"".concat(e,"x")})).concat(RL.map(function(e){return"w-".concat(e)})),ol=Ho.FontAwesomeConfig||{};function LL(e){var t=Ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function IL(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ue&&typeof Ue.querySelector=="function"){var DL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DL.forEach(function(e){var t=J0(e,2),n=t[0],r=t[1],o=IL(LL(n));o!=null&&(ol[r]=o)})}var WT={styleDefault:"solid",familyDefault:"classic",cssPrefix:FT,replacementClass:zT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ol.familyPrefix&&(ol.cssPrefix=ol.familyPrefix);var za=ne(ne({},WT),ol);za.autoReplaceSvg||(za.observeMutations=!1);var ie={};Object.keys(WT).forEach(function(e){Object.defineProperty(ie,e,{enumerable:!0,set:function(n){za[e]=n,il.forEach(function(r){return r(ie)})},get:function(){return za[e]}})});Object.defineProperty(ie,"familyPrefix",{enumerable:!0,set:function(t){za.cssPrefix=t,il.forEach(function(n){return n(ie)})},get:function(){return za.cssPrefix}});Ho.FontAwesomeConfig=ie;var il=[];function $L(e){return il.push(e),function(){il.splice(il.indexOf(e),1)}}var co=Eg,mr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function FL(e){if(!(!e||!no)){var t=Ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Ue.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return Ue.head.insertBefore(t,r),e}}var zL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ul(){for(var e=12,t="";e-- >0;)t+=zL[Math.random()*62|0];return t}function is(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rb(e){return e.classList?is(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function VT(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function BL(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(VT(e[n]),'" ')},"").trim()}function op(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ob(e){return e.size!==mr.size||e.x!==mr.x||e.y!==mr.y||e.rotate!==mr.rotate||e.flipX||e.flipY}function HL(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(a," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:l,path:c}}function UL(e){var t=e.transform,n=e.width,r=n===void 0?Eg:n,o=e.height,i=o===void 0?Eg:o,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&$T?l+="translate(".concat(t.x/co-r/2,"em, ").concat(t.y/co-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/co,"em), calc(-50% + ").concat(t.y/co,"em)) "):l+="translate(".concat(t.x/co,"em, ").concat(t.y/co,"em) "),l+="scale(".concat(t.size/co*(t.flipX?-1:1),", ").concat(t.size/co*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var WL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function YT(){var e=FT,t=zT,n=ie.cssPrefix,r=ie.replacementClass,o=WL;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return o}var ax=!1;function wm(){ie.autoAddCss&&!ax&&(FL(YT()),ax=!0)}var VL={mixout:function(){return{dom:{css:YT,insertCss:wm}}},hooks:function(){return{beforeDOMElementCreation:function(){wm()},beforeI2svg:function(){wm()}}}},Gr=Ho||{};Gr[Yr]||(Gr[Yr]={});Gr[Yr].styles||(Gr[Yr].styles={});Gr[Yr].hooks||(Gr[Yr].hooks={});Gr[Yr].shims||(Gr[Yr].shims=[]);var Wn=Gr[Yr],GT=[],YL=function e(){Ue.removeEventListener("DOMContentLoaded",e),nf=1,GT.map(function(t){return t()})},nf=!1;no&&(nf=(Ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ue.readyState),nf||Ue.addEventListener("DOMContentLoaded",YL));function GL(e){no&&(nf?setTimeout(e,0):GT.push(e))}function hc(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,i=o===void 0?[]:o;return typeof e=="string"?VT(e):"<".concat(t," ").concat(BL(r),">").concat(i.map(hc).join(""),"</").concat(t,">")}function sx(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var km=function(t,n,r,o){var i=Object.keys(t),a=i.length,s=n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<a;l++)c=i[l],u=s(u,t[c],c,t);return u};function XL(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((o&1023)<<10)+(i&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function jg(e){var t=XL(e);return t.length===1?t[0].toString(16):null}function qL(e,t){var n=e.length,r=e.charCodeAt(t),o;return r>=55296&&r<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function lx(e){return Object.keys(e).reduce(function(t,n){var r=e[n],o=!!r.icon;return o?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,i=lx(t);typeof Wn.hooks.addPack=="function"&&!o?Wn.hooks.addPack(e,lx(t)):Wn.styles[e]=ne(ne({},Wn.styles[e]||{}),i),e==="fas"&&Pg("fa",t)}var cu,uu,du,ba=Wn.styles,KL=Wn.shims,QL=(cu={},gt(cu,Be,Object.values(Bl[Be])),gt(cu,it,Object.values(Bl[it])),cu),ib=null,XT={},qT={},KT={},QT={},JT={},JL=(uu={},gt(uu,Be,Object.keys(Fl[Be])),gt(uu,it,Object.keys(Fl[it])),uu);function ZL(e){return~ML.indexOf(e)}function eI(e,t){var n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r===e&&o!==""&&!ZL(o)?o:null}var ZT=function(){var t=function(i){return km(ba,function(a,s,l){return a[l]=km(s,i,{}),a},{})};XT=t(function(o,i,a){if(i[3]&&(o[i[3]]=a),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){o[l.toString(16)]=a})}return o}),qT=t(function(o,i,a){if(o[a]=a,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){o[l]=a})}return o}),JT=t(function(o,i,a){var s=i[2];return o[a]=a,s.forEach(function(l){o[l]=a}),o});var n="far"in ba||ie.autoFetchSvg,r=km(KL,function(o,i){var a=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(o.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(o.unicodes[a.toString(16)]={prefix:s,iconName:l}),o},{names:{},unicodes:{}});KT=r.names,QT=r.unicodes,ib=ip(ie.styleDefault,{family:ie.familyDefault})};$L(function(e){ib=ip(e.styleDefault,{family:ie.familyDefault})});ZT();function ab(e,t){return(XT[e]||{})[t]}function tI(e,t){return(qT[e]||{})[t]}function yi(e,t){return(JT[e]||{})[t]}function ej(e){return KT[e]||{prefix:null,iconName:null}}function nI(e){var t=QT[e],n=ab("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Uo(){return ib}var sb=function(){return{prefix:null,iconName:null,rest:[]}};function ip(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Be:n,o=Fl[r][e],i=zl[r][e]||zl[r][o],a=e in Wn.styles?e:null;return i||a||null}var cx=(du={},gt(du,Be,Object.keys(Bl[Be])),gt(du,it,Object.keys(Bl[it])),du);function ap(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,o=r===void 0?!1:r,i=(t={},gt(t,Be,"".concat(ie.cssPrefix,"-").concat(Be)),gt(t,it,"".concat(ie.cssPrefix,"-").concat(it)),t),a=null,s=Be;(e.includes(i[Be])||e.some(function(c){return cx[Be].includes(c)}))&&(s=Be),(e.includes(i[it])||e.some(function(c){return cx[it].includes(c)}))&&(s=it);var l=e.reduce(function(c,u){var d=eI(ie.cssPrefix,u);if(ba[u]?(u=QL[s].includes(u)?TL[s][u]:u,a=u,c.prefix=u):JL[s].indexOf(u)>-1?(a=u,c.prefix=ip(u,{family:s})):d?c.iconName=d:u!==ie.replacementClass&&u!==i[Be]&&u!==i[it]&&c.rest.push(u),!o&&c.prefix&&c.iconName){var p=a==="fa"?ej(c.iconName):{},h=yi(c.prefix,c.iconName);p.prefix&&(a=null),c.iconName=p.iconName||h||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!ba.far&&ba.fas&&!ie.autoFetchSvg&&(c.prefix="fas")}return c},sb());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===it&&(ba.fass||ie.autoFetchSvg)&&(l.prefix="fass",l.iconName=yi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Uo()||"fas"),l}var rI=function(){function e(){hL(this,e),this.definitions={}}return vL(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=ne(ne({},n.definitions[s]||{}),a[s]),Pg(s,a[s]);var l=Bl[Be][s];l&&Pg(l,a[s]),ZT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(i){var a=o[i],s=a.prefix,l=a.iconName,c=a.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),ux=[],ya={},Ta={},oI=Object.keys(Ta);function iI(e,t){var n=t.mixoutsTo;return ux=e,ya={},Object.keys(Ta).forEach(function(r){oI.indexOf(r)===-1&&delete Ta[r]}),ux.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]=="function"&&(n[a]=o[a]),tf(o[a])==="object"&&Object.keys(o[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=o[a][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(a){ya[a]||(ya[a]=[]),ya[a].push(i[a])})}r.provides&&r.provides(Ta)}),n}function Ng(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=ya[e]||[];return i.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Li(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=ya[e]||[];o.forEach(function(i){i.apply(null,n)})}function Xr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ta[e]?Ta[e].apply(null,t):void 0}function Rg(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Uo();if(t)return t=yi(n,t)||t,sx(tj.definitions,n,t)||sx(Wn.styles,n,t)}var tj=new rI,aI=function(){ie.autoReplaceSvg=!1,ie.observeMutations=!1,Li("noAuto")},sI={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return no?(Li("beforeI2svg",t),Xr("pseudoElements2svg",t),Xr("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;ie.autoReplaceSvg===!1&&(ie.autoReplaceSvg=!0),ie.observeMutations=!0,GL(function(){cI({autoReplaceSvgRoot:n}),Li("watch",t)})}},lI={icon:function(t){if(t===null)return null;if(tf(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ip(t[0]);return{prefix:r,iconName:yi(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(ie.cssPrefix,"-"))>-1||t.match(jL))){var o=ap(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||Uo(),iconName:yi(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var i=Uo();return{prefix:i,iconName:yi(i,t)||t}}}},hn={noAuto:aI,config:ie,dom:sI,parse:lI,library:tj,findIconDefinition:Rg,toHtml:hc},cI=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Ue:n;(Object.keys(Wn.styles).length>0||ie.autoFetchSvg)&&no&&ie.autoReplaceSvg&&hn.dom.i2svg({node:r})};function sp(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return hc(r)})}}),Object.defineProperty(e,"node",{get:function(){if(no){var r=Ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function uI(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(ob(a)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};o.style=op(ne(ne({},i),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function dI(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,i=e.symbol,a=i===!0?"".concat(t,"-").concat(ie.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ne(ne({},o),{},{id:a}),children:r}]}]}function lb(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,d=e.extra,p=e.watchable,h=p===void 0?!1:p,g=r.found?r:n,v=g.width,x=g.height,y=o==="fak",b=[ie.replacementClass,i?"".concat(ie.cssPrefix,"-").concat(i):""].filter(function(T){return d.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(d.classes).join(" "),w={children:[],attributes:ne(ne({},d.attributes),{},{"data-prefix":o,"data-icon":i,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(x)})},S=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/x*16*.0625,"em")}:{};h&&(w.attributes[Mi]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||Ul())},children:[l]}),delete w.attributes.title);var C=ne(ne({},w),{},{prefix:o,iconName:i,main:n,mask:r,maskId:c,transform:a,symbol:s,styles:ne(ne({},S),d.styles)}),_=r.found&&n.found?Xr("generateAbstractMask",C)||{children:[],attributes:{}}:Xr("generateAbstractIcon",C)||{children:[],attributes:{}},O=_.children,E=_.attributes;return C.children=O,C.attributes=E,s?dI(C):uI(C)}function dx(e){var t=e.content,n=e.width,r=e.height,o=e.transform,i=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,c=ne(ne(ne({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")});l&&(c[Mi]="");var u=ne({},a.styles);ob(o)&&(u.transform=UL({transform:o,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=op(u);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function fI(e){var t=e.content,n=e.title,r=e.extra,o=ne(ne(ne({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=op(r.styles);i.length>0&&(o.style=i);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Sm=Wn.styles;function Ag(e){var t=e[0],n=e[1],r=e.slice(4),o=J0(r,1),i=o[0],a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(ie.cssPrefix,"-").concat(bi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(bi.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(bi.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:a}}var pI={found:!1,width:512,height:512};function mI(e,t){!BT&&!ie.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Mg(e,t){var n=t;return t==="fa"&&ie.styleDefault!==null&&(t=Uo()),new Promise(function(r,o){if(Xr("missingIconAbstract"),n==="fa"){var i=ej(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Sm[t]&&Sm[t][e]){var a=Sm[t][e];return r(Ag(a))}mI(e,t),r(ne(ne({},pI),{},{icon:ie.showMissingIcons&&e?Xr("missingIconAbstract")||{}:{}}))})}var fx=function(){},Lg=ie.measurePerformance&&ru&&ru.mark&&ru.measure?ru:{mark:fx,measure:fx},Fs='FA "6.5.2"',hI=function(t){return Lg.mark("".concat(Fs," ").concat(t," begins")),function(){return nj(t)}},nj=function(t){Lg.mark("".concat(Fs," ").concat(t," ends")),Lg.measure("".concat(Fs," ").concat(t),"".concat(Fs," ").concat(t," begins"),"".concat(Fs," ").concat(t," ends"))},cb={begin:hI,end:nj},id=function(){};function px(e){var t=e.getAttribute?e.getAttribute(Mi):null;return typeof t=="string"}function gI(e){var t=e.getAttribute?e.getAttribute(eb):null,n=e.getAttribute?e.getAttribute(tb):null;return t&&n}function vI(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(ie.replacementClass)}function bI(){if(ie.autoReplaceSvg===!0)return ad.replace;var e=ad[ie.autoReplaceSvg];return e||ad.replace}function yI(e){return Ue.createElementNS("http://www.w3.org/2000/svg",e)}function xI(e){return Ue.createElement(e)}function rj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?yI:xI:n;if(typeof e=="string")return Ue.createTextNode(e);var o=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){o.setAttribute(a,e.attributes[a])});var i=e.children||[];return i.forEach(function(a){o.appendChild(rj(a,{ceFn:r}))}),o}function wI(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ad={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(o){n.parentNode.insertBefore(rj(o),n)}),n.getAttribute(Mi)===null&&ie.keepOriginalSource){var r=Ue.createComment(wI(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~rb(n).indexOf(ie.replacementClass))return ad.replace(t);var o=new RegExp("".concat(ie.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===ie.replacementClass||l.match(o)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var a=r.map(function(s){return hc(s)}).join(`
`);n.setAttribute(Mi,""),n.innerHTML=a}};function mx(e){e()}function oj(e,t){var n=typeof t=="function"?t:id;if(e.length===0)n();else{var r=mx;ie.mutateApproach===OL&&(r=Ho.requestAnimationFrame||mx),r(function(){var o=bI(),i=cb.begin("mutate");e.map(o),i(),n()})}}var ub=!1;function ij(){ub=!0}function Ig(){ub=!1}var rf=null;function hx(e){if(ox&&ie.observeMutations){var t=e.treeCallback,n=t===void 0?id:t,r=e.nodeCallback,o=r===void 0?id:r,i=e.pseudoElementsCallback,a=i===void 0?id:i,s=e.observeMutationsRoot,l=s===void 0?Ue:s;rf=new ox(function(c){if(!ub){var u=Uo();is(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!px(d.addedNodes[0])&&(ie.searchPseudoElements&&a(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&ie.searchPseudoElements&&a(d.target.parentNode),d.type==="attributes"&&px(d.target)&&~AL.indexOf(d.attributeName))if(d.attributeName==="class"&&gI(d.target)){var p=ap(rb(d.target)),h=p.prefix,g=p.iconName;d.target.setAttribute(eb,h||u),g&&d.target.setAttribute(tb,g)}else vI(d.target)&&o(d.target)})}}),no&&rf.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kI(){rf&&rf.disconnect()}function SI(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,o){var i=o.split(":"),a=i[0],s=i.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function _I(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",o=ap(rb(e));return o.prefix||(o.prefix=Uo()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=tI(o.prefix,e.innerText)||ab(o.prefix,jg(e.innerText))),!o.iconName&&ie.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function CI(e){var t=is(e.attributes).reduce(function(o,i){return o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return ie.autoA11y&&(n?t["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(r||Ul()):(t["aria-hidden"]="true",t.focusable="false")),t}function OI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_I(e),r=n.iconName,o=n.prefix,i=n.rest,a=CI(e),s=Ng("parseNodeAttributes",{},e),l=t.styleParser?SI(e):[];return ne({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:mr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:a}},s)}var EI=Wn.styles;function aj(e){var t=ie.autoReplaceSvg==="nest"?gx(e,{styleParser:!1}):gx(e);return~t.extra.classes.indexOf(HT)?Xr("generateLayersText",e,t):Xr("generateSvgReplacementMutation",e,t)}var Wo=new Set;nb.map(function(e){Wo.add("fa-".concat(e))});Object.keys(Fl[Be]).map(Wo.add.bind(Wo));Object.keys(Fl[it]).map(Wo.add.bind(Wo));Wo=pc(Wo);function vx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!no)return Promise.resolve();var n=Ue.documentElement.classList,r=function(d){return n.add("".concat(ix,"-").concat(d))},o=function(d){return n.remove("".concat(ix,"-").concat(d))},i=ie.autoFetchSvg?Wo:nb.map(function(u){return"fa-".concat(u)}).concat(Object.keys(EI));i.includes("fa")||i.push("fa");var a=[".".concat(HT,":not([").concat(Mi,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Mi,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=is(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),o("complete");else return Promise.resolve();var l=cb.begin("onTree"),c=s.reduce(function(u,d){try{var p=aj(d);p&&u.push(p)}catch(h){BT||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(p){oj(p,function(){r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),d(p)})})}function TI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;aj(e).then(function(n){n&&oj([n],t)})}function jI(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rg(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Rg(o||{})),e(r,ne(ne({},n),{},{mask:o}))}}var PI=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?mr:r,i=n.symbol,a=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,d=n.title,p=d===void 0?null:d,h=n.titleId,g=h===void 0?null:h,v=n.classes,x=v===void 0?[]:v,y=n.attributes,b=y===void 0?{}:y,w=n.styles,S=w===void 0?{}:w;if(t){var C=t.prefix,_=t.iconName,O=t.icon;return sp(ne({type:"icon"},t),function(){return Li("beforeDOMElementCreation",{iconDefinition:t,params:n}),ie.autoA11y&&(p?b["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(g||Ul()):(b["aria-hidden"]="true",b.focusable="false")),lb({icons:{main:Ag(O),mask:l?Ag(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:_,transform:ne(ne({},mr),o),symbol:a,title:p,maskId:u,titleId:g,extra:{attributes:b,styles:S,classes:x}})})}},NI={mixout:function(){return{icon:jI(PI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vx,n.nodeCallback=TI,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,o=r===void 0?Ue:r,i=n.callback,a=i===void 0?function(){}:i;return vx(o,a)},t.generateSvgReplacementMutation=function(n,r){var o=r.iconName,i=r.title,a=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,d=r.maskId,p=r.extra;return new Promise(function(h,g){Promise.all([Mg(o,s),u.iconName?Mg(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=J0(v,2),y=x[0],b=x[1];h([n,lb({icons:{main:y,mask:b},prefix:s,iconName:o,transform:l,symbol:c,maskId:d,title:i,titleId:a,extra:p,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.transform,s=n.styles,l=op(s);l.length>0&&(o.style=l);var c;return ob(a)&&(c=Xr("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:o}}}},RI={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,i=o===void 0?[]:o;return sp({type:"layer"},function(){Li("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ie.cssPrefix,"-layers")].concat(pc(i)).join(" ")},children:a}]})}}}},AI={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.title,i=o===void 0?null:o,a=r.classes,s=a===void 0?[]:a,l=r.attributes,c=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return sp({type:"counter",content:n},function(){return Li("beforeDOMElementCreation",{content:n,params:r}),fI({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(ie.cssPrefix,"-layers-counter")].concat(pc(s))}})})}}}},MI={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,i=o===void 0?mr:o,a=r.title,s=a===void 0?null:a,l=r.classes,c=l===void 0?[]:l,u=r.attributes,d=u===void 0?{}:u,p=r.styles,h=p===void 0?{}:p;return sp({type:"text",content:n},function(){return Li("beforeDOMElementCreation",{content:n,params:r}),dx({content:n,transform:ne(ne({},mr),i),title:s,extra:{attributes:d,styles:h,classes:["".concat(ie.cssPrefix,"-layers-text")].concat(pc(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var o=r.title,i=r.transform,a=r.extra,s=null,l=null;if($T){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return ie.autoA11y&&!o&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,dx({content:n.innerHTML,width:s,height:l,transform:i,title:o,extra:a,watchable:!0})])}}},LI=new RegExp('"',"ug"),bx=[1105920,1112319];function II(e){var t=e.replace(LI,""),n=qL(t,0),r=n>=bx[0]&&n<=bx[1],o=t.length===2?t[0]===t[1]:!1;return{value:jg(o?t[0]:t),isSecondary:r||o}}function yx(e,t){var n="".concat(CL).concat(t.replace(":","-"));return new Promise(function(r,o){if(e.getAttribute(n)!==null)return r();var i=is(e.children),a=i.filter(function(O){return O.getAttribute(Tg)===t})[0],s=Ho.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(PL),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&u!=="none"&&u!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?it:Be,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?zl[p][l[2].toLowerCase()]:NL[p][c],g=II(d),v=g.value,x=g.isSecondary,y=l[0].startsWith("FontAwesome"),b=ab(h,v),w=b;if(y){var S=nI(v);S.iconName&&S.prefix&&(b=S.iconName,h=S.prefix)}if(b&&!x&&(!a||a.getAttribute(eb)!==h||a.getAttribute(tb)!==w)){e.setAttribute(n,w),a&&e.removeChild(a);var C=OI(),_=C.extra;_.attributes[Tg]=t,Mg(b,h).then(function(O){var E=lb(ne(ne({},C),{},{icons:{main:O,mask:sb()},prefix:h,iconName:w,extra:_,watchable:!0})),T=Ue.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=E.map(function(P){return hc(P)}).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function DI(e){return Promise.all([yx(e,"::before"),yx(e,"::after")])}function $I(e){return e.parentNode!==document.head&&!~EL.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tg)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xx(e){if(no)return new Promise(function(t,n){var r=is(e.querySelectorAll("*")).filter($I).map(DI),o=cb.begin("searchPseudoElements");ij(),Promise.all(r).then(function(){o(),Ig(),t()}).catch(function(){o(),Ig(),n()})})}var FI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xx,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?Ue:r;ie.searchPseudoElements&&xx(o)}}},wx=!1,zI={mixout:function(){return{dom:{unwatch:function(){ij(),wx=!0}}}},hooks:function(){return{bootstrap:function(){hx(Ng("mutationObserverCallbacks",{}))},noAuto:function(){kI()},watch:function(n){var r=n.observeMutationsRoot;wx?Ig():hx(Ng("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},kx=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,o){var i=o.toLowerCase().split("-"),a=i[0],s=i.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},BI={mixout:function(){return{parse:{transform:function(n){return kx(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=kx(o)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,i=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),c="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),u="rotate(".concat(o.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(a/2*-1," -256)")},h={outer:s,inner:d,path:p};return{tag:"g",attributes:ne({},h.outer),children:[{tag:"g",attributes:ne({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:ne(ne({},r.icon.attributes),h.path)}]}]}}}},_m={x:0,y:0,width:"100%",height:"100%"};function Sx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function HI(e){return e.tag==="g"?e.children:[e]}var UI={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),i=o?ap(o.split(" ").map(function(a){return a.trim()})):sb();return i.prefix||(i.prefix=Uo()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,d=a.width,p=a.icon,h=HL({transform:l,containerWidth:d,iconWidth:c}),g={tag:"rect",attributes:ne(ne({},_m),{},{fill:"white"})},v=u.children?{children:u.children.map(Sx)}:{},x={tag:"g",attributes:ne({},h.inner),children:[Sx(ne({tag:u.tag,attributes:ne(ne({},u.attributes),h.path)},v))]},y={tag:"g",attributes:ne({},h.outer),children:[x]},b="mask-".concat(s||Ul()),w="clip-".concat(s||Ul()),S={tag:"mask",attributes:ne(ne({},_m),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,y]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:HI(p)},S]};return r.push(C,{tag:"rect",attributes:ne({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(b,")")},_m)}),{children:r,attributes:o}}}},WI={provides:function(t){var n=!1;Ho.matchMedia&&(n=Ho.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:ne(ne({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=ne(ne({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:ne(ne({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:ne(ne({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ne(ne({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:ne(ne({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:ne(ne({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:ne(ne({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ne(ne({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},VI={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),i=o===null?!1:o===""?!0:o;return n.symbol=i,n}}}},YI=[VL,NI,RI,AI,MI,FI,zI,BI,UI,WI,VI];iI(YI,{mixoutsTo:hn});hn.noAuto;hn.config;hn.library;hn.dom;var Dg=hn.parse;hn.findIconDefinition;hn.toHtml;var GI=hn.icon;hn.layer;hn.text;hn.counter;function _x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ur(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_x(Object(n),!0).forEach(function(r){xa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_x(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function of(e){"@babel/helpers - typeof";return of=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},of(e)}function xa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XI(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function qI(e,t){if(e==null)return{};var n=XI(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $g(e){return KI(e)||QI(e)||JI(e)||ZI()}function KI(e){if(Array.isArray(e))return Fg(e)}function QI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function JI(e,t){if(e){if(typeof e=="string")return Fg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fg(e,t)}}function Fg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ZI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eD(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,d=e.pulse,p=e.fixedWidth,h=e.inverse,g=e.border,v=e.listItem,x=e.flip,y=e.size,b=e.rotation,w=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":h,"fa-border":g,"fa-li":v,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},xa(t,"fa-".concat(y),typeof y<"u"&&y!==null),xa(t,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),xa(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),xa(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(C){return S[C]?C:null}).filter(function(C){return C})}function tD(e){return e=e-0,e===e}function sj(e){return tD(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var nD=["style"];function rD(e){return e.charAt(0).toUpperCase()+e.slice(1)}function oD(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=sj(n.slice(0,r)),i=n.slice(r+1).trim();return o.startsWith("webkit")?t[rD(o)]=i:t[o]=i,t},{})}function lj(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return lj(e,l)}),o=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=oD(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[sj(c)]=u}return l},{attrs:{}}),i=n.style,a=i===void 0?{}:i,s=qI(n,nD);return o.attrs.style=ur(ur({},o.attrs.style),a),e.apply(void 0,[t.tag,ur(ur({},o.attrs),s)].concat($g(r)))}var cj=!1;try{cj=!0}catch{}function iD(){if(!cj&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Cx(e){if(e&&of(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dg.icon)return Dg.icon(e);if(e===null)return null;if(e&&of(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Cm(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xa({},e,t):{}}var Ox={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Do=Y.forwardRef(function(e,t){var n=ur(ur({},Ox),e),r=n.icon,o=n.mask,i=n.symbol,a=n.className,s=n.title,l=n.titleId,c=n.maskId,u=Cx(r),d=Cm("classes",[].concat($g(eD(n)),$g((a||"").split(" ")))),p=Cm("transform",typeof n.transform=="string"?Dg.transform(n.transform):n.transform),h=Cm("mask",Cx(o)),g=GI(u,ur(ur(ur(ur({},d),p),h),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!g)return iD("Could not find icon",u),null;var v=g.abstract,x={ref:t};return Object.keys(n).forEach(function(y){Ox.hasOwnProperty(y)||(x[y]=n[y])}),aD(v[0],x)});Do.displayName="FontAwesomeIcon";Do.propTypes={beat:f.bool,border:f.bool,beatFade:f.bool,bounce:f.bool,className:f.string,fade:f.bool,flash:f.bool,mask:f.oneOfType([f.object,f.array,f.string]),maskId:f.string,fixedWidth:f.bool,inverse:f.bool,flip:f.oneOf([!0,!1,"horizontal","vertical","both"]),icon:f.oneOfType([f.object,f.array,f.string]),listItem:f.bool,pull:f.oneOf(["right","left"]),pulse:f.bool,rotation:f.oneOf([0,90,180,270]),shake:f.bool,size:f.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:f.bool,spinPulse:f.bool,spinReverse:f.bool,symbol:f.oneOfType([f.bool,f.string]),title:f.string,titleId:f.string,transform:f.oneOfType([f.string,f.object]),swapOpacity:f.bool};var aD=lj.bind(null,Y.createElement),sD={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},lD=sD,cD={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},uD=cD,dD={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},fD={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},pD={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},mD={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},hD={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},gD={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};const as="/assets/letter-n-B5zHijfY.png",vD=()=>{const[e,t]=k.useState(()=>{const r=localStorage.getItem("darkMode");return r?JSON.parse(r):!1});k.useEffect(()=>{e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",JSON.stringify(e))},[e]);const n=()=>{t(!e)};return m.jsxs("div",{children:[m.jsx(nu,{expand:"lg",className:"bg-body-tertiary fixed-top",children:m.jsx(Qt,{fluid:!0,className:"containerNotic",children:m.jsxs(Qt,{className:"container-head",children:[m.jsxs(nu.Brand,{as:_n,to:"/",children:[m.jsx("img",{src:as,width:"30",height:"30",className:"d-inline-block align-top",alt:"Notic logo"}),m.jsx("span",{className:"fw-bold",children:"Notic"})]}),m.jsx(nu.Toggle,{"aria-controls":"basic-navbar-nav"}),m.jsx(nu.Collapse,{id:"basic-navbar-nav",className:"navLink align-items-end",children:m.jsxs(Zi,{className:"ms-auto",children:[m.jsx(Zi.Link,{as:_n,to:"/",className:"custom-nav-link",children:"Home"}),m.jsx(Zi.Link,{as:_n,to:"/aboutUs",className:"custom-nav-link",children:"About Us"}),m.jsx(Zi.Link,{as:_n,to:"/contactUs",className:"custom-nav-link",children:"Contact Us"}),m.jsx(Zi.Link,{as:_n,to:"/login",className:"custom-login-link",children:"Login"}),m.jsx(Zi.Link,{onClick:n,className:"custom-nav-link",children:m.jsx(Do,{icon:e?pD:gD})})]})})]})})}),m.jsx("div",{className:"content",children:m.jsx(RA,{})}),m.jsx("footer",{className:"footer",children:m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"row footer-top",children:[m.jsxs("div",{className:"col-md-3",children:[m.jsxs("div",{className:"footer-logo-container",children:[m.jsx("img",{src:"/letter-n.png",alt:"Notic Logo",className:"footer-logo"}),m.jsx("h3",{className:"fw-bold",children:"Notic"})]}),m.jsx("p",{children:"Get Noticed with Notic."})]}),m.jsxs("div",{className:"col-md-2",children:[m.jsx("h5",{className:"fw-bold",children:"Products"}),m.jsxs("ul",{className:"list-unstyled",children:[m.jsx("li",{children:m.jsx("a",{href:"#",children:"Overview"})}),m.jsx("li",{children:m.jsx("a",{href:"#",children:"Supplier"})})]})]}),m.jsxs("div",{className:"col-md-2",children:[m.jsx("h5",{className:"fw-bold",children:"Company"}),m.jsxs("ul",{className:"list-unstyled",children:[m.jsx("li",{children:m.jsx("a",{href:"/aboutUs",children:"About us"})}),m.jsx("li",{children:m.jsx("a",{href:"/contactUs",children:"Contact us"})})]})]}),m.jsxs("div",{className:"col-md-2",children:[m.jsx("h5",{className:"fw-bold",children:"Further Information"}),m.jsxs("ul",{className:"list-unstyled",children:[m.jsx("li",{children:m.jsx("a",{href:"#",children:"Terms & Conditions"})}),m.jsx("li",{children:m.jsx("a",{href:"#",children:"Privacy Policy"})})]})]}),m.jsxs("div",{className:"col-md-3",children:[m.jsx("h5",{className:"fw-bold text-center",children:"Follow us"}),m.jsxs("div",{className:"social-icons",children:[m.jsx("a",{href:"#",children:m.jsx("i",{className:"fab fa-facebook-f"})}),m.jsx("a",{href:"#",children:m.jsx("i",{className:"fab fa-twitter"})}),m.jsx("a",{href:"#",children:m.jsx("i",{className:"fab fa-linkedin-in"})}),m.jsx("a",{href:"#",children:m.jsx("i",{className:"fab fa-github"})}),m.jsx("a",{href:"#",children:m.jsx("i",{className:"fab fa-angellist"})})]})]})]}),m.jsx("div",{className:"footer-bottom text-center mt-3",children:m.jsx("p",{children:"© 2024 Notic. All rights reserved."})})]})})]})},he=k.forwardRef(({as:e,bsPrefix:t,variant:n="primary",size:r,active:o=!1,disabled:i=!1,className:a,...s},l)=>{const c=fe(t,"btn"),[u,{tagName:d}]=H0({tagName:e,disabled:i,...s}),p=d;return m.jsx(p,{...u,...s,ref:l,disabled:i,className:ee(a,c,o&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,s.href&&i&&"disabled")})});he.displayName="Button";const db=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"card-body"),m.jsx(n,{ref:o,className:ee(e,t),...r})));db.displayName="CardBody";const uj=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"card-footer"),m.jsx(n,{ref:o,className:ee(e,t),...r})));uj.displayName="CardFooter";const dj=k.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const i=fe(e,"card-header"),a=k.useMemo(()=>({cardHeaderBsPrefix:i}),[i]);return m.jsx(U0.Provider,{value:a,children:m.jsx(n,{ref:o,...r,className:ee(t,i)})})});dj.displayName="CardHeader";const fj=k.forwardRef(({bsPrefix:e,className:t,variant:n,as:r="img",...o},i)=>{const a=fe(e,"card-img");return m.jsx(r,{ref:i,className:ee(n?`${a}-${n}`:a,t),...o})});fj.displayName="CardImg";const pj=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"card-img-overlay"),m.jsx(n,{ref:o,className:ee(e,t),...r})));pj.displayName="CardImgOverlay";const mj=k.forwardRef(({className:e,bsPrefix:t,as:n="a",...r},o)=>(t=fe(t,"card-link"),m.jsx(n,{ref:o,className:ee(e,t),...r})));mj.displayName="CardLink";const bD=rp("h6"),hj=k.forwardRef(({className:e,bsPrefix:t,as:n=bD,...r},o)=>(t=fe(t,"card-subtitle"),m.jsx(n,{ref:o,className:ee(e,t),...r})));hj.displayName="CardSubtitle";const gj=k.forwardRef(({className:e,bsPrefix:t,as:n="p",...r},o)=>(t=fe(t,"card-text"),m.jsx(n,{ref:o,className:ee(e,t),...r})));gj.displayName="CardText";const yD=rp("h5"),vj=k.forwardRef(({className:e,bsPrefix:t,as:n=yD,...r},o)=>(t=fe(t,"card-title"),m.jsx(n,{ref:o,className:ee(e,t),...r})));vj.displayName="CardTitle";const bj=k.forwardRef(({bsPrefix:e,className:t,bg:n,text:r,border:o,body:i=!1,children:a,as:s="div",...l},c)=>{const u=fe(e,"card");return m.jsx(s,{ref:c,...l,className:ee(t,u,n&&`bg-${n}`,r&&`text-${r}`,o&&`border-${o}`),children:i?m.jsx(db,{children:a}):a})});bj.displayName="Card";const oe=Object.assign(bj,{Img:fj,Title:vj,Subtitle:hj,Body:db,Link:mj,Text:gj,Header:dj,Footer:uj,ImgOverlay:pj}),zg=2**31-1;function yj(e,t,n){const r=n-Date.now();e.current=r<=zg?setTimeout(t,r):setTimeout(()=>yj(e,t,n),zg)}function xD(){const e=W0(),t=k.useRef();return G0(()=>clearTimeout(t.current)),k.useMemo(()=>{const n=()=>clearTimeout(t.current);function r(o,i=0){e()&&(n(),i<=zg?t.current=setTimeout(o,i):yj(t,o,Date.now()+i))}return{set:r,clear:n,handleRef:t}},[])}function wD(e,t){return k.Children.toArray(e).some(n=>k.isValidElement(n)&&n.type===t)}function kD({as:e,bsPrefix:t,className:n,...r}){t=fe(t,"col");const o=XE(),i=qE(),a=[],s=[];return o.forEach(l=>{const c=r[l];delete r[l];let u,d,p;typeof c=="object"&&c!=null?{span:u,offset:d,order:p}=c:u=c;const h=l!==i?`-${l}`:"";u&&a.push(u===!0?`${t}${h}`:`${t}${h}-${u}`),p!=null&&s.push(`order${h}-${p}`),d!=null&&s.push(`offset${h}-${d}`)}),[{...r,className:ee(n,...a,...s)},{as:e,bsPrefix:t,spans:a}]}const Le=k.forwardRef((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:i,spans:a}]=kD(e);return m.jsx(o,{...r,ref:t,className:ee(n,!a.length&&i)})});Le.displayName="Col";var Ex=Object.prototype.hasOwnProperty;function Tx(e,t,n){for(n of e.keys())if(al(n,t))return n}function al(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&al(e[r],t[r]););return r===-1}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if(o=r,o&&typeof o=="object"&&(o=Tx(t,o),!o)||!t.has(o))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if(o=r[0],o&&typeof o=="object"&&(o=Tx(t,o),!o)||!al(r[1],t.get(o)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return r===-1}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return r===-1}if(!n||typeof e=="object"){r=0;for(n in e)if(Ex.call(e,n)&&++r&&!Ex.call(t,n)||!(n in t)||!al(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!==e&&t!==t}function SD(e){const t=W0();return[e[0],k.useCallback(n=>{if(t())return e[1](n)},[t,e[1]])]}var Jt="top",Pn="bottom",Nn="right",Zt="left",fb="auto",gc=[Jt,Pn,Nn,Zt],Ba="start",Wl="end",_D="clippingParents",xj="viewport",ks="popper",CD="reference",jx=gc.reduce(function(e,t){return e.concat([t+"-"+Ba,t+"-"+Wl])},[]),wj=[].concat(gc,[fb]).reduce(function(e,t){return e.concat([t,t+"-"+Ba,t+"-"+Wl])},[]),OD="beforeRead",ED="read",TD="afterRead",jD="beforeMain",PD="main",ND="afterMain",RD="beforeWrite",AD="write",MD="afterWrite",LD=[OD,ED,TD,jD,PD,ND,RD,AD,MD];function yr(e){return e.split("-")[0]}function dn(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ii(e){var t=dn(e).Element;return e instanceof t||e instanceof Element}function xr(e){var t=dn(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function pb(e){if(typeof ShadowRoot>"u")return!1;var t=dn(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var Si=Math.max,af=Math.min,Ha=Math.round;function Bg(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function kj(){return!/^((?!chrome|android).)*safari/i.test(Bg())}function Ua(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&xr(e)&&(o=e.offsetWidth>0&&Ha(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ha(r.height)/e.offsetHeight||1);var a=Ii(e)?dn(e):window,s=a.visualViewport,l=!kj()&&n,c=(r.left+(l&&s?s.offsetLeft:0))/o,u=(r.top+(l&&s?s.offsetTop:0))/i,d=r.width/o,p=r.height/i;return{width:d,height:p,top:u,right:c+d,bottom:u+p,left:c,x:c,y:u}}function mb(e){var t=Ua(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Sj(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&pb(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Vo(e){return e?(e.nodeName||"").toLowerCase():null}function qr(e){return dn(e).getComputedStyle(e)}function ID(e){return["table","td","th"].indexOf(Vo(e))>=0}function Zo(e){return((Ii(e)?e.ownerDocument:e.document)||window.document).documentElement}function lp(e){return Vo(e)==="html"?e:e.assignedSlot||e.parentNode||(pb(e)?e.host:null)||Zo(e)}function Px(e){return!xr(e)||qr(e).position==="fixed"?null:e.offsetParent}function DD(e){var t=/firefox/i.test(Bg()),n=/Trident/i.test(Bg());if(n&&xr(e)){var r=qr(e);if(r.position==="fixed")return null}var o=lp(e);for(pb(o)&&(o=o.host);xr(o)&&["html","body"].indexOf(Vo(o))<0;){var i=qr(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function vc(e){for(var t=dn(e),n=Px(e);n&&ID(n)&&qr(n).position==="static";)n=Px(n);return n&&(Vo(n)==="html"||Vo(n)==="body"&&qr(n).position==="static")?t:n||DD(e)||t}function hb(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function sl(e,t,n){return Si(e,af(t,n))}function $D(e,t,n){var r=sl(e,t,n);return r>n?n:r}function _j(){return{top:0,right:0,bottom:0,left:0}}function Cj(e){return Object.assign({},_j(),e)}function Oj(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var FD=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Cj(typeof t!="number"?t:Oj(t,gc))};function zD(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=yr(n.placement),l=hb(s),c=[Zt,Nn].indexOf(s)>=0,u=c?"height":"width";if(!(!i||!a)){var d=FD(o.padding,n),p=mb(i),h=l==="y"?Jt:Zt,g=l==="y"?Pn:Nn,v=n.rects.reference[u]+n.rects.reference[l]-a[l]-n.rects.popper[u],x=a[l]-n.rects.reference[l],y=vc(i),b=y?l==="y"?y.clientHeight||0:y.clientWidth||0:0,w=v/2-x/2,S=d[h],C=b-p[u]-d[g],_=b/2-p[u]/2+w,O=sl(S,_,C),E=l;n.modifiersData[r]=(t={},t[E]=O,t.centerOffset=O-_,t)}}function BD(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Sj(t.elements.popper,o)&&(t.elements.arrow=o))}const HD={name:"arrow",enabled:!0,phase:"main",fn:zD,effect:BD,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Wa(e){return e.split("-")[1]}var UD={top:"auto",right:"auto",bottom:"auto",left:"auto"};function WD(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:Ha(n*o)/o||0,y:Ha(r*o)/o||0}}function Nx(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,d=e.isFixed,p=a.x,h=p===void 0?0:p,g=a.y,v=g===void 0?0:g,x=typeof u=="function"?u({x:h,y:v}):{x:h,y:v};h=x.x,v=x.y;var y=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=Zt,S=Jt,C=window;if(c){var _=vc(n),O="clientHeight",E="clientWidth";if(_===dn(n)&&(_=Zo(n),qr(_).position!=="static"&&s==="absolute"&&(O="scrollHeight",E="scrollWidth")),_=_,o===Jt||(o===Zt||o===Nn)&&i===Wl){S=Pn;var T=d&&_===C&&C.visualViewport?C.visualViewport.height:_[O];v-=T-r.height,v*=l?1:-1}if(o===Zt||(o===Jt||o===Pn)&&i===Wl){w=Nn;var P=d&&_===C&&C.visualViewport?C.visualViewport.width:_[E];h-=P-r.width,h*=l?1:-1}}var A=Object.assign({position:s},c&&UD),I=u===!0?WD({x:h,y:v},dn(n)):{x:h,y:v};if(h=I.x,v=I.y,l){var X;return Object.assign({},A,(X={},X[S]=b?"0":"",X[w]=y?"0":"",X.transform=(C.devicePixelRatio||1)<=1?"translate("+h+"px, "+v+"px)":"translate3d("+h+"px, "+v+"px, 0)",X))}return Object.assign({},A,(t={},t[S]=b?v+"px":"",t[w]=y?h+"px":"",t.transform="",t))}function VD(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,l=s===void 0?!0:s,c={placement:yr(t.placement),variation:Wa(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Nx(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Nx(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const YD={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:VD,data:{}};var fu={passive:!0};function GD(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,l=dn(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",n.update,fu)}),s&&l.addEventListener("resize",n.update,fu),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",n.update,fu)}),s&&l.removeEventListener("resize",n.update,fu)}}const XD={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:GD,data:{}};var qD={left:"right",right:"left",bottom:"top",top:"bottom"};function sd(e){return e.replace(/left|right|bottom|top/g,function(t){return qD[t]})}var KD={start:"end",end:"start"};function Rx(e){return e.replace(/start|end/g,function(t){return KD[t]})}function gb(e){var t=dn(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function vb(e){return Ua(Zo(e)).left+gb(e).scrollLeft}function QD(e,t){var n=dn(e),r=Zo(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var c=kj();(c||!c&&t==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s+vb(e),y:l}}function JD(e){var t,n=Zo(e),r=gb(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=Si(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Si(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+vb(e),l=-r.scrollTop;return qr(o||n).direction==="rtl"&&(s+=Si(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}function bb(e){var t=qr(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Ej(e){return["html","body","#document"].indexOf(Vo(e))>=0?e.ownerDocument.body:xr(e)&&bb(e)?e:Ej(lp(e))}function ll(e,t){var n;t===void 0&&(t=[]);var r=Ej(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=dn(r),a=o?[i].concat(i.visualViewport||[],bb(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ll(lp(a)))}function Hg(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ZD(e,t){var n=Ua(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ax(e,t,n){return t===xj?Hg(QD(e,n)):Ii(t)?ZD(t,n):Hg(JD(Zo(e)))}function e$(e){var t=ll(lp(e)),n=["absolute","fixed"].indexOf(qr(e).position)>=0,r=n&&xr(e)?vc(e):e;return Ii(r)?t.filter(function(o){return Ii(o)&&Sj(o,r)&&Vo(o)!=="body"}):[]}function t$(e,t,n,r){var o=t==="clippingParents"?e$(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(l,c){var u=Ax(e,c,r);return l.top=Si(u.top,l.top),l.right=af(u.right,l.right),l.bottom=af(u.bottom,l.bottom),l.left=Si(u.left,l.left),l},Ax(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Tj(e){var t=e.reference,n=e.element,r=e.placement,o=r?yr(r):null,i=r?Wa(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(o){case Jt:l={x:a,y:t.y-n.height};break;case Pn:l={x:a,y:t.y+t.height};break;case Nn:l={x:t.x+t.width,y:s};break;case Zt:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var c=o?hb(o):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case Ba:l[c]=l[c]-(t[u]/2-n[u]/2);break;case Wl:l[c]=l[c]+(t[u]/2-n[u]/2);break}}return l}function Vl(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,l=s===void 0?_D:s,c=n.rootBoundary,u=c===void 0?xj:c,d=n.elementContext,p=d===void 0?ks:d,h=n.altBoundary,g=h===void 0?!1:h,v=n.padding,x=v===void 0?0:v,y=Cj(typeof x!="number"?x:Oj(x,gc)),b=p===ks?CD:ks,w=e.rects.popper,S=e.elements[g?b:p],C=t$(Ii(S)?S:S.contextElement||Zo(e.elements.popper),l,u,a),_=Ua(e.elements.reference),O=Tj({reference:_,element:w,strategy:"absolute",placement:o}),E=Hg(Object.assign({},w,O)),T=p===ks?E:_,P={top:C.top-T.top+y.top,bottom:T.bottom-C.bottom+y.bottom,left:C.left-T.left+y.left,right:T.right-C.right+y.right},A=e.modifiersData.offset;if(p===ks&&A){var I=A[o];Object.keys(P).forEach(function(X){var H=[Nn,Pn].indexOf(X)>=0?1:-1,V=[Jt,Pn].indexOf(X)>=0?"y":"x";P[X]+=I[V]*H})}return P}function n$(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?wj:l,u=Wa(r),d=u?s?jx:jx.filter(function(g){return Wa(g)===u}):gc,p=d.filter(function(g){return c.indexOf(g)>=0});p.length===0&&(p=d);var h=p.reduce(function(g,v){return g[v]=Vl(e,{placement:v,boundary:o,rootBoundary:i,padding:a})[yr(v)],g},{});return Object.keys(h).sort(function(g,v){return h[g]-h[v]})}function r$(e){if(yr(e)===fb)return[];var t=sd(e);return[Rx(e),t,Rx(t)]}function o$(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,l=n.fallbackPlacements,c=n.padding,u=n.boundary,d=n.rootBoundary,p=n.altBoundary,h=n.flipVariations,g=h===void 0?!0:h,v=n.allowedAutoPlacements,x=t.options.placement,y=yr(x),b=y===x,w=l||(b||!g?[sd(x)]:r$(x)),S=[x].concat(w).reduce(function(D,z){return D.concat(yr(z)===fb?n$(t,{placement:z,boundary:u,rootBoundary:d,padding:c,flipVariations:g,allowedAutoPlacements:v}):z)},[]),C=t.rects.reference,_=t.rects.popper,O=new Map,E=!0,T=S[0],P=0;P<S.length;P++){var A=S[P],I=yr(A),X=Wa(A)===Ba,H=[Jt,Pn].indexOf(I)>=0,V=H?"width":"height",J=Vl(t,{placement:A,boundary:u,rootBoundary:d,altBoundary:p,padding:c}),M=H?X?Nn:Zt:X?Pn:Jt;C[V]>_[V]&&(M=sd(M));var N=sd(M),U=[];if(i&&U.push(J[I]<=0),s&&U.push(J[M]<=0,J[N]<=0),U.every(function(D){return D})){T=A,E=!1;break}O.set(A,U)}if(E)for(var Q=g?3:1,Z=function(z){var j=S.find(function(le){var G=O.get(le);if(G)return G.slice(0,z).every(function(Ce){return Ce})});if(j)return T=j,"break"},$=Q;$>0;$--){var F=Z($);if(F==="break")break}t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}}const i$={name:"flip",enabled:!0,phase:"main",fn:o$,requiresIfExists:["offset"],data:{_skip:!1}};function Mx(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Lx(e){return[Jt,Nn,Pn,Zt].some(function(t){return e[t]>=0})}function a$(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Vl(t,{elementContext:"reference"}),s=Vl(t,{altBoundary:!0}),l=Mx(a,r),c=Mx(s,o,i),u=Lx(l),d=Lx(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}const s$={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:a$};function l$(e,t,n){var r=yr(e),o=[Zt,Jt].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[Zt,Nn].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function c$(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=wj.reduce(function(u,d){return u[d]=l$(d,t.rects,i),u},{}),s=a[t.placement],l=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}const u$={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:c$};function d$(e){var t=e.state,n=e.name;t.modifiersData[n]=Tj({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const f$={name:"popperOffsets",enabled:!0,phase:"read",fn:d$,data:{}};function p$(e){return e==="x"?"y":"x"}function m$(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,d=n.padding,p=n.tether,h=p===void 0?!0:p,g=n.tetherOffset,v=g===void 0?0:g,x=Vl(t,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),y=yr(t.placement),b=Wa(t.placement),w=!b,S=hb(y),C=p$(S),_=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,T=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(_){if(i){var X,H=S==="y"?Jt:Zt,V=S==="y"?Pn:Nn,J=S==="y"?"height":"width",M=_[S],N=M+x[H],U=M-x[V],Q=h?-E[J]/2:0,Z=b===Ba?O[J]:E[J],$=b===Ba?-E[J]:-O[J],F=t.elements.arrow,D=h&&F?mb(F):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:_j(),j=z[H],le=z[V],G=sl(0,O[J],D[J]),Ce=w?O[J]/2-Q-G-j-P.mainAxis:Z-G-j-P.mainAxis,ge=w?-O[J]/2+Q+G+le+P.mainAxis:$+G+le+P.mainAxis,xe=t.elements.arrow&&vc(t.elements.arrow),ce=xe?S==="y"?xe.clientTop||0:xe.clientLeft||0:0,Re=(X=A==null?void 0:A[S])!=null?X:0,Ae=M+Ce-Re-ce,ae=M+ge-Re,Ye=sl(h?af(N,Ae):N,M,h?Si(U,ae):U);_[S]=Ye,I[S]=Ye-M}if(s){var we,lt=S==="x"?Jt:Zt,Cr=S==="x"?Pn:Nn,Me=_[C],In=C==="y"?"height":"width",nr=Me+x[lt],Ot=Me-x[Cr],ue=[Jt,Zt].indexOf(y)!==-1,Ie=(we=A==null?void 0:A[C])!=null?we:0,ke=ue?nr:Me-O[In]-E[In]-Ie+P.altAxis,tn=ue?Me+O[In]+E[In]-Ie-P.altAxis:Ot,zt=h&&ue?$D(ke,Me,tn):sl(h?ke:nr,Me,h?tn:Ot);_[C]=zt,I[C]=zt-Me}t.modifiersData[r]=I}}const h$={name:"preventOverflow",enabled:!0,phase:"main",fn:m$,requiresIfExists:["offset"]};function g$(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function v$(e){return e===dn(e)||!xr(e)?gb(e):g$(e)}function b$(e){var t=e.getBoundingClientRect(),n=Ha(t.width)/e.offsetWidth||1,r=Ha(t.height)/e.offsetHeight||1;return n!==1||r!==1}function y$(e,t,n){n===void 0&&(n=!1);var r=xr(t),o=xr(t)&&b$(t),i=Zo(t),a=Ua(e,o,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Vo(t)!=="body"||bb(i))&&(s=v$(t)),xr(t)?(l=Ua(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=vb(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function x$(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&o(l)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function w$(e){var t=x$(e);return LD.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function k$(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function S$(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Ix={placement:"bottom",modifiers:[],strategy:"absolute"};function Dx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function _$(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?Ix:o;return function(s,l,c){c===void 0&&(c=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ix,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},d=[],p=!1,h={state:u,setOptions:function(y){var b=typeof y=="function"?y(u.options):y;v(),u.options=Object.assign({},i,u.options,b),u.scrollParents={reference:Ii(s)?ll(s):s.contextElement?ll(s.contextElement):[],popper:ll(l)};var w=w$(S$([].concat(r,u.options.modifiers)));return u.orderedModifiers=w.filter(function(S){return S.enabled}),g(),h.update()},forceUpdate:function(){if(!p){var y=u.elements,b=y.reference,w=y.popper;if(Dx(b,w)){u.rects={reference:y$(b,vc(w),u.options.strategy==="fixed"),popper:mb(w)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(P){return u.modifiersData[P.name]=Object.assign({},P.data)});for(var S=0;S<u.orderedModifiers.length;S++){if(u.reset===!0){u.reset=!1,S=-1;continue}var C=u.orderedModifiers[S],_=C.fn,O=C.options,E=O===void 0?{}:O,T=C.name;typeof _=="function"&&(u=_({state:u,options:E,name:T,instance:h})||u)}}}},update:k$(function(){return new Promise(function(x){h.forceUpdate(),x(u)})}),destroy:function(){v(),p=!0}};if(!Dx(s,l))return h;h.setOptions(c).then(function(x){!p&&c.onFirstUpdate&&c.onFirstUpdate(x)});function g(){u.orderedModifiers.forEach(function(x){var y=x.name,b=x.options,w=b===void 0?{}:b,S=x.effect;if(typeof S=="function"){var C=S({state:u,name:y,instance:h,options:w}),_=function(){};d.push(C||_)}})}function v(){d.forEach(function(x){return x()}),d=[]}return h}}const C$=_$({defaultModifiers:[s$,f$,YD,XD,u$,i$,h$,HD]}),O$=["enabled","placement","strategy","modifiers"];function E$(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const T$={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},j$={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const r=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==n.id);r.length?t.setAttribute("aria-describedby",r.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:r}=e.elements,o=(t=n.getAttribute("role"))==null?void 0:t.toLowerCase();if(n.id&&o==="tooltip"&&"setAttribute"in r){const i=r.getAttribute("aria-describedby");if(i&&i.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",i?`${i},${n.id}`:n.id)}}},P$=[];function N$(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:i="absolute",modifiers:a=P$}=n,s=E$(n,O$);const l=k.useRef(a),c=k.useRef(),u=k.useCallback(()=>{var x;(x=c.current)==null||x.update()},[]),d=k.useCallback(()=>{var x;(x=c.current)==null||x.forceUpdate()},[]),[p,h]=SD(k.useState({placement:o,update:u,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),g=k.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:x})=>{const y={},b={};Object.keys(x.elements).forEach(w=>{y[w]=x.styles[w],b[w]=x.attributes[w]}),h({state:x,styles:y,attributes:b,update:u,forceUpdate:d,placement:x.placement})}}),[u,d,h]),v=k.useMemo(()=>(al(l.current,a)||(l.current=a),l.current),[a]);return k.useEffect(()=>{!c.current||!r||c.current.setOptions({placement:o,strategy:i,modifiers:[...v,g,T$]})},[i,o,g,r,v]),k.useEffect(()=>{if(!(!r||e==null||t==null))return c.current=C$(e,t,Object.assign({},s,{placement:o,strategy:i,modifiers:[...v,j$,g]})),()=>{c.current!=null&&(c.current.destroy(),c.current=void 0,h(x=>Object.assign({},x,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),p}var R$=function(){},A$=R$;const M$=Hi(A$),$x=()=>{};function L$(e){return e.button===0}function I$(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const ld=e=>e&&("current"in e?e.current:e),Fx={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function D$(e,t=$x,{disabled:n,clickTrigger:r="click"}={}){const o=k.useRef(!1),i=k.useRef(!1),a=k.useCallback(c=>{const u=ld(e);M$(!!u,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!u||I$(c)||!L$(c)||!!$l(u,c.target)||i.current,i.current=!1},[e]),s=bt(c=>{const u=ld(e);u&&$l(u,c.target)&&(i.current=!0)}),l=bt(c=>{o.current||t(c)});k.useEffect(()=>{var c,u;if(n||e==null)return;const d=rs(ld(e)),p=d.defaultView||window;let h=(c=p.event)!=null?c:(u=p.parent)==null?void 0:u.event,g=null;Fx[r]&&(g=Ir(d,Fx[r],s,!0));const v=Ir(d,r,a,!0),x=Ir(d,r,b=>{if(b===h){h=void 0;return}l(b)});let y=[];return"ontouchstart"in d.documentElement&&(y=[].slice.call(d.body.children).map(b=>Ir(b,"mousemove",$x))),()=>{g==null||g(),v(),x(),y.forEach(b=>b())}},[e,n,r,a,s,l])}function $$(e){const t={};return Array.isArray(e)?(e==null||e.forEach(n=>{t[n.name]=n}),t):e||t}function F$(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function z$({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:s,popperConfig:l={}}){var c,u,d,p,h;const g=$$(l.modifiers);return Object.assign({},l,{placement:n,enabled:e,strategy:i?"fixed":l.strategy,modifiers:F$(Object.assign({},g,{eventListeners:{enabled:t,options:(c=g.eventListeners)==null?void 0:c.options},preventOverflow:Object.assign({},g.preventOverflow,{options:a?Object.assign({padding:a},(u=g.preventOverflow)==null?void 0:u.options):(d=g.preventOverflow)==null?void 0:d.options}),offset:{options:Object.assign({offset:o},(p=g.offset)==null?void 0:p.options)},arrow:Object.assign({},g.arrow,{enabled:!!s,options:Object.assign({},(h=g.arrow)==null?void 0:h.options,{element:s})}),flip:Object.assign({enabled:!!r},g.flip)}))})}const B$={type:f.string,tooltip:f.bool,as:f.elementType},cp=k.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:r=!1,...o},i)=>m.jsx(e,{...o,ref:i,className:ee(t,`${n}-${r?"tooltip":"feedback"}`)}));cp.displayName="Feedback";cp.propTypes=B$;const Kr=k.createContext({}),yb=k.forwardRef(({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:o=!1,isInvalid:i=!1,as:a="input",...s},l)=>{const{controlId:c}=k.useContext(Kr);return t=fe(t,"form-check-input"),m.jsx(a,{...s,ref:l,type:r,id:e||c,className:ee(n,t,o&&"is-valid",i&&"is-invalid")})});yb.displayName="FormCheckInput";const sf=k.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...r},o)=>{const{controlId:i}=k.useContext(Kr);return e=fe(e,"form-check-label"),m.jsx("label",{...r,ref:o,htmlFor:n||i,className:ee(t,e)})});sf.displayName="FormCheckLabel";const jj=k.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:o=!1,disabled:i=!1,isValid:a=!1,isInvalid:s=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:u,className:d,style:p,title:h="",type:g="checkbox",label:v,children:x,as:y="input",...b},w)=>{t=fe(t,"form-check"),n=fe(n,"form-switch");const{controlId:S}=k.useContext(Kr),C=k.useMemo(()=>({controlId:e||S}),[S,e]),_=!x&&v!=null&&v!==!1||wD(x,sf),O=m.jsx(yb,{...b,type:g==="switch"?"checkbox":g,ref:w,isValid:a,isInvalid:s,disabled:i,as:y});return m.jsx(Kr.Provider,{value:C,children:m.jsx("div",{style:p,className:ee(d,_&&t,r&&`${t}-inline`,o&&`${t}-reverse`,g==="switch"&&n),children:x||m.jsxs(m.Fragment,{children:[O,_&&m.jsx(sf,{title:h,children:v}),c&&m.jsx(cp,{type:u,tooltip:l,children:c})]})})})});jj.displayName="FormCheck";const lf=Object.assign(jj,{Input:yb,Label:sf}),Pj=k.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:r,id:o,className:i,isValid:a=!1,isInvalid:s=!1,plaintext:l,readOnly:c,as:u="input",...d},p)=>{const{controlId:h}=k.useContext(Kr);return e=fe(e,"form-control"),m.jsx(u,{...d,type:t,size:r,ref:p,readOnly:c,id:o||h,className:ee(i,l?`${e}-plaintext`:e,n&&`${e}-${n}`,t==="color"&&`${e}-color`,a&&"is-valid",s&&"is-invalid")})});Pj.displayName="FormControl";const H$=Object.assign(Pj,{Feedback:cp}),Nj=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"form-floating"),m.jsx(n,{ref:o,className:ee(e,t),...r})));Nj.displayName="FormFloating";const xb=k.forwardRef(({controlId:e,as:t="div",...n},r)=>{const o=k.useMemo(()=>({controlId:e}),[e]);return m.jsx(Kr.Provider,{value:o,children:m.jsx(t,{...n,ref:r})})});xb.displayName="FormGroup";const Rj=k.forwardRef(({as:e="label",bsPrefix:t,column:n=!1,visuallyHidden:r=!1,className:o,htmlFor:i,...a},s)=>{const{controlId:l}=k.useContext(Kr);t=fe(t,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const u=ee(o,t,r&&"visually-hidden",n&&c);return i=i||l,n?m.jsx(Le,{ref:s,as:"label",className:u,htmlFor:i,...a}):m.jsx(e,{ref:s,className:u,htmlFor:i,...a})});Rj.displayName="FormLabel";const Aj=k.forwardRef(({bsPrefix:e,className:t,id:n,...r},o)=>{const{controlId:i}=k.useContext(Kr);return e=fe(e,"form-range"),m.jsx("input",{...r,type:"range",ref:o,className:ee(t,e),id:n||i})});Aj.displayName="FormRange";const Mj=k.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:r,isValid:o=!1,isInvalid:i=!1,id:a,...s},l)=>{const{controlId:c}=k.useContext(Kr);return e=fe(e,"form-select"),m.jsx("select",{...s,size:n,ref:l,className:ee(r,e,t&&`${e}-${t}`,o&&"is-valid",i&&"is-invalid"),id:a||c})});Mj.displayName="FormSelect";const Lj=k.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:r,...o},i)=>(e=fe(e,"form-text"),m.jsx(n,{...o,ref:i,className:ee(t,e,r&&"text-muted")})));Lj.displayName="FormText";const Ij=k.forwardRef((e,t)=>m.jsx(lf,{...e,ref:t,type:"switch"}));Ij.displayName="Switch";const U$=Object.assign(Ij,{Input:lf.Input,Label:lf.Label}),Dj=k.forwardRef(({bsPrefix:e,className:t,children:n,controlId:r,label:o,...i},a)=>(e=fe(e,"form-floating"),m.jsxs(xb,{ref:a,className:ee(t,e),controlId:r,...i,children:[n,m.jsx("label",{htmlFor:r,children:o})]})));Dj.displayName="FloatingLabel";const W$={_ref:f.any,validated:f.bool,as:f.elementType},wb=k.forwardRef(({className:e,validated:t,as:n="form",...r},o)=>m.jsx(n,{...r,ref:o,className:ee(e,t&&"was-validated")}));wb.displayName="Form";wb.propTypes=W$;const W=Object.assign(wb,{Group:xb,Control:H$,Floating:Nj,Check:lf,Switch:U$,Label:Rj,Text:Lj,Range:Aj,Select:Mj,FloatingLabel:Dj});var pu;function zx(e){if((!pu&&pu!==0||e)&&os){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),pu=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return pu}const $j=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"modal-body"),m.jsx(n,{ref:o,className:ee(e,t),...r})));$j.displayName="ModalBody";const kb=k.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:r,size:o,fullscreen:i,children:a,scrollable:s,...l},c)=>{e=fe(e,"modal");const u=`${e}-dialog`,d=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return m.jsx("div",{...l,ref:c,className:ee(u,t,o&&`${e}-${o}`,r&&`${u}-centered`,s&&`${u}-scrollable`,i&&d),children:m.jsx("div",{className:ee(`${e}-content`,n),children:a})})});kb.displayName="ModalDialog";const Fj=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"modal-footer"),m.jsx(n,{ref:o,className:ee(e,t),...r})));Fj.displayName="ModalFooter";const zj=k.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},i)=>(e=fe(e,"modal-header"),m.jsx(CT,{ref:i,...o,className:ee(t,e),closeLabel:n,closeButton:r})));zj.displayName="ModalHeader";const V$=rp("h4"),Bj=k.forwardRef(({className:e,bsPrefix:t,as:n=V$,...r},o)=>(t=fe(t,"modal-title"),m.jsx(n,{ref:o,className:ee(e,t),...r})));Bj.displayName="ModalTitle";function Y$(e){return m.jsx(Fa,{...e,timeout:null})}function G$(e){return m.jsx(Fa,{...e,timeout:null})}const Hj=k.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:o,children:i,dialogAs:a=kb,"data-bs-theme":s,"aria-labelledby":l,"aria-describedby":c,"aria-label":u,show:d=!1,animation:p=!0,backdrop:h=!0,keyboard:g=!0,onEscapeKeyDown:v,onShow:x,onHide:y,container:b,autoFocus:w=!0,enforceFocus:S=!0,restoreFocus:C=!0,restoreFocusOptions:_,onEntered:O,onExit:E,onExiting:T,onEnter:P,onEntering:A,onExited:I,backdropClassName:X,manager:H,...V},J)=>{const[M,N]=k.useState({}),[U,Q]=k.useState(!1),Z=k.useRef(!1),$=k.useRef(!1),F=k.useRef(null),[D,z]=bg(),j=eo(J,z),le=bt(y),G=F0();e=fe(e,"modal");const Ce=k.useMemo(()=>({onHide:le}),[le]);function ge(){return H||jT({isRTL:G})}function xe(ke){if(!os)return;const tn=ge().getScrollbarWidth()>0,zt=ke.scrollHeight>rs(ke).documentElement.clientHeight;N({paddingRight:tn&&!zt?zx():void 0,paddingLeft:!tn&&zt?zx():void 0})}const ce=bt(()=>{D&&xe(D.dialog)});G0(()=>{wg(window,"resize",ce),F.current==null||F.current()});const Re=()=>{Z.current=!0},Ae=ke=>{Z.current&&D&&ke.target===D.dialog&&($.current=!0),Z.current=!1},ae=()=>{Q(!0),F.current=mT(D.dialog,()=>{Q(!1)})},Ye=ke=>{ke.target===ke.currentTarget&&ae()},we=ke=>{if(h==="static"){Ye(ke);return}if($.current||ke.target!==ke.currentTarget){$.current=!1;return}y==null||y()},lt=ke=>{g?v==null||v(ke):(ke.preventDefault(),h==="static"&&ae())},Cr=(ke,tn)=>{ke&&xe(ke),P==null||P(ke,tn)},Me=ke=>{F.current==null||F.current(),E==null||E(ke)},In=(ke,tn)=>{A==null||A(ke,tn),pT(window,"resize",ce)},nr=ke=>{ke&&(ke.style.display=""),I==null||I(ke),wg(window,"resize",ce)},Ot=k.useCallback(ke=>m.jsx("div",{...ke,className:ee(`${e}-backdrop`,X,!p&&"show")}),[p,X,e]),ue={...n,...M};ue.display="block";const Ie=ke=>m.jsx("div",{role:"dialog",...ke,style:ue,className:ee(t,e,U&&`${e}-static`,!p&&"show"),onClick:h?we:void 0,onMouseUp:Ae,"data-bs-theme":s,"aria-label":u,"aria-labelledby":l,"aria-describedby":c,children:m.jsx(a,{...V,onMouseDown:Re,className:r,contentClassName:o,children:i})});return m.jsx(K0.Provider,{value:Ce,children:m.jsx(kT,{show:d,ref:j,backdrop:h,container:b,keyboard:!0,autoFocus:w,enforceFocus:S,restoreFocus:C,restoreFocusOptions:_,onEscapeKeyDown:lt,onShow:x,onHide:y,onEnter:Cr,onEntering:In,onEntered:O,onExit:Me,onExiting:T,onExited:nr,manager:ge(),transition:p?Y$:void 0,backdropTransition:p?G$:void 0,renderBackdrop:Ot,renderDialog:Ie})})});Hj.displayName="Modal";const pe=Object.assign(Hj,{Body:$j,Header:zj,Title:Bj,Footer:Fj,Dialog:kb,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),X$=()=>{};function q$(e,t,{disabled:n,clickTrigger:r}={}){const o=t||X$;D$(e,o,{disabled:n,clickTrigger:r});const i=bt(a=>{xT(a)&&o(a)});k.useEffect(()=>{if(n||e==null)return;const a=rs(ld(e));let s=(a.defaultView||window).event;const l=Ir(a,"keyup",c=>{if(c===s){s=void 0;return}i(c)});return()=>{l()}},[e,n,i])}const Uj=k.forwardRef((e,t)=>{const{flip:n,offset:r,placement:o,containerPadding:i,popperConfig:a={},transition:s,runTransition:l}=e,[c,u]=bg(),[d,p]=bg(),h=eo(u,t),g=Sg(e.container),v=Sg(e.target),[x,y]=k.useState(!e.show),b=N$(v,c,z$({placement:o,enableEvents:!!e.show,containerPadding:i||5,flip:n,offset:r,arrowElement:d,popperConfig:a}));e.show&&x&&y(!1);const w=(...A)=>{y(!0),e.onExited&&e.onExited(...A)},S=e.show||!x;if(q$(c,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!S)return null;const{onExit:C,onExiting:_,onEnter:O,onEntering:E,onEntered:T}=e;let P=e.children(Object.assign({},b.attributes.popper,{style:b.styles.popper,ref:h}),{popper:b,placement:o,show:!!e.show,arrowProps:Object.assign({},b.attributes.arrow,{style:b.styles.arrow,ref:p})});return P=_g(s,l,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:P,onExit:C,onExiting:_,onExited:w,onEnter:O,onEntering:E,onEntered:T}),g?vi.createPortal(P,g):null});Uj.displayName="Overlay";const Wj=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"popover-header"),m.jsx(n,{ref:o,className:ee(e,t),...r})));Wj.displayName="PopoverHeader";const Sb=k.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=fe(t,"popover-body"),m.jsx(n,{ref:o,className:ee(e,t),...r})));Sb.displayName="PopoverBody";function Vj(e,t){let n=e;return e==="left"?n=t?"end":"start":e==="right"&&(n=t?"start":"end"),n}function Yj(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const K$=k.forwardRef(({bsPrefix:e,placement:t="right",className:n,style:r,children:o,body:i,arrowProps:a,hasDoneInitialMeasure:s,popper:l,show:c,...u},d)=>{const p=fe(e,"popover"),h=F0(),[g]=(t==null?void 0:t.split("-"))||[],v=Vj(g,h);let x=r;return c&&!s&&(x={...r,...Yj(l==null?void 0:l.strategy)}),m.jsxs("div",{ref:d,role:"tooltip",style:x,"x-placement":g,className:ee(n,p,g&&`bs-popover-${v}`),...u,children:[m.jsx("div",{className:"popover-arrow",...a}),i?m.jsx(Sb,{children:o}):o]})}),Q$=Object.assign(K$,{Header:Wj,Body:Sb,POPPER_OFFSET:[0,8]}),Gj=k.forwardRef(({bsPrefix:e,placement:t="right",className:n,style:r,children:o,arrowProps:i,hasDoneInitialMeasure:a,popper:s,show:l,...c},u)=>{e=fe(e,"tooltip");const d=F0(),[p]=(t==null?void 0:t.split("-"))||[],h=Vj(p,d);let g=r;return l&&!a&&(g={...r,...Yj(s==null?void 0:s.strategy)}),m.jsxs("div",{ref:u,style:g,role:"tooltip","x-placement":p,className:ee(n,e,`bs-tooltip-${h}`),...c,children:[m.jsx("div",{className:"tooltip-arrow",...i}),m.jsx("div",{className:`${e}-inner`,children:o})]})});Gj.displayName="Tooltip";const Xj=Object.assign(Gj,{TOOLTIP_OFFSET:[0,6]});function J$(e){const t=k.useRef(null),n=fe(void 0,"popover"),r=fe(void 0,"tooltip"),o=k.useMemo(()=>({name:"offset",options:{offset:()=>{if(e)return e;if(t.current){if(Cg(t.current,n))return Q$.POPPER_OFFSET;if(Cg(t.current,r))return Xj.TOOLTIP_OFFSET}return[0,0]}}}),[e,n,r]);return[t,[o]]}function Z$(e,t){const{ref:n}=e,{ref:r}=t;e.ref=n.__wrapped||(n.__wrapped=o=>n(ef(o))),t.ref=r.__wrapped||(r.__wrapped=o=>r(ef(o)))}const qj=k.forwardRef(({children:e,transition:t=Fa,popperConfig:n={},rootClose:r=!1,placement:o="top",show:i=!1,...a},s)=>{const l=k.useRef({}),[c,u]=k.useState(null),[d,p]=J$(a.offset),h=eo(s,d),g=t===!0?Fa:t||void 0,v=bt(x=>{u(x),n==null||n.onFirstUpdate==null||n.onFirstUpdate(x)});return Zd(()=>{c&&a.target&&(l.current.scheduleUpdate==null||l.current.scheduleUpdate())},[c,a.target]),k.useEffect(()=>{i||u(null)},[i]),m.jsx(Uj,{...a,ref:h,popperConfig:{...n,modifiers:p.concat(n.modifiers||[]),onFirstUpdate:v},transition:g,rootClose:r,placement:o,show:i,children:(x,{arrowProps:y,popper:b,show:w})=>{var S,C;Z$(x,y);const _=b==null?void 0:b.placement,O=Object.assign(l.current,{state:b==null?void 0:b.state,scheduleUpdate:b==null?void 0:b.update,placement:_,outOfBoundaries:(b==null||(S=b.state)==null||(C=S.modifiersData.hide)==null?void 0:C.isReferenceHidden)||!1,strategy:n.strategy}),E=!!c;return typeof e=="function"?e({...x,placement:_,show:w,...!t&&w&&{className:"show"},popper:O,arrowProps:y,hasDoneInitialMeasure:E}):k.cloneElement(e,{...x,placement:_,arrowProps:y,popper:O,hasDoneInitialMeasure:E,className:ee(e.props.className,!t&&w&&"show"),style:{...e.props.style,...x.style}})}})});qj.displayName="Overlay";function e6(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function Bx(e,t,n){const[r]=t,o=r.currentTarget,i=r.relatedTarget||r.nativeEvent[n];(!i||i!==o)&&!$l(o,i)&&e(...t)}f.oneOf(["click","hover","focus"]);const t6=({trigger:e=["hover","focus"],overlay:t,children:n,popperConfig:r={},show:o,defaultShow:i=!1,onToggle:a,delay:s,placement:l,flip:c=l&&l.indexOf("auto")!==-1,...u})=>{const d=k.useRef(null),p=eo(d,n.ref),h=xD(),g=k.useRef(""),[v,x]=QE(o,i,a),y=e6(s),{onFocus:b,onBlur:w,onClick:S}=typeof n!="function"?k.Children.only(n).props:{},C=V=>{p(ef(V))},_=k.useCallback(()=>{if(h.clear(),g.current="show",!y.show){x(!0);return}h.set(()=>{g.current==="show"&&x(!0)},y.show)},[y.show,x,h]),O=k.useCallback(()=>{if(h.clear(),g.current="hide",!y.hide){x(!1);return}h.set(()=>{g.current==="hide"&&x(!1)},y.hide)},[y.hide,x,h]),E=k.useCallback((...V)=>{_(),b==null||b(...V)},[_,b]),T=k.useCallback((...V)=>{O(),w==null||w(...V)},[O,w]),P=k.useCallback((...V)=>{x(!v),S==null||S(...V)},[S,x,v]),A=k.useCallback((...V)=>{Bx(_,V,"fromElement")},[_]),I=k.useCallback((...V)=>{Bx(O,V,"toElement")},[O]),X=e==null?[]:[].concat(e),H={ref:C};return X.indexOf("click")!==-1&&(H.onClick=P),X.indexOf("focus")!==-1&&(H.onFocus=E,H.onBlur=T),X.indexOf("hover")!==-1&&(H.onMouseOver=A,H.onMouseOut=I),m.jsxs(m.Fragment,{children:[typeof n=="function"?n(H):k.cloneElement(n,H),m.jsx(qj,{...u,show:v,onHide:O,flip:c,placement:l,popperConfig:r,target:d.current,children:t})]})},Rt=k.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const i=fe(e,"row"),a=XE(),s=qE(),l=`${i}-cols`,c=[];return a.forEach(u=>{const d=r[u];delete r[u];let p;d!=null&&typeof d=="object"?{cols:p}=d:p=d;const h=u!==s?`-${u}`:"";p!=null&&c.push(`${l}${h}-${p}`)}),m.jsx(n,{ref:o,...r,className:ee(t,i,...c)})});Rt.displayName="Row";const n6=k.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:o,hover:i,size:a,variant:s,responsive:l,...c},u)=>{const d=fe(e,"table"),p=ee(t,d,s&&`${d}-${s}`,a&&`${d}-${a}`,n&&`${d}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${d}-bordered`,o&&`${d}-borderless`,i&&`${d}-hover`),h=m.jsx("table",{...c,className:p,ref:u});if(l){let g=`${d}-responsive`;return typeof l=="string"&&(g=`${g}-${l}`),m.jsx("div",{className:g,children:h})}return h}),r6="/assets/hero-BqXCGX0-.png",Kj="data:image/svg+xml,%3csvg%20id='wave'%20style='transform:rotate(0deg);%20transition:%200.3s'%20viewBox='0%200%201440%20140'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='sw-gradient-0'%20x1='0'%20x2='0'%20y1='1'%20y2='0'%3e%3cstop%20stop-color='rgba(134,%20202,%20222,%201)'%20offset='0%25'%3e%3c/stop%3e%3cstop%20stop-color='rgba(134,%20202,%20222,%201)'%20offset='100%25'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20style='transform:translate(0,%200px);%20opacity:1'%20fill='url(%23sw-gradient-0)'%20d='M0,0L40,9.3C80,19,160,37,240,42C320,47,400,37,480,30.3C560,23,640,19,720,35C800,51,880,89,960,88.7C1040,89,1120,51,1200,35C1280,19,1360,23,1440,25.7C1520,28,1600,28,1680,28C1760,28,1840,28,1920,39.7C2000,51,2080,75,2160,84C2240,93,2320,89,2400,86.3C2480,84,2560,84,2640,91C2720,98,2800,112,2880,109.7C2960,107,3040,89,3120,74.7C3200,61,3280,51,3360,42C3440,33,3520,23,3600,37.3C3680,51,3760,89,3840,100.3C3920,112,4000,98,4080,79.3C4160,61,4240,37,4320,39.7C4400,42,4480,70,4560,72.3C4640,75,4720,51,4800,56C4880,61,4960,93,5040,102.7C5120,112,5200,98,5280,81.7C5360,65,5440,47,5520,46.7C5600,47,5680,65,5720,74.7L5760,84L5760,140L5720,140C5680,140,5600,140,5520,140C5440,140,5360,140,5280,140C5200,140,5120,140,5040,140C4960,140,4880,140,4800,140C4720,140,4640,140,4560,140C4480,140,4400,140,4320,140C4240,140,4160,140,4080,140C4000,140,3920,140,3840,140C3760,140,3680,140,3600,140C3520,140,3440,140,3360,140C3280,140,3200,140,3120,140C3040,140,2960,140,2880,140C2800,140,2720,140,2640,140C2560,140,2480,140,2400,140C2320,140,2240,140,2160,140C2080,140,2000,140,1920,140C1840,140,1760,140,1680,140C1600,140,1520,140,1440,140C1360,140,1280,140,1200,140C1120,140,1040,140,960,140C880,140,800,140,720,140C640,140,560,140,480,140C400,140,320,140,240,140C160,140,80,140,40,140L0,140Z'%3e%3c/path%3e%3cdefs%3e%3clinearGradient%20id='sw-gradient-1'%20x1='0'%20x2='0'%20y1='1'%20y2='0'%3e%3cstop%20stop-color='rgba(87,%20169,%20207,%201)'%20offset='0%25'%3e%3c/stop%3e%3cstop%20stop-color='rgba(87,%20169,%20207,%201)'%20offset='100%25'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20style='transform:translate(0,%2050px);%20opacity:0.9'%20fill='url(%23sw-gradient-1)'%20d='M0,42L40,44.3C80,47,160,51,240,63C320,75,400,93,480,84C560,75,640,37,720,18.7C800,0,880,0,960,16.3C1040,33,1120,65,1200,72.3C1280,79,1360,61,1440,44.3C1520,28,1600,14,1680,23.3C1760,33,1840,65,1920,86.3C2000,107,2080,117,2160,102.7C2240,89,2320,51,2400,30.3C2480,9,2560,5,2640,2.3C2720,0,2800,0,2880,14C2960,28,3040,56,3120,63C3200,70,3280,56,3360,42C3440,28,3520,14,3600,23.3C3680,33,3760,65,3840,86.3C3920,107,4000,117,4080,109.7C4160,103,4240,79,4320,72.3C4400,65,4480,75,4560,74.7C4640,75,4720,65,4800,65.3C4880,65,4960,75,5040,70C5120,65,5200,47,5280,49C5360,51,5440,75,5520,70C5600,65,5680,33,5720,16.3L5760,0L5760,140L5720,140C5680,140,5600,140,5520,140C5440,140,5360,140,5280,140C5200,140,5120,140,5040,140C4960,140,4880,140,4800,140C4720,140,4640,140,4560,140C4480,140,4400,140,4320,140C4240,140,4160,140,4080,140C4000,140,3920,140,3840,140C3760,140,3680,140,3600,140C3520,140,3440,140,3360,140C3280,140,3200,140,3120,140C3040,140,2960,140,2880,140C2800,140,2720,140,2640,140C2560,140,2480,140,2400,140C2320,140,2240,140,2160,140C2080,140,2000,140,1920,140C1840,140,1760,140,1680,140C1600,140,1520,140,1440,140C1360,140,1280,140,1200,140C1120,140,1040,140,960,140C880,140,800,140,720,140C640,140,560,140,480,140C400,140,320,140,240,140C160,140,80,140,40,140L0,140Z'%3e%3c/path%3e%3c/svg%3e",o6="/assets/easy-D8uFhgvi.png",i6="/assets/shuttle-Ct1H4N8v.png",a6="/assets/anywhere-DBMOC106.png",s6=()=>m.jsxs(Qt,{fluid:!0,className:"home-container",children:[m.jsx(Qt,{className:"intro-section",children:m.jsxs(Rt,{className:"align-items-center",children:[m.jsxs(Le,{md:6,className:"text-container-home",children:[m.jsx("h1",{className:"title-hero fw-bold",children:"Get Noticed With Notic"}),m.jsx("p",{className:"sub-title",children:"Elevate Your Productivity and Stay Ahead"}),m.jsx("p",{className:"desc-home",children:"With Notic, you'll not only manage your tasks more efficiently but also significantly boost your productivity. This app is designed to help you stay organized, ensure every task is completed on time, and keep you ahead of the game."}),m.jsxs(W,{className:"email-signup-form",children:[m.jsx(he,{type:"submit",className:"btn-sign-up-home",children:"Sign up - it's free!"}),m.jsx("a",{href:"/register"})]})]}),m.jsx(Le,{md:6,className:"image-container-home",children:m.jsx("img",{src:r6,alt:"Notic Illustration",className:"img-fluid-home"})})]})}),m.jsx("img",{src:Kj,alt:"Notic Illustration",className:"img-fluid"}),m.jsxs(Qt,{fluid:!0,className:"why-notic-section",children:[m.jsx(Rt,{className:"text-center",children:m.jsx(Le,{children:m.jsx("h2",{className:"fw-bold mb-xl-5 h2-home",children:"Why Notic?"})})}),m.jsxs(Rt,{className:"why-notic-topic  text-center",children:[m.jsxs(Le,{md:4,className:"mb-5 mt-4",children:[m.jsx("img",{src:o6,alt:"Notic Illustration",className:"img-fluid topic-icon"}),m.jsx("h4",{className:"fw-bolder",children:"Seamless Task Management"}),m.jsx("p",{children:"Notic offers an intuitive and user-friendly interface that makes task management effortless. Easily create, organize, and prioritize your tasks, ensuring you never miss a deadline."})]}),m.jsxs(Le,{md:4,className:"mt-4",children:[m.jsx("img",{src:i6,alt:"Notic Illustration",className:"img-fluid topic-icon"}),m.jsx("h4",{className:"fw-bolder",children:"Boosted Productivity"}),m.jsx("p",{children:"With smart reminders and progress tracking, Notic helps you stay focused and productive. Our advanced features are designed to streamline your workflow, allowing you to accomplish more in less time."})]}),m.jsxs(Le,{md:4,className:"mt-4",children:[m.jsx("img",{src:a6,alt:"Notic Illustration",className:"img-fluid topic-icon"}),m.jsx("h4",{className:"fw-bolder",children:"Anywhere, Anytime Access"}),m.jsx("p",{children:"Notic is accessible across all your devices—whether on your desktop, tablet, or smartphone. Stay connected and manage your tasks wherever you are, ensuring you can stay productive on the go."})]})]})]})]}),l6="/assets/about-BLGBa4Bo.png",c6="/assets/restya-Dl_KIZCk.jpeg",u6="/assets/yoga-qxUUP-ec.jpeg",d6="/assets/dino-DwhUqUqV.jpg",f6="/assets/rizal-fstR-j-H.jpg",p6="/assets/pauji-DucrFpOu.jpg",m6=()=>{const e=[{name:"Bagas Restya E.",role:"Lead Developer",image:c6},{name:"Maulana Arya Yoga",role:"Front-End Developer",image:u6},{name:"Aldino Marsel P.",role:"Front-End Developer",image:d6},{name:"Mohammad Fauzi H.",role:"Back-End Developer",image:p6},{name:"Ahmad Rizal B.",role:"Back-End Developer",image:f6}];return m.jsxs(Qt,{fluid:!0,className:"about-container pt-4",children:[m.jsx("h4",{className:"about-title-about mt-2",children:"About Us"}),m.jsxs(Rt,{className:"justify-content-center mt-0",children:[m.jsxs(Le,{md:5,className:"about-desc p-4",children:[m.jsxs("p",{className:"about-desc-text mb-4 text-justify",children:[m.jsx("b",{children:"Notic"})," adalah aplikasi manajemen tugas yang memungkinkan pengguna untuk mengatur, melacak, dan menyelesaikan tugas-tugas dengan efisien. Dengan fitur seperti pengelompokan tugas, pengaturan tenggat waktu, pemberitahuan cerdas, dan kolaborasi tim, Notic membantu meningkatkan produktivitas dan memberikan kejelasan dalam menyelesaikan pekerjaan."]}),m.jsx("p",{className:"about-desc-text mb-4 text-justify",children:"Kami menyediakan antarmuka yang intuitif dan berbagai tampilan yang dapat disesuaikan, menjadikan Notic sebagai teman terpercaya dalam mengelola pekerjaan sehari-hari. Dapat diakses melalui desktop, tablet, dan smartphone, Notic memastikan Anda dapat mengelola tugas di mana saja dan kapan saja."}),m.jsx("p",{className:"about-desc-text mb-4 text-justify",children:"Notic dirancang untuk mendukung Anda tetap terorganisir, produktif, dan selalu selangkah lebih maju dalam menyelesaikan setiap tugas."})]}),m.jsx(Le,{md:5,className:"text-center mb-4",children:m.jsx("img",{src:l6,className:"img-fluid about-img",alt:"About Us"})})]}),m.jsx("h4",{className:"about-title mb-5",children:"The Team"}),m.jsx(Rt,{className:"justify-content-center",children:e.map((t,n)=>m.jsx(Le,{xs:12,sm:6,md:4,lg:3,className:"mb-4 col-card",children:m.jsxs(oe,{className:"card-team",children:[m.jsx(oe.Img,{variant:"top",src:t.image,className:"team-img"}),m.jsxs(oe.Body,{className:"card-body",children:[m.jsx(oe.Title,{className:"card-text",children:t.name}),m.jsx(oe.Text,{className:"card-text",children:t.role})]})]})},n))})]})},h6="/assets/contact-Ceb3pe4q.png",g6=()=>{const[e,t]=k.useState(!1),n=o=>{o.preventDefault(),t(!0)},r=()=>t(!1);return m.jsxs(Qt,{fluid:!0,className:"contact-container",children:[m.jsxs(Rt,{className:"justify-content-center align-items-center",children:[m.jsx(Le,{md:5,className:"text-center mb-4",children:m.jsx("img",{src:h6,className:"img-fluid",alt:"Contact Us"})}),m.jsxs(Le,{md:5,className:"contact-form p-4",children:[m.jsx("h2",{className:"contact-title mb-3",children:"Contact Us"}),m.jsxs(W,{onSubmit:n,children:[m.jsxs(W.Group,{controlId:"formName",children:[m.jsx(W.Label,{children:"Your Name"}),m.jsx(W.Control,{className:"form-control-contact",type:"text",placeholder:"Enter your name",required:!0})]}),m.jsxs(W.Group,{controlId:"formEmail",children:[m.jsx(W.Label,{children:"Email Address"}),m.jsx(W.Control,{className:"form-control-contact",type:"email",placeholder:"Enter your email",required:!0})]}),m.jsxs(W.Group,{controlId:"formMessage",children:[m.jsx(W.Label,{children:"Message"}),m.jsx(W.Control,{className:"form-control-contact",as:"textarea",rows:4,placeholder:"Enter your message",required:!0})]}),m.jsx(he,{className:"btn-contact",type:"submit",block:!0,children:"Send Message"})]})]})]}),m.jsx("img",{src:Kj,alt:"Wave Illustration",className:"img-fluid wave-background bottom-wave"}),m.jsxs(pe,{show:e,onHide:r,centered:!0,className:"confirmation-modal",children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsxs(pe.Title,{children:[m.jsx("i",{className:"bi bi-check-circle-fill"})," Message Sent"]})}),m.jsx(pe.Body,{children:m.jsx("p",{children:"Thank you for contacting us. We will get back to you soon."})}),m.jsx(pe.Footer,{children:m.jsx(he,{className:"btn-modal",onClick:r,children:"Close"})})]})]})};var Qj={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Hx=Y.createContext&&Y.createContext(Qj),v6=["attr","size","title"];function b6(e,t){if(e==null)return{};var n=y6(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function y6(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function cf(){return cf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cf.apply(this,arguments)}function Ux(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function uf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ux(Object(n),!0).forEach(function(r){x6(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ux(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x6(e,t,n){return t=w6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w6(e){var t=k6(e,"string");return typeof t=="symbol"?t:t+""}function k6(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Jj(e){return e&&e.map((t,n)=>Y.createElement(t.tag,uf({key:n},t.attr),Jj(t.child)))}function _b(e){return t=>Y.createElement(S6,cf({attr:uf({},e.attr)},t),Jj(e.child))}function S6(e){var t=n=>{var{attr:r,size:o,title:i}=e,a=b6(e,v6),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Y.createElement("svg",cf({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:uf(uf({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Y.createElement("title",null,i),e.children)};return Hx!==void 0?Y.createElement(Hx.Consumer,null,n=>t(n)):t(Qj)}function Zj(e){return _b({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}const Rn=k.createContext(),_6=({children:e})=>{const[t,n]=k.useState(()=>{const i=localStorage.getItem("user");return i?JSON.parse(i):null});k.useEffect(()=>{t?localStorage.setItem("user",JSON.stringify(t)):localStorage.removeItem("user")},[t]);const r=i=>{n(i)},o=()=>{n(null),localStorage.removeItem("token"),localStorage.removeItem("role")};return m.jsx(Rn.Provider,{value:{user:t,login:r,logout:o},children:e})},C6=()=>{const[e,t]=k.useState(""),[n,r]=k.useState(""),[o,i]=k.useState(""),a=Jo(),{user:s,login:l}=k.useContext(Rn),c=async u=>{u.preventDefault();try{const d=await fetch("https://api-msib-6-travel-management-03.educalab.id/login/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,pass:n})}),p=await d.json();if(console.log("Response dari server:",p),d.ok){const{token:h,role:g,...v}=p;console.log("Role dari server:",g),localStorage.setItem("token",h),localStorage.setItem("role",g),l(v),console.log("Login berhasil, mengarahkan ke dashboard...");const y=await(await fetch("https://api-msib-6-travel-management-03.educalab.id/profile",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`}})).json();console.log("Profil pengguna:",y),localStorage.setItem("profile",JSON.stringify(y)),a(g==="admin"?"/dashboardadmin":"/dashboarduser")}else i(p.message||"Email atau password salah")}catch{i("Gagal login. Silakan coba lagi nanti.")}};return k.useEffect(()=>{if(s){const u=localStorage.getItem("role");console.log("Role pengguna setelah login:",u),a(u==="admin"?"/dashboardadmin":"/dashboarduser")}},[s,a]),m.jsxs("div",{className:"login-page",children:[m.jsxs("div",{className:"logo-container",children:[m.jsx("img",{src:as,width:"40",height:"auto",className:"d-inline-block align-top ms-4 mt-3",alt:"Notic logo"}),m.jsx("span",{className:"fw-bold ms-2 mt-3",children:"Notic"})]}),m.jsx("div",{className:"login-container",children:m.jsx(oe,{className:"login-card mt-2",children:m.jsxs(oe.Body,{className:"login-card-body",children:[m.jsx("div",{className:"back-to-landing mb-3",children:m.jsx("a",{href:"/",className:"text-decoration-none",children:m.jsx(Zj,{className:"me-2"})})}),m.jsx(oe.Title,{className:"login-title text-center mb-4",children:"Login"}),m.jsxs(W,{onSubmit:c,children:[m.jsxs(W.Group,{controlId:"formUsernameOrEmail",className:"mb-3",children:[m.jsx(W.Label,{className:"bold",children:"Username or Email"}),m.jsx(W.Control,{type:"text",placeholder:"Enter username or email",value:e,onChange:u=>t(u.target.value),required:!0})]}),m.jsxs(W.Group,{controlId:"formPassword",className:"mb-3",children:[m.jsx(W.Label,{className:"bold",children:"Password"}),m.jsx(W.Control,{type:"password",placeholder:"Enter password",value:n,onChange:u=>r(u.target.value),required:!0})]}),o&&m.jsx("p",{className:"text-danger",children:o}),m.jsx("div",{className:"d-flex justify-content-center mb-3",children:m.jsx(he,{type:"submit",className:"btn-login w-50",children:"Login"})})]}),m.jsx("div",{className:"text-left mb-3",children:m.jsx("a",{href:"/forgot-password",className:"text-decoration-none text-social",children:"Forgot Password?"})}),m.jsxs("div",{className:"text-left mb-3 login-putih",children:["Don't have an account?"," ",m.jsx("a",{href:"/register",className:"text-decoration-none text-social",children:"Register now"})]})]})})}),m.jsx("div",{className:"wave-container",children:m.jsx("img",{src:"../../public/wavebwh.png",alt:"Wave",className:"wave-image"})})]})};function e5(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=e5(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function _o(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=e5(e))&&(r&&(r+=" "),r+=t);return r}const Yl=e=>typeof e=="number"&&!isNaN(e),_i=e=>typeof e=="string",ln=e=>typeof e=="function",cd=e=>_i(e)||ln(e)?e:null,Ug=e=>k.isValidElement(e)||_i(e)||ln(e)||Yl(e);function O6(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function up(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(a){let{children:s,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p,playToast:h}=a;const g=r?`${t}--${l}`:t,v=r?`${n}--${l}`:n,x=k.useRef(0);return k.useLayoutEffect(()=>{const y=d.current,b=g.split(" "),w=S=>{S.target===d.current&&(h(),y.removeEventListener("animationend",w),y.removeEventListener("animationcancel",w),x.current===0&&S.type!=="animationcancel"&&y.classList.remove(...b))};y.classList.add(...b),y.addEventListener("animationend",w),y.addEventListener("animationcancel",w)},[]),k.useEffect(()=>{const y=d.current,b=()=>{y.removeEventListener("animationend",b),o?O6(y,u,i):u()};p||(c?b():(x.current=1,y.className+=` ${v}`,y.addEventListener("animationend",b)))},[p]),Y.createElement(Y.Fragment,null,s)}}function Wx(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const It=new Map;let Gl=[];const Wg=new Set,E6=e=>Wg.forEach(t=>t(e)),t5=()=>It.size>0;function n5(e,t){var n;if(t)return!((n=It.get(t))==null||!n.isToastActive(e));let r=!1;return It.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function r5(e,t){Ug(e)&&(t5()||Gl.push({content:e,options:t}),It.forEach(n=>{n.buildToast(e,t)}))}function Vx(e,t){It.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function T6(e){const{subscribe:t,getSnapshot:n,setProps:r}=k.useRef(function(i){const a=i.containerId||1;return{subscribe(s){const l=function(u,d,p){let h=1,g=0,v=[],x=[],y=[],b=d;const w=new Map,S=new Set,C=()=>{y=Array.from(w.values()),S.forEach(E=>E())},_=E=>{x=E==null?[]:x.filter(T=>T!==E),C()},O=E=>{const{toastId:T,onOpen:P,updateId:A,children:I}=E.props,X=A==null;E.staleId&&w.delete(E.staleId),w.set(T,E),x=[...x,E.props.toastId].filter(H=>H!==E.staleId),C(),p(Wx(E,X?"added":"updated")),X&&ln(P)&&P(k.isValidElement(I)&&I.props)};return{id:u,props:b,observe:E=>(S.add(E),()=>S.delete(E)),toggle:(E,T)=>{w.forEach(P=>{T!=null&&T!==P.props.toastId||ln(P.toggle)&&P.toggle(E)})},removeToast:_,toasts:w,clearQueue:()=>{g-=v.length,v=[]},buildToast:(E,T)=>{if(($=>{let{containerId:F,toastId:D,updateId:z}=$;const j=F?F!==u:u!==1,le=w.has(D)&&z==null;return j||le})(T))return;const{toastId:P,updateId:A,data:I,staleId:X,delay:H}=T,V=()=>{_(P)},J=A==null;J&&g++;const M={...b,style:b.toastStyle,key:h++,...Object.fromEntries(Object.entries(T).filter($=>{let[F,D]=$;return D!=null})),toastId:P,updateId:A,data:I,closeToast:V,isIn:!1,className:cd(T.className||b.toastClassName),bodyClassName:cd(T.bodyClassName||b.bodyClassName),progressClassName:cd(T.progressClassName||b.progressClassName),autoClose:!T.isLoading&&(N=T.autoClose,U=b.autoClose,N===!1||Yl(N)&&N>0?N:U),deleteToast(){const $=w.get(P),{onClose:F,children:D}=$.props;ln(F)&&F(k.isValidElement(D)&&D.props),p(Wx($,"removed")),w.delete(P),g--,g<0&&(g=0),v.length>0?O(v.shift()):C()}};var N,U;M.closeButton=b.closeButton,T.closeButton===!1||Ug(T.closeButton)?M.closeButton=T.closeButton:T.closeButton===!0&&(M.closeButton=!Ug(b.closeButton)||b.closeButton);let Q=E;k.isValidElement(E)&&!_i(E.type)?Q=k.cloneElement(E,{closeToast:V,toastProps:M,data:I}):ln(E)&&(Q=E({closeToast:V,toastProps:M,data:I}));const Z={content:Q,props:M,staleId:X};b.limit&&b.limit>0&&g>b.limit&&J?v.push(Z):Yl(H)?setTimeout(()=>{O(Z)},H):O(Z)},setProps(E){b=E},setToggle:(E,T)=>{w.get(E).toggle=T},isToastActive:E=>x.some(T=>T===E),getSnapshot:()=>b.newestOnTop?y.reverse():y}}(a,i,E6);It.set(a,l);const c=l.observe(s);return Gl.forEach(u=>r5(u.content,u.options)),Gl=[],()=>{c(),It.delete(a)}},setProps(s){var l;(l=It.get(a))==null||l.setProps(s)},getSnapshot(){var s;return(s=It.get(a))==null?void 0:s.getSnapshot()}}}(e)).current;r(e);const o=k.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const a=new Map;return o.forEach(s=>{const{position:l}=s.props;a.has(l)||a.set(l,[]),a.get(l).push(s)}),Array.from(a,s=>i(s[0],s[1]))},isToastActive:n5,count:o==null?void 0:o.length}}function j6(e){const[t,n]=k.useState(!1),[r,o]=k.useState(!1),i=k.useRef(null),a=k.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:l,closeToast:c,onClick:u,closeOnClick:d}=e;var p,h;function g(){n(!0)}function v(){n(!1)}function x(w){const S=i.current;a.canDrag&&S&&(a.didMove=!0,t&&v(),a.delta=e.draggableDirection==="x"?w.clientX-a.start:w.clientY-a.start,a.start!==w.clientX&&(a.canCloseOnClick=!1),S.style.transform=`translate3d(${e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`},0)`,S.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function y(){document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",y);const w=i.current;if(a.canDrag&&a.didMove&&w){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();w.style.transition="transform 0.2s, opacity 0.2s",w.style.removeProperty("transform"),w.style.removeProperty("opacity")}}(h=It.get((p={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||h.setToggle(p.id,p.fn),k.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||v(),window.addEventListener("focus",g),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",v)}},[e.pauseOnFocusLoss]);const b={onPointerDown:function(w){if(e.draggable===!0||e.draggable===w.pointerType){a.didMove=!1,document.addEventListener("pointermove",x),document.addEventListener("pointerup",y);const S=i.current;a.canCloseOnClick=!0,a.canDrag=!0,S.style.transition="none",e.draggableDirection==="x"?(a.start=w.clientX,a.removalDistance=S.offsetWidth*(e.draggablePercent/100)):(a.start=w.clientY,a.removalDistance=S.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(w){const{top:S,bottom:C,left:_,right:O}=i.current.getBoundingClientRect();w.nativeEvent.type!=="touchend"&&e.pauseOnHover&&w.clientX>=_&&w.clientX<=O&&w.clientY>=S&&w.clientY<=C?v():g()}};return s&&l&&(b.onMouseEnter=v,e.stacked||(b.onMouseLeave=g)),d&&(b.onClick=w=>{u&&u(w),a.canCloseOnClick&&c()}),{playToast:g,pauseToast:v,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:b}}function P6(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:a,style:s,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:p}=e;const h=i||l&&c===0,g={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};l&&(g.transform=`scaleX(${c})`);const v=_o("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":u}),x=ln(a)?a({rtl:u,type:o,defaultClassName:v}):_o(v,a),y={[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}};return Y.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":h},Y.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${o}`}),Y.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:x,style:g,...y}))}let N6=1;const o5=()=>""+N6++;function R6(e){return e&&(_i(e.toastId)||Yl(e.toastId))?e.toastId:o5()}function cl(e,t){return r5(e,t),t.toastId}function df(e,t){return{...t,type:t&&t.type||e,toastId:R6(t)}}function mu(e){return(t,n)=>cl(t,df(e,n))}function De(e,t){return cl(e,df("default",t))}De.loading=(e,t)=>cl(e,df("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),De.promise=function(e,t,n){let r,{pending:o,error:i,success:a}=t;o&&(r=_i(o)?De.loading(o,n):De.loading(o.render,{...n,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,p)=>{if(d==null)return void De.dismiss(r);const h={type:u,...s,...n,data:p},g=_i(d)?{render:d}:d;return r?De.update(r,{...h,...g}):De(g.render,{...h,...g}),p},c=ln(e)?e():e;return c.then(u=>l("success",a,u)).catch(u=>l("error",i,u)),c},De.success=mu("success"),De.info=mu("info"),De.error=mu("error"),De.warning=mu("warning"),De.warn=De.warning,De.dark=(e,t)=>cl(e,df("default",{theme:"dark",...t})),De.dismiss=function(e){(function(t){var n;if(t5()){if(t==null||_i(n=t)||Yl(n))It.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=It.get(t.containerId);r?r.removeToast(t.id):It.forEach(o=>{o.removeToast(t.id)})}}else Gl=Gl.filter(r=>t!=null&&r.options.toastId!==t)})(e)},De.clearWaitingQueue=function(e){e===void 0&&(e={}),It.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},De.isActive=n5,De.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:a}=o;return(i=It.get(a||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:o5()};i.toastId!==e&&(i.staleId=e);const a=i.render||o;delete i.render,cl(a,i)}},De.done=e=>{De.update(e,{progress:1})},De.onChange=function(e){return Wg.add(e),()=>{Wg.delete(e)}},De.play=e=>Vx(!0,e),De.pause=e=>Vx(!1,e);const A6=typeof window<"u"?k.useLayoutEffect:k.useEffect,hu=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return Y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},Om={info:function(e){return Y.createElement(hu,{...e},Y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return Y.createElement(hu,{...e},Y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return Y.createElement(hu,{...e},Y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return Y.createElement(hu,{...e},Y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Y.createElement("div",{className:"Toastify__spinner"})}},M6=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=j6(e),{closeButton:a,children:s,autoClose:l,onClick:c,type:u,hideProgressBar:d,closeToast:p,transition:h,position:g,className:v,style:x,bodyClassName:y,bodyStyle:b,progressClassName:w,progressStyle:S,updateId:C,role:_,progress:O,rtl:E,toastId:T,deleteToast:P,isIn:A,isLoading:I,closeOnClick:X,theme:H}=e,V=_o("Toastify__toast",`Toastify__toast-theme--${H}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":X}),J=ln(v)?v({rtl:E,position:g,type:u,defaultClassName:V}):_o(V,v),M=function(Z){let{theme:$,type:F,isLoading:D,icon:z}=Z,j=null;const le={theme:$,type:F};return z===!1||(ln(z)?j=z({...le,isLoading:D}):k.isValidElement(z)?j=k.cloneElement(z,le):D?j=Om.spinner():(G=>G in Om)(F)&&(j=Om[F](le))),j}(e),N=!!O||!l,U={closeToast:p,type:u,theme:H};let Q=null;return a===!1||(Q=ln(a)?a(U):k.isValidElement(a)?k.cloneElement(a,U):function(Z){let{closeToast:$,theme:F,ariaLabel:D="close"}=Z;return Y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${F}`,type:"button",onClick:z=>{z.stopPropagation(),$(z)},"aria-label":D},Y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(U)),Y.createElement(h,{isIn:A,done:P,position:g,preventExitTransition:n,nodeRef:r,playToast:i},Y.createElement("div",{id:T,onClick:c,"data-in":A,className:J,...o,style:x,ref:r},Y.createElement("div",{...A&&{role:_},className:ln(y)?y({type:u}):_o("Toastify__toast-body",y),style:b},M!=null&&Y.createElement("div",{className:_o("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!I})},M),Y.createElement("div",null,s)),Q,Y.createElement(P6,{...C&&!N?{key:`pb-${C}`}:{},rtl:E,theme:H,delay:l,isRunning:t,isIn:A,closeToast:p,hide:d,type:u,style:S,className:w,controlledProgress:N,progress:O||0})))},dp=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},L6=up(dp("bounce",!0));up(dp("slide",!0));up(dp("zoom"));up(dp("flip"));const I6={position:"top-right",transition:L6,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function D6(e){let t={...I6,...e};const n=e.stacked,[r,o]=k.useState(!0),i=k.useRef(null),{getToastToRender:a,isToastActive:s,count:l}=T6(t),{className:c,style:u,rtl:d,containerId:p}=t;function h(v){const x=_o("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":d});return ln(c)?c({position:v,rtl:d,defaultClassName:x}):_o(x,cd(c))}function g(){n&&(o(!0),De.play())}return A6(()=>{if(n){var v;const x=i.current.querySelectorAll('[data-in="true"]'),y=12,b=(v=t.position)==null?void 0:v.includes("top");let w=0,S=0;Array.from(x).reverse().forEach((C,_)=>{const O=C;O.classList.add("Toastify__toast--stacked"),_>0&&(O.dataset.collapsed=`${r}`),O.dataset.pos||(O.dataset.pos=b?"top":"bot");const E=w*(r?.2:1)+(r?0:y*_);O.style.setProperty("--y",`${b?E:-1*E}px`),O.style.setProperty("--g",`${y}`),O.style.setProperty("--s",""+(1-(r?S:0))),w+=O.offsetHeight,S+=.025})}},[r,l,n]),Y.createElement("div",{ref:i,className:"Toastify",id:p,onMouseEnter:()=>{n&&(o(!1),De.pause())},onMouseLeave:g},a((v,x)=>{const y=x.length?{...u}:{...u,pointerEvents:"none"};return Y.createElement("div",{className:h(v),style:y,key:`container-${v}`},x.map(b=>{let{content:w,props:S}=b;return Y.createElement(M6,{...S,stacked:n,collapseAll:g,isIn:s(S.toastId,S.containerId),style:S.style,key:`toast-${S.key}`},w)}))}))}const $6=()=>{const[e,t]=k.useState(""),[n,r]=k.useState(""),[o,i]=k.useState(""),[a,s]=k.useState("user"),[l,c]=k.useState(""),u=Jo(),d=async g=>{g.preventDefault();const v={username:e,email:n,pass:o,role:a};try{const x=await fetch("https://api-msib-6-travel-management-03.educalab.id/register/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(x.ok)De.success("Registration successful!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),setTimeout(()=>{u("/login")},3e3);else{const y=await x.json();c(y.message),console.error("Error:",y.message)}}catch(x){c("Failed to register. Please try again later."),console.error("Error:",x)}},[p,h]=k.useState(()=>{const g=localStorage.getItem("darkMode");return g?JSON.parse(g):!1});return k.useEffect(()=>{p?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",JSON.stringify(p))},[p]),m.jsxs("div",{className:"register-page",children:[m.jsx(D6,{}),m.jsx("div",{className:"wave-container-atas mb-5",children:m.jsx("img",{src:"/waveatas.png",alt:"Wave",className:"wave-image-atas mb-5"})}),m.jsxs("div",{className:"logo-container",children:[m.jsx("img",{src:as,width:"40",height:"auto",className:"d-inline-block align-top ms-4 mt-3",alt:"Notic logo"}),m.jsx("span",{className:"fw-bold ms-2 mt-3 register-title",children:"Notic"})]}),m.jsx("div",{className:"register-container",children:m.jsx(oe,{className:"register-card",children:m.jsxs(oe.Body,{className:"register-card-body",children:[m.jsx("div",{className:"back-to-landing mb-3",children:m.jsx($0,{to:"/",className:"text-decoration-none",children:m.jsx(Zj,{className:"me-2"})})}),m.jsx(oe.Title,{className:"register-title text-center fw-bold mb-4",children:"Register"}),m.jsxs(W,{onSubmit:d,children:[m.jsxs(Rt,{children:[m.jsx(Le,{md:6,children:m.jsxs(W.Group,{controlId:"formUsername",className:"mb-3",children:[m.jsx(W.Label,{className:"bold",children:"Username"}),m.jsx(W.Control,{type:"text",placeholder:"Input username",value:e,onChange:g=>t(g.target.value),required:!0})]})}),m.jsx(Le,{md:6,children:m.jsxs(W.Group,{controlId:"formEmail",className:"mb-3",children:[m.jsx(W.Label,{className:"bold",children:"Email"}),m.jsx(W.Control,{type:"email",placeholder:"example@notic.com",value:n,onChange:g=>r(g.target.value),required:!0})]})})]}),m.jsxs(W.Group,{controlId:"formPassword",className:"mb-3",children:[m.jsx(W.Label,{className:"bold",children:"Password"}),m.jsx(W.Control,{type:"password",placeholder:"Input password",value:o,onChange:g=>i(g.target.value),required:!0})]}),l&&m.jsx("p",{className:"text-danger",children:l}),m.jsx("div",{className:"d-flex justify-content-center mb-3",children:m.jsx(he,{type:"submit",className:"btn-register w-50",children:"Register"})})]}),m.jsxs("div",{className:"text-left mb-3 register-putih",children:["Already have an account?"," ",m.jsx("a",{href:"/login",className:"text-decoration-none",children:"Login here"})]})]})})})]})};function F6(){const[e,t]=k.useState(""),n=i=>{i.preventDefault(),console.log("Email:",e)},[r,o]=k.useState(()=>{const i=localStorage.getItem("darkMode");return i?JSON.parse(i):!1});return k.useEffect(()=>{r?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",JSON.stringify(r))},[r]),m.jsxs(Qt,{fluid:!0,className:"forgot-container",children:[m.jsx("div",{className:"wave-background",children:m.jsx("img",{src:"/wavebwh.png",alt:"waves"})}),m.jsxs("div",{className:"logo-container-fpw",children:[m.jsx("img",{src:as,width:"50",height:"auto",className:"d-inline-block align-top",alt:"Notic logo"}),m.jsx("span",{className:"fw-bold my-2",children:"Notic"})]}),m.jsxs("div",{className:"forgot-content",children:[m.jsx("div",{className:"forgot-image",children:m.jsx("img",{src:"/fpw.svg",alt:"Forgot Password"})}),m.jsxs("div",{className:"forgot-form",children:[m.jsx("h2",{className:"text-center",children:"Forgot Your Password?"}),m.jsxs(W,{onSubmit:n,children:[m.jsx(W.Group,{controlId:"formBasicEmail",children:m.jsx(W.Control,{type:"email",placeholder:"Email Address",value:e,onChange:i=>t(i.target.value),required:!0})}),m.jsx(he,{variant:"primary",type:"submit",className:"reset-button",children:"RESET PASSWORD"})]}),m.jsx("a",{href:"/login",className:"back-to-login fw-bolder",children:"Back to Login"})]})]})]})}function i5(e,t){return function(){return e.apply(t,arguments)}}const{toString:z6}=Object.prototype,{getPrototypeOf:Cb}=Object,fp=(e=>t=>{const n=z6.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),er=e=>(e=e.toLowerCase(),t=>fp(t)===e),pp=e=>t=>typeof t===e,{isArray:ss}=Array,Xl=pp("undefined");function B6(e){return e!==null&&!Xl(e)&&e.constructor!==null&&!Xl(e.constructor)&&En(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const a5=er("ArrayBuffer");function H6(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&a5(e.buffer),t}const U6=pp("string"),En=pp("function"),s5=pp("number"),mp=e=>e!==null&&typeof e=="object",W6=e=>e===!0||e===!1,ud=e=>{if(fp(e)!=="object")return!1;const t=Cb(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},V6=er("Date"),Y6=er("File"),G6=er("Blob"),X6=er("FileList"),q6=e=>mp(e)&&En(e.pipe),K6=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||En(e.append)&&((t=fp(e))==="formdata"||t==="object"&&En(e.toString)&&e.toString()==="[object FormData]"))},Q6=er("URLSearchParams"),[J6,Z6,eF,tF]=["ReadableStream","Request","Response","Headers"].map(er),nF=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bc(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),ss(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function l5(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const c5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,u5=e=>!Xl(e)&&e!==c5;function Vg(){const{caseless:e}=u5(this)&&this||{},t={},n=(r,o)=>{const i=e&&l5(t,o)||o;ud(t[i])&&ud(r)?t[i]=Vg(t[i],r):ud(r)?t[i]=Vg({},r):ss(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&bc(arguments[r],n);return t}const rF=(e,t,n,{allOwnKeys:r}={})=>(bc(t,(o,i)=>{n&&En(o)?e[i]=i5(o,n):e[i]=o},{allOwnKeys:r}),e),oF=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),iF=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},aF=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Cb(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},sF=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},lF=e=>{if(!e)return null;if(ss(e))return e;let t=e.length;if(!s5(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},cF=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Cb(Uint8Array)),uF=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},dF=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},fF=er("HTMLFormElement"),pF=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Yx=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mF=er("RegExp"),d5=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};bc(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},hF=e=>{d5(e,(t,n)=>{if(En(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(En(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gF=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return ss(e)?r(e):r(String(e).split(t)),n},vF=()=>{},bF=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Em="abcdefghijklmnopqrstuvwxyz",Gx="0123456789",f5={DIGIT:Gx,ALPHA:Em,ALPHA_DIGIT:Em+Em.toUpperCase()+Gx},yF=(e=16,t=f5.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function xF(e){return!!(e&&En(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const wF=e=>{const t=new Array(10),n=(r,o)=>{if(mp(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=ss(r)?[]:{};return bc(r,(a,s)=>{const l=n(a,o+1);!Xl(l)&&(i[s]=l)}),t[o]=void 0,i}}return r};return n(e,0)},kF=er("AsyncFunction"),SF=e=>e&&(mp(e)||En(e))&&En(e.then)&&En(e.catch),L={isArray:ss,isArrayBuffer:a5,isBuffer:B6,isFormData:K6,isArrayBufferView:H6,isString:U6,isNumber:s5,isBoolean:W6,isObject:mp,isPlainObject:ud,isReadableStream:J6,isRequest:Z6,isResponse:eF,isHeaders:tF,isUndefined:Xl,isDate:V6,isFile:Y6,isBlob:G6,isRegExp:mF,isFunction:En,isStream:q6,isURLSearchParams:Q6,isTypedArray:cF,isFileList:X6,forEach:bc,merge:Vg,extend:rF,trim:nF,stripBOM:oF,inherits:iF,toFlatObject:aF,kindOf:fp,kindOfTest:er,endsWith:sF,toArray:lF,forEachEntry:uF,matchAll:dF,isHTMLForm:fF,hasOwnProperty:Yx,hasOwnProp:Yx,reduceDescriptors:d5,freezeMethods:hF,toObjectSet:gF,toCamelCase:pF,noop:vF,toFiniteNumber:bF,findKey:l5,global:c5,isContextDefined:u5,ALPHABET:f5,generateString:yF,isSpecCompliantForm:xF,toJSONObject:wF,isAsyncFn:kF,isThenable:SF};function ve(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}L.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const p5=ve.prototype,m5={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{m5[e]={value:e}});Object.defineProperties(ve,m5);Object.defineProperty(p5,"isAxiosError",{value:!0});ve.from=(e,t,n,r,o,i)=>{const a=Object.create(p5);return L.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),ve.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const _F=null;function Yg(e){return L.isPlainObject(e)||L.isArray(e)}function h5(e){return L.endsWith(e,"[]")?e.slice(0,-2):e}function Xx(e,t,n){return e?e.concat(t).map(function(o,i){return o=h5(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function CF(e){return L.isArray(e)&&!e.some(Yg)}const OF=L.toFlatObject(L,{},null,function(t){return/^is[A-Z]/.test(t)});function hp(e,t,n){if(!L.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,x){return!L.isUndefined(x[v])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(t);if(!L.isFunction(o))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(L.isDate(g))return g.toISOString();if(!l&&L.isBlob(g))throw new ve("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(g)||L.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,x){let y=g;if(g&&!x&&typeof g=="object"){if(L.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(L.isArray(g)&&CF(g)||(L.isFileList(g)||L.endsWith(v,"[]"))&&(y=L.toArray(g)))return v=h5(v),y.forEach(function(w,S){!(L.isUndefined(w)||w===null)&&t.append(a===!0?Xx([v],S,i):a===null?v:v+"[]",c(w))}),!1}return Yg(g)?!0:(t.append(Xx(x,v,i),c(g)),!1)}const d=[],p=Object.assign(OF,{defaultVisitor:u,convertValue:c,isVisitable:Yg});function h(g,v){if(!L.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),L.forEach(g,function(y,b){(!(L.isUndefined(y)||y===null)&&o.call(t,y,L.isString(b)?b.trim():b,v,p))===!0&&h(y,v?v.concat(b):[b])}),d.pop()}}if(!L.isObject(e))throw new TypeError("data must be an object");return h(e),t}function qx(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ob(e,t){this._pairs=[],e&&hp(e,this,t)}const g5=Ob.prototype;g5.append=function(t,n){this._pairs.push([t,n])};g5.toString=function(t){const n=t?function(r){return t.call(this,r,qx)}:qx;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function EF(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function v5(e,t,n){if(!t)return e;const r=n&&n.encode||EF,o=n&&n.serialize;let i;if(o?i=o(t,n):i=L.isURLSearchParams(t)?t.toString():new Ob(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Kx{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,function(r){r!==null&&t(r)})}}const b5={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},TF=typeof URLSearchParams<"u"?URLSearchParams:Ob,jF=typeof FormData<"u"?FormData:null,PF=typeof Blob<"u"?Blob:null,NF={isBrowser:!0,classes:{URLSearchParams:TF,FormData:jF,Blob:PF},protocols:["http","https","file","blob","url","data"]},Eb=typeof window<"u"&&typeof document<"u",RF=(e=>Eb&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),AF=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",MF=Eb&&window.location.href||"http://localhost",LF=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Eb,hasStandardBrowserEnv:RF,hasStandardBrowserWebWorkerEnv:AF,origin:MF},Symbol.toStringTag,{value:"Module"})),Kn={...LF,...NF};function IF(e,t){return hp(e,new Kn.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Kn.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function DF(e){return L.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $F(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function y5(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&L.isArray(o)?o.length:a,l?(L.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!L.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&L.isArray(o[a])&&(o[a]=$F(o[a])),!s)}if(L.isFormData(e)&&L.isFunction(e.entries)){const n={};return L.forEachEntry(e,(r,o)=>{t(DF(r),o,n,0)}),n}return null}function FF(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const yc={transitional:b5,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=L.isObject(t);if(i&&L.isHTMLForm(t)&&(t=new FormData(t)),L.isFormData(t))return o?JSON.stringify(y5(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t)||L.isReadableStream(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return IF(t,this.formSerializer).toString();if((s=L.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return hp(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),FF(t)):t}],transformResponse:[function(t){const n=this.transitional||yc.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(L.isResponse(t)||L.isReadableStream(t))return t;if(t&&L.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?ve.from(s,ve.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kn.classes.FormData,Blob:Kn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],e=>{yc.headers[e]={}});const zF=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),BF=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&zF[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Qx=Symbol("internals");function Ss(e){return e&&String(e).trim().toLowerCase()}function dd(e){return e===!1||e==null?e:L.isArray(e)?e.map(dd):String(e)}function HF(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const UF=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Tm(e,t,n,r,o){if(L.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!L.isString(t)){if(L.isString(r))return t.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(t)}}function WF(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function VF(e,t){const n=L.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class en{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,l,c){const u=Ss(l);if(!u)throw new Error("header name must be a non-empty string");const d=L.findKey(o,u);(!d||o[d]===void 0||c===!0||c===void 0&&o[d]!==!1)&&(o[d||l]=dd(s))}const a=(s,l)=>L.forEach(s,(c,u)=>i(c,u,l));if(L.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(L.isString(t)&&(t=t.trim())&&!UF(t))a(BF(t),n);else if(L.isHeaders(t))for(const[s,l]of t.entries())i(l,s,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Ss(t),t){const r=L.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return HF(o);if(L.isFunction(n))return n.call(this,o,r);if(L.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ss(t),t){const r=L.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Tm(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=Ss(a),a){const s=L.findKey(r,a);s&&(!n||Tm(r,r[s],s,n))&&(delete r[s],o=!0)}}return L.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Tm(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return L.forEach(this,(o,i)=>{const a=L.findKey(r,i);if(a){n[a]=dd(o),delete n[i];return}const s=t?WF(i):String(i).trim();s!==i&&delete n[i],n[s]=dd(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return L.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Qx]=this[Qx]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=Ss(a);r[s]||(VF(o,a),r[s]=!0)}return L.isArray(t)?t.forEach(i):i(t),this}}en.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(en.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});L.freezeMethods(en);function jm(e,t){const n=this||yc,r=t||n,o=en.from(r.headers);let i=r.data;return L.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function x5(e){return!!(e&&e.__CANCEL__)}function ls(e,t,n){ve.call(this,e??"canceled",ve.ERR_CANCELED,t,n),this.name="CanceledError"}L.inherits(ls,ve,{__CANCEL__:!0});function w5(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ve("Request failed with status code "+n.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function YF(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function GF(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=r[i];a||(a=c),n[o]=l,r[o]=c;let d=i,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-a<t)return;const h=u&&c-u;return h?Math.round(p*1e3/h):void 0}}function XF(e,t){let n=0;const r=1e3/t;let o=null;return function(){const a=this===!0,s=Date.now();if(a||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(s-n)))}}const ff=(e,t,n=3)=>{let r=0;const o=GF(50,250);return XF(i=>{const a=i.loaded,s=i.lengthComputable?i.total:void 0,l=a-r,c=o(l),u=a<=s;r=a;const d={loaded:a,total:s,progress:s?a/s:void 0,bytes:l,rate:c||void 0,estimated:c&&s&&u?(s-a)/c:void 0,event:i,lengthComputable:s!=null};d[t?"download":"upload"]=!0,e(d)},n)},qF=Kn.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=L.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),KF=Kn.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];L.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),L.isString(r)&&a.push("path="+r),L.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function QF(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function JF(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function k5(e,t){return e&&!QF(t)?JF(e,t):t}const Jx=e=>e instanceof en?{...e}:e;function Di(e,t){t=t||{};const n={};function r(c,u,d){return L.isPlainObject(c)&&L.isPlainObject(u)?L.merge.call({caseless:d},c,u):L.isPlainObject(u)?L.merge({},u):L.isArray(u)?u.slice():u}function o(c,u,d){if(L.isUndefined(u)){if(!L.isUndefined(c))return r(void 0,c,d)}else return r(c,u,d)}function i(c,u){if(!L.isUndefined(u))return r(void 0,u)}function a(c,u){if(L.isUndefined(u)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function s(c,u,d){if(d in t)return r(c,u);if(d in e)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(c,u)=>o(Jx(c),Jx(u),!0)};return L.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=l[u]||o,p=d(e[u],t[u],u);L.isUndefined(p)&&d!==s||(n[u]=p)}),n}const S5=e=>{const t=Di({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:s}=t;t.headers=a=en.from(a),t.url=v5(k5(t.baseURL,t.url),e.params,e.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let l;if(L.isFormData(n)){if(Kn.hasStandardBrowserEnv||Kn.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((l=a.getContentType())!==!1){const[c,...u]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];a.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Kn.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(t)),r||r!==!1&&qF(t.url))){const c=o&&i&&KF.read(i);c&&a.set(o,c)}return t},ZF=typeof XMLHttpRequest<"u",e8=ZF&&function(e){return new Promise(function(n,r){const o=S5(e);let i=o.data;const a=en.from(o.headers).normalize();let{responseType:s}=o,l;function c(){o.cancelToken&&o.cancelToken.unsubscribe(l),o.signal&&o.signal.removeEventListener("abort",l)}let u=new XMLHttpRequest;u.open(o.method.toUpperCase(),o.url,!0),u.timeout=o.timeout;function d(){if(!u)return;const h=en.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:h,config:e,request:u};w5(function(y){n(y),c()},function(y){r(y),c()},v),u=null}"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new ve("Request aborted",ve.ECONNABORTED,o,u)),u=null)},u.onerror=function(){r(new ve("Network Error",ve.ERR_NETWORK,o,u)),u=null},u.ontimeout=function(){let g=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const v=o.transitional||b5;o.timeoutErrorMessage&&(g=o.timeoutErrorMessage),r(new ve(g,v.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,o,u)),u=null},i===void 0&&a.setContentType(null),"setRequestHeader"in u&&L.forEach(a.toJSON(),function(g,v){u.setRequestHeader(v,g)}),L.isUndefined(o.withCredentials)||(u.withCredentials=!!o.withCredentials),s&&s!=="json"&&(u.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&u.addEventListener("progress",ff(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ff(o.onUploadProgress)),(o.cancelToken||o.signal)&&(l=h=>{u&&(r(!h||h.type?new ls(null,e,u):h),u.abort(),u=null)},o.cancelToken&&o.cancelToken.subscribe(l),o.signal&&(o.signal.aborted?l():o.signal.addEventListener("abort",l)));const p=YF(o.url);if(p&&Kn.protocols.indexOf(p)===-1){r(new ve("Unsupported protocol "+p+":",ve.ERR_BAD_REQUEST,e));return}u.send(i||null)})},t8=(e,t)=>{let n=new AbortController,r;const o=function(l){if(!r){r=!0,a();const c=l instanceof Error?l:this.reason;n.abort(c instanceof ve?c:new ls(c instanceof Error?c.message:c))}};let i=t&&setTimeout(()=>{o(new ve(`timeout ${t} of ms exceeded`,ve.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",o):l.unsubscribe(o))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",o));const{signal:s}=n;return s.unsubscribe=a,[s,()=>{i&&clearTimeout(i),i=null}]},n8=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},r8=async function*(e,t,n){for await(const r of e)yield*n8(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Zx=(e,t,n,r,o)=>{const i=r8(e,t,o);let a=0;return new ReadableStream({type:"bytes",async pull(s){const{done:l,value:c}=await i.next();if(l){s.close(),r();return}let u=c.byteLength;n&&n(a+=u),s.enqueue(new Uint8Array(c))},cancel(s){return r(s),i.return()}},{highWaterMark:2})},ew=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},gp=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",_5=gp&&typeof ReadableStream=="function",Gg=gp&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),o8=_5&&(()=>{let e=!1;const t=new Request(Kn.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),tw=64*1024,Xg=_5&&!!(()=>{try{return L.isReadableStream(new Response("").body)}catch{}})(),pf={stream:Xg&&(e=>e.body)};gp&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!pf[t]&&(pf[t]=L.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new ve(`Response type '${t}' is not supported`,ve.ERR_NOT_SUPPORT,r)})})})(new Response);const i8=async e=>{if(e==null)return 0;if(L.isBlob(e))return e.size;if(L.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(L.isArrayBufferView(e))return e.byteLength;if(L.isURLSearchParams(e)&&(e=e+""),L.isString(e))return(await Gg(e)).byteLength},a8=async(e,t)=>{const n=L.toFiniteNumber(e.getContentLength());return n??i8(t)},s8=gp&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=S5(e);c=c?(c+"").toLowerCase():"text";let[h,g]=o||i||a?t8([o,i],a):[],v,x;const y=()=>{!v&&setTimeout(()=>{h&&h.unsubscribe()}),v=!0};let b;try{if(l&&o8&&n!=="get"&&n!=="head"&&(b=await a8(u,r))!==0){let _=new Request(t,{method:"POST",body:r,duplex:"half"}),O;L.isFormData(r)&&(O=_.headers.get("content-type"))&&u.setContentType(O),_.body&&(r=Zx(_.body,tw,ew(b,ff(l)),null,Gg))}L.isString(d)||(d=d?"cors":"omit"),x=new Request(t,{...p,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let w=await fetch(x);const S=Xg&&(c==="stream"||c==="response");if(Xg&&(s||S)){const _={};["status","statusText","headers"].forEach(E=>{_[E]=w[E]});const O=L.toFiniteNumber(w.headers.get("content-length"));w=new Response(Zx(w.body,tw,s&&ew(O,ff(s,!0)),S&&y,Gg),_)}c=c||"text";let C=await pf[L.findKey(pf,c)||"text"](w,e);return!S&&y(),g&&g(),await new Promise((_,O)=>{w5(_,O,{data:C,headers:en.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:x})})}catch(w){throw y(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new ve("Network Error",ve.ERR_NETWORK,e,x),{cause:w.cause||w}):ve.from(w,w&&w.code,e,x)}}),qg={http:_F,xhr:e8,fetch:s8};L.forEach(qg,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const nw=e=>`- ${e}`,l8=e=>L.isFunction(e)||e===null||e===!1,C5={getAdapter:e=>{e=L.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!l8(n)&&(r=qg[(a=String(n)).toLowerCase()],r===void 0))throw new ve(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(nw).join(`
`):" "+nw(i[0]):"as no adapter specified";throw new ve("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:qg};function Pm(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ls(null,e)}function rw(e){return Pm(e),e.headers=en.from(e.headers),e.data=jm.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),C5.getAdapter(e.adapter||yc.adapter)(e).then(function(r){return Pm(e),r.data=jm.call(e,e.transformResponse,r),r.headers=en.from(r.headers),r},function(r){return x5(r)||(Pm(e),r&&r.response&&(r.response.data=jm.call(e,e.transformResponse,r.response),r.response.headers=en.from(r.response.headers))),Promise.reject(r)})}const O5="1.7.2",Tb={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Tb[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ow={};Tb.transitional=function(t,n,r){function o(i,a){return"[Axios v"+O5+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new ve(o(a," has been removed"+(n?" in "+n:"")),ve.ERR_DEPRECATED);return n&&!ow[a]&&(ow[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function c8(e,t,n){if(typeof e!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new ve("option "+i+" must be "+l,ve.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ve("Unknown option "+i,ve.ERR_BAD_OPTION)}}const Kg={assertOptions:c8,validators:Tb},uo=Kg.validators;class Ci{constructor(t){this.defaults=t,this.interceptors={request:new Kx,response:new Kx}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Di(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Kg.assertOptions(r,{silentJSONParsing:uo.transitional(uo.boolean),forcedJSONParsing:uo.transitional(uo.boolean),clarifyTimeoutError:uo.transitional(uo.boolean)},!1),o!=null&&(L.isFunction(o)?n.paramsSerializer={serialize:o}:Kg.assertOptions(o,{encode:uo.function,serialize:uo.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&L.merge(i.common,i[n.method]);i&&L.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=en.concat(a,i);const s=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,s.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,d=0,p;if(!l){const g=[rw.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,c),p=g.length,u=Promise.resolve(n);d<p;)u=u.then(g[d++],g[d++]);return u}p=s.length;let h=n;for(d=0;d<p;){const g=s[d++],v=s[d++];try{h=g(h)}catch(x){v.call(this,x);break}}try{u=rw.call(this,h)}catch(g){return Promise.reject(g)}for(d=0,p=c.length;d<p;)u=u.then(c[d++],c[d++]);return u}getUri(t){t=Di(this.defaults,t);const n=k5(t.baseURL,t.url);return v5(n,t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(t){Ci.prototype[t]=function(n,r){return this.request(Di(r||{},{method:t,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(Di(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Ci.prototype[t]=n(),Ci.prototype[t+"Form"]=n(!0)});class jb{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new ls(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new jb(function(o){t=o}),cancel:t}}}function u8(e){return function(n){return e.apply(null,n)}}function d8(e){return L.isObject(e)&&e.isAxiosError===!0}const Qg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qg).forEach(([e,t])=>{Qg[t]=e});function E5(e){const t=new Ci(e),n=i5(Ci.prototype.request,t);return L.extend(n,Ci.prototype,t,{allOwnKeys:!0}),L.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return E5(Di(e,o))},n}const be=E5(yc);be.Axios=Ci;be.CanceledError=ls;be.CancelToken=jb;be.isCancel=x5;be.VERSION=O5;be.toFormData=hp;be.AxiosError=ve;be.Cancel=be.CanceledError;be.all=function(t){return Promise.all(t)};be.spread=u8;be.isAxiosError=d8;be.mergeConfig=Di;be.AxiosHeaders=en;be.formToJSON=e=>y5(L.isHTMLForm(e)?new FormData(e):e);be.getAdapter=C5.getAdapter;be.HttpStatusCode=Qg;be.default=be;/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function xc(e){return e+.5|0}const Co=(e,t,n)=>Math.max(Math.min(e,n),t);function zs(e){return Co(xc(e*2.55),0,255)}function $o(e){return Co(xc(e*255),0,255)}function Rr(e){return Co(xc(e/2.55)/100,0,1)}function iw(e){return Co(xc(e*100),0,100)}const bn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Jg=[..."0123456789ABCDEF"],f8=e=>Jg[e&15],p8=e=>Jg[(e&240)>>4]+Jg[e&15],gu=e=>(e&240)>>4===(e&15),m8=e=>gu(e.r)&&gu(e.g)&&gu(e.b)&&gu(e.a);function h8(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&bn[e[1]]*17,g:255&bn[e[2]]*17,b:255&bn[e[3]]*17,a:t===5?bn[e[4]]*17:255}:(t===7||t===9)&&(n={r:bn[e[1]]<<4|bn[e[2]],g:bn[e[3]]<<4|bn[e[4]],b:bn[e[5]]<<4|bn[e[6]],a:t===9?bn[e[7]]<<4|bn[e[8]]:255})),n}const g8=(e,t)=>e<255?t(e):"";function v8(e){var t=m8(e)?f8:p8;return e?"#"+t(e.r)+t(e.g)+t(e.b)+g8(e.a,t):void 0}const b8=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function T5(e,t,n){const r=t*Math.min(n,1-n),o=(i,a=(i+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[o(0),o(8),o(4)]}function y8(e,t,n){const r=(o,i=(o+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function x8(e,t,n){const r=T5(e,1,.5);let o;for(t+n>1&&(o=1/(t+n),t*=o,n*=o),o=0;o<3;o++)r[o]*=1-t-n,r[o]+=t;return r}function w8(e,t,n,r,o){return e===o?(t-n)/r+(t<n?6:0):t===o?(n-e)/r+2:(e-t)/r+4}function Pb(e){const n=e.r/255,r=e.g/255,o=e.b/255,i=Math.max(n,r,o),a=Math.min(n,r,o),s=(i+a)/2;let l,c,u;return i!==a&&(u=i-a,c=s>.5?u/(2-i-a):u/(i+a),l=w8(n,r,o,u,i),l=l*60+.5),[l|0,c||0,s]}function Nb(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map($o)}function Rb(e,t,n){return Nb(T5,e,t,n)}function k8(e,t,n){return Nb(x8,e,t,n)}function S8(e,t,n){return Nb(y8,e,t,n)}function j5(e){return(e%360+360)%360}function _8(e){const t=b8.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?zs(+t[5]):$o(+t[5]));const o=j5(+t[2]),i=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?r=k8(o,i,a):t[1]==="hsv"?r=S8(o,i,a):r=Rb(o,i,a),{r:r[0],g:r[1],b:r[2],a:n}}function C8(e,t){var n=Pb(e);n[0]=j5(n[0]+t),n=Rb(n),e.r=n[0],e.g=n[1],e.b=n[2]}function O8(e){if(!e)return;const t=Pb(e),n=t[0],r=iw(t[1]),o=iw(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${o}%, ${Rr(e.a)})`:`hsl(${n}, ${r}%, ${o}%)`}const aw={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},sw={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function E8(){const e={},t=Object.keys(sw),n=Object.keys(aw);let r,o,i,a,s;for(r=0;r<t.length;r++){for(a=s=t[r],o=0;o<n.length;o++)i=n[o],s=s.replace(i,aw[i]);i=parseInt(sw[a],16),e[s]=[i>>16&255,i>>8&255,i&255]}return e}let vu;function T8(e){vu||(vu=E8(),vu.transparent=[0,0,0,0]);const t=vu[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const j8=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function P8(e){const t=j8.exec(e);let n=255,r,o,i;if(t){if(t[7]!==r){const a=+t[7];n=t[8]?zs(a):Co(a*255,0,255)}return r=+t[1],o=+t[3],i=+t[5],r=255&(t[2]?zs(r):Co(r,0,255)),o=255&(t[4]?zs(o):Co(o,0,255)),i=255&(t[6]?zs(i):Co(i,0,255)),{r,g:o,b:i,a:n}}}function N8(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Rr(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Nm=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,na=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function R8(e,t,n){const r=na(Rr(e.r)),o=na(Rr(e.g)),i=na(Rr(e.b));return{r:$o(Nm(r+n*(na(Rr(t.r))-r))),g:$o(Nm(o+n*(na(Rr(t.g))-o))),b:$o(Nm(i+n*(na(Rr(t.b))-i))),a:e.a+n*(t.a-e.a)}}function bu(e,t,n){if(e){let r=Pb(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=Rb(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function P5(e,t){return e&&Object.assign(t||{},e)}function lw(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=$o(e[3]))):(t=P5(e,{r:0,g:0,b:0,a:1}),t.a=$o(t.a)),t}function A8(e){return e.charAt(0)==="r"?P8(e):_8(e)}class ql{constructor(t){if(t instanceof ql)return t;const n=typeof t;let r;n==="object"?r=lw(t):n==="string"&&(r=h8(t)||T8(t)||A8(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=P5(this._rgb);return t&&(t.a=Rr(t.a)),t}set rgb(t){this._rgb=lw(t)}rgbString(){return this._valid?N8(this._rgb):void 0}hexString(){return this._valid?v8(this._rgb):void 0}hslString(){return this._valid?O8(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,o=t.rgb;let i;const a=n===i?.5:n,s=2*a-1,l=r.a-o.a,c=((s*l===-1?s:(s+l)/(1+s*l))+1)/2;i=1-c,r.r=255&c*r.r+i*o.r+.5,r.g=255&c*r.g+i*o.g+.5,r.b=255&c*r.b+i*o.b+.5,r.a=a*r.a+(1-a)*o.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=R8(this._rgb,t._rgb,n)),this}clone(){return new ql(this.rgb)}alpha(t){return this._rgb.a=$o(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=xc(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return bu(this._rgb,2,t),this}darken(t){return bu(this._rgb,2,-t),this}saturate(t){return bu(this._rgb,1,t),this}desaturate(t){return bu(this._rgb,1,-t),this}rotate(t){return C8(this._rgb,t),this}}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function Or(){}const M8=(()=>{let e=0;return()=>e++})();function Ee(e){return e===null||typeof e>"u"}function Ke(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function _e(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function at(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function rn(e,t){return at(e)?e:t}function ye(e,t){return typeof e>"u"?t:e}const L8=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,N5=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function $e(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function je(e,t,n,r){let o,i,a;if(Ke(e))for(i=e.length,o=0;o<i;o++)t.call(n,e[o],o);else if(_e(e))for(a=Object.keys(e),i=a.length,o=0;o<i;o++)t.call(n,e[a[o]],a[o])}function mf(e,t){let n,r,o,i;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(o=e[n],i=t[n],o.datasetIndex!==i.datasetIndex||o.index!==i.index)return!1;return!0}function hf(e){if(Ke(e))return e.map(hf);if(_e(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let o=0;for(;o<r;++o)t[n[o]]=hf(e[n[o]]);return t}return e}function R5(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function I8(e,t,n,r){if(!R5(e))return;const o=t[e],i=n[e];_e(o)&&_e(i)?Kl(o,i,r):t[e]=hf(i)}function Kl(e,t,n){const r=Ke(t)?t:[t],o=r.length;if(!_e(e))return e;n=n||{};const i=n.merger||I8;let a;for(let s=0;s<o;++s){if(a=r[s],!_e(a))continue;const l=Object.keys(a);for(let c=0,u=l.length;c<u;++c)i(l[c],e,a,n)}return e}function ul(e,t){return Kl(e,t,{merger:D8})}function D8(e,t,n){if(!R5(e))return;const r=t[e],o=n[e];_e(r)&&_e(o)?ul(r,o):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=hf(o))}const cw={"":e=>e,x:e=>e.x,y:e=>e.y};function $8(e){const t=e.split("."),n=[];let r="";for(const o of t)r+=o,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function F8(e){const t=$8(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function Yo(e,t){return(cw[t]||(cw[t]=F8(t)))(e)}function Ab(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Ql=e=>typeof e<"u",Go=e=>typeof e=="function",uw=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function z8(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Ve=Math.PI,We=2*Ve,B8=We+Ve,gf=Number.POSITIVE_INFINITY,H8=Ve/180,ut=Ve/2,ri=Ve/4,dw=Ve*2/3,Oo=Math.log10,wr=Math.sign;function dl(e,t,n){return Math.abs(e-t)<n}function fw(e){const t=Math.round(e);e=dl(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Oo(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function U8(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((o,i)=>o-i).pop(),t}function Va(e){return!isNaN(parseFloat(e))&&isFinite(e)}function W8(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function A5(e,t,n){let r,o,i;for(r=0,o=e.length;r<o;r++)i=e[r][n],isNaN(i)||(t.min=Math.min(t.min,i),t.max=Math.max(t.max,i))}function Vn(e){return e*(Ve/180)}function Mb(e){return e*(180/Ve)}function pw(e){if(!at(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function M5(e,t){const n=t.x-e.x,r=t.y-e.y,o=Math.sqrt(n*n+r*r);let i=Math.atan2(r,n);return i<-.5*Ve&&(i+=We),{angle:i,distance:o}}function Zg(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function V8(e,t){return(e-t+B8)%We-Ve}function an(e){return(e%We+We)%We}function Jl(e,t,n,r){const o=an(e),i=an(t),a=an(n),s=an(i-o),l=an(a-o),c=an(o-i),u=an(o-a);return o===i||o===a||r&&i===a||s>l&&c<u}function yt(e,t,n){return Math.max(t,Math.min(n,e))}function Y8(e){return yt(e,-32768,32767)}function Dr(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Lb(e,t,n){n=n||(a=>e[a]<t);let r=e.length-1,o=0,i;for(;r-o>1;)i=o+r>>1,n(i)?o=i:r=i;return{lo:o,hi:r}}const $r=(e,t,n,r)=>Lb(e,n,r?o=>{const i=e[o][t];return i<n||i===n&&e[o+1][t]===n}:o=>e[o][t]<n),G8=(e,t,n)=>Lb(e,n,r=>e[r][t]>=n);function X8(e,t,n){let r=0,o=e.length;for(;r<o&&e[r]<t;)r++;for(;o>r&&e[o-1]>n;)o--;return r>0||o<e.length?e.slice(r,o):e}const L5=["push","pop","shift","splice","unshift"];function q8(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),L5.forEach(n=>{const r="_onData"+Ab(n),o=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...i){const a=o.apply(this,i);return e._chartjs.listeners.forEach(s=>{typeof s[r]=="function"&&s[r](...i)}),a}})})}function mw(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,o=r.indexOf(t);o!==-1&&r.splice(o,1),!(r.length>0)&&(L5.forEach(i=>{delete e[i]}),delete e._chartjs)}function I5(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const D5=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function $5(e,t){let n=[],r=!1;return function(...o){n=o,r||(r=!0,D5.call(window,()=>{r=!1,e.apply(t,n)}))}}function K8(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const Ib=e=>e==="start"?"left":e==="end"?"right":"center",jt=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,Q8=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function F5(e,t,n){const r=t.length;let o=0,i=r;if(e._sorted){const{iScale:a,_parsed:s}=e,l=a.axis,{min:c,max:u,minDefined:d,maxDefined:p}=a.getUserBounds();d&&(o=yt(Math.min($r(s,l,c).lo,n?r:$r(t,l,a.getPixelForValue(c)).lo),0,r-1)),p?i=yt(Math.max($r(s,a.axis,u,!0).hi+1,n?0:$r(t,l,a.getPixelForValue(u),!0).hi+1),o,r)-o:i=r-o}return{start:o,count:i}}function z5(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,o={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=o,!0;const i=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,o),i}const yu=e=>e===0||e===1,hw=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*We/n)),gw=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*We/n)+1,fl={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*ut)+1,easeOutSine:e=>Math.sin(e*ut),easeInOutSine:e=>-.5*(Math.cos(Ve*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>yu(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>yu(e)?e:hw(e,.075,.3),easeOutElastic:e=>yu(e)?e:gw(e,.075,.3),easeInOutElastic(e){return yu(e)?e:e<.5?.5*hw(e*2,.1125,.45):.5+.5*gw(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-fl.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?fl.easeInBounce(e*2)*.5:fl.easeOutBounce(e*2-1)*.5+.5};function Db(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function vw(e){return Db(e)?e:new ql(e)}function Rm(e){return Db(e)?e:new ql(e).saturate(.5).darken(.1).hexString()}const J8=["x","y","borderWidth","radius","tension"],Z8=["color","borderColor","backgroundColor"];function ez(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:Z8},numbers:{type:"number",properties:J8}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function tz(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const bw=new Map;function nz(e,t){t=t||{};const n=e+JSON.stringify(t);let r=bw.get(n);return r||(r=new Intl.NumberFormat(e,t),bw.set(n,r)),r}function wc(e,t,n){return nz(t,n).format(e)}const B5={values(e){return Ke(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let o,i=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(o="scientific"),i=rz(e,n)}const a=Oo(Math.abs(i)),s=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:o,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),wc(e,r,l)},logarithmic(e,t,n){if(e===0)return"0";const r=n[t].significand||e/Math.pow(10,Math.floor(Oo(e)));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?B5.numeric.call(this,e,t,n):""}};function rz(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var vp={formatters:B5};function oz(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:vp.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const $i=Object.create(null),ev=Object.create(null);function pl(e,t){if(!t)return e;const n=t.split(".");for(let r=0,o=n.length;r<o;++r){const i=n[r];e=e[i]||(e[i]=Object.create(null))}return e}function Am(e,t,n){return typeof t=="string"?Kl(pl(e,t),n):Kl(pl(e,""),t)}class iz{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,o)=>Rm(o.backgroundColor),this.hoverBorderColor=(r,o)=>Rm(o.borderColor),this.hoverColor=(r,o)=>Rm(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Am(this,t,n)}get(t){return pl(this,t)}describe(t,n){return Am(ev,t,n)}override(t,n){return Am($i,t,n)}route(t,n,r,o){const i=pl(this,t),a=pl(this,r),s="_"+n;Object.defineProperties(i,{[s]:{value:i[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[s],c=a[o];return _e(l)?Object.assign({},c,l):ye(l,c)},set(l){this[s]=l}}})}apply(t){t.forEach(n=>n(this))}}var st=new iz({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[ez,tz,oz]);function az(e){return!e||Ee(e.size)||Ee(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function vf(e,t,n,r,o){let i=t[o];return i||(i=t[o]=e.measureText(o).width,n.push(o)),i>r&&(r=i),r}function sz(e,t,n,r){r=r||{};let o=r.data=r.data||{},i=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(o=r.data={},i=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let a=0;const s=n.length;let l,c,u,d,p;for(l=0;l<s;l++)if(d=n[l],d!=null&&!Ke(d))a=vf(e,o,i,a,d);else if(Ke(d))for(c=0,u=d.length;c<u;c++)p=d[c],p!=null&&!Ke(p)&&(a=vf(e,o,i,a,p));e.restore();const h=i.length/2;if(h>n.length){for(l=0;l<h;l++)delete o[i[l]];i.splice(0,h)}return a}function oi(e,t,n){const r=e.currentDevicePixelRatio,o=n!==0?Math.max(n/2,.5):0;return Math.round((t-o)*r)/r+o}function yw(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function tv(e,t,n,r){H5(e,t,n,r,null)}function H5(e,t,n,r,o){let i,a,s,l,c,u,d,p;const h=t.pointStyle,g=t.rotation,v=t.radius;let x=(g||0)*H8;if(h&&typeof h=="object"&&(i=h.toString(),i==="[object HTMLImageElement]"||i==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(x),e.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),e.restore();return}if(!(isNaN(v)||v<=0)){switch(e.beginPath(),h){default:o?e.ellipse(n,r,o/2,v,0,0,We):e.arc(n,r,v,0,We),e.closePath();break;case"triangle":u=o?o/2:v,e.moveTo(n+Math.sin(x)*u,r-Math.cos(x)*v),x+=dw,e.lineTo(n+Math.sin(x)*u,r-Math.cos(x)*v),x+=dw,e.lineTo(n+Math.sin(x)*u,r-Math.cos(x)*v),e.closePath();break;case"rectRounded":c=v*.516,l=v-c,a=Math.cos(x+ri)*l,d=Math.cos(x+ri)*(o?o/2-c:l),s=Math.sin(x+ri)*l,p=Math.sin(x+ri)*(o?o/2-c:l),e.arc(n-d,r-s,c,x-Ve,x-ut),e.arc(n+p,r-a,c,x-ut,x),e.arc(n+d,r+s,c,x,x+ut),e.arc(n-p,r+a,c,x+ut,x+Ve),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*v,u=o?o/2:l,e.rect(n-u,r-l,2*u,2*l);break}x+=ri;case"rectRot":d=Math.cos(x)*(o?o/2:v),a=Math.cos(x)*v,s=Math.sin(x)*v,p=Math.sin(x)*(o?o/2:v),e.moveTo(n-d,r-s),e.lineTo(n+p,r-a),e.lineTo(n+d,r+s),e.lineTo(n-p,r+a),e.closePath();break;case"crossRot":x+=ri;case"cross":d=Math.cos(x)*(o?o/2:v),a=Math.cos(x)*v,s=Math.sin(x)*v,p=Math.sin(x)*(o?o/2:v),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+p,r-a),e.lineTo(n-p,r+a);break;case"star":d=Math.cos(x)*(o?o/2:v),a=Math.cos(x)*v,s=Math.sin(x)*v,p=Math.sin(x)*(o?o/2:v),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+p,r-a),e.lineTo(n-p,r+a),x+=ri,d=Math.cos(x)*(o?o/2:v),a=Math.cos(x)*v,s=Math.sin(x)*v,p=Math.sin(x)*(o?o/2:v),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+p,r-a),e.lineTo(n-p,r+a);break;case"line":a=o?o/2:Math.cos(x)*v,s=Math.sin(x)*v,e.moveTo(n-a,r-s),e.lineTo(n+a,r+s);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(x)*(o?o/2:v),r+Math.sin(x)*v);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function Fr(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function bp(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function yp(e){e.restore()}function lz(e,t,n,r,o){if(!t)return e.lineTo(n.x,n.y);if(o==="middle"){const i=(t.x+n.x)/2;e.lineTo(i,t.y),e.lineTo(i,n.y)}else o==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function cz(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function uz(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),Ee(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function dz(e,t,n,r,o){if(o.strikethrough||o.underline){const i=e.measureText(r),a=t-i.actualBoundingBoxLeft,s=t+i.actualBoundingBoxRight,l=n-i.actualBoundingBoxAscent,c=n+i.actualBoundingBoxDescent,u=o.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=o.decorationWidth||2,e.moveTo(a,u),e.lineTo(s,u),e.stroke()}}function fz(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Fi(e,t,n,r,o,i={}){const a=Ke(t)?t:[t],s=i.strokeWidth>0&&i.strokeColor!=="";let l,c;for(e.save(),e.font=o.string,uz(e,i),l=0;l<a.length;++l)c=a[l],i.backdrop&&fz(e,i.backdrop),s&&(i.strokeColor&&(e.strokeStyle=i.strokeColor),Ee(i.strokeWidth)||(e.lineWidth=i.strokeWidth),e.strokeText(c,n,r,i.maxWidth)),e.fillText(c,n,r,i.maxWidth),dz(e,n,r,c,i),r+=Number(o.lineHeight);e.restore()}function Zl(e,t){const{x:n,y:r,w:o,h:i,radius:a}=t;e.arc(n+a.topLeft,r+a.topLeft,a.topLeft,1.5*Ve,Ve,!0),e.lineTo(n,r+i-a.bottomLeft),e.arc(n+a.bottomLeft,r+i-a.bottomLeft,a.bottomLeft,Ve,ut,!0),e.lineTo(n+o-a.bottomRight,r+i),e.arc(n+o-a.bottomRight,r+i-a.bottomRight,a.bottomRight,ut,0,!0),e.lineTo(n+o,r+a.topRight),e.arc(n+o-a.topRight,r+a.topRight,a.topRight,0,-ut,!0),e.lineTo(n+a.topLeft,r)}const pz=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,mz=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function hz(e,t){const n=(""+e).match(pz);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const gz=e=>+e||0;function $b(e,t){const n={},r=_e(t),o=r?Object.keys(t):t,i=_e(e)?r?a=>ye(e[a],e[t[a]]):a=>e[a]:()=>e;for(const a of o)n[a]=gz(i(a));return n}function U5(e){return $b(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Oi(e){return $b(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Mt(e){const t=U5(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ht(e,t){e=e||{},t=t||st.font;let n=ye(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=ye(e.style,t.style);r&&!(""+r).match(mz)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const o={family:ye(e.family,t.family),lineHeight:hz(ye(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:ye(e.weight,t.weight),string:""};return o.string=az(o),o}function Bs(e,t,n,r){let o,i,a;for(o=0,i=e.length;o<i;++o)if(a=e[o],a!==void 0&&a!==void 0)return a}function vz(e,t,n){const{min:r,max:o}=e,i=N5(t,(o-r)/2),a=(s,l)=>n&&s===0?0:s+l;return{min:a(r,-Math.abs(i)),max:a(o,i)}}function ei(e,t){return Object.assign(Object.create(e),t)}function Fb(e,t=[""],n,r,o=()=>e[0]){const i=n||e;typeof r>"u"&&(r=G5("_fallback",e));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:i,_fallback:r,_getTarget:o,override:s=>Fb([s,...e],t,i,r)};return new Proxy(a,{deleteProperty(s,l){return delete s[l],delete s._keys,delete e[0][l],!0},get(s,l){return V5(s,l,()=>Cz(l,t,e,s))},getOwnPropertyDescriptor(s,l){return Reflect.getOwnPropertyDescriptor(s._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(s,l){return ww(s).includes(l)},ownKeys(s){return ww(s)},set(s,l,c){const u=s._storage||(s._storage=o());return s[l]=u[l]=c,delete s._keys,!0}})}function Ya(e,t,n,r){const o={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:W5(e,r),setContext:i=>Ya(e,i,n,r),override:i=>Ya(e.override(i),t,n,r)};return new Proxy(o,{deleteProperty(i,a){return delete i[a],delete e[a],!0},get(i,a,s){return V5(i,a,()=>yz(i,a,s))},getOwnPropertyDescriptor(i,a){return i._descriptors.allKeys?Reflect.has(e,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,a)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(i,a){return Reflect.has(e,a)},ownKeys(){return Reflect.ownKeys(e)},set(i,a,s){return e[a]=s,delete i[a],!0}})}function W5(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:o=t.allKeys}=e;return{allKeys:o,scriptable:n,indexable:r,isScriptable:Go(n)?n:()=>n,isIndexable:Go(r)?r:()=>r}}const bz=(e,t)=>e?e+Ab(t):t,zb=(e,t)=>_e(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function V5(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function yz(e,t,n){const{_proxy:r,_context:o,_subProxy:i,_descriptors:a}=e;let s=r[t];return Go(s)&&a.isScriptable(t)&&(s=xz(t,s,e,n)),Ke(s)&&s.length&&(s=wz(t,s,e,a.isIndexable)),zb(t,s)&&(s=Ya(s,o,i&&i[t],a)),s}function xz(e,t,n,r){const{_proxy:o,_context:i,_subProxy:a,_stack:s}=n;if(s.has(e))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+e);s.add(e);let l=t(i,a||r);return s.delete(e),zb(e,l)&&(l=Bb(o._scopes,o,e,l)),l}function wz(e,t,n,r){const{_proxy:o,_context:i,_subProxy:a,_descriptors:s}=n;if(typeof i.index<"u"&&r(e))return t[i.index%t.length];if(_e(t[0])){const l=t,c=o._scopes.filter(u=>u!==l);t=[];for(const u of l){const d=Bb(c,o,e,u);t.push(Ya(d,i,a&&a[e],s))}}return t}function Y5(e,t,n){return Go(e)?e(t,n):e}const kz=(e,t)=>e===!0?t:typeof e=="string"?Yo(t,e):void 0;function Sz(e,t,n,r,o){for(const i of t){const a=kz(n,i);if(a){e.add(a);const s=Y5(a._fallback,n,o);if(typeof s<"u"&&s!==n&&s!==r)return s}else if(a===!1&&typeof r<"u"&&n!==r)return null}return!1}function Bb(e,t,n,r){const o=t._rootScopes,i=Y5(t._fallback,n,r),a=[...e,...o],s=new Set;s.add(r);let l=xw(s,a,n,i||n,r);return l===null||typeof i<"u"&&i!==n&&(l=xw(s,a,i,l,r),l===null)?!1:Fb(Array.from(s),[""],o,i,()=>_z(t,n,r))}function xw(e,t,n,r,o){for(;n;)n=Sz(e,t,n,r,o);return n}function _z(e,t,n){const r=e._getTarget();t in r||(r[t]={});const o=r[t];return Ke(o)&&_e(n)?n:o||{}}function Cz(e,t,n,r){let o;for(const i of t)if(o=G5(bz(i,e),n),typeof o<"u")return zb(e,o)?Bb(n,r,e,o):o}function G5(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function ww(e){let t=e._keys;return t||(t=e._keys=Oz(e._scopes)),t}function Oz(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(o=>!o.startsWith("_")))t.add(r);return Array.from(t)}function X5(e,t,n,r){const{iScale:o}=e,{key:i="r"}=this._parsing,a=new Array(r);let s,l,c,u;for(s=0,l=r;s<l;++s)c=s+n,u=t[c],a[s]={r:o.parse(Yo(u,i),c)};return a}const Ez=Number.EPSILON||1e-14,Ga=(e,t)=>t<e.length&&!e[t].skip&&e[t],q5=e=>e==="x"?"y":"x";function Tz(e,t,n,r){const o=e.skip?t:e,i=t,a=n.skip?t:n,s=Zg(i,o),l=Zg(a,i);let c=s/(s+l),u=l/(s+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const d=r*c,p=r*u;return{previous:{x:i.x-d*(a.x-o.x),y:i.y-d*(a.y-o.y)},next:{x:i.x+p*(a.x-o.x),y:i.y+p*(a.y-o.y)}}}function jz(e,t,n){const r=e.length;let o,i,a,s,l,c=Ga(e,0);for(let u=0;u<r-1;++u)if(l=c,c=Ga(e,u+1),!(!l||!c)){if(dl(t[u],0,Ez)){n[u]=n[u+1]=0;continue}o=n[u]/t[u],i=n[u+1]/t[u],s=Math.pow(o,2)+Math.pow(i,2),!(s<=9)&&(a=3/Math.sqrt(s),n[u]=o*a*t[u],n[u+1]=i*a*t[u])}}function Pz(e,t,n="x"){const r=q5(n),o=e.length;let i,a,s,l=Ga(e,0);for(let c=0;c<o;++c){if(a=s,s=l,l=Ga(e,c+1),!s)continue;const u=s[n],d=s[r];a&&(i=(u-a[n])/3,s[`cp1${n}`]=u-i,s[`cp1${r}`]=d-i*t[c]),l&&(i=(l[n]-u)/3,s[`cp2${n}`]=u+i,s[`cp2${r}`]=d+i*t[c])}}function Nz(e,t="x"){const n=q5(t),r=e.length,o=Array(r).fill(0),i=Array(r);let a,s,l,c=Ga(e,0);for(a=0;a<r;++a)if(s=l,l=c,c=Ga(e,a+1),!!l){if(c){const u=c[t]-l[t];o[a]=u!==0?(c[n]-l[n])/u:0}i[a]=s?c?wr(o[a-1])!==wr(o[a])?0:(o[a-1]+o[a])/2:o[a-1]:o[a]}jz(e,o,i),Pz(e,i,t)}function xu(e,t,n){return Math.max(Math.min(e,n),t)}function Rz(e,t){let n,r,o,i,a,s=Fr(e[0],t);for(n=0,r=e.length;n<r;++n)a=i,i=s,s=n<r-1&&Fr(e[n+1],t),i&&(o=e[n],a&&(o.cp1x=xu(o.cp1x,t.left,t.right),o.cp1y=xu(o.cp1y,t.top,t.bottom)),s&&(o.cp2x=xu(o.cp2x,t.left,t.right),o.cp2y=xu(o.cp2y,t.top,t.bottom)))}function Az(e,t,n,r,o){let i,a,s,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")Nz(e,o);else{let c=r?e[e.length-1]:e[0];for(i=0,a=e.length;i<a;++i)s=e[i],l=Tz(c,s,e[Math.min(i+1,a-(r?0:1))%a],t.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,c=s}t.capBezierPoints&&Rz(e,n)}function Hb(){return typeof window<"u"&&typeof document<"u"}function Ub(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function bf(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const xp=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function Mz(e,t){return xp(e).getPropertyValue(t)}const Lz=["top","right","bottom","left"];function Ei(e,t,n){const r={};n=n?"-"+n:"";for(let o=0;o<4;o++){const i=Lz[o];r[i]=parseFloat(e[t+"-"+i+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const Iz=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function Dz(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:o,offsetY:i}=r;let a=!1,s,l;if(Iz(o,i,e.target))s=o,l=i;else{const c=t.getBoundingClientRect();s=r.clientX-c.left,l=r.clientY-c.top,a=!0}return{x:s,y:l,box:a}}function fi(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,o=xp(n),i=o.boxSizing==="border-box",a=Ei(o,"padding"),s=Ei(o,"border","width"),{x:l,y:c,box:u}=Dz(e,n),d=a.left+(u&&s.left),p=a.top+(u&&s.top);let{width:h,height:g}=t;return i&&(h-=a.width+s.width,g-=a.height+s.height),{x:Math.round((l-d)/h*n.width/r),y:Math.round((c-p)/g*n.height/r)}}function $z(e,t,n){let r,o;if(t===void 0||n===void 0){const i=e&&Ub(e);if(!i)t=e.clientWidth,n=e.clientHeight;else{const a=i.getBoundingClientRect(),s=xp(i),l=Ei(s,"border","width"),c=Ei(s,"padding");t=a.width-c.width-l.width,n=a.height-c.height-l.height,r=bf(s.maxWidth,i,"clientWidth"),o=bf(s.maxHeight,i,"clientHeight")}}return{width:t,height:n,maxWidth:r||gf,maxHeight:o||gf}}const wu=e=>Math.round(e*10)/10;function Fz(e,t,n,r){const o=xp(e),i=Ei(o,"margin"),a=bf(o.maxWidth,e,"clientWidth")||gf,s=bf(o.maxHeight,e,"clientHeight")||gf,l=$z(e,t,n);let{width:c,height:u}=l;if(o.boxSizing==="content-box"){const p=Ei(o,"border","width"),h=Ei(o,"padding");c-=h.width+p.width,u-=h.height+p.height}return c=Math.max(0,c-i.width),u=Math.max(0,r?c/r:u-i.height),c=wu(Math.min(c,a,l.maxWidth)),u=wu(Math.min(u,s,l.maxHeight)),c&&!u&&(u=wu(c/2)),(t!==void 0||n!==void 0)&&r&&l.height&&u>l.height&&(u=l.height,c=wu(Math.floor(u*r))),{width:c,height:u}}function kw(e,t,n){const r=t||1,o=Math.floor(e.height*r),i=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const a=e.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${e.height}px`,a.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||a.height!==o||a.width!==i?(e.currentDevicePixelRatio=r,a.height=o,a.width=i,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const zz=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Hb()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function Sw(e,t){const n=Mz(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function pi(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function Bz(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function Hz(e,t,n,r){const o={x:e.cp2x,y:e.cp2y},i={x:t.cp1x,y:t.cp1y},a=pi(e,o,n),s=pi(o,i,n),l=pi(i,t,n),c=pi(a,s,n),u=pi(s,l,n);return pi(c,u,n)}const Uz=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},Wz=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ja(e,t,n){return e?Uz(t,n):Wz()}function K5(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function Q5(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function J5(e){return e==="angle"?{between:Jl,compare:V8,normalize:an}:{between:Dr,compare:(t,n)=>t-n,normalize:t=>t}}function _w({start:e,end:t,count:n,loop:r,style:o}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:o}}function Vz(e,t,n){const{property:r,start:o,end:i}=n,{between:a,normalize:s}=J5(r),l=t.length;let{start:c,end:u,loop:d}=e,p,h;if(d){for(c+=l,u+=l,p=0,h=l;p<h&&a(s(t[c%l][r]),o,i);++p)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:d,style:e.style}}function Z5(e,t,n){if(!n)return[e];const{property:r,start:o,end:i}=n,a=t.length,{compare:s,between:l,normalize:c}=J5(r),{start:u,end:d,loop:p,style:h}=Vz(e,t,n),g=[];let v=!1,x=null,y,b,w;const S=()=>l(o,w,y)&&s(o,w)!==0,C=()=>s(i,y)===0||l(i,w,y),_=()=>v||S(),O=()=>!v||C();for(let E=u,T=u;E<=d;++E)b=t[E%a],!b.skip&&(y=c(b[r]),y!==w&&(v=l(y,o,i),x===null&&_()&&(x=s(y,o)===0?E:T),x!==null&&O()&&(g.push(_w({start:x,end:E,loop:p,count:a,style:h})),x=null),T=E,w=y));return x!==null&&g.push(_w({start:x,end:d,loop:p,count:a,style:h})),g}function e3(e,t){const n=[],r=e.segments;for(let o=0;o<r.length;o++){const i=Z5(r[o],e.points,t);i.length&&n.push(...i)}return n}function Yz(e,t,n,r){let o=0,i=t-1;if(n&&!r)for(;o<t&&!e[o].skip;)o++;for(;o<t&&e[o].skip;)o++;for(o%=t,n&&(i+=o);i>o&&e[i%t].skip;)i--;return i%=t,{start:o,end:i}}function Gz(e,t,n,r){const o=e.length,i=[];let a=t,s=e[t],l;for(l=t+1;l<=n;++l){const c=e[l%o];c.skip||c.stop?s.skip||(r=!1,i.push({start:t%o,end:(l-1)%o,loop:r}),t=a=c.stop?l:null):(a=l,s.skip&&(t=l)),s=c}return a!==null&&i.push({start:t%o,end:a%o,loop:r}),i}function Xz(e,t){const n=e.points,r=e.options.spanGaps,o=n.length;if(!o)return[];const i=!!e._loop,{start:a,end:s}=Yz(n,o,i,r);if(r===!0)return Cw(e,[{start:a,end:s,loop:i}],n,t);const l=s<a?s+o:s,c=!!e._fullLoop&&a===0&&s===o-1;return Cw(e,Gz(n,a,l,c),n,t)}function Cw(e,t,n,r){return!r||!r.setContext||!n?t:qz(e,t,n,r)}function qz(e,t,n,r){const o=e._chart.getContext(),i=Ow(e.options),{_datasetIndex:a,options:{spanGaps:s}}=e,l=n.length,c=[];let u=i,d=t[0].start,p=d;function h(g,v,x,y){const b=s?-1:1;if(g!==v){for(g+=l;n[g%l].skip;)g-=b;for(;n[v%l].skip;)v+=b;g%l!==v%l&&(c.push({start:g%l,end:v%l,loop:x,style:y}),u=y,d=v%l)}}for(const g of t){d=s?d:g.start;let v=n[d%l],x;for(p=d+1;p<=g.end;p++){const y=n[p%l];x=Ow(r.setContext(ei(o,{type:"segment",p0:v,p1:y,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:a}))),Kz(x,u)&&h(d,p-1,g.loop,u),v=y,u=x}d<p-1&&h(d,p-1,g.loop,u)}return c}function Ow(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Kz(e,t){if(!t)return!1;const n=[],r=function(o,i){return Db(i)?(n.includes(i)||n.push(i),n.indexOf(i)):i};return JSON.stringify(e,r)!==JSON.stringify(t,r)}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class Qz{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,o){const i=n.listeners[o],a=n.duration;i.forEach(s=>s({chart:t,initial:n.initial,numSteps:a,currentStep:Math.min(r-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=D5.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,o)=>{if(!r.running||!r.items.length)return;const i=r.items;let a=i.length-1,s=!1,l;for(;a>=0;--a)l=i[a],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),s=!0):(i[a]=i[i.length-1],i.pop());s&&(o.draw(),this._notify(o,r,t,"progress")),i.length||(r.running=!1,this._notify(o,r,t,"complete"),r.initial=!1),n+=i.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,o)=>Math.max(r,o._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let o=r.length-1;for(;o>=0;--o)r[o].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Tr=new Qz;const Ew="transparent",Jz={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=vw(e||Ew),o=r.valid&&vw(t||Ew);return o&&o.valid?o.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class Zz{constructor(t,n,r,o){const i=n[r];o=Bs([t.to,o,i,t.from]);const a=Bs([t.from,i,o]);this._active=!0,this._fn=t.fn||Jz[t.type||typeof a],this._easing=fl[t.easing]||fl.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=a,this._to=o,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const o=this._target[this._prop],i=r-this._start,a=this._duration-i;this._start=r,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=i,this._loop=!!t.loop,this._to=Bs([t.to,n,o,t.from]),this._from=Bs([t.from,o,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,o=this._prop,i=this._from,a=this._loop,s=this._to;let l;if(this._active=i!==s&&(a||n<r),!this._active){this._target[o]=s,this._notify(!0);return}if(n<0){this._target[o]=i;return}l=n/r%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[o]=this._fn(i,s,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let o=0;o<r.length;o++)r[o][n]()}}class t3{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!_e(t))return;const n=Object.keys(st.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(o=>{const i=t[o];if(!_e(i))return;const a={};for(const s of n)a[s]=i[s];(Ke(i.properties)&&i.properties||[o]).forEach(s=>{(s===o||!r.has(s))&&r.set(s,a)})})}_animateOptions(t,n){const r=n.options,o=tB(t,r);if(!o)return[];const i=this._createAnimations(o,r);return r.$shared&&eB(t.options.$animations,r).then(()=>{t.options=r},()=>{}),i}_createAnimations(t,n){const r=this._properties,o=[],i=t.$animations||(t.$animations={}),a=Object.keys(n),s=Date.now();let l;for(l=a.length-1;l>=0;--l){const c=a[l];if(c.charAt(0)==="$")continue;if(c==="options"){o.push(...this._animateOptions(t,n));continue}const u=n[c];let d=i[c];const p=r.get(c);if(d)if(p&&d.active()){d.update(p,u,s);continue}else d.cancel();if(!p||!p.duration){t[c]=u;continue}i[c]=d=new Zz(p,t,c,u),o.push(d)}return o}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Tr.add(this._chart,r),!0}}function eB(e,t){const n=[],r=Object.keys(t);for(let o=0;o<r.length;o++){const i=e[r[o]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function tB(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Tw(e,t){const n=e&&e.options||{},r=n.reverse,o=n.min===void 0?t:0,i=n.max===void 0?t:0;return{start:r?i:o,end:r?o:i}}function nB(e,t,n){if(n===!1)return!1;const r=Tw(e,n),o=Tw(t,n);return{top:o.end,right:r.end,bottom:o.start,left:r.start}}function rB(e){let t,n,r,o;return _e(e)?(t=e.top,n=e.right,r=e.bottom,o=e.left):t=n=r=o=e,{top:t,right:n,bottom:r,left:o,disabled:e===!1}}function n3(e,t){const n=[],r=e._getSortedDatasetMetas(t);let o,i;for(o=0,i=r.length;o<i;++o)n.push(r[o].index);return n}function jw(e,t,n,r={}){const o=e.keys,i=r.mode==="single";let a,s,l,c;if(t!==null){for(a=0,s=o.length;a<s;++a){if(l=+o[a],l===n){if(r.all)continue;break}c=e.values[l],at(c)&&(i||t===0||wr(t)===wr(c))&&(t+=c)}return t}}function oB(e,t){const{iScale:n,vScale:r}=t,o=n.axis==="x"?"x":"y",i=r.axis==="x"?"x":"y",a=Object.keys(e),s=new Array(a.length);let l,c,u;for(l=0,c=a.length;l<c;++l)u=a[l],s[l]={[o]:u,[i]:e[u]};return s}function Pw(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function iB(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function aB(e){const{min:t,max:n,minDefined:r,maxDefined:o}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:o?n:Number.POSITIVE_INFINITY}}function sB(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Nw(e,t,n,r){for(const o of t.getMatchingVisibleMetas(r).reverse()){const i=e[o.index];if(n&&i>0||!n&&i<0)return o.index}return null}function Rw(e,t){const{chart:n,_cachedMeta:r}=e,o=n._stacks||(n._stacks={}),{iScale:i,vScale:a,index:s}=r,l=i.axis,c=a.axis,u=iB(i,a,r),d=t.length;let p;for(let h=0;h<d;++h){const g=t[h],{[l]:v,[c]:x}=g,y=g._stacks||(g._stacks={});p=y[c]=sB(o,u,v),p[s]=x,p._top=Nw(p,a,!0,r.type),p._bottom=Nw(p,a,!1,r.type);const b=p._visualValues||(p._visualValues={});b[s]=x}}function Mm(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function lB(e,t){return ei(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function cB(e,t,n){return ei(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function _s(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const o of t){const i=o._stacks;if(!i||i[r]===void 0||i[r][n]===void 0)return;delete i[r][n],i[r]._visualValues!==void 0&&i[r]._visualValues[n]!==void 0&&delete i[r]._visualValues[n]}}}const Lm=e=>e==="reset"||e==="none",Aw=(e,t)=>t?e:Object.assign({},e),uB=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:n3(n,!0),values:null};class Qn{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Pw(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&_s(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),o=(d,p,h,g)=>d==="x"?p:d==="r"?g:h,i=n.xAxisID=ye(r.xAxisID,Mm(t,"x")),a=n.yAxisID=ye(r.yAxisID,Mm(t,"y")),s=n.rAxisID=ye(r.rAxisID,Mm(t,"r")),l=n.indexAxis,c=n.iAxisID=o(l,i,a,s),u=n.vAxisID=o(l,a,i,s);n.xScale=this.getScaleForId(i),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(s),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&mw(this._data,this),t._stacked&&_s(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(_e(n)){const o=this._cachedMeta;this._data=oB(n,o)}else if(r!==n){if(r){mw(r,this);const o=this._cachedMeta;_s(o),o._parsed=[]}n&&Object.isExtensible(n)&&q8(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let o=!1;this._dataCheck();const i=n._stacked;n._stacked=Pw(n.vScale,n),n.stack!==r.stack&&(o=!0,_s(n),n.stack=r.stack),this._resyncElements(t),(o||i!==n._stacked)&&Rw(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:o}=this,{iScale:i,_stacked:a}=r,s=i.axis;let l=t===0&&n===o.length?!0:r._sorted,c=t>0&&r._parsed[t-1],u,d,p;if(this._parsing===!1)r._parsed=o,r._sorted=!0,p=o;else{Ke(o[t])?p=this.parseArrayData(r,o,t,n):_e(o[t])?p=this.parseObjectData(r,o,t,n):p=this.parsePrimitiveData(r,o,t,n);const h=()=>d[s]===null||c&&d[s]<c[s];for(u=0;u<n;++u)r._parsed[u+t]=d=p[u],l&&(h()&&(l=!1),c=d);r._sorted=l}a&&Rw(this,p)}parsePrimitiveData(t,n,r,o){const{iScale:i,vScale:a}=t,s=i.axis,l=a.axis,c=i.getLabels(),u=i===a,d=new Array(o);let p,h,g;for(p=0,h=o;p<h;++p)g=p+r,d[p]={[s]:u||i.parse(c[g],g),[l]:a.parse(n[g],g)};return d}parseArrayData(t,n,r,o){const{xScale:i,yScale:a}=t,s=new Array(o);let l,c,u,d;for(l=0,c=o;l<c;++l)u=l+r,d=n[u],s[l]={x:i.parse(d[0],u),y:a.parse(d[1],u)};return s}parseObjectData(t,n,r,o){const{xScale:i,yScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,c=new Array(o);let u,d,p,h;for(u=0,d=o;u<d;++u)p=u+r,h=n[p],c[u]={x:i.parse(Yo(h,s),p),y:a.parse(Yo(h,l),p)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const o=this.chart,i=this._cachedMeta,a=n[t.axis],s={keys:n3(o,!0),values:n._stacks[t.axis]._visualValues};return jw(s,a,i.index,{mode:r})}updateRangeFromParsed(t,n,r,o){const i=r[n.axis];let a=i===null?NaN:i;const s=o&&r._stacks[n.axis];o&&s&&(o.values=s,a=jw(o,i,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,n){const r=this._cachedMeta,o=r._parsed,i=r._sorted&&t===r.iScale,a=o.length,s=this._getOtherScale(t),l=uB(n,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=aB(s);let p,h;function g(){h=o[p];const v=h[s.axis];return!at(h[t.axis])||u>v||d<v}for(p=0;p<a&&!(!g()&&(this.updateRangeFromParsed(c,t,h,l),i));++p);if(i){for(p=a-1;p>=0;--p)if(!g()){this.updateRangeFromParsed(c,t,h,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let o,i,a;for(o=0,i=n.length;o<i;++o)a=n[o][t.axis],at(a)&&r.push(a);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,o=n.vScale,i=this.getParsed(t);return{label:r?""+r.getLabelForValue(i[r.axis]):"",value:o?""+o.getLabelForValue(i[o.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=rB(ye(this.options.clip,nB(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,o=r.data||[],i=n.chartArea,a=[],s=this._drawStart||0,l=this._drawCount||o.length-s,c=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(t,i,s,l),u=s;u<s+l;++u){const d=o[u];d.hidden||(d.active&&c?a.push(d):d.draw(t,i))}for(u=0;u<a.length;++u)a[u].draw(t,i)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const o=this.getDataset();let i;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];i=a.$context||(a.$context=cB(this.getContext(),t,a)),i.parsed=this.getParsed(t),i.raw=o.data[t],i.index=i.dataIndex=t}else i=this.$context||(this.$context=lB(this.chart.getContext(),this.index)),i.dataset=o,i.index=i.datasetIndex=this.index;return i.active=!!n,i.mode=r,i}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const o=n==="active",i=this._cachedDataOpts,a=t+"-"+n,s=i[a],l=this.enableOptionSharing&&Ql(r);if(s)return Aw(s,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),d=o?[`${t}Hover`,"hover",t,""]:[t,""],p=c.getOptionScopes(this.getDataset(),u),h=Object.keys(st.elements[t]),g=()=>this.getContext(r,o,n),v=c.resolveNamedOptions(p,h,g,d);return v.$shared&&(v.$shared=l,i[a]=Object.freeze(Aw(v,l))),v}_resolveAnimations(t,n,r){const o=this.chart,i=this._cachedDataOpts,a=`animation-${n}`,s=i[a];if(s)return s;let l;if(o.options.animation!==!1){const u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,n),p=u.getOptionScopes(this.getDataset(),d);l=u.createResolver(p,this.getContext(t,r,n))}const c=new t3(o,l&&l.animations);return l&&l._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Lm(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),o=this._sharedOptions,i=this.getSharedOptions(r),a=this.includeOptions(n,i)||i!==o;return this.updateSharedOptions(i,n,r),{sharedOptions:i,includeOptions:a}}updateElement(t,n,r,o){Lm(o)?Object.assign(t,r):this._resolveAnimations(n,o).update(t,r)}updateSharedOptions(t,n,r){t&&!Lm(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,o){t.active=o;const i=this.getStyle(n,o);this._resolveAnimations(n,r,o).update(t,{options:!o&&this.getSharedOptions(i)||i})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[s,l,c]of this._syncList)this[s](l,c);this._syncList=[];const o=r.length,i=n.length,a=Math.min(i,o);a&&this.parse(0,a),i>o?this._insertElements(o,i-o,t):i<o&&this._removeElements(i,o-i)}_insertElements(t,n,r=!0){const o=this._cachedMeta,i=o.data,a=t+n;let s;const l=c=>{for(c.length+=n,s=c.length-1;s>=a;s--)c[s]=c[s-n]};for(l(i),s=t;s<a;++s)i[s]=new this.dataElementType;this._parsing&&l(o._parsed),this.parse(t,n),r&&this.updateElements(i,t,n,"reset")}updateElements(t,n,r,o){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const o=r._parsed.splice(t,n);r._stacked&&_s(r,o)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,o]=t;this[n](r,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}K(Qn,"defaults",{}),K(Qn,"datasetElementType",null),K(Qn,"dataElementType",null);function dB(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let o=0,i=n.length;o<i;o++)r=r.concat(n[o].controller.getAllParsedValues(e));e._cache.$bar=I5(r.sort((o,i)=>o-i))}return e._cache.$bar}function fB(e){const t=e.iScale,n=dB(t,e.type);let r=t._length,o,i,a,s;const l=()=>{a===32767||a===-32768||(Ql(s)&&(r=Math.min(r,Math.abs(a-s)||r)),s=a)};for(o=0,i=n.length;o<i;++o)a=t.getPixelForValue(n[o]),l();for(s=void 0,o=0,i=t.ticks.length;o<i;++o)a=t.getPixelForTick(o),l();return r}function pB(e,t,n,r){const o=n.barThickness;let i,a;return Ee(o)?(i=t.min*n.categoryPercentage,a=n.barPercentage):(i=o*r,a=1),{chunk:i/r,ratio:a,start:t.pixels[e]-i/2}}function mB(e,t,n,r){const o=t.pixels,i=o[e];let a=e>0?o[e-1]:null,s=e<o.length-1?o[e+1]:null;const l=n.categoryPercentage;a===null&&(a=i-(s===null?t.end-t.start:s-i)),s===null&&(s=i+i-a);const c=i-(i-Math.min(a,s))/2*l;return{chunk:Math.abs(s-a)/2*l/r,ratio:n.barPercentage,start:c}}function hB(e,t,n,r){const o=n.parse(e[0],r),i=n.parse(e[1],r),a=Math.min(o,i),s=Math.max(o,i);let l=a,c=s;Math.abs(a)>Math.abs(s)&&(l=s,c=a),t[n.axis]=c,t._custom={barStart:l,barEnd:c,start:o,end:i,min:a,max:s}}function r3(e,t,n,r){return Ke(e)?hB(e,t,n,r):t[n.axis]=n.parse(e,r),t}function Mw(e,t,n,r){const o=e.iScale,i=e.vScale,a=o.getLabels(),s=o===i,l=[];let c,u,d,p;for(c=n,u=n+r;c<u;++c)p=t[c],d={},d[o.axis]=s||o.parse(a[c],c),l.push(r3(p,d,i,c));return l}function Im(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function gB(e,t,n){return e!==0?wr(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function vB(e){let t,n,r,o,i;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(o="end",i="start"):(o="start",i="end"),{start:n,end:r,reverse:t,top:o,bottom:i}}function bB(e,t,n,r){let o=t.borderSkipped;const i={};if(!o){e.borderSkipped=i;return}if(o===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:a,end:s,reverse:l,top:c,bottom:u}=vB(e);o==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?o=c:(n._bottom||0)===r?o=u:(i[Lw(u,a,s,l)]=!0,o=c)),i[Lw(o,a,s,l)]=!0,e.borderSkipped=i}function Lw(e,t,n,r){return r?(e=yB(e,t,n),e=Iw(e,n,t)):e=Iw(e,t,n),e}function yB(e,t,n){return e===t?n:e===n?t:e}function Iw(e,t,n){return e==="start"?t:e==="end"?n:e}function xB(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class fd extends Qn{parsePrimitiveData(t,n,r,o){return Mw(t,n,r,o)}parseArrayData(t,n,r,o){return Mw(t,n,r,o)}parseObjectData(t,n,r,o){const{iScale:i,vScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,c=i.axis==="x"?s:l,u=a.axis==="x"?s:l,d=[];let p,h,g,v;for(p=r,h=r+o;p<h;++p)v=n[p],g={},g[i.axis]=i.parse(Yo(v,c),p),d.push(r3(Yo(v,u),g,a,p));return d}updateRangeFromParsed(t,n,r,o){super.updateRangeFromParsed(t,n,r,o);const i=r._custom;i&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:o}=n,i=this.getParsed(t),a=i._custom,s=Im(a)?"["+a.start+", "+a.end+"]":""+o.getLabelForValue(i[o.axis]);return{label:""+r.getLabelForValue(i[r.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,o){const i=o==="reset",{index:a,_cachedMeta:{vScale:s}}=this,l=s.getBasePixel(),c=s.isHorizontal(),u=this._getRuler(),{sharedOptions:d,includeOptions:p}=this._getSharedOptions(n,o);for(let h=n;h<n+r;h++){const g=this.getParsed(h),v=i||Ee(g[s.axis])?{base:l,head:l}:this._calculateBarValuePixels(h),x=this._calculateBarIndexPixels(h,u),y=(g._stacks||{})[s.axis],b={horizontal:c,base:v.base,enableBorderRadius:!y||Im(g._custom)||a===y._top||a===y._bottom,x:c?v.head:x.center,y:c?x.center:v.head,height:c?x.size:Math.abs(v.size),width:c?Math.abs(v.size):x.size};p&&(b.options=d||this.resolveDataElementOptions(h,t[h].active?"active":o));const w=b.options||t[h].options;bB(b,w,y,a),xB(b,w,u.ratio),this.updateElement(t[h],h,b,o)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,o=r.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),i=r.options.stacked,a=[],s=l=>{const c=l.controller.getParsed(n),u=c&&c[l.vScale.axis];if(Ee(u)||isNaN(u))return!0};for(const l of o)if(!(n!==void 0&&s(l))&&((i===!1||a.indexOf(l.stack)===-1||i===void 0&&l.stack===void 0)&&a.push(l.stack),l.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,r){const o=this._getStacks(t,r),i=n!==void 0?o.indexOf(n):-1;return i===-1?o.length-1:i}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,o=[];let i,a;for(i=0,a=n.data.length;i<a;++i)o.push(r.getPixelForValue(this.getParsed(i)[r.axis],i));const s=t.barThickness;return{min:s||fB(n),pixels:o,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:o},options:{base:i,minBarLength:a}}=this,s=i||0,l=this.getParsed(t),c=l._custom,u=Im(c);let d=l[n.axis],p=0,h=r?this.applyStack(n,l,r):d,g,v;h!==d&&(p=h-d,h=d),u&&(d=c.barStart,h=c.barEnd-c.barStart,d!==0&&wr(d)!==wr(c.barEnd)&&(p=0),p+=d);const x=!Ee(i)&&!u?i:p;let y=n.getPixelForValue(x);if(this.chart.getDataVisibility(t)?g=n.getPixelForValue(p+h):g=y,v=g-y,Math.abs(v)<a){v=gB(v,n,s)*a,d===s&&(y-=v/2);const b=n.getPixelForDecimal(0),w=n.getPixelForDecimal(1),S=Math.min(b,w),C=Math.max(b,w);y=Math.max(Math.min(y,C),S),g=y+v,r&&!u&&(l._stacks[n.axis]._visualValues[o]=n.getValueForPixel(g)-n.getValueForPixel(y))}if(y===n.getPixelForValue(s)){const b=wr(v)*n.getLineWidthForValue(s)/2;y+=b,v-=b}return{size:v,base:y,head:g,center:g+v/2}}_calculateBarIndexPixels(t,n){const r=n.scale,o=this.options,i=o.skipNull,a=ye(o.maxBarThickness,1/0);let s,l;if(n.grouped){const c=i?this._getStackCount(t):n.stackCount,u=o.barThickness==="flex"?mB(t,n,o,c):pB(t,n,o,c),d=this._getStackIndex(this.index,this._cachedMeta.stack,i?t:void 0);s=u.start+u.chunk*d+u.chunk/2,l=Math.min(a,u.chunk*u.ratio)}else s=r.getPixelForValue(this.getParsed(t)[r.axis],t),l=Math.min(a,n.min*n.ratio);return{base:s-l/2,head:s+l/2,center:s,size:l}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,o=r.length;let i=0;for(;i<o;++i)this.getParsed(i)[n.axis]!==null&&!r[i].hidden&&r[i].draw(this._ctx)}}K(fd,"id","bar"),K(fd,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),K(fd,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class pd extends Qn{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,r,o){const i=super.parsePrimitiveData(t,n,r,o);for(let a=0;a<i.length;a++)i[a]._custom=this.resolveDataElementOptions(a+r).radius;return i}parseArrayData(t,n,r,o){const i=super.parseArrayData(t,n,r,o);for(let a=0;a<i.length;a++){const s=n[r+a];i[a]._custom=ye(s[2],this.resolveDataElementOptions(a+r).radius)}return i}parseObjectData(t,n,r,o){const i=super.parseObjectData(t,n,r,o);for(let a=0;a<i.length;a++){const s=n[r+a];i[a]._custom=ye(s&&s.r&&+s.r,this.resolveDataElementOptions(a+r).radius)}return i}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let r=t.length-1;r>=0;--r)n=Math.max(n,t[r].size(this.resolveDataElementOptions(r))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:o,yScale:i}=n,a=this.getParsed(t),s=o.getLabelForValue(a.x),l=i.getLabelForValue(a.y),c=a._custom;return{label:r[t]||"",value:"("+s+", "+l+(c?", "+c:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,r,o){const i=o==="reset",{iScale:a,vScale:s}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(n,o),u=a.axis,d=s.axis;for(let p=n;p<n+r;p++){const h=t[p],g=!i&&this.getParsed(p),v={},x=v[u]=i?a.getPixelForDecimal(.5):a.getPixelForValue(g[u]),y=v[d]=i?s.getBasePixel():s.getPixelForValue(g[d]);v.skip=isNaN(x)||isNaN(y),c&&(v.options=l||this.resolveDataElementOptions(p,h.active?"active":o),i&&(v.options.radius=0)),this.updateElement(h,p,v,o)}}resolveDataElementOptions(t,n){const r=this.getParsed(t);let o=super.resolveDataElementOptions(t,n);o.$shared&&(o=Object.assign({},o,{$shared:!1}));const i=o.radius;return n!=="active"&&(o.radius=0),o.radius+=ye(r&&r._custom,i),o}}K(pd,"id","bubble"),K(pd,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),K(pd,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function wB(e,t,n){let r=1,o=1,i=0,a=0;if(t<We){const s=e,l=s+t,c=Math.cos(s),u=Math.sin(s),d=Math.cos(l),p=Math.sin(l),h=(w,S,C)=>Jl(w,s,l,!0)?1:Math.max(S,S*n,C,C*n),g=(w,S,C)=>Jl(w,s,l,!0)?-1:Math.min(S,S*n,C,C*n),v=h(0,c,d),x=h(ut,u,p),y=g(Ve,c,d),b=g(Ve+ut,u,p);r=(v-y)/2,o=(x-b)/2,i=-(v+y)/2,a=-(x+b)/2}return{ratioX:r,ratioY:o,offsetX:i,offsetY:a}}class xi extends Qn{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const r=this.getDataset().data,o=this._cachedMeta;if(this._parsing===!1)o._parsed=r;else{let i=l=>+r[l];if(_e(r[t])){const{key:l="value"}=this._parsing;i=c=>+Yo(r[c],l)}let a,s;for(a=t,s=t+n;a<s;++a)o._parsed[a]=i(a)}}_getRotation(){return Vn(this.options.rotation-90)}_getCircumference(){return Vn(this.options.circumference)}_getRotationExtents(){let t=We,n=-We;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const o=this.chart.getDatasetMeta(r).controller,i=o._getRotation(),a=o._getCircumference();t=Math.min(t,i),n=Math.max(n,i+a)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:r}=n,o=this._cachedMeta,i=o.data,a=this.getMaxBorderWidth()+this.getMaxOffset(i)+this.options.spacing,s=Math.max((Math.min(r.width,r.height)-a)/2,0),l=Math.min(L8(this.options.cutout,s),1),c=this._getRingWeight(this.index),{circumference:u,rotation:d}=this._getRotationExtents(),{ratioX:p,ratioY:h,offsetX:g,offsetY:v}=wB(d,u,l),x=(r.width-a)/p,y=(r.height-a)/h,b=Math.max(Math.min(x,y)/2,0),w=N5(this.options.radius,b),S=Math.max(w*l,0),C=(w-S)/this._getVisibleDatasetWeightTotal();this.offsetX=g*w,this.offsetY=v*w,o.total=this.calculateTotal(),this.outerRadius=w-C*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-C*c,0),this.updateElements(i,0,i.length,t)}_circumference(t,n){const r=this.options,o=this._cachedMeta,i=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(t)||o._parsed[t]===null||o.data[t].hidden?0:this.calculateCircumference(o._parsed[t]*i/We)}updateElements(t,n,r,o){const i=o==="reset",a=this.chart,s=a.chartArea,c=a.options.animation,u=(s.left+s.right)/2,d=(s.top+s.bottom)/2,p=i&&c.animateScale,h=p?0:this.innerRadius,g=p?0:this.outerRadius,{sharedOptions:v,includeOptions:x}=this._getSharedOptions(n,o);let y=this._getRotation(),b;for(b=0;b<n;++b)y+=this._circumference(b,i);for(b=n;b<n+r;++b){const w=this._circumference(b,i),S=t[b],C={x:u+this.offsetX,y:d+this.offsetY,startAngle:y,endAngle:y+w,circumference:w,outerRadius:g,innerRadius:h};x&&(C.options=v||this.resolveDataElementOptions(b,S.active?"active":o)),y+=w,this.updateElement(S,b,C,o)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let r=0,o;for(o=0;o<n.length;o++){const i=t._parsed[o];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(o)&&!n[o].hidden&&(r+=Math.abs(i))}return r}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?We*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,o=r.data.labels||[],i=wc(n._parsed[t],r.options.locale);return{label:o[t]||"",value:i}}getMaxBorderWidth(t){let n=0;const r=this.chart;let o,i,a,s,l;if(!t){for(o=0,i=r.data.datasets.length;o<i;++o)if(r.isDatasetVisible(o)){a=r.getDatasetMeta(o),t=a.data,s=a.controller;break}}if(!t)return 0;for(o=0,i=t.length;o<i;++o)l=s.resolveDataElementOptions(o),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let r=0,o=t.length;r<o;++r){const i=this.resolveDataElementOptions(r);n=Math.max(n,i.offset||0,i.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let r=0;r<t;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(t){return Math.max(ye(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}K(xi,"id","doughnut"),K(xi,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),K(xi,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),K(xi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:o}}=t.legend.options;return n.labels.map((i,a)=>{const l=t.getDatasetMeta(0).controller.getStyle(a);return{text:i,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:o,lineWidth:l.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(a),index:a}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}}});class ml extends Qn{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:o=[],_dataset:i}=n,a=this.chart._animationsDisabled;let{start:s,count:l}=F5(n,o,a);this._drawStart=s,this._drawCount=l,z5(n)&&(s=0,l=o.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!i._decimated,r.points=o;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(r,void 0,{animated:!a,options:c},t),this.updateElements(o,s,l,t)}updateElements(t,n,r,o){const i=o==="reset",{iScale:a,vScale:s,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(n,o),p=a.axis,h=s.axis,{spanGaps:g,segment:v}=this.options,x=Va(g)?g:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||i||o==="none",b=n+r,w=t.length;let S=n>0&&this.getParsed(n-1);for(let C=0;C<w;++C){const _=t[C],O=y?_:{};if(C<n||C>=b){O.skip=!0;continue}const E=this.getParsed(C),T=Ee(E[h]),P=O[p]=a.getPixelForValue(E[p],C),A=O[h]=i||T?s.getBasePixel():s.getPixelForValue(l?this.applyStack(s,E,l):E[h],C);O.skip=isNaN(P)||isNaN(A)||T,O.stop=C>0&&Math.abs(E[p]-S[p])>x,v&&(O.parsed=E,O.raw=c.data[C]),d&&(O.options=u||this.resolveDataElementOptions(C,_.active?"active":o)),y||this.updateElement(_,C,O,o),S=E}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,o=t.data||[];if(!o.length)return r;const i=o[0].size(this.resolveDataElementOptions(0)),a=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(r,i,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}K(ml,"id","line"),K(ml,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),K(ml,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class hl extends Qn{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,o=r.data.labels||[],i=wc(n._parsed[t].r,r.options.locale);return{label:o[t]||"",value:i}}parseObjectData(t,n,r,o){return X5.bind(this)(t,n,r,o)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((r,o)=>{const i=this.getParsed(o).r;!isNaN(i)&&this.chart.getDataVisibility(o)&&(i<n.min&&(n.min=i),i>n.max&&(n.max=i))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,r=t.options,o=Math.min(n.right-n.left,n.bottom-n.top),i=Math.max(o/2,0),a=Math.max(r.cutoutPercentage?i/100*r.cutoutPercentage:1,0),s=(i-a)/t.getVisibleDatasetCount();this.outerRadius=i-s*this.index,this.innerRadius=this.outerRadius-s}updateElements(t,n,r,o){const i=o==="reset",a=this.chart,l=a.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,d=c.yCenter,p=c.getIndexAngle(0)-.5*Ve;let h=p,g;const v=360/this.countVisibleElements();for(g=0;g<n;++g)h+=this._computeAngle(g,o,v);for(g=n;g<n+r;g++){const x=t[g];let y=h,b=h+this._computeAngle(g,o,v),w=a.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;h=b,i&&(l.animateScale&&(w=0),l.animateRotate&&(y=b=p));const S={x:u,y:d,innerRadius:0,outerRadius:w,startAngle:y,endAngle:b,options:this.resolveDataElementOptions(g,x.active?"active":o)};this.updateElement(x,g,S,o)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((r,o)=>{!isNaN(this.getParsed(o).r)&&this.chart.getDataVisibility(o)&&n++}),n}_computeAngle(t,n,r){return this.chart.getDataVisibility(t)?Vn(this.resolveDataElementOptions(t,n).angle||r):0}}K(hl,"id","polarArea"),K(hl,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),K(hl,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:o}}=t.legend.options;return n.labels.map((i,a)=>{const l=t.getDatasetMeta(0).controller.getStyle(a);return{text:i,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:o,lineWidth:l.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(a),index:a}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class nv extends xi{}K(nv,"id","pie"),K(nv,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class md extends Qn{getLabelAndValue(t){const n=this._cachedMeta.vScale,r=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(t,n,r,o){return X5.bind(this)(t,n,r,o)}update(t){const n=this._cachedMeta,r=n.dataset,o=n.data||[],i=n.iScale.getLabels();if(r.points=o,t!=="resize"){const a=this.resolveDatasetElementOptions(t);this.options.showLine||(a.borderWidth=0);const s={_loop:!0,_fullLoop:i.length===o.length,options:a};this.updateElement(r,void 0,s,t)}this.updateElements(o,0,o.length,t)}updateElements(t,n,r,o){const i=this._cachedMeta.rScale,a=o==="reset";for(let s=n;s<n+r;s++){const l=t[s],c=this.resolveDataElementOptions(s,l.active?"active":o),u=i.getPointPositionForValue(s,this.getParsed(s).r),d=a?i.xCenter:u.x,p=a?i.yCenter:u.y,h={x:d,y:p,angle:u.angle,skip:isNaN(d)||isNaN(p),options:c};this.updateElement(l,s,h,o)}}}K(md,"id","radar"),K(md,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),K(md,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class hd extends Qn{getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:o,yScale:i}=n,a=this.getParsed(t),s=o.getLabelForValue(a.x),l=i.getLabelForValue(a.y);return{label:r[t]||"",value:"("+s+", "+l+")"}}update(t){const n=this._cachedMeta,{data:r=[]}=n,o=this.chart._animationsDisabled;let{start:i,count:a}=F5(n,r,o);if(this._drawStart=i,this._drawCount=a,z5(n)&&(i=0,a=r.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:s,_dataset:l}=n;s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!l._decimated,s.points=r;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:c},t)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(r,i,a,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,n,r,o){const i=o==="reset",{iScale:a,vScale:s,_stacked:l,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(n,o),d=this.getSharedOptions(u),p=this.includeOptions(o,d),h=a.axis,g=s.axis,{spanGaps:v,segment:x}=this.options,y=Va(v)?v:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||i||o==="none";let w=n>0&&this.getParsed(n-1);for(let S=n;S<n+r;++S){const C=t[S],_=this.getParsed(S),O=b?C:{},E=Ee(_[g]),T=O[h]=a.getPixelForValue(_[h],S),P=O[g]=i||E?s.getBasePixel():s.getPixelForValue(l?this.applyStack(s,_,l):_[g],S);O.skip=isNaN(T)||isNaN(P)||E,O.stop=S>0&&Math.abs(_[h]-w[h])>y,x&&(O.parsed=_,O.raw=c.data[S]),p&&(O.options=d||this.resolveDataElementOptions(S,C.active?"active":o)),b||this.updateElement(C,S,O,o),w=_}this.updateSharedOptions(d,o,u)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let s=0;for(let l=n.length-1;l>=0;--l)s=Math.max(s,n[l].size(this.resolveDataElementOptions(l))/2);return s>0&&s}const r=t.dataset,o=r.options&&r.options.borderWidth||0;if(!n.length)return o;const i=n[0].size(this.resolveDataElementOptions(0)),a=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(o,i,a)/2}}K(hd,"id","scatter"),K(hd,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),K(hd,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var kB=Object.freeze({__proto__:null,BarController:fd,BubbleController:pd,DoughnutController:xi,LineController:ml,PieController:nv,PolarAreaController:hl,RadarController:md,ScatterController:hd});function ii(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Wb{constructor(t){K(this,"options");this.options=t||{}}static override(t){Object.assign(Wb.prototype,t)}init(){}formats(){return ii()}parse(){return ii()}format(){return ii()}add(){return ii()}diff(){return ii()}startOf(){return ii()}endOf(){return ii()}}var SB={_date:Wb};function _B(e,t,n,r){const{controller:o,data:i,_sorted:a}=e,s=o._cachedMeta.iScale;if(s&&t===s.axis&&t!=="r"&&a&&i.length){const l=s._reversePixels?G8:$r;if(r){if(o._sharedOptions){const c=i[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const d=l(i,t,n-u),p=l(i,t,n+u);return{lo:d.lo,hi:p.hi}}}}else return l(i,t,n)}return{lo:0,hi:i.length-1}}function kc(e,t,n,r,o){const i=e.getSortedVisibleDatasetMetas(),a=n[t];for(let s=0,l=i.length;s<l;++s){const{index:c,data:u}=i[s],{lo:d,hi:p}=_B(i[s],t,a,o);for(let h=d;h<=p;++h){const g=u[h];g.skip||r(g,c,h)}}}function CB(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,o){const i=t?Math.abs(r.x-o.x):0,a=n?Math.abs(r.y-o.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(a,2))}}function Dm(e,t,n,r,o){const i=[];return!o&&!e.isPointInArea(t)||kc(e,n,t,function(s,l,c){!o&&!Fr(s,e.chartArea,0)||s.inRange(t.x,t.y,r)&&i.push({element:s,datasetIndex:l,index:c})},!0),i}function OB(e,t,n,r){let o=[];function i(a,s,l){const{startAngle:c,endAngle:u}=a.getProps(["startAngle","endAngle"],r),{angle:d}=M5(a,{x:t.x,y:t.y});Jl(d,c,u)&&o.push({element:a,datasetIndex:s,index:l})}return kc(e,n,t,i),o}function EB(e,t,n,r,o,i){let a=[];const s=CB(n);let l=Number.POSITIVE_INFINITY;function c(u,d,p){const h=u.inRange(t.x,t.y,o);if(r&&!h)return;const g=u.getCenterPoint(o);if(!(!!i||e.isPointInArea(g))&&!h)return;const x=s(t,g);x<l?(a=[{element:u,datasetIndex:d,index:p}],l=x):x===l&&a.push({element:u,datasetIndex:d,index:p})}return kc(e,n,t,c),a}function $m(e,t,n,r,o,i){return!i&&!e.isPointInArea(t)?[]:n==="r"&&!r?OB(e,t,n,o):EB(e,t,n,r,o,i)}function Dw(e,t,n,r,o){const i=[],a=n==="x"?"inXRange":"inYRange";let s=!1;return kc(e,n,t,(l,c,u)=>{l[a](t[n],o)&&(i.push({element:l,datasetIndex:c,index:u}),s=s||l.inRange(t.x,t.y,o))}),r&&!s?[]:i}var TB={evaluateInteractionItems:kc,modes:{index(e,t,n,r){const o=fi(t,e),i=n.axis||"x",a=n.includeInvisible||!1,s=n.intersect?Dm(e,o,i,r,a):$m(e,o,i,!1,r,a),l=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=s[0].index,d=c.data[u];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,n,r){const o=fi(t,e),i=n.axis||"xy",a=n.includeInvisible||!1;let s=n.intersect?Dm(e,o,i,r,a):$m(e,o,i,!1,r,a);if(s.length>0){const l=s[0].datasetIndex,c=e.getDatasetMeta(l).data;s=[];for(let u=0;u<c.length;++u)s.push({element:c[u],datasetIndex:l,index:u})}return s},point(e,t,n,r){const o=fi(t,e),i=n.axis||"xy",a=n.includeInvisible||!1;return Dm(e,o,i,r,a)},nearest(e,t,n,r){const o=fi(t,e),i=n.axis||"xy",a=n.includeInvisible||!1;return $m(e,o,i,n.intersect,r,a)},x(e,t,n,r){const o=fi(t,e);return Dw(e,o,"x",n.intersect,r)},y(e,t,n,r){const o=fi(t,e);return Dw(e,o,"y",n.intersect,r)}}};const o3=["left","top","right","bottom"];function Cs(e,t){return e.filter(n=>n.pos===t)}function $w(e,t){return e.filter(n=>o3.indexOf(n.pos)===-1&&n.box.axis===t)}function Os(e,t){return e.sort((n,r)=>{const o=t?r:n,i=t?n:r;return o.weight===i.weight?o.index-i.index:o.weight-i.weight})}function jB(e){const t=[];let n,r,o,i,a,s;for(n=0,r=(e||[]).length;n<r;++n)o=e[n],{position:i,options:{stack:a,stackWeight:s=1}}=o,t.push({index:n,box:o,pos:i,horizontal:o.isHorizontal(),weight:o.weight,stack:a&&i+a,stackWeight:s});return t}function PB(e){const t={};for(const n of e){const{stack:r,pos:o,stackWeight:i}=n;if(!r||!o3.includes(o))continue;const a=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function NB(e,t){const n=PB(e),{vBoxMaxWidth:r,hBoxMaxHeight:o}=t;let i,a,s;for(i=0,a=e.length;i<a;++i){s=e[i];const{fullSize:l}=s.box,c=n[s.stack],u=c&&s.stackWeight/c.weight;s.horizontal?(s.width=u?u*r:l&&t.availableWidth,s.height=o):(s.width=r,s.height=u?u*o:l&&t.availableHeight)}return n}function RB(e){const t=jB(e),n=Os(t.filter(c=>c.box.fullSize),!0),r=Os(Cs(t,"left"),!0),o=Os(Cs(t,"right")),i=Os(Cs(t,"top"),!0),a=Os(Cs(t,"bottom")),s=$w(t,"x"),l=$w(t,"y");return{fullSize:n,leftAndTop:r.concat(i),rightAndBottom:o.concat(l).concat(a).concat(s),chartArea:Cs(t,"chartArea"),vertical:r.concat(o).concat(l),horizontal:i.concat(a).concat(s)}}function Fw(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function i3(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function AB(e,t,n,r){const{pos:o,box:i}=n,a=e.maxPadding;if(!_e(o)){n.size&&(e[o]-=n.size);const d=r[n.stack]||{size:0,count:1};d.size=Math.max(d.size,n.horizontal?i.height:i.width),n.size=d.size/d.count,e[o]+=n.size}i.getPadding&&i3(a,i.getPadding());const s=Math.max(0,t.outerWidth-Fw(a,e,"left","right")),l=Math.max(0,t.outerHeight-Fw(a,e,"top","bottom")),c=s!==e.w,u=l!==e.h;return e.w=s,e.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function MB(e){const t=e.maxPadding;function n(r){const o=Math.max(t[r]-e[r],0);return e[r]+=o,o}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function LB(e,t){const n=t.maxPadding;function r(o){const i={left:0,top:0,right:0,bottom:0};return o.forEach(a=>{i[a]=Math.max(t[a],n[a])}),i}return r(e?["left","right"]:["top","bottom"])}function Hs(e,t,n,r){const o=[];let i,a,s,l,c,u;for(i=0,a=e.length,c=0;i<a;++i){s=e[i],l=s.box,l.update(s.width||t.w,s.height||t.h,LB(s.horizontal,t));const{same:d,other:p}=AB(t,n,s,r);c|=d&&o.length,u=u||p,l.fullSize||o.push(s)}return c&&Hs(o,t,n,r)||u}function ku(e,t,n,r,o){e.top=n,e.left=t,e.right=t+r,e.bottom=n+o,e.width=r,e.height=o}function zw(e,t,n,r){const o=n.padding;let{x:i,y:a}=t;for(const s of e){const l=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},u=s.stackWeight/c.weight||1;if(s.horizontal){const d=t.w*u,p=c.size||l.height;Ql(c.start)&&(a=c.start),l.fullSize?ku(l,o.left,a,n.outerWidth-o.right-o.left,p):ku(l,t.left+c.placed,a,d,p),c.start=a,c.placed+=d,a=l.bottom}else{const d=t.h*u,p=c.size||l.width;Ql(c.start)&&(i=c.start),l.fullSize?ku(l,i,o.top,p,n.outerHeight-o.bottom-o.top):ku(l,i,t.top+c.placed,p,d),c.start=i,c.placed+=d,i=l.right}}t.x=i,t.y=a}var Nt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const o=Mt(e.options.layout.padding),i=Math.max(t-o.width,0),a=Math.max(n-o.height,0),s=RB(e.boxes),l=s.vertical,c=s.horizontal;je(e.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const u=l.reduce((v,x)=>x.box.options&&x.box.options.display===!1?v:v+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:o,availableWidth:i,availableHeight:a,vBoxMaxWidth:i/2/u,hBoxMaxHeight:a/2}),p=Object.assign({},o);i3(p,Mt(r));const h=Object.assign({maxPadding:p,w:i,h:a,x:o.left,y:o.top},o),g=NB(l.concat(c),d);Hs(s.fullSize,h,d,g),Hs(l,h,d,g),Hs(c,h,d,g)&&Hs(l,h,d,g),MB(h),zw(s.leftAndTop,h,d,g),h.x+=h.w,h.y+=h.h,zw(s.rightAndBottom,h,d,g),e.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},je(s.chartArea,v=>{const x=v.box;Object.assign(x,e.chartArea),x.update(h.w,h.h,{left:0,top:0,right:0,bottom:0})})}};class a3{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,o){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,o?Math.floor(n/o):r)}}isAttached(t){return!0}updateConfig(t){}}class IB extends a3{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const gd="$chartjs",DB={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Bw=e=>e===null||e==="";function $B(e,t){const n=e.style,r=e.getAttribute("height"),o=e.getAttribute("width");if(e[gd]={initial:{height:r,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Bw(o)){const i=Sw(e,"width");i!==void 0&&(e.width=i)}if(Bw(r))if(e.style.height==="")e.height=e.width/(t||2);else{const i=Sw(e,"height");i!==void 0&&(e.height=i)}return e}const s3=zz?{passive:!0}:!1;function FB(e,t,n){e&&e.addEventListener(t,n,s3)}function zB(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,s3)}function BB(e,t){const n=DB[e.type]||e.type,{x:r,y:o}=fi(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:o!==void 0?o:null}}function yf(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function HB(e,t,n){const r=e.canvas,o=new MutationObserver(i=>{let a=!1;for(const s of i)a=a||yf(s.addedNodes,r),a=a&&!yf(s.removedNodes,r);a&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}function UB(e,t,n){const r=e.canvas,o=new MutationObserver(i=>{let a=!1;for(const s of i)a=a||yf(s.removedNodes,r),a=a&&!yf(s.addedNodes,r);a&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}const ec=new Map;let Hw=0;function l3(){const e=window.devicePixelRatio;e!==Hw&&(Hw=e,ec.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function WB(e,t){ec.size||window.addEventListener("resize",l3),ec.set(e,t)}function VB(e){ec.delete(e),ec.size||window.removeEventListener("resize",l3)}function YB(e,t,n){const r=e.canvas,o=r&&Ub(r);if(!o)return;const i=$5((s,l)=>{const c=o.clientWidth;n(s,l),c<o.clientWidth&&n()},window),a=new ResizeObserver(s=>{const l=s[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||i(c,u)});return a.observe(o),WB(e,i),a}function Fm(e,t,n){n&&n.disconnect(),t==="resize"&&VB(e)}function GB(e,t,n){const r=e.canvas,o=$5(i=>{e.ctx!==null&&n(BB(i,e))},e);return FB(r,t,o),o}class XB extends a3{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?($B(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[gd])return!1;const r=n[gd].initial;["height","width"].forEach(i=>{const a=r[i];Ee(a)?n.removeAttribute(i):n.setAttribute(i,a)});const o=r.style||{};return Object.keys(o).forEach(i=>{n.style[i]=o[i]}),n.width=n.width,delete n[gd],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const o=t.$proxies||(t.$proxies={}),a={attach:HB,detach:UB,resize:YB}[n]||GB;o[n]=a(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),o=r[n];if(!o)return;({attach:Fm,detach:Fm,resize:Fm}[n]||zB)(t,n,o),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,o){return Fz(t,n,r,o)}isAttached(t){const n=t&&Ub(t);return!!(n&&n.isConnected)}}function qB(e){return!Hb()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?IB:XB}var Yu;let ro=(Yu=class{constructor(){K(this,"x");K(this,"y");K(this,"active",!1);K(this,"options");K(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return Va(this.x)&&Va(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const o={};return t.forEach(i=>{o[i]=r[i]&&r[i].active()?r[i]._to:this[i]}),o}},K(Yu,"defaults",{}),K(Yu,"defaultRoutes"),Yu);function KB(e,t){const n=e.options.ticks,r=QB(e),o=Math.min(n.maxTicksLimit||r,r),i=n.major.enabled?ZB(t):[],a=i.length,s=i[0],l=i[a-1],c=[];if(a>o)return e7(t,c,i,a/o),c;const u=JB(i,t,o);if(a>0){let d,p;const h=a>1?Math.round((l-s)/(a-1)):null;for(Su(t,c,u,Ee(h)?0:s-h,s),d=0,p=a-1;d<p;d++)Su(t,c,u,i[d],i[d+1]);return Su(t,c,u,l,Ee(h)?t.length:l+h),c}return Su(t,c,u),c}function QB(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),o=e._maxLength/n;return Math.floor(Math.min(r,o))}function JB(e,t,n){const r=t7(e),o=t.length/n;if(!r)return Math.max(o,1);const i=U8(r);for(let a=0,s=i.length-1;a<s;a++){const l=i[a];if(l>o)return l}return Math.max(o,1)}function ZB(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function e7(e,t,n,r){let o=0,i=n[0],a;for(r=Math.ceil(r),a=0;a<e.length;a++)a===i&&(t.push(e[a]),o++,i=n[o*r])}function Su(e,t,n,r,o){const i=ye(r,0),a=Math.min(ye(o,e.length),e.length);let s=0,l,c,u;for(n=Math.ceil(n),o&&(l=o-r,n=l/Math.floor(l/n)),u=i;u<0;)s++,u=Math.round(i+s*n);for(c=Math.max(i,0);c<a;c++)c===u&&(t.push(e[c]),s++,u=Math.round(i+s*n))}function t7(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const n7=e=>e==="left"?"right":e==="right"?"left":e,Uw=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,Ww=(e,t)=>Math.min(t||e,e);function Vw(e,t){const n=[],r=e.length/t,o=e.length;let i=0;for(;i<o;i+=r)n.push(e[Math.floor(i)]);return n}function r7(e,t,n){const r=e.ticks.length,o=Math.min(t,r-1),i=e._startPixel,a=e._endPixel,s=1e-6;let l=e.getPixelForTick(o),c;if(!(n&&(r===1?c=Math.max(l-i,a-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(o-1))/2,l+=o<t?c:-c,l<i-s||l>a+s)))return l}function o7(e,t){je(e,n=>{const r=n.gc,o=r.length/2;let i;if(o>t){for(i=0;i<o;++i)delete n.data[r[i]];r.splice(0,o)}})}function Es(e){return e.drawTicks?e.tickLength:0}function Yw(e,t){if(!e.display)return 0;const n=ht(e.font,t),r=Mt(e.padding);return(Ke(e.text)?e.text.length:1)*n.lineHeight+r.height}function i7(e,t){return ei(e,{scale:t,type:"scale"})}function a7(e,t,n){return ei(e,{tick:n,index:t,type:"tick"})}function s7(e,t,n){let r=Ib(e);return(n&&t!=="right"||!n&&t==="right")&&(r=n7(r)),r}function l7(e,t,n,r){const{top:o,left:i,bottom:a,right:s,chart:l}=e,{chartArea:c,scales:u}=l;let d=0,p,h,g;const v=a-o,x=s-i;if(e.isHorizontal()){if(h=jt(r,i,s),_e(n)){const y=Object.keys(n)[0],b=n[y];g=u[y].getPixelForValue(b)+v-t}else n==="center"?g=(c.bottom+c.top)/2+v-t:g=Uw(e,n,t);p=s-i}else{if(_e(n)){const y=Object.keys(n)[0],b=n[y];h=u[y].getPixelForValue(b)-x+t}else n==="center"?h=(c.left+c.right)/2-x+t:h=Uw(e,n,t);g=jt(r,a,o),d=n==="left"?-ut:ut}return{titleX:h,titleY:g,maxWidth:p,rotation:d}}class Gi extends ro{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:o}=this;return t=rn(t,Number.POSITIVE_INFINITY),n=rn(n,Number.NEGATIVE_INFINITY),r=rn(r,Number.POSITIVE_INFINITY),o=rn(o,Number.NEGATIVE_INFINITY),{min:rn(t,r),max:rn(n,o),minDefined:at(t),maxDefined:at(n)}}getMinMax(t){let{min:n,max:r,minDefined:o,maxDefined:i}=this.getUserBounds(),a;if(o&&i)return{min:n,max:r};const s=this.getMatchingVisibleMetas();for(let l=0,c=s.length;l<c;++l)a=s[l].controller.getMinMax(this,t),o||(n=Math.min(n,a.min)),i||(r=Math.max(r,a.max));return n=i&&n>r?r:n,r=o&&n>r?n:r,{min:rn(n,rn(r,n)),max:rn(r,rn(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){$e(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:o,grace:i,ticks:a}=this.options,s=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=vz(this,i,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=s<this.ticks.length;this._convertTicksToLabels(l?Vw(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=KB(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){$e(this.options.afterUpdate,[this])}beforeSetDimensions(){$e(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){$e(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),$e(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){$e(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r],i.label=$e(n.callback,[i.value,r,t],this)}afterTickToLabelConversion(){$e(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){$e(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=Ww(this.ticks.length,t.ticks.maxTicksLimit),o=n.minRotation||0,i=n.maxRotation;let a=o,s,l,c;if(!this._isVisible()||!n.display||o>=i||r<=1||!this.isHorizontal()){this.labelRotation=o;return}const u=this._getLabelSizes(),d=u.widest.width,p=u.highest.height,h=yt(this.chart.width-d,0,this.maxWidth);s=t.offset?this.maxWidth/r:h/(r-1),d+6>s&&(s=h/(r-(t.offset?.5:1)),l=this.maxHeight-Es(t.grid)-n.padding-Yw(t.title,this.chart.options.font),c=Math.sqrt(d*d+p*p),a=Mb(Math.min(Math.asin(yt((u.highest.height+6)/s,-1,1)),Math.asin(yt(l/c,-1,1))-Math.asin(yt(p/c,-1,1)))),a=Math.max(o,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){$e(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){$e(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:o,grid:i}}=this,a=this._isVisible(),s=this.isHorizontal();if(a){const l=Yw(o,n.options.font);if(s?(t.width=this.maxWidth,t.height=Es(i)+l):(t.height=this.maxHeight,t.width=Es(i)+l),r.display&&this.ticks.length){const{first:c,last:u,widest:d,highest:p}=this._getLabelSizes(),h=r.padding*2,g=Vn(this.labelRotation),v=Math.cos(g),x=Math.sin(g);if(s){const y=r.mirror?0:x*d.width+v*p.height;t.height=Math.min(this.maxHeight,t.height+y+h)}else{const y=r.mirror?0:v*d.width+x*p.height;t.width=Math.min(this.maxWidth,t.width+y+h)}this._calculatePadding(c,u,x,v)}}this._handleMargins(),s?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,o){const{ticks:{align:i,padding:a},position:s}=this.options,l=this.labelRotation!==0,c=s!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,h=0;l?c?(p=o*t.width,h=r*n.height):(p=r*t.height,h=o*n.width):i==="start"?h=n.width:i==="end"?p=t.width:i!=="inner"&&(p=t.width/2,h=n.width/2),this.paddingLeft=Math.max((p-u+a)*this.width/(this.width-u),0),this.paddingRight=Math.max((h-d+a)*this.width/(this.width-d),0)}else{let u=n.height/2,d=t.height/2;i==="start"?(u=0,d=t.height):i==="end"&&(u=n.height,d=0),this.paddingTop=u+a,this.paddingBottom=d+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){$e(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)Ee(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=Vw(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:o,_longestTextCache:i}=this,a=[],s=[],l=Math.floor(n/Ww(n,r));let c=0,u=0,d,p,h,g,v,x,y,b,w,S,C;for(d=0;d<n;d+=l){if(g=t[d].label,v=this._resolveTickFontOptions(d),o.font=x=v.string,y=i[x]=i[x]||{data:{},gc:[]},b=v.lineHeight,w=S=0,!Ee(g)&&!Ke(g))w=vf(o,y.data,y.gc,w,g),S=b;else if(Ke(g))for(p=0,h=g.length;p<h;++p)C=g[p],!Ee(C)&&!Ke(C)&&(w=vf(o,y.data,y.gc,w,C),S+=b);a.push(w),s.push(S),c=Math.max(w,c),u=Math.max(S,u)}o7(i,n);const _=a.indexOf(c),O=s.indexOf(u),E=T=>({width:a[T]||0,height:s[T]||0});return{first:E(0),last:E(n-1),widest:E(_),highest:E(O),widths:a,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return Y8(this._alignToPixels?oi(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=a7(this.getContext(),t,r))}return this.$context||(this.$context=i7(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=Vn(this.labelRotation),r=Math.abs(Math.cos(n)),o=Math.abs(Math.sin(n)),i=this._getLabelSizes(),a=t.autoSkipPadding||0,s=i?i.widest.width+a:0,l=i?i.highest.height+a:0;return this.isHorizontal()?l*r>s*o?s/r:l/o:l*o<s*r?l/r:s/o}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,o=this.options,{grid:i,position:a,border:s}=o,l=i.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),p=Es(i),h=[],g=s.setContext(this.getContext()),v=g.display?g.width:0,x=v/2,y=function(J){return oi(r,J,v)};let b,w,S,C,_,O,E,T,P,A,I,X;if(a==="top")b=y(this.bottom),O=this.bottom-p,T=b-x,A=y(t.top)+x,X=t.bottom;else if(a==="bottom")b=y(this.top),A=t.top,X=y(t.bottom)-x,O=b+x,T=this.top+p;else if(a==="left")b=y(this.right),_=this.right-p,E=b-x,P=y(t.left)+x,I=t.right;else if(a==="right")b=y(this.left),P=t.left,I=y(t.right)-x,_=b+x,E=this.left+p;else if(n==="x"){if(a==="center")b=y((t.top+t.bottom)/2+.5);else if(_e(a)){const J=Object.keys(a)[0],M=a[J];b=y(this.chart.scales[J].getPixelForValue(M))}A=t.top,X=t.bottom,O=b+x,T=O+p}else if(n==="y"){if(a==="center")b=y((t.left+t.right)/2);else if(_e(a)){const J=Object.keys(a)[0],M=a[J];b=y(this.chart.scales[J].getPixelForValue(M))}_=b-x,E=_-p,P=t.left,I=t.right}const H=ye(o.ticks.maxTicksLimit,d),V=Math.max(1,Math.ceil(d/H));for(w=0;w<d;w+=V){const J=this.getContext(w),M=i.setContext(J),N=s.setContext(J),U=M.lineWidth,Q=M.color,Z=N.dash||[],$=N.dashOffset,F=M.tickWidth,D=M.tickColor,z=M.tickBorderDash||[],j=M.tickBorderDashOffset;S=r7(this,w,l),S!==void 0&&(C=oi(r,S,U),c?_=E=P=I=C:O=T=A=X=C,h.push({tx1:_,ty1:O,tx2:E,ty2:T,x1:P,y1:A,x2:I,y2:X,width:U,color:Q,borderDash:Z,borderDashOffset:$,tickWidth:F,tickColor:D,tickBorderDash:z,tickBorderDashOffset:j}))}return this._ticksLength=d,this._borderValue=b,h}_computeLabelItems(t){const n=this.axis,r=this.options,{position:o,ticks:i}=r,a=this.isHorizontal(),s=this.ticks,{align:l,crossAlign:c,padding:u,mirror:d}=i,p=Es(r.grid),h=p+u,g=d?-u:h,v=-Vn(this.labelRotation),x=[];let y,b,w,S,C,_,O,E,T,P,A,I,X="middle";if(o==="top")_=this.bottom-g,O=this._getXAxisLabelAlignment();else if(o==="bottom")_=this.top+g,O=this._getXAxisLabelAlignment();else if(o==="left"){const V=this._getYAxisLabelAlignment(p);O=V.textAlign,C=V.x}else if(o==="right"){const V=this._getYAxisLabelAlignment(p);O=V.textAlign,C=V.x}else if(n==="x"){if(o==="center")_=(t.top+t.bottom)/2+h;else if(_e(o)){const V=Object.keys(o)[0],J=o[V];_=this.chart.scales[V].getPixelForValue(J)+h}O=this._getXAxisLabelAlignment()}else if(n==="y"){if(o==="center")C=(t.left+t.right)/2-h;else if(_e(o)){const V=Object.keys(o)[0],J=o[V];C=this.chart.scales[V].getPixelForValue(J)}O=this._getYAxisLabelAlignment(p).textAlign}n==="y"&&(l==="start"?X="top":l==="end"&&(X="bottom"));const H=this._getLabelSizes();for(y=0,b=s.length;y<b;++y){w=s[y],S=w.label;const V=i.setContext(this.getContext(y));E=this.getPixelForTick(y)+i.labelOffset,T=this._resolveTickFontOptions(y),P=T.lineHeight,A=Ke(S)?S.length:1;const J=A/2,M=V.color,N=V.textStrokeColor,U=V.textStrokeWidth;let Q=O;a?(C=E,O==="inner"&&(y===b-1?Q=this.options.reverse?"left":"right":y===0?Q=this.options.reverse?"right":"left":Q="center"),o==="top"?c==="near"||v!==0?I=-A*P+P/2:c==="center"?I=-H.highest.height/2-J*P+P:I=-H.highest.height+P/2:c==="near"||v!==0?I=P/2:c==="center"?I=H.highest.height/2-J*P:I=H.highest.height-A*P,d&&(I*=-1),v!==0&&!V.showLabelBackdrop&&(C+=P/2*Math.sin(v))):(_=E,I=(1-A)*P/2);let Z;if(V.showLabelBackdrop){const $=Mt(V.backdropPadding),F=H.heights[y],D=H.widths[y];let z=I-$.top,j=0-$.left;switch(X){case"middle":z-=F/2;break;case"bottom":z-=F;break}switch(O){case"center":j-=D/2;break;case"right":j-=D;break;case"inner":y===b-1?j-=D:y>0&&(j-=D/2);break}Z={left:j,top:z,width:D+$.width,height:F+$.height,color:V.backdropColor}}x.push({label:S,font:T,textOffset:I,options:{rotation:v,color:M,strokeColor:N,strokeWidth:U,textAlign:Q,textBaseline:X,translation:[C,_],backdrop:Z}})}return x}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-Vn(this.labelRotation))return t==="top"?"left":"right";let o="center";return n.align==="start"?o="left":n.align==="end"?o="right":n.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:o,padding:i}}=this.options,a=this._getLabelSizes(),s=t+i,l=a.widest.width;let c,u;return n==="left"?o?(u=this.right+i,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-s,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?o?(u=this.left+i,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+s,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:o,width:i,height:a}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,o,i,a),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const o=this.ticks.findIndex(i=>i.value===t);return o>=0?n.setContext(this.getContext(o)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let i,a;const s=(l,c,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(c.x,c.y),r.stroke(),r.restore())};if(n.display)for(i=0,a=o.length;i<a;++i){const l=o[i];n.drawOnChartArea&&s({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&s({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:o}}=this,i=r.setContext(this.getContext()),a=r.display?i.width:0;if(!a)return;const s=o.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,d,p;this.isHorizontal()?(c=oi(t,this.left,a)-a/2,u=oi(t,this.right,s)+s/2,d=p=l):(d=oi(t,this.top,a)-a/2,p=oi(t,this.bottom,s)+s/2,c=u=l),n.save(),n.lineWidth=i.width,n.strokeStyle=i.color,n.beginPath(),n.moveTo(c,d),n.lineTo(u,p),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,o=this._computeLabelArea();o&&bp(r,o);const i=this.getLabelItems(t);for(const a of i){const s=a.options,l=a.font,c=a.label,u=a.textOffset;Fi(r,c,0,u,l,s)}o&&yp(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:o}}=this;if(!r.display)return;const i=ht(r.font),a=Mt(r.padding),s=r.align;let l=i.lineHeight/2;n==="bottom"||n==="center"||_e(n)?(l+=a.bottom,Ke(r.text)&&(l+=i.lineHeight*(r.text.length-1))):l+=a.top;const{titleX:c,titleY:u,maxWidth:d,rotation:p}=l7(this,l,n,s);Fi(t,r.text,0,0,i,{color:r.color,maxWidth:d,rotation:p,textAlign:s7(s,n,o),textBaseline:"middle",translation:[c,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=ye(t.grid&&t.grid.z,-1),o=ye(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Gi.prototype.draw?[{z:n,draw:i=>{this.draw(i)}}]:[{z:r,draw:i=>{this.drawBackground(),this.drawGrid(i),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:n,draw:i=>{this.drawLabels(i)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",o=[];let i,a;for(i=0,a=n.length;i<a;++i){const s=n[i];s[r]===this.id&&(!t||s.type===t)&&o.push(s)}return o}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return ht(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class _u{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;d7(n)&&(r=this.register(n));const o=this.items,i=t.id,a=this.scope+"."+i;if(!i)throw new Error("class does not have id: "+t);return i in o||(o[i]=t,c7(t,a,r),this.override&&st.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,o=this.scope;r in n&&delete n[r],o&&r in st[o]&&(delete st[o][r],this.override&&delete $i[r])}}function c7(e,t,n){const r=Kl(Object.create(null),[n?st.get(n):{},st.get(t),e.defaults]);st.set(t,r),e.defaultRoutes&&u7(t,e.defaultRoutes),e.descriptors&&st.describe(t,e.descriptors)}function u7(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),o=r.pop(),i=[e].concat(r).join("."),a=t[n].split("."),s=a.pop(),l=a.join(".");st.route(i,o,l,s)})}function d7(e){return"id"in e&&"defaults"in e}class f7{constructor(){this.controllers=new _u(Qn,"datasets",!0),this.elements=new _u(ro,"elements"),this.plugins=new _u(Object,"plugins"),this.scales=new _u(Gi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(o=>{const i=r||this._getRegistryForType(o);r||i.isForType(o)||i===this.plugins&&o.id?this._exec(t,i,o):je(o,a=>{const s=r||this._getRegistryForType(a);this._exec(t,s,a)})})}_exec(t,n,r){const o=Ab(t);$e(r["before"+o],[],r),n[t](r),$e(r["after"+o],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const o=n.get(t);if(o===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return o}}var sr=new f7;class p7{constructor(){this._init=[]}notify(t,n,r,o){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const i=o?this._descriptors(t).filter(o):this._descriptors(t),a=this._notify(i,t,n,r);return n==="afterDestroy"&&(this._notify(i,t,"stop"),this._notify(this._init,t,"uninstall")),a}_notify(t,n,r,o){o=o||{};for(const i of t){const a=i.plugin,s=a[r],l=[n,o,i.options];if($e(s,l,a)===!1&&o.cancelable)return!1}return!0}invalidate(){Ee(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,o=ye(r.options&&r.options.plugins,{}),i=m7(r);return o===!1&&!n?[]:g7(t,i,o,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,o=(i,a)=>i.filter(s=>!a.some(l=>s.plugin.id===l.plugin.id));this._notify(o(n,r),t,"stop"),this._notify(o(r,n),t,"start")}}function m7(e){const t={},n=[],r=Object.keys(sr.plugins.items);for(let i=0;i<r.length;i++)n.push(sr.getPlugin(r[i]));const o=e.plugins||[];for(let i=0;i<o.length;i++){const a=o[i];n.indexOf(a)===-1&&(n.push(a),t[a.id]=!0)}return{plugins:n,localIds:t}}function h7(e,t){return!t&&e===!1?null:e===!0?{}:e}function g7(e,{plugins:t,localIds:n},r,o){const i=[],a=e.getContext();for(const s of t){const l=s.id,c=h7(r[l],o);c!==null&&i.push({plugin:s,options:v7(e.config,{plugin:s,local:n[l]},c,a)})}return i}function v7(e,{plugin:t,local:n},r,o){const i=e.pluginScopeKeys(t),a=e.getOptionScopes(r,i);return n&&t.defaults&&a.push(t.defaults),e.createResolver(a,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function rv(e,t){const n=st.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function b7(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function y7(e,t){return e===t?"_index_":"_value_"}function Gw(e){if(e==="x"||e==="y"||e==="r")return e}function x7(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function ov(e,...t){if(Gw(e))return e;for(const n of t){const r=n.axis||x7(n.position)||e.length>1&&Gw(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Xw(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function w7(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return Xw(e,"x",n[0])||Xw(e,"y",n[0])}return{}}function k7(e,t){const n=$i[e.type]||{scales:{}},r=t.scales||{},o=rv(e.type,t),i=Object.create(null);return Object.keys(r).forEach(a=>{const s=r[a];if(!_e(s))return console.error(`Invalid scale configuration for scale: ${a}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=ov(a,s,w7(a,e),st.scales[s.type]),c=y7(l,o),u=n.scales||{};i[a]=ul(Object.create(null),[{axis:l},s,u[l],u[c]])}),e.data.datasets.forEach(a=>{const s=a.type||e.type,l=a.indexAxis||rv(s,t),u=($i[s]||{}).scales||{};Object.keys(u).forEach(d=>{const p=b7(d,l),h=a[p+"AxisID"]||p;i[h]=i[h]||Object.create(null),ul(i[h],[{axis:p},r[h],u[d]])})}),Object.keys(i).forEach(a=>{const s=i[a];ul(s,[st.scales[s.type],st.scale])}),i}function c3(e){const t=e.options||(e.options={});t.plugins=ye(t.plugins,{}),t.scales=k7(e,t)}function u3(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function S7(e){return e=e||{},e.data=u3(e.data),c3(e),e}const qw=new Map,d3=new Set;function Cu(e,t){let n=qw.get(e);return n||(n=t(),qw.set(e,n),d3.add(n)),n}const Ts=(e,t,n)=>{const r=Yo(t,n);r!==void 0&&e.add(r)};class _7{constructor(t){this._config=S7(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=u3(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),c3(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Cu(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return Cu(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return Cu(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return Cu(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let o=r.get(t);return(!o||n)&&(o=new Map,r.set(t,o)),o}getOptionScopes(t,n,r){const{options:o,type:i}=this,a=this._cachedScopes(t,r),s=a.get(n);if(s)return s;const l=new Set;n.forEach(u=>{t&&(l.add(t),u.forEach(d=>Ts(l,t,d))),u.forEach(d=>Ts(l,o,d)),u.forEach(d=>Ts(l,$i[i]||{},d)),u.forEach(d=>Ts(l,st,d)),u.forEach(d=>Ts(l,ev,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),d3.has(n)&&a.set(n,c),c}chartOptionScopes(){const{options:t,type:n}=this;return[t,$i[n]||{},st.datasets[n]||{},{type:n},st,ev]}resolveNamedOptions(t,n,r,o=[""]){const i={$shared:!0},{resolver:a,subPrefixes:s}=Kw(this._resolverCache,t,o);let l=a;if(O7(a,n)){i.$shared=!1,r=Go(r)?r():r;const c=this.createResolver(t,r,s);l=Ya(a,r,c)}for(const c of n)i[c]=l[c];return i}createResolver(t,n,r=[""],o){const{resolver:i}=Kw(this._resolverCache,t,r);return _e(n)?Ya(i,n,void 0,o):i}}function Kw(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const o=n.join();let i=r.get(o);return i||(i={resolver:Fb(t,n),subPrefixes:n.filter(s=>!s.toLowerCase().includes("hover"))},r.set(o,i)),i}const C7=e=>_e(e)&&Object.getOwnPropertyNames(e).some(t=>Go(e[t]));function O7(e,t){const{isScriptable:n,isIndexable:r}=W5(e);for(const o of t){const i=n(o),a=r(o),s=(a||i)&&e[o];if(i&&(Go(s)||C7(s))||a&&Ke(s))return!0}return!1}var E7="4.4.3";const T7=["top","bottom","left","right","chartArea"];function Qw(e,t){return e==="top"||e==="bottom"||T7.indexOf(e)===-1&&t==="x"}function Jw(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Zw(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),$e(n&&n.onComplete,[e],t)}function j7(e){const t=e.chart,n=t.options.animation;$e(n&&n.onProgress,[e],t)}function f3(e){return Hb()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const vd={},ek=e=>{const t=f3(e);return Object.values(vd).filter(n=>n.canvas===t).pop()};function P7(e,t,n){const r=Object.keys(e);for(const o of r){const i=+o;if(i>=t){const a=e[o];delete e[o],(n>0||i>t)&&(e[i+n]=a)}}}function N7(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}function Ou(e,t,n){return e.options.clip?e[n]:t[n]}function R7(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:Ou(n,t,"left"),right:Ou(n,t,"right"),top:Ou(r,t,"top"),bottom:Ou(r,t,"bottom")}:t}var ho;let cs=(ho=class{static register(...t){sr.add(...t),tk()}static unregister(...t){sr.remove(...t),tk()}constructor(t,n){const r=this.config=new _7(n),o=f3(t),i=ek(o);if(i)throw new Error("Canvas is already in use. Chart with ID '"+i.id+"' must be destroyed before the canvas with ID '"+i.canvas.id+"' can be reused.");const a=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||qB(o)),this.platform.updateConfig(r);const s=this.platform.acquireContext(o,a.aspectRatio),l=s&&s.canvas,c=l&&l.height,u=l&&l.width;if(this.id=M8(),this.ctx=s,this.canvas=l,this.width=u,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new p7,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=K8(d=>this.update(d),a.resizeDelay||0),this._dataChanges=[],vd[this.id]=this,!s||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Tr.listen(this,"complete",Zw),Tr.listen(this,"progress",j7),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:o,_aspectRatio:i}=this;return Ee(t)?n&&i?i:o?r/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return sr}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():kw(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return yw(this.canvas,this.ctx),this}stop(){return Tr.stop(this),this}resize(t,n){Tr.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,o=this.canvas,i=r.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(o,t,n,i),s=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,kw(this,s,!0)&&(this.notifyPlugins("resize",{size:a}),$e(r.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};je(n,(r,o)=>{r.id=o})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,o=Object.keys(r).reduce((a,s)=>(a[s]=!1,a),{});let i=[];n&&(i=i.concat(Object.keys(n).map(a=>{const s=n[a],l=ov(a,s),c=l==="r",u=l==="x";return{options:s,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),je(i,a=>{const s=a.options,l=s.id,c=ov(l,s),u=ye(s.type,a.dtype);(s.position===void 0||Qw(s.position,c)!==Qw(a.dposition))&&(s.position=a.dposition),o[l]=!0;let d=null;if(l in r&&r[l].type===u)d=r[l];else{const p=sr.getScale(u);d=new p({id:l,type:u,ctx:this.ctx,chart:this}),r[d.id]=d}d.init(s,t)}),je(o,(a,s)=>{a||delete r[s]}),je(r,a=>{Nt.configure(this,a,a.options),Nt.addBox(this,a)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((o,i)=>o.index-i.index),r>n){for(let o=n;o<r;++o)this._destroyDatasetMeta(o);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(Jw("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,o)=>{n.filter(i=>i===r._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,o;for(this._removeUnreferencedMetasets(),r=0,o=n.length;r<o;r++){const i=n[r];let a=this.getDatasetMeta(r);const s=i.type||this.config.type;if(a.type&&a.type!==s&&(this._destroyDatasetMeta(r),a=this.getDatasetMeta(r)),a.type=s,a.indexAxis=i.indexAxis||rv(s,this.options),a.order=i.order||0,a.index=r,a.label=""+i.label,a.visible=this.isDatasetVisible(r),a.controller)a.controller.updateIndex(r),a.controller.linkScales();else{const l=sr.getController(s),{datasetElementType:c,dataElementType:u}=st.datasets[s];Object.assign(l,{dataElementType:sr.getElement(u),datasetElementType:c&&sr.getElement(c)}),a.controller=new l(this,r),t.push(a.controller)}}return this._updateMetasets(),t}_resetElements(){je(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const i=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:d}=this.getDatasetMeta(c),p=!o&&i.indexOf(d)===-1;d.buildOrUpdateElements(p),a=Math.max(+d.getMaxOverflow(),a)}a=this._minPadding=r.layout.autoPadding?a:0,this._updateLayout(a),o||je(i,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Jw("z","_idx"));const{_active:s,_lastEvent:l}=this;l?this._eventHandler(l,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){je(this.scales,t=>{Nt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!uw(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:o,count:i}of n){const a=r==="_removeElements"?-i:i;P7(t,o,a)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=i=>new Set(t.filter(a=>a[0]===i).map((a,s)=>s+","+a.splice(1).join(","))),o=r(0);for(let i=1;i<n;i++)if(!uw(o,r(i)))return;return Array.from(o).map(i=>i.split(",")).map(i=>({method:i[1],start:+i[2],count:+i[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Nt.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],je(this.boxes,o=>{r&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,i)=>{o._idx=i}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Go(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),o={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(r.controller._update(n),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Tr.has(this)?this.attached&&!Tr.running(this)&&Tr.start(this):(this.draw(),Zw({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:o}=this._resizeBeforeDraw;this._resize(r,o),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let o,i;for(o=0,i=n.length;o<i;++o){const a=n[o];(!t||a.visible)&&r.push(a)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r=t._clip,o=!r.disabled,i=R7(t,this.chartArea),a={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",a)!==!1&&(o&&bp(n,{left:r.left===!1?0:i.left-r.left,right:r.right===!1?this.width:i.right+r.right,top:r.top===!1?0:i.top-r.top,bottom:r.bottom===!1?this.height:i.bottom+r.bottom}),t.controller.draw(),o&&yp(n),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(t){return Fr(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,o){const i=TB.modes[n];return typeof i=="function"?i(this,t,r,o):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let o=r.filter(i=>i&&i._dataset===n).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(o)),o}getContext(){return this.$context||(this.$context=ei(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const o=r?"show":"hide",i=this.getDatasetMeta(t),a=i.controller._resolveAnimations(void 0,o);Ql(n)?(i.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),a.update(i,{visible:r}),this.update(s=>s.datasetIndex===t?o:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),Tr.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),yw(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete vd[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(i,a)=>{n.addEventListener(this,i,a),t[i]=a},o=(i,a,s)=>{i.offsetX=a,i.offsetY=s,this._eventHandler(i)};je(this.options.events,i=>r(i,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,c)=>{n.addEventListener(this,l,c),t[l]=c},o=(l,c)=>{t[l]&&(n.removeEventListener(this,l,c),delete t[l])},i=(l,c)=>{this.canvas&&this.resize(l,c)};let a;const s=()=>{o("attach",s),this.attached=!0,this.resize(),r("resize",i),r("detach",a)};a=()=>{this.attached=!1,o("resize",i),this._stop(),this._resize(0,0),r("attach",s)},n.isAttached(this.canvas)?s():a()}unbindEvents(){je(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},je(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const o=r?"set":"remove";let i,a,s,l;for(n==="dataset"&&(i=this.getDatasetMeta(t[0].datasetIndex),i.controller["_"+o+"DatasetHoverStyle"]()),s=0,l=t.length;s<l;++s){a=t[s];const c=a&&this.getDatasetMeta(a.datasetIndex).controller;c&&c[o+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:i,index:a})=>{const s=this.getDatasetMeta(i);if(!s)throw new Error("No dataset found at index "+i);return{datasetIndex:i,element:s.data[a],index:a}});!mf(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const o=this.options.hover,i=(l,c)=>l.filter(u=>!c.some(d=>u.datasetIndex===d.datasetIndex&&u.index===d.index)),a=i(n,t),s=r?t:i(t,n);a.length&&this.updateHoverStyle(a,o.mode,!1),s.length&&o.mode&&this.updateHoverStyle(s,o.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},o=a=>(a.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,o)===!1)return;const i=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,o),(i||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:o=[],options:i}=this,a=n,s=this._getActiveElements(t,o,r,a),l=z8(t),c=N7(t,this._lastEvent,r,l);r&&(this._lastEvent=null,$e(i.onHover,[t,s,this],this),l&&$e(i.onClick,[t,s,this],this));const u=!mf(s,o);return(u||n)&&(this._active=s,this._updateHoverStyles(s,o,n)),this._lastEvent=c,u}_getActiveElements(t,n,r,o){if(t.type==="mouseout")return[];if(!r)return n;const i=this.options.hover;return this.getElementsAtEventForMode(t,i.mode,i,o)}},K(ho,"defaults",st),K(ho,"instances",vd),K(ho,"overrides",$i),K(ho,"registry",sr),K(ho,"version",E7),K(ho,"getChart",ek),ho);function tk(){return je(cs.instances,e=>e._plugins.invalidate())}function A7(e,t,n){const{startAngle:r,pixelMargin:o,x:i,y:a,outerRadius:s,innerRadius:l}=t;let c=o/s;e.beginPath(),e.arc(i,a,s,r-c,n+c),l>o?(c=o/l,e.arc(i,a,l,n+c,r-c,!0)):e.arc(i,a,o,n+ut,r-ut),e.closePath(),e.clip()}function M7(e){return $b(e,["outerStart","outerEnd","innerStart","innerEnd"])}function L7(e,t,n,r){const o=M7(e.options.borderRadius),i=(n-t)/2,a=Math.min(i,r*t/2),s=l=>{const c=(n-Math.min(i,l))*r/2;return yt(l,0,Math.min(i,c))};return{outerStart:s(o.outerStart),outerEnd:s(o.outerEnd),innerStart:yt(o.innerStart,0,a),innerEnd:yt(o.innerEnd,0,a)}}function ra(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function xf(e,t,n,r,o,i){const{x:a,y:s,startAngle:l,pixelMargin:c,innerRadius:u}=t,d=Math.max(t.outerRadius+r+n-c,0),p=u>0?u+r+n+c:0;let h=0;const g=o-l;if(r){const V=u>0?u-r:0,J=d>0?d-r:0,M=(V+J)/2,N=M!==0?g*M/(M+r):g;h=(g-N)/2}const v=Math.max(.001,g*d-n/Ve)/d,x=(g-v)/2,y=l+x+h,b=o-x-h,{outerStart:w,outerEnd:S,innerStart:C,innerEnd:_}=L7(t,p,d,b-y),O=d-w,E=d-S,T=y+w/O,P=b-S/E,A=p+C,I=p+_,X=y+C/A,H=b-_/I;if(e.beginPath(),i){const V=(T+P)/2;if(e.arc(a,s,d,T,V),e.arc(a,s,d,V,P),S>0){const U=ra(E,P,a,s);e.arc(U.x,U.y,S,P,b+ut)}const J=ra(I,b,a,s);if(e.lineTo(J.x,J.y),_>0){const U=ra(I,H,a,s);e.arc(U.x,U.y,_,b+ut,H+Math.PI)}const M=(b-_/p+(y+C/p))/2;if(e.arc(a,s,p,b-_/p,M,!0),e.arc(a,s,p,M,y+C/p,!0),C>0){const U=ra(A,X,a,s);e.arc(U.x,U.y,C,X+Math.PI,y-ut)}const N=ra(O,y,a,s);if(e.lineTo(N.x,N.y),w>0){const U=ra(O,T,a,s);e.arc(U.x,U.y,w,y-ut,T)}}else{e.moveTo(a,s);const V=Math.cos(T)*d+a,J=Math.sin(T)*d+s;e.lineTo(V,J);const M=Math.cos(P)*d+a,N=Math.sin(P)*d+s;e.lineTo(M,N)}e.closePath()}function I7(e,t,n,r,o){const{fullCircles:i,startAngle:a,circumference:s}=t;let l=t.endAngle;if(i){xf(e,t,n,r,l,o);for(let c=0;c<i;++c)e.fill();isNaN(s)||(l=a+(s%We||We))}return xf(e,t,n,r,l,o),e.fill(),l}function D7(e,t,n,r,o){const{fullCircles:i,startAngle:a,circumference:s,options:l}=t,{borderWidth:c,borderJoinStyle:u,borderDash:d,borderDashOffset:p}=l,h=l.borderAlign==="inner";if(!c)return;e.setLineDash(d||[]),e.lineDashOffset=p,h?(e.lineWidth=c*2,e.lineJoin=u||"round"):(e.lineWidth=c,e.lineJoin=u||"bevel");let g=t.endAngle;if(i){xf(e,t,n,r,g,o);for(let v=0;v<i;++v)e.stroke();isNaN(s)||(g=a+(s%We||We))}h&&A7(e,t,g),i||(xf(e,t,n,r,g,o),e.stroke())}class Us extends ro{constructor(n){super();K(this,"circumference");K(this,"endAngle");K(this,"fullCircles");K(this,"innerRadius");K(this,"outerRadius");K(this,"pixelMargin");K(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,o){const i=this.getProps(["x","y"],o),{angle:a,distance:s}=M5(i,{x:n,y:r}),{startAngle:l,endAngle:c,innerRadius:u,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),h=(this.options.spacing+this.options.borderWidth)/2,v=ye(p,c-l)>=We||Jl(a,l,c),x=Dr(s,u+h,d+h);return v&&x}getCenterPoint(n){const{x:r,y:o,startAngle:i,endAngle:a,innerRadius:s,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:u}=this.options,d=(i+a)/2,p=(s+l+u+c)/2;return{x:r+Math.cos(d)*p,y:o+Math.sin(d)*p}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:o}=this,i=(r.offset||0)/4,a=(r.spacing||0)/2,s=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=o>We?Math.floor(o/We):0,o===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*i,Math.sin(l)*i);const c=1-Math.sin(Math.min(Ve,o||0)),u=i*c;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,I7(n,this,u,a,s),D7(n,this,u,a,s),n.restore()}}K(Us,"id","arc"),K(Us,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),K(Us,"defaultRoutes",{backgroundColor:"backgroundColor"}),K(Us,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function p3(e,t,n=t){e.lineCap=ye(n.borderCapStyle,t.borderCapStyle),e.setLineDash(ye(n.borderDash,t.borderDash)),e.lineDashOffset=ye(n.borderDashOffset,t.borderDashOffset),e.lineJoin=ye(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=ye(n.borderWidth,t.borderWidth),e.strokeStyle=ye(n.borderColor,t.borderColor)}function $7(e,t,n){e.lineTo(n.x,n.y)}function F7(e){return e.stepped?lz:e.tension||e.cubicInterpolationMode==="monotone"?cz:$7}function m3(e,t,n={}){const r=e.length,{start:o=0,end:i=r-1}=n,{start:a,end:s}=t,l=Math.max(o,a),c=Math.min(i,s),u=o<a&&i<a||o>s&&i>s;return{count:r,start:l,loop:t.loop,ilen:c<l&&!u?r+c-l:c-l}}function z7(e,t,n,r){const{points:o,options:i}=t,{count:a,start:s,loop:l,ilen:c}=m3(o,n,r),u=F7(i);let{move:d=!0,reverse:p}=r||{},h,g,v;for(h=0;h<=c;++h)g=o[(s+(p?c-h:h))%a],!g.skip&&(d?(e.moveTo(g.x,g.y),d=!1):u(e,v,g,p,i.stepped),v=g);return l&&(g=o[(s+(p?c:0))%a],u(e,v,g,p,i.stepped)),!!l}function B7(e,t,n,r){const o=t.points,{count:i,start:a,ilen:s}=m3(o,n,r),{move:l=!0,reverse:c}=r||{};let u=0,d=0,p,h,g,v,x,y;const b=S=>(a+(c?s-S:S))%i,w=()=>{v!==x&&(e.lineTo(u,x),e.lineTo(u,v),e.lineTo(u,y))};for(l&&(h=o[b(0)],e.moveTo(h.x,h.y)),p=0;p<=s;++p){if(h=o[b(p)],h.skip)continue;const S=h.x,C=h.y,_=S|0;_===g?(C<v?v=C:C>x&&(x=C),u=(d*u+S)/++d):(w(),e.lineTo(S,C),g=_,d=0,v=x=C),y=C}w()}function iv(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?B7:z7}function H7(e){return e.stepped?Bz:e.tension||e.cubicInterpolationMode==="monotone"?Hz:pi}function U7(e,t,n,r){let o=t._path;o||(o=t._path=new Path2D,t.path(o,n,r)&&o.closePath()),p3(e,t.options),e.stroke(o)}function W7(e,t,n,r){const{segments:o,options:i}=t,a=iv(t);for(const s of o)p3(e,i,s.style),e.beginPath(),a(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const V7=typeof Path2D=="function";function Y7(e,t,n,r){V7&&!t.options.segment?U7(e,t,n,r):W7(e,t,n,r)}class hr extends ro{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const o=r.spanGaps?this._loop:this._fullLoop;Az(this._points,r,t,o,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Xz(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,o=t[n],i=this.points,a=e3(this,{property:n,start:o,end:o});if(!a.length)return;const s=[],l=H7(r);let c,u;for(c=0,u=a.length;c<u;++c){const{start:d,end:p}=a[c],h=i[d],g=i[p];if(h===g){s.push(h);continue}const v=Math.abs((o-h[n])/(g[n]-h[n])),x=l(h,g,v,r.stepped);x[n]=t[n],s.push(x)}return s.length===1?s[0]:s}pathSegment(t,n,r){return iv(this)(t,this,n,r)}path(t,n,r){const o=this.segments,i=iv(this);let a=this._loop;n=n||0,r=r||this.points.length-n;for(const s of o)a&=i(t,this,s,{start:n,end:n+r-1});return!!a}draw(t,n,r,o){const i=this.options||{};(this.points||[]).length&&i.borderWidth&&(t.save(),Y7(t,this,r,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}K(hr,"id","line"),K(hr,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),K(hr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),K(hr,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function nk(e,t,n,r){const o=e.options,{[n]:i}=e.getProps([n],r);return Math.abs(t-i)<o.radius+o.hitRadius}class Pa extends ro{constructor(n){super();K(this,"parsed");K(this,"skip");K(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,o){const i=this.options,{x:a,y:s}=this.getProps(["x","y"],o);return Math.pow(n-a,2)+Math.pow(r-s,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(n,r){return nk(this,n,"x",r)}inYRange(n,r){return nk(this,n,"y",r)}getCenterPoint(n){const{x:r,y:o}=this.getProps(["x","y"],n);return{x:r,y:o}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const o=r&&n.borderWidth||0;return(r+o)*2}draw(n,r){const o=this.options;this.skip||o.radius<.1||!Fr(this,r,this.size(o)/2)||(n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.fillStyle=o.backgroundColor,tv(n,o,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}K(Pa,"id","point"),K(Pa,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),K(Pa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function h3(e,t){const{x:n,y:r,base:o,width:i,height:a}=e.getProps(["x","y","base","width","height"],t);let s,l,c,u,d;return e.horizontal?(d=a/2,s=Math.min(n,o),l=Math.max(n,o),c=r-d,u=r+d):(d=i/2,s=n-d,l=n+d,c=Math.min(r,o),u=Math.max(r,o)),{left:s,top:c,right:l,bottom:u}}function Eo(e,t,n,r){return e?0:yt(t,n,r)}function G7(e,t,n){const r=e.options.borderWidth,o=e.borderSkipped,i=U5(r);return{t:Eo(o.top,i.top,0,n),r:Eo(o.right,i.right,0,t),b:Eo(o.bottom,i.bottom,0,n),l:Eo(o.left,i.left,0,t)}}function X7(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),o=e.options.borderRadius,i=Oi(o),a=Math.min(t,n),s=e.borderSkipped,l=r||_e(o);return{topLeft:Eo(!l||s.top||s.left,i.topLeft,0,a),topRight:Eo(!l||s.top||s.right,i.topRight,0,a),bottomLeft:Eo(!l||s.bottom||s.left,i.bottomLeft,0,a),bottomRight:Eo(!l||s.bottom||s.right,i.bottomRight,0,a)}}function q7(e){const t=h3(e),n=t.right-t.left,r=t.bottom-t.top,o=G7(e,n/2,r/2),i=X7(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:i},inner:{x:t.left+o.l,y:t.top+o.t,w:n-o.l-o.r,h:r-o.t-o.b,radius:{topLeft:Math.max(0,i.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,i.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,i.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,i.bottomRight-Math.max(o.b,o.r))}}}}function zm(e,t,n,r){const o=t===null,i=n===null,s=e&&!(o&&i)&&h3(e,r);return s&&(o||Dr(t,s.left,s.right))&&(i||Dr(n,s.top,s.bottom))}function K7(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Q7(e,t){e.rect(t.x,t.y,t.w,t.h)}function Bm(e,t,n={}){const r=e.x!==n.x?-t:0,o=e.y!==n.y?-t:0,i=(e.x+e.w!==n.x+n.w?t:0)-r,a=(e.y+e.h!==n.y+n.h?t:0)-o;return{x:e.x+r,y:e.y+o,w:e.w+i,h:e.h+a,radius:e.radius}}class bd extends ro{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:o}}=this,{inner:i,outer:a}=q7(this),s=K7(a.radius)?Zl:Q7;t.save(),(a.w!==i.w||a.h!==i.h)&&(t.beginPath(),s(t,Bm(a,n,i)),t.clip(),s(t,Bm(i,-n,a)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),s(t,Bm(i,n)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,n,r){return zm(this,t,n,r)}inXRange(t,n){return zm(this,t,null,n)}inYRange(t,n){return zm(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:o,horizontal:i}=this.getProps(["x","y","base","horizontal"],t);return{x:i?(n+o)/2:n,y:i?r:(r+o)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}K(bd,"id","bar"),K(bd,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),K(bd,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var J7=Object.freeze({__proto__:null,ArcElement:Us,BarElement:bd,LineElement:hr,PointElement:Pa});const av=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],rk=av.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function g3(e){return av[e%av.length]}function v3(e){return rk[e%rk.length]}function Z7(e,t){return e.borderColor=g3(t),e.backgroundColor=v3(t),++t}function e9(e,t){return e.backgroundColor=e.data.map(()=>g3(t++)),t}function t9(e,t){return e.backgroundColor=e.data.map(()=>v3(t++)),t}function n9(e){let t=0;return(n,r)=>{const o=e.getDatasetMeta(r).controller;o instanceof xi?t=e9(n,t):o instanceof hl?t=t9(n,t):o&&(t=Z7(n,t))}}function ok(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function r9(e){return e&&(e.borderColor||e.backgroundColor)}var o9={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;const{data:{datasets:r},options:o}=e.config,{elements:i}=o;if(!n.forceOverride&&(ok(r)||r9(o)||i&&ok(i)))return;const a=n9(e);r.forEach(a)}};function i9(e,t,n,r,o){const i=o.samples||r;if(i>=n)return e.slice(t,t+n);const a=[],s=(n-2)/(i-2);let l=0;const c=t+n-1;let u=t,d,p,h,g,v;for(a[l++]=e[u],d=0;d<i-2;d++){let x=0,y=0,b;const w=Math.floor((d+1)*s)+1+t,S=Math.min(Math.floor((d+2)*s)+1,n)+t,C=S-w;for(b=w;b<S;b++)x+=e[b].x,y+=e[b].y;x/=C,y/=C;const _=Math.floor(d*s)+1+t,O=Math.min(Math.floor((d+1)*s)+1,n)+t,{x:E,y:T}=e[u];for(h=g=-1,b=_;b<O;b++)g=.5*Math.abs((E-x)*(e[b].y-T)-(E-e[b].x)*(y-T)),g>h&&(h=g,p=e[b],v=b);a[l++]=p,u=v}return a[l++]=e[c],a}function a9(e,t,n,r){let o=0,i=0,a,s,l,c,u,d,p,h,g,v;const x=[],y=t+n-1,b=e[t].x,S=e[y].x-b;for(a=t;a<t+n;++a){s=e[a],l=(s.x-b)/S*r,c=s.y;const C=l|0;if(C===u)c<g?(g=c,d=a):c>v&&(v=c,p=a),o=(i*o+s.x)/++i;else{const _=a-1;if(!Ee(d)&&!Ee(p)){const O=Math.min(d,p),E=Math.max(d,p);O!==h&&O!==_&&x.push({...e[O],x:o}),E!==h&&E!==_&&x.push({...e[E],x:o})}a>0&&_!==h&&x.push(e[_]),x.push(s),u=C,i=0,g=v=c,d=p=h=a}}return x}function b3(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function ik(e){e.data.datasets.forEach(t=>{b3(t)})}function s9(e,t){const n=t.length;let r=0,o;const{iScale:i}=e,{min:a,max:s,minDefined:l,maxDefined:c}=i.getUserBounds();return l&&(r=yt($r(t,i.axis,a).lo,0,n-1)),c?o=yt($r(t,i.axis,s).hi+1,r,n)-r:o=n-r,{start:r,count:o}}var l9={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){ik(e);return}const r=e.width;e.data.datasets.forEach((o,i)=>{const{_data:a,indexAxis:s}=o,l=e.getDatasetMeta(i),c=a||o.data;if(Bs([s,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const u=e.scales[l.xAxisID];if(u.type!=="linear"&&u.type!=="time"||e.options.parsing)return;let{start:d,count:p}=s9(l,c);const h=n.threshold||4*r;if(p<=h){b3(o);return}Ee(a)&&(o._data=c,delete o.data,Object.defineProperty(o,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let g;switch(n.algorithm){case"lttb":g=i9(c,d,p,r,n);break;case"min-max":g=a9(c,d,p,r);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}o._decimated=g})},destroy(e){ik(e)}};function c9(e,t,n){const r=e.segments,o=e.points,i=t.points,a=[];for(const s of r){let{start:l,end:c}=s;c=Vb(l,c,o);const u=sv(n,o[l],o[c],s.loop);if(!t.segments){a.push({source:s,target:u,start:o[l],end:o[c]});continue}const d=e3(t,u);for(const p of d){const h=sv(n,i[p.start],i[p.end],p.loop),g=Z5(s,o,h);for(const v of g)a.push({source:v,target:p,start:{[n]:ak(u,h,"start",Math.max)},end:{[n]:ak(u,h,"end",Math.min)}})}}return a}function sv(e,t,n,r){if(r)return;let o=t[e],i=n[e];return e==="angle"&&(o=an(o),i=an(i)),{property:e,start:o,end:i}}function u9(e,t){const{x:n=null,y:r=null}=e||{},o=t.points,i=[];return t.segments.forEach(({start:a,end:s})=>{s=Vb(a,s,o);const l=o[a],c=o[s];r!==null?(i.push({x:l.x,y:r}),i.push({x:c.x,y:r})):n!==null&&(i.push({x:n,y:l.y}),i.push({x:n,y:c.y}))}),i}function Vb(e,t,n){for(;t>e;t--){const r=n[t];if(!isNaN(r.x)&&!isNaN(r.y))break}return t}function ak(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function y3(e,t){let n=[],r=!1;return Ke(e)?(r=!0,n=e):n=u9(e,t),n.length?new hr({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function sk(e){return e&&e.fill!==!1}function d9(e,t,n){let o=e[t].fill;const i=[t];let a;if(!n)return o;for(;o!==!1&&i.indexOf(o)===-1;){if(!at(o))return o;if(a=e[o],!a)return!1;if(a.visible)return o;i.push(o),o=a.fill}return!1}function f9(e,t,n){const r=g9(e);if(_e(r))return isNaN(r.value)?!1:r;let o=parseFloat(r);return at(o)&&Math.floor(o)===o?p9(r[0],t,o,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function p9(e,t,n,r){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=r?!1:n}function m9(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:_e(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function h9(e,t,n){let r;return e==="start"?r=n:e==="end"?r=t.options.reverse?t.min:t.max:_e(e)?r=e.value:r=t.getBaseValue(),r}function g9(e){const t=e.options,n=t.fill;let r=ye(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function v9(e){const{scale:t,index:n,line:r}=e,o=[],i=r.segments,a=r.points,s=b9(t,n);s.push(y3({x:null,y:t.bottom},r));for(let l=0;l<i.length;l++){const c=i[l];for(let u=c.start;u<=c.end;u++)y9(o,a[u],s)}return new hr({points:o,options:{}})}function b9(e,t){const n=[],r=e.getMatchingVisibleMetas("line");for(let o=0;o<r.length;o++){const i=r[o];if(i.index===t)break;i.hidden||n.unshift(i.dataset)}return n}function y9(e,t,n){const r=[];for(let o=0;o<n.length;o++){const i=n[o],{first:a,last:s,point:l}=x9(i,t,"x");if(!(!l||a&&s)){if(a)r.unshift(l);else if(e.push(l),!s)break}}e.push(...r)}function x9(e,t,n){const r=e.interpolate(t,n);if(!r)return{};const o=r[n],i=e.segments,a=e.points;let s=!1,l=!1;for(let c=0;c<i.length;c++){const u=i[c],d=a[u.start][n],p=a[u.end][n];if(Dr(o,d,p)){s=o===d,l=o===p;break}}return{first:s,last:l,point:r}}class x3{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,r){const{x:o,y:i,radius:a}=this;return n=n||{start:0,end:We},t.arc(o,i,a,n.end,n.start,!0),!r.bounds}interpolate(t){const{x:n,y:r,radius:o}=this,i=t.angle;return{x:n+Math.cos(i)*o,y:r+Math.sin(i)*o,angle:i}}}function w9(e){const{chart:t,fill:n,line:r}=e;if(at(n))return k9(t,n);if(n==="stack")return v9(e);if(n==="shape")return!0;const o=S9(e);return o instanceof x3?o:y3(o,r)}function k9(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function S9(e){return(e.scale||{}).getPointPositionForValue?C9(e):_9(e)}function _9(e){const{scale:t={},fill:n}=e,r=m9(n,t);if(at(r)){const o=t.isHorizontal();return{x:o?r:null,y:o?null:r}}return null}function C9(e){const{scale:t,fill:n}=e,r=t.options,o=t.getLabels().length,i=r.reverse?t.max:t.min,a=h9(n,t,i),s=[];if(r.grid.circular){const l=t.getPointPositionForValue(0,i);return new x3({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(a)})}for(let l=0;l<o;++l)s.push(t.getPointPositionForValue(l,a));return s}function Hm(e,t,n){const r=w9(t),{line:o,scale:i,axis:a}=t,s=o.options,l=s.fill,c=s.backgroundColor,{above:u=c,below:d=c}=l||{};r&&o.points.length&&(bp(e,n),O9(e,{line:o,target:r,above:u,below:d,area:n,scale:i,axis:a}),yp(e))}function O9(e,t){const{line:n,target:r,above:o,below:i,area:a,scale:s}=t,l=n._loop?"angle":t.axis;e.save(),l==="x"&&i!==o&&(lk(e,r,a.top),ck(e,{line:n,target:r,color:o,scale:s,property:l}),e.restore(),e.save(),lk(e,r,a.bottom)),ck(e,{line:n,target:r,color:i,scale:s,property:l}),e.restore()}function lk(e,t,n){const{segments:r,points:o}=t;let i=!0,a=!1;e.beginPath();for(const s of r){const{start:l,end:c}=s,u=o[l],d=o[Vb(l,c,o)];i?(e.moveTo(u.x,u.y),i=!1):(e.lineTo(u.x,n),e.lineTo(u.x,u.y)),a=!!t.pathSegment(e,s,{move:a}),a?e.closePath():e.lineTo(d.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function ck(e,t){const{line:n,target:r,property:o,color:i,scale:a}=t,s=c9(n,r,o);for(const{source:l,target:c,start:u,end:d}of s){const{style:{backgroundColor:p=i}={}}=l,h=r!==!0;e.save(),e.fillStyle=p,E9(e,a,h&&sv(o,u,d)),e.beginPath();const g=!!n.pathSegment(e,l);let v;if(h){g?e.closePath():uk(e,r,d,o);const x=!!r.pathSegment(e,c,{move:g,reverse:!0});v=g&&x,v||uk(e,r,u,o)}e.closePath(),e.fill(v?"evenodd":"nonzero"),e.restore()}}function E9(e,t,n){const{top:r,bottom:o}=t.chart.chartArea,{property:i,start:a,end:s}=n||{};i==="x"&&(e.beginPath(),e.rect(a,r,s-a,o-r),e.clip())}function uk(e,t,n,r){const o=t.interpolate(n,r);o&&e.lineTo(o.x,o.y)}var T9={id:"filler",afterDatasetsUpdate(e,t,n){const r=(e.data.datasets||[]).length,o=[];let i,a,s,l;for(a=0;a<r;++a)i=e.getDatasetMeta(a),s=i.dataset,l=null,s&&s.options&&s instanceof hr&&(l={visible:e.isDatasetVisible(a),index:a,fill:f9(s,a,r),chart:e,axis:i.controller.options.indexAxis,scale:i.vScale,line:s}),i.$filler=l,o.push(l);for(a=0;a<r;++a)l=o[a],!(!l||l.fill===!1)&&(l.fill=d9(o,a,n.propagate))},beforeDraw(e,t,n){const r=n.drawTime==="beforeDraw",o=e.getSortedVisibleDatasetMetas(),i=e.chartArea;for(let a=o.length-1;a>=0;--a){const s=o[a].$filler;s&&(s.line.updateControlPoints(i,s.axis),r&&s.fill&&Hm(e.ctx,s,i))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=e.getSortedVisibleDatasetMetas();for(let o=r.length-1;o>=0;--o){const i=r[o].$filler;sk(i)&&Hm(e.ctx,i,e.chartArea)}},beforeDatasetDraw(e,t,n){const r=t.meta.$filler;!sk(r)||n.drawTime!=="beforeDatasetDraw"||Hm(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const dk=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},j9=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class fk extends ro{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=$e(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,o)=>t.sort(r,o,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,o=ht(r.font),i=o.size,a=this._computeTitleHeight(),{boxWidth:s,itemHeight:l}=dk(r,i);let c,u;n.font=o.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(a,i,s,l)+10):(u=this.maxHeight,c=this._fitCols(a,o,s,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,o){const{ctx:i,maxWidth:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=o+s;let d=t;i.textAlign="left",i.textBaseline="middle";let p=-1,h=-u;return this.legendItems.forEach((g,v)=>{const x=r+n/2+i.measureText(g.text).width;(v===0||c[c.length-1]+x+2*s>a)&&(d+=u,c[c.length-(v>0?0:1)]=0,h+=u,p++),l[v]={left:0,top:h,row:p,width:x,height:o},c[c.length-1]+=x+s}),d}_fitCols(t,n,r,o){const{ctx:i,maxHeight:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=a-t;let d=s,p=0,h=0,g=0,v=0;return this.legendItems.forEach((x,y)=>{const{itemWidth:b,itemHeight:w}=P9(r,n,i,x,o);y>0&&h+w+2*s>u&&(d+=p+s,c.push({width:p,height:h}),g+=p+s,v++,p=h=0),l[y]={left:g,top:h,col:v,width:b,height:w},p=Math.max(p,b),h+=w+s}),d+=p,c.push({width:p,height:h}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:o},rtl:i}}=this,a=ja(i,this.left,this.width);if(this.isHorizontal()){let s=0,l=jt(r,this.left+o,this.right-this.lineWidths[s]);for(const c of n)s!==c.row&&(s=c.row,l=jt(r,this.left+o,this.right-this.lineWidths[s])),c.top+=this.top+t+o,c.left=a.leftForLtr(a.x(l),c.width),l+=c.width+o}else{let s=0,l=jt(r,this.top+t+o,this.bottom-this.columnSizes[s].height);for(const c of n)c.col!==s&&(s=c.col,l=jt(r,this.top+t+o,this.bottom-this.columnSizes[s].height)),c.top=l,c.left+=this.left+o,c.left=a.leftForLtr(a.x(c.left),c.width),l+=c.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;bp(t,this),this._draw(),yp(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:o}=this,{align:i,labels:a}=t,s=st.color,l=ja(t.rtl,this.left,this.width),c=ht(a.font),{padding:u}=a,d=c.size,p=d/2;let h;this.drawTitle(),o.textAlign=l.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=c.string;const{boxWidth:g,boxHeight:v,itemHeight:x}=dk(a,d),y=function(_,O,E){if(isNaN(g)||g<=0||isNaN(v)||v<0)return;o.save();const T=ye(E.lineWidth,1);if(o.fillStyle=ye(E.fillStyle,s),o.lineCap=ye(E.lineCap,"butt"),o.lineDashOffset=ye(E.lineDashOffset,0),o.lineJoin=ye(E.lineJoin,"miter"),o.lineWidth=T,o.strokeStyle=ye(E.strokeStyle,s),o.setLineDash(ye(E.lineDash,[])),a.usePointStyle){const P={radius:v*Math.SQRT2/2,pointStyle:E.pointStyle,rotation:E.rotation,borderWidth:T},A=l.xPlus(_,g/2),I=O+p;H5(o,P,A,I,a.pointStyleWidth&&g)}else{const P=O+Math.max((d-v)/2,0),A=l.leftForLtr(_,g),I=Oi(E.borderRadius);o.beginPath(),Object.values(I).some(X=>X!==0)?Zl(o,{x:A,y:P,w:g,h:v,radius:I}):o.rect(A,P,g,v),o.fill(),T!==0&&o.stroke()}o.restore()},b=function(_,O,E){Fi(o,E.text,_,O+x/2,c,{strikethrough:E.hidden,textAlign:l.textAlign(E.textAlign)})},w=this.isHorizontal(),S=this._computeTitleHeight();w?h={x:jt(i,this.left+u,this.right-r[0]),y:this.top+u+S,line:0}:h={x:this.left+u,y:jt(i,this.top+S+u,this.bottom-n[0].height),line:0},K5(this.ctx,t.textDirection);const C=x+u;this.legendItems.forEach((_,O)=>{o.strokeStyle=_.fontColor,o.fillStyle=_.fontColor;const E=o.measureText(_.text).width,T=l.textAlign(_.textAlign||(_.textAlign=a.textAlign)),P=g+p+E;let A=h.x,I=h.y;l.setWidth(this.width),w?O>0&&A+P+u>this.right&&(I=h.y+=C,h.line++,A=h.x=jt(i,this.left+u,this.right-r[h.line])):O>0&&I+C>this.bottom&&(A=h.x=A+n[h.line].width+u,h.line++,I=h.y=jt(i,this.top+S+u,this.bottom-n[h.line].height));const X=l.x(A);if(y(X,I,_),A=Q8(T,A+g+p,w?A+P:this.right,t.rtl),b(l.x(A),I,_),w)h.x+=P+u;else if(typeof _.text!="string"){const H=c.lineHeight;h.y+=w3(_,H)+u}else h.y+=C}),Q5(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=ht(n.font),o=Mt(n.padding);if(!n.display)return;const i=ja(t.rtl,this.left,this.width),a=this.ctx,s=n.position,l=r.size/2,c=o.top+l;let u,d=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),u=this.top+c,d=jt(t.align,d,this.right-p);else{const g=this.columnSizes.reduce((v,x)=>Math.max(v,x.height),0);u=c+jt(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const h=jt(s,d,d+p);a.textAlign=i.textAlign(Ib(s)),a.textBaseline="middle",a.strokeStyle=n.color,a.fillStyle=n.color,a.font=r.string,Fi(a,n.text,h,u,r)}_computeTitleHeight(){const t=this.options.title,n=ht(t.font),r=Mt(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,o,i;if(Dr(t,this.left,this.right)&&Dr(n,this.top,this.bottom)){for(i=this.legendHitBoxes,r=0;r<i.length;++r)if(o=i[r],Dr(t,o.left,o.left+o.width)&&Dr(n,o.top,o.top+o.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!A9(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const o=this._hoveredItem,i=j9(o,r);o&&!i&&$e(n.onLeave,[t,o,this],this),this._hoveredItem=r,r&&!i&&$e(n.onHover,[t,r,this],this)}else r&&$e(n.onClick,[t,r,this],this)}}function P9(e,t,n,r,o){const i=N9(r,e,t,n),a=R9(o,r,t.lineHeight);return{itemWidth:i,itemHeight:a}}function N9(e,t,n,r){let o=e.text;return o&&typeof o!="string"&&(o=o.reduce((i,a)=>i.length>a.length?i:a)),t+n.size/2+r.measureText(o).width}function R9(e,t,n){let r=e;return typeof t.text!="string"&&(r=w3(t,n)),r}function w3(e,t){const n=e.text?e.text.length:0;return t*n}function A9(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var Yb={id:"legend",_element:fk,start(e,t,n){const r=e.legend=new fk({ctx:e.ctx,options:n,chart:e});Nt.configure(e,r,n),Nt.addBox(e,r)},stop(e){Nt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;Nt.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,o=n.chart;o.isDatasetVisible(r)?(o.hide(r),t.hidden=!0):(o.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:o,color:i,useBorderRadius:a,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=Mt(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:i,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:o||c.textAlign,borderRadius:a&&(s||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Gb extends ro{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const o=Ke(r.text)?r.text.length:1;this._padding=Mt(r.padding);const i=o*ht(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:o,right:i,options:a}=this,s=a.align;let l=0,c,u,d;return this.isHorizontal()?(u=jt(s,r,i),d=n+t,c=i-r):(a.position==="left"?(u=r+t,d=jt(s,o,n),l=Ve*-.5):(u=i-t,d=jt(s,n,o),l=Ve*.5),c=o-n),{titleX:u,titleY:d,maxWidth:c,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=ht(n.font),i=r.lineHeight/2+this._padding.top,{titleX:a,titleY:s,maxWidth:l,rotation:c}=this._drawArgs(i);Fi(t,n.text,0,0,r,{color:n.color,maxWidth:l,rotation:c,textAlign:Ib(n.align),textBaseline:"middle",translation:[a,s]})}}function M9(e,t){const n=new Gb({ctx:e.ctx,options:t,chart:e});Nt.configure(e,n,t),Nt.addBox(e,n),e.titleBlock=n}var Xb={id:"title",_element:Gb,start(e,t,n){M9(e,n)},stop(e){const t=e.titleBlock;Nt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;Nt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Eu=new WeakMap;var L9={id:"subtitle",start(e,t,n){const r=new Gb({ctx:e.ctx,options:n,chart:e});Nt.configure(e,r,n),Nt.addBox(e,r),Eu.set(e,r)},stop(e){Nt.removeBox(e,Eu.get(e)),Eu.delete(e)},beforeUpdate(e,t,n){const r=Eu.get(e);Nt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ws={average(e){if(!e.length)return!1;let t,n,r=new Set,o=0,i=0;for(t=0,n=e.length;t<n;++t){const s=e[t].element;if(s&&s.hasValue()){const l=s.tooltipPosition();r.add(l.x),o+=l.y,++i}}return{x:[...r].reduce((s,l)=>s+l)/r.size,y:o/i}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,o=Number.POSITIVE_INFINITY,i,a,s;for(i=0,a=e.length;i<a;++i){const l=e[i].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Zg(t,c);u<o&&(o=u,s=l)}}if(s){const l=s.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function ir(e,t){return t&&(Ke(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function jr(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function I9(e,t){const{element:n,datasetIndex:r,index:o}=t,i=e.getDatasetMeta(r).controller,{label:a,value:s}=i.getLabelAndValue(o);return{chart:e,label:a,parsed:i.getParsed(o),raw:e.data.datasets[r].data[o],formattedValue:s,dataset:i.getDataset(),dataIndex:o,datasetIndex:r,element:n}}function pk(e,t){const n=e.chart.ctx,{body:r,footer:o,title:i}=e,{boxWidth:a,boxHeight:s}=t,l=ht(t.bodyFont),c=ht(t.titleFont),u=ht(t.footerFont),d=i.length,p=o.length,h=r.length,g=Mt(t.padding);let v=g.height,x=0,y=r.reduce((S,C)=>S+C.before.length+C.lines.length+C.after.length,0);if(y+=e.beforeBody.length+e.afterBody.length,d&&(v+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),y){const S=t.displayColors?Math.max(s,l.lineHeight):l.lineHeight;v+=h*S+(y-h)*l.lineHeight+(y-1)*t.bodySpacing}p&&(v+=t.footerMarginTop+p*u.lineHeight+(p-1)*t.footerSpacing);let b=0;const w=function(S){x=Math.max(x,n.measureText(S).width+b)};return n.save(),n.font=c.string,je(e.title,w),n.font=l.string,je(e.beforeBody.concat(e.afterBody),w),b=t.displayColors?a+2+t.boxPadding:0,je(r,S=>{je(S.before,w),je(S.lines,w),je(S.after,w)}),b=0,n.font=u.string,je(e.footer,w),n.restore(),x+=g.width,{width:x,height:v}}function D9(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function $9(e,t,n,r){const{x:o,width:i}=r,a=n.caretSize+n.caretPadding;if(e==="left"&&o+i+a>t.width||e==="right"&&o-i-a<0)return!0}function F9(e,t,n,r){const{x:o,width:i}=n,{width:a,chartArea:{left:s,right:l}}=e;let c="center";return r==="center"?c=o<=(s+l)/2?"left":"right":o<=i/2?c="left":o>=a-i/2&&(c="right"),$9(c,e,t,n)&&(c="center"),c}function mk(e,t,n){const r=n.yAlign||t.yAlign||D9(e,n);return{xAlign:n.xAlign||t.xAlign||F9(e,t,n,r),yAlign:r}}function z9(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function B9(e,t,n){let{y:r,height:o}=e;return t==="top"?r+=n:t==="bottom"?r-=o+n:r-=o/2,r}function hk(e,t,n,r){const{caretSize:o,caretPadding:i,cornerRadius:a}=e,{xAlign:s,yAlign:l}=n,c=o+i,{topLeft:u,topRight:d,bottomLeft:p,bottomRight:h}=Oi(a);let g=z9(t,s);const v=B9(t,l,c);return l==="center"?s==="left"?g+=c:s==="right"&&(g-=c):s==="left"?g-=Math.max(u,p)+o:s==="right"&&(g+=Math.max(d,h)+o),{x:yt(g,0,r.width-t.width),y:yt(v,0,r.height-t.height)}}function Tu(e,t,n){const r=Mt(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function gk(e){return ir([],jr(e))}function H9(e,t,n){return ei(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function vk(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const k3={beforeTitle:Or,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Or,beforeBody:Or,beforeLabel:Or,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return Ee(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Or,afterBody:Or,beforeFooter:Or,footer:Or,afterFooter:Or};function Bt(e,t,n,r){const o=e[t].call(n,r);return typeof o>"u"?k3[t].call(n,r):o}class lv extends ro{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),o=r.enabled&&n.options.animation&&r.animations,i=new t3(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||(this.$context=H9(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,o=Bt(r,"beforeTitle",this,t),i=Bt(r,"title",this,t),a=Bt(r,"afterTitle",this,t);let s=[];return s=ir(s,jr(o)),s=ir(s,jr(i)),s=ir(s,jr(a)),s}getBeforeBody(t,n){return gk(Bt(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,o=[];return je(t,i=>{const a={before:[],lines:[],after:[]},s=vk(r,i);ir(a.before,jr(Bt(s,"beforeLabel",this,i))),ir(a.lines,Bt(s,"label",this,i)),ir(a.after,jr(Bt(s,"afterLabel",this,i))),o.push(a)}),o}getAfterBody(t,n){return gk(Bt(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,o=Bt(r,"beforeFooter",this,t),i=Bt(r,"footer",this,t),a=Bt(r,"afterFooter",this,t);let s=[];return s=ir(s,jr(o)),s=ir(s,jr(i)),s=ir(s,jr(a)),s}_createItems(t){const n=this._active,r=this.chart.data,o=[],i=[],a=[];let s=[],l,c;for(l=0,c=n.length;l<c;++l)s.push(I9(this.chart,n[l]));return t.filter&&(s=s.filter((u,d,p)=>t.filter(u,d,p,r))),t.itemSort&&(s=s.sort((u,d)=>t.itemSort(u,d,r))),je(s,u=>{const d=vk(t.callbacks,u);o.push(Bt(d,"labelColor",this,u)),i.push(Bt(d,"labelPointStyle",this,u)),a.push(Bt(d,"labelTextColor",this,u))}),this.labelColors=o,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=s,s}update(t,n){const r=this.options.setContext(this.getContext()),o=this._active;let i,a=[];if(!o.length)this.opacity!==0&&(i={opacity:0});else{const s=Ws[r.position].call(this,o,this._eventPosition);a=this._createItems(r),this.title=this.getTitle(a,r),this.beforeBody=this.getBeforeBody(a,r),this.body=this.getBody(a,r),this.afterBody=this.getAfterBody(a,r),this.footer=this.getFooter(a,r);const l=this._size=pk(this,r),c=Object.assign({},s,l),u=mk(this.chart,r,c),d=hk(r,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,i={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:s.x,caretY:s.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,o){const i=this.getCaretPosition(t,r,o);n.lineTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.lineTo(i.x3,i.y3)}getCaretPosition(t,n,r){const{xAlign:o,yAlign:i}=this,{caretSize:a,cornerRadius:s}=r,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:d}=Oi(s),{x:p,y:h}=t,{width:g,height:v}=n;let x,y,b,w,S,C;return i==="center"?(S=h+v/2,o==="left"?(x=p,y=x-a,w=S+a,C=S-a):(x=p+g,y=x+a,w=S-a,C=S+a),b=x):(o==="left"?y=p+Math.max(l,u)+a:o==="right"?y=p+g-Math.max(c,d)-a:y=this.caretX,i==="top"?(w=h,S=w-a,x=y-a,b=y+a):(w=h+v,S=w+a,x=y+a,b=y-a),C=w),{x1:x,x2:y,x3:b,y1:w,y2:S,y3:C}}drawTitle(t,n,r){const o=this.title,i=o.length;let a,s,l;if(i){const c=ja(r.rtl,this.x,this.width);for(t.x=Tu(this,r.titleAlign,r),n.textAlign=c.textAlign(r.titleAlign),n.textBaseline="middle",a=ht(r.titleFont),s=r.titleSpacing,n.fillStyle=r.titleColor,n.font=a.string,l=0;l<i;++l)n.fillText(o[l],c.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+s,l+1===i&&(t.y+=r.titleMarginBottom-s)}}_drawColorBox(t,n,r,o,i){const a=this.labelColors[r],s=this.labelPointStyles[r],{boxHeight:l,boxWidth:c}=i,u=ht(i.bodyFont),d=Tu(this,"left",i),p=o.x(d),h=l<u.lineHeight?(u.lineHeight-l)/2:0,g=n.y+h;if(i.usePointStyle){const v={radius:Math.min(c,l)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},x=o.leftForLtr(p,c)+c/2,y=g+l/2;t.strokeStyle=i.multiKeyBackground,t.fillStyle=i.multiKeyBackground,tv(t,v,x,y),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,tv(t,v,x,y)}else{t.lineWidth=_e(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const v=o.leftForLtr(p,c),x=o.leftForLtr(o.xPlus(p,1),c-2),y=Oi(a.borderRadius);Object.values(y).some(b=>b!==0)?(t.beginPath(),t.fillStyle=i.multiKeyBackground,Zl(t,{x:v,y:g,w:c,h:l,radius:y}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),Zl(t,{x,y:g+1,w:c-2,h:l-2,radius:y}),t.fill()):(t.fillStyle=i.multiKeyBackground,t.fillRect(v,g,c,l),t.strokeRect(v,g,c,l),t.fillStyle=a.backgroundColor,t.fillRect(x,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:o}=this,{bodySpacing:i,bodyAlign:a,displayColors:s,boxHeight:l,boxWidth:c,boxPadding:u}=r,d=ht(r.bodyFont);let p=d.lineHeight,h=0;const g=ja(r.rtl,this.x,this.width),v=function(E){n.fillText(E,g.x(t.x+h),t.y+p/2),t.y+=p+i},x=g.textAlign(a);let y,b,w,S,C,_,O;for(n.textAlign=a,n.textBaseline="middle",n.font=d.string,t.x=Tu(this,x,r),n.fillStyle=r.bodyColor,je(this.beforeBody,v),h=s&&x!=="right"?a==="center"?c/2+u:c+2+u:0,S=0,_=o.length;S<_;++S){for(y=o[S],b=this.labelTextColors[S],n.fillStyle=b,je(y.before,v),w=y.lines,s&&w.length&&(this._drawColorBox(n,t,S,g,r),p=Math.max(d.lineHeight,l)),C=0,O=w.length;C<O;++C)v(w[C]),p=d.lineHeight;je(y.after,v)}h=0,p=d.lineHeight,je(this.afterBody,v),t.y-=i}drawFooter(t,n,r){const o=this.footer,i=o.length;let a,s;if(i){const l=ja(r.rtl,this.x,this.width);for(t.x=Tu(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",a=ht(r.footerFont),n.fillStyle=r.footerColor,n.font=a.string,s=0;s<i;++s)n.fillText(o[s],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r.footerSpacing}}drawBackground(t,n,r,o){const{xAlign:i,yAlign:a}=this,{x:s,y:l}=t,{width:c,height:u}=r,{topLeft:d,topRight:p,bottomLeft:h,bottomRight:g}=Oi(o.cornerRadius);n.fillStyle=o.backgroundColor,n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.beginPath(),n.moveTo(s+d,l),a==="top"&&this.drawCaret(t,n,r,o),n.lineTo(s+c-p,l),n.quadraticCurveTo(s+c,l,s+c,l+p),a==="center"&&i==="right"&&this.drawCaret(t,n,r,o),n.lineTo(s+c,l+u-g),n.quadraticCurveTo(s+c,l+u,s+c-g,l+u),a==="bottom"&&this.drawCaret(t,n,r,o),n.lineTo(s+h,l+u),n.quadraticCurveTo(s,l+u,s,l+u-h),a==="center"&&i==="left"&&this.drawCaret(t,n,r,o),n.lineTo(s,l+d),n.quadraticCurveTo(s,l,s+d,l),n.closePath(),n.fill(),o.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,o=r&&r.x,i=r&&r.y;if(o||i){const a=Ws[t.position].call(this,this._active,this._eventPosition);if(!a)return;const s=this._size=pk(this,t),l=Object.assign({},a,this._size),c=mk(n,t,l),u=hk(t,l,c,n);(o._to!==u.x||i._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=s.width,this.height=s.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const o={width:this.width,height:this.height},i={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const a=Mt(n.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&s&&(t.save(),t.globalAlpha=r,this.drawBackground(i,t,o,n),K5(t,n.textDirection),i.y+=a.top,this.drawTitle(i,t,n),this.drawBody(i,t,n),this.drawFooter(i,t,n),Q5(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,o=t.map(({datasetIndex:s,index:l})=>{const c=this.chart.getDatasetMeta(s);if(!c)throw new Error("Cannot find a dataset at index "+s);return{datasetIndex:s,element:c.data[l],index:l}}),i=!mf(r,o),a=this._positionChanged(o,n);(i||a)&&(this._active=o,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,i=this._active||[],a=this._getActiveElements(t,i,n,r),s=this._positionChanged(a,t),l=n||!mf(a,i)||s;return l&&(this._active=a,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,o){const i=this.options;if(t.type==="mouseout")return[];if(!o)return n.filter(s=>this.chart.data.datasets[s.datasetIndex]&&this.chart.getDatasetMeta(s.datasetIndex).controller.getParsed(s.index)!==void 0);const a=this.chart.getElementsAtEventForMode(t,i.mode,i,r);return i.reverse&&a.reverse(),a}_positionChanged(t,n){const{caretX:r,caretY:o,options:i}=this,a=Ws[i.position].call(this,t,n);return a!==!1&&(r!==a.x||o!==a.y)}}K(lv,"positioners",Ws);var qb={id:"tooltip",_element:lv,positioners:Ws,afterInit(e,t,n){n&&(e.tooltip=new lv({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:k3},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},U9=Object.freeze({__proto__:null,Colors:o9,Decimation:l9,Filler:T9,Legend:Yb,SubTitle:L9,Title:Xb,Tooltip:qb});const W9=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function V9(e,t,n,r){const o=e.indexOf(t);if(o===-1)return W9(e,t,n,r);const i=e.lastIndexOf(t);return o!==i?n:o}const Y9=(e,t)=>e===null?null:yt(Math.round(e),0,t);function bk(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class tc extends Gi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:o,label:i}of n)r[o]===i&&r.splice(o,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(Ee(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:V9(r,t,ye(n,t),this._addedLabels),Y9(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(o=this.getLabels().length-1)),this.min=r,this.max=o}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,o=[];let i=this.getLabels();i=t===0&&n===i.length-1?i:i.slice(t,n+1),this._valueRange=Math.max(i.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let a=t;a<=n;a++)o.push({value:a});return o}getLabelForValue(t){return bk.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}K(tc,"id","category"),K(tc,"defaults",{ticks:{callback:bk}});function G9(e,t){const n=[],{bounds:o,step:i,min:a,max:s,precision:l,count:c,maxTicks:u,maxDigits:d,includeBounds:p}=e,h=i||1,g=u-1,{min:v,max:x}=t,y=!Ee(a),b=!Ee(s),w=!Ee(c),S=(x-v)/(d+1);let C=fw((x-v)/g/h)*h,_,O,E,T;if(C<1e-14&&!y&&!b)return[{value:v},{value:x}];T=Math.ceil(x/C)-Math.floor(v/C),T>g&&(C=fw(T*C/g/h)*h),Ee(l)||(_=Math.pow(10,l),C=Math.ceil(C*_)/_),o==="ticks"?(O=Math.floor(v/C)*C,E=Math.ceil(x/C)*C):(O=v,E=x),y&&b&&i&&W8((s-a)/i,C/1e3)?(T=Math.round(Math.min((s-a)/C,u)),C=(s-a)/T,O=a,E=s):w?(O=y?a:O,E=b?s:E,T=c-1,C=(E-O)/T):(T=(E-O)/C,dl(T,Math.round(T),C/1e3)?T=Math.round(T):T=Math.ceil(T));const P=Math.max(pw(C),pw(O));_=Math.pow(10,Ee(l)?P:l),O=Math.round(O*_)/_,E=Math.round(E*_)/_;let A=0;for(y&&(p&&O!==a?(n.push({value:a}),O<a&&A++,dl(Math.round((O+A*C)*_)/_,a,yk(a,S,e))&&A++):O<a&&A++);A<T;++A){const I=Math.round((O+A*C)*_)/_;if(b&&I>s)break;n.push({value:I})}return b&&p&&E!==s?n.length&&dl(n[n.length-1].value,s,yk(s,S,e))?n[n.length-1].value=s:n.push({value:s}):(!b||E===s)&&n.push({value:E}),n}function yk(e,t,{horizontal:n,minRotation:r}){const o=Vn(r),i=(n?Math.sin(o):Math.cos(o))||.001,a=.75*t*(""+e).length;return Math.min(t/i,a)}class wf extends Gi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return Ee(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:o,max:i}=this;const a=l=>o=n?o:l,s=l=>i=r?i:l;if(t){const l=wr(o),c=wr(i);l<0&&c<0?s(0):l>0&&c>0&&a(0)}if(o===i){let l=i===0?1:Math.abs(i*.05);s(i+l),t||a(o-l)}this.min=o,this.max=i}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,o;return r?(o=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),n=n||11),n&&(o=Math.min(n,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const o={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},i=this._range||this,a=G9(o,i);return t.bounds==="ticks"&&A5(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const o=(r-n)/Math.max(t.length-1,1)/2;n-=o,r+=o}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return wc(t,this.chart.options.locale,this.options.ticks.format)}}class nc extends wf{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=at(t)?t:0,this.max=at(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=Vn(this.options.ticks.minRotation),o=(t?Math.sin(r):Math.cos(r))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,i.lineHeight/o))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}K(nc,"id","linear"),K(nc,"defaults",{ticks:{callback:vp.formatters.numeric}});const rc=e=>Math.floor(Oo(e)),ai=(e,t)=>Math.pow(10,rc(e)+t);function xk(e){return e/Math.pow(10,rc(e))===1}function wk(e,t,n){const r=Math.pow(10,n),o=Math.floor(e/r);return Math.ceil(t/r)-o}function X9(e,t){const n=t-e;let r=rc(n);for(;wk(e,t,r)>10;)r++;for(;wk(e,t,r)<10;)r--;return Math.min(r,rc(e))}function q9(e,{min:t,max:n}){t=rn(e.min,t);const r=[],o=rc(t);let i=X9(t,n),a=i<0?Math.pow(10,Math.abs(i)):1;const s=Math.pow(10,i),l=o>i?Math.pow(10,o):0,c=Math.round((t-l)*a)/a,u=Math.floor((t-l)/s/10)*s*10;let d=Math.floor((c-u)/Math.pow(10,i)),p=rn(e.min,Math.round((l+u+d*Math.pow(10,i))*a)/a);for(;p<n;)r.push({value:p,major:xk(p),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(i++,d=2,a=i>=0?1:a),p=Math.round((l+u+d*Math.pow(10,i))*a)/a;const h=rn(e.max,p);return r.push({value:h,major:xk(h),significand:d}),r}class cv extends Gi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const r=wf.prototype.parse.apply(this,[t,n]);if(r===0){this._zero=!0;return}return at(r)&&r>0?r:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=at(t)?Math.max(0,t):null,this.max=at(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!at(this._userMin)&&(this.min=t===ai(this.min,0)?ai(this.min,-1):ai(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let r=this.min,o=this.max;const i=s=>r=t?r:s,a=s=>o=n?o:s;r===o&&(r<=0?(i(1),a(10)):(i(ai(r,-1)),a(ai(o,1)))),r<=0&&i(ai(o,-1)),o<=0&&a(ai(r,1)),this.min=r,this.max=o}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},r=q9(n,this);return t.bounds==="ticks"&&A5(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(t){return t===void 0?"0":wc(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Oo(t),this._valueRange=Oo(this.max)-Oo(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Oo(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}K(cv,"id","logarithmic"),K(cv,"defaults",{ticks:{callback:vp.formatters.logarithmic,major:{enabled:!0}}});function uv(e){const t=e.ticks;if(t.display&&e.display){const n=Mt(t.backdropPadding);return ye(t.font&&t.font.size,st.font.size)+n.height}return 0}function K9(e,t,n){return n=Ke(n)?n:[n],{w:sz(e,t.string,n),h:n.length*t.lineHeight}}function kk(e,t,n,r,o){return e===r||e===o?{start:t-n/2,end:t+n/2}:e<r||e>o?{start:t-n,end:t}:{start:t,end:t+n}}function Q9(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],o=[],i=e._pointLabels.length,a=e.options.pointLabels,s=a.centerPointLabels?Ve/i:0;for(let l=0;l<i;l++){const c=a.setContext(e.getPointLabelContext(l));o[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+o[l],s),d=ht(c.font),p=K9(e.ctx,d,e._pointLabels[l]);r[l]=p;const h=an(e.getIndexAngle(l)+s),g=Math.round(Mb(h)),v=kk(g,u.x,p.w,0,180),x=kk(g,u.y,p.h,90,270);J9(n,t,h,v,x)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=tH(e,r,o)}function J9(e,t,n,r,o){const i=Math.abs(Math.sin(n)),a=Math.abs(Math.cos(n));let s=0,l=0;r.start<t.l?(s=(t.l-r.start)/i,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/i,e.r=Math.max(e.r,t.r+s)),o.start<t.t?(l=(t.t-o.start)/a,e.t=Math.min(e.t,t.t-l)):o.end>t.b&&(l=(o.end-t.b)/a,e.b=Math.max(e.b,t.b+l))}function Z9(e,t,n){const r=e.drawingArea,{extra:o,additionalAngle:i,padding:a,size:s}=n,l=e.getPointPosition(t,r+o+a,i),c=Math.round(Mb(an(l.angle+ut))),u=oH(l.y,s.h,c),d=nH(c),p=rH(l.x,s.w,d);return{visible:!0,x:l.x,y:u,textAlign:d,left:p,top:u,right:p+s.w,bottom:u+s.h}}function eH(e,t){if(!t)return!0;const{left:n,top:r,right:o,bottom:i}=e;return!(Fr({x:n,y:r},t)||Fr({x:n,y:i},t)||Fr({x:o,y:r},t)||Fr({x:o,y:i},t))}function tH(e,t,n){const r=[],o=e._pointLabels.length,i=e.options,{centerPointLabels:a,display:s}=i.pointLabels,l={extra:uv(i)/2,additionalAngle:a?Ve/o:0};let c;for(let u=0;u<o;u++){l.padding=n[u],l.size=t[u];const d=Z9(e,u,l);r.push(d),s==="auto"&&(d.visible=eH(d,c),d.visible&&(c=d))}return r}function nH(e){return e===0||e===180?"center":e<180?"left":"right"}function rH(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function oH(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function iH(e,t,n){const{left:r,top:o,right:i,bottom:a}=n,{backdropColor:s}=t;if(!Ee(s)){const l=Oi(t.borderRadius),c=Mt(t.backdropPadding);e.fillStyle=s;const u=r-c.left,d=o-c.top,p=i-r+c.width,h=a-o+c.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),Zl(e,{x:u,y:d,w:p,h,radius:l}),e.fill()):e.fillRect(u,d,p,h)}}function aH(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let o=t-1;o>=0;o--){const i=e._pointLabelItems[o];if(!i.visible)continue;const a=r.setContext(e.getPointLabelContext(o));iH(n,a,i);const s=ht(a.font),{x:l,y:c,textAlign:u}=i;Fi(n,e._pointLabels[o],l,c+s.lineHeight/2,s,{color:a.color,textAlign:u,textBaseline:"middle"})}}function S3(e,t,n,r){const{ctx:o}=e;if(n)o.arc(e.xCenter,e.yCenter,t,0,We);else{let i=e.getPointPosition(0,t);o.moveTo(i.x,i.y);for(let a=1;a<r;a++)i=e.getPointPosition(a,t),o.lineTo(i.x,i.y)}}function sH(e,t,n,r,o){const i=e.ctx,a=t.circular,{color:s,lineWidth:l}=t;!a&&!r||!s||!l||n<0||(i.save(),i.strokeStyle=s,i.lineWidth=l,i.setLineDash(o.dash),i.lineDashOffset=o.dashOffset,i.beginPath(),S3(e,n,a,r),i.closePath(),i.stroke(),i.restore())}function lH(e,t,n){return ei(e,{label:n,index:t,type:"pointLabel"})}class Vs extends wf{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Mt(uv(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=at(t)&&!isNaN(t)?t:0,this.max=at(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/uv(this.options))}generateTickLabels(t){wf.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const o=$e(this.options.pointLabels.callback,[n,r],this);return o||o===0?o:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?Q9(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,o){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,o))}getIndexAngle(t){const n=We/(this._pointLabels.length||1),r=this.options.startAngle||0;return an(t*n+Vn(r))}getDistanceFromCenterForValue(t){if(Ee(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(Ee(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return lH(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const o=this.getIndexAngle(t)-ut+r;return{x:Math.cos(o)*n+this.xCenter,y:Math.sin(o)*n+this.yCenter,angle:o}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:o,bottom:i}=this._pointLabelItems[t];return{left:n,top:r,right:o,bottom:i}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),S3(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:o,border:i}=n,a=this._pointLabels.length;let s,l,c;if(n.pointLabels.display&&aH(this,a),o.display&&this.ticks.forEach((u,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(u.value);const p=this.getContext(d),h=o.setContext(p),g=i.setContext(p);sH(this,h,l,a,g)}}),r.display){for(t.save(),s=a-1;s>=0;s--){const u=r.setContext(this.getPointLabelContext(s)),{color:d,lineWidth:p}=u;!p||!d||(t.lineWidth=p,t.strokeStyle=d,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(s,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const o=this.getIndexAngle(0);let i,a;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((s,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const c=r.setContext(this.getContext(l)),u=ht(c.font);if(i=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,a=t.measureText(s.label).width,t.fillStyle=c.backdropColor;const d=Mt(c.backdropPadding);t.fillRect(-a/2-d.left,-i-u.size/2-d.top,a+d.width,u.size+d.height)}Fi(t,s.label,0,-i,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}K(Vs,"id","radialLinear"),K(Vs,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:vp.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),K(Vs,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),K(Vs,"descriptors",{angleLines:{_fallback:"grid"}});const wp={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Yt=Object.keys(wp);function Sk(e,t){return e-t}function _k(e,t){if(Ee(t))return null;const n=e._adapter,{parser:r,round:o,isoWeekday:i}=e._parseOpts;let a=t;return typeof r=="function"&&(a=r(a)),at(a)||(a=typeof r=="string"?n.parse(a,r):n.parse(a)),a===null?null:(o&&(a=o==="week"&&(Va(i)||i===!0)?n.startOf(a,"isoWeek",i):n.startOf(a,o)),+a)}function Ck(e,t,n,r){const o=Yt.length;for(let i=Yt.indexOf(e);i<o-1;++i){const a=wp[Yt[i]],s=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-t)/(s*a.size))<=r)return Yt[i]}return Yt[o-1]}function cH(e,t,n,r,o){for(let i=Yt.length-1;i>=Yt.indexOf(n);i--){const a=Yt[i];if(wp[a].common&&e._adapter.diff(o,r,a)>=t-1)return a}return Yt[n?Yt.indexOf(n):0]}function uH(e){for(let t=Yt.indexOf(e)+1,n=Yt.length;t<n;++t)if(wp[Yt[t]].common)return Yt[t]}function Ok(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:o}=Lb(n,t),i=n[r]>=t?n[r]:n[o];e[i]=!0}}function dH(e,t,n,r){const o=e._adapter,i=+o.startOf(t[0].value,r),a=t[t.length-1].value;let s,l;for(s=i;s<=a;s=+o.add(s,1,r))l=n[s],l>=0&&(t[l].major=!0);return t}function Ek(e,t,n){const r=[],o={},i=t.length;let a,s;for(a=0;a<i;++a)s=t[a],o[s]=a,r.push({value:s,major:!1});return i===0||!n?r:dH(e,r,o,n)}class oc extends Gi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),o=this._adapter=new SB._date(t.adapters.date);o.init(n),ul(r.displayFormats,o.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:_k(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:o,max:i,minDefined:a,maxDefined:s}=this.getUserBounds();function l(c){!a&&!isNaN(c.min)&&(o=Math.min(o,c.min)),!s&&!isNaN(c.max)&&(i=Math.max(i,c.max))}(!a||!s)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),o=at(o)&&!isNaN(o)?o:+n.startOf(Date.now(),r),i=at(i)&&!isNaN(i)?i:+n.endOf(Date.now(),r)+1,this.min=Math.min(o,i-1),this.max=Math.max(o+1,i)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,o=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const i=this.min,a=this.max,s=X8(o,i,a);return this._unit=n.unit||(r.autoSkip?Ck(n.minUnit,this.min,this.max,this._getLabelCapacity(i)):cH(this,s.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:uH(this._unit),this.initOffsets(o),t.reverse&&s.reverse(),Ek(this,s,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,o,i;this.options.offset&&t.length&&(o=this.getDecimalForValue(t[0]),t.length===1?n=1-o:n=(this.getDecimalForValue(t[1])-o)/2,i=this.getDecimalForValue(t[t.length-1]),t.length===1?r=i:r=(i-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;n=yt(n,0,a),r=yt(r,0,a),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,o=this.options,i=o.time,a=i.unit||Ck(i.minUnit,n,r,this._getLabelCapacity(n)),s=ye(o.ticks.stepSize,1),l=a==="week"?i.isoWeekday:!1,c=Va(l)||l===!0,u={};let d=n,p,h;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":a),t.diff(r,n,a)>1e5*s)throw new Error(n+" and "+r+" are too far apart with stepSize of "+s+" "+a);const g=o.ticks.source==="data"&&this.getDataTimestamps();for(p=d,h=0;p<r;p=+t.add(p,s,a),h++)Ok(u,p,g);return(p===r||o.bounds==="ticks"||h===1)&&Ok(u,p,g),Object.keys(u).sort(Sk).map(v=>+v)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const o=this.options.time.displayFormats,i=this._unit,a=n||o[i];return this._adapter.format(t,a)}_tickFormatFunction(t,n,r,o){const i=this.options,a=i.ticks.callback;if(a)return $e(a,[t,n,r],this);const s=i.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&s[l],d=c&&s[c],p=r[n],h=c&&d&&p&&p.major;return this._adapter.format(t,o||(h?d:u))}generateTickLabels(t){let n,r,o;for(n=0,r=t.length;n<r;++n)o=t[n],o.label=this._tickFormatFunction(o.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,o=Vn(this.isHorizontal()?n.maxRotation:n.minRotation),i=Math.cos(o),a=Math.sin(o),s=this._resolveTickFontOptions(0).size;return{w:r*i+s*a,h:r*a+s*i}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,o=r[n.unit]||r.millisecond,i=this._tickFormatFunction(t,0,Ek(this,[t],this._majorUnit),o),a=this._getLabelSize(i),s=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return s>0?s:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(n=0,r=o.length;n<r;++n)t=t.concat(o[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const o=this.getLabels();for(n=0,r=o.length;n<r;++n)t.push(_k(this,o[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return I5(t.sort(Sk))}}K(oc,"id","time"),K(oc,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ju(e,t,n){let r=0,o=e.length-1,i,a,s,l;n?(t>=e[r].pos&&t<=e[o].pos&&({lo:r,hi:o}=$r(e,"pos",t)),{pos:i,time:s}=e[r],{pos:a,time:l}=e[o]):(t>=e[r].time&&t<=e[o].time&&({lo:r,hi:o}=$r(e,"time",t)),{time:i,pos:s}=e[r],{time:a,pos:l}=e[o]);const c=a-i;return c?s+(l-s)*(t-i)/c:s}class dv extends oc{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=ju(n,this.min),this._tableRange=ju(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,o=[],i=[];let a,s,l,c,u;for(a=0,s=t.length;a<s;++a)c=t[a],c>=n&&c<=r&&o.push(c);if(o.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(a=0,s=o.length;a<s;++a)u=o[a+1],l=o[a-1],c=o[a],Math.round((u+l)/2)!==c&&i.push({time:c,pos:a/(s-1)});return i}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((o,i)=>o-i)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(ju(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return ju(this._table,r*this._tableRange+this._minPos,!0)}}K(dv,"id","timeseries"),K(dv,"defaults",oc.defaults);var fH=Object.freeze({__proto__:null,CategoryScale:tc,LinearScale:nc,LogarithmicScale:cv,RadialLinearScale:Vs,TimeScale:oc,TimeSeriesScale:dv});const pH=[kB,J7,U9,fH],_3="label";function Tk(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function mH(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function C3(e,t){e.labels=t}function O3(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:_3;const r=[];e.datasets=t.map(o=>{const i=e.datasets.find(a=>a[n]===o[n]);return!i||!o.data||r.includes(i)?{...o}:(r.push(i),Object.assign(i,o),i)})}function hH(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_3;const n={labels:[],datasets:[]};return C3(n,e.labels),O3(n,e.datasets,t),n}function gH(e,t){const{height:n=150,width:r=300,redraw:o=!1,datasetIdKey:i,type:a,data:s,options:l,plugins:c=[],fallbackContent:u,updateMode:d,...p}=e,h=k.useRef(null),g=k.useRef(),v=()=>{h.current&&(g.current=new cs(h.current,{type:a,data:hH(s,i),options:l&&{...l},plugins:c}),Tk(t,g.current))},x=()=>{Tk(t,null),g.current&&(g.current.destroy(),g.current=null)};return k.useEffect(()=>{!o&&g.current&&l&&mH(g.current,l)},[o,l]),k.useEffect(()=>{!o&&g.current&&C3(g.current.config.data,s.labels)},[o,s.labels]),k.useEffect(()=>{!o&&g.current&&s.datasets&&O3(g.current.config.data,s.datasets,i)},[o,s.datasets]),k.useEffect(()=>{g.current&&(o?(x(),setTimeout(v)):g.current.update(d))},[o,l,s.labels,s.datasets,d]),k.useEffect(()=>{g.current&&(x(),setTimeout(v))},[a]),k.useEffect(()=>(v(),()=>x()),[]),Y.createElement("canvas",Object.assign({ref:h,role:"img",height:n,width:r},p),u)}const vH=k.forwardRef(gH);function bH(e,t){return cs.register(t),k.forwardRef((n,r)=>Y.createElement(vH,Object.assign({},n,{ref:r,type:e})))}const E3=bH("line",ml);cs.register(...pH);cs.register(tc,nc,Pa,hr,Xb,qb,Yb);const yH=()=>{const{user:e}=k.useContext(Rn),[t,n]=k.useState({totalProjects:0,completedProjects:0}),[r,o]=k.useState(0),i={labels:["April","May","June","July","August","September","October","November","December"],datasets:[{label:"Tasks Done",data:[20,30,45,60,40,55,70,60,80],fill:!0,backgroundColor:"rgba(108, 99, 255, 0.2)",borderColor:"#6c63ff",tension:.1}]},a={responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:"Tasks Done Over Time"}}};k.useEffect(()=>{(async()=>{try{const u=localStorage.getItem("token"),d=await be.get("https://api-msib-6-travel-management-03.educalab.id/projects",{headers:{Authorization:`Bearer ${u}`}});console.log("Fetched project data:",d.data);const p=d.data.length,h=d.data.filter(x=>x.status==="completed").length;n({totalProjects:p,completedProjects:h});const g=await be.get("https://api-msib-6-travel-management-03.educalab.id/53/tasks",{headers:{Authorization:`Bearer ${u}`}});console.log("Fetched task data:",g.data);const v=g.data.length;o(v)}catch(u){console.error("Failed to fetch project or task stats:",u)}})()},[]);const{totalProjects:s,completedProjects:l}=t;return m.jsx(Qt,{fluid:!0,className:`component-container p-3 ${e?"light-mode":"dark-mode"}`,children:e?m.jsxs(m.Fragment,{children:[m.jsx(Rt,{className:"mb-3",children:m.jsx(Le,{children:m.jsx("h4",{className:"fw-bold",children:"Dashboard"})})}),m.jsxs(Rt,{className:"mb-3",children:[m.jsx(Le,{children:m.jsx(oe,{className:"card-hover",children:m.jsxs(oe.Body,{className:"card-body-custom",children:[m.jsx("img",{src:"/Document.svg",alt:"task",className:"card-img"}),m.jsxs("div",{className:"card-content",children:[m.jsx(oe.Title,{className:"fw-bold",children:"Tasks"}),m.jsxs(oe.Text,{className:"card-text-custom",children:[m.jsx("h1",{className:"fw-bold",children:r})," ",m.jsxs("p",{className:"ms-2",children:["You have ",r," unfinished tasks"]})," "]})]})]})})}),m.jsx(Le,{children:m.jsx(oe,{className:"card-hover",children:m.jsxs(oe.Body,{className:"card-body-custom",children:[m.jsx("img",{src:"/Hotspot.svg",alt:"current-project",className:"card-img"}),m.jsxs("div",{className:"card-content",children:[m.jsx(oe.Title,{className:"fw-bold",children:"Projects"}),m.jsxs(oe.Text,{className:"card-text-custom",children:[m.jsx("h1",{className:"fw-bold ms-1",children:s}),m.jsxs("p",{children:["You have ",s," projects"]})]})]})]})})})]}),m.jsx(Rt,{className:"mb-3",children:m.jsx(Le,{md:12,children:m.jsx(oe,{className:"card-hover",children:m.jsxs(oe.Body,{children:[m.jsx(oe.Title,{className:"fw-bold",children:"Tasks Done"}),m.jsx(E3,{data:i,options:a})]})})})})]}):m.jsx("p",{children:"No user data found."})})};var T3={exports:{}},Ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt=typeof Symbol=="function"&&Symbol.for,Kb=wt?Symbol.for("react.element"):60103,Qb=wt?Symbol.for("react.portal"):60106,kp=wt?Symbol.for("react.fragment"):60107,Sp=wt?Symbol.for("react.strict_mode"):60108,_p=wt?Symbol.for("react.profiler"):60114,Cp=wt?Symbol.for("react.provider"):60109,Op=wt?Symbol.for("react.context"):60110,Jb=wt?Symbol.for("react.async_mode"):60111,Ep=wt?Symbol.for("react.concurrent_mode"):60111,Tp=wt?Symbol.for("react.forward_ref"):60112,jp=wt?Symbol.for("react.suspense"):60113,xH=wt?Symbol.for("react.suspense_list"):60120,Pp=wt?Symbol.for("react.memo"):60115,Np=wt?Symbol.for("react.lazy"):60116,wH=wt?Symbol.for("react.block"):60121,kH=wt?Symbol.for("react.fundamental"):60117,SH=wt?Symbol.for("react.responder"):60118,_H=wt?Symbol.for("react.scope"):60119;function gn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Kb:switch(e=e.type,e){case Jb:case Ep:case kp:case _p:case Sp:case jp:return e;default:switch(e=e&&e.$$typeof,e){case Op:case Tp:case Np:case Pp:case Cp:return e;default:return t}}case Qb:return t}}}function j3(e){return gn(e)===Ep}Ne.AsyncMode=Jb;Ne.ConcurrentMode=Ep;Ne.ContextConsumer=Op;Ne.ContextProvider=Cp;Ne.Element=Kb;Ne.ForwardRef=Tp;Ne.Fragment=kp;Ne.Lazy=Np;Ne.Memo=Pp;Ne.Portal=Qb;Ne.Profiler=_p;Ne.StrictMode=Sp;Ne.Suspense=jp;Ne.isAsyncMode=function(e){return j3(e)||gn(e)===Jb};Ne.isConcurrentMode=j3;Ne.isContextConsumer=function(e){return gn(e)===Op};Ne.isContextProvider=function(e){return gn(e)===Cp};Ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kb};Ne.isForwardRef=function(e){return gn(e)===Tp};Ne.isFragment=function(e){return gn(e)===kp};Ne.isLazy=function(e){return gn(e)===Np};Ne.isMemo=function(e){return gn(e)===Pp};Ne.isPortal=function(e){return gn(e)===Qb};Ne.isProfiler=function(e){return gn(e)===_p};Ne.isStrictMode=function(e){return gn(e)===Sp};Ne.isSuspense=function(e){return gn(e)===jp};Ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kp||e===Ep||e===_p||e===Sp||e===jp||e===xH||typeof e=="object"&&e!==null&&(e.$$typeof===Np||e.$$typeof===Pp||e.$$typeof===Cp||e.$$typeof===Op||e.$$typeof===Tp||e.$$typeof===kH||e.$$typeof===SH||e.$$typeof===_H||e.$$typeof===wH)};Ne.typeOf=gn;T3.exports=Ne;var Zb=T3.exports;function CH(e){function t($,F,D,z,j){for(var le=0,G=0,Ce=0,ge=0,xe,ce,Re=0,Ae=0,ae,Ye=ae=xe=0,we=0,lt=0,Cr=0,Me=0,In=D.length,nr=In-1,Ot,ue="",Ie="",ke="",tn="",zt;we<In;){if(ce=D.charCodeAt(we),we===nr&&G+ge+Ce+le!==0&&(G!==0&&(ce=G===47?10:47),ge=Ce=le=0,In++,nr++),G+ge+Ce+le===0){if(we===nr&&(0<lt&&(ue=ue.replace(p,"")),0<ue.trim().length)){switch(ce){case 32:case 9:case 59:case 13:case 10:break;default:ue+=D.charAt(we)}ce=59}switch(ce){case 123:for(ue=ue.trim(),xe=ue.charCodeAt(0),ae=1,Me=++we;we<In;){switch(ce=D.charCodeAt(we)){case 123:ae++;break;case 125:ae--;break;case 47:switch(ce=D.charCodeAt(we+1)){case 42:case 47:e:{for(Ye=we+1;Ye<nr;++Ye)switch(D.charCodeAt(Ye)){case 47:if(ce===42&&D.charCodeAt(Ye-1)===42&&we+2!==Ye){we=Ye+1;break e}break;case 10:if(ce===47){we=Ye+1;break e}}we=Ye}}break;case 91:ce++;case 40:ce++;case 34:case 39:for(;we++<nr&&D.charCodeAt(we)!==ce;);}if(ae===0)break;we++}switch(ae=D.substring(Me,we),xe===0&&(xe=(ue=ue.replace(d,"").trim()).charCodeAt(0)),xe){case 64:switch(0<lt&&(ue=ue.replace(p,"")),ce=ue.charCodeAt(1),ce){case 100:case 109:case 115:case 45:lt=F;break;default:lt=J}if(ae=t(F,lt,ae,ce,j+1),Me=ae.length,0<N&&(lt=n(J,ue,Cr),zt=s(3,ae,lt,F,X,I,Me,ce,j,z),ue=lt.join(""),zt!==void 0&&(Me=(ae=zt.trim()).length)===0&&(ce=0,ae="")),0<Me)switch(ce){case 115:ue=ue.replace(_,a);case 100:case 109:case 45:ae=ue+"{"+ae+"}";break;case 107:ue=ue.replace(b,"$1 $2"),ae=ue+"{"+ae+"}",ae=V===1||V===2&&i("@"+ae,3)?"@-webkit-"+ae+"@"+ae:"@"+ae;break;default:ae=ue+ae,z===112&&(ae=(Ie+=ae,""))}else ae="";break;default:ae=t(F,n(F,ue,Cr),ae,z,j+1)}ke+=ae,ae=Cr=lt=Ye=xe=0,ue="",ce=D.charCodeAt(++we);break;case 125:case 59:if(ue=(0<lt?ue.replace(p,""):ue).trim(),1<(Me=ue.length))switch(Ye===0&&(xe=ue.charCodeAt(0),xe===45||96<xe&&123>xe)&&(Me=(ue=ue.replace(" ",":")).length),0<N&&(zt=s(1,ue,F,$,X,I,Ie.length,z,j,z))!==void 0&&(Me=(ue=zt.trim()).length)===0&&(ue="\0\0"),xe=ue.charCodeAt(0),ce=ue.charCodeAt(1),xe){case 0:break;case 64:if(ce===105||ce===99){tn+=ue+D.charAt(we);break}default:ue.charCodeAt(Me-1)!==58&&(Ie+=o(ue,xe,ce,ue.charCodeAt(2)))}Cr=lt=Ye=xe=0,ue="",ce=D.charCodeAt(++we)}}switch(ce){case 13:case 10:G===47?G=0:1+xe===0&&z!==107&&0<ue.length&&(lt=1,ue+="\0"),0<N*Q&&s(0,ue,F,$,X,I,Ie.length,z,j,z),I=1,X++;break;case 59:case 125:if(G+ge+Ce+le===0){I++;break}default:switch(I++,Ot=D.charAt(we),ce){case 9:case 32:if(ge+le+G===0)switch(Re){case 44:case 58:case 9:case 32:Ot="";break;default:ce!==32&&(Ot=" ")}break;case 0:Ot="\\0";break;case 12:Ot="\\f";break;case 11:Ot="\\v";break;case 38:ge+G+le===0&&(lt=Cr=1,Ot="\f"+Ot);break;case 108:if(ge+G+le+H===0&&0<Ye)switch(we-Ye){case 2:Re===112&&D.charCodeAt(we-3)===58&&(H=Re);case 8:Ae===111&&(H=Ae)}break;case 58:ge+G+le===0&&(Ye=we);break;case 44:G+Ce+ge+le===0&&(lt=1,Ot+="\r");break;case 34:case 39:G===0&&(ge=ge===ce?0:ge===0?ce:ge);break;case 91:ge+G+Ce===0&&le++;break;case 93:ge+G+Ce===0&&le--;break;case 41:ge+G+le===0&&Ce--;break;case 40:if(ge+G+le===0){if(xe===0)switch(2*Re+3*Ae){case 533:break;default:xe=1}Ce++}break;case 64:G+Ce+ge+le+Ye+ae===0&&(ae=1);break;case 42:case 47:if(!(0<ge+le+Ce))switch(G){case 0:switch(2*ce+3*D.charCodeAt(we+1)){case 235:G=47;break;case 220:Me=we,G=42}break;case 42:ce===47&&Re===42&&Me+2!==we&&(D.charCodeAt(Me+2)===33&&(Ie+=D.substring(Me,we+1)),Ot="",G=0)}}G===0&&(ue+=Ot)}Ae=Re,Re=ce,we++}if(Me=Ie.length,0<Me){if(lt=F,0<N&&(zt=s(2,Ie,lt,$,X,I,Me,z,j,z),zt!==void 0&&(Ie=zt).length===0))return tn+Ie+ke;if(Ie=lt.join(",")+"{"+Ie+"}",V*H!==0){switch(V!==2||i(Ie,2)||(H=0),H){case 111:Ie=Ie.replace(S,":-moz-$1")+Ie;break;case 112:Ie=Ie.replace(w,"::-webkit-input-$1")+Ie.replace(w,"::-moz-$1")+Ie.replace(w,":-ms-input-$1")+Ie}H=0}}return tn+Ie+ke}function n($,F,D){var z=F.trim().split(x);F=z;var j=z.length,le=$.length;switch(le){case 0:case 1:var G=0;for($=le===0?"":$[0]+" ";G<j;++G)F[G]=r($,F[G],D).trim();break;default:var Ce=G=0;for(F=[];G<j;++G)for(var ge=0;ge<le;++ge)F[Ce++]=r($[ge]+" ",z[G],D).trim()}return F}function r($,F,D){var z=F.charCodeAt(0);switch(33>z&&(z=(F=F.trim()).charCodeAt(0)),z){case 38:return F.replace(y,"$1"+$.trim());case 58:return $.trim()+F.replace(y,"$1"+$.trim());default:if(0<1*D&&0<F.indexOf("\f"))return F.replace(y,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+F}function o($,F,D,z){var j=$+";",le=2*F+3*D+4*z;if(le===944){$=j.indexOf(":",9)+1;var G=j.substring($,j.length-1).trim();return G=j.substring(0,$).trim()+G+";",V===1||V===2&&i(G,1)?"-webkit-"+G+G:G}if(V===0||V===2&&!i(j,1))return j;switch(le){case 1015:return j.charCodeAt(10)===97?"-webkit-"+j+j:j;case 951:return j.charCodeAt(3)===116?"-webkit-"+j+j:j;case 963:return j.charCodeAt(5)===110?"-webkit-"+j+j:j;case 1009:if(j.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+j+j;case 978:return"-webkit-"+j+"-moz-"+j+j;case 1019:case 983:return"-webkit-"+j+"-moz-"+j+"-ms-"+j+j;case 883:if(j.charCodeAt(8)===45)return"-webkit-"+j+j;if(0<j.indexOf("image-set(",11))return j.replace(A,"$1-webkit-$2")+j;break;case 932:if(j.charCodeAt(4)===45)switch(j.charCodeAt(5)){case 103:return"-webkit-box-"+j.replace("-grow","")+"-webkit-"+j+"-ms-"+j.replace("grow","positive")+j;case 115:return"-webkit-"+j+"-ms-"+j.replace("shrink","negative")+j;case 98:return"-webkit-"+j+"-ms-"+j.replace("basis","preferred-size")+j}return"-webkit-"+j+"-ms-"+j+j;case 964:return"-webkit-"+j+"-ms-flex-"+j+j;case 1023:if(j.charCodeAt(8)!==99)break;return G=j.substring(j.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+G+"-webkit-"+j+"-ms-flex-pack"+G+j;case 1005:return g.test(j)?j.replace(h,":-webkit-")+j.replace(h,":-moz-")+j:j;case 1e3:switch(G=j.substring(13).trim(),F=G.indexOf("-")+1,G.charCodeAt(0)+G.charCodeAt(F)){case 226:G=j.replace(C,"tb");break;case 232:G=j.replace(C,"tb-rl");break;case 220:G=j.replace(C,"lr");break;default:return j}return"-webkit-"+j+"-ms-"+G+j;case 1017:if(j.indexOf("sticky",9)===-1)break;case 975:switch(F=(j=$).length-10,G=(j.charCodeAt(F)===33?j.substring(0,F):j).substring($.indexOf(":",7)+1).trim(),le=G.charCodeAt(0)+(G.charCodeAt(7)|0)){case 203:if(111>G.charCodeAt(8))break;case 115:j=j.replace(G,"-webkit-"+G)+";"+j;break;case 207:case 102:j=j.replace(G,"-webkit-"+(102<le?"inline-":"")+"box")+";"+j.replace(G,"-webkit-"+G)+";"+j.replace(G,"-ms-"+G+"box")+";"+j}return j+";";case 938:if(j.charCodeAt(5)===45)switch(j.charCodeAt(6)){case 105:return G=j.replace("-items",""),"-webkit-"+j+"-webkit-box-"+G+"-ms-flex-"+G+j;case 115:return"-webkit-"+j+"-ms-flex-item-"+j.replace(E,"")+j;default:return"-webkit-"+j+"-ms-flex-line-pack"+j.replace("align-content","").replace(E,"")+j}break;case 973:case 989:if(j.charCodeAt(3)!==45||j.charCodeAt(4)===122)break;case 931:case 953:if(P.test($)===!0)return(G=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?o($.replace("stretch","fill-available"),F,D,z).replace(":fill-available",":stretch"):j.replace(G,"-webkit-"+G)+j.replace(G,"-moz-"+G.replace("fill-",""))+j;break;case 962:if(j="-webkit-"+j+(j.charCodeAt(5)===102?"-ms-"+j:"")+j,D+z===211&&j.charCodeAt(13)===105&&0<j.indexOf("transform",10))return j.substring(0,j.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+j}return j}function i($,F){var D=$.indexOf(F===1?":":"{"),z=$.substring(0,F!==3?D:10);return D=$.substring(D+1,$.length-1),U(F!==2?z:z.replace(T,"$1"),D,F)}function a($,F){var D=o(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return D!==F+";"?D.replace(O," or ($1)").substring(4):"("+F+")"}function s($,F,D,z,j,le,G,Ce,ge,xe){for(var ce=0,Re=F,Ae;ce<N;++ce)switch(Ae=M[ce].call(u,$,Re,D,z,j,le,G,Ce,ge,xe)){case void 0:case!1:case!0:case null:break;default:Re=Ae}if(Re!==F)return Re}function l($){switch($){case void 0:case null:N=M.length=0;break;default:if(typeof $=="function")M[N++]=$;else if(typeof $=="object")for(var F=0,D=$.length;F<D;++F)l($[F]);else Q=!!$|0}return l}function c($){return $=$.prefix,$!==void 0&&(U=null,$?typeof $!="function"?V=1:(V=2,U=$):V=0),c}function u($,F){var D=$;if(33>D.charCodeAt(0)&&(D=D.trim()),Z=D,D=[Z],0<N){var z=s(-1,F,D,D,X,I,0,0,0,0);z!==void 0&&typeof z=="string"&&(F=z)}var j=t(J,D,F,0,0);return 0<N&&(z=s(-2,j,D,D,X,I,j.length,0,0,0),z!==void 0&&(j=z)),Z="",H=0,I=X=1,j}var d=/^\0+/g,p=/[\0\r\f]/g,h=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,x=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,S=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,E=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,I=1,X=1,H=0,V=1,J=[],M=[],N=0,U=null,Q=0,Z="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var OH={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function EH(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var TH=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,jk=EH(function(e){return TH.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ey=Zb,jH={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},PH={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},NH={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},P3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ty={};ty[ey.ForwardRef]=NH;ty[ey.Memo]=P3;function Pk(e){return ey.isMemo(e)?P3:ty[e.$$typeof]||jH}var RH=Object.defineProperty,AH=Object.getOwnPropertyNames,Nk=Object.getOwnPropertySymbols,MH=Object.getOwnPropertyDescriptor,LH=Object.getPrototypeOf,Rk=Object.prototype;function N3(e,t,n){if(typeof t!="string"){if(Rk){var r=LH(t);r&&r!==Rk&&N3(e,r,n)}var o=AH(t);Nk&&(o=o.concat(Nk(t)));for(var i=Pk(e),a=Pk(t),s=0;s<o.length;++s){var l=o[s];if(!PH[l]&&!(n&&n[l])&&!(a&&a[l])&&!(i&&i[l])){var c=MH(t,l);try{RH(e,l,c)}catch{}}}}return e}var IH=N3;const DH=Hi(IH);var yn={};function gr(){return(gr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ak=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},fv=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Zb.typeOf(e)},kf=Object.freeze([]),Fo=Object.freeze({});function Xa(e){return typeof e=="function"}function Mk(e){return e.displayName||e.name||"Component"}function ny(e){return e&&typeof e.styledComponentId=="string"}var qa=typeof process<"u"&&yn!==void 0&&(yn.REACT_APP_SC_ATTR||yn.SC_ATTR)||"data-styled",ry=typeof window<"u"&&"HTMLElement"in window,$H=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yn!==void 0&&(yn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yn.REACT_APP_SC_DISABLE_SPEEDY!==""?yn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yn.REACT_APP_SC_DISABLE_SPEEDY:yn.SC_DISABLE_SPEEDY!==void 0&&yn.SC_DISABLE_SPEEDY!==""&&yn.SC_DISABLE_SPEEDY!=="false"&&yn.SC_DISABLE_SPEEDY));function zi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var FH=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&zi(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),yd=new Map,Sf=new Map,gl=1,Pu=function(e){if(yd.has(e))return yd.get(e);for(;Sf.has(gl);)gl++;var t=gl++;return yd.set(e,t),Sf.set(t,e),t},zH=function(e){return Sf.get(e)},BH=function(e,t){t>=gl&&(gl=t+1),yd.set(e,t),Sf.set(t,e)},HH="style["+qa+'][data-styled-version="5.3.11"]',UH=new RegExp("^"+qa+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),WH=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},VH=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(UH);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(BH(c,l),WH(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},YH=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},R3=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var l=s.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(qa))return u}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(qa,"active"),r.setAttribute("data-styled-version","5.3.11");var a=YH();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},GH=function(){function e(n){var r=this.element=R3(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var l=i[a];if(l.ownerNode===o)return l}zi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),XH=function(){function e(n){var r=this.element=R3(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),qH=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Lk=ry,KH={isServer:!ry,useCSSOMInjection:!$H},A3=function(){function e(n,r,o){n===void 0&&(n=Fo),r===void 0&&(r={}),this.options=gr({},KH,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&ry&&Lk&&(Lk=!1,function(i){for(var a=document.querySelectorAll(HH),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(qa)!=="active"&&(VH(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Pu(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(gr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new qH(a):i?new GH(a):new XH(a),new FH(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Pu(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Pu(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Pu(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=zH(a);if(s!==void 0){var l=n.names.get(s),c=r.getGroup(a);if(l&&c&&l.size){var u=qa+".g"+a+'[id="'+s+'"]',d="";l!==void 0&&l.forEach(function(p){p.length>0&&(d+=p+",")}),i+=""+c+u+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),QH=/(a)(d)/gi,Ik=function(e){return String.fromCharCode(e+(e>25?39:97))};function pv(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ik(t%52)+n;return(Ik(t%52)+n).replace(QH,"$1-$2")}var wa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},M3=function(e){return wa(5381,e)};function JH(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xa(n)&&!ny(n))return!1}return!0}var ZH=M3("5.3.11"),eU=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&JH(t),this.componentId=n,this.baseHash=wa(ZH,n),this.baseStyle=r,A3.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Ka(this.rules,t,n,r).join(""),s=pv(wa(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var l=r(a,"."+s,void 0,o);n.insertRules(o,s,l)}i.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=wa(this.baseHash,r.hash),d="",p=0;p<c;p++){var h=this.rules[p];if(typeof h=="string")d+=h;else if(h){var g=Ka(h,t,n,r),v=Array.isArray(g)?g.join(""):g;u=wa(u,v+p),d+=v}}if(d){var x=pv(u>>>0);if(!n.hasNameForId(o,x)){var y=r(d,"."+x,void 0,o);n.insertRules(o,x,y)}i.push(x)}}return i.join(" ")},e}(),tU=/^\s*\/\/.*$/gm,nU=[":","[",".","#"];function rU(e){var t,n,r,o,i=Fo,a=i.options,s=a===void 0?Fo:a,l=i.plugins,c=l===void 0?kf:l,u=new CH(s),d=[],p=function(v){function x(y){if(y)try{v(y+"}")}catch{}}return function(y,b,w,S,C,_,O,E,T,P){switch(y){case 1:if(T===0&&b.charCodeAt(0)===64)return v(b+";"),"";break;case 2:if(E===0)return b+"/*|*/";break;case 3:switch(E){case 102:case 112:return v(w[0]+b),"";default:return b+(P===0?"/*|*/":"")}case-2:b.split("/*|*/}").forEach(x)}}}(function(v){d.push(v)}),h=function(v,x,y){return x===0&&nU.indexOf(y[n.length])!==-1||y.match(o)?v:"."+t};function g(v,x,y,b){b===void 0&&(b="&");var w=v.replace(tU,""),S=x&&y?y+" "+x+" { "+w+" }":w;return t=b,n=x,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),u(y||!x?"":x,S)}return u.use([].concat(c,[function(v,x,y){v===2&&y.length&&y[0].lastIndexOf(n)>0&&(y[0]=y[0].replace(r,h))},p,function(v){if(v===-2){var x=d;return d=[],x}}])),g.hash=c.length?c.reduce(function(v,x){return x.name||zi(15),wa(v,x.name)},5381).toString():"",g}var L3=Y.createContext();L3.Consumer;var I3=Y.createContext(),oU=(I3.Consumer,new A3),mv=rU();function iU(){return k.useContext(L3)||oU}function aU(){return k.useContext(I3)||mv}var D3=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=mv);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return zi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=mv),this.name+t.hash},e}(),sU=/([A-Z])/,lU=/([A-Z])/g,cU=/^ms-/,uU=function(e){return"-"+e.toLowerCase()};function Dk(e){return sU.test(e)?e.replace(lU,uU).replace(cU,"-ms-"):e}var $k=function(e){return e==null||e===!1||e===""};function Ka(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=Ka(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if($k(e))return"";if(ny(e))return"."+e.styledComponentId;if(Xa(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return Ka(l,t,n,r)}var c;return e instanceof D3?n?(e.inject(n,r),e.getName(r)):e:fv(e)?function u(d,p){var h,g,v=[];for(var x in d)d.hasOwnProperty(x)&&!$k(d[x])&&(Array.isArray(d[x])&&d[x].isCss||Xa(d[x])?v.push(Dk(x)+":",d[x],";"):fv(d[x])?v.push.apply(v,u(d[x],x)):v.push(Dk(x)+": "+(h=x,(g=d[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||h in OH||h.startsWith("--")?String(g).trim():g+"px")+";"));return p?[p+" {"].concat(v,["}"]):v}(e):e.toString()}var Fk=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function de(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Xa(e)||fv(e)?Fk(Ka(Ak(kf,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Fk(Ka(Ak(e,n)))}var dU=function(e,t,n){return n===void 0&&(n=Fo),e.theme!==n.theme&&e.theme||t||n.theme},fU=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pU=/(^-|-$)/g;function Um(e){return e.replace(fU,"-").replace(pU,"")}var $3=function(e){return pv(M3(e)>>>0)};function Nu(e){return typeof e=="string"&&!0}var hv=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},mU=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function hU(e,t,n){var r=e[n];hv(t)&&hv(r)?F3(r,t):e[n]=t}function F3(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(hv(a))for(var s in a)mU(s)&&hU(e,a[s],s)}return e}var _f=Y.createContext();_f.Consumer;function Xi(e){var t=k.useContext(_f),n=k.useMemo(function(){return function(r,o){if(!r)return zi(14);if(Xa(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?zi(8):o?gr({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Y.createElement(_f.Provider,{value:n},e.children):null}var Wm={};function z3(e,t,n){var r=ny(e),o=!Nu(e),i=t.attrs,a=i===void 0?kf:i,s=t.componentId,l=s===void 0?function(b,w){var S=typeof b!="string"?"sc":Um(b);Wm[S]=(Wm[S]||0)+1;var C=S+"-"+$3("5.3.11"+S+Wm[S]);return w?w+"-"+C:C}(t.displayName,t.parentComponentId):s,c=t.displayName,u=c===void 0?function(b){return Nu(b)?"styled."+b:"Styled("+Mk(b)+")"}(e):c,d=t.displayName&&t.componentId?Um(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(b,w,S){return e.shouldForwardProp(b,w,S)&&t.shouldForwardProp(b,w,S)}:e.shouldForwardProp);var g,v=new eU(n,d,r?e.componentStyle:void 0),x=v.isStatic&&a.length===0,y=function(b,w){return function(S,C,_,O){var E=S.attrs,T=S.componentStyle,P=S.defaultProps,A=S.foldedComponentIds,I=S.shouldForwardProp,X=S.styledComponentId,H=S.target,V=function(z,j,le){z===void 0&&(z=Fo);var G=gr({},j,{theme:z}),Ce={};return le.forEach(function(ge){var xe,ce,Re,Ae=ge;for(xe in Xa(Ae)&&(Ae=Ae(G)),Ae)G[xe]=Ce[xe]=xe==="className"?(ce=Ce[xe],Re=Ae[xe],ce&&Re?ce+" "+Re:ce||Re):Ae[xe]}),[G,Ce]}(dU(C,k.useContext(_f),P)||Fo,C,E),J=V[0],M=V[1],N=function(z,j,le,G){var Ce=iU(),ge=aU(),xe=j?z.generateAndInjectStyles(Fo,Ce,ge):z.generateAndInjectStyles(le,Ce,ge);return xe}(T,O,J),U=_,Q=M.$as||C.$as||M.as||C.as||H,Z=Nu(Q),$=M!==C?gr({},C,{},M):C,F={};for(var D in $)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?F.as=$[D]:(I?I(D,jk,Q):!Z||jk(D))&&(F[D]=$[D]));return C.style&&M.style!==C.style&&(F.style=gr({},C.style,{},M.style)),F.className=Array.prototype.concat(A,X,N!==X?N:null,C.className,M.className).filter(Boolean).join(" "),F.ref=U,k.createElement(Q,F)}(g,b,w,x)};return y.displayName=u,(g=Y.forwardRef(y)).attrs=p,g.componentStyle=v,g.displayName=u,g.shouldForwardProp=h,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):kf,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(b){var w=t.componentId,S=function(_,O){if(_==null)return{};var E,T,P={},A=Object.keys(_);for(T=0;T<A.length;T++)E=A[T],O.indexOf(E)>=0||(P[E]=_[E]);return P}(t,["componentId"]),C=w&&w+"-"+(Nu(b)?b:Um(Mk(b)));return z3(b,gr({},S,{attrs:p,componentId:C}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?F3({},e.defaultProps,b):b}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&DH(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var te=function(e){return function t(n,r,o){if(o===void 0&&(o=Fo),!Zb.isValidElementType(r))return zi(1,String(r));var i=function(){return n(r,o,de.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,gr({},o,{},a))},i.attrs=function(a){return t(n,r,gr({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(z3,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){te[e]=te(e)});function oy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=de.apply(void 0,[e].concat(n)).join(""),i=$3(o);return new D3(i,o)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var zk=Object.getOwnPropertySymbols,gU=Object.prototype.hasOwnProperty,vU=Object.prototype.propertyIsEnumerable;function bU(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function yU(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var xU=yU()?Object.assign:function(e,t){for(var n,r=bU(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)gU.call(n,a)&&(r[a]=n[a]);if(zk){o=zk(n);for(var s=0;s<o.length;s++)vU.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};const Jn=Hi(xU);var Bk=function(t,n){var r=Jn({},t,n);for(var o in t){var i;!t[o]||typeof n[o]!="object"||Jn(r,(i={},i[o]=Jn(t[o],n[o]),i))}return r},wU=function(t){var n={};return Object.keys(t).sort(function(r,o){return r.localeCompare(o,void 0,{numeric:!0,sensitivity:"base"})}).forEach(function(r){n[r]=t[r]}),n},kU={breakpoints:[40,52,64].map(function(e){return e+"em"})},B3=function(t){return"@media screen and (min-width: "+t+")"},SU=function(t,n){return Xo(n,t,t)},Xo=function(t,n,r,o,i){for(n=n&&n.split?n.split("."):[n],o=0;o<n.length;o++)t=t?t[n[o]]:i;return t===i?r:t},iy=function e(t){var n={},r=function(a){var s={},l=!1,c=a.theme&&a.theme.disableStyledSystemCache;for(var u in a)if(t[u]){var d=t[u],p=a[u],h=Xo(a.theme,d.scale,d.defaults);if(typeof p=="object"){if(n.breakpoints=!c&&n.breakpoints||Xo(a.theme,"breakpoints",kU.breakpoints),Array.isArray(p)){n.media=!c&&n.media||[null].concat(n.breakpoints.map(B3)),s=Bk(s,_U(n.media,d,h,p,a));continue}p!==null&&(s=Bk(s,CU(n.breakpoints,d,h,p,a)),l=!0);continue}Jn(s,d(p,h,a))}return l&&(s=wU(s)),s};r.config=t,r.propNames=Object.keys(t),r.cache=n;var o=Object.keys(t).filter(function(i){return i!=="config"});return o.length>1&&o.forEach(function(i){var a;r[i]=e((a={},a[i]=t[i],a))}),r},_U=function(t,n,r,o,i){var a={};return o.slice(0,t.length).forEach(function(s,l){var c=t[l],u=n(s,r,i);if(!c)Jn(a,u);else{var d;Jn(a,(d={},d[c]=Jn({},a[c],u),d))}}),a},CU=function(t,n,r,o,i){var a={};for(var s in o){var l=t[s],c=o[s],u=n(c,r,i);if(!l)Jn(a,u);else{var d,p=B3(l);Jn(a,(d={},d[p]=Jn({},a[p],u),d))}}return a},Hk=function(t){var n=t.properties,r=t.property,o=t.scale,i=t.transform,a=i===void 0?SU:i,s=t.defaultScale;n=n||[r];var l=function(u,d,p){var h={},g=a(u,d,p);if(g!==null)return n.forEach(function(v){h[v]=g}),h};return l.scale=o,l.defaults=s,l},tr=function(t){t===void 0&&(t={});var n={};Object.keys(t).forEach(function(o){var i=t[o];if(i===!0){n[o]=Hk({property:o,scale:o});return}if(typeof i=="function"){n[o]=i;return}n[o]=Hk(i)});var r=iy(n);return r},OU=function(){for(var t={},n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];r.forEach(function(a){!a||!a.config||Jn(t,a.config)});var i=iy(t);return i},EU=function(t){return typeof t=="number"&&!isNaN(t)},TU=function(t,n){return Xo(n,t,!EU(t)||t>1?t:t*100+"%")},jU={width:{property:"width",scale:"sizes",transform:TU},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0},An=tr(jU),gv={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};gv.bg=gv.backgroundColor;var H3=tr(gv),PU={fontSizes:[12,14,16,20,24,32,48,64,72]},NU={fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:PU.fontSizes},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0},qi=tr(NU),RU={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0},vn=tr(RU),Vm={space:[0,4,8,16,32,64,128,256,512]},AU={gridGap:{property:"gridGap",scale:"space",defaultScale:Vm.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:Vm.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:Vm.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},Mn=tr(AU),Ct={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"}};Ct.borderTopWidth={property:"borderTopWidth",scale:"borderWidths"};Ct.borderTopColor={property:"borderTopColor",scale:"colors"};Ct.borderTopStyle={property:"borderTopStyle",scale:"borderStyles"};Ct.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"};Ct.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"};Ct.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"};Ct.borderBottomColor={property:"borderBottomColor",scale:"colors"};Ct.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"};Ct.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"};Ct.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"};Ct.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"};Ct.borderLeftColor={property:"borderLeftColor",scale:"colors"};Ct.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"};Ct.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"};Ct.borderRightColor={property:"borderRightColor",scale:"colors"};Ct.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var ti=tr(Ct),Qr={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};Qr.bgImage=Qr.backgroundImage;Qr.bgSize=Qr.backgroundSize;Qr.bgPosition=Qr.backgroundPosition;Qr.bgRepeat=Qr.backgroundRepeat;var Rp=tr(Qr),Ru={space:[0,4,8,16,32,64,128,256,512]},MU={position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:Ru.space},right:{property:"right",scale:"space",defaultScale:Ru.space},bottom:{property:"bottom",scale:"space",defaultScale:Ru.space},left:{property:"left",scale:"space",defaultScale:Ru.space}},Sc=tr(MU),Wt={space:[0,4,8,16,32,64,128,256,512]},Uk=function(t){return typeof t=="number"&&!isNaN(t)},si=function(t,n){if(!Uk(t))return Xo(n,t,t);var r=t<0,o=Math.abs(t),i=Xo(n,o,o);return Uk(i)?i*(r?-1:1):r?"-"+i:i},Te={};Te.margin={margin:{property:"margin",scale:"space",transform:si,defaultScale:Wt.space},marginTop:{property:"marginTop",scale:"space",transform:si,defaultScale:Wt.space},marginRight:{property:"marginRight",scale:"space",transform:si,defaultScale:Wt.space},marginBottom:{property:"marginBottom",scale:"space",transform:si,defaultScale:Wt.space},marginLeft:{property:"marginLeft",scale:"space",transform:si,defaultScale:Wt.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:si,defaultScale:Wt.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:si,defaultScale:Wt.space}};Te.margin.m=Te.margin.margin;Te.margin.mt=Te.margin.marginTop;Te.margin.mr=Te.margin.marginRight;Te.margin.mb=Te.margin.marginBottom;Te.margin.ml=Te.margin.marginLeft;Te.margin.mx=Te.margin.marginX;Te.margin.my=Te.margin.marginY;Te.padding={padding:{property:"padding",scale:"space",defaultScale:Wt.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:Wt.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:Wt.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:Wt.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:Wt.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:Wt.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:Wt.space}};Te.padding.p=Te.padding.padding;Te.padding.pt=Te.padding.paddingTop;Te.padding.pr=Te.padding.paddingRight;Te.padding.pb=Te.padding.paddingBottom;Te.padding.pl=Te.padding.paddingLeft;Te.padding.px=Te.padding.paddingX;Te.padding.py=Te.padding.paddingY;var LU=tr(Te.margin),IU=tr(Te.padding),ic=OU(LU,IU);tr({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function ac(){return ac=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ac.apply(this,arguments)}var lr=function(t,n,r,o,i){for(n=n&&n.split?n.split("."):[n],o=0;o<n.length;o++)t=t?t[n[o]]:i;return t===i?r:t},DU=[40,52,64].map(function(e){return e+"em"}),$U={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},FU={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},Wk={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},zU={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},BU=function(t,n){if(typeof n!="number"||n>=0)return lr(t,n,n);var r=Math.abs(n),o=lr(t,r,r);return typeof o=="string"?"-"+o:o*-1},HU=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce(function(e,t){var n;return ac({},e,(n={},n[t]=BU,n))},{}),UU=function(t){return function(n){var r={},o=lr(n,"breakpoints",DU),i=[null].concat(o.map(function(u){return"@media screen and (min-width: "+u+")"}));for(var a in t){var s=typeof t[a]=="function"?t[a](n):t[a];if(s!=null){if(!Array.isArray(s)){r[a]=s;continue}for(var l=0;l<s.slice(0,i.length).length;l++){var c=i[l];if(!c){r[a]=s[l];continue}r[c]=r[c]||{},s[l]!=null&&(r[c][a]=s[l])}}}return r}},WU=function e(t){return function(n){n===void 0&&(n={});var r=ac({},$U,{},n.theme||n),o={},i=typeof t=="function"?t(r):t,a=UU(i)(r);for(var s in a){var l=a[s],c=typeof l=="function"?l(r):l;if(s==="variant"){var u=e(lr(r,c))(r);o=ac({},o,{},u);continue}if(c&&typeof c=="object"){o[s]=e(c)(r);continue}var d=lr(FU,s,s),p=lr(zU,d),h=lr(r,p,lr(r,d,{})),g=lr(HU,d,lr),v=g(h,c,c);if(Wk[d])for(var x=Wk[d],y=0;y<x.length;y++)o[x[y]]=v;else o[d]=v}return o}},Yn=function(t){var n,r=t.scale,o=t.prop,i=o===void 0?"variant":o,a=t.variants,s=a===void 0?{}:a,l=t.key,c;Object.keys(s).length?c=function(h,g,v){return WU(Xo(g,h,null))(v.theme)}:c=function(h,g){return Xo(g,h,null)},c.scale=r||l,c.defaults=s;var u=(n={},n[i]=c,n),d=iy(u);return d};Yn({key:"buttons"});Yn({key:"textStyles",prop:"textStyle"});var fn=Yn({key:"colorStyles",prop:"colors"});An.width;An.height;An.minWidth;An.minHeight;An.maxWidth;An.maxHeight;An.size;An.verticalAlign;An.display;An.overflow;An.overflowX;An.overflowY;H3.opacity;qi.fontSize;qi.fontFamily;qi.fontWeight;qi.lineHeight;qi.textAlign;qi.fontStyle;qi.letterSpacing;vn.alignItems;vn.alignContent;vn.justifyItems;vn.justifyContent;vn.flexWrap;vn.flexDirection;vn.flex;vn.flexGrow;vn.flexShrink;vn.flexBasis;vn.justifySelf;vn.alignSelf;vn.order;Mn.gridGap;Mn.gridColumnGap;Mn.gridRowGap;Mn.gridColumn;Mn.gridRow;Mn.gridAutoFlow;Mn.gridAutoColumns;Mn.gridAutoRows;Mn.gridTemplateColumns;Mn.gridTemplateRows;Mn.gridTemplateAreas;Mn.gridArea;ti.borderWidth;ti.borderStyle;ti.borderColor;ti.borderTop;ti.borderRight;ti.borderBottom;ti.borderLeft;ti.borderRadius;Rp.backgroundImage;Rp.backgroundSize;Rp.backgroundPosition;Rp.backgroundRepeat;Sc.zIndex;Sc.top;Sc.right;Sc.bottom;Sc.left;function Cf(e){"@babel/helpers - typeof";return Cf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cf(e)}var VU=/^\s+/,YU=/\s+$/;function se(e,t){if(e=e||"",t=t||{},e instanceof se)return e;if(!(this instanceof se))return new se(e,t);var n=GU(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}se.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),n,r,o,i,a,s;return n=t.r/255,r=t.g/255,o=t.b/255,n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),r<=.03928?a=r/12.92:a=Math.pow((r+.055)/1.055,2.4),o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),.2126*i+.7152*a+.0722*s},setAlpha:function(t){return this._a=U3(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=Yk(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=Yk(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this._a==1?"hsv("+n+", "+r+"%, "+o+"%)":"hsva("+n+", "+r+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var t=Vk(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=Vk(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this._a==1?"hsl("+n+", "+r+"%, "+o+"%)":"hsla("+n+", "+r+"%, "+o+"%, "+this._roundA+")"},toHex:function(t){return Gk(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return QU(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(Xe(this._r,255)*100)+"%",g:Math.round(Xe(this._g,255)*100)+"%",b:Math.round(Xe(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(Xe(this._r,255)*100)+"%, "+Math.round(Xe(this._g,255)*100)+"%, "+Math.round(Xe(this._b,255)*100)+"%)":"rgba("+Math.round(Xe(this._r,255)*100)+"%, "+Math.round(Xe(this._g,255)*100)+"%, "+Math.round(Xe(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:cW[Gk(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var n="#"+Xk(this._r,this._g,this._b,this._a),r=n,o=this._gradientType?"GradientType = 1, ":"";if(t){var i=se(t);r="#"+Xk(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+n+",endColorstr="+r+")"},toString:function(t){var n=!!t;t=t||this._format;var r=!1,o=this._a<1&&this._a>=0,i=!n&&o&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return i?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return se(this.toString())},_applyModification:function(t,n){var r=t.apply(null,[this].concat([].slice.call(n)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(tW,arguments)},brighten:function(){return this._applyModification(nW,arguments)},darken:function(){return this._applyModification(rW,arguments)},desaturate:function(){return this._applyModification(JU,arguments)},saturate:function(){return this._applyModification(ZU,arguments)},greyscale:function(){return this._applyModification(eW,arguments)},spin:function(){return this._applyModification(oW,arguments)},_applyCombination:function(t,n){return t.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(sW,arguments)},complement:function(){return this._applyCombination(iW,arguments)},monochromatic:function(){return this._applyCombination(lW,arguments)},splitcomplement:function(){return this._applyCombination(aW,arguments)},triad:function(){return this._applyCombination(qk,[3])},tetrad:function(){return this._applyCombination(qk,[4])}};se.fromRatio=function(e,t){if(Cf(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(r==="a"?n[r]=e[r]:n[r]=Ys(e[r]));e=n}return se(e,t)};function GU(e){var t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,a=!1,s=!1;return typeof e=="string"&&(e=pW(e)),Cf(e)=="object"&&(Er(e.r)&&Er(e.g)&&Er(e.b)?(t=XU(e.r,e.g,e.b),a=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Er(e.h)&&Er(e.s)&&Er(e.v)?(r=Ys(e.s),o=Ys(e.v),t=KU(e.h,r,o),a=!0,s="hsv"):Er(e.h)&&Er(e.s)&&Er(e.l)&&(r=Ys(e.s),i=Ys(e.l),t=qU(e.h,r,i),a=!0,s="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=U3(n),{ok:a,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}function XU(e,t,n){return{r:Xe(e,255)*255,g:Xe(t,255)*255,b:Xe(n,255)*255}}function Vk(e,t,n){e=Xe(e,255),t=Xe(t,255),n=Xe(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i,a,s=(r+o)/2;if(r==o)i=a=0;else{var l=r-o;switch(a=s>.5?l/(2-r-o):l/(r+o),r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s:a,l:s}}function qU(e,t,n){var r,o,i;e=Xe(e,360),t=Xe(t,100),n=Xe(n,100);function a(c,u,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?c+(u-c)*6*d:d<1/2?u:d<2/3?c+(u-c)*(2/3-d)*6:c}if(t===0)r=o=i=n;else{var s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=a(l,s,e+1/3),o=a(l,s,e),i=a(l,s,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function Yk(e,t,n){e=Xe(e,255),t=Xe(t,255),n=Xe(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i,a,s=r,l=r-o;if(a=r===0?0:l/r,r==o)i=0;else{switch(r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s:a,v:s}}function KU(e,t,n){e=Xe(e,360)*6,t=Xe(t,100),n=Xe(n,100);var r=Math.floor(e),o=e-r,i=n*(1-t),a=n*(1-o*t),s=n*(1-(1-o)*t),l=r%6,c=[n,a,i,i,s,n][l],u=[s,n,n,a,i,i][l],d=[i,i,s,n,n,a][l];return{r:c*255,g:u*255,b:d*255}}function Gk(e,t,n,r){var o=[Gn(Math.round(e).toString(16)),Gn(Math.round(t).toString(16)),Gn(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function QU(e,t,n,r,o){var i=[Gn(Math.round(e).toString(16)),Gn(Math.round(t).toString(16)),Gn(Math.round(n).toString(16)),Gn(W3(r))];return o&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Xk(e,t,n,r){var o=[Gn(W3(r)),Gn(Math.round(e).toString(16)),Gn(Math.round(t).toString(16)),Gn(Math.round(n).toString(16))];return o.join("")}se.equals=function(e,t){return!e||!t?!1:se(e).toRgbString()==se(t).toRgbString()};se.random=function(){return se.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function JU(e,t){t=t===0?0:t||10;var n=se(e).toHsl();return n.s-=t/100,n.s=Ap(n.s),se(n)}function ZU(e,t){t=t===0?0:t||10;var n=se(e).toHsl();return n.s+=t/100,n.s=Ap(n.s),se(n)}function eW(e){return se(e).desaturate(100)}function tW(e,t){t=t===0?0:t||10;var n=se(e).toHsl();return n.l+=t/100,n.l=Ap(n.l),se(n)}function nW(e,t){t=t===0?0:t||10;var n=se(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),se(n)}function rW(e,t){t=t===0?0:t||10;var n=se(e).toHsl();return n.l-=t/100,n.l=Ap(n.l),se(n)}function oW(e,t){var n=se(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,se(n)}function iW(e){var t=se(e).toHsl();return t.h=(t.h+180)%360,se(t)}function qk(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=se(e).toHsl(),r=[se(e)],o=360/t,i=1;i<t;i++)r.push(se({h:(n.h+i*o)%360,s:n.s,l:n.l}));return r}function aW(e){var t=se(e).toHsl(),n=t.h;return[se(e),se({h:(n+72)%360,s:t.s,l:t.l}),se({h:(n+216)%360,s:t.s,l:t.l})]}function sW(e,t,n){t=t||6,n=n||30;var r=se(e).toHsl(),o=360/n,i=[se(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(se(r));return i}function lW(e,t){t=t||6;for(var n=se(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],s=1/t;t--;)a.push(se({h:r,s:o,v:i})),i=(i+s)%1;return a}se.mix=function(e,t,n){n=n===0?0:n||50;var r=se(e).toRgb(),o=se(t).toRgb(),i=n/100,a={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return se(a)};se.readability=function(e,t){var n=se(e),r=se(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)};se.isReadable=function(e,t,n){var r=se.readability(e,t),o,i;switch(i=!1,o=mW(n),o.level+o.size){case"AAsmall":case"AAAlarge":i=r>=4.5;break;case"AAlarge":i=r>=3;break;case"AAAsmall":i=r>=7;break}return i};se.mostReadable=function(e,t,n){var r=null,o=0,i,a,s,l;n=n||{},a=n.includeFallbackColors,s=n.level,l=n.size;for(var c=0;c<t.length;c++)i=se.readability(e,t[c]),i>o&&(o=i,r=se(t[c]));return se.isReadable(e,r,{level:s,size:l})||!a?r:(n.includeFallbackColors=!1,se.mostReadable(e,["#fff","#000"],n))};var vv=se.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},cW=se.hexNames=uW(vv);function uW(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function U3(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Xe(e,t){dW(e)&&(e="100%");var n=fW(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Ap(e){return Math.min(1,Math.max(0,e))}function nn(e){return parseInt(e,16)}function dW(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function fW(e){return typeof e=="string"&&e.indexOf("%")!=-1}function Gn(e){return e.length==1?"0"+e:""+e}function Ys(e){return e<=1&&(e=e*100+"%"),e}function W3(e){return Math.round(parseFloat(e)*255).toString(16)}function Kk(e){return nn(e)/255}var $n=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",n="(?:"+t+")|(?:"+e+")",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",o="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+o),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+o),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Er(e){return!!$n.CSS_UNIT.exec(e)}function pW(e){e=e.replace(VU,"").replace(YU,"").toLowerCase();var t=!1;if(vv[e])e=vv[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=$n.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=$n.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=$n.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=$n.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=$n.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=$n.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=$n.hex8.exec(e))?{r:nn(n[1]),g:nn(n[2]),b:nn(n[3]),a:Kk(n[4]),format:t?"name":"hex8"}:(n=$n.hex6.exec(e))?{r:nn(n[1]),g:nn(n[2]),b:nn(n[3]),format:t?"name":"hex"}:(n=$n.hex4.exec(e))?{r:nn(n[1]+""+n[1]),g:nn(n[2]+""+n[2]),b:nn(n[3]+""+n[3]),a:Kk(n[4]+""+n[4]),format:t?"name":"hex8"}:(n=$n.hex3.exec(e))?{r:nn(n[1]+""+n[1]),g:nn(n[2]+""+n[2]),b:nn(n[3]+""+n[3]),format:t?"name":"hex"}:!1}function mW(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:t,size:n}}/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var V3=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Of=V3.join(","),Y3=typeof Element>"u",Bi=Y3?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,bv=!Y3&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},G3=function(t,n,r){var o=Array.prototype.slice.apply(t.querySelectorAll(Of));return n&&Bi.call(t,Of)&&o.unshift(t),o=o.filter(r),o},X3=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(a.tagName==="SLOT"){var s=a.assignedElements(),l=s.length?s:a.children,c=e(l,!0,r);r.flatten?o.push.apply(o,c):o.push({scope:a,candidates:c})}else{var u=Bi.call(a,Of);u&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),p=!r.shadowRootFilter||r.shadowRootFilter(a);if(d&&p){var h=e(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scope:a,candidates:h})}else i.unshift.apply(i,a.children)}}return o},q3=function(t,n){return t.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},hW=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},K3=function(t){return t.tagName==="INPUT"},gW=function(t){return K3(t)&&t.type==="hidden"},vW=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},bW=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},yW=function(t){if(!t.name)return!0;var n=t.form||bv(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=bW(o,t.form);return!i||i===t},xW=function(t){return K3(t)&&t.type==="radio"},wW=function(t){return xW(t)&&!yW(t)},Qk=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},kW=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=Bi.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(Bi.call(a,"details:not([open]) *"))return!0;var s=bv(t).host,l=(s==null?void 0:s.ownerDocument.contains(s))||t.ownerDocument.contains(t);if(!r||r==="full"){if(typeof o=="function"){for(var c=t;t;){var u=t.parentElement,d=bv(t);if(u&&!u.shadowRoot&&o(u)===!0)return Qk(t);t.assignedSlot?t=t.assignedSlot:!u&&d!==t.ownerDocument?t=d.host:t=u}t=c}if(l)return!t.getClientRects().length}else if(r==="non-zero-area")return Qk(t);return!1},SW=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return Bi.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},Ef=function(t,n){return!(n.disabled||gW(n)||kW(n,t)||vW(n)||SW(n))},yv=function(t,n){return!(wW(n)||q3(n)<0||!Ef(t,n))},_W=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},CW=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scope,s=a?o.scope:o,l=q3(s,a),c=a?e(o.candidates):s;l===0?a?n.push.apply(n,c):n.push(s):r.push({documentOrder:i,tabIndex:l,item:o,isScope:a,content:c})}),r.sort(hW).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},Q3=function(t,n){n=n||{};var r;return n.getShadowRoot?r=X3([t],n.includeContainer,{filter:yv.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:_W}):r=G3(t,n.includeContainer,yv.bind(null,n)),CW(r)},J3=function(t,n){n=n||{};var r;return n.getShadowRoot?r=X3([t],n.includeContainer,{filter:Ef.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=G3(t,n.includeContainer,Ef.bind(null,n)),r},Gs=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return Bi.call(t,Of)===!1?!1:yv(n,t)},OW=V3.concat("iframe").join(","),xd=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return Bi.call(t,OW)===!1?!1:Ef(n,t)};const EW=Object.freeze(Object.defineProperty({__proto__:null,focusable:J3,isFocusable:xd,isTabbable:Gs,tabbable:Q3},Symbol.toStringTag,{value:"Module"}));/*!
* focus-trap 6.9.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function Jk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Zk(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jk(Object(n),!0).forEach(function(r){TW(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jk(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function TW(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var e2=function(){var e=[];return{activateTrap:function(n){if(e.length>0){var r=e[e.length-1];r!==n&&r.pause()}var o=e.indexOf(n);o===-1||e.splice(o,1),e.push(n)},deactivateTrap:function(n){var r=e.indexOf(n);r!==-1&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}}}(),jW=function(t){return t.tagName&&t.tagName.toLowerCase()==="input"&&typeof t.select=="function"},PW=function(t){return t.key==="Escape"||t.key==="Esc"||t.keyCode===27},NW=function(t){return t.key==="Tab"||t.keyCode===9},t2=function(t){return setTimeout(t,0)},n2=function(t,n){var r=-1;return t.every(function(o,i){return n(o)?(r=i,!1):!0}),r},js=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return typeof t=="function"?t.apply(void 0,r):t},Au=function(t){return t.target.shadowRoot&&typeof t.composedPath=="function"?t.composedPath()[0]:t.target},RW=function(t,n){var r=(n==null?void 0:n.document)||document,o=Zk({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a,s=function(_,O,E){return _&&_[O]!==void 0?_[O]:o[E||O]},l=function(_){return i.containerGroups.findIndex(function(O){var E=O.container,T=O.tabbableNodes;return E.contains(_)||T.find(function(P){return P===_})})},c=function(_){var O=o[_];if(typeof O=="function"){for(var E=arguments.length,T=new Array(E>1?E-1:0),P=1;P<E;P++)T[P-1]=arguments[P];O=O.apply(void 0,T)}if(O===!0&&(O=void 0),!O){if(O===void 0||O===!1)return O;throw new Error("`".concat(_,"` was specified but was not a node, or did not return a node"))}var A=O;if(typeof O=="string"&&(A=r.querySelector(O),!A))throw new Error("`".concat(_,"` as selector refers to no known node"));return A},u=function(){var _=c("initialFocus");if(_===!1)return!1;if(_===void 0)if(l(r.activeElement)>=0)_=r.activeElement;else{var O=i.tabbableGroups[0],E=O&&O.firstTabbableNode;_=E||c("fallbackFocus")}if(!_)throw new Error("Your focus-trap needs to have at least one focusable element");return _},d=function(){if(i.containerGroups=i.containers.map(function(_){var O=Q3(_,o.tabbableOptions),E=J3(_,o.tabbableOptions);return{container:_,tabbableNodes:O,focusableNodes:E,firstTabbableNode:O.length>0?O[0]:null,lastTabbableNode:O.length>0?O[O.length-1]:null,nextTabbableNode:function(P){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,I=E.findIndex(function(X){return X===P});if(!(I<0))return A?E.slice(I+1).find(function(X){return Gs(X,o.tabbableOptions)}):E.slice(0,I).reverse().find(function(X){return Gs(X,o.tabbableOptions)})}}}),i.tabbableGroups=i.containerGroups.filter(function(_){return _.tabbableNodes.length>0}),i.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function C(_){if(_!==!1&&_!==r.activeElement){if(!_||!_.focus){C(u());return}_.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=_,jW(_)&&_.select()}},h=function(_){var O=c("setReturnFocus",_);return O||(O===!1?!1:_)},g=function(_){var O=Au(_);if(!(l(O)>=0)){if(js(o.clickOutsideDeactivates,_)){a.deactivate({returnFocus:o.returnFocusOnDeactivate&&!xd(O,o.tabbableOptions)});return}js(o.allowOutsideClick,_)||_.preventDefault()}},v=function(_){var O=Au(_),E=l(O)>=0;E||O instanceof Document?E&&(i.mostRecentlyFocusedNode=O):(_.stopImmediatePropagation(),p(i.mostRecentlyFocusedNode||u()))},x=function(_){var O=Au(_);d();var E=null;if(i.tabbableGroups.length>0){var T=l(O),P=T>=0?i.containerGroups[T]:void 0;if(T<0)_.shiftKey?E=i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:E=i.tabbableGroups[0].firstTabbableNode;else if(_.shiftKey){var A=n2(i.tabbableGroups,function(M){var N=M.firstTabbableNode;return O===N});if(A<0&&(P.container===O||xd(O,o.tabbableOptions)&&!Gs(O,o.tabbableOptions)&&!P.nextTabbableNode(O,!1))&&(A=T),A>=0){var I=A===0?i.tabbableGroups.length-1:A-1,X=i.tabbableGroups[I];E=X.lastTabbableNode}}else{var H=n2(i.tabbableGroups,function(M){var N=M.lastTabbableNode;return O===N});if(H<0&&(P.container===O||xd(O,o.tabbableOptions)&&!Gs(O,o.tabbableOptions)&&!P.nextTabbableNode(O))&&(H=T),H>=0){var V=H===i.tabbableGroups.length-1?0:H+1,J=i.tabbableGroups[V];E=J.firstTabbableNode}}}else E=c("fallbackFocus");E&&(_.preventDefault(),p(E))},y=function(_){if(PW(_)&&js(o.escapeDeactivates,_)!==!1){_.preventDefault(),a.deactivate();return}if(NW(_)){x(_);return}},b=function(_){var O=Au(_);l(O)>=0||js(o.clickOutsideDeactivates,_)||js(o.allowOutsideClick,_)||(_.preventDefault(),_.stopImmediatePropagation())},w=function(){if(i.active)return e2.activateTrap(a),i.delayInitialFocusTimer=o.delayInitialFocus?t2(function(){p(u())}):p(u()),r.addEventListener("focusin",v,!0),r.addEventListener("mousedown",g,{capture:!0,passive:!1}),r.addEventListener("touchstart",g,{capture:!0,passive:!1}),r.addEventListener("click",b,{capture:!0,passive:!1}),r.addEventListener("keydown",y,{capture:!0,passive:!1}),a},S=function(){if(i.active)return r.removeEventListener("focusin",v,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0),r.removeEventListener("click",b,!0),r.removeEventListener("keydown",y,!0),a};return a={get active(){return i.active},get paused(){return i.paused},activate:function(_){if(i.active)return this;var O=s(_,"onActivate"),E=s(_,"onPostActivate"),T=s(_,"checkCanFocusTrap");T||d(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,O&&O();var P=function(){T&&d(),w(),E&&E()};return T?(T(i.containers.concat()).then(P,P),this):(P(),this)},deactivate:function(_){if(!i.active)return this;var O=Zk({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},_);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,S(),i.active=!1,i.paused=!1,e2.deactivateTrap(a);var E=s(O,"onDeactivate"),T=s(O,"onPostDeactivate"),P=s(O,"checkCanReturnFocus"),A=s(O,"returnFocus","returnFocusOnDeactivate");E&&E();var I=function(){t2(function(){A&&p(h(i.nodeFocusedBeforeActivation)),T&&T()})};return A&&P?(P(h(i.nodeFocusedBeforeActivation)).then(I,I),this):(I(),this)},pause:function(){return i.paused||!i.active?this:(i.paused=!0,S(),this)},unpause:function(){return!i.paused||!i.active?this:(i.paused=!1,d(),w(),this)},updateContainerElements:function(_){var O=[].concat(_).filter(Boolean);return i.containers=O.map(function(E){return typeof E=="string"?r.querySelector(E):E}),i.active&&d(),this}},a.updateContainerElements(t),a};const AW=Object.freeze(Object.defineProperty({__proto__:null,createFocusTrap:RW},Symbol.toStringTag,{value:"Module"})),MW=kC(AW),LW=kC(EW);function xv(e){"@babel/helpers - typeof";return xv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xv(e)}function IW(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function DW(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $W(e,t,n){return t&&DW(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function FW(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&wv(e,t)}function wv(e,t){return wv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},wv(e,t)}function zW(e){var t=HW();return function(){var r=Tf(e),o;if(t){var i=Tf(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return BW(this,o)}}function BW(e,t){if(t&&(xv(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xs(e)}function Xs(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function HW(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Tf(e){return Tf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tf(e)}function UW(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Mu=k,WW=Qf,me=Yi,VW=MW,YW=VW.createFocusTrap,GW=LW,XW=GW.isFocusable,Z3=function(e){FW(n,e);var t=zW(n);function n(r){var o;IW(this,n),o=t.call(this,r),UW(Xs(o),"getNodeForOption",function(s){var l,c=(l=this.internalOptions[s])!==null&&l!==void 0?l:this.originalOptions[s];if(typeof c=="function"){for(var u=arguments.length,d=new Array(u>1?u-1:0),p=1;p<u;p++)d[p-1]=arguments[p];c=c.apply(void 0,d)}if(c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw new Error("`".concat(s,"` was specified but was not a node, or did not return a node"))}var h=c;if(typeof c=="string"){var g;if(h=(g=this.getDocument())===null||g===void 0?void 0:g.querySelector(c),!h)throw new Error("`".concat(s,"` as selector refers to no known node"))}return h}),o.handleDeactivate=o.handleDeactivate.bind(Xs(o)),o.handlePostDeactivate=o.handlePostDeactivate.bind(Xs(o)),o.handleClickOutsideDeactivates=o.handleClickOutsideDeactivates.bind(Xs(o)),o.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:o.handleDeactivate,onPostDeactivate:o.handlePostDeactivate,clickOutsideDeactivates:o.handleClickOutsideDeactivates},o.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=r.focusTrapOptions;for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(a==="returnFocusOnDeactivate"||a==="onDeactivate"||a==="onPostDeactivate"||a==="checkCanReturnFocus"||a==="clickOutsideDeactivates"){o.originalOptions[a]=i[a];continue}o.internalOptions[a]=i[a]}return o.outsideClick=null,o.focusTrapElements=r.containerElements||[],o.updatePreviousElement(),o}return $W(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document<"u"?document:void 0)}},{key:"getReturnFocusNode",value:function(){var o=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return o||(o===!1?!1:this.previouslyFocusedElement)}},{key:"updatePreviousElement",value:function(){var o=this.getDocument();o&&(this.previouslyFocusedElement=o.activeElement)}},{key:"deactivateTrap",value:function(){!this.focusTrap||!this.focusTrap.active||this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(o){var i=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,o):this.originalOptions.clickOutsideDeactivates;return i&&(this.outsideClick={target:o.target,allowDeactivation:i}),i}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var o=this,i=function(){var s=o.getReturnFocusNode(),l=!!(o.originalOptions.returnFocusOnDeactivate&&s!==null&&s!==void 0&&s.focus&&(!o.outsideClick||o.outsideClick.allowDeactivation&&!XW(o.outsideClick.target,o.internalOptions.tabbableOptions))),c=o.internalOptions.preventScroll,u=c===void 0?!1:c;l&&s.focus({preventScroll:u}),o.originalOptions.onPostDeactivate&&o.originalOptions.onPostDeactivate.call(null),o.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(i,i):i()}},{key:"setupFocusTrap",value:function(){if(!this.focusTrap){var o=this.focusTrapElements.map(WW.findDOMNode),i=o.some(Boolean);i&&(this.focusTrap=this.props._createFocusTrap(o,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(o){if(this.focusTrap){o.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var i=!o.active&&this.props.active,a=o.active&&!this.props.active,s=!o.paused&&this.props.paused,l=o.paused&&!this.props.paused;if(i&&(this.updatePreviousElement(),this.focusTrap.activate()),a){this.deactivateTrap();return}s&&this.focusTrap.pause(),l&&this.focusTrap.unpause()}else o.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var o=this,i=this.props.children?Mu.Children.only(this.props.children):void 0;if(i){if(i.type&&i.type===Mu.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var a=function(c){var u=o.props.containerElements;i&&(typeof i.ref=="function"?i.ref(c):i.ref&&(i.ref.current=c)),o.focusTrapElements=u||[c]},s=Mu.cloneElement(i,{ref:a});return s}return null}}]),n}(Mu.Component),Ps=typeof Element>"u"?Function:Element;Z3.propTypes={active:me.bool,paused:me.bool,focusTrapOptions:me.shape({document:me.object,onActivate:me.func,onPostActivate:me.func,checkCanFocusTrap:me.func,onDeactivate:me.func,onPostDeactivate:me.func,checkCanReturnFocus:me.func,initialFocus:me.oneOfType([me.instanceOf(Ps),me.string,me.bool,me.func]),fallbackFocus:me.oneOfType([me.instanceOf(Ps),me.string,me.func]),escapeDeactivates:me.oneOfType([me.bool,me.func]),clickOutsideDeactivates:me.oneOfType([me.bool,me.func]),returnFocusOnDeactivate:me.bool,setReturnFocus:me.oneOfType([me.instanceOf(Ps),me.string,me.bool,me.func]),allowOutsideClick:me.oneOfType([me.bool,me.func]),preventScroll:me.bool,tabbableOptions:me.shape({displayCheck:me.oneOf(["full","non-zero-area","none"]),getShadowRoot:me.oneOfType([me.bool,me.func])})}),containerElements:me.arrayOf(me.instanceOf(Ps)),children:me.oneOfType([me.element,me.instanceOf(Ps)])};Z3.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:YW};var kv=k,qW=Yi,KW=GE;function ay(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var dr=ay(kv),ft=ay(qW),Ym=ay(KW);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var cr=function(){return cr=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},cr.apply(this,arguments)};function Sv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var QW="range-slider",JW=dr.default.forwardRef(function(e,t){var n=e.classes,r=e.value,o=e.min,i=e.max,a=e.onChange,s=e.onMouseUpOrTouchEnd,l=e.onMouseUp,c=e.onTouchEnd,u=Sv(e,["classes","value","min","max","onChange","onMouseUpOrTouchEnd","onMouseUp","onTouchEnd"]);return dr.default.createElement("input",cr({ref:t,type:"range",value:r,min:o,max:i,onChange:function(d){return a(d,d.target.valueAsNumber)},onMouseUp:function(d){s(d),l&&l(d)},onTouchEnd:function(d){s(d),c&&c(d)},className:n,"aria-valuenow":Number(r),"aria-valuemin":Number(o),"aria-valuemax":Number(i)},u))}),ZW=dr.default.memo(JW),eP=dr.default.forwardRef(function(e,t){var n=e.value,r=e.onChange,o=r===void 0?function(){}:r,i=e.onAfterChange,a=i===void 0?function(){}:i,s=e.disabled,l=s===void 0?!1:s,c=e.size,u=e.min,d=u===void 0?0:u,p=e.max,h=p===void 0?100:p,g=e.step,v=e.variant,x=v===void 0?"primary":v,y=e.inputProps,b=y===void 0?{}:y,w=e.tooltip,S=w===void 0?"auto":w,C=e.tooltipPlacement,_=C===void 0?"bottom":C,O=e.tooltipLabel,E=e.tooltipStyle,T=E===void 0?{}:E,P=e.tooltipProps,A=P===void 0?{}:P,I=e.bsPrefix,X=e.className,H=Sv(e,["value","onChange","onAfterChange","disabled","size","min","max","step","variant","inputProps","tooltip","tooltipPlacement","tooltipLabel","tooltipStyle","tooltipProps","bsPrefix","className"]),V=kv.useState(),J=V[0],M=V[1],N=I||QW,U=S==="auto"||S==="on",Q=Ym.default(X,N,c&&N+"--"+c,l&&"disabled",x&&N+"--"+x),Z=cr(cr({},b),H),$=Z.onMouseUp,F=Z.onTouchEnd,D=Sv(Z,["onMouseUp","onTouchEnd"]),z=kv.useCallback(function(Ae){J!==Ae.target.value&&a(Ae,Ae.target.valueAsNumber),M(Ae.target.value)},[J,a]),j=dr.default.createElement(ZW,cr({},cr({disabled:l,value:n,min:d,max:h,ref:t,step:g,classes:Q,onMouseUpOrTouchEnd:z,onTouchEnd:F,onMouseUp:$,onChange:o},D))),le=Ym.default(N+"__wrap",c&&N+"__wrap--"+c),G=Ym.default(N+"__tooltip",U&&N+"__tooltip--"+S,_&&N+"__tooltip--"+_,l&&N+"__tooltip--disabled"),Ce=c==="sm"?8:c==="lg"?12:10,ge=(Number(n)-d)/(h-d),xe=ge*100,ce=(ge-.5)*2,Re=ce*-Ce;return dr.default.createElement("span",{className:le},j,U&&dr.default.createElement("div",cr({className:G,style:cr(cr({},T||{}),{left:"calc("+xe+"% + "+Re+"px)"})},A),dr.default.createElement("div",{className:N+"__tooltip__label"},O?O(Number(n)):n),dr.default.createElement("div",{className:N+"__tooltip__caret"})))});eP.propTypes={value:ft.default.oneOfType([ft.default.number,ft.default.string]).isRequired,onChange:ft.default.func,onAfterChange:ft.default.func,min:ft.default.number,max:ft.default.number,step:ft.default.number,disabled:ft.default.bool,size:ft.default.oneOf(["sm","lg"]),variant:ft.default.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),inputProps:ft.default.object,tooltip:ft.default.oneOf(["auto","on","off"]),tooltipPlacement:ft.default.oneOf(["top","bottom"]),tooltipLabel:ft.default.func,tooltipStyle:ft.default.object,tooltipProps:ft.default.object,className:ft.default.string,bsPrefix:ft.default.string};dr.default.memo(eP);var rt={},sy={},_c={},Cc={},tP="Expected a function",r2=NaN,eV="[object Symbol]",tV=/^\s+|\s+$/g,nV=/^[-+]0x[0-9a-f]+$/i,rV=/^0b[01]+$/i,oV=/^0o[0-7]+$/i,iV=parseInt,aV=typeof Dc=="object"&&Dc&&Dc.Object===Object&&Dc,sV=typeof self=="object"&&self&&self.Object===Object&&self,lV=aV||sV||Function("return this")(),cV=Object.prototype,uV=cV.toString,dV=Math.max,fV=Math.min,Gm=function(){return lV.Date.now()};function pV(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(tP);t=o2(t)||0,jf(n)&&(u=!!n.leading,d="maxWait"in n,i=d?dV(o2(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p);function h(_){var O=r,E=o;return r=o=void 0,c=_,a=e.apply(E,O),a}function g(_){return c=_,s=setTimeout(y,t),u?h(_):a}function v(_){var O=_-l,E=_-c,T=t-O;return d?fV(T,i-E):T}function x(_){var O=_-l,E=_-c;return l===void 0||O>=t||O<0||d&&E>=i}function y(){var _=Gm();if(x(_))return b(_);s=setTimeout(y,v(_))}function b(_){return s=void 0,p&&r?h(_):(r=o=void 0,a)}function w(){s!==void 0&&clearTimeout(s),c=0,r=l=o=s=void 0}function S(){return s===void 0?a:b(Gm())}function C(){var _=Gm(),O=x(_);if(r=arguments,o=this,l=_,O){if(s===void 0)return g(l);if(d)return s=setTimeout(y,t),h(l)}return s===void 0&&(s=setTimeout(y,t)),a}return C.cancel=w,C.flush=S,C}function mV(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(tP);return jf(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),pV(e,t,{leading:r,maxWait:t,trailing:o})}function jf(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function hV(e){return!!e&&typeof e=="object"}function gV(e){return typeof e=="symbol"||hV(e)&&uV.call(e)==eV}function o2(e){if(typeof e=="number")return e;if(gV(e))return r2;if(jf(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=jf(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(tV,"");var n=rV.test(e);return n||oV.test(e)?iV(e.slice(2),n?2:8):nV.test(e)?r2:+e}var vV=mV,Oc={};Object.defineProperty(Oc,"__esModule",{value:!0});Oc.addPassiveEventListener=function(t,n,r){var o=r.name;o||(o=n,console.warn("Listener must be a named function.")),wd.has(n)||wd.set(n,new Set);var i=wd.get(n);if(!i.has(o)){var a=function(){var s=!1;try{var l=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,l)}catch{}return s}();t.addEventListener(n,r,a?{passive:!0}:!1),i.add(o)}};Oc.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),wd.get(n).delete(r.name||n)};var wd=new Map;Object.defineProperty(Cc,"__esModule",{value:!0});var bV=vV,yV=wV(bV),xV=Oc;function wV(e){return e&&e.__esModule?e:{default:e}}var kV=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,yV.default)(t,n)},Qe={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=kV(function(o){Qe.scrollHandler(t)},n);Qe.scrollSpyContainers.push(t),(0,xV.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return Qe.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=Qe.scrollSpyContainers[Qe.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(Qe.currentPositionX(t),Qe.currentPositionY(t))})},addStateHandler:function(t){Qe.spySetState.push(t)},addSpyHandler:function(t,n){var r=Qe.scrollSpyContainers[Qe.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(Qe.currentPositionX(n),Qe.currentPositionY(n))},updateStates:function(){Qe.spySetState.forEach(function(t){return t()})},unmount:function(t,n){Qe.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Qe.spySetState&&Qe.spySetState.length&&Qe.spySetState.indexOf(t)>-1&&Qe.spySetState.splice(Qe.spySetState.indexOf(t),1),document.removeEventListener("scroll",Qe.scrollHandler)},update:function(){return Qe.scrollSpyContainers.forEach(function(t){return Qe.scrollHandler(t)})}};Cc.default=Qe;var us={},Ec={};Object.defineProperty(Ec,"__esModule",{value:!0});var SV=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",i=window&&window.location,a=o?i.pathname+i.search+o:i.pathname+i.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},_V=function(){return window.location.hash.replace(/^#/,"")},CV=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},OV=function(t){return getComputedStyle(t).position!=="static"},Xm=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},EV=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(OV(t)){if(n.offsetParent!==t){var o=function(u){return u===t||u===document},i=Xm(n,o),a=i.offsetTop,s=i.offsetParent;if(s!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var l=function(u){return u===document};return Xm(n,l).offsetTop-Xm(t,l).offsetTop};Ec.default={updateHash:SV,getHash:_V,filterElementInContainer:CV,scrollOffset:EV};var Mp={},ly={};Object.defineProperty(ly,"__esModule",{value:!0});ly.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var cy={};Object.defineProperty(cy,"__esModule",{value:!0});var TV=Oc,jV=["mousedown","mousewheel","touchmove","keydown"];cy.default={subscribe:function(t){return typeof document<"u"&&jV.forEach(function(n){return(0,TV.addPassiveEventListener)(document,n,t)})}};var Tc={};Object.defineProperty(Tc,"__esModule",{value:!0});var _v={registered:{},scrollEvent:{register:function(t,n){_v.registered[t]=n},remove:function(t){_v.registered[t]=null}}};Tc.default=_v;Object.defineProperty(Mp,"__esModule",{value:!0});var PV=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},NV=Ec;Lp(NV);var RV=ly,i2=Lp(RV),AV=cy,MV=Lp(AV),LV=Tc,fr=Lp(LV);function Lp(e){return e&&e.__esModule?e:{default:e}}var nP=function(t){return i2.default[t.smooth]||i2.default.defaultEasing},IV=function(t){return typeof t=="function"?t:function(){return t}},DV=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Cv=function(){return DV()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),rP=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},oP=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},iP=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},$V=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},FV=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},zV=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){fr.default.registered.end&&fr.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var i=e.bind(null,t,n);Cv.call(window,i);return}fr.default.registered.end&&fr.default.registered.end(o.to,o.target,o.currentPosition)},uy=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},jc=function(t,n,r,o){n.data=n.data||rP(),window.clearTimeout(n.data.delayTimeout);var i=function(){n.data.cancel=!0};if(MV.default.subscribe(i),uy(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?oP(n):iP(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){fr.default.registered.end&&fr.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=IV(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var a=nP(n),s=zV.bind(null,a,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){fr.default.registered.begin&&fr.default.registered.begin(n.data.to,n.data.target),Cv.call(window,s)},n.delay);return}fr.default.registered.begin&&fr.default.registered.begin(n.data.to,n.data.target),Cv.call(window,s)},Ip=function(t){return t=PV({},t),t.data=t.data||rP(),t.absolute=!0,t},BV=function(t){jc(0,Ip(t))},HV=function(t,n){jc(t,Ip(n))},UV=function(t){t=Ip(t),uy(t),jc(t.horizontal?$V(t):FV(t),t)},WV=function(t,n){n=Ip(n),uy(n);var r=n.horizontal?oP(n):iP(n);jc(t+r,n)};Mp.default={animateTopScroll:jc,getAnimationType:nP,scrollToTop:BV,scrollToBottom:UV,scrollTo:HV,scrollMore:WV};Object.defineProperty(us,"__esModule",{value:!0});var VV=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},YV=Ec,GV=dy(YV),XV=Mp,qV=dy(XV),KV=Tc,Lu=dy(KV);function dy(e){return e&&e.__esModule?e:{default:e}}var Iu={},a2=void 0;us.default={unmount:function(){Iu={}},register:function(t,n){Iu[t]=n},unregister:function(t){delete Iu[t]},get:function(t){return Iu[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return a2=t},getActiveLink:function(){return a2},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=VV({},n,{absolute:!1});var o=n.containerId,i=n.container,a=void 0;o?a=document.getElementById(o):i&&i.nodeType?a=i:a=document,n.absolute=!0;var s=n.horizontal,l=GV.default.scrollOffset(a,r,s)+(n.offset||0);if(!n.smooth){Lu.default.registered.begin&&Lu.default.registered.begin(t,r),a===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,Lu.default.registered.end&&Lu.default.registered.end(t,r);return}qV.default.animateTopScroll(l,n,t,r)}};var Dp={};Object.defineProperty(Dp,"__esModule",{value:!0});var QV=Ec,qm=JV(QV);function JV(e){return e&&e.__esModule?e:{default:e}}var ZV={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return qm.default.getHash()},changeHash:function(t,n){this.isInitialized()&&qm.default.getHash()!==t&&qm.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Dp.default=ZV;Object.defineProperty(_c,"__esModule",{value:!0});var Du=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eY=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),tY=k,s2=Pc(tY),nY=Cc,$u=Pc(nY),rY=us,oY=Pc(rY),iY=Yi,Ge=Pc(iY),aY=Dp,fo=Pc(aY);function Pc(e){return e&&e.__esModule?e:{default:e}}function sY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lY(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function cY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l2={to:Ge.default.string.isRequired,containerId:Ge.default.string,container:Ge.default.object,activeClass:Ge.default.string,activeStyle:Ge.default.object,spy:Ge.default.bool,horizontal:Ge.default.bool,smooth:Ge.default.oneOfType([Ge.default.bool,Ge.default.string]),offset:Ge.default.number,delay:Ge.default.number,isDynamic:Ge.default.bool,onClick:Ge.default.func,duration:Ge.default.oneOfType([Ge.default.number,Ge.default.func]),absolute:Ge.default.bool,onSetActive:Ge.default.func,onSetInactive:Ge.default.func,ignoreCancelEvents:Ge.default.bool,hashSpy:Ge.default.bool,saveHashHistory:Ge.default.bool,spyThrottle:Ge.default.number};_c.default=function(e,t){var n=t||oY.default,r=function(i){cY(a,i);function a(s){sY(this,a);var l=lY(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return o.call(l),l.state={active:!1},l}return eY(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();$u.default.isMounted(l)||$u.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(fo.default.isMounted()||fo.default.mount(n),fo.default.mapContainer(this.props.to,l)),$u.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){$u.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c={};this.state&&this.state.active?c=Du({},this.props.style,this.props.activeStyle):c=Du({},this.props.style);var u=Du({},this.props);for(var d in l2)u.hasOwnProperty(d)&&delete u[d];return u.className=l,u.style=c,u.onClick=this.handleClick,s2.default.createElement(e,u)}}]),a}(s2.default.PureComponent),o=function(){var a=this;this.scrollTo=function(s,l){n.scrollTo(s,Du({},a.state,l))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(s,l){var c=a.getScrollSpyContainer();if(!(fo.default.isMounted()&&!fo.default.isInitialized())){var u=a.props.horizontal,d=a.props.to,p=null,h=void 0,g=void 0;if(u){var v=0,x=0,y=0;if(c.getBoundingClientRect){var b=c.getBoundingClientRect();y=b.left}if(!p||a.props.isDynamic){if(p=n.get(d),!p)return;var w=p.getBoundingClientRect();v=w.left-y+s,x=v+w.width}var S=s-a.props.offset;h=S>=Math.floor(v)&&S<Math.floor(x),g=S<Math.floor(v)||S>=Math.floor(x)}else{var C=0,_=0,O=0;if(c.getBoundingClientRect){var E=c.getBoundingClientRect();O=E.top}if(!p||a.props.isDynamic){if(p=n.get(d),!p)return;var T=p.getBoundingClientRect();C=T.top-O+l,_=C+T.height}var P=l-a.props.offset;h=P>=Math.floor(C)&&P<Math.floor(_),g=P<Math.floor(C)||P>=Math.floor(_)}var A=n.getActiveLink();if(g){if(d===A&&n.setActiveLink(void 0),a.props.hashSpy&&fo.default.getHash()===d){var I=a.props.saveHashHistory,X=I===void 0?!1:I;fo.default.changeHash("",X)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(d,p))}if(h&&(A!==d||a.state.active===!1)){n.setActiveLink(d);var H=a.props.saveHashHistory,V=H===void 0?!1:H;a.props.hashSpy&&fo.default.changeHash(d,V),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(d,p))}}}};return r.propTypes=l2,r.defaultProps={offset:0},r};Object.defineProperty(sy,"__esModule",{value:!0});var uY=k,c2=aP(uY),dY=_c,fY=aP(dY);function aP(e){return e&&e.__esModule?e:{default:e}}function pY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u2(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function mY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var hY=function(e){mY(t,e);function t(){var n,r,o,i;pY(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return i=(r=(o=u2(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),o),o.render=function(){return c2.default.createElement("a",o.props,o.props.children)},r),u2(o,i)}return t}(c2.default.Component);sy.default=(0,fY.default)(hY);var fy={};Object.defineProperty(fy,"__esModule",{value:!0});var gY=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),vY=k,d2=sP(vY),bY=_c,yY=sP(bY);function sP(e){return e&&e.__esModule?e:{default:e}}function xY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wY(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function kY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var SY=function(e){kY(t,e);function t(){return xY(this,t),wY(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return gY(t,[{key:"render",value:function(){return d2.default.createElement("button",this.props,this.props.children)}}]),t}(d2.default.Component);fy.default=(0,yY.default)(SY);var py={},$p={};Object.defineProperty($p,"__esModule",{value:!0});var _Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},CY=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),OY=k,f2=Fp(OY),EY=Qf;Fp(EY);var TY=us,p2=Fp(TY),jY=Yi,m2=Fp(jY);function Fp(e){return e&&e.__esModule?e:{default:e}}function PY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function NY(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function RY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}$p.default=function(e){var t=function(n){RY(r,n);function r(o){PY(this,r);var i=NY(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i.childBindings={domNode:null},i}return CY(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;p2.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){p2.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return f2.default.createElement(e,_Y({},this.props,{parentBindings:this.childBindings}))}}]),r}(f2.default.Component);return t.propTypes={name:m2.default.string,id:m2.default.string},t};Object.defineProperty(py,"__esModule",{value:!0});var h2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},AY=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),MY=k,g2=my(MY),LY=$p,IY=my(LY),DY=Yi,v2=my(DY);function my(e){return e&&e.__esModule?e:{default:e}}function $Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function FY(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function zY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var lP=function(e){zY(t,e);function t(){return $Y(this,t),FY(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return AY(t,[{key:"render",value:function(){var r=this,o=h2({},this.props);return delete o.name,o.parentBindings&&delete o.parentBindings,g2.default.createElement("div",h2({},o,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(g2.default.Component);lP.propTypes={name:v2.default.string,id:v2.default.string};py.default=(0,IY.default)(lP);var Km=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b2=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function y2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x2(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function w2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Fu=k,li=Cc,Qm=us,Je=Yi,po=Dp,k2={to:Je.string.isRequired,containerId:Je.string,container:Je.object,activeClass:Je.string,spy:Je.bool,smooth:Je.oneOfType([Je.bool,Je.string]),offset:Je.number,delay:Je.number,isDynamic:Je.bool,onClick:Je.func,duration:Je.oneOfType([Je.number,Je.func]),absolute:Je.bool,onSetActive:Je.func,onSetInactive:Je.func,ignoreCancelEvents:Je.bool,hashSpy:Je.bool,spyThrottle:Je.number},BY={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Qm,o=function(a){w2(s,a);function s(l){y2(this,s);var c=x2(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return i.call(c),c.state={active:!1},c}return b2(s,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,u=this.props.container;return c?document.getElementById(c):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();li.isMounted(c)||li.mount(c,this.props.spyThrottle),this.props.hashSpy&&(po.isMounted()||po.mount(r),po.mapContainer(this.props.to,c)),this.props.spy&&li.addStateHandler(this.stateHandler),li.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){li.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var u=Km({},this.props);for(var d in k2)u.hasOwnProperty(d)&&delete u[d];return u.className=c,u.onClick=this.handleClick,Fu.createElement(t,u)}}]),s}(Fu.Component),i=function(){var s=this;this.scrollTo=function(l,c){r.scrollTo(l,Km({},s.state,c))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){r.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var c=s.getScrollSpyContainer();if(!(po.isMounted()&&!po.isInitialized())){var u=s.props.to,d=null,p=0,h=0,g=0;if(c.getBoundingClientRect){var v=c.getBoundingClientRect();g=v.top}if(!d||s.props.isDynamic){if(d=r.get(u),!d)return;var x=d.getBoundingClientRect();p=x.top-g+l,h=p+x.height}var y=l-s.props.offset,b=y>=Math.floor(p)&&y<Math.floor(h),w=y<Math.floor(p)||y>=Math.floor(h),S=r.getActiveLink();if(w)return u===S&&r.setActiveLink(void 0),s.props.hashSpy&&po.getHash()===u&&po.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),li.updateStates();if(b&&S!==u)return r.setActiveLink(u),s.props.hashSpy&&po.changeHash(u),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(u)),li.updateStates()}}};return o.propTypes=k2,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){w2(o,r);function o(i){y2(this,o);var a=x2(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a.childBindings={domNode:null},a}return b2(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Qm.unregister(this.props.name)}},{key:"registerElems",value:function(a){Qm.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return Fu.createElement(t,Km({},this.props,{parentBindings:this.childBindings}))}}]),o}(Fu.Component);return n.propTypes={name:Je.string,id:Je.string},n}},HY=BY;Object.defineProperty(rt,"__esModule",{value:!0});rt.Helpers=rt.ScrollElement=rt.ScrollLink=rt.animateScroll=rt.scrollSpy=rt.Events=rt.scroller=rt.Element=rt.Button=rt.Link=void 0;var UY=sy,cP=Sr(UY),WY=fy,uP=Sr(WY),VY=py,dP=Sr(VY),YY=us,fP=Sr(YY),GY=Tc,pP=Sr(GY),XY=Cc,mP=Sr(XY),qY=Mp,hP=Sr(qY),KY=_c,gP=Sr(KY),QY=$p,vP=Sr(QY),JY=HY,bP=Sr(JY);function Sr(e){return e&&e.__esModule?e:{default:e}}rt.Link=cP.default;rt.Button=uP.default;rt.Element=dP.default;rt.scroller=fP.default;rt.Events=pP.default;rt.scrollSpy=mP.default;rt.animateScroll=hP.default;rt.ScrollLink=gP.default;rt.ScrollElement=vP.default;rt.Helpers=bP.default;rt.default={Link:cP.default,Button:uP.default,Element:dP.default,scroller:fP.default,Events:pP.default,scrollSpy:mP.default,animateScroll:hP.default,ScrollLink:gP.default,ScrollElement:vP.default,Helpers:bP.default};var S2=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),ZY=new Uint8Array(16);function eG(){if(!S2)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return S2(ZY)}var yP=[];for(var zu=0;zu<256;++zu)yP[zu]=(zu+256).toString(16).substr(1);function tG(e,t){var n=0,r=yP;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}function nG(e,t,n){var r=t&&n||0;typeof e=="string"&&(t=e==="binary"?new Array(16):null,e=null),e=e||{};var o=e.random||(e.rng||eG)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t)for(var i=0;i<16;++i)t[r+i]=o[i];return t||tG(o)}function _2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ov(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_2(Object(n),!0).forEach(function(r){vl(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C2(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oG(e,t,n){return t&&C2(e.prototype,t),n&&C2(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function vl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pf(){return Pf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pf.apply(this,arguments)}function iG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ev(e,t)}function Nf(e){return Nf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Nf(e)}function Ev(e,t){return Ev=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Ev(e,t)}function aG(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lG(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sG(e)}function cG(e){var t=aG();return function(){var r=Nf(e),o;if(t){var i=Nf(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return lG(this,o)}}function uG(e,t){if(e){if(typeof e=="string")return O2(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O2(e,t)}}function O2(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dG(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=uG(e))||t){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,s;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return i=l.done,l},e:function(l){a=!0,s=l},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}}}var E2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bu=function(e){return e&&e.Math==Math&&e},oo=Bu(typeof globalThis=="object"&&globalThis)||Bu(typeof window=="object"&&window)||Bu(typeof self=="object"&&self)||Bu(typeof E2=="object"&&E2)||function(){return this}()||Function("return this")(),hy={},io=function(e){try{return!!e()}catch{return!0}},fG=io,ni=!fG(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),pG=io,gy=!pG(function(){var e=(function(){}).bind();return typeof e!="function"||e.hasOwnProperty("prototype")}),mG=gy,Hu=Function.prototype.call,vy=mG?Hu.bind(Hu):function(){return Hu.apply(Hu,arguments)},xP={},wP={}.propertyIsEnumerable,kP=Object.getOwnPropertyDescriptor,hG=kP&&!wP.call({1:2},1);xP.f=hG?function(t){var n=kP(this,t);return!!n&&n.enumerable}:wP;var SP=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},_P=gy,CP=Function.prototype,Tv=CP.call,gG=_P&&CP.bind.bind(Tv,Tv),OP=function(e){return _P?gG(e):function(){return Tv.apply(e,arguments)}},EP=OP,vG=EP({}.toString),bG=EP("".slice),zp=function(e){return bG(vG(e),8,-1)},yG=zp,xG=OP,_r=function(e){if(yG(e)==="Function")return xG(e)},wG=_r,kG=io,SG=zp,Jm=Object,_G=wG("".split),TP=kG(function(){return!Jm("z").propertyIsEnumerable(0)})?function(e){return SG(e)=="String"?_G(e,""):Jm(e)}:Jm,jP=function(e){return e==null},CG=jP,OG=TypeError,PP=function(e){if(CG(e))throw OG("Can't call method on "+e);return e},EG=TP,TG=PP,Bp=function(e){return EG(TG(e))},jv=typeof document=="object"&&document.all,jG=typeof jv>"u"&&jv!==void 0,NP={all:jv,IS_HTMLDDA:jG},RP=NP,PG=RP.all,Ln=RP.IS_HTMLDDA?function(e){return typeof e=="function"||e===PG}:function(e){return typeof e=="function"},T2=Ln,AP=NP,NG=AP.all,ds=AP.IS_HTMLDDA?function(e){return typeof e=="object"?e!==null:T2(e)||e===NG}:function(e){return typeof e=="object"?e!==null:T2(e)},Zm=oo,RG=Ln,AG=function(e){return RG(e)?e:void 0},Nc=function(e,t){return arguments.length<2?AG(Zm[e]):Zm[e]&&Zm[e][t]},MG=_r,LG=MG({}.isPrototypeOf),IG=Nc,DG=IG("navigator","userAgent")||"",MP=oo,eh=DG,j2=MP.process,P2=MP.Deno,N2=j2&&j2.versions||P2&&P2.version,R2=N2&&N2.v8,Un,Rf;R2&&(Un=R2.split("."),Rf=Un[0]>0&&Un[0]<4?1:+(Un[0]+Un[1]));!Rf&&eh&&(Un=eh.match(/Edge\/(\d+)/),(!Un||Un[1]>=74)&&(Un=eh.match(/Chrome\/(\d+)/),Un&&(Rf=+Un[1])));var $G=Rf,A2=$G,FG=io,LP=!!Object.getOwnPropertySymbols&&!FG(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&A2&&A2<41}),zG=LP,IP=zG&&!Symbol.sham&&typeof Symbol.iterator=="symbol",BG=Nc,HG=Ln,UG=LG,WG=IP,VG=Object,DP=WG?function(e){return typeof e=="symbol"}:function(e){var t=BG("Symbol");return HG(t)&&UG(t.prototype,VG(e))},YG=String,GG=function(e){try{return YG(e)}catch{return"Object"}},XG=Ln,qG=GG,KG=TypeError,$P=function(e){if(XG(e))return e;throw KG(qG(e)+" is not a function")},QG=$P,JG=jP,ZG=function(e,t){var n=e[t];return JG(n)?void 0:QG(n)},th=vy,nh=Ln,rh=ds,eX=TypeError,tX=function(e,t){var n,r;if(t==="string"&&nh(n=e.toString)&&!rh(r=th(n,e))||nh(n=e.valueOf)&&!rh(r=th(n,e))||t!=="string"&&nh(n=e.toString)&&!rh(r=th(n,e)))return r;throw eX("Can't convert object to primitive value")},by={exports:{}},M2=oo,nX=Object.defineProperty,yy=function(e,t){try{nX(M2,e,{value:t,configurable:!0,writable:!0})}catch{M2[e]=t}return t},rX=oo,oX=yy,L2="__core-js_shared__",iX=rX[L2]||oX(L2,{}),xy=iX,I2=xy;(by.exports=function(e,t){return I2[e]||(I2[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.25.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"});var aX=PP,sX=Object,FP=function(e){return sX(aX(e))},lX=_r,cX=FP,uX=lX({}.hasOwnProperty),Ki=Object.hasOwn||function(t,n){return uX(cX(t),n)},dX=_r,fX=0,pX=Math.random(),mX=dX(1 .toString),zP=function(e){return"Symbol("+(e===void 0?"":e)+")_"+mX(++fX+pX,36)},hX=oo,gX=by.exports,D2=Ki,vX=zP,$2=LP,BP=IP,oa=gX("wks"),Ti=hX.Symbol,F2=Ti&&Ti.for,bX=BP?Ti:Ti&&Ti.withoutSetter||vX,Rc=function(e){if(!D2(oa,e)||!($2||typeof oa[e]=="string")){var t="Symbol."+e;$2&&D2(Ti,e)?oa[e]=Ti[e]:BP&&F2?oa[e]=F2(t):oa[e]=bX(t)}return oa[e]},yX=vy,z2=ds,B2=DP,xX=ZG,wX=tX,kX=Rc,SX=TypeError,_X=kX("toPrimitive"),CX=function(e,t){if(!z2(e)||B2(e))return e;var n=xX(e,_X),r;if(n){if(t===void 0&&(t="default"),r=yX(n,e,t),!z2(r)||B2(r))return r;throw SX("Can't convert object to primitive value")}return t===void 0&&(t="number"),wX(e,t)},OX=CX,EX=DP,HP=function(e){var t=OX(e,"string");return EX(t)?t:t+""},TX=oo,H2=ds,Pv=TX.document,jX=H2(Pv)&&H2(Pv.createElement),UP=function(e){return jX?Pv.createElement(e):{}},PX=ni,NX=io,RX=UP,WP=!PX&&!NX(function(){return Object.defineProperty(RX("div"),"a",{get:function(){return 7}}).a!=7}),AX=ni,MX=vy,LX=xP,IX=SP,DX=Bp,$X=HP,FX=Ki,zX=WP,U2=Object.getOwnPropertyDescriptor;hy.f=AX?U2:function(t,n){if(t=DX(t),n=$X(n),zX)try{return U2(t,n)}catch{}if(FX(t,n))return IX(!MX(LX.f,t,n),t[n])};var fs={},BX=ni,HX=io,VP=BX&&HX(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),UX=ds,WX=String,VX=TypeError,Hp=function(e){if(UX(e))return e;throw VX(WX(e)+" is not an object")},YX=ni,GX=WP,XX=VP,Uu=Hp,W2=HP,qX=TypeError,oh=Object.defineProperty,KX=Object.getOwnPropertyDescriptor,ih="enumerable",ah="configurable",sh="writable";fs.f=YX?XX?function(t,n,r){if(Uu(t),n=W2(n),Uu(r),typeof t=="function"&&n==="prototype"&&"value"in r&&sh in r&&!r[sh]){var o=KX(t,n);o&&o[sh]&&(t[n]=r.value,r={configurable:ah in r?r[ah]:o[ah],enumerable:ih in r?r[ih]:o[ih],writable:!1})}return oh(t,n,r)}:oh:function(t,n,r){if(Uu(t),n=W2(n),Uu(r),GX)try{return oh(t,n,r)}catch{}if("get"in r||"set"in r)throw qX("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var QX=ni,JX=fs,ZX=SP,YP=QX?function(e,t,n){return JX.f(e,t,ZX(1,n))}:function(e,t,n){return e[t]=n,e},GP={exports:{}},Nv=ni,eq=Ki,XP=Function.prototype,tq=Nv&&Object.getOwnPropertyDescriptor,wy=eq(XP,"name"),nq=wy&&(function(){}).name==="something",rq=wy&&(!Nv||Nv&&tq(XP,"name").configurable),oq={EXISTS:wy,PROPER:nq,CONFIGURABLE:rq},iq=_r,aq=Ln,Rv=xy,sq=iq(Function.toString);aq(Rv.inspectSource)||(Rv.inspectSource=function(e){return sq(e)});var qP=Rv.inspectSource,lq=oo,cq=Ln,V2=lq.WeakMap,uq=cq(V2)&&/native code/.test(String(V2)),dq=by.exports,fq=zP,Y2=dq("keys"),KP=function(e){return Y2[e]||(Y2[e]=fq(e))},ky={},pq=uq,QP=oo,mq=ds,hq=YP,lh=Ki,ch=xy,gq=KP,vq=ky,G2="Object already initialized",Av=QP.TypeError,bq=QP.WeakMap,Af,sc,Mf,yq=function(e){return Mf(e)?sc(e):Af(e,{})},xq=function(e){return function(t){var n;if(!mq(t)||(n=sc(t)).type!==e)throw Av("Incompatible receiver, "+e+" required");return n}};if(pq||ch.state){var or=ch.state||(ch.state=new bq);or.get=or.get,or.has=or.has,or.set=or.set,Af=function(e,t){if(or.has(e))throw Av(G2);return t.facade=e,or.set(e,t),t},sc=function(e){return or.get(e)||{}},Mf=function(e){return or.has(e)}}else{var ia=gq("state");vq[ia]=!0,Af=function(e,t){if(lh(e,ia))throw Av(G2);return t.facade=e,hq(e,ia,t),t},sc=function(e){return lh(e,ia)?e[ia]:{}},Mf=function(e){return lh(e,ia)}}var wq={set:Af,get:sc,has:Mf,enforce:yq,getterFor:xq},kq=io,Sq=Ln,Wu=Ki,Mv=ni,_q=oq.CONFIGURABLE,Cq=qP,JP=wq,Oq=JP.enforce,Eq=JP.get,kd=Object.defineProperty,Tq=Mv&&!kq(function(){return kd(function(){},"length",{value:8}).length!==8}),jq=String(String).split("String"),Pq=GP.exports=function(e,t,n){String(t).slice(0,7)==="Symbol("&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!Wu(e,"name")||_q&&e.name!==t)&&(Mv?kd(e,"name",{value:t,configurable:!0}):e.name=t),Tq&&n&&Wu(n,"arity")&&e.length!==n.arity&&kd(e,"length",{value:n.arity});try{n&&Wu(n,"constructor")&&n.constructor?Mv&&kd(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch{}var r=Oq(e);return Wu(r,"source")||(r.source=jq.join(typeof t=="string"?t:"")),e};Function.prototype.toString=Pq(function(){return Sq(this)&&Eq(this).source||Cq(this)},"toString");var Nq=Ln,Rq=fs,Aq=GP.exports,Mq=yy,Lq=function(e,t,n,r){r||(r={});var o=r.enumerable,i=r.name!==void 0?r.name:t;if(Nq(n)&&Aq(n,i,r),r.global)o?e[t]=n:Mq(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch{}o?e[t]=n:Rq.f(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e},ZP={},Iq=Math.ceil,Dq=Math.floor,$q=Math.trunc||function(t){var n=+t;return(n>0?Dq:Iq)(n)},Fq=$q,eN=function(e){var t=+e;return t!==t||t===0?0:Fq(t)},zq=eN,Bq=Math.max,Hq=Math.min,Uq=function(e,t){var n=zq(e);return n<0?Bq(n+t,0):Hq(n,t)},Wq=eN,Vq=Math.min,Yq=function(e){return e>0?Vq(Wq(e),9007199254740991):0},Gq=Yq,tN=function(e){return Gq(e.length)},Xq=Bp,qq=Uq,Kq=tN,X2=function(e){return function(t,n,r){var o=Xq(t),i=Kq(o),a=qq(r,i),s;if(e&&n!=n){for(;i>a;)if(s=o[a++],s!=s)return!0}else for(;i>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},Qq={includes:X2(!0),indexOf:X2(!1)},Jq=_r,uh=Ki,Zq=Bp,eK=Qq.indexOf,tK=ky,q2=Jq([].push),nN=function(e,t){var n=Zq(e),r=0,o=[],i;for(i in n)!uh(tK,i)&&uh(n,i)&&q2(o,i);for(;t.length>r;)uh(n,i=t[r++])&&(~eK(o,i)||q2(o,i));return o},Sy=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],nK=nN,rK=Sy,oK=rK.concat("length","prototype");ZP.f=Object.getOwnPropertyNames||function(t){return nK(t,oK)};var rN={};rN.f=Object.getOwnPropertySymbols;var iK=Nc,aK=_r,sK=ZP,lK=rN,cK=Hp,uK=aK([].concat),dK=iK("Reflect","ownKeys")||function(t){var n=sK.f(cK(t)),r=lK.f;return r?uK(n,r(t)):n},K2=Ki,fK=dK,pK=hy,mK=fs,hK=function(e,t,n){for(var r=fK(t),o=mK.f,i=pK.f,a=0;a<r.length;a++){var s=r[a];!K2(e,s)&&!(n&&K2(n,s))&&o(e,s,i(t,s))}},gK=io,vK=Ln,bK=/#|\.prototype\./,Ac=function(e,t){var n=xK[yK(e)];return n==kK?!0:n==wK?!1:vK(t)?gK(t):!!t},yK=Ac.normalize=function(e){return String(e).replace(bK,".").toLowerCase()},xK=Ac.data={},wK=Ac.NATIVE="N",kK=Ac.POLYFILL="P",SK=Ac,dh=oo,_K=hy.f,CK=YP,OK=Lq,EK=yy,TK=hK,jK=SK,PK=function(e,t){var n=e.target,r=e.global,o=e.stat,i,a,s,l,c,u;if(r?a=dh:o?a=dh[n]||EK(n,{}):a=(dh[n]||{}).prototype,a)for(s in t){if(c=t[s],e.dontCallGetSet?(u=_K(a,s),l=u&&u.value):l=a[s],i=jK(r?s:n+(o?".":"#")+s,e.forced),!i&&l!==void 0){if(typeof c==typeof l)continue;TK(c,l)}(e.sham||l&&l.sham)&&CK(c,"sham",!0),OK(a,s,c,e)}},Q2=_r,NK=$P,RK=gy,AK=Q2(Q2.bind),MK=function(e,t){return NK(e),t===void 0?e:RK?AK(e,t):function(){return e.apply(t,arguments)}},LK=zp,IK=Array.isArray||function(t){return LK(t)=="Array"},DK=Rc,$K=DK("toStringTag"),oN={};oN[$K]="z";var FK=String(oN)==="[object z]",zK=FK,BK=Ln,Sd=zp,HK=Rc,UK=HK("toStringTag"),WK=Object,VK=Sd(function(){return arguments}())=="Arguments",YK=function(e,t){try{return e[t]}catch{}},GK=zK?Sd:function(e){var t,n,r;return e===void 0?"Undefined":e===null?"Null":typeof(n=YK(t=WK(e),UK))=="string"?n:VK?Sd(t):(r=Sd(t))=="Object"&&BK(t.callee)?"Arguments":r},XK=_r,qK=io,iN=Ln,KK=GK,QK=Nc,JK=qP,aN=function(){},ZK=[],sN=QK("Reflect","construct"),_y=/^\s*(?:class|function)\b/,eQ=XK(_y.exec),tQ=!_y.exec(aN),Ns=function(t){if(!iN(t))return!1;try{return sN(aN,ZK,t),!0}catch{return!1}},lN=function(t){if(!iN(t))return!1;switch(KK(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return tQ||!!eQ(_y,JK(t))}catch{return!0}};lN.sham=!0;var nQ=!sN||qK(function(){var e;return Ns(Ns.call)||!Ns(Object)||!Ns(function(){e=!0})||e})?lN:Ns,J2=IK,rQ=nQ,oQ=ds,iQ=Rc,aQ=iQ("species"),Z2=Array,sQ=function(e){var t;return J2(e)&&(t=e.constructor,rQ(t)&&(t===Z2||J2(t.prototype))?t=void 0:oQ(t)&&(t=t[aQ],t===null&&(t=void 0))),t===void 0?Z2:t},lQ=sQ,cQ=function(e,t){return new(lQ(e))(t===0?0:t)},uQ=MK,dQ=_r,fQ=TP,pQ=FP,mQ=tN,hQ=cQ,eS=dQ([].push),mo=function(e){var t=e==1,n=e==2,r=e==3,o=e==4,i=e==6,a=e==7,s=e==5||i;return function(l,c,u,d){for(var p=pQ(l),h=fQ(p),g=uQ(c,u),v=mQ(h),x=0,y=d||hQ,b=t?y(l,v):n||a?y(l,0):void 0,w,S;v>x;x++)if((s||x in h)&&(w=h[x],S=g(w,x,p),e))if(t)b[x]=S;else if(S)switch(e){case 3:return!0;case 5:return w;case 6:return x;case 2:eS(b,w)}else switch(e){case 4:return!1;case 7:eS(b,w)}return i?-1:r||o?o:b}},gQ={forEach:mo(0),map:mo(1),filter:mo(2),some:mo(3),every:mo(4),find:mo(5),findIndex:mo(6),filterReject:mo(7)},cN={},vQ=nN,bQ=Sy,yQ=Object.keys||function(t){return vQ(t,bQ)},xQ=ni,wQ=VP,kQ=fs,SQ=Hp,_Q=Bp,CQ=yQ;cN.f=xQ&&!wQ?Object.defineProperties:function(t,n){SQ(t);for(var r=_Q(n),o=CQ(n),i=o.length,a=0,s;i>a;)kQ.f(t,s=o[a++],r[s]);return t};var OQ=Nc,EQ=OQ("document","documentElement"),TQ=Hp,jQ=cN,tS=Sy,PQ=ky,NQ=EQ,RQ=UP,AQ=KP,nS=">",rS="<",Lv="prototype",Iv="script",uN=AQ("IE_PROTO"),fh=function(){},dN=function(e){return rS+Iv+nS+e+rS+"/"+Iv+nS},oS=function(e){e.write(dN("")),e.close();var t=e.parentWindow.Object;return e=null,t},MQ=function(){var e=RQ("iframe"),t="java"+Iv+":",n;return e.style.display="none",NQ.appendChild(e),e.src=String(t),n=e.contentWindow.document,n.open(),n.write(dN("document.F=Object")),n.close(),n.F},Vu,_d=function(){try{Vu=new ActiveXObject("htmlfile")}catch{}_d=typeof document<"u"?document.domain&&Vu?oS(Vu):MQ():oS(Vu);for(var e=tS.length;e--;)delete _d[Lv][tS[e]];return _d()};PQ[uN]=!0;var LQ=Object.create||function(t,n){var r;return t!==null?(fh[Lv]=TQ(t),r=new fh,fh[Lv]=null,r[uN]=t):r=_d(),n===void 0?r:jQ.f(r,n)},IQ=Rc,DQ=LQ,$Q=fs.f,Dv=IQ("unscopables"),$v=Array.prototype;$v[Dv]==null&&$Q($v,Dv,{configurable:!0,value:DQ(null)});var FQ=function(e){$v[Dv][e]=!0},zQ=PK,BQ=gQ.find,HQ=FQ,Fv="find",fN=!0;Fv in[]&&Array(1)[Fv](function(){fN=!1});zQ({target:"Array",proto:!0,forced:fN},{find:function(t){return BQ(this,t,arguments.length>1?arguments[1]:void 0)}});HQ(Fv);var xn={GLOBAL:{HIDE:"__react_tooltip_hide_event",REBUILD:"__react_tooltip_rebuild_event",SHOW:"__react_tooltip_show_event"}},ph=function(t,n){var r;typeof window.CustomEvent=="function"?r=new window.CustomEvent(t,{detail:n}):(r=document.createEvent("Event"),r.initEvent(t,!1,!0,n)),window.dispatchEvent(r)};function UQ(e){e.hide=function(t){ph(xn.GLOBAL.HIDE,{target:t})},e.rebuild=function(){ph(xn.GLOBAL.REBUILD)},e.show=function(t){ph(xn.GLOBAL.SHOW,{target:t})},e.prototype.globalRebuild=function(){this.mount&&(this.unbindListener(),this.bindListener())},e.prototype.globalShow=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.showTooltip({currentTarget:n&&t.detail.target},!0)}},e.prototype.globalHide=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.hideTooltip({currentTarget:n&&t.detail.target},n)}}}function WQ(e){e.prototype.bindWindowEvents=function(t){window.removeEventListener(xn.GLOBAL.HIDE,this.globalHide),window.addEventListener(xn.GLOBAL.HIDE,this.globalHide,!1),window.removeEventListener(xn.GLOBAL.REBUILD,this.globalRebuild),window.addEventListener(xn.GLOBAL.REBUILD,this.globalRebuild,!1),window.removeEventListener(xn.GLOBAL.SHOW,this.globalShow),window.addEventListener(xn.GLOBAL.SHOW,this.globalShow,!1),t&&(window.removeEventListener("resize",this.onWindowResize),window.addEventListener("resize",this.onWindowResize,!1))},e.prototype.unbindWindowEvents=function(){window.removeEventListener(xn.GLOBAL.HIDE,this.globalHide),window.removeEventListener(xn.GLOBAL.REBUILD,this.globalRebuild),window.removeEventListener(xn.GLOBAL.SHOW,this.globalShow),window.removeEventListener("resize",this.onWindowResize)},e.prototype.onWindowResize=function(){this.mount&&this.hideTooltip()}}var pN=function(t,n){var r=this.state.show,o=this.props.id,i=this.isCapture(n.currentTarget),a=n.currentTarget.getAttribute("currentItem");i||n.stopPropagation(),r&&a==="true"?t||this.hideTooltip(n):(n.currentTarget.setAttribute("currentItem","true"),VQ(n.currentTarget,this.getTargetArray(o)),this.showTooltip(n))},VQ=function(t,n){for(var r=0;r<n.length;r++)t!==n[r]?n[r].setAttribute("currentItem","false"):n[r].setAttribute("currentItem","true")},mh={id:"9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",set:function(t,n,r){if(this.id in t){var o=t[this.id];o[n]=r}else Object.defineProperty(t,this.id,{configurable:!0,value:vl({},n,r)})},get:function(t,n){var r=t[this.id];if(r!==void 0)return r[n]}};function YQ(e){e.prototype.isCustomEvent=function(t){var n=this.state.event;return n||!!t.getAttribute("data-event")},e.prototype.customBindListener=function(t){var n=this,r=this.state,o=r.event,i=r.eventOff,a=t.getAttribute("data-event")||o,s=t.getAttribute("data-event-off")||i;a.split(" ").forEach(function(l){t.removeEventListener(l,mh.get(t,l));var c=pN.bind(n,s);mh.set(t,l,c),t.addEventListener(l,c,!1)}),s&&s.split(" ").forEach(function(l){t.removeEventListener(l,n.hideTooltip),t.addEventListener(l,n.hideTooltip,!1)})},e.prototype.customUnbindListener=function(t){var n=this.state,r=n.event,o=n.eventOff,i=r||t.getAttribute("data-event"),a=o||t.getAttribute("data-event-off");t.removeEventListener(i,mh.get(t,r)),a&&t.removeEventListener(a,this.hideTooltip)}}function GQ(e){e.prototype.isCapture=function(t){return t&&t.getAttribute("data-iscapture")==="true"||this.props.isCapture||!1}}function XQ(e){e.prototype.getEffect=function(t){var n=t.getAttribute("data-effect");return n||this.props.effect||"float"}}var qQ=function(t){var n={};for(var r in t)typeof t[r]=="function"?n[r]=t[r].bind(t):n[r]=t[r];return n},Rs=function(t,n,r){for(var o=n.respectEffect,i=o===void 0?!1:o,a=n.customEvent,s=a===void 0?!1:a,l=this.props.id,c=null,u,d=r.target,p;c===null&&d!==null;)p=d,c=d.getAttribute("data-tip")||null,u=d.getAttribute("data-for")||null,d=d.parentElement;if(d=p||r.target,!(this.isCustomEvent(d)&&!s)){var h=l==null&&u==null||u===l;if(c!=null&&(!i||this.getEffect(d)==="float")&&h){var g=qQ(r);g.currentTarget=d,t(g)}}},iS=function(t,n){var r={};return t.forEach(function(o){var i=o.getAttribute(n);i&&i.split(" ").forEach(function(a){return r[a]=!0})}),r},aS=function(){return document.getElementsByTagName("body")[0]};function KQ(e){e.prototype.isBodyMode=function(){return!!this.props.bodyMode},e.prototype.bindBodyListener=function(t){var n=this,r=this.state,o=r.event,i=r.eventOff,a=r.possibleCustomEvents,s=r.possibleCustomEventsOff,l=aS(),c=iS(t,"data-event"),u=iS(t,"data-event-off");o!=null&&(c[o]=!0),i!=null&&(u[i]=!0),a.split(" ").forEach(function(v){return c[v]=!0}),s.split(" ").forEach(function(v){return u[v]=!0}),this.unbindBodyListener(l);var d=this.bodyModeListeners={};o==null&&(d.mouseover=Rs.bind(this,this.showTooltip,{}),d.mousemove=Rs.bind(this,this.updateTooltip,{respectEffect:!0}),d.mouseout=Rs.bind(this,this.hideTooltip,{}));for(var p in c)d[p]=Rs.bind(this,function(v){var x=v.currentTarget.getAttribute("data-event-off")||i;pN.call(n,x,v)},{customEvent:!0});for(var h in u)d[h]=Rs.bind(this,this.hideTooltip,{customEvent:!0});for(var g in d)l.addEventListener(g,d[g])},e.prototype.unbindBodyListener=function(t){t=t||aS();var n=this.bodyModeListeners;for(var r in n)t.removeEventListener(r,n[r])}}var QQ=function(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver};function JQ(e){e.prototype.bindRemovalTracker=function(){var t=this,n=QQ();if(n!=null){var r=new n(function(o){for(var i=0;i<o.length;i++)for(var a=o[i],s=0;s<a.removedNodes.length;s++){var l=a.removedNodes[s];if(l===t.state.currentTarget){t.hideTooltip();return}}});r.observe(window.document,{childList:!0,subtree:!0}),this.removalTracker=r}},e.prototype.unbindRemovalTracker=function(){this.removalTracker&&(this.removalTracker.disconnect(),this.removalTracker=null)}}function sS(e,t,n,r,o,i,a){var s=zv(n),l=s.width,c=s.height,u=zv(t),d=u.width,p=u.height,h=ZQ(e,t,i),g=h.mouseX,v=h.mouseY,x=eJ(i,d,p,l,c),y=tJ(a),b=y.extraOffsetX,w=y.extraOffsetY,S=window.innerWidth,C=window.innerHeight,_=nJ(n),O=_.parentTop,E=_.parentLeft,T=function(z){var j=x[z].l;return g+j+b},P=function(z){var j=x[z].r;return g+j+b},A=function(z){var j=x[z].t;return v+j+w},I=function(z){var j=x[z].b;return v+j+w},X=function(z){return T(z)<0},H=function(z){return P(z)>S},V=function(z){return A(z)<0},J=function(z){return I(z)>C},M=function(z){return X(z)||H(z)||V(z)||J(z)},N=function(z){return!M(z)},U={top:N("top"),bottom:N("bottom"),left:N("left"),right:N("right")};function Q(){var D=o.split(",").concat(r,["top","bottom","left","right"]),z=dG(D),j;try{for(z.s();!(j=z.n()).done;){var le=j.value;if(U[le])return le}}catch(G){z.e(G)}finally{z.f()}return r}var Z=Q(),$=!1,F;return Z&&Z!==r&&($=!0,F=Z),$?{isNewState:!0,newState:{place:F}}:{isNewState:!1,position:{left:parseInt(T(r)-E,10),top:parseInt(A(r)-O,10)}}}var zv=function(t){var n=t.getBoundingClientRect(),r=n.height,o=n.width;return{height:parseInt(r,10),width:parseInt(o,10)}},ZQ=function(t,n,r){var o=n.getBoundingClientRect(),i=o.top,a=o.left,s=zv(n),l=s.width,c=s.height;return r==="float"?{mouseX:t.clientX,mouseY:t.clientY}:{mouseX:a+l/2,mouseY:i+c/2}},eJ=function(t,n,r,o,i){var a,s,l,c,u=3,d=2,p=12;return t==="float"?(a={l:-(o/2),r:o/2,t:-(i+u+d),b:-u},l={l:-(o/2),r:o/2,t:u+p,b:i+u+d+p},c={l:-(o+u+d),r:-u,t:-(i/2),b:i/2},s={l:u,r:o+u+d,t:-(i/2),b:i/2}):t==="solid"&&(a={l:-(o/2),r:o/2,t:-(r/2+i+d),b:-(r/2)},l={l:-(o/2),r:o/2,t:r/2,b:r/2+i+d},c={l:-(o+n/2+d),r:-(n/2),t:-(i/2),b:i/2},s={l:n/2,r:o+n/2+d,t:-(i/2),b:i/2}),{top:a,bottom:l,left:c,right:s}},tJ=function(t){var n=0,r=0;Object.prototype.toString.apply(t)==="[object String]"&&(t=JSON.parse(t.toString().replace(/'/g,'"')));for(var o in t)o==="top"?r-=parseInt(t[o],10):o==="bottom"?r+=parseInt(t[o],10):o==="left"?n-=parseInt(t[o],10):o==="right"&&(n+=parseInt(t[o],10));return{extraOffsetX:n,extraOffsetY:r}},nJ=function(t){for(var n=t;n;){var r=window.getComputedStyle(n);if(r.getPropertyValue("transform")!=="none"||r.getPropertyValue("will-change")==="transform")break;n=n.parentElement}var o=n&&n.getBoundingClientRect().top||0,i=n&&n.getBoundingClientRect().left||0;return{parentTop:o,parentLeft:i}};function lS(e,t,n,r){if(t)return t;if(n!=null)return n;if(n===null)return null;var o=/<br\s*\/?>/;return!r||r==="false"||!o.test(e)?e:e.split(o).map(function(i,a){return Y.createElement("span",{key:a,className:"multi-line"},i)})}function cS(e){var t={};return Object.keys(e).filter(function(n){return/(^aria-\w+$|^role$)/.test(n)}).forEach(function(n){t[n]=e[n]}),t}function hh(e){var t=e.length;return e.hasOwnProperty?Array.prototype.slice.call(e):new Array(t).fill().map(function(n){return e[n]})}function rJ(){return"t"+nG()}var oJ=`.__react_component_tooltip {
  border-radius: 3px;
  display: inline-block;
  font-size: 13px;
  left: -999em;
  opacity: 0;
  position: fixed;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
  top: -999em;
  visibility: hidden;
  z-index: 999;
}
.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {
  pointer-events: auto;
}
.__react_component_tooltip::before, .__react_component_tooltip::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
}
.__react_component_tooltip.show {
  opacity: 0.9;
  margin-top: 0;
  margin-left: 0;
  visibility: visible;
}
.__react_component_tooltip.place-top::before {
  bottom: 0;
  left: 50%;
  margin-left: -11px;
}
.__react_component_tooltip.place-bottom::before {
  top: 0;
  left: 50%;
  margin-left: -11px;
}
.__react_component_tooltip.place-left::before {
  right: 0;
  top: 50%;
  margin-top: -9px;
}
.__react_component_tooltip.place-right::before {
  left: 0;
  top: 50%;
  margin-top: -9px;
}
.__react_component_tooltip .multi-line {
  display: block;
  padding: 2px 0;
  text-align: center;
}`,uS={dark:{text:"#fff",background:"#222",border:"transparent",arrow:"#222"},success:{text:"#fff",background:"#8DC572",border:"transparent",arrow:"#8DC572"},warning:{text:"#fff",background:"#F0AD4E",border:"transparent",arrow:"#F0AD4E"},error:{text:"#fff",background:"#BE6464",border:"transparent",arrow:"#BE6464"},info:{text:"#fff",background:"#337AB7",border:"transparent",arrow:"#337AB7"},light:{text:"#222",background:"#fff",border:"transparent",arrow:"#fff"}};function iJ(e){return uS[e]?Ov({},uS[e]):void 0}var aJ="8px 21px",sJ={tooltip:3,arrow:0};function lJ(e,t,n,r,o,i){return cJ(e,uJ(t,n,r),o,i)}function cJ(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:aJ,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:sJ,o=t.text,i=t.background,a=t.border,s=t.arrow,l=r.arrow,c=r.tooltip;return`
  	.`.concat(e,` {
	    color: `).concat(o,`;
	    background: `).concat(i,`;
	    border: 1px solid `).concat(a,`;
	    border-radius: `).concat(c,`px;
	    padding: `).concat(n,`;
  	}

  	.`).concat(e,`.place-top {
        margin-top: -10px;
    }
    .`).concat(e,`.place-top::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: 2;
        width: 20px;
        height: 12px;
    }
    .`).concat(e,`.place-top::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        bottom: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(135deg);
    }

    .`).concat(e,`.place-bottom {
        margin-top: 10px;
    }
    .`).concat(e,`.place-bottom::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 18px;
        height: 10px;
    }
    .`).concat(e,`.place-bottom::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        top: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(45deg);
    }

    .`).concat(e,`.place-left {
        margin-left: -10px;
    }
    .`).concat(e,`.place-left::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .`).concat(e,`.place-left::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        right: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(45deg);
    }

    .`).concat(e,`.place-right {
        margin-left: 10px;
    }
    .`).concat(e,`.place-right::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .`).concat(e,`.place-right::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        left: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(-135deg);
    }
  `)}function uJ(e,t,n){var r=e.text,o=e.background,i=e.border,a=e.arrow?e.arrow:e.background,s=iJ(t);return r&&(s.text=r),o&&(s.background=o),n&&(i?s.border=i:s.border=t==="light"?"black":"white"),a&&(s.arrow=a),s}var Ht,As;UQ(Ht=WQ(Ht=YQ(Ht=GQ(Ht=XQ(Ht=KQ(Ht=JQ(Ht=(As=function(e){iG(n,e);var t=cG(n);function n(r){var o;return rG(this,n),o=t.call(this,r),o.state={uuid:r.uuid||rJ(),place:r.place||"top",desiredPlace:r.place||"top",type:r.type||"dark",effect:r.effect||"float",show:!1,border:!1,borderClass:"border",customColors:{},customRadius:{},offset:{},padding:r.padding,extraClass:"",html:!1,delayHide:0,delayShow:0,event:r.event||null,eventOff:r.eventOff||null,currentEvent:null,currentTarget:null,ariaProps:cS(r),isEmptyTip:!1,disable:!1,possibleCustomEvents:r.possibleCustomEvents||"",possibleCustomEventsOff:r.possibleCustomEventsOff||"",originTooltip:null,isMultiline:!1},o.bind(["showTooltip","updateTooltip","hideTooltip","hideTooltipOnScroll","getTooltipContent","globalRebuild","globalShow","globalHide","onWindowResize","mouseOnToolTip"]),o.mount=!0,o.delayShowLoop=null,o.delayHideLoop=null,o.delayReshow=null,o.intervalUpdateContent=null,o}return oG(n,[{key:"bind",value:function(o){var i=this;o.forEach(function(a){i[a]=i[a].bind(i)})}},{key:"componentDidMount",value:function(){var o=this.props;o.insecure;var i=o.resizeHide,a=o.disableInternalStyle;this.mount=!0,this.bindListener(),this.bindWindowEvents(i),a||this.injectStyles()}},{key:"componentWillUnmount",value:function(){this.mount=!1,this.clearTimer(),this.unbindListener(),this.removeScrollListener(this.state.currentTarget),this.unbindWindowEvents()}},{key:"injectStyles",value:function(){var o=this.tooltipRef;if(o){for(var i=o.parentNode;i.parentNode;)i=i.parentNode;var a;switch(i.constructor.name){case"Document":case"HTMLDocument":case void 0:a=i.head;break;case"ShadowRoot":default:a=i;break}if(!a.querySelector("style[data-react-tooltip]")){var s=document.createElement("style");s.textContent=oJ,s.setAttribute("data-react-tooltip","true"),a.appendChild(s)}}}},{key:"mouseOnToolTip",value:function(){var o=this.state.show;return o&&this.tooltipRef?(this.tooltipRef.matches||(this.tooltipRef.msMatchesSelector?this.tooltipRef.matches=this.tooltipRef.msMatchesSelector:this.tooltipRef.matches=this.tooltipRef.mozMatchesSelector),this.tooltipRef.matches(":hover")):!1}},{key:"getTargetArray",value:function(o){var i=[],a;if(!o)a="[data-tip]:not([data-for])";else{var s=o.replace(/\\/g,"\\\\").replace(/"/g,'\\"');a='[data-tip][data-for="'.concat(s,'"]')}return hh(document.getElementsByTagName("*")).filter(function(l){return l.shadowRoot}).forEach(function(l){i=i.concat(hh(l.shadowRoot.querySelectorAll(a)))}),i.concat(hh(document.querySelectorAll(a)))}},{key:"bindListener",value:function(){var o=this,i=this.props,a=i.id,s=i.globalEventOff,l=i.isCapture,c=this.getTargetArray(a);c.forEach(function(u){u.getAttribute("currentItem")===null&&u.setAttribute("currentItem","false"),o.unbindBasicListener(u),o.isCustomEvent(u)&&o.customUnbindListener(u)}),this.isBodyMode()?this.bindBodyListener(c):c.forEach(function(u){var d=o.isCapture(u),p=o.getEffect(u);if(o.isCustomEvent(u)){o.customBindListener(u);return}u.addEventListener("mouseenter",o.showTooltip,d),u.addEventListener("focus",o.showTooltip,d),p==="float"&&u.addEventListener("mousemove",o.updateTooltip,d),u.addEventListener("mouseleave",o.hideTooltip,d),u.addEventListener("blur",o.hideTooltip,d)}),s&&(window.removeEventListener(s,this.hideTooltip),window.addEventListener(s,this.hideTooltip,l)),this.bindRemovalTracker()}},{key:"unbindListener",value:function(){var o=this,i=this.props,a=i.id,s=i.globalEventOff;if(this.isBodyMode())this.unbindBodyListener();else{var l=this.getTargetArray(a);l.forEach(function(c){o.unbindBasicListener(c),o.isCustomEvent(c)&&o.customUnbindListener(c)})}s&&window.removeEventListener(s,this.hideTooltip),this.unbindRemovalTracker()}},{key:"unbindBasicListener",value:function(o){var i=this.isCapture(o);o.removeEventListener("mouseenter",this.showTooltip,i),o.removeEventListener("mousemove",this.updateTooltip,i),o.removeEventListener("mouseleave",this.hideTooltip,i)}},{key:"getTooltipContent",value:function(){var o=this.props,i=o.getContent,a=o.children,s;return i&&(Array.isArray(i)?s=i[0]&&i[0](this.state.originTooltip):s=i(this.state.originTooltip)),lS(this.state.originTooltip,a,s,this.state.isMultiline)}},{key:"isEmptyTip",value:function(o){return typeof o=="string"&&o===""||o===null}},{key:"showTooltip",value:function(o,i){if(this.tooltipRef){if(i){var a=this.getTargetArray(this.props.id),s=a.some(function(E){return E===o.currentTarget});if(!s)return}var l=this.props,c=l.multiline,u=l.getContent,d=o.currentTarget.getAttribute("data-tip"),p=o.currentTarget.getAttribute("data-multiline")||c||!1,h=o instanceof window.FocusEvent||i,g=!0;o.currentTarget.getAttribute("data-scroll-hide")?g=o.currentTarget.getAttribute("data-scroll-hide")==="true":this.props.scrollHide!=null&&(g=this.props.scrollHide),o&&o.currentTarget&&o.currentTarget.setAttribute&&o.currentTarget.setAttribute("aria-describedby",this.props.id||this.state.uuid);var v=o.currentTarget.getAttribute("data-place")||this.props.place||"top",x=h&&"solid"||this.getEffect(o.currentTarget),y=o.currentTarget.getAttribute("data-offset")||this.props.offset||{},b=sS(o,o.currentTarget,this.tooltipRef,v.split(",")[0],v,x,y);b.position&&this.props.overridePosition&&(b.position=this.props.overridePosition(b.position,o,o.currentTarget,this.tooltipRef,v,v,x,y));var w=b.isNewState?b.newState.place:v.split(",")[0];this.clearTimer();var S=o.currentTarget,C=this.state.show?S.getAttribute("data-delay-update")||this.props.delayUpdate:0,_=this,O=function(){_.setState({originTooltip:d,isMultiline:p,desiredPlace:v,place:w,type:S.getAttribute("data-type")||_.props.type||"dark",customColors:{text:S.getAttribute("data-text-color")||_.props.textColor||null,background:S.getAttribute("data-background-color")||_.props.backgroundColor||null,border:S.getAttribute("data-border-color")||_.props.borderColor||null,arrow:S.getAttribute("data-arrow-color")||_.props.arrowColor||null},customRadius:{tooltip:S.getAttribute("data-tooltip-radius")||_.props.tooltipRadius||"3",arrow:S.getAttribute("data-arrow-radius")||_.props.arrowRadius||"0"},effect:x,offset:y,padding:S.getAttribute("data-padding")||_.props.padding,html:(S.getAttribute("data-html")?S.getAttribute("data-html")==="true":_.props.html)||!1,delayShow:S.getAttribute("data-delay-show")||_.props.delayShow||0,delayHide:S.getAttribute("data-delay-hide")||_.props.delayHide||0,delayUpdate:S.getAttribute("data-delay-update")||_.props.delayUpdate||0,border:(S.getAttribute("data-border")?S.getAttribute("data-border")==="true":_.props.border)||!1,borderClass:S.getAttribute("data-border-class")||_.props.borderClass||"border",extraClass:S.getAttribute("data-class")||_.props.class||_.props.className||"",disable:(S.getAttribute("data-tip-disable")?S.getAttribute("data-tip-disable")==="true":_.props.disable)||!1,currentTarget:S},function(){g&&_.addScrollListener(_.state.currentTarget),_.updateTooltip(o),u&&Array.isArray(u)&&(_.intervalUpdateContent=setInterval(function(){if(_.mount){var T=_.props.getContent,P=lS(d,"",T[0](),p),A=_.isEmptyTip(P);_.setState({isEmptyTip:A}),_.updatePosition()}},u[1]))})};C?this.delayReshow=setTimeout(O,C):O()}}},{key:"updateTooltip",value:function(o){var i=this,a=this.state,s=a.delayShow,l=a.disable,c=this.props,u=c.afterShow,d=c.disable,p=this.getTooltipContent(),h=o.currentTarget||o.target;if(!this.mouseOnToolTip()&&!(this.isEmptyTip(p)||l||d)){var g=this.state.show?0:parseInt(s,10),v=function(){if(Array.isArray(p)&&p.length>0||p){var y=!i.state.show;i.setState({currentEvent:o,currentTarget:h,show:!0},function(){i.updatePosition(function(){y&&u&&u(o)})})}};this.delayShowLoop&&clearTimeout(this.delayShowLoop),g?this.delayShowLoop=setTimeout(v,g):(this.delayShowLoop=null,v())}}},{key:"listenForTooltipExit",value:function(){var o=this.state.show;o&&this.tooltipRef&&this.tooltipRef.addEventListener("mouseleave",this.hideTooltip)}},{key:"removeListenerForTooltipExit",value:function(){var o=this.state.show;o&&this.tooltipRef&&this.tooltipRef.removeEventListener("mouseleave",this.hideTooltip)}},{key:"hideTooltip",value:function(o,i){var a=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isScroll:!1},l=this.state.disable,c=s.isScroll,u=c?0:this.state.delayHide,d=this.props,p=d.afterHide,h=d.disable,g=this.getTooltipContent();if(this.mount&&!(this.isEmptyTip(g)||l||h)){if(i){var v=this.getTargetArray(this.props.id),x=v.some(function(b){return b===o.currentTarget});if(!x||!this.state.show)return}o&&o.currentTarget&&o.currentTarget.removeAttribute&&o.currentTarget.removeAttribute("aria-describedby");var y=function(){var w=a.state.show;if(a.mouseOnToolTip()){a.listenForTooltipExit();return}a.removeListenerForTooltipExit(),a.setState({show:!1},function(){a.removeScrollListener(a.state.currentTarget),w&&p&&p(o)})};this.clearTimer(),u?this.delayHideLoop=setTimeout(y,parseInt(u,10)):y()}}},{key:"hideTooltipOnScroll",value:function(o,i){this.hideTooltip(o,i,{isScroll:!0})}},{key:"addScrollListener",value:function(o){var i=this.isCapture(o);window.addEventListener("scroll",this.hideTooltipOnScroll,i)}},{key:"removeScrollListener",value:function(o){var i=this.isCapture(o);window.removeEventListener("scroll",this.hideTooltipOnScroll,i)}},{key:"updatePosition",value:function(o){var i=this,a=this.state,s=a.currentEvent,l=a.currentTarget,c=a.place,u=a.desiredPlace,d=a.effect,p=a.offset,h=this.tooltipRef,g=sS(s,l,h,c,u,d,p);if(g.position&&this.props.overridePosition&&(g.position=this.props.overridePosition(g.position,s,l,h,c,u,d,p)),g.isNewState)return this.setState(g.newState,function(){i.updatePosition(o)});o&&typeof o=="function"&&o(),h.style.left=g.position.left+"px",h.style.top=g.position.top+"px"}},{key:"clearTimer",value:function(){this.delayShowLoop&&(clearTimeout(this.delayShowLoop),this.delayShowLoop=null),this.delayHideLoop&&(clearTimeout(this.delayHideLoop),this.delayHideLoop=null),this.delayReshow&&(clearTimeout(this.delayReshow),this.delayReshow=null),this.intervalUpdateContent&&(clearInterval(this.intervalUpdateContent),this.intervalUpdateContent=null)}},{key:"hasCustomColors",value:function(){var o=this;return!!(Object.keys(this.state.customColors).find(function(i){return i!=="border"&&o.state.customColors[i]})||this.state.border&&this.state.customColors.border)}},{key:"render",value:function(){var o=this,i=this.state,a=i.extraClass,s=i.html,l=i.ariaProps,c=i.disable,u=i.uuid,d=this.getTooltipContent(),p=this.isEmptyTip(d),h=this.props.disableInternalStyle?"":lJ(this.state.uuid,this.state.customColors,this.state.type,this.state.border,this.state.padding,this.state.customRadius),g="__react_component_tooltip"+" ".concat(this.state.uuid)+(this.state.show&&!c&&!p?" show":"")+(this.state.border?" "+this.state.borderClass:"")+" place-".concat(this.state.place)+" type-".concat(this.hasCustomColors()?"custom":this.state.type)+(this.props.delayUpdate?" allow_hover":"")+(this.props.clickable?" allow_click":""),v=this.props.wrapper;n.supportedWrappers.indexOf(v)<0&&(v=n.defaultProps.wrapper);var x=[g,a].filter(Boolean).join(" ");if(s){var y="".concat(d).concat(h?`
<style aria-hidden="true">`.concat(h,"</style>"):"");return Y.createElement(v,Pf({className:"".concat(x),id:this.props.id||u,ref:function(w){return o.tooltipRef=w}},l,{"data-id":"tooltip",dangerouslySetInnerHTML:{__html:y}}))}else return Y.createElement(v,Pf({className:"".concat(x),id:this.props.id||u},l,{ref:function(w){return o.tooltipRef=w},"data-id":"tooltip"}),h&&Y.createElement("style",{dangerouslySetInnerHTML:{__html:h},"aria-hidden":"true"}),d)}}],[{key:"propTypes",get:function(){return{uuid:f.string,children:f.any,place:f.string,type:f.string,effect:f.string,offset:f.object,padding:f.string,multiline:f.bool,border:f.bool,borderClass:f.string,textColor:f.string,backgroundColor:f.string,borderColor:f.string,arrowColor:f.string,arrowRadius:f.string,tooltipRadius:f.string,insecure:f.bool,class:f.string,className:f.string,id:f.string,html:f.bool,delayHide:f.number,delayUpdate:f.number,delayShow:f.number,event:f.string,eventOff:f.string,isCapture:f.bool,globalEventOff:f.string,getContent:f.any,afterShow:f.func,afterHide:f.func,overridePosition:f.func,disable:f.bool,scrollHide:f.bool,resizeHide:f.bool,wrapper:f.string,bodyMode:f.bool,possibleCustomEvents:f.string,possibleCustomEventsOff:f.string,clickable:f.bool,disableInternalStyle:f.bool}}},{key:"getDerivedStateFromProps",value:function(o,i){var a=i.ariaProps,s=cS(o),l=Object.keys(s).some(function(c){return s[c]!==a[c]});return l?Ov(Ov({},i),{},{ariaProps:s}):null}}]),n}(Y.Component),vl(As,"defaultProps",{insecure:!0,resizeHide:!0,wrapper:"div",clickable:!1}),vl(As,"supportedWrappers",["div","span"]),vl(As,"displayName","ReactTooltip"),As))||Ht)||Ht)||Ht)||Ht)||Ht)||Ht);function Bv(){return Bv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bv.apply(this,arguments)}function Qi(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function B(e,t){return t||(t=e.slice(0)),e.raw=t,e}var dS;te.div(dS||(dS=B([""])));var R={white:"#FFFFFF",info:"#17A2B8",light:"#EEEEEE",primary:"#3b82f6",primary50:"#eff6ff",primary100:"#dbeafe",primary200:"#bfdbfe",primary300:"#93c5fd",primary400:"#60a5fa",primary500:"#3b82f6",primary600:"#2563eb",primary700:"#1d4ed8",primary800:"#1e40af",primary900:"#1e3a8a",secondary:"#6366f1",secondary50:"#eef2ff",secondary100:"#e0e7ff",secondary200:"#c7d2fe",secondary300:"#a5b4fc",secondary400:"#818cf8",secondary500:"#6366f1",secondary600:"#4f46e5",secondary700:"#4338ca",secondary800:"#3730a3",secondary900:"#312e81",danger:"#ef4444",danger50:"#fef2f2",danger100:"#fee2e2",danger200:"#fecaca",danger300:"#fca5a5",danger400:"#f87171",danger500:"#ef4444",danger600:"#dc2626",danger700:"#b91c1c",danger800:"#991b1b",danger900:"#7f1d1d",success:"#22c55e",success50:"#f0fdf4",success100:"#dcfce7",success200:"#bbf7d0",success300:"#86efac",success400:"#4ade80",success500:"#22c55e",success600:"#16a34a",success700:"#15803d",success800:"#166534",success900:"#14532d",warning:"#eab308",warning50:"#fefce8",warning100:"#fef9c3",warning200:"#fef08a",warning300:"#fde047",warning400:"#facc15",warning500:"#eab308",warning600:"#ca8a04",warning700:"#a16207",warning800:"#854d0e",warning900:"#713f12",brown:"#bfa094",brown50:"#fdf8f6",brown100:"#f2e8e5",brown200:"#eaddd7",brown300:"#e0cec7",brown400:"#d2bab0",brown500:"#bfa094",brown600:"#a18072",brown700:"#977669",brown800:"#846358",brown900:"#43302b",dark:"#111827",dark50:"#f9fafb",dark100:"#f3f4f6",dark200:"#e5e7eb",dark300:"#d1d5db",dark400:"#9ca3af",dark500:"#6b7280",dark600:"#4b5563",dark700:"#374151",dark800:"#1f2937",dark900:"#111827",primaryHover:"#276EF1BD",secondaryHover:"#7356BFBD",successHover:"#05944FBD",warningHover:"#FFE975BD",dangerHover:"#E11900BD",whiteHover:"#FFFFFFD5",darkHover:"#000000BD",infoHover:"#17A2B8BD",lightHover:"#EEEEEEBD"},ao={colors:R,colorStyles:{primary:{color:R.white,borderColor:R.primary,backgroundColor:R.primary,"&:hover":{color:R.white,backgroundColor:R.primaryHover}},secondary:{color:R.white,borderColor:R.secondary,backgroundColor:R.secondary,"&:hover":{color:R.white,backgroundColor:R.secondaryHover}},light:{color:R.dark,borderColor:R.light,backgroundColor:R.light,"&:hover":{color:R.dark,backgroundColor:R.lightHover}},success:{color:R.white,borderColor:R.success,backgroundColor:R.success,"&:hover":{color:R.white,backgroundColor:R.successHover}},danger:{color:R.white,borderColor:R.danger,backgroundColor:R.danger,"&:hover":{color:R.white,backgroundColor:R.dangerHover}},warning:{color:R.dark,borderColor:R.warning,backgroundColor:R.warning,"&:hover":{color:R.dark,backgroundColor:R.warningHover}},dark:{color:R.white,borderColor:R.dark,backgroundColor:R.dark,"&:hover":{color:R.white,backgroundColor:R.darkHover}},white:{color:R.dark,borderColor:R.white,backgroundColor:R.white,"&:hover":{color:R.dark,backgroundColor:R.whiteHover}},info:{color:R.white,borderColor:R.info,backgroundColor:R.info,"&:hover":{color:R.white,backgroundColor:R.infoHover}}},buttonStyle:{primary:{color:R.white,borderColor:R.primary,backgroundColor:R.primary},secondary:{color:R.white,borderColor:R.secondary,backgroundColor:R.secondary},light:{color:R.dark,borderColor:R.light,backgroundColor:R.light},success:{color:R.white,borderColor:R.success,backgroundColor:R.success},danger:{color:R.white,borderColor:R.danger,backgroundColor:R.danger},warning:{color:R.dark,borderColor:R.warning,backgroundColor:R.warning},dark:{color:R.white,borderColor:R.dark,backgroundColor:R.dark},white:{color:R.dark,borderColor:R.white,backgroundColor:R.white},info:{color:R.white,borderColor:R.info,backgroundColor:R.info}},lightStyle:{primary:{color:R.primary,borderColor:R.primary,backgroundColor:"#E6E6FF"},secondary:{color:R.secondary,borderColor:R.secondary,backgroundColor:"#F0EDF8"},success:{color:R.success,borderColor:R.success,backgroundColor:"#E7FAE7"},danger:{color:R.danger,borderColor:R.danger,backgroundColor:"#FCE9E9"},warning:{color:R.dark,borderColor:R.warning,backgroundColor:"#FFFBE6"},dark:{color:R.white,borderColor:R.dark,backgroundColor:"#333333"},white:{color:R.dark,borderColor:R.dark,backgroundColor:"#F9F9F9"},light:{color:R.dark,borderColor:R.light,backgroundColor:R.light},info:{color:R.white,borderColor:R.info,backgroundColor:R.info}}};f.string,f.func,f.string,f.string,f.string,f.bool,f.string;var fS,pS;te.div(fS||(fS=B([`
  width: 100%;
  `,`;
  .accordion-list {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #f4f4f4;
  }
  .accordion-list__item + .accordion-list__item {
    border-top: 1px solid #f4f4f4;
  }
  .accordion-item--opened .accordion-item__icon {
    transform: rotate(180deg);
  }
  .accordion-item--opened .accordion-item__inner {
    max-height: 100rem;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition-duration: 0.5s;
    transition-property: max-height;
  }
  .accordion-item--opened .accordion-item__content {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;
  }
  .accordion-item__line {
    display: block;
    padding: 0.8rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 2;
    position: relative;
  }
  .accordion-item__title {
    font-size: 1.2rem;
    margin: 0;
    font-weight: 500;
    color: #121212;
  }
  .accordion-item__icon {
    width: 1.5rem;
    height: 1.5rem;
    transition: transform 0.3s ease-in-out;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC);
    opacity: 0.6;
  }
  .accordion-item__inner {
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;
    z-index: 1;
    position: relative;
  }
  .accordion-item__content {
    opacity: 0;
    transform: translateY(-1rem);
    transition-timing-function: linear, ease;
    transition-duration: 0.1s;
    transition-property: opacity, transform;
    transition-delay: 0.5s;
    padding: 0 1.2rem 1.2rem;
  }
  .accordion-item__paragraph {
    margin: 0;
    font-size: 1rem;
    color: #333;
    font-weight: 300;
    line-height: 1.3;
  }
`])),function(e){return e.hideIcon?de(pS||(pS=B([`
          .accordion-item__icon {
            display: none;
          }
        `]))):null});f.string,f.string,f.string,f.bool,f.string,f.arrayOf(f.any);var mS,hS;te.div(mS||(mS=B([`
    `,`
    border-radius: 0px;
    align-items:center;
    justify-content:space-between;
    min-width:500px;
`])),fn);te.button(hS||(hS=B([`
	color:inherit;
	border:none;
	background-color:transparent;
    right: 0px;
    position: absolute;
    padding: 0px 1.2em;
	:focus { outline:none;	}
`])));f.string,f.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),f.func,f.func,f.string,f.bool;var gS,vS;te.div(gS||(gS=B([""])));te.div(vS||(vS=B([`
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .animated.infinite {
    animation-iteration-count: infinite;
  }
  .animated.delay-1s {
    animation-delay: 1s;
  }
  .animated.delay-2s {
    animation-delay: 2s;
  }
  .animated.delay-3s {
    animation-delay: 3s;
  }
  .animated.delay-4s {
    animation-delay: 4s;
  }
  .animated.delay-5s {
    animation-delay: 5s;
  }
  .animated.fast {
    animation-duration: 800ms;
  }
  .animated.faster {
    animation-duration: 500ms;
  }
  .animated.slow {
    animation-duration: 2s;
  }
  .animated.slower {
    animation-duration: 3s;
  }
  @media (prefers-reduced-motion) {
    .animated {
      transition: none !important;
      animation: unset !important;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation-name: fadeIn;
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDown {
    animation-name: fadeInDown;
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInLeft {
    animation-name: fadeInLeft;
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInRight {
    animation-name: fadeInRight;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .fadeOut {
    animation-name: fadeOut;
  }
  @keyframes fadeOutDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
  .fadeOutDown {
    animation-name: fadeOutDown;
  }
  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
  .fadeOutLeft {
    animation-name: fadeOutLeft;
  }
  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
  .fadeOutRight {
    animation-name: fadeOutRight;
  }
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
  .fadeOutUp {
    animation-name: fadeOutUp;
  } /*!
 * animate.css -http://daneden.me/animate
 * Version - 3.7.0
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2018 Daniel Eden
 */
  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      transform: translate3d(0, 0, 0);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    40%,
    43% {
      transform: translate3d(0, -30px, 0);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    70% {
      transform: translate3d(0, -15px, 0);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }
  .bounce {
    transform-origin: center bottom;
    animation-name: bounce;
  }
  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
  .flash {
    animation-name: flash;
  }
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .pulse {
    animation-name: pulse;
  }
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .rubberBand {
    animation-name: rubberBand;
  }
  @keyframes shake {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translate3d(10px, 0, 0);
    }
  }
  .shake {
    animation-name: shake;
  }
  @keyframes headShake {
    0% {
      transform: translateX(0);
    }
    6.5% {
      transform: translateX(-6px) rotateY(-9deg);
    }
    18.5% {
      transform: translateX(5px) rotateY(7deg);
    }
    31.5% {
      transform: translateX(-3px) rotateY(-5deg);
    }
    43.5% {
      transform: translateX(2px) rotateY(3deg);
    }
    50% {
      transform: translateX(0);
    }
  }
  .headShake {
    animation-name: headShake;
    animation-timing-function: ease-in-out;
  }
  @keyframes swing {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }
    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  .swing {
    transform-origin: top center;
    animation-name: swing;
  }
  @keyframes tada {
    from {
      transform: scale3d(1, 1, 1);
    }
    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .tada {
    animation-name: tada;
  }
  @keyframes wobble {
    from {
      transform: translate3d(0, 0, 0);
    }
    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .wobble {
    animation-name: wobble;
  }
  @keyframes jello {
    from,
    11.1%,
    to {
      transform: translate3d(0, 0, 0);
    }
    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      transform: skewX(0.39063deg) skewY(0.39063deg);
    }
    88.8% {
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
  }
  .jello {
    transform-origin: center;
    animation-name: jello;
  }
  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
  .heartBeat {
    animation-name: heartBeat;
    animation-duration: 1.3s;
    animation-timing-function: ease-in-out;
  }
  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
  .bounceIn {
    animation-name: bounceIn;
    animation-duration: 0.75s;
  }
  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInDown {
    animation-name: bounceInDown;
  }
  @keyframes bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInLeft {
    animation-name: bounceInLeft;
  }
  @keyframes bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInRight {
    animation-name: bounceInRight;
  }
  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInUp {
    animation-name: bounceInUp;
  }
  @keyframes bounceOut {
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  .bounceOut {
    animation-name: bounceOut;
    animation-duration: 0.75s;
  }
  @keyframes bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .bounceOutDown {
    animation-name: bounceOutDown;
  }
  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  .bounceOutLeft {
    animation-name: bounceOutLeft;
  }
  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  .bounceOutRight {
    animation-name: bounceOutRight;
  }
  @keyframes bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  .bounceOutUp {
    animation-name: bounceOutUp;
  }
  @keyframes fadeInDownBig {
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDownBig {
    animation-name: fadeInDownBig;
  }
  @keyframes fadeInLeftBig {
    from {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInLeftBig {
    animation-name: fadeInLeftBig;
  }
  @keyframes fadeInRightBig {
    from {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInRightBig {
    animation-name: fadeInRightBig;
  }
  @keyframes fadeInUpBig {
    from {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUpBig {
    animation-name: fadeInUpBig;
  }
  @keyframes fadeOutDownBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .fadeOutDownBig {
    animation-name: fadeOutDownBig;
  }
  @keyframes fadeOutLeftBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  .fadeOutLeftBig {
    animation-name: fadeOutLeftBig;
  }
  @keyframes fadeOutRightBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  .fadeOutRightBig {
    animation-name: fadeOutRightBig;
  }
  @keyframes fadeOutUpBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  .fadeOutUpBig {
    animation-name: fadeOutUpBig;
  }
  @keyframes flip {
    from {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, -360deg);
      animation-timing-function: ease-out;
    }
    40% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      animation-timing-function: ease-out;
    }
    50% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      animation-timing-function: ease-in;
    }
    80% {
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95)
        translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
    to {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
  }
  .flip {
    backface-visibility: visible;
    animation-name: flip;
  }
  @keyframes flipInX {
    from {
      opacity: 0;
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      opacity: 1;
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  .flipInX {
    backface-visibility: visible;
    animation-name: flipInX;
  }
  @keyframes flipInY {
    from {
      opacity: 0;
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      opacity: 1;
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    }
    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  .flipInY {
    backface-visibility: visible;
    animation-name: flipInY;
  }
  @keyframes flipOutX {
    from {
      transform: perspective(400px);
    }
    30% {
      opacity: 1;
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    }
    to {
      opacity: 0;
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    }
  }
  .flipOutX {
    animation-name: flipOutX;
    animation-duration: 0.75s;
    backface-visibility: visible;
  }
  @keyframes flipOutY {
    from {
      transform: perspective(400px);
    }
    30% {
      opacity: 1;
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    }
    to {
      opacity: 0;
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    }
  }
  .flipOutY {
    animation-name: flipOutY;
    animation-duration: 0.75s;
    backface-visibility: visible;
  }
  @keyframes lightSpeedIn {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0) skewX(-30deg);
    }
    60% {
      opacity: 1;
      transform: skewX(20deg);
    }
    80% {
      transform: skewX(-5deg);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .lightSpeedIn {
    animation-name: lightSpeedIn;
    animation-timing-function: ease-out;
  }
  @keyframes lightSpeedOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) skewX(30deg);
    }
  }
  .lightSpeedOut {
    animation-name: lightSpeedOut;
    animation-timing-function: ease-in;
  }
  @keyframes rotateIn {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -200deg);
      transform-origin: center;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: center;
    }
  }
  .rotateIn {
    animation-name: rotateIn;
  }
  @keyframes rotateInDownLeft {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: left bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: left bottom;
    }
  }
  .rotateInDownLeft {
    animation-name: rotateInDownLeft;
  }
  @keyframes rotateInDownRight {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: right bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: right bottom;
    }
  }
  .rotateInDownRight {
    animation-name: rotateInDownRight;
  }
  @keyframes rotateInUpLeft {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: left bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: left bottom;
    }
  }
  .rotateInUpLeft {
    animation-name: rotateInUpLeft;
  }
  @keyframes rotateInUpRight {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -90deg);
      transform-origin: right bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: right bottom;
    }
  }
  .rotateInUpRight {
    animation-name: rotateInUpRight;
  }
  @keyframes rotateOut {
    from {
      opacity: 1;
      transform-origin: center;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 200deg);
      transform-origin: center;
    }
  }
  .rotateOut {
    animation-name: rotateOut;
  }
  @keyframes rotateOutDownLeft {
    from {
      opacity: 1;
      transform-origin: left bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: left bottom;
    }
  }
  .rotateOutDownLeft {
    animation-name: rotateOutDownLeft;
  }
  @keyframes rotateOutDownRight {
    from {
      opacity: 1;
      transform-origin: right bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: right bottom;
    }
  }
  .rotateOutDownRight {
    animation-name: rotateOutDownRight;
  }
  @keyframes rotateOutUpLeft {
    from {
      opacity: 1;
      transform-origin: left bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: left bottom;
    }
  }
  .rotateOutUpLeft {
    animation-name: rotateOutUpLeft;
  }
  @keyframes rotateOutUpRight {
    from {
      opacity: 1;
      transform-origin: right bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 90deg);
      transform-origin: right bottom;
    }
  }
  .rotateOutUpRight {
    animation-name: rotateOutUpRight;
  }
  @keyframes hinge {
    0% {
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    20%,
    60% {
      transform: rotate3d(0, 0, 1, 80deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    40%,
    80% {
      opacity: 1;
      transform: rotate3d(0, 0, 1, 60deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 700px, 0);
    }
  }
  .hinge {
    animation-name: hinge;
    animation-duration: 2s;
  }
  @keyframes jackInTheBox {
    from {
      opacity: 0;
      transform: scale(0.1) rotate(30deg);
      transform-origin: center bottom;
    }
    50% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(3deg);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .jackInTheBox {
    animation-name: jackInTheBox;
  }
  @keyframes rollIn {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .rollIn {
    animation-name: rollIn;
  }
  @keyframes rollOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }
  .rollOut {
    animation-name: rollOut;
  }
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  .zoomIn {
    animation-name: zoomIn;
  }
  @keyframes zoomInDown {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInDown {
    animation-name: zoomInDown;
  }
  @keyframes zoomInLeft {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInLeft {
    animation-name: zoomInLeft;
  }
  @keyframes zoomInRight {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInRight {
    animation-name: zoomInRight;
  }
  @keyframes zoomInUp {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInUp {
    animation-name: zoomInUp;
  }
  @keyframes zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
  .zoomOut {
    animation-name: zoomOut;
  }
  @keyframes zoomOutDown {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomOutDown {
    animation-name: zoomOutDown;
  }
  @keyframes zoomOutLeft {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    to {
      opacity: 0;
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform-origin: left center;
    }
  }
  .zoomOutLeft {
    animation-name: zoomOutLeft;
  }
  @keyframes zoomOutRight {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    to {
      opacity: 0;
      transform: scale(0.1) translate3d(2000px, 0, 0);
      transform-origin: right center;
    }
  }
  .zoomOutRight {
    animation-name: zoomOutRight;
  }
  @keyframes zoomOutUp {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomOutUp {
    animation-name: zoomOutUp;
  }
  @keyframes slideInDown {
    from {
      visibility: visible;
      transform: translate3d(0, -100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInDown {
    animation-name: slideInDown;
  }
  @keyframes slideInLeft {
    from {
      visibility: visible;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInLeft {
    animation-name: slideInLeft;
  }
  @keyframes slideInRight {
    from {
      visibility: visible;
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInRight {
    animation-name: slideInRight;
  }
  @keyframes slideInUp {
    from {
      visibility: visible;
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInUp {
    animation-name: slideInUp;
  }
  @keyframes slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  }
  .slideOutDown {
    animation-name: slideOutDown;
  }
  @keyframes slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  }
  .slideOutLeft {
    animation-name: slideOutLeft;
  }
  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
  }
  .slideOutRight {
    animation-name: slideOutRight;
  }
  @keyframes slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
  }
  .slideOutUp {
    animation-name: slideOutUp;
  }
`])));f.oneOfType([f.arrayOf(f.node),f.node]),f.string,f.number,f.string,f.oneOfType([f.string,f.number]),f.bool,f.func,f.func,f.func,f.bool,f.node,f.oneOfType([f.func,f.string]),f.string,f.number;var bS;te.span(bS||(bS=B([`
  display: flex;
  align-items: center;
  `,`
  `,`
  font-weight:200;
  box-shadow: `,`;

  `,`;
  `,`
  .icon {
    `,`
    i {
      `,`
      `,`
    }
  }
`])),ic,fn,function(e){return e.flat?null:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"},Yn({prop:"borderType",variants:{box:{borderRadius:"0px"},pill:{borderRadius:"20px"}}}),Yn({prop:"size",variants:{large:{padding:"8.75px 15px",fontSize:"1rem"},medium:{padding:"6.25px 8.75px",fontSize:"0.85rem"},small:{padding:"4px 6px",fontSize:"0.625rem"}}}),Yn({prop:"size",variants:{large:{fontSize:"1rem",marginRight:"12px"},medium:{fontSize:"0.85rem",marginRight:"10px"},small:{fontSize:"0.625rem !important",marginRight:"7.5px"}}}),ic,Yn({prop:"size",variants:{large:{fontSize:"1rem"},medium:{fontSize:"0.85rem"},small:{fontSize:"0.625rem !important"}}}));f.node,f.string,f.bool,f.string,f.string,f.string,f.string,f.oneOfType([f.oneOf([50,100,200,300,400,500,600,700,800,900]),f.string]);var yS;te.div(yS||(yS=B([`
  `,`
  `,`
`])),ic,H3);f.string,f.string,f.string,f.string,f.node,f.string,f.string,f.string,f.string,f.string,f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.string;var xS;te.ol(xS||(xS=B([`
  `,`;
  font-weight: `,`;
  border-radius: `,`;
  text-transform: `,`;
`])),fn,function(e){return e.bold?"bold":e.light?"light":null},function(e){return e.circle?"50%":"0"},function(e){return e.uppercase?"uppercase":"capitalize"});f.bool,f.node,f.string,f.bool,f.bool,f.node;var wS,kS,SS,_S,CS,OS,ES,TS;te.div(wS||(wS=B([`
  border: none;
  box-shadow: `,`;
  box-sizing: border-box;
  font-weight: 600;
  display:flex;
  justify-content:center;
  align-items:center;
  `,`}

    `,`
    
  `,`;

  `,`;

  `,`;

`])),function(e){return e.flat?"none":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"},function(e){var t=e.bg;return t&&de(kS||(kS=B([`
      background: `,`;
      color: #fff;
      &:hover {
        `,`;
    `])),R[""+t],function(n){var r=n.bg;return r&&de(SS||(SS=B([`
            transform: scale(1.02);
            color: #fff;
          `])))})},fn,Yn({prop:"size",variants:{xl:{padding:"12px 18.75px",fontSize:"1rem"},large:{padding:"8.75px 15px",fontSize:"1rem"},medium:{padding:"6px 12px",fontSize:"0.85rem"},small:{padding:"3px 6px",fontSize:"0.625rem"}}}),function(e){return e.circle===!0?de(_S||(_S=B([`
          border-radius: 30px;
        `]))):de(CS||(CS=B([`
          border-radius: 4px;
        `])))},function(e){return e.outline===!0&&de(OS||(OS=B([`
      background: transparent;
      `,`;
      border-width: 2px;
      &:hover {
        background: transparent;
        `,`;
      }
    `])),function(t){var n=t.bg;return n&&de(ES||(ES=B([`
          border: 2px solid `,`;
          color: `,`;
        `])),R[""+n],se(""+R[""+n]).darken(10))},function(t){var n=t.bg;return n&&de(TS||(TS=B([`
            border: 2.4px solid `,`;
            transform: scale(1.02);
            color: `,`;
          `])),R[""+n],se(""+R[""+n]).darken(10))})});f.bool,f.bool,f.bool,f.node,f.bool,f.string,f.string,f.bool,f.string,f.bool,f.any,f.func,f.string,f.string,f.string,f.string,f.string,f.string,f.bool;var jS;te.div(jS||(jS=B([`
  `,`
  
  .btn {
  	border-radius: 0px;
  }

`])),fn);f.string,f.node,f.string,f.string,f.string,f.bool;f.string,f.node,f.string,f.string;var PS,NS,RS;te.div(PS||(PS=B([`
  position: relative;
  background-color: #ffffff;
  `,`
`])),function(e){return e.border?de(NS||(NS=B([`
          border-top: 8px solid #e2e2e2;
          border-bottom: 8px solid #e2e2e2;
        `]))):de(RS||(RS=B([`
          border: 2px solid #e2e2e2;
        `])))});f.string,f.string,f.string,f.bool,f.node;var AS;te.div(AS||(AS=B([`
`])));f.bool,f.string,f.oneOfType([f.func,f.string]);f.string,f.string,f.bool,f.bool,f.bool,f.any,f.oneOfType([f.func,f.string]),f.bool;f.bool.isRequired,f.string,f.node,f.string,f.string,f.func;f.node,f.string;var MS;te.div(MS||(MS=B([`
  .carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &.carousel-fade .carousel-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block !important;
    opacity: 0;
    z-index: 0;
    transition: transform 0ms ease-in-out, opacity 0.8s ease-out;
  }

  &.carousel-fade .carousel-item.active {
    position: relative;
    z-index: 1;
    opacity: 1;
  }

  &.carousel-multi-item .carousel-item {
    display: inline-block !important;
  }

  &.carousel .carousel-slide-item {
    transition: left 0.5s;
  }

  .carousel-control-prev,
  .carousel-control-next,
  .carousel-item-prev,
  .carousel-item-next {
    z-index: 2;
  }
`])));k.createContext({activeItem:null,length:null,slide:null});f.number,f.node,f.string,f.oneOfType([f.number,f.bool]),f.number,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.oneOfType([f.func,f.string]),f.bool,f.bool;f.bool,f.node,f.string,f.oneOfType([f.func,f.string]);f.bool,f.node,f.string,f.any,f.oneOfType([f.func,f.string]);f.string,f.string,f.func;var LS;te.div(LS||(LS=B([""])));f.bool,f.string,f.string,f.string,f.bool,f.string,f.string,f.oneOfType([f.func,f.string]),f.bool,f.string,f.string;f.node,f.string,f.oneOfType([f.number,f.shape({hide:f.number,show:f.number})]),f.string,f.oneOfType([f.string,f.bool]),f.bool,f.func,f.func;var IS;te.div(IS||(IS=B([""])));f.string,f.bool,f.oneOf(["sm","md","lg","xl"]),f.oneOfType([f.func,f.string]);f.bool.isRequired,f.string,f.arrayOf(f.object),f.func,f.bool,f.bool,f.bool,f.bool;var DS,$S,FS;te.div(DS||(DS=B([`
  table-layout: `,`;
  `,`;
`])),function(e){return e.autoWidth?"auto":null},function(e){return e.scrollY?de($S||($S=B([`
          display: block;
          max-height: 200px;
          overflow-y: auto;
          -ms-overflow-style: -ms-autohiding-scrollbar;
        `]))):null});te.table(FS||(FS=B([""])));f.bool,f.bool,f.bool,f.bool,f.node,f.string,f.bool,f.bool,f.bool,f.string,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.string,f.string;f.node,f.string,f.arrayOf(f.object),f.bool;f.node,f.string,f.arrayOf(f.object),f.bool;f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.func.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.string.isRequired,f.bool.isRequired,f.string.isRequired,f.bool.isRequired,f.node,f.arrayOf(f.object),f.bool,f.arrayOf(f.object);f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.func.isRequired,f.func.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.string.isRequired,f.bool.isRequired,f.string.isRequired,f.bool.isRequired,f.number.isRequired,f.node,f.arrayOf(f.object),f.string,f.arrayOf(f.object),f.bool,f.bool;f.arrayOf(f.number).isRequired,f.oneOfType([f.string,f.number,f.object]).isRequired,f.func.isRequired,f.number.isRequired;f.bool.isRequired,f.number.isRequired,f.arrayOf(f.number).isRequired,f.func.isRequired,f.oneOfType([f.number,f.object,f.string]).isRequired,f.bool.isRequired,f.bool,f.bool,f.func;var zS,BS,HS;te.div(zS||(zS=B([`
  // icon container
  .icon {
    position: absolute;
    height: 100%;
    width: 30px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon + input:not([type='checkbox']):not([type='radio']),
  textarea {
    padding-left: 30px;
  }
  &.input-group label {
    top: 0;
    margin-bottom: 0;
  }
  &.input-group .input-group-text {
    background-color: #e0e0e0;
  }
  &.input-group .input-group-text.md-addon {
    font-weight: 500;
    background-color: transparent;
    border: none;
  }
  &.input-group .form-control {
    padding: 0.375rem 0.75rem;
    margin: 0;
  }
  & {
    position: relative;
  }
  & {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      border-radius: 4px;
      border: 1px solid #dadce0;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: none;
      padding: 4px 10px;
      min-height: 40px;
      width: 100%;
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
      &:focus {
        outline: none;
        &::placeholder {
          font-weight: 700 !important;
        }
      }
      &::placeholder {
        color: #757575;
        font-weight: 400;
        font-size: inherit;
        color: #757575;
        cursor: text;
        transition: color 0.2s ease-out;
      }
    }
    textarea {
      padding: 10px !important;
    }
  }
  &.size-lg {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      min-height: 50px;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
    }
  }
  &.size-sm {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      min-height: 30px;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
    }
  }
  &.checkbox,
  &.radio {
    margin: 0;
    height: 20px;
    width: 20px;
    &.size-lg {
      transform: scale(1.4);
    }
    &.size-sm {
      transform: scale(0.6);
    }
    position: relative;
    label {
      background-color: #fff;
      border: 1px solid #ccc;
      // border-radius: 4px;
      cursor: pointer;
      height: 20px;
      left: 0;
      position: absolute;
      top: 0;
      width: 20px;
    }

    input[type='checkbox'],
    input[type='radio'] {
      width: 20px;
      height: 20px;
      visibility: hidden;
    }
    input[type='radio'] + label {
      border-radius: 50%;
    }
    input[type='checkbox'] + label:after {
      border: 2px solid `,`;
      border-top: none;
      border-right: none;
      content: '';
      height: 6px;
      left: 2px;
      opacity: 0;
      position: absolute;
      top: 2px;
      transform: rotate(-45deg);
      width: 12px;
    }
    input[type='radio']:not(.browser) + label:after {
      border: 2px solid `,`;
      border-radius: 50%;
      content: '';
      height: 10px;
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
    }

    input[type='checkbox']:not(.browser-default):checked + label,
    input[type='radio']:not(.browser-default):checked + label {
      background-color: `,`;
      border: 2px solid `,`;
    }
    input[type='checkbox']:not(.browser-default):checked + label:after,
    input[type='radio']:not(.browser-default):checked + label:after {
      opacity: 1;
    }
    &.input-color {
      &-primary {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }

        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-secondary {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-success {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-danger {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-warning {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-info {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-dark {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
    }
  }
  &.input-color-primary {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  &.input-color-secondary {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-success {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  &.input-color-danger {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
    input[type='checkbox']:not(.browser-default),
    input[type='radio']:not(.browser-default) {
      background: red;
    }
  }
  &.input-color-warning {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-info {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-dark {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  & label.active {
    font-weight: 700;
  }
  & .prefix {
    top: 0.25rem;
    font-size: 1.75rem;
  }
  & .prefix ~ input,
  & .prefix ~ textarea {
    width: calc(100% - 2.5rem);
    margin-left: 2.5rem;
  }
  & .prefix ~ label {
    margin-left: 2.5rem;
  }
  & .prefix ~ .form-text {
    margin-left: 2.6rem;
  }
  & .prefix {
    position: absolute;
    transition: color 0.2s;
  }
  & .prefix.active {
    color: #4285f4;
  }
  textarea {
    padding: 0;
    overflow-y: hidden;
  }

  & .form-control.is-valid,
  .was-validated & .form-control:valid {
    padding-right: 0;
  }
  .needs-validation & label {
    left: 0.3rem;
  }
  .custom-file-input:lang(es) ~ .custom-file-label::after {
    content: 'Elegir';
  }
  .custom-file-input:lang(pl-pl) ~ .custom-file-label::after {
    content: 'Wybierz';
  }
  .custom-file-input:lang(fr) ~ .custom-file-label::after {
    content: 'Choisir';
  }
  .custom-file-input:lang(in) ~ .custom-file-label::after {
    content: 'Pilih';
  }
  .custom-file-input:lang(zh) ~ .custom-file-label::after {
    content: '選擇';
  }
  .custom-file-input:lang(de) ~ .custom-file-label::after {
    content: 'Wählen';
  }
  .custom-file-input:lang(ru) ~ .custom-file-label::after {
    content: 'Выбрать';
  }
  & > label {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .input-prefix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: color 0.2s;
    color: rgba(0, 0, 0, 0.87);
    pointer-events: none;
  }
  & .input-prefix.active {
    color: #4285f4;
  }
  &.input-with-pre-icon label {
    left: 36px;
    right: initial;
  }
  &.input-with-pre-icon .input-prefix {
    left: 16px;
    right: initial;
  }
  &.input-with-pre-icon .form-control {
    padding-left: 2.7rem !important;
  }
  &.input-with-post-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.input-with-post-icon .form-control {
    padding-right: 2.7rem !important;
  }
  &.input-with-post-icon.input-with-pre-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.input-with-post-icon.input-with-pre-icon .input-prefix:first-of-type {
    left: 16px;
    right: initial;
  }
  &.input-with-post-icon.input-with-pre-icon .form-control {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
  }
`])),function(e){var t=e.fontSize;return t+"px"},function(e){var t=e.fontSize;return t+"px"},function(e){var t=e.fontSize;return t&&t*1.2+"px"},function(e){var t=e.fontSize;return t&&t*1.2+"px"},function(e){var t=e.fontSize;return t&&t*.8+"px"},function(e){var t=e.fontSize;return t&&t*.8+"px"},R.primary,R.primary,R.primary100,R.primary,R.primary100,R.primary,R.primary,R.secondary100,R.secondary,R.secondary,R.success100,R.success,R.success,R.danger100,R.danger,R.danger,R.warning100,R.warning,R.warning,R.info,R.info,R.info,R.dark100,R.dark,R.dark,R.primary100,R.primary,R.primary,R.primary,R.secondary100,R.secondary,R.secondary,R.secondary,R.success100,R.success,R.success,R.success,R.danger100,R.danger,R.danger,R.danger,R.warning100,R.warning,R.warning,R.warning,R.info,R.info,R.info,R.info,R.dark100,R.dark,R.dark,R.dark);te.textarea(BS||(BS=B([""])));te.input(HS||(HS=B([""])));var US,dJ=te.i(US||(US=B([`
  padding: 0px 4px;
`]))),fJ=["border","brand","className","fab","duotone","fal","fad","far","solid","fixed","fas","flip","icon","inverse","light","list","pull","pulse","regular","rotate","size","spin","stack"],Cy=function(t){var n=t.border,r=t.brand,o=t.className,i=t.fab,a=t.duotone,s=t.fal,l=t.fad,c=t.far,u=t.solid,d=t.fixed,p=t.fas,h=t.flip,g=t.icon,v=t.inverse,x=t.light,y=t.list,b=t.pull,w=t.pulse,S=t.regular,C=t.rotate,_=t.size,O=t.spin,E=t.stack,T=Qi(t,fJ),P=S||c?"far":u||p?"fas":x||s?"fal":a||l?"fad":r||i?"fab":"fa",A=ee(P,y?"fa-li":!1,g?"fa-"+g:!1,_?"fa-"+_:!1,d?"fa-fw":!1,b?"fa-pull-"+b:!1,n?"fa-border":!1,O?"fa-spin":!1,w?"fa-pulse":!1,C?"fa-rotate-"+C:!1,h?"fa-flip-"+h:!1,v?"fa-inverse":!1,E?"fa-"+E:!1,o);return Y.createElement(Xi,{theme:ao},Y.createElement(dJ,Object.assign({"data-test":"fa"},T,{className:A})))};Cy.propTypes={icon:f.string.isRequired,border:f.bool,brand:f.bool,className:f.string,fab:f.bool,fal:f.bool,far:f.bool,fixed:f.bool,flip:f.string,inverse:f.bool,light:f.bool,list:f.bool,pull:f.string,pulse:f.bool,regular:f.bool,rotate:f.string,size:f.string,spin:f.bool,stack:f.string};Cy.defaultProps={border:!1,brand:!1,className:"",fab:!1,fal:!1,far:!1,fixed:!1,flip:"",inverse:!1,light:!1,list:!1,pull:"",pulse:!1,regular:!1,rotate:"",size:"",spin:!1,stack:"",duotone:!1,solid:!1,fad:!1,fas:!1};f.node,f.bool,f.string,f.string,f.bool,f.bool,f.number,f.func,f.string,f.string,f.bool,f.string,f.string,f.func,f.func,f.func,f.func,f.string,f.string,f.string,f.string,f.bool;Date.now().toString();f.bool,f.string,f.bool,f.func,f.string;f.func.isRequired,f.string.isRequired,f.bool.isRequired,f.bool,f.string,f.bool,f.any,f.string;f.number.isRequired,f.number.isRequired,f.array.isRequired,f.bool.isRequired,f.string.isRequired,f.array.isRequired,f.arrayOf(f.string);var WS,VS,YS,GS,XS;te.ul(WS||(WS=B([`
  padding: 15px;
  border: 0.75px solid #ccc;
  border-radius: 0;
  .page-link {
    `,`
    `,`
    border-radius: `,`;
    border: 0.5px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-item {
    `,`
    `,`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 0.5px solid #ccc;
    border-radius: `,`;
    font-size: `,`;
  }
`])),fn,function(e){return e.sm?de(VS||(VS=B([`
            min-width: 30px;
            min-height: 30px;
          `]))):de(YS||(YS=B([`
            min-width: 50px;
            min-height: 50px;
          `])))},function(e){return e.circle?"50%":"0"},fn,function(e){return e.sm?de(GS||(GS=B([`
            min-width: 30px;
            min-height: 30px;
          `]))):de(XS||(XS=B([`
            min-width: 50px;
            min-height: 50px;
          `])))},function(e){return e.circle?"50%":"0"},function(e){return e.size==="big"?"1.25rem":e.size==="small"?"0.75rem":"1rem"});f.node,f.bool,f.string,f.oneOf(["primary","secondary","success","danger","warning","info","white","dark"]),f.string,f.oneOfType([f.func,f.string]),f.bool;var qS;te.button(qS||(qS=B([`
  margin: 0px 7.5px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`])));f.bool,f.node,f.string,f.bool,f.oneOfType([f.func,f.string]);var KS;te.a(KS||(KS=B([`
  margin: 0px 7.5px;
  cursor: pointer;

	&.disabled {
		pointer-events:none;
		background:#ccc;
		color:#555;
	}
`])));f.node,f.bool,f.string,f.oneOfType([f.func,f.string]);f.number.isRequired,f.func.isRequired,f.arrayOf(f.string).isRequired,f.array.isRequired,f.number.isRequired,f.string,f.node;f.bool,f.bool,f.bool,f.bool,f.bool,f.node,f.string,f.bool,f.oneOfType([f.object,f.string]),f.bool,f.bool,f.number,f.oneOfType([f.string,f.number,f.object]),f.arrayOf(f.number),f.bool,f.string,f.bool,f.bool,f.bool,f.oneOfType([f.array,f.object,f.string]),f.bool,f.string,f.bool,f.string,f.func,f.func,f.func,f.arrayOf(f.string),f.number,f.arrayOf(f.string),f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.string,f.bool,f.bool,f.arrayOf(f.string),f.bool,f.string,f.bool,f.string,f.bool;var QS;te.div(QS||(QS=B([`
  `,`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`])),fn);k.createContext({isOpen:null});f.string,f.bool,f.bool,f.bool,f.bool,f.func,f.string;var JS,ZS,e_,t_,n_,r_,o_,i_,a_,s_,l_,c_;te.button(JS||(JS=B([`
  padding: 0.8rem 2rem;
  border: none;
  `,`
  `,`
  :hover, :focus {
    outline: none;
    border: none; 
  }
  `,`;
  `,`
`])),fn,ic,function(e){return e.circle===!0?de(ZS||(ZS=B([`
          border-radius: 30px;
        `]))):de(e_||(e_=B([`
          border-radius: 0px;
        `])))},Yn({prop:"size",variants:{lg:{fontSize:"1.25rem",padding:"20px"},sm:{fontSize:"0.75rem",padding:"5px"}}}));te.span(t_||(t_=B([`
  .pro-arrow-wrapper {
    position: relative;
    min-width: 10px;
    min-height: 10px;
    .pro-arrow {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      border-style: solid;
      border-color: #fff;
      border-width: 0 2px 2px 0;
      padding: 2.5px;
      vertical-align: middle;
      transition: transform 0.3s;

      `,`
      `,`
    }
  }
`])),function(e){return e.dropup?de(n_||(n_=B([`
              transform: rotate(-135deg);
            `]))):e.dropleft?de(r_||(r_=B([`
              transform: rotate(135deg);
            `]))):e.dropright?de(o_||(o_=B([`
              transform: rotate(-45deg);
            `]))):de(i_||(i_=B([`
              transform: rotate(45deg);
            `])))},function(e){return e.dropup?de(a_||(a_=B([`
              margin-bottom: 0;
            `]))):e.dropleft?de(s_||(s_=B([`
              margin-bottom: 0;
            `]))):e.dropright?de(l_||(l_=B([`
              margin-bottom: 0;
            `]))):de(c_||(c_=B([`
              margin-bottom: 5px;
            `])))});f.string,f.oneOf(["primary","secondary","success","danger","warning","info"]),f.bool,f.bool,f.bool,f.bool,f.bool,f.string,f.node,f.bool,f.string,f.bool,f.oneOfType([f.func,f.string]);var u_;te("div")(u_||(u_=B([`
  display: flex;
  flex-direction: column;
  min-height: 20px;
  min-width: 20px;
  background-color: #fff;
  border-radius: 0;
  color: #232323;
  padding: 0.3rem;
  `,`;
`])),function(e){return e.popperStyle});f.string,f.oneOf(["primary","secondary","success","danger","warning","info"]),f.func,f.func,f.string,f.bool,f.bool,f.bool,f.bool;var d_;te.div(d_||(d_=B([`
  color: #000 !important;
`])));f.bool,f.node,f.string,f.bool,f.bool,f.bool,f.func,f.oneOfType([f.func,f.string]),f.bool;f.string,f.string,f.string;var f_;te.div(f_||(f_=B([`
  position: relative;
  iframe,
  embed,
  object,
  video {
    margin: 0 auto;
    top: 0;
    bottom: 0;
    left: 0;
    border: 0;
  }
`])));f.string.isRequired,f.bool,f.string,f.number,f.string,f.string,f.func,f.func,f.func,f.string,f.string,f.object,f.string,f.number;var p_;te.div(p_||(p_=B([`
      .input-flex-fill {
        flex-grow: 1
      }
      .input-background {
        background-color: #f4f4f4;
      }
      .md-form.input-group label {
        top: 0;
        margin-bottom: 0;
      }
      .md-form.input-group .input-group-text {
        background-color: #e0e0e0;
      }
      .md-form.input-group .input-group-text.md-addon {
        font-weight: 500;
        background-color: transparent;
        border: none;
      }
      .md-form.input-group .form-control {
        padding: 0.375rem 0.75rem;
        margin: 0;
      }
      .md-form {
        position: relative;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .md-form input:not([type]),
      .md-form input[type="text"]:not(.browser-default),
      .md-form input[type="password"]:not(.browser-default),
      .md-form input[type="email"]:not(.browser-default),
      .md-form input[type="url"]:not(.browser-default),
      .md-form input[type="time"]:not(.browser-default),
      .md-form input[type="date"]:not(.browser-default),
      .md-form input[type="datetime"]:not(.browser-default),
      .md-form input[type="datetime-local"]:not(.browser-default),
      .md-form input[type="tel"]:not(.browser-default),
      .md-form input[type="number"]:not(.browser-default),
      .md-form input[type="search"]:not(.browser-default),
      .md-form input[type="phone"]:not(.browser-default),
      .md-form input[type="search-md"],
      .md-form textarea.md-textarea {
        box-sizing: content-box;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #ced4da;
        border-radius: 0;
        outline: none;
        box-shadow: none;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      .md-form input:not([type]):focus:not([readonly]),
      .md-form input[type="text"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="password"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="email"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="url"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="time"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="date"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="datetime"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="tel"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="number"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="search"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="phone"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="search-md"]:focus:not([readonly]),
      .md-form textarea.md-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #4285f4;
        box-shadow: 0 1px 0 0 #4285f4;
      }
      .md-form input:not([type]):focus:not([readonly]) + label,
      .md-form
        input[type="text"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="password"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="email"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="url"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="time"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="date"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="datetime"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="tel"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="number"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="search"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="phone"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form input[type="search-md"]:focus:not([readonly]) + label,
      .md-form textarea.md-textarea:focus:not([readonly]) + label {
        color: #4285f4;
      }
      .md-form input:not([type]) + label::after,
      .md-form input[type="text"]:not(.browser-default) + label::after,
      .md-form input[type="password"]:not(.browser-default) + label::after,
      .md-form input[type="email"]:not(.browser-default) + label::after,
      .md-form input[type="url"]:not(.browser-default) + label::after,
      .md-form input[type="time"]:not(.browser-default) + label::after,
      .md-form input[type="date"]:not(.browser-default) + label::after,
      .md-form input[type="datetime"]:not(.browser-default) + label::after,
      .md-form
        input[type="datetime-local"]:not(.browser-default)
        + label::after,
      .md-form input[type="tel"]:not(.browser-default) + label::after,
      .md-form input[type="number"]:not(.browser-default) + label::after,
      .md-form input[type="search"]:not(.browser-default) + label::after,
      .md-form input[type="phone"]:not(.browser-default) + label::after,
      .md-form input[type="search-md"] + label::after,
      .md-form textarea.md-textarea + label::after {
        position: absolute;
        top: 65px;
        display: block;
        content: "";
        opacity: 0;
        transition: 0.2s opacity ease-out, 0.2s color ease-out;
      }
      .md-form input:not([type]).valid,
      .md-form input:not([type]):focus.valid,
      .md-form input[type="text"]:not(.browser-default).valid,
      .md-form input[type="text"]:not(.browser-default):focus.valid,
      .md-form input[type="password"]:not(.browser-default).valid,
      .md-form input[type="password"]:not(.browser-default):focus.valid,
      .md-form input[type="email"]:not(.browser-default).valid,
      .md-form input[type="email"]:not(.browser-default):focus.valid,
      .md-form input[type="url"]:not(.browser-default).valid,
      .md-form input[type="url"]:not(.browser-default):focus.valid,
      .md-form input[type="time"]:not(.browser-default).valid,
      .md-form input[type="time"]:not(.browser-default):focus.valid,
      .md-form input[type="date"]:not(.browser-default).valid,
      .md-form input[type="date"]:not(.browser-default):focus.valid,
      .md-form input[type="datetime"]:not(.browser-default).valid,
      .md-form input[type="datetime"]:not(.browser-default):focus.valid,
      .md-form input[type="datetime-local"]:not(.browser-default).valid,
      .md-form input[type="datetime-local"]:not(.browser-default):focus.valid,
      .md-form input[type="tel"]:not(.browser-default).valid,
      .md-form input[type="tel"]:not(.browser-default):focus.valid,
      .md-form input[type="number"]:not(.browser-default).valid,
      .md-form input[type="number"]:not(.browser-default):focus.valid,
      .md-form input[type="search"]:not(.browser-default).valid,
      .md-form input[type="search"]:not(.browser-default):focus.valid,
      .md-form input[type="phone"]:not(.browser-default).valid,
      .md-form input[type="phone"]:not(.browser-default):focus.valid,
      .md-form input[type="search-md"].valid,
      .md-form input[type="search-md"]:focus.valid,
      .md-form textarea.md-textarea.valid,
      .md-form textarea.md-textarea:focus.valid {
        border-bottom: 1px solid #00c851;
        box-shadow: 0 1px 0 0 #00c851;
      }
      .md-form input:not([type]).valid + label:after,
      .md-form input:not([type]):focus.valid + label:after,
      .md-form input[type="text"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="password"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="password"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="email"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="email"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="url"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="url"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="time"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="time"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="date"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="date"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="datetime"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default):focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="tel"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="tel"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="number"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="number"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="search"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="search"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="phone"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="phone"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="search-md"].valid + label:after,
      .md-form input[type="search-md"]:focus.valid + label:after,
      .md-form textarea.md-textarea.valid + label:after,
      .md-form textarea.md-textarea:focus.valid + label:after {
        color: #00c851;
        content: attr(data-success);
        opacity: 1;
      }
      .md-form input:not([type]).invalid,
      .md-form input:not([type]):focus.invalid,
      .md-form input[type="text"]:not(.browser-default).invalid,
      .md-form input[type="text"]:not(.browser-default):focus.invalid,
      .md-form input[type="password"]:not(.browser-default).invalid,
      .md-form input[type="password"]:not(.browser-default):focus.invalid,
      .md-form input[type="email"]:not(.browser-default).invalid,
      .md-form input[type="email"]:not(.browser-default):focus.invalid,
      .md-form input[type="url"]:not(.browser-default).invalid,
      .md-form input[type="url"]:not(.browser-default):focus.invalid,
      .md-form input[type="time"]:not(.browser-default).invalid,
      .md-form input[type="time"]:not(.browser-default):focus.invalid,
      .md-form input[type="date"]:not(.browser-default).invalid,
      .md-form input[type="date"]:not(.browser-default):focus.invalid,
      .md-form input[type="datetime"]:not(.browser-default).invalid,
      .md-form input[type="datetime"]:not(.browser-default):focus.invalid,
      .md-form input[type="datetime-local"]:not(.browser-default).invalid,
      .md-form input[type="datetime-local"]:not(.browser-default):focus.invalid,
      .md-form input[type="tel"]:not(.browser-default).invalid,
      .md-form input[type="tel"]:not(.browser-default):focus.invalid,
      .md-form input[type="number"]:not(.browser-default).invalid,
      .md-form input[type="number"]:not(.browser-default):focus.invalid,
      .md-form input[type="search"]:not(.browser-default).invalid,
      .md-form input[type="search"]:not(.browser-default):focus.invalid,
      .md-form input[type="phone"]:not(.browser-default).invalid,
      .md-form input[type="phone"]:not(.browser-default):focus.invalid,
      .md-form input[type="search-md"].invalid,
      .md-form input[type="search-md"]:focus.invalid,
      .md-form textarea.md-textarea.invalid,
      .md-form textarea.md-textarea:focus.invalid {
        border-bottom: 1px solid #f44336;
        box-shadow: 0 1px 0 0 #f44336;
      }
      .md-form input:not([type]).invalid + label:after,
      .md-form input:not([type]):focus.invalid + label:after,
      .md-form input[type="text"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="email"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="email"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="url"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="url"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="time"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="time"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="date"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="date"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="tel"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="tel"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="number"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="number"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="search"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="search"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="phone"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="phone"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="search-md"].invalid + label:after,
      .md-form input[type="search-md"]:focus.invalid + label:after,
      .md-form textarea.md-textarea.invalid + label:after,
      .md-form textarea.md-textarea:focus.invalid + label:after {
        color: #f44336;
        content: attr(data-error);
        opacity: 1;
      }
      .md-form input:not([type]).form-control.valid + label:after,
      .md-form input:not([type]).form-control:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control.valid + label:after,
      .md-form input[type="search-md"].form-control:focus.valid + label:after,
      .md-form textarea.md-textarea.form-control.valid + label:after,
      .md-form textarea.md-textarea.form-control:focus.valid + label:after {
        top: 4.1rem;
      }
      .md-form input:not([type]).form-control.invalid + label:after,
      .md-form input:not([type]).form-control:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control.invalid + label:after,
      .md-form input[type="search-md"].form-control:focus.invalid + label:after,
      .md-form textarea.md-textarea.form-control.invalid + label:after,
      .md-form textarea.md-textarea.form-control:focus.invalid + label:after {
        top: 4rem;
      }
      .md-form input:not([type]).form-control-lg.valid + label:after,
      .md-form input:not([type]).form-control-lg:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control-lg.valid + label:after,
      .md-form
        input[type="search-md"].form-control-lg:focus.valid
        + label:after,
      .md-form textarea.md-textarea.form-control-lg.valid + label:after,
      .md-form textarea.md-textarea.form-control-lg:focus.valid + label:after {
        top: 4.6rem;
      }
      .md-form input:not([type]).form-control-lg.invalid + label:after,
      .md-form input:not([type]).form-control-lg:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control-lg.invalid + label:after,
      .md-form
        input[type="search-md"].form-control-lg:focus.invalid
        + label:after,
      .md-form textarea.md-textarea.form-control-lg.invalid + label:after,
      .md-form
        textarea.md-textarea.form-control-lg:focus.invalid
        + label:after {
        top: 4.6rem;
      }
      .md-form input:not([type]).form-control-sm.valid + label:after,
      .md-form input:not([type]).form-control-sm:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control-sm.valid + label:after,
      .md-form
        input[type="search-md"].form-control-sm:focus.valid
        + label:after,
      .md-form textarea.md-textarea.form-control-sm.valid + label:after,
      .md-form textarea.md-textarea.form-control-sm:focus.valid + label:after {
        top: 3.7rem;
      }
      .md-form input:not([type]).form-control-sm.invalid + label:after,
      .md-form input:not([type]).form-control-sm:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control-sm.invalid + label:after,
      .md-form
        input[type="search-md"].form-control-sm:focus.invalid
        + label:after,
      .md-form textarea.md-textarea.form-control-sm.invalid + label:after,
      .md-form
        textarea.md-textarea.form-control-sm:focus.invalid
        + label:after {
        top: 3.6rem;
      }
      .md-form > input[type="date"]:not(.browser-default) + label {
        transform: translateY(-27px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form > input[type="time"]:not(.browser-default) + label {
        font-size: 0.8rem;
        transform: translateY(-25px);
        transform-origin: 0 0;
      }
      .md-form .was-validated input[type="text"]:valid + label {
        color: #00c851 !important;
      }
      .md-form .was-validated input[type="text"]:invalid + label {
        color: #f44336 !important;
      }
      .md-form .was-validated .form-control:valid:focus {
        box-shadow: 0 1px 0 0 #00c851 !important;
      }
      .md-form .was-validated .form-control:valid {
        border-color: #00c851 !important;
      }
      .md-form .was-validated .form-control:invalid:focus {
        box-shadow: 0 1px 0 0 #f44336 !important;
      }
      .md-form .was-validated .form-control:invalid {
        border-color: #f44336 !important;
      }
      .md-form .form-control {
        height: auto;
        padding: 0.6rem 0 0.4rem 0;
        margin: 0 0 0.5rem 0;
        background-color: transparent;
        border-radius: 0;
      }
      .md-form .form-control:focus {
        box-shadow: none;
      }
      .md-form .form-control:disabled,
      .md-form .form-control[readonly] {
        background-color: transparent;
        border-bottom: 1px solid #bdbdbd;
      }
      .md-form .form-control.is-valid {
        border-color: #00c851;
      }
      .md-form .form-control.is-valid:focus {
        border-color: #00c851 !important;
        box-shadow: 0 1px 0 0 #00c851 !important;
      }
      .md-form .form-control.is-invalid {
        border-color: #f44336;
      }
      .md-form .form-control.is-invalid:focus {
        border-color: #f44336 !important;
        box-shadow: 0 1px 0 0 #f44336 !important;
      }
      .md-form .form-control.is-valid,
      .md-form .form-control.is-invalid {
        background-position: center right !important;
      }
      .md-form .validate {
        margin-bottom: 2.5rem;
      }
      .md-form label {
        font-size: 1rem;
      }
      .md-form label.active {
        font-size: 1rem;
      }
      .md-form .prefix {
        top: 0.25rem;
        font-size: 1.75rem;
      }
      .md-form .prefix ~ input,
      .md-form .prefix ~ textarea {
        width: calc(100% - 2.5rem);
        margin-left: 2.5rem;
      }
      .md-form .prefix ~ label {
        margin-left: 2.5rem;
      }
      .md-form .prefix ~ .form-text {
        margin-left: 2.6rem;
      }
      .md-form label {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1rem;
        color: #757575;
        cursor: text;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(12px);
        transform-origin: 0% 100%;
      }
      .md-form label.active {
        transform: translateY(-14px) scale(0.8);
      }
      .md-form .prefix {
        position: absolute;
        transition: color 0.2s;
      }
      .md-form .prefix.active {
        color: #4285f4;
      }
      .md-form.form-lg .validate {
        margin-bottom: 2.8rem;
      }
      .md-form.form-lg label {
        font-size: 1.25rem;
      }
      .md-form.form-lg label.active {
        font-size: 1.15rem;
      }
      .md-form.form-lg .prefix {
        top: 0.4rem;
        font-size: 2rem;
      }
      .md-form.form-lg .prefix ~ input,
      .md-form.form-lg .prefix ~ textarea {
        width: calc(100% - 3rem);
        margin-left: 3rem;
      }
      .md-form.form-lg .prefix ~ label {
        margin-left: 3rem;
      }
      .md-form.form-lg .prefix ~ .form-text {
        margin-left: 3.1rem;
      }
      .md-form.form-sm .validate {
        margin-bottom: 2.3rem;
      }
      .md-form.form-sm label {
        font-size: 0.875rem;
      }
      .md-form.form-sm label.active {
        font-size: 0.95rem;
      }
      .md-form.form-sm .prefix {
        top: 0.35rem;
        font-size: 1.5rem;
      }
      .md-form.form-sm .prefix ~ input,
      .md-form.form-sm .prefix ~ textarea {
        width: calc(100% - 2rem);
        margin-left: 2rem;
      }
      .md-form.form-sm .prefix ~ label {
        margin-left: 2rem;
      }
      .md-form.form-sm .prefix ~ .form-text {
        margin-left: 2rem;
      }
      .md-form textarea.md-textarea {
        padding: 0;
        overflow-y: hidden;
      }
      .md-form textarea.md-textarea + label {
        top: -0.6rem;
      }
      .md-form textarea.md-textarea-auto {
        padding: 0;
        padding-top: 1.5rem;
      }
      .md-form textarea.md-textarea-auto + label {
        top: 0;
      }
      .md-form.md-outline {
        position: relative;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .md-form.md-outline input[type="text"],
      .md-form.md-outline input[type="password"],
      .md-form.md-outline input[type="email"],
      .md-form.md-outline input[type="url"],
      .md-form.md-outline input[type="time"],
      .md-form.md-outline input[type="date"],
      .md-form.md-outline input[type="datetime-local"],
      .md-form.md-outline input[type="tel"],
      .md-form.md-outline input[type="number"],
      .md-form.md-outline input[type="search-md"],
      .md-form.md-outline input[type="search"],
      .md-form.md-outline textarea.md-textarea {
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid #dadce0;
        border-radius: 4px;
        outline: none;
        box-shadow: none;
        transition: all 0.3s;
      }
      .md-form.md-outline input[type="text"]:focus:not([readonly]),
      .md-form.md-outline input[type="password"]:focus:not([readonly]),
      .md-form.md-outline input[type="email"]:focus:not([readonly]),
      .md-form.md-outline input[type="url"]:focus:not([readonly]),
      .md-form.md-outline input[type="time"]:focus:not([readonly]),
      .md-form.md-outline input[type="date"]:focus:not([readonly]),
      .md-form.md-outline input[type="datetime-local"]:focus:not([readonly]),
      .md-form.md-outline input[type="tel"]:focus:not([readonly]),
      .md-form.md-outline input[type="number"]:focus:not([readonly]),
      .md-form.md-outline input[type="search-md"]:focus:not([readonly]),
      .md-form.md-outline input[type="search"]:focus:not([readonly]),
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]) {
        border-color: #4285f4;
        box-shadow: inset 0 0 0 1px #4285f4;
      }
      .md-form.md-outline input[type="text"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="password"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="email"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="url"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="time"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="date"]:focus:not([readonly]) + label,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly])
        + label,
      .md-form.md-outline input[type="tel"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="number"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="search-md"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="search"]:focus:not([readonly]) + label,
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]) + label {
        color: #4285f4;
      }
      .md-form.md-outline input[type="text"].valid,
      .md-form.md-outline input[type="text"]:focus.valid,
      .md-form.md-outline input[type="password"].valid,
      .md-form.md-outline input[type="password"]:focus.valid,
      .md-form.md-outline input[type="email"].valid,
      .md-form.md-outline input[type="email"]:focus.valid,
      .md-form.md-outline input[type="url"].valid,
      .md-form.md-outline input[type="url"]:focus.valid,
      .md-form.md-outline input[type="time"].valid,
      .md-form.md-outline input[type="time"]:focus.valid,
      .md-form.md-outline input[type="date"].valid,
      .md-form.md-outline input[type="date"]:focus.valid,
      .md-form.md-outline input[type="datetime-local"].valid,
      .md-form.md-outline input[type="datetime-local"]:focus.valid,
      .md-form.md-outline input[type="tel"].valid,
      .md-form.md-outline input[type="tel"]:focus.valid,
      .md-form.md-outline input[type="number"].valid,
      .md-form.md-outline input[type="number"]:focus.valid,
      .md-form.md-outline input[type="search-md"].valid,
      .md-form.md-outline input[type="search-md"]:focus.valid,
      .md-form.md-outline input[type="search"].valid,
      .md-form.md-outline input[type="search"]:focus.valid,
      .md-form.md-outline textarea.md-textarea.valid,
      .md-form.md-outline textarea.md-textarea:focus.valid {
        border-color: #00c851;
        box-shadow: inset 0 0 0 1px #00c851;
      }
      .md-form.md-outline
        input[type="text"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="text"].valid + label:after,
      .md-form.md-outline input[type="text"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="password"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="password"].valid + label:after,
      .md-form.md-outline input[type="password"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="email"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="email"].valid + label:after,
      .md-form.md-outline input[type="email"]:focus.valid + label:after,
      .md-form.md-outline input[type="url"]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type="url"].valid + label:after,
      .md-form.md-outline input[type="url"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="time"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="time"].valid + label:after,
      .md-form.md-outline input[type="time"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="date"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="date"].valid + label:after,
      .md-form.md-outline input[type="date"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="datetime-local"].valid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus.valid
        + label:after,
      .md-form.md-outline input[type="tel"]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type="tel"].valid + label:after,
      .md-form.md-outline input[type="tel"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="number"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="number"].valid + label:after,
      .md-form.md-outline input[type="number"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="search-md"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="search-md"].valid + label:after,
      .md-form.md-outline input[type="search-md"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="search"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="search"].valid + label:after,
      .md-form.md-outline input[type="search"]:focus.valid + label:after,
      .md-form.md-outline
        textarea.md-textarea:focus:not([readonly]).valid
        + label,
      .md-form.md-outline textarea.md-textarea.valid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.valid + label:after {
        color: #00c851;
        content: attr(data-success);
        opacity: 1;
      }
      .md-form.md-outline input[type="text"].invalid,
      .md-form.md-outline input[type="text"]:focus.invalid,
      .md-form.md-outline input[type="password"].invalid,
      .md-form.md-outline input[type="password"]:focus.invalid,
      .md-form.md-outline input[type="email"].invalid,
      .md-form.md-outline input[type="email"]:focus.invalid,
      .md-form.md-outline input[type="url"].invalid,
      .md-form.md-outline input[type="url"]:focus.invalid,
      .md-form.md-outline input[type="time"].invalid,
      .md-form.md-outline input[type="time"]:focus.invalid,
      .md-form.md-outline input[type="date"].invalid,
      .md-form.md-outline input[type="date"]:focus.invalid,
      .md-form.md-outline input[type="datetime-local"].invalid,
      .md-form.md-outline input[type="datetime-local"]:focus.invalid,
      .md-form.md-outline input[type="tel"].invalid,
      .md-form.md-outline input[type="tel"]:focus.invalid,
      .md-form.md-outline input[type="number"].invalid,
      .md-form.md-outline input[type="number"]:focus.invalid,
      .md-form.md-outline input[type="search-md"].invalid,
      .md-form.md-outline input[type="search-md"]:focus.invalid,
      .md-form.md-outline input[type="search"].invalid,
      .md-form.md-outline input[type="search"]:focus.invalid,
      .md-form.md-outline textarea.md-textarea.invalid,
      .md-form.md-outline textarea.md-textarea:focus.invalid {
        border-color: #f44336;
        box-shadow: inset 0 0 0 1px #f44336;
      }
      .md-form.md-outline
        input[type="text"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="text"].invalid + label:after,
      .md-form.md-outline input[type="text"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="password"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="password"].invalid + label:after,
      .md-form.md-outline input[type="password"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="email"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="email"].invalid + label:after,
      .md-form.md-outline input[type="email"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="url"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="url"].invalid + label:after,
      .md-form.md-outline input[type="url"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="time"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="time"].invalid + label:after,
      .md-form.md-outline input[type="time"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="date"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="date"].invalid + label:after,
      .md-form.md-outline input[type="date"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="datetime-local"].invalid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="tel"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="tel"].invalid + label:after,
      .md-form.md-outline input[type="tel"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="number"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="number"].invalid + label:after,
      .md-form.md-outline input[type="number"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="search-md"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="search-md"].invalid + label:after,
      .md-form.md-outline input[type="search-md"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="search"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="search"].invalid + label:after,
      .md-form.md-outline input[type="search"]:focus.invalid + label:after,
      .md-form.md-outline
        textarea.md-textarea:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline textarea.md-textarea.invalid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.invalid + label:after {
        color: #f44336;
        content: attr(data-error);
        opacity: 1;
      }
      .md-form.md-outline input[type="text"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="text"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="email"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="email"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="url"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="url"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="time"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="time"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="date"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="date"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="tel"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="tel"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="number"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="number"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="search"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="search"].form-control:focus.valid
        + label:after,
      .md-form.md-outline textarea.md-textarea.form-control.valid + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control:focus.valid
        + label:after {
        position: absolute;
        top: 4rem;
        left: 0;
      }
      .md-form.md-outline input[type="text"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="text"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="email"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="email"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="url"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="url"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="time"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="time"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="date"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="date"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="tel"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="tel"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="number"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="number"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="search"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="search"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control.invalid
        + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control:focus.invalid
        + label:after {
        position: absolute;
        top: 4rem;
        left: 0;
      }
      .md-form.md-outline
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form.md-outline > input[type="time"]:not(.browser-default) + label {
        left: 8px;
        padding-right: 5px;
        padding-left: 5px;
        font-size: 1rem;
        font-weight: 500;
        background: #fff;
        transform: translateY(-9px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form.md-outline
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label.active,
      .md-form.md-outline
        > input[type="time"]:not(.browser-default)
        + label.active {
        transform: translateY(-9px) scale(0.8);
        transform-origin: 0 0;
      }
      @-webkit-keyframes autofill {
        to {
          color: #495057;
          background: transparent;
        }
      }
      @keyframes autofill {
        to {
          color: #495057;
          background: transparent;
        }
      }
      .md-form.md-outline input:-webkit-autofill {
        -webkit-animation-name: autofill;
        animation-name: autofill;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      .md-form.md-outline .form-control {
        padding: 0.375rem 0.75rem;
      }
      .md-form.md-outline label {
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 10px;
        font-size: 1rem;
        color: #757575;
        cursor: text;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(9px);
        transform-origin: 0% 100%;
      }
      .md-form.md-outline label.active {
        left: 8px;
        padding-right: 5px;
        padding-left: 5px;
        font-weight: 500;
        background: #fff;
        transform: translateY(-13px) scale(0.8);
      }
      .md-form.md-outline.form-lg .form-control.form-control-lg {
        padding: 0.5rem 0.725rem;
      }
      .md-form.md-outline.form-lg label {
        font-size: 1.25rem;
        transform: translateY(10px);
      }
      .md-form.md-outline.form-lg label.active {
        font-size: 1.1rem;
        transform: translateY(-14px) scale(0.8);
      }
      .md-form.md-outline.form-lg .prefix {
        top: 0.65rem;
        font-size: 25px;
      }
      .md-form.md-outline.form-lg .prefix ~ input,
      .md-form.md-outline.form-lg .prefix ~ textarea {
        width: calc(100% - 2.2rem);
        margin-left: 2.2rem;
      }
      .md-form.md-outline.form-lg .prefix ~ label {
        margin-left: 2.2rem;
      }
      .md-form.md-outline.form-lg .prefix ~ .form-text {
        margin-left: 2.3rem;
      }
      .md-form.md-outline.form-sm .form-control.form-control-sm {
        padding: 0.25rem 0.625rem;
      }
      .md-form.md-outline.form-sm label {
        font-size: 0.8rem;
        transform: translateY(8px);
      }
      .md-form.md-outline.form-sm label.active {
        font-size: 0.85rem;
        transform: translateY(-12px) scale(0.8);
      }
      .md-form.md-outline.form-sm .prefix {
        top: 0.5rem;
        font-size: 15px;
      }
      .md-form.md-outline.form-sm .prefix ~ input,
      .md-form.md-outline.form-sm .prefix ~ textarea {
        width: calc(100% - 1.6rem);
        margin-left: 1.6rem;
      }
      .md-form.md-outline.form-sm .prefix ~ label {
        margin-left: 1.6rem;
      }
      .md-form.md-outline.form-sm .prefix ~ .form-text {
        margin-left: 1.7rem;
      }
      .md-form.md-outline .prefix {
        position: absolute;
        top: 0.6rem;
        font-size: 20px;
        transition: color 0.2s;
      }
      .md-form.md-outline .prefix:focus {
        color: #4285f4;
      }
      .md-form.md-outline .prefix ~ input,
      .md-form.md-outline .prefix ~ textarea {
        width: calc(100% - 2rem);
        margin-left: 2rem;
      }
      .md-form.md-outline .prefix ~ label {
        margin-left: 2rem;
      }
      .md-form.md-outline .prefix ~ .form-text {
        margin-left: 2.1rem;
      }
      .md-form.md-outline .character-counter {
        margin-top: -0.5rem;
      }
      .md-form.md-bg input[type="text"],
      .md-form.md-bg input[type="password"],
      .md-form.md-bg input[type="email"],
      .md-form.md-bg input[type="url"],
      .md-form.md-bg input[type="time"],
      .md-form.md-bg input[type="date"],
      .md-form.md-bg input[type="datetime-local"],
      .md-form.md-bg input[type="tel"],
      .md-form.md-bg input[type="number"],
      .md-form.md-bg input[type="search-md"],
      .md-form.md-bg input[type="search"],
      .md-form.md-bg textarea.md-textarea {
        box-sizing: border-box;
        padding: 10px 5px;
        background: #f5f5f5 no-repeat;
        background-image: linear-gradient(to bottom, #4285f4, #4285f4),
          linear-gradient(to bottom, #ced4da, #ced4da);
        background-position: 50% 100%, 50% 100%;
        background-size: 0 2px, 100% 1px;
        border: 0;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
      }
      .md-form.md-bg input[type="text"]:focus:not([readonly]),
      .md-form.md-bg input[type="password"]:focus:not([readonly]),
      .md-form.md-bg input[type="email"]:focus:not([readonly]),
      .md-form.md-bg input[type="url"]:focus:not([readonly]),
      .md-form.md-bg input[type="time"]:focus:not([readonly]),
      .md-form.md-bg input[type="date"]:focus:not([readonly]),
      .md-form.md-bg input[type="datetime-local"]:focus:not([readonly]),
      .md-form.md-bg input[type="tel"]:focus:not([readonly]),
      .md-form.md-bg input[type="number"]:focus:not([readonly]),
      .md-form.md-bg input[type="search-md"]:focus:not([readonly]),
      .md-form.md-bg input[type="search"]:focus:not([readonly]),
      .md-form.md-bg textarea.md-textarea:focus:not([readonly]) {
        border-bottom: none;
        box-shadow: none;
      }
      .md-form.md-bg input[type="text"]:focus,
      .md-form.md-bg input[type="password"]:focus,
      .md-form.md-bg input[type="email"]:focus,
      .md-form.md-bg input[type="url"]:focus,
      .md-form.md-bg input[type="time"]:focus,
      .md-form.md-bg input[type="date"]:focus,
      .md-form.md-bg input[type="datetime-local"]:focus,
      .md-form.md-bg input[type="tel"]:focus,
      .md-form.md-bg input[type="number"]:focus,
      .md-form.md-bg input[type="search-md"]:focus,
      .md-form.md-bg input[type="search"]:focus,
      .md-form.md-bg textarea.md-textarea:focus {
        background-color: #dcdcdc;
        background-size: 100% 2px, 100% 1px;
        outline: none;
      }
      .md-form.md-bg > input[type="date"]:not(.browser-default) + label {
        transform: translateY(-12px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form.md-bg
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form.md-bg > input[type="time"]:not(.browser-default) + label {
        font-size: 0.8rem;
        transform: translateY(-12px);
        transform-origin: 0 0;
      }
      .md-form.md-bg .form-control {
        padding: 1.1rem 0.7rem 0.4rem !important;
      }
      .md-form.md-bg label {
        top: 0;
        padding-left: 0.7rem;
        font-size: 1rem;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(13px);
        transform-origin: 0% 100%;
      }
      .md-form.md-bg label.active {
        padding-left: 0.75rem;
        font-weight: 500;
        transform: translateY(-3px) scale(0.8);
      }
      .md-form.md-bg.form-lg label {
        transform: translateY(16px);
      }
      .md-form.md-bg.form-lg label.active {
        transform: translateY(-4px) scale(0.8);
      }
      .md-form.md-bg.form-sm label {
        transform: translateY(11px);
      }
      .md-form.md-bg.form-sm label.active {
        transform: translateY(-2px) scale(0.8);
      }
      .md-form .form-control.is-invalid,
      .was-validated .md-form .form-control:invalid {
        padding-right: 0;
      }
      .md-form .form-control.is-valid,
      .was-validated .md-form .form-control:valid {
        padding-right: 0;
      }
      .needs-validation .md-form label {
        left: 0.3rem;
      }
      .custom-file-input:lang(es) ~ .custom-file-label::after {
        content: "Elegir";
      }
      .custom-file-input:lang(pl-pl) ~ .custom-file-label::after {
        content: "Wybierz";
      }
      .custom-file-input:lang(fr) ~ .custom-file-label::after {
        content: "Choisir";
      }
      .custom-file-input:lang(in) ~ .custom-file-label::after {
        content: "Pilih";
      }
      .custom-file-input:lang(zh) ~ .custom-file-label::after {
        content: "選擇";
      }
      .custom-file-input:lang(de) ~ .custom-file-label::after {
        content: "Wählen";
      }
      .custom-file-input:lang(ru) ~ .custom-file-label::after {
        content: "Выбрать";
      }
      .md-form > label {
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .md-form .form-control {
        box-sizing: border-box !important;
      }
      .md-form .input-prefix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: color 0.2s;
        color: rgba(0, 0, 0, 0.87);
        pointer-events: none;
      }
      .md-form .input-prefix.active {
        color: #4285f4;
      }
      .md-form.input-with-pre-icon label {
        left: 36px;
        right: initial;
      }
      .md-form.input-with-pre-icon .input-prefix {
        left: 16px;
        right: initial;
      }
      .md-form.input-with-pre-icon .form-control {
        padding-left: 2.7rem !important;
      }
      .md-form.input-with-post-icon .input-prefix {
        right: 16px;
        left: initial;
      }
      .md-form.input-with-post-icon .form-control {
        padding-right: 2.7rem !important;
      }
      .md-form.input-with-post-icon.input-with-pre-icon .input-prefix {
        right: 16px;
        left: initial;
      }
      .md-form.input-with-post-icon.input-with-pre-icon
        .input-prefix:first-of-type {
        left: 16px;
        right: initial;
      }
      .md-form.input-with-post-icon.input-with-pre-icon .form-control {
        padding-left: 2.5rem !important;
        padding-right: 2.5rem !important;
      }
`])));f.oneOfType([f.node,f.string]),f.string,f.string,f.bool,f.node,f.string,f.string,f.string,f.func,f.string,f.string,f.node,f.string,f.string,f.bool,f.func,f.func,f.any,f.string,f.string,f.oneOfType([f.func,f.string]),f.string,f.string,f.string,f.string;var m_;te.div(m_||(m_=B([""])));f.node,f.string,f.bool;f.bool,f.node,f.string,f.bool,f.string,f.func,f.func;var h_;te.ul(h_||(h_=B([`
  border: none;
`])));f.node,f.string,f.oneOfType([f.func,f.string]);var g_,v_;te.li(g_||(g_=B([`
  `,`
`])),fn);te($0)(v_||(v_=B([`
  `,`
`])),fn);f.bool,f.node,f.string,f.oneOf(["primary","secondary","success","danger","warning","info","white"]),f.bool,f.bool,f.oneOfType([f.func,f.string]);var so={pattern1:"img/overlays/01.png",pattern2:"img/overlays/02.png",pattern3:"img/overlays/03.png",pattern4:"img/overlays/04.png",pattern5:"img/overlays/05.png",pattern6:"img/overlays/06.png",pattern7:"img/overlays/07.png",pattern8:"img/overlays/08.png",pattern9:"img/overlays/09.png"},pJ=so.pattern1,mJ=so.pattern2,hJ=so.pattern3,gJ=so.pattern4,vJ=so.pattern5,bJ=so.pattern6,yJ=so.pattern7,xJ=so.pattern8,wJ=so.pattern9;te("span")(ic,fn,{position:"absolute",top:0,right:0,bottom:0,left:0,width:"100 %",height:"100 %",overflow:" hidden",backgroundAttachment:"fixed"},Yn({prop:"pattern",variants:{pattern1:{backgroundImage:"url("+pJ+")",backgroundAttachment:"fixed"},pattern2:{backgroundImage:"url("+mJ+")",backgroundAttachment:"fixed"},pattern3:{backgroundImage:"url("+hJ+")",backgroundAttachment:"fixed"},pattern4:{backgroundImage:"url("+gJ+")",backgroundAttachment:"fixed"},pattern5:{backgroundImage:"url("+vJ+")",backgroundAttachment:"fixed"},pattern6:{backgroundImage:"url("+bJ+")",backgroundAttachment:"fixed"},pattern7:{backgroundImage:"url("+yJ+")",backgroundAttachment:"fixed"},pattern8:{backgroundImage:"url("+xJ+")",backgroundAttachment:"fixed"},pattern9:{backgroundImage:"url("+wJ+")",backgroundAttachment:"fixed"}}}),Yn({prop:"overlay",variants:{blueLight:{backgroundColor:"rgba(33,150,243,0.3)",color:"#222222"},redLight:{backgroundColor:"rgba(244,67,54,0.3);",color:"#222222"},pinkLight:{backgroundColor:"rgba(233,30,99,0.3",color:"#222222"},yellowLight:{backgroundColor:"rgba(255,235,59,0.3)",color:"#222222"},orangeLight:{backgroundColor:"rgba(255,152,0,0.3)",color:"#222222"},purpleLight:{backgroundColor:"rgba(156,39,176,0.3)",color:"#222222"},brownLight:{backgroundColor:"rgba(33,150,243,0.3)",color:"#222222"},tealLight:{backgroundColor:"rgba(0,150,136,0.3)",color:"#222222"},cyanLight:{backgroundColor:"rgba(0,188,212,0.3)",color:"#222222"},greenLight:{backgroundColor:"rgba(76,175,80,0.3);",color:"#222222"},indigoLight:{backgroundColor:"rgba(63,81,181,0.3)",color:"#222222"},darkLight:{backgroundColor:"rgba(0,0,0,0.3)",color:"white"},blueStrong:{backgroundColor:"rgba(33,150,243,0.7)",color:"white"},redStrong:{backgroundColor:"rgba(244,67,54,0.7);",color:"white"},pinkStrong:{backgroundColor:"rgba(233,30,99,0.7",color:"white"},yellowStrong:{backgroundColor:"rgba(255,235,59,0.7)",color:"white"},orangeStrong:{backgroundColor:"rgba(255,152,0,0.7)",color:"white"},purpleStrong:{backgroundColor:"rgba(156,39,176,0.7)",color:"white"},brownStrong:{backgroundColor:"rgba(153,102,51,0.7)",color:"white"},tealStrong:{backgroundColor:"rgba(0,150,136,0.7)",color:"white"},cyanStrong:{backgroundColor:"rgba(0,188,212,0.7)",color:"white"},greenStrong:{backgroundColor:"rgba(76,175,80,0.7);",color:"white"},indigoStrong:{backgroundColor:"rgba(63,81,181,0.7)",color:"white"},darkStrong:{backgroundColor:"rgba(0,0,0,0.7)",color:"white"}}}));f.node,f.string,f.string,f.oneOfType([f.string,f.number]),f.string;var b_;te.div(b_||(b_=B([`
  padding: 0;

  .modal-dialog .modal-content {
    border: 0;
    border-radius: 0.125rem;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .modal-dialog .modal-content .modal-header {
    border-top-left-radius: 0.125rem;
    border-top-right-radius: 0.125rem;
  }
  .modal-dialog.cascading-modal {
    margin-top: 10%;
  }
  .modal-dialog.cascading-modal .close {
    color: #fff;
    text-shadow: none;
    outline: 0;
    opacity: 1;
  }
  .modal-dialog.cascading-modal .modal-header {
    padding: 1.5rem;
    margin: -2rem 1rem 1rem 1rem;
    text-align: center;
    border: none;
    border-radius: 0.125rem;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .modal-dialog.cascading-modal .modal-header .close {
    margin-right: 1rem;
  }
  .modal-dialog.cascading-modal .modal-header .title {
    width: 100%;
    margin-bottom: 0;
    font-size: 1.25rem;
  }
  .modal-dialog.cascading-modal .modal-header .title .fas,
  .modal-dialog.cascading-modal .modal-header .title .fab,
  .modal-dialog.cascading-modal .modal-header .title .far {
    margin-right: 9px;
  }
  .modal-dialog.cascading-modal .modal-header .social-buttons {
    margin-top: 1.5rem;
  }
  .modal-dialog.cascading-modal .modal-header .social-buttons a {
    font-size: 1rem;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs {
    display: flex;
    margin: -1.5rem 1rem 0 1rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs li {
    flex: 1;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a {
    text-align: center;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .tab-content {
    padding: 1.7rem 0 0 0;
  }
  .modal-dialog.cascading-modal .modal-body,
  .modal-dialog.cascading-modal .modal-footer {
    padding-right: 2rem;
    padding-left: 2rem;
    color: #616161;
  }
  .modal-dialog.cascading-modal .modal-body .additional-option,
  .modal-dialog.cascading-modal .modal-footer .additional-option {
    margin-top: 1rem;
    text-align: center;
  }
  .modal-dialog.cascading-modal.modal-avatar {
    margin-top: 6rem;
  }
  .modal-dialog.cascading-modal.modal-avatar .modal-header {
    margin: -6rem 0 -1rem;
    box-shadow: none;
  }
  .modal-dialog.cascading-modal.modal-avatar .modal-header img {
    width: 130px;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .modal-dialog.modal-notify .heading {
    padding: 0.3rem;
    margin: 0;
    font-size: 1.15rem;
    color: #fff;
  }
  .modal-dialog.modal-notify .modal-header {
    border: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .modal-dialog.modal-notify .close {
    opacity: 1;
  }
  .modal-dialog.modal-notify .modal-body {
    padding: 1.5rem;
    color: #616161;
  }
  .modal-dialog.modal-notify.modal-primary .modal-header {
    background-color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .fas,
  .modal-dialog.modal-notify.modal-primary .fab,
  .modal-dialog.modal-notify.modal-primary .far {
    color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .badge {
    background-color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .btn .fas,
  .modal-dialog.modal-notify.modal-primary .btn .fab,
  .modal-dialog.modal-notify.modal-primary .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas,
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far {
    color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-danger .modal-header {
    background-color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .fas,
  .modal-dialog.modal-notify.modal-danger .fab,
  .modal-dialog.modal-notify.modal-danger .far {
    color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .badge {
    background-color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .btn .fas,
  .modal-dialog.modal-notify.modal-danger .btn .fab,
  .modal-dialog.modal-notify.modal-danger .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas,
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far {
    color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-warning .modal-header {
    background-color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .fas,
  .modal-dialog.modal-notify.modal-warning .fab,
  .modal-dialog.modal-notify.modal-warning .far {
    color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .badge {
    background-color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .btn .fas,
  .modal-dialog.modal-notify.modal-warning .btn .fab,
  .modal-dialog.modal-notify.modal-warning .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas,
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far {
    color: #fb3;
  }
  .modal-dialog.modal-notify.modal-success .modal-header {
    background-color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .fas,
  .modal-dialog.modal-notify.modal-success .fab,
  .modal-dialog.modal-notify.modal-success .far {
    color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .badge {
    background-color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .btn .fas,
  .modal-dialog.modal-notify.modal-success .btn .fab,
  .modal-dialog.modal-notify.modal-success .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas,
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far {
    color: #00c851;
  }
  .modal-dialog.modal-notify.modal-info .modal-header {
    background-color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .fas,
  .modal-dialog.modal-notify.modal-info .fab,
  .modal-dialog.modal-notify.modal-info .far {
    color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .badge {
    background-color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .btn .fas,
  .modal-dialog.modal-notify.modal-info .btn .fab,
  .modal-dialog.modal-notify.modal-info .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas,
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far {
    color: #33b5e5;
  }
  @media (min-width: 768px) {
    .modal-dialog.modal-top {
      top: 0;
    }
    .modal-dialog.modal-left {
      left: 0;
    }
    .modal-dialog.modal-right {
      right: 0;
    }
    .modal-dialog.modal-bottom {
      bottom: 0;
    }
    .modal-dialog.modal-top-left {
      top: 10px;
      left: 10px;
    }
    .modal-dialog.modal-top-right {
      top: 10px;
      right: 10px;
    }
    .modal-dialog.modal-bottom-left {
      bottom: 10px;
      left: 10px;
    }
    .modal-dialog.modal-bottom-right {
      right: 10px;
      bottom: 10px;
    }
  }
  .modal.fade.top:not(.show) .modal-dialog {
    transform: translate3d(0, -25%, 0);
  }
  .modal.fade.left:not(.show) .modal-dialog {
    transform: translate3d(-25%, 0, 0);
  }
  .modal.fade.right:not(.show) .modal-dialog {
    transform: translate3d(25%, 0, 0);
  }
  .modal.fade.bottom:not(.show) .modal-dialog {
    transform: translate3d(0, 25%, 0);
  }
  @media (min-width: 992px) {
    .modal.modal-scrolling {
      position: relative;
    }
    .modal.modal-scrolling .modal-dialog {
      position: fixed;
      z-index: 1050;
    }
    .modal.modal-content-clickable {
      top: auto;
      bottom: auto;
    }
    .modal.modal-content-clickable .modal-dialog {
      position: fixed;
    }
    .modal-fluid {
      width: 100%;
      max-width: 100%;
    }
    .modal-fluid .modal-content {
      width: 100%;
    }
    .modal-frame {
      position: absolute;
      width: 100%;
      max-width: 100% !important;
      margin: 0 !important;
    }
    .modal-frame.modal-bottom {
      bottom: 0;
    }
    .modal-full-height {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      width: 400px;
      height: auto;
      min-height: 100%;
      margin: 0;
    }
    .modal-full-height.modal-top,
    .modal-full-height.modal-bottom {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
    }
    .modal-full-height.modal-top {
      bottom: auto;
    }
    .modal-full-height.modal-bottom {
      top: auto;
      min-height: 0;
    }
    .modal-full-height .modal-content {
      width: 100%;
    }
    .modal-full-height.modal-lg {
      width: 90%;
      max-width: 90%;
    }
  }
  @media (min-width: 992px) and (min-width: 992px) {
    .modal-full-height.modal-lg {
      width: 800px;
      max-width: 800px;
    }
  }
  @media (min-width: 992px) and (min-width: 1200px) {
    .modal-full-height.modal-lg {
      width: 1000px;
      max-width: 1000px;
    }
  }
  @media (min-width: 992px) {
    .modal-side {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 400px;
      margin: 0;
    }
  }
`])));f.string,f.bool,f.bool,f.string,f.number,f.bool,f.bool,f.node,f.string,f.string,f.bool,f.bool,f.bool,f.bool,f.bool,f.func,f.func,f.string,f.bool,f.bool,f.bool,f.string,f.string,f.object,f.number,f.bool,f.bool,f.string,f.string,f.func,f.bool,f.string,f.string,f.func,f.string,f.object,f.oneOfType([f.number,f.string]);var y_;te.h4(y_||(y_=B([`
  .close {
    height: 10px;
    width: 10px;
    margin-right: 10px;
    &:focus,
    &:hover {
      outline: none;
      border: none;
    }
  }
`])));f.node,f.string,f.string,f.oneOfType([f.func,f.string]),f.func;f.node,f.string;f.node,f.string;var x_;te.nav(x_||(x_=B([""])));f.string,f.string,f.bool,f.bool,f.oneOfType([f.bool,f.string]),f.string,f.bool,f.bool,f.number,f.string,f.oneOfType([f.func,f.string]),f.bool;var w_;te.ul(w_||(w_=B([""])));f.node,f.string,f.bool,f.bool,f.oneOfType([f.func,f.string]);var k_;te(_n)(k_||(k_=B([""])));f.string,f.string;var S_;te.li(S_||(S_=B([""])));f.bool,f.node,f.string,f.oneOfType([f.func,f.string]);f.bool,f.node,f.string,f.bool,f.bool,f.string;var __;te.button(__||(__=B([""])));f.node,f.string,f.string,f.bool,f.bool,f.oneOfType([f.func,f.string]),f.oneOf(["reset","submit","button"]);var C_,O_;te.div(C_||(C_=B([`
  width: 100%;
  background: `,`;
  border-radius: 20px;
  .progress-bar {
    `,`
    border-radius: 20px;
  }
`])),function(e){return e.colors==="primary"?"#3e98c728":e.colors==="secondary"?"#7356BF28":e.colors==="danger"?"#E1190028":e.colors==="warning"?"#66512C28":e.colors==="info"?"#17A2B828":e.colors==="success"?"#05944F28":"#00000028"},fn);te.div(O_||(O_=B([`
  display: block;
  width: 100%;
  .progress-text {
    display: flex;
    width: 100%;
    justify-content: center;
    color: `,`;
  }
`])),function(e){return e.colors==="primary"?"#3e98c7":e.colors==="secondary"?"#7356BF":e.colors==="danger"?"#E11900":e.colors==="warning"?"#66512C":e.colors==="info"?"#17A2B8":e.colors==="success"?"#05944F":"#000000"});f.string,f.node,f.string,f.oneOf(["primary","secondary","success","danger","warning","info","dark"]),f.number,f.number,f.number,f.number,f.object;var E_;te.div(E_||(E_=B([`
  &.popover {
    width: auto;
    background-color: white;
    color: #97999b;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    font-size: 0.83em;
    font-weight: normal;
    border: 1px rgb(0, 0, 0) solid;
    z-index: 10;
    max-width: 274px;
    text-align: start;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
  }

  &.show.popover {
    z-index: 999;
    opacity: 1;
    visibility: visible;
  }

  .popover-body {
    color: #6c6e71;
  }

  &.popover .popover_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 6px;
    color: transparent;
  }

  .popover[x-placement^='top'] {
    margin-bottom: 15px;
  }

  .popover[x-placement^='top'] .popover_arrow {
    border-width: 8px 8px 0 8px;
    border-color: #d6d6d6 transparent transparent transparent;
    bottom: -8px;
    margin-bottom: 0;
  }

  .popover[x-placement^='top'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -8px;
    bottom: 1.5px;
    border: solid;
    border-width: 8px 8px 0 8px;
    border-color: white transparent transparent transparent;
  }

  .popover[x-placement^='bottom'] {
    margin-top: 15px;
  }

  .popover[x-placement^='bottom'] .popover_arrow {
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #d6d6d6 transparent;
    top: -8px;
    margin-top: 0;
  }

  .popover[x-placement^='bottom'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -8px;
    top: 1.45px;
    border: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent white transparent;
  }

  .popover[x-placement^='right'] {
    margin-left: 15px;
  }

  .popover[x-placement^='right'] .popover_arrow {
    border-width: 8px 8px 8px 0;
    border-color: transparent #d6d6d6 transparent transparent;
    left: -8px;
    margin-left: 0;
  }

  .popover[x-placement^='right'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -8px;
    left: 1.45px;
    border: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent white transparent transparent;
  }

  .popover[x-placement^='left'] {
    margin-right: 15px;
  }

  .popover[x-placement^='left'] .popover_arrow {
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent #d6d6d6;
    right: -8px;
    margin-right: 0;
  }

  .popover[x-placement^='left'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -8px;
    right: 1.45px;
    border: solid;
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent white;
  }

  &.tooltip {
    width: auto;
    background-color: black;
    color: white;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    /* font-size: 0.83em; */
    font-weight: normal;
    border: 1px rgb(0, 0, 0) solid;
    /* z-index: 200000; */
    z-index: 15;
    /* max-width: initial; */
    max-width: 274px;
    text-align: start;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
  }

  .tooltip-inner {
    display: block;
  }

  &.show.tooltip {
    z-index: 999;

    opacity: 1;
    visibility: visible;
  }

  &.tooltip .popover_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 6px;
    color: transparent;
  }

  &.tooltip[x-placement^='top'],
  &.show[x-placement^='top']:not(.tooltip) {
    margin-bottom: 5px;
  }

  &.tooltip[x-placement^='top'] .popover_arrow {
    border-width: 6px 6px 0 6px;
    border-color: #131313 transparent transparent transparent;
    bottom: -6px;
    margin-bottom: 0;
  }

  &.tooltip[x-placement^='top'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -6px;
    bottom: 1.5px;
    border: solid;
    border-width: 6px 6px 0 6px;
    border-color: black transparent transparent transparent;
  }

  &.tooltip[x-placement^='bottom'],
  &.show[x-placement^='bottom']:not(.tooltip) {
    margin-top: 5px;
  }

  &.tooltip[x-placement^='bottom'] .popover_arrow {
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent #131313 transparent;
    top: -6px;
    margin-top: 0;
  }

  &.tooltip[x-placement^='bottom'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -6px;
    top: 1.45px;
    border: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent black transparent;
  }

  &.tooltip[x-placement^='right'],
  &.show[x-placement^='right']:not(.tooltip) {
    margin-left: 5px;
  }

  &.tooltip[x-placement^='right'] .popover_arrow {
    border-width: 6px 6px 6px 0;
    border-color: transparent #131313 transparent transparent;
    left: -6px;
    margin-left: 0;
  }

  &.tooltip[x-placement^='right'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -6px;
    left: 1.45px;
    border: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent black transparent transparent;
  }

  &.tooltip[x-placement^='left'],
  &.show[x-placement^='left']:not(.tooltip) {
    margin-right: 5px;
  }

  &.tooltip[x-placement^='left'] .popover_arrow {
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent #131313;
    right: -6px;
    margin-right: 0;
  }

  &.tooltip[x-placement^='left'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -6px;
    right: 1.45px;
    border: solid;
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent black;
  }
`])));f.node,f.bool,f.bool,f.bool,f.string,f.bool,f.bool,f.object,f.string,f.bool,f.bool,f.objectOf(f.string),f.string;f.string,f.arrayOf(f.shape({choosed:f.bool,icon:f.string,tooltip:f.string})),f.bool,f.string,f.oneOfType([f.bool,f.arrayOf(f.string)]),f.func,f.string,f.bool,f.bool,f.string,f.func,f.string;var T_;te.div(T_||(T_=B([""])));f.bool,f.bool,f.bool,f.bool,f.string,f.bool,f.bool,f.bool,f.oneOfType([f.func,f.string]),f.bool;var j_;te.select(j_||(j_=B([""])));f.array,f.string;var P_,N_,R_,kJ=te.div(P_||(P_=B([`
  background: `,`;
  color: `,`;
  height: 100%;
  width: `,`;
  min-width: `,`;
  text-align: left;
  transition: width, left, right, 0.3s;
  position: relative;
  z-index: 1009;

  &.toggled {
    width: `,`;
    min-width: `,`;
  }
`])),function(e){return e.backgroundColor},function(e){return e.textColor},function(e){var t=e.maxWidth;return t},function(e){var t=e.maxWidth;return t},function(e){var t=e.minWidth;return t},function(e){var t=e.minWidth;return t}),SJ=te.div(N_||(N_=B([`
  height: 100%;
  position: relative;
  z-index: 101;
`]))),_J=te.div(R_||(R_=B([`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 101;
`]))),CJ=["className","minWidth","maxWidth","children","toggled","textColor","backgroundColor","breakpoint"],Mc=k.createContext({toggled:!1,handleToggleSidebar:function(){},textColor:"",backgroundColor:"",breakpoint:0}),Lc=k.forwardRef(function(e,t){var n=e.className,r=e.minWidth,o=e.maxWidth,i=e.children,a=e.toggled,s=e.textColor,l=e.backgroundColor,c=e.breakpoint,u=Qi(e,CJ),d=function(y){g(Bv({},h,{toggled:!y}))},p=k.useState({toggled:a,handleToggleSidebar:d,textColor:s,backgroundColor:l,breakpoint:c}),h=p[0],g=p[1];k.useEffect(function(){d(!a)},[a]);var v=t||Y.createRef();return Y.createElement(Xi,{theme:ao},Y.createElement(Mc.Provider,{value:h},Y.createElement(kJ,Object.assign({},u,{ref:v,className:ee("pro-sidebar",n,{toggled:h.toggled}),textColor:s,backgroundColor:l,minWidth:r,maxWidth:o}),Y.createElement(SJ,null,Y.createElement(_J,null,i)))))});Lc.propTypes={className:f.string,children:f.any,textColor:f.string,backgroundColor:f.string,breakpoint:f.number,toggled:f.bool};Lc.defaultProps={textColor:"#ffffff",backgroundColor:ao.colors.dark900,breakpoint:720,toggled:!1,minWidth:"80px",maxWidth:"270px",children:null};Lc.displayName="Sidebar";var A_,OJ=te.div(A_||(A_=B([`
    flex-grow: 1;
    padding-top: 15px;
`]))),EJ=["children","className"],Oy=k.forwardRef(function(e,t){var n=e.children,r=e.className,o=Qi(e,EJ),i=k.useContext(Mc),a=i.handleToggleSidebar,s=i.breakpoint,l=k.useState(0),c=l[0],u=l[1],d=s||720;k.useEffect(function(){var h=function(){return u(window.innerWidth)};return window.addEventListener("resize",h),c<d&&a(!1),function(){window.removeEventListener("resize",h)}},[a,c,d]);var p=t||Y.createRef();return Y.createElement(Xi,{theme:ao},Y.createElement(OJ,Object.assign({},o,{ref:p,className:ee("pro-sidebar-content",r)}),n))});Oy.propTypes={className:f.string,children:f.any};var TJ=["children","className"],jJ=k.forwardRef(function(e,t){var n=e.children,r=e.className,o=Qi(e,TJ),i=t||Y.createRef();return Y.createElement(Xi,{theme:ao},Y.createElement("div",Object.assign({},o,{ref:i,className:ee("pro-sidebar-footer",r)}),n))});jJ.propTypes={className:f.string,children:f.any};var M_,PJ=te.div(M_||(M_=B([`
  border-bottom: 1px solid hsla(0, 0%, 67.8%, 0.2);

  .head-div {
    padding: 24px 30px;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 1px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;

    .icon-suffix {
      cursor: pointer;
    }

    &.toggled {
      justify-content: center;
      .head-text {
        display: none;
      }
      .icon-suffix {
        margin: 0px;
      }
    }
  }
`]))),NJ=["children","prefix","className"],Ey=k.forwardRef(function(e,t){var n=e.children,r=e.prefix,o=e.className,i=Qi(e,NJ),a=t||Y.createRef(),s=k.useContext(Mc),l=s.toggled,c=s.handleToggleSidebar;return Y.createElement(Xi,{theme:ao},Y.createElement(PJ,Object.assign({},i,{ref:a,className:ee(o)}),Y.createElement("div",{className:ee("head-div",{toggled:l})},Y.createElement("span",{className:"head-text"},n),r?Y.createElement("span",{className:"icon-suffix",onClick:function(){return c(l)}},r):null)))});Ey.propTypes={className:f.string,children:f.any,prefix:f.any};var L_,I_,RJ=te.nav(L_||(L_=B([`
    padding-top: 10px;
    padding-bottom: 10px;
`]))),AJ=te.ul(I_||(I_=B([`
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
        color: `,`;
        text-decoration:none;
    }
    .activeClicked {
      >li{
            background: `,`;
            color: `,`;
        }
    }
    
`])),function(e){return e.textColor},function(e){return e.textColor},function(e){return e.backgroundColor}),MJ=["children","className","popperArrow"],Ty=k.forwardRef(function(e,t){var n=e.children,r=e.className,o=e.popperArrow,i=Qi(e,MJ),a=t||Y.createRef(),s=k.useContext(Mc),l=s.textColor,c=s.backgroundColor;return Y.createElement(Xi,{theme:ao},Y.createElement(RJ,Object.assign({},i,{ref:a,className:ee("pro-menu",r)}),Y.createElement(AJ,{textColor:l,backgroundColor:c},Y.Children.map(n,function(u){return Y.cloneElement(u,{firstchild:1,popperarrow:o===!0?1:0})}))))});Ty.propTypes={className:f.string,children:f.any,popperArrow:f.bool};var D_,$_,LJ=te.div(D_||(D_=B([`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 2px 8px 15px;
  height: 45px;
  cursor: pointer;
  outline: none;

  .side-icon {
    margin-right: 10px;
    width: 30px;
  }
  &.active {
    background: white;
    color: black;
  }

  .item-content {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: `,`;
  }
  .suffix-wrapper {
    margin-right: 23px;
  }
  &.toggled {
    justify-content: center;
    .item-content {
      width: 0px;
      display: none;
    }
    .suffix-wrapper {
      opacity: 0;
      display: none;
    }
  }
`])),function(e){var t=e.fontSize;return t}),IJ=te.li($_||($_=B([`
  list-style: none;
  margin: 10px 15px;
  &.toggled {
    position: relative;
    margin-top: 0px;
    margin-bottom: 0px;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: pointer;
    }
  }
`]))),DJ=["children","className","icon","iconSize","iconType","iconClassName","textFontSize","active","suffix","firstChild","popperArrow"],Sn=k.forwardRef(function(e,t){var n=e.children,r=e.className,o=e.icon,i=e.iconSize,a=e.iconType,s=e.iconClassName,l=e.textFontSize,c=e.active,u=e.suffix,d=Qi(e,DJ),p=t||Y.createRef(),h=k.useContext(Mc),g=h.toggled;return Y.createElement(Xi,{theme:ao},Y.createElement(IJ,Object.assign({},d,{ref:p,className:ee(r,{active:c},{toggled:g})}),Y.createElement(LJ,{className:ee({active:c},{toggled:g}),tabIndex:0,fontSize:l,role:"button",toggled:g},o&&Y.createElement(Cy,{icon:o,size:i,className:ee(s,"side-icon",a&&"fa-"+a)}),Y.createElement("span",{className:"item-content"},n),u?Y.createElement("span",{className:"suffix-wrapper"},u):null)))});Sn.propTypes={children:f.any,className:f.string,icon:f.string,iconSize:f.string,iconClassName:f.string,iconType:f.string,active:f.bool,suffix:f.any,firstChild:f.number,popperArrow:f.number,textFontSize:f.string};Sn.defaultProps={iconSize:"md"};f.oneOfType([f.number,f.string]),f.func,f.func,f.number,f.number,f.number,f.bool,f.oneOf(["sm","lg"]),f.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),f.object,f.oneOf(["auto","on","off"]),f.oneOf(["top","bottom"]),f.func,f.object,f.object,f.string,f.string;f.string,f.string,f.bool,f.bool,f.number,f.number,f.string;var F_,z_,B_,H_,U_,W_,V_,$J=oy(F_||(F_=B([`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(360deg) }`]))),FJ=oy(z_||(z_=B([`
 0% { stroke: #4285f4; }
 25%{stroke: #de3e35;} 50%{stroke: #f7c223} 75%{stroke: #1b9a59}
 100% {  stroke: #4285f4}`]))),Y_=oy(B_||(B_=B([`
 0% { stroke-dashoffset: 187; }
  50%{stroke-dashoffset: 46.75;
transform: rotate(135deg)} 
 100% {   stroke-dashoffset: 187;
transform: rotate(450deg)}`])));te.svg(H_||(H_=B([`
  stroke-width: 5;
  animation-name: `,`;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
`])),$J);te.circle(U_||(U_=B([`
  stroke: `,`;

  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: `,`;
`])),function(e){return e.warning?"#FFE975":e.success?"#05944F":e.secondary?"#7356BF":e.dark?"#000000":e.danger?"#E11900":e.info?"#17A2B8":"#276EF1"},function(e){return e.multicolor?de(W_||(W_=B([`
          `," 1.4s ease-in-out infinite, ",` 5.6s ease-in-out infinite
        `])),Y_,FJ):de(V_||(V_=B([`
          `,` 1.4s ease-in-out infinite
        `])),Y_)});f.string,f.string,f.string,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool;var G_;te.div(G_||(G_=B([`
  .switch-container {
  }

  input[type="checkbox"].switch {
    position:absolute;
    opacity: 0;
  }

  input[type="checkbox"].switch + div {
    vertical-align: middle;
    width: 40px;
    height: 20px;
    border-radius: 100px;
    background-color: #333;
    cursor: pointer;
  }

  input[type="checkbox"].switch:checked + div {
    background-color: #80ff80;
  }

  input[type="checkbox"].switch + div > div {
    margin:0;
    width: 50%;
    height: 100%;
    background: #f2f2f2;
    border-radius: inherit;
    transition:margin 0.3s linear;
  }

  input[type="checkbox"].switch:checked + div > div {
    margin-left:auto;
  }
`])));f.bool,f.string;f.node,f.string,f.arrayOf(f.object),f.bool;var X_,q_,K_,Q_;te.div(X_||(X_=B([`
  position: relative;
  overflow: hidden;
  cursor: default;
  `,`
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-attachment: fixed;
  }
  img,
  video {
    position: relative;
    display: block;
  }
  .video.video-intro {
    top: 50%;
    left: 50%;
    z-index: -100;
    width: auto;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    transition: 1s opacity;
    transform: translateX(-50%) translateY(-50%);
  }
  border-radius: `,`;
  `,`
`])),function(e){return e.zoom?de(q_||(q_=B([`
          img,
          video {
            transition: all 0.2s linear;
          }
          &:hover img,
          &:hover video {
            transform: scale(1.1);
          }
        `]))):de(K_||(K_=B([""])))},function(e){return e.rounded?"0.25rem !important":"0"},function(e){return e.hover?de(Q_||(Q_=B([`
          .mask {
            opacity: 0;
            transition: all 0.4s ease-in-out;
            &:hover {
              opacity: 1;
            }
          }
        `]))):null});f.node,f.string,f.bool,f.bool,f.bool,f.string,f.string;var J_,Z_,eC;te.div(J_||(J_=B([`
  display: flex;
  position: relative;
  width: 100%;
  padding: 10px;
  `,`
  `,`

  .steps {
    display: table-cell;
    text-align: center;
    position: relative;
  }
`])),function(e){return e.direction==="vertical"&&de(Z_||(Z_=B([`
      .step-row-2 {
        height: 100%;
        flex-direction: row;
        .step-content {
          display: flex;
          -ms-flex-align: center;
          flex-direction: column;
          align-items: center;
          height: 100%;
          justify-content: space-between !important;
        }
      }
    `])))},function(e){return e.direction==="horizontal"&&de(eC||(eC=B([`
      flex-direction: column;
      .step-row-2 {
        flex-direction: column;
        margin-top: 22px;
        overflow-x: hidden;
        .step-content {
          overflow: auto;
          min-width: 500px;
          justify-content: space-between !important;
          display: flex !important;
          width: 100%;
        }
        &-webkit-scrollbar {
          height: 8px;
        }
        &-webkit-scrollbar-thumb {
          background: #ccc;
        }
        &-webkit-scrollbar-track {
        }
      }
    `])))});var tC,nC,rC;te.div(tC||(tC=B([`
  display: flex;
  `,`
  `,`
    .content-container {
    width: 100%;
    padding: 15px 10px;
  }
  .content-transition {
    width: 100%;
  }
  .fade-in {
    animation: fadeIn 0.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      margin-top: -20px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
`])),function(e){var t=e.direction;return t==="vertical"&&de(nC||(nC=B([`
      width: calc(100% - 150px);
    `])))},function(e){var t=e.direction;return t==="horizontal"&&de(rC||(rC=B([`
      width: 100%;
    `])))});k.createContext({});ao.colors.dark900;f.string.isRequired,f.number.isRequired,f.array.isRequired,f.number,f.string,f.func,f.bool,f.bool;var oC,iC,aC,sC,lC,cC;te.div(oC||(oC=B([`
  display: flex;
  `,`
  `,`
  `,`;
  `,`;
  `,`
`])),function(e){var t=e.direction,n=e.size,r=e.showIndex,o=e.showTitle;return t==="vertical"&&de(iC||(iC=B([`
      width: `,`px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      margin-bottom: `,`;
      span {
        margin: 2px 0;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 6px;
        height: 50px;
      }
    `])),n,!o&&!r&&"10px")},function(e){var t=e.direction;return t==="horizontal"&&de(aC||(aC=B([`
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      span {
        margin: 0 2px;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 50px;
        height: 6px;
      }
    `])))},function(e){var t=e.status;return t==="prev"&&de(sC||(sC=B([`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #666666;
      }
    `])))},function(e){var t=e.status;return t==="active"&&de(lC||(lC=B([`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `])))},function(e){var t=e.status;return t==="next"&&de(cC||(cC=B([`
      span:nth-child(1) {
        background-color: #cccccc;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `])))});var uC,dC,fC,pC,mC,hC,gC,vC,bC,yC,xC;te.div(uC||(uC=B([`
  display: flex;
  `,`
  `,`
  .step-title {
    display: flex;
    align-items: center;
    margin-left: 5px;
    padding: 10px 0;
    `,`;
    `,`;
    `,`
    .step-number {
      font-size: 30px;
      font-weight: 600;
    }
    .step-text {
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      margin-left: 10px;
      text-align: start;
      max-width: 150px;
      word-wrap: break-word;
    }
  }
  .step-indicators {
    display: flex;
    width: fit-content;
    `,`
    `,`
  }
  .default-node {
    cursor: pointer;
    width: `,`;
    height: `,`;
    color: #000;
    font-size: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    transition: width 0.3;
    align-items: center;
    * {
      position: relative;
    }
    `,`;
    `,`;
    `,`
  }
  .__react_component_tooltip {
    background: `,`;
    font-size: 10px;
    * {
      font-size: inherit;
    }
    padding: 2px 5.5px;
    border-radius: 4px;
    &:before,
    &:after {
      display: none !important;
    }
  }
`])),function(e){var t=e.direction;return t==="horizontal"&&de(dC||(dC=B([`
      flex-direction: column;
    `])))},function(e){var t=e.direction;return t==="vertical"&&de(fC||(fC=B([`
      min-width: 150px;
      max-width: 150px;
    `])))},function(e){var t=e.status;return t==="prev"&&de(pC||(pC=B([`
        opacity: 1;
      `])))},function(e){var t=e.status;return t==="active"&&de(mC||(mC=B([`
        opacity: 1;
      `])))},function(e){var t=e.status;return t==="next"&&de(hC||(hC=B([`
        opacity: 0.6;
      `])))},function(e){var t=e.direction;return t==="horizontal"&&de(gC||(gC=B([`
        flex-direction: row;
      `])))},function(e){var t=e.direction;return t==="vertical"&&de(vC||(vC=B([`
        flex-direction: column;
      `])))},function(e){var t=e.size;return t+"px"},function(e){var t=e.size;return t+"px"},function(e){var t=e.status;return t==="prev"&&de(bC||(bC=B([`
        background-color: #333333;
        color: #fff;
        border: 2px solid #cccccc;
      `])))},function(e){var t=e.status;return t==="active"&&de(yC||(yC=B([`
        background-color: #fff;
        border: 2px solid #333333;
        position: relative;
      `])))},function(e){var t=e.status;return t==="next"&&de(xC||(xC=B([`
        color: #fff;
        background-color: #9f9d9d;
      `])))},function(e){return e.tooltipBackground});Y.createElement("div",null,"Hello");f.string,f.string,f.bool,f.bool,f.bool,f.number,f.node;const Ic=k.createContext(),zJ=({children:e})=>{const[t,n]=k.useState(()=>{const o=localStorage.getItem("darkMode");return o?JSON.parse(o):!1});k.useEffect(()=>{t?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",JSON.stringify(t))},[t]);const r=()=>{n(!t)};return m.jsx(Ic.Provider,{value:{darkMode:t,toggleDarkMode:r},children:e})},BJ=({user:e})=>{const{logout:t}=k.useContext(Rn),{darkMode:n}=k.useContext(Ic),[r,o]=k.useState(!0),[i,a]=k.useState([]),[s,l]=k.useState(!1),[c,u]=k.useState("");Jo(),k.useEffect(()=>{(async()=>{try{const h=localStorage.getItem("token"),g=await be.get("https://api-msib-6-travel-management-03.educalab.id/projects",{headers:{Authorization:`Bearer ${h}`}});a(g.data)}catch(h){console.error("Failed to fetch projects:",h)}})()},[]);const d=async()=>{try{const p=localStorage.getItem("token"),h=await be.post("https://api-msib-6-travel-management-03.educalab.id/projects",{nama:c},{headers:{Authorization:`Bearer ${p}`}});console.log("Project added: ",h.data),u(""),l(!1),window.location.reload()}catch(p){console.error("Failed to add project:",p),alert(`Failed to add project: ${p.response?p.response.data:p.message}`)}};return m.jsxs("div",{className:`sidebar-container ${n?"dark-mode":"light-mode"}`,children:[m.jsxs(Lc,{textColor:n?"#ffffff":"#000000",backgroundColor:n?"#333333":"white",className:"sidebar",children:[m.jsxs(Ey,{prefix:m.jsx("i",{className:"fa fa-bars fa-large"}),children:[m.jsxs("div",{className:"logo-container",children:[m.jsx("img",{src:as,alt:"Logo",className:"logo"}),m.jsx("a",{className:"text-decoration-none",style:{color:n?"white":"black"},children:"Notic"})]}),m.jsxs("div",{className:"profile-info",children:[m.jsx("img",{src:e&&e.foto,alt:"Profile",className:"profile-picture"}),m.jsxs("div",{className:"profile-details",children:[m.jsx("p",{className:"username",children:e&&e.username}),m.jsx(t6,{placement:"bottom",overlay:m.jsx(Xj,{id:"tooltip-email",children:e&&e.email}),children:m.jsx("p",{className:"email",children:e&&(e.email.length>15?e.email.substring(0,15)+"...":e.email)})})]})]})]}),m.jsx(Oy,{className:"sidebar-content",children:m.jsxs(Ty,{children:[m.jsx(_n,{to:"/dashboarduser",className:({isActive:p})=>p?"activeClicked":"",children:m.jsx(Sn,{icon:"columns",style:{color:n?"white":"black"},children:"Dashboard"})}),m.jsx(_n,{to:"/settingan",className:({isActive:p})=>p?"activeClicked":"",children:m.jsx(Sn,{icon:"cog",style:{color:n?"white":"black"},children:"Settings"})}),m.jsxs("div",{children:[m.jsxs("div",{onClick:()=>o(!r),"aria-controls":"example-collapse-text","aria-expanded":r,style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[m.jsx(Sn,{icon:"folder-open",style:{color:n?"white":"black"},children:"Project"}),m.jsx(Do,{icon:r?mD:hD,style:{marginLeft:"auto",marginRight:"15px"}})]}),m.jsx(gT,{in:r,children:m.jsx("div",{className:"collapse-scroll",children:i.map(p=>m.jsx(_n,{to:`/project/${p.id_project}`,className:"dropdown-item",children:m.jsx(Sn,{icon:"circle",style:{paddingLeft:"30px",color:n?"white":"black"},children:p.nama})},p.id_project))})}),m.jsx("hr",{})]}),m.jsx(Sn,{className:"add-new-project",icon:"plus-square",style:{color:n?"white":"black"},onClick:()=>l(!0),children:"Add new project"}),m.jsx("div",{style:{color:"red",position:"absolute",bottom:"10px",width:"100%"},children:m.jsx(Sn,{onClick:t,icon:"sign-out-alt",children:"Logout"})})]})})]}),m.jsxs(pe,{show:s,onHide:()=>l(!1),children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsx(pe.Title,{children:"Add New Project"})}),m.jsx(pe.Body,{children:m.jsx(W,{children:m.jsxs(W.Group,{controlId:"formProjectName",children:[m.jsx(W.Label,{children:"Project Name"}),m.jsx(W.Control,{type:"text",placeholder:"Enter project name",value:c,onChange:p=>u(p.target.value)})]})})}),m.jsxs(pe.Footer,{children:[m.jsx(he,{variant:"secondary",onClick:()=>l(!1),children:"Close"}),m.jsx(he,{variant:"primary",onClick:d,children:"Add Project"})]})]})]})};function mN(e){return _b({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(e)}function hN(e){return _b({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(e)}const HJ=()=>{const{user:e,logout:t}=k.useContext(Rn),n=Jo(),{darkMode:r,toggleDarkMode:o}=k.useContext(Ic),[i,a]=k.useState(""),[s,l]=k.useState(""),[c,u]=k.useState(""),[d,p]=k.useState(""),[h,g]=k.useState(""),[v,x]=k.useState(""),[y,b]=k.useState(!1),[w,S]=k.useState(""),C=k.useRef(null);k.useEffect(()=>{e?a(e.profilePic||e.foto):n("/login")},[e,n]);const _=()=>localStorage.getItem("token"),O=async H=>{const V=H.target.files[0];if(V){const J=new FormData;J.append("foto",V);try{const M=await be.put("https://api-msib-6-travel-management-03.educalab.id/profile/foto",J,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${_()}`}});a(M.data.foto),I("Profile picture updated successfully!")}catch(M){console.error("Error uploading the image",M),I("Failed to upload image")}}},E=()=>{l(""),p(""),g(""),x("")},T=async()=>{try{await be.put("https://api-msib-6-travel-management-03.educalab.id/profile/username",{username:s},{headers:{Authorization:`Bearer ${_()}`}}),I("Username updated successfully!"),l("")}catch(H){console.error("Error updating username",H),I("Failed to update username")}},P=async()=>{if(h!==v){I("Passwords do not match!");return}try{await be.put("https://api-msib-6-travel-management-03.educalab.id/profile/password",{currentPassword:d,password:h,confirmPassword:v},{headers:{Authorization:`Bearer ${_()}`}}),I("Password changed successfully!"),p(""),g(""),x("")}catch(H){console.error("Error updating password",H),I("Failed to change password")}},A=async()=>{try{await be.put("https://api-msib-6-travel-management-03.educalab.id/profile/email",{email:c},{headers:{Authorization:`Bearer ${_()}`}}),I("Email updated successfully!"),u("")}catch(H){console.error("Error updating email",H),I("Failed to update email")}},I=H=>{S(H),b(!0)},X=()=>{t(),n("/login")};return m.jsxs("div",{className:"konten-setting settingan-page",children:[m.jsxs(Qt,{className:"mt-4",children:[m.jsx("h4",{className:"card-title fw-bold mb-4",children:"Settings"}),m.jsxs(Rt,{className:"mt-4",children:[m.jsxs(Le,{md:4,children:[m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting",children:[m.jsx(oe.Title,{className:"mb-4",children:"Profile Pic"}),m.jsxs("div",{className:"d-flex flex-column align-items-center",children:[m.jsx("div",{className:"profile-pic-wrapper position-relative",children:m.jsx("img",{src:i,alt:"Profile",className:"rounded-circle profile-pic mb-3"})}),m.jsxs(he,{variant:"primary",className:"mt-2 btn-primary",onClick:()=>C.current.click(),children:["Change Profile Pic",m.jsx("input",{type:"file",ref:C,onChange:O,accept:"image/*",className:"d-none"})]})]})]})}),m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting text-center",children:[m.jsx(oe.Title,{className:"mb-2",children:"Change Your Theme"}),m.jsxs("div",{className:"theme-switcher d-flex align-items-center justify-content-center",children:[m.jsx("span",{className:"me-2",children:"What do you prefer?"}),m.jsx(he,{onClick:o,variant:"outline-secondary",className:"ms-2 btn-secondary theme-button",children:r?m.jsx(hN,{}):m.jsx(mN,{})})]})]})}),m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting",children:[m.jsx(oe.Title,{className:"mb-2 mt-0 text-center",children:"Change Email"}),m.jsxs(W,{children:[m.jsxs(W.Group,{controlId:"formCurrentEmail",children:[m.jsx(W.Label,{children:"Current Email"}),m.jsx(W.Control,{type:"email",placeholder:"Enter current email",readOnly:!0,value:(e==null?void 0:e.email)||"",className:"form-control"})]}),m.jsxs(W.Group,{controlId:"formNewEmail",className:"mt-1",children:[m.jsx(W.Label,{children:"New Email"}),m.jsx(W.Control,{type:"email",placeholder:"Enter new email",value:c,onChange:H=>u(H.target.value),className:"form-control"})]}),m.jsxs("div",{className:"d-flex justify-content-end mt-4",children:[m.jsx(he,{variant:"secondary",onClick:E,className:"me-3",children:"Cancel"}),m.jsx(he,{variant:"danger",onClick:A,children:"Save Changes"})]})]})]})})]}),m.jsxs(Le,{md:8,children:[m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting",children:[m.jsx(oe.Title,{className:"mb-0",children:"Change Username"}),m.jsxs(W,{children:[m.jsxs(W.Group,{controlId:"formCurrentUsername",children:[m.jsx(W.Label,{children:"Current Username"}),m.jsx(W.Control,{type:"text",placeholder:"Enter current username",readOnly:!0,value:(e==null?void 0:e.username)||"",className:"form-control"})]}),m.jsxs(W.Group,{controlId:"formNewUsername",className:"mt-1",children:[m.jsx(W.Label,{children:"New Username"}),m.jsx(W.Control,{type:"text",placeholder:"Enter new username",value:s,onChange:H=>l(H.target.value),className:"form-control"})]}),m.jsxs("div",{className:"d-flex justify-content-end mt-4",children:[m.jsx(he,{variant:"secondary",onClick:E,className:"me-3",children:"Cancel"}),m.jsx(he,{variant:"danger",onClick:T,children:"Save Changes"})]})]})]})}),m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting",children:[m.jsx(oe.Title,{className:"mb-4",children:"Change Password"}),m.jsxs(W,{children:[m.jsxs(W.Group,{controlId:"formCurrentPassword",children:[m.jsx(W.Label,{children:"Current Password"}),m.jsx(W.Control,{type:"password",placeholder:"Enter current password",value:d,onChange:H=>p(H.target.value),className:"form-control"})]}),m.jsxs(W.Group,{controlId:"formNewPassword",className:"mt-3",children:[m.jsx(W.Label,{className:"mt-3",children:"New Password"}),m.jsx(W.Control,{type:"password",placeholder:"Enter new password",value:h,onChange:H=>g(H.target.value),className:"form-control"})]}),m.jsxs(W.Group,{controlId:"formConfirmPassword",className:"mt-3",children:[m.jsx(W.Label,{className:"mt-3",children:"Confirm New Password"}),m.jsx(W.Control,{type:"password",placeholder:"Confirm new password",value:v,onChange:H=>x(H.target.value),className:"form-control"})]}),m.jsxs("div",{className:"d-flex justify-content-end mt-5",children:[m.jsx(he,{variant:"secondary",onClick:E,className:"me-3",children:"Cancel"}),m.jsx(he,{variant:"danger",onClick:P,children:"Change Password"})]})]})]})})]})]})]}),m.jsxs(pe,{show:y,onHide:()=>b(!1),children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsx(pe.Title,{children:"Action Status"})}),m.jsx(pe.Body,{children:w}),m.jsxs(pe.Footer,{children:[m.jsx(he,{variant:"secondary",onClick:()=>b(!1),children:"Close"}),m.jsx(he,{variant:"primary",onClick:X,children:"Logout"})]})]})]})};cs.register(tc,nc,Pa,hr,Xb,qb,Yb);const UJ=()=>{const{user:e}=k.useContext(Rn),[t,n]=k.useState({totalUsers:0,newRegistrations:0,usersPerDay:[]}),[r,o]=k.useState(""),i=!e,a=i?"#fff":"#000";k.useEffect(()=>{(async()=>{try{const h=localStorage.getItem("token"),g=await be.get("https://api-msib-6-travel-management-03.educalab.id/users/dashboard/stats",{headers:{Authorization:`Bearer ${h}`}});console.log("Fetched data:",g.data),n(g.data)}catch(h){console.error("Failed to fetch dashboard stats:",h),o("Failed to fetch dashboard stats. Please try again later.")}})()},[]);const{totalUsers:s,newRegistrations:l,usersPerDay:c}=t,u={labels:c&&c.length>0?c.map(p=>p.date):[],datasets:[{label:"Total Users",data:c&&c.length>0?c.map(p=>p.count):[],fill:!0,backgroundColor:"rgba(108, 99, 255, 0.2)",borderColor:"#6c63ff",tension:.1}]},d={responsive:!0,plugins:{legend:{display:!1,labels:{color:a}},title:{display:!0,text:"Total Users Over Time",color:a}},scales:{x:{ticks:{color:a}},y:{ticks:{color:a}}}};return m.jsxs(Qt,{fluid:!0,className:`component-container p-3 ${i?"dark-mode":"light-mode"}`,children:[e?m.jsxs(m.Fragment,{children:[m.jsx(Rt,{className:"mb-3",children:m.jsx(Le,{children:m.jsx("h4",{className:"fw-bold",children:"Dashboard Admin"})})}),m.jsxs(Rt,{className:"mb-3",children:[m.jsx(Le,{children:m.jsx(oe,{className:"card-hover",children:m.jsxs(oe.Body,{className:"card-body-custom",children:[m.jsx("img",{src:"/users.png",alt:"total-users",className:"card-img"}),m.jsxs("div",{className:"card-content",children:[m.jsx(oe.Title,{className:"fw-bold",children:"Total Users"}),m.jsxs(oe.Text,{className:"card-text-custom",children:[m.jsx("h1",{className:"fw-bold",children:s}),m.jsx("p",{className:"ms-2",children:"Users"})]})]})]})})}),m.jsx(Le,{children:m.jsx(oe,{className:"card-hover",children:m.jsxs(oe.Body,{className:"card-body-custom",children:[m.jsx("img",{src:"/key.svg",alt:"registration",className:"card-img"}),m.jsxs("div",{className:"card-content",children:[m.jsx(oe.Title,{className:"fw-bold",children:"New Registration"}),m.jsxs(oe.Text,{className:"card-text-custom",children:[m.jsx("h1",{className:"fw-bold",children:l}),m.jsx("p",{className:"ms-2",children:"New registered user this month"})]})]})]})})})]}),m.jsx(Rt,{className:"mb-3",children:m.jsx(Le,{md:10,children:m.jsx(oe,{className:"card-hover card-grafik",children:m.jsxs(oe.Body,{className:"card-body-radius",children:[m.jsx(oe.Title,{className:"fw-bold",children:"Total Users"}),c&&c.length>0?m.jsx(E3,{data:u,options:d}):m.jsx("p",{children:"No user data available for the chart."})]})})})})]}):m.jsx("p",{children:"No user data found."}),r&&m.jsx("p",{className:"text-danger",children:r})]})},WJ=({user:e})=>{const{logout:t}=k.useContext(Rn),{darkMode:n}=k.useContext(Ic);return m.jsx("div",{className:`sidebar-container ${n?"dark-mode":"light-mode"}`,children:m.jsxs(Lc,{textColor:n?"#ffffff":"#000000",backgroundColor:n?"#333333":"white",className:"sidebar",children:[m.jsxs(Ey,{prefix:m.jsx("i",{className:"fa fa-bars fa-large"}),children:[m.jsxs("div",{className:"logo-container",children:[m.jsx("img",{src:as,alt:"Logo",className:"logo"}),m.jsx("a",{href:"/",className:"text-decoration-none",style:{color:n?"white":"black"},children:"Notic"})]}),m.jsxs("div",{className:"profile-info",children:[m.jsx("img",{src:e&&e.foto,alt:"Profile",className:"profile-picture"}),m.jsxs("div",{className:"profile-details",children:[m.jsx("p",{className:"username",children:e&&e.username}),m.jsx("p",{className:"email",children:e&&e.email})]})]})]}),m.jsx(Oy,{className:"sidebar-content",children:m.jsxs(Ty,{children:[m.jsx(_n,{to:"/dashboardadmin",className:({isActive:r})=>r?"activeClicked":"",children:m.jsx(Sn,{icon:"columns",style:{color:n?"white":"black"},children:"Dashboard"})}),m.jsx(_n,{to:"/userlist",className:({isActive:r})=>r?"activeClicked":"",children:m.jsx(Sn,{icon:"user",style:{color:n?"white":"black"},children:"User List"})}),m.jsx(_n,{to:"/settinganadmin",className:({isActive:r})=>r?"activeClicked":"",children:m.jsx(Sn,{icon:"cog",style:{color:n?"white":"black"},children:"Settings"})}),m.jsx("div",{style:{color:"red",position:"absolute",bottom:"10px",width:"100%"},children:m.jsx(Sn,{onClick:t,icon:"sign-out-alt",children:"Logout"})})]})})]})})};class VJ extends k.Component{constructor(){super(...arguments);K(this,"state",{users:[],error:null,showModal:!1,userToDelete:null});K(this,"fetchUsers",async()=>{var n,r;try{const o=localStorage.getItem("token"),i=await be.get("https://api-msib-6-travel-management-03.educalab.id/users",{headers:{Authorization:`Bearer ${o}`}});this.setState({users:i.data})}catch(o){this.setState({error:((r=(n=o.response)==null?void 0:n.data)==null?void 0:r.error)||"Failed to fetch users"})}});K(this,"handleShowModal",n=>{this.setState({showModal:!0,userToDelete:n})});K(this,"handleCloseModal",()=>{this.setState({showModal:!1,userToDelete:null})});K(this,"handleConfirmDelete",async()=>{var r,o;const{userToDelete:n}=this.state;if(n)try{const i=localStorage.getItem("token");await be.delete(`https://api-msib-6-travel-management-03.educalab.id/users/${n.id_user}`,{headers:{Authorization:`Bearer ${i}`}}),this.setState({users:this.state.users.filter(a=>a.id_user!==n.id_user),showModal:!1,userToDelete:null})}catch(i){this.setState({error:((o=(r=i.response)==null?void 0:r.data)==null?void 0:o.error)||"Failed to delete user"})}})}componentDidMount(){this.fetchUsers()}render(){const{users:n,error:r,showModal:o,userToDelete:i}=this.state;return m.jsxs(Qt,{className:"mt-5",children:[m.jsx("h2",{className:"mb-4",children:"User List"}),r&&m.jsx("p",{className:"text-danger",children:r}),m.jsxs(n6,{striped:!0,bordered:!0,hover:!0,className:"table",children:[m.jsx("thead",{className:"thead-dark",children:m.jsxs("tr",{children:[m.jsx("th",{className:"text-center",children:"No"}),m.jsx("th",{children:"Username"}),m.jsx("th",{children:"Email"}),m.jsx("th",{className:"text-center",children:"Action"})]})}),m.jsx("tbody",{children:n.map((a,s)=>m.jsxs("tr",{children:[m.jsx("td",{className:"text-center",children:s+1}),m.jsx("td",{children:a.username}),m.jsx("td",{children:a.email}),m.jsx("td",{className:"text-center",children:m.jsxs(he,{variant:"danger",onClick:()=>this.handleShowModal(a),className:"delete-button",children:[m.jsx("i",{className:"fas fa-trash-alt"})," Delete"]})})]},a.id_user))})]}),m.jsxs(pe,{show:o,onHide:this.handleCloseModal,centered:!0,size:"sm",children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsx(pe.Title,{children:"Confirm Delete"})}),m.jsxs(pe.Body,{children:['Are you sure you want to delete user "',i==null?void 0:i.username,'"?']}),m.jsxs(pe.Footer,{children:[m.jsx(he,{variant:"secondary",onClick:this.handleCloseModal,children:"Cancel"}),m.jsx(he,{variant:"danger",onClick:this.handleConfirmDelete,children:"Delete"})]})]})]})}}const YJ=()=>{const{user:e,logout:t}=k.useContext(Rn),n=Jo(),{darkMode:r,toggleDarkMode:o}=k.useContext(Ic),[i,a]=k.useState(""),[s,l]=k.useState(""),[c,u]=k.useState(""),[d,p]=k.useState(""),[h,g]=k.useState(""),[v,x]=k.useState(""),[y,b]=k.useState(!1),[w,S]=k.useState(""),C=k.useRef(null);k.useEffect(()=>{e?a(e.profilePic||e.foto):n("/login")},[e,n]);const _=()=>localStorage.getItem("token"),O=async H=>{const V=H.target.files[0];if(V){const J=new FormData;J.append("foto",V);try{const M=await be.put("https://api-msib-6-travel-management-03.educalab.id/profile/foto",J,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${_()}`}});a(M.data.foto),I("Profile picture updated successfully!")}catch(M){console.error("Error uploading the image",M),I("Failed to upload image")}}},E=()=>{l(""),p(""),g(""),x("")},T=async()=>{try{await be.put("https://api-msib-6-travel-management-03.educalab.id/profile/username",{username:s},{headers:{Authorization:`Bearer ${_()}`}}),I("Username updated successfully!"),l("")}catch(H){console.error("Error updating username",H),I("Failed to update username")}},P=async()=>{if(h!==v){I("Passwords do not match!");return}try{await be.put("https://api-msib-6-travel-management-03.educalab.id/profile/password",{currentPassword:d,password:h,confirmPassword:v},{headers:{Authorization:`Bearer ${_()}`}}),I("Password changed successfully!"),p(""),g(""),x("")}catch(H){console.error("Error updating password",H),I("Failed to change password")}},A=async()=>{try{await be.put("https://api-msib-6-travel-management-03.educalab.id/profile/email",{email:c},{headers:{Authorization:`Bearer ${_()}`}}),I("Email updated successfully!"),u("")}catch(H){console.error("Error updating email",H),I("Failed to update email")}},I=H=>{S(H),b(!0)},X=()=>{t(),n("/login")};return m.jsxs("div",{className:"konten-setting SettinganAdmin-page",children:[m.jsxs(Qt,{className:"mt-4",children:[m.jsx("h4",{className:"card-title fw-bold mb-4",children:"Settings"}),m.jsxs(Rt,{className:"mt-4",children:[m.jsxs(Le,{md:4,children:[m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting",children:[m.jsx(oe.Title,{className:"mb-4",children:"Profile Pic"}),m.jsxs("div",{className:"d-flex flex-column align-items-center",children:[m.jsx("div",{className:"profile-pic-wrapper position-relative",children:m.jsx("img",{src:i,alt:"Profile",className:"rounded-circle profile-pic mb-3"})}),m.jsxs(he,{variant:"primary",className:"mt-2 btn-primary",onClick:()=>C.current.click(),children:["Change Profile Pic",m.jsx("input",{type:"file",ref:C,onChange:O,accept:"image/*",className:"d-none"})]})]})]})}),m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting text-center",children:[m.jsx(oe.Title,{className:"mb-2",children:"Change Your Theme"}),m.jsxs("div",{className:"theme-switcher d-flex align-items-center justify-content-center",children:[m.jsx("span",{className:"me-2",children:"What do you prefer?"}),m.jsx(he,{onClick:o,variant:"outline-secondary",className:"ms-2 btn-secondary theme-button",children:r?m.jsx(hN,{}):m.jsx(mN,{})})]})]})}),m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting",children:[m.jsx(oe.Title,{className:"mb-2 mt-0 text-center",children:"Change Email"}),m.jsxs(W,{children:[m.jsxs(W.Group,{controlId:"formCurrentEmail",children:[m.jsx(W.Label,{children:"Current Email"}),m.jsx(W.Control,{type:"email",placeholder:"Enter current email",readOnly:!0,value:(e==null?void 0:e.email)||"",className:"form-control"})]}),m.jsxs(W.Group,{controlId:"formNewEmail",className:"mt-1",children:[m.jsx(W.Label,{children:"New Email"}),m.jsx(W.Control,{type:"email",placeholder:"Enter new email",value:c,onChange:H=>u(H.target.value),className:"form-control"})]}),m.jsxs("div",{className:"d-flex justify-content-end mt-4",children:[m.jsx(he,{variant:"secondary",onClick:E,className:"me-3",children:"Cancel"}),m.jsx(he,{variant:"danger",onClick:A,children:"Save Changes"})]})]})]})})]}),m.jsxs(Le,{md:8,children:[m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting",children:[m.jsx(oe.Title,{className:"mb-0",children:"Change Username"}),m.jsxs(W,{children:[m.jsxs(W.Group,{controlId:"formCurrentUsername",children:[m.jsx(W.Label,{children:"Current Username"}),m.jsx(W.Control,{type:"text",placeholder:"Enter current username",readOnly:!0,value:(e==null?void 0:e.username)||"",className:"form-control"})]}),m.jsxs(W.Group,{controlId:"formNewUsername",className:"mt-1",children:[m.jsx(W.Label,{children:"New Username"}),m.jsx(W.Control,{type:"text",placeholder:"Enter new username",value:s,onChange:H=>l(H.target.value),className:"form-control"})]}),m.jsxs("div",{className:"d-flex justify-content-end mt-4",children:[m.jsx(he,{variant:"secondary",onClick:E,className:"me-3",children:"Cancel"}),m.jsx(he,{variant:"danger",onClick:T,children:"Save Changes"})]})]})]})}),m.jsx(oe,{className:"card-setting mb-4",children:m.jsxs(oe.Body,{className:"card-body-setting",children:[m.jsx(oe.Title,{className:"mb-4",children:"Change Password"}),m.jsxs(W,{children:[m.jsxs(W.Group,{controlId:"formCurrentPassword",children:[m.jsx(W.Label,{children:"Current Password"}),m.jsx(W.Control,{type:"password",placeholder:"Enter current password",value:d,onChange:H=>p(H.target.value),className:"form-control"})]}),m.jsxs(W.Group,{controlId:"formNewPassword",className:"mt-3",children:[m.jsx(W.Label,{className:"mt-3",children:"New Password"}),m.jsx(W.Control,{type:"password",placeholder:"Enter new password",value:h,onChange:H=>g(H.target.value),className:"form-control"})]}),m.jsxs(W.Group,{controlId:"formConfirmPassword",className:"mt-3",children:[m.jsx(W.Label,{className:"mt-3",children:"Confirm New Password"}),m.jsx(W.Control,{type:"password",placeholder:"Confirm new password",value:v,onChange:H=>x(H.target.value),className:"form-control"})]}),m.jsxs("div",{className:"d-flex justify-content-end mt-5",children:[m.jsx(he,{variant:"secondary",onClick:E,className:"me-3",children:"Cancel"}),m.jsx(he,{variant:"danger",onClick:P,children:"Change Password"})]})]})]})})]})]})]}),m.jsxs(pe,{show:y,onHide:()=>b(!1),children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsx(pe.Title,{children:"Action Status"})}),m.jsx(pe.Body,{children:w}),m.jsxs(pe.Footer,{children:[m.jsx(he,{variant:"secondary",onClick:()=>b(!1),children:"Close"}),m.jsx(he,{variant:"primary",onClick:X,children:"Logout"})]})]})]})},GJ=({updateSidebarProjectName:e})=>{const[t,n]=k.useState([]),{id_project:r}=yA(),[o,i]=k.useState(""),[a,s]=k.useState([]),[l,c]=k.useState(!1),[u,d]=k.useState(!1),[p,h]=k.useState(null),[g,v]=k.useState("add"),[x,y]=k.useState(!1),[b,w]=k.useState(!1),[S,C]=k.useState(!1),[_,O]=k.useState(null),E=Jo();k.useEffect(()=>{const M=async()=>{try{const U=localStorage.getItem("token"),Q=await be.get(`https://api-msib-6-travel-management-03.educalab.id/projects/${r}`,{headers:{Authorization:`Bearer ${U}`}});i(Q.data.nama)}catch(U){console.error("Error fetching project details:",U)}},N=async()=>{try{const U=localStorage.getItem("token"),Z=(await be.get(`https://api-msib-6-travel-management-03.educalab.id/${r}/tasks`,{headers:{Authorization:`Bearer ${U}`}})).data;s(Z),n(Z.filter($=>$.status==="finished"))}catch(U){console.error("Error fetching tasks:",U)}};M(),N()},[r]);const T=M=>{const N=a.find(U=>U.id_task===M);O(N),C(!0)},P=async()=>{if(_)try{const M=localStorage.getItem("token");await be.delete(`https://api-msib-6-travel-management-03.educalab.id/${r}/tasks/${_.id_task}`,{headers:{Authorization:`Bearer ${M}`}}),s(a.filter(N=>N.id_task!==_.id_task)),n(t.filter(N=>N.id_task!==_.id_task)),C(!1),O(null)}catch(M){console.error("Error deleting task:",M)}},A=M=>{const N=a.find(U=>U.id_task===M);h(N),v("edit"),c(!0)},I=async()=>{try{const M=localStorage.getItem("token");await be.delete(`https://api-msib-6-travel-management-03.educalab.id/projects/${r}`,{headers:{Authorization:`Bearer ${M}`}}),w(!1),E("/dashboarduser"),window.location.reload()}catch(M){console.error("Error deleting project:",M)}w(!1)},X=async(M,N)=>{const U=N?"finished":"Not Started";try{const Q=localStorage.getItem("token");await be.put(`https://api-msib-6-travel-management-03.educalab.id/tasks/${M}/status`,{status:U},{headers:{Authorization:`Bearer ${Q}`}});const Z=a.map(F=>F.id_task===M?{...F,status:U}:(window.location.reload(),F)),$=Z.find(F=>F.id_task===M);$&&n(N?[...t,$]:t.filter(F=>F.id_task!==M)),s(Z)}catch(Q){console.error("Error updating task status:",Q)}},H=async()=>{try{const M=localStorage.getItem("token");if(!p.name.trim()){alert("Task name cannot be empty");return}if(!p.deskripsi.trim()){alert("Task description cannot be empty");return}if(p.tag||(p.tag=""),p.date||(p.date=new Date().toISOString().split("T")[0]),g==="add"){const N=await be.post(`https://api-msib-6-travel-management-03.educalab.id/${r}/tasks`,p,{headers:{Authorization:`Bearer ${M}`}});s([...a,N.data]),window.location.reload()}else g==="edit"&&(await be.put(`https://api-msib-6-travel-management-03.educalab.id/${r}/tasks/${p.id_task}`,p,{headers:{Authorization:`Bearer ${M}`}}),s(a.map(N=>N.id_task===p.id_task?p:N)),n(t.map(N=>N.id_task===p.id_task?p:N)));c(!1),window.location.reload()}catch(M){console.error("Error saving task:",M)}},V=M=>{const N=a.find(U=>U.id_task===M);h(N),d(!0)},J=async()=>{try{const M=localStorage.getItem("token");await be.put(`https://api-msib-6-travel-management-03.educalab.id/projects/${r}`,{nama:o},{headers:{Authorization:`Bearer ${M}`}}),y(!1),window.location.reload()}catch(M){console.error("Error updating project name:",M)}};return m.jsx("div",{className:"container-fluid mt-5 project-container",children:m.jsx("div",{className:"row",children:m.jsxs("div",{className:"col-md-12",children:[m.jsxs("h2",{className:"d-flex align-items-center fw-bold",children:["Project: ",o,m.jsx(Do,{icon:lD,className:"ms-2 pencil-icon",onClick:()=>y(!0),style:{cursor:"pointer",fontSize:"15px"}})]}),m.jsx("div",{className:"d-flex justify-content-end mb-3",children:m.jsxs("div",{children:[m.jsx("button",{className:"btn btn-danger me-2",onClick:()=>w(!0),children:"Delete Project"}),m.jsx("button",{className:"btn btn-new-task",onClick:()=>{c(!0),v("add"),h({id_project:r,name:"",deskripsi:"",tags:[],status:"Not Started",date:"",priority:"LOW"})},children:"+ Add New Task"})]})}),m.jsxs("h5",{children:["Current Projects (",a.filter(M=>M.status!=="finished").length,")"]}),m.jsx(wC,{tasks:a.filter(M=>M.status!=="finished"),handleEdit:A,handleDelete:P,confirmDeleteTask:T,handleCheckboxChange:X,handleCommentClick:V}),m.jsxs("h5",{className:"mt-5",children:["Completed Projects (",t.length,")"]}),m.jsx(wC,{tasks:t,handleEdit:A,handleDelete:P,confirmDeleteTask:T,handleCheckboxChange:X,handleCommentClick:V}),m.jsxs(pe,{show:l,onHide:()=>c(!1),children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsx(pe.Title,{children:g==="add"?"Add New Task":"Edit Task"})}),m.jsx(pe.Body,{children:m.jsxs(W,{children:[m.jsxs(W.Group,{className:"mb-3",children:[m.jsx(W.Label,{children:"Task Name"}),m.jsx(W.Control,{type:"text",value:(p==null?void 0:p.name)||"",onChange:M=>h({...p,name:M.target.value})})]}),m.jsxs(W.Group,{className:"mb-3",children:[m.jsx(W.Label,{children:"Task Description"}),m.jsx(W.Control,{as:"textarea",rows:3,value:(p==null?void 0:p.deskripsi)||"",onChange:M=>h({...p,deskripsi:M.target.value})})]}),m.jsxs(W.Group,{className:"mb-3",children:[m.jsx(W.Label,{children:"Task Tags"}),m.jsx(W.Control,{type:"text",value:(p==null?void 0:p.tag)||"",onChange:M=>h({...p,tag:M.target.value})})]}),m.jsxs(W.Group,{className:"mb-3",children:[m.jsx(W.Label,{children:"Due Date"}),m.jsx(W.Control,{type:"date",value:(p==null?void 0:p.date)||"",onChange:M=>h({...p,date:M.target.value})})]}),m.jsxs(W.Group,{className:"mb-3",children:[m.jsx(W.Label,{children:"Priority"}),m.jsxs(W.Control,{as:"select",value:(p==null?void 0:p.priority)||"LOW",onChange:M=>h({...p,priority:M.target.value}),children:[m.jsx("option",{value:"LOW",children:"Low"}),m.jsx("option",{value:"MEDIUM",children:"Medium"}),m.jsx("option",{value:"HIGH",children:"High"})]})]}),m.jsxs(W.Group,{className:"mb-3",children:[m.jsx(W.Label,{children:"Status"}),m.jsxs(W.Control,{as:"select",value:(p==null?void 0:p.status)||"Not Started",onChange:M=>h({...p,status:M.target.value}),children:[m.jsx("option",{value:"Not Started",children:"Not Started"}),m.jsx("option",{value:"On Process",children:"On Process"}),m.jsx("option",{value:"Complete",children:"Complete"}),m.jsx("option",{value:"finished",children:"Finished"})]})]})]})}),m.jsxs(pe.Footer,{children:[m.jsx(he,{variant:"secondary",onClick:()=>c(!1),children:"Close"}),m.jsx(he,{variant:"primary",onClick:H,children:"Save"})]})]}),m.jsxs(pe,{show:u,onHide:()=>d(!1),children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsx(pe.Title,{children:"Task Description"})}),m.jsx(pe.Body,{children:m.jsx("p",{children:p==null?void 0:p.deskripsi})})]}),m.jsxs(pe,{show:x,onHide:()=>y(!1),children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsx(pe.Title,{children:"Edit Project Name"})}),m.jsx(pe.Body,{children:m.jsx(W,{children:m.jsxs(W.Group,{className:"mb-3",children:[m.jsx(W.Label,{children:"Project Name"}),m.jsx(W.Control,{type:"text",value:o,onChange:M=>i(M.target.value)})]})})}),m.jsxs(pe.Footer,{children:[m.jsx(he,{variant:"secondary",onClick:()=>y(!1),children:"Close"}),m.jsx(he,{variant:"primary",onClick:J,children:"Save"})]})]}),m.jsxs(pe,{show:b,onHide:()=>w(!1),children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsx(pe.Title,{children:"Confirm Project Deletion"})}),m.jsx(pe.Body,{children:m.jsx("p",{children:"Are you sure you want to delete this project?"})}),m.jsxs(pe.Footer,{children:[m.jsx(he,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),m.jsx(he,{variant:"danger",onClick:I,children:"Delete"})]})]}),m.jsxs(pe,{show:S,onHide:()=>C(!1),children:[m.jsx(pe.Header,{closeButton:!0,children:m.jsx(pe.Title,{children:"Delete Task"})}),m.jsx(pe.Body,{children:"Are you sure you want to delete this task?"}),m.jsxs(pe.Footer,{children:[m.jsx(he,{variant:"secondary",onClick:()=>C(!1),children:"Close"}),m.jsx(he,{variant:"danger",onClick:P,children:"Delete"})]})]})]})})})},wC=({tasks:e,handleEdit:t,handleDelete:n,confirmDeleteTask:r,handleCheckboxChange:o,handleCommentClick:i})=>{const a=c=>{switch(c){case"low":return"priority-low";case"medium":return"priority-medium";case"high":return"priority-high";default:return""}},s=c=>c.split("T")[0],l=c=>{switch(c){case"not started":return"status-not-started";case"on process":return"status-on-process";case"complete":return"status-complete";case"finished":return"status-finished";default:return""}};return m.jsxs("table",{className:"table table-bordered ",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Task Name"}),m.jsx("th",{className:"text-center",children:"Tag"}),m.jsx("th",{className:"text-center",children:"Priority"}),m.jsx("th",{className:"text-center",children:"Due Date"}),m.jsx("th",{className:"text-center",children:"Status"}),m.jsx("th",{className:"text-center",children:"Action"})]})}),m.jsx("tbody",{children:e.map(c=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsxs("div",{className:"d-flex align-items-center",children:[c.name,m.jsx(he,{variant:"info",className:"btn-sm me-2 ms-auto btn-comment ",onClick:()=>i(c.id_task),children:m.jsx(Do,{icon:fD})})]})}),m.jsx("td",{className:"text-center",children:m.jsx("span",{className:"tag-tag",children:c.tag})}),m.jsx("td",{className:"prioritas text-center text-uppercase",children:m.jsx("span",{className:a(c.priority),children:c.priority})}),m.jsx("td",{className:"text-center",children:s(c.date)}),m.jsx("td",{className:`text-center ${l(c.status)}`,children:c.status}),m.jsxs("td",{className:"text-center",children:[m.jsx(he,{variant:"warning",className:"btn-sm me-2 btn-edit",onClick:()=>t(c.id_task),children:m.jsx(Do,{icon:uD})}),m.jsx(he,{variant:"danger",className:"btn-sm btn-sampah",onClick:()=>r(c.id_task),children:m.jsx(Do,{icon:dD})})]})]},c.id_task))})]})};function XJ(){return m.jsx(_6,{children:m.jsx(zJ,{children:m.jsx(HA,{children:m.jsxs(MA,{children:[m.jsxs(Ut,{path:"/",element:m.jsx(qJ,{}),children:[m.jsx(Ut,{index:!0,element:m.jsx(s6,{})}),m.jsx(Ut,{path:"aboutus",element:m.jsx(m6,{})}),m.jsx(Ut,{path:"contactus",element:m.jsx(g6,{})})]}),m.jsx(Ut,{path:"login",element:m.jsx(KJ,{})}),m.jsx(Ut,{path:"register",element:m.jsx($6,{})}),m.jsx(Ut,{path:"forgot-password",element:m.jsx(F6,{})}),m.jsx(Ut,{path:"/project/:id_project",element:m.jsx(gh,{component:GJ})}),m.jsx(Ut,{path:"/dashboarduser",element:m.jsx(gh,{component:yH})}),m.jsx(Ut,{path:"/settingan",element:m.jsx(gh,{component:HJ})}),m.jsx(Ut,{path:"/dashboardadmin",element:m.jsx(vh,{component:UJ})}),m.jsx(Ut,{path:"/userlist",element:m.jsx(vh,{component:VJ})}),m.jsx(Ut,{path:"/settinganadmin",element:m.jsx(vh,{component:YJ})})]})})})})}const qJ=()=>{const{user:e,logout:t}=Y.useContext(Rn);return m.jsx(vD,{user:e,onLogout:t})},KJ=()=>{const{login:e}=Y.useContext(Rn);return m.jsx(C6,{onLogin:e})},gh=({component:e})=>{const{user:t}=Y.useContext(Rn);return t?m.jsxs("div",{className:"protected-route-container d-flex",children:[m.jsx(BJ,{user:t}),m.jsx(e,{user:t})]}):m.jsx(WE,{to:"/login"})},vh=({component:e})=>{const{user:t}=Y.useContext(Rn);return t?m.jsxs("div",{className:"protected-route-container d-flex",children:[m.jsx(WJ,{user:t}),m.jsx(e,{user:t})]}):m.jsx(WE,{to:"/login"})};bh.createRoot(document.getElementById("root")).render(m.jsx(Y.StrictMode,{children:m.jsx(XJ,{})}));
