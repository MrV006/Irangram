(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function XE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S0={exports:{}},Bu={},b0={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),JE=Symbol.for("react.portal"),ZE=Symbol.for("react.fragment"),e1=Symbol.for("react.strict_mode"),t1=Symbol.for("react.profiler"),n1=Symbol.for("react.provider"),r1=Symbol.for("react.context"),s1=Symbol.for("react.forward_ref"),i1=Symbol.for("react.suspense"),o1=Symbol.for("react.memo"),a1=Symbol.for("react.lazy"),zm=Symbol.iterator;function l1(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N0=Object.assign,C0={};function zi(t,e,n){this.props=t,this.context=e,this.refs=C0,this.updater=n||R0}zi.prototype.isReactComponent={};zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P0(){}P0.prototype=zi.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=C0,this.updater=n||R0}var Zh=Jh.prototype=new P0;Zh.constructor=Jh;N0(Zh,zi.prototype);Zh.isPureReactComponent=!0;var Bm=Array.isArray,D0=Object.prototype.hasOwnProperty,ef={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)D0.call(e,r)&&!O0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:_a,type:t,key:i,ref:o,props:s,_owner:ef.current}}function u1(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function c1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $m=/\/+/g;function Fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?c1(""+t.key):e.toString(36)}function Pl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case JE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Fc(o,0):r,Bm(s)?(n="",t!=null&&(n=t.replace($m,"$&/")+"/"),Pl(s,e,n,"",function(h){return h})):s!=null&&(tf(s)&&(s=u1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace($m,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Bm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Fc(i,l);o+=Pl(i,e,n,u,s)}else if(u=l1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Fc(i,l++),o+=Pl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var r=[],s=0;return Pl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function d1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Dl={transition:null},h1={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:ef};function L0(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=zi;de.Fragment=ZE;de.Profiler=t1;de.PureComponent=Jh;de.StrictMode=e1;de.Suspense=i1;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1;de.act=L0;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=N0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ef.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)D0.call(e,u)&&!O0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:_a,type:t.type,key:s,ref:i,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:r1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:n1,_context:t},t.Consumer=t};de.createElement=j0;de.createFactory=function(t){var e=j0.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:s1,render:t}};de.isValidElement=tf;de.lazy=function(t){return{$$typeof:a1,_payload:{_status:-1,_result:t},_init:d1}};de.memo=function(t,e){return{$$typeof:o1,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Dl.transition;Dl.transition={};try{t()}finally{Dl.transition=e}};de.unstable_act=L0;de.useCallback=function(t,e){return Mt.current.useCallback(t,e)};de.useContext=function(t){return Mt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Mt.current.useEffect(t,e)};de.useId=function(){return Mt.current.useId()};de.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Mt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};de.useRef=function(t){return Mt.current.useRef(t)};de.useState=function(t){return Mt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Mt.current.useTransition()};de.version="18.3.1";b0.exports=de;var L=b0.exports;const f1=XE(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1=L,m1=Symbol.for("react.element"),g1=Symbol.for("react.fragment"),y1=Object.prototype.hasOwnProperty,v1=p1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_1={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)y1.call(e,r)&&!_1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:m1,type:t,key:i,ref:o,props:s,_owner:v1.current}}Bu.Fragment=g1;Bu.jsx=M0;Bu.jsxs=M0;S0.exports=Bu;var c=S0.exports,bd={},V0={exports:{}},nn={},q0={exports:{}},U0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Z){var re=B.length;B.push(Z);e:for(;0<re;){var xe=re-1>>>1,pe=B[xe];if(0<s(pe,Z))B[xe]=Z,B[re]=pe,re=xe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],re=B.pop();if(re!==Z){B[0]=re;e:for(var xe=0,pe=B.length,Ae=pe>>>1;xe<Ae;){var K=2*(xe+1)-1,_e=B[K],ue=K+1,$e=B[ue];if(0>s(_e,re))ue<pe&&0>s($e,_e)?(B[xe]=$e,B[ue]=re,xe=ue):(B[xe]=_e,B[K]=re,xe=K);else if(ue<pe&&0>s($e,re))B[xe]=$e,B[ue]=re,xe=ue;else break e}}return Z}function s(B,Z){var re=B.sortIndex-Z.sortIndex;return re!==0?re:B.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,g=3,A=!1,b=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var Z=n(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=B)r(h),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(h)}}function O(B){if(R=!1,k(B),!b)if(n(u)!==null)b=!0,ve(q);else{var Z=n(h);Z!==null&&ge(O,Z.startTime-B)}}function q(B,Z){b=!1,R&&(R=!1,w(v),v=-1),A=!0;var re=g;try{for(k(Z),m=n(u);m!==null&&(!(m.expirationTime>Z)||B&&!S());){var xe=m.callback;if(typeof xe=="function"){m.callback=null,g=m.priorityLevel;var pe=xe(m.expirationTime<=Z);Z=t.unstable_now(),typeof pe=="function"?m.callback=pe:m===n(u)&&r(u),k(Z)}else r(u);m=n(u)}if(m!==null)var Ae=!0;else{var K=n(h);K!==null&&ge(O,K.startTime-Z),Ae=!1}return Ae}finally{m=null,g=re,A=!1}}var z=!1,E=null,v=-1,x=5,I=-1;function S(){return!(t.unstable_now()-I<x)}function C(){if(E!==null){var B=t.unstable_now();I=B;var Z=!0;try{Z=E(!0,B)}finally{Z?T():(z=!1,E=null)}}else z=!1}var T;if(typeof _=="function")T=function(){_(C)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,W=Ce.port2;Ce.port1.onmessage=C,T=function(){W.postMessage(null)}}else T=function(){N(C,0)};function ve(B){E=B,z||(z=!0,T())}function ge(B,Z){v=N(function(){B(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){b||A||(b=!0,ve(q))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var re=g;g=Z;try{return B()}finally{g=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=g;g=B;try{return Z()}finally{g=re}},t.unstable_scheduleCallback=function(B,Z,re){var xe=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?xe+re:xe):re=xe,B){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=re+pe,B={id:p++,callback:Z,priorityLevel:B,startTime:re,expirationTime:pe,sortIndex:-1},re>xe?(B.sortIndex=re,e(h,B),n(u)===null&&B===n(h)&&(R?(w(v),v=-1):R=!0,ge(O,re-xe))):(B.sortIndex=pe,e(u,B),b||A||(b=!0,ve(q))),B},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(B){var Z=g;return function(){var re=g;g=Z;try{return B.apply(this,arguments)}finally{g=re}}}})(U0);q0.exports=U0;var w1=q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x1=L,tn=w1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F0=new Set,Wo={};function Bs(t,e){Si(t,e),Si(t+"Capture",e)}function Si(t,e){for(Wo[t]=e,t=0;t<e.length;t++)F0.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rd=Object.prototype.hasOwnProperty,E1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Hm={};function T1(t){return Rd.call(Hm,t)?!0:Rd.call(Wm,t)?!1:E1.test(t)?Hm[t]=!0:(Wm[t]=!0,!1)}function I1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k1(t,e,n,r){if(e===null||typeof e>"u"||I1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nf=/[\-:]([a-z])/g;function rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nf,rf);yt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nf,rf);yt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nf,rf);yt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sf(t,e,n,r){var s=yt.hasOwnProperty(e)?yt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k1(e,n,s,r)&&(n=null),r||s===null?T1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gr=x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),ii=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),Nd=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),Cd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),lf=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),Km=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=Km&&t[Km]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,zc;function _o(t){if(zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zc=e&&e[1]||""}return`
`+zc+t}var Bc=!1;function $c(t,e){if(!t||Bc)return"";Bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function A1(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=$c(t.type,!1),t;case 11:return t=$c(t.type.render,!1),t;case 1:return t=$c(t.type,!0),t;default:return""}}function Dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case ii:return"Portal";case Nd:return"Profiler";case of:return"StrictMode";case Cd:return"Suspense";case Pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case z0:return(t._context.displayName||"Context")+".Provider";case af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lf:return e=t.displayName||null,e!==null?e:Dd(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return Dd(t(e))}catch{}}return null}function S1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(e);case 8:return e===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b1(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=b1(t))}function H0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Od(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function K0(t,e){e=e.checked,e!=null&&sf(t,"checked",e,!1)}function jd(t,e){K0(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ld(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ld(t,e,n){(e!=="number"||eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(wo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function G0(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,Y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R1=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){R1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function X0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=X0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var N1=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(t,e){if(e){if(N1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Ud(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zd=null,vi=null,_i=null;function Jm(t){if(t=Ea(t)){if(typeof zd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Gu(e),zd(t.stateNode,t.type,e))}}function Z0(t){vi?_i?_i.push(t):_i=[t]:vi=t}function ev(){if(vi){var t=vi,e=_i;if(_i=vi=null,Jm(t),e)for(t=0;t<e.length;t++)Jm(e[t])}}function tv(t,e){return t(e)}function nv(){}var Wc=!1;function rv(t,e,n){if(Wc)return t(e,n);Wc=!0;try{return tv(t,e,n)}finally{Wc=!1,(vi!==null||_i!==null)&&(nv(),ev())}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var r=Gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Bd=!1;if(lr)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Bd=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Bd=!1}function C1(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Co=!1,tu=null,nu=!1,$d=null,P1={onError:function(t){Co=!0,tu=t}};function D1(t,e,n,r,s,i,o,l,u){Co=!1,tu=null,C1.apply(P1,arguments)}function O1(t,e,n,r,s,i,o,l,u){if(D1.apply(this,arguments),Co){if(Co){var h=tu;Co=!1,tu=null}else throw Error(F(198));nu||(nu=!0,$d=h)}}function $s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zm(t){if($s(t)!==t)throw Error(F(188))}function j1(t){var e=t.alternate;if(!e){if(e=$s(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Zm(s),t;if(i===r)return Zm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function iv(t){return t=j1(t),t!==null?ov(t):null}function ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ov(t);if(e!==null)return e;t=t.sibling}return null}var av=tn.unstable_scheduleCallback,eg=tn.unstable_cancelCallback,L1=tn.unstable_shouldYield,M1=tn.unstable_requestPaint,Ye=tn.unstable_now,V1=tn.unstable_getCurrentPriorityLevel,cf=tn.unstable_ImmediatePriority,lv=tn.unstable_UserBlockingPriority,ru=tn.unstable_NormalPriority,q1=tn.unstable_LowPriority,uv=tn.unstable_IdlePriority,$u=null,Cn=null;function U1(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot($u,t,void 0,(t.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:B1,F1=Math.log,z1=Math.LN2;function B1(t){return t>>>=0,t===0?32:31-(F1(t)/z1|0)|0}var cl=64,dl=4194304;function xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function su(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=xo(l):(i&=o,i!==0&&(r=xo(i)))}else o=n&~s,o!==0?r=xo(o):i!==0&&(r=xo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xn(e),s=1<<n,r|=t[n],e&=~s;return r}function $1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-xn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=$1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cv(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function Hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xn(e),t[e]=n}function H1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-xn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Ie=0;function dv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hv,hf,fv,pv,mv,Hd=!1,hl=[],Mr=null,Vr=null,qr=null,Go=new Map,Qo=new Map,br=[],K1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tg(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function co(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ea(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function G1(t,e,n,r,s){switch(e){case"focusin":return Mr=co(Mr,t,e,n,r,s),!0;case"dragenter":return Vr=co(Vr,t,e,n,r,s),!0;case"mouseover":return qr=co(qr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Go.set(i,co(Go.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Qo.set(i,co(Qo.get(i)||null,t,e,n,r,s)),!0}return!1}function gv(t){var e=xs(t.target);if(e!==null){var n=$s(e);if(n!==null){if(e=n.tag,e===13){if(e=sv(n),e!==null){t.blockedOn=e,mv(t.priority,function(){fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fd=r,n.target.dispatchEvent(r),Fd=null}else return e=Ea(n),e!==null&&hf(e),t.blockedOn=n,!1;e.shift()}return!0}function ng(t,e,n){Ol(t)&&n.delete(e)}function Q1(){Hd=!1,Mr!==null&&Ol(Mr)&&(Mr=null),Vr!==null&&Ol(Vr)&&(Vr=null),qr!==null&&Ol(qr)&&(qr=null),Go.forEach(ng),Qo.forEach(ng)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,Hd||(Hd=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,Q1)))}function Yo(t){function e(s){return ho(s,t)}if(0<hl.length){ho(hl[0],t);for(var n=1;n<hl.length;n++){var r=hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mr!==null&&ho(Mr,t),Vr!==null&&ho(Vr,t),qr!==null&&ho(qr,t),Go.forEach(e),Qo.forEach(e),n=0;n<br.length;n++)r=br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<br.length&&(n=br[0],n.blockedOn===null);)gv(n),n.blockedOn===null&&br.shift()}var wi=gr.ReactCurrentBatchConfig,iu=!0;function Y1(t,e,n,r){var s=Ie,i=wi.transition;wi.transition=null;try{Ie=1,ff(t,e,n,r)}finally{Ie=s,wi.transition=i}}function X1(t,e,n,r){var s=Ie,i=wi.transition;wi.transition=null;try{Ie=4,ff(t,e,n,r)}finally{Ie=s,wi.transition=i}}function ff(t,e,n,r){if(iu){var s=Kd(t,e,n,r);if(s===null)nd(t,e,r,ou,n),tg(t,r);else if(G1(s,t,e,n,r))r.stopPropagation();else if(tg(t,r),e&4&&-1<K1.indexOf(t)){for(;s!==null;){var i=Ea(s);if(i!==null&&hv(i),i=Kd(t,e,n,r),i===null&&nd(t,e,r,ou,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else nd(t,e,r,null,n)}}var ou=null;function Kd(t,e,n,r){if(ou=null,t=uf(r),t=xs(t),t!==null)if(e=$s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ou=t,null}function yv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V1()){case cf:return 1;case lv:return 4;case ru:case q1:return 16;case uv:return 536870912;default:return 16}default:return 16}}var Or=null,pf=null,jl=null;function vv(){if(jl)return jl;var t,e=pf,n=e.length,r,s="value"in Or?Or.value:Or.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return jl=s.slice(t,1<r?1-r:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function rg(){return!1}function rn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fl:rg,this.isPropagationStopped=rg,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mf=rn(Bi),xa=ze({},Bi,{view:0,detail:0}),J1=rn(xa),Kc,Gc,fo,Wu=ze({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Kc=t.screenX-fo.screenX,Gc=t.screenY-fo.screenY):Gc=Kc=0,fo=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),sg=rn(Wu),Z1=ze({},Wu,{dataTransfer:0}),eT=rn(Z1),tT=ze({},xa,{relatedTarget:0}),Qc=rn(tT),nT=ze({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),rT=rn(nT),sT=ze({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iT=rn(sT),oT=ze({},Bi,{data:0}),ig=rn(oT),aT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uT[t])?!!e[t]:!1}function gf(){return cT}var dT=ze({},xa,{key:function(t){if(t.key){var e=aT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hT=rn(dT),fT=ze({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=rn(fT),pT=ze({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),mT=rn(pT),gT=ze({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),yT=rn(gT),vT=ze({},Wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_T=rn(vT),wT=[9,13,27,32],yf=lr&&"CompositionEvent"in window,Po=null;lr&&"documentMode"in document&&(Po=document.documentMode);var xT=lr&&"TextEvent"in window&&!Po,_v=lr&&(!yf||Po&&8<Po&&11>=Po),ag=" ",lg=!1;function wv(t,e){switch(t){case"keyup":return wT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function ET(t,e){switch(t){case"compositionend":return xv(e);case"keypress":return e.which!==32?null:(lg=!0,ag);case"textInput":return t=e.data,t===ag&&lg?null:t;default:return null}}function TT(t,e){if(ai)return t==="compositionend"||!yf&&wv(t,e)?(t=vv(),jl=pf=Or=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var IT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IT[t.type]:e==="textarea"}function Ev(t,e,n,r){Z0(r),e=au(e,"onChange"),0<e.length&&(n=new mf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Do=null,Xo=null;function kT(t){Dv(t,0)}function Hu(t){var e=ci(t);if(H0(e))return t}function AT(t,e){if(t==="change")return e}var Tv=!1;if(lr){var Yc;if(lr){var Xc="oninput"in document;if(!Xc){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),Xc=typeof cg.oninput=="function"}Yc=Xc}else Yc=!1;Tv=Yc&&(!document.documentMode||9<document.documentMode)}function dg(){Do&&(Do.detachEvent("onpropertychange",Iv),Xo=Do=null)}function Iv(t){if(t.propertyName==="value"&&Hu(Xo)){var e=[];Ev(e,Xo,t,uf(t)),rv(kT,e)}}function ST(t,e,n){t==="focusin"?(dg(),Do=e,Xo=n,Do.attachEvent("onpropertychange",Iv)):t==="focusout"&&dg()}function bT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(Xo)}function RT(t,e){if(t==="click")return Hu(e)}function NT(t,e){if(t==="input"||t==="change")return Hu(e)}function CT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:CT;function Jo(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Rd.call(e,s)||!In(t[s],e[s]))return!1}return!0}function hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fg(t,e){var n=hg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hg(n)}}function kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Av(){for(var t=window,e=eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eu(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PT(t){var e=Av(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kv(n.ownerDocument.documentElement,n)){if(r!==null&&vf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=fg(n,i);var o=fg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DT=lr&&"documentMode"in document&&11>=document.documentMode,li=null,Gd=null,Oo=null,Qd=!1;function pg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qd||li==null||li!==eu(r)||(r=li,"selectionStart"in r&&vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Jo(Oo,r)||(Oo=r,r=au(Gd,"onSelect"),0<r.length&&(e=new mf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Jc={},Sv={};lr&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Ku(t){if(Jc[t])return Jc[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sv)return Jc[t]=e[n];return t}var bv=Ku("animationend"),Rv=Ku("animationiteration"),Nv=Ku("animationstart"),Cv=Ku("transitionend"),Pv=new Map,mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ts(t,e){Pv.set(t,e),Bs(e,[t])}for(var Zc=0;Zc<mg.length;Zc++){var ed=mg[Zc],OT=ed.toLowerCase(),jT=ed[0].toUpperCase()+ed.slice(1);ts(OT,"on"+jT)}ts(bv,"onAnimationEnd");ts(Rv,"onAnimationIteration");ts(Nv,"onAnimationStart");ts("dblclick","onDoubleClick");ts("focusin","onFocus");ts("focusout","onBlur");ts(Cv,"onTransitionEnd");Si("onMouseEnter",["mouseout","mouseover"]);Si("onMouseLeave",["mouseout","mouseover"]);Si("onPointerEnter",["pointerout","pointerover"]);Si("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function gg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,O1(r,e,void 0,t),t.currentTarget=null}function Dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;gg(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;gg(s,l,h),i=u}}}if(nu)throw t=$d,nu=!1,$d=null,t}function De(t,e){var n=e[eh];n===void 0&&(n=e[eh]=new Set);var r=t+"__bubble";n.has(r)||(Ov(e,t,2,!1),n.add(r))}function td(t,e,n){var r=0;e&&(r|=4),Ov(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[ml]){t[ml]=!0,F0.forEach(function(n){n!=="selectionchange"&&(LT.has(n)||td(n,!1,t),td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,td("selectionchange",!1,e))}}function Ov(t,e,n,r){switch(yv(e)){case 1:var s=Y1;break;case 4:s=X1;break;default:s=ff}n=s.bind(null,e,n,t),s=void 0,!Bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function nd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=xs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}rv(function(){var h=i,p=uf(n),m=[];e:{var g=Pv.get(t);if(g!==void 0){var A=mf,b=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":A=hT;break;case"focusin":b="focus",A=Qc;break;case"focusout":b="blur",A=Qc;break;case"beforeblur":case"afterblur":A=Qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=eT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=mT;break;case bv:case Rv:case Nv:A=rT;break;case Cv:A=yT;break;case"scroll":A=J1;break;case"wheel":A=_T;break;case"copy":case"cut":case"paste":A=iT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=og}var R=(e&4)!==0,N=!R&&t==="scroll",w=R?g!==null?g+"Capture":null:g;R=[];for(var _=h,k;_!==null;){k=_;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,w!==null&&(O=Ko(_,w),O!=null&&R.push(ea(_,O,k)))),N)break;_=_.return}0<R.length&&(g=new A(g,b,null,n,p),m.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Fd&&(b=n.relatedTarget||n.fromElement)&&(xs(b)||b[ur]))break e;if((A||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,A?(b=n.relatedTarget||n.toElement,A=h,b=b?xs(b):null,b!==null&&(N=$s(b),b!==N||b.tag!==5&&b.tag!==6)&&(b=null)):(A=null,b=h),A!==b)){if(R=sg,O="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(R=og,O="onPointerLeave",w="onPointerEnter",_="pointer"),N=A==null?g:ci(A),k=b==null?g:ci(b),g=new R(O,_+"leave",A,n,p),g.target=N,g.relatedTarget=k,O=null,xs(p)===h&&(R=new R(w,_+"enter",b,n,p),R.target=k,R.relatedTarget=N,O=R),N=O,A&&b)t:{for(R=A,w=b,_=0,k=R;k;k=ti(k))_++;for(k=0,O=w;O;O=ti(O))k++;for(;0<_-k;)R=ti(R),_--;for(;0<k-_;)w=ti(w),k--;for(;_--;){if(R===w||w!==null&&R===w.alternate)break t;R=ti(R),w=ti(w)}R=null}else R=null;A!==null&&yg(m,g,A,R,!1),b!==null&&N!==null&&yg(m,N,b,R,!0)}}e:{if(g=h?ci(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var q=AT;else if(ug(g))if(Tv)q=NT;else{q=bT;var z=ST}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(q=RT);if(q&&(q=q(t,h))){Ev(m,q,n,p);break e}z&&z(t,g,h),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&Ld(g,"number",g.value)}switch(z=h?ci(h):window,t){case"focusin":(ug(z)||z.contentEditable==="true")&&(li=z,Gd=h,Oo=null);break;case"focusout":Oo=Gd=li=null;break;case"mousedown":Qd=!0;break;case"contextmenu":case"mouseup":case"dragend":Qd=!1,pg(m,n,p);break;case"selectionchange":if(DT)break;case"keydown":case"keyup":pg(m,n,p)}var E;if(yf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ai?wv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(_v&&n.locale!=="ko"&&(ai||v!=="onCompositionStart"?v==="onCompositionEnd"&&ai&&(E=vv()):(Or=p,pf="value"in Or?Or.value:Or.textContent,ai=!0)),z=au(h,v),0<z.length&&(v=new ig(v,t,null,n,p),m.push({event:v,listeners:z}),E?v.data=E:(E=xv(n),E!==null&&(v.data=E)))),(E=xT?ET(t,n):TT(t,n))&&(h=au(h,"onBeforeInput"),0<h.length&&(p=new ig("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=E))}Dv(m,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function au(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ko(t,n),i!=null&&r.unshift(ea(t,i,s)),i=Ko(t,e),i!=null&&r.push(ea(t,i,s))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Ko(n,i),u!=null&&o.unshift(ea(n,u,l))):s||(u=Ko(n,i),u!=null&&o.push(ea(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MT=/\r\n?/g,VT=/\u0000|\uFFFD/g;function vg(t){return(typeof t=="string"?t:""+t).replace(MT,`
`).replace(VT,"")}function gl(t,e,n){if(e=vg(e),vg(t)!==e&&n)throw Error(F(425))}function lu(){}var Yd=null,Xd=null;function Jd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,qT=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,UT=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(FT)}:Zd;function FT(t){setTimeout(function(){throw t})}function rd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Yo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Yo(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $i=Math.random().toString(36).slice(2),Rn="__reactFiber$"+$i,ta="__reactProps$"+$i,ur="__reactContainer$"+$i,eh="__reactEvents$"+$i,zT="__reactListeners$"+$i,BT="__reactHandles$"+$i;function xs(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wg(t);t!==null;){if(n=t[Rn])return n;t=wg(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[Rn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Gu(t){return t[ta]||null}var th=[],di=-1;function ns(t){return{current:t}}function je(t){0>di||(t.current=th[di],th[di]=null,di--)}function Ne(t,e){di++,th[di]=t.current,t.current=e}var Qr={},bt=ns(Qr),Bt=ns(!1),Ns=Qr;function bi(t,e){var n=t.type.contextTypes;if(!n)return Qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function $t(t){return t=t.childContextTypes,t!=null}function uu(){je(Bt),je(bt)}function xg(t,e,n){if(bt.current!==Qr)throw Error(F(168));Ne(bt,e),Ne(Bt,n)}function jv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,S1(t)||"Unknown",s));return ze({},n,r)}function cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qr,Ns=bt.current,Ne(bt,t),Ne(Bt,Bt.current),!0}function Eg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=jv(t,e,Ns),r.__reactInternalMemoizedMergedChildContext=t,je(Bt),je(bt),Ne(bt,t)):je(Bt),Ne(Bt,n)}var Xn=null,Qu=!1,sd=!1;function Lv(t){Xn===null?Xn=[t]:Xn.push(t)}function $T(t){Qu=!0,Lv(t)}function rs(){if(!sd&&Xn!==null){sd=!0;var t=0,e=Ie;try{var n=Xn;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,Qu=!1}catch(s){throw Xn!==null&&(Xn=Xn.slice(t+1)),av(cf,rs),s}finally{Ie=e,sd=!1}}return null}var hi=[],fi=0,du=null,hu=0,on=[],an=0,Cs=null,Zn=1,er="";function ys(t,e){hi[fi++]=hu,hi[fi++]=du,du=t,hu=e}function Mv(t,e,n){on[an++]=Zn,on[an++]=er,on[an++]=Cs,Cs=t;var r=Zn;t=er;var s=32-xn(r)-1;r&=~(1<<s),n+=1;var i=32-xn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Zn=1<<32-xn(e)+s|n<<s|r,er=i+t}else Zn=1<<i|n<<s|r,er=t}function _f(t){t.return!==null&&(ys(t,1),Mv(t,1,0))}function wf(t){for(;t===du;)du=hi[--fi],hi[fi]=null,hu=hi[--fi],hi[fi]=null;for(;t===Cs;)Cs=on[--an],on[an]=null,er=on[--an],on[an]=null,Zn=on[--an],on[an]=null}var Zt=null,Qt=null,Ve=!1,_n=null;function Vv(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Qt=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cs!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Qt=null,!0):!1;default:return!1}}function nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rh(t){if(Ve){var e=Qt;if(e){var n=e;if(!Tg(t,e)){if(nh(t))throw Error(F(418));e=Ur(n.nextSibling);var r=Zt;e&&Tg(t,e)?Vv(r,n):(t.flags=t.flags&-4097|2,Ve=!1,Zt=t)}}else{if(nh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ve=!1,Zt=t}}}function Ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function yl(t){if(t!==Zt)return!1;if(!Ve)return Ig(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jd(t.type,t.memoizedProps)),e&&(e=Qt)){if(nh(t))throw qv(),Error(F(418));for(;e;)Vv(t,e),e=Ur(e.nextSibling)}if(Ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Zt?Ur(t.stateNode.nextSibling):null;return!0}function qv(){for(var t=Qt;t;)t=Ur(t.nextSibling)}function Ri(){Qt=Zt=null,Ve=!1}function xf(t){_n===null?_n=[t]:_n.push(t)}var WT=gr.ReactCurrentBatchConfig;function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kg(t){var e=t._init;return e(t._payload)}function Uv(t){function e(w,_){if(t){var k=w.deletions;k===null?(w.deletions=[_],w.flags|=16):k.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function s(w,_){return w=$r(w,_),w.index=0,w.sibling=null,w}function i(w,_,k){return w.index=k,t?(k=w.alternate,k!==null?(k=k.index,k<_?(w.flags|=2,_):k):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,k,O){return _===null||_.tag!==6?(_=dd(k,w.mode,O),_.return=w,_):(_=s(_,k),_.return=w,_)}function u(w,_,k,O){var q=k.type;return q===oi?p(w,_,k.props.children,O,k.key):_!==null&&(_.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ar&&kg(q)===_.type)?(O=s(_,k.props),O.ref=po(w,_,k),O.return=w,O):(O=Bl(k.type,k.key,k.props,null,w.mode,O),O.ref=po(w,_,k),O.return=w,O)}function h(w,_,k,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=hd(k,w.mode,O),_.return=w,_):(_=s(_,k.children||[]),_.return=w,_)}function p(w,_,k,O,q){return _===null||_.tag!==7?(_=Ss(k,w.mode,O,q),_.return=w,_):(_=s(_,k),_.return=w,_)}function m(w,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return _=dd(""+_,w.mode,k),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case al:return k=Bl(_.type,_.key,_.props,null,w.mode,k),k.ref=po(w,null,_),k.return=w,k;case ii:return _=hd(_,w.mode,k),_.return=w,_;case Ar:var O=_._init;return m(w,O(_._payload),k)}if(wo(_)||lo(_))return _=Ss(_,w.mode,k,null),_.return=w,_;vl(w,_)}return null}function g(w,_,k,O){var q=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return q!==null?null:l(w,_,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case al:return k.key===q?u(w,_,k,O):null;case ii:return k.key===q?h(w,_,k,O):null;case Ar:return q=k._init,g(w,_,q(k._payload),O)}if(wo(k)||lo(k))return q!==null?null:p(w,_,k,O,null);vl(w,k)}return null}function A(w,_,k,O,q){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(k)||null,l(_,w,""+O,q);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case al:return w=w.get(O.key===null?k:O.key)||null,u(_,w,O,q);case ii:return w=w.get(O.key===null?k:O.key)||null,h(_,w,O,q);case Ar:var z=O._init;return A(w,_,k,z(O._payload),q)}if(wo(O)||lo(O))return w=w.get(k)||null,p(_,w,O,q,null);vl(_,O)}return null}function b(w,_,k,O){for(var q=null,z=null,E=_,v=_=0,x=null;E!==null&&v<k.length;v++){E.index>v?(x=E,E=null):x=E.sibling;var I=g(w,E,k[v],O);if(I===null){E===null&&(E=x);break}t&&E&&I.alternate===null&&e(w,E),_=i(I,_,v),z===null?q=I:z.sibling=I,z=I,E=x}if(v===k.length)return n(w,E),Ve&&ys(w,v),q;if(E===null){for(;v<k.length;v++)E=m(w,k[v],O),E!==null&&(_=i(E,_,v),z===null?q=E:z.sibling=E,z=E);return Ve&&ys(w,v),q}for(E=r(w,E);v<k.length;v++)x=A(E,w,v,k[v],O),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?v:x.key),_=i(x,_,v),z===null?q=x:z.sibling=x,z=x);return t&&E.forEach(function(S){return e(w,S)}),Ve&&ys(w,v),q}function R(w,_,k,O){var q=lo(k);if(typeof q!="function")throw Error(F(150));if(k=q.call(k),k==null)throw Error(F(151));for(var z=q=null,E=_,v=_=0,x=null,I=k.next();E!==null&&!I.done;v++,I=k.next()){E.index>v?(x=E,E=null):x=E.sibling;var S=g(w,E,I.value,O);if(S===null){E===null&&(E=x);break}t&&E&&S.alternate===null&&e(w,E),_=i(S,_,v),z===null?q=S:z.sibling=S,z=S,E=x}if(I.done)return n(w,E),Ve&&ys(w,v),q;if(E===null){for(;!I.done;v++,I=k.next())I=m(w,I.value,O),I!==null&&(_=i(I,_,v),z===null?q=I:z.sibling=I,z=I);return Ve&&ys(w,v),q}for(E=r(w,E);!I.done;v++,I=k.next())I=A(E,w,v,I.value,O),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?v:I.key),_=i(I,_,v),z===null?q=I:z.sibling=I,z=I);return t&&E.forEach(function(C){return e(w,C)}),Ve&&ys(w,v),q}function N(w,_,k,O){if(typeof k=="object"&&k!==null&&k.type===oi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case al:e:{for(var q=k.key,z=_;z!==null;){if(z.key===q){if(q=k.type,q===oi){if(z.tag===7){n(w,z.sibling),_=s(z,k.props.children),_.return=w,w=_;break e}}else if(z.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ar&&kg(q)===z.type){n(w,z.sibling),_=s(z,k.props),_.ref=po(w,z,k),_.return=w,w=_;break e}n(w,z);break}else e(w,z);z=z.sibling}k.type===oi?(_=Ss(k.props.children,w.mode,O,k.key),_.return=w,w=_):(O=Bl(k.type,k.key,k.props,null,w.mode,O),O.ref=po(w,_,k),O.return=w,w=O)}return o(w);case ii:e:{for(z=k.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(w,_.sibling),_=s(_,k.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=hd(k,w.mode,O),_.return=w,w=_}return o(w);case Ar:return z=k._init,N(w,_,z(k._payload),O)}if(wo(k))return b(w,_,k,O);if(lo(k))return R(w,_,k,O);vl(w,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,_!==null&&_.tag===6?(n(w,_.sibling),_=s(_,k),_.return=w,w=_):(n(w,_),_=dd(k,w.mode,O),_.return=w,w=_),o(w)):n(w,_)}return N}var Ni=Uv(!0),Fv=Uv(!1),fu=ns(null),pu=null,pi=null,Ef=null;function Tf(){Ef=pi=pu=null}function If(t){var e=fu.current;je(fu),t._currentValue=e}function sh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xi(t,e){pu=t,Ef=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function cn(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(pu===null)throw Error(F(308));pi=t,pu.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var Es=null;function kf(t){Es===null?Es=[t]:Es.push(t)}function zv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,kf(e)):(n.next=s.next,s.next=n),e.interleaved=n,cr(t,r)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function Af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,cr(t,n)}return s=r.interleaved,s===null?(e.next=e,kf(r)):(e.next=s.next,s.next=e),r.interleaved=e,cr(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,df(t,n)}}function Ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mu(t,e,n,r){var s=t.updateQueue;Sr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=h=u=null,l=i;do{var g=l.lane,A=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,R=l;switch(g=e,A=n,R.tag){case 1:if(b=R.payload,typeof b=="function"){m=b.call(A,m,g);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=R.payload,g=typeof b=="function"?b.call(A,m,g):b,g==null)break e;m=ze({},m,g);break e;case 2:Sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=A,u=m):p=p.next=A,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ds|=o,t.lanes=o,t.memoizedState=m}}function Sg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Ta={},Pn=ns(Ta),na=ns(Ta),ra=ns(Ta);function Ts(t){if(t===Ta)throw Error(F(174));return t}function Sf(t,e){switch(Ne(ra,e),Ne(na,t),Ne(Pn,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vd(e,t)}je(Pn),Ne(Pn,e)}function Ci(){je(Pn),je(na),je(ra)}function $v(t){Ts(ra.current);var e=Ts(Pn.current),n=Vd(e,t.type);e!==n&&(Ne(na,t),Ne(Pn,n))}function bf(t){na.current===t&&(je(Pn),je(na))}var Ue=ns(0);function gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var id=[];function Rf(){for(var t=0;t<id.length;t++)id[t]._workInProgressVersionPrimary=null;id.length=0}var Vl=gr.ReactCurrentDispatcher,od=gr.ReactCurrentBatchConfig,Ps=0,Fe=null,nt=null,at=null,yu=!1,jo=!1,sa=0,HT=0;function xt(){throw Error(F(321))}function Nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Cf(t,e,n,r,s,i){if(Ps=i,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?YT:XT,t=n(r,s),jo){i=0;do{if(jo=!1,sa=0,25<=i)throw Error(F(301));i+=1,at=nt=null,e.updateQueue=null,Vl.current=JT,t=n(r,s)}while(jo)}if(Vl.current=vu,e=nt!==null&&nt.next!==null,Ps=0,at=nt=Fe=null,yu=!1,e)throw Error(F(300));return t}function Pf(){var t=sa!==0;return sa=0,t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Fe.memoizedState=at=t:at=at.next=t,at}function dn(){if(nt===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=at===null?Fe.memoizedState:at.next;if(e!==null)at=e,nt=t;else{if(t===null)throw Error(F(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},at===null?Fe.memoizedState=at=t:at=at.next=t}return at}function ia(t,e){return typeof e=="function"?e(t):e}function ad(t){var e=dn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=nt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var p=h.lane;if((Ps&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Fe.lanes|=p,Ds|=p}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,In(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Fe.lanes|=i,Ds|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ld(t){var e=dn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);In(i,e.memoizedState)||(zt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Wv(){}function Hv(t,e){var n=Fe,r=dn(),s=e(),i=!In(r.memoizedState,s);if(i&&(r.memoizedState=s,zt=!0),r=r.queue,Df(Qv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,oa(9,Gv.bind(null,n,r,s,e),void 0,null),lt===null)throw Error(F(349));Ps&30||Kv(n,e,s)}return s}function Kv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gv(t,e,n,r){e.value=n,e.getSnapshot=r,Yv(e)&&Xv(t)}function Qv(t,e,n){return n(function(){Yv(e)&&Xv(t)})}function Yv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function Xv(t){var e=cr(t,1);e!==null&&En(e,t,1,-1)}function bg(t){var e=bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=QT.bind(null,Fe,t),[e.memoizedState,t]}function oa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jv(){return dn().memoizedState}function ql(t,e,n,r){var s=bn();Fe.flags|=t,s.memoizedState=oa(1|e,n,void 0,r===void 0?null:r)}function Yu(t,e,n,r){var s=dn();r=r===void 0?null:r;var i=void 0;if(nt!==null){var o=nt.memoizedState;if(i=o.destroy,r!==null&&Nf(r,o.deps)){s.memoizedState=oa(e,n,i,r);return}}Fe.flags|=t,s.memoizedState=oa(1|e,n,i,r)}function Rg(t,e){return ql(8390656,8,t,e)}function Df(t,e){return Yu(2048,8,t,e)}function Zv(t,e){return Yu(4,2,t,e)}function e_(t,e){return Yu(4,4,t,e)}function t_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n_(t,e,n){return n=n!=null?n.concat([t]):null,Yu(4,4,t_.bind(null,e,t),n)}function Of(){}function r_(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function s_(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return Ps&21?(In(n,e)||(n=cv(),Fe.lanes|=n,Ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function KT(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=od.transition;od.transition={};try{t(!1),e()}finally{Ie=n,od.transition=r}}function o_(){return dn().memoizedState}function GT(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},a_(t))l_(e,n);else if(n=zv(t,e,n,r),n!==null){var s=Ot();En(n,t,r,s),u_(n,e,r)}}function QT(t,e,n){var r=Br(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(t))l_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,In(l,o)){var u=e.interleaved;u===null?(s.next=s,kf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=zv(t,e,s,r),n!==null&&(s=Ot(),En(n,t,r,s),u_(n,e,r))}}function a_(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function l_(t,e){jo=yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,df(t,n)}}var vu={readContext:cn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},YT={readContext:cn,useCallback:function(t,e){return bn().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:Rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ql(4194308,4,t_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return ql(4,2,t,e)},useMemo:function(t,e){var n=bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GT.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=bn();return t={current:t},e.memoizedState=t},useState:bg,useDebugValue:Of,useDeferredValue:function(t){return bn().memoizedState=t},useTransition:function(){var t=bg(!1),e=t[0];return t=KT.bind(null,t[1]),bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,s=bn();if(Ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),lt===null)throw Error(F(349));Ps&30||Kv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Rg(Qv.bind(null,r,i,t),[t]),r.flags|=2048,oa(9,Gv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=bn(),e=lt.identifierPrefix;if(Ve){var n=er,r=Zn;n=(r&~(1<<32-xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XT={readContext:cn,useCallback:r_,useContext:cn,useEffect:Df,useImperativeHandle:n_,useInsertionEffect:Zv,useLayoutEffect:e_,useMemo:s_,useReducer:ad,useRef:Jv,useState:function(){return ad(ia)},useDebugValue:Of,useDeferredValue:function(t){var e=dn();return i_(e,nt.memoizedState,t)},useTransition:function(){var t=ad(ia)[0],e=dn().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:Hv,useId:o_,unstable_isNewReconciler:!1},JT={readContext:cn,useCallback:r_,useContext:cn,useEffect:Df,useImperativeHandle:n_,useInsertionEffect:Zv,useLayoutEffect:e_,useMemo:s_,useReducer:ld,useRef:Jv,useState:function(){return ld(ia)},useDebugValue:Of,useDeferredValue:function(t){var e=dn();return nt===null?e.memoizedState=t:i_(e,nt.memoizedState,t)},useTransition:function(){var t=ld(ia)[0],e=dn().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:Hv,useId:o_,unstable_isNewReconciler:!1};function yn(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ih(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xu={isMounted:function(t){return(t=t._reactInternals)?$s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),s=Br(t),i=sr(r,s);i.payload=e,n!=null&&(i.callback=n),e=Fr(t,i,s),e!==null&&(En(e,t,s,r),Ml(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),s=Br(t),i=sr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Fr(t,i,s),e!==null&&(En(e,t,s,r),Ml(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=Br(t),s=sr(n,r);s.tag=2,e!=null&&(s.callback=e),e=Fr(t,s,r),e!==null&&(En(e,t,r,n),Ml(e,t,r))}};function Ng(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,r)||!Jo(s,i):!0}function c_(t,e,n){var r=!1,s=Qr,i=e.contextType;return typeof i=="object"&&i!==null?i=cn(i):(s=$t(e)?Ns:bt.current,r=e.contextTypes,i=(r=r!=null)?bi(t,s):Qr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Cg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xu.enqueueReplaceState(e,e.state,null)}function oh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Af(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=cn(i):(i=$t(e)?Ns:bt.current,s.context=bi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ih(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Xu.enqueueReplaceState(s,s.state,null),mu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Pi(t,e){try{var n="",r=e;do n+=A1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ud(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ah(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZT=typeof WeakMap=="function"?WeakMap:Map;function d_(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wu||(wu=!0,yh=r),ah(t,e)},n}function h_(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){ah(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ah(t,e),typeof r!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=fI.bind(null,t,e,n),e.then(t,t))}function Dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Og(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var eI=gr.ReactCurrentOwner,zt=!1;function Dt(t,e,n,r){e.child=t===null?Fv(e,null,n,r):Ni(e,t.child,n,r)}function jg(t,e,n,r,s){n=n.render;var i=e.ref;return xi(e,s),r=Cf(t,e,n,r,i,s),n=Pf(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,dr(t,e,s)):(Ve&&n&&_f(e),e.flags|=1,Dt(t,e,r,s),e.child)}function Lg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!zf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,f_(t,e,i,r,s)):(t=Bl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,r)&&t.ref===e.ref)return dr(t,e,s)}return e.flags|=1,t=$r(i,r),t.ref=e.ref,t.return=e,e.child=t}function f_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Jo(i,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,dr(t,e,s)}return lh(t,e,n,r,s)}function p_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(gi,Gt),Gt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(gi,Gt),Gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ne(gi,Gt),Gt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ne(gi,Gt),Gt|=r;return Dt(t,e,s,n),e.child}function m_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lh(t,e,n,r,s){var i=$t(n)?Ns:bt.current;return i=bi(e,i),xi(e,s),n=Cf(t,e,n,r,i,s),r=Pf(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,dr(t,e,s)):(Ve&&r&&_f(e),e.flags|=1,Dt(t,e,n,s),e.child)}function Mg(t,e,n,r,s){if($t(n)){var i=!0;cu(e)}else i=!1;if(xi(e,s),e.stateNode===null)Ul(t,e),c_(e,n,r),oh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=cn(h):(h=$t(n)?Ns:bt.current,h=bi(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Cg(e,o,r,h),Sr=!1;var g=e.memoizedState;o.state=g,mu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Bt.current||Sr?(typeof p=="function"&&(ih(e,n,p,r),u=e.memoizedState),(l=Sr||Ng(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:yn(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=cn(u):(u=$t(n)?Ns:bt.current,u=bi(e,u));var A=n.getDerivedStateFromProps;(p=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Cg(e,o,r,u),Sr=!1,g=e.memoizedState,o.state=g,mu(e,r,o,s);var b=e.memoizedState;l!==m||g!==b||Bt.current||Sr?(typeof A=="function"&&(ih(e,n,A,r),b=e.memoizedState),(h=Sr||Ng(e,n,h,r,g,b,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return uh(t,e,n,r,i,s)}function uh(t,e,n,r,s,i){m_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Eg(e,n,!1),dr(t,e,i);r=e.stateNode,eI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,i),e.child=Ni(e,null,l,i)):Dt(t,e,l,i),e.memoizedState=r.state,s&&Eg(e,n,!0),e.child}function g_(t){var e=t.stateNode;e.pendingContext?xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xg(t,e.context,!1),Sf(t,e.containerInfo)}function Vg(t,e,n,r,s){return Ri(),xf(s),e.flags|=256,Dt(t,e,n,r),e.child}var ch={dehydrated:null,treeContext:null,retryLane:0};function dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function y_(t,e,n){var r=e.pendingProps,s=Ue.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ne(Ue,s&1),t===null)return rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ec(o,r,0,null),t=Ss(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=dh(n),e.memoizedState=ch,t):jf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return tI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$r(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=$r(l,i):(i=Ss(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?dh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=ch,r}return i=t.child,t=i.sibling,r=$r(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jf(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,r){return r!==null&&xf(r),Ni(e,t.child,null,n),t=jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ud(Error(F(422))),_l(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ec({mode:"visible",children:r.children},s,0,null),i=Ss(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=dh(o),e.memoizedState=ch,i);if(!(e.mode&1))return _l(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=ud(i,r,void 0),_l(t,e,o,r)}if(l=(o&t.childLanes)!==0,zt||l){if(r=lt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,cr(t,s),En(r,t,s,-1))}return Ff(),r=ud(Error(F(421))),_l(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=pI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Qt=Ur(s.nextSibling),Zt=e,Ve=!0,_n=null,t!==null&&(on[an++]=Zn,on[an++]=er,on[an++]=Cs,Zn=t.id,er=t.overflow,Cs=e),e=jf(e,r.children),e.flags|=4096,e)}function qg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sh(t.return,e,n)}function cd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function v_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Dt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qg(t,n,e);else if(t.tag===19)qg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ne(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&gu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),cd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&gu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}cd(e,!0,n,null,i);break;case"together":cd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=$r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nI(t,e,n){switch(e.tag){case 3:g_(e),Ri();break;case 5:$v(e);break;case 1:$t(e.type)&&cu(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ne(fu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?y_(t,e,n):(Ne(Ue,Ue.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Ne(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return v_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ne(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,p_(t,e,n)}return dr(t,e,n)}var __,hh,w_,x_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hh=function(){};w_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ts(Pn.current);var i=null;switch(n){case"input":s=Od(t,s),r=Od(t,r),i=[];break;case"select":s=ze({},s,{value:void 0}),r=ze({},r,{value:void 0}),i=[];break;case"textarea":s=Md(t,s),r=Md(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lu)}qd(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Wo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&De("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};x_=function(t,e,n,r){n!==r&&(e.flags|=4)};function mo(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rI(t,e,n){var r=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return $t(e.type)&&uu(),Et(e),null;case 3:return r=e.stateNode,Ci(),je(Bt),je(bt),Rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_n!==null&&(wh(_n),_n=null))),hh(t,e),Et(e),null;case 5:bf(e);var s=Ts(ra.current);if(n=e.type,t!==null&&e.stateNode!=null)w_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Et(e),null}if(t=Ts(Pn.current),yl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rn]=e,r[ta]=i,t=(e.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(s=0;s<Eo.length;s++)De(Eo[s],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":Gm(r,i),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},De("invalid",r);break;case"textarea":Ym(r,i),De("invalid",r)}qd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),s=["children",""+l]):Wo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":ll(r),Qm(r,i,!0);break;case"textarea":ll(r),Xm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=lu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Q0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[ta]=r,__(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ud(n,r),n){case"dialog":De("cancel",t),De("close",t),s=r;break;case"iframe":case"object":case"embed":De("load",t),s=r;break;case"video":case"audio":for(s=0;s<Eo.length;s++)De(Eo[s],t);s=r;break;case"source":De("error",t),s=r;break;case"img":case"image":case"link":De("error",t),De("load",t),s=r;break;case"details":De("toggle",t),s=r;break;case"input":Gm(t,r),s=Od(t,r),De("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ze({},r,{value:void 0}),De("invalid",t);break;case"textarea":Ym(t,r),s=Md(t,r),De("invalid",t);break;default:s=r}qd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?J0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Y0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ho(t,u):typeof u=="number"&&Ho(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&De("scroll",t):u!=null&&sf(t,i,u,o))}switch(n){case"input":ll(t),Qm(t,r,!1);break;case"textarea":ll(t),Xm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?yi(t,!!r.multiple,i,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)x_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ts(ra.current),Ts(Pn.current),yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(i=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return Et(e),null;case 13:if(je(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&Qt!==null&&e.mode&1&&!(e.flags&128))qv(),Ri(),e.flags|=98560,i=!1;else if(i=yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Rn]=e}else Ri(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),i=!1}else _n!==null&&(wh(_n),_n=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?rt===0&&(rt=3):Ff())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return Ci(),hh(t,e),t===null&&Zo(e.stateNode.containerInfo),Et(e),null;case 10:return If(e.type._context),Et(e),null;case 17:return $t(e.type)&&uu(),Et(e),null;case 19:if(je(Ue),i=e.memoizedState,i===null)return Et(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)mo(i,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gu(t),o!==null){for(e.flags|=128,mo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ne(Ue,Ue.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ye()>Di&&(e.flags|=128,r=!0,mo(i,!1),e.lanes=4194304)}else{if(!r)if(t=gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ve)return Et(e),null}else 2*Ye()-i.renderingStartTime>Di&&n!==1073741824&&(e.flags|=128,r=!0,mo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ye(),e.sibling=null,n=Ue.current,Ne(Ue,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return Uf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Gt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function sI(t,e){switch(wf(e),e.tag){case 1:return $t(e.type)&&uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ci(),je(Bt),je(bt),Rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(je(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ri()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(Ue),null;case 4:return Ci(),null;case 10:return If(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var wl=!1,kt=!1,iI=typeof WeakSet=="function"?WeakSet:Set,Q=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function fh(t,e,n){try{n()}catch(r){He(t,e,r)}}var Ug=!1;function oI(t,e){if(Yd=iu,t=Av(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,g=null;t:for(;;){for(var A;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++p===r&&(u=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xd={focusedElem:t,selectionRange:n},iu=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var R=b.memoizedProps,N=b.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?R:yn(e.type,R),N);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){He(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return b=Ug,Ug=!1,b}function Lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&fh(e,n,i)}s=s.next}while(s!==r)}}function Ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E_(t){var e=t.alternate;e!==null&&(t.alternate=null,E_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[ta],delete e[eh],delete e[zT],delete e[BT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T_(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lu));else if(r!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}function gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}var ht=null,vn=!1;function Ir(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount($u,n)}catch{}switch(n.tag){case 5:kt||mi(n,e);case 6:var r=ht,s=vn;ht=null,Ir(t,e,n),ht=r,vn=s,ht!==null&&(vn?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(vn?(t=ht,n=n.stateNode,t.nodeType===8?rd(t.parentNode,n):t.nodeType===1&&rd(t,n),Yo(t)):rd(ht,n.stateNode));break;case 4:r=ht,s=vn,ht=n.stateNode.containerInfo,vn=!0,Ir(t,e,n),ht=r,vn=s;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&fh(n,e,o),s=s.next}while(s!==r)}Ir(t,e,n);break;case 1:if(!kt&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){He(n,e,l)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Ir(t,e,n),kt=r):Ir(t,e,n);break;default:Ir(t,e,n)}}function zg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iI),e.forEach(function(r){var s=mI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ht=l.stateNode,vn=!1;break e;case 3:ht=l.stateNode.containerInfo,vn=!0;break e;case 4:ht=l.stateNode.containerInfo,vn=!0;break e}l=l.return}if(ht===null)throw Error(F(160));I_(i,o,s),ht=null,vn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){He(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k_(e,t),e=e.sibling}function k_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),Sn(t),r&4){try{Lo(3,t,t.return),Ju(3,t)}catch(R){He(t,t.return,R)}try{Lo(5,t,t.return)}catch(R){He(t,t.return,R)}}break;case 1:gn(e,t),Sn(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(gn(e,t),Sn(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var s=t.stateNode;try{Ho(s,"")}catch(R){He(t,t.return,R)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&K0(s,i),Ud(l,o);var h=Ud(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?J0(s,m):p==="dangerouslySetInnerHTML"?Y0(s,m):p==="children"?Ho(s,m):sf(s,p,m,h)}switch(l){case"input":jd(s,i);break;case"textarea":G0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?yi(s,!!i.multiple,A,!1):g!==!!i.multiple&&(i.defaultValue!=null?yi(s,!!i.multiple,i.defaultValue,!0):yi(s,!!i.multiple,i.multiple?[]:"",!1))}s[ta]=i}catch(R){He(t,t.return,R)}}break;case 6:if(gn(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(R){He(t,t.return,R)}}break;case 3:if(gn(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(R){He(t,t.return,R)}break;case 4:gn(e,t),Sn(t);break;case 13:gn(e,t),Sn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Vf=Ye())),r&4&&zg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(h=kt)||p,gn(e,t),kt=h):gn(e,t),Sn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(Q=t,p=t.child;p!==null;){for(m=Q=p;Q!==null;){switch(g=Q,A=g.child,g.tag){case 0:case 11:case 14:case 15:Lo(4,g,g.return);break;case 1:mi(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(R){He(r,n,R)}}break;case 5:mi(g,g.return);break;case 22:if(g.memoizedState!==null){$g(m);continue}}A!==null?(A.return=g,Q=A):$g(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=X0("display",o))}catch(R){He(t,t.return,R)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(R){He(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:gn(e,t),Sn(t),r&4&&zg(t);break;case 21:break;default:gn(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ho(s,""),r.flags&=-33);var i=Fg(t);gh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Fg(t);mh(t,l,o);break;default:throw Error(F(161))}}catch(u){He(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aI(t,e,n){Q=t,A_(t)}function A_(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||wl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||kt;l=wl;var h=kt;if(wl=o,(kt=u)&&!h)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?Wg(s):u!==null?(u.return=o,Q=u):Wg(s);for(;i!==null;)Q=i,A_(i),i=i.sibling;Q=s,wl=l,kt=h}Bg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):Bg(t)}}function Bg(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||Ju(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:yn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Sg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Yo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}kt||e.flags&512&&ph(e)}catch(g){He(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function $g(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Wg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ju(4,e)}catch(u){He(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){He(e,s,u)}}var i=e.return;try{ph(e)}catch(u){He(e,i,u)}break;case 5:var o=e.return;try{ph(e)}catch(u){He(e,o,u)}}}catch(u){He(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var lI=Math.ceil,_u=gr.ReactCurrentDispatcher,Lf=gr.ReactCurrentOwner,un=gr.ReactCurrentBatchConfig,we=0,lt=null,Je=null,mt=0,Gt=0,gi=ns(0),rt=0,aa=null,Ds=0,Zu=0,Mf=0,Mo=null,Ut=null,Vf=0,Di=1/0,Yn=null,wu=!1,yh=null,zr=null,xl=!1,jr=null,xu=0,Vo=0,vh=null,Fl=-1,zl=0;function Ot(){return we&6?Ye():Fl!==-1?Fl:Fl=Ye()}function Br(t){return t.mode&1?we&2&&mt!==0?mt&-mt:WT.transition!==null?(zl===0&&(zl=cv()),zl):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:yv(t.type)),t):1}function En(t,e,n,r){if(50<Vo)throw Vo=0,vh=null,Error(F(185));wa(t,n,r),(!(we&2)||t!==lt)&&(t===lt&&(!(we&2)&&(Zu|=n),rt===4&&Rr(t,mt)),Wt(t,r),n===1&&we===0&&!(e.mode&1)&&(Di=Ye()+500,Qu&&rs()))}function Wt(t,e){var n=t.callbackNode;W1(t,e);var r=su(t,t===lt?mt:0);if(r===0)n!==null&&eg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&eg(n),e===1)t.tag===0?$T(Hg.bind(null,t)):Lv(Hg.bind(null,t)),UT(function(){!(we&6)&&rs()}),n=null;else{switch(dv(r)){case 1:n=cf;break;case 4:n=lv;break;case 16:n=ru;break;case 536870912:n=uv;break;default:n=ru}n=O_(n,S_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S_(t,e){if(Fl=-1,zl=0,we&6)throw Error(F(327));var n=t.callbackNode;if(Ei()&&t.callbackNode!==n)return null;var r=su(t,t===lt?mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eu(t,r);else{e=r;var s=we;we|=2;var i=R_();(lt!==t||mt!==e)&&(Yn=null,Di=Ye()+500,As(t,e));do try{dI();break}catch(l){b_(t,l)}while(!0);Tf(),_u.current=i,we=s,Je!==null?e=0:(lt=null,mt=0,e=rt)}if(e!==0){if(e===2&&(s=Wd(t),s!==0&&(r=s,e=_h(t,s))),e===1)throw n=aa,As(t,0),Rr(t,r),Wt(t,Ye()),n;if(e===6)Rr(t,r);else{if(s=t.current.alternate,!(r&30)&&!uI(s)&&(e=Eu(t,r),e===2&&(i=Wd(t),i!==0&&(r=i,e=_h(t,i))),e===1))throw n=aa,As(t,0),Rr(t,r),Wt(t,Ye()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:vs(t,Ut,Yn);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=Vf+500-Ye(),10<e)){if(su(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Zd(vs.bind(null,t,Ut,Yn),e);break}vs(t,Ut,Yn);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-xn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lI(r/1960))-r,10<r){t.timeoutHandle=Zd(vs.bind(null,t,Ut,Yn),r);break}vs(t,Ut,Yn);break;case 5:vs(t,Ut,Yn);break;default:throw Error(F(329))}}}return Wt(t,Ye()),t.callbackNode===n?S_.bind(null,t):null}function _h(t,e){var n=Mo;return t.current.memoizedState.isDehydrated&&(As(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&wh(e)),t}function wh(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function uI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!In(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~Mf,e&=~Zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xn(e),r=1<<n;t[n]=-1,e&=~r}}function Hg(t){if(we&6)throw Error(F(327));Ei();var e=su(t,0);if(!(e&1))return Wt(t,Ye()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var r=Wd(t);r!==0&&(e=r,n=_h(t,r))}if(n===1)throw n=aa,As(t,0),Rr(t,e),Wt(t,Ye()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vs(t,Ut,Yn),Wt(t,Ye()),null}function qf(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(Di=Ye()+500,Qu&&rs())}}function Os(t){jr!==null&&jr.tag===0&&!(we&6)&&Ei();var e=we;we|=1;var n=un.transition,r=Ie;try{if(un.transition=null,Ie=1,t)return t()}finally{Ie=r,un.transition=n,we=e,!(we&6)&&rs()}}function Uf(){Gt=gi.current,je(gi)}function As(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qT(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uu();break;case 3:Ci(),je(Bt),je(bt),Rf();break;case 5:bf(r);break;case 4:Ci();break;case 13:je(Ue);break;case 19:je(Ue);break;case 10:If(r.type._context);break;case 22:case 23:Uf()}n=n.return}if(lt=t,Je=t=$r(t.current,null),mt=Gt=e,rt=0,aa=null,Mf=Zu=Ds=0,Ut=Mo=null,Es!==null){for(e=0;e<Es.length;e++)if(n=Es[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Es=null}return t}function b_(t,e){do{var n=Je;try{if(Tf(),Vl.current=vu,yu){for(var r=Fe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}yu=!1}if(Ps=0,at=nt=Fe=null,jo=!1,sa=0,Lf.current=null,n===null||n.return===null){rt=1,aa=e,Je=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=mt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var A=Dg(o);if(A!==null){A.flags&=-257,Og(A,o,l,i,e),A.mode&1&&Pg(i,h,e),e=A,u=h;var b=e.updateQueue;if(b===null){var R=new Set;R.add(u),e.updateQueue=R}else b.add(u);break e}else{if(!(e&1)){Pg(i,h,e),Ff();break e}u=Error(F(426))}}else if(Ve&&l.mode&1){var N=Dg(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Og(N,o,l,i,e),xf(Pi(u,l));break e}}i=u=Pi(u,l),rt!==4&&(rt=2),Mo===null?Mo=[i]:Mo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=d_(i,u,e);Ag(i,w);break e;case 1:l=u;var _=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(zr===null||!zr.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var O=h_(i,l,e);Ag(i,O);break e}}i=i.return}while(i!==null)}C_(n)}catch(q){e=q,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function R_(){var t=_u.current;return _u.current=vu,t===null?vu:t}function Ff(){(rt===0||rt===3||rt===2)&&(rt=4),lt===null||!(Ds&268435455)&&!(Zu&268435455)||Rr(lt,mt)}function Eu(t,e){var n=we;we|=2;var r=R_();(lt!==t||mt!==e)&&(Yn=null,As(t,e));do try{cI();break}catch(s){b_(t,s)}while(!0);if(Tf(),we=n,_u.current=r,Je!==null)throw Error(F(261));return lt=null,mt=0,rt}function cI(){for(;Je!==null;)N_(Je)}function dI(){for(;Je!==null&&!L1();)N_(Je)}function N_(t){var e=D_(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,e===null?C_(t):Je=e,Lf.current=null}function C_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sI(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Je=null;return}}else if(n=rI(n,e,Gt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);rt===0&&(rt=5)}function vs(t,e,n){var r=Ie,s=un.transition;try{un.transition=null,Ie=1,hI(t,e,n,r)}finally{un.transition=s,Ie=r}return null}function hI(t,e,n,r){do Ei();while(jr!==null);if(we&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(H1(t,i),t===lt&&(Je=lt=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xl||(xl=!0,O_(ru,function(){return Ei(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=un.transition,un.transition=null;var o=Ie;Ie=1;var l=we;we|=4,Lf.current=null,oI(t,n),k_(n,t),PT(Xd),iu=!!Yd,Xd=Yd=null,t.current=n,aI(n),M1(),we=l,Ie=o,un.transition=i}else t.current=n;if(xl&&(xl=!1,jr=t,xu=s),i=t.pendingLanes,i===0&&(zr=null),U1(n.stateNode),Wt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(wu)throw wu=!1,t=yh,yh=null,t;return xu&1&&t.tag!==0&&Ei(),i=t.pendingLanes,i&1?t===vh?Vo++:(Vo=0,vh=t):Vo=0,rs(),null}function Ei(){if(jr!==null){var t=dv(xu),e=un.transition,n=Ie;try{if(un.transition=null,Ie=16>t?16:t,jr===null)var r=!1;else{if(t=jr,jr=null,xu=0,we&6)throw Error(F(331));var s=we;for(we|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(Q=h;Q!==null;){var p=Q;switch(p.tag){case 0:case 11:case 15:Lo(8,p,i)}var m=p.child;if(m!==null)m.return=p,Q=m;else for(;Q!==null;){p=Q;var g=p.sibling,A=p.return;if(E_(p),p===h){Q=null;break}if(g!==null){g.return=A,Q=g;break}Q=A}}}var b=i.alternate;if(b!==null){var R=b.child;if(R!==null){b.child=null;do{var N=R.sibling;R.sibling=null,R=N}while(R!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lo(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,Q=w;break e}Q=i.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,Q=k;else e:for(o=_;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ju(9,l)}}catch(q){He(l,l.return,q)}if(l===o){Q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Q=O;break e}Q=l.return}}if(we=s,rs(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot($u,t)}catch{}r=!0}return r}finally{Ie=n,un.transition=e}}return!1}function Kg(t,e,n){e=Pi(n,e),e=d_(t,e,1),t=Fr(t,e,1),e=Ot(),t!==null&&(wa(t,1,e),Wt(t,e))}function He(t,e,n){if(t.tag===3)Kg(t,t,n);else for(;e!==null;){if(e.tag===3){Kg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zr===null||!zr.has(r))){t=Pi(n,t),t=h_(e,t,1),e=Fr(e,t,1),t=Ot(),e!==null&&(wa(e,1,t),Wt(e,t));break}}e=e.return}}function fI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(mt&n)===n&&(rt===4||rt===3&&(mt&130023424)===mt&&500>Ye()-Vf?As(t,0):Mf|=n),Wt(t,e)}function P_(t,e){e===0&&(t.mode&1?(e=dl,dl<<=1,!(dl&130023424)&&(dl=4194304)):e=1);var n=Ot();t=cr(t,e),t!==null&&(wa(t,e,n),Wt(t,n))}function pI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),P_(t,n)}function mI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),P_(t,n)}var D_;D_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,nI(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Ve&&e.flags&1048576&&Mv(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ul(t,e),t=e.pendingProps;var s=bi(e,bt.current);xi(e,n),s=Cf(null,e,r,t,s,n);var i=Pf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(i=!0,cu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Af(e),s.updater=Xu,e.stateNode=s,s._reactInternals=e,oh(e,r,t,n),e=uh(null,e,r,!0,i,n)):(e.tag=0,Ve&&i&&_f(e),Dt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=yI(r),t=yn(r,t),s){case 0:e=lh(null,e,r,t,n);break e;case 1:e=Mg(null,e,r,t,n);break e;case 11:e=jg(null,e,r,t,n);break e;case 14:e=Lg(null,e,r,yn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:yn(r,s),lh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:yn(r,s),Mg(t,e,r,s,n);case 3:e:{if(g_(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Bv(t,e),mu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Pi(Error(F(423)),e),e=Vg(t,e,r,n,s);break e}else if(r!==s){s=Pi(Error(F(424)),e),e=Vg(t,e,r,n,s);break e}else for(Qt=Ur(e.stateNode.containerInfo.firstChild),Zt=e,Ve=!0,_n=null,n=Fv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ri(),r===s){e=dr(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return $v(e),t===null&&rh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Jd(r,s)?o=null:i!==null&&Jd(r,i)&&(e.flags|=32),m_(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&rh(e),null;case 13:return y_(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:yn(r,s),jg(t,e,r,s,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ne(fu,r._currentValue),r._currentValue=o,i!==null)if(In(i.value,o)){if(i.children===s.children&&!Bt.current){e=dr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=sr(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),sh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),sh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Dt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,xi(e,n),s=cn(s),r=r(s),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,s=yn(r,e.pendingProps),s=yn(r.type,s),Lg(t,e,r,s,n);case 15:return f_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:yn(r,s),Ul(t,e),e.tag=1,$t(r)?(t=!0,cu(e)):t=!1,xi(e,n),c_(e,r,s),oh(e,r,s,n),uh(null,e,r,!0,t,n);case 19:return v_(t,e,n);case 22:return p_(t,e,n)}throw Error(F(156,e.tag))};function O_(t,e){return av(t,e)}function gI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new gI(t,e,n,r)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yI(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===af)return 11;if(t===lf)return 14}return 2}function $r(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Ss(n.children,s,i,e);case of:o=8,s|=8;break;case Nd:return t=ln(12,n,e,s|2),t.elementType=Nd,t.lanes=i,t;case Cd:return t=ln(13,n,e,s),t.elementType=Cd,t.lanes=i,t;case Pd:return t=ln(19,n,e,s),t.elementType=Pd,t.lanes=i,t;case $0:return ec(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z0:o=10;break e;case B0:o=9;break e;case af:o=11;break e;case lf:o=14;break e;case Ar:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=ln(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Ss(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function ec(t,e,n,r){return t=ln(22,t,r,e),t.elementType=$0,t.lanes=n,t.stateNode={isHidden:!1},t}function dd(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function hd(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vI(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,r,s,i,o,l,u){return t=new vI(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=ln(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Af(i),t}function _I(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function j_(t){if(!t)return Qr;t=t._reactInternals;e:{if($s(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if($t(n))return jv(t,n,e)}return e}function L_(t,e,n,r,s,i,o,l,u){return t=Bf(n,r,!0,t,s,i,o,l,u),t.context=j_(null),n=t.current,r=Ot(),s=Br(n),i=sr(r,s),i.callback=e??null,Fr(n,i,s),t.current.lanes=s,wa(t,s,r),Wt(t,r),t}function tc(t,e,n,r){var s=e.current,i=Ot(),o=Br(s);return n=j_(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(s,e,o),t!==null&&(En(t,s,o,i),Ml(t,s,o)),o}function Tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $f(t,e){Gg(t,e),(t=t.alternate)&&Gg(t,e)}function wI(){return null}var M_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wf(t){this._internalRoot=t}nc.prototype.render=Wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));tc(t,e,null,null)};nc.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Os(function(){tc(null,t,null,null)}),e[ur]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<br.length&&e!==0&&e<br[n].priority;n++);br.splice(n,0,t),n===0&&gv(t)}};function Hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qg(){}function xI(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Tu(o);i.call(h)}}var o=L_(e,r,t,0,null,!1,!1,"",Qg);return t._reactRootContainer=o,t[ur]=o.current,Zo(t.nodeType===8?t.parentNode:t),Os(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=Tu(u);l.call(h)}}var u=Bf(t,0,!1,null,null,!1,!1,"",Qg);return t._reactRootContainer=u,t[ur]=u.current,Zo(t.nodeType===8?t.parentNode:t),Os(function(){tc(e,u,n,r)}),u}function sc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Tu(o);l.call(u)}}tc(e,o,t,s)}else o=xI(n,e,t,s,r);return Tu(o)}hv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xo(e.pendingLanes);n!==0&&(df(e,n|1),Wt(e,Ye()),!(we&6)&&(Di=Ye()+500,rs()))}break;case 13:Os(function(){var r=cr(t,1);if(r!==null){var s=Ot();En(r,t,1,s)}}),$f(t,1)}};hf=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=Ot();En(e,t,134217728,n)}$f(t,134217728)}};fv=function(t){if(t.tag===13){var e=Br(t),n=cr(t,e);if(n!==null){var r=Ot();En(n,t,e,r)}$f(t,e)}};pv=function(){return Ie};mv=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};zd=function(t,e,n){switch(e){case"input":if(jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Gu(r);if(!s)throw Error(F(90));H0(r),jd(r,s)}}}break;case"textarea":G0(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};tv=qf;nv=Os;var EI={usingClientEntryPoint:!1,Events:[Ea,ci,Gu,Z0,ev,qf]},go={findFiberByHostInstance:xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TI={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iv(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||wI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{$u=El.inject(TI),Cn=El}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EI;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(e))throw Error(F(200));return _I(t,e,null,n)};nn.createRoot=function(t,e){if(!Hf(t))throw Error(F(299));var n=!1,r="",s=M_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,r,s),t[ur]=e.current,Zo(t.nodeType===8?t.parentNode:t),new Wf(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=iv(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return Os(t)};nn.hydrate=function(t,e,n){if(!rc(e))throw Error(F(200));return sc(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!Hf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=M_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L_(e,null,t,1,n??null,s,!1,i,o),t[ur]=e.current,Zo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new nc(e)};nn.render=function(t,e,n){if(!rc(e))throw Error(F(200));return sc(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!rc(t))throw Error(F(40));return t._reactRootContainer?(Os(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};nn.unstable_batchedUpdates=qf;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return sc(t,e,n,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(t){console.error(t)}}V_(),V0.exports=nn;var II=V0.exports,Yg=II;bd.createRoot=Yg.createRoot,bd.hydrateRoot=Yg.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ee=(t,e)=>{const n=L.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...h},p)=>L.createElement("svg",{ref:p,...kI,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${AI(t)}`,l].join(" "),...h},[...e.map(([m,g])=>L.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=ee("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=ee("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ee("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=ee("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=ee("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=ee("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=ee("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=ee("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=ee("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=ee("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=ee("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=ee("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=ee("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=ee("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=ee("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=ee("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=ee("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=ee("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=ee("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=ee("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=ee("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=ee("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=ee("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=ee("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=ee("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=ee("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=ee("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=ee("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=ee("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=ee("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=ee("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=ee("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=ee("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=ee("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=ee("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=ee("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=ee("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=ee("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=ee("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=ee("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=ee("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=ee("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=ee("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=ee("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=ee("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=ee("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=ee("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=ee("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=ee("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=ee("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=ee("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var ws=(t=>(t.LIGHT="light",t.DARK="dark",t))(ws||{}),sy={};/**
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
 */const K_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ZI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},G_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[p],n[m],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new ek;const g=i<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const b=h<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ek extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tk=function(t){const e=K_(t);return G_.encodeByteArray(e,!0)},ku=function(t){return tk(t).replace(/\./g,"")},Q_=function(t){try{return G_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rk=()=>nk().__FIREBASE_DEFAULTS__,sk=()=>{if(typeof process>"u"||typeof sy>"u")return;const t=sy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ik=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q_(t[1]);return e&&JSON.parse(e)},oc=()=>{try{return rk()||sk()||ik()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y_=t=>{var e,n;return(n=(e=oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},X_=t=>{const e=Y_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},J_=()=>{var t;return(t=oc())===null||t===void 0?void 0:t.config},Z_=t=>{var e;return(e=oc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ok{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ku(JSON.stringify(n)),ku(JSON.stringify(o)),""].join(".")}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ak(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function lk(){var t;const e=(t=oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ck(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hk(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fk(){return!lk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pk(){try{return typeof indexedDB=="object"}catch{return!1}}function mk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const gk="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gk,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new qn(s,l,r)}}function yk(t,e){return t.replace(vk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vk=/\{\$([^}]+)}/g;function _k(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Au(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(iy(i)&&iy(o)){if(!Au(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function iy(t){return t!==null&&typeof t=="object"}/**
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
 */function Aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function To(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wk(t,e){const n=new xk(t,e);return n.subscribe.bind(n)}class xk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ek(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=fd),s.error===void 0&&(s.error=fd),s.complete===void 0&&(s.complete=fd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ek(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fd(){}/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class Yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _s="[DEFAULT]";/**
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
 */class Tk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ok;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kk(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ik(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ik(t){return t===_s?void 0:t}function kk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ak{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const Sk={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},bk=me.INFO,Rk={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Nk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yf{constructor(e){this.name=e,this._logLevel=bk,this._logHandler=Nk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const Ck=(t,e)=>e.some(n=>t instanceof n);let oy,ay;function Pk(){return oy||(oy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dk(){return ay||(ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tw=new WeakMap,Sh=new WeakMap,nw=new WeakMap,pd=new WeakMap,Xf=new WeakMap;function Ok(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tw.set(n,t)}).catch(()=>{}),Xf.set(e,t),e}function jk(t){if(Sh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sh.set(t,e)}let bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lk(t){bh=t(bh)}function Mk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(md(this),e,...n);return nw.set(r,e.sort?e.sort():[e]),Wr(r)}:Dk().includes(t)?function(...e){return t.apply(md(this),e),Wr(tw.get(this))}:function(...e){return Wr(t.apply(md(this),e))}}function Vk(t){return typeof t=="function"?Mk(t):(t instanceof IDBTransaction&&jk(t),Ck(t,Pk())?new Proxy(t,bh):t)}function Wr(t){if(t instanceof IDBRequest)return Ok(t);if(pd.has(t))return pd.get(t);const e=Vk(t);return e!==t&&(pd.set(t,e),Xf.set(e,t)),e}const md=t=>Xf.get(t);function qk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Wr(o.result),u.oldVersion,u.newVersion,Wr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Uk=["get","getKey","getAll","getAllKeys","count"],Fk=["put","add","delete","clear"],gd=new Map;function ly(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gd.get(e))return gd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Fk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uk.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return gd.set(e,i),i}Lk(t=>({...t,get:(e,n,r)=>ly(e,n)||t.get(e,n,r),has:(e,n)=>!!ly(e,n)||t.has(e,n)}));/**
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
 */class zk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rh="@firebase/app",uy="0.10.13";/**
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
 */const hr=new Yf("@firebase/app"),$k="@firebase/app-compat",Wk="@firebase/analytics-compat",Hk="@firebase/analytics",Kk="@firebase/app-check-compat",Gk="@firebase/app-check",Qk="@firebase/auth",Yk="@firebase/auth-compat",Xk="@firebase/database",Jk="@firebase/data-connect",Zk="@firebase/database-compat",eA="@firebase/functions",tA="@firebase/functions-compat",nA="@firebase/installations",rA="@firebase/installations-compat",sA="@firebase/messaging",iA="@firebase/messaging-compat",oA="@firebase/performance",aA="@firebase/performance-compat",lA="@firebase/remote-config",uA="@firebase/remote-config-compat",cA="@firebase/storage",dA="@firebase/storage-compat",hA="@firebase/firestore",fA="@firebase/vertexai-preview",pA="@firebase/firestore-compat",mA="firebase",gA="10.14.1";/**
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
 */const Nh="[DEFAULT]",yA={[Rh]:"fire-core",[$k]:"fire-core-compat",[Hk]:"fire-analytics",[Wk]:"fire-analytics-compat",[Gk]:"fire-app-check",[Kk]:"fire-app-check-compat",[Qk]:"fire-auth",[Yk]:"fire-auth-compat",[Xk]:"fire-rtdb",[Jk]:"fire-data-connect",[Zk]:"fire-rtdb-compat",[eA]:"fire-fn",[tA]:"fire-fn-compat",[nA]:"fire-iid",[rA]:"fire-iid-compat",[sA]:"fire-fcm",[iA]:"fire-fcm-compat",[oA]:"fire-perf",[aA]:"fire-perf-compat",[lA]:"fire-rc",[uA]:"fire-rc-compat",[cA]:"fire-gcs",[dA]:"fire-gcs-compat",[hA]:"fire-fst",[pA]:"fire-fst-compat",[fA]:"fire-vertex","fire-js":"fire-js",[mA]:"fire-js-all"};/**
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
 */const Su=new Map,vA=new Map,Ch=new Map;function cy(t,e){try{t.container.addComponent(e)}catch(n){hr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function js(t){const e=t.name;if(Ch.has(e))return hr.debug(`There were multiple attempts to register component ${e}.`),!1;Ch.set(e,t);for(const n of Su.values())cy(n,t);for(const n of vA.values())cy(n,t);return!0}function ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wn(t){return t.settings!==void 0}/**
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
 */const _A={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hr=new ka("app","Firebase",_A);/**
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
 */class wA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=gA;function rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Hr.create("bad-app-name",{appName:String(s)});if(n||(n=J_()),!n)throw Hr.create("no-options");const i=Su.get(s);if(i){if(Au(n,i.options)&&Au(r,i.config))return i;throw Hr.create("duplicate-app",{appName:s})}const o=new Ak(s);for(const u of Ch.values())o.addComponent(u);const l=new wA(n,r,o);return Su.set(s,l),l}function Jf(t=Nh){const e=Su.get(t);if(!e&&t===Nh&&J_())return rw();if(!e)throw Hr.create("no-app",{appName:t});return e}function Dn(t,e,n){var r;let s=(r=yA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hr.warn(l.join(" "));return}js(new Yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xA="firebase-heartbeat-database",EA=1,ua="firebase-heartbeat-store";let yd=null;function sw(){return yd||(yd=qk(xA,EA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ua)}catch(n){console.warn(n)}}}}).catch(t=>{throw Hr.create("idb-open",{originalErrorMessage:t.message})})),yd}async function TA(t){try{const n=(await sw()).transaction(ua),r=await n.objectStore(ua).get(iw(t));return await n.done,r}catch(e){if(e instanceof qn)hr.warn(e.message);else{const n=Hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hr.warn(n.message)}}}async function dy(t,e){try{const r=(await sw()).transaction(ua,"readwrite");await r.objectStore(ua).put(e,iw(t)),await r.done}catch(n){if(n instanceof qn)hr.warn(n.message);else{const r=Hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hr.warn(r.message)}}}function iw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IA=1024,kA=30*24*60*60*1e3;class AA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=kA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){hr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hy(),{heartbeatsToSend:r,unsentEntries:s}=SA(this._heartbeatsCache.heartbeats),i=ku(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return hr.warn(n),""}}}function hy(){return new Date().toISOString().substring(0,10)}function SA(t,e=IA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pk()?mk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fy(t){return ku(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RA(t){js(new Yr("platform-logger",e=>new zk(e),"PRIVATE")),js(new Yr("heartbeat",e=>new AA(e),"PRIVATE")),Dn(Rh,uy,t),Dn(Rh,uy,"esm2017"),Dn("fire-js","")}RA("");var NA="firebase",CA="10.14.1";/**
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
 */Dn(NA,CA,"app");var py=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bs,ow;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function x(){}x.prototype=v.prototype,E.D=v.prototype,E.prototype=new x,E.prototype.constructor=E,E.C=function(I,S,C){for(var T=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)T[Ce-2]=arguments[Ce];return v.prototype[S].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,v,x){x||(x=0);var I=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)I[S]=v.charCodeAt(x++)|v.charCodeAt(x++)<<8|v.charCodeAt(x++)<<16|v.charCodeAt(x++)<<24;else for(S=0;16>S;++S)I[S]=v[x++]|v[x++]<<8|v[x++]<<16|v[x++]<<24;v=E.g[0],x=E.g[1],S=E.g[2];var C=E.g[3],T=v+(C^x&(S^C))+I[0]+3614090360&4294967295;v=x+(T<<7&4294967295|T>>>25),T=C+(S^v&(x^S))+I[1]+3905402710&4294967295,C=v+(T<<12&4294967295|T>>>20),T=S+(x^C&(v^x))+I[2]+606105819&4294967295,S=C+(T<<17&4294967295|T>>>15),T=x+(v^S&(C^v))+I[3]+3250441966&4294967295,x=S+(T<<22&4294967295|T>>>10),T=v+(C^x&(S^C))+I[4]+4118548399&4294967295,v=x+(T<<7&4294967295|T>>>25),T=C+(S^v&(x^S))+I[5]+1200080426&4294967295,C=v+(T<<12&4294967295|T>>>20),T=S+(x^C&(v^x))+I[6]+2821735955&4294967295,S=C+(T<<17&4294967295|T>>>15),T=x+(v^S&(C^v))+I[7]+4249261313&4294967295,x=S+(T<<22&4294967295|T>>>10),T=v+(C^x&(S^C))+I[8]+1770035416&4294967295,v=x+(T<<7&4294967295|T>>>25),T=C+(S^v&(x^S))+I[9]+2336552879&4294967295,C=v+(T<<12&4294967295|T>>>20),T=S+(x^C&(v^x))+I[10]+4294925233&4294967295,S=C+(T<<17&4294967295|T>>>15),T=x+(v^S&(C^v))+I[11]+2304563134&4294967295,x=S+(T<<22&4294967295|T>>>10),T=v+(C^x&(S^C))+I[12]+1804603682&4294967295,v=x+(T<<7&4294967295|T>>>25),T=C+(S^v&(x^S))+I[13]+4254626195&4294967295,C=v+(T<<12&4294967295|T>>>20),T=S+(x^C&(v^x))+I[14]+2792965006&4294967295,S=C+(T<<17&4294967295|T>>>15),T=x+(v^S&(C^v))+I[15]+1236535329&4294967295,x=S+(T<<22&4294967295|T>>>10),T=v+(S^C&(x^S))+I[1]+4129170786&4294967295,v=x+(T<<5&4294967295|T>>>27),T=C+(x^S&(v^x))+I[6]+3225465664&4294967295,C=v+(T<<9&4294967295|T>>>23),T=S+(v^x&(C^v))+I[11]+643717713&4294967295,S=C+(T<<14&4294967295|T>>>18),T=x+(C^v&(S^C))+I[0]+3921069994&4294967295,x=S+(T<<20&4294967295|T>>>12),T=v+(S^C&(x^S))+I[5]+3593408605&4294967295,v=x+(T<<5&4294967295|T>>>27),T=C+(x^S&(v^x))+I[10]+38016083&4294967295,C=v+(T<<9&4294967295|T>>>23),T=S+(v^x&(C^v))+I[15]+3634488961&4294967295,S=C+(T<<14&4294967295|T>>>18),T=x+(C^v&(S^C))+I[4]+3889429448&4294967295,x=S+(T<<20&4294967295|T>>>12),T=v+(S^C&(x^S))+I[9]+568446438&4294967295,v=x+(T<<5&4294967295|T>>>27),T=C+(x^S&(v^x))+I[14]+3275163606&4294967295,C=v+(T<<9&4294967295|T>>>23),T=S+(v^x&(C^v))+I[3]+4107603335&4294967295,S=C+(T<<14&4294967295|T>>>18),T=x+(C^v&(S^C))+I[8]+1163531501&4294967295,x=S+(T<<20&4294967295|T>>>12),T=v+(S^C&(x^S))+I[13]+2850285829&4294967295,v=x+(T<<5&4294967295|T>>>27),T=C+(x^S&(v^x))+I[2]+4243563512&4294967295,C=v+(T<<9&4294967295|T>>>23),T=S+(v^x&(C^v))+I[7]+1735328473&4294967295,S=C+(T<<14&4294967295|T>>>18),T=x+(C^v&(S^C))+I[12]+2368359562&4294967295,x=S+(T<<20&4294967295|T>>>12),T=v+(x^S^C)+I[5]+4294588738&4294967295,v=x+(T<<4&4294967295|T>>>28),T=C+(v^x^S)+I[8]+2272392833&4294967295,C=v+(T<<11&4294967295|T>>>21),T=S+(C^v^x)+I[11]+1839030562&4294967295,S=C+(T<<16&4294967295|T>>>16),T=x+(S^C^v)+I[14]+4259657740&4294967295,x=S+(T<<23&4294967295|T>>>9),T=v+(x^S^C)+I[1]+2763975236&4294967295,v=x+(T<<4&4294967295|T>>>28),T=C+(v^x^S)+I[4]+1272893353&4294967295,C=v+(T<<11&4294967295|T>>>21),T=S+(C^v^x)+I[7]+4139469664&4294967295,S=C+(T<<16&4294967295|T>>>16),T=x+(S^C^v)+I[10]+3200236656&4294967295,x=S+(T<<23&4294967295|T>>>9),T=v+(x^S^C)+I[13]+681279174&4294967295,v=x+(T<<4&4294967295|T>>>28),T=C+(v^x^S)+I[0]+3936430074&4294967295,C=v+(T<<11&4294967295|T>>>21),T=S+(C^v^x)+I[3]+3572445317&4294967295,S=C+(T<<16&4294967295|T>>>16),T=x+(S^C^v)+I[6]+76029189&4294967295,x=S+(T<<23&4294967295|T>>>9),T=v+(x^S^C)+I[9]+3654602809&4294967295,v=x+(T<<4&4294967295|T>>>28),T=C+(v^x^S)+I[12]+3873151461&4294967295,C=v+(T<<11&4294967295|T>>>21),T=S+(C^v^x)+I[15]+530742520&4294967295,S=C+(T<<16&4294967295|T>>>16),T=x+(S^C^v)+I[2]+3299628645&4294967295,x=S+(T<<23&4294967295|T>>>9),T=v+(S^(x|~C))+I[0]+4096336452&4294967295,v=x+(T<<6&4294967295|T>>>26),T=C+(x^(v|~S))+I[7]+1126891415&4294967295,C=v+(T<<10&4294967295|T>>>22),T=S+(v^(C|~x))+I[14]+2878612391&4294967295,S=C+(T<<15&4294967295|T>>>17),T=x+(C^(S|~v))+I[5]+4237533241&4294967295,x=S+(T<<21&4294967295|T>>>11),T=v+(S^(x|~C))+I[12]+1700485571&4294967295,v=x+(T<<6&4294967295|T>>>26),T=C+(x^(v|~S))+I[3]+2399980690&4294967295,C=v+(T<<10&4294967295|T>>>22),T=S+(v^(C|~x))+I[10]+4293915773&4294967295,S=C+(T<<15&4294967295|T>>>17),T=x+(C^(S|~v))+I[1]+2240044497&4294967295,x=S+(T<<21&4294967295|T>>>11),T=v+(S^(x|~C))+I[8]+1873313359&4294967295,v=x+(T<<6&4294967295|T>>>26),T=C+(x^(v|~S))+I[15]+4264355552&4294967295,C=v+(T<<10&4294967295|T>>>22),T=S+(v^(C|~x))+I[6]+2734768916&4294967295,S=C+(T<<15&4294967295|T>>>17),T=x+(C^(S|~v))+I[13]+1309151649&4294967295,x=S+(T<<21&4294967295|T>>>11),T=v+(S^(x|~C))+I[4]+4149444226&4294967295,v=x+(T<<6&4294967295|T>>>26),T=C+(x^(v|~S))+I[11]+3174756917&4294967295,C=v+(T<<10&4294967295|T>>>22),T=S+(v^(C|~x))+I[2]+718787259&4294967295,S=C+(T<<15&4294967295|T>>>17),T=x+(C^(S|~v))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+S&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var x=v-this.blockSize,I=this.B,S=this.h,C=0;C<v;){if(S==0)for(;C<=x;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<v;)if(I[S++]=E.charCodeAt(C++),S==this.blockSize){s(this,I),S=0;break}}else for(;C<v;)if(I[S++]=E[C++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var x=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=x&255,x/=256;for(this.u(E),E=Array(16),v=x=0;4>v;++v)for(var I=0;32>I;I+=8)E[x++]=this.g[v]>>>I&255;return E};function i(E,v){var x=l;return Object.prototype.hasOwnProperty.call(x,E)?x[E]:x[E]=v(E)}function o(E,v){this.h=v;for(var x=[],I=!0,S=E.length-1;0<=S;S--){var C=E[S]|0;I&&C==v||(x[S]=C,I=!1)}this.g=x}var l={};function u(E){return-128<=E&&128>E?i(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return N(h(-E));for(var v=[],x=1,I=0;E>=x;I++)v[I]=E/x|0,x*=4294967296;return new o(v,0)}function p(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return N(p(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=h(Math.pow(v,8)),I=m,S=0;S<E.length;S+=8){var C=Math.min(8,E.length-S),T=parseInt(E.substring(S,S+C),v);8>C?(C=h(Math.pow(v,C)),I=I.j(C).add(h(T))):(I=I.j(x),I=I.add(h(T)))}return I}var m=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-N(this).m();for(var E=0,v=1,x=0;x<this.g.length;x++){var I=this.i(x);E+=(0<=I?I:4294967296+I)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b(this))return"0";if(R(this))return"-"+N(this).toString(E);for(var v=h(Math.pow(E,6)),x=this,I="";;){var S=O(x,v).g;x=w(x,S.j(v));var C=((0<x.g.length?x.g[0]:x.h)>>>0).toString(E);if(x=S,b(x))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function b(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function R(E){return E.h==-1}t.l=function(E){return E=w(this,E),R(E)?-1:b(E)?0:1};function N(E){for(var v=E.g.length,x=[],I=0;I<v;I++)x[I]=~E.g[I];return new o(x,~E.h).add(g)}t.abs=function(){return R(this)?N(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),x=[],I=0,S=0;S<=v;S++){var C=I+(this.i(S)&65535)+(E.i(S)&65535),T=(C>>>16)+(this.i(S)>>>16)+(E.i(S)>>>16);I=T>>>16,C&=65535,T&=65535,x[S]=T<<16|C}return new o(x,x[x.length-1]&-2147483648?-1:0)};function w(E,v){return E.add(N(v))}t.j=function(E){if(b(this)||b(E))return m;if(R(this))return R(E)?N(this).j(N(E)):N(N(this).j(E));if(R(E))return N(this.j(N(E)));if(0>this.l(A)&&0>E.l(A))return h(this.m()*E.m());for(var v=this.g.length+E.g.length,x=[],I=0;I<2*v;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<E.g.length;S++){var C=this.i(I)>>>16,T=this.i(I)&65535,Ce=E.i(S)>>>16,W=E.i(S)&65535;x[2*I+2*S]+=T*W,_(x,2*I+2*S),x[2*I+2*S+1]+=C*W,_(x,2*I+2*S+1),x[2*I+2*S+1]+=T*Ce,_(x,2*I+2*S+1),x[2*I+2*S+2]+=C*Ce,_(x,2*I+2*S+2)}for(I=0;I<v;I++)x[I]=x[2*I+1]<<16|x[2*I];for(I=v;I<2*v;I++)x[I]=0;return new o(x,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function k(E,v){this.g=E,this.h=v}function O(E,v){if(b(v))throw Error("division by zero");if(b(E))return new k(m,m);if(R(E))return v=O(N(E),v),new k(N(v.g),N(v.h));if(R(v))return v=O(E,N(v)),new k(N(v.g),v.h);if(30<E.g.length){if(R(E)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var x=g,I=v;0>=I.l(E);)x=q(x),I=q(I);var S=z(x,1),C=z(I,1);for(I=z(I,2),x=z(x,2);!b(I);){var T=C.add(I);0>=T.l(E)&&(S=S.add(x),C=T),I=z(I,1),x=z(x,1)}return v=w(E,S.j(v)),new k(S,v)}for(S=m;0<=E.l(v);){for(x=Math.max(1,Math.floor(E.m()/v.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=h(x),T=C.j(v);R(T)||0<T.l(E);)x-=I,C=h(x),T=C.j(v);b(C)&&(C=g),S=S.add(C),E=w(E,T)}return new k(S,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),x=[],I=0;I<v;I++)x[I]=this.i(I)&E.i(I);return new o(x,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),x=[],I=0;I<v;I++)x[I]=this.i(I)|E.i(I);return new o(x,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),x=[],I=0;I<v;I++)x[I]=this.i(I)^E.i(I);return new o(x,this.h^E.h)};function q(E){for(var v=E.g.length+1,x=[],I=0;I<v;I++)x[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(x,E.h)}function z(E,v){var x=v>>5;v%=32;for(var I=E.g.length-x,S=[],C=0;C<I;C++)S[C]=0<v?E.i(C+x)>>>v|E.i(C+x+1)<<32-v:E.i(C+x);return new o(S,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ow=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,bs=o}).apply(typeof py<"u"?py:typeof self<"u"?self:typeof window<"u"?window:{});var Tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aw,ko,lw,$l,Ph,uw,cw,dw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tl=="object"&&Tl];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var D=a[y];if(!(D in f))break e;f=f[D]}a=a[a.length-1],y=f[a],d=d(y),d!=y&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,y=!1,D={next:function(){if(!y&&f<a.length){var j=f++;return{value:d(j,a[j]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function p(a,d,f){return a.call.apply(a.bind,arguments)}function m(a,d,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),a.apply(d,D)}}return function(){return a.apply(d,arguments)}}function g(a,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function A(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function b(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,D,j){for(var $=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)$[Se-2]=arguments[Se];return d.prototype[D].apply(y,$)}}function R(a){const d=a.length;if(0<d){const f=Array(d);for(let y=0;y<d;y++)f[y]=a[y];return f}return[]}function N(a,d){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const D=a.length||0,j=y.length||0;a.length=D+j;for(let $=0;$<j;$++)a[D+$]=y[$]}else a.push(y)}}class w{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var q=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function z(a,d,f){for(const y in a)d.call(f,a[y],y,a)}function E(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function v(a){const d={};for(const f in a)d[f]=a[f];return d}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,d){let f,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(f in y)a[f]=y[f];for(let j=0;j<x.length;j++)f=x[j],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function S(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Z;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ce{constructor(){this.h=this.g=null}add(d,f){const y=W.get();y.set(d,f),this.h?this.h.next=y:this.g=y,this.h=y}}var W=new w(()=>new ve,a=>a.reset());class ve{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,B=!1,Z=new Ce,re=()=>{const a=l.Promise.resolve(void 0);ge=()=>{a.then(xe)}};var xe=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){C(f)}var d=W;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}B=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function _e(a,d){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(q){e:{try{O(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ue[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_e.aa.h.call(this)}}b(_e,Ae);var ue={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $e="closure_listenable_"+(1e6*Math.random()|0),ct=0;function as(a,d,f,y,D){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!y,this.ha=D,this.key=++ct,this.da=this.fa=!1}function Nt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function qt(a){this.src=a,this.g={},this.h=0}qt.prototype.add=function(a,d,f,y,D){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var $=ls(a,d,y,D);return-1<$?(d=a[$],f||(d.fa=!1)):(d=new as(d,this.src,j,!!y,D),d.fa=f,a.push(d)),d};function _r(a,d){var f=d.type;if(f in a.g){var y=a.g[f],D=Array.prototype.indexOf.call(y,d,void 0),j;(j=0<=D)&&Array.prototype.splice.call(y,D,1),j&&(Nt(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ls(a,d,f,y){for(var D=0;D<a.length;++D){var j=a[D];if(!j.da&&j.listener==d&&j.capture==!!f&&j.ha==y)return D}return-1}var Fn="closure_lm_"+(1e6*Math.random()|0),us={};function cs(a,d,f,y,D){if(Array.isArray(d)){for(var j=0;j<d.length;j++)cs(a,d[j],f,y,D);return null}return f=he(f),a&&a[$e]?a.K(d,f,h(y)?!!y.capture:!1,D):Gs(a,d,f,!1,y,D)}function Gs(a,d,f,y,D,j){if(!d)throw Error("Invalid event type");var $=h(D)?!!D.capture:!!D,Se=V(a);if(Se||(a[Fn]=Se=new qt(a)),f=Se.add(d,f,y,$,j),f.proxy)return f;if(y=Qs(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)K||(D=$),D===void 0&&(D=!1),a.addEventListener(d.toString(),y,D);else if(a.attachEvent)a.attachEvent(pn(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Qs(){function a(f){return d.call(a.src,a.listener,f)}const d=Bn;return a}function wr(a,d,f,y,D){if(Array.isArray(d))for(var j=0;j<d.length;j++)wr(a,d[j],f,y,D);else y=h(y)?!!y.capture:!!y,f=he(f),a&&a[$e]?(a=a.i,d=String(d).toString(),d in a.g&&(j=a.g[d],f=ls(j,f,y,D),-1<f&&(Nt(j[f]),Array.prototype.splice.call(j,f,1),j.length==0&&(delete a.g[d],a.h--)))):a&&(a=V(a))&&(d=a.g[d.toString()],a=-1,d&&(a=ls(d,f,y,D)),(f=-1<a?d[a]:null)&&zn(f))}function zn(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[$e])_r(d.i,a);else{var f=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(f,y,a.capture):d.detachEvent?d.detachEvent(pn(f),y):d.addListener&&d.removeListener&&d.removeListener(y),(f=V(d))?(_r(f,a),f.h==0&&(f.src=null,d[Fn]=null)):Nt(a)}}}function pn(a){return a in us?us[a]:us[a]="on"+a}function Bn(a,d){if(a.da)a=!0;else{d=new _e(d,this);var f=a.listener,y=a.ha||a.src;a.fa&&zn(a),a=f.call(y,d)}return a}function V(a){return a=a[Fn],a instanceof qt?a:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[Y]||(a[Y]=function(d){return a.handleEvent(d)}),a[Y])}function H(){pe.call(this),this.i=new qt(this),this.M=this,this.F=null}b(H,pe),H.prototype[$e]=!0,H.prototype.removeEventListener=function(a,d,f,y){wr(this,a,d,f,y)};function ce(a,d){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new Ae(d,a);else if(d instanceof Ae)d.target=d.target||a;else{var D=d;d=new Ae(y,a),I(d,D)}if(D=!0,f)for(var j=f.length-1;0<=j;j--){var $=d.g=f[j];D=Re($,y,!0,d)&&D}if($=d.g=a,D=Re($,y,!0,d)&&D,D=Re($,y,!1,d)&&D,f)for(j=0;j<f.length;j++)$=d.g=f[j],D=Re($,y,!1,d)&&D}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],y=0;y<f.length;y++)Nt(f[y]);delete a.g[d],a.h--}}this.F=null},H.prototype.K=function(a,d,f,y){return this.i.add(String(a),d,!1,f,y)},H.prototype.L=function(a,d,f,y){return this.i.add(String(a),d,!0,f,y)};function Re(a,d,f,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,j=0;j<d.length;++j){var $=d[j];if($&&!$.da&&$.capture==f){var Se=$.listener,dt=$.ha||$.src;$.fa&&_r(a.i,$),D=Se.call(dt,y)!==!1&&D}}return D&&!y.defaultPrevented}function qe(a,d,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Le(a){a.g=qe(()=>{a.g=null,a.i&&(a.i=!1,Le(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class it extends pe{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(a){pe.call(this),this.h=a,this.g={}}b(et,pe);var $n=[];function Wn(a){z(a.g,function(d,f){this.g.hasOwnProperty(f)&&zn(d)},a),a.g={}}et.prototype.N=function(){et.aa.N.call(this),Wn(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hn=l.JSON.stringify,ds=l.JSON.parse,Yi=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Xi(){}Xi.prototype.h=null;function $a(a){return a.h||(a.h=a.i())}function P(){}var ne={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function le(){Ae.call(this,"d")}b(le,Ae);function tt(){Ae.call(this,"c")}b(tt,Ae);var Ct={},hs=null;function Ys(){return hs=hs||new H}Ct.La="serverreachability";function fs(a){Ae.call(this,Ct.La,a)}b(fs,Ae);function Kn(a){const d=Ys();ce(d,new fs(d))}Ct.STAT_EVENT="statevent";function sn(a,d){Ae.call(this,Ct.STAT_EVENT,a),this.stat=d}b(sn,Ae);function Me(a){const d=Ys();ce(d,new sn(d,a))}Ct.Ma="timingevent";function Wa(a,d){Ae.call(this,Ct.Ma,a),this.size=d}b(Wa,Ae);function Ji(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Zi(){this.g=!0}Zi.prototype.xa=function(){this.g=!1};function bE(a,d,f,y,D,j){a.info(function(){if(a.g)if(j)for(var $="",Se=j.split("&"),dt=0;dt<Se.length;dt++){var Ee=Se[dt].split("=");if(1<Ee.length){var _t=Ee[0];Ee=Ee[1];var wt=_t.split("_");$=2<=wt.length&&wt[1]=="type"?$+(_t+"="+Ee+"&"):$+(_t+"=redacted&")}}else $=null;else $=j;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+f+`
`+$})}function RE(a,d,f,y,D,j,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+f+`
`+j+" "+$})}function Xs(a,d,f,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+CE(a,f)+(y?" "+y:"")})}function NE(a,d){a.info(function(){return"TIMEOUT: "+d})}Zi.prototype.info=function(){};function CE(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var j=D[0];if(j!="noop"&&j!="stop"&&j!="close")for(var $=1;$<D.length;$++)D[$]=""}}}}return Hn(f)}catch{return d}}var Ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rc;function Ka(){}b(Ka,Xi),Ka.prototype.g=function(){return new XMLHttpRequest},Ka.prototype.i=function(){return{}},Rc=new Ka;function xr(a,d,f,y){this.j=a,this.i=d,this.l=f,this.R=y||1,this.U=new et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sm}function sm(){this.i=null,this.g="",this.h=!1}var im={},Nc={};function Cc(a,d,f){a.L=1,a.v=Xa(Gn(d)),a.m=f,a.P=!0,om(a,null)}function om(a,d){a.F=Date.now(),Ga(a),a.A=Gn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),wm(f.i,"t",y),a.C=0,f=a.j.J,a.h=new sm,a.g=Vm(a.j,f?d:null,!a.m),0<a.O&&(a.M=new it(g(a.Y,a,a.g),a.O)),d=a.U,f=a.g,y=a.ca;var D="readystatechange";Array.isArray(D)||(D&&($n[0]=D.toString()),D=$n);for(var j=0;j<D.length;j++){var $=cs(f,D[j],y||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Kn(),bE(a.i,a.u,a.A,a.l,a.R,a.m)}xr.prototype.ca=function(a){a=a.target;const d=this.M;d&&Qn(a)==3?d.j():this.Y(a)},xr.prototype.Y=function(a){try{if(a==this.g)e:{const wt=Qn(this.g);var d=this.g.Ba();const ei=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Sm(this.g)))){this.J||wt!=4||d==7||(d==8||0>=ei?Kn(3):Kn(2)),Pc(this);var f=this.g.Z();this.X=f;t:if(am(this)){var y=Sm(this.g);a="";var D=y.length,j=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ps(this),eo(this);var $="";break t}this.h.i=new l.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,a+=this.h.i.decode(y[d],{stream:!(j&&d==D-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,RE(this.i,this.u,this.A,this.l,this.R,wt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,dt=this.g;if((Se=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Se)){var Ee=Se;break t}}Ee=null}if(f=Ee)Xs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dc(this,f);else{this.o=!1,this.s=3,Me(12),ps(this),eo(this);break e}}if(this.P){f=!0;let mn;for(;!this.J&&this.C<$.length;)if(mn=PE(this,$),mn==Nc){wt==4&&(this.s=4,Me(14),f=!1),Xs(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==im){this.s=4,Me(15),Xs(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Xs(this.i,this.l,mn,null),Dc(this,mn);if(am(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||$.length!=0||this.h.h||(this.s=1,Me(16),f=!1),this.o=this.o&&f,!f)Xs(this.i,this.l,$,"[Invalid Chunked Response]"),ps(this),eo(this);else if(0<$.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),qc(_t),_t.M=!0,Me(11))}}else Xs(this.i,this.l,$,null),Dc(this,$);wt==4&&ps(this),this.o&&!this.J&&(wt==4?Om(this.j,this):(this.o=!1,Ga(this)))}else QE(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),ps(this),eo(this)}}}catch{}finally{}};function am(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function PE(a,d){var f=a.C,y=d.indexOf(`
`,f);return y==-1?Nc:(f=Number(d.substring(f,y)),isNaN(f)?im:(y+=1,y+f>d.length?Nc:(d=d.slice(y,y+f),a.C=y+f,d)))}xr.prototype.cancel=function(){this.J=!0,ps(this)};function Ga(a){a.S=Date.now()+a.I,lm(a,a.I)}function lm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ji(g(a.ba,a),d)}function Pc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}xr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(NE(this.i,this.A),this.L!=2&&(Kn(),Me(17)),ps(this),this.s=2,eo(this)):lm(this,this.S-a)};function eo(a){a.j.G==0||a.J||Om(a.j,a)}function ps(a){Pc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Wn(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Dc(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Oc(f.h,a))){if(!a.K&&Oc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)rl(f),tl(f);else break e;Vc(f),Me(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ji(g(f.Za,f),6e3));if(1>=dm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else gs(f,11)}else if((a.K||f.g==a)&&rl(f),!_(d))for(D=f.Da.g.parse(d),d=0;d<D.length;d++){let Ee=D[d];if(f.T=Ee[0],Ee=Ee[1],f.G==2)if(Ee[0]=="c"){f.K=Ee[1],f.ia=Ee[2];const _t=Ee[3];_t!=null&&(f.la=_t,f.j.info("VER="+f.la));const wt=Ee[4];wt!=null&&(f.Aa=wt,f.j.info("SVER="+f.Aa));const ei=Ee[5];ei!=null&&typeof ei=="number"&&0<ei&&(y=1.5*ei,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const mn=a.g;if(mn){const il=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(il){var j=y.h;j.g||il.indexOf("spdy")==-1&&il.indexOf("quic")==-1&&il.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(jc(j,j.h),j.h=null))}if(y.D){const Uc=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(y.ya=Uc,Pe(y.I,y.D,Uc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var $=a;if(y.qa=Mm(y,y.J?y.ia:null,y.W),$.K){hm(y.h,$);var Se=$,dt=y.L;dt&&(Se.I=dt),Se.B&&(Pc(Se),Ga(Se)),y.g=$}else Pm(y);0<f.i.length&&nl(f)}else Ee[0]!="stop"&&Ee[0]!="close"||gs(f,7);else f.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?gs(f,7):Mc(f):Ee[0]!="noop"&&f.l&&f.l.ta(Ee),f.v=0)}}Kn(4)}catch{}}var DE=class{constructor(a,d){this.g=a,this.map=d}};function um(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dm(a){return a.h?1:a.g?a.g.size:0}function Oc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function jc(a,d){a.g?a.g.add(d):a.h=d}function hm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}um.prototype.cancel=function(){if(this.i=fm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return R(a.i)}function OE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,y=0;y<f;y++)d.push(a[y]);return d}d=[],f=0;for(y in a)d[f++]=a[y];return d}function jE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const y in a)d[f++]=y;return d}}}function pm(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=jE(a),y=OE(a),D=y.length,j=0;j<D;j++)d.call(void 0,y[j],f&&f[j],a)}var mm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LE(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),D=null;if(0<=y){var j=a[f].substring(0,y);D=a[f].substring(y+1)}else j=a[f];d(j,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ms(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ms){this.h=a.h,Qa(this,a.j),this.o=a.o,this.g=a.g,Ya(this,a.s),this.l=a.l;var d=a.i,f=new ro;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),gm(this,f),this.m=a.m}else a&&(d=String(a).match(mm))?(this.h=!1,Qa(this,d[1]||"",!0),this.o=to(d[2]||""),this.g=to(d[3]||"",!0),Ya(this,d[4]),this.l=to(d[5]||"",!0),gm(this,d[6]||"",!0),this.m=to(d[7]||"")):(this.h=!1,this.i=new ro(null,this.h))}ms.prototype.toString=function(){var a=[],d=this.j;d&&a.push(no(d,ym,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(no(d,ym,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(no(f,f.charAt(0)=="/"?qE:VE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",no(f,FE)),a.join("")};function Gn(a){return new ms(a)}function Qa(a,d,f){a.j=f?to(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ya(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function gm(a,d,f){d instanceof ro?(a.i=d,zE(a.i,a.h)):(f||(d=no(d,UE)),a.i=new ro(d,a.h))}function Pe(a,d,f){a.i.set(d,f)}function Xa(a){return Pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function to(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function no(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,ME),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ME(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ym=/[#\/\?@]/g,VE=/[#\?:]/g,qE=/[#\?]/g,UE=/[#\?@]/g,FE=/#/g;function ro(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Er(a){a.g||(a.g=new Map,a.h=0,a.i&&LE(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=ro.prototype,t.add=function(a,d){Er(this),this.i=null,a=Js(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function vm(a,d){Er(a),d=Js(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function _m(a,d){return Er(a),d=Js(a,d),a.g.has(d)}t.forEach=function(a,d){Er(this),this.g.forEach(function(f,y){f.forEach(function(D){a.call(d,D,y,this)},this)},this)},t.na=function(){Er(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let y=0;y<d.length;y++){const D=a[y];for(let j=0;j<D.length;j++)f.push(d[y])}return f},t.V=function(a){Er(this);let d=[];if(typeof a=="string")_m(this,a)&&(d=d.concat(this.g.get(Js(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return Er(this),this.i=null,a=Js(this,a),_m(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function wm(a,d,f){vm(a,d),0<f.length&&(a.i=null,a.g.set(Js(a,d),R(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var y=d[f];const j=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var D=j;$[y]!==""&&(D+="="+encodeURIComponent(String($[y]))),a.push(D)}}return this.i=a.join("&")};function Js(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function zE(a,d){d&&!a.j&&(Er(a),a.i=null,a.g.forEach(function(f,y){var D=y.toLowerCase();y!=D&&(vm(this,y),wm(this,D,f))},a)),a.j=d}function BE(a,d){const f=new Zi;if(l.Image){const y=new Image;y.onload=A(Tr,f,"TestLoadImage: loaded",!0,d,y),y.onerror=A(Tr,f,"TestLoadImage: error",!1,d,y),y.onabort=A(Tr,f,"TestLoadImage: abort",!1,d,y),y.ontimeout=A(Tr,f,"TestLoadImage: timeout",!1,d,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function $E(a,d){const f=new Zi,y=new AbortController,D=setTimeout(()=>{y.abort(),Tr(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(j=>{clearTimeout(D),j.ok?Tr(f,"TestPingServer: ok",!0,d):Tr(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Tr(f,"TestPingServer: error",!1,d)})}function Tr(a,d,f,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(f)}catch{}}function WE(){this.g=new Yi}function HE(a,d,f){const y=f||"";try{pm(a,function(D,j){let $=D;h(D)&&($=Hn(D)),d.push(y+j+"="+encodeURIComponent($))})}catch(D){throw d.push(y+"type="+encodeURIComponent("_badmap")),D}}function Ja(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Ja,Xi),Ja.prototype.g=function(){return new Za(this.l,this.j)},Ja.prototype.i=function(a){return function(){return a}}({});function Za(a,d){H.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Za,H),t=Za.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,io(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,so(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?so(this):io(this),this.readyState==3&&xm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,so(this))},t.Qa=function(a){this.g&&(this.response=a,so(this))},t.ga=function(){this.g&&so(this)};function so(a){a.readyState=4,a.l=null,a.j=null,a.v=null,io(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function io(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Em(a){let d="";return z(a,function(f,y){d+=y,d+=":",d+=f,d+=`\r
`}),d}function Lc(a,d,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Em(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Pe(a,d,f))}function We(a){H.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(We,H);var KE=/^https?$/i,GE=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rc.g(),this.v=this.o?$a(this.o):$a(Rc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){Tm(this,j);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)f.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const j of y.keys())f.set(j,y.get(j));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(j=>j.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(GE,d,void 0))||y||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,$]of f)this.g.setRequestHeader(j,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Am(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){Tm(this,j)}};function Tm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Im(a),el(a)}function Im(a){a.A||(a.A=!0,ce(a,"complete"),ce(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ce(this,"complete"),ce(this,"abort"),el(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),el(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?km(this):this.bb())},t.bb=function(){km(this)};function km(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Qn(a)!=4||a.Z()!=2)){if(a.u&&Qn(a)==4)qe(a.Ea,0,a);else if(ce(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var y;if(y=$===0){var D=String(a.D).match(mm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),y=!KE.test(D?D.toLowerCase():"")}f=y}if(f)ce(a,"complete"),ce(a,"success");else{a.m=6;try{var j=2<Qn(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",Im(a)}}finally{el(a)}}}}function el(a,d){if(a.g){Am(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ce(a,"ready");try{f.onreadystatechange=y}catch{}}}function Am(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ds(d)}};function Sm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function QE(a){const d={};a=(a.g&&2<=Qn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var f=S(a[y]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const j=d[D]||[];d[D]=j,j.push(f)}E(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oo(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function bm(a){this.Aa=0,this.i=[],this.j=new Zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oo("baseRetryDelayMs",5e3,a),this.cb=oo("retryDelaySeedMs",1e4,a),this.Wa=oo("forwardChannelMaxRetries",2,a),this.wa=oo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new um(a&&a.concurrentRequestLimit),this.Da=new WE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bm.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,y){Me(0),this.W=a,this.H=d||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Mm(this,null,this.W),nl(this)};function Mc(a){if(Rm(a),a.G==3){var d=a.U++,f=Gn(a.I);if(Pe(f,"SID",a.K),Pe(f,"RID",d),Pe(f,"TYPE","terminate"),ao(a,f),d=new xr(a,a.j,d),d.L=2,d.v=Xa(Gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Vm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ga(d)}Lm(a)}function tl(a){a.g&&(qc(a),a.g.cancel(),a.g=null)}function Rm(a){tl(a),a.u&&(l.clearTimeout(a.u),a.u=null),rl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function nl(a){if(!cm(a.h)&&!a.s){a.s=!0;var d=a.Ga;ge||re(),B||(ge(),B=!0),Z.add(d,a),a.B=0}}function YE(a,d){return dm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ji(g(a.Ga,a,d),jm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new xr(this,this.j,a);let j=this.o;if(this.S&&(j?(j=v(j),I(j,this.S)):j=this.S),this.m!==null||this.O||(D.H=j,j=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Cm(this,D,d),f=Gn(this.I),Pe(f,"RID",a),Pe(f,"CVER",22),this.D&&Pe(f,"X-HTTP-Session-Id",this.D),ao(this,f),j&&(this.O?d="headers="+encodeURIComponent(String(Em(j)))+"&"+d:this.m&&Lc(f,this.m,j)),jc(this.h,D),this.Ua&&Pe(f,"TYPE","init"),this.P?(Pe(f,"$req",d),Pe(f,"SID","null"),D.T=!0,Cc(D,f,null)):Cc(D,f,d),this.G=2}}else this.G==3&&(a?Nm(this,a):this.i.length==0||cm(this.h)||Nm(this))};function Nm(a,d){var f;d?f=d.l:f=a.U++;const y=Gn(a.I);Pe(y,"SID",a.K),Pe(y,"RID",f),Pe(y,"AID",a.T),ao(a,y),a.m&&a.o&&Lc(y,a.m,a.o),f=new xr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Cm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),jc(a.h,f),Cc(f,y,d)}function ao(a,d){a.H&&z(a.H,function(f,y){Pe(d,y,f)}),a.l&&pm({},function(f,y){Pe(d,y,f)})}function Cm(a,d,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let j=-1;for(;;){const $=["count="+f];j==-1?0<f?(j=D[0].g,$.push("ofs="+j)):j=0:$.push("ofs="+j);let Se=!0;for(let dt=0;dt<f;dt++){let Ee=D[dt].g;const _t=D[dt].map;if(Ee-=j,0>Ee)j=Math.max(0,D[dt].g-100),Se=!1;else try{HE(_t,$,"req"+Ee+"_")}catch{y&&y(_t)}}if(Se){y=$.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,y}function Pm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;ge||re(),B||(ge(),B=!0),Z.add(d,a),a.v=0}}function Vc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ji(g(a.Fa,a),jm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Dm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ji(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),tl(this),Dm(this))};function qc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Dm(a){a.g=new xr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Gn(a.qa);Pe(d,"RID","rpc"),Pe(d,"SID",a.K),Pe(d,"AID",a.T),Pe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Pe(d,"TO",a.ja),Pe(d,"TYPE","xmlhttp"),ao(a,d),a.m&&a.o&&Lc(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Xa(Gn(d)),f.m=null,f.P=!0,om(f,a)}t.Za=function(){this.C!=null&&(this.C=null,tl(this),Vc(this),Me(19))};function rl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Om(a,d){var f=null;if(a.g==d){rl(a),qc(a),a.g=null;var y=2}else if(Oc(a.h,d))f=d.D,hm(a.h,d),y=1;else return;if(a.G!=0){if(d.o)if(y==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var D=a.B;y=Ys(),ce(y,new Wa(y,f)),nl(a)}else Pm(a);else if(D=d.s,D==3||D==0&&0<d.X||!(y==1&&YE(a,d)||y==2&&Vc(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),D){case 1:gs(a,5);break;case 4:gs(a,10);break;case 3:gs(a,6);break;default:gs(a,2)}}}function jm(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function gs(a,d){if(a.j.info("Error code "+d),d==2){var f=g(a.fb,a),y=a.Xa;const D=!y;y=new ms(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qa(y,"https"),Xa(y),D?BE(y.toString(),f):$E(y.toString(),f)}else Me(2);a.G=0,a.l&&a.l.sa(d),Lm(a),Rm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Lm(a){if(a.G=0,a.ka=[],a.l){const d=fm(a.h);(d.length!=0||a.i.length!=0)&&(N(a.ka,d),N(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Mm(a,d,f){var y=f instanceof ms?Gn(f):new ms(f);if(y.g!="")d&&(y.g=d+"."+y.g),Ya(y,y.s);else{var D=l.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var j=new ms(null);y&&Qa(j,y),d&&(j.g=d),D&&Ya(j,D),f&&(j.l=f),y=j}return f=a.D,d=a.ya,f&&d&&Pe(y,f,d),Pe(y,"VER",a.la),ao(a,y),y}function Vm(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new We(new Ja({eb:f})):new We(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qm(){}t=qm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function sl(){}sl.prototype.g=function(a,d){return new Kt(a,d)};function Kt(a,d){H.call(this),this.g=new bm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!_(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Zs(this)}b(Kt,H),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Mc(this.g)},Kt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Hn(a),a=f);d.i.push(new DE(d.Ya++,a)),d.G==3&&nl(d)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,Kt.aa.N.call(this)};function Um(a){le.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}b(Um,le);function Fm(){tt.call(this),this.status=1}b(Fm,tt);function Zs(a){this.g=a}b(Zs,qm),Zs.prototype.ua=function(){ce(this.g,"a")},Zs.prototype.ta=function(a){ce(this.g,new Um(a))},Zs.prototype.sa=function(a){ce(this.g,new Fm)},Zs.prototype.ra=function(){ce(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,dw=function(){return new sl},cw=function(){return Ys()},uw=Ct,Ph={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ha.NO_ERROR=0,Ha.TIMEOUT=8,Ha.HTTP_ERROR=6,$l=Ha,rm.COMPLETE="complete",lw=rm,P.EventType=ne,ne.OPEN="a",ne.CLOSE="b",ne.ERROR="c",ne.MESSAGE="d",H.prototype.listen=H.prototype.K,ko=P,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,aw=We}).apply(typeof Tl<"u"?Tl:typeof self<"u"?self:typeof window<"u"?window:{});const my="@firebase/firestore";/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let Wi="10.14.0";/**
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
 */const Ls=new Yf("@firebase/firestore");function yo(){return Ls.logLevel}function X(t,...e){if(Ls.logLevel<=me.DEBUG){const n=e.map(Zf);Ls.debug(`Firestore (${Wi}): ${t}`,...n)}}function fr(t,...e){if(Ls.logLevel<=me.ERROR){const n=e.map(Zf);Ls.error(`Firestore (${Wi}): ${t}`,...n)}}function Oi(t,...e){if(Ls.logLevel<=me.WARN){const n=e.map(Zf);Ls.warn(`Firestore (${Wi}): ${t}`,...n)}}function Zf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function ke(t,e){t||ie()}function ae(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class DA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OA{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new or,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new hw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new It(e)}}class jA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class LA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new jA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new MA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class fw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=qA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function ji(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new st(0,0))}static max(){return new oe(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ca{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ca?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends ca{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const UA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends ca{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return UA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Oe.fromString(e))}static fromName(e){return new te(Oe.fromString(e).popFirst(5))}static empty(){return new te(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Oe(e.slice()))}}function FA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new Xr(s,te.empty(),e)}function zA(t){return new Xr(t.readTime,t.key,-1)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(oe.min(),te.empty(),-1)}static max(){return new Xr(oe.max(),te.empty(),-1)}}function BA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const $A="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sa(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==$A)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function HA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ba(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ep{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ep.oe=-1;function lc(t){return t==null}function bu(t){return t===0&&1/t==-1/0}function KA(t){return typeof t=="number"&&Number.isInteger(t)&&!bu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yy(this.data.getIterator())}getIteratorFrom(e){return new yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new gt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mw("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const GA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=GA.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ms(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
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
 */function tp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function np(t){const e=t.mapValue.fields.__previous_value__;return tp(e)?np(e):e}function da(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */class QA{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class ha{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ha&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const kl={mapValue:{}};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tp(t)?4:XA(t)?9007199254740991:YA(t)?10:11:ie()}function Mn(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return da(t).isEqual(da(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jr(s.timestampValue),l=Jr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ms(s.bytesValue).isEqual(Ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),l=Qe(i.doubleValue);return o===l?bu(o)===bu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(gy(o)!==gy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Mn(o[u],l[u])))return!1;return!0}(t,e);default:return ie()}}function fa(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Li(t,e){if(t===e)return 0;const n=Vs(t),r=Vs(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Qe(i.integerValue||i.doubleValue),u=Qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return vy(t.timestampValue,e.timestampValue);case 4:return vy(da(t),da(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ms(i),u=Ms(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=Te(l[h],u[h]);if(p!==0)return p}return Te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Te(Qe(i.latitude),Qe(o.latitude));return l!==0?l:Te(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _y(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,p;const m=i.fields||{},g=o.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,b=(u=g.value)===null||u===void 0?void 0:u.arrayValue,R=Te(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((p=b==null?void 0:b.values)===null||p===void 0?void 0:p.length)||0);return R!==0?R:_y(A,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===kl.mapValue&&o===kl.mapValue)return 0;if(i===kl.mapValue)return 1;if(o===kl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=Te(u[m],p[m]);if(g!==0)return g;const A=Li(l[u[m]],h[p[m]]);if(A!==0)return A}return Te(u.length,p.length)}(t.mapValue,e.mapValue);default:throw ie()}}function vy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Jr(t),r=Jr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function _y(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Li(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Mi(t){return Dh(t)}function Dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Dh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Dh(n.fields[o])}`;return s+"}"}(t.mapValue):ie()}function wy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Oh(t){return!!t&&"integerValue"in t}function rp(t){return!!t&&"arrayValue"in t}function xy(t){return!!t&&"nullValue"in t}function Ey(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wl(t){return!!t&&"mapValue"in t}function YA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=qo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Wl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Hs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(qo(this.value))}}function gw(t){const e=[];return Hs(t.fields,(n,r)=>{const s=new pt([n]);if(Wl(r)){const i=gw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Yt(e)}/**
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
 */class At{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new At(e,0,oe.min(),oe.min(),oe.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new At(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new At(e,2,n,oe.min(),oe.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,oe.min(),oe.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ru{constructor(e,n){this.position=e,this.inclusive=n}}function Ty(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Li(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Iy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function JA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yw{}class Ze extends yw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eS(e,n,r):n==="array-contains"?new rS(e,r):n==="in"?new sS(e,r):n==="not-in"?new iS(e,r):n==="array-contains-any"?new oS(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tS(e,r):new nS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Li(n,this.value)):n!==null&&Vs(this.value)===Vs(n)&&this.matchesComparison(Li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kn extends yw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new kn(e,n)}matches(e){return vw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vw(t){return t.op==="and"}function _w(t){return ZA(t)&&vw(t)}function ZA(t){for(const e of t.filters)if(e instanceof kn)return!1;return!0}function jh(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Mi(t.value);if(_w(t))return t.filters.map(e=>jh(e)).join(",");{const e=t.filters.map(n=>jh(n)).join(",");return`${t.op}(${e})`}}function ww(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&Mn(r.value,s.value)}(t,e):t instanceof kn?function(r,s){return s instanceof kn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&ww(o,s.filters[l]),!0):!1}(t,e):void ie()}function xw(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Mi(n.value)}`}(t):t instanceof kn?function(n){return n.op.toString()+" {"+n.getFilters().map(xw).join(" ,")+"}"}(t):"Filter"}class eS extends Ze{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class tS extends Ze{constructor(e,n){super(e,"in",n),this.keys=Ew("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nS extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Ew("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ew(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class rS extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rp(n)&&fa(n.arrayValue,this.value)}}class sS extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class iS extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fa(this.value.arrayValue,n)}}class oS extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
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
 */class aS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function ky(t,e=null,n=[],r=[],s=null,i=null,o=null){return new aS(t,e,n,r,s,i,o)}function sp(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mi(r)).join(",")),e.ue=n}return e.ue}function ip(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ww(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Iy(t.startAt,e.startAt)&&Iy(t.endAt,e.endAt)}function Lh(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lS(t,e,n,r,s,i,o,l){return new Hi(t,e,n,r,s,i,o,l)}function uc(t){return new Hi(t)}function Ay(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tw(t){return t.collectionGroup!==null}function Uo(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new gt(pt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pa(i,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new pa(pt.keyField(),r))}return e.ce}function On(t){const e=ae(t);return e.le||(e.le=uS(e,Uo(t))),e.le}function uS(t,e){if(t.limitType==="F")return ky(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pa(s.field,i)});const n=t.endAt?new Ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ru(t.startAt.position,t.startAt.inclusive):null;return ky(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mh(t,e){const n=t.filters.concat([e]);return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nu(t,e,n){return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cc(t,e){return ip(On(t),On(e))&&t.limitType===e.limitType}function Iw(t){return`${sp(On(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>xw(s)).join(", ")}]`),lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Mi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Mi(s)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Uo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Ty(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Uo(r),s)||r.endAt&&!function(o,l,u){const h=Ty(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Uo(r),s))}(t,e)}function cS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kw(t){return(e,n)=>{let r=!1;for(const s of Uo(t)){const i=dS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dS(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Li(u,h):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pw(this.inner)}size(){return this.innerSize}}/**
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
 */const hS=new Be(te.comparator);function pr(){return hS}const Aw=new Be(te.comparator);function Ao(...t){let e=Aw;for(const n of t)e=e.insert(n.key,n);return e}function Sw(t){let e=Aw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Is(){return Fo()}function bw(){return Fo()}function Fo(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const fS=new Be(te.comparator),pS=new gt(te.comparator);function fe(...t){let e=pS;for(const n of t)e=e.add(n);return e}const mS=new gt(Te);function gS(){return mS}/**
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
 */function op(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bu(e)?"-0":e}}function Rw(t){return{integerValue:""+t}}function yS(t,e){return KA(e)?Rw(e):op(t,e)}/**
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
 */class hc{constructor(){this._=void 0}}function vS(t,e,n){return t instanceof ma?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tp(i)&&(i=np(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ga?Cw(t,e):t instanceof ya?Pw(t,e):function(s,i){const o=Nw(s,i),l=Sy(o)+Sy(s.Pe);return Oh(o)&&Oh(s.Pe)?Rw(l):op(s.serializer,l)}(t,e)}function _S(t,e,n){return t instanceof ga?Cw(t,e):t instanceof ya?Pw(t,e):n}function Nw(t,e){return t instanceof Cu?function(r){return Oh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ma extends hc{}class ga extends hc{constructor(e){super(),this.elements=e}}function Cw(t,e){const n=Dw(e);for(const r of t.elements)n.some(s=>Mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ya extends hc{constructor(e){super(),this.elements=e}}function Pw(t,e){let n=Dw(e);for(const r of t.elements)n=n.filter(s=>!Mn(s,r));return{arrayValue:{values:n}}}class Cu extends hc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Sy(t){return Qe(t.integerValue||t.doubleValue)}function Dw(t){return rp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class wS{constructor(e,n){this.field=e,this.transform=n}}function xS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ga&&s instanceof ga||r instanceof ya&&s instanceof ya?ji(r.elements,s.elements,Mn):r instanceof Cu&&s instanceof Cu?Mn(r.Pe,s.Pe):r instanceof ma&&s instanceof ma}(t.transform,e.transform)}class ES{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fc{}function Ow(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pc(t.key,jt.none()):new Ra(t.key,t.data,jt.none());{const n=t.data,r=Ft.empty();let s=new gt(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ss(t.key,r,new Yt(s.toArray()),jt.none())}}function TS(t,e,n){t instanceof Ra?function(s,i,o){const l=s.value.clone(),u=Ry(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,i,o){if(!Hl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ry(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(jw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zo(t,e,n,r){return t instanceof Ra?function(i,o,l,u){if(!Hl(i.precondition,o))return l;const h=i.value.clone(),p=Ny(i.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ss?function(i,o,l,u){if(!Hl(i.precondition,o))return l;const h=Ny(i.fieldTransforms,u,o),p=o.data;return p.setAll(jw(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Hl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function IS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Nw(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function by(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ji(r,s,(i,o)=>xS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ss extends fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ry(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,_S(o,l,n[s]))}return r}function Ny(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,vS(i,o,e))}return r}class pc extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kS extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&TS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Ow(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>by(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>by(n,r))}}class ap{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return fS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ap(e,n,r,s)}}/**
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
 */class SS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class bS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,ye;function RS(t){switch(t){default:return ie();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Lw(t){if(t===void 0)return fr("GRPC error has no .code"),M.UNKNOWN;switch(t){case Xe.OK:return M.OK;case Xe.CANCELLED:return M.CANCELLED;case Xe.UNKNOWN:return M.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return M.INTERNAL;case Xe.UNAVAILABLE:return M.UNAVAILABLE;case Xe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Xe.NOT_FOUND:return M.NOT_FOUND;case Xe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Xe.ABORTED:return M.ABORTED;case Xe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Xe.DATA_LOSS:return M.DATA_LOSS;default:return ie()}}(ye=Xe||(Xe={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function NS(){return new TextEncoder}/**
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
 */const CS=new bs([4294967295,4294967295],0);function Cy(t){const e=NS().encode(t),n=new ow;return n.update(e),new Uint8Array(n.digest())}function Py(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new bs([n,r],0),new bs([s,i],0)]}class lp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=bs.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(bs.fromNumber(r)));return s.compare(CS)===1&&(s=new bs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Cy(e),[r,s]=Py(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Cy(e),[r,s]=Py(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mc(oe.min(),s,new Be(Te),pr(),fe())}}class Na{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Na(r,n,fe(),fe(),fe())}}/**
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
 */class Kl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Mw{constructor(e,n){this.targetId=e,this.me=n}}class Vw{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Dy{constructor(){this.fe=0,this.ge=jy(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie()}}),new Na(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=jy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PS{constructor(e){this.Le=e,this.Be=new Map,this.ke=pr(),this.qe=Oy(),this.Qe=new Be(Te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Lh(i))if(r===0){const o=new te(i.path);this.Ue(n,o,At.newNoDocument(o,oe.min()))}else ke(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ms(r).toUint8Array()}catch(u){if(u instanceof mw)return Oi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new lp(o,s,i)}catch(u){return Oi(u instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Lh(l.target)){const u=new te(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,At.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=fe();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new mc(e,n,this.Qe,this.ke,r);return this.ke=pr(),this.qe=Oy(),this.Qe=new Be(Te),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Dy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new gt(Te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Dy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Oy(){return new Be(te.comparator)}function jy(){return new Be(te.comparator)}const DS={asc:"ASCENDING",desc:"DESCENDING"},OS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jS={and:"AND",or:"OR"};class LS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vh(t,e){return t.useProto3Json||lc(e)?e:{value:e}}function Pu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MS(t,e){return Pu(t,e.toTimestamp())}function jn(t){return ke(!!t),oe.fromTimestamp(function(n){const r=Jr(n);return new st(r.seconds,r.nanos)}(t))}function up(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Uw(t){const e=Oe.fromString(t);return ke(Ww(e)),e}function Uh(t,e){return up(t.databaseId,e.path)}function vd(t,e){const n=Uw(e);if(n.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(zw(n))}function Fw(t,e){return up(t.databaseId,e)}function VS(t){const e=Uw(t);return e.length===4?Oe.emptyPath():zw(e)}function Fh(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zw(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ly(t,e,n){return{name:Uh(t,e),fields:n.value.mapValue.fields}}function qS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(ke(p===void 0||typeof p=="string"),vt.fromBase64String(p||"")):(ke(p===void 0||p instanceof Buffer||p instanceof Uint8Array),vt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?M.UNKNOWN:Lw(h.code);return new G(p,h.message||"")}(o);n=new Vw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vd(t,r.document.name),i=jn(r.document.updateTime),o=r.document.createTime?jn(r.document.createTime):oe.min(),l=new Ft({mapValue:{fields:r.document.fields}}),u=At.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new Kl(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vd(t,r.document),i=r.readTime?jn(r.readTime):oe.min(),o=At.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Kl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vd(t,r.document),i=r.removedTargetIds||[];n=new Kl([],i,s,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new bS(s,i),l=r.targetId;n=new Mw(l,o)}}return n}function US(t,e){let n;if(e instanceof Ra)n={update:Ly(t,e.key,e.value)};else if(e instanceof pc)n={delete:Uh(t,e.key)};else if(e instanceof ss)n={update:Ly(t,e.key,e.data),updateMask:QS(e.fieldMask)};else{if(!(e instanceof kS))return ie();n={verify:Uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Cu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:MS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie()}(t,e.precondition)),n}function FS(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?jn(s.updateTime):jn(i);return o.isEqual(oe.min())&&(o=jn(i)),new ES(o,s.transformResults||[])}(n,e))):[]}function zS(t,e){return{documents:[Fw(t,e.path)]}}function BS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fw(t,s);const i=function(h){if(h.length!==0)return $w(kn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(g){return{field:ri(g.field),direction:HS(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function $S(t){let e=VS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=Bw(m);return g instanceof kn&&_w(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(b){return new pa(si(b.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,lc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,A=m.values||[];return new Ru(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,A=m.values||[];return new Ru(A,g)}(n.endAt)),lS(e,s,o,i,l,"F",u,h)}function WS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=si(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=si(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=si(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(si(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kn.create(n.compositeFilter.filters.map(r=>Bw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function HS(t){return DS[t]}function KS(t){return OS[t]}function GS(t){return jS[t]}function ri(t){return{fieldPath:t.canonicalString()}}function si(t){return pt.fromServerFormat(t.fieldPath)}function $w(t){return t instanceof Ze?function(n){if(n.op==="=="){if(Ey(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if(xy(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ey(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if(xy(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:KS(n.op),value:n.value}}}(t):t instanceof kn?function(n){const r=n.getFilters().map(s=>$w(s));return r.length===1?r[0]:{compositeFilter:{op:GS(n.op),filters:r}}}(t):ie()}function QS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ww(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Lr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),l=vt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class YS{constructor(e){this.ct=e}}function XS(t){const e=$S({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nu(e,e.limit,"L"):e}/**
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
 */class JS{constructor(){this.un=new ZS}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Xr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class ZS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(Oe.comparator)).toArray()}}/**
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
 */class Vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vi(0)}static kn(){return new Vi(-1)}}/**
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
 */class e2{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class t2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class n2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zo(r.mutation,s,Yt.empty(),st.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const s=Is();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ao();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Is();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=pr();const o=Fo(),l=function(){return Fo()}();return n.forEach((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof ss)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),zo(p.mutation,h,p.mutation.getFieldMask(),st.now())):o.set(h.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var m;return l.set(h,new t2(p,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Fo();let s=new Be((o,l)=>o-l),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||Yt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(s.get(l.batchId)||fe()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=bw();p.forEach(g=>{if(!i.has(g)){const A=Ow(n.get(g),r.get(g));A!==null&&m.set(g,A),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Is());let l=-1,u=i;return o.next(h=>U.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?U.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,fe())).next(p=>({batchId:l,changes:Sw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=Ao();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,u=>{const h=function(m,g){return new Hi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,At.newInvalidDocument(p)))});let l=Ao();return o.forEach((u,h)=>{const p=i.get(u);p!==void 0&&zo(p.mutation,h,Yt.empty(),st.now()),dc(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class r2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:jn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:XS(s.bundledQuery),readTime:jn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class s2{constructor(){this.overlays=new Be(te.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Is();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Is(),i=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=Is(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Is(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SS(n,r));let i=this.Ir.get(n);i===void 0&&(i=fe(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class i2{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class cp{constructor(){this.Tr=new gt(ot.Er),this.dr=new gt(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ot(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new Oe([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new Oe([])),r=new ot(n,e),s=new ot(n,e+1);let i=fe();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||Te(e.wr,n.wr)}static Ar(e,n){return Te(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
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
 */class o2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new gt(ot.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Te);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new ot(new te(i),0);let l=new gt(Te);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ot(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class a2{constructor(e){this.Mr=e,this.docs=function(){return new Be(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=pr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=pr();const o=n.path,l=new te(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||BA(zA(p),r)<=0||(s.has(p.key)||dc(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new l2(this)}getSize(e){return U.resolve(this.size)}}class l2 extends e2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class u2{constructor(e){this.persistence=e,this.Nr=new Ki(n=>sp(n),ip),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new cp,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class c2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ep(0),this.Kr=!1,this.Kr=!0,this.$r=new i2,this.referenceDelegate=e(this),this.Ur=new u2(this),this.indexManager=new JS,this.remoteDocumentCache=function(s){return new a2(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new YS(n),this.Gr=new r2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new s2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new o2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new d2(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class d2 extends WA{constructor(e){super(),this.currentSequenceNumber=e}}class dp{constructor(e){this.persistence=e,this.Jr=new cp,this.Yr=null}static Zr(e){return new dp(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=te.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class hp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hp(e,n.fromCache,r,s)}}/**
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
 */class h2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class f2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return fk()?8:HA(Rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new h2;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(yo()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(yo()<=me.DEBUG&&X("QueryEngine","Query:",ni(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(yo()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):U.resolve())}Yi(e,n){if(Ay(n))return U.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Nu(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=fe(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Nu(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return Ay(n)||s.isEqual(oe.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(yo()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ni(n)),this.rs(e,o,n,FA(s,-1)).next(l=>l))})}ts(e,n){let r=new gt(kw(e));return n.forEach((s,i)=>{dc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return yo()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ni(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class p2{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Be(Te),this._s=new Ki(i=>sp(i),ip),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function m2(t,e,n,r){return new p2(t,e,n,r)}async function Hw(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=fe();for(const h of s){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function g2(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,g=m.keys();let A=U.resolve();return g.forEach(b=>{A=A.next(()=>p.getEntry(u,b)).next(R=>{const N=h.docVersions.get(b);ke(N!==null),R.version.compareTo(N)<0&&(m.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),p.addEntry(R)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=fe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Kw(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function y2(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(vt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),s=s.insert(m,A),function(R,N,w){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,A,p)&&l.push(n.Ur.updateTargetData(i,A))});let u=pr(),h=fe();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(v2(i,o,e.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!r.isEqual(oe.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function v2(t,e,n){let r=fe(),s=fe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=pr();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function _2(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function w2(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zh(t,e,n){const r=ae(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ba(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function My(t,e,n){const r=ae(t);let s=oe.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const m=ae(u),g=m._s.get(p);return g!==void 0?U.resolve(m.os.get(g)):m.Ur.getTargetData(h,p)}(r,o,On(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:fe())).next(l=>(x2(r,cS(e),l),{documents:l,Ts:i})))}function x2(t,e,n){let r=t.us.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Vy{constructor(){this.activeTargetIds=gS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E2{constructor(){this.so=new Vy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Vy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class T2{_o(e){}shutdown(){}}/**
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
 */class qy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Al=null;function _d(){return Al===null?Al=function(){return 268435456+Math.round(2147483648*Math.random())}():Al++,"0x"+Al.toString(16)}/**
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
 */const I2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class k2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Tt="WebChannelConnection";class A2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=_d(),u=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(p=>(X("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Oi("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=I2[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=_d();return new Promise((o,l)=>{const u=new aw;u.setWithCredentials(!0),u.listenOnce(lw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $l.NO_ERROR:const p=u.getResponseJson();X(Tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case $l.TIMEOUT:X(Tt,`RPC '${e}' ${i} timed out`),l(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case $l.HTTP_ERROR:const m=u.getStatus();if(X(Tt,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g==null?void 0:g.error;if(A&&A.status&&A.message){const b=function(N){const w=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(w)>=0?w:M.UNKNOWN}(A.status);l(new G(b,A.message))}else l(new G(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(M.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{X(Tt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(Tt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=_d(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dw(),l=cw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");X(Tt,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,A=!1;const b=new k2({Io:N=>{A?X(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(X(Tt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),X(Tt,`RPC '${e}' stream ${s} sending:`,N),m.send(N))},To:()=>m.close()}),R=(N,w,_)=>{N.listen(w,k=>{try{_(k)}catch(O){setTimeout(()=>{throw O},0)}})};return R(m,ko.EventType.OPEN,()=>{A||(X(Tt,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),R(m,ko.EventType.CLOSE,()=>{A||(A=!0,X(Tt,`RPC '${e}' stream ${s} transport closed`),b.So())}),R(m,ko.EventType.ERROR,N=>{A||(A=!0,Oi(Tt,`RPC '${e}' stream ${s} transport errored:`,N),b.So(new G(M.UNAVAILABLE,"The operation could not be completed")))}),R(m,ko.EventType.MESSAGE,N=>{var w;if(!A){const _=N.data[0];ke(!!_);const k=_,O=k.error||((w=k[0])===null||w===void 0?void 0:w.error);if(O){X(Tt,`RPC '${e}' stream ${s} received error:`,O);const q=O.status;let z=function(x){const I=Xe[x];if(I!==void 0)return Lw(I)}(q),E=O.message;z===void 0&&(z=M.INTERNAL,E="Unknown error status: "+q+" with message "+O.message),A=!0,b.So(new G(z,E)),m.close()}else X(Tt,`RPC '${e}' stream ${s} received:`,_),b.bo(_)}}),R(l,uw.STAT_EVENT,N=>{N.stat===Ph.PROXY?X(Tt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ph.NOPROXY&&X(Tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function wd(){return typeof document<"u"?document:null}/**
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
 */function gc(t){return new LS(t,!0)}/**
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
 */class Gw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Qw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class S2 extends Qw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=qS(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?jn(o.readTime):oe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Fh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Lh(u)?{documents:zS(i,u)}:{query:BS(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=qw(i,o.resumeToken);const h=Vh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(oe.min())>0){l.readTime=Pu(i,o.snapshotVersion.toTimestamp());const h=Vh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=WS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Fh(this.serializer),n.removeTarget=e,this.a_(n)}}class b2 extends Qw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=FS(e.writeResults,e.commitTime),r=jn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Fh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>US(this.serializer,r))};this.a_(n)}}/**
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
 */class R2 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,qh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,qh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class N2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fr(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class C2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ks(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ae(u);h.L_.add(4),await Ca(h),h.q_.set("Unknown"),h.L_.delete(4),await yc(h)}(this))})}),this.q_=new N2(r,s)}}async function yc(t){if(Ks(t))for(const e of t.B_)await e(!0)}async function Ca(t){for(const e of t.B_)await e(!1)}function Yw(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),gp(n)?mp(n):Gi(n).r_()&&pp(n,e))}function fp(t,e){const n=ae(t),r=Gi(n);n.N_.delete(e),r.r_()&&Xw(n,e),n.N_.size===0&&(r.r_()?r.o_():Ks(n)&&n.q_.set("Unknown"))}function pp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gi(t).A_(e)}function Xw(t,e){t.Q_.xe(e),Gi(t).R_(e)}function mp(t){t.Q_=new PS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gi(t).start(),t.q_.v_()}function gp(t){return Ks(t)&&!Gi(t).n_()&&t.N_.size>0}function Ks(t){return ae(t).L_.size===0}function Jw(t){t.Q_=void 0}async function P2(t){t.q_.set("Online")}async function D2(t){t.N_.forEach((e,n)=>{pp(t,e)})}async function O2(t,e){Jw(t),gp(t)?(t.q_.M_(e),mp(t)):t.q_.set("Unknown")}async function j2(t,e,n){if(t.q_.set("Online"),e instanceof Vw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Du(t,r)}else if(e instanceof Kl?t.Q_.Ke(e):e instanceof Mw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(oe.min()))try{const r=await Kw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(h);p&&i.N_.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(vt.EMPTY_BYTE_STRING,p.snapshotVersion)),Xw(i,u);const m=new Lr(p.target,u,h,p.sequenceNumber);pp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Du(t,r)}}async function Du(t,e,n){if(!ba(e))throw e;t.L_.add(1),await Ca(t),t.q_.set("Offline"),n||(n=()=>Kw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await yc(t)})}function Zw(t,e){return e().catch(n=>Du(t,n,e))}async function vc(t){const e=ae(t),n=Zr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;L2(e);)try{const s=await _2(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,M2(e,s)}catch(s){await Du(e,s)}ex(e)&&tx(e)}function L2(t){return Ks(t)&&t.O_.length<10}function M2(t,e){t.O_.push(e);const n=Zr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ex(t){return Ks(t)&&!Zr(t).n_()&&t.O_.length>0}function tx(t){Zr(t).start()}async function V2(t){Zr(t).p_()}async function q2(t){const e=Zr(t);for(const n of t.O_)e.m_(n.mutations)}async function U2(t,e,n){const r=t.O_.shift(),s=ap.from(r,e,n);await Zw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await vc(t)}async function F2(t,e){e&&Zr(t).V_&&await async function(r,s){if(function(o){return RS(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Zr(r).s_(),await Zw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vc(r)}}(t,e),ex(t)&&tx(t)}async function Uy(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Ks(n);n.L_.add(3),await Ca(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await yc(n)}async function z2(t,e){const n=ae(t);e?(n.L_.delete(2),await yc(n)):e||(n.L_.add(2),await Ca(n),n.q_.set("Unknown"))}function Gi(t){return t.K_||(t.K_=function(n,r,s){const i=ae(n);return i.w_(),new S2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:P2.bind(null,t),Ro:D2.bind(null,t),mo:O2.bind(null,t),d_:j2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),gp(t)?mp(t):t.q_.set("Unknown")):(await t.K_.stop(),Jw(t))})),t.K_}function Zr(t){return t.U_||(t.U_=function(n,r,s){const i=ae(n);return i.w_(),new b2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:V2.bind(null,t),mo:F2.bind(null,t),f_:q2.bind(null,t),g_:U2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await vc(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class yp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new yp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vp(t,e){if(fr("AsyncQueue",`${e}: ${t}`),ba(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fy{constructor(){this.W_=new Be(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ie():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new qi(e,n,Ti.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class B2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $2{constructor(){this.queries=zy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ae(n),i=s.queries;s.queries=zy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function zy(){return new Ki(t=>Iw(t),cc)}async function _p(t,e){const n=ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new B2,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=vp(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&xp(n)}async function wp(t,e){const n=ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function W2(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&xp(n)}function H2(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function xp(t){t.Y_.forEach(e=>{e.next()})}var Bh,By;(By=Bh||(Bh={})).ea="default",By.Cache="cache";class Ep{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Bh.Cache}}/**
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
 */class nx{constructor(e){this.key=e}}class rx{constructor(e){this.key=e}}class K2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=kw(e),this.Ra=new Ti(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Fy,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),A=dc(this.query,m)?m:null,b=!!g&&this.mutatedKeys.has(g.key),R=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;g&&A?g.data.isEqual(A.data)?b!==R&&(r.track({type:3,doc:A}),N=!0):this.ga(g,A)||(r.track({type:2,doc:A}),N=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),N=!0):g&&!A&&(r.track({type:1,doc:g}),N=!0,(u||h)&&(l=!0)),N&&(A?(o=o.add(A),i=R?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(A,b){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return R(A)-R(b)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new qi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new rx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new nx(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return qi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class G2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Q2{constructor(e){this.key=e,this.va=!1}}class Y2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ki(l=>Iw(l),cc),this.Ma=new Map,this.xa=new Set,this.Oa=new Be(te.comparator),this.Na=new Map,this.La=new cp,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function X2(t,e,n=!0){const r=ux(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await sx(r,e,n,!0),s}async function J2(t,e){const n=ux(t);await sx(n,e,!0,!1)}async function sx(t,e,n,r){const s=await w2(t.localStore,On(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Z2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Yw(t.remoteStore,s),l}async function Z2(t,e,n,r,s){t.Ka=(m,g,A)=>async function(R,N,w,_){let k=N.view.ma(w);k.ns&&(k=await My(R.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,k)));const O=_&&_.targetChanges.get(N.targetId),q=_&&_.targetMismatches.get(N.targetId)!=null,z=N.view.applyChanges(k,R.isPrimaryClient,O,q);return Wy(R,N.targetId,z.wa),z.snapshot}(t,m,g,A);const i=await My(t.localStore,e,!0),o=new K2(e,i.Ts),l=o.ma(i.documents),u=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Wy(t,n,h.wa);const p=new G2(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function eb(t,e,n){const r=ae(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!cc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fp(r.remoteStore,s.targetId),$h(r,s.targetId)}).catch(Sa)):($h(r,s.targetId),await zh(r.localStore,s.targetId,!0))}async function tb(t,e){const n=ae(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fp(n.remoteStore,r.targetId))}async function nb(t,e,n){const r=ub(t);try{const s=await function(o,l){const u=ae(o),h=st.now(),p=l.reduce((A,b)=>A.add(b.key),fe());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let b=pr(),R=fe();return u.cs.getEntries(A,p).next(N=>{b=N,b.forEach((w,_)=>{_.isValidDocument()||(R=R.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,b)).next(N=>{m=N;const w=[];for(const _ of l){const k=IS(_,m.get(_.key).overlayedDocument);k!=null&&w.push(new ss(_.key,k,gw(k.value.mapValue),jt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,w,l)}).next(N=>{g=N;const w=N.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(A,N.batchId,w)})}).then(()=>({batchId:g.batchId,changes:Sw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Be(Te)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Pa(r,s.changes),await vc(r.remoteStore)}catch(s){const i=vp(s,"Failed to persist write");n.reject(i)}}async function ix(t,e){const n=ae(t);try{const r=await y2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ke(o.va):s.removedDocuments.size>0&&(ke(o.va),o.va=!1))}),await Pa(n,r,e)}catch(r){await Sa(r)}}function $y(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ae(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&xp(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rb(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Be(te.comparator);o=o.insert(i,At.newNoDocument(i,oe.min()));const l=fe().add(i),u=new mc(oe.min(),new Map,new Be(Te),o,l);await ix(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Tp(r)}else await zh(r.localStore,e,!1).then(()=>$h(r,e,n)).catch(Sa)}async function sb(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await g2(n.localStore,e);ax(n,r,null),ox(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pa(n,s)}catch(s){await Sa(s)}}async function ib(t,e,n){const r=ae(t);try{const s=await function(o,l){const u=ae(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ke(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);ax(r,e,n),ox(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pa(r,s)}catch(s){await Sa(s)}}function ox(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ax(t,e,n){const r=ae(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function $h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||lx(t,r)})}function lx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(fp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Tp(t))}function Wy(t,e,n){for(const r of n)r instanceof nx?(t.La.addReference(r.key,e),ob(t,r)):r instanceof rx?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||lx(t,r.key)):ie()}function ob(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),Tp(t))}function Tp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new Q2(n)),t.Oa=t.Oa.insert(n,r),Yw(t.remoteStore,new Lr(On(uc(n.path)),r,"TargetPurposeLimboResolution",ep.oe))}}async function Pa(t,e,n){const r=ae(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=hp.Wi(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const p=ae(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(h,g=>U.forEach(g.$i,A=>p.persistence.referenceDelegate.addReference(m,g.targetId,A)).next(()=>U.forEach(g.Ui,A=>p.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))}catch(m){if(!ba(m))throw m;X("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const A=p.os.get(g),b=A.snapshotVersion,R=A.withLastLimboFreeSnapshotVersion(b);p.os=p.os.insert(g,R)}}}(r.localStore,i))}async function ab(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Hw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pa(n,r.hs)}}function lb(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let s=fe();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function ux(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ix.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rb.bind(null,e),e.Ca.d_=W2.bind(null,e.eventManager),e.Ca.$a=H2.bind(null,e.eventManager),e}function ub(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ib.bind(null,e),e}class Ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return m2(this.persistence,new f2,e.initialUser,this.serializer)}Ga(e){return new c2(dp.Zr,this.serializer)}Wa(e){return new E2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ou.provider={build:()=>new Ou};class Wh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$y(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ab.bind(null,this.syncEngine),await z2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $2}()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),r=function(i){return new A2(i)}(e.databaseInfo);return function(i,o,l,u){return new R2(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new C2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$y(this.syncEngine,n,0),function(){return qy.D()?new qy:new T2}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,p){const m=new Y2(s,i,o,l,u,h);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ae(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ca(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Wh.provider={build:()=>new Wh};/**
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
 *//**
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
 */class Ip{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class cb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=fw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xd(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await db(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Uy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Uy(e.remoteStore,s)),t._onlineComponents=e}async function db(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await xd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Oi("Error using user provided cache. Falling back to memory cache: "+n),await xd(t,new Ou)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await xd(t,new Ou);return t._offlineComponents}async function cx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Hy(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Hy(t,new Wh))),t._onlineComponents}function hb(t){return cx(t).then(e=>e.syncEngine)}async function ju(t){const e=await cx(t),n=e.eventManager;return n.onListen=X2.bind(null,e.syncEngine),n.onUnlisten=eb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=J2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tb.bind(null,e.syncEngine),n}function fb(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new Ip({next:g=>{p.Za(),o.enqueueAndForget(()=>wp(i,m));const A=g.docs.has(l);!A&&g.fromCache?h.reject(new G(M.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?h.reject(new G(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Ep(uc(l.path),p,{includeMetadataChanges:!0,_a:!0});return _p(i,m)}(await ju(t),t.asyncQueue,e,n,r)),r.promise}function pb(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new Ip({next:g=>{p.Za(),o.enqueueAndForget(()=>wp(i,m)),g.fromCache&&u.source==="server"?h.reject(new G(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Ep(l,p,{includeMetadataChanges:!0,_a:!0});return _p(i,m)}(await ju(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ky=new Map;/**
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
 */function hx(t,e,n){if(!n)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mb(t,e,n,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gy(t){if(!te.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qy(t){if(te.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_c(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Yy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PA;switch(r.type){case"firstParty":return new LA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ky.get(n);r&&(X("ComponentProvider","Removing Datastore"),Ky.delete(n),r.terminate())}(this),Promise.resolve()}}function gb(t,e,n,r={}){var s;const i=(t=Lt(t,wc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=It.MOCK_USER;else{l=ew(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(h)}t._authCredentials=new DA(new hw(l,u))}}/**
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
 */class yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yr(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Kr extends yr{constructor(e,n,r){super(e,n,uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new te(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function Ht(t,e,...n){if(t=be(t),hx("collection","path",e),t instanceof wc){const r=Oe.fromString(e,...n);return Qy(r),new Kr(t,null,r)}{if(!(t instanceof St||t instanceof Kr))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Qy(r),new Kr(t.firestore,null,r)}}function ut(t,e,...n){if(t=be(t),arguments.length===1&&(e=fw.newId()),hx("doc","path",e),t instanceof wc){const r=Oe.fromString(e,...n);return Gy(r),new St(t,null,new te(r))}{if(!(t instanceof St||t instanceof Kr))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Gy(r),new St(t.firestore,t instanceof Kr?t.converter:null,new te(r))}}/**
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
 */class Xy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Gw(this,"async_queue_retry"),this.Vu=()=>{const r=wd();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=wd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=wd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new or;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ba(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw fr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=yp.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ie()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Jy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Vn extends wc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xy(e),this._firestoreClient=void 0,await e}}}function yb(t,e){const n=typeof t=="object"?t:Jf(),r=typeof t=="string"?t:"(default)",s=ac(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=X_("firestore");i&&gb(s,...i)}return s}function Da(t){if(t._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vb(t),t._firestoreClient}function vb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,p){return new QA(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,dx(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new cb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ui(vt.fromBase64String(e))}catch(n){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ui(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xc{constructor(e){this._methodName=e}}/**
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
 */class kp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class Ap{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const _b=/^__.*__$/;class wb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}class fx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function px(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Sp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Sp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Lu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(px(this.Cu)&&_b.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class xb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gc(e)}Qu(e,n,r,s=!1){return new Sp({Cu:e,methodName:n,qu:r,path:pt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ja(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new xb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bp(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Np("Data must be an object, but it was:",o,r);const l=yx(r,o);let u,h;if(i.merge)u=new Yt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=Hh(e,m,n);if(!o.contains(g))throw new G(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);_x(p,g)||p.push(g)}u=new Yt(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new wb(new Ft(l),u,h)}class Ec extends xc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ec}}class Rp extends xc{_toFieldTransform(e){return new wS(e.path,new ma)}isEqual(e){return e instanceof Rp}}function mx(t,e,n,r){const s=t.Qu(1,e,n);Np("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();Hs(r,(u,h)=>{const p=Cp(e,u,n);h=be(h);const m=s.Nu(p);if(h instanceof Ec)i.push(p);else{const g=La(h,m);g!=null&&(i.push(p),o.set(p,g))}});const l=new Yt(i);return new fx(o,l,s.fieldTransforms)}function gx(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Hh(e,r,n)],u=[s];if(i.length%2!=0)throw new G(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Hh(e,i[g])),u.push(i[g+1]);const h=[],p=Ft.empty();for(let g=l.length-1;g>=0;--g)if(!_x(h,l[g])){const A=l[g];let b=u[g];b=be(b);const R=o.Nu(A);if(b instanceof Ec)h.push(A);else{const N=La(b,R);N!=null&&(h.push(A),p.set(A,N))}}const m=new Yt(h);return new fx(p,m,o.fieldTransforms)}function Eb(t,e,n,r=!1){return La(n,t.Qu(r?4:3,e))}function La(t,e){if(vx(t=be(t)))return Np("Unsupported field value:",e,t),yx(t,e);if(t instanceof xc)return function(r,s){if(!px(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=La(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=st.fromDate(r);return{timestampValue:Pu(s.serializer,i)}}if(r instanceof st){const i=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pu(s.serializer,i)}}if(r instanceof kp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ui)return{bytesValue:qw(s.serializer,r._byteString)};if(r instanceof St){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:up(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ap)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return op(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${_c(r)}`)}(t,e)}function yx(t,e){const n={};return pw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(t,(r,s)=>{const i=La(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function vx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof kp||t instanceof Ui||t instanceof St||t instanceof xc||t instanceof Ap)}function Np(t,e,n){if(!vx(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=_c(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Hh(t,e,n){if((e=be(e))instanceof Oa)return e._internalPath;if(typeof e=="string")return Cp(t,e);throw Lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Tb=new RegExp("[~\\*/\\[\\]]");function Cp(t,e,n){if(e.search(Tb)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oa(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new G(M.INVALID_ARGUMENT,l+t+u)}function _x(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wx{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ib(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ib extends wx{data(){return super.data()}}function Tc(t,e){return typeof e=="string"?Cp(t,e):e instanceof Oa?e._internalPath:e._delegate._internalPath}/**
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
 */function xx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pp{}class Dp extends Pp{}function An(t,e,...n){let r=[];e instanceof Pp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Op).length,l=i.filter(u=>u instanceof Ic).length;if(o>1||o>0&&l>0)throw new G(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ic extends Dp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ic(e,n,r)}_apply(e){const n=this._parse(e);return Tx(e._query,n),new yr(e.firestore,e.converter,Mh(e._query,n))}_parse(e){const n=ja(e.firestore);return function(i,o,l,u,h,p,m){let g;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new G(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){e0(m,p);const A=[];for(const b of m)A.push(Zy(u,i,b));g={arrayValue:{values:A}}}else g=Zy(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||e0(m,p),g=Eb(l,o,m,p==="in"||p==="not-in");return Ze.create(h,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qs(t,e,n){const r=e,s=Tc("where",t);return Ic._create(s,r,n)}class Op extends Pp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Op(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Tx(o,u),o=Mh(o,u)}(e._query,n),new yr(e.firestore,e.converter,Mh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jp extends Dp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pa(i,o)}(e._query,this._field,this._direction);return new yr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Hi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Lp(t,e="asc"){const n=e,r=Tc("orderBy",t);return jp._create(r,n)}class Mp extends Dp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Mp(e,n,r)}_apply(e){return new yr(e.firestore,e.converter,Nu(e._query,this._limit,this._limitType))}}function Ex(t){return Mp._create("limit",t,"F")}function Zy(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new G(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tw(e)&&n.indexOf("/")!==-1)throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!te.isDocumentKey(r))throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wy(t,new te(r))}if(n instanceof St)return wy(t,n._key);throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_c(n)}.`)}function e0(t,e){if(!Array.isArray(t)||t.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tx(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kb{convertValue(e,n="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Qe(o.doubleValue));return new Ap(i)}convertGeoPoint(e){return new kp(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=np(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(da(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);ke(Ww(r));const s=new ha(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||fr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Vp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ix extends wx{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gl extends Ix{data(e={}){return super.data(e)}}class kx{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new bo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gl(this._firestore,this._userDataWriter,r.key,r,new bo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Gl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Gl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:Ab(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ab(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function Ma(t){t=Lt(t,St);const e=Lt(t.firestore,Vn);return fb(Da(e),t._key).then(n=>Ax(e,t,n))}class qp extends kb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function es(t){t=Lt(t,yr);const e=Lt(t.firestore,Vn),n=Da(e),r=new qp(e);return xx(t._query),pb(n,t._query).then(s=>new kx(e,r,t,s))}function kc(t,e,n){t=Lt(t,St);const r=Lt(t.firestore,Vn),s=Vp(t.converter,e,n);return qa(r,[bp(ja(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jt.none())])}function Un(t,e,n,...r){t=Lt(t,St);const s=Lt(t.firestore,Vn),i=ja(s);let o;return o=typeof(e=be(e))=="string"||e instanceof Oa?gx(i,"updateDoc",t._key,e,n,r):mx(i,"updateDoc",t._key,e),qa(s,[o.toMutation(t._key,jt.exists(!0))])}function Sb(t){return qa(Lt(t.firestore,Vn),[new pc(t._key,jt.none())])}function Up(t,e){const n=Lt(t.firestore,Vn),r=ut(t),s=Vp(t.converter,e);return qa(n,[bp(ja(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function Va(t,...e){var n,r,s;t=be(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Jy(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Jy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,p;if(t instanceof St)h=Lt(t.firestore,Vn),p=uc(t._key.path),u={next:m=>{e[o]&&e[o](Ax(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Lt(t,yr);h=Lt(m.firestore,Vn),p=m._query;const g=new qp(h);u={next:A=>{e[o]&&e[o](new kx(h,g,m,A))},error:e[o+1],complete:e[o+2]},xx(t._query)}return function(g,A,b,R){const N=new Ip(R),w=new Ep(A,N,b);return g.asyncQueue.enqueueAndForget(async()=>_p(await ju(g),w)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>wp(await ju(g),w))}}(Da(h),p,l,u)}function qa(t,e){return function(r,s){const i=new or;return r.asyncQueue.enqueueAndForget(async()=>nb(await hb(r),s,i)),i.promise}(Da(t),e)}function Ax(t,e,n){const r=n.docs.get(e._key),s=new qp(t);return new Ix(t,s,e._key,r,new bo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class bb{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ja(e)}set(e,n,r){this._verifyNotCommitted();const s=Ed(e,this._firestore),i=Vp(s.converter,n,r),o=bp(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,jt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Ed(e,this._firestore);let o;return o=typeof(n=be(n))=="string"||n instanceof Oa?gx(this._dataReader,"WriteBatch.update",i._key,n,r,s):mx(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,jt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ed(e,this._firestore);return this._mutations=this._mutations.concat(new pc(n._key,jt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ed(t,e){if((t=be(t)).firestore!==e)throw new G(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function en(){return new Rp("serverTimestamp")}/**
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
 */function Sx(t){return Da(t=Lt(t,Vn)),new bb(t,e=>qa(t,e))}(function(e,n=!0){(function(s){Wi=s})(Ws),js(new Yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Vn(new OA(r.getProvider("auth-internal")),new VA(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(h.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Dn(my,"4.7.3",e),Dn(my,"4.7.3","esm2017")})();function Fp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rb=bx,Rx=new ka("auth","Firebase",bx());/**
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
 */const Mu=new Yf("@firebase/auth");function Nb(t,...e){Mu.logLevel<=me.WARN&&Mu.warn(`Auth (${Ws}): ${t}`,...e)}function Ql(t,...e){Mu.logLevel<=me.ERROR&&Mu.error(`Auth (${Ws}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw Bp(t,...e)}function Tn(t,...e){return Bp(t,...e)}function zp(t,e,n){const r=Object.assign(Object.assign({},Rb()),{[e]:n});return new ka("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),zp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rx.create(t,...e)}function se(t,e,...n){if(!t)throw Bp(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ql(e),new Error(e)}function mr(t,e){t||tr(e)}/**
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
 */function Kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pb(){return t0()==="http:"||t0()==="https:"}function t0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Db(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pb()||ck()||"connection"in navigator)?navigator.onLine:!0}function Ob(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=ak()||dk()}get(){return Db()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $p(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Nx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lb=new Ua(3e4,6e4);function is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vr(t,e,n,r,s={}){return Cx(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Aa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return uk()||(h.referrerPolicy="no-referrer"),Nx.fetch()(Px(t,t.config.apiHost,n,l),h)})}async function Cx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jb),e);try{const s=new Vb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Sl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Sl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zp(t,p,h);hn(t,p)}}catch(s){if(s instanceof qn)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function Fa(t,e,n,r,s={}){const i=await vr(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Px(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$p(t.config,s):`${t.config.apiScheme}://${s}`}function Mb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),Lb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tn(t,e,r);return s.customData._tokenResponse=n,s}function n0(t){return t!==void 0&&t.enterprise!==void 0}class qb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Mb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ub(t,e){return vr(t,"GET","/v2/recaptchaConfig",is(t,e))}/**
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
 */async function Fb(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function Dx(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zb(t,e=!1){const n=be(t),r=await n.getIdToken(e),s=Wp(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bo(Td(s.auth_time)),issuedAtTime:Bo(Td(s.iat)),expirationTime:Bo(Td(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Td(t){return Number(t)*1e3}function Wp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=Q_(n);return s?JSON.parse(s):(Ql("Failed to decode base64 JWT payload"),null)}catch(s){return Ql("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function r0(t){const e=Wp(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&Bb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Bb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $b{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bo(this.lastLoginAt),this.creationTime=Bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fi(t,Dx(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ox(i.providerUserInfo):[],l=Hb(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Gh(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function Wb(t){const e=be(t);await Vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ox(t){return t.map(e=>{var{providerId:n}=e,r=Fp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Kb(t,e){const n=await Cx(t,{},async()=>{const r=Aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Px(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Nx.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Gb(t,e){return vr(t,"POST","/v2/accounts:revokeToken",is(t,e))}/**
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
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):r0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=r0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Kb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ii;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
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
 */function kr(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Fp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $b(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zb(this,e)}reload(){return Wb(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await Fi(this,Fb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,A=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:k,emailVerified:O,isAnonymous:q,providerData:z,stsTokenManager:E}=n;se(k&&E,e,"internal-error");const v=Ii.fromJSON(this.name,E);se(typeof k=="string",e,"internal-error"),kr(m,e.name),kr(g,e.name),se(typeof O=="boolean",e,"internal-error"),se(typeof q=="boolean",e,"internal-error"),kr(A,e.name),kr(b,e.name),kr(R,e.name),kr(N,e.name),kr(w,e.name),kr(_,e.name);const x=new nr({uid:k,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:q,photoURL:b,phoneNumber:A,tenantId:R,stsTokenManager:v,createdAt:w,lastLoginAt:_});return z&&Array.isArray(z)&&(x.providerData=z.map(I=>Object.assign({},I))),N&&(x._redirectEventId=N),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ii;s.updateFromServerResponse(n);const i=new nr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ox(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ii;l.updateFromIdToken(r);const u=new nr({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const s0=new Map;function rr(t){mr(t instanceof Function,"Expected a class definition");let e=s0.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,s0.set(t,e),e)}/**
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
 */class jx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jx.type="NONE";const i0=jx;/**
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
 */function Yl(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Yl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Yl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ki(rr(i0),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||rr(i0);const o=Yl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){const m=nr._fromJSON(e,p);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ki(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ki(i,e,r))}}/**
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
 */function o0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fx(e))return"Blackberry";if(zx(e))return"Webos";if(Mx(e))return"Safari";if((e.includes("chrome/")||Vx(e))&&!e.includes("edge/"))return"Chrome";if(Ux(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lx(t=Rt()){return/firefox\//i.test(t)}function Mx(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vx(t=Rt()){return/crios\//i.test(t)}function qx(t=Rt()){return/iemobile/i.test(t)}function Ux(t=Rt()){return/android/i.test(t)}function Fx(t=Rt()){return/blackberry/i.test(t)}function zx(t=Rt()){return/webos/i.test(t)}function Hp(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qb(t=Rt()){var e;return Hp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yb(){return hk()&&document.documentMode===10}function Bx(t=Rt()){return Hp(t)||Ux(t)||zx(t)||Fx(t)||/windows phone/i.test(t)||qx(t)}/**
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
 */function $x(t,e=[]){let n;switch(t){case"Browser":n=o0(Rt());break;case"Worker":n=`${o0(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
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
 */class Xb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Jb(t,e={}){return vr(t,"GET","/v2/passwordPolicy",is(t,e))}/**
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
 */const Zb=6;class eR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Zb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class tR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a0(this),this.idTokenSubscription=new a0(this),this.beforeStateQueue=new Xb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dx(this,{idToken:e}),r=await nr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(wn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ob()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(ar(this));const n=e?be(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jb(this),n=new eR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ka("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$x(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Nb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function os(t){return be(t)}class a0{constructor(e){this.auth=e,this.observer=null,this.addObserver=wk(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nR(t){Ac=t}function Wx(t){return Ac.loadJS(t)}function rR(){return Ac.recaptchaEnterpriseScript}function sR(){return Ac.gapiScript}function iR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const oR="recaptcha-enterprise",aR="NO_RECAPTCHA";class lR{constructor(e){this.type=oR,this.auth=os(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Ub(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new qb(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;n0(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(aR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&n0(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=rR();u.length!==0&&(u+=l),Wx(u).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function l0(t,e,n,r=!1){const s=new lR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qh(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await l0(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await l0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function uR(t,e){const n=ac(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Au(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function cR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dR(t,e,n){const r=os(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hx(e),{host:o,port:l}=hR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),fR()}function Hx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hR(t){const e=Hx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:u0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:u0(o)}}}function u0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function pR(t,e){return vr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mR(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",is(t,e))}/**
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
 */async function gR(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}async function yR(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}/**
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
 */class va extends Kp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new va(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new va(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,n,"signInWithPassword",mR);case"emailLink":return gR(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,r,"signUpPassword",pR);case"emailLink":return yR(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ai(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",is(t,e))}/**
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
 */const vR="http://localhost";class Us extends Kp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Fp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:vR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Aa(n)}return e}}/**
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
 */function _R(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wR(t){const e=To(Io(t)).link,n=e?To(Io(e)).deep_link_id:null,r=To(Io(t)).deep_link_id;return(r?To(Io(r)).link:null)||r||n||e||t}class Gp{constructor(e){var n,r,s,i,o,l;const u=To(Io(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=_R((s=u.mode)!==null&&s!==void 0?s:null);se(h&&p&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=wR(e);try{return new Gp(n)}catch{return null}}}/**
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
 */class Qi{constructor(){this.providerId=Qi.PROVIDER_ID}static credential(e,n){return va._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gp.parseLink(n);return se(r,"argument-error"),va._fromEmailAndCode(e,r.code,r.tenantId)}}Qi.PROVIDER_ID="password";Qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class za extends Qp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nr extends za{constructor(){super("facebook.com")}static credential(e){return Us._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nr.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Us._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Cr extends za{constructor(){super("github.com")}static credential(e){return Us._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
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
 */class Pr extends za{constructor(){super("twitter.com")}static credential(e,n){return Us._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
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
 */async function xR(t,e){return Fa(t,"POST","/v1/accounts:signUp",is(t,e))}/**
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
 */class Fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nr._fromIdTokenResponse(e,r,s),o=c0(r);return new Fs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=c0(r);return new Fs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function c0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qu extends qn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qu(e,n,r,s)}}function Kx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(t,i,e,r):i})}async function ER(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fs._forOperation(t,"link",r)}/**
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
 */async function TR(t,e,n=!1){const{auth:r}=t;if(wn(r.app))return Promise.reject(ar(r));const s="reauthenticate";try{const i=await Fi(t,Kx(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=Wp(i.idToken);se(o,r,"internal-error");const{sub:l}=o;return se(t.uid===l,r,"user-mismatch"),Fs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
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
 */async function Gx(t,e,n=!1){if(wn(t.app))return Promise.reject(ar(t));const r="signIn",s=await Kx(t,r,e),i=await Fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function IR(t,e){return Gx(os(t),e)}/**
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
 */async function Qx(t){const e=os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kR(t,e,n){if(wn(t.app))return Promise.reject(ar(t));const r=os(t),o=await Qh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Qx(t),u}),l=await Fs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function AR(t,e,n){return wn(t.app)?Promise.reject(ar(t)):IR(be(t),Qi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qx(t),r})}/**
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
 */async function SR(t,e){return vr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=be(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fi(r,SR(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function RR(t,e){return be(t).setPersistence(e)}function NR(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function CR(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function PR(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function DR(t){return be(t).signOut()}const Uu="__sak";/**
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
 */class Yx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OR=1e3,jR=10;class Xx extends Yx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Yb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xx.type="LOCAL";const Jx=Xx;/**
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
 */class Zx extends Yx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zx.type="SESSION";const eE=Zx;/**
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
 */function LR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await LR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
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
 */function Yp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class MR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Yp("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ln(){return window}function VR(t){Ln().location.href=t}/**
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
 */function tE(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function qR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FR(){return tE()?self:null}/**
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
 */const nE="firebaseLocalStorageDb",zR=1,Fu="firebaseLocalStorage",rE="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bc(t,e){return t.transaction([Fu],e?"readwrite":"readonly").objectStore(Fu)}function BR(){const t=indexedDB.deleteDatabase(nE);return new Ba(t).toPromise()}function Yh(){const t=indexedDB.open(nE,zR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fu,{keyPath:rE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fu)?e(r):(r.close(),await BR(),e(await Yh()))})})}async function d0(t,e,n){const r=bc(t,!0).put({[rE]:e,value:n});return new Ba(r).toPromise()}async function $R(t,e){const n=bc(t,!1).get(e),r=await new Ba(n).toPromise();return r===void 0?null:r.value}function h0(t,e){const n=bc(t,!0).delete(e);return new Ba(n).toPromise()}const WR=800,HR=3;class sE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(FR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qR(),!this.activeServiceWorker)return;this.sender=new MR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await d0(e,Uu,"1"),await h0(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>d0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$R(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>h0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bc(s,!1).getAll();return new Ba(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sE.type="LOCAL";const KR=sE;new Ua(3e4,6e4);/**
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
 */function iE(t,e){return e?rr(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xp extends Kp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GR(t){return Gx(t.auth,new Xp(t),t.bypassAuthState)}function QR(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),TR(n,new Xp(t),t.bypassAuthState)}async function YR(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),ER(n,new Xp(t),t.bypassAuthState)}/**
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
 */class oE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GR;case"linkViaPopup":case"linkViaRedirect":return YR;case"reauthViaPopup":case"reauthViaRedirect":return QR;default:hn(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XR=new Ua(2e3,1e4);async function JR(t,e,n){if(wn(t.app))return Promise.reject(Tn(t,"operation-not-supported-in-this-environment"));const r=os(t);Cb(t,e,Qp);const s=iE(r,n);return new ks(r,"signInViaPopup",e,s).executeNotNull()}class ks extends oE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Yp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XR.get())};e()}}ks.currentPopupAction=null;/**
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
 */const ZR="pendingRedirect",Xl=new Map;class eN extends oE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await tN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tN(t,e){const n=sN(e),r=rN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nN(t,e){Xl.set(t._key(),e)}function rN(t){return rr(t._redirectPersistence)}function sN(t){return Yl(ZR,t.config.apiKey,t.name)}async function iN(t,e,n=!1){if(wn(t.app))return Promise.reject(ar(t));const r=os(t),s=iE(r,e),o=await new eN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const oN=10*60*1e3;class aN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oN&&this.cachedEventUids.clear(),this.cachedEventUids.has(f0(e))}saveEventToCache(e){this.cachedEventUids.add(f0(e)),this.lastProcessedEventTime=Date.now()}}function f0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aE(t);default:return!1}}/**
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
 */async function uN(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
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
 */const cN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dN=/^https?/;async function hN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uN(t);for(const n of e)try{if(fN(n))return}catch{}hn(t,"unauthorized-domain")}function fN(t){const e=Kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dN.test(n))return!1;if(cN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const pN=new Ua(3e4,6e4);function p0(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mN(t){return new Promise((e,n)=>{var r,s,i;function o(){p0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{p0(),n(Tn(t,"network-request-failed"))},timeout:pN.get()})}if(!((s=(r=Ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ln().gapi)===null||i===void 0)&&i.load)o();else{const l=iR("iframefcb");return Ln()[l]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},Wx(`${sR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function gN(t){return Jl=Jl||mN(t),Jl}/**
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
 */const yN=new Ua(5e3,15e3),vN="__/auth/iframe",_N="emulator/auth/iframe",wN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EN(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$p(e,_N):`https://${t.config.authDomain}/${vN}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},s=xN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Aa(r).slice(1)}`}async function TN(t){const e=await gN(t),n=Ln().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:EN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),l=Ln().setTimeout(()=>{i(o)},yN.get());function u(){Ln().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const IN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kN=500,AN=600,SN="_blank",bN="http://localhost";class m0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RN(t,e,n,r=kN,s=AN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},IN),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Rt().toLowerCase();n&&(l=Vx(h)?SN:n),Lx(h)&&(e=e||bN,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[A,b])=>`${g}${A}=${b},`,"");if(Qb(h)&&l!=="_self")return NN(e||"",l),new m0(null);const m=window.open(e||"",l,p);se(m,t,"popup-blocked");try{m.focus()}catch{}return new m0(m)}function NN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const CN="__/auth/handler",PN="emulator/auth/handler",DN=encodeURIComponent("fac");async function g0(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:s};if(e instanceof Qp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_k(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof za){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${DN}=${encodeURIComponent(u)}`:"";return`${ON(t)}?${Aa(l).slice(1)}${h}`}function ON({config:t}){return t.emulator?$p(t,PN):`https://${t.authDomain}/${CN}`}/**
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
 */const Id="webStorageSupport";class jN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eE,this._completeRedirectFn=iN,this._overrideRedirectResult=nN}async _openPopup(e,n,r,s){var i;mr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await g0(e,n,r,Kh(),s);return RN(e,o,Yp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await g0(e,n,r,Kh(),s);return VR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TN(e),r=new aN(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Id,{type:Id},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Id];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bx()||Mx()||Hp()}}const LN=jN;var y0="@firebase/auth",v0="1.7.9";/**
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
 */class MN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qN(t){js(new Yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$x(t)},h=new tR(r,s,i,u);return cR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),js(new Yr("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new MN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(y0,v0,VN(t)),Dn(y0,v0,"esm2017")}/**
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
 */const UN=5*60,FN=Z_("authIdTokenMaxAge")||UN;let _0=null;const zN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FN)return;const s=n==null?void 0:n.token;_0!==s&&(_0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function BN(t=Jf()){const e=ac(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uR(t,{popupRedirectResolver:LN,persistence:[KR,Jx,eE]}),r=Z_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zN(i.toString());CR(n,o,()=>o(n.currentUser)),NR(n,l=>o(l))}}const s=Y_("auth");return s&&dR(n,`http://${s}`),n}function $N(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$N().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qN("Browser");/**
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
 */const lE="firebasestorage.googleapis.com",uE="storageBucket",WN=2*60*1e3,HN=10*60*1e3;/**
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
 */class Ge extends qn{constructor(e,n,r=0){super(kd(e),`Firebase Storage: ${n} (${kd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ke||(Ke={}));function kd(t){return"storage/"+t}function Jp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ge(Ke.UNKNOWN,t)}function KN(t){return new Ge(Ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function GN(t){return new Ge(Ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge(Ke.UNAUTHENTICATED,t)}function YN(){return new Ge(Ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function XN(t){return new Ge(Ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function JN(){return new Ge(Ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZN(){return new Ge(Ke.CANCELED,"User canceled the upload/download.")}function eC(t){return new Ge(Ke.INVALID_URL,"Invalid URL '"+t+"'.")}function tC(t){return new Ge(Ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function nC(){return new Ge(Ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+uE+"' property when initializing the app?")}function rC(){return new Ge(Ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sC(){return new Ge(Ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iC(t){return new Ge(Ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xh(t){return new Ge(Ke.INVALID_ARGUMENT,t)}function cE(){return new Ge(Ke.APP_DELETED,"The Firebase app was deleted.")}function oC(t){return new Ge(Ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $o(t,e){return new Ge(Ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function vo(t){throw new Ge(Ke.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(r.path==="")return r;throw tC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${p}/b/${s}/o${g}`,"i"),b={bucket:1,path:3},R=n===lE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",w=new RegExp(`^https?://${R}/${s}/${N}`,"i"),k=[{regex:l,indices:u,postModify:i},{regex:A,indices:b,postModify:h},{regex:w,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<k.length;O++){const q=k[O],z=q.regex.exec(e);if(z){const E=z[q.indices.bucket];let v=z[q.indices.path];v||(v=""),r=new Xt(E,v),q.postModify(r);break}}if(r==null)throw eC(e);return r}}class aC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function lC(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function p(...N){h||(h=!0,e.apply(null,N))}function m(N){s=setTimeout(()=>{s=null,t(A,u())},N)}function g(){i&&clearTimeout(i)}function A(N,...w){if(h){g();return}if(N){g(),p.call(null,N,...w);return}if(u()||o){g(),p.call(null,N,...w);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,m(k)}let b=!1;function R(N){b||(b=!0,g(),!h&&(s!==null?(N||(l=2),clearTimeout(s),m(0)):N||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function uC(t){t(!1)}/**
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
 */function cC(t){return t!==void 0}function dC(t){return typeof t=="object"&&!Array.isArray(t)}function Zp(t){return typeof t=="string"||t instanceof String}function w0(t){return em()&&t instanceof Blob}function em(){return typeof Blob<"u"}function x0(t,e,n,r){if(r<e)throw Xh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Xh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function tm(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function dE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Rs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Rs||(Rs={}));/**
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
 */function hC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class fC{constructor(e,n,r,s,i,o,l,u,h,p,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,b)=>{this.resolve_=A,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new bl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Rs.NO_ERROR,u=i.getStatus();if(!l||hC(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Rs.ABORT;r(!1,new bl(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new bl(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());cC(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Jp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?cE():ZN();o(u)}else{const u=JN();o(u)}};this.canceled_?n(!1,new bl(!1,null,!0)):this.backoffId_=lC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function pC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vC(t,e,n,r,s,i,o=!0){const l=dE(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return gC(h,e),pC(h,n),mC(h,i),yC(h,r),new fC(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function _C(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wC(...t){const e=_C();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(em())return new Blob(t);throw new Ge(Ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function xC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function EC(t){if(typeof atob>"u")throw iC("base-64");return atob(t)}/**
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
 */const Nn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ad{constructor(e,n){this.data=e,this.contentType=n||null}}function TC(t,e){switch(t){case Nn.RAW:return new Ad(hE(e));case Nn.BASE64:case Nn.BASE64URL:return new Ad(fE(t,e));case Nn.DATA_URL:return new Ad(kC(e),AC(e))}throw Jp()}function hE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function IC(t){let e;try{e=decodeURIComponent(t)}catch{throw $o(Nn.DATA_URL,"Malformed data URL.")}return hE(e)}function fE(t,e){switch(t){case Nn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw $o(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Nn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw $o(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EC(e)}catch(s){throw s.message.includes("polyfill")?s:$o(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class pE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw $o(Nn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=SC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function kC(t){const e=new pE(t);return e.base64?fE(Nn.BASE64,e.rest):IC(e.rest)}function AC(t){return new pE(t).contentType}function SC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Dr{constructor(e,n){let r=0,s="";w0(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(w0(this.data_)){const r=this.data_,s=xC(r,e,n);return s===null?null:new Dr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dr(r,!0)}}static getBlob(...e){if(em()){const n=e.map(r=>r instanceof Dr?r.data_:r);return new Dr(wC.apply(null,n))}else{const n=e.map(o=>Zp(o)?TC(Nn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Dr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function mE(t){let e;try{e=JSON.parse(t)}catch{return null}return dC(e)?e:null}/**
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
 */function bC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function gE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function NC(t,e){return e}class Pt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||NC}}let Rl=null;function CC(t){return!Zp(t)||t.length<2?t:gE(t)}function yE(){if(Rl)return Rl;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(i,o){return CC(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Pt("size");return s.xform=r,t.push(s),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),Rl=t,Rl}function PC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Xt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function DC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return PC(r,t),r}function vE(t,e,n){const r=mE(e);return r===null?null:DC(t,r,n)}function OC(t,e,n,r){const s=mE(e);if(s===null||!Zp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const p=t.bucket,m=t.fullPath,g="/b/"+o(p)+"/o/"+o(m),A=tm(g,n,r),b=dE({alt:"media",token:h});return A+b})[0]}function jC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class _E{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wE(t){if(!t)throw Jp()}function LC(t,e){function n(r,s){const i=vE(t,s,e);return wE(i!==null),i}return n}function MC(t,e){function n(r,s){const i=vE(t,s,e);return wE(i!==null),OC(i,s,t.host,t._protocol)}return n}function xE(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=YN():s=QN():n.getStatus()===402?s=GN(t.bucket):n.getStatus()===403?s=XN(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function VC(t){const e=xE(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=KN(t.path)),i.serverResponse=s.serverResponse,i}return n}function qC(t,e,n){const r=e.fullServerUrl(),s=tm(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new _E(s,i,MC(t,n),o);return l.errorHandler=VC(e),l}function UC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function FC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=UC(null,e)),r}function zC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let O=0;O<2;O++)k=k+Math.random().toString().slice(2);return k}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=FC(e,r,s),p=jC(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",A=Dr.getBlob(m,r,g);if(A===null)throw rC();const b={name:h.fullPath},R=tm(i,t.host,t._protocol),N="POST",w=t.maxUploadRetryTime,_=new _E(R,N,LC(t,n),w);return _.urlParams=b,_.headers=o,_.body=A.uploadData(),_.errorHandler=xE(e),_}class BC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw vo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $C extends BC{initXhr(){this.xhr_.responseType="text"}}function EE(){return new $C}/**
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
 */class zs{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zs(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gE(this._location.path)}get storage(){return this._service}get parent(){const e=bC(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new zs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oC(e)}}function WC(t,e,n){t._throwIfRoot("uploadBytes");const r=zC(t.storage,t._location,yE(),new Dr(e,!0),n);return t.storage.makeRequestWithTokens(r,EE).then(s=>({metadata:s,ref:t}))}function HC(t){t._throwIfRoot("getDownloadURL");const e=qC(t.storage,t._location,yE());return t.storage.makeRequestWithTokens(e,EE).then(n=>{if(n===null)throw sC();return n})}function KC(t,e){const n=RC(t._location.path,e),r=new Xt(t._location.bucket,n);return new zs(t.storage,r)}/**
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
 */function GC(t){return/^[A-Za-z]+:\/\//.test(t)}function QC(t,e){return new zs(t,e)}function TE(t,e){if(t instanceof nm){const n=t;if(n._bucket==null)throw nC();const r=new zs(n,n._bucket);return e!=null?TE(r,e):r}else return e!==void 0?KC(t,e):t}function YC(t,e){if(e&&GC(e)){if(t instanceof nm)return QC(t,e);throw Xh("To use ref(service, url), the first argument must be a Storage instance.")}else return TE(t,e)}function E0(t,e){const n=e==null?void 0:e[uE];return n==null?null:Xt.makeFromBucketSpec(n,t)}function XC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:ew(s,t.app.options.projectId))}class nm{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=lE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WN,this._maxUploadRetryTime=HN,this._requests=new Set,s!=null?this._bucket=Xt.makeFromBucketSpec(s,this._host):this._bucket=E0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=E0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){x0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){x0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new aC(cE());{const o=vC(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const T0="@firebase/storage",I0="0.13.2";/**
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
 */const IE="storage";function JC(t,e,n){return t=be(t),WC(t,e,n)}function ZC(t){return t=be(t),HC(t)}function eP(t,e){return t=be(t),YC(t,e)}function tP(t=Jf(),e){t=be(t);const r=ac(t,IE).getImmediate({identifier:e}),s=X_("storage");return s&&nP(r,...s),r}function nP(t,e,n,r={}){XC(t,e,n,r)}function rP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new nm(n,r,s,e,Ws)}function sP(){js(new Yr(IE,rP,"PUBLIC").setMultipleInstances(!0)),Dn(T0,I0,""),Dn(T0,I0,"esm2017")}sP();const iP={apiKey:"AIzaSyCiTAiDphBPNjd4dKwEYArGY8pXWf55sZQ",authDomain:"irangram-79830.firebaseapp.com",projectId:"irangram-79830",storageBucket:"irangram-79830.firebasestorage.app",messagingSenderId:"355877653612",appId:"1:355877653612:web:5512841c0ab55b6b011c49",measurementId:"G-RZWEBR7XJ7"};let Nl,J=null,fn=null,zu=null;try{Nl=rw(iP),J=yb(Nl),fn=BN(Nl);try{zu=tP(Nl)}catch(t){console.warn("Firebase Storage not available. File uploads will be disabled.",t),zu=null}RR(fn,Jx).catch(t=>{console.error("Firebase Persistence Error:",t)}),console.log("Firebase Connected Successfully")}catch(t){console.error("Firebase Initialization Error:",t)}var k0={};const Jt={USE_REAL_SERVER:!1,API_BASE_URL:k0.REACT_APP_API_URL||"http://localhost:5000/api",SOCKET_URL:k0.REACT_APP_SOCKET_URL||"http://localhost:5000",APP_NAME:"ایران‌گرام",VERSION:"1.7.0",OWNER_EMAIL:"amirrezaveisi45@gmail.com"},oP=t=>fn?PR(fn,t):()=>{},aP=async(t,e,n,r)=>{if(!fn)throw new Error("Auth not initialized");const i=(await kR(fn,t,e)).user,o=t===Jt.OWNER_EMAIL?"owner":"user";return await bR(i,{displayName:n}),J&&await kc(ut(J,"users",i.uid),{name:n,email:t,phone:r,username:t.split("@")[0],bio:"کاربر جدید ایران‌گرام",avatar:`https://ui-avatars.com/api/?name=${n}&background=random&color=fff&size=128`,role:o,isBanned:!1,createdAt:en(),lastSeen:en(),status:"online"}),i},lP=async(t,e)=>{if(!fn)throw new Error("Auth not initialized");const n=await AR(fn,t,e);if(J&&n.user){const r=ut(J,"users",n.user.uid),s={status:"online",lastSeen:en()};t===Jt.OWNER_EMAIL&&(s.role="owner"),Un(r,s).catch(i=>console.log("Status update error",i))}return n.user},uP=async()=>{if(!fn)throw new Error("Auth not initialized");const t=new Jn;try{const n=(await JR(fn,t)).user,r=n.email||"",s=r===Jt.OWNER_EMAIL?"owner":"user";if(J){const i=ut(J,"users",n.uid);if(!(await Ma(i)).exists())await kc(i,{name:n.displayName||"کاربر گوگل",email:r,phone:"",username:r.split("@")[0]||"user",bio:"کاربر جدید ایران‌گرام",avatar:n.photoURL||`https://ui-avatars.com/api/?name=${n.displayName}&background=random&color=fff&size=128`,role:s,isBanned:!1,createdAt:en(),lastSeen:en(),status:"online"});else{const l={status:"online",lastSeen:en()};r===Jt.OWNER_EMAIL&&(l.role="owner"),await Un(i,l).catch(u=>console.log("Status update error",u))}}return n}catch(e){throw console.error("Google Sign-In Error",e),e}},Sd=async t=>{fn&&(t&&J&&await Un(ut(J,"users",t),{status:"offline",lastSeen:en()}).catch(()=>{}),await DR(fn))},cP=async t=>{if(!J)return null;try{const e=ut(J,"users",t),n=await Ma(e);if(n.exists())return n.data()}catch(e){console.error("Error fetching profile",e)}return null},dP=(t,e)=>{if(!J)return()=>{};const n=ut(J,"users",t);return Va(n,r=>{r.exists()&&e({uid:r.id,...r.data()})})},hP=async(t,e)=>{if(!J)return;const n=ut(J,"users",t);await Un(n,e)},fP=async t=>{if(!J)return null;let e=An(Ht(J,"users"),qs("username","==",t.replace("@",""))),n=await es(e);if(!n.empty){const r=n.docs[0];return{uid:r.id,...r.data()}}if(e=An(Ht(J,"users"),qs("phone","==",t)),n=await es(e),!n.empty){const r=n.docs[0];return{uid:r.id,...r.data()}}return null},Cl=async(t,e)=>{if(!J)return;const n=ut(J,"users",t);try{await Un(n,{status:e,lastSeen:en()})}catch(r){console.error("Heartbeat error",r)}},pP=t=>{if(!J)return()=>{};const e=An(Ht(J,"users"));return Va(e,n=>{const r=n.docs.map(s=>({uid:s.id,status:s.data().status,lastSeen:s.data().lastSeen?s.data().lastSeen.toMillis():Date.now(),name:s.data().name,avatar:s.data().avatar}));t(r)})},mP=async(t,e)=>{if(!zu)throw new Error("سرویس ذخیره‌سازی فایل (Storage) در دسترس نیست یا پیکربندی نشده است.");const n=eP(zu,e),r=await JC(n,t);return await ZC(r.ref)},gP=async(t,e,n)=>{if(!J)return;const r=An(Ht(J,"users"),qs("email","==",Jt.OWNER_EMAIL)),s=await es(r);let i="";s.empty||(i=s.docs[0].id),i&&await Up(Ht(J,"users",i,"notifications"),{title:`درخواست رفع مسدودی: ${e}`,message:n,senderId:t,type:"alert",read:!1,createdAt:en()})},yP=async()=>{if(!J)return[];try{const t=An(Ht(J,"users"),Lp("createdAt","desc"));return(await es(t)).docs.map(n=>({uid:n.id,...n.data()}))}catch(t){return console.error("Error fetching users",t),[]}},vP=async(t,e)=>{if(!J)return;const n=ut(J,"users",t);await Un(n,{role:e})},_P=async(t,e)=>{if(!J)return;const n=ut(J,"users",t);await Un(n,{isBanned:!e})},kE=async t=>{if(J)try{await Sb(ut(J,"global_chat",t))}catch(e){console.error("Error deleting global message",e)}},wP=async()=>{if(J)try{const t=An(Ht(J,"global_chat")),e=await es(t),n=Sx(J);let r=0;e.forEach(s=>{n.delete(s.ref),r++,r>=490}),await n.commit(),console.log(`Cleared ${r} messages.`)}catch(t){console.error("Error clearing chat",t)}},AE=async()=>{if(!J)return[];const t=ut(J,"settings","wordFilters"),e=await Ma(t);return e.exists()?e.data().bannedWords||[]:[]},A0=async t=>{if(!J)return;const e=ut(J,"settings","wordFilters");await kc(e,{bannedWords:t},{merge:!0})},xP=async t=>{if(!J)return[];try{const e=An(Ht(J,"global_chat"),qs("senderId","==",t),Lp("createdAt","desc"),Ex(50));return(await es(e)).docs.map(r=>{const s=r.data();return{id:r.id,...s,timestamp:s.createdAt?s.createdAt.toMillis():Date.now()}})}catch{const n=An(Ht(J,"global_chat"),qs("senderId","==",t));return(await es(n)).docs.map(s=>({id:s.id,...s.data()}))}},EP=async(t,e,n)=>{if(J)try{await Up(Ht(J,"users",t,"notifications"),{title:e,message:n,type:"alert",read:!1,createdAt:en()})}catch(r){console.error("Error sending notification",r)}},TP=(t,e)=>{if(!J)return()=>{};const n=An(Ht(J,"users",t,"notifications"),qs("read","==",!1));return Va(n,r=>{const s=r.docs.map(o=>{const l=o.data();return{id:o.id,...l,createdAt:l.createdAt?l.createdAt.toMillis():Date.now()}});s.sort((o,l)=>l.createdAt-o.createdAt);const i=s.slice(0,10);e(i)})},IP=async(t,e)=>{J&&await Un(ut(J,"users",t,"notifications",e),{read:!0})},kP=t=>{if(!J)return()=>{};const e=An(Ht(J,"global_chat"),Lp("createdAt","desc"),Ex(50));return Va(e,r=>{const s=[];r.forEach(i=>{const o=i.data();s.push({id:i.id,text:o.text,senderId:o.senderId,senderName:o.senderName,senderAvatar:o.senderAvatar,senderRole:o.senderRole||"user",timestamp:o.createdAt?o.createdAt.toMillis():Date.now(),status:"read",type:o.type||"text",imageUrl:o.imageUrl,fileUrl:o.fileUrl,fileName:o.fileName,fileSize:o.fileSize,audioDuration:o.audioDuration,isSticker:o.isSticker,replyToId:o.replyToId,edited:o.edited,reactions:o.reactions||{}})}),t(s.reverse())})},AP=async(t,e)=>{if(!J){console.error("Database not initialized");return}try{let n=t.text||"";n&&t.type==="text"&&(await AE()).forEach(s=>{const i=new RegExp(s,"gi");n=n.replace(i,"*".repeat(s.length))}),await Up(Ht(J,"global_chat"),{text:n,senderId:t.senderId,senderName:e.name,senderAvatar:e.avatar||"",senderRole:e.role||"user",type:t.type||"text",imageUrl:t.imageUrl||null,fileUrl:t.fileUrl||null,fileName:t.fileName||null,fileSize:t.fileSize||null,audioDuration:t.audioDuration||null,isSticker:t.isSticker||!1,replyToId:t.replyToId||null,createdAt:en(),edited:!1,reactions:{}})}catch(n){console.error("Error adding document: ",n)}},SP=async(t,e,n)=>{if(!J)return;const r=ut(J,"global_chat",t);try{const s=await Ma(r);if(s.exists()){const o=s.data().reactions||{},l=o[e]||[];let u={...o};l.includes(n)?(u[e]=l.filter(h=>h!==n),u[e].length===0&&delete u[e]):u[e]=[...l,n],await Un(r,{reactions:u})}}catch(s){console.error("Error toggling reaction:",s)}},bP=t=>{if(!J)return()=>{};const e=ut(J,"system","info");return Va(e,n=>{if(n.exists()){const r=n.data();t({currentVersion:r.currentVersion||Jt.VERSION,lastCleanup:r.lastCleanup?r.lastCleanup.toMillis():0})}else kc(e,{currentVersion:Jt.VERSION,lastCleanup:en()})})},RP=async()=>{if(J)try{const t=ut(J,"system","info"),e=await Ma(t);if(e.exists()){const n=e.data(),r=n.lastCleanup?n.lastCleanup.toMillis():0,s=Date.now();if(s-r>864e5){console.log("Triggering 24h cleanup..."),await Un(t,{lastCleanup:en()});const i=new Date(s-864e5),o=An(Ht(J,"global_chat"),qs("createdAt","<",i)),l=await es(o),u=Sx(J);let h=0;l.forEach(p=>{u.delete(p.ref),h++}),h>0&&(await u.commit(),console.log(`Cleanup: Deleted ${h} old messages.`))}}}catch(t){console.error("Error in auto cleanup:",t)}},NP=({contacts:t,sessions:e,activeContactId:n,onSelectContact:r,toggleTheme:s,theme:i,userProfile:o,onOpenSettings:l,onOpenAdminPanel:u,onAddContact:h,showInstallButton:p,onInstall:m,storedAccounts:g,onAddAccount:A,onSwitchAccount:b})=>{var Ae;const[R,N]=L.useState(""),[w,_]=L.useState(!1),[k,O]=L.useState(!1),[q,z]=L.useState("all"),[E,v]=L.useState(!1),[x,I]=L.useState(""),[S,C]=L.useState(!1),[T,Ce]=L.useState(null),[W,ve]=L.useState(""),ge=L.useRef(null);L.useEffect(()=>{const K=_e=>{ge.current&&!ge.current.contains(_e.target)&&_(!1)};return document.addEventListener("mousedown",K),()=>document.removeEventListener("mousedown",K)},[]);const B=async()=>{if(!x.trim())return;C(!0),ve(""),Ce(null);const K=await fP(x);K?K.username===o.username?ve("شما نمی‌توانید خودتان را اضافه کنید."):Ce(K):ve("کاربری با این مشخصات یافت نشد."),C(!1)},Z=()=>{if(T){const K={id:T.uid,name:T.name,avatar:T.avatar,bio:T.bio,username:"@"+T.username,phone:T.phone,status:T.status||"offline",type:"user"};h(K),v(!1),Ce(null),I("")}},re=t.filter(K=>{const _e=K.name.toLowerCase().includes(R.toLowerCase())||K.username.toLowerCase().includes(R.toLowerCase());let ue=!0;return q==="personal"?ue=K.type==="user":q==="groups"&&(ue=K.type==="group"||K.type==="channel"),_e&&ue}),xe=K=>{if(!K)return"";const _e=new Date(K);return Date.now()-K>24*60*60*1e3?_e.toLocaleDateString("fa-IR"):_e.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"})},pe=K=>{if(!K)return"";const _e=new Date(K),ue=Date.now()-_e.getTime();return ue<12e4?"آنلاین":ue<36e5?`${Math.floor(ue/6e4)} دقیقه پیش`:ue<864e5?`${Math.floor(ue/36e5)} ساعت پیش`:"دیروز"};return c.jsxs("div",{className:"h-full flex flex-col bg-telegram-bg dark:bg-telegram-bgDark border-l border-telegram-border dark:border-telegram-borderDark relative",children:[c.jsxs("div",{className:`absolute top-0 right-0 h-full w-72 bg-white dark:bg-telegram-secondaryDark z-30 shadow-2xl transform transition-transform duration-300 ease-in-out ${w?"translate-x-0":"translate-x-full"}`,ref:ge,children:[c.jsxs("div",{className:"bg-telegram-primary p-5 flex flex-col justify-end text-white relative overflow-hidden transition-all duration-300",children:[c.jsx("div",{className:"absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"}),c.jsxs("div",{className:"flex justify-between items-start mb-2 relative z-10",children:[c.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-telegram-primary mb-3 text-2xl font-bold shadow-md uppercase overflow-hidden",children:((Ae=o.name)==null?void 0:Ae.charAt(0))||"U"}),c.jsx("button",{onClick:s,className:"p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors",children:i===ws.DARK?c.jsx(XI,{size:20}):c.jsx(UI,{size:20})})]}),c.jsxs("div",{className:"relative z-10 cursor-pointer",onClick:()=>O(!k),children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsxs("div",{className:"font-bold text-lg truncate flex items-center gap-2",children:[o.name,o.role==="owner"&&c.jsx("span",{className:"bg-yellow-400 text-black text-[10px] px-1.5 rounded-full",children:"Owner"}),o.role==="admin"&&c.jsx("span",{className:"bg-blue-400 text-black text-[10px] px-1.5 rounded-full",children:"Admin"})]}),c.jsx(Th,{size:18,className:`transition-transform duration-300 ${k?"rotate-180":""}`})]}),c.jsx("div",{className:"text-sm opacity-80 font-mono dir-ltr text-right",children:o.phone||o.username})]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto",children:[k?c.jsxs("div",{className:"py-2 animate-fade-in",children:[g.filter(K=>K.username!==o.username).map(K=>c.jsxs("button",{onClick:()=>{b(K.uid),_(!1),O(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[c.jsx("img",{src:K.avatar,className:"w-9 h-9 rounded-full bg-gray-200"}),c.jsxs("div",{className:"text-right",children:[c.jsx("div",{className:"font-bold text-sm",children:K.name}),c.jsxs("div",{className:"text-xs opacity-60",children:["@",K.username]})]})]},K.uid)),c.jsxs("button",{onClick:()=>{A(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[c.jsx("div",{className:"w-9 h-9 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center",children:c.jsx(W_,{size:18})}),c.jsx("span",{className:"font-medium",children:"افزودن حساب کاربری"})]})]}):c.jsxs("div",{className:"py-2 flex flex-col animate-fade-in",children:[c.jsxs("button",{onClick:()=>{v(!0),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[c.jsx(ry,{size:22,className:"text-gray-500"}),c.jsx("span",{className:"font-medium",children:"افزودن مخاطب"})]}),c.jsxs("button",{onClick:()=>{r("saved"),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[c.jsx(Jg,{size:22,className:"text-gray-500"}),c.jsx("span",{className:"font-medium",children:"پیام‌های ذخیره شده"})]}),c.jsxs("button",{onClick:()=>{l(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[c.jsx(H_,{size:22,className:"text-gray-500"}),c.jsx("span",{className:"font-medium",children:"تنظیمات"})]}),p&&c.jsxs("button",{onClick:()=>{m(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[c.jsx(ic,{size:22,className:"text-gray-500"}),c.jsx("span",{className:"font-medium",children:"نصب اپلیکیشن"})]}),(o.role==="owner"||o.role==="admin")&&c.jsxs("button",{onClick:()=>{u(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-red-50 dark:hover:bg-red-900/10 text-red-600 dark:text-red-400 transition-colors border-t border-gray-100 dark:border-gray-700 mt-2",children:[c.jsx(Qf,{size:22}),c.jsx("span",{className:"font-bold",children:"پنل مدیریت"})]})]}),c.jsx("div",{className:"mt-auto p-4 border-t border-gray-100 dark:border-gray-700 text-center",children:c.jsx("a",{href:"https://github.com/mrv006",target:"_blank",className:"flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity",children:c.jsxs("div",{className:"flex items-center gap-1 text-xs font-bold font-mono",children:[c.jsx(DI,{size:12}),c.jsx("span",{children:"Mr.V"})]})})})]})]}),w&&c.jsx("div",{className:"absolute inset-0 bg-black/50 z-20 backdrop-blur-sm transition-opacity",onClick:()=>_(!1)}),E&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",children:c.jsxs("div",{className:"bg-white dark:bg-gray-800 w-full max-w-sm rounded-2xl shadow-2xl p-6",children:[c.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"افزودن مخاطب جدید"}),c.jsx("button",{onClick:()=>v(!1),children:c.jsx(ir,{size:20,className:"text-gray-500"})})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"text-sm text-gray-500 block mb-2",children:"شماره تلفن یا نام کاربری"}),c.jsx("input",{value:x,onChange:K=>I(K.target.value),placeholder:"@username یا 0912...",className:"w-full bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-telegram-primary text-gray-900 dark:text-white"})]}),W&&c.jsx("p",{className:"text-red-500 text-sm mb-4",children:W}),T&&c.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl flex items-center gap-3 mb-4 border border-green-200 dark:border-green-800",children:[c.jsx("img",{src:T.avatar,className:"w-10 h-10 rounded-full"}),c.jsxs("div",{children:[c.jsx("p",{className:"font-bold text-gray-900 dark:text-white",children:T.name}),c.jsx("p",{className:"text-xs text-gray-500",children:T.username})]}),c.jsx(CP,{className:"mr-auto text-green-500"})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:B,disabled:S,className:"flex-1 bg-telegram-secondary dark:bg-gray-700 text-telegram-primary font-bold py-3 rounded-xl",children:S?c.jsx(F_,{className:"animate-spin mx-auto"}):"جستجو"}),T&&c.jsx("button",{onClick:Z,className:"flex-1 bg-telegram-primary text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors",children:"افزودن"})]})]})}),c.jsxs("div",{className:"px-3 py-2 flex items-center gap-2 shrink-0",children:[c.jsx("button",{onClick:()=>{_(!0),O(!1)},className:"p-2 hover:bg-telegram-secondary dark:hover:bg-telegram-secondaryDark rounded-full text-gray-500 dark:text-gray-400",children:c.jsx(VI,{size:24})}),c.jsxs("div",{className:"relative flex-1",children:[c.jsx("input",{type:"text",placeholder:"جستجو...",value:R,onChange:K=>N(K.target.value),className:"w-full bg-telegram-secondary dark:bg-telegram-secondaryDark text-gray-900 dark:text-white rounded-full py-2 pr-9 pl-4 focus:outline-none focus:ring-1 focus:ring-telegram-primary/50 text-sm"}),c.jsx(kh,{className:"absolute right-3 top-2.5 text-gray-500 w-4 h-4"})]})]}),c.jsx("div",{className:"flex px-2 pb-1 shrink-0 border-b border-telegram-border dark:border-telegram-borderDark",children:["all","personal","groups"].map(K=>c.jsx("button",{onClick:()=>z(K),className:`flex-1 text-center py-2 border-b-2 font-medium text-sm transition-colors ${q===K?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500"}`,children:K==="all"?"همه":K==="personal"?"شخصی":"گروه‌ها"},K))}),c.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:re.map(K=>{const _e=e[K.id],ue=_e==null?void 0:_e.messages[_e.messages.length-1],$e=n===K.id;return c.jsxs("div",{onClick:()=>r(K.id),className:`flex items-center gap-3 p-2.5 mx-2 my-1 rounded-xl cursor-pointer transition-colors ${$e?"bg-telegram-primary text-white":"hover:bg-gray-100 dark:hover:bg-white/5"}`,children:[c.jsxs("div",{className:"relative shrink-0",children:[K.id==="saved"?c.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white",children:c.jsx(Jg,{size:24,fill:"currentColor"})}):c.jsx("img",{src:K.avatar,alt:K.name,className:"w-12 h-12 rounded-full object-cover bg-gray-200"}),K.id!=="saved"&&K.status==="online"&&c.jsx("div",{className:`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 ${$e?"bg-white border-telegram-primary":"bg-green-500 border-white dark:border-black"}`})]}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex justify-between items-baseline mb-0.5",children:[c.jsx("h3",{className:`font-semibold text-base truncate ${$e?"text-white":"text-gray-900 dark:text-gray-100"}`,children:K.name}),ue&&c.jsx("span",{className:`text-[10px] ${$e?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:xe(ue.timestamp)})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("p",{className:`text-sm truncate ${$e?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:K.status==="typing..."?c.jsx("span",{className:"text-telegram-primary animate-pulse",children:"در حال نوشتن..."}):ue?c.jsxs("span",{className:"flex items-center gap-1",children:[ue.senderId==="me"&&c.jsx("span",{className:"opacity-80",children:"شما:"}),ue.type==="image"?"🖼️ عکس":ue.type==="audio"?"🎤 ویس":ue.text]}):c.jsx("span",{className:"text-xs opacity-70 italic",children:K.id!=="saved"&&K.type==="user"?pe(K.lastSeen)||"آفلاین":""})}),(_e==null?void 0:_e.unreadCount)>0&&c.jsx("span",{className:`min-w-[1.25rem] h-5 px-1 rounded-full text-xs font-bold flex items-center justify-center ${$e?"bg-white text-telegram-primary":"bg-telegram-primary text-white"}`,children:_e.unreadCount})]})]})]},K.id)})}),c.jsx("button",{onClick:()=>{v(!0)},className:"absolute bottom-6 left-6 w-14 h-14 bg-telegram-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-10",children:c.jsx(ry,{size:24})})]})},CP=({className:t})=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[c.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),c.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),PP=({imageUrl:t,onClose:e})=>c.jsxs("div",{className:"fixed inset-0 z-[60] bg-black/95 flex items-center justify-center animate-fade-in backdrop-blur-sm",onClick:e,children:[c.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 backdrop-blur-md",children:c.jsx(ir,{size:24})}),c.jsx("a",{href:t,download:!0,onClick:n=>n.stopPropagation(),className:"absolute top-4 left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 backdrop-blur-md",title:"دانلود تصویر",children:c.jsx(ic,{size:24})}),c.jsx("div",{className:"w-full h-full p-4 flex items-center justify-center",children:c.jsx("img",{src:t,alt:"Full view",className:"max-w-full max-h-full object-contain select-none shadow-2xl rounded-md",onClick:n=>n.stopPropagation()})})]}),DP=["😀","😂","🥰","😎","🤔","😭","👍","👎","❤️","🔥","👀","✅","💯","🌹"],OP=["👍","❤️","😂","😮","😢","🔥"],jP=["https://cdn-icons-png.flaticon.com/512/742/742751.png","https://cdn-icons-png.flaticon.com/512/742/742752.png","https://cdn-icons-png.flaticon.com/512/742/742822.png","https://cdn-icons-png.flaticon.com/512/742/742760.png","https://cdn-icons-png.flaticon.com/512/742/742920.png","https://cdn-icons-png.flaticon.com/512/742/742786.png","https://cdn-icons-png.flaticon.com/512/166/166538.png","https://cdn-icons-png.flaticon.com/512/190/190623.png","https://cdn-icons-png.flaticon.com/512/417/417779.png"],LP=t=>{const e=["#df3f4c","#4a9e56","#e08e0b","#8c52ff","#ff5ca8","#31b5d6","#3390ec"];let n=0;for(let r=0;r<t.length;r++)n=t.charCodeAt(r)+((n<<5)-n);return e[Math.abs(n)%e.length]},MP=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),VP=({contact:t,messages:e,myId:n,myRole:r,onSendMessage:s,onEditMessage:i,onDeleteMessage:o,onReaction:l,onBack:u,isMobile:h,onProfileClick:p,onAvatarClick:m,wallpaper:g,onCall:A})=>{const[b,R]=L.useState(""),[N,w]=L.useState(null),[_,k]=L.useState(null),[O,q]=L.useState(null),[z,E]=L.useState(!1),[v,x]=L.useState("emoji"),[I,S]=L.useState(!1),[C,T]=L.useState(!1),[Ce,W]=L.useState(0),[ve,ge]=L.useState(null),[B,Z]=L.useState(null),[re,xe]=L.useState(!1),[pe,Ae]=L.useState(!1),[K,_e]=L.useState(!1),[ue,$e]=L.useState(""),[ct,as]=L.useState([]),[Nt,qt]=L.useState(-1),[_r,ls]=L.useState(0),Fn=L.useRef(null),us=L.useRef(null),cs=L.useRef(null),Gs=L.useRef(null),Qs=L.useRef(null),wr=L.useRef(null),zn=L.useRef(null),pn=L.useRef(null),Bn=L.useRef([]),V=L.useRef(null),Y=t.type==="group",he=t.id==="global_chat";L.useEffect(()=>{var P;K||(P=Fn.current)==null||P.scrollIntoView({behavior:"auto"})},[e.length,N,K]),L.useEffect(()=>{const P=()=>{var hs;const tt=((hs=navigator.connection)==null?void 0:hs.rtt)||45,Ct=Math.floor(Math.random()*20)-10;ls(Math.max(10,tt+Ct))};P();const ne=setInterval(P,5e3);return()=>clearInterval(ne)},[]),L.useEffect(()=>{if(!ue.trim()){as([]),qt(-1);return}const P=e.filter(ne=>ne.type==="text"&&ne.text.toLowerCase().includes(ue.toLowerCase())).map(ne=>ne.id);as(P),P.length>0?qt(P.length-1):qt(-1)},[ue,e]),L.useEffect(()=>{if(Nt>=0&&Nt<ct.length){const P=ct[Nt],ne=document.getElementById(`msg-${P}`);ne&&ne.scrollIntoView({behavior:"smooth",block:"center"})}},[Nt,ct]),L.useEffect(()=>{K&&zn.current?zn.current.focus():($e(""),as([]))},[K]),L.useEffect(()=>{const P=()=>{q(null),E(!1),S(!1)};return window.addEventListener("click",P),()=>window.removeEventListener("click",P)},[]);const H=()=>{ct.length!==0&&qt(P=>P<ct.length-1?P+1:0)},ce=()=>{ct.length!==0&&qt(P=>P>0?P-1:ct.length-1)},Re=()=>{b.trim()&&(_?(i(_.id,b),k(null)):(s({text:b,type:"text"},N==null?void 0:N.id),w(null)),R(""))},qe=P=>{s({imageUrl:P,type:"image",isSticker:!0},N==null?void 0:N.id),w(null),E(!1)},Le=async()=>{try{const P=await navigator.mediaDevices.getUserMedia({audio:!0}),ne=new MediaRecorder(P);pn.current=ne,Bn.current=[],ne.ondataavailable=le=>{le.data.size>0&&Bn.current.push(le.data)},ne.start(),T(!0),W(0),wr.current=window.setInterval(()=>W(le=>le+1),1e3)}catch(P){console.error("Error accessing microphone:",P),alert("دسترسی به میکروفون امکان پذیر نیست.")}},it=P=>{wr.current&&clearInterval(wr.current),pn.current&&C&&(pn.current.onstop=()=>{var ne;if(P&&Bn.current.length>0){const le=new Blob(Bn.current,{type:"audio/mp3"}),tt=Math.floor(Ce/60),Ct=Ce%60;s({type:"audio",file:le,audioDuration:`${tt}:${Ct.toString().padStart(2,"0")}`},N==null?void 0:N.id),w(null)}(ne=pn.current)==null||ne.stream.getTracks().forEach(le=>le.stop())},pn.current.stop()),T(!1),W(0)},et=(P,ne="image")=>{if(P){const le=(P.size/1024/1024).toFixed(2)+" MB";s({type:ne,file:P,fileName:P.name,fileSize:le,text:ne==="image"?"عکس":P.name},N==null?void 0:N.id),w(null),S(!1)}},$n=P=>{P.preventDefault(),P.stopPropagation(),xe(!1);const ne=P.dataTransfer.files;if(ne&&ne.length>0){const le=ne[0],tt=le.type.startsWith("image/");et(le,tt?"image":"file")}},Wn=async()=>{he&&r==="owner"&&confirm("آیا از پاک کردن کل تاریخچه چت جهانی مطمئن هستید؟ این عمل غیرقابل بازگشت است.")&&await wP()},Hn=(P,ne)=>{var le;if(P)if(ve===ne)(le=V.current)==null||le.pause(),ge(null);else{V.current&&V.current.pause();const tt=new Audio(P);V.current=tt,ge(ne),tt.play(),tt.onended=()=>ge(null)}},ds=P=>new Date(P).toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"}),Yi=P=>{if(!P)return"آفلاین";const ne=new Date(P),le=Date.now()-ne.getTime();return le<12e4?"آنلاین":le<36e5?`آخرین بازدید ${Math.floor(le/6e4)} دقیقه پیش`:le<864e5?`آخرین بازدید ${Math.floor(le/36e5)} ساعت پیش`:"آخرین بازدید اخیراً"},Xi=()=>g==="default"?{}:g.startsWith("http")||g.startsWith("data")?{backgroundImage:`url(${g})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:g},$a=P=>{if(!ue||!P)return P;const ne=new RegExp(`(${MP(ue)})`,"gi");return P.split(ne).map((tt,Ct)=>tt.toLowerCase()===ue.toLowerCase()?c.jsx("span",{className:"bg-yellow-300 text-black rounded px-0.5",children:tt},Ct):tt)};return c.jsxs("div",{className:"h-full flex flex-col relative bg-telegram-bg dark:bg-telegram-bgDark overflow-hidden",onDragOver:P=>{P.preventDefault(),xe(!0)},onDragLeave:P=>{P.preventDefault(),P.currentTarget.contains(P.relatedTarget)||xe(!1)},onDrop:$n,children:[re&&c.jsxs("div",{className:"absolute inset-0 z-50 bg-telegram-primary/80 backdrop-blur-sm flex flex-col items-center justify-center text-white animate-fade-in",children:[c.jsx(ty,{size:64,className:"mb-4 animate-bounce"}),c.jsx("h2",{className:"text-2xl font-bold",children:"رها کنید تا ارسال شود"})]}),B&&c.jsx(PP,{imageUrl:B,onClose:()=>Z(null)}),c.jsx("input",{type:"file",ref:Gs,className:"hidden",accept:"image/*",onChange:P=>{var ne;return et((ne=P.target.files)==null?void 0:ne[0],"image")}}),c.jsx("input",{type:"file",ref:Qs,className:"hidden",onChange:P=>{var ne;return et((ne=P.target.files)==null?void 0:ne[0],"file")}}),c.jsx("div",{className:"absolute inset-0 z-0",style:Xi(),children:g==="default"&&c.jsx("div",{className:"absolute inset-0 chat-bg-pattern opacity-100"})}),t.status==="connecting"&&c.jsx("div",{className:"absolute top-16 left-0 right-0 bg-red-500/90 text-white text-xs py-1 text-center z-20",children:"در حال اتصال..."}),c.jsx("div",{className:"relative z-10 flex items-center justify-between px-2 py-2 bg-white/95 dark:bg-telegram-bgDark/95 backdrop-blur-md border-b border-telegram-border dark:border-telegram-borderDark shadow-sm shrink-0 h-16",children:K?c.jsxs("div",{className:"flex-1 flex items-center gap-2 animate-fade-in w-full",children:[c.jsx("button",{onClick:()=>_e(!1),className:"p-2 text-gray-500 hover:text-gray-800 dark:hover:text-white",children:c.jsx(ir,{size:24})}),c.jsxs("div",{className:"flex-1 relative",children:[c.jsx("input",{ref:zn,value:ue,onChange:P=>$e(P.target.value),placeholder:"جستجو در این گفتگو...",className:"w-full bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white rounded-lg pl-3 pr-10 py-2 text-sm outline-none focus:ring-2 focus:ring-telegram-primary"}),c.jsx(kh,{size:16,className:"absolute right-3 top-3 text-gray-400"})]}),c.jsx("div",{className:"flex items-center gap-1 text-sm text-gray-500 font-mono w-16 justify-center",children:ct.length>0?c.jsxs("span",{children:[Nt+1," / ",ct.length]}):c.jsx("span",{children:"0 / 0"})}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:ce,disabled:ct.length===0,className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full disabled:opacity-30",children:c.jsx(PI,{size:20})}),c.jsx("button",{onClick:H,disabled:ct.length===0,className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full disabled:opacity-30",children:c.jsx(Th,{size:20})})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"flex items-center gap-2 overflow-hidden cursor-pointer flex-1",onClick:p,children:[h&&c.jsx("button",{onClick:P=>{P.stopPropagation(),u()},className:"p-2 -mr-2 text-gray-500 dark:text-gray-300",children:c.jsx(xh,{size:22})}),c.jsx("img",{src:t.avatar||"",alt:"",className:"w-10 h-10 rounded-full bg-gray-200 object-cover shrink-0"}),c.jsxs("div",{className:"flex flex-col overflow-hidden",children:[c.jsx("h2",{className:"font-bold text-gray-900 dark:text-white truncate text-base",children:t.name}),c.jsx("span",{className:`text-xs truncate ${t.status==="online"?"text-telegram-primary":"text-gray-500"}`,children:t.id==="saved"?"برای ذخیره پیام‌ها":t.status==="online"?"آنلاین":Yi(t.lastSeen)})]})]}),c.jsxs("div",{className:"hidden md:flex items-center gap-1 text-[10px] text-gray-400 font-mono mr-2 px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-full",title:"کیفیت اتصال (Ping)",children:[c.jsx(GI,{size:12,className:_r<100?"text-green-500":"text-yellow-500"}),c.jsxs("span",{children:[_r,"ms"]})]}),c.jsxs("div",{className:"flex items-center text-gray-500 gap-1",children:[c.jsx("button",{onClick:P=>{P.stopPropagation(),_e(!0)},className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-gray-500",title:"جستجو در چت",children:c.jsx(kh,{size:20})}),he&&r==="owner"&&c.jsx("button",{onClick:P=>{P.stopPropagation(),Wn()},className:"p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full text-red-500",title:"پاکسازی کل چت",children:c.jsx(Ah,{size:20})}),c.jsx("button",{onClick:P=>{P.stopPropagation(),A()},className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-telegram-primary",children:c.jsx(Ia,{size:20})}),c.jsx("button",{className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full",children:c.jsx(FI,{size:20})})]})]})}),c.jsxs("div",{ref:us,className:"relative z-10 flex-1 overflow-y-auto p-2 sm:p-4 flex flex-col gap-1.5 scroll-smooth",onScroll:P=>Ae(P.currentTarget.scrollHeight-P.currentTarget.scrollTop-P.currentTarget.clientHeight>200),children:[e.map((P,ne)=>{const le=P.senderId==="me",tt=!e[ne+1]||e[ne+1].senderId!==P.senderId,Ct=Y&&!le&&(!e[ne-1]||e[ne-1].senderId!==P.senderId),hs=ct.includes(P.id),Ys=ct[Nt]===P.id,fs=P.senderRole==="owner",Kn=P.senderRole==="admin";let sn="px-3 py-2 rounded-2xl shadow-sm text-base break-words border min-w-[4rem] relative transition-all ";return Ys?sn+="ring-4 ring-yellow-400 dark:ring-yellow-500/50 ":hs&&(sn+="ring-2 ring-yellow-200 dark:ring-yellow-500/20 "),fs?sn+="bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-yellow-900/40 dark:to-amber-800/40 text-gray-900 dark:text-white border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.3)] ring-1 ring-amber-300 dark:ring-amber-700 ":Kn?sn+="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/30 text-gray-900 dark:text-white border-blue-400 dark:border-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.2)] ring-1 ring-blue-300 dark:ring-blue-700 ":le?sn+="bg-telegram-chatOut dark:bg-telegram-chatOutDark text-black dark:text-white border-transparent ":sn+="bg-white dark:bg-telegram-chatInDark text-black dark:text-white border-transparent ",le?sn+="rounded-bl-none ":sn+="rounded-br-none ",c.jsxs("div",{id:`msg-${P.id}`,className:`flex ${le?"flex-row-reverse":"flex-row"} items-end gap-2 max-w-[90%] md:max-w-[75%] ${le?"self-end":"self-start"} group animate-slide-in`,children:[Y&&!le&&c.jsx("div",{className:"w-8 h-8 shrink-0 mb-1 cursor-pointer hover:scale-105 transition-transform",onClick:()=>m&&m({id:P.senderId,name:P.senderName,avatar:P.senderAvatar,type:"user"}),children:tt&&c.jsx("img",{src:P.senderAvatar||"https://via.placeholder.com/32",className:"w-8 h-8 rounded-full shadow-md"})}),c.jsxs("div",{className:"flex flex-col relative",onContextMenu:Me=>{Me.preventDefault(),Me.stopPropagation(),q({x:Me.clientX,y:Me.clientY,messageId:P.id,isMe:le})},children:[P.isSticker?c.jsx("img",{src:P.imageUrl,className:"w-32 h-32 object-contain cursor-pointer drop-shadow-md",onClick:()=>Z(P.imageUrl)}):c.jsxs("div",{className:sn,children:[Ct&&c.jsxs("div",{className:"text-xs font-bold mb-1 flex items-center gap-1 cursor-pointer hover:underline",style:{color:LP(P.senderId)},onClick:()=>m&&m({id:P.senderId,name:P.senderName,avatar:P.senderAvatar,type:"user"}),children:[P.senderName,P.senderRole==="owner"&&c.jsxs("span",{className:"flex items-center gap-0.5 text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/50 px-1 rounded-full text-[9px] border border-amber-200",children:[c.jsx(Zg,{size:10,fill:"currentColor"})," مدیریت کل"]}),P.senderRole==="admin"&&c.jsxs("span",{className:"flex items-center gap-0.5 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-1 rounded-full text-[9px] border border-blue-200",children:[c.jsx(ny,{size:10,fill:"currentColor"})," ادمین"]})]}),le&&(fs||Kn)&&c.jsxs("div",{className:"text-[10px] font-bold mb-1 flex items-center gap-1 opacity-80 border-b border-black/10 dark:border-white/10 pb-1",children:[fs&&c.jsxs("span",{className:"flex items-center gap-0.5 text-amber-700 dark:text-amber-300",children:[c.jsx(Zg,{size:10,fill:"currentColor"})," مدیریت کل (شما)"]}),Kn&&c.jsxs("span",{className:"flex items-center gap-0.5 text-blue-700 dark:text-blue-300",children:[c.jsx(ny,{size:10,fill:"currentColor"})," ادمین (شما)"]})]}),P.replyToId&&c.jsx("div",{className:"mb-1 pl-2 border-r-2 border-telegram-primary text-xs opacity-70 truncate bg-black/5 dark:bg-white/5 rounded p-1",children:"پیام پاسخ داده شده"}),P.type==="image"&&c.jsx("img",{src:P.imageUrl,className:"rounded-lg mb-1 max-w-full max-h-80 object-cover",onClick:()=>Z(P.imageUrl)}),P.type==="audio"&&c.jsxs("div",{className:"flex items-center gap-2 p-1 min-w-[150px]",children:[c.jsx("button",{onClick:()=>Hn(P.fileUrl||P.imageUrl,P.id),className:`p-2 rounded-full ${le?"bg-white text-green-600":"bg-telegram-primary text-white"}`,children:ve===P.id?c.jsx(zI,{size:16}):c.jsx(WI,{size:16})}),c.jsxs("div",{className:"flex flex-col w-full",children:[c.jsx("div",{className:"h-1 bg-gray-300 rounded-full overflow-hidden w-full",children:c.jsx("div",{className:`h-full bg-telegram-primary ${ve===P.id?"w-full animate-pulse":"w-0"}`})}),c.jsx("span",{className:"text-[10px] mt-1 opacity-70",children:P.audioDuration})]})]}),P.type==="file"&&c.jsxs("div",{className:"flex items-center gap-3 p-2 bg-black/5 dark:bg-white/5 rounded-lg max-w-xs",children:[c.jsx("div",{className:`p-3 rounded-full ${le?"bg-telegram-primary/20 text-telegram-primary":"bg-gray-200 text-gray-600"}`,children:c.jsx(Ih,{size:24})}),c.jsxs("div",{className:"flex flex-col overflow-hidden",children:[c.jsx("span",{className:"font-bold text-sm truncate",children:P.fileName}),c.jsx("span",{className:"text-xs opacity-60",children:P.fileSize||"File"})]}),P.fileUrl&&c.jsx("a",{href:P.fileUrl,download:!0,target:"_blank",rel:"noreferrer",className:"p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full",children:c.jsx(ic,{size:20})})]}),P.type==="text"&&c.jsx("div",{dir:"auto",className:`whitespace-pre-wrap leading-snug ${fs?"font-medium":""}`,children:K?$a(P.text):P.text}),c.jsxs("div",{className:"flex items-center justify-end gap-1 mt-1 opacity-60 text-[10px] select-none",children:[c.jsx("span",{children:ds(P.timestamp)}),le&&(P.status==="read"?c.jsx(NI,{size:12,className:"text-blue-500"}):c.jsx(Eh,{size:12})),P.status==="error"&&c.jsx("span",{className:"text-red-500 font-bold",children:"!"})]})]}),P.reactions&&Object.keys(P.reactions).length>0&&c.jsx("div",{className:"flex flex-wrap gap-1 mt-1 px-1",children:Object.entries(P.reactions).map(([Me,Wa])=>c.jsxs("button",{onClick:()=>l(P.id,Me),className:"bg-white dark:bg-gray-800 rounded-full px-1.5 py-0.5 text-xs shadow-sm border border-gray-100 dark:border-gray-700",children:[Me," ",c.jsx("span",{className:"font-bold",children:Wa.length})]},Me))})]})]},P.id)}),c.jsx("div",{ref:Fn})]}),pe&&!K&&c.jsx("button",{onClick:()=>{var P;return(P=Fn.current)==null?void 0:P.scrollIntoView({behavior:"smooth"})},className:"absolute bottom-20 right-4 z-20 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg border text-gray-500",children:c.jsx(Th,{size:24})}),c.jsxs("div",{className:"relative z-10 bg-white dark:bg-telegram-bgDark p-2 border-t border-gray-200 dark:border-white/10 shrink-0",children:[N&&c.jsxs("div",{className:"flex items-center justify-between bg-gray-50 dark:bg-white/5 p-2 rounded-t-lg mb-1 text-sm border-l-4 border-telegram-primary",children:[c.jsxs("div",{className:"flex flex-col ml-2",children:[c.jsx("span",{className:"text-telegram-primary font-bold",children:"پاسخ به پیام"}),c.jsx("span",{className:"truncate opacity-70 max-w-[200px]",children:N.text||"رسانه"})]}),c.jsx("button",{onClick:()=>w(null),children:c.jsx(ir,{size:16})})]}),c.jsx("div",{className:"flex items-end gap-2 max-w-5xl mx-auto",children:C?c.jsxs("div",{className:"flex-1 bg-telegram-secondary dark:bg-telegram-secondaryDark rounded-full p-3 flex items-center justify-between animate-pulse",children:[c.jsxs("div",{className:"flex items-center gap-2 text-red-500",children:[c.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full animate-ping"})," ",Math.floor(Ce/60),":",(Ce%60).toString().padStart(2,"0")]}),c.jsx("span",{onClick:()=>it(!1),className:"cursor-pointer text-gray-500",children:"لغو"}),c.jsx(la,{size:24,className:"text-telegram-primary cursor-pointer rotate-180",onClick:()=>it(!0)})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>S(!I),className:"p-3 text-gray-500 hover:text-telegram-primary",children:c.jsx(ty,{size:24,className:"rotate-45"})}),I&&c.jsxs("div",{className:"absolute bottom-20 right-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-2 flex flex-col gap-2 z-50 animate-fade-in",children:[c.jsxs("button",{onClick:()=>{var P;return(P=Gs.current)==null?void 0:P.click()},className:"flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg text-gray-800 dark:text-white",children:[c.jsx(U_,{size:18})," عکس"]}),c.jsxs("button",{onClick:()=>{var P;return(P=Qs.current)==null?void 0:P.click()},className:"flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg text-gray-800 dark:text-white",children:[c.jsx(Ih,{size:18})," فایل"]})]}),c.jsxs("div",{className:"flex-1 bg-gray-100 dark:bg-black/20 rounded-2xl flex items-center relative",children:[c.jsx("textarea",{ref:cs,value:b,onChange:P=>R(P.target.value),onKeyDown:P=>{P.key==="Enter"&&!P.shiftKey&&(P.preventDefault(),Re())},placeholder:"پیام...",className:"w-full bg-transparent p-3 max-h-32 resize-none outline-none text-gray-900 dark:text-white",rows:1}),c.jsx("button",{onClick:()=>E(!z),className:"p-2 text-gray-400 hover:text-telegram-primary",children:c.jsx(YI,{size:24})})]}),b.trim()?c.jsx("button",{onClick:Re,className:"p-3 bg-telegram-primary rounded-full text-white shadow-lg hover:scale-105 transition-transform",children:c.jsx(la,{size:20,className:"rotate-180"})}):c.jsx("button",{onClick:Le,className:"p-3 bg-gray-200 dark:bg-white/10 rounded-full text-gray-500 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors",children:c.jsx($_,{size:24})}),z&&c.jsxs("div",{className:"absolute bottom-20 left-4 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border w-72 h-64 overflow-y-auto p-2 grid grid-cols-6 gap-2 z-50",onClick:P=>P.stopPropagation(),children:[c.jsxs("div",{className:"col-span-6 flex border-b mb-2 pb-1",children:[c.jsx("button",{onClick:()=>x("emoji"),className:`flex-1 ${v==="emoji"?"text-telegram-primary font-bold":""}`,children:"ایموجی"}),c.jsx("button",{onClick:()=>x("sticker"),className:`flex-1 ${v==="sticker"?"text-telegram-primary font-bold":""}`,children:"استیکر"})]}),v==="emoji"?DP.map(P=>c.jsx("button",{onClick:()=>R(ne=>ne+P),className:"text-2xl hover:bg-gray-100 rounded",children:P},P)):jP.map((P,ne)=>c.jsx("img",{src:P,onClick:()=>qe(P),className:"w-full h-auto hover:scale-110 transition-transform cursor-pointer"},ne))]})]})})]}),O&&c.jsxs("div",{className:"fixed z-[60] bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 min-w-[150px] animate-fade-in border dark:border-gray-700",style:{top:O.y,left:O.x},children:[c.jsx("div",{className:"flex gap-1 mb-2 bg-gray-50 dark:bg-black/20 p-1 rounded justify-center",children:OP.map(P=>c.jsx("button",{onClick:()=>{l(O.messageId,P),q(null)},className:"hover:scale-125 transition-transform",children:P},P))}),c.jsxs("button",{onClick:()=>{w(e.find(P=>P.id===O.messageId)),q(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[c.jsx(KI,{size:16})," پاسخ"]}),c.jsxs("button",{onClick:()=>{var P;navigator.clipboard.writeText(((P=e.find(ne=>ne.id===O.messageId))==null?void 0:P.text)||""),q(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[c.jsx(OI,{size:16})," کپی"]}),(O.isMe||r==="owner"||r==="admin")&&c.jsxs("button",{onClick:()=>{o(O.messageId),q(null)},className:"w-full text-right p-2 hover:bg-red-50 text-red-500 rounded flex gap-2",children:[c.jsx(Ah,{size:16})," ",O.isMe?"حذف":"حذف (مدیر)"]}),O.isMe&&c.jsxs("button",{onClick:()=>{k(e.find(P=>P.id===O.messageId)),R(e.find(P=>P.id===O.messageId).text),q(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[c.jsx(BI,{size:16})," ویرایش"]})]})]})},qP=({contact:t,onClose:e,onStartChat:n})=>c.jsxs("div",{className:"h-full flex flex-col bg-white dark:bg-telegram-secondaryDark border-l border-telegram-border dark:border-telegram-borderDark overflow-y-auto animate-slide-in",children:[c.jsxs("div",{className:"flex items-center gap-4 p-4 sticky top-0 bg-white/80 dark:bg-telegram-secondaryDark/80 backdrop-blur-md z-10",children:[c.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-800 dark:hover:text-gray-200",children:c.jsx(ir,{size:24})}),c.jsx("span",{className:"font-semibold text-lg",children:"اطلاعات پروفایل"})]}),c.jsxs("div",{className:"px-6 py-4 flex flex-col items-center border-b-8 border-gray-100 dark:border-black/20",children:[c.jsx("img",{src:t.avatar,alt:t.name,className:"w-28 h-28 rounded-full object-cover mb-4 shadow-lg"}),c.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-1",children:t.name}),c.jsx("p",{className:"text-gray-500 text-sm",children:t.status==="online"?c.jsx("span",{className:"text-telegram-primary",children:"آنلاین"}):`آخرین بازدید ${t.lastSeen||"به تازگی"}`}),n&&c.jsxs("button",{onClick:()=>n(t),className:"mt-4 flex items-center gap-2 bg-telegram-primary hover:bg-telegram-primaryDark text-white px-6 py-2 rounded-full font-medium transition-colors",children:[c.jsx(Gf,{size:18}),"شروع گفتگو"]})]}),c.jsxs("div",{className:"p-4 space-y-5 border-b-8 border-gray-100 dark:border-black/20",children:[c.jsxs("div",{className:"flex items-start gap-4",children:[c.jsx("div",{className:"mt-1 text-gray-500",children:c.jsx(Ia,{size:22})}),c.jsxs("div",{children:[c.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:t.phone||"---"}),c.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:"موبایل"})]})]}),c.jsxs("div",{className:"flex items-start gap-4",children:[c.jsx("div",{className:"mt-1 text-gray-500",children:c.jsx(q_,{size:22})}),c.jsxs("div",{children:[c.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:t.username||"---"}),c.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:"نام کاربری"})]})]}),c.jsxs("div",{className:"flex items-start gap-4",children:[c.jsx("div",{className:"mt-1 text-gray-500",children:c.jsx(Kf,{size:22})}),c.jsxs("div",{className:"flex-1 flex justify-between items-center",children:[c.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:"اعلانات"}),c.jsx("div",{className:"w-10 h-5 bg-telegram-primary rounded-full relative cursor-pointer",children:c.jsx("div",{className:"absolute left-1 top-1 w-3 h-3 bg-white rounded-full"})})]})]}),c.jsxs("div",{className:"flex items-start gap-4",children:[c.jsx("div",{className:"mt-1 text-gray-500",children:c.jsx(Ih,{size:22})}),c.jsxs("div",{children:[c.jsx("p",{className:"text-gray-900 dark:text-white text-base leading-snug",children:t.bio||"بدون بیوگرافی"}),c.jsx("p",{className:"text-gray-500 text-xs mt-1",children:"بیوگرافی"})]})]})]}),c.jsxs("div",{className:"p-2",children:[c.jsxs("div",{className:"flex border-b border-gray-200 dark:border-gray-700 mb-2",children:[c.jsx("button",{className:"flex-1 py-2 text-telegram-primary border-b-2 border-telegram-primary font-medium text-sm",children:"رسانه"}),c.jsx("button",{className:"flex-1 py-2 text-gray-500 font-medium text-sm hover:text-gray-700 dark:hover:text-gray-300",children:"فایل‌ها"}),c.jsx("button",{className:"flex-1 py-2 text-gray-500 font-medium text-sm hover:text-gray-700 dark:hover:text-gray-300",children:"لینک‌ها"})]}),c.jsx("div",{className:"grid grid-cols-3 gap-1",children:[1,2,3,4,5,6].map(r=>c.jsx("div",{className:"aspect-square bg-gray-200 dark:bg-gray-800 cursor-pointer hover:opacity-80 transition-opacity",children:c.jsx("img",{src:`https://picsum.photos/200/200?random=${r+10}`,className:"w-full h-full object-cover",alt:"media"})},r))})]})]}),UP=[{id:"default",name:"پیش‌فرض",value:"default",color:"#8db5d0"},{id:"blue",name:"آبی آسمانی",value:"#dbeafe",color:"#dbeafe"},{id:"green",name:"سبز نعنایی",value:"#dcfce7",color:"#dcfce7"},{id:"dark",name:"تاریک",value:"#18181b",color:"#18181b"},{id:"pink",name:"صورتی",value:"#fce7f3",color:"#fce7f3"},{id:"pattern1",name:"طرح ۱",value:"https://img.freepik.com/free-vector/hand-drawn-contact-sheet-template_23-2150937449.jpg",color:"#e5e7eb"},{id:"pattern2",name:"طرح ۲",value:"https://img.freepik.com/free-vector/seamless-pattern-with-cute-cats_23-2147665476.jpg",color:"#e5e7eb"}],FP=({isOpen:t,onClose:e,userProfile:n,onSave:r,wallpaper:s,onSaveWallpaper:i})=>{const[o,l]=L.useState(n),[u,h]=L.useState("profile"),[p,m]=L.useState(s),[g,A]=L.useState("");if(L.useEffect(()=>{l(n),m(s)},[n,s,t]),!t)return null;const b=()=>{r(o),i(p),e()};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",children:c.jsxs("div",{className:"bg-white dark:bg-telegram-secondaryDark w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[c.jsxs("div",{className:"flex flex-col border-b border-gray-100 dark:border-white/10",children:[c.jsxs("div",{className:"flex items-center justify-between p-4",children:[c.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"تنظیمات"}),c.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors",children:c.jsx(ir,{size:24,className:"text-gray-500 dark:text-gray-300"})})]}),c.jsxs("div",{className:"flex px-4",children:[c.jsx("button",{onClick:()=>h("profile"),className:`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${u==="profile"?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"}`,children:c.jsxs("div",{className:"flex items-center justify-center gap-2",children:[c.jsx(Iu,{size:18}),"پروفایل"]})}),c.jsx("button",{onClick:()=>h("chat"),className:`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${u==="chat"?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"}`,children:c.jsxs("div",{className:"flex items-center justify-center gap-2",children:[c.jsx(U_,{size:18}),"پس‌زمینه چت"]})})]})]}),c.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:u==="profile"?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative bg-telegram-secondary dark:bg-black/20 p-6 flex flex-col items-center justify-center gap-4",children:[c.jsxs("div",{className:"relative group cursor-pointer",children:[c.jsx("div",{className:"w-24 h-24 rounded-full bg-telegram-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg",children:o.name.charAt(0)}),c.jsx("div",{className:"absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:c.jsx(RI,{size:24,className:"text-white"})})]}),c.jsx("div",{className:"text-center",children:c.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"عکس پروفایل خود را تغییر دهید"})})]}),c.jsxs("div",{className:"p-6 space-y-6",children:[c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:c.jsx(Iu,{size:20})}),c.jsx("input",{type:"text",value:o.name,onChange:R=>l({...o,name:R.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white",placeholder:"نام نمایشی"}),c.jsx("label",{className:"text-xs text-telegram-primary mt-1 block",children:"نام (اجباری)"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:c.jsx(LI,{size:20})}),c.jsx("input",{type:"text",value:o.bio,onChange:R=>l({...o,bio:R.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white",placeholder:"بیوگرافی"}),c.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"کمی درباره خودتان بنویسید"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:c.jsx(q_,{size:20})}),c.jsx("input",{type:"text",value:o.username,onChange:R=>l({...o,username:R.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white dir-ltr text-right",placeholder:"نام کاربری"}),c.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"نام کاربری عمومی"})]}),c.jsxs("div",{className:"relative group",children:[c.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:c.jsx(Ia,{size:20})}),c.jsx("input",{type:"tel",value:o.phone,onChange:R=>l({...o,phone:R.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white dir-ltr text-right",placeholder:"شماره موبایل"}),c.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"شماره موبایل"})]})]})]}):c.jsxs("div",{className:"p-6 space-y-6",children:[c.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"یک تصویر پس‌زمینه برای گفتگوهای خود انتخاب کنید."}),c.jsx("div",{className:"grid grid-cols-3 gap-3",children:UP.map(R=>c.jsxs("div",{onClick:()=>m(R.value),className:`
                                    relative aspect-[3/4] rounded-lg cursor-pointer overflow-hidden border-2 transition-all shadow-sm
                                    ${p===R.value?"border-telegram-primary scale-105":"border-transparent hover:scale-105"}
                                `,children:[c.jsx("div",{className:"w-full h-full",style:{backgroundColor:R.color,backgroundImage:R.value.startsWith("http")?`url(${R.value})`:void 0,backgroundSize:"cover",backgroundPosition:"center"},children:R.value==="default"&&c.jsx("div",{className:"w-full h-full opacity-30",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}})}),c.jsx("div",{className:"absolute bottom-0 w-full bg-black/40 text-white text-[10px] text-center py-1",children:R.name}),p===R.value&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20",children:c.jsx(Eh,{className:"text-white drop-shadow-md",size:32})})]},R.id))}),c.jsxs("div",{className:"pt-4 border-t border-gray-100 dark:border-white/10",children:[c.jsx("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block",children:"لینک تصویر دلخواه"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"text",value:g,onChange:R=>A(R.target.value),placeholder:"https://example.com/image.jpg",className:"flex-1 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-telegram-primary"}),c.jsx("button",{onClick:()=>{g&&m(g)},className:"bg-telegram-secondary dark:bg-white/10 text-telegram-primary rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/20",children:"اعمال"})]})]})]})}),c.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-black/20 flex justify-end gap-3",children:[c.jsx("button",{onClick:e,className:"px-4 py-2 text-telegram-primary hover:bg-telegram-primary/10 rounded-lg transition-colors font-medium",children:"انصراف"}),c.jsxs("button",{onClick:b,className:"px-6 py-2 bg-telegram-primary hover:bg-telegram-primaryDark text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2",children:[c.jsx(Eh,{size:18}),"ذخیره تغییرات"]})]})]})})},zP=({onClose:t,currentUserEmail:e,currentUserRole:n,onStartChat:r})=>{const[s,i]=L.useState("users"),[o,l]=L.useState([]),[u,h]=L.useState(!0),[p,m]=L.useState({isOpen:!1,targetUid:null}),[g,A]=L.useState({isOpen:!1,targetUid:null,targetName:""}),[b,R]=L.useState([]),[N,w]=L.useState(""),[_,k]=L.useState([]),[O,q]=L.useState("");L.useEffect(()=>{z(),E()},[]);const z=async()=>{h(!0);const W=await yP();l(W),h(!1)},E=async()=>{const W=await AE();k(W)},v=async(W,ve,ge)=>{if(n!=="owner"){alert("فقط مدیر کل می‌تواند نقش‌ها را تغییر دهد.");return}const B=o.find(Z=>Z.uid===W);if((B==null?void 0:B.email)===Jt.OWNER_EMAIL){alert("نمی‌توانید نقش مدیر کل اصلی را تغییر دهید.");return}await vP(W,ge),l(o.map(Z=>Z.uid===W?{...Z,role:ge}:Z))},x=async(W,ve)=>{const ge=o.find(B=>B.uid===W);if((ge==null?void 0:ge.role)==="owner"){alert("نمی‌توانید مدیر کل را مسدود کنید.");return}if((ge==null?void 0:ge.role)==="admin"&&n!=="owner"){alert("ادمین نمی‌تواند ادمین دیگر را مسدود کند.");return}await _P(W,ve||!1),l(o.map(B=>B.uid===W?{...B,isBanned:!ve}:B))},I=async()=>{!p.targetUid||!N.trim()||(await EP(p.targetUid,"پیام سیستم مدیریت",N),m({isOpen:!1,targetUid:null}),w(""),alert("اعلان ارسال شد."))},S=async()=>{if(!O.trim())return;const W=[..._,O.trim()];k(W),q(""),await A0(W)},C=async W=>{const ve=_.filter(ge=>ge!==W);k(ve),await A0(ve)},T=async W=>{A({isOpen:!0,targetUid:W.uid,targetName:W.name}),R([]);const ve=await xP(W.uid);R(ve)},Ce=async W=>{confirm("آیا از حذف این پیام مطمئن هستید؟")&&(await kE(W),R(ve=>ve.filter(ge=>ge.id!==W)))};return c.jsx("div",{className:"fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in",children:c.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden",children:[c.jsxs("div",{className:"p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center border-b border-gray-200 dark:border-gray-700",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Qf,{className:"text-red-600",size:24}),c.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"پنل مدیریت پیشرفته"})]}),c.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full",children:c.jsx(ir,{size:24})})]}),c.jsxs("div",{className:"flex border-b border-gray-200 dark:border-gray-700",children:[c.jsx("button",{onClick:()=>i("users"),className:`flex-1 py-3 font-medium text-sm transition-colors ${s==="users"?"bg-white dark:bg-gray-900 border-b-2 border-blue-500 text-blue-600":"bg-gray-50 dark:bg-gray-800 text-gray-500"}`,children:c.jsxs("div",{className:"flex items-center justify-center gap-2",children:[c.jsx(Iu,{size:18})," کاربران"]})}),c.jsx("button",{onClick:()=>i("filters"),className:`flex-1 py-3 font-medium text-sm transition-colors ${s==="filters"?"bg-white dark:bg-gray-900 border-b-2 border-blue-500 text-blue-600":"bg-gray-50 dark:bg-gray-800 text-gray-500"}`,children:c.jsxs("div",{className:"flex items-center justify-center gap-2",children:[c.jsx(H_,{size:18})," فیلتر کلمات"]})})]}),c.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:s==="users"?u?c.jsx("div",{className:"text-center py-10 text-gray-500",children:"در حال دریافت لیست کاربران..."}):c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-right",children:[c.jsx("thead",{className:"text-xs text-gray-500 bg-gray-50 dark:bg-gray-800 uppercase",children:c.jsxs("tr",{children:[c.jsx("th",{className:"px-6 py-3",children:"کاربر"}),c.jsx("th",{className:"px-6 py-3",children:"ایمیل / موبایل"}),c.jsx("th",{className:"px-6 py-3",children:"نقش"}),c.jsx("th",{className:"px-6 py-3",children:"وضعیت"}),c.jsx("th",{className:"px-6 py-3",children:"ابزارها"})]})}),c.jsx("tbody",{children:o.map(W=>c.jsxs("tr",{className:"bg-white dark:bg-gray-900 border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:[c.jsxs("td",{className:"px-6 py-4 flex items-center gap-3",children:[c.jsx("img",{src:W.avatar,className:"w-8 h-8 rounded-full"}),c.jsxs("div",{className:"flex flex-col",children:[c.jsx("span",{className:"font-medium text-gray-900 dark:text-white",children:W.name}),W.email===Jt.OWNER_EMAIL&&c.jsx("span",{className:"text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full w-fit",children:"Owner"})]})]}),c.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:c.jsxs("div",{className:"flex flex-col",children:[c.jsx("span",{children:W.email}),c.jsx("span",{className:"text-xs",children:W.phone}),c.jsx("span",{className:"text-[10px] opacity-50",children:W.uid})]})}),c.jsx("td",{className:"px-6 py-4",children:n==="owner"&&W.email!==Jt.OWNER_EMAIL?c.jsxs("select",{value:W.role,onChange:ve=>v(W.uid,W.role,ve.target.value),className:"bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",children:[c.jsx("option",{value:"user",children:"کاربر"}),c.jsx("option",{value:"admin",children:"ادمین"}),c.jsx("option",{value:"owner",children:"مدیر کل"})]}):c.jsx("span",{className:`px-2 py-1 rounded text-xs font-bold ${W.role==="owner"?"bg-yellow-100 text-yellow-800":W.role==="admin"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:W.role==="owner"?"مدیر کل":W.role==="admin"?"ادمین":"کاربر"})}),c.jsx("td",{className:"px-6 py-4",children:W.isBanned?c.jsxs("span",{className:"text-red-600 font-bold flex items-center gap-1",children:[c.jsx(Xg,{size:14})," مسدود"]}):c.jsxs("span",{className:"text-green-600 font-bold flex items-center gap-1",children:[c.jsx(CI,{size:14})," فعال"]})}),c.jsxs("td",{className:"px-6 py-4 flex items-center gap-2",children:[W.email!==Jt.OWNER_EMAIL&&(n==="owner"||n==="admin"&&W.role==="user")&&c.jsx("button",{onClick:()=>x(W.uid,W.isBanned||!1),title:W.isBanned?"رفع مسدودی":"مسدود کردن",className:`p-2 rounded-lg text-white ${W.isBanned?"bg-green-600 hover:bg-green-700":"bg-red-600 hover:bg-red-700"}`,children:c.jsx(Xg,{size:16})}),c.jsx("button",{onClick:()=>m({isOpen:!0,targetUid:W.uid}),title:"ارسال اعلان سیستمی",className:"p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white",children:c.jsx(Kf,{size:16})}),c.jsx("button",{onClick:()=>{r(W),t()},title:"گفتگو",className:"p-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white",children:c.jsx(Gf,{size:16})}),(n==="owner"||n==="admin")&&c.jsx("button",{onClick:()=>T(W),title:"نظارت بر پیام‌ها (جاسوسی)",className:"p-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white",children:c.jsx(ey,{size:16})})]})]},W.uid))})]})}):c.jsxs("div",{className:"max-w-2xl mx-auto",children:[c.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm text-yellow-800 flex items-start gap-3",children:[c.jsx(bI,{className:"shrink-0"}),c.jsx("p",{children:"کلماتی که در اینجا وارد می‌کنید، در هنگام ارسال پیام در چت عمومی، با ستاره (***) جایگزین خواهند شد. این تغییرات برای همه اعمال می‌شود."})]}),c.jsxs("div",{className:"flex gap-2 mb-6",children:[c.jsx("input",{type:"text",value:O,onChange:W=>q(W.target.value),placeholder:"کلمه ممنوعه جدید...",className:"flex-1 p-3 rounded-xl border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"}),c.jsx("button",{onClick:S,className:"bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors",children:"افزودن"})]}),c.jsxs("div",{className:"flex flex-wrap gap-2",children:[_.map((W,ve)=>c.jsxs("div",{className:"bg-red-100 text-red-800 px-3 py-1 rounded-full flex items-center gap-2",children:[c.jsx("span",{children:W}),c.jsx("button",{onClick:()=>C(W),className:"hover:text-red-900",children:c.jsx(ir,{size:14})})]},ve)),_.length===0&&c.jsx("p",{className:"text-gray-500 w-full text-center",children:"هیچ کلمه ممنوعه‌ای ثبت نشده است."})]})]})}),p.isOpen&&c.jsx("div",{className:"absolute inset-0 z-[110] bg-black/70 flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl",children:[c.jsx("h3",{className:"text-lg font-bold mb-4",children:"ارسال پیام سیستمی به کاربر"}),c.jsx("textarea",{value:N,onChange:W=>w(W.target.value),placeholder:"پیام خود را بنویسید...",className:"w-full h-32 p-3 border rounded-lg mb-4 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 resize-none"}),c.jsxs("div",{className:"flex justify-end gap-2",children:[c.jsx("button",{onClick:()=>m({isOpen:!1,targetUid:null}),className:"px-4 py-2 text-gray-500",children:"انصراف"}),c.jsxs("button",{onClick:I,className:"px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2",children:[c.jsx(la,{size:16})," ارسال"]})]})]})}),g.isOpen&&c.jsx("div",{className:"absolute inset-0 z-[110] bg-black/70 flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl h-[70vh] shadow-2xl flex flex-col overflow-hidden border border-gray-300 dark:border-gray-700",children:[c.jsxs("div",{className:"p-4 bg-purple-600 text-white flex justify-between items-center",children:[c.jsxs("h3",{className:"text-lg font-bold flex items-center gap-2",children:[c.jsx(ey,{size:20})," تاریخچه چت جهانی: ",g.targetName]}),c.jsx("button",{onClick:()=>A({isOpen:!1,targetUid:null,targetName:""}),children:c.jsx(ir,{size:20})})]}),c.jsx("div",{className:"flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900 space-y-2",children:b.length>0?b.map(W=>c.jsxs("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg shadow border border-gray-200 dark:border-gray-700 flex justify-between items-start",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-gray-900 dark:text-white text-sm",children:W.text}),c.jsx("span",{className:"text-xs text-gray-400 block mt-1",children:new Date(W.timestamp).toLocaleString("fa-IR")})]}),c.jsx("button",{onClick:()=>Ce(W.id),className:"text-red-500 hover:bg-red-50 p-1.5 rounded",title:"حذف اجباری پیام",children:c.jsx(Ah,{size:16})})]},W.id)):c.jsx("p",{className:"text-center text-gray-500 mt-10",children:"هیچ پیامی در چت جهانی یافت نشد."})})]})})]})})},BP=({onSuccess:t,storedAccounts:e=[],initialEmail:n=""})=>{const[r,s]=L.useState(!0),[i,o]=L.useState(!1),[l,u]=L.useState(""),[h,p]=L.useState(e.length>0&&!n),[m,g]=L.useState({name:"",email:n||"",phone:"",password:""});L.useEffect(()=>{n&&(g(w=>({...w,email:n})),p(!1))},[n]);const A=async w=>{w.preventDefault(),u(""),o(!0);try{if(r){if(!m.email||!m.password)throw new Error("لطفا ایمیل و رمز عبور را وارد کنید");await lP(m.email,m.password)}else{if(!m.name||!m.email||!m.password||!m.phone)throw new Error("لطفا تمام فیلدها را پر کنید");if(m.password.length<6)throw new Error("رمز عبور باید حداقل ۶ کاراکتر باشد");await aP(m.email,m.password,m.name,m.phone)}}catch(_){console.error(_),_.code==="auth/invalid-email"?u("فرمت ایمیل نامعتبر است"):_.code==="auth/user-not-found"||_.code==="auth/wrong-password"||_.code==="auth/invalid-credential"?u("ایمیل یا رمز عبور اشتباه است"):_.code==="auth/email-already-in-use"?u("این ایمیل قبلا ثبت شده است"):u(_.message||"خطایی رخ داد. لطفا دوباره تلاش کنید.")}finally{o(!1)}},b=async()=>{u(""),o(!0);try{await uP()}catch(w){if(console.error("Google Login Error:",w),w.code==="auth/unauthorized-domain"){const _=window.location.hostname;u(`دامنه "${_}" غیرمجاز است. لطفاً آن را در بخش Authentication > Settings > Authorized domains کنسول فایربیس اضافه کنید.`)}else w.code==="auth/popup-closed-by-user"?u("پنجره ورود توسط شما بسته شد."):u(w.message||"خطا در ورود با گوگل")}finally{o(!1)}},R=w=>{g(_=>({..._,email:w.email})),p(!1),s(!0)},N=()=>c.jsx("div",{className:"absolute bottom-6 left-0 right-0 z-20 flex justify-center animate-fade-in pointer-events-none",children:c.jsxs("div",{className:"pointer-events-auto bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300",children:[c.jsxs("a",{href:"https://github.com/mrv006",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-telegram-primary dark:hover:text-telegram-primary transition-colors group",children:[c.jsx("div",{className:"p-1.5 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors",children:c.jsx(jI,{size:18})}),c.jsxs("div",{className:"flex flex-col",children:[c.jsx("span",{className:"text-[10px] opacity-60 font-medium leading-none mb-0.5",children:"Designed & Developed by"}),c.jsx("span",{className:"text-sm font-bold leading-none tracking-wide font-mono",children:"Mr.V"})]})]}),c.jsx("div",{className:"w-px h-8 bg-gray-400/30 dark:bg-white/20"}),c.jsxs("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-300",children:[c.jsx(QI,{size:16,className:"opacity-70"}),c.jsx("span",{className:"text-xs font-mono font-bold tracking-wider opacity-90",children:"09902076468"})]})]})});return h&&e.length>0?c.jsxs("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark p-4 relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 opacity-10 chat-bg-pattern pointer-events-none"}),c.jsxs("div",{className:"w-full max-w-md bg-white dark:bg-telegram-secondaryDark rounded-3xl shadow-2xl p-8 relative z-10 animate-fade-in",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("div",{className:"w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg shadow-telegram-primary/30 p-2 overflow-hidden border-4 border-telegram-primary",children:c.jsx("img",{src:"https://www.tarhbama.com/cities-vector/147566",alt:"Logo",className:"w-full h-full object-cover"})}),c.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:"انتخاب حساب کاربری"}),c.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm",children:"برای ورود یکی از حساب‌های ذخیره شده را انتخاب کنید"})]}),c.jsxs("div",{className:"space-y-3 mb-6",children:[e.map(w=>c.jsxs("button",{onClick:()=>R(w),className:"w-full bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 p-3 rounded-xl flex items-center gap-4 transition-colors border border-gray-100 dark:border-gray-700",children:[c.jsx("img",{src:w.avatar,className:"w-12 h-12 rounded-full object-cover"}),c.jsxs("div",{className:"text-right flex-1",children:[c.jsx("h3",{className:"font-bold text-gray-900 dark:text-white",children:w.name}),c.jsx("p",{className:"text-sm text-gray-500",children:w.email})]}),c.jsx(xh,{size:20,className:"text-gray-400 rotate-180"})]},w.uid)),c.jsxs("button",{onClick:()=>p(!1),className:"w-full bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 p-3 rounded-xl flex items-center gap-4 transition-colors border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 hover:text-telegram-primary",children:[c.jsx("div",{className:"w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center",children:c.jsx(W_,{size:24})}),c.jsx("div",{className:"text-right flex-1",children:c.jsx("h3",{className:"font-bold",children:"استفاده از حساب دیگر"})})]})]})]}),N()]}):c.jsxs("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark p-4 relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 opacity-10 chat-bg-pattern pointer-events-none"}),c.jsxs("div",{className:"w-full max-w-md bg-white dark:bg-telegram-secondaryDark rounded-3xl shadow-2xl p-8 relative z-10 animate-fade-in border border-white/50 dark:border-white/5",children:[c.jsxs("div",{className:"text-center mb-8 relative",children:[e.length>0&&c.jsx("button",{onClick:()=>p(!0),className:"absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600",title:"بازگشت به لیست حساب‌ها",children:c.jsx(JI,{size:20})}),c.jsx("div",{className:"w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-4 shadow-xl shadow-telegram-primary/30 ring-4 ring-telegram-primary dark:ring-telegram-secondaryDark p-2 overflow-hidden transform hover:scale-105 transition-transform duration-500",children:c.jsx("img",{src:"https://www.tarhbama.com/cities-vector/147566",alt:"Logo",className:"w-full h-full object-cover"})}),c.jsx("h1",{className:"text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight",children:r?"ورود به ایران‌گرام":"ساخت حساب کاربری"}),c.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm font-medium",children:r?"به گفتگوهای خود بازگردید":"به جمع هزاران کاربر ایرانی بپیوندید"})]}),l&&c.jsxs("div",{className:"mb-6 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg flex items-start gap-2 text-right dir-rtl",dir:"rtl",children:[c.jsx(SI,{size:16,className:"mt-0.5 shrink-0"}),c.jsx("span",{children:l})]}),c.jsxs("form",{onSubmit:A,className:"space-y-4",children:[!r&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"relative group",children:[c.jsx(Iu,{className:"absolute right-3 top-3 text-gray-400 group-focus-within:text-telegram-primary transition-colors",size:20}),c.jsx("input",{type:"text",name:"name",autoComplete:"name",placeholder:"نام و نام خانوادگی",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white font-medium placeholder:font-normal",value:m.name,onChange:w=>g({...m,name:w.target.value})})]}),c.jsxs("div",{className:"relative group",children:[c.jsx(Ia,{className:"absolute right-3 top-3 text-gray-400 group-focus-within:text-telegram-primary transition-colors",size:20}),c.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",placeholder:"شماره موبایل",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right font-medium placeholder:font-normal",value:m.phone,onChange:w=>g({...m,phone:w.target.value})})]})]}),c.jsxs("div",{className:"relative group",children:[c.jsx(MI,{className:"absolute right-3 top-3 text-gray-400 group-focus-within:text-telegram-primary transition-colors",size:20}),c.jsx("input",{type:"email",name:"email",autoComplete:"username",placeholder:"ایمیل",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right font-medium placeholder:font-normal",value:m.email,onChange:w=>g({...m,email:w.target.value})})]}),c.jsxs("div",{className:"relative group",children:[c.jsx(z_,{className:"absolute right-3 top-3 text-gray-400 group-focus-within:text-telegram-primary transition-colors",size:20}),c.jsx("input",{type:"password",name:"password",autoComplete:r?"current-password":"new-password",placeholder:"رمز عبور",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right font-medium placeholder:font-normal",value:m.password,onChange:w=>g({...m,password:w.target.value})})]}),c.jsx("button",{type:"submit",disabled:i,className:"w-full bg-telegram-primary hover:bg-telegram-primaryDark text-white font-bold py-3 rounded-xl shadow-lg shadow-telegram-primary/30 flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-6",children:i?c.jsx(F_,{className:"animate-spin"}):c.jsxs(c.Fragment,{children:[r?"ورود":"ثبت نام",c.jsx(xh,{size:20,className:"rotate-180"})]})})]}),c.jsxs("div",{className:"relative my-6",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-200 dark:border-white/10"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-2 bg-white dark:bg-telegram-secondaryDark text-gray-500",children:"یا"})})]}),c.jsxs("button",{type:"button",onClick:b,disabled:i,className:"w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-700 dark:text-white font-medium py-3 rounded-xl flex items-center justify-center gap-3 transition-colors",children:[c.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",className:"w-5 h-5",alt:"Google"}),"ورود با حساب گوگل"]}),c.jsx("div",{className:"mt-6 text-center",children:c.jsx("button",{onClick:()=>{s(!r),u("")},className:"text-telegram-primary hover:underline text-sm font-medium",children:r?"حساب کاربری ندارید؟ ثبت نام کنید":"قبلا ثبت نام کرده‌اید؟ وارد شوید"})})]}),N()]})},$P=({currentUser:t,onLogout:e})=>{const[n,r]=L.useState(""),[s,i]=L.useState(!1),[o,l]=L.useState(!1),u=async()=>{if(n.trim()){i(!0);try{await gP(t.uid,t.name,n),l(!0),r("")}catch(h){console.error("Error sending appeal",h),alert("خطا در ارسال پیام. لطفا دوباره تلاش کنید.")}finally{i(!1)}}};return c.jsx("div",{className:"fixed inset-0 z-[200] bg-gray-100 dark:bg-black flex flex-col items-center justify-center p-4 animate-fade-in",children:c.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800",children:[c.jsxs("div",{className:"bg-red-600 p-8 flex flex-col items-center text-center text-white",children:[c.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm animate-pulse",children:c.jsx(Qf,{size:40})}),c.jsx("h1",{className:"text-2xl font-bold mb-2",children:"حساب مسدود شده است"}),c.jsx("p",{className:"opacity-90 text-sm leading-relaxed",children:"دسترسی شما به دلیل نقض قوانین محدود شده است."})]}),c.jsxs("div",{className:"p-6 space-y-6",children:[c.jsxs("div",{className:"flex items-start gap-3 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-red-800 dark:text-red-200 text-sm border border-red-100 dark:border-red-800",children:[c.jsx(z_,{className:"shrink-0 mt-1",size:18}),c.jsx("p",{className:"leading-relaxed",children:"شما اجازه چت یا فعالیت در گروه‌ها را ندارید. تنها راه ارتباطی شما، ارسال پیام مستقیم به مدیریت یا ادمین جهت درخواست رفع مسدودی است."})]}),o?c.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl text-center animate-fade-in",children:[c.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 rounded-full flex items-center justify-center mx-auto mb-3",children:c.jsx(la,{size:24,className:"rotate-180"})}),c.jsx("h3",{className:"font-bold text-green-700 dark:text-green-300 mb-1",children:"پیام ارسال شد"}),c.jsx("p",{className:"text-sm text-green-600 dark:text-green-400",children:"پیام شما برای تیم مدیریت ارسال گردید. لطفاً منتظر بررسی بمانید."}),c.jsx("button",{onClick:()=>l(!1),className:"text-xs text-gray-400 underline mt-4 hover:text-gray-600 dark:hover:text-gray-200",children:"ارسال پیام مجدد"})]}):c.jsxs("div",{className:"space-y-3",children:[c.jsxs("label",{className:"flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300",children:[c.jsx(Gf,{size:16}),"ارسال پیام مستقیم به مدیریت/ادمین"]}),c.jsx("textarea",{value:n,onChange:h=>r(h.target.value),placeholder:"متن درخواست یا عذرخواهی خود را اینجا بنویسید...",className:"w-full h-32 p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-black/20 focus:ring-2 focus:ring-red-500 outline-none resize-none text-gray-900 dark:text-white transition-all"}),c.jsx("button",{onClick:u,disabled:s||!n.trim(),className:"w-full bg-telegram-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg",children:s?"در حال ارسال...":c.jsxs(c.Fragment,{children:[c.jsx(la,{size:18,className:"rotate-180"}),"ارسال درخواست"]})})]}),c.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800 pt-4",children:c.jsxs("button",{onClick:e,className:"w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-500 transition-colors py-2 text-sm",children:[c.jsx(B_,{size:16}),"خروج و تعویض حساب"]})})]})]})})},WP="data:audio/mpeg;base64,//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",Zl=[{id:"global_chat",name:"چت عمومی جهانی 🌍",avatar:"https://cdn-icons-png.flaticon.com/512/921/921490.png",status:"online",bio:"گفتگو با تمام کاربران آنلاین در سراسر جهان (متصل به سرور واقعی)",username:"@global_world",phone:"",type:"group",isGlobal:!0},{id:"saved",name:"پیام‌های ذخیره شده",avatar:"",status:"online",bio:"فضای شخصی شما برای ذخیره پیام‌ها و فایل‌ها",username:"@saved_messages",phone:"",type:"user"}],Ro={};Zl.forEach(t=>{Ro[t.id]={contactId:t.id,messages:[],unreadCount:0,draft:""}});const HP={name:"کاربر مهمان",bio:"...",username:"@guest",phone:"",role:"user",isBanned:!1},KP=()=>{var pn,Bn;const[t,e]=L.useState(null),[n,r]=L.useState(!0),[s,i]=L.useState(Zl),[o,l]=L.useState(Ro),[u,h]=L.useState(HP),[p,m]=L.useState([]),[g,A]=L.useState(""),[b,R]=L.useState("default"),[N,w]=L.useState(null),[_,k]=L.useState(()=>localStorage.getItem("irangram_theme")||ws.LIGHT),[O,q]=L.useState(window.innerWidth<768),[z,E]=L.useState(!1),[v,x]=L.useState(null),[I,S]=L.useState(!1),[C,T]=L.useState(!1),[Ce,W]=L.useState(!1),[ve,ge]=L.useState(null),[B,Z]=L.useState(!1),[re,xe]=L.useState(0),[pe,Ae]=L.useState(!1),[K,_e]=L.useState(null),ue=L.useRef(null),$e=L.useRef(new Audio(WP));L.useEffect(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[]),L.useEffect(()=>{if(u.isBanned&&"Notification"in window&&Notification.permission==="granted")try{new Notification("⛔ حساب کاربری مسدود شد",{body:"دسترسی شما به امکانات برنامه محدود شده است. برای پیگیری به مدیریت پیام دهید.",icon:"https://cdn-icons-png.flaticon.com/512/2111/2111615.png",tag:"ban_status",requireInteraction:!0})}catch(V){console.error("Notification trigger failed",V)}},[u.isBanned]),L.useEffect(()=>{const V=Y=>{Y.preventDefault(),ge(Y)};return window.addEventListener("beforeinstallprompt",V),()=>{window.removeEventListener("beforeinstallprompt",V)}},[]);const ct=async()=>{if(!ve)return;ve.prompt();const{outcome:V}=await ve.userChoice;V==="accepted"&&ge(null)};L.useEffect(()=>{const V=localStorage.getItem("irangram_accounts");V&&m(JSON.parse(V))},[]),L.useEffect(()=>{const V=oP(async Y=>{var he;if(Y){e(Y);const H=await cP(Y.uid);h({name:(H==null?void 0:H.name)||Y.displayName||"کاربر",bio:(H==null?void 0:H.bio)||"",username:(H==null?void 0:H.username)||((he=Y.email)==null?void 0:he.split("@")[0])||"",phone:(H==null?void 0:H.phone)||"",role:(H==null?void 0:H.role)||"user",isBanned:(H==null?void 0:H.isBanned)||!1});const ce=Y.uid,Re=localStorage.getItem(`irangram_contacts_${ce}`);i(Re?JSON.parse(Re):Zl);const qe=localStorage.getItem(`irangram_sessions_${ce}`);let Le=JSON.parse(qe||JSON.stringify(Ro));Le.global_chat||(Le.global_chat=Ro.global_chat),l(Le);const it=localStorage.getItem(`irangram_wallpaper_${ce}`);R(it||"default"),m(et=>{var ds;const $n={uid:Y.uid,name:(H==null?void 0:H.name)||Y.displayName||"کاربر",avatar:(H==null?void 0:H.avatar)||`https://ui-avatars.com/api/?name=${Y.email}`,email:Y.email||"",username:(H==null?void 0:H.username)||((ds=Y.email)==null?void 0:ds.split("@")[0])||"",role:(H==null?void 0:H.role)||"user"},Wn=et.filter(Yi=>Yi.uid!==Y.uid),Hn=[$n,...Wn];return localStorage.setItem("irangram_accounts",JSON.stringify(Hn)),Hn})}else e(null),i(Zl),l(Ro);r(!1)});return()=>V()},[]),L.useEffect(()=>{if(!t)return;const V=dP(t.uid,ce=>{h(Re=>({...Re,...ce}))});Cl(t.uid,"online");const Y=setInterval(()=>{Cl(t.uid,"online")},6e4),he=()=>Cl(t.uid,"offline");window.addEventListener("beforeunload",he);const H=pP(ce=>{i(Re=>{const qe=Re.map(Le=>{const it=ce.find(et=>et.uid===Le.id);return it?{...Le,status:it.status,lastSeen:new Date(it.lastSeen).toISOString(),avatar:it.avatar||Le.avatar}:Le});return JSON.stringify(qe)!==JSON.stringify(Re)?qe:Re})});return()=>{V(),H(),clearInterval(Y),window.removeEventListener("beforeunload",he),Cl(t.uid,"offline")}},[t]),L.useEffect(()=>{t&&(localStorage.setItem(`irangram_sessions_${t.uid}`,JSON.stringify(o)),localStorage.setItem(`irangram_contacts_${t.uid}`,JSON.stringify(s)),localStorage.setItem(`irangram_wallpaper_${t.uid}`,b))},[o,s,b,t]),L.useEffect(()=>{localStorage.setItem("irangram_theme",_)},[_]),L.useEffect(()=>{const V=()=>{q(window.innerWidth<768),window.innerWidth<1024&&E(!1)};return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]),L.useEffect(()=>{_===ws.DARK?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[_]),L.useEffect(()=>{if(!t||u.isBanned)return;const V=bP(he=>{he.currentVersion>Jt.VERSION&&W(!0)}),Y=TP(t.uid,he=>{if(he.length>0){const H=he[0];_e({title:H.title,message:H.message}),IP(t.uid,H.id)}});return RP(),()=>{V(),Y()}},[t,u.isBanned]),L.useEffect(()=>{if(!t||u.isBanned)return;const V=Y=>{const he=Y.map(H=>({...H,senderId:H.senderId===t.uid?"me":H.senderId,reactions:H.reactions||{}}));l(H=>{var Le,it,et,$n,Wn;const ce=(it=(Le=H.global_chat)==null?void 0:Le.messages.slice(-1)[0])==null?void 0:it.id,Re=(et=he.slice(-1)[0])==null?void 0:et.id;let qe=(($n=H.global_chat)==null?void 0:$n.unreadCount)||0;if(ce!==Re&&he.length>0&&he[he.length-1].senderId!=="me"){N!=="global_chat"&&(qe+=1);try{$e.current.currentTime=0,$e.current.play().catch(()=>{})}catch{}}return{...H,global_chat:{contactId:"global_chat",messages:he,unreadCount:N==="global_chat"?0:qe,draft:((Wn=H.global_chat)==null?void 0:Wn.draft)||""}}})};return ue.current=kP(V),()=>{ue.current&&ue.current()}},[t,N,u.isBanned]),L.useEffect(()=>{let V;return B?V=setInterval(()=>{xe(Y=>Y+1)},1e3):xe(0),()=>clearInterval(V)},[B]);const as=()=>k(V=>V===ws.LIGHT?ws.DARK:ws.LIGHT),Nt=V=>{w(V),E(!1),x(null),l(Y=>({...Y,[V]:{...Y[V],unreadCount:0}}))},qt=V=>{if(s.find(Y=>Y.id===V.id)){Nt(V.id);return}i(Y=>[...Y,V]),l(Y=>({...Y,[V.id]:{contactId:V.id,messages:[],unreadCount:0,draft:""}})),Nt(V.id)},_r=L.useCallback(async(V,Y)=>{!N||!t||(N==="global_chat"?await SP(V,Y,t.uid):l(he=>{const H=he[N];if(!H)return he;const ce=H.messages.map(Re=>{if(Re.id!==V)return Re;const qe={...Re.reactions},Le=qe[Y]||[];return Le.includes("me")?(qe[Y]=Le.filter(it=>it!=="me"),qe[Y].length===0&&delete qe[Y]):qe[Y]=[...Le,"me"],{...Re,reactions:qe}});return{...he,[N]:{...H,messages:ce}}}))},[N,t]),ls=L.useCallback(async V=>{N&&(N==="global_chat"?await kE(V):l(Y=>({...Y,[N]:{...Y[N],messages:Y[N].messages.filter(he=>he.id!==V)}})))},[N]),Fn=L.useCallback(async(V,Y)=>{if(!N||!t)return;if(N==="global_chat"){const ce=u.name?`https://ui-avatars.com/api/?name=${u.name}&background=random&color=fff&size=64`:"";let Re=V.imageUrl,qe=V.fileUrl;if(V.file)try{const Le=V.type==="audio"?"audios":V.type==="image"?"images":"files",it=`uploads/${t.uid}/${Le}/${Date.now()}_${V.fileName||"file"}`,et=await mP(V.file,it);V.type==="image"?Re=et:qe=et}catch(Le){console.error("Upload failed",Le),alert("آپلود فایل با خطا مواجه شد.");return}await AP({text:V.text,type:V.type,imageUrl:Re,fileUrl:qe,fileName:V.fileName,fileSize:V.fileSize,audioDuration:V.audioDuration,isSticker:V.isSticker,replyToId:Y,senderId:t.uid},{name:u.name,avatar:ce,role:u.role});return}let he=V.imageUrl;V.file&&(he=URL.createObjectURL(V.file));const H={id:Date.now().toString(),text:V.text||(V.isSticker?"Sticker":V.type==="image"?"عکس":V.type==="audio"?"پیام صوتی":"فایل"),senderId:"me",timestamp:Date.now(),status:"read",type:V.type,imageUrl:V.type==="image"?he:void 0,fileUrl:V.type!=="image"?he:void 0,fileName:V.fileName,fileSize:V.fileSize,audioDuration:V.audioDuration,isSticker:V.isSticker,replyToId:Y,reactions:{}};l(ce=>({...ce,[N]:{...ce[N],messages:[...ce[N].messages,H]}}))},[N,t,u]),us=async V=>{const Y={...V,role:u.role};if(h(Y),t){await hP(t.uid,Y),m(H=>H.map(ce=>ce.uid===t.uid?{...ce,name:Y.name,username:Y.username}:ce));const he=p.map(H=>H.uid===t.uid?{...H,name:Y.name,username:Y.username}:H);localStorage.setItem("irangram_accounts",JSON.stringify(he))}},cs=async()=>{window.confirm("آیا برای خروج مطمئن هستید؟")&&(A(""),await Sd(t==null?void 0:t.uid),e(null))},Gs=async()=>{A(""),await Sd(t==null?void 0:t.uid),e(null)},Qs=async V=>{const Y=p.find(he=>he.uid===V);Y&&A(Y.email),await Sd(t==null?void 0:t.uid),e(null)},wr=V=>{const Y={id:V.uid,name:V.name,avatar:V.avatar,bio:V.bio,username:"@"+V.username,phone:V.phone,status:"offline",type:"user"};qt(Y)},zn=V=>{V.id==="me"||V.id===(t==null?void 0:t.uid)?S(!0):x({id:V.id,name:V.name||"کاربر",avatar:V.avatar||"",username:"",phone:"",bio:"کاربر ایران‌گرام",type:"user",status:"offline"})};return n?c.jsx("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-white dark:bg-black text-telegram-primary",children:c.jsx(HI,{className:"animate-spin w-10 h-10"})}):t?u.isBanned?c.jsx($P,{currentUser:{uid:t.uid,name:u.name},onLogout:cs}):c.jsxs("div",{className:"flex flex-col h-[100dvh] w-full overflow-hidden bg-white dark:bg-black font-sans relative",children:[K&&c.jsx("div",{className:"fixed inset-0 z-[120] bg-black/60 flex items-center justify-center p-6 animate-fade-in backdrop-blur-sm",children:c.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm w-full border-t-4 border-blue-500",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400",children:[c.jsx(Kf,{size:28}),c.jsx("h3",{className:"text-xl font-bold",children:K.title})]}),c.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-6 leading-relaxed whitespace-pre-wrap",children:K.message}),c.jsx("button",{onClick:()=>_e(null),className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl transition-colors",children:"متوجه شدم"})]})}),Ce&&c.jsx("div",{className:"fixed inset-0 z-[100] bg-telegram-primary/95 flex flex-col items-center justify-center p-6 text-white text-center animate-fade-in",children:c.jsxs("div",{className:"bg-white text-gray-900 rounded-3xl p-8 max-w-sm w-full shadow-2xl",children:[c.jsx("div",{className:"w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-telegram-primary",children:c.jsx(ic,{size:40})}),c.jsx("h2",{className:"text-2xl font-bold mb-2",children:"نسخه جدید موجود است!"}),c.jsx("p",{className:"text-gray-500 mb-6 text-sm",children:"برای عملکرد صحیح برنامه و دسترسی به قابلیت‌های جدید، لطفاً همین حالا بروزرسانی کنید."}),c.jsx("button",{onClick:()=>window.location.reload(),className:"w-full bg-telegram-primary hover:bg-telegram-primaryDark text-white font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-105",children:"دریافت نسخه جدید"})]})}),B&&c.jsxs("div",{className:"fixed inset-0 z-[90] bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-between py-12 text-white animate-fade-in",children:[c.jsxs("div",{className:"flex flex-col items-center mt-10",children:[c.jsx("div",{className:"w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-4 shadow-2xl",children:c.jsx("img",{src:((pn=s.find(V=>V.id===N))==null?void 0:pn.avatar)||"https://via.placeholder.com/150",className:"w-full h-full object-cover"})}),c.jsx("h2",{className:"text-3xl font-bold mb-2",children:((Bn=s.find(V=>V.id===N))==null?void 0:Bn.name)||"تماس ناشناس"}),c.jsx("p",{className:"text-white/60 text-lg animate-pulse",children:re>0?`${Math.floor(re/60)}:${(re%60).toString().padStart(2,"0")}`:"در حال تماس..."})]}),c.jsxs("div",{className:"flex items-center gap-8 mb-10",children:[c.jsx("button",{onClick:()=>Ae(!pe),className:`p-4 rounded-full transition-all ${pe?"bg-white text-gray-900":"bg-white/10 hover:bg-white/20"}`,children:pe?c.jsx(qI,{size:32}):c.jsx($_,{size:32})}),c.jsx("button",{onClick:()=>{Z(!1)},className:"p-6 bg-red-500 rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all",children:c.jsx($I,{size:40})}),c.jsx("button",{className:"p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all",children:c.jsx(Ia,{size:32,className:"rotate-180"})})]})]}),C&&c.jsx(zP,{onClose:()=>T(!1),currentUserEmail:t.email,currentUserRole:u.role||"user",onStartChat:wr}),c.jsx(FP,{isOpen:I,onClose:()=>S(!1),userProfile:u,onSave:us,wallpaper:b,onSaveWallpaper:R}),c.jsxs("div",{className:"flex-1 flex overflow-hidden relative",children:[c.jsxs("div",{className:`
            ${O&&N?"hidden":"flex"}
            ${O?"w-full":"w-80 lg:w-96"} 
            flex-col h-full z-20 transition-all duration-300 shadow-xl bg-white dark:bg-telegram-bgDark
          `,children:[c.jsx("div",{className:"flex-1 overflow-hidden",children:c.jsx(NP,{contacts:s,sessions:o,activeContactId:N,onSelectContact:Nt,toggleTheme:as,theme:_,userProfile:u,onOpenSettings:()=>S(!0),onOpenAdminPanel:()=>T(!0),onAddContact:qt,showInstallButton:!!ve,onInstall:ct,storedAccounts:p,onAddAccount:Gs,onSwitchAccount:Qs})}),c.jsxs("div",{className:"p-2 border-t border-telegram-border dark:border-telegram-borderDark flex justify-between items-center bg-gray-50 dark:bg-telegram-bgDark",children:[c.jsxs("span",{className:"text-xs text-gray-400 px-2",children:["v",Jt.VERSION]}),c.jsx("button",{onClick:cs,className:"p-2 text-red-500 hover:bg-red-50 dark:hover:bg-white/5 rounded-lg",title:"خروج کامل",children:c.jsx(B_,{size:18})})]})]}),c.jsxs("div",{className:`
            ${O&&!N?"hidden":"flex"}
            flex-1 h-full relative flex-col min-w-0
          `,children:[c.jsx("div",{className:"flex-1 h-full relative flex flex-col min-w-0",children:N?c.jsx(VP,{contact:s.find(V=>V.id===N),messages:o[N].messages,myId:"me",myRole:u.role||"user",onSendMessage:Fn,onEditMessage:()=>{},onDeleteMessage:ls,onReaction:_r,onBack:()=>w(null),isMobile:O,onProfileClick:()=>E(!0),onAvatarClick:zn,wallpaper:b,onCall:()=>Z(!0)}):c.jsx("div",{className:"h-full w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark text-gray-400 dark:text-gray-600 pattern-bg",children:c.jsxs("div",{className:"text-center p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl",children:[c.jsx("span",{className:"text-4xl block mb-4",children:"👋"}),c.jsx("h3",{className:"font-bold mb-2",children:"به ایران‌گرام خوش آمدید"}),c.jsx("p",{className:"text-sm",children:"برای شروع گفتگو کلیک کنید"})]})})}),(z||v)&&c.jsx("div",{className:`
                    absolute inset-y-0 right-0 z-50 bg-white dark:bg-telegram-secondaryDark shadow-2xl transition-transform duration-300
                    ${O?"w-full":"w-80 border-l border-telegram-border dark:border-telegram-borderDark"}
                `,children:c.jsx(qP,{contact:v||s.find(V=>V.id===N),onClose:()=>{E(!1),x(null)},onStartChat:v?V=>{qt(V),x(null)}:void 0})})]})]})]}):c.jsx(BP,{onSuccess:e,storedAccounts:p,initialEmail:g})},SE=document.getElementById("root");if(!SE)throw new Error("Could not find root element to mount to");const GP=bd.createRoot(SE);GP.render(c.jsx(f1.StrictMode,{children:c.jsx(KP,{})}));
