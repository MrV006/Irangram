(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vy={exports:{}},su={},Oy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),BE=Symbol.for("react.portal"),$E=Symbol.for("react.fragment"),WE=Symbol.for("react.strict_mode"),HE=Symbol.for("react.profiler"),KE=Symbol.for("react.provider"),GE=Symbol.for("react.context"),QE=Symbol.for("react.forward_ref"),YE=Symbol.for("react.suspense"),XE=Symbol.for("react.memo"),JE=Symbol.for("react.lazy"),rm=Symbol.iterator;function ZE(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var Ly={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},My=Object.assign,jy={};function hs(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Ly}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uy(){}Uy.prototype=hs.prototype;function cd(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Ly}var hd=cd.prototype=new Uy;hd.constructor=cd;My(hd,hs.prototype);hd.isPureReactComponent=!0;var im=Array.isArray,Fy=Object.prototype.hasOwnProperty,dd={current:null},zy={key:!0,ref:!0,__self:!0,__source:!0};function By(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fy.call(e,r)&&!zy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:zo,type:t,key:s,ref:o,props:i,_owner:dd.current}}function e1(t,e){return{$$typeof:zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===zo}function t1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sm=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?t1(""+t.key):e.toString(36)}function Ya(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zo:case BE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ic(o,0):r,im(i)?(n="",t!=null&&(n=t.replace(sm,"$&/")+"/"),Ya(i,e,n,"",function(h){return h})):i!=null&&(fd(i)&&(i=e1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",im(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ic(s,l);o+=Ya(s,e,n,u,i)}else if(u=ZE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ic(s,l++),o+=Ya(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var r=[],i=0;return Ya(t,r,"","",function(s){return e.call(n,s,i++)}),r}function n1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},Xa={transition:null},r1={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:dd};function $y(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=hs;re.Fragment=$E;re.Profiler=HE;re.PureComponent=cd;re.StrictMode=WE;re.Suspense=YE;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;re.act=$y;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=My({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fy.call(e,u)&&!zy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:zo,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:GE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KE,_context:t},t.Consumer=t};re.createElement=By;re.createFactory=function(t){var e=By.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:QE,render:t}};re.isValidElement=fd;re.lazy=function(t){return{$$typeof:JE,_payload:{_status:-1,_result:t},_init:n1}};re.memo=function(t,e){return{$$typeof:XE,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};re.unstable_act=$y;re.useCallback=function(t,e){return Et.current.useCallback(t,e)};re.useContext=function(t){return Et.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};re.useEffect=function(t,e){return Et.current.useEffect(t,e)};re.useId=function(){return Et.current.useId()};re.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Et.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};re.useRef=function(t){return Et.current.useRef(t)};re.useState=function(t){return Et.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Et.current.useTransition()};re.version="18.3.1";Oy.exports=re;var B=Oy.exports;const i1=zE(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1=B,o1=Symbol.for("react.element"),a1=Symbol.for("react.fragment"),l1=Object.prototype.hasOwnProperty,u1=s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c1={key:!0,ref:!0,__self:!0,__source:!0};function Wy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)l1.call(e,r)&&!c1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:o1,type:t,key:s,ref:o,props:i,_owner:u1.current}}su.Fragment=a1;su.jsx=Wy;su.jsxs=Wy;Vy.exports=su;var f=Vy.exports,Bc={},Hy={exports:{}},Ut={},Ky={exports:{}},Gy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,H){var Q=V.length;V.push(H);e:for(;0<Q;){var ae=Q-1>>>1,ue=V[ae];if(0<i(ue,H))V[ae]=H,V[Q]=ue,Q=ae;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var H=V[0],Q=V.pop();if(Q!==H){V[0]=Q;e:for(var ae=0,ue=V.length,ye=ue>>>1;ae<ye;){var bt=2*(ae+1)-1,qt=V[bt],Tt=bt+1,pt=V[Tt];if(0>i(qt,Q))Tt<ue&&0>i(pt,qt)?(V[ae]=pt,V[Tt]=Q,ae=Tt):(V[ae]=qt,V[bt]=Q,ae=bt);else if(Tt<ue&&0>i(pt,Q))V[ae]=pt,V[Tt]=Q,ae=Tt;else break e}}return H}function i(V,H){var Q=V.sortIndex-H.sortIndex;return Q!==0?Q:V.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,g=null,m=3,A=!1,P=!1,C=!1,D=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(V){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=V)r(h),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(h)}}function q(V){if(C=!1,x(V),!P)if(n(u)!==null)P=!0,Nt(F);else{var H=n(h);H!==null&&Ke(q,H.startTime-V)}}function F(V,H){P=!1,C&&(C=!1,k(v),v=-1),A=!0;var Q=m;try{for(x(H),g=n(u);g!==null&&(!(g.expirationTime>H)||V&&!S());){var ae=g.callback;if(typeof ae=="function"){g.callback=null,m=g.priorityLevel;var ue=ae(g.expirationTime<=H);H=t.unstable_now(),typeof ue=="function"?g.callback=ue:g===n(u)&&r(u),x(H)}else r(u);g=n(u)}if(g!==null)var ye=!0;else{var bt=n(h);bt!==null&&Ke(q,bt.startTime-H),ye=!1}return ye}finally{g=null,m=Q,A=!1}}var U=!1,w=null,v=-1,_=5,I=-1;function S(){return!(t.unstable_now()-I<_)}function R(){if(w!==null){var V=t.unstable_now();I=V;var H=!0;try{H=w(!0,V)}finally{H?T():(U=!1,w=null)}}else U=!1}var T;if(typeof E=="function")T=function(){E(R)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,nt=be.port2;be.port1.onmessage=R,T=function(){nt.postMessage(null)}}else T=function(){D(R,0)};function Nt(V){w=V,U||(U=!0,T())}function Ke(V,H){v=D(function(){V(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,Nt(F))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(V){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var Q=m;m=H;try{return V()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,H){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Q=m;m=V;try{return H()}finally{m=Q}},t.unstable_scheduleCallback=function(V,H,Q){var ae=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,V){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Q+ue,V={id:p++,callback:H,priorityLevel:V,startTime:Q,expirationTime:ue,sortIndex:-1},Q>ae?(V.sortIndex=Q,e(h,V),n(u)===null&&V===n(h)&&(C?(k(v),v=-1):C=!0,Ke(q,Q-ae))):(V.sortIndex=ue,e(u,V),P||A||(P=!0,Nt(F))),V},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(V){var H=m;return function(){var Q=m;m=H;try{return V.apply(this,arguments)}finally{m=Q}}}})(Gy);Ky.exports=Gy;var h1=Ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=B,jt=h1;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qy=new Set,po={};function fi(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(po[t]=e,t=0;t<e.length;t++)Qy.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=Object.prototype.hasOwnProperty,f1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,om={},am={};function p1(t){return $c.call(am,t)?!0:$c.call(om,t)?!1:f1.test(t)?am[t]=!0:(om[t]=!0,!1)}function m1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g1(t,e,n,r){if(e===null||typeof e>"u"||m1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var pd=/[\-:]([a-z])/g;function md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pd,md);et[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pd,md);et[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pd,md);et[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function gd(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g1(e,n,i,r)&&(n=null),r||i===null?p1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),Ai=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Kc=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),Jy=Symbol.for("react.offscreen"),lm=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,sc;function Bs(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var oc=!1;function ac(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function y1(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function Gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Si:return"Fragment";case Ai:return"Portal";case Wc:return"Profiler";case yd:return"StrictMode";case Hc:return"Suspense";case Kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xy:return(t.displayName||"Context")+".Consumer";case Yy:return(t._context.displayName||"Context")+".Provider";case vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:Gc(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Gc(t(e))}catch{}}return null}function v1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gc(e);case 8:return e===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _1(t){var e=Zy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=_1(t))}function ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qc(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tv(t,e){e=e.checked,e!=null&&gd(t,"checked",e,!1)}function Yc(t,e){tv(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xc(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xc(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $s=Array.isArray;function Mi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if($s(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function nv(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,iv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w1=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){w1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var E1=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(t,e){if(e){if(E1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rh=null,ji=null,Ui=null;function fm(t){if(t=Wo(t)){if(typeof rh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=cu(e),rh(t.stateNode,t.type,e))}}function av(t){ji?Ui?Ui.push(t):Ui=[t]:ji=t}function lv(){if(ji){var t=ji,e=Ui;if(Ui=ji=null,fm(t),e)for(t=0;t<e.length;t++)fm(e[t])}}function uv(t,e){return t(e)}function cv(){}var lc=!1;function hv(t,e,n){if(lc)return t(e,n);lc=!0;try{return uv(t,e,n)}finally{lc=!1,(ji!==null||Ui!==null)&&(cv(),lv())}}function go(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ih=!1;if(Un)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{ih=!1}function I1(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var eo=!1,vl=null,_l=!1,sh=null,T1={onError:function(t){eo=!0,vl=t}};function x1(t,e,n,r,i,s,o,l,u){eo=!1,vl=null,I1.apply(T1,arguments)}function k1(t,e,n,r,i,s,o,l,u){if(x1.apply(this,arguments),eo){if(eo){var h=vl;eo=!1,vl=null}else throw Error(j(198));_l||(_l=!0,sh=h)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pm(t){if(pi(t)!==t)throw Error(j(188))}function A1(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pm(i),t;if(s===r)return pm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function fv(t){return t=A1(t),t!==null?pv(t):null}function pv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pv(t);if(e!==null)return e;t=t.sibling}return null}var mv=jt.unstable_scheduleCallback,mm=jt.unstable_cancelCallback,S1=jt.unstable_shouldYield,C1=jt.unstable_requestPaint,Oe=jt.unstable_now,R1=jt.unstable_getCurrentPriorityLevel,Ed=jt.unstable_ImmediatePriority,gv=jt.unstable_UserBlockingPriority,wl=jt.unstable_NormalPriority,P1=jt.unstable_LowPriority,yv=jt.unstable_IdlePriority,ou=null,gn=null;function N1(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:D1,b1=Math.log,q1=Math.LN2;function D1(t){return t>>>=0,t===0?32:31-(b1(t)/q1|0)|0}var ba=64,qa=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ws(l):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function V1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ln(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=V1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vv(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function L1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function _v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wv,Td,Ev,Iv,Tv,ah=!1,Da=[],pr=null,mr=null,gr=null,yo=new Map,vo=new Map,or=[],M1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gm(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function Os(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wo(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function j1(t,e,n,r,i){switch(e){case"focusin":return pr=Os(pr,t,e,n,r,i),!0;case"dragenter":return mr=Os(mr,t,e,n,r,i),!0;case"mouseover":return gr=Os(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return yo.set(s,Os(yo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vo.set(s,Os(vo.get(s)||null,t,e,n,r,i)),!0}return!1}function xv(t){var e=Gr(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=dv(n),e!==null){t.blockedOn=e,Tv(t.priority,function(){Ev(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nh=r,n.target.dispatchEvent(r),nh=null}else return e=Wo(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function ym(t,e,n){Ja(t)&&n.delete(e)}function U1(){ah=!1,pr!==null&&Ja(pr)&&(pr=null),mr!==null&&Ja(mr)&&(mr=null),gr!==null&&Ja(gr)&&(gr=null),yo.forEach(ym),vo.forEach(ym)}function Ls(t,e){t.blockedOn===e&&(t.blockedOn=null,ah||(ah=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,U1)))}function _o(t){function e(i){return Ls(i,t)}if(0<Da.length){Ls(Da[0],t);for(var n=1;n<Da.length;n++){var r=Da[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&Ls(pr,t),mr!==null&&Ls(mr,t),gr!==null&&Ls(gr,t),yo.forEach(e),vo.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)xv(n),n.blockedOn===null&&or.shift()}var Fi=Gn.ReactCurrentBatchConfig,Il=!0;function F1(t,e,n,r){var i=me,s=Fi.transition;Fi.transition=null;try{me=1,xd(t,e,n,r)}finally{me=i,Fi.transition=s}}function z1(t,e,n,r){var i=me,s=Fi.transition;Fi.transition=null;try{me=4,xd(t,e,n,r)}finally{me=i,Fi.transition=s}}function xd(t,e,n,r){if(Il){var i=lh(t,e,n,r);if(i===null)_c(t,e,r,Tl,n),gm(t,r);else if(j1(i,t,e,n,r))r.stopPropagation();else if(gm(t,r),e&4&&-1<M1.indexOf(t)){for(;i!==null;){var s=Wo(i);if(s!==null&&wv(s),s=lh(t,e,n,r),s===null&&_c(t,e,r,Tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _c(t,e,r,null,n)}}var Tl=null;function lh(t,e,n,r){if(Tl=null,t=wd(r),t=Gr(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R1()){case Ed:return 1;case gv:return 4;case wl:case P1:return 16;case yv:return 536870912;default:return 16}default:return 16}}var hr=null,kd=null,Za=null;function Av(){if(Za)return Za;var t,e=kd,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Za=i.slice(t,1<r?1-r:void 0)}function el(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function vm(){return!1}function Ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:vm,this.isPropagationStopped=vm,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=Ft(ds),$o=Re({},ds,{view:0,detail:0}),B1=Ft($o),cc,hc,Ms,au=Re({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ms&&(Ms&&t.type==="mousemove"?(cc=t.screenX-Ms.screenX,hc=t.screenY-Ms.screenY):hc=cc=0,Ms=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),_m=Ft(au),$1=Re({},au,{dataTransfer:0}),W1=Ft($1),H1=Re({},$o,{relatedTarget:0}),dc=Ft(H1),K1=Re({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),G1=Ft(K1),Q1=Re({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Y1=Ft(Q1),X1=Re({},ds,{data:0}),wm=Ft(X1),J1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eI[t])?!!e[t]:!1}function Sd(){return tI}var nI=Re({},$o,{key:function(t){if(t.key){var e=J1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rI=Ft(nI),iI=Re({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Em=Ft(iI),sI=Re({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),oI=Ft(sI),aI=Re({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),lI=Ft(aI),uI=Re({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cI=Ft(uI),hI=[9,13,27,32],Cd=Un&&"CompositionEvent"in window,to=null;Un&&"documentMode"in document&&(to=document.documentMode);var dI=Un&&"TextEvent"in window&&!to,Sv=Un&&(!Cd||to&&8<to&&11>=to),Im=" ",Tm=!1;function Cv(t,e){switch(t){case"keyup":return hI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ci=!1;function fI(t,e){switch(t){case"compositionend":return Rv(e);case"keypress":return e.which!==32?null:(Tm=!0,Im);case"textInput":return t=e.data,t===Im&&Tm?null:t;default:return null}}function pI(t,e){if(Ci)return t==="compositionend"||!Cd&&Cv(t,e)?(t=Av(),Za=kd=hr=null,Ci=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sv&&e.locale!=="ko"?null:e.data;default:return null}}var mI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mI[t.type]:e==="textarea"}function Pv(t,e,n,r){av(r),e=xl(e,"onChange"),0<e.length&&(n=new Ad("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var no=null,wo=null;function gI(t){Fv(t,0)}function lu(t){var e=Ni(t);if(ev(e))return t}function yI(t,e){if(t==="change")return e}var Nv=!1;if(Un){var fc;if(Un){var pc="oninput"in document;if(!pc){var km=document.createElement("div");km.setAttribute("oninput","return;"),pc=typeof km.oninput=="function"}fc=pc}else fc=!1;Nv=fc&&(!document.documentMode||9<document.documentMode)}function Am(){no&&(no.detachEvent("onpropertychange",bv),wo=no=null)}function bv(t){if(t.propertyName==="value"&&lu(wo)){var e=[];Pv(e,wo,t,wd(t)),hv(gI,e)}}function vI(t,e,n){t==="focusin"?(Am(),no=e,wo=n,no.attachEvent("onpropertychange",bv)):t==="focusout"&&Am()}function _I(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(wo)}function wI(t,e){if(t==="click")return lu(e)}function EI(t,e){if(t==="input"||t==="change")return lu(e)}function II(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:II;function Eo(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$c.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,e){var n=Sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dv(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function TI(t){var e=Dv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qv(n.ownerDocument.documentElement,n)){if(r!==null&&Rd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cm(n,s);var o=Cm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xI=Un&&"documentMode"in document&&11>=document.documentMode,Ri=null,uh=null,ro=null,ch=!1;function Rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||Ri==null||Ri!==yl(r)||(r=Ri,"selectionStart"in r&&Rd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&Eo(ro,r)||(ro=r,r=xl(uh,"onSelect"),0<r.length&&(e=new Ad("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ri)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pi={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},mc={},Vv={};Un&&(Vv=document.createElement("div").style,"AnimationEvent"in window||(delete Pi.animationend.animation,delete Pi.animationiteration.animation,delete Pi.animationstart.animation),"TransitionEvent"in window||delete Pi.transitionend.transition);function uu(t){if(mc[t])return mc[t];if(!Pi[t])return t;var e=Pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vv)return mc[t]=e[n];return t}var Ov=uu("animationend"),Lv=uu("animationiteration"),Mv=uu("animationstart"),jv=uu("transitionend"),Uv=new Map,Pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){Uv.set(t,e),fi(e,[t])}for(var gc=0;gc<Pm.length;gc++){var yc=Pm[gc],kI=yc.toLowerCase(),AI=yc[0].toUpperCase()+yc.slice(1);Nr(kI,"on"+AI)}Nr(Ov,"onAnimationEnd");Nr(Lv,"onAnimationIteration");Nr(Mv,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(jv,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function Nm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,k1(r,e,void 0,t),t.currentTarget=null}function Fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Nm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Nm(i,l,h),s=u}}}if(_l)throw t=sh,_l=!1,sh=null,t}function Ee(t,e){var n=e[mh];n===void 0&&(n=e[mh]=new Set);var r=t+"__bubble";n.has(r)||(zv(e,t,2,!1),n.add(r))}function vc(t,e,n){var r=0;e&&(r|=4),zv(n,t,r,e)}var La="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[La]){t[La]=!0,Qy.forEach(function(n){n!=="selectionchange"&&(SI.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[La]||(e[La]=!0,vc("selectionchange",!1,e))}}function zv(t,e,n,r){switch(kv(e)){case 1:var i=F1;break;case 4:i=z1;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _c(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Gr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}hv(function(){var h=s,p=wd(n),g=[];e:{var m=Uv.get(t);if(m!==void 0){var A=Ad,P=t;switch(t){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":A=rI;break;case"focusin":P="focus",A=dc;break;case"focusout":P="blur",A=dc;break;case"beforeblur":case"afterblur":A=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=W1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=oI;break;case Ov:case Lv:case Mv:A=G1;break;case jv:A=lI;break;case"scroll":A=B1;break;case"wheel":A=cI;break;case"copy":case"cut":case"paste":A=Y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Em}var C=(e&4)!==0,D=!C&&t==="scroll",k=C?m!==null?m+"Capture":null:m;C=[];for(var E=h,x;E!==null;){x=E;var q=x.stateNode;if(x.tag===5&&q!==null&&(x=q,k!==null&&(q=go(E,k),q!=null&&C.push(To(E,q,x)))),D)break;E=E.return}0<C.length&&(m=new A(m,P,null,n,p),g.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",m&&n!==nh&&(P=n.relatedTarget||n.fromElement)&&(Gr(P)||P[Fn]))break e;if((A||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?Gr(P):null,P!==null&&(D=pi(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(C=_m,q="onMouseLeave",k="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(C=Em,q="onPointerLeave",k="onPointerEnter",E="pointer"),D=A==null?m:Ni(A),x=P==null?m:Ni(P),m=new C(q,E+"leave",A,n,p),m.target=D,m.relatedTarget=x,q=null,Gr(p)===h&&(C=new C(k,E+"enter",P,n,p),C.target=x,C.relatedTarget=D,q=C),D=q,A&&P)t:{for(C=A,k=P,E=0,x=C;x;x=Ii(x))E++;for(x=0,q=k;q;q=Ii(q))x++;for(;0<E-x;)C=Ii(C),E--;for(;0<x-E;)k=Ii(k),x--;for(;E--;){if(C===k||k!==null&&C===k.alternate)break t;C=Ii(C),k=Ii(k)}C=null}else C=null;A!==null&&bm(g,m,A,C,!1),P!==null&&D!==null&&bm(g,D,P,C,!0)}}e:{if(m=h?Ni(h):window,A=m.nodeName&&m.nodeName.toLowerCase(),A==="select"||A==="input"&&m.type==="file")var F=yI;else if(xm(m))if(Nv)F=EI;else{F=_I;var U=vI}else(A=m.nodeName)&&A.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=wI);if(F&&(F=F(t,h))){Pv(g,F,n,p);break e}U&&U(t,m,h),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Xc(m,"number",m.value)}switch(U=h?Ni(h):window,t){case"focusin":(xm(U)||U.contentEditable==="true")&&(Ri=U,uh=h,ro=null);break;case"focusout":ro=uh=Ri=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,Rm(g,n,p);break;case"selectionchange":if(xI)break;case"keydown":case"keyup":Rm(g,n,p)}var w;if(Cd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ci?Cv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Sv&&n.locale!=="ko"&&(Ci||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ci&&(w=Av()):(hr=p,kd="value"in hr?hr.value:hr.textContent,Ci=!0)),U=xl(h,v),0<U.length&&(v=new wm(v,t,null,n,p),g.push({event:v,listeners:U}),w?v.data=w:(w=Rv(n),w!==null&&(v.data=w)))),(w=dI?fI(t,n):pI(t,n))&&(h=xl(h,"onBeforeInput"),0<h.length&&(p=new wm("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:h}),p.data=w))}Fv(g,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=go(t,n),s!=null&&r.unshift(To(t,s,i)),s=go(t,e),s!=null&&r.push(To(t,s,i))),t=t.return}return r}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=go(n,s),u!=null&&o.unshift(To(n,u,l))):i||(u=go(n,s),u!=null&&o.push(To(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CI=/\r\n?/g,RI=/\u0000|\uFFFD/g;function qm(t){return(typeof t=="string"?t:""+t).replace(CI,`
`).replace(RI,"")}function Ma(t,e,n){if(e=qm(e),qm(t)!==e&&n)throw Error(j(425))}function kl(){}var hh=null,dh=null;function fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,PI=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,NI=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(t){return Dm.resolve(null).then(t).catch(bI)}:ph;function bI(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),mn="__reactFiber$"+fs,xo="__reactProps$"+fs,Fn="__reactContainer$"+fs,mh="__reactEvents$"+fs,qI="__reactListeners$"+fs,DI="__reactHandles$"+fs;function Gr(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vm(t);t!==null;){if(n=t[mn])return n;t=Vm(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[mn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function cu(t){return t[xo]||null}var gh=[],bi=-1;function br(t){return{current:t}}function Te(t){0>bi||(t.current=gh[bi],gh[bi]=null,bi--)}function _e(t,e){bi++,gh[bi]=t.current,t.current=e}var Sr={},dt=br(Sr),St=br(!1),ni=Sr;function Qi(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Al(){Te(St),Te(dt)}function Om(t,e,n){if(dt.current!==Sr)throw Error(j(168));_e(dt,e),_e(St,n)}function Bv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,v1(t)||"Unknown",i));return Re({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ni=dt.current,_e(dt,t),_e(St,St.current),!0}function Lm(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Bv(t,e,ni),r.__reactInternalMemoizedMergedChildContext=t,Te(St),Te(dt),_e(dt,t)):Te(St),_e(St,n)}var Pn=null,hu=!1,Ec=!1;function $v(t){Pn===null?Pn=[t]:Pn.push(t)}function VI(t){hu=!0,$v(t)}function qr(){if(!Ec&&Pn!==null){Ec=!0;var t=0,e=me;try{var n=Pn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pn=null,hu=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(t+1)),mv(Ed,qr),i}finally{me=e,Ec=!1}}return null}var qi=[],Di=0,Cl=null,Rl=0,$t=[],Wt=0,ri=null,bn=1,qn="";function $r(t,e){qi[Di++]=Rl,qi[Di++]=Cl,Cl=t,Rl=e}function Wv(t,e,n){$t[Wt++]=bn,$t[Wt++]=qn,$t[Wt++]=ri,ri=t;var r=bn;t=qn;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bn=1<<32-ln(e)+i|n<<i|r,qn=s+t}else bn=1<<s|n<<i|r,qn=t}function Pd(t){t.return!==null&&($r(t,1),Wv(t,1,0))}function Nd(t){for(;t===Cl;)Cl=qi[--Di],qi[Di]=null,Rl=qi[--Di],qi[Di]=null;for(;t===ri;)ri=$t[--Wt],$t[Wt]=null,qn=$t[--Wt],$t[Wt]=null,bn=$t[--Wt],$t[Wt]=null}var Mt=null,Ot=null,xe=!1,on=null;function Hv(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ri!==null?{id:bn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Ot=null,!0):!1;default:return!1}}function yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vh(t){if(xe){var e=Ot;if(e){var n=e;if(!Mm(t,e)){if(yh(t))throw Error(j(418));e=yr(n.nextSibling);var r=Mt;e&&Mm(t,e)?Hv(r,n):(t.flags=t.flags&-4097|2,xe=!1,Mt=t)}}else{if(yh(t))throw Error(j(418));t.flags=t.flags&-4097|2,xe=!1,Mt=t}}}function jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function ja(t){if(t!==Mt)return!1;if(!xe)return jm(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fh(t.type,t.memoizedProps)),e&&(e=Ot)){if(yh(t))throw Kv(),Error(j(418));for(;e;)Hv(t,e),e=yr(e.nextSibling)}if(jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Mt?yr(t.stateNode.nextSibling):null;return!0}function Kv(){for(var t=Ot;t;)t=yr(t.nextSibling)}function Yi(){Ot=Mt=null,xe=!1}function bd(t){on===null?on=[t]:on.push(t)}var OI=Gn.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Um(t){var e=t._init;return e(t._payload)}function Gv(t){function e(k,E){if(t){var x=k.deletions;x===null?(k.deletions=[E],k.flags|=16):x.push(E)}}function n(k,E){if(!t)return null;for(;E!==null;)e(k,E),E=E.sibling;return null}function r(k,E){for(k=new Map;E!==null;)E.key!==null?k.set(E.key,E):k.set(E.index,E),E=E.sibling;return k}function i(k,E){return k=Er(k,E),k.index=0,k.sibling=null,k}function s(k,E,x){return k.index=x,t?(x=k.alternate,x!==null?(x=x.index,x<E?(k.flags|=2,E):x):(k.flags|=2,E)):(k.flags|=1048576,E)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,E,x,q){return E===null||E.tag!==6?(E=Cc(x,k.mode,q),E.return=k,E):(E=i(E,x),E.return=k,E)}function u(k,E,x,q){var F=x.type;return F===Si?p(k,E,x.props.children,q,x.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ir&&Um(F)===E.type)?(q=i(E,x.props),q.ref=js(k,E,x),q.return=k,q):(q=al(x.type,x.key,x.props,null,k.mode,q),q.ref=js(k,E,x),q.return=k,q)}function h(k,E,x,q){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=Rc(x,k.mode,q),E.return=k,E):(E=i(E,x.children||[]),E.return=k,E)}function p(k,E,x,q,F){return E===null||E.tag!==7?(E=ei(x,k.mode,q,F),E.return=k,E):(E=i(E,x),E.return=k,E)}function g(k,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Cc(""+E,k.mode,x),E.return=k,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ra:return x=al(E.type,E.key,E.props,null,k.mode,x),x.ref=js(k,null,E),x.return=k,x;case Ai:return E=Rc(E,k.mode,x),E.return=k,E;case ir:var q=E._init;return g(k,q(E._payload),x)}if($s(E)||Ds(E))return E=ei(E,k.mode,x,null),E.return=k,E;Ua(k,E)}return null}function m(k,E,x,q){var F=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return F!==null?null:l(k,E,""+x,q);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ra:return x.key===F?u(k,E,x,q):null;case Ai:return x.key===F?h(k,E,x,q):null;case ir:return F=x._init,m(k,E,F(x._payload),q)}if($s(x)||Ds(x))return F!==null?null:p(k,E,x,q,null);Ua(k,x)}return null}function A(k,E,x,q,F){if(typeof q=="string"&&q!==""||typeof q=="number")return k=k.get(x)||null,l(E,k,""+q,F);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case Ra:return k=k.get(q.key===null?x:q.key)||null,u(E,k,q,F);case Ai:return k=k.get(q.key===null?x:q.key)||null,h(E,k,q,F);case ir:var U=q._init;return A(k,E,x,U(q._payload),F)}if($s(q)||Ds(q))return k=k.get(x)||null,p(E,k,q,F,null);Ua(E,q)}return null}function P(k,E,x,q){for(var F=null,U=null,w=E,v=E=0,_=null;w!==null&&v<x.length;v++){w.index>v?(_=w,w=null):_=w.sibling;var I=m(k,w,x[v],q);if(I===null){w===null&&(w=_);break}t&&w&&I.alternate===null&&e(k,w),E=s(I,E,v),U===null?F=I:U.sibling=I,U=I,w=_}if(v===x.length)return n(k,w),xe&&$r(k,v),F;if(w===null){for(;v<x.length;v++)w=g(k,x[v],q),w!==null&&(E=s(w,E,v),U===null?F=w:U.sibling=w,U=w);return xe&&$r(k,v),F}for(w=r(k,w);v<x.length;v++)_=A(w,k,v,x[v],q),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?v:_.key),E=s(_,E,v),U===null?F=_:U.sibling=_,U=_);return t&&w.forEach(function(S){return e(k,S)}),xe&&$r(k,v),F}function C(k,E,x,q){var F=Ds(x);if(typeof F!="function")throw Error(j(150));if(x=F.call(x),x==null)throw Error(j(151));for(var U=F=null,w=E,v=E=0,_=null,I=x.next();w!==null&&!I.done;v++,I=x.next()){w.index>v?(_=w,w=null):_=w.sibling;var S=m(k,w,I.value,q);if(S===null){w===null&&(w=_);break}t&&w&&S.alternate===null&&e(k,w),E=s(S,E,v),U===null?F=S:U.sibling=S,U=S,w=_}if(I.done)return n(k,w),xe&&$r(k,v),F;if(w===null){for(;!I.done;v++,I=x.next())I=g(k,I.value,q),I!==null&&(E=s(I,E,v),U===null?F=I:U.sibling=I,U=I);return xe&&$r(k,v),F}for(w=r(k,w);!I.done;v++,I=x.next())I=A(w,k,v,I.value,q),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?v:I.key),E=s(I,E,v),U===null?F=I:U.sibling=I,U=I);return t&&w.forEach(function(R){return e(k,R)}),xe&&$r(k,v),F}function D(k,E,x,q){if(typeof x=="object"&&x!==null&&x.type===Si&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ra:e:{for(var F=x.key,U=E;U!==null;){if(U.key===F){if(F=x.type,F===Si){if(U.tag===7){n(k,U.sibling),E=i(U,x.props.children),E.return=k,k=E;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ir&&Um(F)===U.type){n(k,U.sibling),E=i(U,x.props),E.ref=js(k,U,x),E.return=k,k=E;break e}n(k,U);break}else e(k,U);U=U.sibling}x.type===Si?(E=ei(x.props.children,k.mode,q,x.key),E.return=k,k=E):(q=al(x.type,x.key,x.props,null,k.mode,q),q.ref=js(k,E,x),q.return=k,k=q)}return o(k);case Ai:e:{for(U=x.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(k,E.sibling),E=i(E,x.children||[]),E.return=k,k=E;break e}else{n(k,E);break}else e(k,E);E=E.sibling}E=Rc(x,k.mode,q),E.return=k,k=E}return o(k);case ir:return U=x._init,D(k,E,U(x._payload),q)}if($s(x))return P(k,E,x,q);if(Ds(x))return C(k,E,x,q);Ua(k,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(k,E.sibling),E=i(E,x),E.return=k,k=E):(n(k,E),E=Cc(x,k.mode,q),E.return=k,k=E),o(k)):n(k,E)}return D}var Xi=Gv(!0),Qv=Gv(!1),Pl=br(null),Nl=null,Vi=null,qd=null;function Dd(){qd=Vi=Nl=null}function Vd(t){var e=Pl.current;Te(Pl),t._currentValue=e}function _h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){Nl=t,qd=Vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(qd!==t)if(t={context:t,memoizedValue:e,next:null},Vi===null){if(Nl===null)throw Error(j(308));Vi=t,Nl.dependencies={lanes:0,firstContext:t}}else Vi=Vi.next=t;return e}var Qr=null;function Od(t){Qr===null?Qr=[t]:Qr.push(t)}function Yv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Od(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,Od(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}function Fm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,p=h=u=null,l=s;do{var m=l.lane,A=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,C=l;switch(m=e,A=n,C.tag){case 1:if(P=C.payload,typeof P=="function"){g=P.call(A,g,m);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=C.payload,m=typeof P=="function"?P.call(A,g,m):P,m==null)break e;g=Re({},g,m);break e;case 2:sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else A={eventTime:A,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=A,u=g):p=p.next=A,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);si|=o,t.lanes=o,t.memoizedState=g}}function zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Ho={},yn=br(Ho),ko=br(Ho),Ao=br(Ho);function Yr(t){if(t===Ho)throw Error(j(174));return t}function Md(t,e){switch(_e(Ao,e),_e(ko,t),_e(yn,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zc(e,t)}Te(yn),_e(yn,e)}function Ji(){Te(yn),Te(ko),Te(Ao)}function Jv(t){Yr(Ao.current);var e=Yr(yn.current),n=Zc(e,t.type);e!==n&&(_e(ko,t),_e(yn,n))}function jd(t){ko.current===t&&(Te(yn),Te(ko))}var Se=br(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Ud(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var nl=Gn.ReactCurrentDispatcher,Tc=Gn.ReactCurrentBatchConfig,ii=0,Ce=null,Ue=null,We=null,Dl=!1,io=!1,So=0,LI=0;function st(){throw Error(j(321))}function Fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function zd(t,e,n,r,i,s){if(ii=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?FI:zI,t=n(r,i),io){s=0;do{if(io=!1,So=0,25<=s)throw Error(j(301));s+=1,We=Ue=null,e.updateQueue=null,nl.current=BI,t=n(r,i)}while(io)}if(nl.current=Vl,e=Ue!==null&&Ue.next!==null,ii=0,We=Ue=Ce=null,Dl=!1,e)throw Error(j(300));return t}function Bd(){var t=So!==0;return So=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ce.memoizedState=We=t:We=We.next=t,We}function Yt(){if(Ue===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=We===null?Ce.memoizedState:We.next;if(e!==null)We=e,Ue=t;else{if(t===null)throw Error(j(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?Ce.memoizedState=We=t:We=We.next=t}return We}function Co(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=Yt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var p=h.lane;if((ii&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ce.lanes|=p,si|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,hn(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Yt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zv(){}function e_(t,e){var n=Ce,r=Yt(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,$d(r_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Ro(9,n_.bind(null,n,r,i,e),void 0,null),He===null)throw Error(j(349));ii&30||t_(n,e,i)}return i}function t_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n_(t,e,n,r){e.value=n,e.getSnapshot=r,i_(e)&&s_(t)}function r_(t,e,n){return n(function(){i_(e)&&s_(t)})}function i_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function s_(t){var e=zn(t,1);e!==null&&un(e,t,1,-1)}function Bm(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e.queue=t,t=t.dispatch=UI.bind(null,Ce,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o_(){return Yt().memoizedState}function rl(t,e,n,r){var i=pn();Ce.flags|=t,i.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function du(t,e,n,r){var i=Yt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Fd(r,o.deps)){i.memoizedState=Ro(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=Ro(1|e,n,s,r)}function $m(t,e){return rl(8390656,8,t,e)}function $d(t,e){return du(2048,8,t,e)}function a_(t,e){return du(4,2,t,e)}function l_(t,e){return du(4,4,t,e)}function u_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c_(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,u_.bind(null,e,t),n)}function Wd(){}function h_(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function d_(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function f_(t,e,n){return ii&21?(hn(n,e)||(n=vv(),Ce.lanes|=n,si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function MI(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Tc.transition;Tc.transition={};try{t(!1),e()}finally{me=n,Tc.transition=r}}function p_(){return Yt().memoizedState}function jI(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m_(t))g_(e,n);else if(n=Yv(t,e,n,r),n!==null){var i=vt();un(n,t,r,i),y_(n,e,r)}}function UI(t,e,n){var r=wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m_(t))g_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,hn(l,o)){var u=e.interleaved;u===null?(i.next=i,Od(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Yv(t,e,i,r),n!==null&&(i=vt(),un(n,t,r,i),y_(n,e,r))}}function m_(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function g_(t,e){io=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}var Vl={readContext:Qt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},FI={readContext:Qt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:$m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rl(4194308,4,u_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return rl(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jI.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:Bm,useDebugValue:Wd,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=Bm(!1),e=t[0];return t=MI.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=pn();if(xe){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),He===null)throw Error(j(349));ii&30||t_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$m(r_.bind(null,r,s,t),[t]),r.flags|=2048,Ro(9,n_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=He.identifierPrefix;if(xe){var n=qn,r=bn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zI={readContext:Qt,useCallback:h_,useContext:Qt,useEffect:$d,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:xc,useRef:o_,useState:function(){return xc(Co)},useDebugValue:Wd,useDeferredValue:function(t){var e=Yt();return f_(e,Ue.memoizedState,t)},useTransition:function(){var t=xc(Co)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1},BI={readContext:Qt,useCallback:h_,useContext:Qt,useEffect:$d,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:kc,useRef:o_,useState:function(){return kc(Co)},useDebugValue:Wd,useDeferredValue:function(t){var e=Yt();return Ue===null?e.memoizedState=t:f_(e,Ue.memoizedState,t)},useTransition:function(){var t=kc(Co)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=wr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(un(e,t,i,r),tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=wr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(un(e,t,i,r),tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=wr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(un(e,t,r,n),tl(e,t,r))}};function Wm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,s):!0}function v_(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=Ct(e)?ni:dt.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function Eh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=Ct(e)?ni:dt.current,i.context=Qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fu.enqueueReplaceState(i,i.state,null),bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zi(t,e){try{var n="",r=e;do n+=y1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $I=typeof WeakMap=="function"?WeakMap:Map;function __(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ll||(Ll=!0,bh=r),Ih(t,e)},n}function w_(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ih(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ih(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Km(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $I;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=iT.bind(null,t,e,n),e.then(t,t))}function Gm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var WI=Gn.ReactCurrentOwner,At=!1;function yt(t,e,n,r){e.child=t===null?Qv(e,null,n,r):Xi(e,t.child,n,r)}function Ym(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=zd(t,e,n,r,s,i),n=Bd(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(xe&&n&&Pd(e),e.flags|=1,yt(t,e,r,i),e.child)}function Xm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E_(t,e,s,r,i)):(t=al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=Er(s,r),t.ref=e.ref,t.return=e,e.child=t}function E_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Eo(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return Th(t,e,n,r,i)}function I_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Li,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Li,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Li,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Li,Vt),Vt|=r;return yt(t,e,i,n),e.child}function T_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Th(t,e,n,r,i){var s=Ct(n)?ni:dt.current;return s=Qi(e,s),zi(e,i),n=zd(t,e,n,r,s,i),r=Bd(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(xe&&r&&Pd(e),e.flags|=1,yt(t,e,n,i),e.child)}function Jm(t,e,n,r,i){if(Ct(n)){var s=!0;Sl(e)}else s=!1;if(zi(e,i),e.stateNode===null)il(t,e),v_(e,n,r),Eh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Qt(h):(h=Ct(n)?ni:dt.current,h=Qi(e,h));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Hm(e,o,r,h),sr=!1;var m=e.memoizedState;o.state=m,bl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||St.current||sr?(typeof p=="function"&&(wh(e,n,p,r),u=e.memoizedState),(l=sr||Wm(e,n,l,r,m,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:rn(e.type,l),o.props=h,g=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qt(u):(u=Ct(n)?ni:dt.current,u=Qi(e,u));var A=n.getDerivedStateFromProps;(p=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==u)&&Hm(e,o,r,u),sr=!1,m=e.memoizedState,o.state=m,bl(e,r,o,i);var P=e.memoizedState;l!==g||m!==P||St.current||sr?(typeof A=="function"&&(wh(e,n,A,r),P=e.memoizedState),(h=sr||Wm(e,n,h,r,m,P,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return xh(t,e,n,r,s,i)}function xh(t,e,n,r,i,s){T_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lm(e,n,!1),Bn(t,e,s);r=e.stateNode,WI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xi(e,t.child,null,s),e.child=Xi(e,null,l,s)):yt(t,e,l,s),e.memoizedState=r.state,i&&Lm(e,n,!0),e.child}function x_(t){var e=t.stateNode;e.pendingContext?Om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Om(t,e.context,!1),Md(t,e.containerInfo)}function Zm(t,e,n,r,i){return Yi(),bd(i),e.flags|=256,yt(t,e,n,r),e.child}var kh={dehydrated:null,treeContext:null,retryLane:0};function Ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Se,i&1),t===null)return vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gu(o,r,0,null),t=ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ah(n),e.memoizedState=kh,t):Hd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return HI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Er(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Er(l,s):(s=ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kh,r}return s=t.child,t=s.sibling,r=Er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hd(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,r){return r!==null&&bd(r),Xi(e,t.child,null,n),t=Hd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ac(Error(j(422))),Fa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gu({mode:"visible",children:r.children},i,0,null),s=ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xi(e,t.child,null,o),e.child.memoizedState=Ah(o),e.memoizedState=kh,s);if(!(e.mode&1))return Fa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Ac(s,r,void 0),Fa(t,e,o,r)}if(l=(o&t.childLanes)!==0,At||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),un(r,t,i,-1))}return Jd(),r=Ac(Error(j(421))),Fa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=yr(i.nextSibling),Mt=e,xe=!0,on=null,t!==null&&($t[Wt++]=bn,$t[Wt++]=qn,$t[Wt++]=ri,bn=t.id,qn=t.overflow,ri=e),e=Hd(e,r.children),e.flags|=4096,e)}function eg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_h(t.return,e,n)}function Sc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function A_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,n,e);else if(t.tag===19)eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ql(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KI(t,e,n){switch(e.tag){case 3:x_(e),Yi();break;case 5:Jv(e);break;case 1:Ct(e.type)&&Sl(e);break;case 4:Md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Pl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(_e(Se,Se.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);_e(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return A_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,I_(t,e,n)}return Bn(t,e,n)}var S_,Sh,C_,R_;S_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sh=function(){};C_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yr(yn.current);var s=null;switch(n){case"input":i=Qc(t,i),r=Qc(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Jc(t,i),r=Jc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kl)}eh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(po.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(po.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ee("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};R_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Us(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GI(t,e,n){var r=e.pendingProps;switch(Nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return Ct(e.type)&&Al(),ot(e),null;case 3:return r=e.stateNode,Ji(),Te(St),Te(dt),Ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(Vh(on),on=null))),Sh(t,e),ot(e),null;case 5:jd(e);var i=Yr(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)C_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ot(e),null}if(t=Yr(yn.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[xo]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Hs.length;i++)Ee(Hs[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":um(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":hm(r,s),Ee("invalid",r)}eh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),i=["children",""+l]):po.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Pa(r),cm(r,s,!0);break;case"textarea":Pa(r),dm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[xo]=r,S_(t,e,!1,!1),e.stateNode=t;e:{switch(o=th(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hs.length;i++)Ee(Hs[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":um(t,r),i=Qc(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":hm(t,r),i=Jc(t,r),Ee("invalid",t);break;default:i=r}eh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ov(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&iv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&mo(t,u):typeof u=="number"&&mo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ee("scroll",t):u!=null&&gd(t,s,u,o))}switch(n){case"input":Pa(t),cm(t,r,!1);break;case"textarea":Pa(t),dm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)R_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Yr(Ao.current),Yr(yn.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:Ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return ot(e),null;case 13:if(Te(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Ot!==null&&e.mode&1&&!(e.flags&128))Kv(),Yi(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[mn]=e}else Yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else on!==null&&(Vh(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Fe===0&&(Fe=3):Jd())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return Ji(),Sh(t,e),t===null&&Io(e.stateNode.containerInfo),ot(e),null;case 10:return Vd(e.type._context),ot(e),null;case 17:return Ct(e.type)&&Al(),ot(e),null;case 19:if(Te(Se),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Us(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,Us(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>es&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304)}else{if(!r)if(t=ql(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return ot(e),null}else 2*Oe()-s.renderingStartTime>es&&n!==1073741824&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Se.current,_e(Se,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return Xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function QI(t,e){switch(Nd(e),e.tag){case 1:return Ct(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ji(),Te(St),Te(dt),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jd(e),null;case 13:if(Te(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Se),null;case 4:return Ji(),null;case 10:return Vd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var za=!1,ut=!1,YI=typeof WeakSet=="function"?WeakSet:Set,K=null;function Oi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Ch(t,e,n){try{n()}catch(r){De(t,e,r)}}var tg=!1;function XI(t,e){if(hh=Il,t=Dv(),Rd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,g=t,m=null;t:for(;;){for(var A;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(A=g.firstChild)!==null;)m=g,g=A;for(;;){if(g===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++p===r&&(u=o),(A=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},Il=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var C=P.memoizedProps,D=P.memoizedState,k=e.stateNode,E=k.getSnapshotBeforeUpdate(e.elementType===e.type?C:rn(e.type,C),D);k.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(q){De(e,e.return,q)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return P=tg,tg=!1,P}function so(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ch(e,n,s)}i=i.next}while(i!==r)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function P_(t){var e=t.alternate;e!==null&&(t.alternate=null,P_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[xo],delete e[mh],delete e[qI],delete e[DI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N_(t){return t.tag===5||t.tag===3||t.tag===4}function ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var Qe=null,sn=!1;function nr(t,e,n){for(n=n.child;n!==null;)b_(t,e,n),n=n.sibling}function b_(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:ut||Oi(n,e);case 6:var r=Qe,i=sn;Qe=null,nr(t,e,n),Qe=r,sn=i,Qe!==null&&(sn?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(sn?(t=Qe,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),_o(t)):wc(Qe,n.stateNode));break;case 4:r=Qe,i=sn,Qe=n.stateNode.containerInfo,sn=!0,nr(t,e,n),Qe=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ch(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!ut&&(Oi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,nr(t,e,n),ut=r):nr(t,e,n);break;default:nr(t,e,n)}}function rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YI),e.forEach(function(r){var i=oT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,sn=!1;break e;case 3:Qe=l.stateNode.containerInfo,sn=!0;break e;case 4:Qe=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Qe===null)throw Error(j(160));b_(s,o,i),Qe=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){De(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q_(e,t),e=e.sibling}function q_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),fn(t),r&4){try{so(3,t,t.return),pu(3,t)}catch(C){De(t,t.return,C)}try{so(5,t,t.return)}catch(C){De(t,t.return,C)}}break;case 1:nn(e,t),fn(t),r&512&&n!==null&&Oi(n,n.return);break;case 5:if(nn(e,t),fn(t),r&512&&n!==null&&Oi(n,n.return),t.flags&32){var i=t.stateNode;try{mo(i,"")}catch(C){De(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&tv(i,s),th(l,o);var h=th(l,s);for(o=0;o<u.length;o+=2){var p=u[o],g=u[o+1];p==="style"?ov(i,g):p==="dangerouslySetInnerHTML"?iv(i,g):p==="children"?mo(i,g):gd(i,p,g,h)}switch(l){case"input":Yc(i,s);break;case"textarea":nv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Mi(i,!!s.multiple,A,!1):m!==!!s.multiple&&(s.defaultValue!=null?Mi(i,!!s.multiple,s.defaultValue,!0):Mi(i,!!s.multiple,s.multiple?[]:"",!1))}i[xo]=s}catch(C){De(t,t.return,C)}}break;case 6:if(nn(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){De(t,t.return,C)}}break;case 3:if(nn(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(C){De(t,t.return,C)}break;case 4:nn(e,t),fn(t);break;case 13:nn(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qd=Oe())),r&4&&rg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(h=ut)||p,nn(e,t),ut=h):nn(e,t),fn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(K=t,p=t.child;p!==null;){for(g=K=p;K!==null;){switch(m=K,A=m.child,m.tag){case 0:case 11:case 14:case 15:so(4,m,m.return);break;case 1:Oi(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(C){De(r,n,C)}}break;case 5:Oi(m,m.return);break;case 22:if(m.memoizedState!==null){sg(g);continue}}A!==null?(A.return=m,K=A):sg(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=sv("display",o))}catch(C){De(t,t.return,C)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(C){De(t,t.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:nn(e,t),fn(t),r&4&&rg(t);break;case 21:break;default:nn(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N_(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mo(i,""),r.flags&=-33);var s=ng(t);Nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ng(t);Ph(t,l,o);break;default:throw Error(j(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JI(t,e,n){K=t,D_(t)}function D_(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||za;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ut;l=za;var h=ut;if(za=o,(ut=u)&&!h)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?og(i):u!==null?(u.return=o,K=u):og(i);for(;s!==null;)K=s,D_(s),s=s.sibling;K=i,za=l,ut=h}ig(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):ig(t)}}function ig(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&_o(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ut||e.flags&512&&Rh(e)}catch(m){De(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function sg(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function og(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{Rh(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{Rh(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var ZI=Math.ceil,Ol=Gn.ReactCurrentDispatcher,Kd=Gn.ReactCurrentOwner,Gt=Gn.ReactCurrentBatchConfig,ce=0,He=null,Me=null,Je=0,Vt=0,Li=br(0),Fe=0,Po=null,si=0,mu=0,Gd=0,oo=null,xt=null,Qd=0,es=1/0,Rn=null,Ll=!1,bh=null,_r=null,Ba=!1,dr=null,Ml=0,ao=0,qh=null,sl=-1,ol=0;function vt(){return ce&6?Oe():sl!==-1?sl:sl=Oe()}function wr(t){return t.mode&1?ce&2&&Je!==0?Je&-Je:OI.transition!==null?(ol===0&&(ol=vv()),ol):(t=me,t!==0||(t=window.event,t=t===void 0?16:kv(t.type)),t):1}function un(t,e,n,r){if(50<ao)throw ao=0,qh=null,Error(j(185));Bo(t,n,r),(!(ce&2)||t!==He)&&(t===He&&(!(ce&2)&&(mu|=n),Fe===4&&ar(t,Je)),Rt(t,r),n===1&&ce===0&&!(e.mode&1)&&(es=Oe()+500,hu&&qr()))}function Rt(t,e){var n=t.callbackNode;O1(t,e);var r=El(t,t===He?Je:0);if(r===0)n!==null&&mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mm(n),e===1)t.tag===0?VI(ag.bind(null,t)):$v(ag.bind(null,t)),NI(function(){!(ce&6)&&qr()}),n=null;else{switch(_v(r)){case 1:n=Ed;break;case 4:n=gv;break;case 16:n=wl;break;case 536870912:n=yv;break;default:n=wl}n=z_(n,V_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V_(t,e){if(sl=-1,ol=0,ce&6)throw Error(j(327));var n=t.callbackNode;if(Bi()&&t.callbackNode!==n)return null;var r=El(t,t===He?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jl(t,r);else{e=r;var i=ce;ce|=2;var s=L_();(He!==t||Je!==e)&&(Rn=null,es=Oe()+500,Zr(t,e));do try{nT();break}catch(l){O_(t,l)}while(!0);Dd(),Ol.current=s,ce=i,Me!==null?e=0:(He=null,Je=0,e=Fe)}if(e!==0){if(e===2&&(i=oh(t),i!==0&&(r=i,e=Dh(t,i))),e===1)throw n=Po,Zr(t,0),ar(t,r),Rt(t,Oe()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!eT(i)&&(e=jl(t,r),e===2&&(s=oh(t),s!==0&&(r=s,e=Dh(t,s))),e===1))throw n=Po,Zr(t,0),ar(t,r),Rt(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Wr(t,xt,Rn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=Qd+500-Oe(),10<e)){if(El(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ph(Wr.bind(null,t,xt,Rn),e);break}Wr(t,xt,Rn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZI(r/1960))-r,10<r){t.timeoutHandle=ph(Wr.bind(null,t,xt,Rn),r);break}Wr(t,xt,Rn);break;case 5:Wr(t,xt,Rn);break;default:throw Error(j(329))}}}return Rt(t,Oe()),t.callbackNode===n?V_.bind(null,t):null}function Dh(t,e){var n=oo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=jl(t,e),t!==2&&(e=xt,xt=n,e!==null&&Vh(e)),t}function Vh(t){xt===null?xt=t:xt.push.apply(xt,t)}function eT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Gd,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function ag(t){if(ce&6)throw Error(j(327));Bi();var e=El(t,0);if(!(e&1))return Rt(t,Oe()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var r=oh(t);r!==0&&(e=r,n=Dh(t,r))}if(n===1)throw n=Po,Zr(t,0),ar(t,e),Rt(t,Oe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,xt,Rn),Rt(t,Oe()),null}function Yd(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(es=Oe()+500,hu&&qr())}}function oi(t){dr!==null&&dr.tag===0&&!(ce&6)&&Bi();var e=ce;ce|=1;var n=Gt.transition,r=me;try{if(Gt.transition=null,me=1,t)return t()}finally{me=r,Gt.transition=n,ce=e,!(ce&6)&&qr()}}function Xd(){Vt=Li.current,Te(Li)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PI(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Al();break;case 3:Ji(),Te(St),Te(dt),Ud();break;case 5:jd(r);break;case 4:Ji();break;case 13:Te(Se);break;case 19:Te(Se);break;case 10:Vd(r.type._context);break;case 22:case 23:Xd()}n=n.return}if(He=t,Me=t=Er(t.current,null),Je=Vt=e,Fe=0,Po=null,Gd=mu=si=0,xt=oo=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function O_(t,e){do{var n=Me;try{if(Dd(),nl.current=Vl,Dl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dl=!1}if(ii=0,We=Ue=Ce=null,io=!1,So=0,Kd.current=null,n===null||n.return===null){Fe=1,Po=e,Me=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var A=Gm(o);if(A!==null){A.flags&=-257,Qm(A,o,l,s,e),A.mode&1&&Km(s,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var C=new Set;C.add(u),e.updateQueue=C}else P.add(u);break e}else{if(!(e&1)){Km(s,h,e),Jd();break e}u=Error(j(426))}}else if(xe&&l.mode&1){var D=Gm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Qm(D,o,l,s,e),bd(Zi(u,l));break e}}s=u=Zi(u,l),Fe!==4&&(Fe=2),oo===null?oo=[s]:oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=__(s,u,e);Fm(s,k);break e;case 1:l=u;var E=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(_r===null||!_r.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var q=w_(s,l,e);Fm(s,q);break e}}s=s.return}while(s!==null)}j_(n)}catch(F){e=F,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function L_(){var t=Ol.current;return Ol.current=Vl,t===null?Vl:t}function Jd(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),He===null||!(si&268435455)&&!(mu&268435455)||ar(He,Je)}function jl(t,e){var n=ce;ce|=2;var r=L_();(He!==t||Je!==e)&&(Rn=null,Zr(t,e));do try{tT();break}catch(i){O_(t,i)}while(!0);if(Dd(),ce=n,Ol.current=r,Me!==null)throw Error(j(261));return He=null,Je=0,Fe}function tT(){for(;Me!==null;)M_(Me)}function nT(){for(;Me!==null&&!S1();)M_(Me)}function M_(t){var e=F_(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?j_(t):Me=e,Kd.current=null}function j_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QI(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Me=null;return}}else if(n=GI(n,e,Vt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Fe===0&&(Fe=5)}function Wr(t,e,n){var r=me,i=Gt.transition;try{Gt.transition=null,me=1,rT(t,e,n,r)}finally{Gt.transition=i,me=r}return null}function rT(t,e,n,r){do Bi();while(dr!==null);if(ce&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(L1(t,s),t===He&&(Me=He=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,z_(wl,function(){return Bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gt.transition,Gt.transition=null;var o=me;me=1;var l=ce;ce|=4,Kd.current=null,XI(t,n),q_(n,t),TI(dh),Il=!!hh,dh=hh=null,t.current=n,JI(n),C1(),ce=l,me=o,Gt.transition=s}else t.current=n;if(Ba&&(Ba=!1,dr=t,Ml=i),s=t.pendingLanes,s===0&&(_r=null),N1(n.stateNode),Rt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ll)throw Ll=!1,t=bh,bh=null,t;return Ml&1&&t.tag!==0&&Bi(),s=t.pendingLanes,s&1?t===qh?ao++:(ao=0,qh=t):ao=0,qr(),null}function Bi(){if(dr!==null){var t=_v(Ml),e=Gt.transition,n=me;try{if(Gt.transition=null,me=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,Ml=0,ce&6)throw Error(j(331));var i=ce;for(ce|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(K=h;K!==null;){var p=K;switch(p.tag){case 0:case 11:case 15:so(8,p,s)}var g=p.child;if(g!==null)g.return=p,K=g;else for(;K!==null;){p=K;var m=p.sibling,A=p.return;if(P_(p),p===h){K=null;break}if(m!==null){m.return=A,K=m;break}K=A}}}var P=s.alternate;if(P!==null){var C=P.child;if(C!==null){P.child=null;do{var D=C.sibling;C.sibling=null,C=D}while(C!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:so(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,K=k;break e}K=s.return}}var E=t.current;for(K=E;K!==null;){o=K;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,K=x;else e:for(o=E;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pu(9,l)}}catch(F){De(l,l.return,F)}if(l===o){K=null;break e}var q=l.sibling;if(q!==null){q.return=l.return,K=q;break e}K=l.return}}if(ce=i,qr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(ou,t)}catch{}r=!0}return r}finally{me=n,Gt.transition=e}}return!1}function lg(t,e,n){e=Zi(n,e),e=__(t,e,1),t=vr(t,e,1),e=vt(),t!==null&&(Bo(t,1,e),Rt(t,e))}function De(t,e,n){if(t.tag===3)lg(t,t,n);else for(;e!==null;){if(e.tag===3){lg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=Zi(n,t),t=w_(e,t,1),e=vr(e,t,1),t=vt(),e!==null&&(Bo(e,1,t),Rt(e,t));break}}e=e.return}}function iT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Je&n)===n&&(Fe===4||Fe===3&&(Je&130023424)===Je&&500>Oe()-Qd?Zr(t,0):Gd|=n),Rt(t,e)}function U_(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=vt();t=zn(t,e),t!==null&&(Bo(t,e,n),Rt(t,n))}function sT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),U_(t,n)}function oT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),U_(t,n)}var F_;F_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,KI(t,e,n);At=!!(t.flags&131072)}else At=!1,xe&&e.flags&1048576&&Wv(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;il(t,e),t=e.pendingProps;var i=Qi(e,dt.current);zi(e,n),i=zd(null,e,r,t,i,n);var s=Bd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,Sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ld(e),i.updater=fu,e.stateNode=i,i._reactInternals=e,Eh(e,r,t,n),e=xh(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&Pd(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(il(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lT(r),t=rn(r,t),i){case 0:e=Th(null,e,r,t,n);break e;case 1:e=Jm(null,e,r,t,n);break e;case 11:e=Ym(null,e,r,t,n);break e;case 14:e=Xm(null,e,r,rn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Th(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Jm(t,e,r,i,n);case 3:e:{if(x_(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xv(t,e),bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zi(Error(j(423)),e),e=Zm(t,e,r,n,i);break e}else if(r!==i){i=Zi(Error(j(424)),e),e=Zm(t,e,r,n,i);break e}else for(Ot=yr(e.stateNode.containerInfo.firstChild),Mt=e,xe=!0,on=null,n=Qv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){e=Bn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return Jv(e),t===null&&vh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fh(r,i)?o=null:s!==null&&fh(r,s)&&(e.flags|=32),T_(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&vh(e),null;case 13:return k_(t,e,n);case 4:return Md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xi(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Ym(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Pl,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!St.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ln(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),_h(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=Qt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),Xm(t,e,r,i,n);case 15:return E_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),il(t,e),e.tag=1,Ct(r)?(t=!0,Sl(e)):t=!1,zi(e,n),v_(e,r,i),Eh(e,r,i,n),xh(null,e,r,!0,t,n);case 19:return A_(t,e,n);case 22:return I_(t,e,n)}throw Error(j(156,e.tag))};function z_(t,e){return mv(t,e)}function aT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new aT(t,e,n,r)}function Zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lT(t){if(typeof t=="function")return Zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vd)return 11;if(t===_d)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Si:return ei(n.children,i,s,e);case yd:o=8,i|=8;break;case Wc:return t=Ht(12,n,e,i|2),t.elementType=Wc,t.lanes=s,t;case Hc:return t=Ht(13,n,e,i),t.elementType=Hc,t.lanes=s,t;case Kc:return t=Ht(19,n,e,i),t.elementType=Kc,t.lanes=s,t;case Jy:return gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yy:o=10;break e;case Xy:o=9;break e;case vd:o=11;break e;case _d:o=14;break e;case ir:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ei(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function gu(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=Jy,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ef(t,e,n,r,i,s,o,l,u){return t=new uT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function cT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function B_(t){if(!t)return Sr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Ct(n))return Bv(t,n,e)}return e}function $_(t,e,n,r,i,s,o,l,u){return t=ef(n,r,!0,t,i,s,o,l,u),t.context=B_(null),n=t.current,r=vt(),i=wr(n),s=Ln(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,Bo(t,i,r),Rt(t,r),t}function yu(t,e,n,r){var i=e.current,s=vt(),o=wr(i);return n=B_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(un(t,i,o,s),tl(t,i,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tf(t,e){ug(t,e),(t=t.alternate)&&ug(t,e)}function hT(){return null}var W_=typeof reportError=="function"?reportError:function(t){console.error(t)};function nf(t){this._internalRoot=t}vu.prototype.render=nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));yu(t,e,null,null)};vu.prototype.unmount=nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oi(function(){yu(null,t,null,null)}),e[Fn]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&xv(t)}};function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cg(){}function dT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ul(o);s.call(h)}}var o=$_(e,r,t,0,null,!1,!1,"",cg);return t._reactRootContainer=o,t[Fn]=o.current,Io(t.nodeType===8?t.parentNode:t),oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Ul(u);l.call(h)}}var u=ef(t,0,!1,null,null,!1,!1,"",cg);return t._reactRootContainer=u,t[Fn]=u.current,Io(t.nodeType===8?t.parentNode:t),oi(function(){yu(e,u,n,r)}),u}function wu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ul(o);l.call(u)}}yu(e,o,t,i)}else o=dT(n,e,t,i,r);return Ul(o)}wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(Id(e,n|1),Rt(e,Oe()),!(ce&6)&&(es=Oe()+500,qr()))}break;case 13:oi(function(){var r=zn(t,1);if(r!==null){var i=vt();un(r,t,1,i)}}),tf(t,1)}};Td=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=vt();un(e,t,134217728,n)}tf(t,134217728)}};Ev=function(t){if(t.tag===13){var e=wr(t),n=zn(t,e);if(n!==null){var r=vt();un(n,t,e,r)}tf(t,e)}};Iv=function(){return me};Tv=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};rh=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cu(r);if(!i)throw Error(j(90));ev(r),Yc(r,i)}}}break;case"textarea":nv(t,n);break;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}};uv=Yd;cv=oi;var fT={usingClientEntryPoint:!1,Events:[Wo,Ni,cu,av,lv,Yd]},Fs={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pT={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fv(t),t===null?null:t.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||hT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{ou=$a.inject(pT),gn=$a}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fT;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(e))throw Error(j(200));return cT(t,e,null,n)};Ut.createRoot=function(t,e){if(!rf(t))throw Error(j(299));var n=!1,r="",i=W_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Io(t.nodeType===8?t.parentNode:t),new nf(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=fv(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return oi(t)};Ut.hydrate=function(t,e,n){if(!_u(e))throw Error(j(200));return wu(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!rf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=W_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$_(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,Io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vu(e)};Ut.render=function(t,e,n){if(!_u(e))throw Error(j(200));return wu(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!_u(t))throw Error(j(40));return t._reactRootContainer?(oi(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Yd;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_u(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return wu(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function H_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H_)}catch(t){console.error(t)}}H_(),Hy.exports=Ut;var mT=Hy.exports,hg=mT;Bc.createRoot=hg.createRoot,Bc.hydrateRoot=hg.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ee=(t,e)=>{const n=B.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},p)=>B.createElement("svg",{ref:p,...gT,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${yT(t)}`,l].join(" "),...h},[...e.map(([g,m])=>B.createElement(g,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=ee("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=ee("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=ee("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=ee("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=ee("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=ee("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=ee("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=ee("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=ee("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=ee("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=ee("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=ee("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=ee("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=ee("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=ee("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=ee("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=ee("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=ee("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=ee("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=ee("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=ee("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=ee("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=ee("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=ee("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=ee("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=ee("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=ee("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=ee("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=ee("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=ee("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=ee("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=ee("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=ee("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=ee("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=ee("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=ee("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=ee("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=ee("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=ee("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=ee("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=ee("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Kr=(t=>(t.LIGHT="light",t.DARK="dark",t))(Kr||{}),vg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},t0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,g=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(m=64)),r.push(n[p],n[g],n[m],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new HT;const m=s<<2|l>>4;if(r.push(m),h!==64){const A=l<<4&240|h>>2;if(r.push(A),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KT=function(t){const e=e0(t);return t0.encodeByteArray(e,!0)},Fl=function(t){return KT(t).replace(/\./g,"")},n0=function(t){try{return t0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QT=()=>GT().__FIREBASE_DEFAULTS__,YT=()=>{if(typeof process>"u"||typeof vg>"u")return;const t=vg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&n0(t[1]);return e&&JSON.parse(e)},Eu=()=>{try{return QT()||YT()||XT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r0=t=>{var e,n;return(n=(e=Eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JT=t=>{const e=r0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},i0=()=>{var t;return(t=Eu())===null||t===void 0?void 0:t.config},s0=t=>{var e;return(e=Eu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ex(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fl(JSON.stringify(n)),Fl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function nx(){var t;const e=(t=Eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ix(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ox(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ax(){return!nx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lx(){try{return typeof indexedDB=="object"}catch{return!1}}function ux(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cx,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Qn(i,l,r)}}function hx(t,e){return t.replace(dx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dx=/\{\$([^}]+)}/g;function fx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_g(s)&&_g(o)){if(!zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _g(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function px(t,e){const n=new mx(t,e);return n.subscribe.bind(n)}class mx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pc),i.error===void 0&&(i.error=Pc),i.complete===void 0&&(i.complete=Pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class ai{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class yx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_x(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vx(t){return t===Hr?void 0:t}function _x(t){return t.instantiationMode==="EAGER"}/**
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
 */class wx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Ex={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Ix=oe.INFO,Tx={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},xx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Tx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class of{constructor(e){this.name=e,this._logLevel=Ix,this._logHandler=xx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ex[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const kx=(t,e)=>e.some(n=>t instanceof n);let wg,Eg;function Ax(){return wg||(wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sx(){return Eg||(Eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o0=new WeakMap,Mh=new WeakMap,a0=new WeakMap,Nc=new WeakMap,af=new WeakMap;function Cx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&o0.set(n,t)}).catch(()=>{}),af.set(e,t),e}function Rx(t){if(Mh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mh.set(t,e)}let jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||a0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Px(t){jh=t(jh)}function Nx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bc(this),e,...n);return a0.set(r,e.sort?e.sort():[e]),Ir(r)}:Sx().includes(t)?function(...e){return t.apply(bc(this),e),Ir(o0.get(this))}:function(...e){return Ir(t.apply(bc(this),e))}}function bx(t){return typeof t=="function"?Nx(t):(t instanceof IDBTransaction&&Rx(t),kx(t,Ax())?new Proxy(t,jh):t)}function Ir(t){if(t instanceof IDBRequest)return Cx(t);if(Nc.has(t))return Nc.get(t);const e=bx(t);return e!==t&&(Nc.set(t,e),af.set(e,t)),e}const bc=t=>af.get(t);function qx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ir(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ir(o.result),u.oldVersion,u.newVersion,Ir(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Dx=["get","getKey","getAll","getAllKeys","count"],Vx=["put","add","delete","clear"],qc=new Map;function Ig(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return qc.set(e,s),s}Px(t=>({...t,get:(e,n,r)=>Ig(e,n)||t.get(e,n,r),has:(e,n)=>!!Ig(e,n)||t.has(e,n)}));/**
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
 */class Ox{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uh="@firebase/app",Tg="0.10.13";/**
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
 */const $n=new of("@firebase/app"),Mx="@firebase/app-compat",jx="@firebase/analytics-compat",Ux="@firebase/analytics",Fx="@firebase/app-check-compat",zx="@firebase/app-check",Bx="@firebase/auth",$x="@firebase/auth-compat",Wx="@firebase/database",Hx="@firebase/data-connect",Kx="@firebase/database-compat",Gx="@firebase/functions",Qx="@firebase/functions-compat",Yx="@firebase/installations",Xx="@firebase/installations-compat",Jx="@firebase/messaging",Zx="@firebase/messaging-compat",ek="@firebase/performance",tk="@firebase/performance-compat",nk="@firebase/remote-config",rk="@firebase/remote-config-compat",ik="@firebase/storage",sk="@firebase/storage-compat",ok="@firebase/firestore",ak="@firebase/vertexai-preview",lk="@firebase/firestore-compat",uk="firebase",ck="10.14.1";/**
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
 */const Fh="[DEFAULT]",hk={[Uh]:"fire-core",[Mx]:"fire-core-compat",[Ux]:"fire-analytics",[jx]:"fire-analytics-compat",[zx]:"fire-app-check",[Fx]:"fire-app-check-compat",[Bx]:"fire-auth",[$x]:"fire-auth-compat",[Wx]:"fire-rtdb",[Hx]:"fire-data-connect",[Kx]:"fire-rtdb-compat",[Gx]:"fire-fn",[Qx]:"fire-fn-compat",[Yx]:"fire-iid",[Xx]:"fire-iid-compat",[Jx]:"fire-fcm",[Zx]:"fire-fcm-compat",[ek]:"fire-perf",[tk]:"fire-perf-compat",[nk]:"fire-rc",[rk]:"fire-rc-compat",[ik]:"fire-gcs",[sk]:"fire-gcs-compat",[ok]:"fire-fst",[lk]:"fire-fst-compat",[ak]:"fire-vertex","fire-js":"fire-js",[uk]:"fire-js-all"};/**
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
 */const Bl=new Map,dk=new Map,zh=new Map;function xg(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(zh.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;zh.set(e,t);for(const n of Bl.values())xg(n,t);for(const n of dk.values())xg(n,t);return!0}function lf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
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
 */const fk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Go("app","Firebase",fk);/**
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
 */class pk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
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
 */const ms=ck;function l0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});if(n||(n=i0()),!n)throw Tr.create("no-options");const s=Bl.get(i);if(s){if(zl(n,s.options)&&zl(r,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const o=new wx(i);for(const u of zh.values())o.addComponent(u);const l=new pk(n,r,o);return Bl.set(i,l),l}function u0(t=Fh){const e=Bl.get(t);if(!e&&t===Fh&&i0())return l0();if(!e)throw Tr.create("no-app",{appName:t});return e}function xr(t,e,n){var r;let i=(r=hk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}ts(new ai(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mk="firebase-heartbeat-database",gk=1,No="firebase-heartbeat-store";let Dc=null;function c0(){return Dc||(Dc=qx(mk,gk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),Dc}async function yk(t){try{const n=(await c0()).transaction(No),r=await n.objectStore(No).get(h0(t));return await n.done,r}catch(e){if(e instanceof Qn)$n.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function kg(t,e){try{const r=(await c0()).transaction(No,"readwrite");await r.objectStore(No).put(e,h0(t)),await r.done}catch(n){if(n instanceof Qn)$n.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function h0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vk=1024,_k=30*24*60*60*1e3;class wk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ik(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ag();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=_k}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ag(),{heartbeatsToSend:r,unsentEntries:i}=Ek(this._heartbeatsCache.heartbeats),s=Fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $n.warn(n),""}}}function Ag(){return new Date().toISOString().substring(0,10)}function Ek(t,e=vk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ik{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lx()?ux().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sg(t){return Fl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Tk(t){ts(new ai("platform-logger",e=>new Ox(e),"PRIVATE")),ts(new ai("heartbeat",e=>new wk(e),"PRIVATE")),xr(Uh,Tg,t),xr(Uh,Tg,"esm2017"),xr("fire-js","")}Tk("");var xk="firebase",kk="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr(xk,kk,"app");var Cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ti,d0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function _(){}_.prototype=v.prototype,w.D=v.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(I,S,R){for(var T=Array(arguments.length-2),be=2;be<arguments.length;be++)T[be-2]=arguments[be];return v.prototype[S].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,v,_){_||(_=0);var I=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)I[S]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(S=0;16>S;++S)I[S]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=w.g[0],_=w.g[1],S=w.g[2];var R=w.g[3],T=v+(R^_&(S^R))+I[0]+3614090360&4294967295;v=_+(T<<7&4294967295|T>>>25),T=R+(S^v&(_^S))+I[1]+3905402710&4294967295,R=v+(T<<12&4294967295|T>>>20),T=S+(_^R&(v^_))+I[2]+606105819&4294967295,S=R+(T<<17&4294967295|T>>>15),T=_+(v^S&(R^v))+I[3]+3250441966&4294967295,_=S+(T<<22&4294967295|T>>>10),T=v+(R^_&(S^R))+I[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(S^v&(_^S))+I[5]+1200080426&4294967295,R=v+(T<<12&4294967295|T>>>20),T=S+(_^R&(v^_))+I[6]+2821735955&4294967295,S=R+(T<<17&4294967295|T>>>15),T=_+(v^S&(R^v))+I[7]+4249261313&4294967295,_=S+(T<<22&4294967295|T>>>10),T=v+(R^_&(S^R))+I[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(S^v&(_^S))+I[9]+2336552879&4294967295,R=v+(T<<12&4294967295|T>>>20),T=S+(_^R&(v^_))+I[10]+4294925233&4294967295,S=R+(T<<17&4294967295|T>>>15),T=_+(v^S&(R^v))+I[11]+2304563134&4294967295,_=S+(T<<22&4294967295|T>>>10),T=v+(R^_&(S^R))+I[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(S^v&(_^S))+I[13]+4254626195&4294967295,R=v+(T<<12&4294967295|T>>>20),T=S+(_^R&(v^_))+I[14]+2792965006&4294967295,S=R+(T<<17&4294967295|T>>>15),T=_+(v^S&(R^v))+I[15]+1236535329&4294967295,_=S+(T<<22&4294967295|T>>>10),T=v+(S^R&(_^S))+I[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^S&(v^_))+I[6]+3225465664&4294967295,R=v+(T<<9&4294967295|T>>>23),T=S+(v^_&(R^v))+I[11]+643717713&4294967295,S=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(S^R))+I[0]+3921069994&4294967295,_=S+(T<<20&4294967295|T>>>12),T=v+(S^R&(_^S))+I[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^S&(v^_))+I[10]+38016083&4294967295,R=v+(T<<9&4294967295|T>>>23),T=S+(v^_&(R^v))+I[15]+3634488961&4294967295,S=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(S^R))+I[4]+3889429448&4294967295,_=S+(T<<20&4294967295|T>>>12),T=v+(S^R&(_^S))+I[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^S&(v^_))+I[14]+3275163606&4294967295,R=v+(T<<9&4294967295|T>>>23),T=S+(v^_&(R^v))+I[3]+4107603335&4294967295,S=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(S^R))+I[8]+1163531501&4294967295,_=S+(T<<20&4294967295|T>>>12),T=v+(S^R&(_^S))+I[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^S&(v^_))+I[2]+4243563512&4294967295,R=v+(T<<9&4294967295|T>>>23),T=S+(v^_&(R^v))+I[7]+1735328473&4294967295,S=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(S^R))+I[12]+2368359562&4294967295,_=S+(T<<20&4294967295|T>>>12),T=v+(_^S^R)+I[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^S)+I[8]+2272392833&4294967295,R=v+(T<<11&4294967295|T>>>21),T=S+(R^v^_)+I[11]+1839030562&4294967295,S=R+(T<<16&4294967295|T>>>16),T=_+(S^R^v)+I[14]+4259657740&4294967295,_=S+(T<<23&4294967295|T>>>9),T=v+(_^S^R)+I[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^S)+I[4]+1272893353&4294967295,R=v+(T<<11&4294967295|T>>>21),T=S+(R^v^_)+I[7]+4139469664&4294967295,S=R+(T<<16&4294967295|T>>>16),T=_+(S^R^v)+I[10]+3200236656&4294967295,_=S+(T<<23&4294967295|T>>>9),T=v+(_^S^R)+I[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^S)+I[0]+3936430074&4294967295,R=v+(T<<11&4294967295|T>>>21),T=S+(R^v^_)+I[3]+3572445317&4294967295,S=R+(T<<16&4294967295|T>>>16),T=_+(S^R^v)+I[6]+76029189&4294967295,_=S+(T<<23&4294967295|T>>>9),T=v+(_^S^R)+I[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^S)+I[12]+3873151461&4294967295,R=v+(T<<11&4294967295|T>>>21),T=S+(R^v^_)+I[15]+530742520&4294967295,S=R+(T<<16&4294967295|T>>>16),T=_+(S^R^v)+I[2]+3299628645&4294967295,_=S+(T<<23&4294967295|T>>>9),T=v+(S^(_|~R))+I[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~S))+I[7]+1126891415&4294967295,R=v+(T<<10&4294967295|T>>>22),T=S+(v^(R|~_))+I[14]+2878612391&4294967295,S=R+(T<<15&4294967295|T>>>17),T=_+(R^(S|~v))+I[5]+4237533241&4294967295,_=S+(T<<21&4294967295|T>>>11),T=v+(S^(_|~R))+I[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~S))+I[3]+2399980690&4294967295,R=v+(T<<10&4294967295|T>>>22),T=S+(v^(R|~_))+I[10]+4293915773&4294967295,S=R+(T<<15&4294967295|T>>>17),T=_+(R^(S|~v))+I[1]+2240044497&4294967295,_=S+(T<<21&4294967295|T>>>11),T=v+(S^(_|~R))+I[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~S))+I[15]+4264355552&4294967295,R=v+(T<<10&4294967295|T>>>22),T=S+(v^(R|~_))+I[6]+2734768916&4294967295,S=R+(T<<15&4294967295|T>>>17),T=_+(R^(S|~v))+I[13]+1309151649&4294967295,_=S+(T<<21&4294967295|T>>>11),T=v+(S^(_|~R))+I[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~S))+I[11]+3174756917&4294967295,R=v+(T<<10&4294967295|T>>>22),T=S+(v^(R|~_))+I[2]+718787259&4294967295,S=R+(T<<15&4294967295|T>>>17),T=_+(R^(S|~v))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var _=v-this.blockSize,I=this.B,S=this.h,R=0;R<v;){if(S==0)for(;R<=_;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<v;)if(I[S++]=w.charCodeAt(R++),S==this.blockSize){i(this,I),S=0;break}}else for(;R<v;)if(I[S++]=w[R++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var _=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=_&255,_/=256;for(this.u(w),w=Array(16),v=_=0;4>v;++v)for(var I=0;32>I;I+=8)w[_++]=this.g[v]>>>I&255;return w};function s(w,v){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=v(w)}function o(w,v){this.h=v;for(var _=[],I=!0,S=w.length-1;0<=S;S--){var R=w[S]|0;I&&R==v||(_[S]=R,I=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?s(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return D(h(-w));for(var v=[],_=1,I=0;w>=_;I++)v[I]=w/_|0,_*=4294967296;return new o(v,0)}function p(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return D(p(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(v,8)),I=g,S=0;S<w.length;S+=8){var R=Math.min(8,w.length-S),T=parseInt(w.substring(S,S+R),v);8>R?(R=h(Math.pow(v,R)),I=I.j(R).add(h(T))):(I=I.j(_),I=I.add(h(T)))}return I}var g=u(0),m=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-D(this).m();for(var w=0,v=1,_=0;_<this.g.length;_++){var I=this.i(_);w+=(0<=I?I:4294967296+I)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(C(this))return"-"+D(this).toString(w);for(var v=h(Math.pow(w,6)),_=this,I="";;){var S=q(_,v).g;_=k(_,S.j(v));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=S,P(_))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=k(this,w),C(w)?-1:P(w)?0:1};function D(w){for(var v=w.g.length,_=[],I=0;I<v;I++)_[I]=~w.g[I];return new o(_,~w.h).add(m)}t.abs=function(){return C(this)?D(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],I=0,S=0;S<=v;S++){var R=I+(this.i(S)&65535)+(w.i(S)&65535),T=(R>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);I=T>>>16,R&=65535,T&=65535,_[S]=T<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function k(w,v){return w.add(D(v))}t.j=function(w){if(P(this)||P(w))return g;if(C(this))return C(w)?D(this).j(D(w)):D(D(this).j(w));if(C(w))return D(this.j(D(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var v=this.g.length+w.g.length,_=[],I=0;I<2*v;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<w.g.length;S++){var R=this.i(I)>>>16,T=this.i(I)&65535,be=w.i(S)>>>16,nt=w.i(S)&65535;_[2*I+2*S]+=T*nt,E(_,2*I+2*S),_[2*I+2*S+1]+=R*nt,E(_,2*I+2*S+1),_[2*I+2*S+1]+=T*be,E(_,2*I+2*S+1),_[2*I+2*S+2]+=R*be,E(_,2*I+2*S+2)}for(I=0;I<v;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=v;I<2*v;I++)_[I]=0;return new o(_,0)};function E(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function x(w,v){this.g=w,this.h=v}function q(w,v){if(P(v))throw Error("division by zero");if(P(w))return new x(g,g);if(C(w))return v=q(D(w),v),new x(D(v.g),D(v.h));if(C(v))return v=q(w,D(v)),new x(D(v.g),v.h);if(30<w.g.length){if(C(w)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var _=m,I=v;0>=I.l(w);)_=F(_),I=F(I);var S=U(_,1),R=U(I,1);for(I=U(I,2),_=U(_,2);!P(I);){var T=R.add(I);0>=T.l(w)&&(S=S.add(_),R=T),I=U(I,1),_=U(_,1)}return v=k(w,S.j(v)),new x(S,v)}for(S=g;0<=w.l(v);){for(_=Math.max(1,Math.floor(w.m()/v.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=h(_),T=R.j(v);C(T)||0<T.l(w);)_-=I,R=h(_),T=R.j(v);P(R)&&(R=m),S=S.add(R),w=k(w,T)}return new x(S,w)}t.A=function(w){return q(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)&w.i(I);return new o(_,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)|w.i(I);return new o(_,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)^w.i(I);return new o(_,this.h^w.h)};function F(w){for(var v=w.g.length+1,_=[],I=0;I<v;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(_,w.h)}function U(w,v){var _=v>>5;v%=32;for(var I=w.g.length-_,S=[],R=0;R<I;R++)S[R]=0<v?w.i(R+_)>>>v|w.i(R+_+1)<<32-v:w.i(R+_);return new o(S,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,d0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,ti=o}).apply(typeof Cg<"u"?Cg:typeof self<"u"?self:typeof window<"u"?window:{});var Wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var f0,Qs,p0,ll,Bh,m0,g0,y0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wa=="object"&&Wa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in d))break e;d=d[N]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,y=!1,N={next:function(){if(!y&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,m.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,N,b){for(var z=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)z[ve-2]=arguments[ve];return c.prototype[N].apply(y,z)}}function C(a){const c=a.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function D(a,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const N=a.length||0,b=y.length||0;a.length=N+b;for(let z=0;z<b;z++)a[N+z]=y[z]}else a.push(y)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var F=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function U(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function v(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let d,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(d in y)a[d]=y[d];for(let b=0;b<_.length;b++)d=_[b],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function S(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=H;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class be{constructor(){this.h=this.g=null}add(c,d){const y=nt.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var nt=new k(()=>new Nt,a=>a.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,V=!1,H=new be,Q=()=>{const a=l.Promise.resolve(void 0);Ke=()=>{a.then(ae)}};var ae=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){R(d)}var c=nt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}V=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var bt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function qt(a,c){if(ye.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{q(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&qt.aa.h.call(this)}}P(qt,ye);var Tt={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),yi=0;function Mr(a,c,d,y,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=N,this.key=++yi,this.da=this.fa=!1}function xn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function $(a){this.src=a,this.g={},this.h=0}$.prototype.add=function(a,c,d,y,N){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var z=ke(a,c,y,N);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new Mr(c,this.src,b,!!y,N),c.fa=d,a.push(c)),c};function X(a,c){var d=c.type;if(d in a.g){var y=a.g[d],N=Array.prototype.indexOf.call(y,c,void 0),b;(b=0<=N)&&Array.prototype.splice.call(y,N,1),b&&(xn(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ke(a,c,d,y){for(var N=0;N<a.length;++N){var b=a[N];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==y)return N}return-1}var he="closure_lm_"+(1e6*Math.random()|0),kn={};function Jt(a,c,d,y,N){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Jt(a,c[b],d,y,N);return null}return d=en(d),a&&a[pt]?a.K(c,d,h(y)?!!y.capture:!1,N):O(a,c,d,!1,y,N)}function O(a,c,d,y,N,b){if(!c)throw Error("Invalid event type");var z=h(N)?!!N.capture:!!N,ve=Jn(a);if(ve||(a[he]=ve=new $(a)),d=ve.add(c,d,y,z,b),d.proxy)return d;if(y=pe(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)bt||(N=z),N===void 0&&(N=!1),a.addEventListener(c.toString(),y,N);else if(a.attachEvent)a.attachEvent(jr(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function pe(){function a(d){return c.call(a.src,a.listener,d)}const c=An;return a}function Ae(a,c,d,y,N){if(Array.isArray(c))for(var b=0;b<c.length;b++)Ae(a,c[b],d,y,N);else y=h(y)?!!y.capture:!!y,d=en(d),a&&a[pt]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=ke(b,d,y,N),-1<d&&(xn(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=Jn(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ke(c,d,y,N)),(d=-1<a?c[a]:null)&&Zt(d))}function Zt(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[pt])X(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(jr(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Jn(c))?(X(d,a),d.h==0&&(d.src=null,c[he]=null)):xn(a)}}}function jr(a){return a in kn?kn[a]:kn[a]="on"+a}function An(a,c){if(a.da)a=!0;else{c=new qt(c,this);var d=a.listener,y=a.ha||a.src;a.fa&&Zt(a),a=d.call(y,c)}return a}function Jn(a){return a=a[he],a instanceof $?a:null}var Bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function en(a){return typeof a=="function"?a:(a[Bt]||(a[Bt]=function(c){return a.handleEvent(c)}),a[Bt])}function Be(){ue.call(this),this.i=new $(this),this.M=this,this.F=null}P(Be,ue),Be.prototype[pt]=!0,Be.prototype.removeEventListener=function(a,c,d,y){Ae(this,a,c,d,y)};function mt(a,c){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new ye(c,a);else if(c instanceof ye)c.target=c.target||a;else{var N=c;c=new ye(y,a),I(c,N)}if(N=!0,d)for(var b=d.length-1;0<=b;b--){var z=c.g=d[b];N=da(z,y,!0,c)&&N}if(z=c.g=a,N=da(z,y,!0,c)&&N,N=da(z,y,!1,c)&&N,d)for(b=0;b<d.length;b++)z=c.g=d[b],N=da(z,y,!1,c)&&N}Be.prototype.N=function(){if(Be.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],y=0;y<d.length;y++)xn(d[y]);delete a.g[c],a.h--}}this.F=null},Be.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},Be.prototype.L=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function da(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,b=0;b<c.length;++b){var z=c[b];if(z&&!z.da&&z.capture==d){var ve=z.listener,Ge=z.ha||z.src;z.fa&&X(a.i,z),N=ve.call(Ge,y)!==!1&&N}}return N&&!y.defaultPrevented}function lp(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function up(a){a.g=lp(()=>{a.g=null,a.i&&(a.i=!1,up(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class gE extends ue{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:up(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(a){ue.call(this),this.h=a,this.g={}}P(Es,ue);var cp=[];function hp(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&Zt(c)},a),a.g={}}Es.prototype.N=function(){Es.aa.N.call(this),hp(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zu=l.JSON.stringify,yE=l.JSON.parse,vE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Bu(){}Bu.prototype.h=null;function dp(a){return a.h||(a.h=a.i())}function fp(){}var Is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $u(){ye.call(this,"d")}P($u,ye);function Wu(){ye.call(this,"c")}P(Wu,ye);var Ur={},pp=null;function fa(){return pp=pp||new Be}Ur.La="serverreachability";function mp(a){ye.call(this,Ur.La,a)}P(mp,ye);function Ts(a){const c=fa();mt(c,new mp(c))}Ur.STAT_EVENT="statevent";function gp(a,c){ye.call(this,Ur.STAT_EVENT,a),this.stat=c}P(gp,ye);function gt(a){const c=fa();mt(c,new gp(c,a))}Ur.Ma="timingevent";function yp(a,c){ye.call(this,Ur.Ma,a),this.size=c}P(yp,ye);function xs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function _E(a,c,d,y,N,b){a.info(function(){if(a.g)if(b)for(var z="",ve=b.split("&"),Ge=0;Ge<ve.length;Ge++){var de=ve[Ge].split("=");if(1<de.length){var rt=de[0];de=de[1];var it=rt.split("_");z=2<=it.length&&it[1]=="type"?z+(rt+"="+de+"&"):z+(rt+"=redacted&")}}else z=null;else z=b;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+c+`
`+d+`
`+z})}function wE(a,c,d,y,N,b,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+c+`
`+d+`
`+b+" "+z})}function vi(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+IE(a,d)+(y?" "+y:"")})}function EE(a,c){a.info(function(){return"TIMEOUT: "+c})}ks.prototype.info=function(){};function IE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var b=N[0];if(b!="noop"&&b!="stop"&&b!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return zu(d)}catch{return c}}var pa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hu;function ma(){}P(ma,Bu),ma.prototype.g=function(){return new XMLHttpRequest},ma.prototype.i=function(){return{}},Hu=new ma;function Zn(a,c,d,y){this.j=a,this.i=c,this.l=d,this.R=y||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _p}function _p(){this.i=null,this.g="",this.h=!1}var wp={},Ku={};function Gu(a,c,d){a.L=1,a.v=_a(Sn(c)),a.m=d,a.P=!0,Ep(a,null)}function Ep(a,c){a.F=Date.now(),ga(a),a.A=Sn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Vp(d.i,"t",y),a.C=0,d=a.j.J,a.h=new _p,a.g=Zp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new gE(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(cp[0]=N.toString()),N=cp);for(var b=0;b<N.length;b++){var z=Jt(d,N[b],y||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Ts(),_E(a.i,a.u,a.A,a.l,a.R,a.m)}Zn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Cn(a)==3?c.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const it=Cn(this.g);var c=this.g.Ba();const Ei=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||zp(this.g)))){this.J||it!=4||c==7||(c==8||0>=Ei?Ts(3):Ts(2)),Qu(this);var d=this.g.Z();this.X=d;t:if(Ip(this)){var y=zp(this.g);a="";var N=y.length,b=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),As(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(b&&c==N-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,wE(this.i,this.u,this.A,this.l,this.R,it,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Ge=this.g;if((ve=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ve)){var de=ve;break t}}de=null}if(d=de)vi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yu(this,d);else{this.o=!1,this.s=3,gt(12),Fr(this),As(this);break e}}if(this.P){d=!0;let tn;for(;!this.J&&this.C<z.length;)if(tn=TE(this,z),tn==Ku){it==4&&(this.s=4,gt(14),d=!1),vi(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==wp){this.s=4,gt(15),vi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else vi(this.i,this.l,tn,null),Yu(this,tn);if(Ip(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||z.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)vi(this.i,this.l,z,"[Invalid Chunked Response]"),Fr(this),As(this);else if(0<z.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),nc(rt),rt.M=!0,gt(11))}}else vi(this.i,this.l,z,null),Yu(this,z);it==4&&Fr(this),this.o&&!this.J&&(it==4?Qp(this.j,this):(this.o=!1,ga(this)))}else UE(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Fr(this),As(this)}}}catch{}finally{}};function Ip(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function TE(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?Ku:(d=Number(c.substring(d,y)),isNaN(d)?wp:(y+=1,y+d>c.length?Ku:(c=c.slice(y,y+d),a.C=y+d,c)))}Zn.prototype.cancel=function(){this.J=!0,Fr(this)};function ga(a){a.S=Date.now()+a.I,Tp(a,a.I)}function Tp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=xs(m(a.ba,a),c)}function Qu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(EE(this.i,this.A),this.L!=2&&(Ts(),gt(17)),Fr(this),this.s=2,As(this)):Tp(this,this.S-a)};function As(a){a.j.G==0||a.J||Qp(a.j,a)}function Fr(a){Qu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,hp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Yu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Xu(d.h,a))){if(!a.K&&Xu(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ka(d),Ta(d);else break e;tc(d),gt(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=xs(m(d.Za,d),6e3));if(1>=Ap(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Br(d,11)}else if((a.K||d.g==a)&&ka(d),!E(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let de=N[c];if(d.T=de[0],de=de[1],d.G==2)if(de[0]=="c"){d.K=de[1],d.ia=de[2];const rt=de[3];rt!=null&&(d.la=rt,d.j.info("VER="+d.la));const it=de[4];it!=null&&(d.Aa=it,d.j.info("SVER="+d.Aa));const Ei=de[5];Ei!=null&&typeof Ei=="number"&&0<Ei&&(y=1.5*Ei,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const tn=a.g;if(tn){const Sa=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var b=y.h;b.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ju(b,b.h),b.h=null))}if(y.D){const rc=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;rc&&(y.ya=rc,we(y.I,y.D,rc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var z=a;if(y.qa=Jp(y,y.J?y.ia:null,y.W),z.K){Sp(y.h,z);var ve=z,Ge=y.L;Ge&&(ve.I=Ge),ve.B&&(Qu(ve),ga(ve)),y.g=z}else Kp(y);0<d.i.length&&xa(d)}else de[0]!="stop"&&de[0]!="close"||Br(d,7);else d.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Br(d,7):ec(d):de[0]!="noop"&&d.l&&d.l.ta(de),d.v=0)}}Ts(4)}catch{}}var xE=class{constructor(a,c){this.g=a,this.map=c}};function xp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ap(a){return a.h?1:a.g?a.g.size:0}function Xu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ju(a,c){a.g?a.g.add(c):a.h=c}function Sp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}xp.prototype.cancel=function(){if(this.i=Cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Cp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return C(a.i)}function kE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,y=0;y<d;y++)c.push(a[y]);return c}c=[],d=0;for(y in a)c[d++]=a[y];return c}function AE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const y in a)c[d++]=y;return c}}}function Rp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=AE(a),y=kE(a),N=y.length,b=0;b<N;b++)c.call(void 0,y[b],d&&d[b],a)}var Pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),N=null;if(0<=y){var b=a[d].substring(0,y);N=a[d].substring(y+1)}else b=a[d];c(b,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zr){this.h=a.h,ya(this,a.j),this.o=a.o,this.g=a.g,va(this,a.s),this.l=a.l;var c=a.i,d=new Rs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Np(this,d),this.m=a.m}else a&&(c=String(a).match(Pp))?(this.h=!1,ya(this,c[1]||"",!0),this.o=Ss(c[2]||""),this.g=Ss(c[3]||"",!0),va(this,c[4]),this.l=Ss(c[5]||"",!0),Np(this,c[6]||"",!0),this.m=Ss(c[7]||"")):(this.h=!1,this.i=new Rs(null,this.h))}zr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Cs(c,bp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Cs(c,bp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Cs(d,d.charAt(0)=="/"?PE:RE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Cs(d,bE)),a.join("")};function Sn(a){return new zr(a)}function ya(a,c,d){a.j=d?Ss(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function va(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Np(a,c,d){c instanceof Rs?(a.i=c,qE(a.i,a.h)):(d||(c=Cs(c,NE)),a.i=new Rs(c,a.h))}function we(a,c,d){a.i.set(c,d)}function _a(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ss(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Cs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,CE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function CE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bp=/[#\/\?@]/g,RE=/[#\?:]/g,PE=/[#\?]/g,NE=/[#\?@]/g,bE=/#/g;function Rs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function er(a){a.g||(a.g=new Map,a.h=0,a.i&&SE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Rs.prototype,t.add=function(a,c){er(this),this.i=null,a=_i(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function qp(a,c){er(a),c=_i(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Dp(a,c){return er(a),c=_i(a,c),a.g.has(c)}t.forEach=function(a,c){er(this),this.g.forEach(function(d,y){d.forEach(function(N){a.call(c,N,y,this)},this)},this)},t.na=function(){er(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const N=a[y];for(let b=0;b<N.length;b++)d.push(c[y])}return d},t.V=function(a){er(this);let c=[];if(typeof a=="string")Dp(this,a)&&(c=c.concat(this.g.get(_i(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return er(this),this.i=null,a=_i(this,a),Dp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Vp(a,c,d){qp(a,c),0<d.length&&(a.i=null,a.g.set(_i(a,c),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const b=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var N=b;z[y]!==""&&(N+="="+encodeURIComponent(String(z[y]))),a.push(N)}}return this.i=a.join("&")};function _i(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function qE(a,c){c&&!a.j&&(er(a),a.i=null,a.g.forEach(function(d,y){var N=y.toLowerCase();y!=N&&(qp(this,y),Vp(this,N,d))},a)),a.j=c}function DE(a,c){const d=new ks;if(l.Image){const y=new Image;y.onload=A(tr,d,"TestLoadImage: loaded",!0,c,y),y.onerror=A(tr,d,"TestLoadImage: error",!1,c,y),y.onabort=A(tr,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=A(tr,d,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function VE(a,c){const d=new ks,y=new AbortController,N=setTimeout(()=>{y.abort(),tr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(b=>{clearTimeout(N),b.ok?tr(d,"TestPingServer: ok",!0,c):tr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),tr(d,"TestPingServer: error",!1,c)})}function tr(a,c,d,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(d)}catch{}}function OE(){this.g=new vE}function LE(a,c,d){const y=d||"";try{Rp(a,function(N,b){let z=N;h(N)&&(z=zu(N)),c.push(y+b+"="+encodeURIComponent(z))})}catch(N){throw c.push(y+"type="+encodeURIComponent("_badmap")),N}}function wa(a){this.l=a.Ub||null,this.j=a.eb||!1}P(wa,Bu),wa.prototype.g=function(){return new Ea(this.l,this.j)},wa.prototype.i=function(a){return function(){return a}}({});function Ea(a,c){Be.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ea,Be),t=Ea.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Op(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Op(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ps(this):Ns(this),this.readyState==3&&Op(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ps(this))},t.Qa=function(a){this.g&&(this.response=a,Ps(this))},t.ga=function(){this.g&&Ps(this)};function Ps(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ns(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Lp(a){let c="";return U(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function Zu(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Lp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):we(a,c,d))}function qe(a){Be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(qe,Be);var ME=/^https?$/i,jE=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hu.g(),this.v=this.o?dp(this.o):dp(Hu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Mp(this,b);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)d.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())d.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jE,c,void 0))||y||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of d)this.g.setRequestHeader(b,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Mp(this,b)}};function Mp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,jp(a),Ia(a)}function jp(a){a.A||(a.A=!0,mt(a,"complete"),mt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,mt(this,"complete"),mt(this,"abort"),Ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ia(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Up(this):this.bb())},t.bb=function(){Up(this)};function Up(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)lp(a.Ea,0,a);else if(mt(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=z===0){var N=String(a.D).match(Pp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),y=!ME.test(N?N.toLowerCase():"")}d=y}if(d)mt(a,"complete"),mt(a,"success");else{a.m=6;try{var b=2<Cn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",jp(a)}}finally{Ia(a)}}}}function Ia(a,c){if(a.g){Fp(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||mt(a,"ready");try{d.onreadystatechange=y}catch{}}}function Fp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),yE(c)}};function zp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function UE(a){const c={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(E(a[y]))continue;var d=S(a[y]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[N]||[];c[N]=b,b.push(d)}w(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Bp(a){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,a),this.cb=bs("retryDelaySeedMs",1e4,a),this.Wa=bs("forwardChannelMaxRetries",2,a),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new xp(a&&a.concurrentRequestLimit),this.Da=new OE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,y){gt(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=Jp(this,null,this.W),xa(this)};function ec(a){if($p(a),a.G==3){var c=a.U++,d=Sn(a.I);if(we(d,"SID",a.K),we(d,"RID",c),we(d,"TYPE","terminate"),qs(a,d),c=new Zn(a,a.j,c),c.L=2,c.v=_a(Sn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Zp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ga(c)}Xp(a)}function Ta(a){a.g&&(nc(a),a.g.cancel(),a.g=null)}function $p(a){Ta(a),a.u&&(l.clearTimeout(a.u),a.u=null),ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function xa(a){if(!kp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ke||Q(),V||(Ke(),V=!0),H.add(c,a),a.B=0}}function FE(a,c){return Ap(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=xs(m(a.Ga,a,c),Yp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Zn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=v(b),I(b,this.S)):b=this.S),this.m!==null||this.O||(N.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Hp(this,N,c),d=Sn(this.I),we(d,"RID",a),we(d,"CVER",22),this.D&&we(d,"X-HTTP-Session-Id",this.D),qs(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(Lp(b)))+"&"+c:this.m&&Zu(d,this.m,b)),Ju(this.h,N),this.Ua&&we(d,"TYPE","init"),this.P?(we(d,"$req",c),we(d,"SID","null"),N.T=!0,Gu(N,d,null)):Gu(N,d,c),this.G=2}}else this.G==3&&(a?Wp(this,a):this.i.length==0||kp(this.h)||Wp(this))};function Wp(a,c){var d;c?d=c.l:d=a.U++;const y=Sn(a.I);we(y,"SID",a.K),we(y,"RID",d),we(y,"AID",a.T),qs(a,y),a.m&&a.o&&Zu(y,a.m,a.o),d=new Zn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Hp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ju(a.h,d),Gu(d,y,c)}function qs(a,c){a.H&&U(a.H,function(d,y){we(c,y,d)}),a.l&&Rp({},function(d,y){we(c,y,d)})}function Hp(a,c,d){d=Math.min(a.i.length,d);var y=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let b=-1;for(;;){const z=["count="+d];b==-1?0<d?(b=N[0].g,z.push("ofs="+b)):b=0:z.push("ofs="+b);let ve=!0;for(let Ge=0;Ge<d;Ge++){let de=N[Ge].g;const rt=N[Ge].map;if(de-=b,0>de)b=Math.max(0,N[Ge].g-100),ve=!1;else try{LE(rt,z,"req"+de+"_")}catch{y&&y(rt)}}if(ve){y=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,y}function Kp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ke||Q(),V||(Ke(),V=!0),H.add(c,a),a.v=0}}function tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=xs(m(a.Fa,a),Yp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=xs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Ta(this),Gp(this))};function nc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Gp(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Sn(a.qa);we(c,"RID","rpc"),we(c,"SID",a.K),we(c,"AID",a.T),we(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(c,"TO",a.ja),we(c,"TYPE","xmlhttp"),qs(a,c),a.m&&a.o&&Zu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=_a(Sn(c)),d.m=null,d.P=!0,Ep(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ta(this),tc(this),gt(19))};function ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Qp(a,c){var d=null;if(a.g==c){ka(a),nc(a),a.g=null;var y=2}else if(Xu(a.h,c))d=c.D,Sp(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;y=fa(),mt(y,new yp(y,d)),xa(a)}else Kp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(y==1&&FE(a,c)||y==2&&tc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function Yp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Br(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),y=a.Xa;const N=!y;y=new zr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ya(y,"https"),_a(y),N?DE(y.toString(),d):VE(y.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(c),Xp(a),$p(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Xp(a){if(a.G=0,a.ka=[],a.l){const c=Cp(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Jp(a,c,d){var y=d instanceof zr?Sn(d):new zr(d);if(y.g!="")c&&(y.g=c+"."+y.g),va(y,y.s);else{var N=l.location;y=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var b=new zr(null);y&&ya(b,y),c&&(b.g=c),N&&va(b,N),d&&(b.l=d),y=b}return d=a.D,c=a.ya,d&&c&&we(y,d,c),we(y,"VER",a.la),qs(a,y),y}function Zp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new qe(new wa({eb:d})):new qe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function em(){}t=em.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Aa(){}Aa.prototype.g=function(a,c){return new Dt(a,c)};function Dt(a,c){Be.call(this),this.g=new Bp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new wi(this)}P(Dt,Be),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){ec(this.g)},Dt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=zu(a),a=d);c.i.push(new xE(c.Ya++,a)),c.G==3&&xa(c)},Dt.prototype.N=function(){this.g.l=null,delete this.j,ec(this.g),delete this.g,Dt.aa.N.call(this)};function tm(a){$u.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(tm,$u);function nm(){Wu.call(this),this.status=1}P(nm,Wu);function wi(a){this.g=a}P(wi,em),wi.prototype.ua=function(){mt(this.g,"a")},wi.prototype.ta=function(a){mt(this.g,new tm(a))},wi.prototype.sa=function(a){mt(this.g,new nm)},wi.prototype.ra=function(){mt(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,y0=function(){return new Aa},g0=function(){return fa()},m0=Ur,Bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pa.NO_ERROR=0,pa.TIMEOUT=8,pa.HTTP_ERROR=6,ll=pa,vp.COMPLETE="complete",p0=vp,fp.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",Be.prototype.listen=Be.prototype.K,Qs=fp,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,f0=qe}).apply(typeof Wa<"u"?Wa:typeof self<"u"?self:typeof window<"u"?window:{});const Rg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new of("@firebase/firestore");function zs(){return li.logLevel}function G(t,...e){if(li.logLevel<=oe.DEBUG){const n=e.map(uf);li.debug(`Firestore (${gs}): ${t}`,...n)}}function Wn(t,...e){if(li.logLevel<=oe.ERROR){const n=e.map(uf);li.error(`Firestore (${gs}): ${t}`,...n)}}function ns(t,...e){if(li.logLevel<=oe.WARN){const n=e.map(uf);li.warn(`Firestore (${gs}): ${t}`,...n)}}function uf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function ge(t,e){t||Z()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class Sk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ck{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new v0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new lt(e)}}class Rk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Pk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Rk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new Nk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new ze(0,0))}static max(){return new te(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends bo{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const Dk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends bo{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return Dk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ie.fromString(e))}static fromName(e){return new Y(Ie.fromString(e).popFirst(5))}static empty(){return new Y(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ie(e.slice()))}}function Vk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new Cr(i,Y.empty(),e)}function Ok(t){return new Cr(t.readTime,t.key,-1)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(te.min(),Y.empty(),-1)}static max(){return new Cr(te.max(),Y.empty(),-1)}}function Lk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Mk)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Uk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cf.oe=-1;function Iu(t){return t==null}function $l(t){return t===0&&1/t==-1/0}function Fk(t){return typeof t=="number"&&Number.isInteger(t)&&!$l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function w0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ha(this.root,e,this.comparator,!0)}}class Ha{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class E0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new E0("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const zk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=zk.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function df(t){const e=t.mapValue.fields.__previous_value__;return hf(e)?df(e):e}function qo(t){const e=Rr(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Do{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Do("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Do&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={mapValue:{}};function ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:Wk(t)?9007199254740991:$k(t)?10:11:Z()}function In(t,e){if(t===e)return!0;const n=ci(t);if(n!==ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rr(i.timestampValue),l=Rr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ui(i.bytesValue).isEqual(ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?$l(o)===$l(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Pg(o)!==Pg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!In(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function Vo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=ci(t),r=ci(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return bg(t.timestampValue,e.timestampValue);case 4:return bg(qo(t),qo(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ui(s),u=ui(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=fe(l[h],u[h]);if(p!==0)return p}return fe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=fe(Ve(s.latitude),Ve(o.latitude));return l!==0?l:fe(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,p;const g=s.fields||{},m=o.fields||{},A=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(u=m.value)===null||u===void 0?void 0:u.arrayValue,C=fe(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:qg(A,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ka.mapValue&&o===Ka.mapValue)return 0;if(s===Ka.mapValue)return 1;if(o===Ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const m=fe(u[g],p[g]);if(m!==0)return m;const A=is(l[u[g]],h[p[g]]);if(A!==0)return A}return fe(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Z()}}function bg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Rr(t),r=Rr(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function qg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=is(n[i],r[i]);if(s)return s}return fe(n.length,r.length)}function ss(t){return $h(t)}function $h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$h(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$h(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Dg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wh(t){return!!t&&"integerValue"in t}function ff(t){return!!t&&"arrayValue"in t}function Vg(t){return!!t&&"nullValue"in t}function Og(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function $k(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Wk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lo(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=lo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){mi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(lo(this.value))}}function I0(t){const e=[];return mi(t.fields,(n,r)=>{const i=new Xe([n]);if(ul(r)){const s=I0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,te.min(),te.min(),te.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new ct(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new ct(e,2,n,te.min(),te.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,te.min(),te.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wl{constructor(e,n){this.position=e,this.inclusive=n}}function Lg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=is(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Hk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class T0{}class je extends T0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Gk(e,n,r):n==="array-contains"?new Xk(e,r):n==="in"?new Jk(e,r):n==="not-in"?new Zk(e,r):n==="array-contains-any"?new eA(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Qk(e,r):new Yk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&ci(this.value)===ci(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends T0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dn(e,n)}matches(e){return x0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function x0(t){return t.op==="and"}function k0(t){return Kk(t)&&x0(t)}function Kk(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Hh(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+ss(t.value);if(k0(t))return t.filters.map(e=>Hh(e)).join(",");{const e=t.filters.map(n=>Hh(n)).join(",");return`${t.op}(${e})`}}function A0(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&A0(o,i.filters[l]),!0):!1}(t,e):void Z()}function S0(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(S0).join(" ,")+"}"}(t):"Filter"}class Gk extends je{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Qk extends je{constructor(e,n){super(e,"in",n),this.keys=C0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Yk extends je{constructor(e,n){super(e,"not-in",n),this.keys=C0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function C0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Xk extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ff(n)&&Vo(n.arrayValue,this.value)}}class Jk extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class Zk extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vo(this.value.arrayValue,n)}}class eA extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
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
 */class tA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function jg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new tA(t,e,n,r,i,s,o)}function pf(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Iu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.ue=n}return e.ue}function mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Hk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mg(t.startAt,e.startAt)&&Mg(t.endAt,e.endAt)}function Kh(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nA(t,e,n,r,i,s,o,l){return new ys(t,e,n,r,i,s,o,l)}function Tu(t){return new ys(t)}function Ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function R0(t){return t.collectionGroup!==null}function uo(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Oo(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new Oo(Xe.keyField(),r))}return e.ce}function vn(t){const e=ne(t);return e.le||(e.le=rA(e,uo(t))),e.le}function rA(t,e){if(t.limitType==="F")return jg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oo(i.field,s)});const n=t.endAt?new Wl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wl(t.startAt.position,t.startAt.inclusive):null;return jg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gh(t,e){const n=t.filters.concat([e]);return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hl(t,e,n){return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xu(t,e){return mf(vn(t),vn(e))&&t.limitType===e.limitType}function P0(t){return`${pf(vn(t))}|lt:${t.limitType}`}function Ti(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>S0(i)).join(", ")}]`),Iu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ss(i)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of uo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Lg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,uo(r),i)||r.endAt&&!function(o,l,u){const h=Lg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,uo(r),i))}(t,e)}function iA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function N0(t){return(e,n)=>{let r=!1;for(const i of uo(t)){const s=sA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function sA(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?is(u,h):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return w0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=new Ne(Y.comparator);function Hn(){return oA}const b0=new Ne(Y.comparator);function Ys(...t){let e=b0;for(const n of t)e=e.insert(n.key,n);return e}function q0(t){let e=b0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return co()}function D0(){return co()}function co(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const aA=new Ne(Y.comparator),lA=new Ze(Y.comparator);function ie(...t){let e=lA;for(const n of t)e=e.add(n);return e}const uA=new Ze(fe);function cA(){return uA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$l(e)?"-0":e}}function V0(t){return{integerValue:""+t}}function hA(t,e){return Fk(e)?V0(e):gf(t,e)}/**
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
 */class Au{constructor(){this._=void 0}}function dA(t,e,n){return t instanceof Lo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hf(s)&&(s=df(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Mo?L0(t,e):t instanceof jo?M0(t,e):function(i,s){const o=O0(i,s),l=Fg(o)+Fg(i.Pe);return Wh(o)&&Wh(i.Pe)?V0(l):gf(i.serializer,l)}(t,e)}function fA(t,e,n){return t instanceof Mo?L0(t,e):t instanceof jo?M0(t,e):n}function O0(t,e){return t instanceof Kl?function(r){return Wh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Lo extends Au{}class Mo extends Au{constructor(e){super(),this.elements=e}}function L0(t,e){const n=j0(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class jo extends Au{constructor(e){super(),this.elements=e}}function M0(t,e){let n=j0(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class Kl extends Au{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fg(t){return Ve(t.integerValue||t.doubleValue)}function j0(t){return ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n){this.field=e,this.transform=n}}function mA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Mo&&i instanceof Mo||r instanceof jo&&i instanceof jo?rs(r.elements,i.elements,In):r instanceof Kl&&i instanceof Kl?In(r.Pe,i.Pe):r instanceof Lo&&i instanceof Lo}(t.transform,e.transform)}class gA{constructor(e,n){this.version=e,this.transformResults=n}}class _t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Su{}function U0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cu(t.key,_t.none()):new Jo(t.key,t.data,_t.none());{const n=t.data,r=kt.empty();let i=new Ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Dr(t.key,r,new Lt(i.toArray()),_t.none())}}function yA(t,e,n){t instanceof Jo?function(i,s,o){const l=i.value.clone(),u=Bg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(i,s,o){if(!cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Bg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(F0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof Jo?function(s,o,l,u){if(!cl(s.precondition,o))return l;const h=s.value.clone(),p=$g(s.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,o,l,u){if(!cl(s.precondition,o))return l;const h=$g(s.fieldTransforms,u,o),p=o.data;return p.setAll(F0(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function vA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=O0(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function zg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&rs(r,i,(s,o)=>mA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jo extends Su{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dr extends Su{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function F0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bg(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,fA(o,l,n[i]))}return r}function $g(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,dA(s,o,e))}return r}class Cu extends Su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _A extends Su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=D0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=U0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>zg(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>zg(n,r))}}class yf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return aA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yf(e,n,r,i)}}/**
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
 */class EA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,le;function TA(t){switch(t){default:return Z();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function z0(t){if(t===void 0)return Wn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Le.OK:return L.OK;case Le.CANCELLED:return L.CANCELLED;case Le.UNKNOWN:return L.UNKNOWN;case Le.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Le.INTERNAL:return L.INTERNAL;case Le.UNAVAILABLE:return L.UNAVAILABLE;case Le.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Le.NOT_FOUND:return L.NOT_FOUND;case Le.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Le.ABORTED:return L.ABORTED;case Le.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Le.DATA_LOSS:return L.DATA_LOSS;default:return Z()}}(le=Le||(Le={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xA(){return new TextEncoder}/**
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
 */const kA=new ti([4294967295,4294967295],0);function Wg(t){const e=xA().encode(t),n=new d0;return n.update(e),new Uint8Array(n.digest())}function Hg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ti([n,r],0),new ti([i,s],0)]}class vf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xs(`Invalid padding: ${n}`);if(r<0)throw new Xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ti.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ti.fromNumber(r)));return i.compare(kA)===1&&(i=new ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Wg(e),[r,i]=Hg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Wg(e),[r,i]=Hg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ru(te.min(),i,new Ne(fe),Hn(),ie())}}class Zo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zo(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class B0{constructor(e,n){this.targetId=e,this.me=n}}class $0{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Kg{constructor(){this.fe=0,this.ge=Qg(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Zo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Qg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Hn(),this.qe=Gg(),this.Qe=new Ne(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Kh(s))if(r===0){const o=new Y(s.path);this.Ue(n,o,ct.newNoDocument(o,te.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ui(r).toUint8Array()}catch(u){if(u instanceof E0)return ns("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vf(o,i,s)}catch(u){return ns(u instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Kh(l.target)){const u=new Y(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ct.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ru(e,n,this.Qe,this.ke,r);return this.ke=Hn(),this.qe=Gg(),this.Qe=new Ne(fe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Kg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Kg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gg(){return new Ne(Y.comparator)}function Qg(){return new Ne(Y.comparator)}const SA={asc:"ASCENDING",desc:"DESCENDING"},CA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RA={and:"AND",or:"OR"};class PA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qh(t,e){return t.useProto3Json||Iu(e)?e:{value:e}}function Gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NA(t,e){return Gl(t,e.toTimestamp())}function _n(t){return ge(!!t),te.fromTimestamp(function(n){const r=Rr(n);return new ze(r.seconds,r.nanos)}(t))}function _f(t,e){return Yh(t,e).canonicalString()}function Yh(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function H0(t){const e=Ie.fromString(t);return ge(X0(e)),e}function Xh(t,e){return _f(t.databaseId,e.path)}function Vc(t,e){const n=H0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(G0(n))}function K0(t,e){return _f(t.databaseId,e)}function bA(t){const e=H0(t);return e.length===4?Ie.emptyPath():G0(e)}function Jh(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function G0(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yg(t,e,n){return{name:Xh(t,e),fields:n.value.mapValue.fields}}function qA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(ge(p===void 0||typeof p=="string"),tt.fromBase64String(p||"")):(ge(p===void 0||p instanceof Buffer||p instanceof Uint8Array),tt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?L.UNKNOWN:z0(h.code);return new W(p,h.message||"")}(o);n=new $0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vc(t,r.document.name),s=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):te.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(i,s,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new hl(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vc(t,r.document),s=r.readTime?_n(r.readTime):te.min(),o=ct.newNoDocument(i,s),l=r.removedTargetIds||[];n=new hl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vc(t,r.document),s=r.removedTargetIds||[];n=new hl([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IA(i,s),l=r.targetId;n=new B0(l,o)}}return n}function DA(t,e){let n;if(e instanceof Jo)n={update:Yg(t,e.key,e.value)};else if(e instanceof Cu)n={delete:Xh(t,e.key)};else if(e instanceof Dr)n={update:Yg(t,e.key,e.data),updateMask:BA(e.fieldMask)};else{if(!(e instanceof _A))return Z();n={verify:Xh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Kl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:NA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function VA(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?_n(i.updateTime):_n(s);return o.isEqual(te.min())&&(o=_n(s)),new gA(o,i.transformResults||[])}(n,e))):[]}function OA(t,e){return{documents:[K0(t,e.path)]}}function LA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=K0(t,i);const s=function(h){if(h.length!==0)return Y0(dn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(p=>function(m){return{field:xi(m.field),direction:UA(m.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Qh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function MA(t){let e=bA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const m=Q0(g);return m instanceof dn&&k0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(P){return new Oo(ki(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,Iu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,A=g.values||[];return new Wl(A,m)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const m=!g.before,A=g.values||[];return new Wl(A,m)}(n.endAt)),nA(e,i,o,s,l,"F",u,h)}function jA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Q0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ki(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ki(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ki(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ki(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return je.create(ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>Q0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function UA(t){return SA[t]}function FA(t){return CA[t]}function zA(t){return RA[t]}function xi(t){return{fieldPath:t.canonicalString()}}function ki(t){return Xe.fromServerFormat(t.fieldPath)}function Y0(t){return t instanceof je?function(n){if(n.op==="=="){if(Og(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NAN"}};if(Vg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Og(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NAN"}};if(Vg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(n.field),op:FA(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>Y0(i));return r.length===1?r[0]:{compositeFilter:{op:zA(n.op),filters:r}}}(t):Z()}function BA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function X0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.ct=e}}function WA(t){const e=MA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hl(e,e.limit,"L"):e}/**
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
 */class HA{constructor(){this.un=new KA}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Cr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class KA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new os(0)}static kn(){return new os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class QA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ho(r.mutation,i,Lt.empty(),ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ys();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Hn();const o=co(),l=function(){return co()}();return n.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Dr)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),ho(p.mutation,h,p.mutation.getFieldMask(),ze.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var g;return l.set(h,new QA(p,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=co();let i=new Ne((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||Lt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const g=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,g=D0();p.forEach(m=>{if(!s.has(m)){const A=U0(n.get(m),r.get(m));A!==null&&g.set(m,A),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):R0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Xr());let l=-1,u=s;return o.next(h=>M.forEach(h,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(m=>{u=u.insert(p,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ie())).next(p=>({batchId:l,changes:q0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=Ys();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(g,m){return new ys(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,ct.newInvalidDocument(p)))});let l=Ys();return o.forEach((u,h)=>{const p=s.get(u);p!==void 0&&ho(p.mutation,h,Lt.empty(),ze.now()),ku(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:_n(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:WA(i.bundledQuery),readTime:_n(i.readTime)}}(n)),M.resolve()}}/**
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
 */class JA{constructor(){this.overlays=new Ne(Y.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Xr(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Xr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Xr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new EA(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class ZA{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.Tr=new Ze($e.Er),this.dr=new Ze($e.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new $e(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Ie([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Ie([])),r=new $e(n,e),i=new $e(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||fe(e.wr,n.wr)}static Ar(e,n){return fe(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze($e.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wA(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(fe);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new $e(new Y(s),0);let l=new Ze(fe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new $e(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.Mr=e,this.docs=function(){return new Ne(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Hn();const o=n.path,l=new Y(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Lk(Ok(p),r)<=0||(i.has(p.key)||ku(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nS(this)}getSize(e){return M.resolve(this.size)}}class nS extends GA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.persistence=e,this.Nr=new vs(n=>pf(n),mf),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new wf,this.targetCount=0,this.kr=os.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new cf(0),this.Kr=!1,this.Kr=!0,this.$r=new ZA,this.referenceDelegate=e(this),this.Ur=new rS(this),this.indexManager=new HA,this.remoteDocumentCache=function(i){return new tS(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $A(n),this.Gr=new XA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new eS(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new sS(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class sS extends jk{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Jr=new wf,this.Yr=null}static Zr(e){return new Ef(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=Y.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new If(e,n.fromCache,r,i)}}/**
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
 */class oS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class aS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ax()?8:Uk(ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new oS;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(zs()<=oe.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Ti(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(zs()<=oe.DEBUG&&G("QueryEngine","Query:",Ti(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(zs()<=oe.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Ti(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):M.resolve())}Yi(e,n){if(Ug(n))return M.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hl(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Hl(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Ug(n)||i.isEqual(te.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(zs()<=oe.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ti(n)),this.rs(e,o,n,Vk(i,-1)).next(l=>l))})}ts(e,n){let r=new Ze(N0(e));return n.forEach((i,s)=>{ku(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return zs()<=oe.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Ti(n)),this.Ji.getDocumentsMatchingQuery(e,n,Cr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ne(fe),this._s=new vs(s=>pf(s),mf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function uS(t,e,n,r){return new lS(t,e,n,r)}async function J0(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const h of i){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function cS(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const g=h.batch,m=g.keys();let A=M.resolve();return m.forEach(P=>{A=A.next(()=>p.getEntry(u,P)).next(C=>{const D=h.docVersions.get(P);ge(D!==null),C.version.compareTo(D)<0&&(g.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),p.addEntry(C)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Z0(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function hS(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((p,g)=>{const m=i.get(g);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,g)));let A=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(tt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),i=i.insert(g,A),function(C,D,k){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,A,p)&&l.push(n.Ur.updateTargetData(s,A))});let u=Hn(),h=ie();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(dS(s,o,e.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!r.isEqual(te.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function dS(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Hn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function fS(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pS(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Zh(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xo(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Xg(t,e,n){const r=ne(t);let i=te.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const g=ne(u),m=g._s.get(p);return m!==void 0?M.resolve(g.os.get(m)):g.Ur.getTargetData(h,p)}(r,o,vn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:ie())).next(l=>(mS(r,iA(e),l),{documents:l,Ts:s})))}function mS(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Jg{constructor(){this.activeTargetIds=cA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gS{constructor(){this.so=new Jg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Jg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yS{_o(e){}shutdown(){}}/**
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
 */class Zg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ga=null;function Oc(){return Ga===null?Ga=function(){return 268435456+Math.round(2147483648*Math.random())}():Ga++,"0x"+Ga.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class wS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Oc(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(p=>(G("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw ns("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=vS[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Oc();return new Promise((o,l)=>{const u=new f0;u.setWithCredentials(!0),u.listenOnce(p0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ll.NO_ERROR:const p=u.getResponseJson();G(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case ll.TIMEOUT:G(at,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case ll.HTTP_ERROR:const g=u.getStatus();if(G(at,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const P=function(D){const k=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(k)>=0?k:L.UNKNOWN}(A.status);l(new W(P,A.message))}else l(new W(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{G(at,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);G(at,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Oc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=y0(),l=g0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");G(at,`Creating RPC '${e}' stream ${i}: ${p}`,u);const g=o.createWebChannel(p,u);let m=!1,A=!1;const P=new _S({Io:D=>{A?G(at,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(G(at,`Opening RPC '${e}' stream ${i} transport.`),g.open(),m=!0),G(at,`RPC '${e}' stream ${i} sending:`,D),g.send(D))},To:()=>g.close()}),C=(D,k,E)=>{D.listen(k,x=>{try{E(x)}catch(q){setTimeout(()=>{throw q},0)}})};return C(g,Qs.EventType.OPEN,()=>{A||(G(at,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),C(g,Qs.EventType.CLOSE,()=>{A||(A=!0,G(at,`RPC '${e}' stream ${i} transport closed`),P.So())}),C(g,Qs.EventType.ERROR,D=>{A||(A=!0,ns(at,`RPC '${e}' stream ${i} transport errored:`,D),P.So(new W(L.UNAVAILABLE,"The operation could not be completed")))}),C(g,Qs.EventType.MESSAGE,D=>{var k;if(!A){const E=D.data[0];ge(!!E);const x=E,q=x.error||((k=x[0])===null||k===void 0?void 0:k.error);if(q){G(at,`RPC '${e}' stream ${i} received error:`,q);const F=q.status;let U=function(_){const I=Le[_];if(I!==void 0)return z0(I)}(F),w=q.message;U===void 0&&(U=L.INTERNAL,w="Unknown error status: "+F+" with message "+q.message),A=!0,P.So(new W(U,w)),g.close()}else G(at,`RPC '${e}' stream ${i} received:`,E),P.bo(E)}}),C(l,m0.STAT_EVENT,D=>{D.stat===Bh.PROXY?G(at,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Bh.NOPROXY&&G(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){return new PA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ew(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ES extends tw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=qA(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?_n(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Jh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Kh(u)?{documents:OA(s,u)}:{query:LA(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=W0(s,o.resumeToken);const h=Qh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Gl(s,o.snapshotVersion.toTimestamp());const h=Qh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=jA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Jh(this.serializer),n.removeTarget=e,this.a_(n)}}class IS extends tw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=VA(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Jh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Yh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Yh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class xS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wn(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{gi(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.L_.add(4),await ea(h),h.q_.set("Unknown"),h.L_.delete(4),await Nu(h)}(this))})}),this.q_=new xS(r,i)}}async function Nu(t){if(gi(t))for(const e of t.B_)await e(!0)}async function ea(t){for(const e of t.B_)await e(!1)}function nw(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Af(n)?kf(n):_s(n).r_()&&xf(n,e))}function Tf(t,e){const n=ne(t),r=_s(n);n.N_.delete(e),r.r_()&&rw(n,e),n.N_.size===0&&(r.r_()?r.o_():gi(n)&&n.q_.set("Unknown"))}function xf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).A_(e)}function rw(t,e){t.Q_.xe(e),_s(t).R_(e)}function kf(t){t.Q_=new AA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.q_.v_()}function Af(t){return gi(t)&&!_s(t).n_()&&t.N_.size>0}function gi(t){return ne(t).L_.size===0}function iw(t){t.Q_=void 0}async function AS(t){t.q_.set("Online")}async function SS(t){t.N_.forEach((e,n)=>{xf(t,e)})}async function CS(t,e){iw(t),Af(t)?(t.q_.M_(e),kf(t)):t.q_.set("Unknown")}async function RS(t,e,n){if(t.q_.set("Online"),e instanceof $0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ql(t,r)}else if(e instanceof hl?t.Q_.Ke(e):e instanceof B0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await Z0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(h);p&&s.N_.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(tt.EMPTY_BYTE_STRING,p.snapshotVersion)),rw(s,u);const g=new fr(p.target,u,h,p.sequenceNumber);xf(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Ql(t,r)}}async function Ql(t,e,n){if(!Xo(e))throw e;t.L_.add(1),await ea(t),t.q_.set("Offline"),n||(n=()=>Z0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Nu(t)})}function sw(t,e){return e().catch(n=>Ql(t,n,e))}async function bu(t){const e=ne(t),n=Pr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;PS(e);)try{const i=await fS(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,NS(e,i)}catch(i){await Ql(e,i)}ow(e)&&aw(e)}function PS(t){return gi(t)&&t.O_.length<10}function NS(t,e){t.O_.push(e);const n=Pr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ow(t){return gi(t)&&!Pr(t).n_()&&t.O_.length>0}function aw(t){Pr(t).start()}async function bS(t){Pr(t).p_()}async function qS(t){const e=Pr(t);for(const n of t.O_)e.m_(n.mutations)}async function DS(t,e,n){const r=t.O_.shift(),i=yf.from(r,e,n);await sw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bu(t)}async function VS(t,e){e&&Pr(t).V_&&await async function(r,i){if(function(o){return TA(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();Pr(r).s_(),await sw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bu(r)}}(t,e),ow(t)&&aw(t)}async function ey(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=gi(n);n.L_.add(3),await ea(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Nu(n)}async function OS(t,e){const n=ne(t);e?(n.L_.delete(2),await Nu(n)):e||(n.L_.add(2),await ea(n),n.q_.set("Unknown"))}function _s(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new ES(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:AS.bind(null,t),Ro:SS.bind(null,t),mo:CS.bind(null,t),d_:RS.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Af(t)?kf(t):t.q_.set("Unknown")):(await t.K_.stop(),iw(t))})),t.K_}function Pr(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new IS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bS.bind(null,t),mo:VS.bind(null,t),f_:qS.bind(null,t),g_:DS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await bu(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Sf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cf(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),Xo(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new $i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.W_=new Ne(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new as(e,n,$i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class MS{constructor(){this.queries=ny(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=ny(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function ny(){return new vs(t=>P0(t),xu)}async function Rf(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new LS,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Cf(o,`Initialization of query '${Ti(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Nf(n)}async function Pf(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jS(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Nf(n)}function US(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Nf(t){t.Y_.forEach(e=>{e.next()})}var ed,ry;(ry=ed||(ed={})).ea="default",ry.Cache="cache";class bf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ed.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.key=e}}class uw{constructor(e){this.key=e}}class FS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=N0(e),this.Ra=new $i(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ty,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const m=i.get(p),A=ku(this.query,g)?g:null,P=!!m&&this.mutatedKeys.has(m.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;m&&A?m.data.isEqual(A.data)?P!==C&&(r.track({type:3,doc:A}),D=!0):this.ga(m,A)||(r.track({type:2,doc:A}),D=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),D=!0):m&&!A&&(r.track({type:1,doc:m}),D=!0,(u||h)&&(l=!0)),D&&(A?(o=o.add(A),s=C?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,g)=>function(A,P){const C=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return C(A)-C(P)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new as(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ty,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new uw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new lw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return as.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BS{constructor(e){this.key=e,this.va=!1}}class $S{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new vs(l=>P0(l),xu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ne(Y.comparator),this.Na=new Map,this.La=new wf,this.Ba={},this.ka=new Map,this.qa=os.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function WS(t,e,n=!0){const r=mw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await cw(r,e,n,!0),i}async function HS(t,e){const n=mw(t);await cw(n,e,!0,!1)}async function cw(t,e,n,r){const i=await pS(t.localStore,vn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await KS(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&nw(t.remoteStore,i),l}async function KS(t,e,n,r,i){t.Ka=(g,m,A)=>async function(C,D,k,E){let x=D.view.ma(k);x.ns&&(x=await Xg(C.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,x)));const q=E&&E.targetChanges.get(D.targetId),F=E&&E.targetMismatches.get(D.targetId)!=null,U=D.view.applyChanges(x,C.isPrimaryClient,q,F);return sy(C,D.targetId,U.wa),U.snapshot}(t,g,m,A);const s=await Xg(t.localStore,e,!0),o=new FS(e,s.Ts),l=o.ma(s.documents),u=Zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);sy(t,n,h.wa);const p=new zS(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function GS(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!xu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tf(r.remoteStore,i.targetId),td(r,i.targetId)}).catch(Yo)):(td(r,i.targetId),await Zh(r.localStore,i.targetId,!0))}async function QS(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tf(n.remoteStore,r.targetId))}async function YS(t,e,n){const r=r2(t);try{const i=await function(o,l){const u=ne(o),h=ze.now(),p=l.reduce((A,P)=>A.add(P.key),ie());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Hn(),C=ie();return u.cs.getEntries(A,p).next(D=>{P=D,P.forEach((k,E)=>{E.isValidDocument()||(C=C.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(D=>{g=D;const k=[];for(const E of l){const x=vA(E,g.get(E.key).overlayedDocument);x!=null&&k.push(new Dr(E.key,x,I0(x.value.mapValue),_t.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,k,l)}).next(D=>{m=D;const k=D.applyToLocalDocumentSet(g,C);return u.documentOverlayCache.saveOverlays(A,D.batchId,k)})}).then(()=>({batchId:m.batchId,changes:q0(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ne(fe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await ta(r,i.changes),await bu(r.remoteStore)}catch(i){const s=Cf(i,"Failed to persist write");n.reject(s)}}async function hw(t,e){const n=ne(t);try{const r=await hS(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ge(o.va):i.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await ta(n,r,e)}catch(r){await Yo(r)}}function iy(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((p,g)=>{for(const m of g.j_)m.Z_(l)&&(h=!0)}),h&&Nf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XS(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ne(Y.comparator);o=o.insert(s,ct.newNoDocument(s,te.min()));const l=ie().add(s),u=new Ru(te.min(),new Map,new Ne(fe),o,l);await hw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),qf(r)}else await Zh(r.localStore,e,!1).then(()=>td(r,e,n)).catch(Yo)}async function JS(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await cS(n.localStore,e);fw(n,r,null),dw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,i)}catch(i){await Yo(i)}}async function ZS(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ge(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);fw(r,e,n),dw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,i)}catch(i){await Yo(i)}}function dw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function fw(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||pw(t,r)})}function pw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Tf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),qf(t))}function sy(t,e,n){for(const r of n)r instanceof lw?(t.La.addReference(r.key,e),e2(t,r)):r instanceof uw?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||pw(t,r.key)):Z()}function e2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),qf(t))}function qf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Ie.fromString(e)),r=t.qa.next();t.Na.set(r,new BS(n)),t.Oa=t.Oa.insert(n,r),nw(t.remoteStore,new fr(vn(Tu(n.path)),r,"TargetPurposeLimboResolution",cf.oe))}}async function ta(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=If.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const p=ne(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(h,m=>M.forEach(m.$i,A=>p.persistence.referenceDelegate.addReference(g,m.targetId,A)).next(()=>M.forEach(m.Ui,A=>p.persistence.referenceDelegate.removeReference(g,m.targetId,A)))))}catch(g){if(!Xo(g))throw g;G("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const A=p.os.get(m),P=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(P);p.os=p.os.insert(m,C)}}}(r.localStore,s))}async function t2(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await J0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ta(n,r.hs)}}function n2(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function mw(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=n2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XS.bind(null,e),e.Ca.d_=jS.bind(null,e.eventManager),e.Ca.$a=US.bind(null,e.eventManager),e}function r2(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZS.bind(null,e),e}class Yl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return uS(this.persistence,new aS,e.initialUser,this.serializer)}Ga(e){return new iS(Ef.Zr,this.serializer)}Wa(e){return new gS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yl.provider={build:()=>new Yl};class nd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=t2.bind(null,this.syncEngine),await OS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MS}()}createDatastore(e){const n=Pu(e.databaseInfo.databaseId),r=function(s){return new wS(s)}(e.databaseInfo);return function(s,o,l,u){return new TS(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new kS(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>iy(this.syncEngine,n,0),function(){return Zg.D()?new Zg:new yS}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,p){const g=new $S(i,s,o,l,u,h);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ea(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}nd.provider={build:()=>new nd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Df{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=_0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await J0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function oy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await s2(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ey(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ey(e.remoteStore,i)),t._onlineComponents=e}async function s2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new Yl)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Mc(t,new Yl);return t._offlineComponents}async function gw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await oy(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await oy(t,new nd))),t._onlineComponents}function o2(t){return gw(t).then(e=>e.syncEngine)}async function Xl(t){const e=await gw(t),n=e.eventManager;return n.onListen=WS.bind(null,e.syncEngine),n.onUnlisten=GS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QS.bind(null,e.syncEngine),n}function a2(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const p=new Df({next:m=>{p.Za(),o.enqueueAndForget(()=>Pf(s,g));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&u&&u.source==="server"?h.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new bf(Tu(l.path),p,{includeMetadataChanges:!0,_a:!0});return Rf(s,g)}(await Xl(t),t.asyncQueue,e,n,r)),r.promise}function l2(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const p=new Df({next:m=>{p.Za(),o.enqueueAndForget(()=>Pf(s,g)),m.fromCache&&u.source==="server"?h.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new bf(l,p,{includeMetadataChanges:!0,_a:!0});return Rf(s,g)}(await Xl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function yw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function u2(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ly(t){if(!Y.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uy(t){if(Y.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}u2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Du{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ak;switch(r.type){case"firstParty":return new Pk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ay.get(n);r&&(G("ComponentProvider","Removing Datastore"),ay.delete(n),r.terminate())}(this),Promise.resolve()}}function c2(t,e,n,r={}){var i;const s=(t=wt(t,Du))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=lt.MOCK_USER;else{l=ex(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new lt(h)}t._authCredentials=new Sk(new v0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yn(this.firestore,e,this._query)}}class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class kr extends Yn{constructor(e,n,r){super(e,n,Tu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new Y(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function ls(t,e,...n){if(t=Pe(t),vw("collection","path",e),t instanceof Du){const r=Ie.fromString(e,...n);return uy(r),new kr(t,null,r)}{if(!(t instanceof ht||t instanceof kr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return uy(r),new kr(t.firestore,null,r)}}function zt(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=_0.newId()),vw("doc","path",e),t instanceof Du){const r=Ie.fromString(e,...n);return ly(r),new ht(t,null,new Y(r))}{if(!(t instanceof ht||t instanceof kr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return ly(r),new ht(t.firestore,t instanceof kr?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ew(this,"async_queue_retry"),this.Vu=()=>{const r=Lc();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Lc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Mn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xo(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Sf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function dy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Tn extends Du{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new hy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hy(e),this._firestoreClient=void 0,await e}}}function h2(t,e){const n=typeof t=="object"?t:u0(),r=typeof t=="string"?t:"(default)",i=lf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=JT("firestore");s&&c2(i,...s)}return i}function na(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||d2(t),t._firestoreClient}function d2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,p){return new Bk(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,yw(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new i2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new us(tt.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new us(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */class Of{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=/^__.*__$/;class p2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jo(e,this.data,n,this.fieldTransforms)}}class _w{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ww(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Lf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Jl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ww(this.Cu)&&f2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class m2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pu(e)}Qu(e,n,r,i=!1){return new Lf({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ia(t){const e=t._freezeSettings(),n=Pu(t._databaseId);return new m2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mf(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Uf("Data must be an object, but it was:",o,r);const l=Tw(r,o);let u,h;if(s.merge)u=new Lt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const m=rd(e,g,n);if(!o.contains(m))throw new W(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kw(p,m)||p.push(m)}u=new Lt(p),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new p2(new kt(l),u,h)}class Ou extends Vu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ou}}class jf extends Vu{_toFieldTransform(e){return new pA(e.path,new Lo)}isEqual(e){return e instanceof jf}}function Ew(t,e,n,r){const i=t.Qu(1,e,n);Uf("Data must be an object, but it was:",i,r);const s=[],o=kt.empty();mi(r,(u,h)=>{const p=Ff(e,u,n);h=Pe(h);const g=i.Nu(p);if(h instanceof Ou)s.push(p);else{const m=sa(h,g);m!=null&&(s.push(p),o.set(p,m))}});const l=new Lt(s);return new _w(o,l,i.fieldTransforms)}function Iw(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[rd(e,r,n)],u=[i];if(s.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(rd(e,s[m])),u.push(s[m+1]);const h=[],p=kt.empty();for(let m=l.length-1;m>=0;--m)if(!kw(h,l[m])){const A=l[m];let P=u[m];P=Pe(P);const C=o.Nu(A);if(P instanceof Ou)h.push(A);else{const D=sa(P,C);D!=null&&(h.push(A),p.set(A,D))}}const g=new Lt(h);return new _w(p,g,o.fieldTransforms)}function g2(t,e,n,r=!1){return sa(n,t.Qu(r?4:3,e))}function sa(t,e){if(xw(t=Pe(t)))return Uf("Unsupported field value:",e,t),Tw(t,e);if(t instanceof Vu)return function(r,i){if(!ww(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=sa(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ze.fromDate(r);return{timestampValue:Gl(i.serializer,s)}}if(r instanceof ze){const s=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gl(i.serializer,s)}}if(r instanceof Vf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof us)return{bytesValue:W0(i.serializer,r._byteString)};if(r instanceof ht){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_f(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Of)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return gf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${qu(r)}`)}(t,e)}function Tw(t,e){const n={};return w0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(t,(r,i)=>{const s=sa(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Vf||t instanceof us||t instanceof ht||t instanceof Vu||t instanceof Of)}function Uf(t,e,n){if(!xw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=qu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function rd(t,e,n){if((e=Pe(e))instanceof ra)return e._internalPath;if(typeof e=="string")return Ff(t,e);throw Jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const y2=new RegExp("[~\\*/\\[\\]]");function Ff(t,e,n){if(e.search(y2)>=0)throw Jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ra(...e.split("."))._internalPath}catch{throw Jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function kw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class v2 extends Aw{data(){return super.data()}}function Lu(t,e){return typeof e=="string"?Ff(t,e):e instanceof ra?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zf{}class Bf extends zf{}function Uo(t,e,...n){let r=[];e instanceof zf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof $f).length,l=s.filter(u=>u instanceof Mu).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Mu extends Bf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Mu(e,n,r)}_apply(e){const n=this._parse(e);return Rw(e._query,n),new Yn(e.firestore,e.converter,Gh(e._query,n))}_parse(e){const n=ia(e.firestore);return function(s,o,l,u,h,p,g){let m;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){py(g,p);const A=[];for(const P of g)A.push(fy(u,s,P));m={arrayValue:{values:A}}}else m=fy(u,s,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||py(g,p),m=g2(l,o,g,p==="in"||p==="not-in");return je.create(h,p,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function id(t,e,n){const r=e,i=Lu("where",t);return Mu._create(i,r,n)}class $f extends zf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $f(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)Rw(o,u),o=Gh(o,u)}(e._query,n),new Yn(e.firestore,e.converter,Gh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wf extends Bf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oo(s,o)}(e._query,this._field,this._direction);return new Yn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ys(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Cw(t,e="asc"){const n=e,r=Lu("orderBy",t);return Wf._create(r,n)}class Hf extends Bf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Hf(e,n,r)}_apply(e){return new Yn(e.firestore,e.converter,Hl(e._query,this._limit,this._limitType))}}function _2(t){return Hf._create("limit",t,"F")}function fy(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!R0(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!Y.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dg(t,new Y(r))}if(n instanceof ht)return Dg(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qu(n)}.`)}function py(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rw(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class w2{convertValue(e,n="none"){switch(ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ve(o.doubleValue));return new Of(s)}convertGeoPoint(e){return new Vf(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=df(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ge(X0(r));const i=new Do(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pw extends Aw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dl extends Pw{data(e={}){return super.data(e)}}class Nw{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:E2(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function E2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){t=wt(t,ht);const e=wt(t.firestore,Tn);return a2(na(e),t._key).then(n=>qw(e,t,n))}class Gf extends w2{constructor(e){super(),this.firestore=e}convertBytes(e){return new us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function Zl(t){t=wt(t,Yn);const e=wt(t.firestore,Tn),n=na(e),r=new Gf(e);return Sw(t._query),l2(n,t._query).then(i=>new Nw(e,r,t,i))}function Qf(t,e,n){t=wt(t,ht);const r=wt(t.firestore,Tn),i=Kf(t.converter,e,n);return aa(r,[Mf(ia(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_t.none())])}function Vr(t,e,n,...r){t=wt(t,ht);const i=wt(t.firestore,Tn),s=ia(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof ra?Iw(s,"updateDoc",t._key,e,n,r):Ew(s,"updateDoc",t._key,e),aa(i,[o.toMutation(t._key,_t.exists(!0))])}function I2(t){return aa(wt(t.firestore,Tn),[new Cu(t._key,_t.none())])}function T2(t,e){const n=wt(t.firestore,Tn),r=zt(t),i=Kf(t.converter,e);return aa(n,[Mf(ia(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,_t.exists(!1))]).then(()=>r)}function bw(t,...e){var n,r,i;t=Pe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||dy(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(dy(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,p;if(t instanceof ht)h=wt(t.firestore,Tn),p=Tu(t._key.path),u={next:g=>{e[o]&&e[o](qw(h,t,g))},error:e[o+1],complete:e[o+2]};else{const g=wt(t,Yn);h=wt(g.firestore,Tn),p=g._query;const m=new Gf(h);u={next:A=>{e[o]&&e[o](new Nw(h,m,g,A))},error:e[o+1],complete:e[o+2]},Sw(t._query)}return function(m,A,P,C){const D=new Df(C),k=new bf(A,D,P);return m.asyncQueue.enqueueAndForget(async()=>Rf(await Xl(m),k)),()=>{D.Za(),m.asyncQueue.enqueueAndForget(async()=>Pf(await Xl(m),k))}}(na(h),p,l,u)}function aa(t,e){return function(r,i){const s=new Mn;return r.asyncQueue.enqueueAndForget(async()=>YS(await o2(r),i,s)),s.promise}(na(t),e)}function qw(t,e,n){const r=n.docs.get(e._key),i=new Gf(t);return new Pw(t,i,e._key,r,new Js(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ia(e)}set(e,n,r){this._verifyNotCommitted();const i=jc(e,this._firestore),s=Kf(i.converter,n,r),o=Mf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,_t.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=jc(e,this._firestore);let o;return o=typeof(n=Pe(n))=="string"||n instanceof ra?Iw(this._dataReader,"WriteBatch.update",s._key,n,r,i):Ew(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,_t.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=jc(e,this._firestore);return this._mutations=this._mutations.concat(new Cu(n._key,_t.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function jc(t,e){if((t=Pe(t)).firestore!==e)throw new W(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function wn(){return new jf("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){return na(t=wt(t,Tn)),new x2(t,e=>aa(t,e))}(function(e,n=!0){(function(i){gs=i})(ms),ts(new ai("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Tn(new Ck(r.getProvider("auth-internal")),new bk(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Do(h.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),xr(Rg,"4.7.3",e),xr(Rg,"4.7.3","esm2017")})();function Yf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Dw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const A2=Dw,Vw=new Go("auth","Firebase",Dw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new of("@firebase/auth");function S2(t,...e){eu.logLevel<=oe.WARN&&eu.warn(`Auth (${ms}): ${t}`,...e)}function fl(t,...e){eu.logLevel<=oe.ERROR&&eu.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Jf(t,...e)}function cn(t,...e){return Jf(t,...e)}function Xf(t,e,n){const r=Object.assign(Object.assign({},A2()),{[e]:n});return new Go("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return Xf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function C2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(t,"argument-error"),Xf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vw.create(t,...e)}function J(t,e,...n){if(!t)throw Jf(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fl(e),new Error(e)}function Kn(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function R2(){return my()==="http:"||my()==="https:"}function my(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R2()||ix()||"connection"in navigator)?navigator.onLine:!0}function N2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=tx()||sx()}get(){return P2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=new la(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,i={}){return Lw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return rx()||(h.referrerPolicy="no-referrer"),Ow.fetch()(Mw(t,t.config.apiHost,n,l),h)})}async function Lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},b2),e);try{const i=new V2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Qa(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xf(t,p,h);Xt(t,p)}}catch(i){if(i instanceof Qn)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function ua(t,e,n,r,i={}){const s=await Xn(t,e,n,r,i);return"mfaPendingCredential"in s&&Xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Mw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zf(t.config,i):`${t.config.apiScheme}://${i}`}function D2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),q2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}function gy(t){return t!==void 0&&t.enterprise!==void 0}class O2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return D2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function L2(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function jw(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function j2(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=ep(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fo(Uc(i.auth_time)),issuedAtTime:fo(Uc(i.iat)),expirationTime:fo(Uc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Uc(t){return Number(t)*1e3}function ep(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=n0(n);return i?JSON.parse(i):(fl("Failed to decode base64 JWT payload"),null)}catch(i){return fl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yy(t){const e=ep(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&U2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function U2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cs(t,jw(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Uw(s.providerUserInfo):[],l=B2(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new od(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function z2(t){const e=Pe(t);await tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Uw(t){return t.map(e=>{var{providerId:n}=e,r=Yf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $2(t,e){const n=await Lw(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Mw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ow.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function W2(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=yy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wi,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new F2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new od(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await cs(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return j2(this,e)}reload(){return z2(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await cs(this,M2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:x,emailVerified:q,isAnonymous:F,providerData:U,stsTokenManager:w}=n;J(x&&w,e,"internal-error");const v=Wi.fromJSON(this.name,w);J(typeof x=="string",e,"internal-error"),rr(g,e.name),rr(m,e.name),J(typeof q=="boolean",e,"internal-error"),J(typeof F=="boolean",e,"internal-error"),rr(A,e.name),rr(P,e.name),rr(C,e.name),rr(D,e.name),rr(k,e.name),rr(E,e.name);const _=new Vn({uid:x,auth:e,email:m,emailVerified:q,displayName:g,isAnonymous:F,photoURL:P,phoneNumber:A,tenantId:C,stsTokenManager:v,createdAt:k,lastLoginAt:E});return U&&Array.isArray(U)&&(_.providerData=U.map(I=>Object.assign({},I))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wi;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Uw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Wi;l.updateFromIdToken(r);const u=new Vn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new od(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new Map;function On(t){Kn(t instanceof Function,"Expected a class definition");let e=vy.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vy.set(t,e),e)}/**
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
 */class Fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fw.type="NONE";const _y=Fw;/**
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
 */function pl(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pl(this.userKey,i.apiKey,s),this.fullPersistenceKey=pl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(On(_y),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||On(_y);const o=pl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){const g=Vn._fromJSON(e,p);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ww(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kw(e))return"Blackberry";if(Gw(e))return"Webos";if(Bw(e))return"Safari";if((e.includes("chrome/")||$w(e))&&!e.includes("edge/"))return"Chrome";if(Hw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zw(t=ft()){return/firefox\//i.test(t)}function Bw(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $w(t=ft()){return/crios\//i.test(t)}function Ww(t=ft()){return/iemobile/i.test(t)}function Hw(t=ft()){return/android/i.test(t)}function Kw(t=ft()){return/blackberry/i.test(t)}function Gw(t=ft()){return/webos/i.test(t)}function tp(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function H2(t=ft()){var e;return tp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function K2(){return ox()&&document.documentMode===10}function Qw(t=ft()){return tp(t)||Hw(t)||Gw(t)||Kw(t)||/windows phone/i.test(t)||Ww(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e=[]){let n;switch(t){case"Browser":n=wy(ft());break;case"Worker":n=`${wy(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
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
 */class G2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Q2(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
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
 */const Y2=6;class X2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Y2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ey(this),this.idTokenSubscription=new Ey(this),this.beforeStateQueue=new G2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await jw(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(jn(this));const n=e?Pe(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Q2(this),n=new X2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await W2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&S2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lr(t){return Pe(t)}class Ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=px(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Z2(t){ju=t}function Xw(t){return ju.loadJS(t)}function eC(){return ju.recaptchaEnterpriseScript}function tC(){return ju.gapiScript}function nC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rC="recaptcha-enterprise",iC="NO_RECAPTCHA";class sC{constructor(e){this.type=rC,this.auth=Lr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{L2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new O2(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;gy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(iC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&gy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=eC();u.length!==0&&(u+=l),Xw(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Iy(t,e,n,r=!1){const i=new sC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ad(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Iy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Iy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t,e){const n=lf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zl(s,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function aC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lC(t,e,n){const r=Lr(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Jw(e),{host:o,port:l}=uC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),cC()}function Jw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uC(t){const e=Jw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ty(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ty(o)}}}function Ty(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function hC(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e){return ua(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function pC(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends np{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ad(e,n,"signInWithPassword",dC);case"emailLink":return fC(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ad(e,r,"signUpPassword",hC);case"emailLink":return pC(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t,e){return ua(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="http://localhost";class hi extends np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ki(e,n)}buildRequest(){const e={requestUri:mC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yC(t){const e=Ks(Gs(t)).link,n=e?Ks(Gs(e)).deep_link_id:null,r=Ks(Gs(t)).deep_link_id;return(r?Ks(Gs(r)).link:null)||r||n||e||t}class rp{constructor(e){var n,r,i,s,o,l;const u=Ks(Gs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=gC((i=u.mode)!==null&&i!==void 0?i:null);J(h&&p&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=yC(e);try{return new rp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.providerId=ws.PROVIDER_ID}static credential(e,n){return Fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rp.parseLink(n);return J(r,"argument-error"),Fo._fromEmailAndCode(e,r.code,r.tenantId)}}ws.PROVIDER_ID="password";ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ca extends ip{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ca{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends ca{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ca{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e){return ua(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=xy(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xy(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends Qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nu(e,n,r,i)}}function Zw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nu._fromErrorAndOperation(t,s,e,r):s})}async function _C(t,e,n=!1){const r=await cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
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
 */async function wC(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const s=await cs(t,Zw(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=ep(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(t,e,n=!1){if(an(t.app))return Promise.reject(jn(t));const r="signIn",i=await Zw(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function EC(t,e){return eE(Lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(t){const e=Lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IC(t,e,n){if(an(t.app))return Promise.reject(jn(t));const r=Lr(t),o=await ad(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&tE(t),u}),l=await di._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function TC(t,e,n){return an(t.app)?Promise.reject(jn(t)):EC(Pe(t),ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e){return Xn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await cs(r,xC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){return Pe(t).setPersistence(e)}function SC(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function CC(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function RC(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function sp(t){return Pe(t).signOut()}const ru="__sak";/**
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
 */class nE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ru,"1"),this.storage.removeItem(ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=1e3,NC=10;class rE extends nE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);K2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rE.type="LOCAL";const iE=rE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends nE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sE.type="SESSION";const oE=sE;/**
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
 */function bC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await bC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=op("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function DC(t){En().location.href=t}/**
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
 */function aE(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function VC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LC(){return aE()?self:null}/**
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
 */const lE="firebaseLocalStorageDb",MC=1,iu="firebaseLocalStorage",uE="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fu(t,e){return t.transaction([iu],e?"readwrite":"readonly").objectStore(iu)}function jC(){const t=indexedDB.deleteDatabase(lE);return new ha(t).toPromise()}function ld(){const t=indexedDB.open(lE,MC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(iu,{keyPath:uE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(iu)?e(r):(r.close(),await jC(),e(await ld()))})})}async function ky(t,e,n){const r=Fu(t,!0).put({[uE]:e,value:n});return new ha(r).toPromise()}async function UC(t,e){const n=Fu(t,!1).get(e),r=await new ha(n).toPromise();return r===void 0?null:r.value}function Ay(t,e){const n=Fu(t,!0).delete(e);return new ha(n).toPromise()}const FC=800,zC=3;class cE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ld(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uu._getInstance(LC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VC(),!this.activeServiceWorker)return;this.sender=new qC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ld();return await ky(e,ru,"1"),await Ay(e,ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ky(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ay(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fu(i,!1).getAll();return new ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cE.type="LOCAL";const BC=cE;new la(3e4,6e4);/**
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
 */function hE(t,e){return e?On(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ap extends np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $C(t){return eE(t.auth,new ap(t),t.bypassAuthState)}function WC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),wC(n,new ap(t),t.bypassAuthState)}async function HC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),_C(n,new ap(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $C;case"linkViaPopup":case"linkViaRedirect":return HC;case"reauthViaPopup":case"reauthViaRedirect":return WC;default:Xt(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new la(2e3,1e4);async function GC(t,e,n){if(an(t.app))return Promise.reject(cn(t,"operation-not-supported-in-this-environment"));const r=Lr(t);C2(t,e,ip);const i=hE(r,n);return new Jr(r,"signInViaPopup",e,i).executeNotNull()}class Jr extends dE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KC.get())};e()}}Jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="pendingRedirect",ml=new Map;class YC extends dE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ml.get(this.auth._key());if(!e){try{const r=await XC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ml.set(this.auth._key(),e)}return this.bypassAuthState||ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XC(t,e){const n=eR(e),r=ZC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function JC(t,e){ml.set(t._key(),e)}function ZC(t){return On(t._redirectPersistence)}function eR(t){return pl(QC,t.config.apiKey,t.name)}async function tR(t,e,n=!1){if(an(t.app))return Promise.reject(jn(t));const r=Lr(t),i=hE(r,e),o=await new YC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=10*60*1e3;class rR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sy(e))}saveEventToCache(e){this.cachedEventUids.add(Sy(e)),this.lastProcessedEventTime=Date.now()}}function Sy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aR=/^https?/;async function lR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sR(t);for(const n of e)try{if(uR(n))return}catch{}Xt(t,"unauthorized-domain")}function uR(t){const e=sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aR.test(n))return!1;if(oR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const cR=new la(3e4,6e4);function Cy(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hR(t){return new Promise((e,n)=>{var r,i,s;function o(){Cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cy(),n(cn(t,"network-request-failed"))},timeout:cR.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const l=nC("iframefcb");return En()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},Xw(`${tC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw gl=null,e})}let gl=null;function dR(t){return gl=gl||hR(t),gl}/**
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
 */const fR=new la(5e3,15e3),pR="__/auth/iframe",mR="emulator/auth/iframe",gR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vR(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zf(e,mR):`https://${t.config.authDomain}/${pR}`,r={apiKey:e.apiKey,appName:t.name,v:ms},i=yR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function _R(t){const e=await dR(t),n=En().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:vR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=En().setTimeout(()=>{s(o)},fR.get());function u(){En().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const wR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ER=500,IR=600,TR="_blank",xR="http://localhost";class Ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kR(t,e,n,r=ER,i=IR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},wR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ft().toLowerCase();n&&(l=$w(h)?TR:n),zw(h)&&(e=e||xR,u.scrollbars="yes");const p=Object.entries(u).reduce((m,[A,P])=>`${m}${A}=${P},`,"");if(H2(h)&&l!=="_self")return AR(e||"",l),new Ry(null);const g=window.open(e||"",l,p);J(g,t,"popup-blocked");try{g.focus()}catch{}return new Ry(g)}function AR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SR="__/auth/handler",CR="emulator/auth/handler",RR=encodeURIComponent("fac");async function Py(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:i};if(e instanceof ip){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof ca){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${RR}=${encodeURIComponent(u)}`:"";return`${PR(t)}?${Qo(l).slice(1)}${h}`}function PR({config:t}){return t.emulator?Zf(t,CR):`https://${t.authDomain}/${SR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="webStorageSupport";class NR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oE,this._completeRedirectFn=tR,this._overrideRedirectResult=JC}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Py(e,n,r,sd(),i);return kR(e,o,op())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Py(e,n,r,sd(),i);return DC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _R(e),r=new rR(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fc,{type:Fc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fc];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qw()||Bw()||tp()}}const bR=NR;var Ny="@firebase/auth",by="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VR(t){ts(new ai("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yw(t)},h=new J2(r,i,s,u);return aC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new ai("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(r=>new qR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xr(Ny,by,DR(t)),xr(Ny,by,"esm2017")}/**
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
 */const OR=5*60,LR=s0("authIdTokenMaxAge")||OR;let qy=null;const MR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LR)return;const i=n==null?void 0:n.token;qy!==i&&(qy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jR(t=u0()){const e=lf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oC(t,{popupRedirectResolver:bR,persistence:[BC,iE,oE]}),r=s0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MR(s.toString());CC(n,o,()=>o(n.currentUser)),SC(n,l=>o(l))}}const i=r0("auth");return i&&lC(n,`http://${i}`),n}function UR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Z2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VR("Browser");const FR={apiKey:"AIzaSyCiTAiDphBPNjd4dKwEYArGY8pXWf55sZQ",authDomain:"irangram-79830.firebaseapp.com",projectId:"irangram-79830",storageBucket:"irangram-79830.firebasestorage.app",messagingSenderId:"355877653612",appId:"1:355877653612:web:5512841c0ab55b6b011c49",measurementId:"G-RZWEBR7XJ7"};let zc,se=null,Pt=null;try{zc=l0(FR),se=h2(zc),Pt=jR(zc),AC(Pt,iE).catch(t=>{console.error("Firebase Persistence Error:",t)}),console.log("Firebase Connected Successfully")}catch(t){console.error("Firebase Initialization Error:",t)}var Dy={};const Kt={USE_REAL_SERVER:!1,API_BASE_URL:Dy.REACT_APP_API_URL||"http://localhost:5000/api",SOCKET_URL:Dy.REACT_APP_SOCKET_URL||"http://localhost:5000",APP_NAME:"ایران‌گرام",VERSION:"1.6.0",OWNER_EMAIL:"amirrezaveisi45@gmail.com"},zR=t=>Pt?RC(Pt,t):()=>{},BR=async(t,e,n,r)=>{if(!Pt)throw new Error("Auth not initialized");const s=(await IC(Pt,t,e)).user,o=t===Kt.OWNER_EMAIL?"owner":"user";return await kC(s,{displayName:n}),se&&await Qf(zt(se,"users",s.uid),{name:n,email:t,phone:r,username:t.split("@")[0],bio:"کاربر جدید ایران‌گرام",avatar:`https://ui-avatars.com/api/?name=${n}&background=random&color=fff&size=128`,role:o,isBanned:!1,createdAt:wn(),lastSeen:wn(),status:"online"}),s},$R=async(t,e)=>{if(!Pt)throw new Error("Auth not initialized");const n=await TC(Pt,t,e);if(se&&n.user){const r=zt(se,"users",n.user.uid),i=await oa(r);if(i.exists()&&i.data().isBanned)throw await sp(Pt),new Error("حساب کاربری شما مسدود شده است.");const s={status:"online",lastSeen:wn()};t===Kt.OWNER_EMAIL&&(s.role="owner"),Vr(r,s).catch(o=>console.log("Status update error",o))}return n.user},WR=async()=>{if(!Pt)throw new Error("Auth not initialized");const t=new Nn;try{const n=(await GC(Pt,t)).user,r=n.email||"",i=r===Kt.OWNER_EMAIL?"owner":"user";if(se){const s=zt(se,"users",n.uid),o=await oa(s);if(!o.exists())await Qf(s,{name:n.displayName||"کاربر گوگل",email:r,phone:"",username:r.split("@")[0]||"user",bio:"کاربر جدید ایران‌گرام",avatar:n.photoURL||`https://ui-avatars.com/api/?name=${n.displayName}&background=random&color=fff&size=128`,role:i,isBanned:!1,createdAt:wn(),lastSeen:wn(),status:"online"});else{if(o.data().isBanned)throw await sp(Pt),new Error("حساب کاربری شما مسدود شده است.");const l={status:"online",lastSeen:wn()};r===Kt.OWNER_EMAIL&&(l.role="owner"),await Vr(s,l).catch(u=>console.log("Status update error",u))}}return n}catch(e){throw console.error("Google Sign-In Error",e),e}},HR=async t=>{Pt&&(t&&se&&await Vr(zt(se,"users",t),{status:"offline",lastSeen:wn()}).catch(()=>{}),await sp(Pt))},KR=async t=>{if(!se)return null;try{const e=zt(se,"users",t),n=await oa(e);if(n.exists())return n.data()}catch(e){console.error("Error fetching profile",e)}return null},GR=async(t,e)=>{if(!se)return;const n=zt(se,"users",t);await Vr(n,e)},QR=async t=>{if(!se)return null;let e=Uo(ls(se,"users"),id("username","==",t.replace("@",""))),n=await Zl(e);if(!n.empty){const r=n.docs[0];return{uid:r.id,...r.data()}}if(e=Uo(ls(se,"users"),id("phone","==",t)),n=await Zl(e),!n.empty){const r=n.docs[0];return{uid:r.id,...r.data()}}return null},YR=async()=>{if(!se)return[];try{const t=Uo(ls(se,"users"),Cw("createdAt","desc"));return(await Zl(t)).docs.map(n=>({uid:n.id,...n.data()}))}catch(t){return console.error("Error fetching users",t),[]}},XR=async(t,e)=>{if(!se)return;const n=zt(se,"users",t);await Vr(n,{role:e})},JR=async(t,e)=>{if(!se)return;const n=zt(se,"users",t);await Vr(n,{isBanned:!e})},ZR=async t=>{if(se)try{await I2(zt(se,"global_chat",t))}catch(e){console.error("Error deleting global message",e)}},eP=t=>{if(!se)return()=>{};const e=Uo(ls(se,"global_chat"),Cw("createdAt","desc"),_2(50));return bw(e,r=>{const i=[];r.forEach(s=>{const o=s.data();i.push({id:s.id,text:o.text,senderId:o.senderId,senderName:o.senderName,senderAvatar:o.senderAvatar,senderRole:o.senderRole||"user",timestamp:o.createdAt?o.createdAt.toMillis():Date.now(),status:"read",type:o.type||"text",imageUrl:o.imageUrl,audioDuration:o.audioDuration,isSticker:o.isSticker,replyToId:o.replyToId,edited:o.edited,reactions:o.reactions||{}})}),t(i.reverse())})},tP=async(t,e)=>{if(!se){console.error("Database not initialized");return}try{await T2(ls(se,"global_chat"),{text:t.text||"",senderId:t.senderId,senderName:e.name,senderAvatar:e.avatar||"",senderRole:e.role||"user",type:t.type||"text",imageUrl:t.imageUrl||null,audioDuration:t.audioDuration||null,isSticker:t.isSticker||!1,replyToId:t.replyToId||null,createdAt:wn(),edited:!1,reactions:{}})}catch(n){console.error("Error adding document: ",n)}},nP=async(t,e,n)=>{if(!se)return;const r=zt(se,"global_chat",t);try{const i=await oa(r);if(i.exists()){const o=i.data().reactions||{},l=o[e]||[];let u={...o};l.includes(n)?(u[e]=l.filter(h=>h!==n),u[e].length===0&&delete u[e]):u[e]=[...l,n],await Vr(r,{reactions:u})}}catch(i){console.error("Error toggling reaction:",i)}},rP=t=>{if(!se)return()=>{};const e=zt(se,"system","info");return bw(e,n=>{if(n.exists()){const r=n.data();t({currentVersion:r.currentVersion||Kt.VERSION,lastCleanup:r.lastCleanup?r.lastCleanup.toMillis():0})}else Qf(e,{currentVersion:Kt.VERSION,lastCleanup:wn()})})},iP=async()=>{if(se)try{const t=zt(se,"system","info"),e=await oa(t);if(e.exists()){const n=e.data(),r=n.lastCleanup?n.lastCleanup.toMillis():0,i=Date.now();if(i-r>864e5){console.log("Triggering 24h cleanup..."),await Vr(t,{lastCleanup:wn()});const s=new Date(i-864e5),o=Uo(ls(se,"global_chat"),id("createdAt","<",s)),l=await Zl(o),u=k2(se);let h=0;l.forEach(p=>{u.delete(p.ref),h++}),h>0?(await u.commit(),console.log(`Cleanup: Deleted ${h} old messages.`)):console.log("Cleanup: No old messages found.")}}}catch(t){console.error("Error in auto cleanup:",t)}},sP=({contacts:t,sessions:e,activeContactId:n,onSelectContact:r,toggleTheme:i,theme:s,userProfile:o,onOpenSettings:l,onOpenAdminPanel:u,onAddContact:h,showInstallButton:p,onInstall:g})=>{var Ke;const[m,A]=B.useState(""),[P,C]=B.useState(!1),[D,k]=B.useState("all"),[E,x]=B.useState(!1),[q,F]=B.useState(""),[U,w]=B.useState(!1),[v,_]=B.useState(null),[I,S]=B.useState(""),R=B.useRef(null);B.useEffect(()=>{const V=H=>{R.current&&!R.current.contains(H.target)&&C(!1)};return document.addEventListener("mousedown",V),()=>document.removeEventListener("mousedown",V)},[]);const T=async()=>{if(!q.trim())return;w(!0),S(""),_(null);const V=await QR(q);V?V.username===o.username?S("شما نمی‌توانید خودتان را اضافه کنید."):_(V):S("کاربری با این مشخصات یافت نشد."),w(!1)},be=()=>{if(v){const V={id:v.uid,name:v.name,avatar:v.avatar,bio:v.bio,username:"@"+v.username,phone:v.phone,status:"offline",type:"user"};h(V),x(!1),_(null),F("")}},nt=t.filter(V=>{const H=V.name.toLowerCase().includes(m.toLowerCase())||V.username.toLowerCase().includes(m.toLowerCase());let Q=!0;return D==="personal"?Q=V.type==="user":D==="groups"&&(Q=V.type==="group"||V.type==="channel"),H&&Q}),Nt=V=>{const H=new Date(V);return Date.now()-V>24*60*60*1e3?H.toLocaleDateString("fa-IR"):H.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"})};return f.jsxs("div",{className:"h-full flex flex-col bg-telegram-bg dark:bg-telegram-bgDark border-l border-telegram-border dark:border-telegram-borderDark relative",children:[f.jsxs("div",{className:`absolute top-0 right-0 h-full w-72 bg-white dark:bg-telegram-secondaryDark z-30 shadow-2xl transform transition-transform duration-300 ease-in-out ${P?"translate-x-0":"translate-x-full"}`,ref:R,children:[f.jsxs("div",{className:"h-40 bg-telegram-primary p-5 flex flex-col justify-end text-white relative overflow-hidden",children:[f.jsx("div",{className:"absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"}),f.jsxs("div",{className:"flex justify-between items-start mb-2 relative z-10",children:[f.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-telegram-primary mb-3 text-2xl font-bold shadow-md uppercase",children:((Ke=o.name)==null?void 0:Ke.charAt(0))||"U"}),f.jsx("button",{onClick:i,className:"p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors",children:s===Kr.DARK?f.jsx(BT,{size:20}):f.jsx(bT,{size:20})})]}),f.jsxs("div",{className:"font-bold text-lg relative z-10 truncate flex items-center gap-2",children:[o.name,o.role==="owner"&&f.jsx("span",{className:"bg-yellow-400 text-black text-[10px] px-1.5 rounded-full",children:"Owner"}),o.role==="admin"&&f.jsx("span",{className:"bg-blue-400 text-black text-[10px] px-1.5 rounded-full",children:"Admin"})]}),f.jsx("div",{className:"text-sm opacity-80 relative z-10 font-mono dir-ltr text-right",children:o.phone||o.username})]}),f.jsxs("div",{className:"py-2 flex flex-col",children:[f.jsxs("button",{onClick:()=>{x(!0),C(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[f.jsx(yg,{size:22,className:"text-gray-500"}),f.jsx("span",{className:"font-medium",children:"افزودن مخاطب"})]}),f.jsxs("button",{onClick:()=>{r("saved"),C(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[f.jsx(dg,{size:22,className:"text-gray-500"}),f.jsx("span",{className:"font-medium",children:"پیام‌های ذخیره شده"})]}),f.jsxs("button",{onClick:()=>{l(),C(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[f.jsx(FT,{size:22,className:"text-gray-500"}),f.jsx("span",{className:"font-medium",children:"تنظیمات"})]}),p&&f.jsxs("button",{onClick:()=>{g(),C(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-colors",children:[f.jsx(sf,{size:22,className:"text-gray-500"}),f.jsx("span",{className:"font-medium",children:"نصب اپلیکیشن"})]}),(o.role==="owner"||o.role==="admin")&&f.jsxs("button",{onClick:()=>{u(),C(!1)},className:"w-full px-5 py-3 flex items-center gap-4 hover:bg-red-50 dark:hover:bg-red-900/10 text-red-600 dark:text-red-400 transition-colors border-t border-gray-100 dark:border-gray-700 mt-2",children:[f.jsx(Z_,{size:22}),f.jsx("span",{className:"font-bold",children:"پنل مدیریت"})]})]})]}),P&&f.jsx("div",{className:"absolute inset-0 bg-black/50 z-20 backdrop-blur-sm transition-opacity",onClick:()=>C(!1)}),E&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",children:f.jsxs("div",{className:"bg-white dark:bg-gray-800 w-full max-w-sm rounded-2xl shadow-2xl p-6",children:[f.jsxs("div",{className:"flex justify-between items-center mb-4",children:[f.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"افزودن مخاطب جدید"}),f.jsx("button",{onClick:()=>x(!1),children:f.jsx(ps,{size:20,className:"text-gray-500"})})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"text-sm text-gray-500 block mb-2",children:"شماره تلفن یا نام کاربری"}),f.jsx("input",{value:q,onChange:V=>F(V.target.value),placeholder:"@username یا 0912...",className:"w-full bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-telegram-primary text-gray-900 dark:text-white"})]}),I&&f.jsx("p",{className:"text-red-500 text-sm mb-4",children:I}),v&&f.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl flex items-center gap-3 mb-4 border border-green-200 dark:border-green-800",children:[f.jsx("img",{src:v.avatar,className:"w-10 h-10 rounded-full"}),f.jsxs("div",{children:[f.jsx("p",{className:"font-bold text-gray-900 dark:text-white",children:v.name}),f.jsx("p",{className:"text-xs text-gray-500",children:v.username})]}),f.jsx(oP,{className:"mr-auto text-green-500"})]}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{onClick:T,disabled:U,className:"flex-1 bg-telegram-secondary dark:bg-gray-700 text-telegram-primary font-bold py-3 rounded-xl",children:U?f.jsx(X_,{className:"animate-spin mx-auto"}):"جستجو"}),v&&f.jsx("button",{onClick:be,className:"flex-1 bg-telegram-primary text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors",children:"افزودن"})]})]})}),f.jsxs("div",{className:"px-3 py-2 flex items-center gap-2 shrink-0",children:[f.jsx("button",{onClick:()=>C(!0),className:"p-2 hover:bg-telegram-secondary dark:hover:bg-telegram-secondaryDark rounded-full text-gray-500 dark:text-gray-400",children:f.jsx(PT,{size:24})}),f.jsxs("div",{className:"relative flex-1",children:[f.jsx("input",{type:"text",placeholder:"جستجو...",value:m,onChange:V=>A(V.target.value),className:"w-full bg-telegram-secondary dark:bg-telegram-secondaryDark text-gray-900 dark:text-white rounded-full py-2 pr-9 pl-4 focus:outline-none focus:ring-1 focus:ring-telegram-primary/50 text-sm"}),f.jsx(UT,{className:"absolute right-3 top-2.5 text-gray-500 w-4 h-4"})]})]}),f.jsx("div",{className:"flex px-2 pb-1 shrink-0 border-b border-telegram-border dark:border-telegram-borderDark",children:["all","personal","groups"].map(V=>f.jsx("button",{onClick:()=>k(V),className:`flex-1 text-center py-2 border-b-2 font-medium text-sm transition-colors ${D===V?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500"}`,children:V==="all"?"همه":V==="personal"?"شخصی":"گروه‌ها"},V))}),f.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:nt.map(V=>{const H=e[V.id],Q=H==null?void 0:H.messages[H.messages.length-1],ae=n===V.id;return f.jsxs("div",{onClick:()=>r(V.id),className:`flex items-center gap-3 p-2.5 mx-2 my-1 rounded-xl cursor-pointer transition-colors ${ae?"bg-telegram-primary text-white":"hover:bg-gray-100 dark:hover:bg-white/5"}`,children:[f.jsxs("div",{className:"relative shrink-0",children:[V.id==="saved"?f.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white",children:f.jsx(dg,{size:24,fill:"currentColor"})}):f.jsx("img",{src:V.avatar,alt:V.name,className:"w-12 h-12 rounded-full object-cover bg-gray-200"}),V.id!=="saved"&&V.status==="online"&&f.jsx("div",{className:`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 ${ae?"bg-white border-telegram-primary":"bg-green-500 border-white dark:border-black"}`})]}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"flex justify-between items-baseline mb-0.5",children:[f.jsx("h3",{className:`font-semibold text-base truncate ${ae?"text-white":"text-gray-900 dark:text-gray-100"}`,children:V.name}),Q&&f.jsx("span",{className:`text-[10px] ${ae?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:Nt(Q.timestamp)})]}),f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("p",{className:`text-sm truncate ${ae?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:V.status==="typing..."?f.jsx("span",{className:"text-telegram-primary animate-pulse",children:"در حال نوشتن..."}):Q?f.jsxs("span",{className:"flex items-center gap-1",children:[Q.senderId==="me"&&f.jsx("span",{className:"opacity-80",children:"شما:"}),Q.type==="image"?"🖼️ عکس":Q.type==="audio"?"🎤 ویس":Q.text]}):f.jsx("span",{className:"italic opacity-60",children:"گفتگو را شروع کنید"})}),(H==null?void 0:H.unreadCount)>0&&f.jsx("span",{className:`min-w-[1.25rem] h-5 px-1 rounded-full text-xs font-bold flex items-center justify-center ${ae?"bg-white text-telegram-primary":"bg-telegram-primary text-white"}`,children:H.unreadCount})]})]})]},V.id)})}),f.jsx("button",{onClick:()=>{x(!0)},className:"absolute bottom-6 left-6 w-14 h-14 bg-telegram-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:f.jsx(yg,{size:24})})]})},oP=({className:t})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[f.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),f.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),aP=({imageUrl:t,onClose:e})=>f.jsxs("div",{className:"fixed inset-0 z-[60] bg-black/95 flex items-center justify-center animate-fade-in backdrop-blur-sm",onClick:e,children:[f.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 backdrop-blur-md",children:f.jsx(ps,{size:24})}),f.jsx("a",{href:t,download:!0,onClick:n=>n.stopPropagation(),className:"absolute top-4 left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 backdrop-blur-md",title:"دانلود تصویر",children:f.jsx(sf,{size:24})}),f.jsx("div",{className:"w-full h-full p-4 flex items-center justify-center",children:f.jsx("img",{src:t,alt:"Full view",className:"max-w-full max-h-full object-contain select-none shadow-2xl rounded-md",onClick:n=>n.stopPropagation()})})]}),lP=["😀","😂","🥰","😎","🤔","😭","👍","👎","❤️","🔥","👀","✅","💯","🌹"],uP=["👍","❤️","😂","😮","😢","🔥"],cP=["https://cdn-icons-png.flaticon.com/512/742/742751.png","https://cdn-icons-png.flaticon.com/512/742/742752.png","https://cdn-icons-png.flaticon.com/512/742/742822.png","https://cdn-icons-png.flaticon.com/512/742/742760.png","https://cdn-icons-png.flaticon.com/512/742/742920.png","https://cdn-icons-png.flaticon.com/512/742/742786.png","https://cdn-icons-png.flaticon.com/512/166/166538.png","https://cdn-icons-png.flaticon.com/512/190/190623.png","https://cdn-icons-png.flaticon.com/512/417/417779.png"],hP=t=>{const e=["#df3f4c","#4a9e56","#e08e0b","#8c52ff","#ff5ca8","#31b5d6","#3390ec"];let n=0;for(let r=0;r<t.length;r++)n=t.charCodeAt(r)+((n<<5)-n);return e[Math.abs(n)%e.length]},dP=({contact:t,messages:e,myId:n,myRole:r,onSendMessage:i,onEditMessage:s,onDeleteMessage:o,onReaction:l,onBack:u,isMobile:h,onProfileClick:p,wallpaper:g,onCall:m})=>{const[A,P]=B.useState(""),[C,D]=B.useState(null),[k,E]=B.useState(null),[x,q]=B.useState(null),[F,U]=B.useState(!1),[w,v]=B.useState("emoji"),[_,I]=B.useState(!1),[S,R]=B.useState(!1),[T,be]=B.useState(0),[nt,Nt]=B.useState(null),[Ke,V]=B.useState(null),[H,Q]=B.useState(!1),[ae,ue]=B.useState(!1),ye=B.useRef(null),bt=B.useRef(null),qt=B.useRef(null),Tt=B.useRef(null),pt=B.useRef(null),yi=t.type==="group";B.useEffect(()=>{var O;(O=ye.current)==null||O.scrollIntoView({behavior:"auto"})},[e.length,C]),B.useEffect(()=>{const O=()=>{q(null),U(!1),I(!1)};return window.addEventListener("click",O),()=>window.removeEventListener("click",O)},[]);const Mr=()=>{A.trim()&&(k?(s(k.id,A),E(null)):(i({text:A,type:"text"},C==null?void 0:C.id),D(null)),P(""))},xn=O=>{i({imageUrl:O,type:"image",isSticker:!0},C==null?void 0:C.id),D(null),U(!1)},$=()=>{R(!0),be(0),pt.current=window.setInterval(()=>be(O=>O+1),1e3)},X=O=>{if(pt.current&&clearInterval(pt.current),R(!1),O&&T>0){const pe=Math.floor(T/60),Ae=T%60;i({type:"audio",audioDuration:`${pe}:${Ae.toString().padStart(2,"0")}`},C==null?void 0:C.id),D(null)}be(0)},ke=O=>{if(O){const pe=new FileReader;pe.onload=Ae=>{var Zt;(Zt=Ae.target)!=null&&Zt.result&&(i({imageUrl:Ae.target.result,type:"image"},C==null?void 0:C.id),D(null))},pe.readAsDataURL(O)}},he=O=>{O.preventDefault(),O.stopPropagation(),Q(!1);const pe=O.dataTransfer.files;pe&&pe.length>0&&ke(pe[0])},kn=O=>new Date(O).toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"}),Jt=()=>g==="default"?{}:g.startsWith("http")||g.startsWith("data")?{backgroundImage:`url(${g})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:g};return f.jsxs("div",{className:"h-full flex flex-col relative bg-telegram-bg dark:bg-telegram-bgDark overflow-hidden",onDragOver:O=>{O.preventDefault(),Q(!0)},onDragLeave:O=>{O.preventDefault(),O.currentTarget.contains(O.relatedTarget)||Q(!1)},onDrop:he,children:[H&&f.jsxs("div",{className:"absolute inset-0 z-50 bg-telegram-primary/80 backdrop-blur-sm flex flex-col items-center justify-center text-white animate-fade-in",children:[f.jsx(pg,{size:64,className:"mb-4 animate-bounce"}),f.jsx("h2",{className:"text-2xl font-bold",children:"رها کنید تا ارسال شود"})]}),Ke&&f.jsx(aP,{imageUrl:Ke,onClose:()=>V(null)}),f.jsx("input",{type:"file",ref:Tt,className:"hidden",accept:"image/*",onChange:O=>{var pe;return ke((pe=O.target.files)==null?void 0:pe[0])}}),f.jsx("div",{className:"absolute inset-0 z-0",style:Jt(),children:g==="default"&&f.jsx("div",{className:"absolute inset-0 chat-bg-pattern opacity-100"})}),f.jsxs("div",{className:"relative z-10 flex items-center justify-between px-2 py-2 bg-white/95 dark:bg-telegram-bgDark/95 backdrop-blur-md border-b border-telegram-border dark:border-telegram-borderDark shadow-sm shrink-0 h-16",onClick:p,children:[f.jsxs("div",{className:"flex items-center gap-2 overflow-hidden cursor-pointer",children:[h&&f.jsx("button",{onClick:O=>{O.stopPropagation(),u()},className:"p-2 -mr-2 text-gray-500 dark:text-gray-300",children:f.jsx(K_,{size:22})}),f.jsx("img",{src:t.avatar||"",alt:"",className:"w-10 h-10 rounded-full bg-gray-200 object-cover shrink-0"}),f.jsxs("div",{className:"flex flex-col overflow-hidden",children:[f.jsx("h2",{className:"font-bold text-gray-900 dark:text-white truncate text-base",children:t.name}),f.jsx("span",{className:"text-xs text-telegram-primary truncate",children:t.status==="online"?"آنلاین":"آخرین بازدید به تازگی"})]})]}),f.jsxs("div",{className:"flex items-center text-gray-500 gap-1",children:[f.jsx("button",{onClick:O=>{O.stopPropagation(),m()},className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-telegram-primary",children:f.jsx(Ko,{size:20})}),f.jsx("button",{className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full",children:f.jsx(qT,{size:20})})]})]}),f.jsxs("div",{ref:bt,className:"relative z-10 flex-1 overflow-y-auto p-2 sm:p-4 flex flex-col gap-1.5 scroll-smooth",onScroll:O=>ue(O.currentTarget.scrollHeight-O.currentTarget.scrollTop-O.currentTarget.clientHeight>200),children:[e.map((O,pe)=>{const Ae=O.senderId==="me",Zt=!e[pe+1]||e[pe+1].senderId!==O.senderId,jr=yi&&!Ae&&(!e[pe-1]||e[pe-1].senderId!==O.senderId),An=O.senderRole==="owner",Jn=O.senderRole==="admin";let Bt="px-3 py-2 rounded-2xl shadow-sm text-base break-words border min-w-[4rem] relative transition-all ";return An?Bt+="bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-yellow-900/40 dark:to-amber-800/40 text-gray-900 dark:text-white border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.3)] ring-1 ring-amber-300 dark:ring-amber-700 ":Jn?Bt+="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/30 text-gray-900 dark:text-white border-blue-400 dark:border-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.2)] ring-1 ring-blue-300 dark:ring-blue-700 ":Ae?Bt+="bg-telegram-chatOut dark:bg-telegram-chatOutDark text-black dark:text-white border-transparent ":Bt+="bg-white dark:bg-telegram-chatInDark text-black dark:text-white border-transparent ",Ae?Bt+="rounded-br-none ":Bt+="rounded-bl-none ",f.jsxs("div",{className:`flex ${Ae?"flex-row-reverse":"flex-row"} items-end gap-2 max-w-[90%] md:max-w-[75%] ${Ae?"self-end":"self-start"} group animate-slide-in`,children:[yi&&!Ae&&f.jsx("div",{className:"w-8 h-8 shrink-0 mb-1",children:Zt&&f.jsx("img",{src:O.senderAvatar||"https://via.placeholder.com/32",className:"w-8 h-8 rounded-full shadow-md"})}),f.jsxs("div",{className:"flex flex-col relative",onContextMenu:en=>{en.preventDefault(),en.stopPropagation(),q({x:en.clientX,y:en.clientY,messageId:O.id,isMe:Ae})},children:[O.isSticker?f.jsx("img",{src:O.imageUrl,className:"w-32 h-32 object-contain cursor-pointer drop-shadow-md",onClick:()=>V(O.imageUrl)}):f.jsxs("div",{className:Bt,children:[jr&&f.jsxs("div",{className:"text-xs font-bold mb-1 flex items-center gap-1",style:{color:hP(O.senderId)},children:[O.senderName,O.senderRole==="owner"&&f.jsxs("span",{className:"flex items-center gap-0.5 text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/50 px-1 rounded-full text-[9px] border border-amber-200",children:[f.jsx(fg,{size:10,fill:"currentColor"})," مدیریت کل"]}),O.senderRole==="admin"&&f.jsxs("span",{className:"flex items-center gap-0.5 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-1 rounded-full text-[9px] border border-blue-200",children:[f.jsx(gg,{size:10,fill:"currentColor"})," ادمین"]})]}),Ae&&(An||Jn)&&f.jsxs("div",{className:"text-[10px] font-bold mb-1 flex items-center gap-1 opacity-80 border-b border-black/10 dark:border-white/10 pb-1",children:[An&&f.jsxs("span",{className:"flex items-center gap-0.5 text-amber-700 dark:text-amber-300",children:[f.jsx(fg,{size:10,fill:"currentColor"})," مدیریت کل (شما)"]}),Jn&&f.jsxs("span",{className:"flex items-center gap-0.5 text-blue-700 dark:text-blue-300",children:[f.jsx(gg,{size:10,fill:"currentColor"})," ادمین (شما)"]})]}),O.replyToId&&f.jsx("div",{className:"mb-1 pl-2 border-r-2 border-telegram-primary text-xs opacity-70 truncate bg-black/5 dark:bg-white/5 rounded p-1",children:"پیام پاسخ داده شده"}),O.type==="image"&&f.jsx("img",{src:O.imageUrl,className:"rounded-lg mb-1 max-w-full max-h-80 object-cover",onClick:()=>V(O.imageUrl)}),O.type==="audio"&&f.jsxs("div",{className:"flex items-center gap-2 p-1",children:[f.jsx("button",{onClick:()=>Nt(nt===O.id?null:O.id),className:`p-2 rounded-full ${Ae?"bg-white text-green-600":"bg-telegram-primary text-white"}`,children:nt===O.id?f.jsx(DT,{size:16}):f.jsx(LT,{size:16})}),f.jsxs("div",{className:"flex flex-col w-32",children:[f.jsx("div",{className:"h-1 bg-gray-300 rounded-full overflow-hidden",children:f.jsx("div",{className:`h-full bg-telegram-primary ${nt===O.id?"w-full animate-pulse":"w-0"}`})}),f.jsx("span",{className:"text-[10px] mt-1",children:O.audioDuration})]})]}),O.type==="text"&&f.jsx("div",{dir:"auto",className:`whitespace-pre-wrap leading-snug ${An?"font-medium":""}`,children:O.text}),f.jsxs("div",{className:"flex items-center justify-end gap-1 mt-1 opacity-60 text-[10px] select-none",children:[f.jsx("span",{children:kn(O.timestamp)}),Ae&&(O.status==="read"?f.jsx(IT,{size:12,className:"text-blue-500"}):f.jsx(Oh,{size:12}))]})]}),O.reactions&&Object.keys(O.reactions).length>0&&f.jsx("div",{className:"flex flex-wrap gap-1 mt-1 px-1",children:Object.entries(O.reactions).map(([en,Be])=>f.jsxs("button",{onClick:()=>l(O.id,en),className:"bg-white dark:bg-gray-800 rounded-full px-1.5 py-0.5 text-xs shadow-sm border border-gray-100 dark:border-gray-700",children:[en," ",f.jsx("span",{className:"font-bold",children:Be.length})]},en))})]})]},O.id)}),f.jsx("div",{ref:ye})]}),ae&&f.jsx("button",{onClick:()=>{var O;return(O=ye.current)==null?void 0:O.scrollIntoView({behavior:"smooth"})},className:"absolute bottom-20 right-4 z-20 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg border text-gray-500",children:f.jsx(xT,{size:24})}),f.jsxs("div",{className:"relative z-10 bg-white dark:bg-telegram-bgDark p-2 border-t border-gray-200 dark:border-white/10 shrink-0",children:[C&&f.jsxs("div",{className:"flex items-center justify-between bg-gray-50 dark:bg-white/5 p-2 rounded-t-lg mb-1 text-sm border-l-4 border-telegram-primary",children:[f.jsxs("div",{className:"flex flex-col ml-2",children:[f.jsx("span",{className:"text-telegram-primary font-bold",children:"پاسخ به پیام"}),f.jsx("span",{className:"truncate opacity-70 max-w-[200px]",children:C.text||"رسانه"})]}),f.jsx("button",{onClick:()=>D(null),children:f.jsx(ps,{size:16})})]}),f.jsx("div",{className:"flex items-end gap-2 max-w-5xl mx-auto",children:S?f.jsxs("div",{className:"flex-1 bg-telegram-secondary dark:bg-telegram-secondaryDark rounded-full p-3 flex items-center justify-between animate-pulse",children:[f.jsxs("div",{className:"flex items-center gap-2 text-red-500",children:[f.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full animate-ping"})," ",Math.floor(T/60),":",T%60]}),f.jsx("span",{onClick:()=>X(!1),className:"cursor-pointer text-gray-500",children:"لغو"}),f.jsx(mg,{size:24,className:"text-telegram-primary cursor-pointer rotate-180",onClick:()=>X(!0)})]}):f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:()=>I(!_),className:"p-3 text-gray-500 hover:text-telegram-primary",children:f.jsx(pg,{size:24,className:"rotate-45"})}),_&&f.jsxs("div",{className:"absolute bottom-20 right-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-2 flex flex-col gap-2 z-50",children:[f.jsxs("button",{onClick:()=>{var O;return(O=Tt.current)==null?void 0:O.click()},className:"flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg",children:[f.jsx(Y_,{size:18})," عکس"]}),f.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg",children:[f.jsx(Q_,{size:18})," فایل"]})]}),f.jsxs("div",{className:"flex-1 bg-gray-100 dark:bg-black/20 rounded-2xl flex items-center relative",children:[f.jsx("textarea",{ref:qt,value:A,onChange:O=>P(O.target.value),onKeyDown:O=>{O.key==="Enter"&&!O.shiftKey&&(O.preventDefault(),Mr())},placeholder:"پیام...",className:"w-full bg-transparent p-3 max-h-32 resize-none outline-none text-gray-900 dark:text-white",rows:1}),f.jsx("button",{onClick:()=>U(!F),className:"p-2 text-gray-400 hover:text-telegram-primary",children:f.jsx(zT,{size:24})})]}),A.trim()?f.jsx("button",{onClick:Mr,className:"p-3 bg-telegram-primary rounded-full text-white shadow-lg hover:scale-105 transition-transform",children:f.jsx(mg,{size:20,className:"rotate-180"})}):f.jsx("button",{onClick:$,className:"p-3 bg-gray-200 dark:bg-white/10 rounded-full text-gray-500",children:f.jsx(J_,{size:24})}),F&&f.jsxs("div",{className:"absolute bottom-20 left-4 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border w-72 h-64 overflow-y-auto p-2 grid grid-cols-6 gap-2 z-50",onClick:O=>O.stopPropagation(),children:[f.jsxs("div",{className:"col-span-6 flex border-b mb-2 pb-1",children:[f.jsx("button",{onClick:()=>v("emoji"),className:`flex-1 ${w==="emoji"?"text-telegram-primary font-bold":""}`,children:"ایموجی"}),f.jsx("button",{onClick:()=>v("sticker"),className:`flex-1 ${w==="sticker"?"text-telegram-primary font-bold":""}`,children:"استیکر"})]}),w==="emoji"?lP.map(O=>f.jsx("button",{onClick:()=>P(pe=>pe+O),className:"text-2xl hover:bg-gray-100 rounded",children:O},O)):cP.map((O,pe)=>f.jsx("img",{src:O,onClick:()=>xn(O),className:"w-full h-auto hover:scale-110 transition-transform cursor-pointer"},pe))]})]})})]}),x&&f.jsxs("div",{className:"fixed z-[60] bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 min-w-[150px] animate-fade-in border dark:border-gray-700",style:{top:x.y,left:x.x},children:[f.jsx("div",{className:"flex gap-1 mb-2 bg-gray-50 dark:bg-black/20 p-1 rounded justify-center",children:uP.map(O=>f.jsx("button",{onClick:()=>{l(x.messageId,O),q(null)},className:"hover:scale-125 transition-transform",children:O},O))}),f.jsxs("button",{onClick:()=>{D(e.find(O=>O.id===x.messageId)),q(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[f.jsx(jT,{size:16})," پاسخ"]}),f.jsxs("button",{onClick:()=>{var O;navigator.clipboard.writeText(((O=e.find(pe=>pe.id===x.messageId))==null?void 0:O.text)||""),q(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[f.jsx(kT,{size:16})," کپی"]}),(x.isMe||r==="owner"||r==="admin")&&f.jsxs("button",{onClick:()=>{o(x.messageId),q(null)},className:"w-full text-right p-2 hover:bg-red-50 text-red-500 rounded flex gap-2",children:[f.jsx($T,{size:16})," ",x.isMe?"حذف":"حذف (مدیر)"]}),x.isMe&&f.jsxs("button",{onClick:()=>{E(e.find(O=>O.id===x.messageId)),P(e.find(O=>O.id===x.messageId).text),q(null)},className:"w-full text-right p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded flex gap-2",children:[f.jsx(VT,{size:16})," ویرایش"]})]})]})},fP=({contact:t,onClose:e})=>f.jsxs("div",{className:"h-full flex flex-col bg-white dark:bg-telegram-secondaryDark border-l border-telegram-border dark:border-telegram-borderDark overflow-y-auto animate-slide-in",children:[f.jsxs("div",{className:"flex items-center gap-4 p-4 sticky top-0 bg-white/80 dark:bg-telegram-secondaryDark/80 backdrop-blur-md z-10",children:[f.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-800 dark:hover:text-gray-200",children:f.jsx(ps,{size:24})}),f.jsx("span",{className:"font-semibold text-lg",children:"اطلاعات پروفایل"})]}),f.jsxs("div",{className:"px-6 py-4 flex flex-col items-center border-b-8 border-gray-100 dark:border-black/20",children:[f.jsx("img",{src:t.avatar,alt:t.name,className:"w-28 h-28 rounded-full object-cover mb-4 shadow-lg"}),f.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-1",children:t.name}),f.jsx("p",{className:"text-gray-500 text-sm",children:t.status==="online"?f.jsx("span",{className:"text-telegram-primary",children:"آنلاین"}):`آخرین بازدید ${t.lastSeen||"به تازگی"}`})]}),f.jsxs("div",{className:"p-4 space-y-5 border-b-8 border-gray-100 dark:border-black/20",children:[f.jsxs("div",{className:"flex items-start gap-4",children:[f.jsx("div",{className:"mt-1 text-gray-500",children:f.jsx(Ko,{size:22})}),f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:t.phone}),f.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:"موبایل"})]})]}),f.jsxs("div",{className:"flex items-start gap-4",children:[f.jsx("div",{className:"mt-1 text-gray-500",children:f.jsx(G_,{size:22})}),f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:t.username}),f.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:"نام کاربری"})]})]}),f.jsxs("div",{className:"flex items-start gap-4",children:[f.jsx("div",{className:"mt-1 text-gray-500",children:f.jsx(wT,{size:22})}),f.jsxs("div",{className:"flex-1 flex justify-between items-center",children:[f.jsx("p",{className:"text-gray-900 dark:text-white text-base",children:"اعلانات"}),f.jsx("div",{className:"w-10 h-5 bg-telegram-primary rounded-full relative cursor-pointer",children:f.jsx("div",{className:"absolute left-1 top-1 w-3 h-3 bg-white rounded-full"})})]})]}),f.jsxs("div",{className:"flex items-start gap-4",children:[f.jsx("div",{className:"mt-1 text-gray-500",children:f.jsx(Q_,{size:22})}),f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-900 dark:text-white text-base leading-snug",children:t.bio}),f.jsx("p",{className:"text-gray-500 text-xs mt-1",children:"بیوگرافی"})]})]})]}),f.jsxs("div",{className:"p-2",children:[f.jsxs("div",{className:"flex border-b border-gray-200 dark:border-gray-700 mb-2",children:[f.jsx("button",{className:"flex-1 py-2 text-telegram-primary border-b-2 border-telegram-primary font-medium text-sm",children:"رسانه"}),f.jsx("button",{className:"flex-1 py-2 text-gray-500 font-medium text-sm hover:text-gray-700 dark:hover:text-gray-300",children:"فایل‌ها"}),f.jsx("button",{className:"flex-1 py-2 text-gray-500 font-medium text-sm hover:text-gray-700 dark:hover:text-gray-300",children:"لینک‌ها"})]}),f.jsx("div",{className:"grid grid-cols-3 gap-1",children:[1,2,3,4,5,6].map(n=>f.jsx("div",{className:"aspect-square bg-gray-200 dark:bg-gray-800 cursor-pointer hover:opacity-80 transition-opacity",children:f.jsx("img",{src:`https://picsum.photos/200/200?random=${n+10}`,className:"w-full h-full object-cover",alt:"media"})},n))})]})]}),pP=[{id:"default",name:"پیش‌فرض",value:"default",color:"#8db5d0"},{id:"blue",name:"آبی آسمانی",value:"#dbeafe",color:"#dbeafe"},{id:"green",name:"سبز نعنایی",value:"#dcfce7",color:"#dcfce7"},{id:"dark",name:"تاریک",value:"#18181b",color:"#18181b"},{id:"pink",name:"صورتی",value:"#fce7f3",color:"#fce7f3"},{id:"pattern1",name:"طرح ۱",value:"https://img.freepik.com/free-vector/hand-drawn-contact-sheet-template_23-2150937449.jpg",color:"#e5e7eb"},{id:"pattern2",name:"طرح ۲",value:"https://img.freepik.com/free-vector/seamless-pattern-with-cute-cats_23-2147665476.jpg",color:"#e5e7eb"}],mP=({isOpen:t,onClose:e,userProfile:n,onSave:r,wallpaper:i,onSaveWallpaper:s})=>{const[o,l]=B.useState(n),[u,h]=B.useState("profile"),[p,g]=B.useState(i),[m,A]=B.useState("");if(B.useEffect(()=>{l(n),g(i)},[n,i,t]),!t)return null;const P=()=>{r(o),s(p),e()};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",children:f.jsxs("div",{className:"bg-white dark:bg-telegram-secondaryDark w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[f.jsxs("div",{className:"flex flex-col border-b border-gray-100 dark:border-white/10",children:[f.jsxs("div",{className:"flex items-center justify-between p-4",children:[f.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"تنظیمات"}),f.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors",children:f.jsx(ps,{size:24,className:"text-gray-500 dark:text-gray-300"})})]}),f.jsxs("div",{className:"flex px-4",children:[f.jsx("button",{onClick:()=>h("profile"),className:`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${u==="profile"?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"}`,children:f.jsxs("div",{className:"flex items-center justify-center gap-2",children:[f.jsx(Lh,{size:18}),"پروفایل"]})}),f.jsx("button",{onClick:()=>h("chat"),className:`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${u==="chat"?"border-telegram-primary text-telegram-primary":"border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"}`,children:f.jsxs("div",{className:"flex items-center justify-center gap-2",children:[f.jsx(Y_,{size:18}),"پس‌زمینه چت"]})})]})]}),f.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:u==="profile"?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"relative bg-telegram-secondary dark:bg-black/20 p-6 flex flex-col items-center justify-center gap-4",children:[f.jsxs("div",{className:"relative group cursor-pointer",children:[f.jsx("div",{className:"w-24 h-24 rounded-full bg-telegram-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg",children:o.name.charAt(0)}),f.jsx("div",{className:"absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:f.jsx(ET,{size:24,className:"text-white"})})]}),f.jsx("div",{className:"text-center",children:f.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"عکس پروفایل خود را تغییر دهید"})})]}),f.jsxs("div",{className:"p-6 space-y-6",children:[f.jsxs("div",{className:"relative group",children:[f.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:f.jsx(Lh,{size:20})}),f.jsx("input",{type:"text",value:o.name,onChange:C=>l({...o,name:C.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white",placeholder:"نام نمایشی"}),f.jsx("label",{className:"text-xs text-telegram-primary mt-1 block",children:"نام (اجباری)"})]}),f.jsxs("div",{className:"relative group",children:[f.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:f.jsx(AT,{size:20})}),f.jsx("input",{type:"text",value:o.bio,onChange:C=>l({...o,bio:C.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white",placeholder:"بیوگرافی"}),f.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"کمی درباره خودتان بنویسید"})]}),f.jsxs("div",{className:"relative group",children:[f.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:f.jsx(G_,{size:20})}),f.jsx("input",{type:"text",value:o.username,onChange:C=>l({...o,username:C.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white dir-ltr text-right",placeholder:"نام کاربری"}),f.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"نام کاربری عمومی"})]}),f.jsxs("div",{className:"relative group",children:[f.jsx("div",{className:"absolute top-3 right-0 text-gray-400",children:f.jsx(Ko,{size:20})}),f.jsx("input",{type:"tel",value:o.phone,onChange:C=>l({...o,phone:C.target.value}),className:"w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 pr-8 focus:outline-none focus:border-telegram-primary transition-colors text-gray-900 dark:text-white dir-ltr text-right",placeholder:"شماره موبایل"}),f.jsx("label",{className:"text-xs text-gray-500 mt-1 block",children:"شماره موبایل"})]})]})]}):f.jsxs("div",{className:"p-6 space-y-6",children:[f.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"یک تصویر پس‌زمینه برای گفتگوهای خود انتخاب کنید."}),f.jsx("div",{className:"grid grid-cols-3 gap-3",children:pP.map(C=>f.jsxs("div",{onClick:()=>g(C.value),className:`
                                    relative aspect-[3/4] rounded-lg cursor-pointer overflow-hidden border-2 transition-all shadow-sm
                                    ${p===C.value?"border-telegram-primary scale-105":"border-transparent hover:scale-105"}
                                `,children:[f.jsx("div",{className:"w-full h-full",style:{backgroundColor:C.color,backgroundImage:C.value.startsWith("http")?`url(${C.value})`:void 0,backgroundSize:"cover",backgroundPosition:"center"},children:C.value==="default"&&f.jsx("div",{className:"w-full h-full opacity-30",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}})}),f.jsx("div",{className:"absolute bottom-0 w-full bg-black/40 text-white text-[10px] text-center py-1",children:C.name}),p===C.value&&f.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20",children:f.jsx(Oh,{className:"text-white drop-shadow-md",size:32})})]},C.id))}),f.jsxs("div",{className:"pt-4 border-t border-gray-100 dark:border-white/10",children:[f.jsx("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block",children:"لینک تصویر دلخواه"}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"text",value:m,onChange:C=>A(C.target.value),placeholder:"https://example.com/image.jpg",className:"flex-1 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-telegram-primary"}),f.jsx("button",{onClick:()=>{m&&g(m)},className:"bg-telegram-secondary dark:bg-white/10 text-telegram-primary rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/20",children:"اعمال"})]})]})]})}),f.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-black/20 flex justify-end gap-3",children:[f.jsx("button",{onClick:e,className:"px-4 py-2 text-telegram-primary hover:bg-telegram-primary/10 rounded-lg transition-colors font-medium",children:"انصراف"}),f.jsxs("button",{onClick:P,className:"px-6 py-2 bg-telegram-primary hover:bg-telegram-primaryDark text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2",children:[f.jsx(Oh,{size:18}),"ذخیره تغییرات"]})]})]})})},gP=({onClose:t,currentUserEmail:e,currentUserRole:n})=>{const[r,i]=B.useState([]),[s,o]=B.useState(!0);B.useEffect(()=>{l()},[]);const l=async()=>{o(!0);const p=await YR();i(p),o(!1)},u=async(p,g,m)=>{if(n!=="owner"){alert("فقط مدیر کل می‌تواند نقش‌ها را تغییر دهد.");return}const A=r.find(P=>P.uid===p);if((A==null?void 0:A.email)===Kt.OWNER_EMAIL){alert("نمی‌توانید نقش مدیر کل اصلی را تغییر دهید.");return}await XR(p,m),i(r.map(P=>P.uid===p?{...P,role:m}:P))},h=async(p,g)=>{const m=r.find(A=>A.uid===p);if((m==null?void 0:m.role)==="owner"){alert("نمی‌توانید مدیر کل را مسدود کنید.");return}if((m==null?void 0:m.role)==="admin"&&n!=="owner"){alert("ادمین نمی‌تواند ادمین دیگر را مسدود کند.");return}await JR(p,g||!1),i(r.map(A=>A.uid===p?{...A,isBanned:!g}:A))};return f.jsx("div",{className:"fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in",children:f.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-4xl h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden",children:[f.jsxs("div",{className:"p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center border-b border-gray-200 dark:border-gray-700",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Z_,{className:"text-red-600",size:24}),f.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"پنل مدیریت"})]}),f.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full",children:f.jsx(ps,{size:24})})]}),f.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:s?f.jsx("div",{className:"text-center py-10 text-gray-500",children:"در حال دریافت لیست کاربران..."}):f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full text-right",children:[f.jsx("thead",{className:"text-xs text-gray-500 bg-gray-50 dark:bg-gray-800 uppercase",children:f.jsxs("tr",{children:[f.jsx("th",{className:"px-6 py-3",children:"کاربر"}),f.jsx("th",{className:"px-6 py-3",children:"ایمیل / موبایل"}),f.jsx("th",{className:"px-6 py-3",children:"نقش"}),f.jsx("th",{className:"px-6 py-3",children:"وضعیت"}),f.jsx("th",{className:"px-6 py-3",children:"عملیات"})]})}),f.jsx("tbody",{children:r.map(p=>f.jsxs("tr",{className:"bg-white dark:bg-gray-900 border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:[f.jsxs("td",{className:"px-6 py-4 flex items-center gap-3",children:[f.jsx("img",{src:p.avatar,className:"w-8 h-8 rounded-full"}),f.jsx("span",{className:"font-medium text-gray-900 dark:text-white",children:p.name}),p.email===Kt.OWNER_EMAIL&&f.jsx("span",{className:"text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full",children:"Owner"})]}),f.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{children:p.email}),f.jsx("span",{className:"text-xs",children:p.phone})]})}),f.jsx("td",{className:"px-6 py-4",children:n==="owner"&&p.email!==Kt.OWNER_EMAIL?f.jsxs("select",{value:p.role,onChange:g=>u(p.uid,p.role,g.target.value),className:"bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",children:[f.jsx("option",{value:"user",children:"کاربر"}),f.jsx("option",{value:"admin",children:"ادمین"}),f.jsx("option",{value:"owner",children:"مدیر کل"})]}):f.jsx("span",{className:`px-2 py-1 rounded text-xs font-bold ${p.role==="owner"?"bg-yellow-100 text-yellow-800":p.role==="admin"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:p.role==="owner"?"مدیر کل":p.role==="admin"?"ادمین":"کاربر"})}),f.jsx("td",{className:"px-6 py-4",children:p.isBanned?f.jsxs("span",{className:"text-red-600 font-bold flex items-center gap-1",children:[f.jsx(_T,{size:14})," مسدود"]}):f.jsxs("span",{className:"text-green-600 font-bold flex items-center gap-1",children:[f.jsx(TT,{size:14})," فعال"]})}),f.jsx("td",{className:"px-6 py-4",children:p.email!==Kt.OWNER_EMAIL&&(n==="owner"||n==="admin"&&p.role==="user")&&f.jsx("button",{onClick:()=>h(p.uid,p.isBanned||!1),className:`font-medium rounded-lg text-sm px-3 py-1.5 text-center ${p.isBanned?"bg-green-600 hover:bg-green-700 text-white":"bg-red-600 hover:bg-red-700 text-white"}`,children:p.isBanned?"رفع مسدودی":"مسدود کردن"})})]},p.uid))})]})})})]})})},yP=({onSuccess:t})=>{const[e,n]=B.useState(!0),[r,i]=B.useState(!1),[s,o]=B.useState(""),[l,u]=B.useState({name:"",email:"",phone:"",password:""}),h=async g=>{g.preventDefault(),o(""),i(!0);try{if(e){if(!l.email||!l.password)throw new Error("لطفا ایمیل و رمز عبور را وارد کنید");await $R(l.email,l.password)}else{if(!l.name||!l.email||!l.password||!l.phone)throw new Error("لطفا تمام فیلدها را پر کنید");if(l.password.length<6)throw new Error("رمز عبور باید حداقل ۶ کاراکتر باشد");await BR(l.email,l.password,l.name,l.phone)}}catch(m){console.error(m),m.code==="auth/invalid-email"?o("فرمت ایمیل نامعتبر است"):m.code==="auth/user-not-found"||m.code==="auth/wrong-password"||m.code==="auth/invalid-credential"?o("ایمیل یا رمز عبور اشتباه است"):m.code==="auth/email-already-in-use"?o("این ایمیل قبلا ثبت شده است"):o(m.message||"خطایی رخ داد. لطفا دوباره تلاش کنید.")}finally{i(!1)}},p=async()=>{o(""),i(!0);try{await WR()}catch(g){if(console.error("Google Login Error:",g),g.code==="auth/unauthorized-domain"){const m=window.location.hostname;o(`دامنه "${m}" غیرمجاز است. لطفاً آن را در بخش Authentication > Settings > Authorized domains کنسول فایربیس اضافه کنید.`)}else g.code==="auth/popup-closed-by-user"?o("پنجره ورود توسط شما بسته شد."):o(g.message||"خطا در ورود با گوگل")}finally{i(!1)}};return f.jsxs("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark p-4 relative overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 opacity-10 chat-bg-pattern pointer-events-none"}),f.jsxs("div",{className:"w-full max-w-md bg-white dark:bg-telegram-secondaryDark rounded-3xl shadow-2xl p-8 relative z-10 animate-fade-in",children:[f.jsxs("div",{className:"text-center mb-8",children:[f.jsx("div",{className:"w-20 h-20 bg-telegram-primary rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg shadow-telegram-primary/30",children:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-10 h-10 text-white",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"}),f.jsx("path",{d:"M2 12L22 12",strokeLinecap:"round"})]})}),f.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:e?"ورود به ایران‌گرام":"ساخت حساب کاربری"}),f.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm",children:e?"به گفتگوهای خود بازگردید":"به جمع هزاران کاربر ایرانی بپیوندید"})]}),s&&f.jsxs("div",{className:"mb-6 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg flex items-start gap-2 text-right dir-rtl",dir:"rtl",children:[f.jsx(vT,{size:16,className:"mt-0.5 shrink-0"}),f.jsx("span",{children:s})]}),f.jsxs("form",{onSubmit:h,className:"space-y-4",children:[!e&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"relative",children:[f.jsx(Lh,{className:"absolute right-3 top-3 text-gray-400",size:20}),f.jsx("input",{type:"text",name:"name",autoComplete:"name",placeholder:"نام و نام خانوادگی",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white",value:l.name,onChange:g=>u({...l,name:g.target.value})})]}),f.jsxs("div",{className:"relative",children:[f.jsx(Ko,{className:"absolute right-3 top-3 text-gray-400",size:20}),f.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",placeholder:"شماره موبایل",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-rtl",value:l.phone,onChange:g=>u({...l,phone:g.target.value})})]})]}),f.jsxs("div",{className:"relative",children:[f.jsx(RT,{className:"absolute right-3 top-3 text-gray-400",size:20}),f.jsx("input",{type:"email",name:"email",autoComplete:"username",placeholder:"ایمیل",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right",value:l.email,onChange:g=>u({...l,email:g.target.value})})]}),f.jsxs("div",{className:"relative",children:[f.jsx(ST,{className:"absolute right-3 top-3 text-gray-400",size:20}),f.jsx("input",{type:"password",name:"password",autoComplete:e?"current-password":"new-password",placeholder:"رمز عبور",className:"w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-black/20 focus:border-telegram-primary rounded-xl py-3 pr-10 pl-4 outline-none transition-all text-gray-900 dark:text-white dir-ltr text-right",value:l.password,onChange:g=>u({...l,password:g.target.value})})]}),f.jsx("button",{type:"submit",disabled:r,className:"w-full bg-telegram-primary hover:bg-telegram-primaryDark text-white font-bold py-3 rounded-xl shadow-lg shadow-telegram-primary/30 flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-6",children:r?f.jsx(X_,{className:"animate-spin"}):f.jsxs(f.Fragment,{children:[e?"ورود":"ثبت نام",f.jsx(K_,{size:20,className:"rotate-180"})]})})]}),f.jsxs("div",{className:"relative my-6",children:[f.jsx("div",{className:"absolute inset-0 flex items-center",children:f.jsx("div",{className:"w-full border-t border-gray-200 dark:border-white/10"})}),f.jsx("div",{className:"relative flex justify-center text-sm",children:f.jsx("span",{className:"px-2 bg-white dark:bg-telegram-secondaryDark text-gray-500",children:"یا"})})]}),f.jsxs("button",{type:"button",onClick:p,disabled:r,className:"w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-700 dark:text-white font-medium py-3 rounded-xl flex items-center justify-center gap-3 transition-colors",children:[f.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",className:"w-5 h-5",alt:"Google"}),"ورود با حساب گوگل"]}),f.jsx("div",{className:"mt-6 text-center",children:f.jsx("button",{onClick:()=>{n(!e),o("")},className:"text-telegram-primary hover:underline text-sm font-medium",children:e?"حساب کاربری ندارید؟ ثبت نام کنید":"قبلا ثبت نام کرده‌اید؟ وارد شوید"})})]})]})},vP="data:audio/mpeg;base64,//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQxAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",pE=[{id:"global_chat",name:"چت عمومی جهانی 🌍",avatar:"https://cdn-icons-png.flaticon.com/512/921/921490.png",status:"online",bio:"گفتگو با تمام کاربران آنلاین در سراسر جهان (متصل به سرور واقعی)",username:"@global_world",phone:"",type:"group",isGlobal:!0},{id:"saved",name:"پیام‌های ذخیره شده",avatar:"",status:"online",bio:"فضای شخصی شما برای ذخیره پیام‌ها و فایل‌ها",username:"@saved_messages",phone:"",type:"user"}],ud={};pE.forEach(t=>{ud[t.id]={contactId:t.id,messages:[],unreadCount:0,draft:""}});const _P={name:"کاربر مهمان",bio:"...",username:"@guest",phone:"",role:"user"},wP=()=>{var Mr,xn;const[t,e]=B.useState(null),[n,r]=B.useState(!0),[i,s]=B.useState(()=>{const $=localStorage.getItem("irangram_contacts");return $?JSON.parse($):pE}),[o,l]=B.useState(()=>{const $=localStorage.getItem("irangram_sessions");let X=$?JSON.parse($):ud;return X.global_chat||(X.global_chat=ud.global_chat),X}),[u,h]=B.useState(_P),[p,g]=B.useState(()=>localStorage.getItem("irangram_wallpaper")||"default"),[m,A]=B.useState(null),[P,C]=B.useState(()=>localStorage.getItem("irangram_theme")||Kr.LIGHT),[D,k]=B.useState(window.innerWidth<768),[E,x]=B.useState(!1),[q,F]=B.useState(!1),[U,w]=B.useState(!1),[v,_]=B.useState(!1),[I,S]=B.useState(null),[R,T]=B.useState(!1),[be,nt]=B.useState(0),[Nt,Ke]=B.useState(!1),V=B.useRef(null),H=B.useRef(new Audio(vP));B.useEffect(()=>{const $=X=>{X.preventDefault(),S(X)};return window.addEventListener("beforeinstallprompt",$),()=>{window.removeEventListener("beforeinstallprompt",$)}},[]);const Q=async()=>{if(!I)return;I.prompt();const{outcome:$}=await I.userChoice;$==="accepted"&&S(null)};B.useEffect(()=>{const $=zR(async X=>{var ke;if(e(X),X){const he=await KR(X.uid);h(he?{name:he.name||X.displayName||"کاربر",bio:he.bio||"",username:he.username||"",phone:he.phone||"",role:he.role||"user"}:{name:X.displayName||"کاربر",bio:"کاربر جدید",username:((ke=X.email)==null?void 0:ke.split("@")[0])||"",phone:"",role:"user"})}r(!1)});return()=>$()},[]),B.useEffect(()=>{t&&(localStorage.setItem("irangram_sessions",JSON.stringify(o)),localStorage.setItem("irangram_contacts",JSON.stringify(i)))},[o,i,t]),B.useEffect(()=>{localStorage.setItem("irangram_theme",P)},[P]),B.useEffect(()=>{localStorage.setItem("irangram_wallpaper",p)},[p]),B.useEffect(()=>{const $=()=>{k(window.innerWidth<768),window.innerWidth<1024&&x(!1)};return window.addEventListener("resize",$),()=>window.removeEventListener("resize",$)},[]),B.useEffect(()=>{P===Kr.DARK?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[P]),B.useEffect(()=>{if(!t)return;const $=rP(X=>{X.currentVersion>Kt.VERSION&&_(!0)});return iP(),()=>{$()}},[t]),B.useEffect(()=>{if(!t)return;const $=X=>{const ke=X.map(he=>({...he,senderId:he.senderId===t.uid?"me":he.senderId,reactions:he.reactions||{}}));l(he=>{var pe,Ae,Zt,jr,An;const kn=(Ae=(pe=he.global_chat)==null?void 0:pe.messages.slice(-1)[0])==null?void 0:Ae.id,Jt=(Zt=ke.slice(-1)[0])==null?void 0:Zt.id;let O=((jr=he.global_chat)==null?void 0:jr.unreadCount)||0;if(kn!==Jt&&ke.length>0&&ke[ke.length-1].senderId!=="me"){m!=="global_chat"&&(O+=1);try{H.current.currentTime=0,H.current.play().catch(()=>{})}catch{}}return{...he,global_chat:{contactId:"global_chat",messages:ke,unreadCount:m==="global_chat"?0:O,draft:((An=he.global_chat)==null?void 0:An.draft)||""}}})};return V.current=eP($),()=>{V.current&&V.current()}},[t,m]),B.useEffect(()=>{let $;return R?$=setInterval(()=>{nt(X=>X+1)},1e3):nt(0),()=>clearInterval($)},[R]);const ae=()=>C($=>$===Kr.LIGHT?Kr.DARK:Kr.LIGHT),ue=$=>{A($),x(!1),l(X=>({...X,[$]:{...X[$],unreadCount:0}}))},ye=$=>{if(i.find(X=>X.id===$.id)){ue($.id);return}s(X=>[...X,$]),l(X=>({...X,[$.id]:{contactId:$.id,messages:[],unreadCount:0,draft:""}})),ue($.id)},bt=B.useCallback(async($,X)=>{!m||!t||(m==="global_chat"?await nP($,X,t.uid):l(ke=>{const he=ke[m];if(!he)return ke;const kn=he.messages.map(Jt=>{if(Jt.id!==$)return Jt;const O={...Jt.reactions},pe=O[X]||[];return pe.includes("me")?(O[X]=pe.filter(Ae=>Ae!=="me"),O[X].length===0&&delete O[X]):O[X]=[...pe,"me"],{...Jt,reactions:O}});return{...ke,[m]:{...he,messages:kn}}}))},[m,t]),qt=B.useCallback(async $=>{m&&(m==="global_chat"?await ZR($):l(X=>({...X,[m]:{...X[m],messages:X[m].messages.filter(ke=>ke.id!==$)}})))},[m]),Tt=B.useCallback(async($,X)=>{if(!m||!t)return;if(m==="global_chat"){const he=u.name?`https://ui-avatars.com/api/?name=${u.name}&background=random&color=fff&size=64`:"";await tP({text:$.text,type:$.type,imageUrl:$.imageUrl,audioDuration:$.audioDuration,isSticker:$.isSticker,replyToId:X,senderId:t.uid},{name:u.name,avatar:he,role:u.role});return}const ke={id:Date.now().toString(),text:$.text||($.isSticker?"Sticker":$.type==="image"?"عکس":"پیام صوتی"),senderId:"me",timestamp:Date.now(),status:"read",type:$.type,imageUrl:$.imageUrl,audioDuration:$.audioDuration,isSticker:$.isSticker,replyToId:X,reactions:{}};l(he=>({...he,[m]:{...he[m],messages:[...he[m].messages,ke]}}))},[m,t,u]),pt=async $=>{const X={...$,role:u.role};h(X),t&&await GR(t.uid,X)},yi=()=>{window.confirm("آیا برای خروج مطمئن هستید؟")&&(HR(t==null?void 0:t.uid),e(null),localStorage.removeItem("irangram_user_id"))};return n?f.jsx("div",{className:"h-[100dvh] w-full flex items-center justify-center bg-white dark:bg-black text-telegram-primary",children:f.jsx(MT,{className:"animate-spin w-10 h-10"})}):t?f.jsxs("div",{className:"flex flex-col h-[100dvh] w-full overflow-hidden bg-white dark:bg-black font-sans relative",children:[v&&f.jsx("div",{className:"fixed inset-0 z-[100] bg-telegram-primary/95 flex flex-col items-center justify-center p-6 text-white text-center animate-fade-in",children:f.jsxs("div",{className:"bg-white text-gray-900 rounded-3xl p-8 max-w-sm w-full shadow-2xl",children:[f.jsx("div",{className:"w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-telegram-primary",children:f.jsx(sf,{size:40})}),f.jsx("h2",{className:"text-2xl font-bold mb-2",children:"نسخه جدید موجود است!"}),f.jsx("p",{className:"text-gray-500 mb-6 text-sm",children:"برای عملکرد صحیح برنامه و دسترسی به قابلیت‌های جدید، لطفاً همین حالا بروزرسانی کنید."}),f.jsx("button",{onClick:()=>window.location.reload(),className:"w-full bg-telegram-primary hover:bg-telegram-primaryDark text-white font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-105",children:"دریافت نسخه جدید"})]})}),R&&f.jsxs("div",{className:"fixed inset-0 z-[90] bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-between py-12 text-white animate-fade-in",children:[f.jsxs("div",{className:"flex flex-col items-center mt-10",children:[f.jsx("div",{className:"w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-4 shadow-2xl",children:f.jsx("img",{src:((Mr=i.find($=>$.id===m))==null?void 0:Mr.avatar)||"https://via.placeholder.com/150",className:"w-full h-full object-cover"})}),f.jsx("h2",{className:"text-3xl font-bold mb-2",children:((xn=i.find($=>$.id===m))==null?void 0:xn.name)||"تماس ناشناس"}),f.jsx("p",{className:"text-white/60 text-lg animate-pulse",children:be>0?`${Math.floor(be/60)}:${(be%60).toString().padStart(2,"0")}`:"در حال تماس..."})]}),f.jsxs("div",{className:"flex items-center gap-8 mb-10",children:[f.jsx("button",{onClick:()=>Ke(!Nt),className:`p-4 rounded-full transition-all ${Nt?"bg-white text-gray-900":"bg-white/10 hover:bg-white/20"}`,children:Nt?f.jsx(NT,{size:32}):f.jsx(J_,{size:32})}),f.jsx("button",{onClick:()=>{T(!1)},className:"p-6 bg-red-500 rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all",children:f.jsx(OT,{size:40})}),f.jsx("button",{className:"p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all",children:f.jsx(Ko,{size:32,className:"rotate-180"})})]})]}),U&&f.jsx(gP,{onClose:()=>w(!1),currentUserEmail:t.email,currentUserRole:u.role||"user"}),f.jsx(mP,{isOpen:q,onClose:()=>F(!1),userProfile:u,onSave:pt,wallpaper:p,onSaveWallpaper:g}),f.jsxs("div",{className:"flex-1 flex overflow-hidden relative",children:[f.jsxs("div",{className:`
            ${D&&m?"hidden":"flex"}
            ${D?"w-full":"w-80 lg:w-96"} 
            flex-col h-full z-20 transition-all duration-300 shadow-xl bg-white dark:bg-telegram-bgDark
          `,children:[f.jsx("div",{className:"flex-1 overflow-hidden",children:f.jsx(sP,{contacts:i,sessions:o,activeContactId:m,onSelectContact:ue,toggleTheme:ae,theme:P,userProfile:u,onOpenSettings:()=>F(!0),onOpenAdminPanel:()=>w(!0),onAddContact:ye,showInstallButton:!!I,onInstall:Q})}),f.jsxs("div",{className:"p-2 border-t border-telegram-border dark:border-telegram-borderDark flex justify-between items-center bg-gray-50 dark:bg-telegram-bgDark",children:[f.jsxs("span",{className:"text-xs text-gray-400 px-2",children:["v",Kt.VERSION]}),f.jsx("button",{onClick:yi,className:"p-2 text-red-500 hover:bg-red-50 dark:hover:bg-white/5 rounded-lg",title:"خروج",children:f.jsx(CT,{size:18})})]})]}),f.jsxs("div",{className:`
            ${D&&!m?"hidden":"flex"}
            flex-1 h-full relative flex-col min-w-0
          `,children:[f.jsx("div",{className:"flex-1 h-full relative flex flex-col min-w-0",children:m?f.jsx(dP,{contact:i.find($=>$.id===m),messages:o[m].messages,myId:"me",myRole:u.role||"user",onSendMessage:Tt,onEditMessage:()=>{},onDeleteMessage:qt,onReaction:bt,onBack:()=>A(null),isMobile:D,onProfileClick:()=>x(!0),wallpaper:p,onCall:()=>T(!0)}):f.jsx("div",{className:"h-full w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark text-gray-400 dark:text-gray-600 pattern-bg",children:f.jsxs("div",{className:"text-center p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl",children:[f.jsx("span",{className:"text-4xl block mb-4",children:"👋"}),f.jsx("h3",{className:"font-bold mb-2",children:"به ایران‌گرام خوش آمدید"}),f.jsx("p",{className:"text-sm",children:"برای شروع گفتگو کلیک کنید"})]})})}),m&&E&&f.jsx("div",{className:`
                    absolute inset-y-0 right-0 z-50 bg-white dark:bg-telegram-secondaryDark shadow-2xl transition-transform duration-300
                    ${D?"w-full":"w-80 border-l border-telegram-border dark:border-telegram-borderDark"}
                `,children:f.jsx(fP,{contact:i.find($=>$.id===m),onClose:()=>x(!1)})})]})]})]}):f.jsx(yP,{onSuccess:e})},mE=document.getElementById("root");if(!mE)throw new Error("Could not find root element to mount to");const EP=Bc.createRoot(mE);EP.render(f.jsx(i1.StrictMode,{children:f.jsx(wP,{})}));
