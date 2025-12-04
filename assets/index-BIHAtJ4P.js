(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Yx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A0={exports:{}},Mu={},S0={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),Xx=Symbol.for("react.portal"),Jx=Symbol.for("react.fragment"),Zx=Symbol.for("react.strict_mode"),e1=Symbol.for("react.profiler"),t1=Symbol.for("react.provider"),n1=Symbol.for("react.context"),r1=Symbol.for("react.forward_ref"),s1=Symbol.for("react.suspense"),i1=Symbol.for("react.memo"),o1=Symbol.for("react.lazy"),Fm=Symbol.iterator;function a1(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,N0={};function zi(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||b0}zi.prototype.isReactComponent={};zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C0(){}C0.prototype=zi.prototype;function Qh(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||b0}var Yh=Qh.prototype=new C0;Yh.constructor=Qh;R0(Yh,zi.prototype);Yh.isPureReactComponent=!0;var zm=Array.isArray,P0=Object.prototype.hasOwnProperty,Xh={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function O0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)P0.call(e,r)&&!D0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:_a,type:t,key:i,ref:o,props:s,_owner:Xh.current}}function l1(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function u1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function Vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u1(""+t.key):e.toString(36)}function bl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case Xx:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Vc(o,0):r,zm(s)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),bl(s,e,n,"",function(h){return h})):s!=null&&(Jh(s)&&(s=l1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Bm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",zm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Vc(i,l);o+=bl(i,e,n,u,s)}else if(u=a1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Vc(i,l++),o+=bl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rl(t,e,n){if(t==null)return t;var r=[],s=0;return bl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function c1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},Rl={transition:null},d1={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:Xh};function j0(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=zi;ue.Fragment=Jx;ue.Profiler=e1;ue.PureComponent=Qh;ue.StrictMode=Zx;ue.Suspense=s1;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1;ue.act=j0;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=R0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Xh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)P0.call(e,u)&&!D0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:_a,type:t.type,key:s,ref:i,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:n1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t1,_context:t},t.Consumer=t};ue.createElement=O0;ue.createFactory=function(t){var e=O0.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:r1,render:t}};ue.isValidElement=Jh;ue.lazy=function(t){return{$$typeof:o1,_payload:{_status:-1,_result:t},_init:c1}};ue.memo=function(t,e){return{$$typeof:i1,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};ue.unstable_act=j0;ue.useCallback=function(t,e){return jt.current.useCallback(t,e)};ue.useContext=function(t){return jt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return jt.current.useEffect(t,e)};ue.useId=function(){return jt.current.useId()};ue.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return jt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};ue.useRef=function(t){return jt.current.useRef(t)};ue.useState=function(t){return jt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return jt.current.useTransition()};ue.version="18.3.1";S0.exports=ue;var L=S0.exports;const h1=Yx(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1=L,p1=Symbol.for("react.element"),m1=Symbol.for("react.fragment"),g1=Object.prototype.hasOwnProperty,y1=f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v1={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)g1.call(e,r)&&!v1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:p1,type:t,key:i,ref:o,props:s,_owner:y1.current}}Mu.Fragment=m1;Mu.jsx=q0;Mu.jsxs=q0;A0.exports=Mu;var d=A0.exports,kd={},L0={exports:{}},en={},V0={exports:{}},M0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,J){var ne=B.length;B.push(J);e:for(;0<ne;){var _e=ne-1>>>1,ce=B[_e];if(0<s(ce,J))B[_e]=J,B[ne]=ce,ne=_e;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var J=B[0],ne=B.pop();if(ne!==J){B[0]=ne;e:for(var _e=0,ce=B.length,K=ce>>>1;_e<K;){var le=2*(_e+1)-1,Ae=B[le],ke=le+1,At=B[ke];if(0>s(Ae,ne))ke<ce&&0>s(At,Ae)?(B[_e]=At,B[ke]=ne,_e=ke):(B[_e]=Ae,B[le]=ne,_e=le);else if(ke<ce&&0>s(At,ne))B[_e]=At,B[ke]=ne,_e=ke;else break e}}return J}function s(B,J){var ne=B.sortIndex-J.sortIndex;return ne!==0?ne:B.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,g=3,A=!1,b=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var J=n(h);J!==null;){if(J.callback===null)r(h);else if(J.startTime<=B)r(h),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(h)}}function O(B){if(R=!1,k(B),!b)if(n(u)!==null)b=!0,ye(M);else{var J=n(h);J!==null&&pe(O,J.startTime-B)}}function M(B,J){b=!1,R&&(R=!1,w(v),v=-1),A=!0;var ne=g;try{for(k(J),m=n(u);m!==null&&(!(m.expirationTime>J)||B&&!S());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,g=m.priorityLevel;var ce=_e(m.expirationTime<=J);J=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(u)&&r(u),k(J)}else r(u);m=n(u)}if(m!==null)var K=!0;else{var le=n(h);le!==null&&pe(O,le.startTime-J),K=!1}return K}finally{m=null,g=ne,A=!1}}var z=!1,x=null,v=-1,E=5,I=-1;function S(){return!(t.unstable_now()-I<E)}function C(){if(x!==null){var B=t.unstable_now();I=B;var J=!0;try{J=x(!0,B)}finally{J?T():(z=!1,x=null)}}else z=!1}var T;if(typeof _=="function")T=function(){_(C)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,W=Ne.port2;Ne.port1.onmessage=C,T=function(){W.postMessage(null)}}else T=function(){N(C,0)};function ye(B){x=B,z||(z=!0,T())}function pe(B,J){v=N(function(){B(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){b||A||(b=!0,ye(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var J=3;break;default:J=g}var ne=g;g=J;try{return B()}finally{g=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=g;g=B;try{return J()}finally{g=ne}},t.unstable_scheduleCallback=function(B,J,ne){var _e=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?_e+ne:_e):ne=_e,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ne+ce,B={id:p++,callback:J,priorityLevel:B,startTime:ne,expirationTime:ce,sortIndex:-1},ne>_e?(B.sortIndex=ne,e(h,B),n(u)===null&&B===n(h)&&(R?(w(v),v=-1):R=!0,pe(O,ne-_e))):(B.sortIndex=ce,e(u,B),b||A||(b=!0,ye(M))),B},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(B){var J=g;return function(){var ne=g;g=J;try{return B.apply(this,arguments)}finally{g=ne}}}})(M0);V0.exports=M0;var _1=V0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1=L,Jt=_1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U0=new Set,Wo={};function Ws(t,e){Si(t,e),Si(t+"Capture",e)}function Si(t,e){for(Wo[t]=e,t=0;t<e.length;t++)U0.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ad=Object.prototype.hasOwnProperty,E1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},Wm={};function x1(t){return Ad.call(Wm,t)?!0:Ad.call($m,t)?!1:E1.test(t)?Wm[t]=!0:($m[t]=!0,!1)}function T1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function I1(t,e,n,r){if(e===null||typeof e>"u"||T1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zh=/[\-:]([a-z])/g;function ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zh,ef);dt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zh,ef);dt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zh,ef);dt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tf(t,e,n,r){var s=dt.hasOwnProperty(e)?dt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(I1(e,n,s,r)&&(n=null),r||s===null?x1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gr=w1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),ii=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),Sd=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),Rd=Symbol.for("react.suspense_list"),sf=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),B0=Symbol.for("react.offscreen"),Hm=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Mc;function _o(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var Uc=!1;function Fc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function k1(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case ii:return"Portal";case Sd:return"Profiler";case nf:return"StrictMode";case bd:return"Suspense";case Rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z0:return(t.displayName||"Context")+".Consumer";case F0:return(t._context.displayName||"Context")+".Provider";case rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sf:return e=t.displayName||null,e!==null?e:Nd(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Nd(t(e))}catch{}}return null}function A1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nd(e);case 8:return e===nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S1(t){var e=$0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=S1(t))}function W0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cd(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H0(t,e){e=e.checked,e!=null&&tf(t,"checked",e,!1)}function Pd(t,e){H0(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dd(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dd(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(wo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function K0(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ym(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,Q0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b1=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){b1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function Y0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function X0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Y0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var R1=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(t,e){if(e){if(R1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=null;function of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Md=null,vi=null,_i=null;function Xm(t){if(t=xa(t)){if(typeof Md!="function")throw Error(F(280));var e=t.stateNode;e&&(e=$u(e),Md(t.stateNode,t.type,e))}}function J0(t){vi?_i?_i.push(t):_i=[t]:vi=t}function Z0(){if(vi){var t=vi,e=_i;if(_i=vi=null,Xm(t),e)for(t=0;t<e.length;t++)Xm(e[t])}}function ev(t,e){return t(e)}function tv(){}var zc=!1;function nv(t,e,n){if(zc)return t(e,n);zc=!0;try{return ev(t,e,n)}finally{zc=!1,(vi!==null||_i!==null)&&(tv(),Z0())}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var r=$u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Ud=!1;if(lr)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Ud=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Ud=!1}function N1(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Co=!1,Xl=null,Jl=!1,Fd=null,C1={onError:function(t){Co=!0,Xl=t}};function P1(t,e,n,r,s,i,o,l,u){Co=!1,Xl=null,N1.apply(C1,arguments)}function D1(t,e,n,r,s,i,o,l,u){if(P1.apply(this,arguments),Co){if(Co){var h=Xl;Co=!1,Xl=null}else throw Error(F(198));Jl||(Jl=!0,Fd=h)}}function Hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jm(t){if(Hs(t)!==t)throw Error(F(188))}function O1(t){var e=t.alternate;if(!e){if(e=Hs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Jm(s),t;if(i===r)return Jm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function sv(t){return t=O1(t),t!==null?iv(t):null}function iv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iv(t);if(e!==null)return e;t=t.sibling}return null}var ov=Jt.unstable_scheduleCallback,Zm=Jt.unstable_cancelCallback,j1=Jt.unstable_shouldYield,q1=Jt.unstable_requestPaint,Ke=Jt.unstable_now,L1=Jt.unstable_getCurrentPriorityLevel,af=Jt.unstable_ImmediatePriority,av=Jt.unstable_UserBlockingPriority,Zl=Jt.unstable_NormalPriority,V1=Jt.unstable_LowPriority,lv=Jt.unstable_IdlePriority,Uu=null,On=null;function M1(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Uu,t,void 0,(t.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:z1,U1=Math.log,F1=Math.LN2;function z1(t){return t>>>=0,t===0?32:31-(U1(t)/F1|0)|0}var al=64,ll=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Eo(l):(i&=o,i!==0&&(r=Eo(i)))}else o=n&~s,o!==0?r=Eo(o):i!==0&&(r=Eo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xn(e),s=1<<n,r|=t[n],e&=~s;return r}function B1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-xn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=B1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uv(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xn(e),t[e]=n}function W1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-xn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function lf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Te=0;function cv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dv,uf,hv,fv,pv,Bd=!1,ul=[],Vr=null,Mr=null,Ur=null,Go=new Map,Qo=new Map,Rr=[],H1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eg(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function co(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=xa(e),e!==null&&uf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function K1(t,e,n,r,s){switch(e){case"focusin":return Vr=co(Vr,t,e,n,r,s),!0;case"dragenter":return Mr=co(Mr,t,e,n,r,s),!0;case"mouseover":return Ur=co(Ur,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Go.set(i,co(Go.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Qo.set(i,co(Qo.get(i)||null,t,e,n,r,s)),!0}return!1}function mv(t){var e=Ts(t.target);if(e!==null){var n=Hs(e);if(n!==null){if(e=n.tag,e===13){if(e=rv(n),e!==null){t.blockedOn=e,pv(t.priority,function(){hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vd=r,n.target.dispatchEvent(r),Vd=null}else return e=xa(n),e!==null&&uf(e),t.blockedOn=n,!1;e.shift()}return!0}function tg(t,e,n){Nl(t)&&n.delete(e)}function G1(){Bd=!1,Vr!==null&&Nl(Vr)&&(Vr=null),Mr!==null&&Nl(Mr)&&(Mr=null),Ur!==null&&Nl(Ur)&&(Ur=null),Go.forEach(tg),Qo.forEach(tg)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,Bd||(Bd=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,G1)))}function Yo(t){function e(s){return ho(s,t)}if(0<ul.length){ho(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&ho(Vr,t),Mr!==null&&ho(Mr,t),Ur!==null&&ho(Ur,t),Go.forEach(e),Qo.forEach(e),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)mv(n),n.blockedOn===null&&Rr.shift()}var wi=gr.ReactCurrentBatchConfig,tu=!0;function Q1(t,e,n,r){var s=Te,i=wi.transition;wi.transition=null;try{Te=1,cf(t,e,n,r)}finally{Te=s,wi.transition=i}}function Y1(t,e,n,r){var s=Te,i=wi.transition;wi.transition=null;try{Te=4,cf(t,e,n,r)}finally{Te=s,wi.transition=i}}function cf(t,e,n,r){if(tu){var s=$d(t,e,n,r);if(s===null)Zc(t,e,r,nu,n),eg(t,r);else if(K1(s,t,e,n,r))r.stopPropagation();else if(eg(t,r),e&4&&-1<H1.indexOf(t)){for(;s!==null;){var i=xa(s);if(i!==null&&dv(i),i=$d(t,e,n,r),i===null&&Zc(t,e,r,nu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Zc(t,e,r,null,n)}}var nu=null;function $d(t,e,n,r){if(nu=null,t=of(r),t=Ts(t),t!==null)if(e=Hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function gv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L1()){case af:return 1;case av:return 4;case Zl:case V1:return 16;case lv:return 536870912;default:return 16}default:return 16}}var jr=null,df=null,Cl=null;function yv(){if(Cl)return Cl;var t,e=df,n=e.length,r,s="value"in jr?jr.value:jr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Cl=s.slice(t,1<r?1-r:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function ng(){return!1}function tn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cl:ng,this.isPropagationStopped=ng,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=tn(Bi),Ea=Ve({},Bi,{view:0,detail:0}),X1=tn(Ea),$c,Wc,fo,Fu=Ve({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?($c=t.screenX-fo.screenX,Wc=t.screenY-fo.screenY):Wc=$c=0,fo=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),rg=tn(Fu),J1=Ve({},Fu,{dataTransfer:0}),Z1=tn(J1),eT=Ve({},Ea,{relatedTarget:0}),Hc=tn(eT),tT=Ve({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),nT=tn(tT),rT=Ve({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sT=tn(rT),iT=Ve({},Bi,{data:0}),sg=tn(iT),oT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lT[t])?!!e[t]:!1}function ff(){return uT}var cT=Ve({},Ea,{key:function(t){if(t.key){var e=oT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dT=tn(cT),hT=Ve({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=tn(hT),fT=Ve({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),pT=tn(fT),mT=Ve({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gT=tn(mT),yT=Ve({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vT=tn(yT),_T=[9,13,27,32],pf=lr&&"CompositionEvent"in window,Po=null;lr&&"documentMode"in document&&(Po=document.documentMode);var wT=lr&&"TextEvent"in window&&!Po,vv=lr&&(!pf||Po&&8<Po&&11>=Po),og=" ",ag=!1;function _v(t,e){switch(t){case"keyup":return _T.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function ET(t,e){switch(t){case"compositionend":return wv(e);case"keypress":return e.which!==32?null:(ag=!0,og);case"textInput":return t=e.data,t===og&&ag?null:t;default:return null}}function xT(t,e){if(ai)return t==="compositionend"||!pf&&_v(t,e)?(t=yv(),Cl=df=jr=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vv&&e.locale!=="ko"?null:e.data;default:return null}}var TT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TT[t.type]:e==="textarea"}function Ev(t,e,n,r){J0(r),e=ru(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Do=null,Xo=null;function IT(t){Pv(t,0)}function zu(t){var e=ci(t);if(W0(e))return t}function kT(t,e){if(t==="change")return e}var xv=!1;if(lr){var Kc;if(lr){var Gc="oninput"in document;if(!Gc){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),Gc=typeof ug.oninput=="function"}Kc=Gc}else Kc=!1;xv=Kc&&(!document.documentMode||9<document.documentMode)}function cg(){Do&&(Do.detachEvent("onpropertychange",Tv),Xo=Do=null)}function Tv(t){if(t.propertyName==="value"&&zu(Xo)){var e=[];Ev(e,Xo,t,of(t)),nv(IT,e)}}function AT(t,e,n){t==="focusin"?(cg(),Do=e,Xo=n,Do.attachEvent("onpropertychange",Tv)):t==="focusout"&&cg()}function ST(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(Xo)}function bT(t,e){if(t==="click")return zu(e)}function RT(t,e){if(t==="input"||t==="change")return zu(e)}function NT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:NT;function Jo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ad.call(e,s)||!kn(t[s],e[s]))return!1}return!0}function dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,e){var n=dg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dg(n)}}function Iv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Iv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kv(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CT(t){var e=kv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Iv(n.ownerDocument.documentElement,n)){if(r!==null&&mf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=hg(n,i);var o=hg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PT=lr&&"documentMode"in document&&11>=document.documentMode,li=null,Wd=null,Oo=null,Hd=!1;function fg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||li==null||li!==Yl(r)||(r=li,"selectionStart"in r&&mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Jo(Oo,r)||(Oo=r,r=ru(Wd,"onSelect"),0<r.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function dl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},Qc={},Av={};lr&&(Av=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Bu(t){if(Qc[t])return Qc[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Av)return Qc[t]=e[n];return t}var Sv=Bu("animationend"),bv=Bu("animationiteration"),Rv=Bu("animationstart"),Nv=Bu("transitionend"),Cv=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(t,e){Cv.set(t,e),Ws(e,[t])}for(var Yc=0;Yc<pg.length;Yc++){var Xc=pg[Yc],DT=Xc.toLowerCase(),OT=Xc[0].toUpperCase()+Xc.slice(1);ns(DT,"on"+OT)}ns(Sv,"onAnimationEnd");ns(bv,"onAnimationIteration");ns(Rv,"onAnimationStart");ns("dblclick","onDoubleClick");ns("focusin","onFocus");ns("focusout","onBlur");ns(Nv,"onTransitionEnd");Si("onMouseEnter",["mouseout","mouseover"]);Si("onMouseLeave",["mouseout","mouseover"]);Si("onPointerEnter",["pointerout","pointerover"]);Si("onPointerLeave",["pointerout","pointerover"]);Ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jT=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function mg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,D1(r,e,void 0,t),t.currentTarget=null}function Pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;mg(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;mg(s,l,h),i=u}}}if(Jl)throw t=Fd,Jl=!1,Fd=null,t}function Pe(t,e){var n=e[Xd];n===void 0&&(n=e[Xd]=new Set);var r=t+"__bubble";n.has(r)||(Dv(e,t,2,!1),n.add(r))}function Jc(t,e,n){var r=0;e&&(r|=4),Dv(n,t,r,e)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[hl]){t[hl]=!0,U0.forEach(function(n){n!=="selectionchange"&&(jT.has(n)||Jc(n,!1,t),Jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hl]||(e[hl]=!0,Jc("selectionchange",!1,e))}}function Dv(t,e,n,r){switch(gv(e)){case 1:var s=Q1;break;case 4:s=Y1;break;default:s=cf}n=s.bind(null,e,n,t),s=void 0,!Ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Zc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ts(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}nv(function(){var h=i,p=of(n),m=[];e:{var g=Cv.get(t);if(g!==void 0){var A=hf,b=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":A=dT;break;case"focusin":b="focus",A=Hc;break;case"focusout":b="blur",A=Hc;break;case"beforeblur":case"afterblur":A=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=pT;break;case Sv:case bv:case Rv:A=nT;break;case Nv:A=gT;break;case"scroll":A=X1;break;case"wheel":A=vT;break;case"copy":case"cut":case"paste":A=sT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=ig}var R=(e&4)!==0,N=!R&&t==="scroll",w=R?g!==null?g+"Capture":null:g;R=[];for(var _=h,k;_!==null;){k=_;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,w!==null&&(O=Ko(_,w),O!=null&&R.push(ea(_,O,k)))),N)break;_=_.return}0<R.length&&(g=new A(g,b,null,n,p),m.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Vd&&(b=n.relatedTarget||n.fromElement)&&(Ts(b)||b[ur]))break e;if((A||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,A?(b=n.relatedTarget||n.toElement,A=h,b=b?Ts(b):null,b!==null&&(N=Hs(b),b!==N||b.tag!==5&&b.tag!==6)&&(b=null)):(A=null,b=h),A!==b)){if(R=rg,O="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(R=ig,O="onPointerLeave",w="onPointerEnter",_="pointer"),N=A==null?g:ci(A),k=b==null?g:ci(b),g=new R(O,_+"leave",A,n,p),g.target=N,g.relatedTarget=k,O=null,Ts(p)===h&&(R=new R(w,_+"enter",b,n,p),R.target=k,R.relatedTarget=N,O=R),N=O,A&&b)t:{for(R=A,w=b,_=0,k=R;k;k=ti(k))_++;for(k=0,O=w;O;O=ti(O))k++;for(;0<_-k;)R=ti(R),_--;for(;0<k-_;)w=ti(w),k--;for(;_--;){if(R===w||w!==null&&R===w.alternate)break t;R=ti(R),w=ti(w)}R=null}else R=null;A!==null&&gg(m,g,A,R,!1),b!==null&&N!==null&&gg(m,N,b,R,!0)}}e:{if(g=h?ci(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var M=kT;else if(lg(g))if(xv)M=RT;else{M=ST;var z=AT}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=bT);if(M&&(M=M(t,h))){Ev(m,M,n,p);break e}z&&z(t,g,h),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&Dd(g,"number",g.value)}switch(z=h?ci(h):window,t){case"focusin":(lg(z)||z.contentEditable==="true")&&(li=z,Wd=h,Oo=null);break;case"focusout":Oo=Wd=li=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,fg(m,n,p);break;case"selectionchange":if(PT)break;case"keydown":case"keyup":fg(m,n,p)}var x;if(pf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ai?_v(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(vv&&n.locale!=="ko"&&(ai||v!=="onCompositionStart"?v==="onCompositionEnd"&&ai&&(x=yv()):(jr=p,df="value"in jr?jr.value:jr.textContent,ai=!0)),z=ru(h,v),0<z.length&&(v=new sg(v,t,null,n,p),m.push({event:v,listeners:z}),x?v.data=x:(x=wv(n),x!==null&&(v.data=x)))),(x=wT?ET(t,n):xT(t,n))&&(h=ru(h,"onBeforeInput"),0<h.length&&(p=new sg("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=x))}Pv(m,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ru(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ko(t,n),i!=null&&r.unshift(ea(t,i,s)),i=Ko(t,e),i!=null&&r.push(ea(t,i,s))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Ko(n,i),u!=null&&o.unshift(ea(n,u,l))):s||(u=Ko(n,i),u!=null&&o.push(ea(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qT=/\r\n?/g,LT=/\u0000|\uFFFD/g;function yg(t){return(typeof t=="string"?t:""+t).replace(qT,`
`).replace(LT,"")}function fl(t,e,n){if(e=yg(e),yg(t)!==e&&n)throw Error(F(425))}function su(){}var Kd=null,Gd=null;function Qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yd=typeof setTimeout=="function"?setTimeout:void 0,VT=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,MT=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(t){return vg.resolve(null).then(t).catch(UT)}:Yd;function UT(t){setTimeout(function(){throw t})}function ed(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Yo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Yo(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $i=Math.random().toString(36).slice(2),Pn="__reactFiber$"+$i,ta="__reactProps$"+$i,ur="__reactContainer$"+$i,Xd="__reactEvents$"+$i,FT="__reactListeners$"+$i,zT="__reactHandles$"+$i;function Ts(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_g(t);t!==null;){if(n=t[Pn])return n;t=_g(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[Pn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function $u(t){return t[ta]||null}var Jd=[],di=-1;function rs(t){return{current:t}}function Oe(t){0>di||(t.current=Jd[di],Jd[di]=null,di--)}function Re(t,e){di++,Jd[di]=t.current,t.current=e}var Yr={},It=rs(Yr),zt=rs(!1),Ps=Yr;function bi(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Bt(t){return t=t.childContextTypes,t!=null}function iu(){Oe(zt),Oe(It)}function wg(t,e,n){if(It.current!==Yr)throw Error(F(168));Re(It,e),Re(zt,n)}function Ov(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,A1(t)||"Unknown",s));return Ve({},n,r)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,Ps=It.current,Re(It,t),Re(zt,zt.current),!0}function Eg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Ov(t,e,Ps),r.__reactInternalMemoizedMergedChildContext=t,Oe(zt),Oe(It),Re(It,t)):Oe(zt),Re(zt,n)}var Xn=null,Wu=!1,td=!1;function jv(t){Xn===null?Xn=[t]:Xn.push(t)}function BT(t){Wu=!0,jv(t)}function ss(){if(!td&&Xn!==null){td=!0;var t=0,e=Te;try{var n=Xn;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,Wu=!1}catch(s){throw Xn!==null&&(Xn=Xn.slice(t+1)),ov(af,ss),s}finally{Te=e,td=!1}}return null}var hi=[],fi=0,au=null,lu=0,sn=[],on=0,Ds=null,Zn=1,er="";function _s(t,e){hi[fi++]=lu,hi[fi++]=au,au=t,lu=e}function qv(t,e,n){sn[on++]=Zn,sn[on++]=er,sn[on++]=Ds,Ds=t;var r=Zn;t=er;var s=32-xn(r)-1;r&=~(1<<s),n+=1;var i=32-xn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Zn=1<<32-xn(e)+s|n<<s|r,er=i+t}else Zn=1<<i|n<<s|r,er=t}function gf(t){t.return!==null&&(_s(t,1),qv(t,1,0))}function yf(t){for(;t===au;)au=hi[--fi],hi[fi]=null,lu=hi[--fi],hi[fi]=null;for(;t===Ds;)Ds=sn[--on],sn[on]=null,er=sn[--on],sn[on]=null,Zn=sn[--on],sn[on]=null}var Xt=null,Kt=null,je=!1,wn=null;function Lv(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xt=t,Kt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ds!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xt=t,Kt=null,!0):!1;default:return!1}}function Zd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eh(t){if(je){var e=Kt;if(e){var n=e;if(!xg(t,e)){if(Zd(t))throw Error(F(418));e=Fr(n.nextSibling);var r=Xt;e&&xg(t,e)?Lv(r,n):(t.flags=t.flags&-4097|2,je=!1,Xt=t)}}else{if(Zd(t))throw Error(F(418));t.flags=t.flags&-4097|2,je=!1,Xt=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xt=t}function pl(t){if(t!==Xt)return!1;if(!je)return Tg(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qd(t.type,t.memoizedProps)),e&&(e=Kt)){if(Zd(t))throw Vv(),Error(F(418));for(;e;)Lv(t,e),e=Fr(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Xt?Fr(t.stateNode.nextSibling):null;return!0}function Vv(){for(var t=Kt;t;)t=Fr(t.nextSibling)}function Ri(){Kt=Xt=null,je=!1}function vf(t){wn===null?wn=[t]:wn.push(t)}var $T=gr.ReactCurrentBatchConfig;function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ig(t){var e=t._init;return e(t._payload)}function Mv(t){function e(w,_){if(t){var k=w.deletions;k===null?(w.deletions=[_],w.flags|=16):k.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function s(w,_){return w=Wr(w,_),w.index=0,w.sibling=null,w}function i(w,_,k){return w.index=k,t?(k=w.alternate,k!==null?(k=k.index,k<_?(w.flags|=2,_):k):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,k,O){return _===null||_.tag!==6?(_=ld(k,w.mode,O),_.return=w,_):(_=s(_,k),_.return=w,_)}function u(w,_,k,O){var M=k.type;return M===oi?p(w,_,k.props.children,O,k.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Sr&&Ig(M)===_.type)?(O=s(_,k.props),O.ref=po(w,_,k),O.return=w,O):(O=Ml(k.type,k.key,k.props,null,w.mode,O),O.ref=po(w,_,k),O.return=w,O)}function h(w,_,k,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=ud(k,w.mode,O),_.return=w,_):(_=s(_,k.children||[]),_.return=w,_)}function p(w,_,k,O,M){return _===null||_.tag!==7?(_=Rs(k,w.mode,O,M),_.return=w,_):(_=s(_,k),_.return=w,_)}function m(w,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ld(""+_,w.mode,k),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sl:return k=Ml(_.type,_.key,_.props,null,w.mode,k),k.ref=po(w,null,_),k.return=w,k;case ii:return _=ud(_,w.mode,k),_.return=w,_;case Sr:var O=_._init;return m(w,O(_._payload),k)}if(wo(_)||lo(_))return _=Rs(_,w.mode,k,null),_.return=w,_;ml(w,_)}return null}function g(w,_,k,O){var M=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return M!==null?null:l(w,_,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case sl:return k.key===M?u(w,_,k,O):null;case ii:return k.key===M?h(w,_,k,O):null;case Sr:return M=k._init,g(w,_,M(k._payload),O)}if(wo(k)||lo(k))return M!==null?null:p(w,_,k,O,null);ml(w,k)}return null}function A(w,_,k,O,M){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(k)||null,l(_,w,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case sl:return w=w.get(O.key===null?k:O.key)||null,u(_,w,O,M);case ii:return w=w.get(O.key===null?k:O.key)||null,h(_,w,O,M);case Sr:var z=O._init;return A(w,_,k,z(O._payload),M)}if(wo(O)||lo(O))return w=w.get(k)||null,p(_,w,O,M,null);ml(_,O)}return null}function b(w,_,k,O){for(var M=null,z=null,x=_,v=_=0,E=null;x!==null&&v<k.length;v++){x.index>v?(E=x,x=null):E=x.sibling;var I=g(w,x,k[v],O);if(I===null){x===null&&(x=E);break}t&&x&&I.alternate===null&&e(w,x),_=i(I,_,v),z===null?M=I:z.sibling=I,z=I,x=E}if(v===k.length)return n(w,x),je&&_s(w,v),M;if(x===null){for(;v<k.length;v++)x=m(w,k[v],O),x!==null&&(_=i(x,_,v),z===null?M=x:z.sibling=x,z=x);return je&&_s(w,v),M}for(x=r(w,x);v<k.length;v++)E=A(x,w,v,k[v],O),E!==null&&(t&&E.alternate!==null&&x.delete(E.key===null?v:E.key),_=i(E,_,v),z===null?M=E:z.sibling=E,z=E);return t&&x.forEach(function(S){return e(w,S)}),je&&_s(w,v),M}function R(w,_,k,O){var M=lo(k);if(typeof M!="function")throw Error(F(150));if(k=M.call(k),k==null)throw Error(F(151));for(var z=M=null,x=_,v=_=0,E=null,I=k.next();x!==null&&!I.done;v++,I=k.next()){x.index>v?(E=x,x=null):E=x.sibling;var S=g(w,x,I.value,O);if(S===null){x===null&&(x=E);break}t&&x&&S.alternate===null&&e(w,x),_=i(S,_,v),z===null?M=S:z.sibling=S,z=S,x=E}if(I.done)return n(w,x),je&&_s(w,v),M;if(x===null){for(;!I.done;v++,I=k.next())I=m(w,I.value,O),I!==null&&(_=i(I,_,v),z===null?M=I:z.sibling=I,z=I);return je&&_s(w,v),M}for(x=r(w,x);!I.done;v++,I=k.next())I=A(x,w,v,I.value,O),I!==null&&(t&&I.alternate!==null&&x.delete(I.key===null?v:I.key),_=i(I,_,v),z===null?M=I:z.sibling=I,z=I);return t&&x.forEach(function(C){return e(w,C)}),je&&_s(w,v),M}function N(w,_,k,O){if(typeof k=="object"&&k!==null&&k.type===oi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case sl:e:{for(var M=k.key,z=_;z!==null;){if(z.key===M){if(M=k.type,M===oi){if(z.tag===7){n(w,z.sibling),_=s(z,k.props.children),_.return=w,w=_;break e}}else if(z.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Sr&&Ig(M)===z.type){n(w,z.sibling),_=s(z,k.props),_.ref=po(w,z,k),_.return=w,w=_;break e}n(w,z);break}else e(w,z);z=z.sibling}k.type===oi?(_=Rs(k.props.children,w.mode,O,k.key),_.return=w,w=_):(O=Ml(k.type,k.key,k.props,null,w.mode,O),O.ref=po(w,_,k),O.return=w,w=O)}return o(w);case ii:e:{for(z=k.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(w,_.sibling),_=s(_,k.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=ud(k,w.mode,O),_.return=w,w=_}return o(w);case Sr:return z=k._init,N(w,_,z(k._payload),O)}if(wo(k))return b(w,_,k,O);if(lo(k))return R(w,_,k,O);ml(w,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,_!==null&&_.tag===6?(n(w,_.sibling),_=s(_,k),_.return=w,w=_):(n(w,_),_=ld(k,w.mode,O),_.return=w,w=_),o(w)):n(w,_)}return N}var Ni=Mv(!0),Uv=Mv(!1),uu=rs(null),cu=null,pi=null,_f=null;function wf(){_f=pi=cu=null}function Ef(t){var e=uu.current;Oe(uu),t._currentValue=e}function th(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){cu=t,_f=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function cn(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(cu===null)throw Error(F(308));pi=t,cu.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var Is=null;function xf(t){Is===null?Is=[t]:Is.push(t)}function Fv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,xf(e)):(n.next=s.next,s.next=n),e.interleaved=n,cr(t,r)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var br=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,cr(t,n)}return s=r.interleaved,s===null?(e.next=e,xf(r)):(e.next=s.next,s.next=e),r.interleaved=e,cr(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lf(t,n)}}function kg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,r){var s=t.updateQueue;br=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=h=u=null,l=i;do{var g=l.lane,A=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,R=l;switch(g=e,A=n,R.tag){case 1:if(b=R.payload,typeof b=="function"){m=b.call(A,m,g);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=R.payload,g=typeof b=="function"?b.call(A,m,g):b,g==null)break e;m=Ve({},m,g);break e;case 2:br=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=A,u=m):p=p.next=A,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);js|=o,t.lanes=o,t.memoizedState=m}}function Ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Ta={},jn=rs(Ta),na=rs(Ta),ra=rs(Ta);function ks(t){if(t===Ta)throw Error(F(174));return t}function If(t,e){switch(Re(ra,e),Re(na,t),Re(jn,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jd(e,t)}Oe(jn),Re(jn,e)}function Ci(){Oe(jn),Oe(na),Oe(ra)}function Bv(t){ks(ra.current);var e=ks(jn.current),n=jd(e,t.type);e!==n&&(Re(na,t),Re(jn,n))}function kf(t){na.current===t&&(Oe(jn),Oe(na))}var qe=rs(0);function hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function Af(){for(var t=0;t<nd.length;t++)nd[t]._workInProgressVersionPrimary=null;nd.length=0}var Ol=gr.ReactCurrentDispatcher,rd=gr.ReactCurrentBatchConfig,Os=0,Le=null,Je=null,nt=null,fu=!1,jo=!1,sa=0,WT=0;function yt(){throw Error(F(321))}function Sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function bf(t,e,n,r,s,i){if(Os=i,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?QT:YT,t=n(r,s),jo){i=0;do{if(jo=!1,sa=0,25<=i)throw Error(F(301));i+=1,nt=Je=null,e.updateQueue=null,Ol.current=XT,t=n(r,s)}while(jo)}if(Ol.current=pu,e=Je!==null&&Je.next!==null,Os=0,nt=Je=Le=null,fu=!1,e)throw Error(F(300));return t}function Rf(){var t=sa!==0;return sa=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Le.memoizedState=nt=t:nt=nt.next=t,nt}function dn(){if(Je===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=nt===null?Le.memoizedState:nt.next;if(e!==null)nt=e,Je=t;else{if(t===null)throw Error(F(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},nt===null?Le.memoizedState=nt=t:nt=nt.next=t}return nt}function ia(t,e){return typeof e=="function"?e(t):e}function sd(t){var e=dn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Je,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var p=h.lane;if((Os&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Le.lanes|=p,js|=p}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,kn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Le.lanes|=i,js|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function id(t){var e=dn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);kn(i,e.memoizedState)||(Ft=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function $v(){}function Wv(t,e){var n=Le,r=dn(),s=e(),i=!kn(r.memoizedState,s);if(i&&(r.memoizedState=s,Ft=!0),r=r.queue,Nf(Gv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,oa(9,Kv.bind(null,n,r,s,e),void 0,null),rt===null)throw Error(F(349));Os&30||Hv(n,e,s)}return s}function Hv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kv(t,e,n,r){e.value=n,e.getSnapshot=r,Qv(e)&&Yv(t)}function Gv(t,e,n){return n(function(){Qv(e)&&Yv(t)})}function Qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Yv(t){var e=cr(t,1);e!==null&&Tn(e,t,1,-1)}function Sg(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=GT.bind(null,Le,t),[e.memoizedState,t]}function oa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xv(){return dn().memoizedState}function jl(t,e,n,r){var s=Cn();Le.flags|=t,s.memoizedState=oa(1|e,n,void 0,r===void 0?null:r)}function Hu(t,e,n,r){var s=dn();r=r===void 0?null:r;var i=void 0;if(Je!==null){var o=Je.memoizedState;if(i=o.destroy,r!==null&&Sf(r,o.deps)){s.memoizedState=oa(e,n,i,r);return}}Le.flags|=t,s.memoizedState=oa(1|e,n,i,r)}function bg(t,e){return jl(8390656,8,t,e)}function Nf(t,e){return Hu(2048,8,t,e)}function Jv(t,e){return Hu(4,2,t,e)}function Zv(t,e){return Hu(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4,4,e_.bind(null,e,t),n)}function Cf(){}function n_(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function s_(t,e,n){return Os&21?(kn(n,e)||(n=uv(),Le.lanes|=n,js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function HT(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=rd.transition;rd.transition={};try{t(!1),e()}finally{Te=n,rd.transition=r}}function i_(){return dn().memoizedState}function KT(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))a_(e,n);else if(n=Fv(t,e,n,r),n!==null){var s=Pt();Tn(n,t,r,s),l_(n,e,r)}}function GT(t,e,n){var r=$r(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))a_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,kn(l,o)){var u=e.interleaved;u===null?(s.next=s,xf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Fv(t,e,s,r),n!==null&&(s=Pt(),Tn(n,t,r,s),l_(n,e,r))}}function o_(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function a_(t,e){jo=fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lf(t,n)}}var pu={readContext:cn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},QT={readContext:cn,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jl(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return jl(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=KT.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Sg,useDebugValue:Cf,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Sg(!1),e=t[0];return t=HT.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,s=Cn();if(je){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),rt===null)throw Error(F(349));Os&30||Hv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,bg(Gv.bind(null,r,i,t),[t]),r.flags|=2048,oa(9,Kv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Cn(),e=rt.identifierPrefix;if(je){var n=er,r=Zn;n=(r&~(1<<32-xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YT={readContext:cn,useCallback:n_,useContext:cn,useEffect:Nf,useImperativeHandle:t_,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:r_,useReducer:sd,useRef:Xv,useState:function(){return sd(ia)},useDebugValue:Cf,useDeferredValue:function(t){var e=dn();return s_(e,Je.memoizedState,t)},useTransition:function(){var t=sd(ia)[0],e=dn().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Wv,useId:i_,unstable_isNewReconciler:!1},XT={readContext:cn,useCallback:n_,useContext:cn,useEffect:Nf,useImperativeHandle:t_,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:r_,useReducer:id,useRef:Xv,useState:function(){return id(ia)},useDebugValue:Cf,useDeferredValue:function(t){var e=dn();return Je===null?e.memoizedState=t:s_(e,Je.memoizedState,t)},useTransition:function(){var t=id(ia)[0],e=dn().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Wv,useId:i_,unstable_isNewReconciler:!1};function vn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ku={isMounted:function(t){return(t=t._reactInternals)?Hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),s=$r(t),i=sr(r,s);i.payload=e,n!=null&&(i.callback=n),e=zr(t,i,s),e!==null&&(Tn(e,t,s,r),Dl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),s=$r(t),i=sr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=zr(t,i,s),e!==null&&(Tn(e,t,s,r),Dl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=$r(t),s=sr(n,r);s.tag=2,e!=null&&(s.callback=e),e=zr(t,s,r),e!==null&&(Tn(e,t,r,n),Dl(e,t,r))}};function Rg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,r)||!Jo(s,i):!0}function u_(t,e,n){var r=!1,s=Yr,i=e.contextType;return typeof i=="object"&&i!==null?i=cn(i):(s=Bt(e)?Ps:It.current,r=e.contextTypes,i=(r=r!=null)?bi(t,s):Yr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Ng(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ku.enqueueReplaceState(e,e.state,null)}function rh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Tf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=cn(i):(i=Bt(e)?Ps:It.current,s.context=bi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(nh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ku.enqueueReplaceState(s,s.state,null),du(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Pi(t,e){try{var n="",r=e;do n+=k1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JT=typeof WeakMap=="function"?WeakMap:Map;function c_(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gu||(gu=!0,ph=r),sh(t,e)},n}function d_(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){sh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){sh(t,e),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=hI.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var ZT=gr.ReactCurrentOwner,Ft=!1;function Ct(t,e,n,r){e.child=t===null?Uv(e,null,n,r):Ni(e,t.child,n,r)}function Og(t,e,n,r,s){n=n.render;var i=e.ref;return Ei(e,s),r=bf(t,e,n,r,i,s),n=Rf(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,dr(t,e,s)):(je&&n&&gf(e),e.flags|=1,Ct(t,e,r,s),e.child)}function jg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Mf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,h_(t,e,i,r,s)):(t=Ml(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,r)&&t.ref===e.ref)return dr(t,e,s)}return e.flags|=1,t=Wr(i,r),t.ref=e.ref,t.return=e,e.child=t}function h_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Jo(i,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,dr(t,e,s)}return ih(t,e,n,r,s)}function f_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(gi,Ht),Ht|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(gi,Ht),Ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Re(gi,Ht),Ht|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Re(gi,Ht),Ht|=r;return Ct(t,e,s,n),e.child}function p_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ih(t,e,n,r,s){var i=Bt(n)?Ps:It.current;return i=bi(e,i),Ei(e,s),n=bf(t,e,n,r,i,s),r=Rf(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,dr(t,e,s)):(je&&r&&gf(e),e.flags|=1,Ct(t,e,n,s),e.child)}function qg(t,e,n,r,s){if(Bt(n)){var i=!0;ou(e)}else i=!1;if(Ei(e,s),e.stateNode===null)ql(t,e),u_(e,n,r),rh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=cn(h):(h=Bt(n)?Ps:It.current,h=bi(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Ng(e,o,r,h),br=!1;var g=e.memoizedState;o.state=g,du(e,r,o,s),u=e.memoizedState,l!==r||g!==u||zt.current||br?(typeof p=="function"&&(nh(e,n,p,r),u=e.memoizedState),(l=br||Rg(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:vn(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=cn(u):(u=Bt(n)?Ps:It.current,u=bi(e,u));var A=n.getDerivedStateFromProps;(p=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Ng(e,o,r,u),br=!1,g=e.memoizedState,o.state=g,du(e,r,o,s);var b=e.memoizedState;l!==m||g!==b||zt.current||br?(typeof A=="function"&&(nh(e,n,A,r),b=e.memoizedState),(h=br||Rg(e,n,h,r,g,b,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return oh(t,e,n,r,i,s)}function oh(t,e,n,r,s,i){p_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Eg(e,n,!1),dr(t,e,i);r=e.stateNode,ZT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,i),e.child=Ni(e,null,l,i)):Ct(t,e,l,i),e.memoizedState=r.state,s&&Eg(e,n,!0),e.child}function m_(t){var e=t.stateNode;e.pendingContext?wg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wg(t,e.context,!1),If(t,e.containerInfo)}function Lg(t,e,n,r,s){return Ri(),vf(s),e.flags|=256,Ct(t,e,n,r),e.child}var ah={dehydrated:null,treeContext:null,retryLane:0};function lh(t){return{baseLanes:t,cachePool:null,transitions:null}}function g_(t,e,n){var r=e.pendingProps,s=qe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Re(qe,s&1),t===null)return eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Yu(o,r,0,null),t=Rs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=lh(n),e.memoizedState=ah,t):Pf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return eI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Wr(l,i):(i=Rs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?lh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=ah,r}return i=t.child,t=i.sibling,r=Wr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pf(t,e){return e=Yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,r){return r!==null&&vf(r),Ni(e,t.child,null,n),t=Pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=od(Error(F(422))),gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Yu({mode:"visible",children:r.children},s,0,null),i=Rs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=lh(o),e.memoizedState=ah,i);if(!(e.mode&1))return gl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=od(i,r,void 0),gl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ft||l){if(r=rt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,cr(t,s),Tn(r,t,s,-1))}return Vf(),r=od(Error(F(421))),gl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=fI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Kt=Fr(s.nextSibling),Xt=e,je=!0,wn=null,t!==null&&(sn[on++]=Zn,sn[on++]=er,sn[on++]=Ds,Zn=t.id,er=t.overflow,Ds=e),e=Pf(e,r.children),e.flags|=4096,e)}function Vg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),th(t.return,e,n)}function ad(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function y_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ct(t,e,r.children,n),r=qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vg(t,n,e);else if(t.tag===19)Vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(qe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&hu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),ad(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&hu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}ad(e,!0,n,null,i);break;case"together":ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tI(t,e,n){switch(e.tag){case 3:m_(e),Ri();break;case 5:Bv(e);break;case 1:Bt(e.type)&&ou(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Re(uu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(qe,qe.current&1),e.flags|=128,null):n&e.child.childLanes?g_(t,e,n):(Re(qe,qe.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Re(qe,qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return y_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Re(qe,qe.current),r)break;return null;case 22:case 23:return e.lanes=0,f_(t,e,n)}return dr(t,e,n)}var v_,uh,__,w_;v_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uh=function(){};__=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ks(jn.current);var i=null;switch(n){case"input":s=Cd(t,s),r=Cd(t,r),i=[];break;case"select":s=Ve({},s,{value:void 0}),r=Ve({},r,{value:void 0}),i=[];break;case"textarea":s=Od(t,s),r=Od(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=su)}qd(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Wo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Pe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};w_=function(t,e,n,r){n!==r&&(e.flags|=4)};function mo(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nI(t,e,n){var r=e.pendingProps;switch(yf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return Bt(e.type)&&iu(),vt(e),null;case 3:return r=e.stateNode,Ci(),Oe(zt),Oe(It),Af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wn!==null&&(yh(wn),wn=null))),uh(t,e),vt(e),null;case 5:kf(e);var s=ks(ra.current);if(n=e.type,t!==null&&e.stateNode!=null)__(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return vt(e),null}if(t=ks(jn.current),pl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Pn]=e,r[ta]=i,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(s=0;s<xo.length;s++)Pe(xo[s],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Km(r,i),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Pe("invalid",r);break;case"textarea":Qm(r,i),Pe("invalid",r)}qd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),s=["children",""+l]):Wo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":il(r),Gm(r,i,!0);break;case"textarea":il(r),Ym(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=su)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[ta]=r,v_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ld(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),s=r;break;case"iframe":case"object":case"embed":Pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<xo.length;s++)Pe(xo[s],t);s=r;break;case"source":Pe("error",t),s=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),s=r;break;case"details":Pe("toggle",t),s=r;break;case"input":Km(t,r),s=Cd(t,r),Pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ve({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":Qm(t,r),s=Od(t,r),Pe("invalid",t);break;default:s=r}qd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?X0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Q0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ho(t,u):typeof u=="number"&&Ho(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Pe("scroll",t):u!=null&&tf(t,i,u,o))}switch(n){case"input":il(t),Gm(t,r,!1);break;case"textarea":il(t),Ym(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?yi(t,!!r.multiple,i,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)w_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ks(ra.current),ks(jn.current),pl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(i=r.nodeValue!==n)&&(t=Xt,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return vt(e),null;case 13:if(Oe(qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&Kt!==null&&e.mode&1&&!(e.flags&128))Vv(),Ri(),e.flags|=98560,i=!1;else if(i=pl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Pn]=e}else Ri(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),i=!1}else wn!==null&&(yh(wn),wn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||qe.current&1?Ze===0&&(Ze=3):Vf())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return Ci(),uh(t,e),t===null&&Zo(e.stateNode.containerInfo),vt(e),null;case 10:return Ef(e.type._context),vt(e),null;case 17:return Bt(e.type)&&iu(),vt(e),null;case 19:if(Oe(qe),i=e.memoizedState,i===null)return vt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)mo(i,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hu(t),o!==null){for(e.flags|=128,mo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(qe,qe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ke()>Di&&(e.flags|=128,r=!0,mo(i,!1),e.lanes=4194304)}else{if(!r)if(t=hu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!je)return vt(e),null}else 2*Ke()-i.renderingStartTime>Di&&n!==1073741824&&(e.flags|=128,r=!0,mo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ke(),e.sibling=null,n=qe.current,Re(qe,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return Lf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ht&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function rI(t,e){switch(yf(e),e.tag){case 1:return Bt(e.type)&&iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ci(),Oe(zt),Oe(It),Af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(Oe(qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ri()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe(qe),null;case 4:return Ci(),null;case 10:return Ef(e.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var yl=!1,Et=!1,sI=typeof WeakSet=="function"?WeakSet:Set,Q=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function ch(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var Mg=!1;function iI(t,e){if(Kd=tu,t=kv(),mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,g=null;t:for(;;){for(var A;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++p===r&&(u=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gd={focusedElem:t,selectionRange:n},tu=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var R=b.memoizedProps,N=b.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?R:vn(e.type,R),N);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Fe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return b=Mg,Mg=!1,b}function qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ch(e,n,i)}s=s.next}while(s!==r)}}function Gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E_(t){var e=t.alternate;e!==null&&(t.alternate=null,E_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[ta],delete e[Xd],delete e[FT],delete e[zT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function x_(t){return t.tag===5||t.tag===3||t.tag===4}function Ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(r!==4&&(t=t.child,t!==null))for(hh(t,e,n),t=t.sibling;t!==null;)hh(t,e,n),t=t.sibling}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var ot=null,_n=!1;function kr(t,e,n){for(n=n.child;n!==null;)T_(t,e,n),n=n.sibling}function T_(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Uu,n)}catch{}switch(n.tag){case 5:Et||mi(n,e);case 6:var r=ot,s=_n;ot=null,kr(t,e,n),ot=r,_n=s,ot!==null&&(_n?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(_n?(t=ot,n=n.stateNode,t.nodeType===8?ed(t.parentNode,n):t.nodeType===1&&ed(t,n),Yo(t)):ed(ot,n.stateNode));break;case 4:r=ot,s=_n,ot=n.stateNode.containerInfo,_n=!0,kr(t,e,n),ot=r,_n=s;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ch(n,e,o),s=s.next}while(s!==r)}kr(t,e,n);break;case 1:if(!Et&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,e,l)}kr(t,e,n);break;case 21:kr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,kr(t,e,n),Et=r):kr(t,e,n);break;default:kr(t,e,n)}}function Fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sI),e.forEach(function(r){var s=pI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function yn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,_n=!1;break e;case 3:ot=l.stateNode.containerInfo,_n=!0;break e;case 4:ot=l.stateNode.containerInfo,_n=!0;break e}l=l.return}if(ot===null)throw Error(F(160));T_(i,o,s),ot=null,_n=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Fe(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)I_(e,t),e=e.sibling}function I_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yn(e,t),Nn(t),r&4){try{qo(3,t,t.return),Gu(3,t)}catch(R){Fe(t,t.return,R)}try{qo(5,t,t.return)}catch(R){Fe(t,t.return,R)}}break;case 1:yn(e,t),Nn(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(yn(e,t),Nn(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var s=t.stateNode;try{Ho(s,"")}catch(R){Fe(t,t.return,R)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&H0(s,i),Ld(l,o);var h=Ld(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?X0(s,m):p==="dangerouslySetInnerHTML"?Q0(s,m):p==="children"?Ho(s,m):tf(s,p,m,h)}switch(l){case"input":Pd(s,i);break;case"textarea":K0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?yi(s,!!i.multiple,A,!1):g!==!!i.multiple&&(i.defaultValue!=null?yi(s,!!i.multiple,i.defaultValue,!0):yi(s,!!i.multiple,i.multiple?[]:"",!1))}s[ta]=i}catch(R){Fe(t,t.return,R)}}break;case 6:if(yn(e,t),Nn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(R){Fe(t,t.return,R)}}break;case 3:if(yn(e,t),Nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(R){Fe(t,t.return,R)}break;case 4:yn(e,t),Nn(t);break;case 13:yn(e,t),Nn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(jf=Ke())),r&4&&Fg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(h=Et)||p,yn(e,t),Et=h):yn(e,t),Nn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(Q=t,p=t.child;p!==null;){for(m=Q=p;Q!==null;){switch(g=Q,A=g.child,g.tag){case 0:case 11:case 14:case 15:qo(4,g,g.return);break;case 1:mi(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(R){Fe(r,n,R)}}break;case 5:mi(g,g.return);break;case 22:if(g.memoizedState!==null){Bg(m);continue}}A!==null?(A.return=g,Q=A):Bg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Y0("display",o))}catch(R){Fe(t,t.return,R)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(R){Fe(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:yn(e,t),Nn(t),r&4&&Fg(t);break;case 21:break;default:yn(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(x_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ho(s,""),r.flags&=-33);var i=Ug(t);fh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ug(t);hh(t,l,o);break;default:throw Error(F(161))}}catch(u){Fe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oI(t,e,n){Q=t,k_(t)}function k_(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||yl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Et;l=yl;var h=Et;if(yl=o,(Et=u)&&!h)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?$g(s):u!==null?(u.return=o,Q=u):$g(s);for(;i!==null;)Q=i,k_(i),i=i.sibling;Q=s,yl=l,Et=h}zg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):zg(t)}}function zg(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||Gu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:vn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ag(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ag(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Yo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Et||e.flags&512&&dh(e)}catch(g){Fe(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Bg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function $g(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gu(4,e)}catch(u){Fe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Fe(e,s,u)}}var i=e.return;try{dh(e)}catch(u){Fe(e,i,u)}break;case 5:var o=e.return;try{dh(e)}catch(u){Fe(e,o,u)}}}catch(u){Fe(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var aI=Math.ceil,mu=gr.ReactCurrentDispatcher,Df=gr.ReactCurrentOwner,ln=gr.ReactCurrentBatchConfig,ve=0,rt=null,Qe=null,ut=0,Ht=0,gi=rs(0),Ze=0,aa=null,js=0,Qu=0,Of=0,Lo=null,Mt=null,jf=0,Di=1/0,Yn=null,gu=!1,ph=null,Br=null,vl=!1,qr=null,yu=0,Vo=0,mh=null,Ll=-1,Vl=0;function Pt(){return ve&6?Ke():Ll!==-1?Ll:Ll=Ke()}function $r(t){return t.mode&1?ve&2&&ut!==0?ut&-ut:$T.transition!==null?(Vl===0&&(Vl=uv()),Vl):(t=Te,t!==0||(t=window.event,t=t===void 0?16:gv(t.type)),t):1}function Tn(t,e,n,r){if(50<Vo)throw Vo=0,mh=null,Error(F(185));wa(t,n,r),(!(ve&2)||t!==rt)&&(t===rt&&(!(ve&2)&&(Qu|=n),Ze===4&&Nr(t,ut)),$t(t,r),n===1&&ve===0&&!(e.mode&1)&&(Di=Ke()+500,Wu&&ss()))}function $t(t,e){var n=t.callbackNode;$1(t,e);var r=eu(t,t===rt?ut:0);if(r===0)n!==null&&Zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zm(n),e===1)t.tag===0?BT(Wg.bind(null,t)):jv(Wg.bind(null,t)),MT(function(){!(ve&6)&&ss()}),n=null;else{switch(cv(r)){case 1:n=af;break;case 4:n=av;break;case 16:n=Zl;break;case 536870912:n=lv;break;default:n=Zl}n=D_(n,A_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function A_(t,e){if(Ll=-1,Vl=0,ve&6)throw Error(F(327));var n=t.callbackNode;if(xi()&&t.callbackNode!==n)return null;var r=eu(t,t===rt?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vu(t,r);else{e=r;var s=ve;ve|=2;var i=b_();(rt!==t||ut!==e)&&(Yn=null,Di=Ke()+500,bs(t,e));do try{cI();break}catch(l){S_(t,l)}while(!0);wf(),mu.current=i,ve=s,Qe!==null?e=0:(rt=null,ut=0,e=Ze)}if(e!==0){if(e===2&&(s=zd(t),s!==0&&(r=s,e=gh(t,s))),e===1)throw n=aa,bs(t,0),Nr(t,r),$t(t,Ke()),n;if(e===6)Nr(t,r);else{if(s=t.current.alternate,!(r&30)&&!lI(s)&&(e=vu(t,r),e===2&&(i=zd(t),i!==0&&(r=i,e=gh(t,i))),e===1))throw n=aa,bs(t,0),Nr(t,r),$t(t,Ke()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:ws(t,Mt,Yn);break;case 3:if(Nr(t,r),(r&130023424)===r&&(e=jf+500-Ke(),10<e)){if(eu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Yd(ws.bind(null,t,Mt,Yn),e);break}ws(t,Mt,Yn);break;case 4:if(Nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-xn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aI(r/1960))-r,10<r){t.timeoutHandle=Yd(ws.bind(null,t,Mt,Yn),r);break}ws(t,Mt,Yn);break;case 5:ws(t,Mt,Yn);break;default:throw Error(F(329))}}}return $t(t,Ke()),t.callbackNode===n?A_.bind(null,t):null}function gh(t,e){var n=Lo;return t.current.memoizedState.isDehydrated&&(bs(t,e).flags|=256),t=vu(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&yh(e)),t}function yh(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function lI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!kn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~Of,e&=~Qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xn(e),r=1<<n;t[n]=-1,e&=~r}}function Wg(t){if(ve&6)throw Error(F(327));xi();var e=eu(t,0);if(!(e&1))return $t(t,Ke()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var r=zd(t);r!==0&&(e=r,n=gh(t,r))}if(n===1)throw n=aa,bs(t,0),Nr(t,e),$t(t,Ke()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ws(t,Mt,Yn),$t(t,Ke()),null}function qf(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(Di=Ke()+500,Wu&&ss())}}function qs(t){qr!==null&&qr.tag===0&&!(ve&6)&&xi();var e=ve;ve|=1;var n=ln.transition,r=Te;try{if(ln.transition=null,Te=1,t)return t()}finally{Te=r,ln.transition=n,ve=e,!(ve&6)&&ss()}}function Lf(){Ht=gi.current,Oe(gi)}function bs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VT(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(yf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&iu();break;case 3:Ci(),Oe(zt),Oe(It),Af();break;case 5:kf(r);break;case 4:Ci();break;case 13:Oe(qe);break;case 19:Oe(qe);break;case 10:Ef(r.type._context);break;case 22:case 23:Lf()}n=n.return}if(rt=t,Qe=t=Wr(t.current,null),ut=Ht=e,Ze=0,aa=null,Of=Qu=js=0,Mt=Lo=null,Is!==null){for(e=0;e<Is.length;e++)if(n=Is[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Is=null}return t}function S_(t,e){do{var n=Qe;try{if(wf(),Ol.current=pu,fu){for(var r=Le.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}fu=!1}if(Os=0,nt=Je=Le=null,jo=!1,sa=0,Df.current=null,n===null||n.return===null){Ze=1,aa=e,Qe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ut,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var A=Pg(o);if(A!==null){A.flags&=-257,Dg(A,o,l,i,e),A.mode&1&&Cg(i,h,e),e=A,u=h;var b=e.updateQueue;if(b===null){var R=new Set;R.add(u),e.updateQueue=R}else b.add(u);break e}else{if(!(e&1)){Cg(i,h,e),Vf();break e}u=Error(F(426))}}else if(je&&l.mode&1){var N=Pg(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Dg(N,o,l,i,e),vf(Pi(u,l));break e}}i=u=Pi(u,l),Ze!==4&&(Ze=2),Lo===null?Lo=[i]:Lo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=c_(i,u,e);kg(i,w);break e;case 1:l=u;var _=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Br===null||!Br.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var O=d_(i,l,e);kg(i,O);break e}}i=i.return}while(i!==null)}N_(n)}catch(M){e=M,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function b_(){var t=mu.current;return mu.current=pu,t===null?pu:t}function Vf(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),rt===null||!(js&268435455)&&!(Qu&268435455)||Nr(rt,ut)}function vu(t,e){var n=ve;ve|=2;var r=b_();(rt!==t||ut!==e)&&(Yn=null,bs(t,e));do try{uI();break}catch(s){S_(t,s)}while(!0);if(wf(),ve=n,mu.current=r,Qe!==null)throw Error(F(261));return rt=null,ut=0,Ze}function uI(){for(;Qe!==null;)R_(Qe)}function cI(){for(;Qe!==null&&!j1();)R_(Qe)}function R_(t){var e=P_(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,e===null?N_(t):Qe=e,Df.current=null}function N_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rI(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Qe=null;return}}else if(n=nI(n,e,Ht),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);Ze===0&&(Ze=5)}function ws(t,e,n){var r=Te,s=ln.transition;try{ln.transition=null,Te=1,dI(t,e,n,r)}finally{ln.transition=s,Te=r}return null}function dI(t,e,n,r){do xi();while(qr!==null);if(ve&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(W1(t,i),t===rt&&(Qe=rt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,D_(Zl,function(){return xi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ln.transition,ln.transition=null;var o=Te;Te=1;var l=ve;ve|=4,Df.current=null,iI(t,n),I_(n,t),CT(Gd),tu=!!Kd,Gd=Kd=null,t.current=n,oI(n),q1(),ve=l,Te=o,ln.transition=i}else t.current=n;if(vl&&(vl=!1,qr=t,yu=s),i=t.pendingLanes,i===0&&(Br=null),M1(n.stateNode),$t(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(gu)throw gu=!1,t=ph,ph=null,t;return yu&1&&t.tag!==0&&xi(),i=t.pendingLanes,i&1?t===mh?Vo++:(Vo=0,mh=t):Vo=0,ss(),null}function xi(){if(qr!==null){var t=cv(yu),e=ln.transition,n=Te;try{if(ln.transition=null,Te=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,yu=0,ve&6)throw Error(F(331));var s=ve;for(ve|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(Q=h;Q!==null;){var p=Q;switch(p.tag){case 0:case 11:case 15:qo(8,p,i)}var m=p.child;if(m!==null)m.return=p,Q=m;else for(;Q!==null;){p=Q;var g=p.sibling,A=p.return;if(E_(p),p===h){Q=null;break}if(g!==null){g.return=A,Q=g;break}Q=A}}}var b=i.alternate;if(b!==null){var R=b.child;if(R!==null){b.child=null;do{var N=R.sibling;R.sibling=null,R=N}while(R!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qo(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,Q=w;break e}Q=i.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,Q=k;else e:for(o=_;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gu(9,l)}}catch(M){Fe(l,l.return,M)}if(l===o){Q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Q=O;break e}Q=l.return}}if(ve=s,ss(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Uu,t)}catch{}r=!0}return r}finally{Te=n,ln.transition=e}}return!1}function Hg(t,e,n){e=Pi(n,e),e=c_(t,e,1),t=zr(t,e,1),e=Pt(),t!==null&&(wa(t,1,e),$t(t,e))}function Fe(t,e,n){if(t.tag===3)Hg(t,t,n);else for(;e!==null;){if(e.tag===3){Hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){t=Pi(n,t),t=d_(e,t,1),e=zr(e,t,1),t=Pt(),e!==null&&(wa(e,1,t),$t(e,t));break}}e=e.return}}function hI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(ut&n)===n&&(Ze===4||Ze===3&&(ut&130023424)===ut&&500>Ke()-jf?bs(t,0):Of|=n),$t(t,e)}function C_(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=Pt();t=cr(t,e),t!==null&&(wa(t,e,n),$t(t,n))}function fI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C_(t,n)}function pI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),C_(t,n)}var P_;P_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,tI(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,je&&e.flags&1048576&&qv(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ql(t,e),t=e.pendingProps;var s=bi(e,It.current);Ei(e,n),s=bf(null,e,r,t,s,n);var i=Rf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(i=!0,ou(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Tf(e),s.updater=Ku,e.stateNode=s,s._reactInternals=e,rh(e,r,t,n),e=oh(null,e,r,!0,i,n)):(e.tag=0,je&&i&&gf(e),Ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=gI(r),t=vn(r,t),s){case 0:e=ih(null,e,r,t,n);break e;case 1:e=qg(null,e,r,t,n);break e;case 11:e=Og(null,e,r,t,n);break e;case 14:e=jg(null,e,r,vn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vn(r,s),ih(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vn(r,s),qg(t,e,r,s,n);case 3:e:{if(m_(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,zv(t,e),du(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Pi(Error(F(423)),e),e=Lg(t,e,r,n,s);break e}else if(r!==s){s=Pi(Error(F(424)),e),e=Lg(t,e,r,n,s);break e}else for(Kt=Fr(e.stateNode.containerInfo.firstChild),Xt=e,je=!0,wn=null,n=Uv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ri(),r===s){e=dr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return Bv(e),t===null&&eh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Qd(r,s)?o=null:i!==null&&Qd(r,i)&&(e.flags|=32),p_(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&eh(e),null;case 13:return g_(t,e,n);case 4:return If(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vn(r,s),Og(t,e,r,s,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Re(uu,r._currentValue),r._currentValue=o,i!==null)if(kn(i.value,o)){if(i.children===s.children&&!zt.current){e=dr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=sr(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),th(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),th(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ei(e,n),s=cn(s),r=r(s),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,s=vn(r,e.pendingProps),s=vn(r.type,s),jg(t,e,r,s,n);case 15:return h_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vn(r,s),ql(t,e),e.tag=1,Bt(r)?(t=!0,ou(e)):t=!1,Ei(e,n),u_(e,r,s),rh(e,r,s,n),oh(null,e,r,!0,t,n);case 19:return y_(t,e,n);case 22:return f_(t,e,n)}throw Error(F(156,e.tag))};function D_(t,e){return ov(t,e)}function mI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new mI(t,e,n,r)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gI(t){if(typeof t=="function")return Mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rf)return 11;if(t===sf)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Rs(n.children,s,i,e);case nf:o=8,s|=8;break;case Sd:return t=an(12,n,e,s|2),t.elementType=Sd,t.lanes=i,t;case bd:return t=an(13,n,e,s),t.elementType=bd,t.lanes=i,t;case Rd:return t=an(19,n,e,s),t.elementType=Rd,t.lanes=i,t;case B0:return Yu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F0:o=10;break e;case z0:o=9;break e;case rf:o=11;break e;case sf:o=14;break e;case Sr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=an(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Rs(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function Yu(t,e,n,r){return t=an(22,t,r,e),t.elementType=B0,t.lanes=n,t.stateNode={isHidden:!1},t}function ld(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function ud(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yI(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Uf(t,e,n,r,s,i,o,l,u){return t=new yI(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=an(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(i),t}function vI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O_(t){if(!t)return Yr;t=t._reactInternals;e:{if(Hs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Bt(n))return Ov(t,n,e)}return e}function j_(t,e,n,r,s,i,o,l,u){return t=Uf(n,r,!0,t,s,i,o,l,u),t.context=O_(null),n=t.current,r=Pt(),s=$r(n),i=sr(r,s),i.callback=e??null,zr(n,i,s),t.current.lanes=s,wa(t,s,r),$t(t,r),t}function Xu(t,e,n,r){var s=e.current,i=Pt(),o=$r(s);return n=O_(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zr(s,e,o),t!==null&&(Tn(t,s,o,i),Dl(t,s,o)),o}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ff(t,e){Kg(t,e),(t=t.alternate)&&Kg(t,e)}function _I(){return null}var q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function zf(t){this._internalRoot=t}Ju.prototype.render=zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Xu(t,e,null,null)};Ju.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qs(function(){Xu(null,t,null,null)}),e[ur]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&mv(t)}};function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gg(){}function wI(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=_u(o);i.call(h)}}var o=j_(e,r,t,0,null,!1,!1,"",Gg);return t._reactRootContainer=o,t[ur]=o.current,Zo(t.nodeType===8?t.parentNode:t),qs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=_u(u);l.call(h)}}var u=Uf(t,0,!1,null,null,!1,!1,"",Gg);return t._reactRootContainer=u,t[ur]=u.current,Zo(t.nodeType===8?t.parentNode:t),qs(function(){Xu(e,u,n,r)}),u}function ec(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=_u(o);l.call(u)}}Xu(e,o,t,s)}else o=wI(n,e,t,s,r);return _u(o)}dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(lf(e,n|1),$t(e,Ke()),!(ve&6)&&(Di=Ke()+500,ss()))}break;case 13:qs(function(){var r=cr(t,1);if(r!==null){var s=Pt();Tn(r,t,1,s)}}),Ff(t,1)}};uf=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=Pt();Tn(e,t,134217728,n)}Ff(t,134217728)}};hv=function(t){if(t.tag===13){var e=$r(t),n=cr(t,e);if(n!==null){var r=Pt();Tn(n,t,e,r)}Ff(t,e)}};fv=function(){return Te};pv=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};Md=function(t,e,n){switch(e){case"input":if(Pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=$u(r);if(!s)throw Error(F(90));W0(r),Pd(r,s)}}}break;case"textarea":K0(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};ev=qf;tv=qs;var EI={usingClientEntryPoint:!1,Events:[xa,ci,$u,J0,Z0,qf]},go={findFiberByHostInstance:Ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xI={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sv(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||_I,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Uu=_l.inject(xI),On=_l}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EI;en.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(e))throw Error(F(200));return vI(t,e,null,n)};en.createRoot=function(t,e){if(!Bf(t))throw Error(F(299));var n=!1,r="",s=q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Uf(t,1,!1,null,null,n,!1,r,s),t[ur]=e.current,Zo(t.nodeType===8?t.parentNode:t),new zf(e)};en.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=sv(e),t=t===null?null:t.stateNode,t};en.flushSync=function(t){return qs(t)};en.hydrate=function(t,e,n){if(!Zu(e))throw Error(F(200));return ec(null,t,e,!0,n)};en.hydrateRoot=function(t,e,n){if(!Bf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=q_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=j_(e,null,t,1,n??null,s,!1,i,o),t[ur]=e.current,Zo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ju(e)};en.render=function(t,e,n){if(!Zu(e))throw Error(F(200));return ec(null,t,e,!1,n)};en.unmountComponentAtNode=function(t){if(!Zu(t))throw Error(F(40));return t._reactRootContainer?(qs(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};en.unstable_batchedUpdates=qf;en.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return ec(t,e,n,!1,r)};en.version="18.3.1-next-f1338f8080-20240426";function L_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L_)}catch(t){console.error(t)}}L_(),L0.exports=en;var TI=L0.exports,Qg=TI;kd.createRoot=Qg.createRoot,kd.hydrateRoot=Qg.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var II={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),te=(t,e)=>{const n=L.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...h},p)=>L.createElement("svg",{ref:p,...II,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${kI(t)}`,l].join(" "),...h},[...e.map(([m,g])=>L.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=te("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=te("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=te("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=te("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=te("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=te("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=te("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=te("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=te("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=te("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=te("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=te("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=te("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=te("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=te("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=te("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=te("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=te("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=te("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=te("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=te("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=te("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=te("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=te("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=te("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=te("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=te("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=te("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=te("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=te("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=te("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=te("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=te("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=te("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=te("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=te("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=te("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=te("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=te("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=te("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=te("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=te("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=te("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=te("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=te("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=te("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=te("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=te("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=te("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var xs=(t=>(t.LIGHT="light",t.DARK="dark",t))(xs||{}),ry={};/**
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
 */const H_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},XI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},K_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[p],n[m],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new JI;const g=i<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const b=h<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZI=function(t){const e=H_(t);return K_.encodeByteArray(e,!0)},Eu=function(t){return ZI(t).replace(/\./g,"")},G_=function(t){try{return K_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ek(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tk=()=>ek().__FIREBASE_DEFAULTS__,nk=()=>{if(typeof process>"u"||typeof ry>"u")return;const t=ry.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&G_(t[1]);return e&&JSON.parse(e)},nc=()=>{try{return tk()||nk()||rk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q_=t=>{var e,n;return(n=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Y_=t=>{const e=Q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},X_=()=>{var t;return(t=nc())===null||t===void 0?void 0:t.config},J_=t=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Z_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eu(JSON.stringify(n)),Eu(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ik(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function ok(){var t;const e=(t=nc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ak(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ck(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dk(){return!ok()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hk(){try{return typeof indexedDB=="object"}catch{return!1}}function fk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const pk="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pk,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,l,r)}}function mk(t,e){return t.replace(gk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gk=/\{\$([^}]+)}/g;function yk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sy(i)&&sy(o)){if(!xu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sy(t){return t!==null&&typeof t=="object"}/**
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
 */function Aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function To(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vk(t,e){const n=new _k(t,e);return n.subscribe.bind(n)}class _k{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cd),s.error===void 0&&(s.error=cd),s.complete===void 0&&(s.complete=cd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cd(){}/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class Xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class Ek{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tk(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xk(t){return t===Es?void 0:t}function Tk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ik{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ek(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const kk={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Ak=fe.INFO,Sk={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},bk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kf{constructor(e){this.name=e,this._logLevel=Ak,this._logHandler=bk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Rk=(t,e)=>e.some(n=>t instanceof n);let iy,oy;function Nk(){return iy||(iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ck(){return oy||(oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ew=new WeakMap,Ih=new WeakMap,tw=new WeakMap,dd=new WeakMap,Gf=new WeakMap;function Pk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ew.set(n,t)}).catch(()=>{}),Gf.set(e,t),e}function Dk(t){if(Ih.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ih.set(t,e)}let kh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ok(t){kh=t(kh)}function jk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hd(this),e,...n);return tw.set(r,e.sort?e.sort():[e]),Hr(r)}:Ck().includes(t)?function(...e){return t.apply(hd(this),e),Hr(ew.get(this))}:function(...e){return Hr(t.apply(hd(this),e))}}function qk(t){return typeof t=="function"?jk(t):(t instanceof IDBTransaction&&Dk(t),Rk(t,Nk())?new Proxy(t,kh):t)}function Hr(t){if(t instanceof IDBRequest)return Pk(t);if(dd.has(t))return dd.get(t);const e=qk(t);return e!==t&&(dd.set(t,e),Gf.set(e,t)),e}const hd=t=>Gf.get(t);function Lk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Vk=["get","getKey","getAll","getAllKeys","count"],Mk=["put","add","delete","clear"],fd=new Map;function ay(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fd.get(e))return fd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Mk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vk.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return fd.set(e,i),i}Ok(t=>({...t,get:(e,n,r)=>ay(e,n)||t.get(e,n,r),has:(e,n)=>!!ay(e,n)||t.has(e,n)}));/**
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
 */class Uk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ah="@firebase/app",ly="0.10.13";/**
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
 */const hr=new Kf("@firebase/app"),zk="@firebase/app-compat",Bk="@firebase/analytics-compat",$k="@firebase/analytics",Wk="@firebase/app-check-compat",Hk="@firebase/app-check",Kk="@firebase/auth",Gk="@firebase/auth-compat",Qk="@firebase/database",Yk="@firebase/data-connect",Xk="@firebase/database-compat",Jk="@firebase/functions",Zk="@firebase/functions-compat",eA="@firebase/installations",tA="@firebase/installations-compat",nA="@firebase/messaging",rA="@firebase/messaging-compat",sA="@firebase/performance",iA="@firebase/performance-compat",oA="@firebase/remote-config",aA="@firebase/remote-config-compat",lA="@firebase/storage",uA="@firebase/storage-compat",cA="@firebase/firestore",dA="@firebase/vertexai-preview",hA="@firebase/firestore-compat",fA="firebase",pA="10.14.1";/**
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
 */const Sh="[DEFAULT]",mA={[Ah]:"fire-core",[zk]:"fire-core-compat",[$k]:"fire-analytics",[Bk]:"fire-analytics-compat",[Hk]:"fire-app-check",[Wk]:"fire-app-check-compat",[Kk]:"fire-auth",[Gk]:"fire-auth-compat",[Qk]:"fire-rtdb",[Yk]:"fire-data-connect",[Xk]:"fire-rtdb-compat",[Jk]:"fire-fn",[Zk]:"fire-fn-compat",[eA]:"fire-iid",[tA]:"fire-iid-compat",[nA]:"fire-fcm",[rA]:"fire-fcm-compat",[sA]:"fire-perf",[iA]:"fire-perf-compat",[oA]:"fire-rc",[aA]:"fire-rc-compat",[lA]:"fire-gcs",[uA]:"fire-gcs-compat",[cA]:"fire-fst",[hA]:"fire-fst-compat",[dA]:"fire-vertex","fire-js":"fire-js",[fA]:"fire-js-all"};/**
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
 */const Tu=new Map,gA=new Map,bh=new Map;function uy(t,e){try{t.container.addComponent(e)}catch(n){hr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ls(t){const e=t.name;if(bh.has(e))return hr.debug(`There were multiple attempts to register component ${e}.`),!1;bh.set(e,t);for(const n of Tu.values())uy(n,t);for(const n of gA.values())uy(n,t);return!0}function rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function En(t){return t.settings!==void 0}/**
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
 */const yA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new ka("app","Firebase",yA);/**
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
 */class vA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=pA;function nw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kr.create("bad-app-name",{appName:String(s)});if(n||(n=X_()),!n)throw Kr.create("no-options");const i=Tu.get(s);if(i){if(xu(n,i.options)&&xu(r,i.config))return i;throw Kr.create("duplicate-app",{appName:s})}const o=new Ik(s);for(const u of bh.values())o.addComponent(u);const l=new vA(n,r,o);return Tu.set(s,l),l}function Qf(t=Sh){const e=Tu.get(t);if(!e&&t===Sh&&X_())return nw();if(!e)throw Kr.create("no-app",{appName:t});return e}function qn(t,e,n){var r;let s=(r=mA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hr.warn(l.join(" "));return}Ls(new Xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _A="firebase-heartbeat-database",wA=1,ua="firebase-heartbeat-store";let pd=null;function rw(){return pd||(pd=Lk(_A,wA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ua)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kr.create("idb-open",{originalErrorMessage:t.message})})),pd}async function EA(t){try{const n=(await rw()).transaction(ua),r=await n.objectStore(ua).get(sw(t));return await n.done,r}catch(e){if(e instanceof Bn)hr.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hr.warn(n.message)}}}async function cy(t,e){try{const r=(await rw()).transaction(ua,"readwrite");await r.objectStore(ua).put(e,sw(t)),await r.done}catch(n){if(n instanceof Bn)hr.warn(n.message);else{const r=Kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hr.warn(r.message)}}}function sw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xA=1024,TA=30*24*60*60*1e3;class IA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=TA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){hr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dy(),{heartbeatsToSend:r,unsentEntries:s}=kA(this._heartbeatsCache.heartbeats),i=Eu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return hr.warn(n),""}}}function dy(){return new Date().toISOString().substring(0,10)}function kA(t,e=xA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hk()?fk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hy(t){return Eu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SA(t){Ls(new Xr("platform-logger",e=>new Uk(e),"PRIVATE")),Ls(new Xr("heartbeat",e=>new IA(e),"PRIVATE")),qn(Ah,ly,t),qn(Ah,ly,"esm2017"),qn("fire-js","")}SA("");var bA="firebase",RA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn(bA,RA,"app");var fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ns,iw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,v){function E(){}E.prototype=v.prototype,x.D=v.prototype,x.prototype=new E,x.prototype.constructor=x,x.C=function(I,S,C){for(var T=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)T[Ne-2]=arguments[Ne];return v.prototype[S].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,v,E){E||(E=0);var I=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)I[S]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(S=0;16>S;++S)I[S]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=x.g[0],E=x.g[1],S=x.g[2];var C=x.g[3],T=v+(C^E&(S^C))+I[0]+3614090360&4294967295;v=E+(T<<7&4294967295|T>>>25),T=C+(S^v&(E^S))+I[1]+3905402710&4294967295,C=v+(T<<12&4294967295|T>>>20),T=S+(E^C&(v^E))+I[2]+606105819&4294967295,S=C+(T<<17&4294967295|T>>>15),T=E+(v^S&(C^v))+I[3]+3250441966&4294967295,E=S+(T<<22&4294967295|T>>>10),T=v+(C^E&(S^C))+I[4]+4118548399&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(S^v&(E^S))+I[5]+1200080426&4294967295,C=v+(T<<12&4294967295|T>>>20),T=S+(E^C&(v^E))+I[6]+2821735955&4294967295,S=C+(T<<17&4294967295|T>>>15),T=E+(v^S&(C^v))+I[7]+4249261313&4294967295,E=S+(T<<22&4294967295|T>>>10),T=v+(C^E&(S^C))+I[8]+1770035416&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(S^v&(E^S))+I[9]+2336552879&4294967295,C=v+(T<<12&4294967295|T>>>20),T=S+(E^C&(v^E))+I[10]+4294925233&4294967295,S=C+(T<<17&4294967295|T>>>15),T=E+(v^S&(C^v))+I[11]+2304563134&4294967295,E=S+(T<<22&4294967295|T>>>10),T=v+(C^E&(S^C))+I[12]+1804603682&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(S^v&(E^S))+I[13]+4254626195&4294967295,C=v+(T<<12&4294967295|T>>>20),T=S+(E^C&(v^E))+I[14]+2792965006&4294967295,S=C+(T<<17&4294967295|T>>>15),T=E+(v^S&(C^v))+I[15]+1236535329&4294967295,E=S+(T<<22&4294967295|T>>>10),T=v+(S^C&(E^S))+I[1]+4129170786&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^S&(v^E))+I[6]+3225465664&4294967295,C=v+(T<<9&4294967295|T>>>23),T=S+(v^E&(C^v))+I[11]+643717713&4294967295,S=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(S^C))+I[0]+3921069994&4294967295,E=S+(T<<20&4294967295|T>>>12),T=v+(S^C&(E^S))+I[5]+3593408605&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^S&(v^E))+I[10]+38016083&4294967295,C=v+(T<<9&4294967295|T>>>23),T=S+(v^E&(C^v))+I[15]+3634488961&4294967295,S=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(S^C))+I[4]+3889429448&4294967295,E=S+(T<<20&4294967295|T>>>12),T=v+(S^C&(E^S))+I[9]+568446438&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^S&(v^E))+I[14]+3275163606&4294967295,C=v+(T<<9&4294967295|T>>>23),T=S+(v^E&(C^v))+I[3]+4107603335&4294967295,S=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(S^C))+I[8]+1163531501&4294967295,E=S+(T<<20&4294967295|T>>>12),T=v+(S^C&(E^S))+I[13]+2850285829&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^S&(v^E))+I[2]+4243563512&4294967295,C=v+(T<<9&4294967295|T>>>23),T=S+(v^E&(C^v))+I[7]+1735328473&4294967295,S=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(S^C))+I[12]+2368359562&4294967295,E=S+(T<<20&4294967295|T>>>12),T=v+(E^S^C)+I[5]+4294588738&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^S)+I[8]+2272392833&4294967295,C=v+(T<<11&4294967295|T>>>21),T=S+(C^v^E)+I[11]+1839030562&4294967295,S=C+(T<<16&4294967295|T>>>16),T=E+(S^C^v)+I[14]+4259657740&4294967295,E=S+(T<<23&4294967295|T>>>9),T=v+(E^S^C)+I[1]+2763975236&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^S)+I[4]+1272893353&4294967295,C=v+(T<<11&4294967295|T>>>21),T=S+(C^v^E)+I[7]+4139469664&4294967295,S=C+(T<<16&4294967295|T>>>16),T=E+(S^C^v)+I[10]+3200236656&4294967295,E=S+(T<<23&4294967295|T>>>9),T=v+(E^S^C)+I[13]+681279174&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^S)+I[0]+3936430074&4294967295,C=v+(T<<11&4294967295|T>>>21),T=S+(C^v^E)+I[3]+3572445317&4294967295,S=C+(T<<16&4294967295|T>>>16),T=E+(S^C^v)+I[6]+76029189&4294967295,E=S+(T<<23&4294967295|T>>>9),T=v+(E^S^C)+I[9]+3654602809&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^S)+I[12]+3873151461&4294967295,C=v+(T<<11&4294967295|T>>>21),T=S+(C^v^E)+I[15]+530742520&4294967295,S=C+(T<<16&4294967295|T>>>16),T=E+(S^C^v)+I[2]+3299628645&4294967295,E=S+(T<<23&4294967295|T>>>9),T=v+(S^(E|~C))+I[0]+4096336452&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~S))+I[7]+1126891415&4294967295,C=v+(T<<10&4294967295|T>>>22),T=S+(v^(C|~E))+I[14]+2878612391&4294967295,S=C+(T<<15&4294967295|T>>>17),T=E+(C^(S|~v))+I[5]+4237533241&4294967295,E=S+(T<<21&4294967295|T>>>11),T=v+(S^(E|~C))+I[12]+1700485571&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~S))+I[3]+2399980690&4294967295,C=v+(T<<10&4294967295|T>>>22),T=S+(v^(C|~E))+I[10]+4293915773&4294967295,S=C+(T<<15&4294967295|T>>>17),T=E+(C^(S|~v))+I[1]+2240044497&4294967295,E=S+(T<<21&4294967295|T>>>11),T=v+(S^(E|~C))+I[8]+1873313359&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~S))+I[15]+4264355552&4294967295,C=v+(T<<10&4294967295|T>>>22),T=S+(v^(C|~E))+I[6]+2734768916&4294967295,S=C+(T<<15&4294967295|T>>>17),T=E+(C^(S|~v))+I[13]+1309151649&4294967295,E=S+(T<<21&4294967295|T>>>11),T=v+(S^(E|~C))+I[4]+4149444226&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~S))+I[11]+3174756917&4294967295,C=v+(T<<10&4294967295|T>>>22),T=S+(v^(C|~E))+I[2]+718787259&4294967295,S=C+(T<<15&4294967295|T>>>17),T=E+(C^(S|~v))+I[9]+3951481745&4294967295,x.g[0]=x.g[0]+v&4294967295,x.g[1]=x.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,x.g[2]=x.g[2]+S&4294967295,x.g[3]=x.g[3]+C&4294967295}r.prototype.u=function(x,v){v===void 0&&(v=x.length);for(var E=v-this.blockSize,I=this.B,S=this.h,C=0;C<v;){if(S==0)for(;C<=E;)s(this,x,C),C+=this.blockSize;if(typeof x=="string"){for(;C<v;)if(I[S++]=x.charCodeAt(C++),S==this.blockSize){s(this,I),S=0;break}}else for(;C<v;)if(I[S++]=x[C++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var v=1;v<x.length-8;++v)x[v]=0;var E=8*this.o;for(v=x.length-8;v<x.length;++v)x[v]=E&255,E/=256;for(this.u(x),x=Array(16),v=E=0;4>v;++v)for(var I=0;32>I;I+=8)x[E++]=this.g[v]>>>I&255;return x};function i(x,v){var E=l;return Object.prototype.hasOwnProperty.call(E,x)?E[x]:E[x]=v(x)}function o(x,v){this.h=v;for(var E=[],I=!0,S=x.length-1;0<=S;S--){var C=x[S]|0;I&&C==v||(E[S]=C,I=!1)}this.g=E}var l={};function u(x){return-128<=x&&128>x?i(x,function(v){return new o([v|0],0>v?-1:0)}):new o([x|0],0>x?-1:0)}function h(x){if(isNaN(x)||!isFinite(x))return m;if(0>x)return N(h(-x));for(var v=[],E=1,I=0;x>=E;I++)v[I]=x/E|0,E*=4294967296;return new o(v,0)}function p(x,v){if(x.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x.charAt(0)=="-")return N(p(x.substring(1),v));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(v,8)),I=m,S=0;S<x.length;S+=8){var C=Math.min(8,x.length-S),T=parseInt(x.substring(S,S+C),v);8>C?(C=h(Math.pow(v,C)),I=I.j(C).add(h(T))):(I=I.j(E),I=I.add(h(T)))}return I}var m=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-N(this).m();for(var x=0,v=1,E=0;E<this.g.length;E++){var I=this.i(E);x+=(0<=I?I:4294967296+I)*v,v*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(b(this))return"0";if(R(this))return"-"+N(this).toString(x);for(var v=h(Math.pow(x,6)),E=this,I="";;){var S=O(E,v).g;E=w(E,S.j(v));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(x);if(E=S,b(E))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function b(x){if(x.h!=0)return!1;for(var v=0;v<x.g.length;v++)if(x.g[v]!=0)return!1;return!0}function R(x){return x.h==-1}t.l=function(x){return x=w(this,x),R(x)?-1:b(x)?0:1};function N(x){for(var v=x.g.length,E=[],I=0;I<v;I++)E[I]=~x.g[I];return new o(E,~x.h).add(g)}t.abs=function(){return R(this)?N(this):this},t.add=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0,S=0;S<=v;S++){var C=I+(this.i(S)&65535)+(x.i(S)&65535),T=(C>>>16)+(this.i(S)>>>16)+(x.i(S)>>>16);I=T>>>16,C&=65535,T&=65535,E[S]=T<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(x,v){return x.add(N(v))}t.j=function(x){if(b(this)||b(x))return m;if(R(this))return R(x)?N(this).j(N(x)):N(N(this).j(x));if(R(x))return N(this.j(N(x)));if(0>this.l(A)&&0>x.l(A))return h(this.m()*x.m());for(var v=this.g.length+x.g.length,E=[],I=0;I<2*v;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<x.g.length;S++){var C=this.i(I)>>>16,T=this.i(I)&65535,Ne=x.i(S)>>>16,W=x.i(S)&65535;E[2*I+2*S]+=T*W,_(E,2*I+2*S),E[2*I+2*S+1]+=C*W,_(E,2*I+2*S+1),E[2*I+2*S+1]+=T*Ne,_(E,2*I+2*S+1),E[2*I+2*S+2]+=C*Ne,_(E,2*I+2*S+2)}for(I=0;I<v;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=v;I<2*v;I++)E[I]=0;return new o(E,0)};function _(x,v){for(;(x[v]&65535)!=x[v];)x[v+1]+=x[v]>>>16,x[v]&=65535,v++}function k(x,v){this.g=x,this.h=v}function O(x,v){if(b(v))throw Error("division by zero");if(b(x))return new k(m,m);if(R(x))return v=O(N(x),v),new k(N(v.g),N(v.h));if(R(v))return v=O(x,N(v)),new k(N(v.g),v.h);if(30<x.g.length){if(R(x)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,I=v;0>=I.l(x);)E=M(E),I=M(I);var S=z(E,1),C=z(I,1);for(I=z(I,2),E=z(E,2);!b(I);){var T=C.add(I);0>=T.l(x)&&(S=S.add(E),C=T),I=z(I,1),E=z(E,1)}return v=w(x,S.j(v)),new k(S,v)}for(S=m;0<=x.l(v);){for(E=Math.max(1,Math.floor(x.m()/v.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=h(E),T=C.j(v);R(T)||0<T.l(x);)E-=I,C=h(E),T=C.j(v);b(C)&&(C=g),S=S.add(C),x=w(x,T)}return new k(S,x)}t.A=function(x){return O(this,x).h},t.and=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)&x.i(I);return new o(E,this.h&x.h)},t.or=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)|x.i(I);return new o(E,this.h|x.h)},t.xor=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)^x.i(I);return new o(E,this.h^x.h)};function M(x){for(var v=x.g.length+1,E=[],I=0;I<v;I++)E[I]=x.i(I)<<1|x.i(I-1)>>>31;return new o(E,x.h)}function z(x,v){var E=v>>5;v%=32;for(var I=x.g.length-E,S=[],C=0;C<I;C++)S[C]=0<v?x.i(C+E)>>>v|x.i(C+E+1)<<32-v:x.i(C+E);return new o(S,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Ns=o}).apply(typeof fy<"u"?fy:typeof self<"u"?self:typeof window<"u"?window:{});var wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ow,ko,aw,Ul,Rh,lw,uw,cw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof wl=="object"&&wl];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in f))break e;f=f[P]}a=a[a.length-1],y=f[a],c=c(y),c!=y&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var f=0,y=!1,P={next:function(){if(!y&&f<a.length){var j=f++;return{value:c(j,a[j]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function m(a,c,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function g(a,c,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function A(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function b(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,P,j){for(var $=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)$[Se-2]=arguments[Se];return c.prototype[P].apply(y,$)}}function R(a){const c=a.length;if(0<c){const f=Array(c);for(let y=0;y<c;y++)f[y]=a[y];return f}return[]}function N(a,c){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const P=a.length||0,j=y.length||0;a.length=P+j;for(let $=0;$<j;$++)a[P+$]=y[$]}else a.push(y)}}class w{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var M=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function z(a,c,f){for(const y in a)c.call(f,a[y],y,a)}function x(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function v(a){const c={};for(const f in a)c[f]=a[f];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)a[f]=y[f];for(let j=0;j<E.length;j++)f=E[j],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function S(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=J;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ne{constructor(){this.h=this.g=null}add(c,f){const y=W.get();y.set(c,f),this.h?this.h.next=y:this.g=y,this.h=y}}var W=new w(()=>new ye,a=>a.reset());class ye{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,B=!1,J=new Ne,ne=()=>{const a=l.Promise.resolve(void 0);pe=()=>{a.then(_e)}};var _e=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){C(f)}var c=W;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var le=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function Ae(a,c){if(K.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(M){e:{try{O(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ke[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ae.aa.h.call(this)}}b(Ae,K);var ke={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),st=0;function ls(a,c,f,y,P){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!y,this.ha=P,this.key=++st,this.da=this.fa=!1}function St(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Lt(a){this.src=a,this.g={},this.h=0}Lt.prototype.add=function(a,c,f,y,P){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var $=us(a,c,y,P);return-1<$?(c=a[$],f||(c.fa=!1)):(c=new ls(c,this.src,j,!!y,P),c.fa=f,a.push(c)),c};function $n(a,c){var f=c.type;if(f in a.g){var y=a.g[f],P=Array.prototype.indexOf.call(y,c,void 0),j;(j=0<=P)&&Array.prototype.splice.call(y,P,1),j&&(St(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function us(a,c,f,y){for(var P=0;P<a.length;++P){var j=a[P];if(!j.da&&j.listener==c&&j.capture==!!f&&j.ha==y)return P}return-1}var cs="closure_lm_"+(1e6*Math.random()|0),wr={};function Er(a,c,f,y,P){if(Array.isArray(c)){for(var j=0;j<c.length;j++)Er(a,c[j],f,y,P);return null}return f=me(f),a&&a[At]?a.K(c,f,h(y)?!!y.capture:!1,P):ds(a,c,f,!1,y,P)}function ds(a,c,f,y,P,j){if(!c)throw Error("Invalid event type");var $=h(P)?!!P.capture:!!P,Se=V(a);if(Se||(a[cs]=Se=new Lt(a)),f=Se.add(c,f,y,$,j),f.proxy)return f;if(y=hs(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)le||(P=$),P===void 0&&(P=!1),a.addEventListener(c.toString(),y,P);else if(a.attachEvent)a.attachEvent(Rn(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function hs(){function a(f){return c.call(a.src,a.listener,f)}const c=fs;return a}function Sn(a,c,f,y,P){if(Array.isArray(c))for(var j=0;j<c.length;j++)Sn(a,c[j],f,y,P);else y=h(y)?!!y.capture:!!y,f=me(f),a&&a[At]?(a=a.i,c=String(c).toString(),c in a.g&&(j=a.g[c],f=us(j,f,y,P),-1<f&&(St(j[f]),Array.prototype.splice.call(j,f,1),j.length==0&&(delete a.g[c],a.h--)))):a&&(a=V(a))&&(c=a.g[c.toString()],a=-1,c&&(a=us(c,f,y,P)),(f=-1<a?c[a]:null)&&bn(f))}function bn(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[At])$n(c.i,a);else{var f=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(f,y,a.capture):c.detachEvent?c.detachEvent(Rn(f),y):c.addListener&&c.removeListener&&c.removeListener(y),(f=V(c))?($n(f,a),f.h==0&&(f.src=null,c[cs]=null)):St(a)}}}function Rn(a){return a in wr?wr[a]:wr[a]="on"+a}function fs(a,c){if(a.da)a=!0;else{c=new Ae(c,this);var f=a.listener,y=a.ha||a.src;a.fa&&bn(a),a=f.call(y,c)}return a}function V(a){return a=a[cs],a instanceof Lt?a:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(a){return typeof a=="function"?a:(a[Y]||(a[Y]=function(c){return a.handleEvent(c)}),a[Y])}function H(){ce.call(this),this.i=new Lt(this),this.M=this,this.F=null}b(H,ce),H.prototype[At]=!0,H.prototype.removeEventListener=function(a,c,f,y){Sn(this,a,c,f,y)};function he(a,c){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new K(c,a);else if(c instanceof K)c.target=c.target||a;else{var P=c;c=new K(y,a),I(c,P)}if(P=!0,f)for(var j=f.length-1;0<=j;j--){var $=c.g=f[j];P=Xe($,y,!0,c)&&P}if($=c.g=a,P=Xe($,y,!0,c)&&P,P=Xe($,y,!1,c)&&P,f)for(j=0;j<f.length;j++)$=c.g=f[j],P=Xe($,y,!1,c)&&P}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],y=0;y<f.length;y++)St(f[y]);delete a.g[c],a.h--}}this.F=null},H.prototype.K=function(a,c,f,y){return this.i.add(String(a),c,!1,f,y)},H.prototype.L=function(a,c,f,y){return this.i.add(String(a),c,!0,f,y)};function Xe(a,c,f,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,j=0;j<c.length;++j){var $=c[j];if($&&!$.da&&$.capture==f){var Se=$.listener,it=$.ha||$.src;$.fa&&$n(a.i,$),P=Se.call(it,y)!==!1&&P}}return P&&!y.defaultPrevented}function $e(a,c,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function We(a){a.g=$e(()=>{a.g=null,a.i&&(a.i=!1,We(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class nn extends ce{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(a){ce.call(this),this.h=a,this.g={}}b(bt,ce);var Wn=[];function Hn(a){z(a.g,function(c,f){this.g.hasOwnProperty(f)&&bn(c)},a),a.g={}}bt.prototype.N=function(){bt.aa.N.call(this),Hn(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kn=l.JSON.stringify,ps=l.JSON.parse,D=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function se(){}se.prototype.h=null;function we(a){return a.h||(a.h=a.i())}function pt(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yi(){K.call(this,"d")}b(Yi,K);function Xi(){K.call(this,"c")}b(Xi,K);var rn={},Ys=null;function Vt(){return Ys=Ys||new H}rn.La="serverreachability";function mn(a){K.call(this,rn.La,a)}b(mn,K);function ms(a){const c=Vt();he(c,new mn(c))}rn.STAT_EVENT="statevent";function em(a,c){K.call(this,rn.STAT_EVENT,a),this.stat=c}b(em,K);function Rt(a){const c=Vt();he(c,new em(c,a))}rn.Ma="timingevent";function tm(a,c){K.call(this,rn.Ma,a),this.size=c}b(tm,K);function Ji(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Zi(){this.g=!0}Zi.prototype.xa=function(){this.g=!1};function Sx(a,c,f,y,P,j){a.info(function(){if(a.g)if(j)for(var $="",Se=j.split("&"),it=0;it<Se.length;it++){var Ee=Se[it].split("=");if(1<Ee.length){var mt=Ee[0];Ee=Ee[1];var gt=mt.split("_");$=2<=gt.length&&gt[1]=="type"?$+(mt+"="+Ee+"&"):$+(mt+"=redacted&")}}else $=null;else $=j;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+c+`
`+f+`
`+$})}function bx(a,c,f,y,P,j,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+c+`
`+f+`
`+j+" "+$})}function Xs(a,c,f,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Nx(a,f)+(y?" "+y:"")})}function Rx(a,c){a.info(function(){return"TIMEOUT: "+c})}Zi.prototype.info=function(){};function Nx(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var j=P[0];if(j!="noop"&&j!="stop"&&j!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return Kn(f)}catch{return c}}var Ba={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ac;function $a(){}b($a,se),$a.prototype.g=function(){return new XMLHttpRequest},$a.prototype.i=function(){return{}},Ac=new $a;function xr(a,c,f,y){this.j=a,this.i=c,this.l=f,this.R=y||1,this.U=new bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rm}function rm(){this.i=null,this.g="",this.h=!1}var sm={},Sc={};function bc(a,c,f){a.L=1,a.v=Ga(Gn(c)),a.m=f,a.P=!0,im(a,null)}function im(a,c){a.F=Date.now(),Wa(a),a.A=Gn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),_m(f.i,"t",y),a.C=0,f=a.j.J,a.h=new rm,a.g=Lm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new nn(g(a.Y,a,a.g),a.O)),c=a.U,f=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Wn[0]=P.toString()),P=Wn);for(var j=0;j<P.length;j++){var $=Er(f,P[j],y||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ms(),Sx(a.i,a.u,a.A,a.l,a.R,a.m)}xr.prototype.ca=function(a){a=a.target;const c=this.M;c&&Qn(a)==3?c.j():this.Y(a)},xr.prototype.Y=function(a){try{if(a==this.g)e:{const gt=Qn(this.g);var c=this.g.Ba();const ei=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Am(this.g)))){this.J||gt!=4||c==7||(c==8||0>=ei?ms(3):ms(2)),Rc(this);var f=this.g.Z();this.X=f;t:if(om(this)){var y=Am(this.g);a="";var P=y.length,j=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gs(this),eo(this);var $="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(j&&c==P-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,bx(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,it=this.g;if((Se=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Se)){var Ee=Se;break t}}Ee=null}if(f=Ee)Xs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nc(this,f);else{this.o=!1,this.s=3,Rt(12),gs(this),eo(this);break e}}if(this.P){f=!0;let gn;for(;!this.J&&this.C<$.length;)if(gn=Cx(this,$),gn==Sc){gt==4&&(this.s=4,Rt(14),f=!1),Xs(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==sm){this.s=4,Rt(15),Xs(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Xs(this.i,this.l,gn,null),Nc(this,gn);if(om(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||$.length!=0||this.h.h||(this.s=1,Rt(16),f=!1),this.o=this.o&&f,!f)Xs(this.i,this.l,$,"[Invalid Chunked Response]"),gs(this),eo(this);else if(0<$.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),qc(mt),mt.M=!0,Rt(11))}}else Xs(this.i,this.l,$,null),Nc(this,$);gt==4&&gs(this),this.o&&!this.J&&(gt==4?Dm(this.j,this):(this.o=!1,Wa(this)))}else Gx(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),gs(this),eo(this)}}}catch{}finally{}};function om(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Cx(a,c){var f=a.C,y=c.indexOf(`
`,f);return y==-1?Sc:(f=Number(c.substring(f,y)),isNaN(f)?sm:(y+=1,y+f>c.length?Sc:(c=c.slice(y,y+f),a.C=y+f,c)))}xr.prototype.cancel=function(){this.J=!0,gs(this)};function Wa(a){a.S=Date.now()+a.I,am(a,a.I)}function am(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ji(g(a.ba,a),c)}function Rc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}xr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Rx(this.i,this.A),this.L!=2&&(ms(),Rt(17)),gs(this),this.s=2,eo(this)):am(this,this.S-a)};function eo(a){a.j.G==0||a.J||Dm(a.j,a)}function gs(a){Rc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Hn(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Nc(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||Cc(f.h,a))){if(!a.K&&Cc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)el(f),Ja(f);else break e;jc(f),Rt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ji(g(f.Za,f),6e3));if(1>=cm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else vs(f,11)}else if((a.K||f.g==a)&&el(f),!_(c))for(P=f.Da.g.parse(c),c=0;c<P.length;c++){let Ee=P[c];if(f.T=Ee[0],Ee=Ee[1],f.G==2)if(Ee[0]=="c"){f.K=Ee[1],f.ia=Ee[2];const mt=Ee[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const gt=Ee[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const ei=Ee[5];ei!=null&&typeof ei=="number"&&0<ei&&(y=1.5*ei,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const gn=a.g;if(gn){const nl=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var j=y.h;j.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Pc(j,j.h),j.h=null))}if(y.D){const Lc=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;Lc&&(y.ya=Lc,Ce(y.I,y.D,Lc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var $=a;if(y.qa=qm(y,y.J?y.ia:null,y.W),$.K){dm(y.h,$);var Se=$,it=y.L;it&&(Se.I=it),Se.B&&(Rc(Se),Wa(Se)),y.g=$}else Cm(y);0<f.i.length&&Za(f)}else Ee[0]!="stop"&&Ee[0]!="close"||vs(f,7);else f.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?vs(f,7):Oc(f):Ee[0]!="noop"&&f.l&&f.l.ta(Ee),f.v=0)}}ms(4)}catch{}}var Px=class{constructor(a,c){this.g=a,this.map=c}};function lm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function um(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function cm(a){return a.h?1:a.g?a.g.size:0}function Cc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Pc(a,c){a.g?a.g.add(c):a.h=c}function dm(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}lm.prototype.cancel=function(){if(this.i=hm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return R(a.i)}function Dx(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,y=0;y<f;y++)c.push(a[y]);return c}c=[],f=0;for(y in a)c[f++]=a[y];return c}function Ox(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const y in a)c[f++]=y;return c}}}function fm(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=Ox(a),y=Dx(a),P=y.length,j=0;j<P;j++)c.call(void 0,y[j],f&&f[j],a)}var pm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jx(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),P=null;if(0<=y){var j=a[f].substring(0,y);P=a[f].substring(y+1)}else j=a[f];c(j,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ys(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ys){this.h=a.h,Ha(this,a.j),this.o=a.o,this.g=a.g,Ka(this,a.s),this.l=a.l;var c=a.i,f=new ro;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),mm(this,f),this.m=a.m}else a&&(c=String(a).match(pm))?(this.h=!1,Ha(this,c[1]||"",!0),this.o=to(c[2]||""),this.g=to(c[3]||"",!0),Ka(this,c[4]),this.l=to(c[5]||"",!0),mm(this,c[6]||"",!0),this.m=to(c[7]||"")):(this.h=!1,this.i=new ro(null,this.h))}ys.prototype.toString=function(){var a=[],c=this.j;c&&a.push(no(c,gm,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(no(c,gm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(no(f,f.charAt(0)=="/"?Vx:Lx,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",no(f,Ux)),a.join("")};function Gn(a){return new ys(a)}function Ha(a,c,f){a.j=f?to(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ka(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function mm(a,c,f){c instanceof ro?(a.i=c,Fx(a.i,a.h)):(f||(c=no(c,Mx)),a.i=new ro(c,a.h))}function Ce(a,c,f){a.i.set(c,f)}function Ga(a){return Ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function to(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function no(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,qx),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gm=/[#\/\?@]/g,Lx=/[#\?:]/g,Vx=/[#\?]/g,Mx=/[#\?@]/g,Ux=/#/g;function ro(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Tr(a){a.g||(a.g=new Map,a.h=0,a.i&&jx(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=ro.prototype,t.add=function(a,c){Tr(this),this.i=null,a=Js(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function ym(a,c){Tr(a),c=Js(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function vm(a,c){return Tr(a),c=Js(a,c),a.g.has(c)}t.forEach=function(a,c){Tr(this),this.g.forEach(function(f,y){f.forEach(function(P){a.call(c,P,y,this)},this)},this)},t.na=function(){Tr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let y=0;y<c.length;y++){const P=a[y];for(let j=0;j<P.length;j++)f.push(c[y])}return f},t.V=function(a){Tr(this);let c=[];if(typeof a=="string")vm(this,a)&&(c=c.concat(this.g.get(Js(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Tr(this),this.i=null,a=Js(this,a),vm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function _m(a,c,f){ym(a,c),0<f.length&&(a.i=null,a.g.set(Js(a,c),R(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var y=c[f];const j=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var P=j;$[y]!==""&&(P+="="+encodeURIComponent(String($[y]))),a.push(P)}}return this.i=a.join("&")};function Js(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Fx(a,c){c&&!a.j&&(Tr(a),a.i=null,a.g.forEach(function(f,y){var P=y.toLowerCase();y!=P&&(ym(this,y),_m(this,P,f))},a)),a.j=c}function zx(a,c){const f=new Zi;if(l.Image){const y=new Image;y.onload=A(Ir,f,"TestLoadImage: loaded",!0,c,y),y.onerror=A(Ir,f,"TestLoadImage: error",!1,c,y),y.onabort=A(Ir,f,"TestLoadImage: abort",!1,c,y),y.ontimeout=A(Ir,f,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function Bx(a,c){const f=new Zi,y=new AbortController,P=setTimeout(()=>{y.abort(),Ir(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(j=>{clearTimeout(P),j.ok?Ir(f,"TestPingServer: ok",!0,c):Ir(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Ir(f,"TestPingServer: error",!1,c)})}function Ir(a,c,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function $x(){this.g=new D}function Wx(a,c,f){const y=f||"";try{fm(a,function(P,j){let $=P;h(P)&&($=Kn(P)),c.push(y+j+"="+encodeURIComponent($))})}catch(P){throw c.push(y+"type="+encodeURIComponent("_badmap")),P}}function Qa(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Qa,se),Qa.prototype.g=function(){return new Ya(this.l,this.j)},Qa.prototype.i=function(a){return function(){return a}}({});function Ya(a,c){H.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Ya,H),t=Ya.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,io(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,so(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function wm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?so(this):io(this),this.readyState==3&&wm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,so(this))},t.Qa=function(a){this.g&&(this.response=a,so(this))},t.ga=function(){this.g&&so(this)};function so(a){a.readyState=4,a.l=null,a.j=null,a.v=null,io(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function io(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Em(a){let c="";return z(a,function(f,y){c+=y,c+=":",c+=f,c+=`\r
`}),c}function Dc(a,c,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Em(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ce(a,c,f))}function Ue(a){H.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Ue,H);var Hx=/^https?$/i,Kx=["POST","PUT"];t=Ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ac.g(),this.v=this.o?we(this.o):we(Ac),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(j){xm(this,j);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const j of y.keys())f.set(j,y.get(j));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(j=>j.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Kx,c,void 0))||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,$]of f)this.g.setRequestHeader(j,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{km(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){xm(this,j)}};function xm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Tm(a),Xa(a)}function Tm(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),Xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xa(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Im(this):this.bb())},t.bb=function(){Im(this)};function Im(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Qn(a)!=4||a.Z()!=2)){if(a.u&&Qn(a)==4)$e(a.Ea,0,a);else if(he(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var y;if(y=$===0){var P=String(a.D).match(pm)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!Hx.test(P?P.toLowerCase():"")}f=y}if(f)he(a,"complete"),he(a,"success");else{a.m=6;try{var j=2<Qn(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",Tm(a)}}finally{Xa(a)}}}}function Xa(a,c){if(a.g){km(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||he(a,"ready");try{f.onreadystatechange=y}catch{}}}function km(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),ps(c)}};function Am(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Gx(a){const c={};a=(a.g&&2<=Qn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var f=S(a[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const j=c[P]||[];c[P]=j,j.push(f)}x(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oo(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function Sm(a){this.Aa=0,this.i=[],this.j=new Zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oo("baseRetryDelayMs",5e3,a),this.cb=oo("retryDelaySeedMs",1e4,a),this.Wa=oo("forwardChannelMaxRetries",2,a),this.wa=oo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new lm(a&&a.concurrentRequestLimit),this.Da=new $x,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sm.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,y){Rt(0),this.W=a,this.H=c||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=qm(this,null,this.W),Za(this)};function Oc(a){if(bm(a),a.G==3){var c=a.U++,f=Gn(a.I);if(Ce(f,"SID",a.K),Ce(f,"RID",c),Ce(f,"TYPE","terminate"),ao(a,f),c=new xr(a,a.j,c),c.L=2,c.v=Ga(Gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=Lm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Wa(c)}jm(a)}function Ja(a){a.g&&(qc(a),a.g.cancel(),a.g=null)}function bm(a){Ja(a),a.u&&(l.clearTimeout(a.u),a.u=null),el(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Za(a){if(!um(a.h)&&!a.s){a.s=!0;var c=a.Ga;pe||ne(),B||(pe(),B=!0),J.add(c,a),a.B=0}}function Qx(a,c){return cm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ji(g(a.Ga,a,c),Om(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new xr(this,this.j,a);let j=this.o;if(this.S&&(j?(j=v(j),I(j,this.S)):j=this.S),this.m!==null||this.O||(P.H=j,j=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=Nm(this,P,c),f=Gn(this.I),Ce(f,"RID",a),Ce(f,"CVER",22),this.D&&Ce(f,"X-HTTP-Session-Id",this.D),ao(this,f),j&&(this.O?c="headers="+encodeURIComponent(String(Em(j)))+"&"+c:this.m&&Dc(f,this.m,j)),Pc(this.h,P),this.Ua&&Ce(f,"TYPE","init"),this.P?(Ce(f,"$req",c),Ce(f,"SID","null"),P.T=!0,bc(P,f,null)):bc(P,f,c),this.G=2}}else this.G==3&&(a?Rm(this,a):this.i.length==0||um(this.h)||Rm(this))};function Rm(a,c){var f;c?f=c.l:f=a.U++;const y=Gn(a.I);Ce(y,"SID",a.K),Ce(y,"RID",f),Ce(y,"AID",a.T),ao(a,y),a.m&&a.o&&Dc(y,a.m,a.o),f=new xr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Nm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Pc(a.h,f),bc(f,y,c)}function ao(a,c){a.H&&z(a.H,function(f,y){Ce(c,y,f)}),a.l&&fm({},function(f,y){Ce(c,y,f)})}function Nm(a,c,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let j=-1;for(;;){const $=["count="+f];j==-1?0<f?(j=P[0].g,$.push("ofs="+j)):j=0:$.push("ofs="+j);let Se=!0;for(let it=0;it<f;it++){let Ee=P[it].g;const mt=P[it].map;if(Ee-=j,0>Ee)j=Math.max(0,P[it].g-100),Se=!1;else try{Wx(mt,$,"req"+Ee+"_")}catch{y&&y(mt)}}if(Se){y=$.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,y}function Cm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;pe||ne(),B||(pe(),B=!0),J.add(c,a),a.v=0}}function jc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ji(g(a.Fa,a),Om(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Pm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ji(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Ja(this),Pm(this))};function qc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Pm(a){a.g=new xr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Gn(a.qa);Ce(c,"RID","rpc"),Ce(c,"SID",a.K),Ce(c,"AID",a.T),Ce(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ce(c,"TO",a.ja),Ce(c,"TYPE","xmlhttp"),ao(a,c),a.m&&a.o&&Dc(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ga(Gn(c)),f.m=null,f.P=!0,im(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ja(this),jc(this),Rt(19))};function el(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Dm(a,c){var f=null;if(a.g==c){el(a),qc(a),a.g=null;var y=2}else if(Cc(a.h,c))f=c.D,dm(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;y=Vt(),he(y,new tm(y,f)),Za(a)}else Cm(a);else if(P=c.s,P==3||P==0&&0<c.X||!(y==1&&Qx(a,c)||y==2&&jc(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),P){case 1:vs(a,5);break;case 4:vs(a,10);break;case 3:vs(a,6);break;default:vs(a,2)}}}function Om(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function vs(a,c){if(a.j.info("Error code "+c),c==2){var f=g(a.fb,a),y=a.Xa;const P=!y;y=new ys(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ha(y,"https"),Ga(y),P?zx(y.toString(),f):Bx(y.toString(),f)}else Rt(2);a.G=0,a.l&&a.l.sa(c),jm(a),bm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function jm(a){if(a.G=0,a.ka=[],a.l){const c=hm(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ka,c),N(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function qm(a,c,f){var y=f instanceof ys?Gn(f):new ys(f);if(y.g!="")c&&(y.g=c+"."+y.g),Ka(y,y.s);else{var P=l.location;y=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var j=new ys(null);y&&Ha(j,y),c&&(j.g=c),P&&Ka(j,P),f&&(j.l=f),y=j}return f=a.D,c=a.ya,f&&c&&Ce(y,f,c),Ce(y,"VER",a.la),ao(a,y),y}function Lm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ue(new Qa({eb:f})):new Ue(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vm(){}t=Vm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function tl(){}tl.prototype.g=function(a,c){return new Wt(a,c)};function Wt(a,c){H.call(this),this.g=new Sm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Zs(this)}b(Wt,H),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Oc(this.g)},Wt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Kn(a),a=f);c.i.push(new Px(c.Ya++,a)),c.G==3&&Za(c)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Oc(this.g),delete this.g,Wt.aa.N.call(this)};function Mm(a){Yi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}b(Mm,Yi);function Um(){Xi.call(this),this.status=1}b(Um,Xi);function Zs(a){this.g=a}b(Zs,Vm),Zs.prototype.ua=function(){he(this.g,"a")},Zs.prototype.ta=function(a){he(this.g,new Mm(a))},Zs.prototype.sa=function(a){he(this.g,new Um)},Zs.prototype.ra=function(){he(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,cw=function(){return new tl},uw=function(){return Vt()},lw=rn,Rh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ba.NO_ERROR=0,Ba.TIMEOUT=8,Ba.HTTP_ERROR=6,Ul=Ba,nm.COMPLETE="complete",aw=nm,pt.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",H.prototype.listen=H.prototype.K,ko=pt,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,ow=Ue}).apply(typeof wl<"u"?wl:typeof self<"u"?self:typeof window<"u"?window:{});const py="@firebase/firestore";/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */const Vs=new Kf("@firebase/firestore");function yo(){return Vs.logLevel}function X(t,...e){if(Vs.logLevel<=fe.DEBUG){const n=e.map(Yf);Vs.debug(`Firestore (${Wi}): ${t}`,...n)}}function fr(t,...e){if(Vs.logLevel<=fe.ERROR){const n=e.map(Yf);Vs.error(`Firestore (${Wi}): ${t}`,...n)}}function Oi(t,...e){if(Vs.logLevel<=fe.WARN){const n=e.map(Yf);Vs.warn(`Firestore (${Wi}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Ie(t,e){t||ie()}function ae(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class CA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PA{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new or,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new dw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new wt(e)}}class DA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new DA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ie(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new jA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class hw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=LA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function ji(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new et(0,0))}static max(){return new oe(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ca{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ca?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends ca{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const VA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends ca{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return VA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new G(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(De.fromString(e))}static fromName(e){return new ee(De.fromString(e).popFirst(5))}static empty(){return new ee(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new De(e.slice()))}}function MA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new Jr(s,ee.empty(),e)}function UA(t){return new Jr(t.readTime,t.key,-1)}class Jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jr(oe.min(),ee.empty(),-1)}static max(){return new Jr(oe.max(),ee.empty(),-1)}}function FA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sa(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==zA)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function $A(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ba(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xf.oe=-1;function sc(t){return t==null}function Iu(t){return t===0&&1/t==-1/0}function WA(t){return typeof t=="number"&&Number.isInteger(t)&&!Iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function my(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gy(this.data.getIterator())}getIteratorFrom(e){return new gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new ct(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pw("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const HA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=HA.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ms(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zf(t){const e=t.mapValue.fields.__previous_value__;return Jf(e)?Zf(e):e}function da(t){const e=Zr(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class KA{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class ha{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={mapValue:{}};function Us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jf(t)?4:QA(t)?9007199254740991:GA(t)?10:11:ie()}function Un(t,e){if(t===e)return!0;const n=Us(t);if(n!==Us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return da(t).isEqual(da(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zr(s.timestampValue),l=Zr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ms(s.bytesValue).isEqual(Ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),l=He(i.doubleValue);return o===l?Iu(o)===Iu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(my(o)!==my(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Un(o[u],l[u])))return!1;return!0}(t,e);default:return ie()}}function fa(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=Us(t),r=Us(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=He(i.integerValue||i.doubleValue),u=He(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return yy(t.timestampValue,e.timestampValue);case 4:return yy(da(t),da(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ms(i),u=Ms(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=xe(l[h],u[h]);if(p!==0)return p}return xe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=xe(He(i.latitude),He(o.latitude));return l!==0?l:xe(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,p;const m=i.fields||{},g=o.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,b=(u=g.value)===null||u===void 0?void 0:u.arrayValue,R=xe(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((p=b==null?void 0:b.values)===null||p===void 0?void 0:p.length)||0);return R!==0?R:vy(A,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xl.mapValue&&o===xl.mapValue)return 0;if(i===xl.mapValue)return 1;if(o===xl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=xe(u[m],p[m]);if(g!==0)return g;const A=qi(l[u[m]],h[p[m]]);if(A!==0)return A}return xe(u.length,p.length)}(t.mapValue,e.mapValue);default:throw ie()}}function yy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Zr(t),r=Zr(e),s=xe(n.seconds,r.seconds);return s!==0?s:xe(n.nanos,r.nanos)}function vy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qi(n[s],r[s]);if(i)return i}return xe(n.length,r.length)}function Li(t){return Nh(t)}function Nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nh(n.fields[o])}`;return s+"}"}(t.mapValue):ie()}function _y(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ch(t){return!!t&&"integerValue"in t}function ep(t){return!!t&&"arrayValue"in t}function wy(t){return!!t&&"nullValue"in t}function Ey(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function GA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Mo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Fl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(Mo(this.value))}}function mw(t){const e=[];return Gs(t.fields,(n,r)=>{const s=new lt([n]);if(Fl(r)){const i=mw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
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
 */class xt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new xt(e,0,oe.min(),oe.min(),oe.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new xt(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new xt(e,2,n,oe.min(),oe.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,oe.min(),oe.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ku{constructor(e,n){this.position=e,this.inclusive=n}}function xy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function YA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gw{}class Ye extends gw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JA(e,n,r):n==="array-contains"?new tS(e,r):n==="in"?new nS(e,r):n==="not-in"?new rS(e,r):n==="array-contains-any"?new sS(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ZA(e,r):new eS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qi(n,this.value)):n!==null&&Us(this.value)===Us(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends gw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new An(e,n)}matches(e){return yw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yw(t){return t.op==="and"}function vw(t){return XA(t)&&yw(t)}function XA(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function Ph(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Li(t.value);if(vw(t))return t.filters.map(e=>Ph(e)).join(",");{const e=t.filters.map(n=>Ph(n)).join(",");return`${t.op}(${e})`}}function _w(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&Un(r.value,s.value)}(t,e):t instanceof An?function(r,s){return s instanceof An&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&_w(o,s.filters[l]),!0):!1}(t,e):void ie()}function ww(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Li(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(ww).join(" ,")+"}"}(t):"Filter"}class JA extends Ye{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class ZA extends Ye{constructor(e,n){super(e,"in",n),this.keys=Ew("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eS extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=Ew("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ew(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class tS extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ep(n)&&fa(n.arrayValue,this.value)}}class nS extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class rS extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fa(this.value.arrayValue,n)}}class sS extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ep(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
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
 */class iS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Iy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new iS(t,e,n,r,s,i,o)}function tp(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ph(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Li(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Li(r)).join(",")),e.ue=n}return e.ue}function np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_w(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ty(t.startAt,e.startAt)&&Ty(t.endAt,e.endAt)}function Dh(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function oS(t,e,n,r,s,i,o,l){return new Hi(t,e,n,r,s,i,o,l)}function ic(t){return new Hi(t)}function ky(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xw(t){return t.collectionGroup!==null}function Uo(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ct(lt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pa(i,r))}),n.has(lt.keyField().canonicalString())||e.ce.push(new pa(lt.keyField(),r))}return e.ce}function Ln(t){const e=ae(t);return e.le||(e.le=aS(e,Uo(t))),e.le}function aS(t,e){if(t.limitType==="F")return Iy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pa(s.field,i)});const n=t.endAt?new ku(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ku(t.startAt.position,t.startAt.inclusive):null;return Iy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oh(t,e){const n=t.filters.concat([e]);return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Au(t,e,n){return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oc(t,e){return np(Ln(t),Ln(e))&&t.limitType===e.limitType}function Tw(t){return`${tp(Ln(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ww(s)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Li(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Li(s)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function ac(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Uo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=xy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Uo(r),s)||r.endAt&&!function(o,l,u){const h=xy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Uo(r),s))}(t,e)}function lS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Iw(t){return(e,n)=>{let r=!1;for(const s of Uo(t)){const i=uS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uS(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?qi(u,h):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fw(this.inner)}size(){return this.innerSize}}/**
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
 */const cS=new Me(ee.comparator);function pr(){return cS}const kw=new Me(ee.comparator);function Ao(...t){let e=kw;for(const n of t)e=e.insert(n.key,n);return e}function Aw(t){let e=kw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function As(){return Fo()}function Sw(){return Fo()}function Fo(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const dS=new Me(ee.comparator),hS=new ct(ee.comparator);function de(...t){let e=hS;for(const n of t)e=e.add(n);return e}const fS=new ct(xe);function pS(){return fS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function bw(t){return{integerValue:""+t}}function mS(t,e){return WA(e)?bw(e):rp(t,e)}/**
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
 */class lc{constructor(){this._=void 0}}function gS(t,e,n){return t instanceof ma?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Jf(i)&&(i=Zf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ga?Nw(t,e):t instanceof ya?Cw(t,e):function(s,i){const o=Rw(s,i),l=Ay(o)+Ay(s.Pe);return Ch(o)&&Ch(s.Pe)?bw(l):rp(s.serializer,l)}(t,e)}function yS(t,e,n){return t instanceof ga?Nw(t,e):t instanceof ya?Cw(t,e):n}function Rw(t,e){return t instanceof Su?function(r){return Ch(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ma extends lc{}class ga extends lc{constructor(e){super(),this.elements=e}}function Nw(t,e){const n=Pw(e);for(const r of t.elements)n.some(s=>Un(s,r))||n.push(r);return{arrayValue:{values:n}}}class ya extends lc{constructor(e){super(),this.elements=e}}function Cw(t,e){let n=Pw(e);for(const r of t.elements)n=n.filter(s=>!Un(s,r));return{arrayValue:{values:n}}}class Su extends lc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ay(t){return He(t.integerValue||t.doubleValue)}function Pw(t){return ep(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vS{constructor(e,n){this.field=e,this.transform=n}}function _S(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ga&&s instanceof ga||r instanceof ya&&s instanceof ya?ji(r.elements,s.elements,Un):r instanceof Su&&s instanceof Su?Un(r.Pe,s.Pe):r instanceof ma&&s instanceof ma}(t.transform,e.transform)}class wS{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uc{}function Dw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cc(t.key,Dt.none()):new Ra(t.key,t.data,Dt.none());{const n=t.data,r=Ut.empty();let s=new ct(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new is(t.key,r,new Gt(s.toArray()),Dt.none())}}function ES(t,e,n){t instanceof Ra?function(s,i,o){const l=s.value.clone(),u=by(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof is?function(s,i,o){if(!zl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=by(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Ow(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zo(t,e,n,r){return t instanceof Ra?function(i,o,l,u){if(!zl(i.precondition,o))return l;const h=i.value.clone(),p=Ry(i.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof is?function(i,o,l,u){if(!zl(i.precondition,o))return l;const h=Ry(i.fieldTransforms,u,o),p=o.data;return p.setAll(Ow(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return zl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Rw(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Sy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ji(r,s,(i,o)=>_S(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends uc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class is extends uc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ow(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function by(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,yS(o,l,n[s]))}return r}function Ry(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,gS(i,o,e))}return r}class cc extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TS extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ES(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Dw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>Sy(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>Sy(n,r))}}class sp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return dS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new sp(e,n,r,s)}}/**
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
 */class kS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,ge;function SS(t){switch(t){default:return ie();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function jw(t){if(t===void 0)return fr("GRPC error has no .code"),q.UNKNOWN;switch(t){case Ge.OK:return q.OK;case Ge.CANCELLED:return q.CANCELLED;case Ge.UNKNOWN:return q.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return q.INTERNAL;case Ge.UNAVAILABLE:return q.UNAVAILABLE;case Ge.UNAUTHENTICATED:return q.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case Ge.NOT_FOUND:return q.NOT_FOUND;case Ge.ALREADY_EXISTS:return q.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return q.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case Ge.ABORTED:return q.ABORTED;case Ge.OUT_OF_RANGE:return q.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return q.UNIMPLEMENTED;case Ge.DATA_LOSS:return q.DATA_LOSS;default:return ie()}}(ge=Ge||(Ge={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bS(){return new TextEncoder}/**
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
 */const RS=new Ns([4294967295,4294967295],0);function Ny(t){const e=bS().encode(t),n=new iw;return n.update(e),new Uint8Array(n.digest())}function Cy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ns([n,r],0),new Ns([s,i],0)]}class ip{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ns.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ns.fromNumber(r)));return s.compare(RS)===1&&(s=new Ns([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ny(e),[r,s]=Cy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ip(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ny(e),[r,s]=Cy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dc(oe.min(),s,new Me(xe),pr(),de())}}class Na{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Na(r,n,de(),de(),de())}}/**
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
 */class Bl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class qw{constructor(e,n){this.targetId=e,this.me=n}}class Lw{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Py{constructor(){this.fe=0,this.ge=Oy(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=de(),n=de(),r=de();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie()}}),new Na(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Oy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class NS{constructor(e){this.Le=e,this.Be=new Map,this.ke=pr(),this.qe=Dy(),this.Qe=new Me(xe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Dh(i))if(r===0){const o=new ee(i.path);this.Ue(n,o,xt.newNoDocument(o,oe.min()))}else Ie(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ms(r).toUint8Array()}catch(u){if(u instanceof pw)return Oi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ip(o,s,i)}catch(u){return Oi(u instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Dh(l.target)){const u=new ee(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,xt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=de();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new dc(e,n,this.Qe,this.ke,r);return this.ke=pr(),this.qe=Dy(),this.Qe=new Me(xe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Py,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(xe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Py),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Dy(){return new Me(ee.comparator)}function Oy(){return new Me(ee.comparator)}const CS={asc:"ASCENDING",desc:"DESCENDING"},PS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DS={and:"AND",or:"OR"};class OS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jh(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function bu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jS(t,e){return bu(t,e.toTimestamp())}function Vn(t){return Ie(!!t),oe.fromTimestamp(function(n){const r=Zr(n);return new et(r.seconds,r.nanos)}(t))}function op(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Mw(t){const e=De.fromString(t);return Ie($w(e)),e}function Lh(t,e){return op(t.databaseId,e.path)}function md(t,e){const n=Mw(e);if(n.get(1)!==t.databaseId.projectId)throw new G(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(Fw(n))}function Uw(t,e){return op(t.databaseId,e)}function qS(t){const e=Mw(t);return e.length===4?De.emptyPath():Fw(e)}function Vh(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fw(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jy(t,e,n){return{name:Lh(t,e),fields:n.value.mapValue.fields}}function LS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(Ie(p===void 0||typeof p=="string"),ht.fromBase64String(p||"")):(Ie(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ht.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?q.UNKNOWN:jw(h.code);return new G(p,h.message||"")}(o);n=new Lw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=md(t,r.document.name),i=Vn(r.document.updateTime),o=r.document.createTime?Vn(r.document.createTime):oe.min(),l=new Ut({mapValue:{fields:r.document.fields}}),u=xt.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new Bl(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=md(t,r.document),i=r.readTime?Vn(r.readTime):oe.min(),o=xt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Bl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=md(t,r.document),i=r.removedTargetIds||[];n=new Bl([],i,s,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new AS(s,i),l=r.targetId;n=new qw(l,o)}}return n}function VS(t,e){let n;if(e instanceof Ra)n={update:jy(t,e.key,e.value)};else if(e instanceof cc)n={delete:Lh(t,e.key)};else if(e instanceof is)n={update:jy(t,e.key,e.data),updateMask:KS(e.fieldMask)};else{if(!(e instanceof TS))return ie();n={verify:Lh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Su)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie()}(t,e.precondition)),n}function MS(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Vn(s.updateTime):Vn(i);return o.isEqual(oe.min())&&(o=Vn(i)),new wS(o,s.transformResults||[])}(n,e))):[]}function US(t,e){return{documents:[Uw(t,e.path)]}}function FS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Uw(t,s);const i=function(h){if(h.length!==0)return Bw(An.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(g){return{field:ri(g.field),direction:$S(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=jh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function zS(t){let e=qS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=zw(m);return g instanceof An&&vw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(b){return new pa(si(b.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,sc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,A=m.values||[];return new ku(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,A=m.values||[];return new ku(A,g)}(n.endAt)),oS(e,s,o,i,l,"F",u,h)}function BS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=si(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=si(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=si(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(si(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>zw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function $S(t){return CS[t]}function WS(t){return PS[t]}function HS(t){return DS[t]}function ri(t){return{fieldPath:t.canonicalString()}}function si(t){return lt.fromServerFormat(t.fieldPath)}function Bw(t){return t instanceof Ye?function(n){if(n.op==="=="){if(Ey(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if(wy(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ey(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if(wy(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:WS(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(s=>Bw(s));return r.length===1?r[0]:{compositeFilter:{op:HS(n.op),filters:r}}}(t):ie()}function KS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $w(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Lr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),l=ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GS{constructor(e){this.ct=e}}function QS(t){const e=zS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Au(e,e.limit,"L"):e}/**
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
 */class YS{constructor(){this.un=new XS}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Jr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class XS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(De.comparator)).toArray()}}/**
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
 */class JS{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class e2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zo(r.mutation,s,Gt.empty(),et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=As();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ao();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=As();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=pr();const o=Fo(),l=function(){return Fo()}();return n.forEach((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof is)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),zo(p.mutation,h,p.mutation.getFieldMask(),et.now())):o.set(h.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var m;return l.set(h,new ZS(p,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Fo();let s=new Me((o,l)=>o-l),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||Gt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(s.get(l.batchId)||de()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=Sw();p.forEach(g=>{if(!i.has(g)){const A=Dw(n.get(g),r.get(g));A!==null&&m.set(g,A),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(As());let l=-1,u=i;return o.next(h=>U.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?U.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,de())).next(p=>({batchId:l,changes:Aw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let s=Ao();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,u=>{const h=function(m,g){return new Hi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,xt.newInvalidDocument(p)))});let l=Ao();return o.forEach((u,h)=>{const p=i.get(u);p!==void 0&&zo(p.mutation,h,Gt.empty(),et.now()),ac(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Vn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:QS(s.bundledQuery),readTime:Vn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class n2{constructor(){this.overlays=new Me(ee.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=As();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=As(),i=n.length+1,o=new ee(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=As(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=As(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kS(n,r));let i=this.Ir.get(n);i===void 0&&(i=de(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class r2{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class ap{constructor(){this.Tr=new ct(tt.Er),this.dr=new ct(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ee(new De([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ee(new De([])),r=new tt(n,e),s=new tt(n,e+1);let i=de();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ee.comparator(e.key,n.key)||xe(e.wr,n.wr)}static Ar(e,n){return xe(e.wr,n.wr)||ee.comparator(e.key,n.key)}}/**
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
 */class s2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(tt.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(xe);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new tt(new ee(i),0);let l=new ct(xe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class i2{constructor(e){this.Mr=e,this.docs=function(){return new Me(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=pr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=pr();const o=n.path,l=new ee(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||FA(UA(p),r)<=0||(s.has(p.key)||ac(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new o2(this)}getSize(e){return U.resolve(this.size)}}class o2 extends JS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class a2{constructor(e){this.persistence=e,this.Nr=new Ki(n=>tp(n),np),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ap,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class l2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Xf(0),this.Kr=!1,this.Kr=!0,this.$r=new r2,this.referenceDelegate=e(this),this.Ur=new a2(this),this.indexManager=new YS,this.remoteDocumentCache=function(s){return new i2(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new GS(n),this.Gr=new t2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new n2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new s2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new u2(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class u2 extends BA{constructor(e){super(),this.currentSequenceNumber=e}}class lp{constructor(e){this.persistence=e,this.Jr=new ap,this.Yr=null}static Zr(e){return new lp(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=ee.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class up{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new up(e,n.fromCache,r,s)}}/**
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
 */class c2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class d2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return dk()?8:$A(kt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new c2;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(yo()<=fe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(yo()<=fe.DEBUG&&X("QueryEngine","Query:",ni(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(yo()<=fe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):U.resolve())}Yi(e,n){if(ky(n))return U.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Au(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=de(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Au(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return ky(n)||s.isEqual(oe.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(yo()<=fe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ni(n)),this.rs(e,o,n,MA(s,-1)).next(l=>l))})}ts(e,n){let r=new ct(Iw(e));return n.forEach((s,i)=>{ac(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return yo()<=fe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ni(n)),this.Ji.getDocumentsMatchingQuery(e,n,Jr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Me(xe),this._s=new Ki(i=>tp(i),np),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function f2(t,e,n,r){return new h2(t,e,n,r)}async function Ww(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=de();for(const h of s){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function p2(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,g=m.keys();let A=U.resolve();return g.forEach(b=>{A=A.next(()=>p.getEntry(u,b)).next(R=>{const N=h.docVersions.get(b);Ie(N!==null),R.version.compareTo(N)<0&&(m.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),p.addEntry(R)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=de();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hw(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function m2(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(ht.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),s=s.insert(m,A),function(R,N,w){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,A,p)&&l.push(n.Ur.updateTargetData(i,A))});let u=pr(),h=de();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(g2(i,o,e.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!r.isEqual(oe.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function g2(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=pr();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function y2(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function v2(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Mh(t,e,n){const r=ae(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ba(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function qy(t,e,n){const r=ae(t);let s=oe.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const m=ae(u),g=m._s.get(p);return g!==void 0?U.resolve(m.os.get(g)):m.Ur.getTargetData(h,p)}(r,o,Ln(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:de())).next(l=>(_2(r,lS(e),l),{documents:l,Ts:i})))}function _2(t,e,n){let r=t.us.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Ly{constructor(){this.activeTargetIds=pS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w2{constructor(){this.so=new Ly,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ly,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class E2{_o(e){}shutdown(){}}/**
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
 */class Vy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tl=null;function gd(){return Tl===null?Tl=function(){return 268435456+Math.round(2147483648*Math.random())}():Tl++,"0x"+Tl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class T2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const _t="WebChannelConnection";class I2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=gd(),u=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(p=>(X("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Oi("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=x2[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=gd();return new Promise((o,l)=>{const u=new ow;u.setWithCredentials(!0),u.listenOnce(aw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ul.NO_ERROR:const p=u.getResponseJson();X(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case Ul.TIMEOUT:X(_t,`RPC '${e}' ${i} timed out`),l(new G(q.DEADLINE_EXCEEDED,"Request time out"));break;case Ul.HTTP_ERROR:const m=u.getStatus();if(X(_t,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g==null?void 0:g.error;if(A&&A.status&&A.message){const b=function(N){const w=N.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(w)>=0?w:q.UNKNOWN}(A.status);l(new G(b,A.message))}else l(new G(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(q.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{X(_t,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(_t,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=gd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cw(),l=uw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");X(_t,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,A=!1;const b=new T2({Io:N=>{A?X(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(X(_t,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),X(_t,`RPC '${e}' stream ${s} sending:`,N),m.send(N))},To:()=>m.close()}),R=(N,w,_)=>{N.listen(w,k=>{try{_(k)}catch(O){setTimeout(()=>{throw O},0)}})};return R(m,ko.EventType.OPEN,()=>{A||(X(_t,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),R(m,ko.EventType.CLOSE,()=>{A||(A=!0,X(_t,`RPC '${e}' stream ${s} transport closed`),b.So())}),R(m,ko.EventType.ERROR,N=>{A||(A=!0,Oi(_t,`RPC '${e}' stream ${s} transport errored:`,N),b.So(new G(q.UNAVAILABLE,"The operation could not be completed")))}),R(m,ko.EventType.MESSAGE,N=>{var w;if(!A){const _=N.data[0];Ie(!!_);const k=_,O=k.error||((w=k[0])===null||w===void 0?void 0:w.error);if(O){X(_t,`RPC '${e}' stream ${s} received error:`,O);const M=O.status;let z=function(E){const I=Ge[E];if(I!==void 0)return jw(I)}(M),x=O.message;z===void 0&&(z=q.INTERNAL,x="Unknown error status: "+M+" with message "+O.message),A=!0,b.So(new G(z,x)),m.close()}else X(_t,`RPC '${e}' stream ${s} received:`,_),b.bo(_)}}),R(l,lw.STAT_EVENT,N=>{N.stat===Rh.PROXY?X(_t,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Rh.NOPROXY&&X(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function yd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){return new OS(t,!0)}/**
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
 */class Kw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Gw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Kw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new G(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class k2 extends Gw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=LS(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Vn(o.readTime):oe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Vh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Dh(u)?{documents:US(i,u)}:{query:FS(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Vw(i,o.resumeToken);const h=jh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(oe.min())>0){l.readTime=bu(i,o.snapshotVersion.toTimestamp());const h=jh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=BS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Vh(this.serializer),n.removeTarget=e,this.a_(n)}}class A2 extends Gw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=MS(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Vh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>VS(this.serializer,r))};this.a_(n)}}/**
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
 */class S2 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new G(q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,qh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(q.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,qh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(q.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class b2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class R2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qs(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ae(u);h.L_.add(4),await Ca(h),h.q_.set("Unknown"),h.L_.delete(4),await fc(h)}(this))})}),this.q_=new b2(r,s)}}async function fc(t){if(Qs(t))for(const e of t.B_)await e(!0)}async function Ca(t){for(const e of t.B_)await e(!1)}function Qw(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),fp(n)?hp(n):Gi(n).r_()&&dp(n,e))}function cp(t,e){const n=ae(t),r=Gi(n);n.N_.delete(e),r.r_()&&Yw(n,e),n.N_.size===0&&(r.r_()?r.o_():Qs(n)&&n.q_.set("Unknown"))}function dp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gi(t).A_(e)}function Yw(t,e){t.Q_.xe(e),Gi(t).R_(e)}function hp(t){t.Q_=new NS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gi(t).start(),t.q_.v_()}function fp(t){return Qs(t)&&!Gi(t).n_()&&t.N_.size>0}function Qs(t){return ae(t).L_.size===0}function Xw(t){t.Q_=void 0}async function N2(t){t.q_.set("Online")}async function C2(t){t.N_.forEach((e,n)=>{dp(t,e)})}async function P2(t,e){Xw(t),fp(t)?(t.q_.M_(e),hp(t)):t.q_.set("Unknown")}async function D2(t,e,n){if(t.q_.set("Online"),e instanceof Lw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ru(t,r)}else if(e instanceof Bl?t.Q_.Ke(e):e instanceof qw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(oe.min()))try{const r=await Hw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(h);p&&i.N_.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(ht.EMPTY_BYTE_STRING,p.snapshotVersion)),Yw(i,u);const m=new Lr(p.target,u,h,p.sequenceNumber);dp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Ru(t,r)}}async function Ru(t,e,n){if(!ba(e))throw e;t.L_.add(1),await Ca(t),t.q_.set("Offline"),n||(n=()=>Hw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await fc(t)})}function Jw(t,e){return e().catch(n=>Ru(t,n,e))}async function pc(t){const e=ae(t),n=es(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;O2(e);)try{const s=await y2(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,j2(e,s)}catch(s){await Ru(e,s)}Zw(e)&&eE(e)}function O2(t){return Qs(t)&&t.O_.length<10}function j2(t,e){t.O_.push(e);const n=es(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Zw(t){return Qs(t)&&!es(t).n_()&&t.O_.length>0}function eE(t){es(t).start()}async function q2(t){es(t).p_()}async function L2(t){const e=es(t);for(const n of t.O_)e.m_(n.mutations)}async function V2(t,e,n){const r=t.O_.shift(),s=sp.from(r,e,n);await Jw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pc(t)}async function M2(t,e){e&&es(t).V_&&await async function(r,s){if(function(o){return SS(o)&&o!==q.ABORTED}(s.code)){const i=r.O_.shift();es(r).s_(),await Jw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pc(r)}}(t,e),Zw(t)&&eE(t)}async function My(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Qs(n);n.L_.add(3),await Ca(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await fc(n)}async function U2(t,e){const n=ae(t);e?(n.L_.delete(2),await fc(n)):e||(n.L_.add(2),await Ca(n),n.q_.set("Unknown"))}function Gi(t){return t.K_||(t.K_=function(n,r,s){const i=ae(n);return i.w_(),new k2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:N2.bind(null,t),Ro:C2.bind(null,t),mo:P2.bind(null,t),d_:D2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),fp(t)?hp(t):t.q_.set("Unknown")):(await t.K_.stop(),Xw(t))})),t.K_}function es(t){return t.U_||(t.U_=function(n,r,s){const i=ae(n);return i.w_(),new A2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:q2.bind(null,t),mo:M2.bind(null,t),f_:L2.bind(null,t),g_:V2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await pc(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class pp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new pp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mp(t,e){if(fr("AsyncQueue",`${e}: ${t}`),ba(t))return new G(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Uy{constructor(){this.W_=new Me(ee.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ie():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Mi(e,n,Ti.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class F2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class z2{constructor(){this.queries=Fy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ae(n),i=s.queries;s.queries=Fy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(q.ABORTED,"Firestore shutting down"))}}function Fy(){return new Ki(t=>Tw(t),oc)}async function gp(t,e){const n=ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new F2,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=mp(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&vp(n)}async function yp(t,e){const n=ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function B2(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&vp(n)}function $2(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function vp(t){t.Y_.forEach(e=>{e.next()})}var Uh,zy;(zy=Uh||(Uh={})).ea="default",zy.Cache="cache";class _p{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Uh.Cache}}/**
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
 */class tE{constructor(e){this.key=e}}class nE{constructor(e){this.key=e}}class W2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=de(),this.mutatedKeys=de(),this.Aa=Iw(e),this.Ra=new Ti(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Uy,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),A=ac(this.query,m)?m:null,b=!!g&&this.mutatedKeys.has(g.key),R=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;g&&A?g.data.isEqual(A.data)?b!==R&&(r.track({type:3,doc:A}),N=!0):this.ga(g,A)||(r.track({type:2,doc:A}),N=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),N=!0):g&&!A&&(r.track({type:1,doc:g}),N=!0,(u||h)&&(l=!0)),N&&(A?(o=o.add(A),i=R?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(A,b){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return R(A)-R(b)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Mi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Uy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=de(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new nE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new tE(r))}),n}ba(e){this.Ta=e.Ts,this.da=de();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Mi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class H2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class K2{constructor(e){this.key=e,this.va=!1}}class G2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ki(l=>Tw(l),oc),this.Ma=new Map,this.xa=new Set,this.Oa=new Me(ee.comparator),this.Na=new Map,this.La=new ap,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Q2(t,e,n=!0){const r=lE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await rE(r,e,n,!0),s}async function Y2(t,e){const n=lE(t);await rE(n,e,!0,!1)}async function rE(t,e,n,r){const s=await v2(t.localStore,Ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await X2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Qw(t.remoteStore,s),l}async function X2(t,e,n,r,s){t.Ka=(m,g,A)=>async function(R,N,w,_){let k=N.view.ma(w);k.ns&&(k=await qy(R.localStore,N.query,!1).then(({documents:x})=>N.view.ma(x,k)));const O=_&&_.targetChanges.get(N.targetId),M=_&&_.targetMismatches.get(N.targetId)!=null,z=N.view.applyChanges(k,R.isPrimaryClient,O,M);return $y(R,N.targetId,z.wa),z.snapshot}(t,m,g,A);const i=await qy(t.localStore,e,!0),o=new W2(e,i.Ts),l=o.ma(i.documents),u=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);$y(t,n,h.wa);const p=new H2(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function J2(t,e,n){const r=ae(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!oc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&cp(r.remoteStore,s.targetId),Fh(r,s.targetId)}).catch(Sa)):(Fh(r,s.targetId),await Mh(r.localStore,s.targetId,!0))}async function Z2(t,e){const n=ae(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cp(n.remoteStore,r.targetId))}async function eb(t,e,n){const r=ab(t);try{const s=await function(o,l){const u=ae(o),h=et.now(),p=l.reduce((A,b)=>A.add(b.key),de());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let b=pr(),R=de();return u.cs.getEntries(A,p).next(N=>{b=N,b.forEach((w,_)=>{_.isValidDocument()||(R=R.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,b)).next(N=>{m=N;const w=[];for(const _ of l){const k=xS(_,m.get(_.key).overlayedDocument);k!=null&&w.push(new is(_.key,k,mw(k.value.mapValue),Dt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,w,l)}).next(N=>{g=N;const w=N.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(A,N.batchId,w)})}).then(()=>({batchId:g.batchId,changes:Aw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Me(xe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Pa(r,s.changes),await pc(r.remoteStore)}catch(s){const i=mp(s,"Failed to persist write");n.reject(i)}}async function sE(t,e){const n=ae(t);try{const r=await m2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ie(o.va):s.removedDocuments.size>0&&(Ie(o.va),o.va=!1))}),await Pa(n,r,e)}catch(r){await Sa(r)}}function By(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ae(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&vp(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tb(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Me(ee.comparator);o=o.insert(i,xt.newNoDocument(i,oe.min()));const l=de().add(i),u=new dc(oe.min(),new Map,new Me(xe),o,l);await sE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),wp(r)}else await Mh(r.localStore,e,!1).then(()=>Fh(r,e,n)).catch(Sa)}async function nb(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await p2(n.localStore,e);oE(n,r,null),iE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pa(n,s)}catch(s){await Sa(s)}}async function rb(t,e,n){const r=ae(t);try{const s=await function(o,l){const u=ae(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(Ie(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);oE(r,e,n),iE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pa(r,s)}catch(s){await Sa(s)}}function iE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function oE(t,e,n){const r=ae(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Fh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||aE(t,r)})}function aE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(cp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),wp(t))}function $y(t,e,n){for(const r of n)r instanceof tE?(t.La.addReference(r.key,e),sb(t,r)):r instanceof nE?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||aE(t,r.key)):ie()}function sb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),wp(t))}function wp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ee(De.fromString(e)),r=t.qa.next();t.Na.set(r,new K2(n)),t.Oa=t.Oa.insert(n,r),Qw(t.remoteStore,new Lr(Ln(ic(n.path)),r,"TargetPurposeLimboResolution",Xf.oe))}}async function Pa(t,e,n){const r=ae(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=up.Wi(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const p=ae(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(h,g=>U.forEach(g.$i,A=>p.persistence.referenceDelegate.addReference(m,g.targetId,A)).next(()=>U.forEach(g.Ui,A=>p.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))}catch(m){if(!ba(m))throw m;X("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const A=p.os.get(g),b=A.snapshotVersion,R=A.withLastLimboFreeSnapshotVersion(b);p.os=p.os.insert(g,R)}}}(r.localStore,i))}async function ib(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Ww(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(q.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pa(n,r.hs)}}function ob(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return de().add(r.key);{let s=de();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function lE(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ob.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tb.bind(null,e),e.Ca.d_=B2.bind(null,e.eventManager),e.Ca.$a=$2.bind(null,e.eventManager),e}function ab(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rb.bind(null,e),e}class Nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return f2(this.persistence,new d2,e.initialUser,this.serializer)}Ga(e){return new l2(lp.Zr,this.serializer)}Wa(e){return new w2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nu.provider={build:()=>new Nu};class zh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>By(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ib.bind(null,this.syncEngine),await U2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new z2}()}createDatastore(e){const n=hc(e.databaseInfo.databaseId),r=function(i){return new I2(i)}(e.databaseInfo);return function(i,o,l,u){return new S2(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new R2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>By(this.syncEngine,n,0),function(){return Vy.D()?new Vy:new E2}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,p){const m=new G2(s,i,o,l,u,h);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ae(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ca(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}zh.provider={build:()=>new zh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ep{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class lb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=hw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vd(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ww(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ub(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>My(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>My(e.remoteStore,s)),t._onlineComponents=e}async function ub(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await vd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Oi("Error using user provided cache. Falling back to memory cache: "+n),await vd(t,new Nu)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await vd(t,new Nu);return t._offlineComponents}async function uE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Wy(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Wy(t,new zh))),t._onlineComponents}function cb(t){return uE(t).then(e=>e.syncEngine)}async function Cu(t){const e=await uE(t),n=e.eventManager;return n.onListen=Q2.bind(null,e.syncEngine),n.onUnlisten=J2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Y2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Z2.bind(null,e.syncEngine),n}function db(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new Ep({next:g=>{p.Za(),o.enqueueAndForget(()=>yp(i,m));const A=g.docs.has(l);!A&&g.fromCache?h.reject(new G(q.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?h.reject(new G(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new _p(ic(l.path),p,{includeMetadataChanges:!0,_a:!0});return gp(i,m)}(await Cu(t),t.asyncQueue,e,n,r)),r.promise}function hb(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new Ep({next:g=>{p.Za(),o.enqueueAndForget(()=>yp(i,m)),g.fromCache&&u.source==="server"?h.reject(new G(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new _p(l,p,{includeMetadataChanges:!0,_a:!0});return gp(i,m)}(await Cu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Hy=new Map;/**
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
 */function dE(t,e,n){if(!n)throw new G(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fb(t,e,n,r){if(e===!0&&r===!0)throw new G(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ky(t){if(!ee.isDocumentKey(t))throw new G(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gy(t){if(ee.isDocumentKey(t))throw new G(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mc(t);throw new G(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NA;switch(r.type){case"firstParty":return new OA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hy.get(n);r&&(X("ComponentProvider","Removing Datastore"),Hy.delete(n),r.terminate())}(this),Promise.resolve()}}function pb(t,e,n,r={}){var s;const i=(t=Ot(t,gc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=wt.MOCK_USER;else{l=Z_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new G(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new wt(h)}t._authCredentials=new CA(new dw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yr(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Gr extends yr{constructor(e,n,r){super(e,n,ic(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ee(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function Zt(t,e,...n){if(t=be(t),dE("collection","path",e),t instanceof gc){const r=De.fromString(e,...n);return Gy(r),new Gr(t,null,r)}{if(!(t instanceof Tt||t instanceof Gr))throw new G(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Gy(r),new Gr(t.firestore,null,r)}}function ft(t,e,...n){if(t=be(t),arguments.length===1&&(e=hw.newId()),dE("doc","path",e),t instanceof gc){const r=De.fromString(e,...n);return Ky(r),new Tt(t,null,new ee(r))}{if(!(t instanceof Tt||t instanceof Gr))throw new G(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Ky(r),new Tt(t.firestore,t instanceof Gr?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Kw(this,"async_queue_retry"),this.Vu=()=>{const r=yd();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=yd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=yd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new or;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ba(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw fr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=pp.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ie()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Xy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Fn extends gc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Yy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yy(e),this._firestoreClient=void 0,await e}}}function mb(t,e){const n=typeof t=="object"?t:Qf(),r=typeof t=="string"?t:"(default)",s=rc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Y_("firestore");i&&pb(s,...i)}return s}function Da(t){if(t._terminated)throw new G(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gb(t),t._firestoreClient}function gb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,p){return new KA(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,cE(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new lb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ui(ht.fromBase64String(e))}catch(n){throw new G(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ui(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this._methodName=e}}/**
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
 */class xp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */class Tp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const yb=/^__.*__$/;class vb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}class hE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Ip{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ip(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Pu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(fE(this.Cu)&&yb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class _b{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hc(e)}Qu(e,n,r,s=!1){return new Ip({Cu:e,methodName:n,qu:r,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ja(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new _b(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kp(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Sp("Data must be an object, but it was:",o,r);const l=gE(r,o);let u,h;if(i.merge)u=new Gt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=Bh(e,m,n);if(!o.contains(g))throw new G(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);vE(p,g)||p.push(g)}u=new Gt(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new vb(new Ut(l),u,h)}class vc extends yc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}class Ap extends yc{_toFieldTransform(e){return new vS(e.path,new ma)}isEqual(e){return e instanceof Ap}}function pE(t,e,n,r){const s=t.Qu(1,e,n);Sp("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Gs(r,(u,h)=>{const p=bp(e,u,n);h=be(h);const m=s.Nu(p);if(h instanceof vc)i.push(p);else{const g=qa(h,m);g!=null&&(i.push(p),o.set(p,g))}});const l=new Gt(i);return new hE(o,l,s.fieldTransforms)}function mE(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Bh(e,r,n)],u=[s];if(i.length%2!=0)throw new G(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Bh(e,i[g])),u.push(i[g+1]);const h=[],p=Ut.empty();for(let g=l.length-1;g>=0;--g)if(!vE(h,l[g])){const A=l[g];let b=u[g];b=be(b);const R=o.Nu(A);if(b instanceof vc)h.push(A);else{const N=qa(b,R);N!=null&&(h.push(A),p.set(A,N))}}const m=new Gt(h);return new hE(p,m,o.fieldTransforms)}function wb(t,e,n,r=!1){return qa(n,t.Qu(r?4:3,e))}function qa(t,e){if(yE(t=be(t)))return Sp("Unsupported field value:",e,t),gE(t,e);if(t instanceof yc)return function(r,s){if(!fE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=qa(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:bu(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bu(s.serializer,i)}}if(r instanceof xp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ui)return{bytesValue:Vw(s.serializer,r._byteString)};if(r instanceof Tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:op(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return rp(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${mc(r)}`)}(t,e)}function gE(t,e){const n={};return fw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,s)=>{const i=qa(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof xp||t instanceof Ui||t instanceof Tt||t instanceof yc||t instanceof Tp)}function Sp(t,e,n){if(!yE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=mc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Bh(t,e,n){if((e=be(e))instanceof Oa)return e._internalPath;if(typeof e=="string")return bp(t,e);throw Pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Eb=new RegExp("[~\\*/\\[\\]]");function bp(t,e,n){if(e.search(Eb)>=0)throw Pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oa(...e.split("."))._internalPath}catch{throw Pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new G(q.INVALID_ARGUMENT,l+t+u)}function vE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xb extends _E{data(){return super.data()}}function _c(t,e){return typeof e=="string"?bp(t,e):e instanceof Oa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rp{}class Np extends Rp{}function zn(t,e,...n){let r=[];e instanceof Rp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Cp).length,l=i.filter(u=>u instanceof wc).length;if(o>1||o>0&&l>0)throw new G(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wc extends Np{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wc(e,n,r)}_apply(e){const n=this._parse(e);return xE(e._query,n),new yr(e.firestore,e.converter,Oh(e._query,n))}_parse(e){const n=ja(e.firestore);return function(i,o,l,u,h,p,m){let g;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new G(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Zy(m,p);const A=[];for(const b of m)A.push(Jy(u,i,b));g={arrayValue:{values:A}}}else g=Jy(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Zy(m,p),g=wb(l,o,m,p==="in"||p==="not-in");return Ye.create(h,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Fs(t,e,n){const r=e,s=_c("where",t);return wc._create(s,r,n)}class Cp extends Rp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:An.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)xE(o,u),o=Oh(o,u)}(e._query,n),new yr(e.firestore,e.converter,Oh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pp extends Np{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Pp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new G(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pa(i,o)}(e._query,this._field,this._direction);return new yr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Hi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Dp(t,e="asc"){const n=e,r=_c("orderBy",t);return Pp._create(r,n)}class Op extends Np{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Op(e,n,r)}_apply(e){return new yr(e.firestore,e.converter,Au(e._query,this._limit,this._limitType))}}function EE(t){return Op._create("limit",t,"F")}function Jy(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new G(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xw(e)&&n.indexOf("/")!==-1)throw new G(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!ee.isDocumentKey(r))throw new G(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _y(t,new ee(r))}if(n instanceof Tt)return _y(t,n._key);throw new G(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(n)}.`)}function Zy(t,e){if(!Array.isArray(t)||t.length===0)throw new G(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Tb{convertValue(e,n="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>He(o.doubleValue));return new Tp(i)}convertGeoPoint(e){return new xp(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(da(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ie($w(r));const s=new ha(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||fr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TE extends _E{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_c("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $l extends TE{data(e={}){return super.data(e)}}class IE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new bo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $l(this._firestore,this._userDataWriter,r.key,r,new bo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new $l(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new $l(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:Ib(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ib(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){t=Ot(t,Tt);const e=Ot(t.firestore,Fn);return db(Da(e),t._key).then(n=>kE(e,t,n))}class qp extends Tb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function ts(t){t=Ot(t,yr);const e=Ot(t.firestore,Fn),n=Da(e),r=new qp(e);return wE(t._query),hb(n,t._query).then(s=>new IE(e,r,t,s))}function Ec(t,e,n){t=Ot(t,Tt);const r=Ot(t.firestore,Fn),s=jp(t.converter,e,n);return Va(r,[kp(ja(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dt.none())])}function vr(t,e,n,...r){t=Ot(t,Tt);const s=Ot(t.firestore,Fn),i=ja(s);let o;return o=typeof(e=be(e))=="string"||e instanceof Oa?mE(i,"updateDoc",t._key,e,n,r):pE(i,"updateDoc",t._key,e),Va(s,[o.toMutation(t._key,Dt.exists(!0))])}function kb(t){return Va(Ot(t.firestore,Fn),[new cc(t._key,Dt.none())])}function Lp(t,e){const n=Ot(t.firestore,Fn),r=ft(t),s=jp(t.converter,e);return Va(n,[kp(ja(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function xc(t,...e){var n,r,s;t=be(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Xy(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Xy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,p;if(t instanceof Tt)h=Ot(t.firestore,Fn),p=ic(t._key.path),u={next:m=>{e[o]&&e[o](kE(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Ot(t,yr);h=Ot(m.firestore,Fn),p=m._query;const g=new qp(h);u={next:A=>{e[o]&&e[o](new IE(h,g,m,A))},error:e[o+1],complete:e[o+2]},wE(t._query)}return function(g,A,b,R){const N=new Ep(R),w=new _p(A,N,b);return g.asyncQueue.enqueueAndForget(async()=>gp(await Cu(g),w)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>yp(await Cu(g),w))}}(Da(h),p,l,u)}function Va(t,e){return function(r,s){const i=new or;return r.asyncQueue.enqueueAndForget(async()=>eb(await cb(r),s,i)),i.promise}(Da(t),e)}function kE(t,e,n){const r=n.docs.get(e._key),s=new qp(t);return new TE(t,s,e._key,r,new bo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ja(e)}set(e,n,r){this._verifyNotCommitted();const s=_d(e,this._firestore),i=jp(s.converter,n,r),o=kp(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Dt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=_d(e,this._firestore);let o;return o=typeof(n=be(n))=="string"||n instanceof Oa?mE(this._dataReader,"WriteBatch.update",i._key,n,r,s):pE(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Dt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=_d(e,this._firestore);return this._mutations=this._mutations.concat(new cc(n._key,Dt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _d(t,e){if((t=be(t)).firestore!==e)throw new G(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function un(){return new Ap("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t){return Da(t=Ot(t,Fn)),new Ab(t,e=>Va(t,e))}(function(e,n=!0){(function(s){Wi=s})(Ks),Ls(new Xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Fn(new PA(r.getProvider("auth-internal")),new qA(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(h.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),qn(py,"4.7.3",e),qn(py,"4.7.3","esm2017")})();function Vp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function SE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sb=SE,bE=new ka("auth","Firebase",SE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Kf("@firebase/auth");function bb(t,...e){Du.logLevel<=fe.WARN&&Du.warn(`Auth (${Ks}): ${t}`,...e)}function Wl(t,...e){Du.logLevel<=fe.ERROR&&Du.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw Up(t,...e)}function In(t,...e){return Up(t,...e)}function Mp(t,e,n){const r=Object.assign(Object.assign({},Sb()),{[e]:n});return new ka("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return Mp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),Mp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Up(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bE.create(t,...e)}function re(t,e,...n){if(!t)throw Up(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wl(e),new Error(e)}function mr(t,e){t||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nb(){return e0()==="http:"||e0()==="https:"}function e0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nb()||lk()||"connection"in navigator)?navigator.onLine:!0}function Pb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=ik()||uk()}get(){return Cb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new Ma(3e4,6e4);function os(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _r(t,e,n,r,s={}){return NE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Aa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return ak()||(h.referrerPolicy="no-referrer"),RE.fetch()(CE(t,t.config.apiHost,n,l),h)})}async function NE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Db),e);try{const s=new qb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Il(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Il(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Il(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Il(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Mp(t,p,h);hn(t,p)}}catch(s){if(s instanceof Bn)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function Ua(t,e,n,r,s={}){const i=await _r(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function CE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Fp(t.config,s):`${t.config.apiScheme}://${s}`}function jb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),Ob.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=In(t,e,r);return s.customData._tokenResponse=n,s}function t0(t){return t!==void 0&&t.enterprise!==void 0}class Lb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Vb(t,e){return _r(t,"GET","/v2/recaptchaConfig",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function PE(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ub(t,e=!1){const n=be(t),r=await n.getIdToken(e),s=zp(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bo(wd(s.auth_time)),issuedAtTime:Bo(wd(s.iat)),expirationTime:Bo(wd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wd(t){return Number(t)*1e3}function zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const s=G_(n);return s?JSON.parse(s):(Wl("Failed to decode base64 JWT payload"),null)}catch(s){return Wl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function n0(t){const e=zp(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&Fb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Fb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bo(this.lastLoginAt),this.creationTime=Bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ou(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fi(t,PE(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?DE(i.providerUserInfo):[],l=$b(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Wh(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function Bb(t){const e=be(t);await Ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $b(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function DE(t){return t.map(e=>{var{providerId:n}=e,r=Vp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e){const n=await NE(t,{},async()=>{const r=Aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=CE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hb(t,e){return _r(t,"POST","/v2/accounts:revokeToken",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):n0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=n0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Wb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ii;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ub(this,e)}reload(){return Bb(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await Fi(this,Mb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,A=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:k,emailVerified:O,isAnonymous:M,providerData:z,stsTokenManager:x}=n;re(k&&x,e,"internal-error");const v=Ii.fromJSON(this.name,x);re(typeof k=="string",e,"internal-error"),Ar(m,e.name),Ar(g,e.name),re(typeof O=="boolean",e,"internal-error"),re(typeof M=="boolean",e,"internal-error"),Ar(A,e.name),Ar(b,e.name),Ar(R,e.name),Ar(N,e.name),Ar(w,e.name),Ar(_,e.name);const E=new nr({uid:k,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:M,photoURL:b,phoneNumber:A,tenantId:R,stsTokenManager:v,createdAt:w,lastLoginAt:_});return z&&Array.isArray(z)&&(E.providerData=z.map(I=>Object.assign({},I))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ii;s.updateFromServerResponse(n);const i=new nr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ou(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?DE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ii;l.updateFromIdToken(r);const u=new nr({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Map;function rr(t){mr(t instanceof Function,"Expected a class definition");let e=r0.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,r0.set(t,e),e)}/**
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
 */class OE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OE.type="NONE";const s0=OE;/**
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
 */function Hl(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ki(rr(s0),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||rr(s0);const o=Hl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){const m=nr._fromJSON(e,p);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ki(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ki(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UE(e))return"Blackberry";if(FE(e))return"Webos";if(qE(e))return"Safari";if((e.includes("chrome/")||LE(e))&&!e.includes("edge/"))return"Chrome";if(ME(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jE(t=kt()){return/firefox\//i.test(t)}function qE(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LE(t=kt()){return/crios\//i.test(t)}function VE(t=kt()){return/iemobile/i.test(t)}function ME(t=kt()){return/android/i.test(t)}function UE(t=kt()){return/blackberry/i.test(t)}function FE(t=kt()){return/webos/i.test(t)}function Bp(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kb(t=kt()){var e;return Bp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gb(){return ck()&&document.documentMode===10}function zE(t=kt()){return Bp(t)||ME(t)||FE(t)||UE(t)||/windows phone/i.test(t)||VE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t,e=[]){let n;switch(t){case"Browser":n=i0(kt());break;case"Worker":n=`${i0(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${r}`}/**
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
 */class Qb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Yb(t,e={}){return _r(t,"GET","/v2/passwordPolicy",os(t,e))}/**
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
 */const Xb=6;class Jb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Xb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new o0(this),this.idTokenSubscription=new o0(this),this.beforeStateQueue=new Qb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await PE(this,{idToken:e}),r=await nr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(En(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(ar(this));const n=e?be(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yb(this),n=new Jb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ka("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function as(t){return be(t)}class o0{constructor(e){this.auth=e,this.observer=null,this.addObserver=vk(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eR(t){Tc=t}function $E(t){return Tc.loadJS(t)}function tR(){return Tc.recaptchaEnterpriseScript}function nR(){return Tc.gapiScript}function rR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sR="recaptcha-enterprise",iR="NO_RECAPTCHA";class oR{constructor(e){this.type=sR,this.auth=as(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Vb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Lb(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;t0(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(iR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&t0(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=tR();u.length!==0&&(u+=l),$E(u).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function a0(t,e,n,r=!1){const s=new oR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hh(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await a0(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await a0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t,e){const n=rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xu(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function lR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uR(t,e,n){const r=as(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=WE(e),{host:o,port:l}=cR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),dR()}function WE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cR(t){const e=WE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:l0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:l0(o)}}}function l0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function hR(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(t,e){return Ua(t,"POST","/v1/accounts:signInWithPassword",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(t,e){return Ua(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}async function mR(t,e){return Ua(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends $p{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new va(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new va(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hh(e,n,"signInWithPassword",fR);case"emailLink":return pR(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hh(e,r,"signUpPassword",hR);case"emailLink":return mR(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e){return Ua(t,"POST","/v1/accounts:signInWithIdp",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="http://localhost";class zs extends $p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:gR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Aa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vR(t){const e=To(Io(t)).link,n=e?To(Io(e)).deep_link_id:null,r=To(Io(t)).deep_link_id;return(r?To(Io(r)).link:null)||r||n||e||t}class Wp{constructor(e){var n,r,s,i,o,l;const u=To(Io(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=yR((s=u.mode)!==null&&s!==void 0?s:null);re(h&&p&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=vR(e);try{return new Wp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.providerId=Qi.PROVIDER_ID}static credential(e,n){return va._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wp.parseLink(n);return re(r,"argument-error"),va._fromEmailAndCode(e,r.code,r.tenantId)}}Qi.PROVIDER_ID="password";Qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fa extends Hp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Fa{constructor(){super("facebook.com")}static credential(e){return zs._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Fa{constructor(){super("github.com")}static credential(e){return zs._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Fa{constructor(){super("twitter.com")}static credential(e,n){return zs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(t,e){return Ua(t,"POST","/v1/accounts:signUp",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nr._fromIdTokenResponse(e,r,s),o=u0(r);return new Bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=u0(r);return new Bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function u0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ju.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ju(e,n,r,s)}}function HE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ju._fromErrorAndOperation(t,i,e,r):i})}async function wR(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bs._forOperation(t,"link",r)}/**
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
 */async function ER(t,e,n=!1){const{auth:r}=t;if(En(r.app))return Promise.reject(ar(r));const s="reauthenticate";try{const i=await Fi(t,HE(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=zp(i.idToken);re(o,r,"internal-error");const{sub:l}=o;return re(t.uid===l,r,"user-mismatch"),Bs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(t,e,n=!1){if(En(t.app))return Promise.reject(ar(t));const r="signIn",s=await HE(t,r,e),i=await Bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xR(t,e){return KE(as(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(t){const e=as(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TR(t,e,n){if(En(t.app))return Promise.reject(ar(t));const r=as(t),o=await Hh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_R).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&GE(t),u}),l=await Bs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function IR(t,e,n){return En(t.app)?Promise.reject(ar(t)):xR(be(t),Qi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&GE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e){return _r(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=be(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fi(r,kR(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t,e){return be(t).setPersistence(e)}function bR(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function RR(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function NR(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function CR(t){return be(t).signOut()}const qu="__sak";/**
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
 */class QE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qu,"1"),this.storage.removeItem(qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=1e3,DR=10;class YE extends QE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Gb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}YE.type="LOCAL";const XE=YE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function OR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await OR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Kp("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function qR(t){Mn().location.href=t}/**
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
 */function ex(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function LR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MR(){return ex()?self:null}/**
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
 */const tx="firebaseLocalStorageDb",UR=1,Lu="firebaseLocalStorage",nx="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Lu],e?"readwrite":"readonly").objectStore(Lu)}function FR(){const t=indexedDB.deleteDatabase(tx);return new za(t).toPromise()}function Kh(){const t=indexedDB.open(tx,UR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lu,{keyPath:nx})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lu)?e(r):(r.close(),await FR(),e(await Kh()))})})}async function c0(t,e,n){const r=kc(t,!0).put({[nx]:e,value:n});return new za(r).toPromise()}async function zR(t,e){const n=kc(t,!1).get(e),r=await new za(n).toPromise();return r===void 0?null:r.value}function d0(t,e){const n=kc(t,!0).delete(e);return new za(n).toPromise()}const BR=800,$R=3;class rx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$R)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ex()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(MR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LR(),!this.activeServiceWorker)return;this.sender=new jR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kh();return await c0(e,qu,"1"),await d0(e,qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>c0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>d0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kc(s,!1).getAll();return new za(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rx.type="LOCAL";const WR=rx;new Ma(3e4,6e4);/**
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
 */function sx(t,e){return e?rr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gp extends $p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HR(t){return KE(t.auth,new Gp(t),t.bypassAuthState)}function KR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),ER(n,new Gp(t),t.bypassAuthState)}async function GR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),wR(n,new Gp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HR;case"linkViaPopup":case"linkViaRedirect":return GR;case"reauthViaPopup":case"reauthViaRedirect":return KR;default:hn(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=new Ma(2e3,1e4);async function YR(t,e,n){if(En(t.app))return Promise.reject(In(t,"operation-not-supported-in-this-environment"));const r=as(t);Rb(t,e,Hp);const s=sx(r,n);return new Ss(r,"signInViaPopup",e,s).executeNotNull()}class Ss extends ix{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QR.get())};e()}}Ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="pendingRedirect",Kl=new Map;class JR extends ix{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Kl.get(this.auth._key());if(!e){try{const r=await ZR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Kl.set(this.auth._key(),e)}return this.bypassAuthState||Kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZR(t,e){const n=nN(e),r=tN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function eN(t,e){Kl.set(t._key(),e)}function tN(t){return rr(t._redirectPersistence)}function nN(t){return Hl(XR,t.config.apiKey,t.name)}async function rN(t,e,n=!1){if(En(t.app))return Promise.reject(ar(t));const r=as(t),s=sx(r,e),o=await new JR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=10*60*1e3;class iN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ox(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sN&&this.cachedEventUids.clear(),this.cachedEventUids.has(h0(e))}saveEventToCache(e){this.cachedEventUids.add(h0(e)),this.lastProcessedEventTime=Date.now()}}function h0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ox({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ox(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uN=/^https?/;async function cN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aN(t);for(const n of e)try{if(dN(n))return}catch{}hn(t,"unauthorized-domain")}function dN(t){const e=$h(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uN.test(n))return!1;if(lN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const hN=new Ma(3e4,6e4);function f0(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fN(t){return new Promise((e,n)=>{var r,s,i;function o(){f0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{f0(),n(In(t,"network-request-failed"))},timeout:hN.get()})}if(!((s=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Mn().gapi)===null||i===void 0)&&i.load)o();else{const l=rR("iframefcb");return Mn()[l]=()=>{gapi.load?o():n(In(t,"network-request-failed"))},$E(`${nR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Gl=null,e})}let Gl=null;function pN(t){return Gl=Gl||fN(t),Gl}/**
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
 */const mN=new Ma(5e3,15e3),gN="__/auth/iframe",yN="emulator/auth/iframe",vN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_N=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wN(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fp(e,yN):`https://${t.config.authDomain}/${gN}`,r={apiKey:e.apiKey,appName:t.name,v:Ks},s=_N.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Aa(r).slice(1)}`}async function EN(t){const e=await pN(t),n=Mn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:wN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),l=Mn().setTimeout(()=>{i(o)},mN.get());function u(){Mn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const xN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TN=500,IN=600,kN="_blank",AN="http://localhost";class p0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SN(t,e,n,r=TN,s=IN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},xN),{width:r.toString(),height:s.toString(),top:i,left:o}),h=kt().toLowerCase();n&&(l=LE(h)?kN:n),jE(h)&&(e=e||AN,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[A,b])=>`${g}${A}=${b},`,"");if(Kb(h)&&l!=="_self")return bN(e||"",l),new p0(null);const m=window.open(e||"",l,p);re(m,t,"popup-blocked");try{m.focus()}catch{}return new p0(m)}function bN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const RN="__/auth/handler",NN="emulator/auth/handler",CN=encodeURIComponent("fac");async function m0(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ks,eventId:s};if(e instanceof Hp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Fa){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${CN}=${encodeURIComponent(u)}`:"";return`${PN(t)}?${Aa(l).slice(1)}${h}`}function PN({config:t}){return t.emulator?Fp(t,NN):`https://${t.authDomain}/${RN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="webStorageSupport";class DN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZE,this._completeRedirectFn=rN,this._overrideRedirectResult=eN}async _openPopup(e,n,r,s){var i;mr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await m0(e,n,r,$h(),s);return SN(e,o,Kp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await m0(e,n,r,$h(),s);return qR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await EN(e),r=new iN(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ed,{type:Ed},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ed];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zE()||qE()||Bp()}}const ON=DN;var g0="@firebase/auth",y0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LN(t){Ls(new Xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BE(t)},h=new Zb(r,s,i,u);return lR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ls(new Xr("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(r=>new jN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(g0,y0,qN(t)),qn(g0,y0,"esm2017")}/**
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
 */const VN=5*60,MN=J_("authIdTokenMaxAge")||VN;let v0=null;const UN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MN)return;const s=n==null?void 0:n.token;v0!==s&&(v0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FN(t=Qf()){const e=rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aR(t,{popupRedirectResolver:ON,persistence:[WR,XE,ZE]}),r=J_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=UN(i.toString());RR(n,o,()=>o(n.currentUser)),bR(n,l=>o(l))}}const s=Q_("auth");return s&&uR(n,`http://${s}`),n}function zN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=In("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LN("Browser");/**
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
 */const ax="firebasestorage.googleapis.com",lx="storageBucket",BN=2*60*1e3,$N=10*60*1e3;/**
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
 */class Be extends Bn{constructor(e,n,r=0){super(xd(e),`Firebase Storage: ${n} (${xd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ze||(ze={}));function xd(t){return"storage/"+t}function Qp(){const t="An unknown error occurred, please check the error payload for server response.";return new Be(ze.UNKNOWN,t)}function WN(t){return new Be(ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function HN(t){return new Be(ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be(ze.UNAUTHENTICATED,t)}function GN(){return new Be(ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function QN(t){return new Be(ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function YN(){return new Be(ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XN(){return new Be(ze.CANCELED,"User canceled the upload/download.")}function JN(t){return new Be(ze.INVALID_URL,"Invalid URL '"+t+"'.")}function ZN(t){return new Be(ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function eC(){return new Be(ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+lx+"' property when initializing the app?")}function tC(){return new Be(ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function nC(){return new Be(ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rC(t){return new Be(ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gh(t){return new Be(ze.INVALID_ARGUMENT,t)}function ux(){return new Be(ze.APP_DELETED,"The Firebase app was deleted.")}function sC(t){return new Be(ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $o(t,e){return new Be(ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function vo(t){throw new Be(ze.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(r.path==="")return r;throw ZN(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${p}/b/${s}/o${g}`,"i"),b={bucket:1,path:3},R=n===ax?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",w=new RegExp(`^https?://${R}/${s}/${N}`,"i"),k=[{regex:l,indices:u,postModify:i},{regex:A,indices:b,postModify:h},{regex:w,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<k.length;O++){const M=k[O],z=M.regex.exec(e);if(z){const x=z[M.indices.bucket];let v=z[M.indices.path];v||(v=""),r=new Qt(x,v),M.postModify(r);break}}if(r==null)throw JN(e);return r}}class iC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function oC(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function p(...N){h||(h=!0,e.apply(null,N))}function m(N){s=setTimeout(()=>{s=null,t(A,u())},N)}function g(){i&&clearTimeout(i)}function A(N,...w){if(h){g();return}if(N){g(),p.call(null,N,...w);return}if(u()||o){g(),p.call(null,N,...w);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,m(k)}let b=!1;function R(N){b||(b=!0,g(),!h&&(s!==null?(N||(l=2),clearTimeout(s),m(0)):N||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function aC(t){t(!1)}/**
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
 */function lC(t){return t!==void 0}function uC(t){return typeof t=="object"&&!Array.isArray(t)}function Yp(t){return typeof t=="string"||t instanceof String}function _0(t){return Xp()&&t instanceof Blob}function Xp(){return typeof Blob<"u"}function w0(t,e,n,r){if(r<e)throw Gh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Jp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function cx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Cs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Cs||(Cs={}));/**
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
 */function cC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class dC{constructor(e,n,r,s,i,o,l,u,h,p,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,b)=>{this.resolve_=A,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new kl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Cs.NO_ERROR,u=i.getStatus();if(!l||cC(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Cs.ABORT;r(!1,new kl(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new kl(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());lC(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Qp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?ux():XN();o(u)}else{const u=YN();o(u)}};this.canceled_?n(!1,new kl(!1,null,!0)):this.backoffId_=oC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class kl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gC(t,e,n,r,s,i,o=!0){const l=cx(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return pC(h,e),hC(h,n),fC(h,i),mC(h,r),new dC(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function yC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vC(...t){const e=yC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xp())return new Blob(t);throw new Be(ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _C(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function wC(t){if(typeof atob>"u")throw rC("base-64");return atob(t)}/**
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
 */const Dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Td{constructor(e,n){this.data=e,this.contentType=n||null}}function EC(t,e){switch(t){case Dn.RAW:return new Td(dx(e));case Dn.BASE64:case Dn.BASE64URL:return new Td(hx(t,e));case Dn.DATA_URL:return new Td(TC(e),IC(e))}throw Qp()}function dx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function xC(t){let e;try{e=decodeURIComponent(t)}catch{throw $o(Dn.DATA_URL,"Malformed data URL.")}return dx(e)}function hx(t,e){switch(t){case Dn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw $o(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Dn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw $o(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=wC(e)}catch(s){throw s.message.includes("polyfill")?s:$o(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class fx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw $o(Dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function TC(t){const e=new fx(t);return e.base64?hx(Dn.BASE64,e.rest):xC(e.rest)}function IC(t){return new fx(t).contentType}function kC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Or{constructor(e,n){let r=0,s="";_0(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(_0(this.data_)){const r=this.data_,s=_C(r,e,n);return s===null?null:new Or(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Or(r,!0)}}static getBlob(...e){if(Xp()){const n=e.map(r=>r instanceof Or?r.data_:r);return new Or(vC.apply(null,n))}else{const n=e.map(o=>Yp(o)?EC(Dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Or(s,!0)}}uploadData(){return this.data_}}/**
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
 */function px(t){let e;try{e=JSON.parse(t)}catch{return null}return uC(e)?e:null}/**
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
 */function AC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function bC(t,e){return e}class Nt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||bC}}let Al=null;function RC(t){return!Yp(t)||t.length<2?t:mx(t)}function gx(){if(Al)return Al;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(i,o){return RC(o)}const n=new Nt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Nt("size");return s.xform=r,t.push(s),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),Al=t,Al}function NC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Qt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function CC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return NC(r,t),r}function yx(t,e,n){const r=px(e);return r===null?null:CC(t,r,n)}function PC(t,e,n,r){const s=px(e);if(s===null||!Yp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const p=t.bucket,m=t.fullPath,g="/b/"+o(p)+"/o/"+o(m),A=Jp(g,n,r),b=cx({alt:"media",token:h});return A+b})[0]}function DC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class vx{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _x(t){if(!t)throw Qp()}function OC(t,e){function n(r,s){const i=yx(t,s,e);return _x(i!==null),i}return n}function jC(t,e){function n(r,s){const i=yx(t,s,e);return _x(i!==null),PC(i,s,t.host,t._protocol)}return n}function wx(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=GN():s=KN():n.getStatus()===402?s=HN(t.bucket):n.getStatus()===403?s=QN(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function qC(t){const e=wx(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=WN(t.path)),i.serverResponse=s.serverResponse,i}return n}function LC(t,e,n){const r=e.fullServerUrl(),s=Jp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new vx(s,i,jC(t,n),o);return l.errorHandler=qC(e),l}function VC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function MC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=VC(null,e)),r}function UC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let O=0;O<2;O++)k=k+Math.random().toString().slice(2);return k}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=MC(e,r,s),p=DC(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",A=Or.getBlob(m,r,g);if(A===null)throw tC();const b={name:h.fullPath},R=Jp(i,t.host,t._protocol),N="POST",w=t.maxUploadRetryTime,_=new vx(R,N,OC(t,n),w);return _.urlParams=b,_.headers=o,_.body=A.uploadData(),_.errorHandler=wx(e),_}class FC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Cs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Cs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw vo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zC extends FC{initXhr(){this.xhr_.responseType="text"}}function Ex(){return new zC}/**
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
 */class $s{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $s(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mx(this._location.path)}get storage(){return this._service}get parent(){const e=AC(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new $s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sC(e)}}function BC(t,e,n){t._throwIfRoot("uploadBytes");const r=UC(t.storage,t._location,gx(),new Or(e,!0),n);return t.storage.makeRequestWithTokens(r,Ex).then(s=>({metadata:s,ref:t}))}function $C(t){t._throwIfRoot("getDownloadURL");const e=LC(t.storage,t._location,gx());return t.storage.makeRequestWithTokens(e,Ex).then(n=>{if(n===null)throw nC();return n})}function WC(t,e){const n=SC(t._location.path,e),r=new Qt(t._location.bucket,n);return new $s(t.storage,r)}/**
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
 */function HC(t){return/^[A-Za-z]+:\/\//.test(t)}function KC(t,e){return new $s(t,e)}function xx(t,e){if(t instanceof Zp){const n=t;if(n._bucket==null)throw eC();const r=new $s(n,n._bucket);return e!=null?xx(r,e):r}else return e!==void 0?WC(t,e):t}function GC(t,e){if(e&&HC(e)){if(t instanceof Zp)return KC(t,e);throw Gh("To use ref(service, url), the first argument must be a Storage instance.")}else return xx(t,e)}function E0(t,e){const n=e==null?void 0:e[lx];return n==null?null:Qt.makeFromBucketSpec(n,t)}function QC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Z_(s,t.app.options.projectId))}class Zp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ax,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BN,this._maxUploadRetryTime=$N,this._requests=new Set,s!=null?this._bucket=Qt.makeFromBucketSpec(s,this._host):this._bucket=E0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=E0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){w0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){w0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $s(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new iC(ux());{const o=gC(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const x0="@firebase/storage",T0="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="storage";function YC(t,e,n){return t=be(t),BC(t,e,n)}function XC(t){return t=be(t),$C(t)}function JC(t,e){return t=be(t),GC(t,e)}function ZC(t=Qf(),e){t=be(t);const r=rc(t,Tx).getImmediate({identifier:e}),s=Y_("storage");return s&&eP(r,...s),r}function eP(t,e,n,r={}){QC(t,e,n,r)}function tP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Zp(n,r,s,e,Ks)}function nP(){Ls(new Xr(Tx,tP,"PUBLIC").setMultipleInstances(!0)),qn(x0,T0,""),qn(x0,T0,"esm2017")}nP();const rP={apiKey:"AIzaSyCiTAiDphBPNjd4dKwEYArGY8pXWf55sZQ",authDomain:"irangram-79830.firebaseapp.com",projectId:"irangram-79830",storageBucket:"irangram-79830.firebasestorage.app",messagingSenderId:"355877653612",appId:"1:355877653612:web:5512841c0ab55b6b011c49",measurementId:"G-RZWEBR7XJ7"};let Sl,Z=null,fn=null,Vu=null;try{Sl=nw(rP),Z=mb(Sl),fn=FN(Sl);try{Vu=ZC(Sl)}catch(t){console.warn("Firebase Storage not available. File uploads will be disabled.",t),Vu=null}SR(fn,XE).catch(t=>{console.error("Firebase Persistence Error:",t)}),console.log("Firebase Connected Successfully")}catch(t){console.error("Firebase Initialization Error:",t)}var I0={};const Yt={USE_REAL_SERVER:!1,API_BASE_URL:I0.REACT_APP_API_URL||"http://localhost:5000/api",SOCKET_URL:I0.REACT_APP_SOCKET_URL||"http://localhost:5000",APP_NAME:"ایران‌گرام",VERSION:"1.7.0",OWNER_EMAIL:"amirrezaveisi45@gmail.com"},sP=t=>fn?NR(fn,t):()=>{},iP=async(t,e,n,r)=>{if(!fn)throw new Error("Auth not initialized");const i=(await TR(fn,t,e)).user,o=t===Yt.OWNER_EMAIL?"owner":"user";return await AR(i,{displayName:n}),Z&&await Ec(ft(Z,"users",i.uid),{name:n,email:t,phone:r,username:t.split("@")[0],bio:"کاربر جدید ایران‌گرام",avatar:`https://ui-avatars.com/api/?name=${n}&background=random&color=fff&size=128`,role:o,isBanned:!1,createdAt:un(),lastSeen:un(),status:"online"}),i},oP=async(t,e)=>{if(!fn)throw new Error("Auth not initialized");const n=await IR(fn,t,e);if(Z&&n.user){const r=ft(Z,"users",n.user.uid),s={status:"online",lastSeen:un()};t===Yt.OWNER_EMAIL&&(s.role="owner"),vr(r,s).catch(i=>console.log("Status update error",i))}return n.user},aP=async()=>{if(!fn)throw new Error("Auth not initialized");const t=new Jn;try{const n=(await YR(fn,t)).user,r=n.email||"",s=r===Yt.OWNER_EMAIL?"owner":"user";if(Z){const i=ft(Z,"users",n.uid);if(!(await La(i)).exists())await Ec(i,{name:n.displayName||"کاربر گوگل",email:r,phone:"",username:r.split("@")[0]||"user",bio:"کاربر جدید ایران‌گرام",avatar:n.photoURL||`https://ui-avatars.com/api/?name=${n.displayName}&background=random&color=fff&size=128`,role:s,isBanned:!1,createdAt:un(),lastSeen:un(),status:"online"});else{const l={status:"online",lastSeen:un()};r===Yt.OWNER_EMAIL&&(l.role="owner"),await vr(i,l).catch(u=>console.log("Status update error",u))}}return n}catch(e){throw console.error("Google Sign-In Error",e),e}},Id=async t=>{fn&&(t&&Z&&await vr(ft(Z,"users",t),{status:"offline",lastSeen:un()}).catch(()=>{}),await CR(fn))},lP=async t=>{if(!Z)return null;try{const e=ft(Z,"users",t),n=await La(e);if(n.exists())return n.data()}catch(e){console.error("Error fetching profile",e)}return null},uP=(t,e)=>{if(!Z)return()=>{};const n=ft(Z,"users",t);return xc(n,r=>{r.exists()&&e({uid:r.id,...r.data()})})},cP=async(t,e)=>{if(!Z)return;const n=ft(Z,"users",t);await vr(n,e)},dP=async t=>{if(!Z)return null;let e=zn(Zt(Z,"users"),Fs("username","==",t.replace("@",""))),n=await ts(e);if(!n.empty){const r=n.docs[0];return{uid:r.id,...r.data()}}if(e=zn(Zt(Z,"users"),Fs("phone","==",t)),n=await ts(e),!n.empty){const r=n.docs[0];return{uid:r.id,...r.data()}}return null},hP=async(t,e)=>{if(!Vu)throw new Error("سرویس ذخیره‌سازی فایل (Storage) در دسترس نیست یا پیکربندی نشده است.");const n=JC(Vu,e),r=await YC(n,t);return await XC(r.ref)},fP=async(t,e,n)=>{if(!Z)return;const r=zn(Zt(Z,"users"),Fs("email","==",Yt.OWNER_EMAIL)),s=await ts(r);let i="";s.empty||(i=s.docs[0].id),i&&await Lp(Zt(Z,"users",i,"notifications"),{title:`درخواست رفع مسدودی: ${e}`,message:n,senderId:t,type:"alert",read:!1,createdAt:un()})},pP=async()=>{if(!Z)return[];try{const t=zn(Zt(Z,"users"),Dp("createdAt","desc"));return(await ts(t)).docs.map(n=>({uid:n.id,...n.data()}))}catch(t){return console.error("Error fetching users",t),[]}},mP=async(t,e)=>{if(!Z)return;const n=ft(Z,"users",t);await vr(n,{role:e})},gP=async(t,e)=>{if(!Z)return;const n=ft(Z,"users",t);await vr(n,{isBanned:!e})},Ix=async t=>{if(Z)try{await kb(ft(Z,"global_chat",t))}catch(e){console.error("Error deleting global message",e)}},yP=async()=>{if(Z)try{const t=zn(Zt(Z,"global_chat")),e=await ts(t),n=AE(Z);let r=0;e.forEach(s=>{n.delete(s.ref),r++,r>=490}),await n.commit(),console.log(`Cleared ${r} messages.`)}catch(t){console.error("Error clearing chat",t)}},kx=async()=>{if(!Z)return[];const t=ft(Z,"settings","wordFilters"),e=await La(t);return e.exists()?e.data().bannedWords||[]:[]},k0=async t=>{if(!Z)return;const e=ft(Z,"settings","wordFilters");await Ec(e,{bannedWords:t},{merge:!0})},vP=async t=>{if(!Z)return[];try{const e=zn(Zt(Z,"global_chat"),Fs("senderId","==",t),Dp("createdAt","desc"),EE(50));return(await ts(e)).docs.map(r=>{const s=r.data();return{id:r.id,...s,timestamp:s.createdAt?s.createdAt.toMillis():Date.now()}})}catch{const n=zn(Zt(Z,"global_chat"),Fs("senderId","==",t));return(await ts(n)).docs.map(s=>({id:s.id,...s.data()}))}},_P=async(t,e,n)=>{if(Z)try{await Lp(Zt(Z,"users",t,"notifications"),{title:e,message:n,type:"alert",read:!1,createdAt:un()})}catch(r){console.error("Error sending notification",r)}},wP=(t,e)=>{if(!Z)return()=>{};const n=zn(Zt(Z,"users",t,"notifications"),Fs("read","==",!1));return xc(n,r=>{const s=r.docs.map(o=>{const l=o.data();return{id:o.id,...l,createdAt:l.createdAt?l.createdAt.toMillis():Date.now()}});s.sort((o,l)=>l.createdAt-o.createdAt);const i=s.slice(0,10);e(i)})},EP=async(t,e)=>{Z&&await vr(ft(Z,"users",t,"notifications",e),{read:!0})},xP=t=>{if(!Z)return()=>{};const e=zn(Zt(Z,"global_chat"),Dp("createdAt","desc"),EE(50));return xc(e,r=>{const s=[];r.forEach(i=>{const o=i.data();s.push({id:i.id,text:o.text,senderId:o.senderId,senderName:o.senderName,senderAvatar:o.senderAvatar,senderRole:o.senderRole||"user",timestamp:o.createdAt?o.createdAt.toMillis():Date.now(),status:"read",type:o.type||"text",imageUrl:o.imageUrl,fileUrl:o.fileUrl,fileName:o.fileName,fileSize:o.fileSize,audioDuration:o.audioDuration,isSticker:o.isSticker,replyToId:o.replyToId,edited:o.edited,reactions:o.reactions||{}})}),t(s.reverse())})},TP=async(t,e)=>{if(!Z){console.error("Database not initialized");return}try{let n=t.text||"";n&&t.type==="text"&&(await kx()).forEach(s=>{const i=new RegExp(s,"gi");n=n.replace(i,"*".repeat(s.length))}),await Lp(Zt(Z,"global_chat"),{text:n,senderId:t.senderId,senderName:e.name,senderAvatar:e.avatar||"",senderRole:e.role||"user",type:t.type||"text",imageUrl:t.imageUrl||null,fileUrl:t.fileUrl||null,fileName:t.fileName||null,fileSize:t.fileSize||null,audioDuration:t.audioDuration||null,isSticker:t.isSticker||!1,replyToId:t.replyToId||null,createdAt:un(),edited:!1,reactions:{}})}catch(n){console.error("Error adding document: ",n)}},IP=async(t,e,n)=>{if(!Z)return;const r=ft(Z,"global_chat",t);try{const s=await La(r);if(s.exists()){const o=s.data().reactions||{},l=o[e]||[];let u={...o};l.includes(n)?(u[e]=l.filter(h=>h!==n),u[e].length===0&&delete u[e]):u[e]=[...l,n],await vr(r,{reactions:u})}}catch(s){console.error("Error toggling reaction:",s)}},kP=t=>{if(!Z)return()=>{};const e=ft(Z,"system","info");return xc(e,n=>{if(n.exists()){const r=n.data();t({currentVersion:r.currentVersion||Yt.VERSION,lastCleanup:r.lastCleanup?r.lastCleanup.toMillis():0})}else Ec(e,{currentVersion:Yt.VERSION,lastCleanup:un()})})},AP=async()=>{if(Z)try{const t=ft(Z,"system","info"),e=await La(t);if(e.exists()){const n=e.data(),r=n.lastCleanup?n.lastCleanup.toMillis():0,s=Date.now();if(s-r>864e5){console.log("Triggering 24h cleanup..."),await vr(t,{lastCleanup:un()});const i=new Date(s-864e5),o=zn(Zt(Z,"global_chat"),Fs("createdAt","<",i)),l=await ts(o),u=AE(Z);let h=0;l.forEach(p=>{u.delete(p.ref),h++}),h>0&&(await u.commit(),console.log(`Cleanup: Deleted ${h} old messages.`))}}}catch(t){console.error("Error in auto cleanup:",t)}},SP=({contacts:t,sessions:e,activeContactId:n,onSelectContact:r,toggleTheme:s,theme:i,userProfile:o,onOpenSettings:l,onOpenAdminPanel:u,onAddContact:h,showInstallButton:p,onInstall:m,storedAccounts:g,onAddAccount:A,onSwitchAccount:b})=>{var ce;const[R,N]=L.useState(""),[w,_]=L.useState(!1),[k,O]=L.useState(!1),[M,z]=L.useState("all"),[x,v]=L.useState(!1),[E,I]=L.useState(""),[S,C]=L.useState(!1),[T,Ne]=L.useState(null),[W,ye]=L.useState(""),pe=L.useRef(null);L.useEffect(()=>{const K=le=>{pe.current&&!pe.current.contains(le.target)&&_(!1)};return document.addEventListener("mousedown",K),()=>document.removeEventListener("mousedown",K)},[]);const B=async()=>{if(!E.trim())return;C(!0),ye(""),Ne(null);const K=await dP(E);K?K.username===o.username?ye("شما نمی‌توانید خودتان را اضافه کنید."):Ne(K):ye("کاربری با این مشخصات یافت نشد."),C(!1)},J=()=>{if(T){const K={id:T.uid,name:T.name,avatar:T.avatar,bio:T.bio,username:"@"+T.username,phone:T.phone,status:"offline",type:"user"};h(K),v(!1),Ne(null),I("")}},ne=t.filter(K=>{const le=K.name.toLowerCase().includes(R.toLowerCase())||K.username.toLowerCase().includes(R.toLowerCase());let Ae=!0;return M==="personal"?Ae=K.type==="user":M==="groups"&&(Ae=K.type==="group"||K.type==="channel"),le&&Ae}),_e=K=>{const le=new Date(K);return Date.now()-K>24*60*60*1e3?le.toLocaleDateString("fa-IR"):le.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"})};return d.jsxs("div",{className:"h-full flex flex-col bg-telegram-bg dark:bg-telegram-bgDark border-l border-telegram-border dark:border-telegram-borderDark relative",children:[d.jsxs("div",{className:`absolute top-0 right-0 h-full w-72 bg-white dark:bg-telegram-secondaryDark z-30 shadow-2xl transform transition-transform duration-300 ease-in-out ${w?"translate-x-0":"translate-x-full"}`,ref:pe,children:[d.jsxs("div",{className:"bg-telegram-primary p-5 flex flex-col justify-end text-white relative overflow-hidden transition-all duration-300",children:[d.jsx("div",{className:"absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"}),d.jsxs("div",{className:"flex justify-between items-start mb-2 relative z-10",children:[d.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-telegram-primary mb-3 text-2xl font-bold shadow-md uppercase overflow-hidden",children:((ce=o.name)==null?void 0:ce.charAt(0))||"U"}),d.jsx("button",{onClick:s,className:"p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors",children:i===xs.DARK?d.jsx(QI,{size:20}):d.jsx(MI,{size:20})})]}),d.jsxs("div",{className:"relative z-10 cursor-pointer",onClick:()=>O(!k),children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsxs("div",{className:"font-bold text-lg truncate flex items-center gap-2",children:[o.name,o.role==="owner"&&d.jsx("span",{className:"bg-yellow-400 text-black text-[10px] px-1.5 rounded-full",children:"Owner"}),o.role==="admin"&&d.jsx("span",{className:"bg-blue-400 text-black text-[10px] px-1.5 rounded-full",children:"Admin"})]}),d.jsx(wh,{size:18,className:`transition-transform duration-300 ${k?"rotate-180":""}`})]}),d.jsx("div",{className:"text-sm opacity-80 font-mono dir-ltr text-right",children:o.phone||o.username})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto",children:[k?d.jsxs("div",{className:"py-2 animate-fade-in",children:[g.filter(K=>K.username!==o.username).map(K=>d.jsxs("button",{onClick:()=>{b(K.uid),_(!1),O(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[d.jsx("img",{src:K.avatar,className:"w-9 h-9 rounded-full bg-gray-200"}),d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"font-bold text-sm",children:K.name}),d.jsxs("div",{className:"text-xs opacity-60",children:["@",K.username]})]})]},K.uid)),d.jsxs("button",{onClick:()=>{A(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[d.jsx("div",{className:"w-9 h-9 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center",children:d.jsx($_,{size:18})}),d.jsx("span",{className:"font-medium",children:"افزودن حساب کاربری"})]})]}):d.jsxs("div",{className:"py-2 flex flex-col animate-fade-in",children:[d.jsxs("button",{onClick:()=>{v(!0),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[d.jsx(ny,{size:22,className:"text-gray-500"}),d.jsx("span",{className:"font-medium",children:"افزودن مخاطب"})]}),d.jsxs("button",{onClick:()=>{r("saved"),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[d.jsx(Xg,{size:22,className:"text-gray-500"}),d.jsx("span",{className:"font-medium",children:"پیام‌های ذخیره شده"})]}),d.jsxs("button",{onClick:()=>{l(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[d.jsx(W_,{size:22,className:"text-gray-500"}),d.jsx("span",{className:"font-medium",children:"تنظیمات"})]}),p&&d.jsxs("button",{onClick:()=>{m(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[d.jsx(tc,{size:22,className:"text-gray-500"}),d.jsx("span",{className:"font-medium",children:"نصب اپلیکیشن"})]}),(o.role==="owner"||o.role==="admin")&&d.jsxs("button",{onClick:()=>{u(),_(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-red-50 dark:hover:bg-red-900/10 text-red-600 dark:text-red-400 transition-colors border-t border-gray-100 dark:border-gray-700 mt-2",children:[d.jsx(Hf,{size:22}),d.jsx("span",{className:"font-bold",children:"پنل مدیریت"})]})]}),d.jsx("div",{className:"mt-auto p-4 border-t border-gray-100 dark:border-gray-700 text-center",children:d.jsx("a",{href:"https://github.com/mrv006",target:"_blank",className:"flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity",children:d.jsxs("div",{className:"flex items-center gap-1 text-xs font-bold font-mono",children:[d.jsx(PI,{size:12}),d.jsx("span",{children:"Mr.V"})]})})})]})]}),w&&d.jsx("div",{className:"absolute inset-0 bg-black/50 z-20 backdrop-blur-sm transition-opacity",onClick:()=>_(!1)}),x&&d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",children:d.jsxs("div",{className:"bg-white dark:bg-gray-800 w-full max-w-sm rounded-2xl shadow-2xl p-6",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"افزودن مخاطب جدید"}),d.jsx("button",{onClick:()=>v(!1),children:d.jsx(ir,{size:20,className:"text-gray-500"})})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"text-sm text-gray-500 block mb-2",children:"شماره تلفن یا نام کاربری"}),d.jsx("input",{value:E,onChange:K=>I(K.target.value),placeholder:"@username یا 0912...",className:"w-full bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-telegram-primary text-gray-900 dark:text-white"})]}),W&&d.jsx("p",{className:"text-red-500 text-sm mb-4",children:W}),T&&d.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl flex items-center gap-3 mb-4 border border-green-200 dark:border-green-800",children:[d.jsx("img",{src:T.avatar,className:"w-10 h-10 rounded-full"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-gray-900 dark:text-white",children:T.name}),d.jsx("p",{className:"text-xs text-gray-500",children:T.username})]}),d.jsx(bP,{className:"mr-auto text-green-500"})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:B,disabled:S,className:"flex-1 bg-telegram-secondary dark:bg-gray-700 text-telegram-primary font-bold py-3 rounded-xl",children:S?d.jsx(U_,{className:"animate-spin mx-auto"}):"جستجو"}),T&&d.jsx("button",{onClick:J,className:"flex-1 bg-telegram-primary text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors",children:"افزودن"})]})]})}),d.jsxs("div",{className:"px-3 py-2 flex items-center gap-2 shrink-0",children:[d.jsx("button",{onClick:()=>{_(!0),O(!1)},className:"p-2 hover:bg-telegram-secondary dark:hover:bg-telegram-secondaryDark rounded-full text-gray-500 dark:text-gray-400",children:d.jsx(LI,{size:24})}),d.jsxs("div",{className:"relative flex-1",children:[d.jsx("input",{type:"text",placeholder:"جستجو...",value:R,onChange:K=>N(K.target.value),className:"w-full bg-telegram-secondary dark:bg-telegram-secondaryDark text-gray-900 dark:text-white rounded-full py-2 pr-9 pl-4 focus:outline-none focus:ring-1 focus:ring-telegram-primary/50 text-sm"}),d.jsx(xh,{className:"absolute right-3 top-2.5 text-gray-500 w-4 h-4"})]})]}),d.jsx("div",{className:"flex px-2 pb-1 shrink-0 border-b border-telegram-border dark:border-telegram-borderDark",children:["all","personal","groups"].map(K=>d.jsx("button",{onClick:()=>z(K),className:`flex-1 text-center py-2 border-b-2 font-medium text-sm transition-colors ${M===K?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500"}`,children:K==="all"?"همه":K==="personal"?"شخصی":"گروه‌ها"},K))}),d.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:ne.map(K=>{const le=e[K.id],Ae=le==null?void 0:le.messages[le.messages.length-1],ke=n===K.id;return d.jsxs("div",{onClick:()=>r(K.id),className:`flex items-center gap-3 p-2.5 mx-2 my-1 rounded-xl cursor-pointer transition-colors ${ke?"bg-telegram-primary text-white":"hover:bg-gray-100 dark:hover:bg-white/5"}`,children:[d.jsxs("div",{className:"relative shrink-0",children:[K.id==="saved"?d.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white",children:d.jsx(Xg,{size:24,fill:"currentColor"})}):d.jsx("img",{src:K.avatar,alt:K.name,className:"w-12 h-12 rounded-full object-cover bg-gray-200"}),K.id!=="saved"&&K.status==="online"&&d.jsx("div",{className:`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 ${ke?"bg-white border-telegram-primary":"bg-green-500 border-white dark:border-black"}`})]}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex justify-between items-baseline mb-0.5",children:[d.jsx("h3",{className:`font-semibold text-base truncate ${ke?"text-white":"text-gray-900 dark:text-gray-100"}`,children:K.name}),Ae&&d.jsx("span",{className:`text-[10px] ${ke?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:_e(Ae.timestamp)})]}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("p",{className:`text-sm truncate ${ke?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:K.status==="typing..."?d.jsx("span",{className:"text-telegram-primary animate-pulse",children:"در حال نوشتن..."}):Ae?d.jsxs("span",{className:"flex items-center gap-1",children:[Ae.senderId==="me"&&d.jsx("span",{className:"opacity-80",children:"شما:"}),Ae.type==="image"?"🖼️ عکس":Ae.type==="audio"?"🎤 ویس":Ae.text]}):d.jsx("span",{className:"italic opacity-60",children:"گفتگو را شروع کنید"})}),(le==null?void 0:le.unreadCount)>0&&d.jsx("span",{className:`min-w-[1.25rem] h-5 px-1 rounded-full text-xs font-bold flex items-center justify-center ${ke?"bg-white text-telegram-primary":"bg-telegram-primary text-white"}`,children:le.unreadCount})]})]})]},K.id)})}),d.jsx("button",{onClick:()=>{v(!0)},className:"absolute bottom-6 left-6 w-14 h-14 bg-telegram-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-10",children:d.jsx(ny,{size:24})})]})},bP=({className:t})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[d.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),d.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),RP=({imageUrl:t,onClose:e})=>d.jsxs("div",{className:"fixed inset-0 z-[60] bg-black/95 flex items-center justify-center animate-fade-in backdrop-blur-sm",onClick:e,children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 backdrop-blur-md",children:d.jsx(ir,{size:24})}),d.jsx("a",{href:t,download:!0,onClick:n=>n.stopPropagation(),className:"absolute top-4 left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 backdrop-blur-md",title:"دانلود تصویر",children:d.jsx(tc,{size:24})}),d.jsx("div",{className:"w-full h-full p-4 flex items-center justify-center",children:d.jsx("img",{src:t,alt:"Full view",className:"max-w-full max-h-full object-contain select-none shadow-2xl rounded-md",onClick:n=>n.stopPropagation()})})]}),NP=["😀","😂","🥰","😎","🤔","😭","👍","👎","❤️","🔥","👀","✅","💯","🌹"],CP=["👍","❤️","😂","😮","😢","🔥"],PP=["https://cdn-icons-png.flaticon.com/512/742/742751.png","https://cdn-icons-png.flaticon.com/512/742/742752.png","https://cdn-icons-png.flaticon.com/512/742/742822.png","https://cdn-icons-png.flaticon.com/512/742/742760.png","https://cdn-icons-png.flaticon.com/512/742/742920.png","https://cdn-icons-png.flaticon.com/512/742/742786.png","https://cdn-icons-png.flaticon.com/512/166/166538.png","https://cdn-icons-png.flaticon.com/512/190/190623.png","https://cdn-icons-png.flaticon.com/512/417/417779.png"],DP=t=>{const e=["#df3f4c","#4a9e56","#e08e0b","#8c52ff","#ff5ca8","#31b5d6","#3390ec"];let n=0;for(let r=0;r<t.length;r++)n=t.charCodeAt(r)+((n<<5)-n);return e[Math.abs(n)%e.length]},OP=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),jP=({contact:t,messages:e,myId:n,myRole:r,onSendMessage:s,onEditMessage:i,onDeleteMessage:o,onReaction:l,onBack:u,isMobile:h,onProfileClick:p,onAvatarClick:m,wallpaper:g,onCall:A})=>{const[b,R]=L.useState(""),[N,w]=L.useState(null),[_,k]=L.useState(null),[O,M]=L.useState(null),[z,x]=L.useState(!1),[v,E]=L.useState("emoji"),[I,S]=L.useState(!1),[C,T]=L.useState(!1),[Ne,W]=L.useState(0),[ye,pe]=L.useState(null),[B,J]=L.useState(null),[ne,_e]=L.useState(!1),[ce,K]=L.useState(!1),[le,Ae]=L.useState(!1),[ke,At]=L.useState(""),[st,ls]=L.useState([]),[St,Lt]=L.useState(-1),$n=L.useRef(null),us=L.useRef(null),cs=L.useRef(null),wr=L.useRef(null),Er=L.useRef(null),ds=L.useRef(null),hs=L.useRef(null),Sn=L.useRef(null),bn=L.useRef([]),Rn=L.useRef(null),fs=t.type==="group",V=t.id==="global_chat";L.useEffect(()=>{var D;le||(D=$n.current)==null||D.scrollIntoView({behavior:"auto"})},[e.length,N,le]),L.useEffect(()=>{if(!ke.trim()){ls([]),Lt(-1);return}const D=e.filter(se=>se.type==="text"&&se.text.toLowerCase().includes(ke.toLowerCase())).map(se=>se.id);ls(D),D.length>0?Lt(D.length-1):Lt(-1)},[ke,e]),L.useEffect(()=>{if(St>=0&&St<st.length){const D=st[St],se=document.getElementById(`msg-${D}`);se&&se.scrollIntoView({behavior:"smooth",block:"center"})}},[St,st]),L.useEffect(()=>{le&&hs.current?hs.current.focus():(At(""),ls([]))},[le]),L.useEffect(()=>{const D=()=>{M(null),x(!1),S(!1)};return window.addEventListener("click",D),()=>window.removeEventListener("click",D)},[]);const Y=()=>{st.length!==0&&Lt(D=>D<st.length-1?D+1:0)},me=()=>{st.length!==0&&Lt(D=>D>0?D-1:st.length-1)},H=()=>{b.trim()&&(_?(i(_.id,b),k(null)):(s({text:b,type:"text"},N==null?void 0:N.id),w(null)),R(""))},he=D=>{s({imageUrl:D,type:"image",isSticker:!0},N==null?void 0:N.id),w(null),x(!1)},Xe=async()=>{try{const D=await navigator.mediaDevices.getUserMedia({audio:!0}),se=new MediaRecorder(D);Sn.current=se,bn.current=[],se.ondataavailable=we=>{we.data.size>0&&bn.current.push(we.data)},se.start(),T(!0),W(0),ds.current=window.setInterval(()=>W(we=>we+1),1e3)}catch(D){console.error("Error accessing microphone:",D),alert("دسترسی به میکروفون امکان پذیر نیست.")}},$e=D=>{ds.current&&clearInterval(ds.current),Sn.current&&C&&(Sn.current.onstop=()=>{var se;if(D&&bn.current.length>0){const we=new Blob(bn.current,{type:"audio/mp3"}),pt=Math.floor(Ne/60),pn=Ne%60;s({type:"audio",file:we,audioDuration:`${pt}:${pn.toString().padStart(2,"0")}`},N==null?void 0:N.id),w(null)}(se=Sn.current)==null||se.stream.getTracks().forEach(we=>we.stop())},Sn.current.stop()),T(!1),W(0)},We=(D,se="image")=>{if(D){const we=(D.size/1024/1024).toFixed(2)+" MB";s({type:se,file:D,fileName:D.name,fileSize:we,text:se==="image"?"عکس":D.name},N==null?void 0:N.id),w(null),S(!1)}},nn=D=>{D.preventDefault(),D.stopPropagation(),_e(!1);const se=D.dataTransfer.files;if(se&&se.length>0){const we=se[0],pt=we.type.startsWith("image/");We(we,pt?"image":"file")}},bt=async()=>{V&&r==="owner"&&confirm("آیا از پاک کردن کل تاریخچه چت جهانی مطمئن هستید؟ این عمل غیرقابل بازگشت است.")&&await yP()},Wn=(D,se)=>{var we;if(D)if(ye===se)(we=Rn.current)==null||we.pause(),pe(null);else{Rn.current&&Rn.current.pause();const pt=new Audio(D);Rn.current=pt,pe(se),pt.play(),pt.onended=()=>pe(null)}},Hn=D=>new Date(D).toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"}),Kn=()=>g==="default"?{}:g.startsWith("http")||g.startsWith("data")?{backgroundImage:`url(${g})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:g},ps=D=>{if(!ke||!D)return D;const se=new RegExp(`(${OP(ke)})`,"gi");return D.split(se).map((pt,pn)=>pt.toLowerCase()===ke.toLowerCase()?d.jsx("span",{className:"bg-yellow-300 text-black rounded px-0.5",children:pt},pn):pt)};return d.jsxs("div",{className:"h-full flex flex-col relative bg-telegram-bg dark:bg-telegram-bgDark overflow-hidden",onDragOver:D=>{D.preventDefault(),_e(!0)},onDragLeave:D=>{D.preventDefault(),D.currentTarget.contains(D.relatedTarget)||_e(!1)},onDrop:nn,children:[ne&&d.jsxs("div",{className:"absolute inset-0 z-50 bg-telegram-primary/80 backdrop-blur-sm flex flex-col items-center justify-center text-white animate-fade-in",children:[d.jsx(ey,{size:64,className:"mb-4 animate-bounce"}),d.jsx("h2",{className:"text-2xl font-bold",children:"رها کنید تا ارسال شود"})]}),B&&d.jsx(RP,{imageUrl:B,onClose:()=>J(null)}),d.jsx("input",{type:"file",ref:wr,className:"hidden",accept:"image/*",onChange:D=>{var se;return We((se=D.target.files)==null?void 0:se[0],"image")}}),d.jsx("input",{type:"file",ref:Er,className:"hidden",onChange:D=>{var se;return We((se=D.target.files)==null?void 0:se[0],"file")}}),d.jsx("div",{className:"absolute inset-0 z-0",style:Kn(),children:g==="default"&&d.jsx("div",{className:"absolute inset-0 chat-bg-pattern opacity-100"})}),t.status==="connecting"&&d.jsx("div",{className:"absolute top-16 left-0 right-0 bg-red-500/90 text-white text-xs py-1 text-center z-20",children:"در حال اتصال..."}),d.jsx("div",{className:"relative z-10 flex items-center justify-between px-2 py-2 bg-white/95 dark:bg-telegram-bgDark/95 backdrop-blur-md border-b border-telegram-border dark:border-telegram-borderDark shadow-sm shrink-0 h-16",children:le?d.jsxs("div",{className:"flex-1 flex items-center gap-2 animate-fade-in w-full",children:[d.jsx("button",{onClick:()=>Ae(!1),className:"p-2 text-gray-500 hover:text-gray-800 dark:hover:text-white",children:d.jsx(ir,{size:24})}),d.jsxs("div",{className:"flex-1 relative",children:[d.jsx("input",{ref:hs,value:ke,onChange:D=>At(D.target.value),placeholder:"جستجو در این گفتگو...",className:"w-full bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white rounded-lg pl-3 pr-10 py-2 text-sm outline-none focus:ring-2 focus:ring-telegram-primary"}),d.jsx(xh,{size:16,className:"absolute right-3 top-3 text-gray-400"})]}),d.jsx("div",{className:"flex items-center gap-1 text-sm text-gray-500 font-mono w-16 justify-center",children:st.length>0?d.jsxs("span",{children:[St+1," / ",st.length]}):d.jsx("span",{children:"0 / 0"})}),d.jsxs("div",{className:"flex gap-1",children:[d.jsx("button",{onClick:me,disabled:st.length===0,className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full disabled:opacity-30",children:d.jsx(CI,{size:20})}),d.jsx("button",{onClick:Y,disabled:st.length===0,className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full disabled:opacity-30",children:d.jsx(wh,{size:20})})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"flex items-center gap-2 overflow-hidden cursor-pointer flex-1",onClick:p,children:[h&&d.jsx("button",{onClick:D=>{D.stopPropagation(),u()},className:"p-2 -mr-2 text-gray-500 dark:text-gray-300",children:d.jsx(vh,{size:22})}),d.jsx("img",{src:t.avatar||"",alt:"",className:"w-10 h-10 rounded-full bg-gray-200 object-cover shrink-0"}),d.jsxs("div",{className:"flex flex-col overflow-hidden",children:[d.jsx("h2",{className:"font-bold text-gray-900 dark:text-white truncate text-base",children:t.name}),d.jsx("span",{className:"text-xs text-telegram-primary truncate",children:t.status==="online"?"آنلاین":t.status==="connecting"?"در حال اتصال...":"آخرین بازدید به تازگی"})]})]}),d.jsxs("div",{className:"flex items-center text-gray-500 gap-1",children:[d.jsx("button",{onClick:D=>{D.stopPropagation(),Ae(!0)},className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-gray-500",title:"جستجو در چت",children:d.jsx(xh,{size:20})}),V&&r==="owner"&&d.jsx("button",{onClick:D=>{D.stopPropagation(),bt()},className:"p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full text-red-500",title:"پاکسازی کل چت",children:d.jsx(Th,{size:20})}),d.jsx("button",{onClick:D=>{D.stopPropagation(),A()},className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-telegram-primary",children:d.jsx(Ia,{size:20})}),d.jsx("button",{className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full",children:d.jsx(UI,{size:20})})]})]})}),d.jsxs("div",{ref:us,className:"relative z-10 flex-1 overflow-y-auto p-2 sm:p-4 flex flex-col gap-1.5 scroll-smooth",onScroll:D=>K(D.currentTarget.scrollHeight-D.currentTarget.scrollTop-D.currentTarget.clientHeight>200),children:[e.map((D,se)=>{const we=D.senderId==="me",pt=!e[se+1]||e[se+1].senderId!==D.senderId,pn=fs&&!we&&(!e[se-1]||e[se-1].senderId!==D.senderId),Yi=st.includes(D.id),Xi=st[St]===D.id,rn=D.senderRole==="owner",Ys=D.senderRole==="admin";let Vt="px-3 py-2 rounded-2xl shadow-sm text-base break-words border min-w-[4rem] relative transition-all ";return Xi?Vt+="ring-4 ring-yellow-400 dark:ring-yellow-500/50 ":Yi&&(Vt+="ring-2 ring-yellow-200 dark:ring-yellow-500/20 "),rn?Vt+="bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-yellow-900/40 dark:to-amber-800/40 text-gray-900 dark:text-white border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.3)] ring-1 ring-amber-300 dark:ring-amber-700 ":Ys?Vt+="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/30 text-gray-900 dark:text-white border-blue-400 dark:border-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.2)] ring-1 ring-blue-300 dark:ring-blue-700 ":we?Vt+="bg-telegram-chatOut dark:bg-telegram-chatOutDark text-black dark:text-white border-transparent ":Vt+="bg-white dark:bg-telegram-chatInDark text-black dark:text-white border-transparent ",we?Vt+="rounded-bl-none ":Vt+="rounded-br-none ",d.jsxs("div",{id:`msg-${D.id}`,className:`flex ${we?"flex-row-reverse":"flex-row"} items-end gap-2 max-w-[90%] md:max-w-[75%] ${we?"self-end":"self-start"} group animate-slide-in`,children:[fs&&!we&&d.jsx("div",{className:"w-8 h-8 shrink-0 mb-1 cursor-pointer hover:scale-105 transition-transform",onClick:()=>m&&m({id:D.senderId,name:D.senderName,avatar:D.senderAvatar,type:"user"}),children:pt&&d.jsx("img",{src:D.senderAvatar||"https://via.placeholder.com/32",className:"w-8 h-8 rounded-full shadow-md"})}),d.jsxs("div",{className:"flex flex-col relative",onContextMenu:mn=>{mn.preventDefault(),mn.stopPropagation(),M({x:mn.clientX,y:mn.clientY,messageId:D.id,isMe:we})},children:[D.isSticker?d.jsx("img",{src:D.imageUrl,className:"w-32 h-32 object-contain cursor-pointer drop-shadow-md",onClick:()=>J(D.imageUrl)}):d.jsxs("div",{className:Vt,children:[pn&&d.jsxs("div",{className:"text-xs font-bold mb-1 flex items-center gap-1 cursor-pointer hover:underline",style:{color:DP(D.senderId)},onClick:()=>m&&m({id:D.senderId,name:D.senderName,avatar:D.senderAvatar,type:"user"}),children:[D.senderName,D.senderRole==="owner"&&d.jsxs("span",{className:"flex items-center gap-0.5 text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/50 px-1 rounded-full text-[9px] border border-amber-200",children:[d.jsx(Jg,{size:10,fill:"currentColor"})," مدیریت کل"]}),D.senderRole==="admin"&&d.jsxs("span",{className:"flex items-center gap-0.5 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-1 rounded-full text-[9px] border border-blue-200",children:[d.jsx(ty,{size:10,fill:"currentColor"})," ادمین"]})]}),we&&(rn||Ys)&&d.jsxs("div",{className:"text-[10px] font-bold mb-1 flex items-center gap-1 opacity-80 border-b border-black/10 dark:border-white/10 pb-1",children:[rn&&d.jsxs("span",{className:"flex items-center gap-0.5 text-amber-700 dark:text-amber-300",children:[d.jsx(Jg,{size:10,fill:"currentColor"})," مدیریت کل (شما)"]}),Ys&&d.jsxs("span",{className:"flex items-center gap-0.5 text-blue-700 dark:text-blue-300",children:[d.jsx(ty,{size:10,fill:"currentColor"})," ادمین (شما)"]})]}),D.replyToId&&d.jsx("div",{className:"mb-1 pl-2 border-r-2 border-telegram-primary text-xs opacity-70 truncate bg-black/5 dark:bg-white/5 rounded p-1",children:"پیام پاسخ داده شده"}),D.type==="image"&&d.jsx("img",{src:D.imageUrl,className:"rounded-lg mb-1 max-w-full max-h-80 object-cover",onClick:()=>J(D.imageUrl)}),D.type==="audio"&&d.jsxs("div",{className:"flex items-center gap-2 p-1 min-w-[150px]",children:[d.jsx("button",{onClick:()=>Wn(D.fileUrl||D.imageUrl,D.id),className:`p-2 rounded-full ${we?"bg-white text-green-600":"bg-telegram-primary text-white"}`,children:ye===D.id?d.jsx(FI,{size:16}):d.jsx($I,{size:16})}),d.jsxs("div",{className:"flex flex-col w-full",children:[d.jsx("div",{className:"h-1 bg-gray-300 rounded-full overflow-hidden w-full",children:d.jsx("div",{className:`h-full bg-telegram-primary ${ye===D.id?"w-full animate-pulse":"w-0"}`})}),d.jsx("span",{className:"text-[10px] mt-1 opacity-70",children:D.audioDuration})]})]}),D.type==="file"&&d.jsxs("div",{className:"flex items-center gap-3 p-2 bg-black/5 dark:bg-white/5 rounded-lg max-w-xs",children:[d.jsx("div",{className:`p-3 rounded-full ${we?"bg-telegram-primary/20 text-telegram-primary":"bg-gray-200 text-gray-600"}`,children:d.jsx(Eh,{size:24})}),d.jsxs("div",{className:"flex flex-col overflow-hidden",children:[d.jsx("span",{className:"font-bold text-sm truncate",children:D.fileName}),d.jsx("span",{className:"text-xs opacity-60",children:D.fileSize||"File"})]}),D.fileUrl&&d.jsx("a",{href:D.fileUrl,download:!0,target:"_blank",rel:"noreferrer",className:"p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full",children:d.jsx(tc,{size:20})})]}),D.type==="text"&&d.jsx("div",{dir:"auto",className:`whitespace-pre-wrap leading-snug ${rn?"font-medium":""}`,children:le?ps(D.text):D.text}),d.jsxs("div",{className:"flex items-center justify-end gap-1 mt-1 opacity-60 text-[10px] select-none",children:[d.jsx("span",{children:Hn(D.timestamp)}),we&&(D.status==="read"?d.jsx(RI,{size:12,className:"text-blue-500"}):d.jsx(_h,{size:12})),D.status==="error"&&d.jsx("span",{className:"text-red-500 font-bold",children:"!"})]})]}),D.reactions&&Object.keys(D.reactions).length>0&&d.jsx("div",{className:"flex flex-wrap gap-1 mt-1 px-1",children:Object.entries(D.reactions).map(([mn,ms])=>d.jsxs("button",{onClick:()=>l(D.id,mn),className:"bg-white dark:bg-gray-800 rounded-full px-1.5 py-0.5 text-xs shadow-sm border border-gray-100 dark:border-gray-700",children:[mn," ",d.jsx("span",{className:"font-bold",children:ms.length})]},mn))})]})]},D.id)}),d.jsx("div",{ref:$n})]}),ce&&!le&&d.jsx("button",{onClick:()=>{var D;return(D=$n.current)==null?void 0:D.scrollIntoView({behavior:"smooth"})},className:"absolute bottom-20 right-4 z-20 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg border text-gray-500",children:d.jsx(wh,{size:24})}),d.jsxs("div",{className:"relative z-10 bg-white dark:bg-telegram-bgDark p-2 border-t border-gray-200 dark:border-white/10 shrink-0",children:[N&&d.jsxs("div",{className:"flex items-center justify-between bg-gray-50 dark:bg-white/5 p-2 rounded-t-lg mb-1 text-sm border-l-4 border-telegram-primary",children:[d.jsxs("div",{className:"flex flex-col ml-2",children:[d.jsx("span",{className:"text-telegram-primary font-bold",children:"پاسخ به پیام"}),d.jsx("span",{className:"truncate opacity-70 max-w-[200px]",children:N.text||"رسانه"})]}),d.jsx("button",{onClick:()=>w(null),children:d.jsx(ir,{size:16})})]}),d.jsx("div",{className:"flex items-end gap-2 max-w-5xl mx-auto",children:C?d.jsxs("div",{className:"flex-1 bg-telegram-secondary dark:bg-telegram-secondaryDark rounded-full p-3 flex items-center justify-between animate-pulse",children:[d.jsxs("div",{className:"flex items-center gap-2 text-red-500",children:[d.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full animate-ping"})," ",Math.floor(Ne/60),":",(Ne%60).toString().padStart(2,"0")]}),d.jsx("span",{onClick:()=>$e(!1),className:"cursor-pointer text-gray-500",children:"لغو"}),d.jsx(la,{size:24,className:"text-telegram-primary cursor-pointer rotate-180",onClick:()=>$e(!0)})]}):d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>S(!I),className:"p-3 text-gray-500 hover:text-telegram-primary",children:d.jsx(ey,{size:24,className:"rotate-45"})}),I&&d.jsxs("div",{className:"absolute bottom-20 right-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-2 flex flex-col gap-2 z-50 animate-fade-in",children:[d.jsxs("button",{onClick:()=>{var D;return(D=wr.current)==null?void 0:D.click()},className:"flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg text-gray-800 dark:text-white",children:[d.jsx(M_,{size:18})," عکس"]}),d.jsxs("button",{onClick:()=>{var D;return(D=Er.current)==null?void 0:D.click()},className:"flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg text-gray-800 dark:text-white",children:[d.jsx(Eh,{size:18})," فایل"]})]}),d.jsxs("div",{className:"flex-1 bg-gray-100 dark:bg-black/20 rounded-2xl flex items-center relative",children:[d.jsx("textarea",{ref:cs,value:b,onChange:D=>R(D.target.value),onKeyDown:D=>{D.key==="Enter"&&!D.shiftKey&&(D.preventDefault(),H())},placeholder:"پیام...",className:"w-full bg-transparent p-3 max-h-32 resize-none outline-none text-gray-900 dark:text-white",rows:1}),d.jsx("button",{onClick:()=>x(!z),className:"p-2 text-gray-400 hover:text-telegram-primary",children:d.jsx(GI,{size:24})})]}),b.trim()?d.jsx("button",{onClick:H,className:"p-3 bg-telegram-primary rounded-full text-white shadow-lg hover:scale-105 transition-transform",children:d.jsx(la,{size:20,className:"rotate-180"})}):d.jsx("button",{onClick:Xe,className:"p-3 bg-gray-200 dark:bg-white/10 rounded-full text-gray-500 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors",children:d.jsx(B_,{size:24})}),z&&d.jsxs("div",{className:"absolute bottom-20 left-4 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border w-72 h-64 overflow-y-auto p-2 grid grid-cols-6 gap-2 z-50",onClick:D=>D.stopPropagation(),children:[d.jsxs("div",{className:"col-span-6 flex border-b mb-2 pb-1",children:[d.jsx("button",{onClick:()=>E("emoji"),className:`flex-1 ${v==="emoji"?"text-telegram-primary font-bold":""}`,children:"ایموجی"}),d.jsx("button",{onClick:()=>E("sticker"),className:`flex-1 ${v==="sticker"?"text-telegram-primary font-bold":""}`,children:"استیکر"})]}),v==="emoji"?NP.map(D=>d.jsx("button",{onClick:()=>R(se=>se+D),className:"text-2xl hover:bg-gray-100 rounded",children:D},D)):PP.map((D,se)=>d.jsx("img",{src:D,onClick:()=>he(D),className:"w-full h-auto hover:scale-110 transition-transform cursor-pointer"},se))]})]})})]}),O&&d.jsxs("div",{className:"fixed z-[60] bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 min-w-[150px] animate-fade-in border dark:border-gray-700",style:{top:O.y,left:O.x},children:[d.jsx("div",{className:"flex gap-1 mb-2 bg-gray-50 dark:bg-black/20 p-1 rounded justify-center",children:CP.map(D=>d.jsx("button",{onClick:()=>{l(O.messageId,D),M(null)},className:"hover:scale-125 transition-transform",children:D},D))}),d.jsxs("button",{onClick:()=>{w(e.find(D=>D.id===O.messageId)),M(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[d.jsx(HI,{size:16})," پاسخ"]}),d.jsxs("button",{onClick:()=>{var D;navigator.clipboard.writeText(((D=e.find(se=>se.id===O.messageId))==null?void 0:D.text)||""),M(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[d.jsx(DI,{size:16})," کپی"]}),(O.isMe||r==="owner"||r==="admin")&&d.jsxs("button",{onClick:()=>{o(O.messageId),M(null)},className:"w-full text-right p-2 hover:bg-red-50 text-red-500 rounded flex gap-2",children:[d.jsx(Th,{size:16})," ",O.isMe?"حذف":"حذف (مدیر)"]}),O.isMe&&d.jsxs("button",{onClick:()=>{k(e.find(D=>D.id===O.messageId)),R(e.find(D=>D.id===O.messageId).text),M(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[d.jsx(zI,{size:16})," ویرایش"]})]})]})},qP=({contact:t,onClose:e,onStartChat:n})=>d.jsxs("div",{className:"h-full flex flex-col bg-white dark:bg-telegram-secondaryDark border-l border-telegram-border dark:border-telegram-borderDark overflow-y-auto animate-slide-in",children:[d.jsxs("div",{className:"flex items-center gap-4 p-4 sticky top-0 bg-white/80 dark:bg-telegram-secondaryDark/80 backdrop-blur-md z-10",children:[d.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-800 dark:hover:text-gray-200",children:d.jsx(ir,{size:24})}),d.jsx("span",{className:"font-semibold text-lg",children:"اطلاعات پروفایل"})]}),d.jsxs("div",{className:"px-6 py-4 flex flex-col items-center border-b-8 border-gray-100 dark:border-black/20",children:[d.jsx("img",{src:t.avatar,alt:t.name,className:"w-28 h-28 rounded-full object-cover mb-4 shadow-lg"}),d.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-1",children:t.name}),d.jsx("p",{className:"text-gray-500 text-sm",children:t.status==="online"?d.jsx("span",{className:"text-telegram-primary",children:"آنلاین"}):`آخرین بازدید ${t.lastSeen||"به تازگی"}`}),n&&d.jsxs("button",{onClick:()=>n(t),className:"mt-4 flex items-center gap-2 bg-telegram-primary hover:bg-telegram-primaryDark text-white px-6 py-2 rounded-full font-medium transition-colors",children:[d.jsx(Wf,{size:18}),"شروع گفتگو"]})]}),d.jsxs("div",{className:"p-4 space-y-5 border-b-8 border-gray-100 dark:border-black/20",children:[d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"mt-1 text-gray-500",children:d.jsx(Ia,{size:22})}),d.jsxs("div",{children:[d.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:t.phone||"---"}),d.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:"موبایل"})]})]}),d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"mt-1 text-gray-500",children:d.jsx(V_,{size:22})}),d.jsxs("div",{children:[d.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:t.username||"---"}),d.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:"نام کاربری"})]})]}),d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"mt-1 text-gray-500",children:d.jsx($f,{size:22})}),d.jsxs("div",{className:"flex-1 flex justify-between items-center",children:[d.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:"اعلانات"}),d.jsx("div",{className:"w-10 h-5 bg-telegram-primary rounded-full relative cursor-pointer",children:d.jsx("div",{className:"absolute left-1 top-1 w-3 h-3 bg-white rounded-full"})})]})]}),d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"mt-1 text-gray-500",children:d.jsx(Eh,{size:22})}),d.jsxs("div",{children:[d.jsx("p",{className:"text-gray-900 dark:text-white text-base leading-snug",children:t.bio||"بدون بیوگرافی"}),d.jsx("p",{className:"text-gray-500 text-xs mt-1",children:"بیوگرافی"})]})]})]}),d.jsxs("div",{className:"p-2",children:[d.jsxs("div",{className:"flex border-b border-gray-200 dark:border-gray-700 mb-2",children:[d.jsx("button",{className:"flex-1 py-2 text-telegram-primary border-b-2 border-telegram-primary font-medium text-sm",children:"رسانه"}),d.jsx("button",{className:"flex-1 py-2 text-gray-500 font-medium text-sm hover:text-gray-700 dark:hover:text-gray-300",children:"فایل‌ها"}),d.jsx("button",{className:"flex-1 py-2 text-gray-500 font-medium text-sm hover:text-gray-700 dark:hover:text-gray-300",children:"لینک‌ها"})]}),d.jsx("div",{className:"grid grid-cols-3 gap-1",children:[1,2,3,4,5,6].map(r=>d.jsx("div",{className:"aspect-square bg-gray-200 dark:bg-gray-800 cursor-pointer hover:opacity-80 transition-opacity",children:d.jsx("img",{src:`https://picsum.photos/200/200?random=${r+10}`,className:"w-full h-full object-cover",alt:"media"})},r))})]})]}),LP=[{id:"default",name:"پیش‌فرض",value:"default",color:"#8db5d0"},{id:"blue",name:"آبی آسمانی",value:"#dbeafe",color:"#dbeafe"},{id:"green",name:"سبز نعنایی",value:"#dcfce7",color:"#dcfce7"},{id:"dark",name:"تاریک",value:"#18181b",color:"#18181b"},{id:"pink",name:"صورتی",value:"#fce7f3",color:"#fce7f3"},{id:"pattern1",name:"طرح ۱",value:"https://img.freepik.com/free-vector/hand-drawn-contact-sheet-template_23-2150937449.jpg",color:"#e5e7eb"},{id:"pattern2",name:"طرح ۲",value:"https://img.freepik.com/free-vector/seamless-pattern-with-cute-cats_23-2147665476.jpg",color:"#e5e7eb"}],VP=({isOpen:t,onClose:e,userProfile:n,onSave:r,wallpaper:s,onSaveWallpaper:i})=>{const[o,l]=L.useState(n),[u,h]=L.useState("profile"),[p,m]=L.useState(s),[g,A]=L.useState("");if(L.useEffect(()=>{l(n),m(s)},[n,s,t]),!t)return null;const b=()=>{r(o),i(p),e()};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",children:d.jsxs("div",{className:"bg-white dark:bg-telegram-secondaryDark w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[d.jsxs("div",{className:"flex flex-col border-b border-gray-100 dark:border-white/10",children:[d.jsxs("div",{className:"flex items-center justify-between p-4",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"تنظیمات"}),d.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors",children:d.jsx(ir,{size:24,className:"text-gray-500 dark:text-gray-300"})})]}),d.jsxs("div",{className:"flex px-4",children:[d.jsx("button",{onClick:()=>h("profile"),className:`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${u==="profile"?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"}`,children:d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx(wu,{size:18}),"پروفایل"]})}),d.jsx("button",{onClick:()=>h("chat"),className:`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${u==="chat"?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"}`,children:d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx(M_,{size:18}),"پس‌زمینه چت"]})})]})]}),d.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:u==="profile"?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"relative bg-telegram-secondary dark:bg-black/20 p-6 flex flex-col items-center justify-center gap-4",children:[d.jsxs("div",{className:"relative group cursor-pointer",children:[d.jsx("div",{className:"w-24 h-24 rounded-full bg-telegram-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg",children:o.name.charAt(0)}),d.jsx("div",{className:"absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:d.jsx(bI,{size:24,className:"text-white"})})]}),d.jsx("div",{className:"text-center",children:d.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"عکس پروفایل خود را تغییر دهید"})})]}),d.jsxs("div",{className:"p-6 space-y-6",children:[d.jsxs("div",{className:"relative group",children:[d.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:d.jsx(wu,{size:20})}),d.jsx("input",{type:"text",value:o.name,onChange:R=>l({...o,name:R.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white",placeholder:"نام نمایشی"}),d.jsx("label",{className:"text-xs text-telegram-primary mt-1 block",children:"نام (اجباری)"})]}),d.jsxs("div",{className:"relative group",children:[d.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:d.jsx(jI,{size:20})}),d.jsx("input",{type:"text",value:o.bio,onChange:R=>l({...o,bio:R.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white",placeholder:"بیوگرافی"}),d.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"کمی درباره خودتان بنویسید"})]}),d.jsxs("div",{className:"relative group",children:[d.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:d.jsx(V_,{size:20})}),d.jsx("input",{type:"text",value:o.username,onChange:R=>l({...o,username:R.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white dir-ltr text-right",placeholder:"نام کاربری"}),d.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"نام کاربری عمومی"})]}),d.jsxs("div",{className:"relative group",children:[d.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:d.jsx(Ia,{size:20})}),d.jsx("input",{type:"tel",value:o.phone,onChange:R=>l({...o,phone:R.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white dir-ltr text-right",placeholder:"شماره موبایل"}),d.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"شماره موبایل"})]})]})]}):d.jsxs("div",{className:"p-6 space-y-6",children:[d.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"یک تصویر پس‌زمینه برای گفتگوهای خود انتخاب کنید."}),d.jsx("div",{className:"grid grid-cols-3 gap-3",children:LP.map(R=>d.jsxs("div",{onClick:()=>m(R.value),className:`
                                    relative aspect-[3/4] rounded-lg cursor-pointer overflow-hidden border-2 transition-all shadow-sm
                                    ${p===R.value?"border-telegram-primary scale-105":"border-transparent hover:scale-105"}
                                `,children:[d.jsx("div",{className:"w-full h-full",style:{backgroundColor:R.color,backgroundImage:R.value.startsWith("http")?`url(${R.value})`:void 0,backgroundSize:"cover",backgroundPosition:"center"},children:R.value==="default"&&d.jsx("div",{className:"w-full h-full opacity-30",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}})}),d.jsx("div",{className:"absolute bottom-0 w-full bg-black/40 text-white text-[10px] text-center py-1",children:R.name}),p===R.value&&d.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20",children:d.jsx(_h,{className:"text-white drop-shadow-md",size:32})})]},R.id))}),d.jsxs("div",{className:"pt-4 border-t border-gray-100 dark:border-white/10",children:[d.jsx("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block",children:"لینک تصویر دلخواه"}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("input",{type:"text",value:g,onChange:R=>A(R.target.value),placeholder:"https://example.com/image.jpg",className:"flex-1 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-telegram-primary"}),d.jsx("button",{onClick:()=>{g&&m(g)},className:"bg-telegram-secondary dark:bg-white/10 text-telegram-primary rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/20",children:"اعمال"})]})]})]})}),d.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-black/20 flex justify-end gap-3",children:[d.jsx("button",{onClick:e,className:"px-4 py-2 text-telegram-primary hover:bg-telegram-primary/10 rounded-lg transition-colors font-medium",children:"انصراف"}),d.jsxs("button",{onClick:b,className:"px-6 py-2 bg-telegram-primary hover:bg-telegram-primaryDark text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2",children:[d.jsx(_h,{size:18}),"ذخیره تغییرات"]})]})]})})},MP=({onClose:t,currentUserEmail:e,currentUserRole:n,onStartChat:r})=>{const[s,i]=L.useState("users"),[o,l]=L.useState([]),[u,h]=L.useState(!0),[p,m]=L.useState({isOpen:!1,targetUid:null}),[g,A]=L.useState({isOpen:!1,targetUid:null,targetName:""}),[b,R]=L.useState([]),[N,w]=L.useState(""),[_,k]=L.useState([]),[O,M]=L.useState("");L.useEffect(()=>{z(),x()},[]);const z=async()=>{h(!0);const W=await pP();l(W),h(!1)},x=async()=>{const W=await kx();k(W)},v=async(W,ye,pe)=>{if(n!=="owner"){alert("فقط مدیر کل می‌تواند نقش‌ها را تغییر دهد.");return}const B=o.find(J=>J.uid===W);if((B==null?void 0:B.email)===Yt.OWNER_EMAIL){alert("نمی‌توانید نقش مدیر کل اصلی را تغییر دهید.");return}await mP(W,pe),l(o.map(J=>J.uid===W?{...J,role:pe}:J))},E=async(W,ye)=>{const pe=o.find(B=>B.uid===W);if((pe==null?void 0:pe.role)==="owner"){alert("نمی‌توانید مدیر کل را مسدود کنید.");return}if((pe==null?void 0:pe.role)==="admin"&&n!=="owner"){alert("ادمین نمی‌تواند ادمین دیگر را مسدود کند.");return}await gP(W,ye||!1),l(o.map(B=>B.uid===W?{...B,isBanned:!ye}:B))},I=async()=>{!p.targetUid||!N.trim()||(await _P(p.targetUid,"پیام سیستم مدیریت",N),m({isOpen:!1,targetUid:null}),w(""),alert("اعلان ارسال شد."))},S=async()=>{if(!O.trim())return;const W=[..._,O.trim()];k(W),M(""),await k0(W)},C=async W=>{const ye=_.filter(pe=>pe!==W);k(ye),await k0(ye)},T=async W=>{A({isOpen:!0,targetUid:W.uid,targetName:W.name}),R([]);const ye=await vP(W.uid);R(ye)},Ne=async W=>{confirm("آیا از حذف این پیام مطمئن هستید؟")&&(await Ix(W),R(ye=>ye.filter(pe=>pe.id!==W)))};return d.jsx("div",{className:"fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in",children:d.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden",children:[d.jsxs("div",{className:"p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center border-b border-gray-200 dark:border-gray-700",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Hf,{className:"text-red-600",size:24}),d.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"پنل مدیریت پیشرفته"})]}),d.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full",children:d.jsx(ir,{size:24})})]}),d.jsxs("div",{className:"flex border-b border-gray-200 dark:border-gray-700",children:[d.jsx("button",{onClick:()=>i("users"),className:`flex-1 py-3 font-medium text-sm transition-colors ${s==="users"?"bg-white dark:bg-gray-900 border-b-2 border-blue-500 text-blue-600":"bg-gray-50 dark:bg-gray-800 text-gray-500"}`,children:d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx(wu,{size:18})," کاربران"]})}),d.jsx("button",{onClick:()=>i("filters"),className:`flex-1 py-3 font-medium text-sm transition-colors ${s==="filters"?"bg-white dark:bg-gray-900 border-b-2 border-blue-500 text-blue-600":"bg-gray-50 dark:bg-gray-800 text-gray-500"}`,children:d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx(W_,{size:18})," فیلتر کلمات"]})})]}),d.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:s==="users"?u?d.jsx("div",{className:"text-center py-10 text-gray-500",children:"در حال دریافت لیست کاربران..."}):d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full text-right",children:[d.jsx("thead",{className:"text-xs text-gray-500 bg-gray-50 dark:bg-gray-800 uppercase",children:d.jsxs("tr",{children:[d.jsx("th",{className:"px-6 py-3",children:"کاربر"}),d.jsx("th",{className:"px-6 py-3",children:"ایمیل / موبایل"}),d.jsx("th",{className:"px-6 py-3",children:"نقش"}),d.jsx("th",{className:"px-6 py-3",children:"وضعیت"}),d.jsx("th",{className:"px-6 py-3",children:"ابزارها"})]})}),d.jsx("tbody",{children:o.map(W=>d.jsxs("tr",{className:"bg-white dark:bg-gray-900 border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:[d.jsxs("td",{className:"px-6 py-4 flex items-center gap-3",children:[d.jsx("img",{src:W.avatar,className:"w-8 h-8 rounded-full"}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:"font-medium text-gray-900 dark:text-white",children:W.name}),W.email===Yt.OWNER_EMAIL&&d.jsx("span",{className:"text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full w-fit",children:"Owner"})]})]}),d.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{children:W.email}),d.jsx("span",{className:"text-xs",children:W.phone}),d.jsx("span",{className:"text-[10px] opacity-50",children:W.uid})]})}),d.jsx("td",{className:"px-6 py-4",children:n==="owner"&&W.email!==Yt.OWNER_EMAIL?d.jsxs("select",{value:W.role,onChange:ye=>v(W.uid,W.role,ye.target.value),className:"bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",children:[d.jsx("option",{value:"user",children:"کاربر"}),d.jsx("option",{value:"admin",children:"ادمین"}),d.jsx("option",{value:"owner",children:"مدیر کل"})]}):d.jsx("span",{className:`px-2 py-1 rounded text-xs font-bold ${W.role==="owner"?"bg-yellow-100 text-yellow-800":W.role==="admin"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:W.role==="owner"?"مدیر کل":W.role==="admin"?"ادمین":"کاربر"})}),d.jsx("td",{className:"px-6 py-4",children:W.isBanned?d.jsxs("span",{className:"text-red-600 font-bold flex items-center gap-1",children:[d.jsx(Yg,{size:14})," مسدود"]}):d.jsxs("span",{className:"text-green-600 font-bold flex items-center gap-1",children:[d.jsx(NI,{size:14})," فعال"]})}),d.jsxs("td",{className:"px-6 py-4 flex items-center gap-2",children:[W.email!==Yt.OWNER_EMAIL&&(n==="owner"||n==="admin"&&W.role==="user")&&d.jsx("button",{onClick:()=>E(W.uid,W.isBanned||!1),title:W.isBanned?"رفع مسدودی":"مسدود کردن",className:`p-2 rounded-lg text-white ${W.isBanned?"bg-green-600 hover:bg-green-700":"bg-red-600 hover:bg-red-700"}`,children:d.jsx(Yg,{size:16})}),d.jsx("button",{onClick:()=>m({isOpen:!0,targetUid:W.uid}),title:"ارسال اعلان سیستمی",className:"p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white",children:d.jsx($f,{size:16})}),d.jsx("button",{onClick:()=>{r(W),t()},title:"گفتگو",className:"p-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white",children:d.jsx(Wf,{size:16})}),(n==="owner"||n==="admin")&&d.jsx("button",{onClick:()=>T(W),title:"نظارت بر پیام‌ها (جاسوسی)",className:"p-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white",children:d.jsx(Zg,{size:16})})]})]},W.uid))})]})}):d.jsxs("div",{className:"max-w-2xl mx-auto",children:[d.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm text-yellow-800 flex items-start gap-3",children:[d.jsx(SI,{className:"shrink-0"}),d.jsx("p",{children:"کلماتی که در اینجا وارد می‌کنید، در هنگام ارسال پیام در چت عمومی، با ستاره (***) جایگزین خواهند شد. این تغییرات برای همه اعمال می‌شود."})]}),d.jsxs("div",{className:"flex gap-2 mb-6",children:[d.jsx("input",{type:"text",value:O,onChange:W=>M(W.target.value),placeholder:"کلمه ممنوعه جدید...",className:"flex-1 p-3 rounded-xl border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"}),d.jsx("button",{onClick:S,className:"bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors",children:"افزودن"})]}),d.jsxs("div",{className:"flex flex-wrap gap-2",children:[_.map((W,ye)=>d.jsxs("div",{className:"bg-red-100 text-red-800 px-3 py-1 rounded-full flex items-center gap-2",children:[d.jsx("span",{children:W}),d.jsx("button",{onClick:()=>C(W),className:"hover:text-red-900",children:d.jsx(ir,{size:14})})]},ye)),_.length===0&&d.jsx("p",{className:"text-gray-500 w-full text-center",children:"هیچ کلمه ممنوعه‌ای ثبت نشده است."})]})]})}),p.isOpen&&d.jsx("div",{className:"absolute inset-0 z-[110] bg-black/70 flex items-center justify-center p-4",children:d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl",children:[d.jsx("h3",{className:"text-lg font-bold mb-4",children:"ارسال پیام سیستمی به کاربر"}),d.jsx("textarea",{value:N,onChange:W=>w(W.target.value),placeholder:"پیام خود را بنویسید...",className:"w-full h-32 p-3 border rounded-lg mb-4 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 resize-none"}),d.jsxs("div",{className:"flex justify-end gap-2",children:[d.jsx("button",{onClick:()=>m({isOpen:!1,targetUid:null}),className:"px-4 py-2 text-gray-500",children:"انصراف"}),d.jsxs("button",{onClick:I,className:"px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2",children:[d.jsx(la,{size:16})," ارسال"]})]})]})}),g.isOpen&&d.jsx("div",{className:"absolute inset-0 z-[110] bg-black/70 flex items-center justify-center p-4",children:d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl h-[70vh] shadow-2xl flex flex-col overflow-hidden border border-gray-300 dark:border-gray-700",children:[d.jsxs("div",{className:"p-4 bg-purple-600 text-white flex justify-between items-center",children:[d.jsxs("h3",{className:"text-lg font-bold flex items-center gap-2",children:[d.jsx(Zg,{size:20})," تاریخچه چت جهانی: ",g.targetName]}),d.jsx("button",{onClick:()=>A({isOpen:!1,targetUid:null,targetName:""}),children:d.jsx(ir,{size:20})})]}),d.jsx("div",{className:"flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900 space-y-2",children:b.length>0?b.map(W=>d.jsxs("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg shadow border border-gray-200 dark:border-gray-700 flex justify-between items-start",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-gray-900 dark:text-white text-sm",children:W.text}),d.jsx("span",{className:"text-xs text-gray-400 block mt-1",children:new Date(W.timestamp).toLocaleString("fa-IR")})]}),d.jsx("button",{onClick:()=>Ne(W.id),className:"text-red-500 hover:bg-red-50 p-1.5 rounded",title:"حذف اجباری پیام",children:d.jsx(Th,{size:16})})]},W.id)):d.jsx("p",{className:"text-center text-gray-500 mt-10",children:"هیچ پیامی در چت جهانی یافت نشد."})})]})})]})})},UP=({onSuccess:t,storedAccounts:e=[],initialEmail:n=""})=>{const[r,s]=L.useState(!0),[i,o]=L.useState(!1),[l,u]=L.useState(""),[h,p]=L.useState(e.length>0&&!n),[m,g]=L.useState({name:"",email:n||"",phone:"",password:""});L.useEffect(()=>{n&&(g(w=>({...w,email:n})),p(!1))},[n]);const A=async w=>{w.preventDefault(),u(""),o(!0);try{if(r){if(!m.email||!m.password)throw new Error("لطفا ایمیل و رمز عبور را وارد کنید");await oP(m.email,m.password)}else{if(!m.name||!m.email||!m.password||!m.phone)throw new Error("لطفا تمام فیلدها را پر کنید");if(m.password.length<6)throw new Error("رمز عبور باید حداقل ۶ کاراکتر باشد");await iP(m.email,m.password,m.name,m.phone)}}catch(_){console.error(_),_.code==="auth/invalid-email"?u("فرمت ایمیل نامعتبر است"):_.code==="auth/user-not-found"||_.code==="auth/wrong-password"||_.code==="auth/invalid-credential"?u("ایمیل یا رمز عبور اشتباه است"):_.code==="auth/email-already-in-use"?u("این ایمیل قبلا ثبت شده است"):u(_.message||"خطایی رخ داد. لطفا دوباره تلاش کنید.")}finally{o(!1)}},b=async()=>{u(""),o(!0);try{await aP()}catch(w){if(console.error("Google Login Error:",w),w.code==="auth/unauthorized-domain"){const _=window.location.hostname;u(`دامنه "${_}" غیرمجاز است. لطفاً آن را در بخش Authentication > Settings > Authorized domains کنسول فایربیس اضافه کنید.`)}else w.code==="auth/popup-closed-by-user"?u("پنجره ورود توسط شما بسته شد."):u(w.message||"خطا در ورود با گوگل")}finally{o(!1)}},R=w=>{g(_=>({..._,email:w.email})),p(!1),s(!0)},N=()=>d.jsx("div",{className:"absolute bottom-6 left-0 right-0 z-20 flex justify-center animate-fade-in pointer-events-none",children:d.jsxs("div",{className:"pointer-events-auto bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300",children:[d.jsxs("a",{href:"https://github.com/mrv006",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-telegram-primary dark:hover:text-telegram-primary transition-colors group",children:[d.jsx("div",{className:"p-1.5 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors",children:d.jsx(OI,{size:18})}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:"text-[10px] opacity-60 font-medium leading-none mb-0.5",children:"Designed & Developed by"}),d.jsx("span",{className:"text-sm font-bold leading-none tracking-wide font-mono",children:"Mr.V"})]})]}),d.jsx("div",{className:"w-px h-8 bg-gray-400/30 dark:bg-white/20"}),d.jsxs("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-300",children:[d.jsx(KI,{size:16,className:"opacity-70"}),d.jsx("span",{className:"text-xs font-mono font-bold tracking-wider opacity-90",children:"09902076468"})]})]})});return h&&e.length>0?d.jsxs("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark p-4 relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 opacity-10 chat-bg-pattern pointer-events-none"}),d.jsxs("div",{className:"w-full max-w-md bg-white dark:bg-telegram-secondaryDark rounded-3xl shadow-2xl p-8 relative z-10 animate-fade-in",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx("div",{className:"w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg shadow-telegram-primary/30 p-2 overflow-hidden border-4 border-telegram-primary",children:d.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",alt:"Iran Flag",className:"w-full h-full object-cover"})}),d.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:"انتخاب حساب کاربری"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm",children:"برای ورود یکی از حساب‌های ذخیره شده را انتخاب کنید"})]}),d.jsxs("div",{className:"space-y-3 mb-6",children:[e.map(w=>d.jsxs("button",{onClick:()=>R(w),className:"w-full bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 p-3 rounded-xl flex items-center gap-4 transition-colors border border-gray-100 dark:border-gray-700",children:[d.jsx("img",{src:w.avatar,className:"w-12 h-12 rounded-full object-cover"}),d.jsxs("div",{className:"text-right flex-1",children:[d.jsx("h3",{className:"font-bold text-gray-900 dark:text-white",children:w.name}),d.jsx("p",{className:"text-sm text-gray-500",children:w.email})]}),d.jsx(vh,{size:20,className:"text-gray-400 rotate-180"})]},w.uid)),d.jsxs("button",{onClick:()=>p(!1),className:"w-full bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 p-3 rounded-xl flex items-center gap-4 transition-colors border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 hover:text-telegram-primary",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center",children:d.jsx($_,{size:24})}),d.jsx("div",{className:"text-right flex-1",children:d.jsx("h3",{className:"font-bold",children:"استفاده از حساب دیگر"})})]})]})]}),N()]}):d.jsxs("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark p-4 relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 opacity-10 chat-bg-pattern pointer-events-none"}),d.jsxs("div",{className:"w-full max-w-md bg-white dark:bg-telegram-secondaryDark rounded-3xl shadow-2xl p-8 relative z-10 animate-fade-in border border-white/50 dark:border-white/5",children:[d.jsxs("div",{className:"text-center mb-8 relative",children:[e.length>0&&d.jsx("button",{onClick:()=>p(!0),className:"absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600",title:"بازگشت به لیست حساب‌ها",children:d.jsx(YI,{size:20})}),d.jsx("div",{className:"w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-4 shadow-xl shadow-telegram-primary/30 ring-4 ring-telegram-primary dark:ring-telegram-secondaryDark p-2 overflow-hidden transform hover:scale-105 transition-transform duration-500",children:d.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",alt:"Iran Flag",className:"w-full h-full object-cover"})}),d.jsx("h1",{className:"text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight",children:r?"ورود به ایران‌گرام":"ساخت حساب کاربری"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm font-medium",children:r?"به گفتگوهای خود بازگردید":"به جمع هزاران کاربر ایرانی بپیوندید"})]}),l&&d.jsxs("div",{className:"mb-6 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg flex items-start gap-2 text-right dir-rtl",dir:"rtl",children:[d.jsx(AI,{size:16,className:"mt-0.5 shrink-0"}),d.jsx("span",{children:l})]}),d.jsxs("form",{onSubmit:A,className:"space-y-4",children:[!r&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"relative group",children:[d.jsx(wu,{className:"absolute right-3 top-3 text-gray-400 group-focus-within:text-telegram-primary transition-colors",size:20}),d.jsx("input",{type:"text",name:"name",autoComplete:"name",placeholder:"نام و نام خانوادگی",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white font-medium placeholder:font-normal",value:m.name,onChange:w=>g({...m,name:w.target.value})})]}),d.jsxs("div",{className:"relative group",children:[d.jsx(Ia,{className:"absolute right-3 top-3 text-gray-400 group-focus-within:text-telegram-primary transition-colors",size:20}),d.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",placeholder:"شماره موبایل",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right font-medium placeholder:font-normal",value:m.phone,onChange:w=>g({...m,phone:w.target.value})})]})]}),d.jsxs("div",{className:"relative group",children:[d.jsx(qI,{className:"absolute right-3 top-3 text-gray-400 group-focus-within:text-telegram-primary transition-colors",size:20}),d.jsx("input",{type:"email",name:"email",autoComplete:"username",placeholder:"ایمیل",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right font-medium placeholder:font-normal",value:m.email,onChange:w=>g({...m,email:w.target.value})})]}),d.jsxs("div",{className:"relative group",children:[d.jsx(F_,{className:"absolute right-3 top-3 text-gray-400 group-focus-within:text-telegram-primary transition-colors",size:20}),d.jsx("input",{type:"password",name:"password",autoComplete:r?"current-password":"new-password",placeholder:"رمز عبور",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right font-medium placeholder:font-normal",value:m.password,onChange:w=>g({...m,password:w.target.value})})]}),d.jsx("button",{type:"submit",disabled:i,className:"w-full bg-telegram-primary hover:bg-telegram-primaryDark text-white font-bold py-3 rounded-xl shadow-lg shadow-telegram-primary/30 flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-6",children:i?d.jsx(U_,{className:"animate-spin"}):d.jsxs(d.Fragment,{children:[r?"ورود":"ثبت نام",d.jsx(vh,{size:20,className:"rotate-180"})]})})]}),d.jsxs("div",{className:"relative my-6",children:[d.jsx("div",{className:"absolute inset-0 flex items-center",children:d.jsx("div",{className:"w-full border-t border-gray-200 dark:border-white/10"})}),d.jsx("div",{className:"relative flex justify-center text-sm",children:d.jsx("span",{className:"px-2 bg-white dark:bg-telegram-secondaryDark text-gray-500",children:"یا"})})]}),d.jsxs("button",{type:"button",onClick:b,disabled:i,className:"w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-700 dark:text-white font-medium py-3 rounded-xl flex items-center justify-center gap-3 transition-colors",children:[d.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",className:"w-5 h-5",alt:"Google"}),"ورود با حساب گوگل"]}),d.jsx("div",{className:"mt-6 text-center",children:d.jsx("button",{onClick:()=>{s(!r),u("")},className:"text-telegram-primary hover:underline text-sm font-medium",children:r?"حساب کاربری ندارید؟ ثبت نام کنید":"قبلا ثبت نام کرده‌اید؟ وارد شوید"})})]}),N()]})},FP=({currentUser:t,onLogout:e})=>{const[n,r]=L.useState(""),[s,i]=L.useState(!1),[o,l]=L.useState(!1),u=async()=>{if(n.trim()){i(!0);try{await fP(t.uid,t.name,n),l(!0),r("")}catch(h){console.error("Error sending appeal",h),alert("خطا در ارسال پیام. لطفا دوباره تلاش کنید.")}finally{i(!1)}}};return d.jsx("div",{className:"fixed inset-0 z-[200] bg-gray-100 dark:bg-black flex flex-col items-center justify-center p-4 animate-fade-in",children:d.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800",children:[d.jsxs("div",{className:"bg-red-600 p-8 flex flex-col items-center text-center text-white",children:[d.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm animate-pulse",children:d.jsx(Hf,{size:40})}),d.jsx("h1",{className:"text-2xl font-bold mb-2",children:"حساب مسدود شده است"}),d.jsx("p",{className:"opacity-90 text-sm leading-relaxed",children:"دسترسی شما به دلیل نقض قوانین محدود شده است."})]}),d.jsxs("div",{className:"p-6 space-y-6",children:[d.jsxs("div",{className:"flex items-start gap-3 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-red-800 dark:text-red-200 text-sm border border-red-100 dark:border-red-800",children:[d.jsx(F_,{className:"shrink-0 mt-1",size:18}),d.jsx("p",{className:"leading-relaxed",children:"شما اجازه چت یا فعالیت در گروه‌ها را ندارید. تنها راه ارتباطی شما، ارسال پیام مستقیم به مدیریت یا ادمین جهت درخواست رفع مسدودی است."})]}),o?d.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl text-center animate-fade-in",children:[d.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 rounded-full flex items-center justify-center mx-auto mb-3",children:d.jsx(la,{size:24,className:"rotate-180"})}),d.jsx("h3",{className:"font-bold text-green-700 dark:text-green-300 mb-1",children:"پیام ارسال شد"}),d.jsx("p",{className:"text-sm text-green-600 dark:text-green-400",children:"پیام شما برای تیم مدیریت ارسال گردید. لطفاً منتظر بررسی بمانید."}),d.jsx("button",{onClick:()=>l(!1),className:"text-xs text-gray-400 underline mt-4 hover:text-gray-600 dark:hover:text-gray-200",children:"ارسال پیام مجدد"})]}):d.jsxs("div",{className:"space-y-3",children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300",children:[d.jsx(Wf,{size:16}),"ارسال پیام مستقیم به مدیریت/ادمین"]}),d.jsx("textarea",{value:n,onChange:h=>r(h.target.value),placeholder:"متن درخواست یا عذرخواهی خود را اینجا بنویسید...",className:"w-full h-32 p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-black/20 focus:ring-2 focus:ring-red-500 outline-none resize-none text-gray-900 dark:text-white transition-all"}),d.jsx("button",{onClick:u,disabled:s||!n.trim(),className:"w-full bg-telegram-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg",children:s?"در حال ارسال...":d.jsxs(d.Fragment,{children:[d.jsx(la,{size:18,className:"rotate-180"}),"ارسال درخواست"]})})]}),d.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800 pt-4",children:d.jsxs("button",{onClick:e,className:"w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-500 transition-colors py-2 text-sm",children:[d.jsx(z_,{size:16}),"خروج و تعویض حساب"]})})]})]})})},zP="data:audio/mpeg;base64,//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",Ql=[{id:"global_chat",name:"چت عمومی جهانی 🌍",avatar:"https://cdn-icons-png.flaticon.com/512/921/921490.png",status:"online",bio:"گفتگو با تمام کاربران آنلاین در سراسر جهان (متصل به سرور واقعی)",username:"@global_world",phone:"",type:"group",isGlobal:!0},{id:"saved",name:"پیام‌های ذخیره شده",avatar:"",status:"online",bio:"فضای شخصی شما برای ذخیره پیام‌ها و فایل‌ها",username:"@saved_messages",phone:"",type:"user"}],Ro={};Ql.forEach(t=>{Ro[t.id]={contactId:t.id,messages:[],unreadCount:0,draft:""}});const BP={name:"کاربر مهمان",bio:"...",username:"@guest",phone:"",role:"user",isBanned:!1},$P=()=>{var Rn,fs;const[t,e]=L.useState(null),[n,r]=L.useState(!0),[s,i]=L.useState(Ql),[o,l]=L.useState(Ro),[u,h]=L.useState(BP),[p,m]=L.useState([]),[g,A]=L.useState(""),[b,R]=L.useState("default"),[N,w]=L.useState(null),[_,k]=L.useState(()=>localStorage.getItem("irangram_theme")||xs.LIGHT),[O,M]=L.useState(window.innerWidth<768),[z,x]=L.useState(!1),[v,E]=L.useState(null),[I,S]=L.useState(!1),[C,T]=L.useState(!1),[Ne,W]=L.useState(!1),[ye,pe]=L.useState(null),[B,J]=L.useState(!1),[ne,_e]=L.useState(0),[ce,K]=L.useState(!1),[le,Ae]=L.useState(null),ke=L.useRef(null),At=L.useRef(new Audio(zP));L.useEffect(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[]),L.useEffect(()=>{if(u.isBanned&&"Notification"in window&&Notification.permission==="granted")try{new Notification("⛔ حساب کاربری مسدود شد",{body:"دسترسی شما به امکانات برنامه محدود شده است. برای پیگیری به مدیریت پیام دهید.",icon:"https://cdn-icons-png.flaticon.com/512/2111/2111615.png",tag:"ban_status",requireInteraction:!0})}catch(V){console.error("Notification trigger failed",V)}},[u.isBanned]),L.useEffect(()=>{const V=Y=>{Y.preventDefault(),pe(Y)};return window.addEventListener("beforeinstallprompt",V),()=>{window.removeEventListener("beforeinstallprompt",V)}},[]);const st=async()=>{if(!ye)return;ye.prompt();const{outcome:V}=await ye.userChoice;V==="accepted"&&pe(null)};L.useEffect(()=>{const V=localStorage.getItem("irangram_accounts");V&&m(JSON.parse(V))},[]),L.useEffect(()=>{const V=sP(async Y=>{var me;if(Y){e(Y);const H=await lP(Y.uid);h({name:(H==null?void 0:H.name)||Y.displayName||"کاربر",bio:(H==null?void 0:H.bio)||"",username:(H==null?void 0:H.username)||((me=Y.email)==null?void 0:me.split("@")[0])||"",phone:(H==null?void 0:H.phone)||"",role:(H==null?void 0:H.role)||"user",isBanned:(H==null?void 0:H.isBanned)||!1});const he=Y.uid,Xe=localStorage.getItem(`irangram_contacts_${he}`);i(Xe?JSON.parse(Xe):Ql);const $e=localStorage.getItem(`irangram_sessions_${he}`);let We=JSON.parse($e||JSON.stringify(Ro));We.global_chat||(We.global_chat=Ro.global_chat),l(We);const nn=localStorage.getItem(`irangram_wallpaper_${he}`);R(nn||"default"),m(bt=>{var ps;const Wn={uid:Y.uid,name:(H==null?void 0:H.name)||Y.displayName||"کاربر",avatar:(H==null?void 0:H.avatar)||`https://ui-avatars.com/api/?name=${Y.email}`,email:Y.email||"",username:(H==null?void 0:H.username)||((ps=Y.email)==null?void 0:ps.split("@")[0])||"",role:(H==null?void 0:H.role)||"user"},Hn=bt.filter(D=>D.uid!==Y.uid),Kn=[Wn,...Hn];return localStorage.setItem("irangram_accounts",JSON.stringify(Kn)),Kn})}else e(null),i(Ql),l(Ro);r(!1)});return()=>V()},[]),L.useEffect(()=>{if(!t)return;const V=uP(t.uid,Y=>{h(me=>({...me,...Y}))});return()=>V()},[t]),L.useEffect(()=>{t&&(localStorage.setItem(`irangram_sessions_${t.uid}`,JSON.stringify(o)),localStorage.setItem(`irangram_contacts_${t.uid}`,JSON.stringify(s)),localStorage.setItem(`irangram_wallpaper_${t.uid}`,b))},[o,s,b,t]),L.useEffect(()=>{localStorage.setItem("irangram_theme",_)},[_]),L.useEffect(()=>{const V=()=>{M(window.innerWidth<768),window.innerWidth<1024&&x(!1)};return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]),L.useEffect(()=>{_===xs.DARK?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[_]),L.useEffect(()=>{if(!t||u.isBanned)return;const V=kP(me=>{me.currentVersion>Yt.VERSION&&W(!0)}),Y=wP(t.uid,me=>{if(me.length>0){const H=me[0];Ae({title:H.title,message:H.message}),EP(t.uid,H.id)}});return AP(),()=>{V(),Y()}},[t,u.isBanned]),L.useEffect(()=>{if(!t||u.isBanned)return;const V=Y=>{const me=Y.map(H=>({...H,senderId:H.senderId===t.uid?"me":H.senderId,reactions:H.reactions||{}}));l(H=>{var We,nn,bt,Wn,Hn;const he=(nn=(We=H.global_chat)==null?void 0:We.messages.slice(-1)[0])==null?void 0:nn.id,Xe=(bt=me.slice(-1)[0])==null?void 0:bt.id;let $e=((Wn=H.global_chat)==null?void 0:Wn.unreadCount)||0;if(he!==Xe&&me.length>0&&me[me.length-1].senderId!=="me"){N!=="global_chat"&&($e+=1);try{At.current.currentTime=0,At.current.play().catch(()=>{})}catch{}}return{...H,global_chat:{contactId:"global_chat",messages:me,unreadCount:N==="global_chat"?0:$e,draft:((Hn=H.global_chat)==null?void 0:Hn.draft)||""}}})};return ke.current=xP(V),()=>{ke.current&&ke.current()}},[t,N,u.isBanned]),L.useEffect(()=>{let V;return B?V=setInterval(()=>{_e(Y=>Y+1)},1e3):_e(0),()=>clearInterval(V)},[B]);const ls=()=>k(V=>V===xs.LIGHT?xs.DARK:xs.LIGHT),St=V=>{w(V),x(!1),E(null),l(Y=>({...Y,[V]:{...Y[V],unreadCount:0}}))},Lt=V=>{if(s.find(Y=>Y.id===V.id)){St(V.id);return}i(Y=>[...Y,V]),l(Y=>({...Y,[V.id]:{contactId:V.id,messages:[],unreadCount:0,draft:""}})),St(V.id)},$n=L.useCallback(async(V,Y)=>{!N||!t||(N==="global_chat"?await IP(V,Y,t.uid):l(me=>{const H=me[N];if(!H)return me;const he=H.messages.map(Xe=>{if(Xe.id!==V)return Xe;const $e={...Xe.reactions},We=$e[Y]||[];return We.includes("me")?($e[Y]=We.filter(nn=>nn!=="me"),$e[Y].length===0&&delete $e[Y]):$e[Y]=[...We,"me"],{...Xe,reactions:$e}});return{...me,[N]:{...H,messages:he}}}))},[N,t]),us=L.useCallback(async V=>{N&&(N==="global_chat"?await Ix(V):l(Y=>({...Y,[N]:{...Y[N],messages:Y[N].messages.filter(me=>me.id!==V)}})))},[N]),cs=L.useCallback(async(V,Y)=>{if(!N||!t)return;if(N==="global_chat"){const he=u.name?`https://ui-avatars.com/api/?name=${u.name}&background=random&color=fff&size=64`:"";let Xe=V.imageUrl,$e=V.fileUrl;if(V.file)try{const We=V.type==="audio"?"audios":V.type==="image"?"images":"files",nn=`uploads/${t.uid}/${We}/${Date.now()}_${V.fileName||"file"}`,bt=await hP(V.file,nn);V.type==="image"?Xe=bt:$e=bt}catch(We){console.error("Upload failed",We),alert("آپلود فایل با خطا مواجه شد.");return}await TP({text:V.text,type:V.type,imageUrl:Xe,fileUrl:$e,fileName:V.fileName,fileSize:V.fileSize,audioDuration:V.audioDuration,isSticker:V.isSticker,replyToId:Y,senderId:t.uid},{name:u.name,avatar:he,role:u.role});return}let me=V.imageUrl;V.file&&(me=URL.createObjectURL(V.file));const H={id:Date.now().toString(),text:V.text||(V.isSticker?"Sticker":V.type==="image"?"عکس":V.type==="audio"?"پیام صوتی":"فایل"),senderId:"me",timestamp:Date.now(),status:"read",type:V.type,imageUrl:V.type==="image"?me:void 0,fileUrl:V.type!=="image"?me:void 0,fileName:V.fileName,fileSize:V.fileSize,audioDuration:V.audioDuration,isSticker:V.isSticker,replyToId:Y,reactions:{}};l(he=>({...he,[N]:{...he[N],messages:[...he[N].messages,H]}}))},[N,t,u]),wr=async V=>{const Y={...V,role:u.role};if(h(Y),t){await cP(t.uid,Y),m(H=>H.map(he=>he.uid===t.uid?{...he,name:Y.name,username:Y.username}:he));const me=p.map(H=>H.uid===t.uid?{...H,name:Y.name,username:Y.username}:H);localStorage.setItem("irangram_accounts",JSON.stringify(me))}},Er=async()=>{window.confirm("آیا برای خروج مطمئن هستید؟")&&(A(""),await Id(t==null?void 0:t.uid),e(null))},ds=async()=>{A(""),await Id(t==null?void 0:t.uid),e(null)},hs=async V=>{const Y=p.find(me=>me.uid===V);Y&&A(Y.email),await Id(t==null?void 0:t.uid),e(null)},Sn=V=>{const Y={id:V.uid,name:V.name,avatar:V.avatar,bio:V.bio,username:"@"+V.username,phone:V.phone,status:"offline",type:"user"};Lt(Y)},bn=V=>{V.id==="me"||V.id===(t==null?void 0:t.uid)?S(!0):E({id:V.id,name:V.name||"کاربر",avatar:V.avatar||"",username:"",phone:"",bio:"کاربر ایران‌گرام",type:"user",status:"offline"})};return n?d.jsx("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-white dark:bg-black text-telegram-primary",children:d.jsx(WI,{className:"animate-spin w-10 h-10"})}):t?u.isBanned?d.jsx(FP,{currentUser:{uid:t.uid,name:u.name},onLogout:Er}):d.jsxs("div",{className:"flex flex-col h-[100dvh] w-full overflow-hidden bg-white dark:bg-black font-sans relative",children:[le&&d.jsx("div",{className:"fixed inset-0 z-[120] bg-black/60 flex items-center justify-center p-6 animate-fade-in backdrop-blur-sm",children:d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm w-full border-t-4 border-blue-500",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400",children:[d.jsx($f,{size:28}),d.jsx("h3",{className:"text-xl font-bold",children:le.title})]}),d.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-6 leading-relaxed whitespace-pre-wrap",children:le.message}),d.jsx("button",{onClick:()=>Ae(null),className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl transition-colors",children:"متوجه شدم"})]})}),Ne&&d.jsx("div",{className:"fixed inset-0 z-[100] bg-telegram-primary/95 flex flex-col items-center justify-center p-6 text-white text-center animate-fade-in",children:d.jsxs("div",{className:"bg-white text-gray-900 rounded-3xl p-8 max-w-sm w-full shadow-2xl",children:[d.jsx("div",{className:"w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-telegram-primary",children:d.jsx(tc,{size:40})}),d.jsx("h2",{className:"text-2xl font-bold mb-2",children:"نسخه جدید موجود است!"}),d.jsx("p",{className:"text-gray-500 mb-6 text-sm",children:"برای عملکرد صحیح برنامه و دسترسی به قابلیت‌های جدید، لطفاً همین حالا بروزرسانی کنید."}),d.jsx("button",{onClick:()=>window.location.reload(),className:"w-full bg-telegram-primary hover:bg-telegram-primaryDark text-white font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-105",children:"دریافت نسخه جدید"})]})}),B&&d.jsxs("div",{className:"fixed inset-0 z-[90] bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-between py-12 text-white animate-fade-in",children:[d.jsxs("div",{className:"flex flex-col items-center mt-10",children:[d.jsx("div",{className:"w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-4 shadow-2xl",children:d.jsx("img",{src:((Rn=s.find(V=>V.id===N))==null?void 0:Rn.avatar)||"https://via.placeholder.com/150",className:"w-full h-full object-cover"})}),d.jsx("h2",{className:"text-3xl font-bold mb-2",children:((fs=s.find(V=>V.id===N))==null?void 0:fs.name)||"تماس ناشناس"}),d.jsx("p",{className:"text-white/60 text-lg animate-pulse",children:ne>0?`${Math.floor(ne/60)}:${(ne%60).toString().padStart(2,"0")}`:"در حال تماس..."})]}),d.jsxs("div",{className:"flex items-center gap-8 mb-10",children:[d.jsx("button",{onClick:()=>K(!ce),className:`p-4 rounded-full transition-all ${ce?"bg-white text-gray-900":"bg-white/10 hover:bg-white/20"}`,children:ce?d.jsx(VI,{size:32}):d.jsx(B_,{size:32})}),d.jsx("button",{onClick:()=>{J(!1)},className:"p-6 bg-red-500 rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all",children:d.jsx(BI,{size:40})}),d.jsx("button",{className:"p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all",children:d.jsx(Ia,{size:32,className:"rotate-180"})})]})]}),C&&d.jsx(MP,{onClose:()=>T(!1),currentUserEmail:t.email,currentUserRole:u.role||"user",onStartChat:Sn}),d.jsx(VP,{isOpen:I,onClose:()=>S(!1),userProfile:u,onSave:wr,wallpaper:b,onSaveWallpaper:R}),d.jsxs("div",{className:"flex-1 flex overflow-hidden relative",children:[d.jsxs("div",{className:`
            ${O&&N?"hidden":"flex"}
            ${O?"w-full":"w-80 lg:w-96"} 
            flex-col h-full z-20 transition-all duration-300 shadow-xl bg-white dark:bg-telegram-bgDark
          `,children:[d.jsx("div",{className:"flex-1 overflow-hidden",children:d.jsx(SP,{contacts:s,sessions:o,activeContactId:N,onSelectContact:St,toggleTheme:ls,theme:_,userProfile:u,onOpenSettings:()=>S(!0),onOpenAdminPanel:()=>T(!0),onAddContact:Lt,showInstallButton:!!ye,onInstall:st,storedAccounts:p,onAddAccount:ds,onSwitchAccount:hs})}),d.jsxs("div",{className:"p-2 border-t border-telegram-border dark:border-telegram-borderDark flex justify-between items-center bg-gray-50 dark:bg-telegram-bgDark",children:[d.jsxs("span",{className:"text-xs text-gray-400 px-2",children:["v",Yt.VERSION]}),d.jsx("button",{onClick:Er,className:"p-2 text-red-500 hover:bg-red-50 dark:hover:bg-white/5 rounded-lg",title:"خروج کامل",children:d.jsx(z_,{size:18})})]})]}),d.jsxs("div",{className:`
            ${O&&!N?"hidden":"flex"}
            flex-1 h-full relative flex-col min-w-0
          `,children:[d.jsx("div",{className:"flex-1 h-full relative flex flex-col min-w-0",children:N?d.jsx(jP,{contact:s.find(V=>V.id===N),messages:o[N].messages,myId:"me",myRole:u.role||"user",onSendMessage:cs,onEditMessage:()=>{},onDeleteMessage:us,onReaction:$n,onBack:()=>w(null),isMobile:O,onProfileClick:()=>x(!0),onAvatarClick:bn,wallpaper:b,onCall:()=>J(!0)}):d.jsx("div",{className:"h-full w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark text-gray-400 dark:text-gray-600 pattern-bg",children:d.jsxs("div",{className:"text-center p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl",children:[d.jsx("span",{className:"text-4xl block mb-4",children:"👋"}),d.jsx("h3",{className:"font-bold mb-2",children:"به ایران‌گرام خوش آمدید"}),d.jsx("p",{className:"text-sm",children:"برای شروع گفتگو کلیک کنید"})]})})}),(z||v)&&d.jsx("div",{className:`
                    absolute inset-y-0 right-0 z-50 bg-white dark:bg-telegram-secondaryDark shadow-2xl transition-transform duration-300
                    ${O?"w-full":"w-80 border-l border-telegram-border dark:border-telegram-borderDark"}
                `,children:d.jsx(qP,{contact:v||s.find(V=>V.id===N),onClose:()=>{x(!1),E(null)},onStartChat:v?V=>{Lt(V),E(null)}:void 0})})]})]})]}):d.jsx(UP,{onSuccess:e,storedAccounts:p,initialEmail:g})},Ax=document.getElementById("root");if(!Ax)throw new Error("Could not find root element to mount to");const WP=kd.createRoot(Ax);WP.render(d.jsx(h1.StrictMode,{children:d.jsx($P,{})}));
