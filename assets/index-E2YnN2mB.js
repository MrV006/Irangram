(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Yx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kv={exports:{}},Nu={},Av={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),Xx=Symbol.for("react.portal"),Jx=Symbol.for("react.fragment"),Zx=Symbol.for("react.strict_mode"),e1=Symbol.for("react.profiler"),t1=Symbol.for("react.provider"),n1=Symbol.for("react.context"),r1=Symbol.for("react.forward_ref"),s1=Symbol.for("react.suspense"),i1=Symbol.for("react.memo"),o1=Symbol.for("react.lazy"),Mm=Symbol.iterator;function a1(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var Sv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bv=Object.assign,Rv={};function Ni(t,e,n){this.props=t,this.context=e,this.refs=Rv,this.updater=n||Sv}Ni.prototype.isReactComponent={};Ni.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ni.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cv(){}Cv.prototype=Ni.prototype;function Bh(t,e,n){this.props=t,this.context=e,this.refs=Rv,this.updater=n||Sv}var $h=Bh.prototype=new Cv;$h.constructor=Bh;bv($h,Ni.prototype);$h.isPureReactComponent=!0;var Um=Array.isArray,Nv=Object.prototype.hasOwnProperty,Wh={current:null},Pv={key:!0,ref:!0,__self:!0,__source:!0};function Dv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Nv.call(e,r)&&!Pv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ca,type:t,key:i,ref:o,props:s,_owner:Wh.current}}function l1(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function u1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fm=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u1(""+t.key):e.toString(36)}function wl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case Xx:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Oc(o,0):r,Um(s)?(n="",t!=null&&(n=t.replace(Fm,"$&/")+"/"),wl(s,e,n,"",function(d){return d})):s!=null&&(Hh(s)&&(s=l1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Fm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Um(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Oc(i,l);o+=wl(i,e,n,u,s)}else if(u=a1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Oc(i,l++),o+=wl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var r=[],s=0;return wl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function c1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},El={transition:null},d1={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:El,ReactCurrentOwner:Wh};function Ov(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Ni;le.Fragment=Jx;le.Profiler=e1;le.PureComponent=Bh;le.StrictMode=Zx;le.Suspense=s1;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1;le.act=Ov;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Wh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Nv.call(e,u)&&!Pv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ca,type:t.type,key:s,ref:i,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:n1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t1,_context:t},t.Consumer=t};le.createElement=Dv;le.createFactory=function(t){var e=Dv.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:r1,render:t}};le.isValidElement=Hh;le.lazy=function(t){return{$$typeof:o1,_payload:{_status:-1,_result:t},_init:c1}};le.memo=function(t,e){return{$$typeof:i1,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};le.unstable_act=Ov;le.useCallback=function(t,e){return Ct.current.useCallback(t,e)};le.useContext=function(t){return Ct.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};le.useEffect=function(t,e){return Ct.current.useEffect(t,e)};le.useId=function(){return Ct.current.useId()};le.useImperativeHandle=function(t,e,n){return Ct.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Ct.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Ct.current.useReducer(t,e,n)};le.useRef=function(t){return Ct.current.useRef(t)};le.useState=function(t){return Ct.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Ct.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Ct.current.useTransition()};le.version="18.3.1";Av.exports=le;var M=Av.exports;const h1=Yx(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1=M,p1=Symbol.for("react.element"),m1=Symbol.for("react.fragment"),g1=Object.prototype.hasOwnProperty,y1=f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v1={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)g1.call(e,r)&&!v1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:p1,type:t,key:i,ref:o,props:s,_owner:y1.current}}Nu.Fragment=m1;Nu.jsx=qv;Nu.jsxs=qv;kv.exports=Nu;var h=kv.exports,Ed={},jv={exports:{}},Yt={},Lv={exports:{}},Vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Z){var re=$.length;$.push(Z);e:for(;0<re;){var ye=re-1>>>1,ue=$[ye];if(0<s(ue,Z))$[ye]=Z,$[re]=ue,re=ye;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Z=$[0],re=$.pop();if(re!==Z){$[0]=re;e:for(var ye=0,ue=$.length,K=ue>>>1;ye<K;){var me=2*(ye+1)-1,ke=$[me],Le=me+1,Tt=$[Le];if(0>s(ke,re))Le<ue&&0>s(Tt,ke)?($[ye]=Tt,$[Le]=re,ye=Le):($[ye]=ke,$[me]=re,ye=me);else if(Le<ue&&0>s(Tt,re))$[ye]=Tt,$[Le]=re,ye=Le;else break e}}return Z}function s($,Z){var re=$.sortIndex-Z.sortIndex;return re!==0?re:$.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,m=null,g=3,A=!1,R=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var Z=n(d);Z!==null;){if(Z.callback===null)r(d);else if(Z.startTime<=$)r(d),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(d)}}function O($){if(C=!1,k($),!R)if(n(u)!==null)R=!0,pe(U);else{var Z=n(d);Z!==null&&he(O,Z.startTime-$)}}function U($,Z){R=!1,C&&(C=!1,T(v),v=-1),A=!0;var re=g;try{for(k(Z),m=n(u);m!==null&&(!(m.expirationTime>Z)||$&&!S());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,g=m.priorityLevel;var ue=ye(m.expirationTime<=Z);Z=t.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(u)&&r(u),k(Z)}else r(u);m=n(u)}if(m!==null)var K=!0;else{var me=n(d);me!==null&&he(O,me.startTime-Z),K=!1}return K}finally{m=null,g=re,A=!1}}var B=!1,E=null,v=-1,w=5,I=-1;function S(){return!(t.unstable_now()-I<w)}function N(){if(E!==null){var $=t.unstable_now();I=$;var Z=!0;try{Z=E(!0,$)}finally{Z?x():(B=!1,E=null)}}else B=!1}var x;if(typeof _=="function")x=function(){_(N)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,H=Se.port2;Se.port1.onmessage=N,x=function(){H.postMessage(null)}}else x=function(){b(N,0)};function pe($){E=$,B||(B=!0,x())}function he($,Z){v=b(function(){$(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||A||(R=!0,pe(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var re=g;g=Z;try{return $()}finally{g=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var re=g;g=$;try{return Z()}finally{g=re}},t.unstable_scheduleCallback=function($,Z,re){var ye=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ye+re:ye):re=ye,$){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=re+ue,$={id:p++,callback:Z,priorityLevel:$,startTime:re,expirationTime:ue,sortIndex:-1},re>ye?($.sortIndex=re,e(d,$),n(u)===null&&$===n(d)&&(C?(T(v),v=-1):C=!0,he(O,re-ye))):($.sortIndex=ue,e(u,$),R||A||(R=!0,pe(U))),$},t.unstable_shouldYield=S,t.unstable_wrapCallback=function($){var Z=g;return function(){var re=g;g=Z;try{return $.apply(this,arguments)}finally{g=re}}}})(Vv);Lv.exports=Vv;var _1=Lv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1=M,Gt=_1;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mv=new Set,jo={};function Ps(t,e){gi(t,e),gi(t+"Capture",e)}function gi(t,e){for(jo[t]=e,t=0;t<e.length;t++)Mv.add(e[t])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=Object.prototype.hasOwnProperty,E1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zm={},Bm={};function x1(t){return xd.call(Bm,t)?!0:xd.call(zm,t)?!1:E1.test(t)?Bm[t]=!0:(zm[t]=!0,!1)}function T1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function I1(t,e,n,r){if(e===null||typeof e>"u"||T1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kh,Gh);lt[e]=new Nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kh,Gh);lt[e]=new Nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kh,Gh);lt[e]=new Nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qh(t,e,n,r){var s=lt.hasOwnProperty(e)?lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(I1(e,n,s,r)&&(n=null),r||s===null?x1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=w1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),Uv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),zv=Symbol.for("react.offscreen"),$m=Symbol.iterator;function Zi(t){return t===null||typeof t!="object"?null:(t=$m&&t[$m]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,qc;function uo(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var jc=!1;function Lc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function k1(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function Ad(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Gs:return"Portal";case Td:return"Profiler";case Yh:return"StrictMode";case Id:return"Suspense";case kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fv:return(t.displayName||"Context")+".Consumer";case Uv:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jh:return e=t.displayName||null,e!==null?e:Ad(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return Ad(t(e))}catch{}}return null}function A1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ad(e);case 8:return e===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S1(t){var e=Bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=S1(t))}function $v(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sd(t,e){var n=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wv(t,e){e=e.checked,e!=null&&Qh(t,"checked",e,!1)}function bd(t,e){Wv(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function oi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(co(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function Hv(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,Gv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b1=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){b1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function Qv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function Yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Qv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var R1=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pd(t,e){if(e){if(R1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Od=null;function Zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qd=null,ai=null,li=null;function Qm(t){if(t=fa(t)){if(typeof qd!="function")throw Error(z(280));var e=t.stateNode;e&&(e=ju(e),qd(t.stateNode,t.type,e))}}function Xv(t){ai?li?li.push(t):li=[t]:ai=t}function Jv(){if(ai){var t=ai,e=li;if(li=ai=null,Qm(t),e)for(t=0;t<e.length;t++)Qm(e[t])}}function Zv(t,e){return t(e)}function e_(){}var Vc=!1;function t_(t,e,n){if(Vc)return t(e,n);Vc=!0;try{return Zv(t,e,n)}finally{Vc=!1,(ai!==null||li!==null)&&(e_(),Jv())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var r=ju(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var jd=!1;if(Gn)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){jd=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{jd=!1}function C1(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var xo=!1,Bl=null,$l=!1,Ld=null,N1={onError:function(t){xo=!0,Bl=t}};function P1(t,e,n,r,s,i,o,l,u){xo=!1,Bl=null,C1.apply(N1,arguments)}function D1(t,e,n,r,s,i,o,l,u){if(P1.apply(this,arguments),xo){if(xo){var d=Bl;xo=!1,Bl=null}else throw Error(z(198));$l||($l=!0,Ld=d)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ym(t){if(Ds(t)!==t)throw Error(z(188))}function O1(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Ym(s),t;if(i===r)return Ym(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function r_(t){return t=O1(t),t!==null?s_(t):null}function s_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s_(t);if(e!==null)return e;t=t.sibling}return null}var i_=Gt.unstable_scheduleCallback,Xm=Gt.unstable_cancelCallback,q1=Gt.unstable_shouldYield,j1=Gt.unstable_requestPaint,He=Gt.unstable_now,L1=Gt.unstable_getCurrentPriorityLevel,ef=Gt.unstable_ImmediatePriority,o_=Gt.unstable_UserBlockingPriority,Wl=Gt.unstable_NormalPriority,V1=Gt.unstable_LowPriority,a_=Gt.unstable_IdlePriority,Pu=null,In=null;function M1(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Pu,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:z1,U1=Math.log,F1=Math.LN2;function z1(t){return t>>>=0,t===0?32:31-(U1(t)/F1|0)|0}var Za=64,el=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ho(l):(i&=o,i!==0&&(r=ho(i)))}else o=n&~s,o!==0?r=ho(o):i!==0&&(r=ho(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),s=1<<n,r|=t[n],e&=~s;return r}function B1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-pn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=B1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l_(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function W1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-pn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var we=0;function u_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c_,nf,d_,h_,f_,Md=!1,tl=[],Ar=null,Sr=null,br=null,Mo=new Map,Uo=new Map,yr=[],H1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jm(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function to(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=fa(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function K1(t,e,n,r,s){switch(e){case"focusin":return Ar=to(Ar,t,e,n,r,s),!0;case"dragenter":return Sr=to(Sr,t,e,n,r,s),!0;case"mouseover":return br=to(br,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Mo.set(i,to(Mo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Uo.set(i,to(Uo.get(i)||null,t,e,n,r,s)),!0}return!1}function p_(t){var e=cs(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=n_(n),e!==null){t.blockedOn=e,f_(t.priority,function(){d_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ud(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Od=r,n.target.dispatchEvent(r),Od=null}else return e=fa(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function Zm(t,e,n){xl(t)&&n.delete(e)}function G1(){Md=!1,Ar!==null&&xl(Ar)&&(Ar=null),Sr!==null&&xl(Sr)&&(Sr=null),br!==null&&xl(br)&&(br=null),Mo.forEach(Zm),Uo.forEach(Zm)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,G1)))}function Fo(t){function e(s){return no(s,t)}if(0<tl.length){no(tl[0],t);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&no(Ar,t),Sr!==null&&no(Sr,t),br!==null&&no(br,t),Mo.forEach(e),Uo.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)p_(n),n.blockedOn===null&&yr.shift()}var ui=nr.ReactCurrentBatchConfig,Kl=!0;function Q1(t,e,n,r){var s=we,i=ui.transition;ui.transition=null;try{we=1,rf(t,e,n,r)}finally{we=s,ui.transition=i}}function Y1(t,e,n,r){var s=we,i=ui.transition;ui.transition=null;try{we=4,rf(t,e,n,r)}finally{we=s,ui.transition=i}}function rf(t,e,n,r){if(Kl){var s=Ud(t,e,n,r);if(s===null)Qc(t,e,r,Gl,n),Jm(t,r);else if(K1(s,t,e,n,r))r.stopPropagation();else if(Jm(t,r),e&4&&-1<H1.indexOf(t)){for(;s!==null;){var i=fa(s);if(i!==null&&c_(i),i=Ud(t,e,n,r),i===null&&Qc(t,e,r,Gl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Qc(t,e,r,null,n)}}var Gl=null;function Ud(t,e,n,r){if(Gl=null,t=Zh(r),t=cs(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function m_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L1()){case ef:return 1;case o_:return 4;case Wl:case V1:return 16;case a_:return 536870912;default:return 16}default:return 16}}var Tr=null,sf=null,Tl=null;function g_(){if(Tl)return Tl;var t,e=sf,n=e.length,r,s="value"in Tr?Tr.value:Tr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Tl=s.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function eg(){return!1}function Xt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?nl:eg,this.isPropagationStopped=eg,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=Xt(Pi),ha=qe({},Pi,{view:0,detail:0}),X1=Xt(ha),Uc,Fc,ro,Du=qe({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Uc=t.screenX-ro.screenX,Fc=t.screenY-ro.screenY):Fc=Uc=0,ro=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),tg=Xt(Du),J1=qe({},Du,{dataTransfer:0}),Z1=Xt(J1),eT=qe({},ha,{relatedTarget:0}),zc=Xt(eT),tT=qe({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),nT=Xt(tT),rT=qe({},Pi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sT=Xt(rT),iT=qe({},Pi,{data:0}),ng=Xt(iT),oT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lT[t])?!!e[t]:!1}function af(){return uT}var cT=qe({},ha,{key:function(t){if(t.key){var e=oT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dT=Xt(cT),hT=qe({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rg=Xt(hT),fT=qe({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),pT=Xt(fT),mT=qe({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gT=Xt(mT),yT=qe({},Du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vT=Xt(yT),_T=[9,13,27,32],lf=Gn&&"CompositionEvent"in window,To=null;Gn&&"documentMode"in document&&(To=document.documentMode);var wT=Gn&&"TextEvent"in window&&!To,y_=Gn&&(!lf||To&&8<To&&11>=To),sg=" ",ig=!1;function v_(t,e){switch(t){case"keyup":return _T.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function __(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function ET(t,e){switch(t){case"compositionend":return __(e);case"keypress":return e.which!==32?null:(ig=!0,sg);case"textInput":return t=e.data,t===sg&&ig?null:t;default:return null}}function xT(t,e){if(Ys)return t==="compositionend"||!lf&&v_(t,e)?(t=g_(),Tl=sf=Tr=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y_&&e.locale!=="ko"?null:e.data;default:return null}}var TT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TT[t.type]:e==="textarea"}function w_(t,e,n,r){Xv(r),e=Ql(e,"onChange"),0<e.length&&(n=new of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Io=null,zo=null;function IT(t){N_(t,0)}function Ou(t){var e=Zs(t);if($v(e))return t}function kT(t,e){if(t==="change")return e}var E_=!1;if(Gn){var Bc;if(Gn){var $c="oninput"in document;if(!$c){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),$c=typeof ag.oninput=="function"}Bc=$c}else Bc=!1;E_=Bc&&(!document.documentMode||9<document.documentMode)}function lg(){Io&&(Io.detachEvent("onpropertychange",x_),zo=Io=null)}function x_(t){if(t.propertyName==="value"&&Ou(zo)){var e=[];w_(e,zo,t,Zh(t)),t_(IT,e)}}function AT(t,e,n){t==="focusin"?(lg(),Io=e,zo=n,Io.attachEvent("onpropertychange",x_)):t==="focusout"&&lg()}function ST(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ou(zo)}function bT(t,e){if(t==="click")return Ou(e)}function RT(t,e){if(t==="input"||t==="change")return Ou(e)}function CT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:CT;function Bo(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!xd.call(e,s)||!yn(t[s],e[s]))return!1}return!0}function ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cg(t,e){var n=ug(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ug(n)}}function T_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I_(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NT(t){var e=I_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T_(n.ownerDocument.documentElement,n)){if(r!==null&&uf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=cg(n,i);var o=cg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PT=Gn&&"documentMode"in document&&11>=document.documentMode,Xs=null,Fd=null,ko=null,zd=!1;function dg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||Xs==null||Xs!==zl(r)||(r=Xs,"selectionStart"in r&&uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&Bo(ko,r)||(ko=r,r=Ql(Fd,"onSelect"),0<r.length&&(e=new of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xs)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Js={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Wc={},k_={};Gn&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function qu(t){if(Wc[t])return Wc[t];if(!Js[t])return t;var e=Js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return Wc[t]=e[n];return t}var A_=qu("animationend"),S_=qu("animationiteration"),b_=qu("animationstart"),R_=qu("transitionend"),C_=new Map,hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){C_.set(t,e),Ps(e,[t])}for(var Hc=0;Hc<hg.length;Hc++){var Kc=hg[Hc],DT=Kc.toLowerCase(),OT=Kc[0].toUpperCase()+Kc.slice(1);Wr(DT,"on"+OT)}Wr(A_,"onAnimationEnd");Wr(S_,"onAnimationIteration");Wr(b_,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(R_,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qT=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function fg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,D1(r,e,void 0,t),t.currentTarget=null}function N_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;fg(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;fg(s,l,d),i=u}}}if($l)throw t=Ld,$l=!1,Ld=null,t}function Re(t,e){var n=e[Kd];n===void 0&&(n=e[Kd]=new Set);var r=t+"__bubble";n.has(r)||(P_(e,t,2,!1),n.add(r))}function Gc(t,e,n){var r=0;e&&(r|=4),P_(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[sl]){t[sl]=!0,Mv.forEach(function(n){n!=="selectionchange"&&(qT.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Gc("selectionchange",!1,e))}}function P_(t,e,n,r){switch(m_(e)){case 1:var s=Q1;break;case 4:s=Y1;break;default:s=rf}n=s.bind(null,e,n,t),s=void 0,!jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Qc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=cs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}t_(function(){var d=i,p=Zh(n),m=[];e:{var g=C_.get(t);if(g!==void 0){var A=of,R=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":A=dT;break;case"focusin":R="focus",A=zc;break;case"focusout":R="blur",A=zc;break;case"beforeblur":case"afterblur":A=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=pT;break;case A_:case S_:case b_:A=nT;break;case R_:A=gT;break;case"scroll":A=X1;break;case"wheel":A=vT;break;case"copy":case"cut":case"paste":A=sT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=rg}var C=(e&4)!==0,b=!C&&t==="scroll",T=C?g!==null?g+"Capture":null:g;C=[];for(var _=d,k;_!==null;){k=_;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,T!==null&&(O=Vo(_,T),O!=null&&C.push(Wo(_,O,k)))),b)break;_=_.return}0<C.length&&(g=new A(g,R,null,n,p),m.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Od&&(R=n.relatedTarget||n.fromElement)&&(cs(R)||R[Qn]))break e;if((A||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,A?(R=n.relatedTarget||n.toElement,A=d,R=R?cs(R):null,R!==null&&(b=Ds(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(A=null,R=d),A!==R)){if(C=tg,O="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(C=rg,O="onPointerLeave",T="onPointerEnter",_="pointer"),b=A==null?g:Zs(A),k=R==null?g:Zs(R),g=new C(O,_+"leave",A,n,p),g.target=b,g.relatedTarget=k,O=null,cs(p)===d&&(C=new C(T,_+"enter",R,n,p),C.target=k,C.relatedTarget=b,O=C),b=O,A&&R)t:{for(C=A,T=R,_=0,k=C;k;k=$s(k))_++;for(k=0,O=T;O;O=$s(O))k++;for(;0<_-k;)C=$s(C),_--;for(;0<k-_;)T=$s(T),k--;for(;_--;){if(C===T||T!==null&&C===T.alternate)break t;C=$s(C),T=$s(T)}C=null}else C=null;A!==null&&pg(m,g,A,C,!1),R!==null&&b!==null&&pg(m,b,R,C,!0)}}e:{if(g=d?Zs(d):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var U=kT;else if(og(g))if(E_)U=RT;else{U=ST;var B=AT}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=bT);if(U&&(U=U(t,d))){w_(m,U,n,p);break e}B&&B(t,g,d),t==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&Rd(g,"number",g.value)}switch(B=d?Zs(d):window,t){case"focusin":(og(B)||B.contentEditable==="true")&&(Xs=B,Fd=d,ko=null);break;case"focusout":ko=Fd=Xs=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,dg(m,n,p);break;case"selectionchange":if(PT)break;case"keydown":case"keyup":dg(m,n,p)}var E;if(lf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ys?v_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(y_&&n.locale!=="ko"&&(Ys||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ys&&(E=g_()):(Tr=p,sf="value"in Tr?Tr.value:Tr.textContent,Ys=!0)),B=Ql(d,v),0<B.length&&(v=new ng(v,t,null,n,p),m.push({event:v,listeners:B}),E?v.data=E:(E=__(n),E!==null&&(v.data=E)))),(E=wT?ET(t,n):xT(t,n))&&(d=Ql(d,"onBeforeInput"),0<d.length&&(p=new ng("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=E))}N_(m,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Vo(t,n),i!=null&&r.unshift(Wo(t,i,s)),i=Vo(t,e),i!=null&&r.push(Wo(t,i,s))),t=t.return}return r}function $s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=Vo(n,i),u!=null&&o.unshift(Wo(n,u,l))):s||(u=Vo(n,i),u!=null&&o.push(Wo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jT=/\r\n?/g,LT=/\u0000|\uFFFD/g;function mg(t){return(typeof t=="string"?t:""+t).replace(jT,`
`).replace(LT,"")}function il(t,e,n){if(e=mg(e),mg(t)!==e&&n)throw Error(z(425))}function Yl(){}var Bd=null,$d=null;function Wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,VT=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,MT=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(t){return gg.resolve(null).then(t).catch(UT)}:Hd;function UT(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Fo(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Di=Math.random().toString(36).slice(2),xn="__reactFiber$"+Di,Ho="__reactProps$"+Di,Qn="__reactContainer$"+Di,Kd="__reactEvents$"+Di,FT="__reactListeners$"+Di,zT="__reactHandles$"+Di;function cs(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qn]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yg(t);t!==null;){if(n=t[xn])return n;t=yg(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[xn]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function ju(t){return t[Ho]||null}var Gd=[],ei=-1;function Hr(t){return{current:t}}function Ne(t){0>ei||(t.current=Gd[ei],Gd[ei]=null,ei--)}function Ae(t,e){ei++,Gd[ei]=t.current,t.current=e}var Mr={},Et=Hr(Mr),Lt=Hr(!1),_s=Mr;function yi(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Vt(t){return t=t.childContextTypes,t!=null}function Xl(){Ne(Lt),Ne(Et)}function vg(t,e,n){if(Et.current!==Mr)throw Error(z(168));Ae(Et,e),Ae(Lt,n)}function D_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,A1(t)||"Unknown",s));return qe({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,_s=Et.current,Ae(Et,t),Ae(Lt,Lt.current),!0}function _g(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=D_(t,e,_s),r.__reactInternalMemoizedMergedChildContext=t,Ne(Lt),Ne(Et),Ae(Et,t)):Ne(Lt),Ae(Lt,n)}var Vn=null,Lu=!1,Xc=!1;function O_(t){Vn===null?Vn=[t]:Vn.push(t)}function BT(t){Lu=!0,O_(t)}function Kr(){if(!Xc&&Vn!==null){Xc=!0;var t=0,e=we;try{var n=Vn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,Lu=!1}catch(s){throw Vn!==null&&(Vn=Vn.slice(t+1)),i_(ef,Kr),s}finally{we=e,Xc=!1}}return null}var ti=[],ni=0,Zl=null,eu=0,Jt=[],Zt=0,ws=null,Un=1,Fn="";function os(t,e){ti[ni++]=eu,ti[ni++]=Zl,Zl=t,eu=e}function q_(t,e,n){Jt[Zt++]=Un,Jt[Zt++]=Fn,Jt[Zt++]=ws,ws=t;var r=Un;t=Fn;var s=32-pn(r)-1;r&=~(1<<s),n+=1;var i=32-pn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Un=1<<32-pn(e)+s|n<<s|r,Fn=i+t}else Un=1<<i|n<<s|r,Fn=t}function cf(t){t.return!==null&&(os(t,1),q_(t,1,0))}function df(t){for(;t===Zl;)Zl=ti[--ni],ti[ni]=null,eu=ti[--ni],ti[ni]=null;for(;t===ws;)ws=Jt[--Zt],Jt[Zt]=null,Fn=Jt[--Zt],Jt[Zt]=null,Un=Jt[--Zt],Jt[Zt]=null}var Kt=null,Bt=null,Pe=!1,hn=null;function j_(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Bt=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ws!==null?{id:Un,overflow:Fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Bt=null,!0):!1;default:return!1}}function Qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yd(t){if(Pe){var e=Bt;if(e){var n=e;if(!wg(t,e)){if(Qd(t))throw Error(z(418));e=Rr(n.nextSibling);var r=Kt;e&&wg(t,e)?j_(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Kt=t)}}else{if(Qd(t))throw Error(z(418));t.flags=t.flags&-4097|2,Pe=!1,Kt=t}}}function Eg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function ol(t){if(t!==Kt)return!1;if(!Pe)return Eg(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wd(t.type,t.memoizedProps)),e&&(e=Bt)){if(Qd(t))throw L_(),Error(z(418));for(;e;)j_(t,e),e=Rr(e.nextSibling)}if(Eg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=Kt?Rr(t.stateNode.nextSibling):null;return!0}function L_(){for(var t=Bt;t;)t=Rr(t.nextSibling)}function vi(){Bt=Kt=null,Pe=!1}function hf(t){hn===null?hn=[t]:hn.push(t)}var $T=nr.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xg(t){var e=t._init;return e(t._payload)}function V_(t){function e(T,_){if(t){var k=T.deletions;k===null?(T.deletions=[_],T.flags|=16):k.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function s(T,_){return T=Dr(T,_),T.index=0,T.sibling=null,T}function i(T,_,k){return T.index=k,t?(k=T.alternate,k!==null?(k=k.index,k<_?(T.flags|=2,_):k):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,k,O){return _===null||_.tag!==6?(_=sd(k,T.mode,O),_.return=T,_):(_=s(_,k),_.return=T,_)}function u(T,_,k,O){var U=k.type;return U===Qs?p(T,_,k.props.children,O,k.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===mr&&xg(U)===_.type)?(O=s(_,k.props),O.ref=so(T,_,k),O.return=T,O):(O=Nl(k.type,k.key,k.props,null,T.mode,O),O.ref=so(T,_,k),O.return=T,O)}function d(T,_,k,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=id(k,T.mode,O),_.return=T,_):(_=s(_,k.children||[]),_.return=T,_)}function p(T,_,k,O,U){return _===null||_.tag!==7?(_=gs(k,T.mode,O,U),_.return=T,_):(_=s(_,k),_.return=T,_)}function m(T,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return _=sd(""+_,T.mode,k),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ya:return k=Nl(_.type,_.key,_.props,null,T.mode,k),k.ref=so(T,null,_),k.return=T,k;case Gs:return _=id(_,T.mode,k),_.return=T,_;case mr:var O=_._init;return m(T,O(_._payload),k)}if(co(_)||Zi(_))return _=gs(_,T.mode,k,null),_.return=T,_;al(T,_)}return null}function g(T,_,k,O){var U=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return U!==null?null:l(T,_,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ya:return k.key===U?u(T,_,k,O):null;case Gs:return k.key===U?d(T,_,k,O):null;case mr:return U=k._init,g(T,_,U(k._payload),O)}if(co(k)||Zi(k))return U!==null?null:p(T,_,k,O,null);al(T,k)}return null}function A(T,_,k,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(k)||null,l(_,T,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ya:return T=T.get(O.key===null?k:O.key)||null,u(_,T,O,U);case Gs:return T=T.get(O.key===null?k:O.key)||null,d(_,T,O,U);case mr:var B=O._init;return A(T,_,k,B(O._payload),U)}if(co(O)||Zi(O))return T=T.get(k)||null,p(_,T,O,U,null);al(_,O)}return null}function R(T,_,k,O){for(var U=null,B=null,E=_,v=_=0,w=null;E!==null&&v<k.length;v++){E.index>v?(w=E,E=null):w=E.sibling;var I=g(T,E,k[v],O);if(I===null){E===null&&(E=w);break}t&&E&&I.alternate===null&&e(T,E),_=i(I,_,v),B===null?U=I:B.sibling=I,B=I,E=w}if(v===k.length)return n(T,E),Pe&&os(T,v),U;if(E===null){for(;v<k.length;v++)E=m(T,k[v],O),E!==null&&(_=i(E,_,v),B===null?U=E:B.sibling=E,B=E);return Pe&&os(T,v),U}for(E=r(T,E);v<k.length;v++)w=A(E,T,v,k[v],O),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?v:w.key),_=i(w,_,v),B===null?U=w:B.sibling=w,B=w);return t&&E.forEach(function(S){return e(T,S)}),Pe&&os(T,v),U}function C(T,_,k,O){var U=Zi(k);if(typeof U!="function")throw Error(z(150));if(k=U.call(k),k==null)throw Error(z(151));for(var B=U=null,E=_,v=_=0,w=null,I=k.next();E!==null&&!I.done;v++,I=k.next()){E.index>v?(w=E,E=null):w=E.sibling;var S=g(T,E,I.value,O);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(T,E),_=i(S,_,v),B===null?U=S:B.sibling=S,B=S,E=w}if(I.done)return n(T,E),Pe&&os(T,v),U;if(E===null){for(;!I.done;v++,I=k.next())I=m(T,I.value,O),I!==null&&(_=i(I,_,v),B===null?U=I:B.sibling=I,B=I);return Pe&&os(T,v),U}for(E=r(T,E);!I.done;v++,I=k.next())I=A(E,T,v,I.value,O),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?v:I.key),_=i(I,_,v),B===null?U=I:B.sibling=I,B=I);return t&&E.forEach(function(N){return e(T,N)}),Pe&&os(T,v),U}function b(T,_,k,O){if(typeof k=="object"&&k!==null&&k.type===Qs&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Ya:e:{for(var U=k.key,B=_;B!==null;){if(B.key===U){if(U=k.type,U===Qs){if(B.tag===7){n(T,B.sibling),_=s(B,k.props.children),_.return=T,T=_;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===mr&&xg(U)===B.type){n(T,B.sibling),_=s(B,k.props),_.ref=so(T,B,k),_.return=T,T=_;break e}n(T,B);break}else e(T,B);B=B.sibling}k.type===Qs?(_=gs(k.props.children,T.mode,O,k.key),_.return=T,T=_):(O=Nl(k.type,k.key,k.props,null,T.mode,O),O.ref=so(T,_,k),O.return=T,T=O)}return o(T);case Gs:e:{for(B=k.key;_!==null;){if(_.key===B)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(T,_.sibling),_=s(_,k.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=id(k,T.mode,O),_.return=T,T=_}return o(T);case mr:return B=k._init,b(T,_,B(k._payload),O)}if(co(k))return R(T,_,k,O);if(Zi(k))return C(T,_,k,O);al(T,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,_!==null&&_.tag===6?(n(T,_.sibling),_=s(_,k),_.return=T,T=_):(n(T,_),_=sd(k,T.mode,O),_.return=T,T=_),o(T)):n(T,_)}return b}var _i=V_(!0),M_=V_(!1),tu=Hr(null),nu=null,ri=null,ff=null;function pf(){ff=ri=nu=null}function mf(t){var e=tu.current;Ne(tu),t._currentValue=e}function Xd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ci(t,e){nu=t,ff=ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},ri===null){if(nu===null)throw Error(z(308));ri=t,nu.dependencies={lanes:0,firstContext:t}}else ri=ri.next=t;return e}var ds=null;function gf(t){ds===null?ds=[t]:ds.push(t)}function U_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,gf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Yn(t,n)}return s=r.interleaved,s===null?(e.next=e,gf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Yn(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}function Tg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var s=t.updateQueue;gr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=d=u=null,l=i;do{var g=l.lane,A=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,C=l;switch(g=e,A=n,C.tag){case 1:if(R=C.payload,typeof R=="function"){m=R.call(A,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=C.payload,g=typeof R=="function"?R.call(A,m,g):R,g==null)break e;m=qe({},m,g);break e;case 2:gr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=A,u=m):p=p.next=A,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);xs|=o,t.lanes=o,t.memoizedState=m}}function Ig(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var pa={},kn=Hr(pa),Ko=Hr(pa),Go=Hr(pa);function hs(t){if(t===pa)throw Error(z(174));return t}function vf(t,e){switch(Ae(Go,e),Ae(Ko,t),Ae(kn,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nd(e,t)}Ne(kn),Ae(kn,e)}function wi(){Ne(kn),Ne(Ko),Ne(Go)}function z_(t){hs(Go.current);var e=hs(kn.current),n=Nd(e,t.type);e!==n&&(Ae(Ko,t),Ae(kn,n))}function _f(t){Ko.current===t&&(Ne(kn),Ne(Ko))}var De=Hr(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function wf(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Al=nr.ReactCurrentDispatcher,Zc=nr.ReactCurrentBatchConfig,Es=0,Oe=null,Ye=null,et=null,iu=!1,Ao=!1,Qo=0,WT=0;function pt(){throw Error(z(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function xf(t,e,n,r,s,i){if(Es=i,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?QT:YT,t=n(r,s),Ao){i=0;do{if(Ao=!1,Qo=0,25<=i)throw Error(z(301));i+=1,et=Ye=null,e.updateQueue=null,Al.current=XT,t=n(r,s)}while(Ao)}if(Al.current=ou,e=Ye!==null&&Ye.next!==null,Es=0,et=Ye=Oe=null,iu=!1,e)throw Error(z(300));return t}function Tf(){var t=Qo!==0;return Qo=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Oe.memoizedState=et=t:et=et.next=t,et}function sn(){if(Ye===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=et===null?Oe.memoizedState:et.next;if(e!==null)et=e,Ye=t;else{if(t===null)throw Error(z(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},et===null?Oe.memoizedState=et=t:et=et.next=t}return et}function Yo(t,e){return typeof e=="function"?e(t):e}function ed(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ye,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var p=d.lane;if((Es&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Oe.lanes|=p,xs|=p}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,yn(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Oe.lanes|=i,xs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function td(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);yn(i,e.memoizedState)||(jt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function B_(){}function $_(t,e){var n=Oe,r=sn(),s=e(),i=!yn(r.memoizedState,s);if(i&&(r.memoizedState=s,jt=!0),r=r.queue,If(K_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Xo(9,H_.bind(null,n,r,s,e),void 0,null),tt===null)throw Error(z(349));Es&30||W_(n,e,s)}return s}function W_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H_(t,e,n,r){e.value=n,e.getSnapshot=r,G_(e)&&Q_(t)}function K_(t,e,n){return n(function(){G_(e)&&Q_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function Q_(t){var e=Yn(t,1);e!==null&&mn(e,t,1,-1)}function kg(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=GT.bind(null,Oe,t),[e.memoizedState,t]}function Xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Y_(){return sn().memoizedState}function Sl(t,e,n,r){var s=En();Oe.flags|=t,s.memoizedState=Xo(1|e,n,void 0,r===void 0?null:r)}function Vu(t,e,n,r){var s=sn();r=r===void 0?null:r;var i=void 0;if(Ye!==null){var o=Ye.memoizedState;if(i=o.destroy,r!==null&&Ef(r,o.deps)){s.memoizedState=Xo(e,n,i,r);return}}Oe.flags|=t,s.memoizedState=Xo(1|e,n,i,r)}function Ag(t,e){return Sl(8390656,8,t,e)}function If(t,e){return Vu(2048,8,t,e)}function X_(t,e){return Vu(4,2,t,e)}function J_(t,e){return Vu(4,4,t,e)}function Z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function e0(t,e,n){return n=n!=null?n.concat([t]):null,Vu(4,4,Z_.bind(null,e,t),n)}function kf(){}function t0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function n0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function r0(t,e,n){return Es&21?(yn(n,e)||(n=l_(),Oe.lanes|=n,xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function HT(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Zc.transition;Zc.transition={};try{t(!1),e()}finally{we=n,Zc.transition=r}}function s0(){return sn().memoizedState}function KT(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},i0(t))o0(e,n);else if(n=U_(t,e,n,r),n!==null){var s=St();mn(n,t,r,s),a0(n,e,r)}}function GT(t,e,n){var r=Pr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(i0(t))o0(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,yn(l,o)){var u=e.interleaved;u===null?(s.next=s,gf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=U_(t,e,s,r),n!==null&&(s=St(),mn(n,t,r,s),a0(n,e,r))}}function i0(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function o0(t,e){Ao=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function a0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}var ou={readContext:rn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},QT={readContext:rn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,Z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=KT.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:kg,useDebugValue:kf,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=kg(!1),e=t[0];return t=HT.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,s=En();if(Pe){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),tt===null)throw Error(z(349));Es&30||W_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Ag(K_.bind(null,r,i,t),[t]),r.flags|=2048,Xo(9,H_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=En(),e=tt.identifierPrefix;if(Pe){var n=Fn,r=Un;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YT={readContext:rn,useCallback:t0,useContext:rn,useEffect:If,useImperativeHandle:e0,useInsertionEffect:X_,useLayoutEffect:J_,useMemo:n0,useReducer:ed,useRef:Y_,useState:function(){return ed(Yo)},useDebugValue:kf,useDeferredValue:function(t){var e=sn();return r0(e,Ye.memoizedState,t)},useTransition:function(){var t=ed(Yo)[0],e=sn().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:s0,unstable_isNewReconciler:!1},XT={readContext:rn,useCallback:t0,useContext:rn,useEffect:If,useImperativeHandle:e0,useInsertionEffect:X_,useLayoutEffect:J_,useMemo:n0,useReducer:td,useRef:Y_,useState:function(){return td(Yo)},useDebugValue:kf,useDeferredValue:function(t){var e=sn();return Ye===null?e.memoizedState=t:r0(e,Ye.memoizedState,t)},useTransition:function(){var t=td(Yo)[0],e=sn().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:s0,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mu={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),s=Pr(t),i=Wn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Cr(t,i,s),e!==null&&(mn(e,t,s,r),kl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),s=Pr(t),i=Wn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Cr(t,i,s),e!==null&&(mn(e,t,s,r),kl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=Pr(t),s=Wn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Cr(t,s,r),e!==null&&(mn(e,t,r,n),kl(e,t,r))}};function Sg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,r)||!Bo(s,i):!0}function l0(t,e,n){var r=!1,s=Mr,i=e.contextType;return typeof i=="object"&&i!==null?i=rn(i):(s=Vt(e)?_s:Et.current,r=e.contextTypes,i=(r=r!=null)?yi(t,s):Mr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function bg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mu.enqueueReplaceState(e,e.state,null)}function Zd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},yf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=rn(i):(i=Vt(e)?_s:Et.current,s.context=yi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Mu.enqueueReplaceState(s,s.state,null),ru(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ei(t,e){try{var n="",r=e;do n+=k1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function nd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JT=typeof WeakMap=="function"?WeakMap:Map;function u0(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,ch=r),eh(t,e)},n}function c0(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){eh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){eh(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=hI.bind(null,t,e,n),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ng(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var ZT=nr.ReactCurrentOwner,jt=!1;function At(t,e,n,r){e.child=t===null?M_(e,null,n,r):_i(e,t.child,n,r)}function Pg(t,e,n,r,s){n=n.render;var i=e.ref;return ci(e,s),r=xf(t,e,n,r,i,s),n=Tf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Xn(t,e,s)):(Pe&&n&&cf(e),e.flags|=1,At(t,e,r,s),e.child)}function Dg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Df(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,d0(t,e,i,r,s)):(t=Nl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(o,r)&&t.ref===e.ref)return Xn(t,e,s)}return e.flags|=1,t=Dr(i,r),t.ref=e.ref,t.return=e,e.child=t}function d0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Bo(i,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,Xn(t,e,s)}return th(t,e,n,r,s)}function h0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(ii,zt),zt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(ii,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ae(ii,zt),zt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ae(ii,zt),zt|=r;return At(t,e,s,n),e.child}function f0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function th(t,e,n,r,s){var i=Vt(n)?_s:Et.current;return i=yi(e,i),ci(e,s),n=xf(t,e,n,r,i,s),r=Tf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Xn(t,e,s)):(Pe&&r&&cf(e),e.flags|=1,At(t,e,n,s),e.child)}function Og(t,e,n,r,s){if(Vt(n)){var i=!0;Jl(e)}else i=!1;if(ci(e,s),e.stateNode===null)bl(t,e),l0(e,n,r),Zd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=rn(d):(d=Vt(n)?_s:Et.current,d=yi(e,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&bg(e,o,r,d),gr=!1;var g=e.memoizedState;o.state=g,ru(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Lt.current||gr?(typeof p=="function"&&(Jd(e,n,p,r),u=e.memoizedState),(l=gr||Sg(e,n,l,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,F_(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:cn(e.type,l),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Vt(n)?_s:Et.current,u=yi(e,u));var A=n.getDerivedStateFromProps;(p=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&bg(e,o,r,u),gr=!1,g=e.memoizedState,o.state=g,ru(e,r,o,s);var R=e.memoizedState;l!==m||g!==R||Lt.current||gr?(typeof A=="function"&&(Jd(e,n,A,r),R=e.memoizedState),(d=gr||Sg(e,n,d,r,g,R,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return nh(t,e,n,r,i,s)}function nh(t,e,n,r,s,i){f0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&_g(e,n,!1),Xn(t,e,i);r=e.stateNode,ZT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_i(e,t.child,null,i),e.child=_i(e,null,l,i)):At(t,e,l,i),e.memoizedState=r.state,s&&_g(e,n,!0),e.child}function p0(t){var e=t.stateNode;e.pendingContext?vg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vg(t,e.context,!1),vf(t,e.containerInfo)}function qg(t,e,n,r,s){return vi(),hf(s),e.flags|=256,At(t,e,n,r),e.child}var rh={dehydrated:null,treeContext:null,retryLane:0};function sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function m0(t,e,n){var r=e.pendingProps,s=De.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ae(De,s&1),t===null)return Yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=zu(o,r,0,null),t=gs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=sh(n),e.memoizedState=rh,t):Af(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return eI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Dr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Dr(l,i):(i=gs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=rh,r}return i=t.child,t=i.sibling,r=Dr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Af(t,e){return e=zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,r){return r!==null&&hf(r),_i(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=nd(Error(z(422))),ll(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=zu({mode:"visible",children:r.children},s,0,null),i=gs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&_i(e,t.child,null,o),e.child.memoizedState=sh(o),e.memoizedState=rh,i);if(!(e.mode&1))return ll(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=nd(i,r,void 0),ll(t,e,o,r)}if(l=(o&t.childLanes)!==0,jt||l){if(r=tt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Yn(t,s),mn(r,t,s,-1))}return Pf(),r=nd(Error(z(421))),ll(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=fI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Bt=Rr(s.nextSibling),Kt=e,Pe=!0,hn=null,t!==null&&(Jt[Zt++]=Un,Jt[Zt++]=Fn,Jt[Zt++]=ws,Un=t.id,Fn=t.overflow,ws=e),e=Af(e,r.children),e.flags|=4096,e)}function jg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xd(t.return,e,n)}function rd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function g0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(At(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,n,e);else if(t.tag===19)jg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(De,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),rd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&su(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}rd(e,!0,n,null,i);break;case"together":rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tI(t,e,n){switch(e.tag){case 3:p0(e),vi();break;case 5:z_(e);break;case 1:Vt(e.type)&&Jl(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ae(tu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?m0(t,e,n):(Ae(De,De.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);Ae(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return g0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ae(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,h0(t,e,n)}return Xn(t,e,n)}var y0,ih,v0,_0;y0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ih=function(){};v0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,hs(kn.current);var i=null;switch(n){case"input":s=Sd(t,s),r=Sd(t,r),i=[];break;case"select":s=qe({},s,{value:void 0}),r=qe({},r,{value:void 0}),i=[];break;case"textarea":s=Cd(t,s),r=Cd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}Pd(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Re("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};_0=function(t,e,n,r){n!==r&&(e.flags|=4)};function io(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nI(t,e,n){var r=e.pendingProps;switch(df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Vt(e.type)&&Xl(),mt(e),null;case 3:return r=e.stateNode,wi(),Ne(Lt),Ne(Et),wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(fh(hn),hn=null))),ih(t,e),mt(e),null;case 5:_f(e);var s=hs(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)v0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return mt(e),null}if(t=hs(kn.current),ol(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[xn]=e,r[Ho]=i,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(s=0;s<fo.length;s++)Re(fo[s],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":Wm(r,i),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Re("invalid",r);break;case"textarea":Km(r,i),Re("invalid",r)}Pd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&il(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&il(r.textContent,l,t),s=["children",""+l]):jo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Xa(r),Hm(r,i,!0);break;case"textarea":Xa(r),Gm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[Ho]=r,y0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dd(n,r),n){case"dialog":Re("cancel",t),Re("close",t),s=r;break;case"iframe":case"object":case"embed":Re("load",t),s=r;break;case"video":case"audio":for(s=0;s<fo.length;s++)Re(fo[s],t);s=r;break;case"source":Re("error",t),s=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),s=r;break;case"details":Re("toggle",t),s=r;break;case"input":Wm(t,r),s=Sd(t,r),Re("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=qe({},r,{value:void 0}),Re("invalid",t);break;case"textarea":Km(t,r),s=Cd(t,r),Re("invalid",t);break;default:s=r}Pd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Yv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Lo(t,u):typeof u=="number"&&Lo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Re("scroll",t):u!=null&&Qh(t,i,u,o))}switch(n){case"input":Xa(t),Hm(t,r,!1);break;case"textarea":Xa(t),Gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?oi(t,!!r.multiple,i,!1):r.defaultValue!=null&&oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)_0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=hs(Go.current),hs(kn.current),ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(i=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return mt(e),null;case 13:if(Ne(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Bt!==null&&e.mode&1&&!(e.flags&128))L_(),vi(),e.flags|=98560,i=!1;else if(i=ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[xn]=e}else vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),i=!1}else hn!==null&&(fh(hn),hn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Xe===0&&(Xe=3):Pf())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return wi(),ih(t,e),t===null&&$o(e.stateNode.containerInfo),mt(e),null;case 10:return mf(e.type._context),mt(e),null;case 17:return Vt(e.type)&&Xl(),mt(e),null;case 19:if(Ne(De),i=e.memoizedState,i===null)return mt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)io(i,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,io(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(De,De.current&1|2),e.child}t=t.sibling}i.tail!==null&&He()>xi&&(e.flags|=128,r=!0,io(i,!1),e.lanes=4194304)}else{if(!r)if(t=su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Pe)return mt(e),null}else 2*He()-i.renderingStartTime>xi&&n!==1073741824&&(e.flags|=128,r=!0,io(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=He(),e.sibling=null,n=De.current,Ae(De,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function rI(t,e){switch(df(e),e.tag){case 1:return Vt(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wi(),Ne(Lt),Ne(Et),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(Ne(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(De),null;case 4:return wi(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var ul=!1,vt=!1,sI=typeof WeakSet=="function"?WeakSet:Set,Q=null;function si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function oh(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var Lg=!1;function iI(t,e){if(Bd=Kl,t=I_(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,m=t,g=null;t:for(;;){for(var A;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===t)break t;if(g===n&&++d===s&&(l=o),g===i&&++p===r&&(u=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:t,selectionRange:n},Kl=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var C=R.memoizedProps,b=R.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?C:cn(e.type,C),b);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(O){Fe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return R=Lg,Lg=!1,R}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&oh(e,n,i)}s=s.next}while(s!==r)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[Ho],delete e[Kd],delete e[FT],delete e[zT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E0(t){return t.tag===5||t.tag===3||t.tag===4}function Vg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}function uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}var rt=null,dn=!1;function fr(t,e,n){for(n=n.child;n!==null;)x0(t,e,n),n=n.sibling}function x0(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Pu,n)}catch{}switch(n.tag){case 5:vt||si(n,e);case 6:var r=rt,s=dn;rt=null,fr(t,e,n),rt=r,dn=s,rt!==null&&(dn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(dn?(t=rt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Fo(t)):Yc(rt,n.stateNode));break;case 4:r=rt,s=dn,rt=n.stateNode.containerInfo,dn=!0,fr(t,e,n),rt=r,dn=s;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&oh(n,e,o),s=s.next}while(s!==r)}fr(t,e,n);break;case 1:if(!vt&&(si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,e,l)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,fr(t,e,n),vt=r):fr(t,e,n);break;default:fr(t,e,n)}}function Mg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sI),e.forEach(function(r){var s=pI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,dn=!1;break e;case 3:rt=l.stateNode.containerInfo,dn=!0;break e;case 4:rt=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(rt===null)throw Error(z(160));x0(i,o,s),rt=null,dn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Fe(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T0(e,t),e=e.sibling}function T0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),wn(t),r&4){try{So(3,t,t.return),Uu(3,t)}catch(C){Fe(t,t.return,C)}try{So(5,t,t.return)}catch(C){Fe(t,t.return,C)}}break;case 1:un(e,t),wn(t),r&512&&n!==null&&si(n,n.return);break;case 5:if(un(e,t),wn(t),r&512&&n!==null&&si(n,n.return),t.flags&32){var s=t.stateNode;try{Lo(s,"")}catch(C){Fe(t,t.return,C)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Wv(s,i),Dd(l,o);var d=Dd(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Yv(s,m):p==="dangerouslySetInnerHTML"?Gv(s,m):p==="children"?Lo(s,m):Qh(s,p,m,d)}switch(l){case"input":bd(s,i);break;case"textarea":Hv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?oi(s,!!i.multiple,A,!1):g!==!!i.multiple&&(i.defaultValue!=null?oi(s,!!i.multiple,i.defaultValue,!0):oi(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ho]=i}catch(C){Fe(t,t.return,C)}}break;case 6:if(un(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(C){Fe(t,t.return,C)}}break;case 3:if(un(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(C){Fe(t,t.return,C)}break;case 4:un(e,t),wn(t);break;case 13:un(e,t),wn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Rf=He())),r&4&&Mg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(d=vt)||p,un(e,t),vt=d):un(e,t),wn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(Q=t,p=t.child;p!==null;){for(m=Q=p;Q!==null;){switch(g=Q,A=g.child,g.tag){case 0:case 11:case 14:case 15:So(4,g,g.return);break;case 1:si(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(C){Fe(r,n,C)}}break;case 5:si(g,g.return);break;case 22:if(g.memoizedState!==null){Fg(m);continue}}A!==null?(A.return=g,Q=A):Fg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Qv("display",o))}catch(C){Fe(t,t.return,C)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(C){Fe(t,t.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:un(e,t),wn(t),r&4&&Mg(t);break;case 21:break;default:un(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E0(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Lo(s,""),r.flags&=-33);var i=Vg(t);uh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vg(t);lh(t,l,o);break;default:throw Error(z(161))}}catch(u){Fe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oI(t,e,n){Q=t,I0(t)}function I0(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ul;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||vt;l=ul;var d=vt;if(ul=o,(vt=u)&&!d)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?zg(s):u!==null?(u.return=o,Q=u):zg(s);for(;i!==null;)Q=i,I0(i),i=i.sibling;Q=s,ul=l,vt=d}Ug(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):Ug(t)}}function Ug(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ig(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ig(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Fo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}vt||e.flags&512&&ah(e)}catch(g){Fe(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Fg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function zg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(u){Fe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Fe(e,s,u)}}var i=e.return;try{ah(e)}catch(u){Fe(e,i,u)}break;case 5:var o=e.return;try{ah(e)}catch(u){Fe(e,o,u)}}}catch(u){Fe(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var aI=Math.ceil,au=nr.ReactCurrentDispatcher,Sf=nr.ReactCurrentOwner,tn=nr.ReactCurrentBatchConfig,ge=0,tt=null,Ge=null,ot=0,zt=0,ii=Hr(0),Xe=0,Jo=null,xs=0,Fu=0,bf=0,bo=null,Ot=null,Rf=0,xi=1/0,Ln=null,lu=!1,ch=null,Nr=null,cl=!1,Ir=null,uu=0,Ro=0,dh=null,Rl=-1,Cl=0;function St(){return ge&6?He():Rl!==-1?Rl:Rl=He()}function Pr(t){return t.mode&1?ge&2&&ot!==0?ot&-ot:$T.transition!==null?(Cl===0&&(Cl=l_()),Cl):(t=we,t!==0||(t=window.event,t=t===void 0?16:m_(t.type)),t):1}function mn(t,e,n,r){if(50<Ro)throw Ro=0,dh=null,Error(z(185));da(t,n,r),(!(ge&2)||t!==tt)&&(t===tt&&(!(ge&2)&&(Fu|=n),Xe===4&&vr(t,ot)),Mt(t,r),n===1&&ge===0&&!(e.mode&1)&&(xi=He()+500,Lu&&Kr()))}function Mt(t,e){var n=t.callbackNode;$1(t,e);var r=Hl(t,t===tt?ot:0);if(r===0)n!==null&&Xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xm(n),e===1)t.tag===0?BT(Bg.bind(null,t)):O_(Bg.bind(null,t)),MT(function(){!(ge&6)&&Kr()}),n=null;else{switch(u_(r)){case 1:n=ef;break;case 4:n=o_;break;case 16:n=Wl;break;case 536870912:n=a_;break;default:n=Wl}n=P0(n,k0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k0(t,e){if(Rl=-1,Cl=0,ge&6)throw Error(z(327));var n=t.callbackNode;if(di()&&t.callbackNode!==n)return null;var r=Hl(t,t===tt?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var s=ge;ge|=2;var i=S0();(tt!==t||ot!==e)&&(Ln=null,xi=He()+500,ms(t,e));do try{cI();break}catch(l){A0(t,l)}while(!0);pf(),au.current=i,ge=s,Ge!==null?e=0:(tt=null,ot=0,e=Xe)}if(e!==0){if(e===2&&(s=Vd(t),s!==0&&(r=s,e=hh(t,s))),e===1)throw n=Jo,ms(t,0),vr(t,r),Mt(t,He()),n;if(e===6)vr(t,r);else{if(s=t.current.alternate,!(r&30)&&!lI(s)&&(e=cu(t,r),e===2&&(i=Vd(t),i!==0&&(r=i,e=hh(t,i))),e===1))throw n=Jo,ms(t,0),vr(t,r),Mt(t,He()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:as(t,Ot,Ln);break;case 3:if(vr(t,r),(r&130023424)===r&&(e=Rf+500-He(),10<e)){if(Hl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Hd(as.bind(null,t,Ot,Ln),e);break}as(t,Ot,Ln);break;case 4:if(vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-pn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aI(r/1960))-r,10<r){t.timeoutHandle=Hd(as.bind(null,t,Ot,Ln),r);break}as(t,Ot,Ln);break;case 5:as(t,Ot,Ln);break;default:throw Error(z(329))}}}return Mt(t,He()),t.callbackNode===n?k0.bind(null,t):null}function hh(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(ms(t,e).flags|=256),t=cu(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&fh(e)),t}function fh(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function lI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!yn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~bf,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function Bg(t){if(ge&6)throw Error(z(327));di();var e=Hl(t,0);if(!(e&1))return Mt(t,He()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=Vd(t);r!==0&&(e=r,n=hh(t,r))}if(n===1)throw n=Jo,ms(t,0),vr(t,e),Mt(t,He()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,as(t,Ot,Ln),Mt(t,He()),null}function Cf(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(xi=He()+500,Lu&&Kr())}}function Ts(t){Ir!==null&&Ir.tag===0&&!(ge&6)&&di();var e=ge;ge|=1;var n=tn.transition,r=we;try{if(tn.transition=null,we=1,t)return t()}finally{we=r,tn.transition=n,ge=e,!(ge&6)&&Kr()}}function Nf(){zt=ii.current,Ne(ii)}function ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VT(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(df(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:wi(),Ne(Lt),Ne(Et),wf();break;case 5:_f(r);break;case 4:wi();break;case 13:Ne(De);break;case 19:Ne(De);break;case 10:mf(r.type._context);break;case 22:case 23:Nf()}n=n.return}if(tt=t,Ge=t=Dr(t.current,null),ot=zt=e,Xe=0,Jo=null,bf=Fu=xs=0,Ot=bo=null,ds!==null){for(e=0;e<ds.length;e++)if(n=ds[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ds=null}return t}function A0(t,e){do{var n=Ge;try{if(pf(),Al.current=ou,iu){for(var r=Oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}iu=!1}if(Es=0,et=Ye=Oe=null,Ao=!1,Qo=0,Sf.current=null,n===null||n.return===null){Xe=1,Jo=e,Ge=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ot,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var A=Cg(o);if(A!==null){A.flags&=-257,Ng(A,o,l,i,e),A.mode&1&&Rg(i,d,e),e=A,u=d;var R=e.updateQueue;if(R===null){var C=new Set;C.add(u),e.updateQueue=C}else R.add(u);break e}else{if(!(e&1)){Rg(i,d,e),Pf();break e}u=Error(z(426))}}else if(Pe&&l.mode&1){var b=Cg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ng(b,o,l,i,e),hf(Ei(u,l));break e}}i=u=Ei(u,l),Xe!==4&&(Xe=2),bo===null?bo=[i]:bo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=u0(i,u,e);Tg(i,T);break e;case 1:l=u;var _=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Nr===null||!Nr.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var O=c0(i,l,e);Tg(i,O);break e}}i=i.return}while(i!==null)}R0(n)}catch(U){e=U,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function S0(){var t=au.current;return au.current=ou,t===null?ou:t}function Pf(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(xs&268435455)&&!(Fu&268435455)||vr(tt,ot)}function cu(t,e){var n=ge;ge|=2;var r=S0();(tt!==t||ot!==e)&&(Ln=null,ms(t,e));do try{uI();break}catch(s){A0(t,s)}while(!0);if(pf(),ge=n,au.current=r,Ge!==null)throw Error(z(261));return tt=null,ot=0,Xe}function uI(){for(;Ge!==null;)b0(Ge)}function cI(){for(;Ge!==null&&!q1();)b0(Ge)}function b0(t){var e=N0(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?R0(t):Ge=e,Sf.current=null}function R0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rI(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Ge=null;return}}else if(n=nI(n,e,zt),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Xe===0&&(Xe=5)}function as(t,e,n){var r=we,s=tn.transition;try{tn.transition=null,we=1,dI(t,e,n,r)}finally{tn.transition=s,we=r}return null}function dI(t,e,n,r){do di();while(Ir!==null);if(ge&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(W1(t,i),t===tt&&(Ge=tt=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,P0(Wl,function(){return di(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=we;we=1;var l=ge;ge|=4,Sf.current=null,iI(t,n),T0(n,t),NT($d),Kl=!!Bd,$d=Bd=null,t.current=n,oI(n),j1(),ge=l,we=o,tn.transition=i}else t.current=n;if(cl&&(cl=!1,Ir=t,uu=s),i=t.pendingLanes,i===0&&(Nr=null),M1(n.stateNode),Mt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(lu)throw lu=!1,t=ch,ch=null,t;return uu&1&&t.tag!==0&&di(),i=t.pendingLanes,i&1?t===dh?Ro++:(Ro=0,dh=t):Ro=0,Kr(),null}function di(){if(Ir!==null){var t=u_(uu),e=tn.transition,n=we;try{if(tn.transition=null,we=16>t?16:t,Ir===null)var r=!1;else{if(t=Ir,Ir=null,uu=0,ge&6)throw Error(z(331));var s=ge;for(ge|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(Q=d;Q!==null;){var p=Q;switch(p.tag){case 0:case 11:case 15:So(8,p,i)}var m=p.child;if(m!==null)m.return=p,Q=m;else for(;Q!==null;){p=Q;var g=p.sibling,A=p.return;if(w0(p),p===d){Q=null;break}if(g!==null){g.return=A,Q=g;break}Q=A}}}var R=i.alternate;if(R!==null){var C=R.child;if(C!==null){R.child=null;do{var b=C.sibling;C.sibling=null,C=b}while(C!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:So(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,Q=T;break e}Q=i.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,Q=k;else e:for(o=_;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Uu(9,l)}}catch(U){Fe(l,l.return,U)}if(l===o){Q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Q=O;break e}Q=l.return}}if(ge=s,Kr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Pu,t)}catch{}r=!0}return r}finally{we=n,tn.transition=e}}return!1}function $g(t,e,n){e=Ei(n,e),e=u0(t,e,1),t=Cr(t,e,1),e=St(),t!==null&&(da(t,1,e),Mt(t,e))}function Fe(t,e,n){if(t.tag===3)$g(t,t,n);else for(;e!==null;){if(e.tag===3){$g(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=Ei(n,t),t=c0(e,t,1),e=Cr(e,t,1),t=St(),e!==null&&(da(e,1,t),Mt(e,t));break}}e=e.return}}function hI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ot&n)===n&&(Xe===4||Xe===3&&(ot&130023424)===ot&&500>He()-Rf?ms(t,0):bf|=n),Mt(t,e)}function C0(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=St();t=Yn(t,e),t!==null&&(da(t,e,n),Mt(t,n))}function fI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C0(t,n)}function pI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),C0(t,n)}var N0;N0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,tI(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Pe&&e.flags&1048576&&q_(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bl(t,e),t=e.pendingProps;var s=yi(e,Et.current);ci(e,n),s=xf(null,e,r,t,s,n);var i=Tf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(i=!0,Jl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,yf(e),s.updater=Mu,e.stateNode=s,s._reactInternals=e,Zd(e,r,t,n),e=nh(null,e,r,!0,i,n)):(e.tag=0,Pe&&i&&cf(e),At(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=gI(r),t=cn(r,t),s){case 0:e=th(null,e,r,t,n);break e;case 1:e=Og(null,e,r,t,n);break e;case 11:e=Pg(null,e,r,t,n);break e;case 14:e=Dg(null,e,r,cn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),th(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),Og(t,e,r,s,n);case 3:e:{if(p0(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,F_(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ei(Error(z(423)),e),e=qg(t,e,r,n,s);break e}else if(r!==s){s=Ei(Error(z(424)),e),e=qg(t,e,r,n,s);break e}else for(Bt=Rr(e.stateNode.containerInfo.firstChild),Kt=e,Pe=!0,hn=null,n=M_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vi(),r===s){e=Xn(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return z_(e),t===null&&Yd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Wd(r,s)?o=null:i!==null&&Wd(r,i)&&(e.flags|=32),f0(t,e),At(t,e,o,n),e.child;case 6:return t===null&&Yd(e),null;case 13:return m0(t,e,n);case 4:return vf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_i(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),Pg(t,e,r,s,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ae(tu,r._currentValue),r._currentValue=o,i!==null)if(yn(i.value,o)){if(i.children===s.children&&!Lt.current){e=Xn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Wn(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Xd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}At(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ci(e,n),s=rn(s),r=r(s),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,s=cn(r,e.pendingProps),s=cn(r.type,s),Dg(t,e,r,s,n);case 15:return d0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),bl(t,e),e.tag=1,Vt(r)?(t=!0,Jl(e)):t=!1,ci(e,n),l0(e,r,s),Zd(e,r,s,n),nh(null,e,r,!0,t,n);case 19:return g0(t,e,n);case 22:return h0(t,e,n)}throw Error(z(156,e.tag))};function P0(t,e){return i_(t,e)}function mI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new mI(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gI(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===Jh)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return gs(n.children,s,i,e);case Yh:o=8,s|=8;break;case Td:return t=en(12,n,e,s|2),t.elementType=Td,t.lanes=i,t;case Id:return t=en(13,n,e,s),t.elementType=Id,t.lanes=i,t;case kd:return t=en(19,n,e,s),t.elementType=kd,t.lanes=i,t;case zv:return zu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uv:o=10;break e;case Fv:o=9;break e;case Xh:o=11;break e;case Jh:o=14;break e;case mr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function gs(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function zu(t,e,n,r){return t=en(22,t,r,e),t.elementType=zv,t.lanes=n,t.stateNode={isHidden:!1},t}function sd(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function id(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yI(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Of(t,e,n,r,s,i,o,l,u){return t=new yI(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(i),t}function vI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D0(t){if(!t)return Mr;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Vt(n))return D_(t,n,e)}return e}function O0(t,e,n,r,s,i,o,l,u){return t=Of(n,r,!0,t,s,i,o,l,u),t.context=D0(null),n=t.current,r=St(),s=Pr(n),i=Wn(r,s),i.callback=e??null,Cr(n,i,s),t.current.lanes=s,da(t,s,r),Mt(t,r),t}function Bu(t,e,n,r){var s=e.current,i=St(),o=Pr(s);return n=D0(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cr(s,e,o),t!==null&&(mn(t,s,o,i),kl(t,s,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Wg(t,e),(t=t.alternate)&&Wg(t,e)}function _I(){return null}var q0=typeof reportError=="function"?reportError:function(t){console.error(t)};function jf(t){this._internalRoot=t}$u.prototype.render=jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Bu(t,e,null,null)};$u.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ts(function(){Bu(null,t,null,null)}),e[Qn]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var e=h_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&p_(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function wI(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=du(o);i.call(d)}}var o=O0(e,r,t,0,null,!1,!1,"",Hg);return t._reactRootContainer=o,t[Qn]=o.current,$o(t.nodeType===8?t.parentNode:t),Ts(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=du(u);l.call(d)}}var u=Of(t,0,!1,null,null,!1,!1,"",Hg);return t._reactRootContainer=u,t[Qn]=u.current,$o(t.nodeType===8?t.parentNode:t),Ts(function(){Bu(e,u,n,r)}),u}function Hu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=du(o);l.call(u)}}Bu(e,o,t,s)}else o=wI(n,e,t,s,r);return du(o)}c_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(tf(e,n|1),Mt(e,He()),!(ge&6)&&(xi=He()+500,Kr()))}break;case 13:Ts(function(){var r=Yn(t,1);if(r!==null){var s=St();mn(r,t,1,s)}}),qf(t,1)}};nf=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=St();mn(e,t,134217728,n)}qf(t,134217728)}};d_=function(t){if(t.tag===13){var e=Pr(t),n=Yn(t,e);if(n!==null){var r=St();mn(n,t,e,r)}qf(t,e)}};h_=function(){return we};f_=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};qd=function(t,e,n){switch(e){case"input":if(bd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ju(r);if(!s)throw Error(z(90));$v(r),bd(r,s)}}}break;case"textarea":Hv(t,n);break;case"select":e=n.value,e!=null&&oi(t,!!n.multiple,e,!1)}};Zv=Cf;e_=Ts;var EI={usingClientEntryPoint:!1,Events:[fa,Zs,ju,Xv,Jv,Cf]},oo={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xI={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r_(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||_I,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Pu=dl.inject(xI),In=dl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EI;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(z(200));return vI(t,e,null,n)};Yt.createRoot=function(t,e){if(!Lf(t))throw Error(z(299));var n=!1,r="",s=q0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Of(t,1,!1,null,null,n,!1,r,s),t[Qn]=e.current,$o(t.nodeType===8?t.parentNode:t),new jf(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=r_(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Ts(t)};Yt.hydrate=function(t,e,n){if(!Wu(e))throw Error(z(200));return Hu(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=q0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O0(e,null,t,1,n??null,s,!1,i,o),t[Qn]=e.current,$o(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new $u(e)};Yt.render=function(t,e,n){if(!Wu(e))throw Error(z(200));return Hu(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Wu(t))throw Error(z(40));return t._reactRootContainer?(Ts(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1};Yt.unstable_batchedUpdates=Cf;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wu(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Hu(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(t){console.error(t)}}j0(),jv.exports=Yt;var TI=jv.exports,Kg=TI;Ed.createRoot=Kg.createRoot,Ed.hydrateRoot=Kg.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var II={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ne=(t,e)=>{const n=M.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...d},p)=>M.createElement("svg",{ref:p,...II,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${kI(t)}`,l].join(" "),...d},[...e.map(([m,g])=>M.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=ne("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=ne("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=ne("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=ne("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=ne("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=ne("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=ne("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=ne("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=ne("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=ne("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=ne("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=ne("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=ne("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=ne("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=ne("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=ne("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=ne("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=ne("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=ne("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=ne("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=ne("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=ne("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=ne("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=ne("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=ne("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=ne("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=ne("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=ne("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=ne("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=ne("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=ne("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=ne("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=ne("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=ne("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=ne("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=ne("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=ne("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=ne("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=ne("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=ne("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=ne("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=ne("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=ne("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=ne("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=ne("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=ne("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=ne("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=ne("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=ne("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=ne("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var us=(t=>(t.LIGHT="light",t.DARK="dark",t))(us||{}),ny={};/**
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
 */const H0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},KI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},K0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,A=d&63;u||(A=64,o||(g=64)),r.push(n[p],n[m],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new GI;const g=i<<2|l>>4;if(r.push(g),d!==64){const A=l<<4&240|d>>2;if(r.push(A),m!==64){const R=d<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QI=function(t){const e=H0(t);return K0.encodeByteArray(e,!0)},fu=function(t){return QI(t).replace(/\./g,"")},G0=function(t){try{return K0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function YI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XI=()=>YI().__FIREBASE_DEFAULTS__,JI=()=>{if(typeof process>"u"||typeof ny>"u")return;const t=ny.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&G0(t[1]);return e&&JSON.parse(e)},Gu=()=>{try{return XI()||JI()||ZI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q0=t=>{var e,n;return(n=(e=Gu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Y0=t=>{const e=Q0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},X0=()=>{var t;return(t=Gu())===null||t===void 0?void 0:t.config},J0=t=>{var e;return(e=Gu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ek{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Z0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),""].join(".")}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function nk(){var t;const e=(t=Gu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ik(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ok(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ak(){return!nk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lk(){try{return typeof indexedDB=="object"}catch{return!1}}function uk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ck="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ck,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ga.prototype.create)}}class ga{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?dk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,l,r)}}function dk(t,e){return t.replace(hk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hk=/\{\$([^}]+)}/g;function fk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ry(i)&&ry(o)){if(!pu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ry(t){return t!==null&&typeof t=="object"}/**
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
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pk(t,e){const n=new mk(t,e);return n.subscribe.bind(n)}class mk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=od),s.error===void 0&&(s.error=od),s.complete===void 0&&(s.complete=od);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function od(){}/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ls="[DEFAULT]";/**
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
 */class yk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ek;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_k(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vk(t){return t===ls?void 0:t}function _k(t){return t.instantiationMode==="EAGER"}/**
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
 */class wk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const Ek={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},xk=de.INFO,Tk={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Ik=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Tk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ff{constructor(e){this.name=e,this._logLevel=xk,this._logHandler=Ik,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const kk=(t,e)=>e.some(n=>t instanceof n);let sy,iy;function Ak(){return sy||(sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sk(){return iy||(iy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ew=new WeakMap,vh=new WeakMap,tw=new WeakMap,ad=new WeakMap,zf=new WeakMap;function bk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ew.set(n,t)}).catch(()=>{}),zf.set(e,t),e}function Rk(t){if(vh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vh.set(t,e)}let _h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ck(t){_h=t(_h)}function Nk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ld(this),e,...n);return tw.set(r,e.sort?e.sort():[e]),qr(r)}:Sk().includes(t)?function(...e){return t.apply(ld(this),e),qr(ew.get(this))}:function(...e){return qr(t.apply(ld(this),e))}}function Pk(t){return typeof t=="function"?Nk(t):(t instanceof IDBTransaction&&Rk(t),kk(t,Ak())?new Proxy(t,_h):t)}function qr(t){if(t instanceof IDBRequest)return bk(t);if(ad.has(t))return ad.get(t);const e=Pk(t);return e!==t&&(ad.set(t,e),zf.set(e,t)),e}const ld=t=>zf.get(t);function Dk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=qr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(qr(o.result),u.oldVersion,u.newVersion,qr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Ok=["get","getKey","getAll","getAllKeys","count"],qk=["put","add","delete","clear"],ud=new Map;function oy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ud.get(e))return ud.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ok.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return ud.set(e,i),i}Ck(t=>({...t,get:(e,n,r)=>oy(e,n)||t.get(e,n,r),has:(e,n)=>!!oy(e,n)||t.has(e,n)}));/**
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
 */class jk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wh="@firebase/app",ay="0.10.13";/**
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
 */const Jn=new Ff("@firebase/app"),Vk="@firebase/app-compat",Mk="@firebase/analytics-compat",Uk="@firebase/analytics",Fk="@firebase/app-check-compat",zk="@firebase/app-check",Bk="@firebase/auth",$k="@firebase/auth-compat",Wk="@firebase/database",Hk="@firebase/data-connect",Kk="@firebase/database-compat",Gk="@firebase/functions",Qk="@firebase/functions-compat",Yk="@firebase/installations",Xk="@firebase/installations-compat",Jk="@firebase/messaging",Zk="@firebase/messaging-compat",eA="@firebase/performance",tA="@firebase/performance-compat",nA="@firebase/remote-config",rA="@firebase/remote-config-compat",sA="@firebase/storage",iA="@firebase/storage-compat",oA="@firebase/firestore",aA="@firebase/vertexai-preview",lA="@firebase/firestore-compat",uA="firebase",cA="10.14.1";/**
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
 */const Eh="[DEFAULT]",dA={[wh]:"fire-core",[Vk]:"fire-core-compat",[Uk]:"fire-analytics",[Mk]:"fire-analytics-compat",[zk]:"fire-app-check",[Fk]:"fire-app-check-compat",[Bk]:"fire-auth",[$k]:"fire-auth-compat",[Wk]:"fire-rtdb",[Hk]:"fire-data-connect",[Kk]:"fire-rtdb-compat",[Gk]:"fire-fn",[Qk]:"fire-fn-compat",[Yk]:"fire-iid",[Xk]:"fire-iid-compat",[Jk]:"fire-fcm",[Zk]:"fire-fcm-compat",[eA]:"fire-perf",[tA]:"fire-perf-compat",[nA]:"fire-rc",[rA]:"fire-rc-compat",[sA]:"fire-gcs",[iA]:"fire-gcs-compat",[oA]:"fire-fst",[lA]:"fire-fst-compat",[aA]:"fire-vertex","fire-js":"fire-js",[uA]:"fire-js-all"};/**
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
 */const mu=new Map,hA=new Map,xh=new Map;function ly(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(xh.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;xh.set(e,t);for(const n of mu.values())ly(n,t);for(const n of hA.values())ly(n,t);return!0}function Qu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t.settings!==void 0}/**
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
 */const fA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new ga("app","Firebase",fA);/**
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
 */class pA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=cA;function nw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Eh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jr.create("bad-app-name",{appName:String(s)});if(n||(n=X0()),!n)throw jr.create("no-options");const i=mu.get(s);if(i){if(pu(n,i.options)&&pu(r,i.config))return i;throw jr.create("duplicate-app",{appName:s})}const o=new wk(s);for(const u of xh.values())o.addComponent(u);const l=new pA(n,r,o);return mu.set(s,l),l}function Bf(t=Eh){const e=mu.get(t);if(!e&&t===Eh&&X0())return nw();if(!e)throw jr.create("no-app",{appName:t});return e}function An(t,e,n){var r;let s=(r=dA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(l.join(" "));return}Is(new Ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mA="firebase-heartbeat-database",gA=1,ea="firebase-heartbeat-store";let cd=null;function rw(){return cd||(cd=Dk(mA,gA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),cd}async function yA(t){try{const n=(await rw()).transaction(ea),r=await n.objectStore(ea).get(sw(t));return await n.done,r}catch(e){if(e instanceof Dn)Jn.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function uy(t,e){try{const r=(await rw()).transaction(ea,"readwrite");await r.objectStore(ea).put(e,sw(t)),await r.done}catch(n){if(n instanceof Dn)Jn.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function sw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vA=1024,_A=30*24*60*60*1e3;class wA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=_A}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cy(),{heartbeatsToSend:r,unsentEntries:s}=EA(this._heartbeatsCache.heartbeats),i=fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Jn.warn(n),""}}}function cy(){return new Date().toISOString().substring(0,10)}function EA(t,e=vA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lk()?uk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dy(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TA(t){Is(new Ur("platform-logger",e=>new jk(e),"PRIVATE")),Is(new Ur("heartbeat",e=>new wA(e),"PRIVATE")),An(wh,ay,t),An(wh,ay,"esm2017"),An("fire-js","")}TA("");var IA="firebase",kA="10.14.1";/**
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
 */An(IA,kA,"app");var hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ys,iw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function w(){}w.prototype=v.prototype,E.D=v.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(I,S,N){for(var x=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)x[Se-2]=arguments[Se];return v.prototype[S].apply(I,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,v,w){w||(w=0);var I=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)I[S]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(S=0;16>S;++S)I[S]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=E.g[0],w=E.g[1],S=E.g[2];var N=E.g[3],x=v+(N^w&(S^N))+I[0]+3614090360&4294967295;v=w+(x<<7&4294967295|x>>>25),x=N+(S^v&(w^S))+I[1]+3905402710&4294967295,N=v+(x<<12&4294967295|x>>>20),x=S+(w^N&(v^w))+I[2]+606105819&4294967295,S=N+(x<<17&4294967295|x>>>15),x=w+(v^S&(N^v))+I[3]+3250441966&4294967295,w=S+(x<<22&4294967295|x>>>10),x=v+(N^w&(S^N))+I[4]+4118548399&4294967295,v=w+(x<<7&4294967295|x>>>25),x=N+(S^v&(w^S))+I[5]+1200080426&4294967295,N=v+(x<<12&4294967295|x>>>20),x=S+(w^N&(v^w))+I[6]+2821735955&4294967295,S=N+(x<<17&4294967295|x>>>15),x=w+(v^S&(N^v))+I[7]+4249261313&4294967295,w=S+(x<<22&4294967295|x>>>10),x=v+(N^w&(S^N))+I[8]+1770035416&4294967295,v=w+(x<<7&4294967295|x>>>25),x=N+(S^v&(w^S))+I[9]+2336552879&4294967295,N=v+(x<<12&4294967295|x>>>20),x=S+(w^N&(v^w))+I[10]+4294925233&4294967295,S=N+(x<<17&4294967295|x>>>15),x=w+(v^S&(N^v))+I[11]+2304563134&4294967295,w=S+(x<<22&4294967295|x>>>10),x=v+(N^w&(S^N))+I[12]+1804603682&4294967295,v=w+(x<<7&4294967295|x>>>25),x=N+(S^v&(w^S))+I[13]+4254626195&4294967295,N=v+(x<<12&4294967295|x>>>20),x=S+(w^N&(v^w))+I[14]+2792965006&4294967295,S=N+(x<<17&4294967295|x>>>15),x=w+(v^S&(N^v))+I[15]+1236535329&4294967295,w=S+(x<<22&4294967295|x>>>10),x=v+(S^N&(w^S))+I[1]+4129170786&4294967295,v=w+(x<<5&4294967295|x>>>27),x=N+(w^S&(v^w))+I[6]+3225465664&4294967295,N=v+(x<<9&4294967295|x>>>23),x=S+(v^w&(N^v))+I[11]+643717713&4294967295,S=N+(x<<14&4294967295|x>>>18),x=w+(N^v&(S^N))+I[0]+3921069994&4294967295,w=S+(x<<20&4294967295|x>>>12),x=v+(S^N&(w^S))+I[5]+3593408605&4294967295,v=w+(x<<5&4294967295|x>>>27),x=N+(w^S&(v^w))+I[10]+38016083&4294967295,N=v+(x<<9&4294967295|x>>>23),x=S+(v^w&(N^v))+I[15]+3634488961&4294967295,S=N+(x<<14&4294967295|x>>>18),x=w+(N^v&(S^N))+I[4]+3889429448&4294967295,w=S+(x<<20&4294967295|x>>>12),x=v+(S^N&(w^S))+I[9]+568446438&4294967295,v=w+(x<<5&4294967295|x>>>27),x=N+(w^S&(v^w))+I[14]+3275163606&4294967295,N=v+(x<<9&4294967295|x>>>23),x=S+(v^w&(N^v))+I[3]+4107603335&4294967295,S=N+(x<<14&4294967295|x>>>18),x=w+(N^v&(S^N))+I[8]+1163531501&4294967295,w=S+(x<<20&4294967295|x>>>12),x=v+(S^N&(w^S))+I[13]+2850285829&4294967295,v=w+(x<<5&4294967295|x>>>27),x=N+(w^S&(v^w))+I[2]+4243563512&4294967295,N=v+(x<<9&4294967295|x>>>23),x=S+(v^w&(N^v))+I[7]+1735328473&4294967295,S=N+(x<<14&4294967295|x>>>18),x=w+(N^v&(S^N))+I[12]+2368359562&4294967295,w=S+(x<<20&4294967295|x>>>12),x=v+(w^S^N)+I[5]+4294588738&4294967295,v=w+(x<<4&4294967295|x>>>28),x=N+(v^w^S)+I[8]+2272392833&4294967295,N=v+(x<<11&4294967295|x>>>21),x=S+(N^v^w)+I[11]+1839030562&4294967295,S=N+(x<<16&4294967295|x>>>16),x=w+(S^N^v)+I[14]+4259657740&4294967295,w=S+(x<<23&4294967295|x>>>9),x=v+(w^S^N)+I[1]+2763975236&4294967295,v=w+(x<<4&4294967295|x>>>28),x=N+(v^w^S)+I[4]+1272893353&4294967295,N=v+(x<<11&4294967295|x>>>21),x=S+(N^v^w)+I[7]+4139469664&4294967295,S=N+(x<<16&4294967295|x>>>16),x=w+(S^N^v)+I[10]+3200236656&4294967295,w=S+(x<<23&4294967295|x>>>9),x=v+(w^S^N)+I[13]+681279174&4294967295,v=w+(x<<4&4294967295|x>>>28),x=N+(v^w^S)+I[0]+3936430074&4294967295,N=v+(x<<11&4294967295|x>>>21),x=S+(N^v^w)+I[3]+3572445317&4294967295,S=N+(x<<16&4294967295|x>>>16),x=w+(S^N^v)+I[6]+76029189&4294967295,w=S+(x<<23&4294967295|x>>>9),x=v+(w^S^N)+I[9]+3654602809&4294967295,v=w+(x<<4&4294967295|x>>>28),x=N+(v^w^S)+I[12]+3873151461&4294967295,N=v+(x<<11&4294967295|x>>>21),x=S+(N^v^w)+I[15]+530742520&4294967295,S=N+(x<<16&4294967295|x>>>16),x=w+(S^N^v)+I[2]+3299628645&4294967295,w=S+(x<<23&4294967295|x>>>9),x=v+(S^(w|~N))+I[0]+4096336452&4294967295,v=w+(x<<6&4294967295|x>>>26),x=N+(w^(v|~S))+I[7]+1126891415&4294967295,N=v+(x<<10&4294967295|x>>>22),x=S+(v^(N|~w))+I[14]+2878612391&4294967295,S=N+(x<<15&4294967295|x>>>17),x=w+(N^(S|~v))+I[5]+4237533241&4294967295,w=S+(x<<21&4294967295|x>>>11),x=v+(S^(w|~N))+I[12]+1700485571&4294967295,v=w+(x<<6&4294967295|x>>>26),x=N+(w^(v|~S))+I[3]+2399980690&4294967295,N=v+(x<<10&4294967295|x>>>22),x=S+(v^(N|~w))+I[10]+4293915773&4294967295,S=N+(x<<15&4294967295|x>>>17),x=w+(N^(S|~v))+I[1]+2240044497&4294967295,w=S+(x<<21&4294967295|x>>>11),x=v+(S^(w|~N))+I[8]+1873313359&4294967295,v=w+(x<<6&4294967295|x>>>26),x=N+(w^(v|~S))+I[15]+4264355552&4294967295,N=v+(x<<10&4294967295|x>>>22),x=S+(v^(N|~w))+I[6]+2734768916&4294967295,S=N+(x<<15&4294967295|x>>>17),x=w+(N^(S|~v))+I[13]+1309151649&4294967295,w=S+(x<<21&4294967295|x>>>11),x=v+(S^(w|~N))+I[4]+4149444226&4294967295,v=w+(x<<6&4294967295|x>>>26),x=N+(w^(v|~S))+I[11]+3174756917&4294967295,N=v+(x<<10&4294967295|x>>>22),x=S+(v^(N|~w))+I[2]+718787259&4294967295,S=N+(x<<15&4294967295|x>>>17),x=w+(N^(S|~v))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(S+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+S&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var w=v-this.blockSize,I=this.B,S=this.h,N=0;N<v;){if(S==0)for(;N<=w;)s(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<v;)if(I[S++]=E.charCodeAt(N++),S==this.blockSize){s(this,I),S=0;break}}else for(;N<v;)if(I[S++]=E[N++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var w=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=w&255,w/=256;for(this.u(E),E=Array(16),v=w=0;4>v;++v)for(var I=0;32>I;I+=8)E[w++]=this.g[v]>>>I&255;return E};function i(E,v){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=v(E)}function o(E,v){this.h=v;for(var w=[],I=!0,S=E.length-1;0<=S;S--){var N=E[S]|0;I&&N==v||(w[S]=N,I=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?i(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return b(d(-E));for(var v=[],w=1,I=0;E>=w;I++)v[I]=E/w|0,w*=4294967296;return new o(v,0)}function p(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return b(p(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(v,8)),I=m,S=0;S<E.length;S+=8){var N=Math.min(8,E.length-S),x=parseInt(E.substring(S,S+N),v);8>N?(N=d(Math.pow(v,N)),I=I.j(N).add(d(x))):(I=I.j(w),I=I.add(d(x)))}return I}var m=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-b(this).m();for(var E=0,v=1,w=0;w<this.g.length;w++){var I=this.i(w);E+=(0<=I?I:4294967296+I)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(C(this))return"-"+b(this).toString(E);for(var v=d(Math.pow(E,6)),w=this,I="";;){var S=O(w,v).g;w=T(w,S.j(v));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=S,R(w))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function C(E){return E.h==-1}t.l=function(E){return E=T(this,E),C(E)?-1:R(E)?0:1};function b(E){for(var v=E.g.length,w=[],I=0;I<v;I++)w[I]=~E.g[I];return new o(w,~E.h).add(g)}t.abs=function(){return C(this)?b(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0,S=0;S<=v;S++){var N=I+(this.i(S)&65535)+(E.i(S)&65535),x=(N>>>16)+(this.i(S)>>>16)+(E.i(S)>>>16);I=x>>>16,N&=65535,x&=65535,w[S]=x<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(E,v){return E.add(b(v))}t.j=function(E){if(R(this)||R(E))return m;if(C(this))return C(E)?b(this).j(b(E)):b(b(this).j(E));if(C(E))return b(this.j(b(E)));if(0>this.l(A)&&0>E.l(A))return d(this.m()*E.m());for(var v=this.g.length+E.g.length,w=[],I=0;I<2*v;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<E.g.length;S++){var N=this.i(I)>>>16,x=this.i(I)&65535,Se=E.i(S)>>>16,H=E.i(S)&65535;w[2*I+2*S]+=x*H,_(w,2*I+2*S),w[2*I+2*S+1]+=N*H,_(w,2*I+2*S+1),w[2*I+2*S+1]+=x*Se,_(w,2*I+2*S+1),w[2*I+2*S+2]+=N*Se,_(w,2*I+2*S+2)}for(I=0;I<v;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=v;I<2*v;I++)w[I]=0;return new o(w,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function k(E,v){this.g=E,this.h=v}function O(E,v){if(R(v))throw Error("division by zero");if(R(E))return new k(m,m);if(C(E))return v=O(b(E),v),new k(b(v.g),b(v.h));if(C(v))return v=O(E,b(v)),new k(b(v.g),v.h);if(30<E.g.length){if(C(E)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,I=v;0>=I.l(E);)w=U(w),I=U(I);var S=B(w,1),N=B(I,1);for(I=B(I,2),w=B(w,2);!R(I);){var x=N.add(I);0>=x.l(E)&&(S=S.add(w),N=x),I=B(I,1),w=B(w,1)}return v=T(E,S.j(v)),new k(S,v)}for(S=m;0<=E.l(v);){for(w=Math.max(1,Math.floor(E.m()/v.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=d(w),x=N.j(v);C(x)||0<x.l(E);)w-=I,N=d(w),x=N.j(v);R(N)&&(N=g),S=S.add(N),E=T(E,x)}return new k(S,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)&E.i(I);return new o(w,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)|E.i(I);return new o(w,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)^E.i(I);return new o(w,this.h^E.h)};function U(E){for(var v=E.g.length+1,w=[],I=0;I<v;I++)w[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(w,E.h)}function B(E,v){var w=v>>5;v%=32;for(var I=E.g.length-w,S=[],N=0;N<I;N++)S[N]=0<v?E.i(N+w)>>>v|E.i(N+w+1)<<32-v:E.i(N+w);return new o(S,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,ys=o}).apply(typeof hy<"u"?hy:typeof self<"u"?self:typeof window<"u"?window:{});var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ow,go,aw,Pl,Th,lw,uw,cw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hl=="object"&&hl];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var D=a[y];if(!(D in f))break e;f=f[D]}a=a[a.length-1],y=f[a],c=c(y),c!=y&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var f=0,y=!1,D={next:function(){if(!y&&f<a.length){var q=f++;return{value:c(q,a[q]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function m(a,c,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),a.apply(c,D)}}return function(){return a.apply(c,arguments)}}function g(a,c,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function A(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function R(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,D,q){for(var W=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)W[Te-2]=arguments[Te];return c.prototype[D].apply(y,W)}}function C(a){const c=a.length;if(0<c){const f=Array(c);for(let y=0;y<c;y++)f[y]=a[y];return f}return[]}function b(a,c){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const D=a.length||0,q=y.length||0;a.length=D+q;for(let W=0;W<q;W++)a[D+W]=y[W]}else a.push(y)}}class T{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var U=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function B(a,c,f){for(const y in a)c.call(f,a[y],y,a)}function E(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function v(a){const c={};for(const f in a)c[f]=a[f];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let f,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(f in y)a[f]=y[f];for(let q=0;q<w.length;q++)f=w[q],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function S(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function x(){var a=Z;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Se{constructor(){this.h=this.g=null}add(c,f){const y=H.get();y.set(c,f),this.h?this.h.next=y:this.g=y,this.h=y}}var H=new T(()=>new pe,a=>a.reset());class pe{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let he,$=!1,Z=new Se,re=()=>{const a=l.Promise.resolve(void 0);he=()=>{a.then(ye)}};var ye=()=>{for(var a;a=x();){try{a.h.call(a.g)}catch(f){N(f)}var c=H;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function ke(a,c){if(K.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{O(c.nodeName);var D=!0;break e}catch{}D=!1}D||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Le[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ke.aa.h.call(this)}}R(ke,K);var Le={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Tt="closure_listenable_"+(1e6*Math.random()|0),Ls=0;function Xr(a,c,f,y,D){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!y,this.ha=D,this.key=++Ls,this.da=this.fa=!1}function Pt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ut(a){this.src=a,this.g={},this.h=0}Ut.prototype.add=function(a,c,f,y,D){var q=a.toString();a=this.g[q],a||(a=this.g[q]=[],this.h++);var W=or(a,c,y,D);return-1<W?(c=a[W],f||(c.fa=!1)):(c=new Xr(c,this.src,q,!!y,D),c.fa=f,a.push(c)),c};function _n(a,c){var f=c.type;if(f in a.g){var y=a.g[f],D=Array.prototype.indexOf.call(y,c,void 0),q;(q=0<=D)&&Array.prototype.splice.call(y,D,1),q&&(Pt(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function or(a,c,f,y){for(var D=0;D<a.length;++D){var q=a[D];if(!q.da&&q.listener==c&&q.capture==!!f&&q.ha==y)return D}return-1}var ar="closure_lm_"+(1e6*Math.random()|0),lr={};function Jr(a,c,f,y,D){if(Array.isArray(c)){for(var q=0;q<c.length;q++)Jr(a,c[q],f,y,D);return null}return f=P(f),a&&a[Tt]?a.K(c,f,d(y)?!!y.capture:!1,D):Mi(a,c,f,!1,y,D)}function Mi(a,c,f,y,D,q){if(!c)throw Error("Invalid event type");var W=d(D)?!!D.capture:!!D,Te=V(a);if(Te||(a[ar]=Te=new Ut(a)),f=Te.add(c,f,y,W,q),f.proxy)return f;if(y=Vs(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)me||(D=W),D===void 0&&(D=!1),a.addEventListener(c.toString(),y,D);else if(a.attachEvent)a.attachEvent(es(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Vs(){function a(f){return c.call(a.src,a.listener,f)}const c=Ms;return a}function ur(a,c,f,y,D){if(Array.isArray(c))for(var q=0;q<c.length;q++)ur(a,c[q],f,y,D);else y=d(y)?!!y.capture:!!y,f=P(f),a&&a[Tt]?(a=a.i,c=String(c).toString(),c in a.g&&(q=a.g[c],f=or(q,f,y,D),-1<f&&(Pt(q[f]),Array.prototype.splice.call(q,f,1),q.length==0&&(delete a.g[c],a.h--)))):a&&(a=V(a))&&(c=a.g[c.toString()],a=-1,c&&(a=or(c,f,y,D)),(f=-1<a?c[a]:null)&&Zr(f))}function Zr(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Tt])_n(c.i,a);else{var f=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(f,y,a.capture):c.detachEvent?c.detachEvent(es(f),y):c.addListener&&c.removeListener&&c.removeListener(y),(f=V(c))?(_n(f,a),f.h==0&&(f.src=null,c[ar]=null)):Pt(a)}}}function es(a){return a in lr?lr[a]:lr[a]="on"+a}function Ms(a,c){if(a.da)a=!0;else{c=new ke(c,this);var f=a.listener,y=a.ha||a.src;a.fa&&Zr(a),a=f.call(y,c)}return a}function V(a){return a=a[ar],a instanceof Ut?a:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function P(a){return typeof a=="function"?a:(a[Y]||(a[Y]=function(c){return a.handleEvent(c)}),a[Y])}function L(){ue.call(this),this.i=new Ut(this),this.M=this,this.F=null}R(L,ue),L.prototype[Tt]=!0,L.prototype.removeEventListener=function(a,c,f,y){ur(this,a,c,f,y)};function X(a,c){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new K(c,a);else if(c instanceof K)c.target=c.target||a;else{var D=c;c=new K(y,a),I(c,D)}if(D=!0,f)for(var q=f.length-1;0<=q;q--){var W=c.g=f[q];D=xe(W,y,!0,c)&&D}if(W=c.g=a,D=xe(W,y,!0,c)&&D,D=xe(W,y,!1,c)&&D,f)for(q=0;q<f.length;q++)W=c.g=f[q],D=xe(W,y,!1,c)&&D}L.prototype.N=function(){if(L.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],y=0;y<f.length;y++)Pt(f[y]);delete a.g[c],a.h--}}this.F=null},L.prototype.K=function(a,c,f,y){return this.i.add(String(a),c,!1,f,y)},L.prototype.L=function(a,c,f,y){return this.i.add(String(a),c,!0,f,y)};function xe(a,c,f,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var D=!0,q=0;q<c.length;++q){var W=c[q];if(W&&!W.da&&W.capture==f){var Te=W.listener,nt=W.ha||W.src;W.fa&&_n(a.i,W),D=Te.call(nt,y)!==!1&&D}}return D&&!y.defaultPrevented}function Ve(a,c,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Me(a){a.g=Ve(()=>{a.g=null,a.i&&(a.i=!1,Me(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Dt extends ue{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Me(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(a){ue.call(this),this.h=a,this.g={}}R($e,ue);var dt=[];function On(a){B(a.g,function(c,f){this.g.hasOwnProperty(f)&&Zr(c)},a),a.g={}}$e.prototype.N=function(){$e.aa.N.call(this),On(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ts=l.JSON.stringify,Ui=l.JSON.parse,vc=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function _c(){}_c.prototype.h=null;function Gp(a){return a.h||(a.h=a.i())}function Qp(){}var Fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wc(){K.call(this,"d")}R(wc,K);function Ec(){K.call(this,"c")}R(Ec,K);var ns={},Yp=null;function Oa(){return Yp=Yp||new L}ns.La="serverreachability";function Xp(a){K.call(this,ns.La,a)}R(Xp,K);function zi(a){const c=Oa();X(c,new Xp(c))}ns.STAT_EVENT="statevent";function Jp(a,c){K.call(this,ns.STAT_EVENT,a),this.stat=c}R(Jp,K);function It(a){const c=Oa();X(c,new Jp(c,a))}ns.Ma="timingevent";function Zp(a,c){K.call(this,ns.Ma,a),this.size=c}R(Zp,K);function Bi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function Sx(a,c,f,y,D,q){a.info(function(){if(a.g)if(q)for(var W="",Te=q.split("&"),nt=0;nt<Te.length;nt++){var ve=Te[nt].split("=");if(1<ve.length){var ht=ve[0];ve=ve[1];var ft=ht.split("_");W=2<=ft.length&&ft[1]=="type"?W+(ht+"="+ve+"&"):W+(ht+"=redacted&")}}else W=null;else W=q;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+c+`
`+f+`
`+W})}function bx(a,c,f,y,D,q,W){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+c+`
`+f+`
`+q+" "+W})}function Us(a,c,f,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Cx(a,f)+(y?" "+y:"")})}function Rx(a,c){a.info(function(){return"TIMEOUT: "+c})}$i.prototype.info=function(){};function Cx(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var q=D[0];if(q!="noop"&&q!="stop"&&q!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return ts(f)}catch{return c}}var qa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},em={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xc;function ja(){}R(ja,_c),ja.prototype.g=function(){return new XMLHttpRequest},ja.prototype.i=function(){return{}},xc=new ja;function cr(a,c,f,y){this.j=a,this.i=c,this.l=f,this.R=y||1,this.U=new $e(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tm}function tm(){this.i=null,this.g="",this.h=!1}var nm={},Tc={};function Ic(a,c,f){a.L=1,a.v=Ua(qn(c)),a.m=f,a.P=!0,rm(a,null)}function rm(a,c){a.F=Date.now(),La(a),a.A=qn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),ym(f.i,"t",y),a.C=0,f=a.j.J,a.h=new tm,a.g=qm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new Dt(g(a.Y,a,a.g),a.O)),c=a.U,f=a.g,y=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(dt[0]=D.toString()),D=dt);for(var q=0;q<D.length;q++){var W=Jr(f,D[q],y||c.handleEvent,!1,c.h||c);if(!W)break;c.g[W.key]=W}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),zi(),Sx(a.i,a.u,a.A,a.l,a.R,a.m)}cr.prototype.ca=function(a){a=a.target;const c=this.M;c&&jn(a)==3?c.j():this.Y(a)},cr.prototype.Y=function(a){try{if(a==this.g)e:{const ft=jn(this.g);var c=this.g.Ba();const Bs=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Im(this.g)))){this.J||ft!=4||c==7||(c==8||0>=Bs?zi(3):zi(2)),kc(this);var f=this.g.Z();this.X=f;t:if(sm(this)){var y=Im(this.g);a="";var D=y.length,q=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),Wi(this);var W="";break t}this.h.i=new l.TextDecoder}for(c=0;c<D;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(q&&c==D-1)});y.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,bx(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,nt=this.g;if((Te=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Te)){var ve=Te;break t}}ve=null}if(f=ve)Us(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ac(this,f);else{this.o=!1,this.s=3,It(12),rs(this),Wi(this);break e}}if(this.P){f=!0;let ln;for(;!this.J&&this.C<W.length;)if(ln=Nx(this,W),ln==Tc){ft==4&&(this.s=4,It(14),f=!1),Us(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==nm){this.s=4,It(15),Us(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else Us(this.i,this.l,ln,null),Ac(this,ln);if(sm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||W.length!=0||this.h.h||(this.s=1,It(16),f=!1),this.o=this.o&&f,!f)Us(this.i,this.l,W,"[Invalid Chunked Response]"),rs(this),Wi(this);else if(0<W.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Pc(ht),ht.M=!0,It(11))}}else Us(this.i,this.l,W,null),Ac(this,W);ft==4&&rs(this),this.o&&!this.J&&(ft==4?Nm(this.j,this):(this.o=!1,La(this)))}else Gx(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),rs(this),Wi(this)}}}catch{}finally{}};function sm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Nx(a,c){var f=a.C,y=c.indexOf(`
`,f);return y==-1?Tc:(f=Number(c.substring(f,y)),isNaN(f)?nm:(y+=1,y+f>c.length?Tc:(c=c.slice(y,y+f),a.C=y+f,c)))}cr.prototype.cancel=function(){this.J=!0,rs(this)};function La(a){a.S=Date.now()+a.I,im(a,a.I)}function im(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bi(g(a.ba,a),c)}function kc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}cr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Rx(this.i,this.A),this.L!=2&&(zi(),It(17)),rs(this),this.s=2,Wi(this)):im(this,this.S-a)};function Wi(a){a.j.G==0||a.J||Nm(a.j,a)}function rs(a){kc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,On(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ac(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||Sc(f.h,a))){if(!a.K&&Sc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ha(f),$a(f);else break e;Nc(f),It(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=Bi(g(f.Za,f),6e3));if(1>=lm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else is(f,11)}else if((a.K||f.g==a)&&Ha(f),!_(c))for(D=f.Da.g.parse(c),c=0;c<D.length;c++){let ve=D[c];if(f.T=ve[0],ve=ve[1],f.G==2)if(ve[0]=="c"){f.K=ve[1],f.ia=ve[2];const ht=ve[3];ht!=null&&(f.la=ht,f.j.info("VER="+f.la));const ft=ve[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const Bs=ve[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(y=1.5*Bs,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const ln=a.g;if(ln){const Ga=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ga){var q=y.h;q.g||Ga.indexOf("spdy")==-1&&Ga.indexOf("quic")==-1&&Ga.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(bc(q,q.h),q.h=null))}if(y.D){const Dc=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Dc&&(y.ya=Dc,be(y.I,y.D,Dc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var W=a;if(y.qa=Om(y,y.J?y.ia:null,y.W),W.K){um(y.h,W);var Te=W,nt=y.L;nt&&(Te.I=nt),Te.B&&(kc(Te),La(Te)),y.g=W}else Rm(y);0<f.i.length&&Wa(f)}else ve[0]!="stop"&&ve[0]!="close"||is(f,7);else f.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?is(f,7):Cc(f):ve[0]!="noop"&&f.l&&f.l.ta(ve),f.v=0)}}zi(4)}catch{}}var Px=class{constructor(a,c){this.g=a,this.map=c}};function om(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function am(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function lm(a){return a.h?1:a.g?a.g.size:0}function Sc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function bc(a,c){a.g?a.g.add(c):a.h=c}function um(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}om.prototype.cancel=function(){if(this.i=cm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function cm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return C(a.i)}function Dx(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,y=0;y<f;y++)c.push(a[y]);return c}c=[],f=0;for(y in a)c[f++]=a[y];return c}function Ox(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const y in a)c[f++]=y;return c}}}function dm(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=Ox(a),y=Dx(a),D=y.length,q=0;q<D;q++)c.call(void 0,y[q],f&&f[q],a)}var hm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qx(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),D=null;if(0<=y){var q=a[f].substring(0,y);D=a[f].substring(y+1)}else q=a[f];c(q,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ss(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ss){this.h=a.h,Va(this,a.j),this.o=a.o,this.g=a.g,Ma(this,a.s),this.l=a.l;var c=a.i,f=new Gi;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),fm(this,f),this.m=a.m}else a&&(c=String(a).match(hm))?(this.h=!1,Va(this,c[1]||"",!0),this.o=Hi(c[2]||""),this.g=Hi(c[3]||"",!0),Ma(this,c[4]),this.l=Hi(c[5]||"",!0),fm(this,c[6]||"",!0),this.m=Hi(c[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}ss.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ki(c,pm,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ki(c,pm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ki(f,f.charAt(0)=="/"?Vx:Lx,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ki(f,Ux)),a.join("")};function qn(a){return new ss(a)}function Va(a,c,f){a.j=f?Hi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ma(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function fm(a,c,f){c instanceof Gi?(a.i=c,Fx(a.i,a.h)):(f||(c=Ki(c,Mx)),a.i=new Gi(c,a.h))}function be(a,c,f){a.i.set(c,f)}function Ua(a){return be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Hi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ki(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,jx),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pm=/[#\/\?@]/g,Lx=/[#\?:]/g,Vx=/[#\?]/g,Mx=/[#\?@]/g,Ux=/#/g;function Gi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function dr(a){a.g||(a.g=new Map,a.h=0,a.i&&qx(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=Gi.prototype,t.add=function(a,c){dr(this),this.i=null,a=Fs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function mm(a,c){dr(a),c=Fs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function gm(a,c){return dr(a),c=Fs(a,c),a.g.has(c)}t.forEach=function(a,c){dr(this),this.g.forEach(function(f,y){f.forEach(function(D){a.call(c,D,y,this)},this)},this)},t.na=function(){dr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let y=0;y<c.length;y++){const D=a[y];for(let q=0;q<D.length;q++)f.push(c[y])}return f},t.V=function(a){dr(this);let c=[];if(typeof a=="string")gm(this,a)&&(c=c.concat(this.g.get(Fs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return dr(this),this.i=null,a=Fs(this,a),gm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function ym(a,c,f){mm(a,c),0<f.length&&(a.i=null,a.g.set(Fs(a,c),C(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var y=c[f];const q=encodeURIComponent(String(y)),W=this.V(y);for(y=0;y<W.length;y++){var D=q;W[y]!==""&&(D+="="+encodeURIComponent(String(W[y]))),a.push(D)}}return this.i=a.join("&")};function Fs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Fx(a,c){c&&!a.j&&(dr(a),a.i=null,a.g.forEach(function(f,y){var D=y.toLowerCase();y!=D&&(mm(this,y),ym(this,D,f))},a)),a.j=c}function zx(a,c){const f=new $i;if(l.Image){const y=new Image;y.onload=A(hr,f,"TestLoadImage: loaded",!0,c,y),y.onerror=A(hr,f,"TestLoadImage: error",!1,c,y),y.onabort=A(hr,f,"TestLoadImage: abort",!1,c,y),y.ontimeout=A(hr,f,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function Bx(a,c){const f=new $i,y=new AbortController,D=setTimeout(()=>{y.abort(),hr(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(q=>{clearTimeout(D),q.ok?hr(f,"TestPingServer: ok",!0,c):hr(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(D),hr(f,"TestPingServer: error",!1,c)})}function hr(a,c,f,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(f)}catch{}}function $x(){this.g=new vc}function Wx(a,c,f){const y=f||"";try{dm(a,function(D,q){let W=D;d(D)&&(W=ts(D)),c.push(y+q+"="+encodeURIComponent(W))})}catch(D){throw c.push(y+"type="+encodeURIComponent("_badmap")),D}}function Fa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Fa,_c),Fa.prototype.g=function(){return new za(this.l,this.j)},Fa.prototype.i=function(a){return function(){return a}}({});function za(a,c){L.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(za,L),t=za.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Yi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function vm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Qi(this):Yi(this),this.readyState==3&&vm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qi(this))},t.Qa=function(a){this.g&&(this.response=a,Qi(this))},t.ga=function(){this.g&&Qi(this)};function Qi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Yi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function Yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _m(a){let c="";return B(a,function(f,y){c+=y,c+=":",c+=f,c+=`\r
`}),c}function Rc(a,c,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=_m(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):be(a,c,f))}function Ue(a){L.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ue,L);var Hx=/^https?$/i,Kx=["POST","PUT"];t=Ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xc.g(),this.v=this.o?Gp(this.o):Gp(xc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(q){wm(this,q);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)f.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const q of y.keys())f.set(q,y.get(q));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(q=>q.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Kx,c,void 0))||y||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,W]of f)this.g.setRequestHeader(q,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tm(this),this.u=!0,this.g.send(a),this.u=!1}catch(q){wm(this,q)}};function wm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Em(a),Ba(a)}function Em(a){a.A||(a.A=!0,X(a,"complete"),X(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,X(this,"complete"),X(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xm(this):this.bb())},t.bb=function(){xm(this)};function xm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||jn(a)!=4||a.Z()!=2)){if(a.u&&jn(a)==4)Ve(a.Ea,0,a);else if(X(a,"readystatechange"),jn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var y;if(y=W===0){var D=String(a.D).match(hm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),y=!Hx.test(D?D.toLowerCase():"")}f=y}if(f)X(a,"complete"),X(a,"success");else{a.m=6;try{var q=2<jn(a)?a.g.statusText:""}catch{q=""}a.l=q+" ["+a.Z()+"]",Em(a)}}finally{Ba(a)}}}}function Ba(a,c){if(a.g){Tm(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||X(a,"ready");try{f.onreadystatechange=y}catch{}}}function Tm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ui(c)}};function Im(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Gx(a){const c={};a=(a.g&&2<=jn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var f=S(a[y]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const q=c[D]||[];c[D]=q,q.push(f)}E(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xi(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function km(a){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xi("baseRetryDelayMs",5e3,a),this.cb=Xi("retryDelaySeedMs",1e4,a),this.Wa=Xi("forwardChannelMaxRetries",2,a),this.wa=Xi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new om(a&&a.concurrentRequestLimit),this.Da=new $x,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=km.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,y){It(0),this.W=a,this.H=c||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Om(this,null,this.W),Wa(this)};function Cc(a){if(Am(a),a.G==3){var c=a.U++,f=qn(a.I);if(be(f,"SID",a.K),be(f,"RID",c),be(f,"TYPE","terminate"),Ji(a,f),c=new cr(a,a.j,c),c.L=2,c.v=Ua(qn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=qm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),La(c)}Dm(a)}function $a(a){a.g&&(Pc(a),a.g.cancel(),a.g=null)}function Am(a){$a(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ha(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Wa(a){if(!am(a.h)&&!a.s){a.s=!0;var c=a.Ga;he||re(),$||(he(),$=!0),Z.add(c,a),a.B=0}}function Qx(a,c){return lm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bi(g(a.Ga,a,c),Pm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new cr(this,this.j,a);let q=this.o;if(this.S&&(q?(q=v(q),I(q,this.S)):q=this.S),this.m!==null||this.O||(D.H=q,q=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=bm(this,D,c),f=qn(this.I),be(f,"RID",a),be(f,"CVER",22),this.D&&be(f,"X-HTTP-Session-Id",this.D),Ji(this,f),q&&(this.O?c="headers="+encodeURIComponent(String(_m(q)))+"&"+c:this.m&&Rc(f,this.m,q)),bc(this.h,D),this.Ua&&be(f,"TYPE","init"),this.P?(be(f,"$req",c),be(f,"SID","null"),D.T=!0,Ic(D,f,null)):Ic(D,f,c),this.G=2}}else this.G==3&&(a?Sm(this,a):this.i.length==0||am(this.h)||Sm(this))};function Sm(a,c){var f;c?f=c.l:f=a.U++;const y=qn(a.I);be(y,"SID",a.K),be(y,"RID",f),be(y,"AID",a.T),Ji(a,y),a.m&&a.o&&Rc(y,a.m,a.o),f=new cr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=bm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),bc(a.h,f),Ic(f,y,c)}function Ji(a,c){a.H&&B(a.H,function(f,y){be(c,y,f)}),a.l&&dm({},function(f,y){be(c,y,f)})}function bm(a,c,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let q=-1;for(;;){const W=["count="+f];q==-1?0<f?(q=D[0].g,W.push("ofs="+q)):q=0:W.push("ofs="+q);let Te=!0;for(let nt=0;nt<f;nt++){let ve=D[nt].g;const ht=D[nt].map;if(ve-=q,0>ve)q=Math.max(0,D[nt].g-100),Te=!1;else try{Wx(ht,W,"req"+ve+"_")}catch{y&&y(ht)}}if(Te){y=W.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,y}function Rm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;he||re(),$||(he(),$=!0),Z.add(c,a),a.v=0}}function Nc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bi(g(a.Fa,a),Pm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),$a(this),Cm(this))};function Pc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cm(a){a.g=new cr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=qn(a.qa);be(c,"RID","rpc"),be(c,"SID",a.K),be(c,"AID",a.T),be(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&be(c,"TO",a.ja),be(c,"TYPE","xmlhttp"),Ji(a,c),a.m&&a.o&&Rc(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ua(qn(c)),f.m=null,f.P=!0,rm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,$a(this),Nc(this),It(19))};function Ha(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Nm(a,c){var f=null;if(a.g==c){Ha(a),Pc(a),a.g=null;var y=2}else if(Sc(a.h,c))f=c.D,um(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var D=a.B;y=Oa(),X(y,new Zp(y,f)),Wa(a)}else Rm(a);else if(D=c.s,D==3||D==0&&0<c.X||!(y==1&&Qx(a,c)||y==2&&Nc(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),D){case 1:is(a,5);break;case 4:is(a,10);break;case 3:is(a,6);break;default:is(a,2)}}}function Pm(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function is(a,c){if(a.j.info("Error code "+c),c==2){var f=g(a.fb,a),y=a.Xa;const D=!y;y=new ss(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Va(y,"https"),Ua(y),D?zx(y.toString(),f):Bx(y.toString(),f)}else It(2);a.G=0,a.l&&a.l.sa(c),Dm(a),Am(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Dm(a){if(a.G=0,a.ka=[],a.l){const c=cm(a.h);(c.length!=0||a.i.length!=0)&&(b(a.ka,c),b(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Om(a,c,f){var y=f instanceof ss?qn(f):new ss(f);if(y.g!="")c&&(y.g=c+"."+y.g),Ma(y,y.s);else{var D=l.location;y=D.protocol,c=c?c+"."+D.hostname:D.hostname,D=+D.port;var q=new ss(null);y&&Va(q,y),c&&(q.g=c),D&&Ma(q,D),f&&(q.l=f),y=q}return f=a.D,c=a.ya,f&&c&&be(y,f,c),be(y,"VER",a.la),Ji(a,y),y}function qm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ue(new Fa({eb:f})):new Ue(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jm(){}t=jm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ka(){}Ka.prototype.g=function(a,c){return new Ft(a,c)};function Ft(a,c){L.call(this),this.g=new km(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new zs(this)}R(Ft,L),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Cc(this.g)},Ft.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ts(a),a=f);c.i.push(new Px(c.Ya++,a)),c.G==3&&Wa(c)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Cc(this.g),delete this.g,Ft.aa.N.call(this)};function Lm(a){wc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Lm,wc);function Vm(){Ec.call(this),this.status=1}R(Vm,Ec);function zs(a){this.g=a}R(zs,jm),zs.prototype.ua=function(){X(this.g,"a")},zs.prototype.ta=function(a){X(this.g,new Lm(a))},zs.prototype.sa=function(a){X(this.g,new Vm)},zs.prototype.ra=function(){X(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,cw=function(){return new Ka},uw=function(){return Oa()},lw=ns,Th={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qa.NO_ERROR=0,qa.TIMEOUT=8,qa.HTTP_ERROR=6,Pl=qa,em.COMPLETE="complete",aw=em,Qp.EventType=Fi,Fi.OPEN="a",Fi.CLOSE="b",Fi.ERROR="c",Fi.MESSAGE="d",L.prototype.listen=L.prototype.K,go=Qp,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,ow=Ue}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});const fy="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Oi="10.14.0";/**
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
 */const ks=new Ff("@firebase/firestore");function ao(){return ks.logLevel}function J(t,...e){if(ks.logLevel<=de.DEBUG){const n=e.map($f);ks.debug(`Firestore (${Oi}): ${t}`,...n)}}function Zn(t,...e){if(ks.logLevel<=de.ERROR){const n=e.map($f);ks.error(`Firestore (${Oi}): ${t}`,...n)}}function Ti(t,...e){if(ks.logLevel<=de.WARN){const n=e.map($f);ks.warn(`Firestore (${Oi}): ${t}`,...n)}}function $f(t){if(typeof t=="string")return t;try{/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function Ee(t,e){t||ie()}function ae(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class SA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bA{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new dw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new yt(e)}}class RA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new RA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ee(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new NA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function DA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class hw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=DA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Ii(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Je(0,0))}static max(){return new oe(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends ta{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const OA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ta{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return OA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new G(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ce.fromString(e))}static fromName(e){return new te(Ce.fromString(e).popFirst(5))}static empty(){return new te(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ce(e.slice()))}}function qA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Fr(s,te.empty(),e)}function jA(t){return new Fr(t.readTime,t.key,-1)}class Fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fr(oe.min(),te.empty(),-1)}static max(){return new Fr(oe.max(),te.empty(),-1)}}function LA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const VA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function va(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==VA)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function UA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _a(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wf.oe=-1;function Yu(t){return t==null}function gu(t){return t===0&&1/t==-1/0}function FA(t){return typeof t=="number"&&Number.isInteger(t)&&!gu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new my(this.data.getIterator())}getIteratorFrom(e){return new my(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class my{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new $t([])}unionWith(e){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ii(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pw("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const zA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=zA.exec(t);if(Ee(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function Hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kf(t){const e=t.mapValue.fields.__previous_value__;return Hf(e)?Kf(e):e}function na(t){const e=zr(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class BA{constructor(e,n,r,s,i,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pl={mapValue:{}};function Ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hf(t)?4:WA(t)?9007199254740991:$A(t)?10:11:ie()}function Cn(t,e){if(t===e)return!0;const n=Ss(t);if(n!==Ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zr(s.timestampValue),l=zr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return As(s.bytesValue).isEqual(As(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),l=We(i.doubleValue);return o===l?gu(o)===gu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ii(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(py(o)!==py(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Cn(o[u],l[u])))return!1;return!0}(t,e);default:return ie()}}function sa(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Ss(t),r=Ss(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=We(i.integerValue||i.doubleValue),u=We(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return gy(t.timestampValue,e.timestampValue);case 4:return gy(na(t),na(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,o){const l=As(i),u=As(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=_e(l[d],u[d]);if(p!==0)return p}return _e(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=_e(We(i.latitude),We(o.latitude));return l!==0?l:_e(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,p;const m=i.fields||{},g=o.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,R=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=_e(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((p=R==null?void 0:R.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:yy(A,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===pl.mapValue&&o===pl.mapValue)return 0;if(i===pl.mapValue)return 1;if(o===pl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=_e(u[m],p[m]);if(g!==0)return g;const A=ki(l[u[m]],d[p[m]]);if(A!==0)return A}return _e(u.length,p.length)}(t.mapValue,e.mapValue);default:throw ie()}}function gy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=zr(t),r=zr(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function yy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ki(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function Ai(t){return Ih(t)}function Ih(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return As(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ih(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ih(n.fields[o])}`;return s+"}"}(t.mapValue):ie()}function vy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kh(t){return!!t&&"integerValue"in t}function Gf(t){return!!t&&"arrayValue"in t}function _y(t){return!!t&&"nullValue"in t}function wy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dl(t){return!!t&&"mapValue"in t}function $A(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Co(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Dl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qt(Co(this.value))}}function mw(t){const e=[];return qs(t.fields,(n,r)=>{const s=new it([n]);if(Dl(r)){const i=mw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
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
 */class _t{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,oe.min(),oe.min(),oe.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,oe.min(),oe.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,oe.min(),oe.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yu{constructor(e,n){this.position=e,this.inclusive=n}}function Ey(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function HA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gw{}class Qe extends gw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GA(e,n,r):n==="array-contains"?new XA(e,r):n==="in"?new JA(e,r):n==="not-in"?new ZA(e,r):n==="array-contains-any"?new eS(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QA(e,r):new YA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ki(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends gw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new vn(e,n)}matches(e){return yw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yw(t){return t.op==="and"}function vw(t){return KA(t)&&yw(t)}function KA(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function Ah(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Ai(t.value);if(vw(t))return t.filters.map(e=>Ah(e)).join(",");{const e=t.filters.map(n=>Ah(n)).join(",");return`${t.op}(${e})`}}function _w(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)}(t,e):t instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&_w(o,s.filters[l]),!0):!1}(t,e):void ie()}function ww(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ai(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(ww).join(" ,")+"}"}(t):"Filter"}class GA extends Qe{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class QA extends Qe{constructor(e,n){super(e,"in",n),this.keys=Ew("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YA extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Ew("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ew(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class XA extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gf(n)&&sa(n.arrayValue,this.value)}}class JA extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class ZA extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!sa(this.value.arrayValue,n)}}class eS extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sa(this.value.arrayValue,r))}}/**
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
 */class tS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ty(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tS(t,e,n,r,s,i,o)}function Qf(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ah(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ai(r)).join(",")),e.ue=n}return e.ue}function Yf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_w(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xy(t.startAt,e.startAt)&&xy(t.endAt,e.endAt)}function Sh(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class qi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nS(t,e,n,r,s,i,o,l){return new qi(t,e,n,r,s,i,o,l)}function Xu(t){return new qi(t)}function Iy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xw(t){return t.collectionGroup!==null}function No(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ia(i,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new ia(it.keyField(),r))}return e.ce}function Sn(t){const e=ae(t);return e.le||(e.le=rS(e,No(t))),e.le}function rS(t,e){if(t.limitType==="F")return Ty(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ia(s.field,i)});const n=t.endAt?new yu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yu(t.startAt.position,t.startAt.inclusive):null;return Ty(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bh(t,e){const n=t.filters.concat([e]);return new qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vu(t,e,n){return new qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ju(t,e){return Yf(Sn(t),Sn(e))&&t.limitType===e.limitType}function Tw(t){return`${Qf(Sn(t))}|lt:${t.limitType}`}function Ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ww(s)).join(", ")}]`),Yu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ai(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ai(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Zu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of No(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=Ey(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,No(r),s)||r.endAt&&!function(o,l,u){const d=Ey(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,No(r),s))}(t,e)}function sS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Iw(t){return(e,n)=>{let r=!1;for(const s of No(t)){const i=iS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function iS(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?ki(u,d):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */class ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fw(this.inner)}size(){return this.innerSize}}/**
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
 */const oS=new je(te.comparator);function er(){return oS}const kw=new je(te.comparator);function yo(...t){let e=kw;for(const n of t)e=e.insert(n.key,n);return e}function Aw(t){let e=kw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fs(){return Po()}function Sw(){return Po()}function Po(){return new ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const aS=new je(te.comparator),lS=new at(te.comparator);function ce(...t){let e=lS;for(const n of t)e=e.add(n);return e}const uS=new at(_e);function cS(){return uS}/**
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
 */function Xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gu(e)?"-0":e}}function bw(t){return{integerValue:""+t}}function dS(t,e){return FA(e)?bw(e):Xf(t,e)}/**
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
 */class ec{constructor(){this._=void 0}}function hS(t,e,n){return t instanceof oa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hf(i)&&(i=Kf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof aa?Cw(t,e):t instanceof la?Nw(t,e):function(s,i){const o=Rw(s,i),l=ky(o)+ky(s.Pe);return kh(o)&&kh(s.Pe)?bw(l):Xf(s.serializer,l)}(t,e)}function fS(t,e,n){return t instanceof aa?Cw(t,e):t instanceof la?Nw(t,e):n}function Rw(t,e){return t instanceof _u?function(r){return kh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class oa extends ec{}class aa extends ec{constructor(e){super(),this.elements=e}}function Cw(t,e){const n=Pw(e);for(const r of t.elements)n.some(s=>Cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class la extends ec{constructor(e){super(),this.elements=e}}function Nw(t,e){let n=Pw(e);for(const r of t.elements)n=n.filter(s=>!Cn(s,r));return{arrayValue:{values:n}}}class _u extends ec{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ky(t){return We(t.integerValue||t.doubleValue)}function Pw(t){return Gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class pS{constructor(e,n){this.field=e,this.transform=n}}function mS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof aa&&s instanceof aa||r instanceof la&&s instanceof la?Ii(r.elements,s.elements,Cn):r instanceof _u&&s instanceof _u?Cn(r.Pe,s.Pe):r instanceof oa&&s instanceof oa}(t.transform,e.transform)}class gS{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ol(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tc{}function Dw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nc(t.key,bt.none()):new wa(t.key,t.data,bt.none());{const n=t.data,r=qt.empty();let s=new at(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Gr(t.key,r,new $t(s.toArray()),bt.none())}}function yS(t,e,n){t instanceof wa?function(s,i,o){const l=s.value.clone(),u=Sy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(s,i,o){if(!Ol(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Sy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Ow(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof wa?function(i,o,l,u){if(!Ol(i.precondition,o))return l;const d=i.value.clone(),p=by(i.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(i,o,l,u){if(!Ol(i.precondition,o))return l;const d=by(i.fieldTransforms,u,o),p=o.data;return p.setAll(Ow(i)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Ol(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function vS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Rw(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function Ay(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ii(r,s,(i,o)=>mS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends tc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gr extends tc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ow(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sy(t,e,n){const r=new Map;Ee(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,fS(o,l,n[s]))}return r}function by(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,hS(i,o,e))}return r}class nc extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _S extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Dw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Ii(this.mutations,e.mutations,(n,r)=>Ay(n,r))&&Ii(this.baseMutations,e.baseMutations,(n,r)=>Ay(n,r))}}class Jf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ee(e.mutations.length===r.length);let s=function(){return aS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jf(e,n,r,s)}}/**
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
 */class ES{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,fe;function TS(t){switch(t){default:return ie();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function qw(t){if(t===void 0)return Zn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ke.OK:return j.OK;case Ke.CANCELLED:return j.CANCELLED;case Ke.UNKNOWN:return j.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return j.INTERNAL;case Ke.UNAVAILABLE:return j.UNAVAILABLE;case Ke.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ke.NOT_FOUND:return j.NOT_FOUND;case Ke.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ke.ABORTED:return j.ABORTED;case Ke.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ke.DATA_LOSS:return j.DATA_LOSS;default:return ie()}}(fe=Ke||(Ke={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IS(){return new TextEncoder}/**
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
 */const kS=new ys([4294967295,4294967295],0);function Ry(t){const e=IS().encode(t),n=new iw;return n.update(e),new Uint8Array(n.digest())}function Cy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ys([n,r],0),new ys([s,i],0)]}class Zf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vo(`Invalid padding: ${n}`);if(r<0)throw new vo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ys.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ys.fromNumber(r)));return s.compare(kS)===1&&(s=new ys([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ry(e),[r,s]=Cy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ry(e),[r,s]=Cy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rc(oe.min(),s,new je(_e),er(),ce())}}class Ea{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ea(r,n,ce(),ce(),ce())}}/**
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
 */class ql{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class jw{constructor(e,n){this.targetId=e,this.me=n}}class Lw{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ny{constructor(){this.fe=0,this.ge=Dy(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),n=ce(),r=ce();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie()}}),new Ea(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Dy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AS{constructor(e){this.Le=e,this.Be=new Map,this.ke=er(),this.qe=Py(),this.Qe=new je(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Sh(i))if(r===0){const o=new te(i.path);this.Ue(n,o,_t.newNoDocument(o,oe.min()))}else Ee(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=As(r).toUint8Array()}catch(u){if(u instanceof pw)return Ti("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zf(o,s,i)}catch(u){return Ti(u instanceof vo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Sh(l.target)){const u=new te(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ce();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new rc(e,n,this.Qe,this.ke,r);return this.ke=er(),this.qe=Py(),this.Qe=new je(_e),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ny,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ny),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Py(){return new je(te.comparator)}function Dy(){return new je(te.comparator)}const SS={asc:"ASCENDING",desc:"DESCENDING"},bS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RS={and:"AND",or:"OR"};class CS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rh(t,e){return t.useProto3Json||Yu(e)?e:{value:e}}function wu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NS(t,e){return wu(t,e.toTimestamp())}function bn(t){return Ee(!!t),oe.fromTimestamp(function(n){const r=zr(n);return new Je(r.seconds,r.nanos)}(t))}function ep(t,e){return Ch(t,e).canonicalString()}function Ch(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Mw(t){const e=Ce.fromString(t);return Ee($w(e)),e}function Nh(t,e){return ep(t.databaseId,e.path)}function dd(t,e){const n=Mw(e);if(n.get(1)!==t.databaseId.projectId)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(Fw(n))}function Uw(t,e){return ep(t.databaseId,e)}function PS(t){const e=Mw(t);return e.length===4?Ce.emptyPath():Fw(e)}function Ph(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fw(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Oy(t,e,n){return{name:Nh(t,e),fields:n.value.mapValue.fields}}function DS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(Ee(p===void 0||typeof p=="string"),ut.fromBase64String(p||"")):(Ee(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ut.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?j.UNKNOWN:qw(d.code);return new G(p,d.message||"")}(o);n=new Lw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dd(t,r.document.name),i=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):oe.min(),l=new qt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(s,i,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new ql(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dd(t,r.document),i=r.readTime?bn(r.readTime):oe.min(),o=_t.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ql([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dd(t,r.document),i=r.removedTargetIds||[];n=new ql([],i,s,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new xS(s,i),l=r.targetId;n=new jw(l,o)}}return n}function OS(t,e){let n;if(e instanceof wa)n={update:Oy(t,e.key,e.value)};else if(e instanceof nc)n={delete:Nh(t,e.key)};else if(e instanceof Gr)n={update:Oy(t,e.key,e.data),updateMask:BS(e.fieldMask)};else{if(!(e instanceof _S))return ie();n={verify:Nh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof la)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _u)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:NS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie()}(t,e.precondition)),n}function qS(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?bn(s.updateTime):bn(i);return o.isEqual(oe.min())&&(o=bn(i)),new gS(o,s.transformResults||[])}(n,e))):[]}function jS(t,e){return{documents:[Uw(t,e.path)]}}function LS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Uw(t,s);const i=function(d){if(d.length!==0)return Bw(vn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(p=>function(g){return{field:Hs(g.field),direction:US(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function VS(t){let e=PS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ee(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=zw(m);return g instanceof vn&&vw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new ia(Ks(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Yu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,A=m.values||[];return new yu(A,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,A=m.values||[];return new yu(A,g)}(n.endAt)),nS(e,s,o,i,l,"F",u,d)}function MS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ks(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ks(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ks(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ks(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>zw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function US(t){return SS[t]}function FS(t){return bS[t]}function zS(t){return RS[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function Ks(t){return it.fromServerFormat(t.fieldPath)}function Bw(t){return t instanceof Qe?function(n){if(n.op==="=="){if(wy(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NAN"}};if(_y(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wy(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NAN"}};if(_y(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(n.field),op:FS(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(s=>Bw(s));return r.length===1?r[0]:{compositeFilter:{op:zS(n.op),filters:r}}}(t):ie()}function BS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $w(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),l=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $S{constructor(e){this.ct=e}}function WS(t){const e=VS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vu(e,e.limit,"L"):e}/**
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
 */class HS{constructor(){this.un=new KS}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Fr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class KS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Ce.comparator)).toArray()}}/**
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
 */class Si{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Si(0)}static kn(){return new Si(-1)}}/**
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
 */class GS{constructor(){this.changes=new ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class YS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Do(r.mutation,s,$t.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=yo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=er();const o=Po(),l=function(){return Po()}();return n.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Gr)?i=i.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Do(p.mutation,d,p.mutation.getFieldMask(),Je.now())):o.set(d.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var m;return l.set(d,new QS(p,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Po();let s=new je((o,l)=>o-l),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||$t.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(s.get(l.batchId)||ce()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=Sw();p.forEach(g=>{if(!i.has(g)){const A=Dw(n.get(g),r.get(g));A!==null&&m.set(g,A),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(fs());let l=-1,u=i;return o.next(d=>F.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?F.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,ce())).next(p=>({batchId:l,changes:Aw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=yo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=yo();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const d=function(m,g){return new qi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,_t.newInvalidDocument(p)))});let l=yo();return o.forEach((u,d)=>{const p=i.get(u);p!==void 0&&Do(p.mutation,d,$t.empty(),Je.now()),Zu(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class XS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:bn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:WS(s.bundledQuery),readTime:bn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class JS{constructor(){this.overlays=new je(te.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fs();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=fs(),i=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=fs(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=fs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return F.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ES(n,r));let i=this.Ir.get(n);i===void 0&&(i=ce(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class ZS{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class tp{constructor(){this.Tr=new at(Ze.Er),this.dr=new at(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new Ce([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new Ce([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ce();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
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
 */class e2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ze.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(_e);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new te(i),0);let l=new at(_e);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ee(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),s=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class t2{constructor(e){this.Mr=e,this.docs=function(){return new je(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=er();const o=n.path,l=new te(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||LA(jA(p),r)<=0||(s.has(p.key)||Zu(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new n2(this)}getSize(e){return F.resolve(this.size)}}class n2 extends GS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class r2{constructor(e){this.persistence=e,this.Nr=new ji(n=>Qf(n),Yf),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tp,this.targetCount=0,this.kr=Si.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Si(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class s2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Wf(0),this.Kr=!1,this.Kr=!0,this.$r=new ZS,this.referenceDelegate=e(this),this.Ur=new r2(this),this.indexManager=new HS,this.remoteDocumentCache=function(s){return new t2(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $S(n),this.Gr=new XS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new e2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new i2(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class i2 extends MA{constructor(e){super(),this.currentSequenceNumber=e}}class np{constructor(e){this.persistence=e,this.Jr=new tp,this.Yr=null}static Zr(e){return new np(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const s=te.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class rp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rp(e,n.fromCache,r,s)}}/**
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
 */class o2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class a2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ak()?8:UA(xt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new o2;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ao()<=de.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(ao()<=de.DEBUG&&J("QueryEngine","Query:",Ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ao()<=de.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):F.resolve())}Yi(e,n){if(Iy(n))return F.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=vu(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,vu(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return Iy(n)||s.isEqual(oe.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?F.resolve(null):(ao()<=de.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ws(n)),this.rs(e,o,n,qA(s,-1)).next(l=>l))})}ts(e,n){let r=new at(Iw(e));return n.forEach((s,i)=>{Zu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ao()<=de.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.Ji.getDocumentsMatchingQuery(e,n,Fr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class l2{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(_e),this._s=new ji(i=>Qf(i),Yf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function u2(t,e,n,r){return new l2(t,e,n,r)}async function Ww(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ce();for(const d of s){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function c2(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,g=m.keys();let A=F.resolve();return g.forEach(R=>{A=A.next(()=>p.getEntry(u,R)).next(C=>{const b=d.docVersions.get(R);Ee(b!==null),C.version.compareTo(b)<0&&(m.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),p.addEntry(C)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hw(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function d2(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(ut.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),s=s.insert(m,A),function(C,b,T){return C.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,A,p)&&l.push(n.Ur.updateTargetData(i,A))});let u=er(),d=ce();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(h2(i,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(oe.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function h2(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=er();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):J("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function f2(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function p2(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Dh(t,e,n){const r=ae(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_a(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function qy(t,e,n){const r=ae(t);let s=oe.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const m=ae(u),g=m._s.get(p);return g!==void 0?F.resolve(m.os.get(g)):m.Ur.getTargetData(d,p)}(r,o,Sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:ce())).next(l=>(m2(r,sS(e),l),{documents:l,Ts:i})))}function m2(t,e,n){let r=t.us.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class jy{constructor(){this.activeTargetIds=cS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g2{constructor(){this.so=new jy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new jy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class y2{_o(e){}shutdown(){}}/**
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
 */class Ly{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ml=null;function hd(){return ml===null?ml=function(){return 268435456+Math.round(2147483648*Math.random())}():ml++,"0x"+ml.toString(16)}/**
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
 */const v2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class w2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=hd(),u=this.xo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(p=>(J("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Ti("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=v2[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=hd();return new Promise((o,l)=>{const u=new ow;u.setWithCredentials(!0),u.listenOnce(aw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pl.NO_ERROR:const p=u.getResponseJson();J(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case Pl.TIMEOUT:J(gt,`RPC '${e}' ${i} timed out`),l(new G(j.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const m=u.getStatus();if(J(gt,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g==null?void 0:g.error;if(A&&A.status&&A.message){const R=function(b){const T=b.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(A.status);l(new G(R,A.message))}else l(new G(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(j.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{J(gt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);J(gt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=hd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cw(),l=uw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");J(gt,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,A=!1;const R=new _2({Io:b=>{A?J(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(g||(J(gt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),J(gt,`RPC '${e}' stream ${s} sending:`,b),m.send(b))},To:()=>m.close()}),C=(b,T,_)=>{b.listen(T,k=>{try{_(k)}catch(O){setTimeout(()=>{throw O},0)}})};return C(m,go.EventType.OPEN,()=>{A||(J(gt,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),C(m,go.EventType.CLOSE,()=>{A||(A=!0,J(gt,`RPC '${e}' stream ${s} transport closed`),R.So())}),C(m,go.EventType.ERROR,b=>{A||(A=!0,Ti(gt,`RPC '${e}' stream ${s} transport errored:`,b),R.So(new G(j.UNAVAILABLE,"The operation could not be completed")))}),C(m,go.EventType.MESSAGE,b=>{var T;if(!A){const _=b.data[0];Ee(!!_);const k=_,O=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(O){J(gt,`RPC '${e}' stream ${s} received error:`,O);const U=O.status;let B=function(w){const I=Ke[w];if(I!==void 0)return qw(I)}(U),E=O.message;B===void 0&&(B=j.INTERNAL,E="Unknown error status: "+U+" with message "+O.message),A=!0,R.So(new G(B,E)),m.close()}else J(gt,`RPC '${e}' stream ${s} received:`,_),R.bo(_)}}),C(l,lw.STAT_EVENT,b=>{b.stat===Th.PROXY?J(gt,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Th.NOPROXY&&J(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function fd(){return typeof document<"u"?document:null}/**
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
 */function sc(t){return new CS(t,!0)}/**
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
 */class Kw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Gw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Kw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new G(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E2 extends Gw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=DS(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?bn(o.readTime):oe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ph(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Sh(u)?{documents:jS(i,u)}:{query:LS(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Vw(i,o.resumeToken);const d=Rh(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(oe.min())>0){l.readTime=wu(i,o.snapshotVersion.toTimestamp());const d=Rh(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=MS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ph(this.serializer),n.removeTarget=e,this.a_(n)}}class x2 extends Gw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=qS(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ph(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>OS(this.serializer,r))};this.a_(n)}}/**
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
 */class T2 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ch(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(j.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ch(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class I2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Zn(n),this.D_=!1):J("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class k2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{js(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ae(u);d.L_.add(4),await xa(d),d.q_.set("Unknown"),d.L_.delete(4),await ic(d)}(this))})}),this.q_=new I2(r,s)}}async function ic(t){if(js(t))for(const e of t.B_)await e(!0)}async function xa(t){for(const e of t.B_)await e(!1)}function Qw(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ap(n)?op(n):Li(n).r_()&&ip(n,e))}function sp(t,e){const n=ae(t),r=Li(n);n.N_.delete(e),r.r_()&&Yw(n,e),n.N_.size===0&&(r.r_()?r.o_():js(n)&&n.q_.set("Unknown"))}function ip(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Li(t).A_(e)}function Yw(t,e){t.Q_.xe(e),Li(t).R_(e)}function op(t){t.Q_=new AS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Li(t).start(),t.q_.v_()}function ap(t){return js(t)&&!Li(t).n_()&&t.N_.size>0}function js(t){return ae(t).L_.size===0}function Xw(t){t.Q_=void 0}async function A2(t){t.q_.set("Online")}async function S2(t){t.N_.forEach((e,n)=>{ip(t,e)})}async function b2(t,e){Xw(t),ap(t)?(t.q_.M_(e),op(t)):t.q_.set("Unknown")}async function R2(t,e,n){if(t.q_.set("Online"),e instanceof Lw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Eu(t,r)}else if(e instanceof ql?t.Q_.Ke(e):e instanceof jw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(oe.min()))try{const r=await Hw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(ut.EMPTY_BYTE_STRING,p.snapshotVersion)),Yw(i,u);const m=new kr(p.target,u,d,p.sequenceNumber);ip(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Eu(t,r)}}async function Eu(t,e,n){if(!_a(e))throw e;t.L_.add(1),await xa(t),t.q_.set("Offline"),n||(n=()=>Hw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ic(t)})}function Jw(t,e){return e().catch(n=>Eu(t,n,e))}async function oc(t){const e=ae(t),n=Br(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;C2(e);)try{const s=await f2(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,N2(e,s)}catch(s){await Eu(e,s)}Zw(e)&&eE(e)}function C2(t){return js(t)&&t.O_.length<10}function N2(t,e){t.O_.push(e);const n=Br(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Zw(t){return js(t)&&!Br(t).n_()&&t.O_.length>0}function eE(t){Br(t).start()}async function P2(t){Br(t).p_()}async function D2(t){const e=Br(t);for(const n of t.O_)e.m_(n.mutations)}async function O2(t,e,n){const r=t.O_.shift(),s=Jf.from(r,e,n);await Jw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await oc(t)}async function q2(t,e){e&&Br(t).V_&&await async function(r,s){if(function(o){return TS(o)&&o!==j.ABORTED}(s.code)){const i=r.O_.shift();Br(r).s_(),await Jw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await oc(r)}}(t,e),Zw(t)&&eE(t)}async function Vy(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=js(n);n.L_.add(3),await xa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ic(n)}async function j2(t,e){const n=ae(t);e?(n.L_.delete(2),await ic(n)):e||(n.L_.add(2),await xa(n),n.q_.set("Unknown"))}function Li(t){return t.K_||(t.K_=function(n,r,s){const i=ae(n);return i.w_(),new E2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:A2.bind(null,t),Ro:S2.bind(null,t),mo:b2.bind(null,t),d_:R2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ap(t)?op(t):t.q_.set("Unknown")):(await t.K_.stop(),Xw(t))})),t.K_}function Br(t){return t.U_||(t.U_=function(n,r,s){const i=ae(n);return i.w_(),new x2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:P2.bind(null,t),mo:q2.bind(null,t),f_:D2.bind(null,t),g_:O2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await oc(t)):(await t.U_.stop(),t.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class lp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new lp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function up(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),_a(t))return new G(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class hi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=yo(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class My{constructor(){this.W_=new je(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ie():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class bi{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new bi(e,n,hi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class L2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class V2{constructor(){this.queries=Uy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ae(n),i=s.queries;s.queries=Uy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(j.ABORTED,"Firestore shutting down"))}}function Uy(){return new ji(t=>Tw(t),Ju)}async function cp(t,e){const n=ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new L2,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=up(o,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&hp(n)}async function dp(t,e){const n=ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function M2(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&hp(n)}function U2(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function hp(t){t.Y_.forEach(e=>{e.next()})}var Oh,Fy;(Fy=Oh||(Oh={})).ea="default",Fy.Cache="cache";class fp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Oh.Cache}}/**
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
 */class tE{constructor(e){this.key=e}}class nE{constructor(e){this.key=e}}class F2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=Iw(e),this.Ra=new hi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new My,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),A=Zu(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let b=!1;g&&A?g.data.isEqual(A.data)?R!==C&&(r.track({type:3,doc:A}),b=!0):this.ga(g,A)||(r.track({type:2,doc:A}),b=!0,(u&&this.Aa(A,u)>0||d&&this.Aa(A,d)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),b=!0):g&&!A&&(r.track({type:1,doc:g}),b=!0,(u||d)&&(l=!0)),b&&(A?(o=o.add(A),i=C?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(A,R){const C=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return C(A)-C(R)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new bi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new My,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new nE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new tE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return bi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class z2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B2{constructor(e){this.key=e,this.va=!1}}class $2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ji(l=>Tw(l),Ju),this.Ma=new Map,this.xa=new Set,this.Oa=new je(te.comparator),this.Na=new Map,this.La=new tp,this.Ba={},this.ka=new Map,this.qa=Si.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function W2(t,e,n=!0){const r=lE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await rE(r,e,n,!0),s}async function H2(t,e){const n=lE(t);await rE(n,e,!0,!1)}async function rE(t,e,n,r){const s=await p2(t.localStore,Sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await K2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Qw(t.remoteStore,s),l}async function K2(t,e,n,r,s){t.Ka=(m,g,A)=>async function(C,b,T,_){let k=b.view.ma(T);k.ns&&(k=await qy(C.localStore,b.query,!1).then(({documents:E})=>b.view.ma(E,k)));const O=_&&_.targetChanges.get(b.targetId),U=_&&_.targetMismatches.get(b.targetId)!=null,B=b.view.applyChanges(k,C.isPrimaryClient,O,U);return By(C,b.targetId,B.wa),B.snapshot}(t,m,g,A);const i=await qy(t.localStore,e,!0),o=new F2(e,i.Ts),l=o.ma(i.documents),u=Ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);By(t,n,d.wa);const p=new z2(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function G2(t,e,n){const r=ae(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ju(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Dh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&sp(r.remoteStore,s.targetId),qh(r,s.targetId)}).catch(va)):(qh(r,s.targetId),await Dh(r.localStore,s.targetId,!0))}async function Q2(t,e){const n=ae(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sp(n.remoteStore,r.targetId))}async function Y2(t,e,n){const r=rb(t);try{const s=await function(o,l){const u=ae(o),d=Je.now(),p=l.reduce((A,R)=>A.add(R.key),ce());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=er(),C=ce();return u.cs.getEntries(A,p).next(b=>{R=b,R.forEach((T,_)=>{_.isValidDocument()||(C=C.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,R)).next(b=>{m=b;const T=[];for(const _ of l){const k=vS(_,m.get(_.key).overlayedDocument);k!=null&&T.push(new Gr(_.key,k,mw(k.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,T,l)}).next(b=>{g=b;const T=b.applyToLocalDocumentSet(m,C);return u.documentOverlayCache.saveOverlays(A,b.batchId,T)})}).then(()=>({batchId:g.batchId,changes:Aw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new je(_e)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await Ta(r,s.changes),await oc(r.remoteStore)}catch(s){const i=up(s,"Failed to persist write");n.reject(i)}}async function sE(t,e){const n=ae(t);try{const r=await d2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ee(o.va):s.removedDocuments.size>0&&(Ee(o.va),o.va=!1))}),await Ta(n,r,e)}catch(r){await va(r)}}function zy(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ae(o);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&hp(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function X2(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(te.comparator);o=o.insert(i,_t.newNoDocument(i,oe.min()));const l=ce().add(i),u=new rc(oe.min(),new Map,new je(_e),o,l);await sE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),pp(r)}else await Dh(r.localStore,e,!1).then(()=>qh(r,e,n)).catch(va)}async function J2(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await c2(n.localStore,e);oE(n,r,null),iE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ta(n,s)}catch(s){await va(s)}}async function Z2(t,e,n){const r=ae(t);try{const s=await function(o,l){const u=ae(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(Ee(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);oE(r,e,n),iE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ta(r,s)}catch(s){await va(s)}}function iE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function oE(t,e,n){const r=ae(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||aE(t,r)})}function aE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),pp(t))}function By(t,e,n){for(const r of n)r instanceof tE?(t.La.addReference(r.key,e),eb(t,r)):r instanceof nE?(J("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||aE(t,r.key)):ie()}function eb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(J("SyncEngine","New document in limbo: "+n),t.xa.add(r),pp(t))}function pp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(Ce.fromString(e)),r=t.qa.next();t.Na.set(r,new B2(n)),t.Oa=t.Oa.insert(n,r),Qw(t.remoteStore,new kr(Sn(Xu(n.path)),r,"TargetPurposeLimboResolution",Wf.oe))}}async function Ta(t,e,n){const r=ae(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=rp.Wi(u.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const p=ae(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(d,g=>F.forEach(g.$i,A=>p.persistence.referenceDelegate.addReference(m,g.targetId,A)).next(()=>F.forEach(g.Ui,A=>p.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))}catch(m){if(!_a(m))throw m;J("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const A=p.os.get(g),R=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(R);p.os=p.os.insert(g,C)}}}(r.localStore,i))}async function tb(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await Ww(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(j.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ta(n,r.hs)}}function nb(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return ce().add(r.key);{let s=ce();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function lE(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X2.bind(null,e),e.Ca.d_=M2.bind(null,e.eventManager),e.Ca.$a=U2.bind(null,e.eventManager),e}function rb(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z2.bind(null,e),e}class xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return u2(this.persistence,new a2,e.initialUser,this.serializer)}Ga(e){return new s2(np.Zr,this.serializer)}Wa(e){return new g2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xu.provider={build:()=>new xu};class jh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tb.bind(null,this.syncEngine),await j2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new V2}()}createDatastore(e){const n=sc(e.databaseInfo.databaseId),r=function(i){return new w2(i)}(e.databaseInfo);return function(i,o,l,u){return new T2(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new k2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>zy(this.syncEngine,n,0),function(){return Ly.D()?new Ly:new y2}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,p){const m=new $2(s,i,o,l,u,d);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ae(s);J("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await xa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jh.provider={build:()=>new jh};/**
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
 */class mp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class sb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=hw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pd(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ww(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $y(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ib(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Vy(e.remoteStore,s)),t._onlineComponents=e}async function ib(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await pd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ti("Error using user provided cache. Falling back to memory cache: "+n),await pd(t,new xu)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await pd(t,new xu);return t._offlineComponents}async function uE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await $y(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await $y(t,new jh))),t._onlineComponents}function ob(t){return uE(t).then(e=>e.syncEngine)}async function Tu(t){const e=await uE(t),n=e.eventManager;return n.onListen=W2.bind(null,e.syncEngine),n.onUnlisten=G2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=H2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Q2.bind(null,e.syncEngine),n}function ab(t,e,n={}){const r=new Hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const p=new mp({next:g=>{p.Za(),o.enqueueAndForget(()=>dp(i,m));const A=g.docs.has(l);!A&&g.fromCache?d.reject(new G(j.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?d.reject(new G(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new fp(Xu(l.path),p,{includeMetadataChanges:!0,_a:!0});return cp(i,m)}(await Tu(t),t.asyncQueue,e,n,r)),r.promise}function lb(t,e,n={}){const r=new Hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const p=new mp({next:g=>{p.Za(),o.enqueueAndForget(()=>dp(i,m)),g.fromCache&&u.source==="server"?d.reject(new G(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new fp(l,p,{includeMetadataChanges:!0,_a:!0});return cp(i,m)}(await Tu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Wy=new Map;/**
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
 */function dE(t,e,n){if(!n)throw new G(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ub(t,e,n,r){if(e===!0&&r===!0)throw new G(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hy(t){if(!te.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ky(t){if(te.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ac(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Rt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ac(t);throw new G(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Gy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ub("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new AA;switch(r.type){case"firstParty":return new CA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wy.get(n);r&&(J("ComponentProvider","Removing Datastore"),Wy.delete(n),r.terminate())}(this),Promise.resolve()}}function cb(t,e,n,r={}){var s;const i=(t=Rt(t,lc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=yt.MOCK_USER;else{l=Z0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new G(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(d)}t._authCredentials=new SA(new dw(l,u))}}/**
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
 */class rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Lr extends rr{constructor(e,n,r){super(e,n,Xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new te(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function Qt(t,e,...n){if(t=Ie(t),dE("collection","path",e),t instanceof lc){const r=Ce.fromString(e,...n);return Ky(r),new Lr(t,null,r)}{if(!(t instanceof wt||t instanceof Lr))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Ky(r),new Lr(t.firestore,null,r)}}function ct(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=hw.newId()),dE("doc","path",e),t instanceof lc){const r=Ce.fromString(e,...n);return Hy(r),new wt(t,null,new te(r))}{if(!(t instanceof wt||t instanceof Lr))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Hy(r),new wt(t.firestore,t instanceof Lr?t.converter:null,new te(r))}}/**
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
 */class Qy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Kw(this,"async_queue_retry"),this.Vu=()=>{const r=fd();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=fd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Hn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_a(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Zn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=lp.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ie()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Yy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Nn extends lc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Qy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qy(e),this._firestoreClient=void 0,await e}}}function db(t,e){const n=typeof t=="object"?t:Bf(),r=typeof t=="string"?t:"(default)",s=Qu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Y0("firestore");i&&cb(s,...i)}return s}function Ia(t){if(t._terminated)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hb(t),t._firestoreClient}function hb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,d,p){return new BA(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,cE(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new sb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ri(ut.fromBase64String(e))}catch(n){throw new G(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ri(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ka{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class uc{constructor(e){this._methodName=e}}/**
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
 */class gp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class yp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const fb=/^__.*__$/;class pb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}class hE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class vp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Iu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(fE(this.Cu)&&fb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class mb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sc(e)}Qu(e,n,r,s=!1){return new vp({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Aa(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new mb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _p(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Ep("Data must be an object, but it was:",o,r);const l=gE(r,o);let u,d;if(i.merge)u=new $t(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=Lh(e,m,n);if(!o.contains(g))throw new G(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);vE(p,g)||p.push(g)}u=new $t(p),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new pb(new qt(l),u,d)}class cc extends uc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cc}}class wp extends uc{_toFieldTransform(e){return new pS(e.path,new oa)}isEqual(e){return e instanceof wp}}function pE(t,e,n,r){const s=t.Qu(1,e,n);Ep("Data must be an object, but it was:",s,r);const i=[],o=qt.empty();qs(r,(u,d)=>{const p=xp(e,u,n);d=Ie(d);const m=s.Nu(p);if(d instanceof cc)i.push(p);else{const g=Sa(d,m);g!=null&&(i.push(p),o.set(p,g))}});const l=new $t(i);return new hE(o,l,s.fieldTransforms)}function mE(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Lh(e,r,n)],u=[s];if(i.length%2!=0)throw new G(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Lh(e,i[g])),u.push(i[g+1]);const d=[],p=qt.empty();for(let g=l.length-1;g>=0;--g)if(!vE(d,l[g])){const A=l[g];let R=u[g];R=Ie(R);const C=o.Nu(A);if(R instanceof cc)d.push(A);else{const b=Sa(R,C);b!=null&&(d.push(A),p.set(A,b))}}const m=new $t(d);return new hE(p,m,o.fieldTransforms)}function gb(t,e,n,r=!1){return Sa(n,t.Qu(r?4:3,e))}function Sa(t,e){if(yE(t=Ie(t)))return Ep("Unsupported field value:",e,t),gE(t,e);if(t instanceof uc)return function(r,s){if(!fE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Sa(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:wu(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wu(s.serializer,i)}}if(r instanceof gp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ri)return{bytesValue:Vw(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ep(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Xf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ac(r)}`)}(t,e)}function gE(t,e){const n={};return fw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(r,s)=>{const i=Sa(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof gp||t instanceof Ri||t instanceof wt||t instanceof uc||t instanceof yp)}function Ep(t,e,n){if(!yE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ac(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Lh(t,e,n){if((e=Ie(e))instanceof ka)return e._internalPath;if(typeof e=="string")return xp(t,e);throw Iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const yb=new RegExp("[~\\*/\\[\\]]");function xp(t,e,n){if(e.search(yb)>=0)throw Iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ka(...e.split("."))._internalPath}catch{throw Iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Iu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new G(j.INVALID_ARGUMENT,l+t+u)}function vE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _E{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vb extends _E{data(){return super.data()}}function dc(t,e){return typeof e=="string"?xp(t,e):e instanceof ka?e._internalPath:e._delegate._internalPath}/**
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
 */function wE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tp{}class Ip extends Tp{}function Pn(t,e,...n){let r=[];e instanceof Tp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof kp).length,l=i.filter(u=>u instanceof hc).length;if(o>1||o>0&&l>0)throw new G(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class hc extends Ip{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hc(e,n,r)}_apply(e){const n=this._parse(e);return xE(e._query,n),new rr(e.firestore,e.converter,bh(e._query,n))}_parse(e){const n=Aa(e.firestore);return function(i,o,l,u,d,p,m){let g;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new G(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Jy(m,p);const A=[];for(const R of m)A.push(Xy(u,i,R));g={arrayValue:{values:A}}}else g=Xy(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Jy(m,p),g=gb(l,o,m,p==="in"||p==="not-in");return Qe.create(d,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bs(t,e,n){const r=e,s=dc("where",t);return hc._create(s,r,n)}class kp extends Tp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)xE(o,u),o=bh(o,u)}(e._query,n),new rr(e.firestore,e.converter,bh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ap extends Ip{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ap(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new G(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ia(i,o)}(e._query,this._field,this._direction);return new rr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new qi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Sp(t,e="asc"){const n=e,r=dc("orderBy",t);return Ap._create(r,n)}class bp extends Ip{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new bp(e,n,r)}_apply(e){return new rr(e.firestore,e.converter,vu(e._query,this._limit,this._limitType))}}function EE(t){return bp._create("limit",t,"F")}function Xy(t,e,n){if(typeof(n=Ie(n))=="string"){if(n==="")throw new G(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xw(e)&&n.indexOf("/")!==-1)throw new G(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!te.isDocumentKey(r))throw new G(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vy(t,new te(r))}if(n instanceof wt)return vy(t,n._key);throw new G(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(n)}.`)}function Jy(t,e){if(!Array.isArray(t)||t.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _b{convertValue(e,n="none"){switch(Ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>We(o.doubleValue));return new yp(i)}convertGeoPoint(e){return new gp(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=zr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Ee($w(r));const s=new ra(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Rp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class _o{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TE extends _E{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class jl extends TE{data(e={}){return super.data(e)}}class IE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _o(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jl(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new jl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new jl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:wb(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function ba(t){t=Rt(t,wt);const e=Rt(t.firestore,Nn);return ab(Ia(e),t._key).then(n=>kE(e,t,n))}class Cp extends _b{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function $r(t){t=Rt(t,rr);const e=Rt(t.firestore,Nn),n=Ia(e),r=new Cp(e);return wE(t._query),lb(n,t._query).then(s=>new IE(e,r,t,s))}function fc(t,e,n){t=Rt(t,wt);const r=Rt(t.firestore,Nn),s=Rp(t.converter,e,n);return Ra(r,[_p(Aa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,bt.none())])}function sr(t,e,n,...r){t=Rt(t,wt);const s=Rt(t.firestore,Nn),i=Aa(s);let o;return o=typeof(e=Ie(e))=="string"||e instanceof ka?mE(i,"updateDoc",t._key,e,n,r):pE(i,"updateDoc",t._key,e),Ra(s,[o.toMutation(t._key,bt.exists(!0))])}function Eb(t){return Ra(Rt(t.firestore,Nn),[new nc(t._key,bt.none())])}function Np(t,e){const n=Rt(t.firestore,Nn),r=ct(t),s=Rp(t.converter,e);return Ra(n,[_p(Aa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function pc(t,...e){var n,r,s;t=Ie(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yy(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Yy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,d,p;if(t instanceof wt)d=Rt(t.firestore,Nn),p=Xu(t._key.path),u={next:m=>{e[o]&&e[o](kE(d,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Rt(t,rr);d=Rt(m.firestore,Nn),p=m._query;const g=new Cp(d);u={next:A=>{e[o]&&e[o](new IE(d,g,m,A))},error:e[o+1],complete:e[o+2]},wE(t._query)}return function(g,A,R,C){const b=new mp(C),T=new fp(A,b,R);return g.asyncQueue.enqueueAndForget(async()=>cp(await Tu(g),T)),()=>{b.Za(),g.asyncQueue.enqueueAndForget(async()=>dp(await Tu(g),T))}}(Ia(d),p,l,u)}function Ra(t,e){return function(r,s){const i=new Hn;return r.asyncQueue.enqueueAndForget(async()=>Y2(await ob(r),s,i)),i.promise}(Ia(t),e)}function kE(t,e,n){const r=n.docs.get(e._key),s=new Cp(t);return new TE(t,s,e._key,r,new _o(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class xb{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Aa(e)}set(e,n,r){this._verifyNotCommitted();const s=md(e,this._firestore),i=Rp(s.converter,n,r),o=_p(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,bt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=md(e,this._firestore);let o;return o=typeof(n=Ie(n))=="string"||n instanceof ka?mE(this._dataReader,"WriteBatch.update",i._key,n,r,s):pE(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,bt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=md(e,this._firestore);return this._mutations=this._mutations.concat(new nc(n._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function md(t,e){if((t=Ie(t)).firestore!==e)throw new G(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function nn(){return new wp("serverTimestamp")}/**
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
 */function AE(t){return Ia(t=Rt(t,Nn)),new xb(t,e=>Ra(t,e))}(function(e,n=!0){(function(s){Oi=s})(Os),Is(new Ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Nn(new bA(r.getProvider("auth-internal")),new PA(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new G(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(d.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),An(fy,"4.7.3",e),An(fy,"4.7.3","esm2017")})();function Pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function SE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tb=SE,bE=new ga("auth","Firebase",SE());/**
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
 */const ku=new Ff("@firebase/auth");function Ib(t,...e){ku.logLevel<=de.WARN&&ku.warn(`Auth (${Os}): ${t}`,...e)}function Ll(t,...e){ku.logLevel<=de.ERROR&&ku.error(`Auth (${Os}): ${t}`,...e)}/**
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
 */function on(t,...e){throw Op(t,...e)}function gn(t,...e){return Op(t,...e)}function Dp(t,e,n){const r=Object.assign(Object.assign({},Tb()),{[e]:n});return new ga("auth","Firebase",r).create(e,{appName:t.name})}function Kn(t){return Dp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&on(t,"argument-error"),Dp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Op(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bE.create(t,...e)}function se(t,e,...n){if(!t)throw Op(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ll(e),new Error(e)}function tr(t,e){t||zn(e)}/**
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
 */function Vh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ab(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Sb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ab()||sk()||"connection"in navigator)?navigator.onLine:!0}function bb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=tk()||ik()}get(){return Sb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qp(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class RE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Cb=new Ca(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ir(t,e,n,r,s={}){return CE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ya(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return rk()||(d.referrerPolicy="no-referrer"),RE.fetch()(NE(t,t.config.apiHost,n,l),d)})}async function CE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rb),e);try{const s=new Pb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw gl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw gl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw gl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Dp(t,p,d);on(t,p)}}catch(s){if(s instanceof Dn)throw s;on(t,"network-request-failed",{message:String(s)})}}async function Na(t,e,n,r,s={}){const i=await ir(t,e,n,r,s);return"mfaPendingCredential"in i&&on(t,"multi-factor-auth-required",{_serverResponse:i}),i}function NE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?qp(t.config,s):`${t.config.apiScheme}://${s}`}function Nb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),Cb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}function ev(t){return t!==void 0&&t.enterprise!==void 0}class Db{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Nb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ob(t,e){return ir(t,"GET","/v2/recaptchaConfig",Qr(t,e))}/**
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
 */async function qb(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function PE(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jb(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),s=jp(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Oo(gd(s.auth_time)),issuedAtTime:Oo(gd(s.iat)),expirationTime:Oo(gd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gd(t){return Number(t)*1e3}function jp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const s=G0(n);return s?JSON.parse(s):(Ll("Failed to decode base64 JWT payload"),null)}catch(s){return Ll("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function tv(t){const e=jp(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&Lb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Lb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Vb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Au(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ci(t,PE(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?DE(i.providerUserInfo):[],l=Ub(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function Mb(t){const e=Ie(t);await Au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ub(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function DE(t){return t.map(e=>{var{providerId:n}=e,r=Pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Fb(t,e){const n=await CE(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=NE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zb(t,e){return ir(t,"POST","/v2/accounts:revokeToken",Qr(t,e))}/**
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
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=tv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Fb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fi;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function pr(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jb(this,e)}reload(){return Mb(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await Ci(this,qb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,A=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:k,emailVerified:O,isAnonymous:U,providerData:B,stsTokenManager:E}=n;se(k&&E,e,"internal-error");const v=fi.fromJSON(this.name,E);se(typeof k=="string",e,"internal-error"),pr(m,e.name),pr(g,e.name),se(typeof O=="boolean",e,"internal-error"),se(typeof U=="boolean",e,"internal-error"),pr(A,e.name),pr(R,e.name),pr(C,e.name),pr(b,e.name),pr(T,e.name),pr(_,e.name);const w=new Bn({uid:k,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:U,photoURL:R,phoneNumber:A,tenantId:C,stsTokenManager:v,createdAt:T,lastLoginAt:_});return B&&Array.isArray(B)&&(w.providerData=B.map(I=>Object.assign({},I))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new fi;s.updateFromServerResponse(n);const i=new Bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Au(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?DE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new fi;l.updateFromIdToken(r);const u=new Bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const nv=new Map;function $n(t){tr(t instanceof Function,"Expected a class definition");let e=nv.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nv.set(t,e),e)}/**
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
 */class OE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OE.type="NONE";const rv=OE;/**
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
 */function Vl(t,e,n){return`firebase:${t}:${e}:${n}`}class pi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new pi($n(rv),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||$n(rv);const o=Vl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const m=Bn._fromJSON(e,p);d!==i&&(l=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new pi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new pi(i,e,r))}}/**
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
 */function sv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UE(e))return"Blackberry";if(FE(e))return"Webos";if(jE(e))return"Safari";if((e.includes("chrome/")||LE(e))&&!e.includes("edge/"))return"Chrome";if(ME(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qE(t=xt()){return/firefox\//i.test(t)}function jE(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LE(t=xt()){return/crios\//i.test(t)}function VE(t=xt()){return/iemobile/i.test(t)}function ME(t=xt()){return/android/i.test(t)}function UE(t=xt()){return/blackberry/i.test(t)}function FE(t=xt()){return/webos/i.test(t)}function Lp(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bb(t=xt()){var e;return Lp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $b(){return ok()&&document.documentMode===10}function zE(t=xt()){return Lp(t)||ME(t)||FE(t)||UE(t)||/windows phone/i.test(t)||VE(t)}/**
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
 */function BE(t,e=[]){let n;switch(t){case"Browser":n=sv(xt());break;case"Worker":n=`${sv(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
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
 */class Wb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Hb(t,e={}){return ir(t,"GET","/v2/passwordPolicy",Qr(t,e))}/**
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
 */const Kb=6;class Gb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Kb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Qb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new Wb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await PE(this,{idToken:e}),r=await Bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Kn(this));const n=e?Ie(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hb(this),n=new Gb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ga("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ib(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return Ie(t)}class iv{constructor(e){this.auth=e,this.observer=null,this.addObserver=pk(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yb(t){mc=t}function $E(t){return mc.loadJS(t)}function Xb(){return mc.recaptchaEnterpriseScript}function Jb(){return mc.gapiScript}function Zb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eR="recaptcha-enterprise",tR="NO_RECAPTCHA";class nR{constructor(e){this.type=eR,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Ob(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Db(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;ev(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(tR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&ev(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Xb();u.length!==0&&(u+=l),$E(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function ov(t,e,n,r=!1){const s=new nR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Uh(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ov(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ov(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function rR(t,e){const n=Qu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(pu(i,e??{}))return s;on(s,"already-initialized")}return n.initialize({options:e})}function sR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iR(t,e,n){const r=Yr(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=WE(e),{host:o,port:l}=oR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),aR()}function WE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oR(t){const e=WE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:av(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:av(o)}}}function av(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function lR(t,e){return ir(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function uR(t,e){return Na(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
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
 */async function cR(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function dR(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
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
 */class ua extends Vp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uh(e,n,"signInWithPassword",uR);case"emailLink":return cR(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uh(e,r,"signUpPassword",lR);case"emailLink":return dR(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mi(t,e){return Na(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
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
 */const hR="http://localhost";class Rs extends Vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Pp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:hR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
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
 */function fR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pR(t){const e=po(mo(t)).link,n=e?po(mo(e)).deep_link_id:null,r=po(mo(t)).deep_link_id;return(r?po(mo(r)).link:null)||r||n||e||t}class Mp{constructor(e){var n,r,s,i,o,l;const u=po(mo(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=fR((s=u.mode)!==null&&s!==void 0?s:null);se(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=pR(e);try{return new Mp(n)}catch{return null}}}/**
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
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,n){return ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mp.parseLink(n);return se(r,"argument-error"),ua._fromEmailAndCode(e,r.code,r.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Up{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pa extends Up{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _r extends Pa{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rs._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class wr extends Pa{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
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
 */class Er extends Pa{constructor(){super("twitter.com")}static credential(e,n){return Rs._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
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
 */async function mR(t,e){return Na(t,"POST","/v1/accounts:signUp",Qr(t,e))}/**
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
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bn._fromIdTokenResponse(e,r,s),o=lv(r);return new Cs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=lv(r);return new Cs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function lv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Su extends Dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Su.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Su(e,n,r,s)}}function HE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Su._fromErrorAndOperation(t,i,e,r):i})}async function gR(t,e,n=!1){const r=await Ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",r)}/**
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
 */async function yR(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(Kn(r));const s="reauthenticate";try{const i=await Ci(t,HE(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=jp(i.idToken);se(o,r,"internal-error");const{sub:l}=o;return se(t.uid===l,r,"user-mismatch"),Cs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&on(r,"user-mismatch"),i}}/**
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
 */async function KE(t,e,n=!1){if(fn(t.app))return Promise.reject(Kn(t));const r="signIn",s=await HE(t,r,e),i=await Cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vR(t,e){return KE(Yr(t),e)}/**
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
 */async function GE(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _R(t,e,n){if(fn(t.app))return Promise.reject(Kn(t));const r=Yr(t),o=await Uh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&GE(t),u}),l=await Cs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function wR(t,e,n){return fn(t.app)?Promise.reject(Kn(t)):vR(Ie(t),Vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&GE(t),r})}/**
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
 */async function ER(t,e){return ir(t,"POST","/v1/accounts:update",e)}/**
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
 */async function xR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ie(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ci(r,ER(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function TR(t,e){return Ie(t).setPersistence(e)}function IR(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function kR(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function AR(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}function SR(t){return Ie(t).signOut()}const bu="__sak";/**
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
 */class QE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bu,"1"),this.storage.removeItem(bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bR=1e3,RR=10;class YE extends QE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$b()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,RR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}YE.type="LOCAL";const XE=YE;/**
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
 */class JE extends QE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}JE.type="SESSION";const ZE=JE;/**
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
 */function CR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await CR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
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
 */function Fp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class NR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=Fp("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function PR(t){Rn().location.href=t}/**
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
 */function ex(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function DR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qR(){return ex()?self:null}/**
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
 */const tx="firebaseLocalStorageDb",jR=1,Ru="firebaseLocalStorage",nx="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yc(t,e){return t.transaction([Ru],e?"readwrite":"readonly").objectStore(Ru)}function LR(){const t=indexedDB.deleteDatabase(tx);return new Da(t).toPromise()}function Fh(){const t=indexedDB.open(tx,jR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ru,{keyPath:nx})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ru)?e(r):(r.close(),await LR(),e(await Fh()))})})}async function uv(t,e,n){const r=yc(t,!0).put({[nx]:e,value:n});return new Da(r).toPromise()}async function VR(t,e){const n=yc(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function cv(t,e){const n=yc(t,!0).delete(e);return new Da(n).toPromise()}const MR=800,UR=3;class rx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ex()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(qR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DR(),!this.activeServiceWorker)return;this.sender=new NR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fh();return await uv(e,bu,"1"),await cv(e,bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yc(s,!1).getAll();return new Da(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rx.type="LOCAL";const FR=rx;new Ca(3e4,6e4);/**
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
 */function sx(t,e){return e?$n(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zp extends Vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zR(t){return KE(t.auth,new zp(t),t.bypassAuthState)}function BR(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),yR(n,new zp(t),t.bypassAuthState)}async function $R(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),gR(n,new zp(t),t.bypassAuthState)}/**
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
 */class ix{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zR;case"linkViaPopup":case"linkViaRedirect":return $R;case"reauthViaPopup":case"reauthViaRedirect":return BR;default:on(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WR=new Ca(2e3,1e4);async function HR(t,e,n){if(fn(t.app))return Promise.reject(gn(t,"operation-not-supported-in-this-environment"));const r=Yr(t);kb(t,e,Up);const s=sx(r,n);return new ps(r,"signInViaPopup",e,s).executeNotNull()}class ps extends ix{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=Fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WR.get())};e()}}ps.currentPopupAction=null;/**
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
 */const KR="pendingRedirect",Ml=new Map;class GR extends ix{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const r=await QR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QR(t,e){const n=JR(e),r=XR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function YR(t,e){Ml.set(t._key(),e)}function XR(t){return $n(t._redirectPersistence)}function JR(t){return Vl(KR,t.config.apiKey,t.name)}async function ZR(t,e,n=!1){if(fn(t.app))return Promise.reject(Kn(t));const r=Yr(t),s=sx(r,e),o=await new GR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eC=10*60*1e3;class tC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ox(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eC&&this.cachedEventUids.clear(),this.cachedEventUids.has(dv(e))}saveEventToCache(e){this.cachedEventUids.add(dv(e)),this.lastProcessedEventTime=Date.now()}}function dv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ox({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ox(t);default:return!1}}/**
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
 */async function rC(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
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
 */const sC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iC=/^https?/;async function oC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rC(t);for(const n of e)try{if(aC(n))return}catch{}on(t,"unauthorized-domain")}function aC(t){const e=Vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iC.test(n))return!1;if(sC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const lC=new Ca(3e4,6e4);function hv(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uC(t){return new Promise((e,n)=>{var r,s,i;function o(){hv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hv(),n(gn(t,"network-request-failed"))},timeout:lC.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const l=Zb("iframefcb");return Rn()[l]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},$E(`${Jb()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ul=null,e})}let Ul=null;function cC(t){return Ul=Ul||uC(t),Ul}/**
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
 */const dC=new Ca(5e3,15e3),hC="__/auth/iframe",fC="emulator/auth/iframe",pC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gC(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qp(e,fC):`https://${t.config.authDomain}/${hC}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=mC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ya(r).slice(1)}`}async function yC(t){const e=await cC(t),n=Rn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:gC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},dC.get());function u(){Rn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const vC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_C=500,wC=600,EC="_blank",xC="http://localhost";class fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TC(t,e,n,r=_C,s=wC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},vC),{width:r.toString(),height:s.toString(),top:i,left:o}),d=xt().toLowerCase();n&&(l=LE(d)?EC:n),qE(d)&&(e=e||xC,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[A,R])=>`${g}${A}=${R},`,"");if(Bb(d)&&l!=="_self")return IC(e||"",l),new fv(null);const m=window.open(e||"",l,p);se(m,t,"popup-blocked");try{m.focus()}catch{}return new fv(m)}function IC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kC="__/auth/handler",AC="emulator/auth/handler",SC=encodeURIComponent("fac");async function pv(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof Up){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Pa){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${SC}=${encodeURIComponent(u)}`:"";return`${bC(t)}?${ya(l).slice(1)}${d}`}function bC({config:t}){return t.emulator?qp(t,AC):`https://${t.authDomain}/${kC}`}/**
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
 */const yd="webStorageSupport";class RC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZE,this._completeRedirectFn=ZR,this._overrideRedirectResult=YR}async _openPopup(e,n,r,s){var i;tr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await pv(e,n,r,Vh(),s);return TC(e,o,Fp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await pv(e,n,r,Vh(),s);return PR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yC(e),r=new tC(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yd,{type:yd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[yd];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zE()||jE()||Lp()}}const CC=RC;var mv="@firebase/auth",gv="1.7.9";/**
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
 */class NC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DC(t){Is(new Ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BE(t)},d=new Qb(r,s,i,u);return sR(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Is(new Ur("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new NC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(mv,gv,PC(t)),An(mv,gv,"esm2017")}/**
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
 */const OC=5*60,qC=J0("authIdTokenMaxAge")||OC;let yv=null;const jC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qC)return;const s=n==null?void 0:n.token;yv!==s&&(yv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LC(t=Bf()){const e=Qu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rR(t,{popupRedirectResolver:CC,persistence:[FR,XE,ZE]}),r=J0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=jC(i.toString());kR(n,o,()=>o(n.currentUser)),IR(n,l=>o(l))}}const s=Q0("auth");return s&&iR(n,`http://${s}`),n}function VC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Yb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",VC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DC("Browser");/**
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
 */const ax="firebasestorage.googleapis.com",lx="storageBucket",MC=2*60*1e3,UC=10*60*1e3;/**
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
 */class Be extends Dn{constructor(e,n,r=0){super(vd(e),`Firebase Storage: ${n} (${vd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ze||(ze={}));function vd(t){return"storage/"+t}function Bp(){const t="An unknown error occurred, please check the error payload for server response.";return new Be(ze.UNKNOWN,t)}function FC(t){return new Be(ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function zC(t){return new Be(ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function BC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be(ze.UNAUTHENTICATED,t)}function $C(){return new Be(ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function WC(t){return new Be(ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function HC(){return new Be(ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function KC(){return new Be(ze.CANCELED,"User canceled the upload/download.")}function GC(t){return new Be(ze.INVALID_URL,"Invalid URL '"+t+"'.")}function QC(t){return new Be(ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function YC(){return new Be(ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+lx+"' property when initializing the app?")}function XC(){return new Be(ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function JC(){return new Be(ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZC(t){return new Be(ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zh(t){return new Be(ze.INVALID_ARGUMENT,t)}function ux(){return new Be(ze.APP_DELETED,"The Firebase app was deleted.")}function eN(t){return new Be(ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qo(t,e){return new Be(ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function lo(t){throw new Be(ze.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw QC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(O){O.path_=decodeURIComponent(O.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${p}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},C=n===ax?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",T=new RegExp(`^https?://${C}/${s}/${b}`,"i"),k=[{regex:l,indices:u,postModify:i},{regex:A,indices:R,postModify:d},{regex:T,indices:{bucket:1,path:2},postModify:d}];for(let O=0;O<k.length;O++){const U=k[O],B=U.regex.exec(e);if(B){const E=B[U.indices.bucket];let v=B[U.indices.path];v||(v=""),r=new Wt(E,v),U.postModify(r);break}}if(r==null)throw GC(e);return r}}class tN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function nN(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let d=!1;function p(...b){d||(d=!0,e.apply(null,b))}function m(b){s=setTimeout(()=>{s=null,t(A,u())},b)}function g(){i&&clearTimeout(i)}function A(b,...T){if(d){g();return}if(b){g(),p.call(null,b,...T);return}if(u()||o){g(),p.call(null,b,...T);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,m(k)}let R=!1;function C(b){R||(R=!0,g(),!d&&(s!==null?(b||(l=2),clearTimeout(s),m(0)):b||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,C(!0)},n),C}function rN(t){t(!1)}/**
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
 */function sN(t){return t!==void 0}function iN(t){return typeof t=="object"&&!Array.isArray(t)}function $p(t){return typeof t=="string"||t instanceof String}function vv(t){return Wp()&&t instanceof Blob}function Wp(){return typeof Blob<"u"}function _v(t,e,n,r){if(r<e)throw zh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Hp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function cx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var vs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vs||(vs={}));/**
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
 */function oN(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class aN{constructor(e,n,r,s,i,o,l,u,d,p,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,R)=>{this.resolve_=A,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new yl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===vs.NO_ERROR,u=i.getStatus();if(!l||oN(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===vs.ABORT;r(!1,new yl(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new yl(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());sN(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Bp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?ux():KC();o(u)}else{const u=HC();o(u)}};this.canceled_?n(!1,new yl(!1,null,!0)):this.backoffId_=nN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function lN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function uN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hN(t,e,n,r,s,i,o=!0){const l=cx(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return cN(d,e),lN(d,n),uN(d,i),dN(d,r),new aN(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function fN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pN(...t){const e=fN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wp())return new Blob(t);throw new Be(ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function gN(t){if(typeof atob>"u")throw ZC("base-64");return atob(t)}/**
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
 */const Tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _d{constructor(e,n){this.data=e,this.contentType=n||null}}function yN(t,e){switch(t){case Tn.RAW:return new _d(dx(e));case Tn.BASE64:case Tn.BASE64URL:return new _d(hx(t,e));case Tn.DATA_URL:return new _d(_N(e),wN(e))}throw Bp()}function dx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function vN(t){let e;try{e=decodeURIComponent(t)}catch{throw qo(Tn.DATA_URL,"Malformed data URL.")}return dx(e)}function hx(t,e){switch(t){case Tn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw qo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Tn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw qo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gN(e)}catch(s){throw s.message.includes("polyfill")?s:qo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class fx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qo(Tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=EN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function _N(t){const e=new fx(t);return e.base64?hx(Tn.BASE64,e.rest):vN(e.rest)}function wN(t){return new fx(t).contentType}function EN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class xr{constructor(e,n){let r=0,s="";vv(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(vv(this.data_)){const r=this.data_,s=mN(r,e,n);return s===null?null:new xr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new xr(r,!0)}}static getBlob(...e){if(Wp()){const n=e.map(r=>r instanceof xr?r.data_:r);return new xr(pN.apply(null,n))}else{const n=e.map(o=>$p(o)?yN(Tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new xr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function px(t){let e;try{e=JSON.parse(t)}catch{return null}return iN(e)?e:null}/**
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
 */function xN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function IN(t,e){return e}class kt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||IN}}let vl=null;function kN(t){return!$p(t)||t.length<2?t:mx(t)}function gx(){if(vl)return vl;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(i,o){return kN(o)}const n=new kt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new kt("size");return s.xform=r,t.push(s),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),vl=t,vl}function AN(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Wt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function SN(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return AN(r,t),r}function yx(t,e,n){const r=px(e);return r===null?null:SN(t,r,n)}function bN(t,e,n,r){const s=px(e);if(s===null||!$p(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const p=t.bucket,m=t.fullPath,g="/b/"+o(p)+"/o/"+o(m),A=Hp(g,n,r),R=cx({alt:"media",token:d});return A+R})[0]}function RN(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class vx{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _x(t){if(!t)throw Bp()}function CN(t,e){function n(r,s){const i=yx(t,s,e);return _x(i!==null),i}return n}function NN(t,e){function n(r,s){const i=yx(t,s,e);return _x(i!==null),bN(i,s,t.host,t._protocol)}return n}function wx(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=$C():s=BC():n.getStatus()===402?s=zC(t.bucket):n.getStatus()===403?s=WC(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function PN(t){const e=wx(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=FC(t.path)),i.serverResponse=s.serverResponse,i}return n}function DN(t,e,n){const r=e.fullServerUrl(),s=Hp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new vx(s,i,NN(t,n),o);return l.errorHandler=PN(e),l}function ON(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function qN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=ON(null,e)),r}function jN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let O=0;O<2;O++)k=k+Math.random().toString().slice(2);return k}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const d=qN(e,r,s),p=RN(d,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+u+"--",A=xr.getBlob(m,r,g);if(A===null)throw XC();const R={name:d.fullPath},C=Hp(i,t.host,t._protocol),b="POST",T=t.maxUploadRetryTime,_=new vx(C,b,CN(t,n),T);return _.urlParams=R,_.headers=o,_.body=A.uploadData(),_.errorHandler=wx(e),_}class LN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw lo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw lo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw lo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw lo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw lo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VN extends LN{initXhr(){this.xhr_.responseType="text"}}function Ex(){return new VN}/**
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
 */class Ns{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ns(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mx(this._location.path)}get storage(){return this._service}get parent(){const e=xN(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new Ns(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eN(e)}}function MN(t,e,n){t._throwIfRoot("uploadBytes");const r=jN(t.storage,t._location,gx(),new xr(e,!0),n);return t.storage.makeRequestWithTokens(r,Ex).then(s=>({metadata:s,ref:t}))}function UN(t){t._throwIfRoot("getDownloadURL");const e=DN(t.storage,t._location,gx());return t.storage.makeRequestWithTokens(e,Ex).then(n=>{if(n===null)throw JC();return n})}function FN(t,e){const n=TN(t._location.path,e),r=new Wt(t._location.bucket,n);return new Ns(t.storage,r)}/**
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
 */function zN(t){return/^[A-Za-z]+:\/\//.test(t)}function BN(t,e){return new Ns(t,e)}function xx(t,e){if(t instanceof Kp){const n=t;if(n._bucket==null)throw YC();const r=new Ns(n,n._bucket);return e!=null?xx(r,e):r}else return e!==void 0?FN(t,e):t}function $N(t,e){if(e&&zN(e)){if(t instanceof Kp)return BN(t,e);throw zh("To use ref(service, url), the first argument must be a Storage instance.")}else return xx(t,e)}function wv(t,e){const n=e==null?void 0:e[lx];return n==null?null:Wt.makeFromBucketSpec(n,t)}function WN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Z0(s,t.app.options.projectId))}class Kp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ax,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MC,this._maxUploadRetryTime=UC,this._requests=new Set,s!=null?this._bucket=Wt.makeFromBucketSpec(s,this._host):this._bucket=wv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=wv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_v("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_v("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ns(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new tN(ux());{const o=hN(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ev="@firebase/storage",xv="0.13.2";/**
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
 */const Tx="storage";function HN(t,e,n){return t=Ie(t),MN(t,e,n)}function KN(t){return t=Ie(t),UN(t)}function GN(t,e){return t=Ie(t),$N(t,e)}function QN(t=Bf(),e){t=Ie(t);const r=Qu(t,Tx).getImmediate({identifier:e}),s=Y0("storage");return s&&YN(r,...s),r}function YN(t,e,n,r={}){WN(t,e,n,r)}function XN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Kp(n,r,s,e,Os)}function JN(){Is(new Ur(Tx,XN,"PUBLIC").setMultipleInstances(!0)),An(Ev,xv,""),An(Ev,xv,"esm2017")}JN();const ZN={apiKey:"AIzaSyCiTAiDphBPNjd4dKwEYArGY8pXWf55sZQ",authDomain:"irangram-79830.firebaseapp.com",projectId:"irangram-79830",storageBucket:"irangram-79830.firebasestorage.app",messagingSenderId:"355877653612",appId:"1:355877653612:web:5512841c0ab55b6b011c49",measurementId:"G-RZWEBR7XJ7"};let _l,ee=null,an=null,Cu=null;try{_l=nw(ZN),ee=db(_l),an=LC(_l);try{Cu=QN(_l)}catch(t){console.warn("Firebase Storage not available. File uploads will be disabled.",t),Cu=null}TR(an,XE).catch(t=>{console.error("Firebase Persistence Error:",t)}),console.log("Firebase Connected Successfully")}catch(t){console.error("Firebase Initialization Error:",t)}var Tv={};const Ht={USE_REAL_SERVER:!1,API_BASE_URL:Tv.REACT_APP_API_URL||"http://localhost:5000/api",SOCKET_URL:Tv.REACT_APP_SOCKET_URL||"http://localhost:5000",APP_NAME:"ایران‌گرام",VERSION:"1.7.0",OWNER_EMAIL:"amirrezaveisi45@gmail.com"},eP=t=>an?AR(an,t):()=>{},tP=async(t,e,n,r)=>{if(!an)throw new Error("Auth not initialized");const i=(await _R(an,t,e)).user,o=t===Ht.OWNER_EMAIL?"owner":"user";return await xR(i,{displayName:n}),ee&&await fc(ct(ee,"users",i.uid),{name:n,email:t,phone:r,username:t.split("@")[0],bio:"کاربر جدید ایران‌گرام",avatar:`https://ui-avatars.com/api/?name=${n}&background=random&color=fff&size=128`,role:o,isBanned:!1,createdAt:nn(),lastSeen:nn(),status:"online"}),i},nP=async(t,e)=>{if(!an)throw new Error("Auth not initialized");const n=await wR(an,t,e);if(ee&&n.user){const r=ct(ee,"users",n.user.uid),s={status:"online",lastSeen:nn()};t===Ht.OWNER_EMAIL&&(s.role="owner"),sr(r,s).catch(i=>console.log("Status update error",i))}return n.user},rP=async()=>{if(!an)throw new Error("Auth not initialized");const t=new Mn;try{const n=(await HR(an,t)).user,r=n.email||"",s=r===Ht.OWNER_EMAIL?"owner":"user";if(ee){const i=ct(ee,"users",n.uid);if(!(await ba(i)).exists())await fc(i,{name:n.displayName||"کاربر گوگل",email:r,phone:"",username:r.split("@")[0]||"user",bio:"کاربر جدید ایران‌گرام",avatar:n.photoURL||`https://ui-avatars.com/api/?name=${n.displayName}&background=random&color=fff&size=128`,role:s,isBanned:!1,createdAt:nn(),lastSeen:nn(),status:"online"});else{const l={status:"online",lastSeen:nn()};r===Ht.OWNER_EMAIL&&(l.role="owner"),await sr(i,l).catch(u=>console.log("Status update error",u))}}return n}catch(e){throw console.error("Google Sign-In Error",e),e}},wd=async t=>{an&&(t&&ee&&await sr(ct(ee,"users",t),{status:"offline",lastSeen:nn()}).catch(()=>{}),await SR(an))},sP=async t=>{if(!ee)return null;try{const e=ct(ee,"users",t),n=await ba(e);if(n.exists())return n.data()}catch(e){console.error("Error fetching profile",e)}return null},iP=(t,e)=>{if(!ee)return()=>{};const n=ct(ee,"users",t);return pc(n,r=>{r.exists()&&e({uid:r.id,...r.data()})})},oP=async(t,e)=>{if(!ee)return;const n=ct(ee,"users",t);await sr(n,e)},aP=async t=>{if(!ee)return null;let e=Pn(Qt(ee,"users"),bs("username","==",t.replace("@",""))),n=await $r(e);if(!n.empty){const r=n.docs[0];return{uid:r.id,...r.data()}}if(e=Pn(Qt(ee,"users"),bs("phone","==",t)),n=await $r(e),!n.empty){const r=n.docs[0];return{uid:r.id,...r.data()}}return null},lP=async(t,e)=>{if(!Cu)throw new Error("سرویس ذخیره‌سازی فایل (Storage) در دسترس نیست یا پیکربندی نشده است.");const n=GN(Cu,e),r=await HN(n,t);return await KN(r.ref)},uP=async(t,e,n)=>{if(!ee)return;const r=Pn(Qt(ee,"users"),bs("email","==",Ht.OWNER_EMAIL)),s=await $r(r);let i="";s.empty||(i=s.docs[0].id),i&&await Np(Qt(ee,"users",i,"notifications"),{title:`درخواست رفع مسدودی: ${e}`,message:n,senderId:t,type:"alert",read:!1,createdAt:nn()})},cP=async()=>{if(!ee)return[];try{const t=Pn(Qt(ee,"users"),Sp("createdAt","desc"));return(await $r(t)).docs.map(n=>({uid:n.id,...n.data()}))}catch(t){return console.error("Error fetching users",t),[]}},dP=async(t,e)=>{if(!ee)return;const n=ct(ee,"users",t);await sr(n,{role:e})},hP=async(t,e)=>{if(!ee)return;const n=ct(ee,"users",t);await sr(n,{isBanned:!e})},Ix=async t=>{if(ee)try{await Eb(ct(ee,"global_chat",t))}catch(e){console.error("Error deleting global message",e)}},fP=async()=>{if(ee)try{const t=Pn(Qt(ee,"global_chat")),e=await $r(t),n=AE(ee);let r=0;e.forEach(s=>{n.delete(s.ref),r++,r>=490}),await n.commit(),console.log(`Cleared ${r} messages.`)}catch(t){console.error("Error clearing chat",t)}},kx=async()=>{if(!ee)return[];const t=ct(ee,"settings","wordFilters"),e=await ba(t);return e.exists()?e.data().bannedWords||[]:[]},Iv=async t=>{if(!ee)return;const e=ct(ee,"settings","wordFilters");await fc(e,{bannedWords:t},{merge:!0})},pP=async t=>{if(!ee)return[];try{const e=Pn(Qt(ee,"global_chat"),bs("senderId","==",t),Sp("createdAt","desc"),EE(50));return(await $r(e)).docs.map(r=>{const s=r.data();return{id:r.id,...s,timestamp:s.createdAt?s.createdAt.toMillis():Date.now()}})}catch{const n=Pn(Qt(ee,"global_chat"),bs("senderId","==",t));return(await $r(n)).docs.map(s=>({id:s.id,...s.data()}))}},mP=async(t,e,n)=>{if(ee)try{await Np(Qt(ee,"users",t,"notifications"),{title:e,message:n,type:"alert",read:!1,createdAt:nn()})}catch(r){console.error("Error sending notification",r)}},gP=(t,e)=>{if(!ee)return()=>{};const n=Pn(Qt(ee,"users",t,"notifications"),bs("read","==",!1));return pc(n,r=>{const s=r.docs.map(o=>{const l=o.data();return{id:o.id,...l,createdAt:l.createdAt?l.createdAt.toMillis():Date.now()}});s.sort((o,l)=>l.createdAt-o.createdAt);const i=s.slice(0,10);e(i)})},yP=async(t,e)=>{ee&&await sr(ct(ee,"users",t,"notifications",e),{read:!0})},vP=t=>{if(!ee)return()=>{};const e=Pn(Qt(ee,"global_chat"),Sp("createdAt","desc"),EE(50));return pc(e,r=>{const s=[];r.forEach(i=>{const o=i.data();s.push({id:i.id,text:o.text,senderId:o.senderId,senderName:o.senderName,senderAvatar:o.senderAvatar,senderRole:o.senderRole||"user",timestamp:o.createdAt?o.createdAt.toMillis():Date.now(),status:"read",type:o.type||"text",imageUrl:o.imageUrl,fileUrl:o.fileUrl,fileName:o.fileName,fileSize:o.fileSize,audioDuration:o.audioDuration,isSticker:o.isSticker,replyToId:o.replyToId,edited:o.edited,reactions:o.reactions||{}})}),t(s.reverse())})},_P=async(t,e)=>{if(!ee){console.error("Database not initialized");return}try{let n=t.text||"";n&&t.type==="text"&&(await kx()).forEach(s=>{const i=new RegExp(s,"gi");n=n.replace(i,"*".repeat(s.length))}),await Np(Qt(ee,"global_chat"),{text:n,senderId:t.senderId,senderName:e.name,senderAvatar:e.avatar||"",senderRole:e.role||"user",type:t.type||"text",imageUrl:t.imageUrl||null,fileUrl:t.fileUrl||null,fileName:t.fileName||null,fileSize:t.fileSize||null,audioDuration:t.audioDuration||null,isSticker:t.isSticker||!1,replyToId:t.replyToId||null,createdAt:nn(),edited:!1,reactions:{}})}catch(n){console.error("Error adding document: ",n)}},wP=async(t,e,n)=>{if(!ee)return;const r=ct(ee,"global_chat",t);try{const s=await ba(r);if(s.exists()){const o=s.data().reactions||{},l=o[e]||[];let u={...o};l.includes(n)?(u[e]=l.filter(d=>d!==n),u[e].length===0&&delete u[e]):u[e]=[...l,n],await sr(r,{reactions:u})}}catch(s){console.error("Error toggling reaction:",s)}},EP=t=>{if(!ee)return()=>{};const e=ct(ee,"system","info");return pc(e,n=>{if(n.exists()){const r=n.data();t({currentVersion:r.currentVersion||Ht.VERSION,lastCleanup:r.lastCleanup?r.lastCleanup.toMillis():0})}else fc(e,{currentVersion:Ht.VERSION,lastCleanup:nn()})})},xP=async()=>{if(ee)try{const t=ct(ee,"system","info"),e=await ba(t);if(e.exists()){const n=e.data(),r=n.lastCleanup?n.lastCleanup.toMillis():0,s=Date.now();if(s-r>864e5){console.log("Triggering 24h cleanup..."),await sr(t,{lastCleanup:nn()});const i=new Date(s-864e5),o=Pn(Qt(ee,"global_chat"),bs("createdAt","<",i)),l=await $r(o),u=AE(ee);let d=0;l.forEach(p=>{u.delete(p.ref),d++}),d>0&&(await u.commit(),console.log(`Cleanup: Deleted ${d} old messages.`))}}}catch(t){console.error("Error in auto cleanup:",t)}},TP=({contacts:t,sessions:e,activeContactId:n,onSelectContact:r,toggleTheme:s,theme:i,userProfile:o,onOpenSettings:l,onOpenAdminPanel:u,onAddContact:d,showInstallButton:p,onInstall:m,storedAccounts:g,onAddAccount:A,onSwitchAccount:R})=>{var ue;const[C,b]=M.useState(""),[T,_]=M.useState(!1),[k,O]=M.useState(!1),[U,B]=M.useState("all"),[E,v]=M.useState(!1),[w,I]=M.useState(""),[S,N]=M.useState(!1),[x,Se]=M.useState(null),[H,pe]=M.useState(""),he=M.useRef(null);M.useEffect(()=>{const K=me=>{he.current&&!he.current.contains(me.target)&&_(!1)};return document.addEventListener("mousedown",K),()=>document.removeEventListener("mousedown",K)},[]);const $=async()=>{if(!w.trim())return;N(!0),pe(""),Se(null);const K=await aP(w);K?K.username===o.username?pe("شما نمی‌توانید خودتان را اضافه کنید."):Se(K):pe("کاربری با این مشخصات یافت نشد."),N(!1)},Z=()=>{if(x){const K={id:x.uid,name:x.name,avatar:x.avatar,bio:x.bio,username:"@"+x.username,phone:x.phone,status:"offline",type:"user"};d(K),v(!1),Se(null),I("")}},re=t.filter(K=>{const me=K.name.toLowerCase().includes(C.toLowerCase())||K.username.toLowerCase().includes(C.toLowerCase());let ke=!0;return U==="personal"?ke=K.type==="user":U==="groups"&&(ke=K.type==="group"||K.type==="channel"),me&&ke}),ye=K=>{const me=new Date(K);return Date.now()-K>24*60*60*1e3?me.toLocaleDateString("fa-IR"):me.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"})};return h.jsxs("div",{className:"h-full flex flex-col bg-telegram-bg dark:bg-telegram-bgDark border-l border-telegram-border dark:border-telegram-borderDark relative",children:[h.jsxs("div",{className:`absolute top-0 right-0 h-full w-72 bg-white dark:bg-telegram-secondaryDark z-30 shadow-2xl transform transition-transform duration-300 ease-in-out ${T?"translate-x-0":"translate-x-full"}`,ref:he,children:[h.jsxs("div",{className:"bg-telegram-primary p-5 flex flex-col justify-end text-white relative overflow-hidden transition-all duration-300",children:[h.jsx("div",{className:"absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"}),h.jsxs("div",{className:"flex justify-between items-start mb-2 relative z-10",children:[h.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-telegram-primary mb-3 text-2xl font-bold shadow-md uppercase overflow-hidden",children:((ue=o.name)==null?void 0:ue.charAt(0))||"U"}),h.jsx("button",{onClick:s,className:"p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors",children:i===us.DARK?h.jsx(HI,{size:20}):h.jsx(jI,{size:20})})]}),h.jsxs("div",{className:"relative z-10 cursor-pointer",onClick:()=>O(!k),children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsxs("div",{className:"font-bold text-lg truncate flex items-center gap-2",children:[o.name,o.role==="owner"&&h.jsx("span",{className:"bg-yellow-400 text-black text-[10px] px-1.5 rounded-full",children:"Owner"}),o.role==="admin"&&h.jsx("span",{className:"bg-blue-400 text-black text-[10px] px-1.5 rounded-full",children:"Admin"})]}),h.jsx(V0,{size:18,className:`transition-transform duration-300 ${k?"rotate-180":""}`})]}),h.jsx("div",{className:"text-sm opacity-80 font-mono dir-ltr text-right",children:o.phone||o.username})]})]}),h.jsx("div",{className:"flex-1 overflow-y-auto",children:k?h.jsxs("div",{className:"py-2 animate-fade-in",children:[g.filter(K=>K.username!==o.username).map(K=>h.jsxs("button",{onClick:()=>{R(K.uid),_(!1),O(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[h.jsx("img",{src:K.avatar,className:"w-9 h-9 rounded-full bg-gray-200"}),h.jsxs("div",{className:"text-right",children:[h.jsx("div",{className:"font-bold text-sm",children:K.name}),h.jsxs("div",{className:"text-xs opacity-60",children:["@",K.username]})]})]},K.uid)),h.jsxs("button",{onClick:()=>{A(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[h.jsx("div",{className:"w-9 h-9 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center",children:h.jsx($0,{size:18})}),h.jsx("span",{className:"font-medium",children:"افزودن حساب کاربری"})]})]}):h.jsxs("div",{className:"py-2 flex flex-col animate-fade-in",children:[h.jsxs("button",{onClick:()=>{v(!0),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[h.jsx(ey,{size:22,className:"text-gray-500"}),h.jsx("span",{className:"font-medium",children:"افزودن مخاطب"})]}),h.jsxs("button",{onClick:()=>{r("saved"),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[h.jsx(Qg,{size:22,className:"text-gray-500"}),h.jsx("span",{className:"font-medium",children:"پیام‌های ذخیره شده"})]}),h.jsxs("button",{onClick:()=>{l(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[h.jsx(W0,{size:22,className:"text-gray-500"}),h.jsx("span",{className:"font-medium",children:"تنظیمات"})]}),p&&h.jsxs("button",{onClick:()=>{m(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[h.jsx(Ku,{size:22,className:"text-gray-500"}),h.jsx("span",{className:"font-medium",children:"نصب اپلیکیشن"})]}),(o.role==="owner"||o.role==="admin")&&h.jsxs("button",{onClick:()=>{u(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-red-50 dark:hover:bg-red-900/10 text-red-600 dark:text-red-400 transition-colors border-t border-gray-100 dark:border-gray-700 mt-2",children:[h.jsx(Uf,{size:22}),h.jsx("span",{className:"font-bold",children:"پنل مدیریت"})]})]})})]}),T&&h.jsx("div",{className:"absolute inset-0 bg-black/50 z-20 backdrop-blur-sm transition-opacity",onClick:()=>_(!1)}),E&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 w-full max-w-sm rounded-2xl shadow-2xl p-6",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"افزودن مخاطب جدید"}),h.jsx("button",{onClick:()=>v(!1),children:h.jsx(Or,{size:20,className:"text-gray-500"})})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"text-sm text-gray-500 block mb-2",children:"شماره تلفن یا نام کاربری"}),h.jsx("input",{value:w,onChange:K=>I(K.target.value),placeholder:"@username یا 0912...",className:"w-full bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-telegram-primary text-gray-900 dark:text-white"})]}),H&&h.jsx("p",{className:"text-red-500 text-sm mb-4",children:H}),x&&h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl flex items-center gap-3 mb-4 border border-green-200 dark:border-green-800",children:[h.jsx("img",{src:x.avatar,className:"w-10 h-10 rounded-full"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-bold text-gray-900 dark:text-white",children:x.name}),h.jsx("p",{className:"text-xs text-gray-500",children:x.username})]}),h.jsx(IP,{className:"mr-auto text-green-500"})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("button",{onClick:$,disabled:S,className:"flex-1 bg-telegram-secondary dark:bg-gray-700 text-telegram-primary font-bold py-3 rounded-xl",children:S?h.jsx(U0,{className:"animate-spin mx-auto"}):"جستجو"}),x&&h.jsx("button",{onClick:Z,className:"flex-1 bg-telegram-primary text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors",children:"افزودن"})]})]})}),h.jsxs("div",{className:"px-3 py-2 flex items-center gap-2 shrink-0",children:[h.jsx("button",{onClick:()=>{_(!0),O(!1)},className:"p-2 hover:bg-telegram-secondary dark:hover:bg-telegram-secondaryDark rounded-full text-gray-500 dark:text-gray-400",children:h.jsx(OI,{size:24})}),h.jsxs("div",{className:"relative flex-1",children:[h.jsx("input",{type:"text",placeholder:"جستجو...",value:C,onChange:K=>b(K.target.value),className:"w-full bg-telegram-secondary dark:bg-telegram-secondaryDark text-gray-900 dark:text-white rounded-full py-2 pr-9 pl-4 focus:outline-none focus:ring-1 focus:ring-telegram-primary/50 text-sm"}),h.jsx($I,{className:"absolute right-3 top-2.5 text-gray-500 w-4 h-4"})]})]}),h.jsx("div",{className:"flex px-2 pb-1 shrink-0 border-b border-telegram-border dark:border-telegram-borderDark",children:["all","personal","groups"].map(K=>h.jsx("button",{onClick:()=>B(K),className:`flex-1 text-center py-2 border-b-2 font-medium text-sm transition-colors ${U===K?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500"}`,children:K==="all"?"همه":K==="personal"?"شخصی":"گروه‌ها"},K))}),h.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:re.map(K=>{const me=e[K.id],ke=me==null?void 0:me.messages[me.messages.length-1],Le=n===K.id;return h.jsxs("div",{onClick:()=>r(K.id),className:`flex items-center gap-3 p-2.5 mx-2 my-1 rounded-xl cursor-pointer transition-colors ${Le?"bg-telegram-primary text-white":"hover:bg-gray-100 dark:hover:bg-white/5"}`,children:[h.jsxs("div",{className:"relative shrink-0",children:[K.id==="saved"?h.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white",children:h.jsx(Qg,{size:24,fill:"currentColor"})}):h.jsx("img",{src:K.avatar,alt:K.name,className:"w-12 h-12 rounded-full object-cover bg-gray-200"}),K.id!=="saved"&&K.status==="online"&&h.jsx("div",{className:`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 ${Le?"bg-white border-telegram-primary":"bg-green-500 border-white dark:border-black"}`})]}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex justify-between items-baseline mb-0.5",children:[h.jsx("h3",{className:`font-semibold text-base truncate ${Le?"text-white":"text-gray-900 dark:text-gray-100"}`,children:K.name}),ke&&h.jsx("span",{className:`text-[10px] ${Le?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:ye(ke.timestamp)})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("p",{className:`text-sm truncate ${Le?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:K.status==="typing..."?h.jsx("span",{className:"text-telegram-primary animate-pulse",children:"در حال نوشتن..."}):ke?h.jsxs("span",{className:"flex items-center gap-1",children:[ke.senderId==="me"&&h.jsx("span",{className:"opacity-80",children:"شما:"}),ke.type==="image"?"🖼️ عکس":ke.type==="audio"?"🎤 ویس":ke.text]}):h.jsx("span",{className:"italic opacity-60",children:"گفتگو را شروع کنید"})}),(me==null?void 0:me.unreadCount)>0&&h.jsx("span",{className:`min-w-[1.25rem] h-5 px-1 rounded-full text-xs font-bold flex items-center justify-center ${Le?"bg-white text-telegram-primary":"bg-telegram-primary text-white"}`,children:me.unreadCount})]})]})]},K.id)})}),h.jsx("button",{onClick:()=>{v(!0)},className:"absolute bottom-6 left-6 w-14 h-14 bg-telegram-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:h.jsx(ey,{size:24})})]})},IP=({className:t})=>h.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[h.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),h.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),kP=({imageUrl:t,onClose:e})=>h.jsxs("div",{className:"fixed inset-0 z-[60] bg-black/95 flex items-center justify-center animate-fade-in backdrop-blur-sm",onClick:e,children:[h.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 backdrop-blur-md",children:h.jsx(Or,{size:24})}),h.jsx("a",{href:t,download:!0,onClick:n=>n.stopPropagation(),className:"absolute top-4 left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 backdrop-blur-md",title:"دانلود تصویر",children:h.jsx(Ku,{size:24})}),h.jsx("div",{className:"w-full h-full p-4 flex items-center justify-center",children:h.jsx("img",{src:t,alt:"Full view",className:"max-w-full max-h-full object-contain select-none shadow-2xl rounded-md",onClick:n=>n.stopPropagation()})})]}),AP=["😀","😂","🥰","😎","🤔","😭","👍","👎","❤️","🔥","👀","✅","💯","🌹"],SP=["👍","❤️","😂","😮","😢","🔥"],bP=["https://cdn-icons-png.flaticon.com/512/742/742751.png","https://cdn-icons-png.flaticon.com/512/742/742752.png","https://cdn-icons-png.flaticon.com/512/742/742822.png","https://cdn-icons-png.flaticon.com/512/742/742760.png","https://cdn-icons-png.flaticon.com/512/742/742920.png","https://cdn-icons-png.flaticon.com/512/742/742786.png","https://cdn-icons-png.flaticon.com/512/166/166538.png","https://cdn-icons-png.flaticon.com/512/190/190623.png","https://cdn-icons-png.flaticon.com/512/417/417779.png"],RP=t=>{const e=["#df3f4c","#4a9e56","#e08e0b","#8c52ff","#ff5ca8","#31b5d6","#3390ec"];let n=0;for(let r=0;r<t.length;r++)n=t.charCodeAt(r)+((n<<5)-n);return e[Math.abs(n)%e.length]},CP=({contact:t,messages:e,myId:n,myRole:r,onSendMessage:s,onEditMessage:i,onDeleteMessage:o,onReaction:l,onBack:u,isMobile:d,onProfileClick:p,onAvatarClick:m,wallpaper:g,onCall:A})=>{const[R,C]=M.useState(""),[b,T]=M.useState(null),[_,k]=M.useState(null),[O,U]=M.useState(null),[B,E]=M.useState(!1),[v,w]=M.useState("emoji"),[I,S]=M.useState(!1),[N,x]=M.useState(!1),[Se,H]=M.useState(0),[pe,he]=M.useState(null),[$,Z]=M.useState(null),[re,ye]=M.useState(!1),[ue,K]=M.useState(!1),me=M.useRef(null),ke=M.useRef(null),Le=M.useRef(null),Tt=M.useRef(null),Ls=M.useRef(null),Xr=M.useRef(null),Pt=M.useRef(null),Ut=M.useRef([]),_n=M.useRef(null),or=t.type==="group",ar=t.id==="global_chat";M.useEffect(()=>{var P;(P=me.current)==null||P.scrollIntoView({behavior:"auto"})},[e.length,b]),M.useEffect(()=>{const P=()=>{U(null),E(!1),S(!1)};return window.addEventListener("click",P),()=>window.removeEventListener("click",P)},[]);const lr=()=>{R.trim()&&(_?(i(_.id,R),k(null)):(s({text:R,type:"text"},b==null?void 0:b.id),T(null)),C(""))},Jr=P=>{s({imageUrl:P,type:"image",isSticker:!0},b==null?void 0:b.id),T(null),E(!1)},Mi=async()=>{try{const P=await navigator.mediaDevices.getUserMedia({audio:!0}),L=new MediaRecorder(P);Pt.current=L,Ut.current=[],L.ondataavailable=X=>{X.data.size>0&&Ut.current.push(X.data)},L.start(),x(!0),H(0),Xr.current=window.setInterval(()=>H(X=>X+1),1e3)}catch(P){console.error("Error accessing microphone:",P),alert("دسترسی به میکروفون امکان پذیر نیست.")}},Vs=P=>{Xr.current&&clearInterval(Xr.current),Pt.current&&N&&(Pt.current.onstop=()=>{var L;if(P&&Ut.current.length>0){const X=new Blob(Ut.current,{type:"audio/mp3"}),xe=Math.floor(Se/60),Ve=Se%60;s({type:"audio",file:X,audioDuration:`${xe}:${Ve.toString().padStart(2,"0")}`},b==null?void 0:b.id),T(null)}(L=Pt.current)==null||L.stream.getTracks().forEach(X=>X.stop())},Pt.current.stop()),x(!1),H(0)},ur=(P,L="image")=>{if(P){const X=(P.size/1024/1024).toFixed(2)+" MB";s({type:L,file:P,fileName:P.name,fileSize:X,text:L==="image"?"عکس":P.name},b==null?void 0:b.id),T(null),S(!1)}},Zr=P=>{P.preventDefault(),P.stopPropagation(),ye(!1);const L=P.dataTransfer.files;if(L&&L.length>0){const X=L[0],xe=X.type.startsWith("image/");ur(X,xe?"image":"file")}},es=async()=>{ar&&r==="owner"&&confirm("آیا از پاک کردن کل تاریخچه چت جهانی مطمئن هستید؟ این عمل غیرقابل بازگشت است.")&&await fP()},Ms=(P,L)=>{var X;if(P)if(pe===L)(X=_n.current)==null||X.pause(),he(null);else{_n.current&&_n.current.pause();const xe=new Audio(P);_n.current=xe,he(L),xe.play(),xe.onended=()=>he(null)}},V=P=>new Date(P).toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"}),Y=()=>g==="default"?{}:g.startsWith("http")||g.startsWith("data")?{backgroundImage:`url(${g})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:g};return h.jsxs("div",{className:"h-full flex flex-col relative bg-telegram-bg dark:bg-telegram-bgDark overflow-hidden",onDragOver:P=>{P.preventDefault(),ye(!0)},onDragLeave:P=>{P.preventDefault(),P.currentTarget.contains(P.relatedTarget)||ye(!1)},onDrop:Zr,children:[re&&h.jsxs("div",{className:"absolute inset-0 z-50 bg-telegram-primary/80 backdrop-blur-sm flex flex-col items-center justify-center text-white animate-fade-in",children:[h.jsx(Jg,{size:64,className:"mb-4 animate-bounce"}),h.jsx("h2",{className:"text-2xl font-bold",children:"رها کنید تا ارسال شود"})]}),$&&h.jsx(kP,{imageUrl:$,onClose:()=>Z(null)}),h.jsx("input",{type:"file",ref:Tt,className:"hidden",accept:"image/*",onChange:P=>{var L;return ur((L=P.target.files)==null?void 0:L[0],"image")}}),h.jsx("input",{type:"file",ref:Ls,className:"hidden",onChange:P=>{var L;return ur((L=P.target.files)==null?void 0:L[0],"file")}}),h.jsx("div",{className:"absolute inset-0 z-0",style:Y(),children:g==="default"&&h.jsx("div",{className:"absolute inset-0 chat-bg-pattern opacity-100"})}),t.status==="connecting"&&h.jsx("div",{className:"absolute top-16 left-0 right-0 bg-red-500/90 text-white text-xs py-1 text-center z-20",children:"در حال اتصال..."}),h.jsxs("div",{className:"relative z-10 flex items-center justify-between px-2 py-2 bg-white/95 dark:bg-telegram-bgDark/95 backdrop-blur-md border-b border-telegram-border dark:border-telegram-borderDark shadow-sm shrink-0 h-16",onClick:p,children:[h.jsxs("div",{className:"flex items-center gap-2 overflow-hidden cursor-pointer",children:[d&&h.jsx("button",{onClick:P=>{P.stopPropagation(),u()},className:"p-2 -mr-2 text-gray-500 dark:text-gray-300",children:h.jsx(ph,{size:22})}),h.jsx("img",{src:t.avatar||"",alt:"",className:"w-10 h-10 rounded-full bg-gray-200 object-cover shrink-0"}),h.jsxs("div",{className:"flex flex-col overflow-hidden",children:[h.jsx("h2",{className:"font-bold text-gray-900 dark:text-white truncate text-base",children:t.name}),h.jsx("span",{className:"text-xs text-telegram-primary truncate",children:t.status==="online"?"آنلاین":t.status==="connecting"?"در حال اتصال...":"آخرین بازدید به تازگی"})]})]}),h.jsxs("div",{className:"flex items-center text-gray-500 gap-1",children:[ar&&r==="owner"&&h.jsx("button",{onClick:P=>{P.stopPropagation(),es()},className:"p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full text-red-500",title:"پاکسازی کل چت",children:h.jsx(yh,{size:20})}),h.jsx("button",{onClick:P=>{P.stopPropagation(),A()},className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-telegram-primary",children:h.jsx(ma,{size:20})}),h.jsx("button",{className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full",children:h.jsx(LI,{size:20})})]})]}),h.jsxs("div",{ref:ke,className:"relative z-10 flex-1 overflow-y-auto p-2 sm:p-4 flex flex-col gap-1.5 scroll-smooth",onScroll:P=>K(P.currentTarget.scrollHeight-P.currentTarget.scrollTop-P.currentTarget.clientHeight>200),children:[e.map((P,L)=>{const X=P.senderId==="me",xe=!e[L+1]||e[L+1].senderId!==P.senderId,Ve=or&&!X&&(!e[L-1]||e[L-1].senderId!==P.senderId),Me=P.senderRole==="owner",Dt=P.senderRole==="admin";let $e="px-3 py-2 rounded-2xl shadow-sm text-base break-words border min-w-[4rem] relative transition-all ";return Me?$e+="bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-yellow-900/40 dark:to-amber-800/40 text-gray-900 dark:text-white border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.3)] ring-1 ring-amber-300 dark:ring-amber-700 ":Dt?$e+="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/30 text-gray-900 dark:text-white border-blue-400 dark:border-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.2)] ring-1 ring-blue-300 dark:ring-blue-700 ":X?$e+="bg-telegram-chatOut dark:bg-telegram-chatOutDark text-black dark:text-white border-transparent ":$e+="bg-white dark:bg-telegram-chatInDark text-black dark:text-white border-transparent ",X?$e+="rounded-bl-none ":$e+="rounded-br-none ",h.jsxs("div",{className:`flex ${X?"flex-row-reverse":"flex-row"} items-end gap-2 max-w-[90%] md:max-w-[75%] ${X?"self-end":"self-start"} group animate-slide-in`,children:[or&&!X&&h.jsx("div",{className:"w-8 h-8 shrink-0 mb-1 cursor-pointer hover:scale-105 transition-transform",onClick:()=>m&&m({id:P.senderId,name:P.senderName,avatar:P.senderAvatar,type:"user"}),children:xe&&h.jsx("img",{src:P.senderAvatar||"https://via.placeholder.com/32",className:"w-8 h-8 rounded-full shadow-md"})}),h.jsxs("div",{className:"flex flex-col relative",onContextMenu:dt=>{dt.preventDefault(),dt.stopPropagation(),U({x:dt.clientX,y:dt.clientY,messageId:P.id,isMe:X})},children:[P.isSticker?h.jsx("img",{src:P.imageUrl,className:"w-32 h-32 object-contain cursor-pointer drop-shadow-md",onClick:()=>Z(P.imageUrl)}):h.jsxs("div",{className:$e,children:[Ve&&h.jsxs("div",{className:"text-xs font-bold mb-1 flex items-center gap-1 cursor-pointer hover:underline",style:{color:RP(P.senderId)},onClick:()=>m&&m({id:P.senderId,name:P.senderName,avatar:P.senderAvatar,type:"user"}),children:[P.senderName,P.senderRole==="owner"&&h.jsxs("span",{className:"flex items-center gap-0.5 text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/50 px-1 rounded-full text-[9px] border border-amber-200",children:[h.jsx(Yg,{size:10,fill:"currentColor"})," مدیریت کل"]}),P.senderRole==="admin"&&h.jsxs("span",{className:"flex items-center gap-0.5 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-1 rounded-full text-[9px] border border-blue-200",children:[h.jsx(Zg,{size:10,fill:"currentColor"})," ادمین"]})]}),X&&(Me||Dt)&&h.jsxs("div",{className:"text-[10px] font-bold mb-1 flex items-center gap-1 opacity-80 border-b border-black/10 dark:border-white/10 pb-1",children:[Me&&h.jsxs("span",{className:"flex items-center gap-0.5 text-amber-700 dark:text-amber-300",children:[h.jsx(Yg,{size:10,fill:"currentColor"})," مدیریت کل (شما)"]}),Dt&&h.jsxs("span",{className:"flex items-center gap-0.5 text-blue-700 dark:text-blue-300",children:[h.jsx(Zg,{size:10,fill:"currentColor"})," ادمین (شما)"]})]}),P.replyToId&&h.jsx("div",{className:"mb-1 pl-2 border-r-2 border-telegram-primary text-xs opacity-70 truncate bg-black/5 dark:bg-white/5 rounded p-1",children:"پیام پاسخ داده شده"}),P.type==="image"&&h.jsx("img",{src:P.imageUrl,className:"rounded-lg mb-1 max-w-full max-h-80 object-cover",onClick:()=>Z(P.imageUrl)}),P.type==="audio"&&h.jsxs("div",{className:"flex items-center gap-2 p-1 min-w-[150px]",children:[h.jsx("button",{onClick:()=>Ms(P.fileUrl||P.imageUrl,P.id),className:`p-2 rounded-full ${X?"bg-white text-green-600":"bg-telegram-primary text-white"}`,children:pe===P.id?h.jsx(VI,{size:16}):h.jsx(FI,{size:16})}),h.jsxs("div",{className:"flex flex-col w-full",children:[h.jsx("div",{className:"h-1 bg-gray-300 rounded-full overflow-hidden w-full",children:h.jsx("div",{className:`h-full bg-telegram-primary ${pe===P.id?"w-full animate-pulse":"w-0"}`})}),h.jsx("span",{className:"text-[10px] mt-1 opacity-70",children:P.audioDuration})]})]}),P.type==="file"&&h.jsxs("div",{className:"flex items-center gap-3 p-2 bg-black/5 dark:bg-white/5 rounded-lg max-w-xs",children:[h.jsx("div",{className:`p-3 rounded-full ${X?"bg-telegram-primary/20 text-telegram-primary":"bg-gray-200 text-gray-600"}`,children:h.jsx(gh,{size:24})}),h.jsxs("div",{className:"flex flex-col overflow-hidden",children:[h.jsx("span",{className:"font-bold text-sm truncate",children:P.fileName}),h.jsx("span",{className:"text-xs opacity-60",children:P.fileSize||"File"})]}),P.fileUrl&&h.jsx("a",{href:P.fileUrl,download:!0,target:"_blank",rel:"noreferrer",className:"p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full",children:h.jsx(Ku,{size:20})})]}),P.type==="text"&&h.jsx("div",{dir:"auto",className:`whitespace-pre-wrap leading-snug ${Me?"font-medium":""}`,children:P.text}),h.jsxs("div",{className:"flex items-center justify-end gap-1 mt-1 opacity-60 text-[10px] select-none",children:[h.jsx("span",{children:V(P.timestamp)}),X&&(P.status==="read"?h.jsx(RI,{size:12,className:"text-blue-500"}):h.jsx(mh,{size:12})),P.status==="error"&&h.jsx("span",{className:"text-red-500 font-bold",children:"!"})]})]}),P.reactions&&Object.keys(P.reactions).length>0&&h.jsx("div",{className:"flex flex-wrap gap-1 mt-1 px-1",children:Object.entries(P.reactions).map(([dt,On])=>h.jsxs("button",{onClick:()=>l(P.id,dt),className:"bg-white dark:bg-gray-800 rounded-full px-1.5 py-0.5 text-xs shadow-sm border border-gray-100 dark:border-gray-700",children:[dt," ",h.jsx("span",{className:"font-bold",children:On.length})]},dt))})]})]},P.id)}),h.jsx("div",{ref:me})]}),ue&&h.jsx("button",{onClick:()=>{var P;return(P=me.current)==null?void 0:P.scrollIntoView({behavior:"smooth"})},className:"absolute bottom-20 right-4 z-20 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg border text-gray-500",children:h.jsx(V0,{size:24})}),h.jsxs("div",{className:"relative z-10 bg-white dark:bg-telegram-bgDark p-2 border-t border-gray-200 dark:border-white/10 shrink-0",children:[b&&h.jsxs("div",{className:"flex items-center justify-between bg-gray-50 dark:bg-white/5 p-2 rounded-t-lg mb-1 text-sm border-l-4 border-telegram-primary",children:[h.jsxs("div",{className:"flex flex-col ml-2",children:[h.jsx("span",{className:"text-telegram-primary font-bold",children:"پاسخ به پیام"}),h.jsx("span",{className:"truncate opacity-70 max-w-[200px]",children:b.text||"رسانه"})]}),h.jsx("button",{onClick:()=>T(null),children:h.jsx(Or,{size:16})})]}),h.jsx("div",{className:"flex items-end gap-2 max-w-5xl mx-auto",children:N?h.jsxs("div",{className:"flex-1 bg-telegram-secondary dark:bg-telegram-secondaryDark rounded-full p-3 flex items-center justify-between animate-pulse",children:[h.jsxs("div",{className:"flex items-center gap-2 text-red-500",children:[h.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full animate-ping"})," ",Math.floor(Se/60),":",(Se%60).toString().padStart(2,"0")]}),h.jsx("span",{onClick:()=>Vs(!1),className:"cursor-pointer text-gray-500",children:"لغو"}),h.jsx(Zo,{size:24,className:"text-telegram-primary cursor-pointer rotate-180",onClick:()=>Vs(!0)})]}):h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>S(!I),className:"p-3 text-gray-500 hover:text-telegram-primary",children:h.jsx(Jg,{size:24,className:"rotate-45"})}),I&&h.jsxs("div",{className:"absolute bottom-20 right-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-2 flex flex-col gap-2 z-50 animate-fade-in",children:[h.jsxs("button",{onClick:()=>{var P;return(P=Tt.current)==null?void 0:P.click()},className:"flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg text-gray-800 dark:text-white",children:[h.jsx(M0,{size:18})," عکس"]}),h.jsxs("button",{onClick:()=>{var P;return(P=Ls.current)==null?void 0:P.click()},className:"flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg text-gray-800 dark:text-white",children:[h.jsx(gh,{size:18})," فایل"]})]}),h.jsxs("div",{className:"flex-1 bg-gray-100 dark:bg-black/20 rounded-2xl flex items-center relative",children:[h.jsx("textarea",{ref:Le,value:R,onChange:P=>C(P.target.value),onKeyDown:P=>{P.key==="Enter"&&!P.shiftKey&&(P.preventDefault(),lr())},placeholder:"پیام...",className:"w-full bg-transparent p-3 max-h-32 resize-none outline-none text-gray-900 dark:text-white",rows:1}),h.jsx("button",{onClick:()=>E(!B),className:"p-2 text-gray-400 hover:text-telegram-primary",children:h.jsx(WI,{size:24})})]}),R.trim()?h.jsx("button",{onClick:lr,className:"p-3 bg-telegram-primary rounded-full text-white shadow-lg hover:scale-105 transition-transform",children:h.jsx(Zo,{size:20,className:"rotate-180"})}):h.jsx("button",{onClick:Mi,className:"p-3 bg-gray-200 dark:bg-white/10 rounded-full text-gray-500 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors",children:h.jsx(B0,{size:24})}),B&&h.jsxs("div",{className:"absolute bottom-20 left-4 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border w-72 h-64 overflow-y-auto p-2 grid grid-cols-6 gap-2 z-50",onClick:P=>P.stopPropagation(),children:[h.jsxs("div",{className:"col-span-6 flex border-b mb-2 pb-1",children:[h.jsx("button",{onClick:()=>w("emoji"),className:`flex-1 ${v==="emoji"?"text-telegram-primary font-bold":""}`,children:"ایموجی"}),h.jsx("button",{onClick:()=>w("sticker"),className:`flex-1 ${v==="sticker"?"text-telegram-primary font-bold":""}`,children:"استیکر"})]}),v==="emoji"?AP.map(P=>h.jsx("button",{onClick:()=>C(L=>L+P),className:"text-2xl hover:bg-gray-100 rounded",children:P},P)):bP.map((P,L)=>h.jsx("img",{src:P,onClick:()=>Jr(P),className:"w-full h-auto hover:scale-110 transition-transform cursor-pointer"},L))]})]})})]}),O&&h.jsxs("div",{className:"fixed z-[60] bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 min-w-[150px] animate-fade-in border dark:border-gray-700",style:{top:O.y,left:O.x},children:[h.jsx("div",{className:"flex gap-1 mb-2 bg-gray-50 dark:bg-black/20 p-1 rounded justify-center",children:SP.map(P=>h.jsx("button",{onClick:()=>{l(O.messageId,P),U(null)},className:"hover:scale-125 transition-transform",children:P},P))}),h.jsxs("button",{onClick:()=>{T(e.find(P=>P.id===O.messageId)),U(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[h.jsx(BI,{size:16})," پاسخ"]}),h.jsxs("button",{onClick:()=>{var P;navigator.clipboard.writeText(((P=e.find(L=>L.id===O.messageId))==null?void 0:P.text)||""),U(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[h.jsx(NI,{size:16})," کپی"]}),(O.isMe||r==="owner"||r==="admin")&&h.jsxs("button",{onClick:()=>{o(O.messageId),U(null)},className:"w-full text-right p-2 hover:bg-red-50 text-red-500 rounded flex gap-2",children:[h.jsx(yh,{size:16})," ",O.isMe?"حذف":"حذف (مدیر)"]}),O.isMe&&h.jsxs("button",{onClick:()=>{k(e.find(P=>P.id===O.messageId)),C(e.find(P=>P.id===O.messageId).text),U(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[h.jsx(MI,{size:16})," ویرایش"]})]})]})},NP=({contact:t,onClose:e,onStartChat:n})=>h.jsxs("div",{className:"h-full flex flex-col bg-white dark:bg-telegram-secondaryDark border-l border-telegram-border dark:border-telegram-borderDark overflow-y-auto animate-slide-in",children:[h.jsxs("div",{className:"flex items-center gap-4 p-4 sticky top-0 bg-white/80 dark:bg-telegram-secondaryDark/80 backdrop-blur-md z-10",children:[h.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-800 dark:hover:text-gray-200",children:h.jsx(Or,{size:24})}),h.jsx("span",{className:"font-semibold text-lg",children:"اطلاعات پروفایل"})]}),h.jsxs("div",{className:"px-6 py-4 flex flex-col items-center border-b-8 border-gray-100 dark:border-black/20",children:[h.jsx("img",{src:t.avatar,alt:t.name,className:"w-28 h-28 rounded-full object-cover mb-4 shadow-lg"}),h.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-1",children:t.name}),h.jsx("p",{className:"text-gray-500 text-sm",children:t.status==="online"?h.jsx("span",{className:"text-telegram-primary",children:"آنلاین"}):`آخرین بازدید ${t.lastSeen||"به تازگی"}`}),n&&h.jsxs("button",{onClick:()=>n(t),className:"mt-4 flex items-center gap-2 bg-telegram-primary hover:bg-telegram-primaryDark text-white px-6 py-2 rounded-full font-medium transition-colors",children:[h.jsx(Mf,{size:18}),"شروع گفتگو"]})]}),h.jsxs("div",{className:"p-4 space-y-5 border-b-8 border-gray-100 dark:border-black/20",children:[h.jsxs("div",{className:"flex items-start gap-4",children:[h.jsx("div",{className:"mt-1 text-gray-500",children:h.jsx(ma,{size:22})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:t.phone||"---"}),h.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:"موبایل"})]})]}),h.jsxs("div",{className:"flex items-start gap-4",children:[h.jsx("div",{className:"mt-1 text-gray-500",children:h.jsx(L0,{size:22})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:t.username||"---"}),h.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:"نام کاربری"})]})]}),h.jsxs("div",{className:"flex items-start gap-4",children:[h.jsx("div",{className:"mt-1 text-gray-500",children:h.jsx(Vf,{size:22})}),h.jsxs("div",{className:"flex-1 flex justify-between items-center",children:[h.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:"اعلانات"}),h.jsx("div",{className:"w-10 h-5 bg-telegram-primary rounded-full relative cursor-pointer",children:h.jsx("div",{className:"absolute left-1 top-1 w-3 h-3 bg-white rounded-full"})})]})]}),h.jsxs("div",{className:"flex items-start gap-4",children:[h.jsx("div",{className:"mt-1 text-gray-500",children:h.jsx(gh,{size:22})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-gray-900 dark:text-white text-base leading-snug",children:t.bio||"بدون بیوگرافی"}),h.jsx("p",{className:"text-gray-500 text-xs mt-1",children:"بیوگرافی"})]})]})]}),h.jsxs("div",{className:"p-2",children:[h.jsxs("div",{className:"flex border-b border-gray-200 dark:border-gray-700 mb-2",children:[h.jsx("button",{className:"flex-1 py-2 text-telegram-primary border-b-2 border-telegram-primary font-medium text-sm",children:"رسانه"}),h.jsx("button",{className:"flex-1 py-2 text-gray-500 font-medium text-sm hover:text-gray-700 dark:hover:text-gray-300",children:"فایل‌ها"}),h.jsx("button",{className:"flex-1 py-2 text-gray-500 font-medium text-sm hover:text-gray-700 dark:hover:text-gray-300",children:"لینک‌ها"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-1",children:[1,2,3,4,5,6].map(r=>h.jsx("div",{className:"aspect-square bg-gray-200 dark:bg-gray-800 cursor-pointer hover:opacity-80 transition-opacity",children:h.jsx("img",{src:`https://picsum.photos/200/200?random=${r+10}`,className:"w-full h-full object-cover",alt:"media"})},r))})]})]}),PP=[{id:"default",name:"پیش‌فرض",value:"default",color:"#8db5d0"},{id:"blue",name:"آبی آسمانی",value:"#dbeafe",color:"#dbeafe"},{id:"green",name:"سبز نعنایی",value:"#dcfce7",color:"#dcfce7"},{id:"dark",name:"تاریک",value:"#18181b",color:"#18181b"},{id:"pink",name:"صورتی",value:"#fce7f3",color:"#fce7f3"},{id:"pattern1",name:"طرح ۱",value:"https://img.freepik.com/free-vector/hand-drawn-contact-sheet-template_23-2150937449.jpg",color:"#e5e7eb"},{id:"pattern2",name:"طرح ۲",value:"https://img.freepik.com/free-vector/seamless-pattern-with-cute-cats_23-2147665476.jpg",color:"#e5e7eb"}],DP=({isOpen:t,onClose:e,userProfile:n,onSave:r,wallpaper:s,onSaveWallpaper:i})=>{const[o,l]=M.useState(n),[u,d]=M.useState("profile"),[p,m]=M.useState(s),[g,A]=M.useState("");if(M.useEffect(()=>{l(n),m(s)},[n,s,t]),!t)return null;const R=()=>{r(o),i(p),e()};return h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",children:h.jsxs("div",{className:"bg-white dark:bg-telegram-secondaryDark w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[h.jsxs("div",{className:"flex flex-col border-b border-gray-100 dark:border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between p-4",children:[h.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"تنظیمات"}),h.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors",children:h.jsx(Or,{size:24,className:"text-gray-500 dark:text-gray-300"})})]}),h.jsxs("div",{className:"flex px-4",children:[h.jsx("button",{onClick:()=>d("profile"),className:`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${u==="profile"?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"}`,children:h.jsxs("div",{className:"flex items-center justify-center gap-2",children:[h.jsx(hu,{size:18}),"پروفایل"]})}),h.jsx("button",{onClick:()=>d("chat"),className:`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${u==="chat"?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"}`,children:h.jsxs("div",{className:"flex items-center justify-center gap-2",children:[h.jsx(M0,{size:18}),"پس‌زمینه چت"]})})]})]}),h.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:u==="profile"?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"relative bg-telegram-secondary dark:bg-black/20 p-6 flex flex-col items-center justify-center gap-4",children:[h.jsxs("div",{className:"relative group cursor-pointer",children:[h.jsx("div",{className:"w-24 h-24 rounded-full bg-telegram-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg",children:o.name.charAt(0)}),h.jsx("div",{className:"absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:h.jsx(bI,{size:24,className:"text-white"})})]}),h.jsx("div",{className:"text-center",children:h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"عکس پروفایل خود را تغییر دهید"})})]}),h.jsxs("div",{className:"p-6 space-y-6",children:[h.jsxs("div",{className:"relative group",children:[h.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:h.jsx(hu,{size:20})}),h.jsx("input",{type:"text",value:o.name,onChange:C=>l({...o,name:C.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white",placeholder:"نام نمایشی"}),h.jsx("label",{className:"text-xs text-telegram-primary mt-1 block",children:"نام (اجباری)"})]}),h.jsxs("div",{className:"relative group",children:[h.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:h.jsx(PI,{size:20})}),h.jsx("input",{type:"text",value:o.bio,onChange:C=>l({...o,bio:C.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white",placeholder:"بیوگرافی"}),h.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"کمی درباره خودتان بنویسید"})]}),h.jsxs("div",{className:"relative group",children:[h.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:h.jsx(L0,{size:20})}),h.jsx("input",{type:"text",value:o.username,onChange:C=>l({...o,username:C.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white dir-ltr text-right",placeholder:"نام کاربری"}),h.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"نام کاربری عمومی"})]}),h.jsxs("div",{className:"relative group",children:[h.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:h.jsx(ma,{size:20})}),h.jsx("input",{type:"tel",value:o.phone,onChange:C=>l({...o,phone:C.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white dir-ltr text-right",placeholder:"شماره موبایل"}),h.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"شماره موبایل"})]})]})]}):h.jsxs("div",{className:"p-6 space-y-6",children:[h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"یک تصویر پس‌زمینه برای گفتگوهای خود انتخاب کنید."}),h.jsx("div",{className:"grid grid-cols-3 gap-3",children:PP.map(C=>h.jsxs("div",{onClick:()=>m(C.value),className:`
                                    relative aspect-[3/4] rounded-lg cursor-pointer overflow-hidden border-2 transition-all shadow-sm
                                    ${p===C.value?"border-telegram-primary scale-105":"border-transparent hover:scale-105"}
                                `,children:[h.jsx("div",{className:"w-full h-full",style:{backgroundColor:C.color,backgroundImage:C.value.startsWith("http")?`url(${C.value})`:void 0,backgroundSize:"cover",backgroundPosition:"center"},children:C.value==="default"&&h.jsx("div",{className:"w-full h-full opacity-30",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}})}),h.jsx("div",{className:"absolute bottom-0 w-full bg-black/40 text-white text-[10px] text-center py-1",children:C.name}),p===C.value&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20",children:h.jsx(mh,{className:"text-white drop-shadow-md",size:32})})]},C.id))}),h.jsxs("div",{className:"pt-4 border-t border-gray-100 dark:border-white/10",children:[h.jsx("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block",children:"لینک تصویر دلخواه"}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"text",value:g,onChange:C=>A(C.target.value),placeholder:"https://example.com/image.jpg",className:"flex-1 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-telegram-primary"}),h.jsx("button",{onClick:()=>{g&&m(g)},className:"bg-telegram-secondary dark:bg-white/10 text-telegram-primary rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/20",children:"اعمال"})]})]})]})}),h.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-black/20 flex justify-end gap-3",children:[h.jsx("button",{onClick:e,className:"px-4 py-2 text-telegram-primary hover:bg-telegram-primary/10 rounded-lg transition-colors font-medium",children:"انصراف"}),h.jsxs("button",{onClick:R,className:"px-6 py-2 bg-telegram-primary hover:bg-telegram-primaryDark text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2",children:[h.jsx(mh,{size:18}),"ذخیره تغییرات"]})]})]})})},OP=({onClose:t,currentUserEmail:e,currentUserRole:n,onStartChat:r})=>{const[s,i]=M.useState("users"),[o,l]=M.useState([]),[u,d]=M.useState(!0),[p,m]=M.useState({isOpen:!1,targetUid:null}),[g,A]=M.useState({isOpen:!1,targetUid:null,targetName:""}),[R,C]=M.useState([]),[b,T]=M.useState(""),[_,k]=M.useState([]),[O,U]=M.useState("");M.useEffect(()=>{B(),E()},[]);const B=async()=>{d(!0);const H=await cP();l(H),d(!1)},E=async()=>{const H=await kx();k(H)},v=async(H,pe,he)=>{if(n!=="owner"){alert("فقط مدیر کل می‌تواند نقش‌ها را تغییر دهد.");return}const $=o.find(Z=>Z.uid===H);if(($==null?void 0:$.email)===Ht.OWNER_EMAIL){alert("نمی‌توانید نقش مدیر کل اصلی را تغییر دهید.");return}await dP(H,he),l(o.map(Z=>Z.uid===H?{...Z,role:he}:Z))},w=async(H,pe)=>{const he=o.find($=>$.uid===H);if((he==null?void 0:he.role)==="owner"){alert("نمی‌توانید مدیر کل را مسدود کنید.");return}if((he==null?void 0:he.role)==="admin"&&n!=="owner"){alert("ادمین نمی‌تواند ادمین دیگر را مسدود کند.");return}await hP(H,pe||!1),l(o.map($=>$.uid===H?{...$,isBanned:!pe}:$))},I=async()=>{!p.targetUid||!b.trim()||(await mP(p.targetUid,"پیام سیستم مدیریت",b),m({isOpen:!1,targetUid:null}),T(""),alert("اعلان ارسال شد."))},S=async()=>{if(!O.trim())return;const H=[..._,O.trim()];k(H),U(""),await Iv(H)},N=async H=>{const pe=_.filter(he=>he!==H);k(pe),await Iv(pe)},x=async H=>{A({isOpen:!0,targetUid:H.uid,targetName:H.name}),C([]);const pe=await pP(H.uid);C(pe)},Se=async H=>{confirm("آیا از حذف این پیام مطمئن هستید؟")&&(await Ix(H),C(pe=>pe.filter(he=>he.id!==H)))};return h.jsx("div",{className:"fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in",children:h.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden",children:[h.jsxs("div",{className:"p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center border-b border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Uf,{className:"text-red-600",size:24}),h.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"پنل مدیریت پیشرفته"})]}),h.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full",children:h.jsx(Or,{size:24})})]}),h.jsxs("div",{className:"flex border-b border-gray-200 dark:border-gray-700",children:[h.jsx("button",{onClick:()=>i("users"),className:`flex-1 py-3 font-medium text-sm transition-colors ${s==="users"?"bg-white dark:bg-gray-900 border-b-2 border-blue-500 text-blue-600":"bg-gray-50 dark:bg-gray-800 text-gray-500"}`,children:h.jsxs("div",{className:"flex items-center justify-center gap-2",children:[h.jsx(hu,{size:18})," کاربران"]})}),h.jsx("button",{onClick:()=>i("filters"),className:`flex-1 py-3 font-medium text-sm transition-colors ${s==="filters"?"bg-white dark:bg-gray-900 border-b-2 border-blue-500 text-blue-600":"bg-gray-50 dark:bg-gray-800 text-gray-500"}`,children:h.jsxs("div",{className:"flex items-center justify-center gap-2",children:[h.jsx(W0,{size:18})," فیلتر کلمات"]})})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:s==="users"?u?h.jsx("div",{className:"text-center py-10 text-gray-500",children:"در حال دریافت لیست کاربران..."}):h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-right",children:[h.jsx("thead",{className:"text-xs text-gray-500 bg-gray-50 dark:bg-gray-800 uppercase",children:h.jsxs("tr",{children:[h.jsx("th",{className:"px-6 py-3",children:"کاربر"}),h.jsx("th",{className:"px-6 py-3",children:"ایمیل / موبایل"}),h.jsx("th",{className:"px-6 py-3",children:"نقش"}),h.jsx("th",{className:"px-6 py-3",children:"وضعیت"}),h.jsx("th",{className:"px-6 py-3",children:"ابزارها"})]})}),h.jsx("tbody",{children:o.map(H=>h.jsxs("tr",{className:"bg-white dark:bg-gray-900 border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:[h.jsxs("td",{className:"px-6 py-4 flex items-center gap-3",children:[h.jsx("img",{src:H.avatar,className:"w-8 h-8 rounded-full"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-medium text-gray-900 dark:text-white",children:H.name}),H.email===Ht.OWNER_EMAIL&&h.jsx("span",{className:"text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full w-fit",children:"Owner"})]})]}),h.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{children:H.email}),h.jsx("span",{className:"text-xs",children:H.phone}),h.jsx("span",{className:"text-[10px] opacity-50",children:H.uid})]})}),h.jsx("td",{className:"px-6 py-4",children:n==="owner"&&H.email!==Ht.OWNER_EMAIL?h.jsxs("select",{value:H.role,onChange:pe=>v(H.uid,H.role,pe.target.value),className:"bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",children:[h.jsx("option",{value:"user",children:"کاربر"}),h.jsx("option",{value:"admin",children:"ادمین"}),h.jsx("option",{value:"owner",children:"مدیر کل"})]}):h.jsx("span",{className:`px-2 py-1 rounded text-xs font-bold ${H.role==="owner"?"bg-yellow-100 text-yellow-800":H.role==="admin"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:H.role==="owner"?"مدیر کل":H.role==="admin"?"ادمین":"کاربر"})}),h.jsx("td",{className:"px-6 py-4",children:H.isBanned?h.jsxs("span",{className:"text-red-600 font-bold flex items-center gap-1",children:[h.jsx(Gg,{size:14})," مسدود"]}):h.jsxs("span",{className:"text-green-600 font-bold flex items-center gap-1",children:[h.jsx(CI,{size:14})," فعال"]})}),h.jsxs("td",{className:"px-6 py-4 flex items-center gap-2",children:[H.email!==Ht.OWNER_EMAIL&&(n==="owner"||n==="admin"&&H.role==="user")&&h.jsx("button",{onClick:()=>w(H.uid,H.isBanned||!1),title:H.isBanned?"رفع مسدودی":"مسدود کردن",className:`p-2 rounded-lg text-white ${H.isBanned?"bg-green-600 hover:bg-green-700":"bg-red-600 hover:bg-red-700"}`,children:h.jsx(Gg,{size:16})}),h.jsx("button",{onClick:()=>m({isOpen:!0,targetUid:H.uid}),title:"ارسال اعلان سیستمی",className:"p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white",children:h.jsx(Vf,{size:16})}),h.jsx("button",{onClick:()=>{r(H),t()},title:"گفتگو",className:"p-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white",children:h.jsx(Mf,{size:16})}),(n==="owner"||n==="admin")&&h.jsx("button",{onClick:()=>x(H),title:"نظارت بر پیام‌ها (جاسوسی)",className:"p-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white",children:h.jsx(Xg,{size:16})})]})]},H.uid))})]})}):h.jsxs("div",{className:"max-w-2xl mx-auto",children:[h.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm text-yellow-800 flex items-start gap-3",children:[h.jsx(SI,{className:"shrink-0"}),h.jsx("p",{children:"کلماتی که در اینجا وارد می‌کنید، در هنگام ارسال پیام در چت عمومی، با ستاره (***) جایگزین خواهند شد. این تغییرات برای همه اعمال می‌شود."})]}),h.jsxs("div",{className:"flex gap-2 mb-6",children:[h.jsx("input",{type:"text",value:O,onChange:H=>U(H.target.value),placeholder:"کلمه ممنوعه جدید...",className:"flex-1 p-3 rounded-xl border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"}),h.jsx("button",{onClick:S,className:"bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors",children:"افزودن"})]}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[_.map((H,pe)=>h.jsxs("div",{className:"bg-red-100 text-red-800 px-3 py-1 rounded-full flex items-center gap-2",children:[h.jsx("span",{children:H}),h.jsx("button",{onClick:()=>N(H),className:"hover:text-red-900",children:h.jsx(Or,{size:14})})]},pe)),_.length===0&&h.jsx("p",{className:"text-gray-500 w-full text-center",children:"هیچ کلمه ممنوعه‌ای ثبت نشده است."})]})]})}),p.isOpen&&h.jsx("div",{className:"absolute inset-0 z-[110] bg-black/70 flex items-center justify-center p-4",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl",children:[h.jsx("h3",{className:"text-lg font-bold mb-4",children:"ارسال پیام سیستمی به کاربر"}),h.jsx("textarea",{value:b,onChange:H=>T(H.target.value),placeholder:"پیام خود را بنویسید...",className:"w-full h-32 p-3 border rounded-lg mb-4 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 resize-none"}),h.jsxs("div",{className:"flex justify-end gap-2",children:[h.jsx("button",{onClick:()=>m({isOpen:!1,targetUid:null}),className:"px-4 py-2 text-gray-500",children:"انصراف"}),h.jsxs("button",{onClick:I,className:"px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2",children:[h.jsx(Zo,{size:16})," ارسال"]})]})]})}),g.isOpen&&h.jsx("div",{className:"absolute inset-0 z-[110] bg-black/70 flex items-center justify-center p-4",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl h-[70vh] shadow-2xl flex flex-col overflow-hidden border border-gray-300 dark:border-gray-700",children:[h.jsxs("div",{className:"p-4 bg-purple-600 text-white flex justify-between items-center",children:[h.jsxs("h3",{className:"text-lg font-bold flex items-center gap-2",children:[h.jsx(Xg,{size:20})," تاریخچه چت جهانی: ",g.targetName]}),h.jsx("button",{onClick:()=>A({isOpen:!1,targetUid:null,targetName:""}),children:h.jsx(Or,{size:20})})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900 space-y-2",children:R.length>0?R.map(H=>h.jsxs("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg shadow border border-gray-200 dark:border-gray-700 flex justify-between items-start",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-gray-900 dark:text-white text-sm",children:H.text}),h.jsx("span",{className:"text-xs text-gray-400 block mt-1",children:new Date(H.timestamp).toLocaleString("fa-IR")})]}),h.jsx("button",{onClick:()=>Se(H.id),className:"text-red-500 hover:bg-red-50 p-1.5 rounded",title:"حذف اجباری پیام",children:h.jsx(yh,{size:16})})]},H.id)):h.jsx("p",{className:"text-center text-gray-500 mt-10",children:"هیچ پیامی در چت جهانی یافت نشد."})})]})})]})})},qP=({onSuccess:t,storedAccounts:e=[],initialEmail:n=""})=>{const[r,s]=M.useState(!0),[i,o]=M.useState(!1),[l,u]=M.useState(""),[d,p]=M.useState(e.length>0&&!n),[m,g]=M.useState({name:"",email:n||"",phone:"",password:""});M.useEffect(()=>{n&&(g(b=>({...b,email:n})),p(!1))},[n]);const A=async b=>{b.preventDefault(),u(""),o(!0);try{if(r){if(!m.email||!m.password)throw new Error("لطفا ایمیل و رمز عبور را وارد کنید");await nP(m.email,m.password)}else{if(!m.name||!m.email||!m.password||!m.phone)throw new Error("لطفا تمام فیلدها را پر کنید");if(m.password.length<6)throw new Error("رمز عبور باید حداقل ۶ کاراکتر باشد");await tP(m.email,m.password,m.name,m.phone)}}catch(T){console.error(T),T.code==="auth/invalid-email"?u("فرمت ایمیل نامعتبر است"):T.code==="auth/user-not-found"||T.code==="auth/wrong-password"||T.code==="auth/invalid-credential"?u("ایمیل یا رمز عبور اشتباه است"):T.code==="auth/email-already-in-use"?u("این ایمیل قبلا ثبت شده است"):u(T.message||"خطایی رخ داد. لطفا دوباره تلاش کنید.")}finally{o(!1)}},R=async()=>{u(""),o(!0);try{await rP()}catch(b){if(console.error("Google Login Error:",b),b.code==="auth/unauthorized-domain"){const T=window.location.hostname;u(`دامنه "${T}" غیرمجاز است. لطفاً آن را در بخش Authentication > Settings > Authorized domains کنسول فایربیس اضافه کنید.`)}else b.code==="auth/popup-closed-by-user"?u("پنجره ورود توسط شما بسته شد."):u(b.message||"خطا در ورود با گوگل")}finally{o(!1)}},C=b=>{g(T=>({...T,email:b.email})),p(!1),s(!0)};return d&&e.length>0?h.jsxs("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark p-4 relative overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 opacity-10 chat-bg-pattern pointer-events-none"}),h.jsxs("div",{className:"w-full max-w-md bg-white dark:bg-telegram-secondaryDark rounded-3xl shadow-2xl p-8 relative z-10 animate-fade-in",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx("div",{className:"w-20 h-20 bg-telegram-primary rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg shadow-telegram-primary/30",children:h.jsx(ty,{size:40,className:"text-white"})}),h.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:"انتخاب حساب کاربری"}),h.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm",children:"برای ورود یکی از حساب‌های ذخیره شده را انتخاب کنید"})]}),h.jsxs("div",{className:"space-y-3 mb-6",children:[e.map(b=>h.jsxs("button",{onClick:()=>C(b),className:"w-full bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 p-3 rounded-xl flex items-center gap-4 transition-colors border border-gray-100 dark:border-gray-700",children:[h.jsx("img",{src:b.avatar,className:"w-12 h-12 rounded-full object-cover"}),h.jsxs("div",{className:"text-right flex-1",children:[h.jsx("h3",{className:"font-bold text-gray-900 dark:text-white",children:b.name}),h.jsx("p",{className:"text-sm text-gray-500",children:b.email})]}),h.jsx(ph,{size:20,className:"text-gray-400 rotate-180"})]},b.uid)),h.jsxs("button",{onClick:()=>p(!1),className:"w-full bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 p-3 rounded-xl flex items-center gap-4 transition-colors border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 hover:text-telegram-primary",children:[h.jsx("div",{className:"w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center",children:h.jsx($0,{size:24})}),h.jsx("div",{className:"text-right flex-1",children:h.jsx("h3",{className:"font-bold",children:"استفاده از حساب دیگر"})})]})]})]})]}):h.jsxs("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark p-4 relative overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 opacity-10 chat-bg-pattern pointer-events-none"}),h.jsxs("div",{className:"w-full max-w-md bg-white dark:bg-telegram-secondaryDark rounded-3xl shadow-2xl p-8 relative z-10 animate-fade-in",children:[h.jsxs("div",{className:"text-center mb-8 relative",children:[e.length>0&&h.jsx("button",{onClick:()=>p(!0),className:"absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600",title:"بازگشت به لیست حساب‌ها",children:h.jsx(ty,{size:20})}),h.jsx("div",{className:"w-20 h-20 bg-telegram-primary rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg shadow-telegram-primary/30",children:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-10 h-10 text-white",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"}),h.jsx("path",{d:"M2 12L22 12",strokeLinecap:"round"})]})}),h.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:r?"ورود به ایران‌گرام":"ساخت حساب کاربری"}),h.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm",children:r?"به گفتگوهای خود بازگردید":"به جمع هزاران کاربر ایرانی بپیوندید"})]}),l&&h.jsxs("div",{className:"mb-6 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg flex items-start gap-2 text-right dir-rtl",dir:"rtl",children:[h.jsx(AI,{size:16,className:"mt-0.5 shrink-0"}),h.jsx("span",{children:l})]}),h.jsxs("form",{onSubmit:A,className:"space-y-4",children:[!r&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"relative",children:[h.jsx(hu,{className:"absolute right-3 top-3 text-gray-400",size:20}),h.jsx("input",{type:"text",name:"name",autoComplete:"name",placeholder:"نام و نام خانوادگی",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white",value:m.name,onChange:b=>g({...m,name:b.target.value})})]}),h.jsxs("div",{className:"relative",children:[h.jsx(ma,{className:"absolute right-3 top-3 text-gray-400",size:20}),h.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",placeholder:"شماره موبایل",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-rtl",value:m.phone,onChange:b=>g({...m,phone:b.target.value})})]})]}),h.jsxs("div",{className:"relative",children:[h.jsx(DI,{className:"absolute right-3 top-3 text-gray-400",size:20}),h.jsx("input",{type:"email",name:"email",autoComplete:"username",placeholder:"ایمیل",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right",value:m.email,onChange:b=>g({...m,email:b.target.value})})]}),h.jsxs("div",{className:"relative",children:[h.jsx(F0,{className:"absolute right-3 top-3 text-gray-400",size:20}),h.jsx("input",{type:"password",name:"password",autoComplete:r?"current-password":"new-password",placeholder:"رمز عبور",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right",value:m.password,onChange:b=>g({...m,password:b.target.value})})]}),h.jsx("button",{type:"submit",disabled:i,className:"w-full bg-telegram-primary hover:bg-telegram-primaryDark text-white font-bold py-3 rounded-xl shadow-lg shadow-telegram-primary/30 flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-6",children:i?h.jsx(U0,{className:"animate-spin"}):h.jsxs(h.Fragment,{children:[r?"ورود":"ثبت نام",h.jsx(ph,{size:20,className:"rotate-180"})]})})]}),h.jsxs("div",{className:"relative my-6",children:[h.jsx("div",{className:"absolute inset-0 flex items-center",children:h.jsx("div",{className:"w-full border-t border-gray-200 dark:border-white/10"})}),h.jsx("div",{className:"relative flex justify-center text-sm",children:h.jsx("span",{className:"px-2 bg-white dark:bg-telegram-secondaryDark text-gray-500",children:"یا"})})]}),h.jsxs("button",{type:"button",onClick:R,disabled:i,className:"w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-700 dark:text-white font-medium py-3 rounded-xl flex items-center justify-center gap-3 transition-colors",children:[h.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",className:"w-5 h-5",alt:"Google"}),"ورود با حساب گوگل"]}),h.jsx("div",{className:"mt-6 text-center",children:h.jsx("button",{onClick:()=>{s(!r),u("")},className:"text-telegram-primary hover:underline text-sm font-medium",children:r?"حساب کاربری ندارید؟ ثبت نام کنید":"قبلا ثبت نام کرده‌اید؟ وارد شوید"})})]})]})},jP=({currentUser:t,onLogout:e})=>{const[n,r]=M.useState(""),[s,i]=M.useState(!1),[o,l]=M.useState(!1),u=async()=>{if(n.trim()){i(!0);try{await uP(t.uid,t.name,n),l(!0),r("")}catch(d){console.error("Error sending appeal",d),alert("خطا در ارسال پیام. لطفا دوباره تلاش کنید.")}finally{i(!1)}}};return h.jsx("div",{className:"fixed inset-0 z-[200] bg-gray-100 dark:bg-black flex flex-col items-center justify-center p-4 animate-fade-in",children:h.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800",children:[h.jsxs("div",{className:"bg-red-600 p-8 flex flex-col items-center text-center text-white",children:[h.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm animate-pulse",children:h.jsx(Uf,{size:40})}),h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"حساب مسدود شده است"}),h.jsx("p",{className:"opacity-90 text-sm leading-relaxed",children:"دسترسی شما به دلیل نقض قوانین محدود شده است."})]}),h.jsxs("div",{className:"p-6 space-y-6",children:[h.jsxs("div",{className:"flex items-start gap-3 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-red-800 dark:text-red-200 text-sm border border-red-100 dark:border-red-800",children:[h.jsx(F0,{className:"shrink-0 mt-1",size:18}),h.jsx("p",{className:"leading-relaxed",children:"شما اجازه چت یا فعالیت در گروه‌ها را ندارید. تنها راه ارتباطی شما، ارسال پیام مستقیم به مدیریت یا ادمین جهت درخواست رفع مسدودی است."})]}),o?h.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl text-center animate-fade-in",children:[h.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 rounded-full flex items-center justify-center mx-auto mb-3",children:h.jsx(Zo,{size:24,className:"rotate-180"})}),h.jsx("h3",{className:"font-bold text-green-700 dark:text-green-300 mb-1",children:"پیام ارسال شد"}),h.jsx("p",{className:"text-sm text-green-600 dark:text-green-400",children:"پیام شما برای تیم مدیریت ارسال گردید. لطفاً منتظر بررسی بمانید."}),h.jsx("button",{onClick:()=>l(!1),className:"text-xs text-gray-400 underline mt-4 hover:text-gray-600 dark:hover:text-gray-200",children:"ارسال پیام مجدد"})]}):h.jsxs("div",{className:"space-y-3",children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300",children:[h.jsx(Mf,{size:16}),"ارسال پیام مستقیم به مدیریت/ادمین"]}),h.jsx("textarea",{value:n,onChange:d=>r(d.target.value),placeholder:"متن درخواست یا عذرخواهی خود را اینجا بنویسید...",className:"w-full h-32 p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-black/20 focus:ring-2 focus:ring-red-500 outline-none resize-none text-gray-900 dark:text-white transition-all"}),h.jsx("button",{onClick:u,disabled:s||!n.trim(),className:"w-full bg-telegram-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg",children:s?"در حال ارسال...":h.jsxs(h.Fragment,{children:[h.jsx(Zo,{size:18,className:"rotate-180"}),"ارسال درخواست"]})})]}),h.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800 pt-4",children:h.jsxs("button",{onClick:e,className:"w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-500 transition-colors py-2 text-sm",children:[h.jsx(z0,{size:16}),"خروج و تعویض حساب"]})})]})]})})},LP="data:audio/mpeg;base64,//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",Fl=[{id:"global_chat",name:"چت عمومی جهانی 🌍",avatar:"https://cdn-icons-png.flaticon.com/512/921/921490.png",status:"online",bio:"گفتگو با تمام کاربران آنلاین در سراسر جهان (متصل به سرور واقعی)",username:"@global_world",phone:"",type:"group",isGlobal:!0},{id:"saved",name:"پیام‌های ذخیره شده",avatar:"",status:"online",bio:"فضای شخصی شما برای ذخیره پیام‌ها و فایل‌ها",username:"@saved_messages",phone:"",type:"user"}],wo={};Fl.forEach(t=>{wo[t.id]={contactId:t.id,messages:[],unreadCount:0,draft:""}});const VP={name:"کاربر مهمان",bio:"...",username:"@guest",phone:"",role:"user",isBanned:!1},MP=()=>{var es,Ms;const[t,e]=M.useState(null),[n,r]=M.useState(!0),[s,i]=M.useState(Fl),[o,l]=M.useState(wo),[u,d]=M.useState(VP),[p,m]=M.useState([]),[g,A]=M.useState(""),[R,C]=M.useState("default"),[b,T]=M.useState(null),[_,k]=M.useState(()=>localStorage.getItem("irangram_theme")||us.LIGHT),[O,U]=M.useState(window.innerWidth<768),[B,E]=M.useState(!1),[v,w]=M.useState(null),[I,S]=M.useState(!1),[N,x]=M.useState(!1),[Se,H]=M.useState(!1),[pe,he]=M.useState(null),[$,Z]=M.useState(!1),[re,ye]=M.useState(0),[ue,K]=M.useState(!1),[me,ke]=M.useState(null),Le=M.useRef(null),Tt=M.useRef(new Audio(LP));M.useEffect(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[]),M.useEffect(()=>{if(u.isBanned&&"Notification"in window&&Notification.permission==="granted")try{new Notification("⛔ حساب کاربری مسدود شد",{body:"دسترسی شما به امکانات برنامه محدود شده است. برای پیگیری به مدیریت پیام دهید.",icon:"https://cdn-icons-png.flaticon.com/512/2111/2111615.png",tag:"ban_status",requireInteraction:!0})}catch(V){console.error("Notification trigger failed",V)}},[u.isBanned]),M.useEffect(()=>{const V=Y=>{Y.preventDefault(),he(Y)};return window.addEventListener("beforeinstallprompt",V),()=>{window.removeEventListener("beforeinstallprompt",V)}},[]);const Ls=async()=>{if(!pe)return;pe.prompt();const{outcome:V}=await pe.userChoice;V==="accepted"&&he(null)};M.useEffect(()=>{const V=localStorage.getItem("irangram_accounts");V&&m(JSON.parse(V))},[]),M.useEffect(()=>{const V=eP(async Y=>{var P;if(Y){e(Y);const L=await sP(Y.uid);d({name:(L==null?void 0:L.name)||Y.displayName||"کاربر",bio:(L==null?void 0:L.bio)||"",username:(L==null?void 0:L.username)||((P=Y.email)==null?void 0:P.split("@")[0])||"",phone:(L==null?void 0:L.phone)||"",role:(L==null?void 0:L.role)||"user",isBanned:(L==null?void 0:L.isBanned)||!1});const X=Y.uid,xe=localStorage.getItem(`irangram_contacts_${X}`);i(xe?JSON.parse(xe):Fl);const Ve=localStorage.getItem(`irangram_sessions_${X}`);let Me=JSON.parse(Ve||JSON.stringify(wo));Me.global_chat||(Me.global_chat=wo.global_chat),l(Me);const Dt=localStorage.getItem(`irangram_wallpaper_${X}`);C(Dt||"default"),m($e=>{var Ui;const dt={uid:Y.uid,name:(L==null?void 0:L.name)||Y.displayName||"کاربر",avatar:(L==null?void 0:L.avatar)||`https://ui-avatars.com/api/?name=${Y.email}`,email:Y.email||"",username:(L==null?void 0:L.username)||((Ui=Y.email)==null?void 0:Ui.split("@")[0])||"",role:(L==null?void 0:L.role)||"user"},On=$e.filter(vc=>vc.uid!==Y.uid),ts=[dt,...On];return localStorage.setItem("irangram_accounts",JSON.stringify(ts)),ts})}else e(null),i(Fl),l(wo);r(!1)});return()=>V()},[]),M.useEffect(()=>{if(!t)return;const V=iP(t.uid,Y=>{d(P=>({...P,...Y}))});return()=>V()},[t]),M.useEffect(()=>{t&&(localStorage.setItem(`irangram_sessions_${t.uid}`,JSON.stringify(o)),localStorage.setItem(`irangram_contacts_${t.uid}`,JSON.stringify(s)),localStorage.setItem(`irangram_wallpaper_${t.uid}`,R))},[o,s,R,t]),M.useEffect(()=>{localStorage.setItem("irangram_theme",_)},[_]),M.useEffect(()=>{const V=()=>{U(window.innerWidth<768),window.innerWidth<1024&&E(!1)};return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]),M.useEffect(()=>{_===us.DARK?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[_]),M.useEffect(()=>{if(!t||u.isBanned)return;const V=EP(P=>{P.currentVersion>Ht.VERSION&&H(!0)}),Y=gP(t.uid,P=>{if(P.length>0){const L=P[0];ke({title:L.title,message:L.message}),yP(t.uid,L.id)}});return xP(),()=>{V(),Y()}},[t,u.isBanned]),M.useEffect(()=>{if(!t||u.isBanned)return;const V=Y=>{const P=Y.map(L=>({...L,senderId:L.senderId===t.uid?"me":L.senderId,reactions:L.reactions||{}}));l(L=>{var Me,Dt,$e,dt,On;const X=(Dt=(Me=L.global_chat)==null?void 0:Me.messages.slice(-1)[0])==null?void 0:Dt.id,xe=($e=P.slice(-1)[0])==null?void 0:$e.id;let Ve=((dt=L.global_chat)==null?void 0:dt.unreadCount)||0;if(X!==xe&&P.length>0&&P[P.length-1].senderId!=="me"){b!=="global_chat"&&(Ve+=1);try{Tt.current.currentTime=0,Tt.current.play().catch(()=>{})}catch{}}return{...L,global_chat:{contactId:"global_chat",messages:P,unreadCount:b==="global_chat"?0:Ve,draft:((On=L.global_chat)==null?void 0:On.draft)||""}}})};return Le.current=vP(V),()=>{Le.current&&Le.current()}},[t,b,u.isBanned]),M.useEffect(()=>{let V;return $?V=setInterval(()=>{ye(Y=>Y+1)},1e3):ye(0),()=>clearInterval(V)},[$]);const Xr=()=>k(V=>V===us.LIGHT?us.DARK:us.LIGHT),Pt=V=>{T(V),E(!1),w(null),l(Y=>({...Y,[V]:{...Y[V],unreadCount:0}}))},Ut=V=>{if(s.find(Y=>Y.id===V.id)){Pt(V.id);return}i(Y=>[...Y,V]),l(Y=>({...Y,[V.id]:{contactId:V.id,messages:[],unreadCount:0,draft:""}})),Pt(V.id)},_n=M.useCallback(async(V,Y)=>{!b||!t||(b==="global_chat"?await wP(V,Y,t.uid):l(P=>{const L=P[b];if(!L)return P;const X=L.messages.map(xe=>{if(xe.id!==V)return xe;const Ve={...xe.reactions},Me=Ve[Y]||[];return Me.includes("me")?(Ve[Y]=Me.filter(Dt=>Dt!=="me"),Ve[Y].length===0&&delete Ve[Y]):Ve[Y]=[...Me,"me"],{...xe,reactions:Ve}});return{...P,[b]:{...L,messages:X}}}))},[b,t]),or=M.useCallback(async V=>{b&&(b==="global_chat"?await Ix(V):l(Y=>({...Y,[b]:{...Y[b],messages:Y[b].messages.filter(P=>P.id!==V)}})))},[b]),ar=M.useCallback(async(V,Y)=>{if(!b||!t)return;if(b==="global_chat"){const X=u.name?`https://ui-avatars.com/api/?name=${u.name}&background=random&color=fff&size=64`:"";let xe=V.imageUrl,Ve=V.fileUrl;if(V.file)try{const Me=V.type==="audio"?"audios":V.type==="image"?"images":"files",Dt=`uploads/${t.uid}/${Me}/${Date.now()}_${V.fileName||"file"}`,$e=await lP(V.file,Dt);V.type==="image"?xe=$e:Ve=$e}catch(Me){console.error("Upload failed",Me),alert("آپلود فایل با خطا مواجه شد.");return}await _P({text:V.text,type:V.type,imageUrl:xe,fileUrl:Ve,fileName:V.fileName,fileSize:V.fileSize,audioDuration:V.audioDuration,isSticker:V.isSticker,replyToId:Y,senderId:t.uid},{name:u.name,avatar:X,role:u.role});return}let P=V.imageUrl;V.file&&(P=URL.createObjectURL(V.file));const L={id:Date.now().toString(),text:V.text||(V.isSticker?"Sticker":V.type==="image"?"عکس":V.type==="audio"?"پیام صوتی":"فایل"),senderId:"me",timestamp:Date.now(),status:"read",type:V.type,imageUrl:V.type==="image"?P:void 0,fileUrl:V.type!=="image"?P:void 0,fileName:V.fileName,fileSize:V.fileSize,audioDuration:V.audioDuration,isSticker:V.isSticker,replyToId:Y,reactions:{}};l(X=>({...X,[b]:{...X[b],messages:[...X[b].messages,L]}}))},[b,t,u]),lr=async V=>{const Y={...V,role:u.role};if(d(Y),t){await oP(t.uid,Y),m(L=>L.map(X=>X.uid===t.uid?{...X,name:Y.name,username:Y.username}:X));const P=p.map(L=>L.uid===t.uid?{...L,name:Y.name,username:Y.username}:L);localStorage.setItem("irangram_accounts",JSON.stringify(P))}},Jr=async()=>{window.confirm("آیا برای خروج مطمئن هستید؟")&&(A(""),await wd(t==null?void 0:t.uid),e(null))},Mi=async()=>{A(""),await wd(t==null?void 0:t.uid),e(null)},Vs=async V=>{const Y=p.find(P=>P.uid===V);Y&&A(Y.email),await wd(t==null?void 0:t.uid),e(null)},ur=V=>{const Y={id:V.uid,name:V.name,avatar:V.avatar,bio:V.bio,username:"@"+V.username,phone:V.phone,status:"offline",type:"user"};Ut(Y)},Zr=V=>{V.id==="me"||V.id===(t==null?void 0:t.uid)?S(!0):w({id:V.id,name:V.name||"کاربر",avatar:V.avatar||"",username:"",phone:"",bio:"کاربر ایران‌گرام",type:"user",status:"offline"})};return n?h.jsx("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-white dark:bg-black text-telegram-primary",children:h.jsx(zI,{className:"animate-spin w-10 h-10"})}):t?u.isBanned?h.jsx(jP,{currentUser:{uid:t.uid,name:u.name},onLogout:Jr}):h.jsxs("div",{className:"flex flex-col h-[100dvh] w-full overflow-hidden bg-white dark:bg-black font-sans relative",children:[me&&h.jsx("div",{className:"fixed inset-0 z-[120] bg-black/60 flex items-center justify-center p-6 animate-fade-in backdrop-blur-sm",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm w-full border-t-4 border-blue-500",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400",children:[h.jsx(Vf,{size:28}),h.jsx("h3",{className:"text-xl font-bold",children:me.title})]}),h.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-6 leading-relaxed whitespace-pre-wrap",children:me.message}),h.jsx("button",{onClick:()=>ke(null),className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl transition-colors",children:"متوجه شدم"})]})}),Se&&h.jsx("div",{className:"fixed inset-0 z-[100] bg-telegram-primary/95 flex flex-col items-center justify-center p-6 text-white text-center animate-fade-in",children:h.jsxs("div",{className:"bg-white text-gray-900 rounded-3xl p-8 max-w-sm w-full shadow-2xl",children:[h.jsx("div",{className:"w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-telegram-primary",children:h.jsx(Ku,{size:40})}),h.jsx("h2",{className:"text-2xl font-bold mb-2",children:"نسخه جدید موجود است!"}),h.jsx("p",{className:"text-gray-500 mb-6 text-sm",children:"برای عملکرد صحیح برنامه و دسترسی به قابلیت‌های جدید، لطفاً همین حالا بروزرسانی کنید."}),h.jsx("button",{onClick:()=>window.location.reload(),className:"w-full bg-telegram-primary hover:bg-telegram-primaryDark text-white font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-105",children:"دریافت نسخه جدید"})]})}),$&&h.jsxs("div",{className:"fixed inset-0 z-[90] bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-between py-12 text-white animate-fade-in",children:[h.jsxs("div",{className:"flex flex-col items-center mt-10",children:[h.jsx("div",{className:"w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-4 shadow-2xl",children:h.jsx("img",{src:((es=s.find(V=>V.id===b))==null?void 0:es.avatar)||"https://via.placeholder.com/150",className:"w-full h-full object-cover"})}),h.jsx("h2",{className:"text-3xl font-bold mb-2",children:((Ms=s.find(V=>V.id===b))==null?void 0:Ms.name)||"تماس ناشناس"}),h.jsx("p",{className:"text-white/60 text-lg animate-pulse",children:re>0?`${Math.floor(re/60)}:${(re%60).toString().padStart(2,"0")}`:"در حال تماس..."})]}),h.jsxs("div",{className:"flex items-center gap-8 mb-10",children:[h.jsx("button",{onClick:()=>K(!ue),className:`p-4 rounded-full transition-all ${ue?"bg-white text-gray-900":"bg-white/10 hover:bg-white/20"}`,children:ue?h.jsx(qI,{size:32}):h.jsx(B0,{size:32})}),h.jsx("button",{onClick:()=>{Z(!1)},className:"p-6 bg-red-500 rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all",children:h.jsx(UI,{size:40})}),h.jsx("button",{className:"p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all",children:h.jsx(ma,{size:32,className:"rotate-180"})})]})]}),N&&h.jsx(OP,{onClose:()=>x(!1),currentUserEmail:t.email,currentUserRole:u.role||"user",onStartChat:ur}),h.jsx(DP,{isOpen:I,onClose:()=>S(!1),userProfile:u,onSave:lr,wallpaper:R,onSaveWallpaper:C}),h.jsxs("div",{className:"flex-1 flex overflow-hidden relative",children:[h.jsxs("div",{className:`
            ${O&&b?"hidden":"flex"}
            ${O?"w-full":"w-80 lg:w-96"} 
            flex-col h-full z-20 transition-all duration-300 shadow-xl bg-white dark:bg-telegram-bgDark
          `,children:[h.jsx("div",{className:"flex-1 overflow-hidden",children:h.jsx(TP,{contacts:s,sessions:o,activeContactId:b,onSelectContact:Pt,toggleTheme:Xr,theme:_,userProfile:u,onOpenSettings:()=>S(!0),onOpenAdminPanel:()=>x(!0),onAddContact:Ut,showInstallButton:!!pe,onInstall:Ls,storedAccounts:p,onAddAccount:Mi,onSwitchAccount:Vs})}),h.jsxs("div",{className:"p-2 border-t border-telegram-border dark:border-telegram-borderDark flex justify-between items-center bg-gray-50 dark:bg-telegram-bgDark",children:[h.jsxs("span",{className:"text-xs text-gray-400 px-2",children:["v",Ht.VERSION]}),h.jsx("button",{onClick:Jr,className:"p-2 text-red-500 hover:bg-red-50 dark:hover:bg-white/5 rounded-lg",title:"خروج کامل",children:h.jsx(z0,{size:18})})]})]}),h.jsxs("div",{className:`
            ${O&&!b?"hidden":"flex"}
            flex-1 h-full relative flex-col min-w-0
          `,children:[h.jsx("div",{className:"flex-1 h-full relative flex flex-col min-w-0",children:b?h.jsx(CP,{contact:s.find(V=>V.id===b),messages:o[b].messages,myId:"me",myRole:u.role||"user",onSendMessage:ar,onEditMessage:()=>{},onDeleteMessage:or,onReaction:_n,onBack:()=>T(null),isMobile:O,onProfileClick:()=>E(!0),onAvatarClick:Zr,wallpaper:R,onCall:()=>Z(!0)}):h.jsx("div",{className:"h-full w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark text-gray-400 dark:text-gray-600 pattern-bg",children:h.jsxs("div",{className:"text-center p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl",children:[h.jsx("span",{className:"text-4xl block mb-4",children:"👋"}),h.jsx("h3",{className:"font-bold mb-2",children:"به ایران‌گرام خوش آمدید"}),h.jsx("p",{className:"text-sm",children:"برای شروع گفتگو کلیک کنید"})]})})}),(B||v)&&h.jsx("div",{className:`
                    absolute inset-y-0 right-0 z-50 bg-white dark:bg-telegram-secondaryDark shadow-2xl transition-transform duration-300
                    ${O?"w-full":"w-80 border-l border-telegram-border dark:border-telegram-borderDark"}
                `,children:h.jsx(NP,{contact:v||s.find(V=>V.id===b),onClose:()=>{E(!1),w(null)},onStartChat:v?V=>{Ut(V),w(null)}:void 0})})]})]})]}):h.jsx(qP,{onSuccess:e,storedAccounts:p,initialEmail:g})},Ax=document.getElementById("root");if(!Ax)throw new Error("Could not find root element to mount to");const UP=Ed.createRoot(Ax);UP.render(h.jsx(h1.StrictMode,{children:h.jsx(MP,{})}));
