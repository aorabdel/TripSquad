(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ls(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sp={exports:{}},To={},lp={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ri=Symbol.for("react.element"),Nf=Symbol.for("react.portal"),Of=Symbol.for("react.fragment"),Lf=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),Bf=Symbol.for("react.provider"),_f=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Vf=Symbol.for("react.memo"),$f=Symbol.for("react.lazy"),nu=Symbol.iterator;function Uf(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cp=Object.assign,pp={};function or(e,t,n){this.props=e,this.context=t,this.refs=pp,this.updater=n||up}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dp(){}dp.prototype=or.prototype;function Ws(e,t,n){this.props=e,this.context=t,this.refs=pp,this.updater=n||up}var Bs=Ws.prototype=new dp;Bs.constructor=Ws;cp(Bs,or.prototype);Bs.isPureReactComponent=!0;var ru=Array.isArray,hp=Object.prototype.hasOwnProperty,_s={current:null},fp={key:!0,ref:!0,__self:!0,__source:!0};function mp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)hp.call(t,r)&&!fp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ri,type:e,key:o,ref:a,props:i,_owner:_s.current}}function Hf(e,t){return{$$typeof:ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function js(e){return typeof e=="object"&&e!==null&&e.$$typeof===ri}function qf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iu=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qf(""+e.key):t.toString(36)}function Ri(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ri:case Nf:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ho(a,0):r,ru(i)?(n="",e!=null&&(n=e.replace(iu,"$&/")+"/"),Ri(i,t,n,"",function(u){return u})):i!=null&&(js(i)&&(i=Hf(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(iu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ru(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Ho(o,s);a+=Ri(o,t,n,l,i)}else if(l=Uf(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Ho(o,s++),a+=Ri(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function di(e,t,n){if(e==null)return e;var r=[],i=0;return Ri(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Yf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Ni={transition:null},Kf={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Ni,ReactCurrentOwner:_s};function gp(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:di,forEach:function(e,t,n){di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return di(e,function(){t++}),t},toArray:function(e){return di(e,function(t){return t})||[]},only:function(e){if(!js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=or;V.Fragment=Of;V.Profiler=Wf;V.PureComponent=Ws;V.StrictMode=Lf;V.Suspense=Gf;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kf;V.act=gp;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=_s.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)hp.call(t,l)&&!fp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ri,type:e.type,key:i,ref:o,props:r,_owner:a}};V.createContext=function(e){return e={$$typeof:_f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bf,_context:e},e.Consumer=e};V.createElement=mp;V.createFactory=function(e){var t=mp.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:jf,render:e}};V.isValidElement=js;V.lazy=function(e){return{$$typeof:$f,_payload:{_status:-1,_result:e},_init:Yf}};V.memo=function(e,t){return{$$typeof:Vf,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Ni.transition;Ni.transition={};try{e()}finally{Ni.transition=t}};V.unstable_act=gp;V.useCallback=function(e,t){return Re.current.useCallback(e,t)};V.useContext=function(e){return Re.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};V.useEffect=function(e,t){return Re.current.useEffect(e,t)};V.useId=function(){return Re.current.useId()};V.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Re.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};V.useRef=function(e){return Re.current.useRef(e)};V.useState=function(e){return Re.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Re.current.useTransition()};V.version="18.3.1";lp.exports=V;var Ut=lp.exports;const Qf=Ls(Ut);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf=Ut,Jf=Symbol.for("react.element"),Zf=Symbol.for("react.fragment"),em=Object.prototype.hasOwnProperty,tm=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nm={key:!0,ref:!0,__self:!0,__source:!0};function yp(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)em.call(t,r)&&!nm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Jf,type:e,key:o,ref:a,props:i,_owner:tm.current}}To.Fragment=Zf;To.jsx=yp;To.jsxs=yp;sp.exports=To;var k=sp.exports,vp={exports:{}},Qe={},wp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,B){var v=F.length;F.push(B);e:for(;0<v;){var Y=v-1>>>1,X=F[Y];if(0<i(X,B))F[Y]=B,F[v]=X,v=Y;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var B=F[0],v=F.pop();if(v!==B){F[0]=v;e:for(var Y=0,X=F.length,w=X>>>1;Y<w;){var ye=2*(Y+1)-1,ot=F[ye],re=ye+1,mt=F[re];if(0>i(ot,v))re<X&&0>i(mt,ot)?(F[Y]=mt,F[re]=v,Y=re):(F[Y]=ot,F[ye]=v,Y=ye);else if(re<X&&0>i(mt,v))F[Y]=mt,F[re]=v,Y=re;else break e}}return B}function i(F,B){var v=F.sortIndex-B.sortIndex;return v!==0?v:F.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],p=1,c=null,d=3,h=!1,g=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=F)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function T(F){if(b=!1,y(F),!g)if(n(l)!==null)g=!0,fe(C);else{var B=n(u);B!==null&&de(T,B.startTime-F)}}function C(F,B){g=!1,b&&(b=!1,f(M),M=-1),h=!0;var v=d;try{for(y(B),c=n(l);c!==null&&(!(c.expirationTime>B)||F&&!R());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,d=c.priorityLevel;var X=Y(c.expirationTime<=B);B=e.unstable_now(),typeof X=="function"?c.callback=X:c===n(l)&&r(l),y(B)}else r(l);c=n(l)}if(c!==null)var w=!0;else{var ye=n(u);ye!==null&&de(T,ye.startTime-B),w=!1}return w}finally{c=null,d=v,h=!1}}var x=!1,z=null,M=-1,W=5,S=-1;function R(){return!(e.unstable_now()-S<W)}function O(){if(z!==null){var F=e.unstable_now();S=F;var B=!0;try{B=z(!0,F)}finally{B?q():(x=!1,z=null)}}else x=!1}var q;if(typeof m=="function")q=function(){m(O)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,$=ee.port2;ee.port1.onmessage=O,q=function(){$.postMessage(null)}}else q=function(){P(O,0)};function fe(F){z=F,x||(x=!0,q())}function de(F,B){M=P(function(){F(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,fe(C))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(F){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var v=d;d=B;try{return F()}finally{d=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var v=d;d=F;try{return B()}finally{d=v}},e.unstable_scheduleCallback=function(F,B,v){var Y=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?Y+v:Y):v=Y,F){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=v+X,F={id:p++,callback:B,priorityLevel:F,startTime:v,expirationTime:X,sortIndex:-1},v>Y?(F.sortIndex=v,t(u,F),n(l)===null&&F===n(u)&&(b?(f(M),M=-1):b=!0,de(T,v-Y))):(F.sortIndex=X,t(l,F),g||h||(g=!0,fe(C))),F},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(F){var B=d;return function(){var v=d;d=B;try{return F.apply(this,arguments)}finally{d=v}}}})(kp);wp.exports=kp;var rm=wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=Ut,Ke=rm;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bp=new Set,Wr={};function Sn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Wr[e]=t,e=0;e<t.length;e++)bp.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fa=Object.prototype.hasOwnProperty,om=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},au={};function am(e){return Fa.call(au,e)?!0:Fa.call(ou,e)?!1:om.test(e)?au[e]=!0:(ou[e]=!0,!1)}function sm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lm(e,t,n,r){if(t===null||typeof t>"u"||sm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gs=/[\-:]([a-z])/g;function Vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gs,Vs);Te[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gs,Vs);Te[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gs,Vs);Te[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function $s(e,t,n,r){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lm(t,n,i,r)&&(n=null),r||i===null?am(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Us=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),Hs=Symbol.for("react.forward_ref"),Na=Symbol.for("react.suspense"),Oa=Symbol.for("react.suspense_list"),qs=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Tp=Symbol.for("react.offscreen"),su=Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,qo;function xr(e){if(qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qo=t&&t[1]||""}return`
`+qo+e}var Yo=!1;function Ko(e,t){if(!e||Yo)return"";Yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Yo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xr(e):""}function um(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function La(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Dn:return"Portal";case Ra:return"Profiler";case Us:return"StrictMode";case Na:return"Suspense";case Oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sp:return(e.displayName||"Context")+".Consumer";case xp:return(e._context.displayName||"Context")+".Provider";case Hs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qs:return t=e.displayName||null,t!==null?t:La(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return La(e(t))}catch{}}return null}function cm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return La(t);case 8:return t===Us?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ap(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=Ap(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=pm(e))}function Pp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ap(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cp(e,t){t=t.checked,t!=null&&$s(e,"checked",t,!1)}function Ba(e,t){Cp(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_a(e,t.type,n):t.hasOwnProperty("defaultValue")&&_a(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _a(e,t,n){(t!=="number"||Ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ja(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Sr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Ip(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,Ep=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dm=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){dm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function Mp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function Dp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hm=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(hm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function $a(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,Un=null,Hn=null;function du(e){if(e=ai(e)){if(typeof Ha!="function")throw Error(I(280));var t=e.stateNode;t&&(t=zo(t),Ha(e.stateNode,e.type,t))}}function Fp(e){Un?Hn?Hn.push(e):Hn=[e]:Un=e}function Rp(){if(Un){var e=Un,t=Hn;if(Hn=Un=null,du(e),t)for(e=0;e<t.length;e++)du(t[e])}}function Np(e,t){return e(t)}function Op(){}var Qo=!1;function Lp(e,t,n){if(Qo)return e(t,n);Qo=!0;try{return Np(e,t,n)}finally{Qo=!1,(Un!==null||Hn!==null)&&(Op(),Rp())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var r=zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var qa=!1;if(Et)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){qa=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{qa=!1}function fm(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Cr=!1,Qi=null,Xi=!1,Ya=null,mm={onError:function(e){Cr=!0,Qi=e}};function gm(e,t,n,r,i,o,a,s,l){Cr=!1,Qi=null,fm.apply(mm,arguments)}function ym(e,t,n,r,i,o,a,s,l){if(gm.apply(this,arguments),Cr){if(Cr){var u=Qi;Cr=!1,Qi=null}else throw Error(I(198));Xi||(Xi=!0,Ya=u)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hu(e){if(Tn(e)!==e)throw Error(I(188))}function vm(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hu(i),e;if(o===r)return hu(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Bp(e){return e=vm(e),e!==null?_p(e):null}function _p(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_p(e);if(t!==null)return t;e=e.sibling}return null}var jp=Ke.unstable_scheduleCallback,fu=Ke.unstable_cancelCallback,wm=Ke.unstable_shouldYield,km=Ke.unstable_requestPaint,he=Ke.unstable_now,bm=Ke.unstable_getCurrentPriorityLevel,Ks=Ke.unstable_ImmediatePriority,Gp=Ke.unstable_UserBlockingPriority,Ji=Ke.unstable_NormalPriority,xm=Ke.unstable_LowPriority,Vp=Ke.unstable_IdlePriority,Ao=null,kt=null;function Sm(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ao,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Pm,Tm=Math.log,Am=Math.LN2;function Pm(e){return e>>>=0,e===0?32:31-(Tm(e)/Am|0)|0}var gi=64,yi=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Tr(s):(o&=a,o!==0&&(r=Tr(o)))}else a=n&~i,a!==0?r=Tr(a):o!==0&&(r=Tr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Cm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Im(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-pt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Cm(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $p(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function zm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function Up(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hp,Xs,qp,Yp,Kp,Qa=!1,vi=[],Ht=null,qt=null,Yt=null,jr=new Map,Gr=new Map,jt=[],Em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function fr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ai(t),t!==null&&Xs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mm(e,t,n,r,i){switch(t){case"focusin":return Ht=fr(Ht,e,t,n,r,i),!0;case"dragenter":return qt=fr(qt,e,t,n,r,i),!0;case"mouseover":return Yt=fr(Yt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return jr.set(o,fr(jr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gr.set(o,fr(Gr.get(o)||null,e,t,n,r,i)),!0}return!1}function Qp(e){var t=dn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Wp(n),t!==null){e.blockedOn=t,Kp(e.priority,function(){qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ua=r,n.target.dispatchEvent(r),Ua=null}else return t=ai(n),t!==null&&Xs(t),e.blockedOn=n,!1;t.shift()}return!0}function gu(e,t,n){Oi(e)&&n.delete(t)}function Dm(){Qa=!1,Ht!==null&&Oi(Ht)&&(Ht=null),qt!==null&&Oi(qt)&&(qt=null),Yt!==null&&Oi(Yt)&&(Yt=null),jr.forEach(gu),Gr.forEach(gu)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Qa||(Qa=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Dm)))}function Vr(e){function t(i){return mr(i,e)}if(0<vi.length){mr(vi[0],e);for(var n=1;n<vi.length;n++){var r=vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&mr(Ht,e),qt!==null&&mr(qt,e),Yt!==null&&mr(Yt,e),jr.forEach(t),Gr.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)Qp(n),n.blockedOn===null&&jt.shift()}var qn=Rt.ReactCurrentBatchConfig,eo=!0;function Fm(e,t,n,r){var i=Q,o=qn.transition;qn.transition=null;try{Q=1,Js(e,t,n,r)}finally{Q=i,qn.transition=o}}function Rm(e,t,n,r){var i=Q,o=qn.transition;qn.transition=null;try{Q=4,Js(e,t,n,r)}finally{Q=i,qn.transition=o}}function Js(e,t,n,r){if(eo){var i=Xa(e,t,n,r);if(i===null)sa(e,t,r,to,n),mu(e,r);else if(Mm(i,e,t,n,r))r.stopPropagation();else if(mu(e,r),t&4&&-1<Em.indexOf(e)){for(;i!==null;){var o=ai(i);if(o!==null&&Hp(o),o=Xa(e,t,n,r),o===null&&sa(e,t,r,to,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else sa(e,t,r,null,n)}}var to=null;function Xa(e,t,n,r){if(to=null,e=Ys(r),e=dn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function Xp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bm()){case Ks:return 1;case Gp:return 4;case Ji:case xm:return 16;case Vp:return 536870912;default:return 16}default:return 16}}var Vt=null,Zs=null,Li=null;function Jp(){if(Li)return Li;var e,t=Zs,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Li=i.slice(e,1<r?1-r:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function yu(){return!1}function Xe(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:yu,this.isPropagationStopped=yu,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Xe(ar),oi=ce({},ar,{view:0,detail:0}),Nm=Xe(oi),Jo,Zo,gr,Po=ce({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(Jo=e.screenX-gr.screenX,Zo=e.screenY-gr.screenY):Zo=Jo=0,gr=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),vu=Xe(Po),Om=ce({},Po,{dataTransfer:0}),Lm=Xe(Om),Wm=ce({},oi,{relatedTarget:0}),ea=Xe(Wm),Bm=ce({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=Xe(Bm),jm=ce({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gm=Xe(jm),Vm=ce({},ar,{data:0}),wu=Xe(Vm),$m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function tl(){return qm}var Ym=ce({},oi,{key:function(e){if(e.key){var t=$m[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Km=Xe(Ym),Qm=ce({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=Xe(Qm),Xm=ce({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),Jm=Xe(Xm),Zm=ce({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),eg=Xe(Zm),tg=ce({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ng=Xe(tg),rg=[9,13,27,32],nl=Et&&"CompositionEvent"in window,Ir=null;Et&&"documentMode"in document&&(Ir=document.documentMode);var ig=Et&&"TextEvent"in window&&!Ir,Zp=Et&&(!nl||Ir&&8<Ir&&11>=Ir),bu=" ",xu=!1;function ed(e,t){switch(e){case"keyup":return rg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function og(e,t){switch(e){case"compositionend":return td(t);case"keypress":return t.which!==32?null:(xu=!0,bu);case"textInput":return e=t.data,e===bu&&xu?null:e;default:return null}}function ag(e,t){if(Rn)return e==="compositionend"||!nl&&ed(e,t)?(e=Jp(),Li=Zs=Vt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zp&&t.locale!=="ko"?null:t.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sg[e.type]:t==="textarea"}function nd(e,t,n,r){Fp(r),t=no(t,"onChange"),0<t.length&&(n=new el("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zr=null,$r=null;function lg(e){hd(e,0)}function Co(e){var t=Ln(e);if(Pp(t))return e}function ug(e,t){if(e==="change")return t}var rd=!1;if(Et){var ta;if(Et){var na="oninput"in document;if(!na){var Tu=document.createElement("div");Tu.setAttribute("oninput","return;"),na=typeof Tu.oninput=="function"}ta=na}else ta=!1;rd=ta&&(!document.documentMode||9<document.documentMode)}function Au(){zr&&(zr.detachEvent("onpropertychange",id),$r=zr=null)}function id(e){if(e.propertyName==="value"&&Co($r)){var t=[];nd(t,$r,e,Ys(e)),Lp(lg,t)}}function cg(e,t,n){e==="focusin"?(Au(),zr=t,$r=n,zr.attachEvent("onpropertychange",id)):e==="focusout"&&Au()}function pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co($r)}function dg(e,t){if(e==="click")return Co(t)}function hg(e,t){if(e==="input"||e==="change")return Co(t)}function fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:fg;function Ur(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fa.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,t){var n=Pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mg(e){var t=ad(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&od(n.ownerDocument.documentElement,n)){if(r!==null&&rl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Cu(n,o);var a=Cu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gg=Et&&"documentMode"in document&&11>=document.documentMode,Nn=null,Ja=null,Er=null,Za=!1;function Iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Za||Nn==null||Nn!==Ki(r)||(r=Nn,"selectionStart"in r&&rl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Ur(Er,r)||(Er=r,r=no(Ja,"onSelect"),0<r.length&&(t=new el("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},ra={},sd={};Et&&(sd=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Io(e){if(ra[e])return ra[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sd)return ra[e]=t[n];return e}var ld=Io("animationend"),ud=Io("animationiteration"),cd=Io("animationstart"),pd=Io("transitionend"),dd=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){dd.set(e,t),Sn(t,[e])}for(var ia=0;ia<zu.length;ia++){var oa=zu[ia],yg=oa.toLowerCase(),vg=oa[0].toUpperCase()+oa.slice(1);nn(yg,"on"+vg)}nn(ld,"onAnimationEnd");nn(ud,"onAnimationIteration");nn(cd,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(pd,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ym(r,t,void 0,e),e.currentTarget=null}function hd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Eu(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Eu(i,s,u),o=l}}}if(Xi)throw e=Ya,Xi=!1,Ya=null,e}function ie(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var r=e+"__bubble";n.has(r)||(fd(t,e,2,!1),n.add(r))}function aa(e,t,n){var r=0;t&&(r|=4),fd(n,e,r,t)}var bi="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[bi]){e[bi]=!0,bp.forEach(function(n){n!=="selectionchange"&&(wg.has(n)||aa(n,!1,e),aa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bi]||(t[bi]=!0,aa("selectionchange",!1,t))}}function fd(e,t,n,r){switch(Xp(t)){case 1:var i=Fm;break;case 4:i=Rm;break;default:i=Js}n=i.bind(null,t,n,e),i=void 0,!qa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function sa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=dn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Lp(function(){var u=o,p=Ys(n),c=[];e:{var d=dd.get(e);if(d!==void 0){var h=el,g=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":h=Km;break;case"focusin":g="focus",h=ea;break;case"focusout":g="blur",h=ea;break;case"beforeblur":case"afterblur":h=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Lm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Jm;break;case ld:case ud:case cd:h=_m;break;case pd:h=eg;break;case"scroll":h=Nm;break;case"wheel":h=ng;break;case"copy":case"cut":case"paste":h=Gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ku}var b=(t&4)!==0,P=!b&&e==="scroll",f=b?d!==null?d+"Capture":null:d;b=[];for(var m=u,y;m!==null;){y=m;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,f!==null&&(T=_r(m,f),T!=null&&b.push(qr(m,T,y)))),P)break;m=m.return}0<b.length&&(d=new h(d,g,null,n,p),c.push({event:d,listeners:b}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==Ua&&(g=n.relatedTarget||n.fromElement)&&(dn(g)||g[Mt]))break e;if((h||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?dn(g):null,g!==null&&(P=Tn(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(b=vu,T="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=ku,T="onPointerLeave",f="onPointerEnter",m="pointer"),P=h==null?d:Ln(h),y=g==null?d:Ln(g),d=new b(T,m+"leave",h,n,p),d.target=P,d.relatedTarget=y,T=null,dn(p)===u&&(b=new b(f,m+"enter",g,n,p),b.target=y,b.relatedTarget=P,T=b),P=T,h&&g)t:{for(b=h,f=g,m=0,y=b;y;y=zn(y))m++;for(y=0,T=f;T;T=zn(T))y++;for(;0<m-y;)b=zn(b),m--;for(;0<y-m;)f=zn(f),y--;for(;m--;){if(b===f||f!==null&&b===f.alternate)break t;b=zn(b),f=zn(f)}b=null}else b=null;h!==null&&Mu(c,d,h,b,!1),g!==null&&P!==null&&Mu(c,P,g,b,!0)}}e:{if(d=u?Ln(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var C=ug;else if(Su(d))if(rd)C=hg;else{C=pg;var x=cg}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=dg);if(C&&(C=C(e,u))){nd(c,C,n,p);break e}x&&x(e,d,u),e==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&_a(d,"number",d.value)}switch(x=u?Ln(u):window,e){case"focusin":(Su(x)||x.contentEditable==="true")&&(Nn=x,Ja=u,Er=null);break;case"focusout":Er=Ja=Nn=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,Iu(c,n,p);break;case"selectionchange":if(gg)break;case"keydown":case"keyup":Iu(c,n,p)}var z;if(nl)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Rn?ed(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Zp&&n.locale!=="ko"&&(Rn||M!=="onCompositionStart"?M==="onCompositionEnd"&&Rn&&(z=Jp()):(Vt=p,Zs="value"in Vt?Vt.value:Vt.textContent,Rn=!0)),x=no(u,M),0<x.length&&(M=new wu(M,e,null,n,p),c.push({event:M,listeners:x}),z?M.data=z:(z=td(n),z!==null&&(M.data=z)))),(z=ig?og(e,n):ag(e,n))&&(u=no(u,"onBeforeInput"),0<u.length&&(p=new wu("onBeforeInput","beforeinput",null,n,p),c.push({event:p,listeners:u}),p.data=z))}hd(c,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_r(e,n),o!=null&&r.unshift(qr(e,o,i)),o=_r(e,t),o!=null&&r.push(qr(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mu(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=_r(n,o),l!=null&&a.unshift(qr(n,l,s))):i||(l=_r(n,o),l!=null&&a.push(qr(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var kg=/\r\n?/g,bg=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(bg,"")}function xi(e,t,n){if(t=Du(t),Du(e)!==t&&n)throw Error(I(425))}function ro(){}var es=null,ts=null;function ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rs=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,Fu=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Fu<"u"?function(e){return Fu.resolve(null).then(e).catch(Tg)}:rs;function Tg(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),wt="__reactFiber$"+sr,Yr="__reactProps$"+sr,Mt="__reactContainer$"+sr,is="__reactEvents$"+sr,Ag="__reactListeners$"+sr,Pg="__reactHandles$"+sr;function dn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ru(e);e!==null;){if(n=e[wt])return n;e=Ru(e)}return t}e=n,n=e.parentNode}return null}function ai(e){return e=e[wt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function zo(e){return e[Yr]||null}var os=[],Wn=-1;function rn(e){return{current:e}}function oe(e){0>Wn||(e.current=os[Wn],os[Wn]=null,Wn--)}function ne(e,t){Wn++,os[Wn]=e.current,e.current=t}var tn={},ze=rn(tn),Be=rn(!1),yn=tn;function Jn(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function io(){oe(Be),oe(ze)}function Nu(e,t,n){if(ze.current!==tn)throw Error(I(168));ne(ze,t),ne(Be,n)}function md(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,cm(e)||"Unknown",i));return ce({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,yn=ze.current,ne(ze,e),ne(Be,Be.current),!0}function Ou(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=md(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,oe(Be),oe(ze),ne(ze,e)):oe(Be),ne(Be,n)}var Pt=null,Eo=!1,ua=!1;function gd(e){Pt===null?Pt=[e]:Pt.push(e)}function Cg(e){Eo=!0,gd(e)}function on(){if(!ua&&Pt!==null){ua=!0;var e=0,t=Q;try{var n=Pt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,Eo=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),jp(Ks,on),i}finally{Q=t,ua=!1}}return null}var Bn=[],_n=0,ao=null,so=0,Je=[],Ze=0,vn=null,Ct=1,It="";function un(e,t){Bn[_n++]=so,Bn[_n++]=ao,ao=e,so=t}function yd(e,t,n){Je[Ze++]=Ct,Je[Ze++]=It,Je[Ze++]=vn,vn=e;var r=Ct;e=It;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ct=1<<32-pt(t)+i|n<<i|r,It=o+e}else Ct=1<<o|n<<i|r,It=e}function il(e){e.return!==null&&(un(e,1),yd(e,1,0))}function ol(e){for(;e===ao;)ao=Bn[--_n],Bn[_n]=null,so=Bn[--_n],Bn[_n]=null;for(;e===vn;)vn=Je[--Ze],Je[Ze]=null,It=Je[--Ze],Je[Ze]=null,Ct=Je[--Ze],Je[Ze]=null}var qe=null,He=null,ae=!1,ct=null;function vd(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,He=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:Ct,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,He=null,!0):!1;default:return!1}}function as(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ss(e){if(ae){var t=He;if(t){var n=t;if(!Lu(e,t)){if(as(e))throw Error(I(418));t=Kt(n.nextSibling);var r=qe;t&&Lu(e,t)?vd(r,n):(e.flags=e.flags&-4097|2,ae=!1,qe=e)}}else{if(as(e))throw Error(I(418));e.flags=e.flags&-4097|2,ae=!1,qe=e}}}function Wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Si(e){if(e!==qe)return!1;if(!ae)return Wu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ns(e.type,e.memoizedProps)),t&&(t=He)){if(as(e))throw wd(),Error(I(418));for(;t;)vd(e,t),t=Kt(t.nextSibling)}if(Wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=qe?Kt(e.stateNode.nextSibling):null;return!0}function wd(){for(var e=He;e;)e=Kt(e.nextSibling)}function Zn(){He=qe=null,ae=!1}function al(e){ct===null?ct=[e]:ct.push(e)}var Ig=Rt.ReactCurrentBatchConfig;function yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ti(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bu(e){var t=e._init;return t(e._payload)}function kd(e){function t(f,m){if(e){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=Zt(f,m),f.index=0,f.sibling=null,f}function o(f,m,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,m,y,T){return m===null||m.tag!==6?(m=ga(y,f.mode,T),m.return=f,m):(m=i(m,y),m.return=f,m)}function l(f,m,y,T){var C=y.type;return C===Fn?p(f,m,y.props.children,T,y.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bt&&Bu(C)===m.type)?(T=i(m,y.props),T.ref=yr(f,m,y),T.return=f,T):(T=Ui(y.type,y.key,y.props,null,f.mode,T),T.ref=yr(f,m,y),T.return=f,T)}function u(f,m,y,T){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ya(y,f.mode,T),m.return=f,m):(m=i(m,y.children||[]),m.return=f,m)}function p(f,m,y,T,C){return m===null||m.tag!==7?(m=gn(y,f.mode,T,C),m.return=f,m):(m=i(m,y),m.return=f,m)}function c(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ga(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hi:return y=Ui(m.type,m.key,m.props,null,f.mode,y),y.ref=yr(f,null,m),y.return=f,y;case Dn:return m=ya(m,f.mode,y),m.return=f,m;case Bt:var T=m._init;return c(f,T(m._payload),y)}if(Sr(m)||dr(m))return m=gn(m,f.mode,y,null),m.return=f,m;Ti(f,m)}return null}function d(f,m,y,T){var C=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:s(f,m,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hi:return y.key===C?l(f,m,y,T):null;case Dn:return y.key===C?u(f,m,y,T):null;case Bt:return C=y._init,d(f,m,C(y._payload),T)}if(Sr(y)||dr(y))return C!==null?null:p(f,m,y,T,null);Ti(f,y)}return null}function h(f,m,y,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return f=f.get(y)||null,s(m,f,""+T,C);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case hi:return f=f.get(T.key===null?y:T.key)||null,l(m,f,T,C);case Dn:return f=f.get(T.key===null?y:T.key)||null,u(m,f,T,C);case Bt:var x=T._init;return h(f,m,y,x(T._payload),C)}if(Sr(T)||dr(T))return f=f.get(y)||null,p(m,f,T,C,null);Ti(m,T)}return null}function g(f,m,y,T){for(var C=null,x=null,z=m,M=m=0,W=null;z!==null&&M<y.length;M++){z.index>M?(W=z,z=null):W=z.sibling;var S=d(f,z,y[M],T);if(S===null){z===null&&(z=W);break}e&&z&&S.alternate===null&&t(f,z),m=o(S,m,M),x===null?C=S:x.sibling=S,x=S,z=W}if(M===y.length)return n(f,z),ae&&un(f,M),C;if(z===null){for(;M<y.length;M++)z=c(f,y[M],T),z!==null&&(m=o(z,m,M),x===null?C=z:x.sibling=z,x=z);return ae&&un(f,M),C}for(z=r(f,z);M<y.length;M++)W=h(z,f,M,y[M],T),W!==null&&(e&&W.alternate!==null&&z.delete(W.key===null?M:W.key),m=o(W,m,M),x===null?C=W:x.sibling=W,x=W);return e&&z.forEach(function(R){return t(f,R)}),ae&&un(f,M),C}function b(f,m,y,T){var C=dr(y);if(typeof C!="function")throw Error(I(150));if(y=C.call(y),y==null)throw Error(I(151));for(var x=C=null,z=m,M=m=0,W=null,S=y.next();z!==null&&!S.done;M++,S=y.next()){z.index>M?(W=z,z=null):W=z.sibling;var R=d(f,z,S.value,T);if(R===null){z===null&&(z=W);break}e&&z&&R.alternate===null&&t(f,z),m=o(R,m,M),x===null?C=R:x.sibling=R,x=R,z=W}if(S.done)return n(f,z),ae&&un(f,M),C;if(z===null){for(;!S.done;M++,S=y.next())S=c(f,S.value,T),S!==null&&(m=o(S,m,M),x===null?C=S:x.sibling=S,x=S);return ae&&un(f,M),C}for(z=r(f,z);!S.done;M++,S=y.next())S=h(z,f,M,S.value,T),S!==null&&(e&&S.alternate!==null&&z.delete(S.key===null?M:S.key),m=o(S,m,M),x===null?C=S:x.sibling=S,x=S);return e&&z.forEach(function(O){return t(f,O)}),ae&&un(f,M),C}function P(f,m,y,T){if(typeof y=="object"&&y!==null&&y.type===Fn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case hi:e:{for(var C=y.key,x=m;x!==null;){if(x.key===C){if(C=y.type,C===Fn){if(x.tag===7){n(f,x.sibling),m=i(x,y.props.children),m.return=f,f=m;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bt&&Bu(C)===x.type){n(f,x.sibling),m=i(x,y.props),m.ref=yr(f,x,y),m.return=f,f=m;break e}n(f,x);break}else t(f,x);x=x.sibling}y.type===Fn?(m=gn(y.props.children,f.mode,T,y.key),m.return=f,f=m):(T=Ui(y.type,y.key,y.props,null,f.mode,T),T.ref=yr(f,m,y),T.return=f,f=T)}return a(f);case Dn:e:{for(x=y.key;m!==null;){if(m.key===x)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),m=i(m,y.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=ya(y,f.mode,T),m.return=f,f=m}return a(f);case Bt:return x=y._init,P(f,m,x(y._payload),T)}if(Sr(y))return g(f,m,y,T);if(dr(y))return b(f,m,y,T);Ti(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),m=i(m,y),m.return=f,f=m):(n(f,m),m=ga(y,f.mode,T),m.return=f,f=m),a(f)):n(f,m)}return P}var er=kd(!0),bd=kd(!1),lo=rn(null),uo=null,jn=null,sl=null;function ll(){sl=jn=uo=null}function ul(e){var t=lo.current;oe(lo),e._currentValue=t}function ls(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){uo=e,sl=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(sl!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(uo===null)throw Error(I(308));jn=e,uo.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var hn=null;function cl(e){hn===null?hn=[e]:hn.push(e)}function xd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dt(e,n)}return i=r.interleaved,i===null?(t.next=t,cl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dt(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}function _u(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var i=e.updateQueue;_t=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==a&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;a=0,p=u=l=null,s=o;do{var d=s.lane,h=s.eventTime;if((r&d)===d){p!==null&&(p=p.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,b=s;switch(d=t,h=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){c=g.call(h,c,d);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,d=typeof g=="function"?g.call(h,c,d):g,d==null)break e;c=ce({},c,d);break e;case 2:_t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else h={eventTime:h,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=h,l=c):p=p.next=h,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(p===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);kn|=a,e.lanes=a,e.memoizedState=c}}function ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var si={},bt=rn(si),Kr=rn(si),Qr=rn(si);function fn(e){if(e===si)throw Error(I(174));return e}function dl(e,t){switch(ne(Qr,t),ne(Kr,e),ne(bt,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ga(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ga(t,e)}oe(bt),ne(bt,t)}function tr(){oe(bt),oe(Kr),oe(Qr)}function Td(e){fn(Qr.current);var t=fn(bt.current),n=Ga(t,e.type);t!==n&&(ne(Kr,e),ne(bt,n))}function hl(e){Kr.current===e&&(oe(bt),oe(Kr))}var le=rn(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function fl(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var _i=Rt.ReactCurrentDispatcher,pa=Rt.ReactCurrentBatchConfig,wn=0,ue=null,ve=null,ke=null,ho=!1,Mr=!1,Xr=0,zg=0;function Ae(){throw Error(I(321))}function ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function gl(e,t,n,r,i,o){if(wn=o,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?Fg:Rg,e=n(r,i),Mr){o=0;do{if(Mr=!1,Xr=0,25<=o)throw Error(I(301));o+=1,ke=ve=null,t.updateQueue=null,_i.current=Ng,e=n(r,i)}while(Mr)}if(_i.current=fo,t=ve!==null&&ve.next!==null,wn=0,ke=ve=ue=null,ho=!1,t)throw Error(I(300));return e}function yl(){var e=Xr!==0;return Xr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ue.memoizedState=ke=e:ke=ke.next=e,ke}function it(){if(ve===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=ke===null?ue.memoizedState:ke.next;if(t!==null)ke=t,ve=e;else{if(e===null)throw Error(I(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ke===null?ue.memoizedState=ke=e:ke=ke.next=e}return ke}function Jr(e,t){return typeof t=="function"?t(e):t}function da(e){var t=it(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var p=u.lane;if((wn&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=r):l=l.next=c,ue.lanes|=p,kn|=p}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,ft(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ue.lanes|=o,kn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ha(e){var t=it(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);ft(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ad(){}function Pd(e,t){var n=ue,r=it(),i=t(),o=!ft(r.memoizedState,i);if(o&&(r.memoizedState=i,We=!0),r=r.queue,vl(zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Zr(9,Id.bind(null,n,r,i,t),void 0,null),be===null)throw Error(I(349));wn&30||Cd(n,t,i)}return i}function Cd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Id(e,t,n,r){t.value=n,t.getSnapshot=r,Ed(t)&&Md(e)}function zd(e,t,n){return n(function(){Ed(t)&&Md(e)})}function Ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Md(e){var t=Dt(e,1);t!==null&&dt(t,e,1,-1)}function Gu(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Dg.bind(null,ue,e),[t.memoizedState,e]}function Zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dd(){return it().memoizedState}function ji(e,t,n,r){var i=yt();ue.flags|=e,i.memoizedState=Zr(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var i=it();r=r===void 0?null:r;var o=void 0;if(ve!==null){var a=ve.memoizedState;if(o=a.destroy,r!==null&&ml(r,a.deps)){i.memoizedState=Zr(t,n,o,r);return}}ue.flags|=e,i.memoizedState=Zr(1|t,n,o,r)}function Vu(e,t){return ji(8390656,8,e,t)}function vl(e,t){return Mo(2048,8,e,t)}function Fd(e,t){return Mo(4,2,e,t)}function Rd(e,t){return Mo(4,4,e,t)}function Nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Od(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,Nd.bind(null,t,e),n)}function wl(){}function Ld(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wd(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bd(e,t,n){return wn&21?(ft(n,t)||(n=$p(),ue.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function Eg(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=pa.transition;pa.transition={};try{e(!1),t()}finally{Q=n,pa.transition=r}}function _d(){return it().memoizedState}function Mg(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jd(e))Gd(t,n);else if(n=xd(e,t,n,r),n!==null){var i=Fe();dt(n,e,r,i),Vd(n,t,r)}}function Dg(e,t,n){var r=Jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jd(e))Gd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,ft(s,a)){var l=t.interleaved;l===null?(i.next=i,cl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=xd(e,t,i,r),n!==null&&(i=Fe(),dt(n,e,r,i),Vd(n,t,r))}}function jd(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Gd(e,t){Mr=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}var fo={readContext:rt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Fg={readContext:rt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ji(4194308,4,Nd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return ji(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Mg.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Gu,useDebugValue:wl,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Gu(!1),t=e[0];return e=Eg.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,i=yt();if(ae){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),be===null)throw Error(I(349));wn&30||Cd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Vu(zd.bind(null,r,o,e),[e]),r.flags|=2048,Zr(9,Id.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=be.identifierPrefix;if(ae){var n=It,r=Ct;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rg={readContext:rt,useCallback:Ld,useContext:rt,useEffect:vl,useImperativeHandle:Od,useInsertionEffect:Fd,useLayoutEffect:Rd,useMemo:Wd,useReducer:da,useRef:Dd,useState:function(){return da(Jr)},useDebugValue:wl,useDeferredValue:function(e){var t=it();return Bd(t,ve.memoizedState,e)},useTransition:function(){var e=da(Jr)[0],t=it().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:Pd,useId:_d,unstable_isNewReconciler:!1},Ng={readContext:rt,useCallback:Ld,useContext:rt,useEffect:vl,useImperativeHandle:Od,useInsertionEffect:Fd,useLayoutEffect:Rd,useMemo:Wd,useReducer:ha,useRef:Dd,useState:function(){return ha(Jr)},useDebugValue:wl,useDeferredValue:function(e){var t=it();return ve===null?t.memoizedState=e:Bd(t,ve.memoizedState,e)},useTransition:function(){var e=ha(Jr)[0],t=it().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:Pd,useId:_d,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Do={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=Jt(e),o=zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,i),t!==null&&(dt(t,e,i,r),Bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=Jt(e),o=zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,i),t!==null&&(dt(t,e,i,r),Bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Jt(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qt(e,i,r),t!==null&&(dt(t,e,r,n),Bi(t,e,r))}};function $u(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,o):!0}function $d(e,t,n){var r=!1,i=tn,o=t.contextType;return typeof o=="object"&&o!==null?o=rt(o):(i=_e(t)?yn:ze.current,r=t.contextTypes,o=(r=r!=null)?Jn(e,i):tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Do,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Do.enqueueReplaceState(t,t.state,null)}function cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},pl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=rt(o):(o=_e(t)?yn:ze.current,i.context=Jn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(us(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Do.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",r=t;do n+=um(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ps(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Og=typeof WeakMap=="function"?WeakMap:Map;function Ud(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,bs=r),ps(e,t)},n}function Hd(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ps(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ps(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Og;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Qg.bind(null,e,t,n),t.then(e,e))}function qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var Lg=Rt.ReactCurrentOwner,We=!1;function Me(e,t,n,r){t.child=e===null?bd(t,null,n,r):er(t,e.child,n,r)}function Ku(e,t,n,r,i){n=n.render;var o=t.ref;return Yn(t,i),r=gl(e,t,n,r,o,i),n=yl(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ae&&n&&il(t),t.flags|=1,Me(e,t,r,i),t.child)}function Qu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Cl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qd(e,t,o,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(a,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=Zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function qd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ur(o,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return ds(e,t,n,r,i)}function Yd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Vn,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Vn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(Vn,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(Vn,Ue),Ue|=r;return Me(e,t,i,n),t.child}function Kd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ds(e,t,n,r,i){var o=_e(n)?yn:ze.current;return o=Jn(t,o),Yn(t,i),n=gl(e,t,n,r,o,i),r=yl(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ae&&r&&il(t),t.flags|=1,Me(e,t,n,i),t.child)}function Xu(e,t,n,r,i){if(_e(n)){var o=!0;oo(t)}else o=!1;if(Yn(t,i),t.stateNode===null)Gi(e,t),$d(t,n,r),cs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=_e(n)?yn:ze.current,u=Jn(t,u));var p=n.getDerivedStateFromProps,c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Uu(t,a,r,u),_t=!1;var d=t.memoizedState;a.state=d,co(t,r,a,i),l=t.memoizedState,s!==r||d!==l||Be.current||_t?(typeof p=="function"&&(us(t,n,p,r),l=t.memoizedState),(s=_t||$u(t,n,s,r,d,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Sd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:lt(t.type,s),a.props=u,c=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=rt(l):(l=_e(n)?yn:ze.current,l=Jn(t,l));var h=n.getDerivedStateFromProps;(p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||d!==l)&&Uu(t,a,r,l),_t=!1,d=t.memoizedState,a.state=d,co(t,r,a,i);var g=t.memoizedState;s!==c||d!==g||Be.current||_t?(typeof h=="function"&&(us(t,n,h,r),g=t.memoizedState),(u=_t||$u(t,n,u,r,d,g,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return hs(e,t,n,r,o,i)}function hs(e,t,n,r,i,o){Kd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ou(t,n,!1),Ft(e,t,o);r=t.stateNode,Lg.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=er(t,e.child,null,o),t.child=er(t,null,s,o)):Me(e,t,s,o),t.memoizedState=r.state,i&&Ou(t,n,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),dl(e,t.containerInfo)}function Ju(e,t,n,r,i){return Zn(),al(i),t.flags|=256,Me(e,t,n,r),t.child}var fs={dehydrated:null,treeContext:null,retryLane:0};function ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xd(e,t,n){var r=t.pendingProps,i=le.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(le,i&1),e===null)return ss(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=No(a,r,0,null),e=gn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ms(n),t.memoizedState=fs,e):kl(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Wg(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Zt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Zt(s,o):(o=gn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ms(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=fs,r}return o=e.child,e=o.sibling,r=Zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kl(e,t){return t=No({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ai(e,t,n,r){return r!==null&&al(r),er(t,e.child,null,n),e=kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wg(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=fa(Error(I(422))),Ai(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=No({mode:"visible",children:r.children},i,0,null),o=gn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&er(t,e.child,null,a),t.child.memoizedState=ms(a),t.memoizedState=fs,o);if(!(t.mode&1))return Ai(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(I(419)),r=fa(o,r,void 0),Ai(e,t,a,r)}if(s=(a&e.childLanes)!==0,We||s){if(r=be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Dt(e,i),dt(r,e,i,-1))}return Pl(),r=fa(Error(I(421))),Ai(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=Kt(i.nextSibling),qe=t,ae=!0,ct=null,e!==null&&(Je[Ze++]=Ct,Je[Ze++]=It,Je[Ze++]=vn,Ct=e.id,It=e.overflow,vn=t),t=kl(t,r.children),t.flags|=4096,t)}function Zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ls(e.return,t,n)}function ma(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,n,t);else if(e.tag===19)Zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ma(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ma(t,!0,n,null,o);break;case"together":ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bg(e,t,n){switch(t.tag){case 3:Qd(t),Zn();break;case 5:Td(t);break;case 1:_e(t.type)&&oo(t);break;case 4:dl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Xd(e,t,n):(ne(le,le.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Yd(e,t,n)}return Ft(e,t,n)}var Zd,gs,eh,th;Zd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gs=function(){};eh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(bt.current);var o=null;switch(n){case"input":i=Wa(e,i),r=Wa(e,r),o=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),o=[];break;case"textarea":i=ja(e,i),r=ja(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}Va(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};th=function(e,t,n,r){n!==r&&(t.flags|=4)};function vr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _g(e,t,n){var r=t.pendingProps;switch(ol(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return _e(t.type)&&io(),Pe(t),null;case 3:return r=t.stateNode,tr(),oe(Be),oe(ze),fl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Ts(ct),ct=null))),gs(e,t),Pe(t),null;case 5:hl(t);var i=fn(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)eh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Pe(t),null}if(e=fn(bt.current),Si(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wt]=t,r[Yr]=o,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Ar.length;i++)ie(Ar[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":lu(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":cu(r,o),ie("invalid",r)}Va(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&xi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&xi(r.textContent,s,e),i=["children",""+s]):Wr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ie("scroll",r)}switch(n){case"input":fi(r),uu(r,o,!0);break;case"textarea":fi(r),pu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ro)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wt]=t,e[Yr]=r,Zd(e,t,!1,!1),t.stateNode=e;e:{switch(a=$a(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ar.length;i++)ie(Ar[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":lu(e,r),i=Wa(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ie("invalid",e);break;case"textarea":cu(e,r),i=ja(e,r),ie("invalid",e);break;default:i=r}Va(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Dp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ep(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Br(e,l):typeof l=="number"&&Br(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ie("scroll",e):l!=null&&$s(e,o,l,a))}switch(n){case"input":fi(e),uu(e,r,!1);break;case"textarea":fi(e),pu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$n(e,!!r.multiple,o,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)th(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=fn(Qr.current),fn(bt.current),Si(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Pe(t),null;case 13:if(oe(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&He!==null&&t.mode&1&&!(t.flags&128))wd(),Zn(),t.flags|=98560,o=!1;else if(o=Si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[wt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),o=!1}else ct!==null&&(Ts(ct),ct=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?we===0&&(we=3):Pl())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return tr(),gs(e,t),e===null&&Hr(t.stateNode.containerInfo),Pe(t),null;case 10:return ul(t.type._context),Pe(t),null;case 17:return _e(t.type)&&io(),Pe(t),null;case 19:if(oe(le),o=t.memoizedState,o===null)return Pe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)vr(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=po(e),a!==null){for(t.flags|=128,vr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>rr&&(t.flags|=128,r=!0,vr(o,!1),t.lanes=4194304)}else{if(!r)if(e=po(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ae)return Pe(t),null}else 2*he()-o.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,vr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Al(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function jg(e,t){switch(ol(t),t.tag){case 1:return _e(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),oe(Be),oe(ze),fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hl(t),null;case 13:if(oe(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(le),null;case 4:return tr(),null;case 10:return ul(t.type._context),null;case 22:case 23:return Al(),null;case 24:return null;default:return null}}var Pi=!1,Ce=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,N=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function ys(e,t,n){try{n()}catch(r){pe(e,t,r)}}var ec=!1;function Vg(e,t){if(es=eo,e=ad(),rl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,p=0,c=e,d=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(s=a+i),c!==o||r!==0&&c.nodeType!==3||(l=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===e)break t;if(d===n&&++u===i&&(s=a),d===o&&++p===r&&(l=a),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ts={focusedElem:e,selectionRange:n},eo=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,P=g.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:lt(t.type,b),P);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(T){pe(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return g=ec,ec=!1,g}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ys(t,n,o)}i=i.next}while(i!==r)}}function Fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nh(e){var t=e.alternate;t!==null&&(e.alternate=null,nh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[Yr],delete t[is],delete t[Ag],delete t[Pg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rh(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}var xe=null,ut=!1;function Lt(e,t,n){for(n=n.child;n!==null;)ih(e,t,n),n=n.sibling}function ih(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ao,n)}catch{}switch(n.tag){case 5:Ce||Gn(n,t);case 6:var r=xe,i=ut;xe=null,Lt(e,t,n),xe=r,ut=i,xe!==null&&(ut?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ut?(e=xe,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),Vr(e)):la(xe,n.stateNode));break;case 4:r=xe,i=ut,xe=n.stateNode.containerInfo,ut=!0,Lt(e,t,n),xe=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ys(n,t,a),i=i.next}while(i!==r)}Lt(e,t,n);break;case 1:if(!Ce&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Lt(e,t,n),Ce=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gg),t.forEach(function(r){var i=Jg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,ut=!1;break e;case 3:xe=s.stateNode.containerInfo,ut=!0;break e;case 4:xe=s.stateNode.containerInfo,ut=!0;break e}s=s.return}if(xe===null)throw Error(I(160));ih(o,a,i),xe=null,ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)oh(t,e),t=t.sibling}function oh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),gt(e),r&4){try{Dr(3,e,e.return),Fo(3,e)}catch(b){pe(e,e.return,b)}try{Dr(5,e,e.return)}catch(b){pe(e,e.return,b)}}break;case 1:st(t,e),gt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(st(t,e),gt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var i=e.stateNode;try{Br(i,"")}catch(b){pe(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Cp(i,o),$a(s,a);var u=$a(s,o);for(a=0;a<l.length;a+=2){var p=l[a],c=l[a+1];p==="style"?Dp(i,c):p==="dangerouslySetInnerHTML"?Ep(i,c):p==="children"?Br(i,c):$s(i,p,c,u)}switch(s){case"input":Ba(i,o);break;case"textarea":Ip(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?$n(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?$n(i,!!o.multiple,o.defaultValue,!0):$n(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yr]=o}catch(b){pe(e,e.return,b)}}break;case 6:if(st(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){pe(e,e.return,b)}}break;case 3:if(st(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(b){pe(e,e.return,b)}break;case 4:st(t,e),gt(e);break;case 13:st(t,e),gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Sl=he())),r&4&&nc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||p,st(t,e),Ce=u):st(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(N=e,p=e.child;p!==null;){for(c=N=p;N!==null;){switch(d=N,h=d.child,d.tag){case 0:case 11:case 14:case 15:Dr(4,d,d.return);break;case 1:Gn(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(b){pe(r,n,b)}}break;case 5:Gn(d,d.return);break;case 22:if(d.memoizedState!==null){ic(c);continue}}h!==null?(h.return=d,N=h):ic(c)}p=p.sibling}e:for(p=null,c=e;;){if(c.tag===5){if(p===null){p=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Mp("display",a))}catch(b){pe(e,e.return,b)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(b){pe(e,e.return,b)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:st(t,e),gt(e),r&4&&nc(e);break;case 21:break;default:st(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rh(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Br(i,""),r.flags&=-33);var o=tc(e);ks(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=tc(e);ws(e,s,a);break;default:throw Error(I(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $g(e,t,n){N=e,ah(e)}function ah(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Pi;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ce;s=Pi;var u=Ce;if(Pi=a,(Ce=l)&&!u)for(N=i;N!==null;)a=N,l=a.child,a.tag===22&&a.memoizedState!==null?oc(i):l!==null?(l.return=a,N=l):oc(i);for(;o!==null;)N=o,ah(o),o=o.sibling;N=i,Pi=s,Ce=u}rc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):rc(e)}}function rc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ju(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ju(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&Vr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ce||t.flags&512&&vs(t)}catch(d){pe(t,t.return,d)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ic(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function oc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fo(4,t)}catch(l){pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){pe(t,i,l)}}var o=t.return;try{vs(t)}catch(l){pe(t,o,l)}break;case 5:var a=t.return;try{vs(t)}catch(l){pe(t,a,l)}}}catch(l){pe(t,t.return,l)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var Ug=Math.ceil,mo=Rt.ReactCurrentDispatcher,bl=Rt.ReactCurrentOwner,nt=Rt.ReactCurrentBatchConfig,K=0,be=null,ge=null,Se=0,Ue=0,Vn=rn(0),we=0,ei=null,kn=0,Ro=0,xl=0,Fr=null,Le=null,Sl=0,rr=1/0,At=null,go=!1,bs=null,Xt=null,Ci=!1,$t=null,yo=0,Rr=0,xs=null,Vi=-1,$i=0;function Fe(){return K&6?he():Vi!==-1?Vi:Vi=he()}function Jt(e){return e.mode&1?K&2&&Se!==0?Se&-Se:Ig.transition!==null?($i===0&&($i=$p()),$i):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Xp(e.type)),e):1}function dt(e,t,n,r){if(50<Rr)throw Rr=0,xs=null,Error(I(185));ii(e,n,r),(!(K&2)||e!==be)&&(e===be&&(!(K&2)&&(Ro|=n),we===4&&Gt(e,Se)),je(e,r),n===1&&K===0&&!(t.mode&1)&&(rr=he()+500,Eo&&on()))}function je(e,t){var n=e.callbackNode;Im(e,t);var r=Zi(e,e===be?Se:0);if(r===0)n!==null&&fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fu(n),t===1)e.tag===0?Cg(ac.bind(null,e)):gd(ac.bind(null,e)),Sg(function(){!(K&6)&&on()}),n=null;else{switch(Up(r)){case 1:n=Ks;break;case 4:n=Gp;break;case 16:n=Ji;break;case 536870912:n=Vp;break;default:n=Ji}n=fh(n,sh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sh(e,t){if(Vi=-1,$i=0,K&6)throw Error(I(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=Zi(e,e===be?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var i=K;K|=2;var o=uh();(be!==e||Se!==t)&&(At=null,rr=he()+500,mn(e,t));do try{Yg();break}catch(s){lh(e,s)}while(!0);ll(),mo.current=o,K=i,ge!==null?t=0:(be=null,Se=0,t=we)}if(t!==0){if(t===2&&(i=Ka(e),i!==0&&(r=i,t=Ss(e,i))),t===1)throw n=ei,mn(e,0),Gt(e,r),je(e,he()),n;if(t===6)Gt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hg(i)&&(t=vo(e,r),t===2&&(o=Ka(e),o!==0&&(r=o,t=Ss(e,o))),t===1))throw n=ei,mn(e,0),Gt(e,r),je(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:cn(e,Le,At);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=Sl+500-he(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(cn.bind(null,e,Le,At),t);break}cn(e,Le,At);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-pt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ug(r/1960))-r,10<r){e.timeoutHandle=rs(cn.bind(null,e,Le,At),r);break}cn(e,Le,At);break;case 5:cn(e,Le,At);break;default:throw Error(I(329))}}}return je(e,he()),e.callbackNode===n?sh.bind(null,e):null}function Ss(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=vo(e,t),e!==2&&(t=Le,Le=n,t!==null&&Ts(t)),e}function Ts(e){Le===null?Le=e:Le.push.apply(Le,e)}function Hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~xl,t&=~Ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function ac(e){if(K&6)throw Error(I(327));Kn();var t=Zi(e,0);if(!(t&1))return je(e,he()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=Ka(e);r!==0&&(t=r,n=Ss(e,r))}if(n===1)throw n=ei,mn(e,0),Gt(e,t),je(e,he()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Le,At),je(e,he()),null}function Tl(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(rr=he()+500,Eo&&on())}}function bn(e){$t!==null&&$t.tag===0&&!(K&6)&&Kn();var t=K;K|=1;var n=nt.transition,r=Q;try{if(nt.transition=null,Q=1,e)return e()}finally{Q=r,nt.transition=n,K=t,!(K&6)&&on()}}function Al(){Ue=Vn.current,oe(Vn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xg(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(ol(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:tr(),oe(Be),oe(ze),fl();break;case 5:hl(r);break;case 4:tr();break;case 13:oe(le);break;case 19:oe(le);break;case 10:ul(r.type._context);break;case 22:case 23:Al()}n=n.return}if(be=e,ge=e=Zt(e.current,null),Se=Ue=t,we=0,ei=null,xl=Ro=kn=0,Le=Fr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}hn=null}return e}function lh(e,t){do{var n=ge;try{if(ll(),_i.current=fo,ho){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ho=!1}if(wn=0,ke=ve=ue=null,Mr=!1,Xr=0,bl.current=null,n===null||n.return===null){we=1,ei=t,ge=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=s,c=p.tag;if(!(p.mode&1)&&(c===0||c===11||c===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=qu(a);if(h!==null){h.flags&=-257,Yu(h,a,s,o,t),h.mode&1&&Hu(o,u,t),t=h,l=u;var g=t.updateQueue;if(g===null){var b=new Set;b.add(l),t.updateQueue=b}else g.add(l);break e}else{if(!(t&1)){Hu(o,u,t),Pl();break e}l=Error(I(426))}}else if(ae&&s.mode&1){var P=qu(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Yu(P,a,s,o,t),al(nr(l,s));break e}}o=l=nr(l,s),we!==4&&(we=2),Fr===null?Fr=[o]:Fr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ud(o,l,t);_u(o,f);break e;case 1:s=l;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Xt===null||!Xt.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=Hd(o,s,t);_u(o,T);break e}}o=o.return}while(o!==null)}ph(n)}catch(C){t=C,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function uh(){var e=mo.current;return mo.current=fo,e===null?fo:e}function Pl(){(we===0||we===3||we===2)&&(we=4),be===null||!(kn&268435455)&&!(Ro&268435455)||Gt(be,Se)}function vo(e,t){var n=K;K|=2;var r=uh();(be!==e||Se!==t)&&(At=null,mn(e,t));do try{qg();break}catch(i){lh(e,i)}while(!0);if(ll(),K=n,mo.current=r,ge!==null)throw Error(I(261));return be=null,Se=0,we}function qg(){for(;ge!==null;)ch(ge)}function Yg(){for(;ge!==null&&!wm();)ch(ge)}function ch(e){var t=hh(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?ph(e):ge=t,bl.current=null}function ph(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jg(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}else if(n=_g(n,t,Ue),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function cn(e,t,n){var r=Q,i=nt.transition;try{nt.transition=null,Q=1,Kg(e,t,n,r)}finally{nt.transition=i,Q=r}return null}function Kg(e,t,n,r){do Kn();while($t!==null);if(K&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zm(e,o),e===be&&(ge=be=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,fh(Ji,function(){return Kn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=nt.transition,nt.transition=null;var a=Q;Q=1;var s=K;K|=4,bl.current=null,Vg(e,n),oh(n,e),mg(ts),eo=!!es,ts=es=null,e.current=n,$g(n),km(),K=s,Q=a,nt.transition=o}else e.current=n;if(Ci&&(Ci=!1,$t=e,yo=i),o=e.pendingLanes,o===0&&(Xt=null),Sm(n.stateNode),je(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,e=bs,bs=null,e;return yo&1&&e.tag!==0&&Kn(),o=e.pendingLanes,o&1?e===xs?Rr++:(Rr=0,xs=e):Rr=0,on(),null}function Kn(){if($t!==null){var e=Up(yo),t=nt.transition,n=Q;try{if(nt.transition=null,Q=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,yo=0,K&6)throw Error(I(331));var i=K;for(K|=4,N=e.current;N!==null;){var o=N,a=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(N=u;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:Dr(8,p,o)}var c=p.child;if(c!==null)c.return=p,N=c;else for(;N!==null;){p=N;var d=p.sibling,h=p.return;if(nh(p),p===u){N=null;break}if(d!==null){d.return=h,N=d;break}N=h}}}var g=o.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}N=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,N=a;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Dr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var m=e.current;for(N=m;N!==null;){a=N;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,N=y;else e:for(a=m;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fo(9,s)}}catch(C){pe(s,s.return,C)}if(s===a){N=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,N=T;break e}N=s.return}}if(K=i,on(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ao,e)}catch{}r=!0}return r}finally{Q=n,nt.transition=t}}return!1}function sc(e,t,n){t=nr(n,t),t=Ud(e,t,1),e=Qt(e,t,1),t=Fe(),e!==null&&(ii(e,1,t),je(e,t))}function pe(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=nr(n,e),e=Hd(t,e,1),t=Qt(t,e,1),e=Fe(),t!==null&&(ii(t,1,e),je(t,e));break}}t=t.return}}function Qg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Se&n)===n&&(we===4||we===3&&(Se&130023424)===Se&&500>he()-Sl?mn(e,0):xl|=n),je(e,t)}function dh(e,t){t===0&&(e.mode&1?(t=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):t=1);var n=Fe();e=Dt(e,t),e!==null&&(ii(e,t,n),je(e,n))}function Xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dh(e,n)}function Jg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),dh(e,n)}var hh;hh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,Bg(e,t,n);We=!!(e.flags&131072)}else We=!1,ae&&t.flags&1048576&&yd(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gi(e,t),e=t.pendingProps;var i=Jn(t,ze.current);Yn(t,n),i=gl(null,t,r,e,i,n);var o=yl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,oo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pl(t),i.updater=Do,t.stateNode=i,i._reactInternals=t,cs(t,r,e,n),t=hs(null,t,r,!0,o,n)):(t.tag=0,ae&&o&&il(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ey(r),e=lt(r,e),i){case 0:t=ds(null,t,r,e,n);break e;case 1:t=Xu(null,t,r,e,n);break e;case 11:t=Ku(null,t,r,e,n);break e;case 14:t=Qu(null,t,r,lt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),ds(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Xu(e,t,r,i,n);case 3:e:{if(Qd(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sd(e,t),co(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=nr(Error(I(423)),t),t=Ju(e,t,r,n,i);break e}else if(r!==i){i=nr(Error(I(424)),t),t=Ju(e,t,r,n,i);break e}else for(He=Kt(t.stateNode.containerInfo.firstChild),qe=t,ae=!0,ct=null,n=bd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===i){t=Ft(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Td(t),e===null&&ss(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ns(r,i)?a=null:o!==null&&ns(r,o)&&(t.flags|=32),Kd(e,t),Me(e,t,a,n),t.child;case 6:return e===null&&ss(t),null;case 13:return Xd(e,t,n);case 4:return dl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Ku(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(lo,r._currentValue),r._currentValue=a,o!==null)if(ft(o.value,a)){if(o.children===i.children&&!Be.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=zt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ls(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(I(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ls(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yn(t,n),i=rt(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),Qu(e,t,r,i,n);case 15:return qd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Gi(e,t),t.tag=1,_e(r)?(e=!0,oo(t)):e=!1,Yn(t,n),$d(t,r,i),cs(t,r,i,n),hs(null,t,r,!0,e,n);case 19:return Jd(e,t,n);case 22:return Yd(e,t,n)}throw Error(I(156,t.tag))};function fh(e,t){return jp(e,t)}function Zg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new Zg(e,t,n,r)}function Cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ey(e){if(typeof e=="function")return Cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hs)return 11;if(e===qs)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Cl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Fn:return gn(n.children,i,o,t);case Us:a=8,i|=8;break;case Ra:return e=tt(12,n,t,i|2),e.elementType=Ra,e.lanes=o,e;case Na:return e=tt(13,n,t,i),e.elementType=Na,e.lanes=o,e;case Oa:return e=tt(19,n,t,i),e.elementType=Oa,e.lanes=o,e;case Tp:return No(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xp:a=10;break e;case Sp:a=9;break e;case Hs:a=11;break e;case qs:a=14;break e;case Bt:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=tt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function gn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function No(e,t,n,r){return e=tt(22,e,r,t),e.elementType=Tp,e.lanes=n,e.stateNode={isHidden:!1},e}function ga(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function ya(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ty(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Il(e,t,n,r,i,o,a,s,l){return e=new ty(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(o),e}function ny(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mh(e){if(!e)return tn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(_e(n))return md(e,n,t)}return t}function gh(e,t,n,r,i,o,a,s,l){return e=Il(n,r,!0,e,i,o,a,s,l),e.context=mh(null),n=e.current,r=Fe(),i=Jt(n),o=zt(r,i),o.callback=t??null,Qt(n,o,i),e.current.lanes=i,ii(e,i,r),je(e,r),e}function Oo(e,t,n,r){var i=t.current,o=Fe(),a=Jt(i);return n=mh(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(i,t,a),e!==null&&(dt(e,i,a,o),Bi(e,i,a)),a}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zl(e,t){lc(e,t),(e=e.alternate)&&lc(e,t)}function ry(){return null}var yh=typeof reportError=="function"?reportError:function(e){console.error(e)};function El(e){this._internalRoot=e}Lo.prototype.render=El.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Oo(e,t,null,null)};Lo.prototype.unmount=El.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Oo(null,e,null,null)}),t[Mt]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&Qp(e)}};function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function iy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=wo(a);o.call(u)}}var a=gh(t,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=a,e[Mt]=a.current,Hr(e.nodeType===8?e.parentNode:e),bn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=wo(l);s.call(u)}}var l=Il(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=l,e[Mt]=l.current,Hr(e.nodeType===8?e.parentNode:e),bn(function(){Oo(t,l,n,r)}),l}function Bo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=wo(a);s.call(l)}}Oo(t,a,e,i)}else a=iy(n,t,e,i,r);return wo(a)}Hp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(Qs(t,n|1),je(t,he()),!(K&6)&&(rr=he()+500,on()))}break;case 13:bn(function(){var r=Dt(e,1);if(r!==null){var i=Fe();dt(r,e,1,i)}}),zl(e,1)}};Xs=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Fe();dt(t,e,134217728,n)}zl(e,134217728)}};qp=function(e){if(e.tag===13){var t=Jt(e),n=Dt(e,t);if(n!==null){var r=Fe();dt(n,e,t,r)}zl(e,t)}};Yp=function(){return Q};Kp=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Ha=function(e,t,n){switch(t){case"input":if(Ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zo(r);if(!i)throw Error(I(90));Pp(r),Ba(r,i)}}}break;case"textarea":Ip(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};Np=Tl;Op=bn;var oy={usingClientEntryPoint:!1,Events:[ai,Ln,zo,Fp,Rp,Tl]},wr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ay={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bp(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||ry,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Ao=Ii.inject(ay),kt=Ii}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ml(t))throw Error(I(200));return ny(e,t,null,n)};Qe.createRoot=function(e,t){if(!Ml(e))throw Error(I(299));var n=!1,r="",i=yh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Il(e,1,!1,null,null,n,!1,r,i),e[Mt]=t.current,Hr(e.nodeType===8?e.parentNode:e),new El(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Bp(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return bn(e)};Qe.hydrate=function(e,t,n){if(!Wo(t))throw Error(I(200));return Bo(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Ml(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=yh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=gh(t,null,e,1,n??null,i,!1,o,a),e[Mt]=t.current,Hr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Lo(t)};Qe.render=function(e,t,n){if(!Wo(t))throw Error(I(200));return Bo(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Wo(e))throw Error(I(40));return e._reactRootContainer?(bn(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Tl;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wo(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Bo(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh)}catch(e){console.error(e)}}vh(),vp.exports=Qe;var sy=vp.exports,wh,cc=sy;wh=cc.createRoot,cc.hydrateRoot;const ly=[{id:"overview",title:"Overview",icon:"🧭"},{id:"problem",title:"The Problem We Solve",icon:"🔥"},{id:"core-flow",title:"Core Flow",icon:"⚡"},{id:"planning",title:"Trip Planning",icon:"📍"},{id:"collaboration",title:"Group Collaboration",icon:"👥"},{id:"photos",title:"Photo Sync",icon:"📸"},{id:"sharing",title:"Public Sharing",icon:"🌐"},{id:"monetization",title:"Monetization",icon:"💰"},{id:"technical",title:"Technical Scope",icon:"🔧"},{id:"phases",title:"Build Phases",icon:"🚀"},{id:"risks",title:"Risks & Mitigations",icon:"⚠️"}],uy={P0:{bg:"var(--callout-red-bg)",text:"var(--callout-red-text)",border:"var(--callout-red-border)"},P1:{bg:"var(--callout-amber-bg)",text:"var(--callout-amber-text)",border:"var(--callout-amber-border)"},P2:{bg:"var(--callout-blue-bg)",text:"var(--callout-blue-text)",border:"var(--callout-blue-border)"}};function cy({level:e}){const t=uy[e];return k.jsx("span",{style:{display:"inline-block",padding:"2px 10px",borderRadius:"12px",fontSize:"11px",fontWeight:700,letterSpacing:"0.5px",background:t.bg,color:t.text,border:`1px solid ${t.border}`,marginRight:"8px",fontFamily:"'JetBrains Mono', monospace"},children:e})}function se({priority:e,title:t,description:n,details:r}){const[i,o]=Ut.useState(!1);return k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"10px",padding:"16px",marginBottom:"12px",cursor:r?"pointer":"default",transition:"box-shadow 0.15s",boxShadow:i?"0 2px 12px var(--shadow-color)":"none"},onClick:()=>r&&o(!i),children:[k.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px"},children:[k.jsx(cy,{level:e}),k.jsxs("div",{style:{flex:1},children:[k.jsxs("div",{style:{fontWeight:600,fontSize:"15px",color:"var(--text-primary)",marginBottom:"4px",fontFamily:"'Source Serif 4', Georgia, serif"},children:[t,r&&k.jsx("span",{style:{marginLeft:"8px",fontSize:"12px",color:"var(--text-faint)",fontFamily:"sans-serif",fontWeight:400},children:i?"▾":"▸"})]}),k.jsx("div",{style:{fontSize:"13.5px",color:"var(--text-muted)",lineHeight:1.5,fontFamily:"'IBM Plex Sans', system-ui, sans-serif"},children:n})]})]}),i&&r&&k.jsx("div",{style:{marginTop:"12px",paddingTop:"12px",borderTop:"1px solid var(--border-light)",fontSize:"13px",color:"var(--text-secondary)",lineHeight:1.65,fontFamily:"'IBM Plex Sans', system-ui, sans-serif"},children:r.map((a,s)=>k.jsx("div",{style:{marginBottom:"6px",paddingLeft:"12px",borderLeft:"2px solid var(--border)"},children:a},s))})]})}function zi({number:e,title:t,weeks:n,items:r,color:i}){return k.jsxs("div",{style:{background:"var(--bg-card)",border:`2px solid ${i}`,borderRadius:"12px",padding:"20px",marginBottom:"16px"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[k.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:i,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"16px",fontFamily:"'JetBrains Mono', monospace"},children:e}),k.jsxs("div",{children:[k.jsx("div",{style:{fontWeight:700,fontSize:"16px",color:"var(--text-primary)",fontFamily:"'Source Serif 4', Georgia, serif"},children:t}),k.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",fontFamily:"'JetBrains Mono', monospace"},children:n})]})]}),r.map((o,a)=>k.jsx("div",{style:{padding:"8px 12px",fontSize:"13.5px",color:"var(--text-secondary)",borderLeft:`3px solid ${i}`,marginBottom:"6px",marginLeft:"18px",lineHeight:1.5,fontFamily:"'IBM Plex Sans', system-ui, sans-serif"},children:o},a))]})}function py(){const[e,t]=Ut.useState("overview");return k.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-page)",fontFamily:"'IBM Plex Sans', system-ui, sans-serif"},children:[k.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700;8..60,800&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",rel:"stylesheet"}),k.jsx("div",{style:{background:"linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",padding:"40px 24px 32px",color:"#fff"},children:k.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[k.jsx("div",{style:{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:"#94a3b8",marginBottom:"8px",fontFamily:"'JetBrains Mono', monospace"},children:"Product Proposal · v1.0"}),k.jsx("h1",{style:{fontSize:"36px",fontWeight:800,margin:"0 0 8px",fontFamily:"'Source Serif 4', Georgia, serif",letterSpacing:"-0.5px"},children:"TripSquad"}),k.jsx("p",{style:{fontSize:"17px",color:"#cbd5e1",margin:0,lineHeight:1.5,maxWidth:"600px"},children:"One link. Everyone plans. Nobody downloads a spreadsheet. The group trip coordinator that replaces WhatsApp + Google Docs + Splitwise."}),k.jsxs("div",{style:{marginTop:"20px",display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"12px",fontFamily:"'JetBrains Mono', monospace"},children:[k.jsxs("span",{style:{color:"#94a3b8"},children:["Platform: ",k.jsx("span",{style:{color:"#e2e8f0"},children:"iOS first"})]}),k.jsxs("span",{style:{color:"#94a3b8"},children:["Team: ",k.jsx("span",{style:{color:"#e2e8f0"},children:"2 engineers"})]}),k.jsxs("span",{style:{color:"#94a3b8"},children:["Target: ",k.jsx("span",{style:{color:"#e2e8f0"},children:"8-week MVP"})]})]})]})}),k.jsx("div",{style:{background:"var(--bg-card)",borderBottom:"1px solid var(--border)",position:"sticky",top:0,zIndex:10,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:k.jsx("div",{style:{display:"flex",gap:"0",padding:"0 16px"},children:ly.map(n=>k.jsxs("button",{onClick:()=>t(n.id),style:{padding:"12px 14px",fontSize:"12px",fontWeight:e===n.id?700:500,color:e===n.id?"var(--text-primary)":"var(--text-muted)",background:"none",border:"none",borderBottom:e===n.id?"2px solid var(--text-primary)":"2px solid transparent",cursor:"pointer",whiteSpace:"nowrap",fontFamily:"'IBM Plex Sans', system-ui, sans-serif",transition:"all 0.15s"},children:[k.jsx("span",{style:{marginRight:"4px"},children:n.icon}),n.title]},n.id))})}),k.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"32px 24px 80px"},children:[e==="overview"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"16px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"What is TripSquad?"}),k.jsx("p",{style:{fontSize:"15px",lineHeight:1.7,color:"var(--text-secondary)",marginBottom:"20px"},children:"TripSquad is an iOS app that replaces the WhatsApp group chat + Google Doc + Splitwise stack for planning group trips. One person creates a trip, drops a pin on a city, and gets a shareable link. Everyone else opens the link — no spreadsheet, no chaos — and collaborates on a single living plan with polls, voting, a timeline, and photo sync."}),k.jsx("p",{style:{fontSize:"15px",lineHeight:1.7,color:"var(--text-secondary)",marginBottom:"20px"},children:"After the trip, the whole experience — timeline, photos, map — becomes a shareable artifact. Vloggers and travel creators link it in their video descriptions so viewers can clone entire trips as templates or cherry-pick individual spots."}),k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"12px",padding:"20px",marginBottom:"20px"},children:[k.jsx("div",{style:{fontSize:"13px",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"12px",fontFamily:"'JetBrains Mono', monospace"},children:"Core thesis"}),k.jsx("div",{style:{fontSize:"17px",lineHeight:1.6,color:"var(--text-primary)",fontStyle:"italic",fontFamily:"'Source Serif 4', Georgia, serif"},children:`"Group trips don't fail because people can't find places to go. They fail because 6 people can't decide in a WhatsApp thread. We fix the decision layer — then the plan builds itself."`})]}),k.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[{label:"Target user",value:"The group trip organizer (the friend who always plans)"},{label:"Trip size",value:"3–10 people"},{label:"Trip type",value:"Multi-day leisure trips (weekends, vacations)"},{label:"Cold start",value:"1 organizer invites 4–8 people per trip"}].map((n,r)=>k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"8px",padding:"14px"},children:[k.jsx("div",{style:{fontSize:"11px",color:"var(--text-faint)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"4px",fontFamily:"'JetBrains Mono', monospace"},children:n.label}),k.jsx("div",{style:{fontSize:"14px",color:"var(--text-primary)",fontWeight:500},children:n.value})]},r))})]}),e==="problem"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"16px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"The Problem We Solve"}),k.jsx("p",{style:{fontSize:"15px",lineHeight:1.7,color:"var(--text-secondary)",marginBottom:"20px"},children:"Every group trip today is planned through the same broken stack. The research confirms this isn't a theoretical problem — it's the single most consistently complained-about travel workflow across Reddit, travel forums, app reviews, and independent travel guides."}),k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"12px",padding:"20px",marginBottom:"20px"},children:[k.jsx("div",{style:{fontSize:"13px",fontWeight:700,color:"var(--callout-red-text)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"16px",fontFamily:"'JetBrains Mono', monospace"},children:"The current stack (what we replace)"}),[{app:"WhatsApp / iMessage",job:"Coordination & suggestions",broken:"Links get buried in 47 messages. No structure, no decisions, no record."},{app:"Google Docs / Notes",job:"The shared itinerary",broken:"One person maintains it. Nobody else reads it. Version confusion."},{app:"Splitwise",job:"Splitting costs",broken:"Disconnected from the trip plan. Manual entry. Currency conversion paywalled."},{app:"Google Maps",job:"Finding places",broken:"Can't share collections that everyone can edit and vote on."},{app:"Doodle / When2meet",job:"Date polling",broken:"Yet another tool. Results don't connect to the trip plan."}].map((n,r)=>k.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"14px",fontSize:"13.5px"},children:[k.jsx("div",{style:{width:"130px",flexShrink:0,fontWeight:600,color:"var(--text-primary)"},children:n.app}),k.jsxs("div",{style:{flex:1},children:[k.jsx("span",{style:{color:"var(--text-muted)"},children:n.job}),k.jsxs("div",{style:{color:"var(--callout-red-text)",marginTop:"2px",fontSize:"12.5px"},children:["→ ",n.broken]})]})]},r))]}),k.jsxs("div",{style:{background:"var(--callout-amber-bg)",border:"1px solid var(--callout-amber-border)",borderRadius:"10px",padding:"16px",fontSize:"14px",lineHeight:1.6,color:"var(--callout-amber-text)"},children:[k.jsx("strong",{children:"Why this is a painkiller, not a vitamin:"}),` Unlike solo trip planning (which people tolerate), group coordination has real social costs — resentment toward the organizer, budget fights that ruin friendships, and trips that simply don't happen because the WhatsApp thread died. The organizer who "always ends up doing everything" is the person who will pay to make it stop.`]})]}),e==="core-flow"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"16px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"Core User Flow"}),k.jsx("p",{style:{fontSize:"15px",lineHeight:1.7,color:"var(--text-secondary)",marginBottom:"24px"},children:"The entire product can be understood as one flow with five stages. Each stage solves a distinct problem in the group trip lifecycle."}),[{step:"1",title:"Create & Pin",who:"Organizer",desc:"Open app → Create trip → Drop a pin on a city (or search). The app surfaces famous places, landmarks, and top-rated spots in and around that area. Organizer can immediately add spots to a shared shortlist or leave it open for the group.",color:"#2563eb"},{step:"2",title:"Invite & Discover",who:"Organizer → Group",desc:"Organizer shares a link (iMessage, WhatsApp, email). Group members open the link and land in the trip. They browse the area's famous places, search for their own, and add anything to the shared shortlist. No friction — everyone can contribute from the moment they join.",color:"#7c3aed"},{step:"3",title:"Vote & Decide",who:"Everyone",desc:"Every place on the shortlist gets a poll. Swipe right/left or tap yes/no/maybe. The organizer sees ranked results and promotes winners to the timeline. For contested picks (beach vs. museum), the group can see the vote split and discuss in-context — not in a separate chat thread.",color:"#059669"},{step:"4",title:"Build the Timeline",who:"Everyone, Organizer finalizes",desc:"Promoted places slot into a day-by-day timeline. The app suggests logical ordering based on geography (cluster nearby spots on the same day). Anyone can drag to rearrange. Organizer can lock days when finalized. Travel time between spots is shown automatically.",color:"#d97706"},{step:"5",title:"Go, Capture, Share",who:"Everyone",desc:"During and after the trip: photos auto-tag to the timeline by GPS/timestamp. Each person confirms which photos to contribute. Duplicates are suppressed. One tap to share the entire trip — as a visual timeline with photos on a map — with anyone, or publish it as a public template.",color:"#dc2626"}].map(n=>k.jsxs("div",{style:{display:"flex",gap:"16px",marginBottom:"20px",alignItems:"flex-start"},children:[k.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:n.color,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"18px",flexShrink:0,fontFamily:"'JetBrains Mono', monospace"},children:n.step}),k.jsxs("div",{style:{flex:1},children:[k.jsx("div",{style:{fontWeight:700,fontSize:"16px",color:"var(--text-primary)",fontFamily:"'Source Serif 4', Georgia, serif"},children:n.title}),k.jsx("div",{style:{fontSize:"11px",color:n.color,fontWeight:600,marginBottom:"4px",fontFamily:"'JetBrains Mono', monospace"},children:n.who}),k.jsx("div",{style:{fontSize:"14px",color:"var(--text-secondary)",lineHeight:1.6},children:n.desc})]})]},n.step))]}),e==="planning"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"Trip Planning Features"}),k.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",marginBottom:"20px"},children:"Tap any feature to see implementation details. Priority: P0 = MVP must-have, P1 = week 6–8, P2 = post-launch."}),k.jsx(se,{priority:"P0",title:"Drop-a-Pin City Selection",description:"Tap the map or search for a city. This is the starting action for every trip.",details:["Map view with search bar at top. Supports city-level and region-level pins.","On pin drop: reverse geocode to city name, store coordinates + bounding box.","Immediately triggers the Famous Places feed for that area.","Multiple pins supported (multi-city trips) — each pin gets its own place feed."]}),k.jsx(se,{priority:"P0",title:"Famous Places Feed",description:"After pinning a city, the app surfaces top-rated and famous places in and around the area — restaurants, landmarks, activities, viewpoints.",details:["Powered by Google Places API (or Foursquare as fallback). Categorized: eat, see, do, stay.","Each place shows: name, photo, rating, category, distance from city center.","One-tap to add any place to the trip's shared shortlist.","Search within the feed for specific types ('ramen', 'sunset viewpoint', 'museum').","AI suggestion layer (P1): once the timeline has dates and some spots, suggest gap-fillers based on what's popular nearby and what times are open."]}),k.jsx(se,{priority:"P0",title:"Day-by-Day Timeline",description:"Places promoted from the shortlist slot into a visual day-by-day timeline. Drag to reorder. Tap to see details.",details:["Each day is a vertical list of activities in time order.","Auto-calculate travel time between consecutive spots (driving/walking/transit via Maps API).","Show open/close hours per venue where available.","Drag-and-drop between days. Reordering triggers travel-time recalculation.","Color-coded by category (eat = orange, see = blue, do = green).","Organizer can 'lock' a day to prevent further edits."]}),k.jsx(se,{priority:"P1",title:"Smart Suggestions on Timeline Gaps",description:"Once a timeline has some spots placed, the app notices gaps (empty mornings, long idle windows) and suggests nearby places that fit.",details:["Gap detection: if Day 2 has an activity at 10am and another at 4pm, suggest something for the middle.","Suggestions ranked by: proximity to adjacent spots, rating, category diversity (don't suggest 3 museums in a row).","Suggestions appear as ghost cards in the timeline — tap to add, swipe to dismiss.","This is where light AI can add value without being the core product."]}),k.jsx(se,{priority:"P0",title:"Map View",description:"All shortlisted and timeline-placed spots shown on a single map. Color-coded by day.",details:["Toggle between map view and timeline view.","Tap a pin on the map to see the place card (name, photo, which day it's on, vote count).","Route lines connecting same-day spots to visualize the day's flow.","Cluster view when zoomed out; individual pins when zoomed in."]}),k.jsx(se,{priority:"P2",title:"Export to Google Maps / Apple Maps",description:"One-tap export of a day's itinerary to native maps for turn-by-turn navigation.",details:["Generates a Google Maps URL with waypoints in order.","Alternatively opens Apple Maps with the route.","Solves the 'we planned it but now we're driving around lost' problem."]})]}),e==="collaboration"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"Group Collaboration Features"}),k.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",marginBottom:"20px"},children:"This is the core differentiator. Every feature is designed so the organizer stops being the bottleneck and the group makes decisions together without chaos."}),k.jsx(se,{priority:"P0",title:"Shareable Trip Link",description:"One link to join the trip. Invitees get full access to browse, add places, and vote. The exact access model (account required vs. guest) is TBD for implementation.",details:["Organizer taps 'Invite' → generates a unique URL.","Shareable via iMessage, WhatsApp, email, or any messaging app.","Link opens the trip in-app (if installed) or falls back to a web preview with an App Store prompt.","Access model for invitees is an implementation decision to be finalized during development — options range from no-account (name only) to lightweight email signup."]}),k.jsx(se,{priority:"P0",title:"Shared Shortlist with Voting",description:"Anyone in the trip can add places to a shared shortlist. Every place gets an inline poll — swipe or tap yes/no/maybe.",details:["Shortlist is the staging area. Places live here until promoted to the timeline.","Each place shows: total votes, vote breakdown (who said yes/no/maybe).","Sort shortlist by: most votes, most recent, category.","Anyone can add places at any time — from the Famous Places feed, from search, or by pasting a Google Maps link.","Discussion thread per place (short comments, not a full chat) — keeps context next to the decision, not in WhatsApp."]}),k.jsx(se,{priority:"P0",title:"Organizer Promotes to Timeline",description:"The organizer reviews vote results and promotes winning places to the day-by-day timeline. The group suggests, the organizer decides.",details:["Promote button on any shortlisted place. Organizer picks which day and rough time slot.","Batch promote: select multiple places and auto-assign to a day based on geography.","Demote: move a timeline item back to the shortlist if plans change.","The organizer role can be shared (co-organizers) for larger groups."]}),k.jsx(se,{priority:"P1",title:"Date Polling",description:"Before the trip has dates, the organizer can create a date poll — everyone marks which date ranges work for them.",details:["Organizer sets candidate date ranges (e.g., 'June 12–15' vs 'June 19–22').","Each member marks available / not available / flexible per range.","Results shown as a heat map — green = everyone available, red = conflicts.","Once decided, the organizer locks the dates and the timeline maps to real calendar days."]}),k.jsx(se,{priority:"P2",title:"In-Trip Expense Splitting",description:"Basic expense tracking built into the trip. Someone pays for dinner — log it, split it, settle up at the end.",details:["Add an expense: amount, who paid, split equally or custom.","Running balance per person: 'Alex owes Maria $47'.","Settlement suggestions at trip end: minimum number of transfers to settle all debts.","Currency conversion for international trips (potential paid feature).","This is P2 because Splitwise exists and works. Only build this if user research shows people want it in the same app."]}),k.jsx(se,{priority:"P1",title:"Real-Time Activity Feed",description:"A chronological feed showing what's happening in the trip — who added a place, who voted, who promoted something to the timeline.",details:["Keeps everyone aware of changes without push-notification overload.","Lightweight: just a feed, not a chat. No replies, no threads.","Push notifications only for: new place added, vote results ready, timeline finalized by organizer."]})]}),e==="photos"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"Photo Sync & Timeline Tagging"}),k.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",marginBottom:"20px"},children:`The group trip's shared photo album — without the "send me your pics" WhatsApp thread. Photos auto-tag to the timeline, duplicates are suppressed, and sharing the whole trip is one tap.`}),k.jsx(se,{priority:"P0",title:"Auto-Detect & Suggest Upload",description:"After (or during) the trip, the app scans your camera roll for photos matching the trip's dates and locations. It suggests which photos to contribute — you confirm before anything uploads.",details:["Uses iOS Photo Library access: filter by date range (trip start → trip end) and GPS coordinates (within radius of any timeline activity).","Presents matched photos in a review screen: 'We found 43 photos from your trip. Select which to share.'","Default: all matched photos are pre-selected. User can deselect any.","Upload only happens after explicit confirmation. No surprise uploads.","Also supports manual selection: browse camera roll and pick photos yourself."]}),k.jsx(se,{priority:"P0",title:"Auto-Tag to Timeline",description:"Each uploaded photo is automatically matched to the nearest activity on the timeline by GPS coordinates and timestamp.",details:["Matching logic: (1) find the timeline activity whose GPS coordinates are closest to the photo's GPS, within a 500m radius; (2) if multiple candidates, pick the one whose time window best matches the photo timestamp.","Photos that don't match any activity go into an 'Unassigned' bucket — the user can manually drag them to an activity.","Each activity on the timeline shows a photo count badge and a mini gallery preview."]}),k.jsx(se,{priority:"P1",title:"Duplicate Suppression",description:"When multiple people upload photos of the same moment, the app detects near-duplicates and keeps the best one (or lets the group pick).",details:["Detection method: perceptual hash (pHash) comparison on thumbnails. Photos taken within 30 seconds of each other at the same GPS location are flagged as potential duplicates.","Default behavior: keep all but group them. Show one in the main timeline; tap to see all versions.","Optional: auto-pick the 'best' (highest resolution, least blurry) and archive the rest."]}),k.jsx(se,{priority:"P0",title:"Shared Photo Timeline View",description:"Everyone in the trip sees the same photo timeline — a unified view of everyone's photos, organized by day and activity.",details:["Scroll through the trip day by day. Each activity shows its tagged photos.","Filter by contributor ('Show only Maria's photos').","Tap any photo to see full-screen with metadata: who took it, when, where.","This is the core of the post-trip experience — the trip record everyone can revisit."]}),k.jsx(se,{priority:"P1",title:"One-Tap Share Package",description:"Share the entire trip's photo timeline with one button — as a link, not as 200 individual photos in a WhatsApp thread.",details:["Generates a shareable link to a web view of the trip: map + timeline + photos.","Recipients don't need the app — it's a web page.","Option to download all photos as a zip (organized by day).","This is also the basis for the public sharing / vlogger feature."]}),k.jsx(se,{priority:"P2",title:"Notification to Contribute",description:"After the trip ends, send a push notification to all group members: 'The trip is over! Share your photos with the group.'",details:["Triggered 24 hours after the trip end date.","Links directly to the auto-detect review screen.","Follow-up reminder after 3 days if the person hasn't contributed.","Solves the 'I forgot to send my photos' problem permanently."]})]}),e==="sharing"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"Public Sharing & Creator Distribution"}),k.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",marginBottom:"20px"},children:"Every completed trip is a shareable artifact. For regular users, it's a memory they send to friends. For vloggers and travel creators, it's a link in their video description that drives organic installs."}),k.jsx(se,{priority:"P1",title:"Public Trip Page",description:"A web-hosted page showing the full trip: interactive map with pins, day-by-day timeline, photos at each stop. No app needed to view.",details:["Rendered as a responsive web page at tripsquad.app/trip/{id}.","Interactive map: pins for each activity, color-coded by day, route lines between stops.","Timeline view: scroll through days, see photos, read notes/descriptions.","Gallery view: all photos organized by activity.","SEO-indexable: 'Best things to do in Lisbon' → real trips with real photos rank organically."]}),k.jsx(se,{priority:"P1",title:"Clone Full Trip as Template",description:"A viewer sees a trip they love and clones it into their own account as a starting template. All places and timeline intact — they customize dates, add/remove spots, invite their own group.",details:["One button: 'Use this trip as a template.'","Creates a new trip in the viewer's account pre-populated with all places and the day structure.","Photos and notes from the original are NOT cloned (privacy). Only places and timeline.","The viewer's group can then vote, edit, and make it their own."]}),k.jsx(se,{priority:"P1",title:"Cherry-Pick Individual Spots",description:"Instead of cloning the whole trip, a viewer can tap any individual activity and save it to their own trip.",details:["'Add to my trip' button on each activity card in the public view.","Saved spots go into the viewer's shortlist on their own trip.","If the viewer doesn't have a trip yet, saving a spot prompts them to create one."]}),k.jsx(se,{priority:"P1",title:"Creator / Vlogger Link",description:"Travel YouTubers and bloggers plan their trip in TripSquad. After the trip, they publish it and drop the link in their video description. Viewers explore the interactive map, clone the trip, and become users.",details:["This is the primary organic growth channel, modeled after Strava's activity-sharing loop.","Creator workflow: plan trip → take trip → photos auto-tag → tap 'Publish' → get a public link.","The link in a YouTube description targets high-intent viewers (they just watched a travel vlog — they want to go there).","Vlogger's call-to-action: 'Full interactive itinerary linked below — clone it and make it your own.'","No special 'creator' tier needed in v1. Every user can publish a trip publicly."]}),k.jsx(se,{priority:"P2",title:"Discover Feed (Future)",description:"A browse-and-discover feed of publicly shared trips, searchable by destination.",details:["Not in v1. The public trip pages + SEO + creator sharing generate the initial content inventory.","Once there are 1,000+ public trips: build a simple discovery page.","Search: 'trips in Portugal', 'road trips in Scotland', '5-day Japan itinerary.'","Ranked by: recency, photo quality, clone count."]})]}),e==="monetization"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"Monetization Strategy"}),k.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",marginBottom:"20px"},children:"Based on what actually works in travel apps (Polarsteps, Flighty, Splitwise), not theoretical SaaS pricing. Three proven patterns, ranked by fit."}),k.jsxs("div",{style:{background:"var(--bg-card)",border:"2px solid #059669",borderRadius:"12px",padding:"20px",marginBottom:"20px"},children:[k.jsx("div",{style:{fontSize:"13px",fontWeight:700,color:"#059669",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"8px",fontFamily:"'JetBrains Mono', monospace"},children:"Recommended · Primary Revenue"}),k.jsx("div",{style:{fontSize:"18px",fontWeight:700,color:"var(--text-primary)",marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif"},children:"Organizer Pro — $39/year or $4.99/month"}),k.jsx("div",{style:{fontSize:"14px",color:"var(--text-secondary)",lineHeight:1.65,marginBottom:"12px"},children:"The organizer pays. Group members always free. This mirrors the Splitwise pattern: the person who cares most about the tool (the organizer-personality) converts at 3–5x the rate of casual users. The paywall gates power-organizer features, not basic collaboration."}),k.jsxs("div",{style:{fontSize:"13px",color:"var(--text-muted)",lineHeight:1.6},children:[k.jsx("strong",{children:"Free tier:"})," Unlimited trips, up to 8 group members, shared shortlist with voting, basic timeline, photo sync (50 photos per trip), 1 public trip link."]}),k.jsxs("div",{style:{fontSize:"13px",color:"var(--text-muted)",lineHeight:1.6,marginTop:"8px"},children:[k.jsx("strong",{children:"Pro tier unlocks:"})," Unlimited group size, unlimited photo sync, unlimited public trip links, date polling, expense splitting with multi-currency, AI timeline suggestions, export to Google Maps, priority photo-book printing (future)."]})]}),k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"12px",padding:"20px",marginBottom:"20px"},children:[k.jsx("div",{style:{fontSize:"13px",fontWeight:700,color:"#d97706",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"8px",fontFamily:"'JetBrains Mono', monospace"},children:"Future · High-Margin Add-On"}),k.jsx("div",{style:{fontSize:"18px",fontWeight:700,color:"var(--text-primary)",marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif"},children:"Printed Photo Books — €36–€150 per book"}),k.jsx("div",{style:{fontSize:"14px",color:"var(--text-secondary)",lineHeight:1.65},children:"Polarsteps' proven model: users generate trip content for free, then pay for a physical artifact at the emotional peak (just got home, memories are fresh). The photo timeline we build is the perfect raw material for an auto-generated photo book. Partner with a print-on-demand service (Peecho, Printful) — no inventory, no shipping logistics on our end. This is the highest-margin revenue stream in consumer travel ($10M ARR for Polarsteps on books alone)."})]}),k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"12px",padding:"20px",marginBottom:"20px"},children:[k.jsx("div",{style:{fontSize:"13px",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"8px",fontFamily:"'JetBrains Mono', monospace"},children:"Future · Affiliate"}),k.jsx("div",{style:{fontSize:"18px",fontWeight:700,color:"var(--text-primary)",marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif"},children:"Booking Affiliate Links"}),k.jsx("div",{style:{fontSize:"14px",color:"var(--text-secondary)",lineHeight:1.65},children:'When a place on the timeline is a bookable hotel, restaurant, or experience, show a "Book this" button powered by affiliate programs (Booking.com, GetYourGuide, Viator). Earn 3–8% per booking. Only pursue this after 10K+ monthly active trips generate enough volume.'})]}),k.jsxs("div",{style:{background:"var(--bg-subtle)",border:"1px dashed var(--border-muted)",borderRadius:"10px",padding:"16px",fontSize:"13px",lineHeight:1.6,color:"var(--text-muted)"},children:[k.jsx("strong",{children:"Why NOT per-trip pricing:"})," Per-trip pricing ($5/trip) sounds simple but creates friction at the exact moment of highest enthusiasm. Annual subscription converts the organizer once and they plan 3–6 trips/year — higher LTV, lower churn. Splitwise, Flighty, and TripIt all use annual subscriptions, not per-use pricing."]})]}),e==="technical"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"Technical Scope & Architecture"}),k.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",marginBottom:"20px"},children:"What two engineers need to build, and what they can defer. Designed for 8-week MVP feasibility."}),k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"12px",padding:"20px",marginBottom:"16px"},children:[k.jsx("div",{style:{fontSize:"14px",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px",fontFamily:"'Source Serif 4', Georgia, serif"},children:"iOS App (Swift / SwiftUI)"}),["Map view (MapKit) with pin-drop, place search, and route lines","Trip creation flow with day-by-day timeline (drag-and-drop via native gestures)","Shortlist with inline voting UI (swipe cards or yes/no/maybe buttons)","Photo library access (PhotoKit) for auto-detect + manual selection","Photo upload with GPS/timestamp metadata for auto-tagging","Push notifications (APNs) for trip invites, vote results, photo contribution reminders","Deep linking for shareable trip URLs (Universal Links)"].map((n,r)=>k.jsx("div",{style:{fontSize:"13.5px",color:"var(--text-secondary)",padding:"6px 0 6px 12px",borderLeft:"2px solid var(--border)",marginBottom:"4px"},children:n},r))]}),k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"12px",padding:"20px",marginBottom:"16px"},children:[k.jsx("div",{style:{fontSize:"14px",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px",fontFamily:"'Source Serif 4', Georgia, serif"},children:"Backend"}),["Real-time sync for collaborative editing (consider Supabase Realtime or Firebase)","REST/GraphQL API for trip CRUD, place search proxy, vote tallying","Google Places API integration (place search, place details, photos)","Photo storage (S3-compatible) with thumbnail generation","Perceptual hashing for duplicate detection (server-side)","Auth (email + Apple Sign In at minimum)","Public trip page renderer (server-side rendered web page or static site per trip)"].map((n,r)=>k.jsx("div",{style:{fontSize:"13.5px",color:"var(--text-secondary)",padding:"6px 0 6px 12px",borderLeft:"2px solid var(--border)",marginBottom:"4px"},children:n},r))]}),k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"12px",padding:"20px",marginBottom:"16px"},children:[k.jsx("div",{style:{fontSize:"14px",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px",fontFamily:"'Source Serif 4', Georgia, serif"},children:"External APIs & Services"}),["Google Places API — place search, details, photos ($17 per 1K detail requests)","MapKit / Google Maps SDK — map rendering, directions, travel time","Apple Push Notification Service — notifications","S3 / Cloudflare R2 — photo storage (R2 has free egress, significantly cheaper)","Supabase or Firebase — real-time sync, auth, database","Optional: OpenAI API — for smart timeline suggestions (P1, not MVP)"].map((n,r)=>k.jsx("div",{style:{fontSize:"13.5px",color:"var(--text-secondary)",padding:"6px 0 6px 12px",borderLeft:"2px solid var(--border)",marginBottom:"4px"},children:n},r))]}),k.jsxs("div",{style:{background:"var(--callout-amber-bg)",border:"1px solid var(--callout-amber-border)",borderRadius:"10px",padding:"16px",fontSize:"13px",lineHeight:1.6,color:"var(--callout-amber-text)"},children:[k.jsx("strong",{children:"Cost estimate (pre-scale):"})," At 1,000 monthly active trips with ~5 people each: Google Places API ~$85/mo, photo storage ~$20/mo, Supabase ~$25/mo, Apple Developer $99/yr. Total: ~$140/month + $99/year. Manageable for bootstrapping."]})]}),e==="phases"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"Build Phases"}),k.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",marginBottom:"20px"},children:"Ruthlessly scoped to what two engineers can ship. Each phase has a kill/continue decision point."}),k.jsx(zi,{number:1,title:"Core Loop — Plan & Invite",weeks:"Weeks 1–4",color:"#2563eb",items:["Trip creation: name + city pin drop","Famous Places feed from Google Places API","Shared shortlist: add places, yes/no/maybe voting","Shareable invite link (deep link into app)","Organizer promotes voted places to day-by-day timeline","Basic map view with pins","Auth: Apple Sign In + email"]}),k.jsxs("div",{style:{background:"var(--callout-blue-bg)",borderRadius:"8px",padding:"12px 16px",marginBottom:"20px",fontSize:"13px",color:"var(--callout-blue-text)"},children:[k.jsx("strong",{children:"Decision point (week 4):"})," Can you get 5 real friend groups to plan a real trip using the app? If yes → continue. If nobody shares the link to their group → re-evaluate the invite flow."]}),k.jsx(zi,{number:2,title:"Photos & Polish",weeks:"Weeks 5–8",color:"#7c3aed",items:["Photo auto-detect from camera roll (by trip dates + GPS)","Photo upload with auto-tag to timeline activities","Shared photo timeline view (everyone sees all contributed photos)","Basic duplicate detection (perceptual hash)","Date polling for the group","Activity feed (who added what, vote results)","Push notifications: invites, votes, photo contribution reminder","Public trip page (web-hosted, read-only, shareable link)"]}),k.jsxs("div",{style:{background:"var(--callout-purple-bg)",borderRadius:"8px",padding:"12px 16px",marginBottom:"20px",fontSize:"13px",color:"var(--callout-purple-text)"},children:[k.jsx("strong",{children:"Decision point (week 8):"})," Launch to TestFlight beta. Target: 20 completed trips with photos. Measure: do people actually share the public trip link? If share rate ",">"," 15% of completed trips → the growth loop works. If ","<"," 5% → sharing isn't a natural behavior and the Strava model fails."]}),k.jsx(zi,{number:3,title:"Growth & Monetization",weeks:"Months 3–4",color:"#059669",items:["Clone / cherry-pick from public trips","Organizer Pro subscription (paywall: unlimited photos, group size, date polls)","AI timeline suggestions (fill gaps, smart ordering)","Expense splitting (basic: equal split, who-paid-what, settlement math)","App Store launch","Creator outreach: seed 10 travel YouTubers with the app"]}),k.jsxs("div",{style:{background:"var(--callout-green-bg)",borderRadius:"8px",padding:"12px 16px",marginBottom:"20px",fontSize:"13px",color:"var(--callout-green-text)"},children:[k.jsx("strong",{children:"Decision point (month 4):"})," 100+ organizers have created trips. 10+ public trips cloned. 5%+ of organizers converted to Pro. If yes → you have a business. If no → diagnose which part of the funnel breaks."]}),k.jsx(zi,{number:4,title:"Scale & Expand",weeks:"Months 5–12",color:"#d97706",items:["Photo book printing (partner with Peecho/Printful)","Discover feed (browse public trips by destination)","Multi-currency expense splitting","Export to Google Maps / Apple Maps","Android app (if iOS validates)","Booking affiliate links (hotels, experiences)","SEO optimization for public trip pages"]})]}),e==="risks"&&k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif",color:"var(--text-primary)"},children:"Risks & Mitigations"}),k.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",marginBottom:"20px"},children:"Every risk from the viability report, cross-referenced with the research, and what this proposal does about each one."}),[{risk:"Vitamin, not painkiller",severity:"High",from:"Viability report #1",mitigation:"We narrowed to group coordination — the one area where pain is acute and documented. The organizer who does everything is a real person with real resentment. Solo trip planning is a vitamin; group trip chaos is a painkiller for the organizer.",color:"#dc2626"},{risk:"18+ month time-to-differentiation",severity:"High",from:"Viability report #2",mitigation:"The full AI-learning vision takes 18 months. This proposal doesn't depend on it. The v1 differentiator is the voting/shortlist/timeline combo — that's useful on trip #1, not trip #3. AI suggestions are P1, not the core.",color:"#dc2626"},{risk:"Consumer app economics (2–4% conversion)",severity:"High",from:"Viability report #3",mitigation:"We target the organizer, not the group. The organizer converts at 3–5x the rate of a random user (Splitwise pattern). And group members are free — they're distribution, not revenue. One organizer brings in 4–8 free users who see the product.",color:"#dc2626"},{risk:"Cold-start problem on three dimensions",severity:"High",from:"Viability report #6",mitigation:"Eliminated two of the three cold starts. We don't need trip history for AI learning (no AI dependency in v1). We don't need a content library (Famous Places come from Google Places API, not user-generated content). The only cold start is: one organizer needs to invite their group. That's the natural behavior — the organizer is already the person who starts the WhatsApp chat.",color:"#dc2626"},{risk:"Google risk (Gemini + Maps)",severity:"Medium",from:"Viability report #7",mitigation:"Google will never build group voting, social shortlists, or friend-group expense splitting inside Maps. Those are social features, not navigation features. Google killed Google Trips because it kept folding features into Maps — and Maps can't do social. Our moat is the group layer, not the places data.",color:"#d97706"},{risk:"No designer on the team",severity:"Medium",from:"Viability report (feasibility)",mitigation:"iOS native (SwiftUI) provides strong defaults. The product is fundamentally a list (shortlist), a vote (yes/no), and a timeline (vertical scroll) — not a complex visual design challenge. Ship functional, polish iteratively.",color:"#d97706"},{risk:"Photo storage costs at scale",severity:"Medium",from:"Technical",mitigation:"Use Cloudflare R2 (free egress). Compress uploads to 2048px max dimension. Limit free tier to 50 photos/trip. At 10K trips/month × 50 photos × 500KB = ~250GB/month = ~$4/month on R2. Cost only matters at success scale, which is a good problem.",color:"#d97706"},{risk:"WhatsApp / iMessage is 'good enough'",severity:"Medium",from:"Viability report (market reality)",mitigation:"The research shows groups tolerate chat because nothing better exists, not because it works. Wanderlog tried but paywalled group features per-user. Our bet: if the invite link is as easy as sharing a WhatsApp link, and the voting UI is faster than typing opinions, the organizer switches the group over.",color:"#d97706"}].map((n,r)=>k.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"10px",padding:"16px",marginBottom:"12px"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[k.jsx("span",{style:{display:"inline-block",width:"8px",height:"8px",borderRadius:"50%",background:n.color}}),k.jsx("span",{style:{fontWeight:700,fontSize:"15px",color:"var(--text-primary)",fontFamily:"'Source Serif 4', Georgia, serif"},children:n.risk}),k.jsx("span",{style:{fontSize:"11px",color:"var(--text-faint)",marginLeft:"auto",fontFamily:"'JetBrains Mono', monospace"},children:n.from})]}),k.jsx("div",{style:{fontSize:"13.5px",color:"var(--text-secondary)",lineHeight:1.6,paddingLeft:"16px",borderLeft:"2px solid var(--border-muted)"},children:n.mitigation})]},r)),k.jsxs("div",{style:{background:"var(--bg-card)",border:"2px solid var(--text-primary)",borderRadius:"12px",padding:"20px",marginTop:"24px"},children:[k.jsx("div",{style:{fontSize:"14px",fontWeight:700,color:"var(--text-primary)",marginBottom:"8px",fontFamily:"'Source Serif 4', Georgia, serif"},children:"The kill criteria — when to stop"}),k.jsxs("div",{style:{fontSize:"13.5px",color:"var(--text-secondary)",lineHeight:1.7},children:[k.jsx("strong",{children:"Week 4:"})," If zero friend groups organically share the invite link with 3+ people, the invite mechanic doesn't work. Pivot to a different distribution model or kill."]}),k.jsxs("div",{style:{fontSize:"13.5px",color:"var(--text-secondary)",lineHeight:1.7,marginTop:"6px"},children:[k.jsx("strong",{children:"Week 8:"})," If fewer than 5% of completed trips get shared publicly, the Strava-model growth loop doesn't work. The product may still work as a private tool, but the organic growth thesis fails."]}),k.jsxs("div",{style:{fontSize:"13.5px",color:"var(--text-secondary)",lineHeight:1.7,marginTop:"6px"},children:[k.jsx("strong",{children:"Month 4:"})," If fewer than 5% of organizers convert to Pro after 100+ trips created, the monetization model fails. Consider switching to per-trip pricing or photo-book-only monetization."]})]})]})]})]})}function dy(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const hy=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,fy=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,my={};function pc(e,t){return(my.jsx?fy:hy).test(e)}const gy=/[ \t\n\f\r]/g;function yy(e){return typeof e=="object"?e.type==="text"?dc(e.value):!1:dc(e)}function dc(e){return e.replace(gy,"")===""}class li{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}li.prototype.normal={};li.prototype.property={};li.prototype.space=void 0;function kh(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new li(n,r,t)}function As(e){return e.toLowerCase()}class Ge{constructor(t,n){this.attribute=n,this.property=t}}Ge.prototype.attribute="";Ge.prototype.booleanish=!1;Ge.prototype.boolean=!1;Ge.prototype.commaOrSpaceSeparated=!1;Ge.prototype.commaSeparated=!1;Ge.prototype.defined=!1;Ge.prototype.mustUseProperty=!1;Ge.prototype.number=!1;Ge.prototype.overloadedBoolean=!1;Ge.prototype.property="";Ge.prototype.spaceSeparated=!1;Ge.prototype.space=void 0;let vy=0;const j=An(),me=An(),Ps=An(),E=An(),te=An(),Qn=An(),$e=An();function An(){return 2**++vy}const Cs=Object.freeze(Object.defineProperty({__proto__:null,boolean:j,booleanish:me,commaOrSpaceSeparated:$e,commaSeparated:Qn,number:E,overloadedBoolean:Ps,spaceSeparated:te},Symbol.toStringTag,{value:"Module"})),va=Object.keys(Cs);class Dl extends Ge{constructor(t,n,r,i){let o=-1;if(super(t,n),hc(this,"space",i),typeof r=="number")for(;++o<va.length;){const a=va[o];hc(this,va[o],(r&Cs[a])===Cs[a])}}}Dl.prototype.defined=!0;function hc(e,t,n){n&&(e[t]=n)}function lr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Dl(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[As(r)]=r,n[As(o.attribute)]=r}return new li(t,n,e.space)}const bh=lr({properties:{ariaActiveDescendant:null,ariaAtomic:me,ariaAutoComplete:null,ariaBusy:me,ariaChecked:me,ariaColCount:E,ariaColIndex:E,ariaColSpan:E,ariaControls:te,ariaCurrent:null,ariaDescribedBy:te,ariaDetails:null,ariaDisabled:me,ariaDropEffect:te,ariaErrorMessage:null,ariaExpanded:me,ariaFlowTo:te,ariaGrabbed:me,ariaHasPopup:null,ariaHidden:me,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:te,ariaLevel:E,ariaLive:null,ariaModal:me,ariaMultiLine:me,ariaMultiSelectable:me,ariaOrientation:null,ariaOwns:te,ariaPlaceholder:null,ariaPosInSet:E,ariaPressed:me,ariaReadOnly:me,ariaRelevant:null,ariaRequired:me,ariaRoleDescription:te,ariaRowCount:E,ariaRowIndex:E,ariaRowSpan:E,ariaSelected:me,ariaSetSize:E,ariaSort:null,ariaValueMax:E,ariaValueMin:E,ariaValueNow:E,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function xh(e,t){return t in e?e[t]:t}function Sh(e,t){return xh(e,t.toLowerCase())}const wy=lr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Qn,acceptCharset:te,accessKey:te,action:null,allow:null,allowFullScreen:j,allowPaymentRequest:j,allowUserMedia:j,alt:null,as:null,async:j,autoCapitalize:null,autoComplete:te,autoFocus:j,autoPlay:j,blocking:te,capture:null,charSet:null,checked:j,cite:null,className:te,cols:E,colSpan:null,content:null,contentEditable:me,controls:j,controlsList:te,coords:E|Qn,crossOrigin:null,data:null,dateTime:null,decoding:null,default:j,defer:j,dir:null,dirName:null,disabled:j,download:Ps,draggable:me,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:j,formTarget:null,headers:te,height:E,hidden:Ps,high:E,href:null,hrefLang:null,htmlFor:te,httpEquiv:te,id:null,imageSizes:null,imageSrcSet:null,inert:j,inputMode:null,integrity:null,is:null,isMap:j,itemId:null,itemProp:te,itemRef:te,itemScope:j,itemType:te,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:j,low:E,manifest:null,max:null,maxLength:E,media:null,method:null,min:null,minLength:E,multiple:j,muted:j,name:null,nonce:null,noModule:j,noValidate:j,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:j,optimum:E,pattern:null,ping:te,placeholder:null,playsInline:j,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:j,referrerPolicy:null,rel:te,required:j,reversed:j,rows:E,rowSpan:E,sandbox:te,scope:null,scoped:j,seamless:j,selected:j,shadowRootClonable:j,shadowRootDelegatesFocus:j,shadowRootMode:null,shape:null,size:E,sizes:null,slot:null,span:E,spellCheck:me,src:null,srcDoc:null,srcLang:null,srcSet:null,start:E,step:null,style:null,tabIndex:E,target:null,title:null,translate:null,type:null,typeMustMatch:j,useMap:null,value:me,width:E,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:te,axis:null,background:null,bgColor:null,border:E,borderColor:null,bottomMargin:E,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:j,declare:j,event:null,face:null,frame:null,frameBorder:null,hSpace:E,leftMargin:E,link:null,longDesc:null,lowSrc:null,marginHeight:E,marginWidth:E,noResize:j,noHref:j,noShade:j,noWrap:j,object:null,profile:null,prompt:null,rev:null,rightMargin:E,rules:null,scheme:null,scrolling:me,standby:null,summary:null,text:null,topMargin:E,valueType:null,version:null,vAlign:null,vLink:null,vSpace:E,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:j,disableRemotePlayback:j,prefix:null,property:null,results:E,security:null,unselectable:null},space:"html",transform:Sh}),ky=lr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:$e,accentHeight:E,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:E,amplitude:E,arabicForm:null,ascent:E,attributeName:null,attributeType:null,azimuth:E,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:E,by:null,calcMode:null,capHeight:E,className:te,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:E,diffuseConstant:E,direction:null,display:null,dur:null,divisor:E,dominantBaseline:null,download:j,dx:null,dy:null,edgeMode:null,editable:null,elevation:E,enableBackground:null,end:null,event:null,exponent:E,externalResourcesRequired:null,fill:null,fillOpacity:E,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Qn,g2:Qn,glyphName:Qn,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:E,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:E,horizOriginX:E,horizOriginY:E,id:null,ideographic:E,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:E,k:E,k1:E,k2:E,k3:E,k4:E,kernelMatrix:$e,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:E,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:E,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:E,overlineThickness:E,paintOrder:null,panose1:null,path:null,pathLength:E,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:te,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:E,pointsAtY:E,pointsAtZ:E,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:$e,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:$e,rev:$e,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:$e,requiredFeatures:$e,requiredFonts:$e,requiredFormats:$e,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:E,specularExponent:E,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:E,strikethroughThickness:E,string:null,stroke:null,strokeDashArray:$e,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:E,strokeOpacity:E,strokeWidth:null,style:null,surfaceScale:E,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:$e,tabIndex:E,tableValues:null,target:null,targetX:E,targetY:E,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:$e,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:E,underlineThickness:E,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:E,values:null,vAlphabetic:E,vMathematical:E,vectorEffect:null,vHanging:E,vIdeographic:E,version:null,vertAdvY:E,vertOriginX:E,vertOriginY:E,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:E,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:xh}),Th=lr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Ah=lr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Sh}),Ph=lr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),by={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},xy=/[A-Z]/g,fc=/-[a-z]/g,Sy=/^data[-\w.:]+$/i;function Ty(e,t){const n=As(t);let r=t,i=Ge;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Sy.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(fc,Py);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!fc.test(o)){let a=o.replace(xy,Ay);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Dl}return new i(r,t)}function Ay(e){return"-"+e.toLowerCase()}function Py(e){return e.charAt(1).toUpperCase()}const Cy=kh([bh,wy,Th,Ah,Ph],"html"),Fl=kh([bh,ky,Th,Ah,Ph],"svg");function Iy(e){return e.join(" ").trim()}var Rl={},mc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,zy=/\n/g,Ey=/^\s*/,My=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Dy=/^:\s*/,Fy=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Ry=/^[;\s]*/,Ny=/^\s+|\s+$/g,Oy=`
`,gc="/",yc="*",pn="",Ly="comment",Wy="declaration";function By(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var b=g.match(zy);b&&(n+=b.length);var P=g.lastIndexOf(Oy);r=~P?g.length-P:r+g.length}function o(){var g={line:n,column:r};return function(b){return b.position=new a(g),u(),b}}function a(g){this.start=g,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function s(g){var b=new Error(t.source+":"+n+":"+r+": "+g);if(b.reason=g,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function l(g){var b=g.exec(e);if(b){var P=b[0];return i(P),e=e.slice(P.length),b}}function u(){l(Ey)}function p(g){var b;for(g=g||[];b=c();)b!==!1&&g.push(b);return g}function c(){var g=o();if(!(gc!=e.charAt(0)||yc!=e.charAt(1))){for(var b=2;pn!=e.charAt(b)&&(yc!=e.charAt(b)||gc!=e.charAt(b+1));)++b;if(b+=2,pn===e.charAt(b-1))return s("End of comment missing");var P=e.slice(2,b-2);return r+=2,i(P),e=e.slice(b),r+=2,g({type:Ly,comment:P})}}function d(){var g=o(),b=l(My);if(b){if(c(),!l(Dy))return s("property missing ':'");var P=l(Fy),f=g({type:Wy,property:vc(b[0].replace(mc,pn)),value:P?vc(P[0].replace(mc,pn)):pn});return l(Ry),f}}function h(){var g=[];p(g);for(var b;b=d();)b!==!1&&(g.push(b),p(g));return g}return u(),h()}function vc(e){return e?e.replace(Ny,pn):pn}var _y=By,jy=Yi&&Yi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Rl,"__esModule",{value:!0});Rl.default=Vy;const Gy=jy(_y);function Vy(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Gy.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:s}=o;i?t(a,s,o):s&&(n=n||{},n[a]=s)}),n}var _o={};Object.defineProperty(_o,"__esModule",{value:!0});_o.camelCase=void 0;var $y=/^--[a-zA-Z0-9_-]+$/,Uy=/-([a-z])/g,Hy=/^[^-]+$/,qy=/^-(webkit|moz|ms|o|khtml)-/,Yy=/^-(ms)-/,Ky=function(e){return!e||Hy.test(e)||$y.test(e)},Qy=function(e,t){return t.toUpperCase()},wc=function(e,t){return"".concat(t,"-")},Xy=function(e,t){return t===void 0&&(t={}),Ky(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Yy,wc):e=e.replace(qy,wc),e.replace(Uy,Qy))};_o.camelCase=Xy;var Jy=Yi&&Yi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Zy=Jy(Rl),ev=_o;function Is(e,t){var n={};return!e||typeof e!="string"||(0,Zy.default)(e,function(r,i){r&&i&&(n[(0,ev.camelCase)(r,t)]=i)}),n}Is.default=Is;var tv=Is;const nv=Ls(tv),Ch=Ih("end"),Nl=Ih("start");function Ih(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function rv(e){const t=Nl(e),n=Ch(e);if(t&&n)return{start:t,end:n}}function Nr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?kc(e.position):"start"in e||"end"in e?kc(e):"line"in e||"column"in e?zs(e):""}function zs(e){return bc(e&&e.line)+":"+bc(e&&e.column)}function kc(e){return zs(e&&e.start)+"-"+zs(e&&e.end)}function bc(e){return e&&typeof e=="number"?e:1}class Ee extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=Nr(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ee.prototype.file="";Ee.prototype.name="";Ee.prototype.reason="";Ee.prototype.message="";Ee.prototype.stack="";Ee.prototype.column=void 0;Ee.prototype.line=void 0;Ee.prototype.ancestors=void 0;Ee.prototype.cause=void 0;Ee.prototype.fatal=void 0;Ee.prototype.place=void 0;Ee.prototype.ruleId=void 0;Ee.prototype.source=void 0;const Ol={}.hasOwnProperty,iv=new Map,ov=/[A-Z]/g,av=new Set(["table","tbody","thead","tfoot","tr"]),sv=new Set(["td","th"]),zh="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function lv(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=gv(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=mv(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Fl:Cy,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Eh(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Eh(e,t,n){if(t.type==="element")return uv(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return cv(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return dv(e,t,n);if(t.type==="mdxjsEsm")return pv(e,t);if(t.type==="root")return hv(e,t,n);if(t.type==="text")return fv(e,t)}function uv(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Fl,e.schema=i),e.ancestors.push(t);const o=Dh(e,t.tagName,!1),a=yv(e,t);let s=Wl(e,t);return av.has(t.tagName)&&(s=s.filter(function(l){return typeof l=="string"?!yy(l):!0})),Mh(e,a,o,t),Ll(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function cv(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}ti(e,t.position)}function pv(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ti(e,t.position)}function dv(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Fl,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Dh(e,t.name,!0),a=vv(e,t),s=Wl(e,t);return Mh(e,a,o,t),Ll(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function hv(e,t,n){const r={};return Ll(r,Wl(e,t)),e.create(t,e.Fragment,r,n)}function fv(e,t){return t.value}function Mh(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Ll(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function mv(e,t,n){return r;function r(i,o,a,s){const u=Array.isArray(a.children)?n:t;return s?u(o,a,s):u(o,a)}}function gv(e,t){return n;function n(r,i,o,a){const s=Array.isArray(o.children),l=Nl(r);return t(i,o,a,s,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function yv(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Ol.call(t.properties,i)){const o=wv(e,i,t.properties[i]);if(o){const[a,s]=o;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&sv.has(t.tagName)?r=s:n[a]=s}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function vv(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const s=a.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else ti(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else ti(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Wl(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:iv;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=i.get(l)||0;a=l+"-"+u,i.set(l,u+1)}}const s=Eh(e,o,a);s!==void 0&&n.push(s)}return n}function wv(e,t,n){const r=Ty(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?dy(n):Iy(n)),r.property==="style"){let i=typeof n=="object"?n:kv(e,String(n));return e.stylePropertyNameCase==="css"&&(i=bv(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?by[r.property]||r.property:r.attribute,n]}}function kv(e,t){try{return nv(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Ee("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=zh+"#cannot-parse-style-attribute",i}}function Dh(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const s=pc(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=a}else r=pc(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Ol.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);ti(e)}function ti(e,t){const n=new Ee("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=zh+"#cannot-handle-mdx-estrees-without-createevaluater",n}function bv(e){const t={};let n;for(n in e)Ol.call(e,n)&&(t[xv(n)]=e[n]);return t}function xv(e){let t=e.replace(ov,Sv);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Sv(e){return"-"+e.toLowerCase()}const wa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Tv={};function Bl(e,t){const n=Tv,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Fh(e,r,i)}function Fh(e,t,n){if(Av(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return xc(e.children,t,n)}return Array.isArray(e)?xc(e,t,n):""}function xc(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Fh(e[i],t,n);return r.join("")}function Av(e){return!!(e&&typeof e=="object")}const Sc=document.createElement("i");function _l(e){const t="&"+e+";";Sc.innerHTML=t;const n=Sc.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Ye(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function et(e,t){return e.length>0?(Ye(e,e.length,0,t),e):t}const Tc={}.hasOwnProperty;function Rh(e){const t={};let n=-1;for(;++n<e.length;)Pv(t,e[n]);return t}function Pv(e,t){let n;for(n in t){const i=(Tc.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){Tc.call(i,a)||(i[a]=[]);const s=o[a];Cv(i[a],Array.isArray(s)?s:s?[s]:[])}}}function Cv(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Ye(e,0,0,r)}function Nh(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ht(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const De=an(/[A-Za-z]/),Ie=an(/[\dA-Za-z]/),Iv=an(/[#-'*+\--9=?A-Z^-~]/);function ko(e){return e!==null&&(e<32||e===127)}const Es=an(/\d/),zv=an(/[\dA-Fa-f]/),Ev=an(/[!-/:-@[-`{-~]/);function L(e){return e!==null&&e<-2}function Z(e){return e!==null&&(e<0||e===32)}function G(e){return e===-2||e===-1||e===32}const jo=an(new RegExp("\\p{P}|\\p{S}","u")),xn=an(/\s/);function an(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ur(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&Ie(e.charCodeAt(n+1))&&Ie(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(n+1);o<56320&&s>56319&&s<57344?(a=String.fromCharCode(o,s),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function H(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(l){return G(l)?(e.enter(n),s(l)):t(l)}function s(l){return G(l)&&o++<i?(e.consume(l),s):(e.exit(n),t(l))}}const Mv={tokenize:Dv};function Dv(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),H(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),o(s)}function o(s){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return L(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),a)}}const Fv={tokenize:Rv},Ac={tokenize:Nv};function Rv(e){const t=this,n=[];let r=0,i,o,a;return s;function s(y){if(r<n.length){const T=n[r];return t.containerState=T[1],e.attempt(T[0].continuation,l,u)(y)}return u(y)}function l(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const T=t.events.length;let C=T,x;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){x=t.events[C][1].end;break}f(r);let z=T;for(;z<t.events.length;)t.events[z][1].end={...x},z++;return Ye(t.events,C+1,0,t.events.slice(T)),t.events.length=z,u(y)}return s(y)}function u(y){if(r===n.length){if(!i)return d(y);if(i.currentConstruct&&i.currentConstruct.concrete)return g(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ac,p,c)(y)}function p(y){return i&&m(),f(r),d(y)}function c(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,g(y)}function d(y){return t.containerState={},e.attempt(Ac,h,g)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),d(y)}function g(y){if(y===null){i&&m(),f(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),b(y)}function b(y){if(y===null){P(e.exit("chunkFlow"),!0),f(0),e.consume(y);return}return L(y)?(e.consume(y),P(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(y),b)}function P(y,T){const C=t.sliceStream(y);if(T&&C.push(null),y.previous=o,o&&(o.next=y),o=y,i.defineSkip(y.start),i.write(C),t.parser.lazy[y.start.line]){let x=i.events.length;for(;x--;)if(i.events[x][1].start.offset<a&&(!i.events[x][1].end||i.events[x][1].end.offset>a))return;const z=t.events.length;let M=z,W,S;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){if(W){S=t.events[M][1].end;break}W=!0}for(f(r),x=z;x<t.events.length;)t.events[x][1].end={...S},x++;Ye(t.events,M+1,0,t.events.slice(z)),t.events.length=x}}function f(y){let T=n.length;for(;T-- >y;){const C=n[T];t.containerState=C[1],C[0].exit.call(t,e)}n.length=y}function m(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Nv(e,t,n){return H(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ir(e){if(e===null||Z(e)||xn(e))return 1;if(jo(e))return 2}function Go(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Ms={name:"attention",resolveAll:Ov,tokenize:Lv};function Ov(e,t){let n=-1,r,i,o,a,s,l,u,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},d={...e[n][1].start};Pc(c,-l),Pc(d,l),a={type:l>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},s={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:d},o={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:l>1?"strong":"emphasis",start:{...a.start},end:{...s.end}},e[r][1].end={...a.start},e[n][1].start={...s.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=et(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=et(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=et(u,Go(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=et(u,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,u=et(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,Ye(e,r-1,n-r+3,u),n=r+u.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Lv(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=ir(r);let o;return a;function a(l){return o=l,e.enter("attentionSequence"),s(l)}function s(l){if(l===o)return e.consume(l),s;const u=e.exit("attentionSequence"),p=ir(l),c=!p||p===2&&i||n.includes(l),d=!i||i===2&&p||n.includes(r);return u._open=!!(o===42?c:c&&(i||!d)),u._close=!!(o===42?d:d&&(p||!c)),t(l)}}function Pc(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Wv={name:"autolink",tokenize:Bv};function Bv(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return De(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||Ie(h)?(r=1,s(h)):u(h)}function s(h){return h===58?(e.consume(h),r=0,l):(h===43||h===45||h===46||Ie(h))&&r++<32?(e.consume(h),s):(r=0,u(h))}function l(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||ko(h)?n(h):(e.consume(h),l)}function u(h){return h===64?(e.consume(h),p):Iv(h)?(e.consume(h),u):n(h)}function p(h){return Ie(h)?c(h):n(h)}function c(h){return h===46?(e.consume(h),r=0,p):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):d(h)}function d(h){if((h===45||Ie(h))&&r++<63){const g=h===45?d:c;return e.consume(h),g}return n(h)}}const ui={partial:!0,tokenize:_v};function _v(e,t,n){return r;function r(o){return G(o)?H(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||L(o)?t(o):n(o)}}const Oh={continuation:{tokenize:Gv},exit:Vv,name:"blockQuote",tokenize:jv};function jv(e,t,n){const r=this;return i;function i(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return G(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Gv(e,t,n){const r=this;return i;function i(a){return G(a)?H(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Oh,t,n)(a)}}function Vv(e){e.exit("blockQuote")}const Lh={name:"characterEscape",tokenize:$v};function $v(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Ev(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Wh={name:"characterReference",tokenize:Uv};function Uv(e,t,n){const r=this;let i=0,o,a;return s;function s(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),l}function l(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=Ie,p(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=zv,p):(e.enter("characterReferenceValue"),o=7,a=Es,p(c))}function p(c){if(c===59&&i){const d=e.exit("characterReferenceValue");return a===Ie&&!_l(r.sliceSerialize(d))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(c)&&i++<o?(e.consume(c),p):n(c)}}const Cc={partial:!0,tokenize:qv},Ic={concrete:!0,name:"codeFenced",tokenize:Hv};function Hv(e,t,n){const r=this,i={partial:!0,tokenize:C};let o=0,a=0,s;return l;function l(x){return u(x)}function u(x){const z=r.events[r.events.length-1];return o=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,s=x,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(x)}function p(x){return x===s?(a++,e.consume(x),p):a<3?n(x):(e.exit("codeFencedFenceSequence"),G(x)?H(e,c,"whitespace")(x):c(x))}function c(x){return x===null||L(x)?(e.exit("codeFencedFence"),r.interrupt?t(x):e.check(Cc,b,T)(x)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(x))}function d(x){return x===null||L(x)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(x)):G(x)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),H(e,h,"whitespace")(x)):x===96&&x===s?n(x):(e.consume(x),d)}function h(x){return x===null||L(x)?c(x):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===null||L(x)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(x)):x===96&&x===s?n(x):(e.consume(x),g)}function b(x){return e.attempt(i,T,P)(x)}function P(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),f}function f(x){return o>0&&G(x)?H(e,m,"linePrefix",o+1)(x):m(x)}function m(x){return x===null||L(x)?e.check(Cc,b,T)(x):(e.enter("codeFlowValue"),y(x))}function y(x){return x===null||L(x)?(e.exit("codeFlowValue"),m(x)):(e.consume(x),y)}function T(x){return e.exit("codeFenced"),t(x)}function C(x,z,M){let W=0;return S;function S($){return x.enter("lineEnding"),x.consume($),x.exit("lineEnding"),R}function R($){return x.enter("codeFencedFence"),G($)?H(x,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):O($)}function O($){return $===s?(x.enter("codeFencedFenceSequence"),q($)):M($)}function q($){return $===s?(W++,x.consume($),q):W>=a?(x.exit("codeFencedFenceSequence"),G($)?H(x,ee,"whitespace")($):ee($)):M($)}function ee($){return $===null||L($)?(x.exit("codeFencedFence"),z($)):M($)}}}function qv(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const ka={name:"codeIndented",tokenize:Kv},Yv={partial:!0,tokenize:Qv};function Kv(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),H(e,o,"linePrefix",5)(u)}function o(u){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?l(u):L(u)?e.attempt(Yv,a,l)(u):(e.enter("codeFlowValue"),s(u))}function s(u){return u===null||L(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),s)}function l(u){return e.exit("codeIndented"),t(u)}}function Qv(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):L(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):H(e,o,"linePrefix",5)(a)}function o(a){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):L(a)?i(a):n(a)}}const Xv={name:"codeText",previous:Zv,resolve:Jv,tokenize:ew};function Jv(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Zv(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ew(e,t,n){let r=0,i,o;return a;function a(c){return e.enter("codeText"),e.enter("codeTextSequence"),s(c)}function s(c){return c===96?(e.consume(c),r++,s):(e.exit("codeTextSequence"),l(c))}function l(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),l):c===96?(o=e.enter("codeTextSequence"),i=0,p(c)):L(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||L(c)?(e.exit("codeTextData"),l(c)):(e.consume(c),u)}function p(c){return c===96?(e.consume(c),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(o.type="codeTextData",u(c))}}class tw{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&kr(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),kr(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),kr(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);kr(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);kr(this.left,n.reverse())}}}function kr(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Bh(e){const t={};let n=-1,r,i,o,a,s,l,u;const p=new tw(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,nw(p,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=p.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},s=p.slice(i,n),s.unshift(r),p.splice(i,n-i+1,s))}}return Ye(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!u}function nw(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,l=[],u={};let p,c,d=-1,h=n,g=0,b=0;const P=[b];for(;h;){for(;e.get(++i)[1]!==h;);o.push(i),h._tokenizer||(p=r.sliceStream(h),h.next||p.push(null),c&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(p),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=n;++d<s.length;)s[d][0]==="exit"&&s[d-1][0]==="enter"&&s[d][1].type===s[d-1][1].type&&s[d][1].start.line!==s[d][1].end.line&&(b=d+1,P.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):P.pop(),d=P.length;d--;){const f=s.slice(P[d],P[d+1]),m=o.pop();l.push([m,m+f.length-1]),e.splice(m,2,f)}for(l.reverse(),d=-1;++d<l.length;)u[g+l[d][0]]=g+l[d][1],g+=l[d][1]-l[d][0]-1;return u}const rw={resolve:ow,tokenize:aw},iw={partial:!0,tokenize:sw};function ow(e){return Bh(e),e}function aw(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?o(s):L(s)?e.check(iw,a,o)(s):(e.consume(s),i)}function o(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function a(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function sw(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),H(e,o,"linePrefix")}function o(a){if(a===null||L(a))return n(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function _h(e,t,n,r,i,o,a,s,l){const u=l||Number.POSITIVE_INFINITY;let p=0;return c;function c(f){return f===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(f),e.exit(o),d):f===null||f===32||f===41||ko(f)?n(f):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),b(f))}function d(f){return f===62?(e.enter(o),e.consume(f),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),h(f))}function h(f){return f===62?(e.exit("chunkString"),e.exit(s),d(f)):f===null||f===60||L(f)?n(f):(e.consume(f),f===92?g:h)}function g(f){return f===60||f===62||f===92?(e.consume(f),h):h(f)}function b(f){return!p&&(f===null||f===41||Z(f))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(f)):p<u&&f===40?(e.consume(f),p++,b):f===41?(e.consume(f),p--,b):f===null||f===32||f===40||ko(f)?n(f):(e.consume(f),f===92?P:b)}function P(f){return f===40||f===41||f===92?(e.consume(f),b):b(f)}}function jh(e,t,n,r,i,o){const a=this;let s=0,l;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(o),p}function p(h){return s>999||h===null||h===91||h===93&&!l||h===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(o),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):L(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||L(h)||s++>999?(e.exit("chunkString"),p(h)):(e.consume(h),l||(l=!G(h)),h===92?d:c)}function d(h){return h===91||h===92||h===93?(e.consume(h),s++,c):c(h)}}function Gh(e,t,n,r,i,o){let a;return s;function s(d){return d===34||d===39||d===40?(e.enter(r),e.enter(i),e.consume(d),e.exit(i),a=d===40?41:d,l):n(d)}function l(d){return d===a?(e.enter(i),e.consume(d),e.exit(i),e.exit(r),t):(e.enter(o),u(d))}function u(d){return d===a?(e.exit(o),l(a)):d===null?n(d):L(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),H(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(d))}function p(d){return d===a||d===null||L(d)?(e.exit("chunkString"),u(d)):(e.consume(d),d===92?c:p)}function c(d){return d===a||d===92?(e.consume(d),p):p(d)}}function Or(e,t){let n;return r;function r(i){return L(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):G(i)?H(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const lw={name:"definition",tokenize:cw},uw={partial:!0,tokenize:pw};function cw(e,t,n){const r=this;let i;return o;function o(h){return e.enter("definition"),a(h)}function a(h){return jh.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function s(h){return i=ht(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),l):n(h)}function l(h){return Z(h)?Or(e,u)(h):u(h)}function u(h){return _h(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function p(h){return e.attempt(uw,c,c)(h)}function c(h){return G(h)?H(e,d,"whitespace")(h):d(h)}function d(h){return h===null||L(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function pw(e,t,n){return r;function r(s){return Z(s)?Or(e,i)(s):n(s)}function i(s){return Gh(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return G(s)?H(e,a,"whitespace")(s):a(s)}function a(s){return s===null||L(s)?t(s):n(s)}}const dw={name:"hardBreakEscape",tokenize:hw};function hw(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return L(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const fw={name:"headingAtx",resolve:mw,tokenize:gw};function mw(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Ye(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function gw(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),o(p)}function o(p){return e.enter("atxHeadingSequence"),a(p)}function a(p){return p===35&&r++<6?(e.consume(p),a):p===null||Z(p)?(e.exit("atxHeadingSequence"),s(p)):n(p)}function s(p){return p===35?(e.enter("atxHeadingSequence"),l(p)):p===null||L(p)?(e.exit("atxHeading"),t(p)):G(p)?H(e,s,"whitespace")(p):(e.enter("atxHeadingText"),u(p))}function l(p){return p===35?(e.consume(p),l):(e.exit("atxHeadingSequence"),s(p))}function u(p){return p===null||p===35||Z(p)?(e.exit("atxHeadingText"),s(p)):(e.consume(p),u)}}const yw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],zc=["pre","script","style","textarea"],vw={concrete:!0,name:"htmlFlow",resolveTo:bw,tokenize:xw},ww={partial:!0,tokenize:Tw},kw={partial:!0,tokenize:Sw};function bw(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function xw(e,t,n){const r=this;let i,o,a,s,l;return u;function u(w){return p(w)}function p(w){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(w),c}function c(w){return w===33?(e.consume(w),d):w===47?(e.consume(w),o=!0,b):w===63?(e.consume(w),i=3,r.interrupt?t:v):De(w)?(e.consume(w),a=String.fromCharCode(w),P):n(w)}function d(w){return w===45?(e.consume(w),i=2,h):w===91?(e.consume(w),i=5,s=0,g):De(w)?(e.consume(w),i=4,r.interrupt?t:v):n(w)}function h(w){return w===45?(e.consume(w),r.interrupt?t:v):n(w)}function g(w){const ye="CDATA[";return w===ye.charCodeAt(s++)?(e.consume(w),s===ye.length?r.interrupt?t:O:g):n(w)}function b(w){return De(w)?(e.consume(w),a=String.fromCharCode(w),P):n(w)}function P(w){if(w===null||w===47||w===62||Z(w)){const ye=w===47,ot=a.toLowerCase();return!ye&&!o&&zc.includes(ot)?(i=1,r.interrupt?t(w):O(w)):yw.includes(a.toLowerCase())?(i=6,ye?(e.consume(w),f):r.interrupt?t(w):O(w)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(w):o?m(w):y(w))}return w===45||Ie(w)?(e.consume(w),a+=String.fromCharCode(w),P):n(w)}function f(w){return w===62?(e.consume(w),r.interrupt?t:O):n(w)}function m(w){return G(w)?(e.consume(w),m):S(w)}function y(w){return w===47?(e.consume(w),S):w===58||w===95||De(w)?(e.consume(w),T):G(w)?(e.consume(w),y):S(w)}function T(w){return w===45||w===46||w===58||w===95||Ie(w)?(e.consume(w),T):C(w)}function C(w){return w===61?(e.consume(w),x):G(w)?(e.consume(w),C):y(w)}function x(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),l=w,z):G(w)?(e.consume(w),x):M(w)}function z(w){return w===l?(e.consume(w),l=null,W):w===null||L(w)?n(w):(e.consume(w),z)}function M(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Z(w)?C(w):(e.consume(w),M)}function W(w){return w===47||w===62||G(w)?y(w):n(w)}function S(w){return w===62?(e.consume(w),R):n(w)}function R(w){return w===null||L(w)?O(w):G(w)?(e.consume(w),R):n(w)}function O(w){return w===45&&i===2?(e.consume(w),fe):w===60&&i===1?(e.consume(w),de):w===62&&i===4?(e.consume(w),Y):w===63&&i===3?(e.consume(w),v):w===93&&i===5?(e.consume(w),B):L(w)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(ww,X,q)(w)):w===null||L(w)?(e.exit("htmlFlowData"),q(w)):(e.consume(w),O)}function q(w){return e.check(kw,ee,X)(w)}function ee(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),$}function $(w){return w===null||L(w)?q(w):(e.enter("htmlFlowData"),O(w))}function fe(w){return w===45?(e.consume(w),v):O(w)}function de(w){return w===47?(e.consume(w),a="",F):O(w)}function F(w){if(w===62){const ye=a.toLowerCase();return zc.includes(ye)?(e.consume(w),Y):O(w)}return De(w)&&a.length<8?(e.consume(w),a+=String.fromCharCode(w),F):O(w)}function B(w){return w===93?(e.consume(w),v):O(w)}function v(w){return w===62?(e.consume(w),Y):w===45&&i===2?(e.consume(w),v):O(w)}function Y(w){return w===null||L(w)?(e.exit("htmlFlowData"),X(w)):(e.consume(w),Y)}function X(w){return e.exit("htmlFlow"),t(w)}}function Sw(e,t,n){const r=this;return i;function i(a){return L(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Tw(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ui,t,n)}}const Aw={name:"htmlText",tokenize:Pw};function Pw(e,t,n){const r=this;let i,o,a;return s;function s(v){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(v),l}function l(v){return v===33?(e.consume(v),u):v===47?(e.consume(v),C):v===63?(e.consume(v),y):De(v)?(e.consume(v),M):n(v)}function u(v){return v===45?(e.consume(v),p):v===91?(e.consume(v),o=0,g):De(v)?(e.consume(v),m):n(v)}function p(v){return v===45?(e.consume(v),h):n(v)}function c(v){return v===null?n(v):v===45?(e.consume(v),d):L(v)?(a=c,de(v)):(e.consume(v),c)}function d(v){return v===45?(e.consume(v),h):c(v)}function h(v){return v===62?fe(v):v===45?d(v):c(v)}function g(v){const Y="CDATA[";return v===Y.charCodeAt(o++)?(e.consume(v),o===Y.length?b:g):n(v)}function b(v){return v===null?n(v):v===93?(e.consume(v),P):L(v)?(a=b,de(v)):(e.consume(v),b)}function P(v){return v===93?(e.consume(v),f):b(v)}function f(v){return v===62?fe(v):v===93?(e.consume(v),f):b(v)}function m(v){return v===null||v===62?fe(v):L(v)?(a=m,de(v)):(e.consume(v),m)}function y(v){return v===null?n(v):v===63?(e.consume(v),T):L(v)?(a=y,de(v)):(e.consume(v),y)}function T(v){return v===62?fe(v):y(v)}function C(v){return De(v)?(e.consume(v),x):n(v)}function x(v){return v===45||Ie(v)?(e.consume(v),x):z(v)}function z(v){return L(v)?(a=z,de(v)):G(v)?(e.consume(v),z):fe(v)}function M(v){return v===45||Ie(v)?(e.consume(v),M):v===47||v===62||Z(v)?W(v):n(v)}function W(v){return v===47?(e.consume(v),fe):v===58||v===95||De(v)?(e.consume(v),S):L(v)?(a=W,de(v)):G(v)?(e.consume(v),W):fe(v)}function S(v){return v===45||v===46||v===58||v===95||Ie(v)?(e.consume(v),S):R(v)}function R(v){return v===61?(e.consume(v),O):L(v)?(a=R,de(v)):G(v)?(e.consume(v),R):W(v)}function O(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),i=v,q):L(v)?(a=O,de(v)):G(v)?(e.consume(v),O):(e.consume(v),ee)}function q(v){return v===i?(e.consume(v),i=void 0,$):v===null?n(v):L(v)?(a=q,de(v)):(e.consume(v),q)}function ee(v){return v===null||v===34||v===39||v===60||v===61||v===96?n(v):v===47||v===62||Z(v)?W(v):(e.consume(v),ee)}function $(v){return v===47||v===62||Z(v)?W(v):n(v)}function fe(v){return v===62?(e.consume(v),e.exit("htmlTextData"),e.exit("htmlText"),t):n(v)}function de(v){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),F}function F(v){return G(v)?H(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):B(v)}function B(v){return e.enter("htmlTextData"),a(v)}}const jl={name:"labelEnd",resolveAll:Ew,resolveTo:Mw,tokenize:Dw},Cw={tokenize:Fw},Iw={tokenize:Rw},zw={tokenize:Nw};function Ew(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Ye(e,0,e.length,n),e}function Mw(e,t){let n=e.length,r=0,i,o,a,s;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},p={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return s=[["enter",l,t],["enter",u,t]],s=et(s,e.slice(o+1,o+r+3)),s=et(s,[["enter",p,t]]),s=et(s,Go(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),s=et(s,[["exit",p,t],e[a-2],e[a-1],["exit",u,t]]),s=et(s,e.slice(a+1)),s=et(s,[["exit",l,t]]),Ye(e,o,e.length,s),e}function Dw(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return s;function s(d){return o?o._inactive?c(d):(a=r.parser.defined.includes(ht(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),l):n(d)}function l(d){return d===40?e.attempt(Cw,p,a?p:c)(d):d===91?e.attempt(Iw,p,a?u:c)(d):a?p(d):c(d)}function u(d){return e.attempt(zw,p,c)(d)}function p(d){return t(d)}function c(d){return o._balanced=!0,n(d)}}function Fw(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return Z(c)?Or(e,o)(c):o(c)}function o(c){return c===41?p(c):_h(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function a(c){return Z(c)?Or(e,l)(c):p(c)}function s(c){return n(c)}function l(c){return c===34||c===39||c===40?Gh(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):p(c)}function u(c){return Z(c)?Or(e,p)(c):p(c)}function p(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function Rw(e,t,n){const r=this;return i;function i(s){return jh.call(r,e,o,a,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(ht(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function a(s){return n(s)}}function Nw(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Ow={name:"labelStartImage",resolveAll:jl.resolveAll,tokenize:Lw};function Lw(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),o}function o(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),a):n(s)}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Ww={name:"labelStartLink",resolveAll:jl.resolveAll,tokenize:Bw};function Bw(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ba={name:"lineEnding",tokenize:_w};function _w(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),H(e,t,"linePrefix")}}const Hi={name:"thematicBreak",tokenize:jw};function jw(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,s(u)}function s(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||L(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),G(u)?H(e,s,"whitespace")(u):s(u))}}const Oe={continuation:{tokenize:Uw},exit:qw,name:"list",tokenize:$w},Gw={partial:!0,tokenize:Yw},Vw={partial:!0,tokenize:Hw};function $w(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return s;function s(h){const g=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Es(h)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Hi,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(h)}return n(h)}function l(h){return Es(h)&&++a<10?(e.consume(h),l):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(ui,r.interrupt?n:p,e.attempt(Gw,d,c))}function p(h){return r.containerState.initialBlankLine=!0,o++,d(h)}function c(h){return G(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),d):n(h)}function d(h){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function Uw(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ui,i,o);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,H(e,t,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!G(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Vw,t,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,H(e,e.attempt(Oe,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function Hw(e,t,n){const r=this;return H(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function qw(e){e.exit(this.containerState.type)}function Yw(e,t,n){const r=this;return H(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!G(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Ec={name:"setextUnderline",resolveTo:Kw,tokenize:Qw};function Kw(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Qw(e,t,n){const r=this;let i;return o;function o(u){let p=r.events.length,c;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){c=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),s(u)}function s(u){return u===i?(e.consume(u),s):(e.exit("setextHeadingLineSequence"),G(u)?H(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||L(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Xw={tokenize:Jw};function Jw(e){const t=this,n=e.attempt(ui,r,e.attempt(this.parser.constructs.flowInitial,i,H(e,e.attempt(this.parser.constructs.flow,i,e.attempt(rw,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Zw={resolveAll:$h()},e1=Vh("string"),t1=Vh("text");function Vh(e){return{resolveAll:$h(e==="text"?n1:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,s);return a;function a(p){return u(p)?o(p):s(p)}function s(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),l}function l(p){return u(p)?(n.exit("data"),o(p)):(n.consume(p),l)}function u(p){if(p===null)return!0;const c=i[p];let d=-1;if(c)for(;++d<c.length;){const h=c[d];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function $h(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function n1(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,s=0,l;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)s++,a--;if(a)break;a=-1}else if(u===-2)l=!0,s++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const u={type:n===e.length||l||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const r1={42:Oe,43:Oe,45:Oe,48:Oe,49:Oe,50:Oe,51:Oe,52:Oe,53:Oe,54:Oe,55:Oe,56:Oe,57:Oe,62:Oh},i1={91:lw},o1={[-2]:ka,[-1]:ka,32:ka},a1={35:fw,42:Hi,45:[Ec,Hi],60:vw,61:Ec,95:Hi,96:Ic,126:Ic},s1={38:Wh,92:Lh},l1={[-5]:ba,[-4]:ba,[-3]:ba,33:Ow,38:Wh,42:Ms,60:[Wv,Aw],91:Ww,92:[dw,Lh],93:jl,95:Ms,96:Xv},u1={null:[Ms,Zw]},c1={null:[42,95]},p1={null:[]},d1=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:c1,contentInitial:i1,disable:p1,document:r1,flow:a1,flowInitial:o1,insideSpan:u1,string:s1,text:l1},Symbol.toStringTag,{value:"Module"}));function h1(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],s=[];const l={attempt:z(C),check:z(x),consume:m,enter:y,exit:T,interrupt:z(x,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:g,parser:e,previous:null,sliceSerialize:d,sliceStream:h,write:c};let p=t.tokenize.call(u,l);return t.resolveAll&&o.push(t),u;function c(R){return a=et(a,R),P(),a[a.length-1]!==null?[]:(M(t,0),u.events=Go(o,u.events,u),u.events)}function d(R,O){return m1(h(R),O)}function h(R){return f1(a,R)}function g(){const{_bufferIndex:R,_index:O,line:q,column:ee,offset:$}=r;return{_bufferIndex:R,_index:O,line:q,column:ee,offset:$}}function b(R){i[R.line]=R.column,S()}function P(){let R;for(;r._index<a.length;){const O=a[r._index];if(typeof O=="string")for(R=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===R&&r._bufferIndex<O.length;)f(O.charCodeAt(r._bufferIndex));else f(O)}}function f(R){p=p(R)}function m(R){L(R)?(r.line++,r.column=1,r.offset+=R===-3?2:1,S()):R!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=R}function y(R,O){const q=O||{};return q.type=R,q.start=g(),u.events.push(["enter",q,u]),s.push(q),q}function T(R){const O=s.pop();return O.end=g(),u.events.push(["exit",O,u]),O}function C(R,O){M(R,O.from)}function x(R,O){O.restore()}function z(R,O){return q;function q(ee,$,fe){let de,F,B,v;return Array.isArray(ee)?X(ee):"tokenize"in ee?X([ee]):Y(ee);function Y(re){return mt;function mt(Ot){const Pn=Ot!==null&&re[Ot],Cn=Ot!==null&&re.null,pi=[...Array.isArray(Pn)?Pn:Pn?[Pn]:[],...Array.isArray(Cn)?Cn:Cn?[Cn]:[]];return X(pi)(Ot)}}function X(re){return de=re,F=0,re.length===0?fe:w(re[F])}function w(re){return mt;function mt(Ot){return v=W(),B=re,re.partial||(u.currentConstruct=re),re.name&&u.parser.constructs.disable.null.includes(re.name)?ot():re.tokenize.call(O?Object.assign(Object.create(u),O):u,l,ye,ot)(Ot)}}function ye(re){return R(B,v),$}function ot(re){return v.restore(),++F<de.length?w(de[F]):fe}}}function M(R,O){R.resolveAll&&!o.includes(R)&&o.push(R),R.resolve&&Ye(u.events,O,u.events.length-O,R.resolve(u.events.slice(O),u)),R.resolveTo&&(u.events=R.resolveTo(u.events,u))}function W(){const R=g(),O=u.previous,q=u.currentConstruct,ee=u.events.length,$=Array.from(s);return{from:ee,restore:fe};function fe(){r=R,u.previous=O,u.currentConstruct=q,u.events.length=ee,s=$,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function f1(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function m1(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function g1(e){const r={constructs:Rh([d1,...(e||{}).extensions||[]]),content:i(Mv),defined:[],document:i(Fv),flow:i(Xw),lazy:{},string:i(e1),text:i(t1)};return r;function i(o){return a;function a(s){return h1(r,o,s)}}}function y1(e){for(;!Bh(e););return e}const Mc=/[\0\t\n\r]/g;function v1(){let e=1,t="",n=!0,r;return i;function i(o,a,s){const l=[];let u,p,c,d,h;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),c=0,t="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(Mc.lastIndex=c,u=Mc.exec(o),d=u&&u.index!==void 0?u.index:o.length,h=o.charCodeAt(d),!u){t=o.slice(c);break}if(h===10&&c===d&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),c<d&&(l.push(o.slice(c,d)),e+=d-c),h){case 0:{l.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,l.push(-2);e++<p;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}c=d+1}return s&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const w1=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function k1(e){return e.replace(w1,b1)}function b1(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Nh(n.slice(o?2:1),o?16:10)}return _l(n)||e}const Uh={}.hasOwnProperty;function x1(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),S1(n)(y1(g1(n).document().write(v1()(e,t,!0))))}function S1(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(eu),autolinkProtocol:W,autolinkEmail:W,atxHeading:o(Xl),blockQuote:o(Cn),characterEscape:W,characterReference:W,codeFenced:o(pi),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(pi,a),codeText:o(Pf,a),codeTextData:W,data:W,codeFlowValue:W,definition:o(Cf),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(If),hardBreakEscape:o(Jl),hardBreakTrailing:o(Jl),htmlFlow:o(Zl,a),htmlFlowData:W,htmlText:o(Zl,a),htmlTextData:W,image:o(zf),label:a,link:o(eu),listItem:o(Ef),listItemValue:d,listOrdered:o(tu,c),listUnordered:o(tu),paragraph:o(Mf),reference:w,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(Xl),strong:o(Df),thematicBreak:o(Rf)},exit:{atxHeading:l(),atxHeadingSequence:C,autolink:l(),autolinkEmail:Pn,autolinkProtocol:Ot,blockQuote:l(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:ot,characterReferenceMarkerNumeric:ot,characterReferenceValue:re,characterReference:mt,codeFenced:l(P),codeFencedFence:b,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:S,codeIndented:l(f),codeText:l($),codeTextData:S,data:S,definition:l(),definitionDestinationString:T,definitionLabelString:m,definitionTitleString:y,emphasis:l(),hardBreakEscape:l(O),hardBreakTrailing:l(O),htmlFlow:l(q),htmlFlowData:S,htmlText:l(ee),htmlTextData:S,image:l(de),label:B,labelText:F,lineEnding:R,link:l(fe),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:ye,resourceDestinationString:v,resourceTitleString:Y,resource:X,setextHeading:l(M),setextHeadingLineSequence:z,setextHeadingText:x,strong:l(),thematicBreak:l()}};Hh(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(A){let D={type:"root",children:[]};const _={stack:[D],tokenStack:[],config:t,enter:s,exit:u,buffer:a,resume:p,data:n},U=[];let J=-1;for(;++J<A.length;)if(A[J][1].type==="listOrdered"||A[J][1].type==="listUnordered")if(A[J][0]==="enter")U.push(J);else{const at=U.pop();J=i(A,at,J)}for(J=-1;++J<A.length;){const at=t[A[J][0]];Uh.call(at,A[J][1].type)&&at[A[J][1].type].call(Object.assign({sliceSerialize:A[J][2].sliceSerialize},_),A[J][1])}if(_.tokenStack.length>0){const at=_.tokenStack[_.tokenStack.length-1];(at[1]||Dc).call(_,void 0,at[0])}for(D.position={start:Wt(A.length>0?A[0][1].start:{line:1,column:1,offset:0}),end:Wt(A.length>0?A[A.length-2][1].end:{line:1,column:1,offset:0})},J=-1;++J<t.transforms.length;)D=t.transforms[J](D)||D;return D}function i(A,D,_){let U=D-1,J=-1,at=!1,sn,St,cr,pr;for(;++U<=_;){const Ve=A[U];switch(Ve[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ve[0]==="enter"?J++:J--,pr=void 0;break}case"lineEndingBlank":{Ve[0]==="enter"&&(sn&&!pr&&!J&&!cr&&(cr=U),pr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:pr=void 0}if(!J&&Ve[0]==="enter"&&Ve[1].type==="listItemPrefix"||J===-1&&Ve[0]==="exit"&&(Ve[1].type==="listUnordered"||Ve[1].type==="listOrdered")){if(sn){let In=U;for(St=void 0;In--;){const Tt=A[In];if(Tt[1].type==="lineEnding"||Tt[1].type==="lineEndingBlank"){if(Tt[0]==="exit")continue;St&&(A[St][1].type="lineEndingBlank",at=!0),Tt[1].type="lineEnding",St=In}else if(!(Tt[1].type==="linePrefix"||Tt[1].type==="blockQuotePrefix"||Tt[1].type==="blockQuotePrefixWhitespace"||Tt[1].type==="blockQuoteMarker"||Tt[1].type==="listItemIndent"))break}cr&&(!St||cr<St)&&(sn._spread=!0),sn.end=Object.assign({},St?A[St][1].start:Ve[1].end),A.splice(St||U,0,["exit",sn,Ve[2]]),U++,_++}if(Ve[1].type==="listItemPrefix"){const In={type:"listItem",_spread:!1,start:Object.assign({},Ve[1].start),end:void 0};sn=In,A.splice(U,0,["enter",In,Ve[2]]),U++,_++,cr=void 0,pr=!0}}}return A[D][1]._spread=at,_}function o(A,D){return _;function _(U){s.call(this,A(U),U),D&&D.call(this,U)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(A,D,_){this.stack[this.stack.length-1].children.push(A),this.stack.push(A),this.tokenStack.push([D,_||void 0]),A.position={start:Wt(D.start),end:void 0}}function l(A){return D;function D(_){A&&A.call(this,_),u.call(this,_)}}function u(A,D){const _=this.stack.pop(),U=this.tokenStack.pop();if(U)U[0].type!==A.type&&(D?D.call(this,A,U[0]):(U[1]||Dc).call(this,A,U[0]));else throw new Error("Cannot close `"+A.type+"` ("+Nr({start:A.start,end:A.end})+"): it’s not open");_.position.end=Wt(A.end)}function p(){return Bl(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(A){if(this.data.expectingFirstListItemValue){const D=this.stack[this.stack.length-2];D.start=Number.parseInt(this.sliceSerialize(A),10),this.data.expectingFirstListItemValue=void 0}}function h(){const A=this.resume(),D=this.stack[this.stack.length-1];D.lang=A}function g(){const A=this.resume(),D=this.stack[this.stack.length-1];D.meta=A}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function P(){const A=this.resume(),D=this.stack[this.stack.length-1];D.value=A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function f(){const A=this.resume(),D=this.stack[this.stack.length-1];D.value=A.replace(/(\r?\n|\r)$/g,"")}function m(A){const D=this.resume(),_=this.stack[this.stack.length-1];_.label=D,_.identifier=ht(this.sliceSerialize(A)).toLowerCase()}function y(){const A=this.resume(),D=this.stack[this.stack.length-1];D.title=A}function T(){const A=this.resume(),D=this.stack[this.stack.length-1];D.url=A}function C(A){const D=this.stack[this.stack.length-1];if(!D.depth){const _=this.sliceSerialize(A).length;D.depth=_}}function x(){this.data.setextHeadingSlurpLineEnding=!0}function z(A){const D=this.stack[this.stack.length-1];D.depth=this.sliceSerialize(A).codePointAt(0)===61?1:2}function M(){this.data.setextHeadingSlurpLineEnding=void 0}function W(A){const _=this.stack[this.stack.length-1].children;let U=_[_.length-1];(!U||U.type!=="text")&&(U=Ff(),U.position={start:Wt(A.start),end:void 0},_.push(U)),this.stack.push(U)}function S(A){const D=this.stack.pop();D.value+=this.sliceSerialize(A),D.position.end=Wt(A.end)}function R(A){const D=this.stack[this.stack.length-1];if(this.data.atHardBreak){const _=D.children[D.children.length-1];_.position.end=Wt(A.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(D.type)&&(W.call(this,A),S.call(this,A))}function O(){this.data.atHardBreak=!0}function q(){const A=this.resume(),D=this.stack[this.stack.length-1];D.value=A}function ee(){const A=this.resume(),D=this.stack[this.stack.length-1];D.value=A}function $(){const A=this.resume(),D=this.stack[this.stack.length-1];D.value=A}function fe(){const A=this.stack[this.stack.length-1];if(this.data.inReference){const D=this.data.referenceType||"shortcut";A.type+="Reference",A.referenceType=D,delete A.url,delete A.title}else delete A.identifier,delete A.label;this.data.referenceType=void 0}function de(){const A=this.stack[this.stack.length-1];if(this.data.inReference){const D=this.data.referenceType||"shortcut";A.type+="Reference",A.referenceType=D,delete A.url,delete A.title}else delete A.identifier,delete A.label;this.data.referenceType=void 0}function F(A){const D=this.sliceSerialize(A),_=this.stack[this.stack.length-2];_.label=k1(D),_.identifier=ht(D).toLowerCase()}function B(){const A=this.stack[this.stack.length-1],D=this.resume(),_=this.stack[this.stack.length-1];if(this.data.inReference=!0,_.type==="link"){const U=A.children;_.children=U}else _.alt=D}function v(){const A=this.resume(),D=this.stack[this.stack.length-1];D.url=A}function Y(){const A=this.resume(),D=this.stack[this.stack.length-1];D.title=A}function X(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function ye(A){const D=this.resume(),_=this.stack[this.stack.length-1];_.label=D,_.identifier=ht(this.sliceSerialize(A)).toLowerCase(),this.data.referenceType="full"}function ot(A){this.data.characterReferenceType=A.type}function re(A){const D=this.sliceSerialize(A),_=this.data.characterReferenceType;let U;_?(U=Nh(D,_==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):U=_l(D);const J=this.stack[this.stack.length-1];J.value+=U}function mt(A){const D=this.stack.pop();D.position.end=Wt(A.end)}function Ot(A){S.call(this,A);const D=this.stack[this.stack.length-1];D.url=this.sliceSerialize(A)}function Pn(A){S.call(this,A);const D=this.stack[this.stack.length-1];D.url="mailto:"+this.sliceSerialize(A)}function Cn(){return{type:"blockquote",children:[]}}function pi(){return{type:"code",lang:null,meta:null,value:""}}function Pf(){return{type:"inlineCode",value:""}}function Cf(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function If(){return{type:"emphasis",children:[]}}function Xl(){return{type:"heading",depth:0,children:[]}}function Jl(){return{type:"break"}}function Zl(){return{type:"html",value:""}}function zf(){return{type:"image",title:null,url:"",alt:null}}function eu(){return{type:"link",title:null,url:"",children:[]}}function tu(A){return{type:"list",ordered:A.type==="listOrdered",start:null,spread:A._spread,children:[]}}function Ef(A){return{type:"listItem",spread:A._spread,checked:null,children:[]}}function Mf(){return{type:"paragraph",children:[]}}function Df(){return{type:"strong",children:[]}}function Ff(){return{type:"text",value:""}}function Rf(){return{type:"thematicBreak"}}}function Wt(e){return{line:e.line,column:e.column,offset:e.offset}}function Hh(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Hh(e,r):T1(e,r)}}function T1(e,t){let n;for(n in t)if(Uh.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Dc(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Nr({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Nr({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Nr({start:t.start,end:t.end})+") is still open")}function A1(e){const t=this;t.parser=n;function n(r){return x1(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function P1(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function C1(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function I1(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function z1(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function E1(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function M1(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ur(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function D1(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function F1(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function qh(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function R1(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return qh(e,t);const i={src:ur(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function N1(e,t){const n={src:ur(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function O1(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function L1(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return qh(e,t);const i={href:ur(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function W1(e,t){const n={href:ur(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function B1(e,t,n){const r=e.all(t),i=n?_1(n):Yh(t),o={},a=[];if(typeof t.checked=="boolean"){const p=r[0];let c;p&&p.type==="element"&&p.tagName==="p"?c=p:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const p=r[s];(i||s!==0||p.type!=="element"||p.tagName!=="p")&&a.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?a.push(...p.children):a.push(p)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function _1(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Yh(n[r])}return t}function Yh(e){const t=e.spread;return t??e.children.length>1}function j1(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function G1(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function V1(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function $1(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function U1(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=Nl(t.children[1]),l=Ch(t.children[t.children.length-1]);s&&l&&(a.position={start:s,end:l}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function H1(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,s=a?a.length:t.children.length;let l=-1;const u=[];for(;++l<s;){const c=t.children[l],d={},h=a?a[l]:void 0;h&&(d.align=h);let g={type:"element",tagName:o,properties:d,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),u.push(g)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,p),e.applyData(t,p)}function q1(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Fc=9,Rc=32;function Y1(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Nc(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Nc(t.slice(i),i>0,!1)),o.join("")}function Nc(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Fc||o===Rc;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Fc||o===Rc;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function K1(e,t){const n={type:"text",value:Y1(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Q1(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const X1={blockquote:P1,break:C1,code:I1,delete:z1,emphasis:E1,footnoteReference:M1,heading:D1,html:F1,imageReference:R1,image:N1,inlineCode:O1,linkReference:L1,link:W1,listItem:B1,list:j1,paragraph:G1,root:V1,strong:$1,table:U1,tableCell:q1,tableRow:H1,text:K1,thematicBreak:Q1,toml:Ei,yaml:Ei,definition:Ei,footnoteDefinition:Ei};function Ei(){}const Kh=-1,Vo=0,Lr=1,bo=2,Gl=3,Vl=4,$l=5,Ul=6,Qh=7,Xh=8,J1=typeof self=="object"?self:globalThis,Oc=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new J1[e](t)},Z1=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case Vo:case Kh:return n(a,i);case Lr:{const s=n([],i);for(const l of a)s.push(r(l));return s}case bo:{const s=n({},i);for(const[l,u]of a)s[r(l)]=r(u);return s}case Gl:return n(new Date(a),i);case Vl:{const{source:s,flags:l}=a;return n(new RegExp(s,l),i)}case $l:{const s=n(new Map,i);for(const[l,u]of a)s.set(r(l),r(u));return s}case Ul:{const s=n(new Set,i);for(const l of a)s.add(r(l));return s}case Qh:{const{name:s,message:l}=a;return n(Oc(s,l),i)}case Xh:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return n(new DataView(s),a)}}return n(Oc(o,a),i)};return r},Lc=e=>Z1(new Map,e)(0),En="",{toString:e0}={},{keys:t0}=Object,br=e=>{const t=typeof e;if(t!=="object"||!e)return[Vo,t];const n=e0.call(e).slice(8,-1);switch(n){case"Array":return[Lr,En];case"Object":return[bo,En];case"Date":return[Gl,En];case"RegExp":return[Vl,En];case"Map":return[$l,En];case"Set":return[Ul,En];case"DataView":return[Lr,n]}return n.includes("Array")?[Lr,n]:n.includes("Error")?[Qh,n]:[bo,n]},Mi=([e,t])=>e===Vo&&(t==="function"||t==="symbol"),n0=(e,t,n,r)=>{const i=(a,s)=>{const l=r.push(a)-1;return n.set(s,l),l},o=a=>{if(n.has(a))return n.get(a);let[s,l]=br(a);switch(s){case Vo:{let p=a;switch(l){case"bigint":s=Xh,p=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);p=null;break;case"undefined":return i([Kh],a)}return i([s,p],a)}case Lr:{if(l){let d=a;return l==="DataView"?d=new Uint8Array(a.buffer):l==="ArrayBuffer"&&(d=new Uint8Array(a)),i([l,[...d]],a)}const p=[],c=i([s,p],a);for(const d of a)p.push(o(d));return c}case bo:{if(l)switch(l){case"BigInt":return i([l,a.toString()],a);case"Boolean":case"Number":case"String":return i([l,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const p=[],c=i([s,p],a);for(const d of t0(a))(e||!Mi(br(a[d])))&&p.push([o(d),o(a[d])]);return c}case Gl:return i([s,a.toISOString()],a);case Vl:{const{source:p,flags:c}=a;return i([s,{source:p,flags:c}],a)}case $l:{const p=[],c=i([s,p],a);for(const[d,h]of a)(e||!(Mi(br(d))||Mi(br(h))))&&p.push([o(d),o(h)]);return c}case Ul:{const p=[],c=i([s,p],a);for(const d of a)(e||!Mi(br(d)))&&p.push(o(d));return c}}const{message:u}=a;return i([s,{name:l,message:u}],a)};return o},Wc=(e,{json:t,lossy:n}={})=>{const r=[];return n0(!(t||n),!!t,new Map,r)(e),r},xo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Lc(Wc(e,t)):structuredClone(e):(e,t)=>Lc(Wc(e,t));function r0(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function i0(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function o0(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||r0,r=e.options.footnoteBackLabel||i0,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const p=e.all(u),c=String(u.identifier).toUpperCase(),d=ur(c.toLowerCase());let h=0;const g=[],b=e.footnoteCounts.get(c);for(;b!==void 0&&++h<=b;){g.length>0&&g.push({type:"text",value:" "});let m=typeof n=="string"?n:n(l,h);typeof m=="string"&&(m={type:"text",value:m}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+d+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const P=p[p.length-1];if(P&&P.type==="element"&&P.tagName==="p"){const m=P.children[P.children.length-1];m&&m.type==="text"?m.value+=" ":P.children.push({type:"text",value:" "}),P.children.push(...g)}else p.push(...g);const f={type:"element",tagName:"li",properties:{id:t+"fn-"+d},children:e.wrap(p,!0)};e.patch(u,f),s.push(f)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...xo(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const $o=function(e){if(e==null)return u0;if(typeof e=="function")return Uo(e);if(typeof e=="object")return Array.isArray(e)?a0(e):s0(e);if(typeof e=="string")return l0(e);throw new Error("Expected function, string, or object as test")};function a0(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=$o(e[n]);return Uo(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function s0(e){const t=e;return Uo(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function l0(e){return Uo(t);function t(n){return n&&n.type===e}}function Uo(e){return t;function t(n,r,i){return!!(c0(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function u0(){return!0}function c0(e){return e!==null&&typeof e=="object"&&"type"in e}const Jh=[],p0=!0,Ds=!1,d0="skip";function Zh(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=$o(i),a=r?-1:1;s(e,void 0,[])();function s(l,u,p){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return d;function d(){let h=Jh,g,b,P;if((!t||o(l,u,p[p.length-1]||void 0))&&(h=h0(n(l,p)),h[0]===Ds))return h;if("children"in l&&l.children){const f=l;if(f.children&&h[0]!==d0)for(b=(r?f.children.length:-1)+a,P=p.concat(f);b>-1&&b<f.children.length;){const m=f.children[b];if(g=s(m,b,P)(),g[0]===Ds)return g;b=typeof g[1]=="number"?g[1]:b+a}}return h}}}function h0(e){return Array.isArray(e)?e:typeof e=="number"?[p0,e]:e==null?Jh:[e]}function Hl(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),Zh(e,o,s,i);function s(l,u){const p=u[u.length-1],c=p?p.children.indexOf(l):void 0;return a(l,c,p)}}const Fs={}.hasOwnProperty,f0={};function m0(e,t){const n=t||f0,r=new Map,i=new Map,o=new Map,a={...X1,...n.handlers},s={all:u,applyData:y0,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:l,options:n,patch:g0,wrap:w0};return Hl(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const c=p.type==="definition"?r:i,d=String(p.identifier).toUpperCase();c.has(d)||c.set(d,p)}}),s;function l(p,c){const d=p.type,h=s.handlers[d];if(Fs.call(s.handlers,d)&&h)return h(s,p,c);if(s.options.passThrough&&s.options.passThrough.includes(d)){if("children"in p){const{children:b,...P}=p,f=xo(P);return f.children=s.all(p),f}return xo(p)}return(s.options.unknownHandler||v0)(s,p,c)}function u(p){const c=[];if("children"in p){const d=p.children;let h=-1;for(;++h<d.length;){const g=s.one(d[h],p);if(g){if(h&&d[h-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Bc(g.value)),!Array.isArray(g)&&g.type==="element")){const b=g.children[0];b&&b.type==="text"&&(b.value=Bc(b.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function g0(e,t){e.position&&(t.position=rv(e))}function y0(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,xo(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function v0(e,t){const n=t.data||{},r="value"in t&&!(Fs.call(n,"hProperties")||Fs.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function w0(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Bc(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function _c(e,t){const n=m0(e,t),r=n.one(e,void 0),i=o0(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function k0(e,t){return e&&"run"in e?async function(n,r){const i=_c(n,{file:r,...t});await e.run(i,r)}:function(n,r){return _c(n,{file:r,...e||t})}}function jc(e){if(e)throw e}var qi=Object.prototype.hasOwnProperty,ef=Object.prototype.toString,Gc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,$c=function(t){return typeof Array.isArray=="function"?Array.isArray(t):ef.call(t)==="[object Array]"},Uc=function(t){if(!t||ef.call(t)!=="[object Object]")return!1;var n=qi.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&qi.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||qi.call(t,i)},Hc=function(t,n){Gc&&n.name==="__proto__"?Gc(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},qc=function(t,n){if(n==="__proto__")if(qi.call(t,n)){if(Vc)return Vc(t,n).value}else return;return t[n]},b0=function e(){var t,n,r,i,o,a,s=arguments[0],l=1,u=arguments.length,p=!1;for(typeof s=="boolean"&&(p=s,s=arguments[1]||{},l=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=qc(s,n),i=qc(t,n),s!==i&&(p&&i&&(Uc(i)||(o=$c(i)))?(o?(o=!1,a=r&&$c(r)?r:[]):a=r&&Uc(r)?r:{},Hc(s,{name:n,newValue:e(p,a,i)})):typeof i<"u"&&Hc(s,{name:n,newValue:i}));return s};const xa=Ls(b0);function Rs(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function x0(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...i);function s(l,...u){const p=e[++o];let c=-1;if(l){a(l);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,p?S0(p,s)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function S0(e,t){let n;return r;function r(...a){const s=e.length>a.length;let l;s&&a.push(i);try{l=e.apply(this,a)}catch(u){const p=u;if(s&&n)throw p;return i(p)}s||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(a,...s){n||(n=!0,t(a,...s))}function o(a){i(null,a)}}const vt={basename:T0,dirname:A0,extname:P0,join:C0,sep:"/"};function T0(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ci(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function A0(e){if(ci(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function P0(e){ci(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const s=e.codePointAt(t);if(s===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),s===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function C0(...e){let t=-1,n;for(;++t<e.length;)ci(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":I0(n)}function I0(e){ci(e);const t=e.codePointAt(0)===47;let n=z0(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function z0(e,t){let n="",r=0,i=-1,o=0,a=-1,s,l;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else s===46&&o>-1?o++:o=-1}return n}function ci(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const E0={cwd:M0};function M0(){return"/"}function Ns(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function D0(e){if(typeof e=="string")e=new URL(e);else if(!Ns(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return F0(e)}function F0(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Sa=["history","path","basename","stem","extname","dirname"];class tf{constructor(t){let n;t?Ns(t)?n={path:t}:typeof t=="string"||R0(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":E0.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Sa.length;){const o=Sa[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Sa.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?vt.basename(this.path):void 0}set basename(t){Aa(t,"basename"),Ta(t,"basename"),this.path=vt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?vt.dirname(this.path):void 0}set dirname(t){Yc(this.basename,"dirname"),this.path=vt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?vt.extname(this.path):void 0}set extname(t){if(Ta(t,"extname"),Yc(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=vt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Ns(t)&&(t=D0(t)),Aa(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?vt.basename(this.path,this.extname):void 0}set stem(t){Aa(t,"stem"),Ta(t,"stem"),this.path=vt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Ee(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Ta(e,t){if(e&&e.includes(vt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+vt.sep+"`")}function Aa(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Yc(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function R0(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const N0=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},O0={}.hasOwnProperty;class ql extends N0{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=x0()}copy(){const t=new ql;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(xa(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ia("data",this.frozen),this.namespace[t]=n,this):O0.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ia("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Di(t),r=this.parser||this.Parser;return Pa("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Pa("process",this.parser||this.Parser),Ca("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const s=Di(t),l=r.parse(s);r.run(l,s,function(p,c,d){if(p||!c||!d)return u(p);const h=c,g=r.stringify(h,d);B0(g)?d.value=g:d.result=g,u(p,d)});function u(p,c){p||!c?a(p):o?o(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),Pa("processSync",this.parser||this.Parser),Ca("processSync",this.compiler||this.Compiler),this.process(t,i),Qc("processSync","process",n),r;function i(o,a){n=!0,jc(o),r=a}}run(t,n,r){Kc(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,s){const l=Di(n);i.run(t,l,u);function u(p,c,d){const h=c||t;p?s(p):a?a(h):r(void 0,h,d)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Qc("runSync","run",r),i;function o(a,s){jc(a),i=s,r=!0}}stringify(t,n){this.freeze();const r=Di(n),i=this.compiler||this.Compiler;return Ca("stringify",i),Kc(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ia("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[p,...c]=u;l(p,c)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(u.plugins),u.settings&&(i.settings=xa(!0,i.settings,u.settings))}function s(u){let p=-1;if(u!=null)if(Array.isArray(u))for(;++p<u.length;){const c=u[p];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,p){let c=-1,d=-1;for(;++c<r.length;)if(r[c][0]===u){d=c;break}if(d===-1)r.push([u,...p]);else if(p.length>0){let[h,...g]=p;const b=r[d][1];Rs(b)&&Rs(h)&&(h=xa(!0,b,h)),r[d]=[u,h,...g]}}}}const L0=new ql().freeze();function Pa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ca(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ia(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Kc(e){if(!Rs(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Qc(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Di(e){return W0(e)?e:new tf(e)}function W0(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function B0(e){return typeof e=="string"||_0(e)}function _0(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const j0="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Xc=[],Jc={allowDangerousHtml:!0},G0=/^(https?|ircs?|mailto|xmpp)$/i,V0=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function $0(e){const t=U0(e),n=H0(e);return q0(t.runSync(t.parse(n),n),e)}function U0(e){const t=e.rehypePlugins||Xc,n=e.remarkPlugins||Xc,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Jc}:Jc;return L0().use(A1).use(n).use(k0,r).use(t)}function H0(e){const t=e.children||"",n=new tf;return typeof t=="string"&&(n.value=t),n}function q0(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,s=t.unwrapDisallowed,l=t.urlTransform||Y0;for(const p of V0)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+j0+p.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Hl(e,u),lv(e,{Fragment:k.Fragment,components:i,ignoreInvalidStyle:!0,jsx:k.jsx,jsxs:k.jsxs,passKeys:!0,passNode:!0});function u(p,c,d){if(p.type==="raw"&&d&&typeof c=="number")return a?d.children.splice(c,1):d.children[c]={type:"text",value:p.value},c;if(p.type==="element"){let h;for(h in wa)if(Object.hasOwn(wa,h)&&Object.hasOwn(p.properties,h)){const g=p.properties[h],b=wa[h];(b===null||b.includes(p.tagName))&&(p.properties[h]=l(String(g||""),h,p))}}if(p.type==="element"){let h=n?!n.includes(p.tagName):o?o.includes(p.tagName):!1;if(!h&&r&&typeof c=="number"&&(h=!r(p,c,d)),h&&d&&typeof c=="number")return s&&p.children?d.children.splice(c,1,...p.children):d.children.splice(c,1),c}}}function Y0(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||G0.test(e.slice(0,t))?e:""}function Zc(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function K0(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Q0(e,t,n){const i=$o((n||{}).ignore||[]),o=X0(t);let a=-1;for(;++a<o.length;)Zh(e,"text",s);function s(u,p){let c=-1,d;for(;++c<p.length;){const h=p[c],g=d?d.children:void 0;if(i(h,g?g.indexOf(h):void 0,d))return;d=h}if(d)return l(u,p)}function l(u,p){const c=p[p.length-1],d=o[a][0],h=o[a][1];let g=0;const P=c.children.indexOf(u);let f=!1,m=[];d.lastIndex=0;let y=d.exec(u.value);for(;y;){const T=y.index,C={index:y.index,input:y.input,stack:[...p,u]};let x=h(...y,C);if(typeof x=="string"&&(x=x.length>0?{type:"text",value:x}:void 0),x===!1?d.lastIndex=T+1:(g!==T&&m.push({type:"text",value:u.value.slice(g,T)}),Array.isArray(x)?m.push(...x):x&&m.push(x),g=T+y[0].length,f=!0),!d.global)break;y=d.exec(u.value)}return f?(g<u.value.length&&m.push({type:"text",value:u.value.slice(g)}),c.children.splice(P,1,...m)):m=[u],P+m.length}}function X0(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([J0(i[0]),Z0(i[1])])}return t}function J0(e){return typeof e=="string"?new RegExp(K0(e),"g"):e}function Z0(e){return typeof e=="function"?e:function(){return e}}const za="phrasing",Ea=["autolink","link","image","label"];function ek(){return{transforms:[sk],enter:{literalAutolink:nk,literalAutolinkEmail:Ma,literalAutolinkHttp:Ma,literalAutolinkWww:Ma},exit:{literalAutolink:ak,literalAutolinkEmail:ok,literalAutolinkHttp:rk,literalAutolinkWww:ik}}}function tk(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:za,notInConstruct:Ea},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:za,notInConstruct:Ea},{character:":",before:"[ps]",after:"\\/",inConstruct:za,notInConstruct:Ea}]}}function nk(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Ma(e){this.config.enter.autolinkProtocol.call(this,e)}function rk(e){this.config.exit.autolinkProtocol.call(this,e)}function ik(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function ok(e){this.config.exit.autolinkEmail.call(this,e)}function ak(e){this.exit(e)}function sk(e){Q0(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,lk],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),uk]],{ignore:["link","linkReference"]})}function lk(e,t,n,r,i){let o="";if(!nf(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!ck(n)))return!1;const a=pk(n+r);if(!a[0])return!1;const s={type:"link",title:null,url:o+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[s,{type:"text",value:a[1]}]:s}function uk(e,t,n,r){return!nf(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function ck(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function pk(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=Zc(e,"(");let o=Zc(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return[e,n]}function nf(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||xn(n)||jo(n))&&(!t||n!==47)}rf.peek=kk;function dk(){this.buffer()}function hk(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function fk(){this.buffer()}function mk(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function gk(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ht(this.sliceSerialize(e)).toLowerCase(),n.label=t}function yk(e){this.exit(e)}function vk(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ht(this.sliceSerialize(e)).toLowerCase(),n.label=t}function wk(e){this.exit(e)}function kk(){return"["}function rf(e,t,n,r){const i=n.createTracker(r);let o=i.move("[^");const a=n.enter("footnoteReference"),s=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),s(),a(),o+=i.move("]"),o}function bk(){return{enter:{gfmFootnoteCallString:dk,gfmFootnoteCall:hk,gfmFootnoteDefinitionLabelString:fk,gfmFootnoteDefinition:mk},exit:{gfmFootnoteCallString:gk,gfmFootnoteCall:yk,gfmFootnoteDefinitionLabelString:vk,gfmFootnoteDefinition:wk}}}function xk(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:rf},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,a){const s=o.createTracker(a);let l=s.move("[^");const u=o.enter("footnoteDefinition"),p=o.enter("label");return l+=s.move(o.safe(o.associationId(r),{before:l,after:"]"})),p(),l+=s.move("]:"),r.children&&r.children.length>0&&(s.shift(4),l+=s.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,s.current()),t?of:Sk))),u(),l}}function Sk(e,t,n){return t===0?e:of(e,t,n)}function of(e,t,n){return(n?"":"    ")+e}const Tk=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];af.peek=zk;function Ak(){return{canContainEols:["delete"],enter:{strikethrough:Ck},exit:{strikethrough:Ik}}}function Pk(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Tk}],handlers:{delete:af}}}function Ck(e){this.enter({type:"delete",children:[]},e)}function Ik(e){this.exit(e)}function af(e,t,n,r){const i=n.createTracker(r),o=n.enter("strikethrough");let a=i.move("~~");return a+=n.containerPhrasing(e,{...i.current(),before:a,after:"~"}),a+=i.move("~~"),o(),a}function zk(){return"~"}function Ek(e){return e.length}function Mk(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Ek,o=[],a=[],s=[],l=[];let u=0,p=-1;for(;++p<e.length;){const b=[],P=[];let f=-1;for(e[p].length>u&&(u=e[p].length);++f<e[p].length;){const m=Dk(e[p][f]);if(n.alignDelimiters!==!1){const y=i(m);P[f]=y,(l[f]===void 0||y>l[f])&&(l[f]=y)}b.push(m)}a[p]=b,s[p]=P}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=ep(r[c]);else{const b=ep(r);for(;++c<u;)o[c]=b}c=-1;const d=[],h=[];for(;++c<u;){const b=o[c];let P="",f="";b===99?(P=":",f=":"):b===108?P=":":b===114&&(f=":");let m=n.alignDelimiters===!1?1:Math.max(1,l[c]-P.length-f.length);const y=P+"-".repeat(m)+f;n.alignDelimiters!==!1&&(m=P.length+m+f.length,m>l[c]&&(l[c]=m),h[c]=m),d[c]=y}a.splice(1,0,d),s.splice(1,0,h),p=-1;const g=[];for(;++p<a.length;){const b=a[p],P=s[p];c=-1;const f=[];for(;++c<u;){const m=b[c]||"";let y="",T="";if(n.alignDelimiters!==!1){const C=l[c]-(P[c]||0),x=o[c];x===114?y=" ".repeat(C):x===99?C%2?(y=" ".repeat(C/2+.5),T=" ".repeat(C/2-.5)):(y=" ".repeat(C/2),T=y):T=" ".repeat(C)}n.delimiterStart!==!1&&!c&&f.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&m==="")&&(n.delimiterStart!==!1||c)&&f.push(" "),n.alignDelimiters!==!1&&f.push(y),f.push(m),n.alignDelimiters!==!1&&f.push(T),n.padding!==!1&&f.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&f.push("|")}g.push(n.delimiterEnd===!1?f.join("").replace(/ +$/,""):f.join(""))}return g.join(`
`)}function Dk(e){return e==null?"":String(e)}function ep(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Fk(e,t,n,r){const i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);const a=n.indentLines(n.containerFlow(e,o.current()),Rk);return i(),a}function Rk(e,t,n){return">"+(n?"":" ")+e}function Nk(e,t){return tp(e,t.inConstruct,!0)&&!tp(e,t.notInConstruct,!1)}function tp(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function np(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Nk(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function Ok(e,t){const n=String(e);let r=n.indexOf(t),i=r,o=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>a&&(a=o):o=1,i=r+t.length,r=n.indexOf(t,i);return a}function Lk(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Wk(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Bk(e,t,n,r){const i=Wk(n),o=e.value||"",a=i==="`"?"GraveAccent":"Tilde";if(Lk(e,n)){const c=n.enter("codeIndented"),d=n.indentLines(o,_k);return c(),d}const s=n.createTracker(r),l=i.repeat(Math.max(Ok(o,i)+1,3)),u=n.enter("codeFenced");let p=s.move(l);if(e.lang){const c=n.enter(`codeFencedLang${a}`);p+=s.move(n.safe(e.lang,{before:p,after:" ",encode:["`"],...s.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${a}`);p+=s.move(" "),p+=s.move(n.safe(e.meta,{before:p,after:`
`,encode:["`"],...s.current()})),c()}return p+=s.move(`
`),o&&(p+=s.move(o+`
`)),p+=s.move(l),u(),p}function _k(e,t,n){return(n?"":"    ")+e}function Yl(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function jk(e,t,n,r){const i=Yl(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("definition");let s=n.enter("label");const l=n.createTracker(r);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),s()),a(),u}function Gk(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function ni(e){return"&#x"+e.toString(16).toUpperCase()+";"}function So(e,t,n){const r=ir(e),i=ir(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}sf.peek=Vk;function sf(e,t,n,r){const i=Gk(n),o=n.enter("emphasis"),a=n.createTracker(r),s=a.move(i);let l=a.move(n.containerPhrasing(e,{after:i,before:s,...a.current()}));const u=l.charCodeAt(0),p=So(r.before.charCodeAt(r.before.length-1),u,i);p.inside&&(l=ni(u)+l.slice(1));const c=l.charCodeAt(l.length-1),d=So(r.after.charCodeAt(0),c,i);d.inside&&(l=l.slice(0,-1)+ni(c));const h=a.move(i);return o(),n.attentionEncodeSurroundingInfo={after:d.outside,before:p.outside},s+l+h}function Vk(e,t,n){return n.options.emphasis||"*"}function $k(e,t){let n=!1;return Hl(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Ds}),!!((!e.depth||e.depth<3)&&Bl(e)&&(t.options.setext||n))}function Uk(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if($k(e,n)){const p=n.enter("headingSetext"),c=n.enter("phrasing"),d=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),p(),d+`
`+(i===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const a="#".repeat(i),s=n.enter("headingAtx"),l=n.enter("phrasing");o.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(u)&&(u=ni(u.charCodeAt(0))+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),l(),s(),u}lf.peek=Hk;function lf(e){return e.value||""}function Hk(){return"<"}uf.peek=qk;function uf(e,t,n,r){const i=Yl(n),o=i==='"'?"Quote":"Apostrophe",a=n.enter("image");let s=n.enter("label");const l=n.createTracker(r);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),s()),u+=l.move(")"),a(),u}function qk(){return"!"}cf.peek=Yk;function cf(e,t,n,r){const i=e.referenceType,o=n.enter("imageReference");let a=n.enter("label");const s=n.createTracker(r);let l=s.move("![");const u=n.safe(e.alt,{before:l,after:"]",...s.current()});l+=s.move(u+"]["),a();const p=n.stack;n.stack=[],a=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...s.current()});return a(),n.stack=p,o(),i==="full"||!u||u!==c?l+=s.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function Yk(){return"!"}pf.peek=Kk;function pf(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const a=n.unsafe[o],s=n.compilePattern(a);let l;if(a.atBreak)for(;l=s.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function Kk(){return"`"}function df(e,t){const n=Bl(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}hf.peek=Qk;function hf(e,t,n,r){const i=Yl(n),o=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r);let s,l;if(df(e,n)){const p=n.stack;n.stack=[],s=n.enter("autolink");let c=a.move("<");return c+=a.move(n.containerPhrasing(e,{before:c,after:">",...a.current()})),c+=a.move(">"),s(),n.stack=p,c}s=n.enter("link"),l=n.enter("label");let u=a.move("[");return u+=a.move(n.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),l()),u+=a.move(")"),s(),u}function Qk(e,t,n){return df(e,n)?"<":"["}ff.peek=Xk;function ff(e,t,n,r){const i=e.referenceType,o=n.enter("linkReference");let a=n.enter("label");const s=n.createTracker(r);let l=s.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...s.current()});l+=s.move(u+"]["),a();const p=n.stack;n.stack=[],a=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...s.current()});return a(),n.stack=p,o(),i==="full"||!u||u!==c?l+=s.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function Xk(){return"["}function Kl(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Jk(e){const t=Kl(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Zk(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function mf(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function eb(e,t,n,r){const i=n.enter("list"),o=n.bulletCurrent;let a=e.ordered?Zk(n):Kl(n);const s=e.ordered?a==="."?")":".":Jk(n);let l=t&&n.bulletLastUsed?a===n.bulletLastUsed:!1;if(!e.ordered){const p=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&p&&(!p.children||!p.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),mf(n)===a&&p){let c=-1;for(;++c<e.children.length;){const d=e.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(a=s),n.bulletCurrent=a;const u=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=o,i(),u}function tb(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function nb(e,t,n,r){const i=tb(n);let o=n.bulletCurrent||Kl(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let a=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);const s=n.createTracker(r);s.move(o+" ".repeat(a-o.length)),s.shift(a);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,s.current()),p);return l(),u;function p(c,d,h){return d?(h?"":" ".repeat(a))+c:(h?o:o+" ".repeat(a-o.length))+c}}function rb(e,t,n,r){const i=n.enter("paragraph"),o=n.enter("phrasing"),a=n.containerPhrasing(e,r);return o(),i(),a}const ib=$o(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function ob(e,t,n,r){return(e.children.some(function(a){return ib(a)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function ab(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}gf.peek=sb;function gf(e,t,n,r){const i=ab(n),o=n.enter("strong"),a=n.createTracker(r),s=a.move(i+i);let l=a.move(n.containerPhrasing(e,{after:i,before:s,...a.current()}));const u=l.charCodeAt(0),p=So(r.before.charCodeAt(r.before.length-1),u,i);p.inside&&(l=ni(u)+l.slice(1));const c=l.charCodeAt(l.length-1),d=So(r.after.charCodeAt(0),c,i);d.inside&&(l=l.slice(0,-1)+ni(c));const h=a.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:d.outside,before:p.outside},s+l+h}function sb(e,t,n){return n.options.strong||"*"}function lb(e,t,n,r){return n.safe(e.value,r)}function ub(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function cb(e,t,n){const r=(mf(n)+(n.options.ruleSpaces?" ":"")).repeat(ub(n));return n.options.ruleSpaces?r.slice(0,-1):r}const yf={blockquote:Fk,break:np,code:Bk,definition:jk,emphasis:sf,hardBreak:np,heading:Uk,html:lf,image:uf,imageReference:cf,inlineCode:pf,link:hf,linkReference:ff,list:eb,listItem:nb,paragraph:rb,root:ob,strong:gf,text:lb,thematicBreak:cb};function pb(){return{enter:{table:db,tableData:rp,tableHeader:rp,tableRow:fb},exit:{codeText:mb,table:hb,tableData:Da,tableHeader:Da,tableRow:Da}}}function db(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function hb(e){this.exit(e),this.data.inTable=void 0}function fb(e){this.enter({type:"tableRow",children:[]},e)}function Da(e){this.exit(e)}function rp(e){this.enter({type:"tableCell",children:[]},e)}function mb(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,gb));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function gb(e,t){return t==="|"?t:e}function yb(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:a,tableCell:l,tableRow:s}};function a(h,g,b,P){return u(p(h,b,P),h.align)}function s(h,g,b,P){const f=c(h,b,P),m=u([f]);return m.slice(0,m.indexOf(`
`))}function l(h,g,b,P){const f=b.enter("tableCell"),m=b.enter("phrasing"),y=b.containerPhrasing(h,{...P,before:o,after:o});return m(),f(),y}function u(h,g){return Mk(h,{align:g,alignDelimiters:r,padding:n,stringLength:i})}function p(h,g,b){const P=h.children;let f=-1;const m=[],y=g.enter("table");for(;++f<P.length;)m[f]=c(P[f],g,b);return y(),m}function c(h,g,b){const P=h.children;let f=-1;const m=[],y=g.enter("tableRow");for(;++f<P.length;)m[f]=l(P[f],h,g,b);return y(),m}function d(h,g,b){let P=yf.inlineCode(h,g,b);return b.stack.includes("tableCell")&&(P=P.replace(/\|/g,"\\$&")),P}}function vb(){return{exit:{taskListCheckValueChecked:ip,taskListCheckValueUnchecked:ip,paragraph:kb}}}function wb(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:bb}}}function ip(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function kb(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let o=-1,a;for(;++o<i.length;){const s=i[o];if(s.type==="paragraph"){a=s;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function bb(e,t,n,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",s=n.createTracker(r);o&&s.move(a);let l=yf.listItem(e,t,n,{...r,...s.current()});return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(p){return p+a}}function xb(){return[ek(),bk(),Ak(),pb(),vb()]}function Sb(e){return{extensions:[tk(),xk(e),Pk(),yb(e),wb()]}}const Tb={tokenize:Eb,partial:!0},vf={tokenize:Mb,partial:!0},wf={tokenize:Db,partial:!0},kf={tokenize:Fb,partial:!0},Ab={tokenize:Rb,partial:!0},bf={name:"wwwAutolink",tokenize:Ib,previous:Sf},xf={name:"protocolAutolink",tokenize:zb,previous:Tf},Nt={name:"emailAutolink",tokenize:Cb,previous:Af},xt={};function Pb(){return{text:xt}}let ln=48;for(;ln<123;)xt[ln]=Nt,ln++,ln===58?ln=65:ln===91&&(ln=97);xt[43]=Nt;xt[45]=Nt;xt[46]=Nt;xt[95]=Nt;xt[72]=[Nt,xf];xt[104]=[Nt,xf];xt[87]=[Nt,bf];xt[119]=[Nt,bf];function Cb(e,t,n){const r=this;let i,o;return a;function a(c){return!Os(c)||!Af.call(r,r.previous)||Ql(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(c))}function s(c){return Os(c)?(e.consume(c),s):c===64?(e.consume(c),l):n(c)}function l(c){return c===46?e.check(Ab,p,u)(c):c===45||c===95||Ie(c)?(o=!0,e.consume(c),l):p(c)}function u(c){return e.consume(c),i=!0,l}function p(c){return o&&i&&De(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function Ib(e,t,n){const r=this;return i;function i(a){return a!==87&&a!==119||!Sf.call(r,r.previous)||Ql(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Tb,e.attempt(vf,e.attempt(wf,o),n),n)(a))}function o(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function zb(e,t,n){const r=this;let i="",o=!1;return a;function a(c){return(c===72||c===104)&&Tf.call(r,r.previous)&&!Ql(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),s):n(c)}function s(c){if(De(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),s;if(c===58){const d=i.toLowerCase();if(d==="http"||d==="https")return e.consume(c),l}return n(c)}function l(c){return c===47?(e.consume(c),o?u:(o=!0,l)):n(c)}function u(c){return c===null||ko(c)||Z(c)||xn(c)||jo(c)?n(c):e.attempt(vf,e.attempt(wf,p),n)(c)}function p(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function Eb(e,t,n){let r=0;return i;function i(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),o):n(a)}function o(a){return a===null?n(a):t(a)}}function Mb(e,t,n){let r,i,o;return a;function a(u){return u===46||u===95?e.check(kf,l,s)(u):u===null||Z(u)||xn(u)||u!==45&&jo(u)?l(u):(o=!0,e.consume(u),a)}function s(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),a}function l(u){return i||r||!o?n(u):t(u)}}function Db(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?o(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(kf,t,o)(a):a===null||Z(a)||xn(a)?t(a):(e.consume(a),i)}function o(a){return a===41&&r++,e.consume(a),i}}function Fb(e,t,n){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),o):s===93?(e.consume(s),i):s===60||s===null||Z(s)||xn(s)?t(s):n(s)}function i(s){return s===null||s===40||s===91||Z(s)||xn(s)?t(s):r(s)}function o(s){return De(s)?a(s):n(s)}function a(s){return s===59?(e.consume(s),r):De(s)?(e.consume(s),a):n(s)}}function Rb(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return Ie(o)?n(o):t(o)}}function Sf(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Z(e)}function Tf(e){return!De(e)}function Af(e){return!(e===47||Os(e))}function Os(e){return e===43||e===45||e===46||e===95||Ie(e)}function Ql(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const Nb={tokenize:Vb,partial:!0};function Ob(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:_b,continuation:{tokenize:jb},exit:Gb}},text:{91:{name:"gfmFootnoteCall",tokenize:Bb},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Lb,resolveTo:Wb}}}}function Lb(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){a=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return s;function s(l){if(!a||!a._balanced)return n(l);const u=ht(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function Wb(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",o,t],["enter",a,t],["exit",a,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...s),e}function Bb(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,a;return s;function s(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!a||c===null||c===91||Z(c))return n(c);if(c===93){e.exit("chunkString");const d=e.exit("gfmFootnoteCallString");return i.includes(ht(r.sliceSerialize(d)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return Z(c)||(a=!0),o++,e.consume(c),c===92?p:u}function p(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function _b(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,a=0,s;return l;function l(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",p):n(g)}function p(g){if(a>999||g===93&&!s||g===null||g===91||Z(g))return n(g);if(g===93){e.exit("chunkString");const b=e.exit("gfmFootnoteDefinitionLabelString");return o=ht(r.sliceSerialize(b)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),d}return Z(g)||(s=!0),a++,e.consume(g),g===92?c:p}function c(g){return g===91||g===92||g===93?(e.consume(g),a++,p):p(g)}function d(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(o)||i.push(o),H(e,h,"gfmFootnoteDefinitionWhitespace")):n(g)}function h(g){return t(g)}}function jb(e,t,n){return e.check(ui,t,e.attempt(Nb,t,n))}function Gb(e){e.exit("gfmFootnoteDefinition")}function Vb(e,t,n){const r=this;return H(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?t(o):n(o)}}function $b(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,s){let l=-1;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._close){let u=l;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[l][1].end.offset-a[l][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[l][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";const p={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[l][1].end)},c={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[l][1].start)},d=[["enter",p,s],["enter",a[u][1],s],["exit",a[u][1],s],["enter",c,s]],h=s.parser.constructs.insideSpan.null;h&&Ye(d,d.length,0,Go(h,a.slice(u+1,l),s)),Ye(d,d.length,0,[["exit",c,s],["enter",a[l][1],s],["exit",a[l][1],s],["exit",p,s]]),Ye(a,u-1,l-u+3,d),l=u+d.length-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="strikethroughSequenceTemporary"&&(a[l][1].type="data");return a}function o(a,s,l){const u=this.previous,p=this.events;let c=0;return d;function d(g){return u===126&&p[p.length-1][1].type!=="characterEscape"?l(g):(a.enter("strikethroughSequenceTemporary"),h(g))}function h(g){const b=ir(u);if(g===126)return c>1?l(g):(a.consume(g),c++,h);if(c<2&&!n)return l(g);const P=a.exit("strikethroughSequenceTemporary"),f=ir(g);return P._open=!f||f===2&&!!b,P._close=!b||b===2&&!!f,s(g)}}}class Ub{constructor(){this.map=[]}add(t,n,r){Hb(this,t,n,r)}consume(t){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const o of i)t.push(o);i=r.pop()}this.map.length=0}}function Hb(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function qb(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function Yb(){return{flow:{null:{name:"table",tokenize:Kb,resolveAll:Qb}}}}function Kb(e,t,n){const r=this;let i=0,o=0,a;return s;function s(S){let R=r.events.length-1;for(;R>-1;){const ee=r.events[R][1].type;if(ee==="lineEnding"||ee==="linePrefix")R--;else break}const O=R>-1?r.events[R][1].type:null,q=O==="tableHead"||O==="tableRow"?x:l;return q===x&&r.parser.lazy[r.now().line]?n(S):q(S)}function l(S){return e.enter("tableHead"),e.enter("tableRow"),u(S)}function u(S){return S===124||(a=!0,o+=1),p(S)}function p(S){return S===null?n(S):L(S)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),h):n(S):G(S)?H(e,p,"whitespace")(S):(o+=1,a&&(a=!1,i+=1),S===124?(e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),a=!0,p):(e.enter("data"),c(S)))}function c(S){return S===null||S===124||Z(S)?(e.exit("data"),p(S)):(e.consume(S),S===92?d:c)}function d(S){return S===92||S===124?(e.consume(S),c):c(S)}function h(S){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(S):(e.enter("tableDelimiterRow"),a=!1,G(S)?H(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):g(S))}function g(S){return S===45||S===58?P(S):S===124?(a=!0,e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),b):C(S)}function b(S){return G(S)?H(e,P,"whitespace")(S):P(S)}function P(S){return S===58?(o+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(S),e.exit("tableDelimiterMarker"),f):S===45?(o+=1,f(S)):S===null||L(S)?T(S):C(S)}function f(S){return S===45?(e.enter("tableDelimiterFiller"),m(S)):C(S)}function m(S){return S===45?(e.consume(S),m):S===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(S),e.exit("tableDelimiterMarker"),y):(e.exit("tableDelimiterFiller"),y(S))}function y(S){return G(S)?H(e,T,"whitespace")(S):T(S)}function T(S){return S===124?g(S):S===null||L(S)?!a||i!==o?C(S):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(S)):C(S)}function C(S){return n(S)}function x(S){return e.enter("tableRow"),z(S)}function z(S){return S===124?(e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),z):S===null||L(S)?(e.exit("tableRow"),t(S)):G(S)?H(e,z,"whitespace")(S):(e.enter("data"),M(S))}function M(S){return S===null||S===124||Z(S)?(e.exit("data"),z(S)):(e.consume(S),S===92?W:M)}function W(S){return S===92||S===124?(e.consume(S),M):M(S)}}function Qb(e,t){let n=-1,r=!0,i=0,o=[0,0,0,0],a=[0,0,0,0],s=!1,l=0,u,p,c;const d=new Ub;for(;++n<e.length;){const h=e[n],g=h[1];h[0]==="enter"?g.type==="tableHead"?(s=!1,l!==0&&(op(d,t,l,u,p),p=void 0,l=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",u,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],a=[0,n+1,0,0],s&&(s=!1,p={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",p,t]])),i=g.type==="tableDelimiterRow"?2:p?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(o[1]!==0&&(a[0]=a[1],c=Fi(d,t,o,i,void 0,c),o=[0,0,0,0]),a[2]=n)):g.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(a[0]=a[1],c=Fi(d,t,o,i,void 0,c)),o=a,a=[o[1],n,0,0])):g.type==="tableHead"?(s=!0,l=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(l=n,o[1]!==0?(a[0]=a[1],c=Fi(d,t,o,i,n,c)):a[1]!==0&&(c=Fi(d,t,a,i,n,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(a[3]=n)}for(l!==0&&op(d,t,l,u,p),d.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=qb(t.events,n))}return e}function Fi(e,t,n,r,i,o){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";n[0]!==0&&(o.end=Object.assign({},Mn(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const l=Mn(t.events,n[1]);if(o={type:a,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){const u=Mn(t.events,n[2]),p=Mn(t.events,n[3]),c={type:s,start:Object.assign({},u),end:Object.assign({},p)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const d=t.events[n[2]],h=t.events[n[3]];if(d[1].end=Object.assign({},h[1].end),d[1].type="chunkText",d[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,b=n[3]-n[2]-1;e.add(g,b,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(o.end=Object.assign({},Mn(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function op(e,t,n,r,i){const o=[],a=Mn(t.events,n);i&&(i.end=Object.assign({},a),o.push(["exit",i,t])),r.end=Object.assign({},a),o.push(["exit",r,t]),e.add(n+1,0,o)}function Mn(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const Xb={name:"tasklistCheck",tokenize:Zb};function Jb(){return{text:{91:Xb}}}function Zb(e,t,n){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),o)}function o(l){return Z(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),a):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),a):n(l)}function a(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):n(l)}function s(l){return L(l)?t(l):G(l)?e.check({tokenize:ex},t,n)(l):n(l)}}function ex(e,t,n){return H(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function tx(e){return Rh([Pb(),Ob(),$b(e),Yb(),Jb()])}const nx={};function rx(e){const t=this,n=e||nx,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(tx(n)),o.push(xb()),a.push(Sb(n))}const ix=`
.md-content { color: var(--text-secondary); }
.md-content h1 {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 26px; font-weight: 700; color: var(--text-primary);
  margin: 32px 0 12px; line-height: 1.3;
  padding-bottom: 8px; border-bottom: 1px solid var(--border);
}
.md-content h2 {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 21px; font-weight: 700; color: var(--text-primary);
  margin: 28px 0 10px; line-height: 1.3;
}
.md-content h3 {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 17px; font-weight: 600; color: var(--text-primary);
  margin: 24px 0 8px;
}
.md-content h4 {
  font-size: 15px; font-weight: 600; color: var(--text-primary);
  margin: 20px 0 6px;
}
.md-content p { font-size: 15px; line-height: 1.75; margin: 0 0 16px; }
.md-content ul, .md-content ol {
  font-size: 15px; line-height: 1.75; margin: 0 0 16px; padding-left: 24px;
}
.md-content li { margin-bottom: 4px; }
.md-content li > ul, .md-content li > ol { margin-top: 4px; margin-bottom: 4px; }
.md-content strong { font-weight: 600; color: var(--text-primary); }
.md-content a { color: #2563eb; text-decoration: none; }
.md-content a:hover { text-decoration: underline; }
.md-content blockquote {
  border-left: 3px solid var(--border-muted); margin: 0 0 16px;
  padding: 8px 16px; color: var(--text-muted); background: var(--bg-subtle);
  border-radius: 0 6px 6px 0;
}
.md-content blockquote p { margin-bottom: 0; }
.md-content code {
  font-family: 'JetBrains Mono', monospace; font-size: 13px;
  background: var(--code-inline-bg); padding: 2px 6px; border-radius: 4px;
  color: var(--code-inline-text);
}
.md-content pre {
  background: var(--code-bg); border-radius: 8px; padding: 16px;
  overflow-x: auto; margin: 0 0 16px;
}
.md-content pre code {
  background: none; padding: 0; color: var(--code-text); font-size: 13px;
  border-radius: 0;
}
.md-content table {
  width: 100%; border-collapse: collapse; margin: 0 0 16px; font-size: 14px;
  display: block; overflow-x: auto;
}
.md-content thead { background: var(--bg-subtle); }
.md-content th {
  text-align: left; padding: 10px 12px; border: 1px solid var(--border);
  font-weight: 600; color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
}
.md-content td { padding: 10px 12px; border: 1px solid var(--border); color: var(--text-secondary); }
.md-content tr:nth-child(even) td { background: var(--bg-subtle); }
.md-content hr { border: none; border-top: 1px solid var(--border); margin: 24px 0; }
.md-content img { max-width: 100%; border-radius: 8px; }
.md-content input[type="checkbox"] { margin-right: 6px; }
.md-content del { color: var(--text-faint); }
`;function ox({doc:e}){return k.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-page)",fontFamily:"'IBM Plex Sans', system-ui, sans-serif"},children:[k.jsx("style",{children:ix}),k.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700;8..60,800&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",rel:"stylesheet"}),k.jsx("div",{style:{background:"linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",padding:"40px 24px 28px",color:"#fff"},children:k.jsxs("div",{style:{maxWidth:"760px",margin:"0 auto"},children:[k.jsx("div",{style:{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:"#94a3b8",marginBottom:"8px",fontFamily:"'JetBrains Mono', monospace"},children:e.sectionName}),k.jsx("h1",{style:{fontSize:"30px",fontWeight:700,margin:0,fontFamily:"'Source Serif 4', Georgia, serif",letterSpacing:"-0.5px"},children:e.title})]})}),k.jsx("div",{style:{maxWidth:"760px",margin:"0 auto",padding:"32px 24px 80px"},children:k.jsx("div",{className:"md-content",children:k.jsx($0,{remarkPlugins:[rx],children:e.content})})})]})}function ax({manifest:e,activeDoc:t,onDocSelect:n,onProposalSelect:r,theme:i,onThemeToggle:o}){return k.jsxs("nav",{style:{position:"fixed",top:0,left:0,width:"272px",height:"100vh",background:"var(--bg-card)",borderRight:"1px solid var(--border)",zIndex:60,overflowY:"auto",padding:"56px 0 0",boxShadow:"4px 0 20px rgba(0,0,0,0.12)",fontFamily:"'IBM Plex Sans', system-ui, sans-serif",display:"flex",flexDirection:"column"},children:[k.jsxs("div",{onClick:o,role:"button",tabIndex:0,onKeyDown:a=>a.key==="Enter"&&o(),style:{padding:"10px 20px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"13px",color:"var(--text-muted)",borderBottom:"1px solid var(--border)",fontFamily:"'IBM Plex Sans', system-ui, sans-serif"},children:[k.jsx("span",{style:{fontSize:"15px"},children:i==="dark"?"☀️":"🌙"}),i==="dark"?"Light mode":"Dark mode"]}),k.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"0 0 12px"},children:[k.jsx("div",{onClick:r,role:"button",tabIndex:0,onKeyDown:a=>a.key==="Enter"&&r(),style:{padding:"10px 20px",fontSize:"14px",fontWeight:t?500:700,color:t?"var(--text-secondary)":"var(--text-primary)",cursor:"pointer",background:t?"transparent":"var(--bg-hover)",borderLeft:t?"3px solid transparent":"3px solid var(--text-primary)",fontFamily:"'Source Serif 4', Georgia, serif"},children:"TripSquad Proposal"}),e.length>0&&k.jsx("div",{style:{height:"1px",background:"var(--border)",margin:"12px 20px"}}),e.map(a=>k.jsxs("div",{style:{marginBottom:"4px"},children:[k.jsx("div",{style:{padding:"10px 20px 4px",fontSize:"11px",fontWeight:700,color:"var(--text-faint)",textTransform:"uppercase",letterSpacing:"1.5px",fontFamily:"'JetBrains Mono', monospace"},children:a.name}),a.docs.map(s=>{const l=(t==null?void 0:t.sectionId)===a.id&&(t==null?void 0:t.filename)===s.filename;return k.jsx("div",{onClick:()=>n(a.id,s.filename),role:"button",tabIndex:0,onKeyDown:u=>u.key==="Enter"&&n(a.id,s.filename),style:{padding:"7px 20px",fontSize:"13.5px",fontWeight:l?600:400,color:l?"var(--text-primary)":"var(--text-muted)",cursor:"pointer",background:l?"var(--bg-hover)":"transparent",borderLeft:l?"3px solid #2563eb":"3px solid transparent"},children:s.title},s.filename)})]},a.id))]})]})}const ap=[{id:"01-V1",name:"V1",docs:[{filename:"01-idea.md",title:"Idea",content:`# AI Trip Planner — Complete Idea Document

## Vision

We're building the one app for your entire trip — plan together, adapt on the fly, and share as interactive maps — powered by AI that learns your travel style with every trip you take.

No more juggling Maps, notes, group chats, weather apps, and photo albums just to go on vacation.

---

## The Problem

### The 6-App Problem

A typical multi-day trip today requires jumping between 6+ disconnected apps:

| App | What travelers use it for | What's broken |
|-----|--------------------------|---------------|
| **ChatGPT / AI chat** | Initial itinerary generation | Starts from zero every time. No memory of past trips. No structured output. |
| **Google Maps** | Navigation between activities | Optimizes for fastest route, not scenic. Fights your intent. No awareness of your plan. |
| **Weather apps** | Checking forecasts | Disconnected from your itinerary. You notice rain but have to manually figure out what to move. |
| **AllTrails / activity apps** | Finding hikes, trails, activities | Siloed. Discoveries don't feed back into your itinerary. |
| **WhatsApp / group chats** | Coordinating with travel companions | Suggestions buried in 47 messages. No structure, no voting, no decisions. |
| **Camera roll** | Photos and videos | Untagged, unorganized. Dies after the trip — a pile of photos nobody revisits. |
| **YouTube** | Seeing what others did at a destination | Watch 20-minute vlogs just to extract 3 useful ideas. No way to grab their route. |

### The Deeper Problems

**Plans always break.** Weather changes, you get tired, a friend finds something better, a place is closed. Static itineraries (in notes, docs, or planning apps) can't adapt. Reshuffling one day cascades through the whole trip and requires re-doing everything manually.

**No tool learns from you.** Every new trip starts cold. You re-describe your preferences, re-explain your pace, re-tell the AI who you're traveling with. Ten trips later, your planning app knows you no better than it did on trip one.

**The trip dies when it ends.** Months of planning and days of adventure collapse into an unsorted camera roll. There's no beautiful record, no shareable artifact, no way for others to benefit from your experience.

**Discovery is broken.** To learn what people actually do at a destination, you watch YouTube vlogs or scroll TripAdvisor reviews. There's no way to see someone's actual trip laid out on a map with real photos and real routes.

**Group coordination is chaos.** Planning with friends means endless messages with no structure. "What about this restaurant?" gets lost between memes. There's no way to propose, vote, and decide without a WhatsApp war.

---

## The Solution

A mobile-first trip planning application that covers the entire trip lifecycle — **plan, go, share** — with AI that gets smarter with every trip you take.

### Core Thesis

The app is **tool-first, AI-enhanced**:
- Fully functional without AI. Every feature works manually.
- AI makes everything faster, smarter, and more personalized — but is never a gate.
- The AI is specialized in trip planning, fed with the user's accumulated travel intelligence.

### Core Insight

> "Every travel app that's been funded competes for one moment: trip planning. They help you build an itinerary. Then they disappear. But planning isn't where trips break. The trip itself is the product, not just the plan."

---

## Core Concepts

### Trip

The top-level entity. A travel record representing a vacation, road trip, or local exploration.

**Lifecycle states:**

\`\`\`
Plan ──→ Active ──→ History ──→ Archived
  │                    │
  └──→ Cancelled       └──→ (stays in History)
\`\`\`

- **Plan** — Being designed. Activities organized into Days without real calendar dates.
- **Active** — Currently in progress. The plan is a living document updated in real-time.
- **History** — Completed. The final state of the plan IS the historical record.
- **Archived** — Moved out of the main view but still accessible and usable as AI context.
- **Cancelled** — Planned but never taken.

### Activity

An event within a Trip, defined by a **start time** (the only required field).

Optional attributes:
- Location (geo-coordinates, address, area)
- Duration
- Route (for driving/walking activities)
- Media (photos, videos)
- Participants (which travelers are doing this activity)
- Notes, links, booking references

Activities can be concurrent — two activities at the same time with different participants represent a group split.

**Driving routes are Activities.** A scenic coastal drive is a first-class event on the timeline, not just a gap between destinations. It can have waypoints, photos, duration, and is exportable to navigation apps (Google Maps, Waze) with full waypoint sequences to force the desired route.

### Day

A sequential container (Day 1, Day 2, Day 3). Maps to a real calendar date when the Trip has a start date or becomes Active.

### Suggestion

A proposed Activity that hasn't been promoted into the plan yet. Used during collaborative planning:
- Can be **unassigned** ("we should do wine tasting at some point")
- Can be **placed on a specific Day** as an alternative ("Day 3 afternoon: boat cruise OR hike?")
- Promoted into the plan when the group agrees (voting/choosing)

### Companion

A person on a Trip who is **not** an app user. Represented as constraints and tags that influence AI planning:
- "Parents friendly" — slower pace, accessible paths
- "Kid-friendly" — activity duration limits, early bedtimes
- "Mobility constraints" — no steep hikes

If a companion is also an app user, their accounts link and preferences sync automatically.

### Preference

A user's travel taste — both explicit (stated by the user) and inferred (derived from trip history by the AI):
- Scenic roads over highways
- Quiet beaches over tourist traps
- Budget food over expensive restaurants
- Nature over city
- Short drives over long hauls

Fed to the AI as implicit context during all planning interactions. The user can view, edit, and override any inferred preference.

### Goal

An entry that helps the AI plan. Can exist at different scopes:
- **Long-term:** "Visit every Greek island", "Do 10 hikes this year"
- **Per-trip:** "Find a quiet beach for mom", "Try local street food"
- **General:** "Explore more nature", "Get off the beaten path"

Not a complex trackable entity — just context entries the AI considers.

### Media

Photos and videos stored and organized within the app:
- Auto-associated to Activities by GPS coordinates and timestamps
- Displayed on the map and timeline
- Included in shared trip views
- **Not edited in the app** — editing happens elsewhere, the app is for storage and organization

### Creator

A user who publishes completed Trips for others to view:
- Published trips are viewable, cloneable, and cherry-pickable
- Followable as a **trust signal** — followed creators' trips are weighted higher in AI recommendations
- Not a social feed — a quality signal for the recommendation engine

---

## Features by Lifecycle Phase

### Phase 1: Planning

#### Manual Planning
- Create a Trip with a name (minimum required input)
- Add Days (Day 1, Day 2, Day 3...)
- Add Activities to Days with start times
- Drag and drop Activities between Days
- Set optional details: location, duration, notes, links
- Assign a start date to map Days to calendar dates
- Add participants (app users and Companions)

#### AI-Assisted Planning
- Open a conversation with the AI at any point
- The AI already has context: Preferences, Goals, past Trips, Companions
- "Plan me a week in Portugal, I like coastal drives and quiet beaches, I'm bringing my mom"
- AI generates a full Trip with Days and Activities
- User refines via continued conversation or manual edits
- AI suggests activities based on: preferences, time of year, pace patterns, companion constraints

#### Collaborative Planning
- Invite other users to the Trip
- **Suggestions pool:** Anyone can propose Activities
  - Unassigned suggestions: "We should do this somewhere on the trip"
  - Day-specific suggestions: "For Day 3, what about this instead?"
- **Voting/choosing:** Group decides which Suggestions get promoted to the plan
- All collaborators can edit the plan directly (no owner approval needed)
- Changes are visible to everyone in real-time
- AI can help: "You have 5 unassigned Suggestions, want me to find slots for them?"

#### Route Planning
- Add driving Activities with specific routes (not just start/end points)
- Specify scenic roads, waypoints, "I want to take THIS road"
- AI suggests routes that match your style (scenic over fast)
- Preview estimated drive times
- Export to Google Maps / Waze with waypoints that force the desired route

### Phase 2: Active Trip

#### Day View (Primary Interface)
- Today's Activities shown in chronological order
- Current Activity highlighted
- Next Activity preview with travel time
- Tomorrow's weather visible
- Quick access to modify today's plan

#### Real-Time Adaptation
- **Weather alerts:** "Rain expected until 2pm tomorrow. Want to adjust?"
  - Quick actions: swap days, move outdoor activities, replace with indoor alternatives
  - Or open a conversation for nuanced replanning
- **Fatigue/mood:** "I'm tired, skip the hike" → AI reshuffles remaining activities
- **Spontaneous additions:** "My friend found a great bar" → Add it, plan adjusts
- **Cascading changes:** Moving an Activity from one Day to another automatically adjusts everything downstream
- Changes can be made from Day view OR overview — they cascade both ways

#### Group Coordination (Active Trip)
- Everyone on the Trip sees current and upcoming Activities
- Real-time visibility: who is going where right now
- **Group splits:** Two concurrent Activities with different participants
  - "Group A is on the boat, Group B is hiking"
  - Everyone sees both Activities and who's doing what
- Suggestions during active trip: "What about this instead of tonight's plan?"

#### Location Awareness (MVP: Light Tracking)
- When app is open: uses current location for context
- Shows nearest upcoming Activity and travel time
- "You're 10 minutes from your next stop"
- Photo GPS metadata matching (associate photos after the fact)

#### Location Awareness (Future: Background Tracking)
- Opt-in GPS tracking in background
- Auto-detect arrival/departure from Activities
- Auto-tag photos by matching timestamps to locations
- Detect deviations from plan ("You seem to be heading somewhere else — add new Activity?")
- Battery-optimized, privacy-first

### Phase 3: Post-Trip (History)

#### The Trip Record
- Final state of the plan IS the historical record
- No separate "what actually happened" layer
- If you skipped something, you removed it during the trip
- The record is what you ended with

#### Media Organization
- Photos auto-associated to Activities by GPS and timestamp
- View photos on the timeline (chronological within each day)
- View photos on the map (pinned to locations)
- Videos associated the same way
- Album-like organization without needing a separate app

#### Interactive Map View (Primary Sharing Artifact)
- Full trip displayed on a map:
  - Activity pins at each location
  - Routes traced between Activities (especially driving routes)
  - Photos pinned to their locations
  - Color-coded by Day
- Zoomable, scrollable, clickable
- Click an Activity pin → see details, photos, notes
- Click a route → see the road taken, photos along the way

#### Sharing
- **Share via link:** Anyone with the link can view the completed trip
- **View modes:**
  - Map view (primary) — the visual hook
  - Timeline view — day-by-day narrative
  - Gallery view — all photos organized by Activity
- **Viewer actions:**
  - Browse and enjoy (read-only)
  - Clone entire Trip as a template for their own planning
  - Cherry-pick individual Activities into their own Trip
  - "I like their Day 2 coastal drive — add that to my plan"
- **AI assists viewers:** "You saved 3 Activities from this trip. Want me to build a plan around those for your 5-day window?"

---

## User Stories

### Story 1: Solo Trip Planning with AI

**Sarah, experienced traveler, planning a week in Japan**

1. Sarah opens the app and creates a new Trip: "Japan Week"
2. She opens the AI conversation
3. The AI already knows from her 8 past trips: she prefers quiet areas, walks 10-15km/day, likes local food over tourist restaurants, travels at a moderate pace
4. She says: "Plan me a week in Japan, I want to see Kyoto and the countryside, avoid Tokyo crowds"
5. AI generates a 7-day plan with Activities on each Day:
   - Day 1-2: Kyoto temples (quiet ones, not Fushimi Inari)
   - Day 3: Scenic train to Hakone
   - Day 4-5: Countryside ryokans and hiking
   - Day 6: Day trip from a base
   - Day 7: Departure buffer
6. Sarah tweaks: "Day 3 is too packed, spread it across Days 3-4"
7. AI reshuffles, adjusting downstream Days
8. She sets a start date — Days map to real calendar dates
9. Trip is in **Plan** state, ready to go

### Story 2: Group Planning with Friends

**Alex and 3 friends planning a weekend trip**

1. Alex creates a Trip: "Barcelona Weekend" and invites Maria, Tom, and Jen
2. Everyone starts adding Suggestions:
   - Maria: "La Boqueria market" (unassigned)
   - Tom: "Beach day" (suggests for Day 2)
   - Jen: "Paella cooking class" (suggests for Day 1 evening)
   - Alex: "Gothic Quarter walking tour" (suggests for Day 1 morning)
3. Voting begins — everyone marks what they're excited about
4. Conflicts on Day 2 afternoon: Tom wants beach, Maria wants Gaudi architecture
5. Both stay as Day 2 Activities with different participants — group split
6. The rest gets promoted to the plan by consensus
7. AI helps: "You have 3 unassigned suggestions and 2 empty afternoon slots — want me to fit them?"

### Story 3: Mid-Trip Adaptation

**The Chen family, Day 3 of a 5-day Scotland trip**

1. They wake up, open the Day View: 3 Activities planned today
2. A notification appears: "Rain expected 9am-2pm. Your morning hike (Glen Coe) would be in heavy rain."
3. Quick actions offered:
   - [Swap with tomorrow's museum visit]
   - [Find an indoor alternative]
   - [Keep the plan anyway]
   - [Open conversation for more options]
4. They tap "Swap with tomorrow" — one tap
5. Today reshuffles: museum in the morning, hike moves to tomorrow
6. Tomorrow adjusts automatically: previous museum slot replaced by the hike
7. At 4pm, they're tired. Dad opens the AI: "We're done for today, cancel the evening activity"
8. AI removes it and suggests: "I moved it to Day 5 since you have a lighter schedule. Want to keep it or drop it entirely?"

### Story 4: The Scenic Route Problem

**Marcus, road trip from San Francisco to Big Sur**

1. Marcus adds a driving Activity: "Pacific Coast Highway drive, SF to Big Sur"
2. He specifies: "I want to take Highway 1 the entire way — the coastal road, not the fastest inland route"
3. The Activity stores the full route with waypoints along Highway 1
4. He adds photo stops as sub-activities: Bixby Bridge viewpoint, McWay Falls
5. When he's ready to drive, he taps "Export to Google Maps"
6. The app sends waypoints that force Google Maps along Highway 1 — no more fastest-route fights
7. During the drive, he stops for photos — they auto-tag to this driving Activity
8. In the final shared trip, the full coastal route is traced on the map with his photos pinned along the road

### Story 5: Post-Trip Sharing

**Lisa finishes a 10-day Portugal trip**

1. Trip automatically moves to History state
2. Her 400 photos are auto-associated: 380 matched to Activities by GPS/timestamp
3. She manually assigns the remaining 20 (restaurant interiors, etc.)
4. She taps "Share" — generates a link
5. The shared view opens with an interactive map:
   - Algarve coast route traced in blue
   - Activity pins with her photos at each location
   - A stunning cliff beach photo appears when you click the "Praia da Marinha" pin
6. She shares the link on Instagram Stories
7. Her friend David opens it, explores the map
8. David cherry-picks 3 activities: the cliff beach, a restaurant in Lagos, and the coastal drive
9. David starts his own Portugal trip — AI says "You saved 3 activities from Lisa's trip. Want me to build a 5-day plan around these?"
10. The AI uses David's own preferences (he likes nightlife more than Lisa did) and adds evening activities Lisa didn't have

### Story 6: The Learning AI

**Omar's 12th trip with the app**

1. Omar says: "Plan me something for a long weekend in March"
2. The AI, drawing from 11 past trips, responds:
   - "Based on your history, you prefer: 2-3hr max drive from home, nature over cities, 2 activities per day (you usually cut the third), moderate hikes (5-10km), quiet accommodations. Your recent trips have been coastal — want something inland this time?"
3. Omar: "Yes, mountains"
4. AI suggests 3 options ranked by match:
   - Lake District (matches: moderate hikes, quiet, 3hr drive)
   - Snowdonia (matches: mountains, nature, slightly more adventurous)
   - Peak District (matches: closest, gentler terrain)
5. Omar picks Snowdonia, AI generates a 3-day plan calibrated to his pace and style
6. It also notes: "I didn't include any activities before 10am — you've never started before 10 in any previous trip."

### Story 7: YouTuber Publishing Their Trip

**Travel creator "Jake Abroad" finishes filming a 2-week Japan series**

1. Jake has used the app to plan and track his trip (it's his travel companion)
2. Trip is complete, photos and routes are all in the app
3. Jake taps "Publish" — the trip becomes publicly visible
4. He adds a description: "My 2-week Japan itinerary — every spot from the vlog series"
5. He gets a shareable link and embeds it in his YouTube video descriptions
6. In the video: "My full interactive itinerary is linked below — you can see every spot, every route, and grab whatever you want for your own trip"
7. Viewers open the link → explore Jake's trip on an interactive map
8. They see the exact ramen shop from Episode 3, the temple from Episode 5
9. Viewers who follow Jake: his future trips surface in their AI recommendations
10. A viewer planning their own Japan trip: the AI says "Jake Abroad (creator you follow) did a similar trip — here are activities from his itinerary that match your preferences"

### Story 8: Photos on the Map

**The Martinez family reviews their Italian road trip**

1. Trip is complete — 12 days, 800+ photos across 4 phones
2. Each family member's photos are uploaded (or synced from camera roll)
3. Auto-association: GPS metadata matches photos to Activities
4. The map shows Italy with their route traced and photo clusters at each stop
5. Zooming into Florence: 3 Activity pins, each with its photos
   - Click the Uffizi pin → 15 photos from inside the gallery
   - Click the Ponte Vecchio pin → sunset photos from the bridge
   - Click the trattoria pin → food photos, the menu, a selfie
6. The driving route from Florence to Cinque Terre shows photos taken during the drive — coastal views from the car
7. They share the link with family back home — grandparents explore the map and see exactly where their grandkids were
8. A year later, they're planning another Italy trip. The AI says: "You've already done Florence and Cinque Terre. Want to focus on the Amalfi Coast and Sicily this time?"

---

## The AI System

### What the AI Knows (Context Fed to Every Interaction)

1. **User Preferences** — explicit and inferred travel style
2. **Goals** — long-term and per-trip objectives
3. **Trip History** — every past trip with Activities, pace, skipped items, media
4. **Companion Profiles** — constraints of current travel partners
5. **Current Trip State** — all Days, Activities, Suggestions, and real-time changes
6. **External Data** — weather forecasts, points of interest, trail databases (via integrations)
7. **Followed Creators' Trips** — weighted recommendations from trusted sources

### How the AI Interacts

The AI is available in three modes:

**1. Conversational (Full Planning)**
- Open a chat, describe what you want
- AI generates plans, suggests alternatives, answers questions
- Available at any point: initial planning, mid-trip replanning, post-trip reflection
- The conversation produces structured output (Trip, Days, Activities) — not just text

**2. Structured UI Actions (Quick Decisions)**
- Notifications with quick-action buttons
- "Rain tomorrow — [Swap days] [Find alternative] [Keep plan]"
- No typing needed for common adjustments
- AI powers the suggestions behind each button

**3. Proactive Suggestions**
- App surfaces relevant suggestions without being asked
- Weather-based: "Tomorrow looks like rain, consider..."
- Pattern-based: "You usually get tired by Day 3 — your schedule is heavy, want to lighten it?"
- Discovery-based: "A creator you follow did an activity near where you'll be on Day 4"

### How the AI Learns

**Explicit signals:**
- User states preferences ("I prefer quiet places")
- User sets Goals ("explore more nature this year")
- User rates or reacts to activities after a trip

**Implicit signals (inferred):**
- Activities the user consistently skips or removes → things they don't enjoy
- Pace patterns → how many activities per day they actually complete
- Time patterns → when they start their day, when they stop
- Location patterns → coastal vs. inland, urban vs. rural
- Companion patterns → how travel style changes with different people
- Distance patterns → max driving time, preference for short hops vs. long drives

**Transparency:** The user can always see what the AI has inferred and correct it. "The AI thinks you prefer budget food because you chose cheap restaurants 8 out of 10 times — is that right?"

---

## Integrations (MVP: Curated Set)

### Weather
- Real-time forecasts for trip destinations
- Proactive notifications when weather affects planned Activities
- Multi-day forecast awareness for advance planning

### Maps / Points of Interest
- Location search and geocoding
- Points of interest database for suggestions
- Estimated travel times between Activities

### Trail / Activity Data
- Hiking trail database (difficulty, distance, elevation)
- Activity ratings and seasonal availability
- Opening hours for attractions

### Navigation Export
- Export Activities and routes to Google Maps / Waze / Apple Maps
- Full waypoint sequences for driving Activities (solves the scenic route problem)
- One-tap "navigate to next Activity"

### Future Integrations (Post-MVP)
- Flight/transport booking links
- Hotel/accommodation connections
- Restaurant reservation systems
- Open plugin model for third-party services

---

## Growth & Distribution Strategy

### The Strava Model

Every completed trip = a shareable artifact = organic distribution.

\`\`\`
User takes a trip → App creates interactive map record
                  → User shares link (social, messaging, blog)
                  → Viewers explore the map
                  → Viewers cherry-pick activities OR clone the trip
                  → Viewers become users
                  → New users take trips → (cycle repeats)
\`\`\`

### Creator Channel

Travel YouTubers and bloggers use the app as their trip planning tool. When they publish:
- They link their trip in video descriptions
- Their audience (high travel intent) explores the interactive map
- Viewers convert to users by wanting to clone/adapt the creator's trip
- Creators get followers → their trips become trusted AI recommendations

### SEO

Every published trip is indexable content:
- "Best road trips in Scotland" → real trips with real routes and photos
- More authentic than blog posts, more useful than TripAdvisor reviews
- Content inventory grows with every user who publishes

### Organic / Word of Mouth

The app is most valuable when used with others:
- Collaborative planning requires inviting friends
- Shared trips get sent to friends and family
- "What app is this?" natural discovery

---

## Business Model

### Freemium Subscription

**Free tier (fully functional):**
- Create and manage unlimited Trips
- Manual planning (add Activities, organize Days, collaborate)
- Limited AI conversations per month (e.g., 10 planning sessions)
- Basic sharing (link to completed trips)
- Photo association (manual)

**Paid tier (power user):**
- Unlimited AI conversations
- Proactive AI suggestions (weather alerts, adaptation prompts)
- Advanced integrations (weather forecasting, trail data, POI database)
- Export to navigation apps with full waypoints
- Priority photo auto-tagging by GPS/timestamp
- Creator publishing tools
- Background location tracking (when available)

**Pricing direction:** $5-10/month or annual equivalent. Natural upgrade cohort: frequent travelers (3+ trips/year) who hit AI limits.

### Future Revenue Streams

- **Affiliate:** Bookings made through the app (hotels, activities, transport)
- **Creator premium:** Advanced publishing and analytics tools
- **B2B white-label:** Travel agencies using the planning engine for their clients

---

## Competitive Landscape

### Direct Competitors and Our Differentiation

| Competitor | What they do | Where they stop | Our advantage |
|-----------|-------------|-----------------|---------------|
| **Wanderlog** | Collaborative trip planning (Notion for travel) | Disappears once the trip starts. No during-trip intelligence. | We ARE the trip, not just the plan. |
| **Layla AI** | AI itinerary generation (chat-first) | One-shot generation. No learning. No during-trip. | We learn and adapt. Every trip makes the next better. |
| **TripIt** | Auto-organizes travel confirmations | Organization only. No planning intelligence. Business-focused. | We plan, adapt, and create shareable memories. |
| **Mindtrip** | AI taste-based travel recommendations | Pre-trip only. Starts cold each session. | We accumulate intelligence across trips. |
| **Roadtrippers** | Road trip route discovery | Desktop-era UX. No AI. No collaboration. Limited scope. | Mobile-first, AI-native, full lifecycle. |
| **Google Maps** | Navigation | Optimizes for fastest, not best experience. No trip awareness. | Trip-aware navigation that respects your intent. |
| **ChatGPT** | General AI for any planning | Text only. Starts from zero. Can't adapt in real-time. Can't share. | Structured trips, persistent memory, real-time adaptation. |

### Our Positioning

**"They plan the trip. We ARE the trip."**

Every funded competitor positioned on the planning moment. The white space is:
1. **During-trip adaptation** — real-time intelligence when plans break
2. **Post-trip sharing** — completed trips as interactive, discoverable content
3. **Compounding personalization** — AI that visibly gets better across trips

### Moat (Compounds Over Time)

1. **Preference data** — switching means starting cold on another platform
2. **Trip content inventory** — every shared trip is SEO/social inventory
3. **Real-time adaptation intelligence** — improves with more trip data
4. **Creator/follower trust network** — social lock-in for discovery

---

## Future Expansion

### Phase 1: MVP (Core Experience)
- Trip lifecycle (Plan → Active → History)
- Activity management with timeline and map views
- AI-assisted planning via conversation
- Day view with basic adaptation (manual + AI suggestions)
- Photo association (GPS/timestamp matching)
- Sharing via link (interactive map view)
- Basic weather integration

### Phase 2: Collaboration & Social
- Multi-user Trips with real-time collaboration
- Suggestions pool with voting
- Creator publishing and follow system
- Clone/cherry-pick from shared trips
- Group splits (concurrent Activities with different participants)

### Phase 3: Advanced Intelligence
- Background location tracking (opt-in)
- Proactive AI suggestions (weather, fatigue patterns)
- Inferred preferences from trip history
- Cross-trip learning ("you usually skip late activities")
- Creator recommendations weighted by follow

### Phase 4: Community & Discovery
- Public trip discovery (browse trips by destination, style)
- Search by preferences ("quiet coastal trips in Portugal")
- Creator profiles and content pages
- Community-driven recommendations
- Trip ratings and reviews

### Phase 5: Platform & Integrations
- Open plugin model (AllTrails, Booking.com, airlines)
- Advanced media features (basic trim/highlight from dashcam)
- On-device AI for offline adaptation
- AR overlays at points of interest
- B2B API for travel agencies
- Multi-language support

---

## Key Design Principles

1. **Tool-first, AI-enhanced** — the app works fully without AI. AI makes it better, never gates functionality.

2. **Minimal friction** — no forced onboarding, no required fields beyond a Trip name. Preferences build up naturally.

3. **One source of truth** — the plan is a living document. Its final state IS the historical record. No parallel "what was planned vs. what happened."

4. **Map role shifts by phase** — secondary during planning/active (timeline dominates for usability), primary when sharing (the visual hook that makes people say "I want to do that trip").

5. **Personal tool first** — sharing via links, no social feed. Data model supports future community layer without requiring one.

6. **AI knows you** — preferences, goals, and trip history feed every AI interaction as implicit context. The more you use it, the better it gets.

7. **Respect user agency** — AI suggests, user decides. Quick actions for common choices, conversation for complex ones. Never force an AI opinion.

8. **Privacy by design** — location data used for user's benefit only. No selling of travel data. Tracking always opt-in. Published trips are an explicit user choice.

---

## Why Now

**The technology window opened in 2024-2025:**

- AI inference costs dropped 97% in 18 months — a full planning session costs <$0.01
- Multimodal AI agents can orchestrate Maps, Weather, and Activity APIs simultaneously
- On-device AI makes mobile-first experiences responsive even mid-hike
- Function-calling and agent patterns moved from research to production

**The market is ready:**

- Global travel spending exceeded $9.5 trillion (UNWTO 2024)
- 75% of Gen Z travelers use 4+ apps per trip
- Google killed Google Trips in 2019 and never built a replacement
- Record travel demand + zero unified solutions = massive opportunity

**The window is closing:**

- Google is integrating Gemini into Maps (2025-2026)
- Established travel apps are bolting on AI features
- The opportunity for a new entrant to establish brand and community: ~18-24 months
- First-mover in the during-trip + post-trip space wins the compounding data advantage

---

## Summary

AI Trip Planner is not another itinerary generator. It's the first trip companion that:

1. **Plans** — collaboratively, conversationally, learning from your history
2. **Adapts** — in real-time when weather, mood, or circumstances change
3. **Remembers** — every trip makes the next one smarter
4. **Shares** — completed trips become beautiful, interactive, discoverable artifacts
5. **Grows** — every shared trip is organic distribution, every creator is a growth channel

The competitive moat compounds: preference data creates switching costs, shared trips create content inventory, real-time adaptation builds trust, and the creator network creates social lock-in. The longer you use it, the harder it is to leave — and the better your trips get.
`},{filename:"02-context.md",title:"Context",content:`# AI Trip Planner

A mobile-first trip planning tool that works fully without AI, but is AI-enhanced for frictionless planning, day-to-day adjustments, and learning from travel history.

## Language

### Core Entities

**Trip**:
A travel record with a lifecycle — the top-level entity representing a vacation, road trip, or local exploration.
_Avoid_: Journey, itinerary, vacation

**Activity**:
An event within a Trip, defined by a start time. Location, duration, route, media, and participants are all optional.
_Avoid_: Stop, point of interest, item, task

**Day**:
A sequential container of Activities (Day 1, Day 2, Day 3). Maps to a calendar date when the Trip has a start date.
_Avoid_: Slot, segment

**Suggestion**:
A proposed Activity that has not yet been promoted into the plan. Can be unassigned or placed on a specific Day as an alternative.
_Avoid_: Idea, draft, proposal

**Companion**:
A person on a Trip who is not an app user. Represented as constraints and tags (e.g. "Parents friendly") that influence AI planning.
_Avoid_: Guest, member (for non-users)

**Preference**:
A user's travel taste — explicit (stated) or inferred (derived from trip history). Fed to the AI as planning context.
_Avoid_: Setting, profile field

**Goal**:
An entry that helps the AI plan — can be long-term ("visit every Greek island"), per-trip ("find a quiet beach for mom"), or general ("explore more nature"). Not a complex trackable entity.
_Avoid_: Objective, milestone

**Media**:
Photos and videos stored and organized within the app, auto-associated to Activities by GPS and timestamp. Not edited in the app.
_Avoid_: Content, assets

**Creator**:
A user who publishes completed Trips for others to view. Followable as a trust signal that weights their Trips higher in AI recommendations.
_Avoid_: Influencer, publisher

### Trip Lifecycle States

**Plan**:
A Trip that is being designed but has not started. Activities are organized into Days without real calendar dates.

**Active**:
A Trip that is currently in progress. The planned Day becomes the live day view. The plan is a living document updated in real-time.

**History**:
A completed Trip. The final state of the plan IS the historical record — no separate "what actually happened" layer.

**Archived**:
A completed Trip moved out of the main view but still accessible and usable as AI context.

**Cancelled**:
A Trip that was planned but never taken.

## Relationships

- A **Trip** contains one or more **Days**
- A **Day** contains zero or more **Activities**
- An **Activity** has zero or more participants (app users or **Companions**)
- An **Activity** can have **Media** attached to it
- A **Trip** has zero or more **Suggestions** (unassigned or placed on a **Day**)
- A **Suggestion** becomes an **Activity** when promoted into the plan by group consensus
- A driving route is an **Activity** (not a gap between Activities), exportable to navigation apps
- A **Creator** publishes **Trips** that are viewable, cloneable, or cherry-pickable by others
- Following a **Creator** is a trust signal that weights their Trips in AI recommendations
- **Preferences** and **Goals** feed the AI as implicit context when planning any **Trip**
- Past **Trips** (History/Archived) inform future planning across all dimensions: preference patterns, operational logistics, and place knowledge
- Concurrent **Activities** on the same **Day** with different participants represent a group split — one Trip, not a branch

## Example dialogue

> **Dev:** "A user opens the app cold and says 'plan me a week in Portugal.' What happens?"
> **Domain expert:** "The AI opens a conversation. It already has the user's **Preferences**, **Goals**, and past **Trips** as context. It produces a **Trip** in **Plan** state with **Days** and **Activities**. The user can refine via conversation or edit manually."

> **Dev:** "It's raining on Day 3. What does the app do?"
> **Domain expert:** "A notification surfaces with quick actions — reshuffle the **Day**, swap with another **Day**, or open a conversation for nuanced replanning. Changes cascade: if an **Activity** moves from Day 3 to Day 4, the rest adjusts. One plan, two views — **Day** view and overview."

> **Dev:** "Two friends on a Trip want to do different things for an afternoon."
> **Domain expert:** "Both **Activities** go on the same **Day** with different participants. Everyone on the Trip sees both. When the Trip becomes **History**, the shared view shows all **Activities** with **Media** from both."

> **Dev:** "A creator publishes a Trip. A viewer wants three of their Activities."
> **Domain expert:** "The viewer cherry-picks those **Activities** into their own **Trip**. The AI can say 'you saved 3 activities — want me to build a plan around those for your dates?'"

## Flagged ambiguities

- "Plan" is used both as a lifecycle state (the Trip is in Plan state) and as a verb (planning a trip). Context makes it clear — as a noun/state it refers to the Trip's lifecycle phase.
- "Route" could mean a driving Activity or the navigational path within any Activity. Resolved: a driving route is an Activity; the exported waypoints sent to Maps are an implementation detail of that Activity.
- "Share" means two things: sharing an Active Trip with collaborators (read-write, live collaboration) vs. sharing a completed Trip via link (read-only, viewable by anyone). Context distinguishes — active sharing = collaboration, completed sharing = publishing.

## Key Design Principles

- **Tool-first, AI-enhanced**: the app is fully functional without AI. The AI makes it faster and smarter but is never a gate.
- **Minimal friction**: no forced onboarding, no required fields beyond creating a Trip. Preferences build up naturally over time.
- **One source of truth**: the plan is a living document. Its final state IS the historical record.
- **Map role shifts by phase**: secondary during planning/active (timeline dominates), primary when sharing (the visual hook).
- **Personal tool first**: sharing via links, no social feed. Data model supports future community/discovery publishing.
- **AI knows you**: Preferences (explicit + inferred) and past Trip history feed every AI interaction as implicit context.
`},{filename:"03-VIABILITY-REPORT.md",title:"Viability Report",content:`# Solopreneur Viability Report: AI Trip Planner

*Evaluation Date: 2026-05-17*
*Framework: Lead Venture Architect — Return on Energy (ROE) Analysis*

---

## Executive Summary

**Viability Score: 38/100**

This is an ambitious, well-articulated consumer product vision with genuine insight ("nobody owns the during-trip moment"). However, evaluated through the lens of two engineers with limited capital and no external funding, this idea has a severe mismatch between vision scope and execution reality. The core problems: consumer apps have brutal economics, the product requires reaching critical mass before monetization kicks in, and the full lifecycle vision (plan-go-share) demands 12-18 months of full-time engineering before delivering a differentiated experience. The idea is a **vitamin** for most travelers and only becomes a **painkiller** after repeated use — a retention loop that requires surviving long enough to prove it.

**Bottom line:** As a VC-backed startup with $1-2M and 18 months of runway, this is a viable bet. As a two-person bootstrapped operation targeting sustainable income, the ROE is dangerously low. The energy required to reach differentiation (trip #3+ where AI learning kicks in) exceeds what bootstrappers can sustain without revenue.

---

## 1. Value Deconstruction

### Core Problem

Travelers juggle 6+ disconnected apps across the trip lifecycle, losing context, coordination, and memories in the process.

### Problem Classification: Vitamin (with Painkiller Moments)

| Aspect | Classification | Reasoning |
|--------|---------------|-----------|
| Trip planning fragmentation | Vitamin | People have been doing this with 6 apps for years. It's annoying, not costly. |
| Mid-trip adaptation (rain, fatigue) | Mild painkiller | Real friction, but travelers adapt manually in minutes. Not expensive to ignore. |
| Group coordination chaos | Vitamin | WhatsApp is "good enough." Groups tolerate chaos. |
| Post-trip photo organization | Vitamin | Google Photos does most of this automatically. |
| AI that learns across trips | Vitamin | Only valuable after 3+ trips — delayed gratification. |

### Buyer Urgency & Willingness to Pay

- **Urgency:** Low. Trip planning happens weeks in advance. No emergency. No deadline pressure that forces adoption.
- **Willingness to pay:** Moderate but fragile. Travel apps historically see 2-5% freemium conversion. The "I'll pay $10/month for better trips" cohort exists but is small and already served by credit card travel perks, Google Maps, and free AI tools.
- **Switching cost from status quo:** Near zero. The 6-app workflow is free and familiar. Your product must be *dramatically* better, not incrementally better, to justify the switch.

### Honest Assessment

The problem is real but not acute. People tolerate fragmented travel planning the way they tolerated managing music across folders before Spotify — it works, it's just not elegant. The question is whether "elegant" justifies $10/month for enough people to sustain a business.

---

## 2. Market Reality Check

### Smallest Viable Paying Audience

**Frequent leisure travelers (4+ trips/year) who already use AI for planning and travel in groups.**

Estimated size: 2-5 million people globally (English-speaking, digitally-active, millennial/Gen Z). However, reaching them organically at scale requires the content flywheel to work — which requires existing users to complete trips and share them.

### Existing Alternatives

| Alternative | Cost | Switching Friction | Good Enough? |
|-------------|------|-------------------|--------------|
| ChatGPT + Google Maps + Notes | Free | None (it's the default) | Yes, for 90% of travelers |
| Wanderlog | Free / $35/yr | Low | Yes, for collaborative planning |
| TripIt | Free / $49/yr | Low | Yes, for organized travelers |
| Notion/Google Docs | Free | None | Yes, for manual planners |
| Layla AI | Free | None | Yes, for one-shot AI planning |
| Google Maps Lists + Saved Places | Free | None | Yes, for location bookmarking |

### Why Would a Customer Switch?

The honest answer: they wouldn't switch for planning alone (too many free options). They'd switch for the **compounding intelligence** — but that requires using the app for 3+ trips, which is 6-12 months of commitment before the differentiation materializes.

The only immediate switching trigger is the **during-trip adaptation** — if the rainy-day reshuffling is genuinely magical in the moment. But that requires:
1. Having already planned the trip in the app (planning lock-in first)
2. The app being open during the trip (habit formation)
3. Weather/context integrations working reliably (engineering investment)

This is a cold-start problem nested inside another cold-start problem.

---

## 3. Two-Engineer Feasibility

### Can Two Engineers Deliver This?

**The full vision: No.** The scope described in IDEA.md is a 2-3 year, 8-10 person product. It spans:
- Mobile app (iOS + Android, or cross-platform)
- Real-time collaboration infrastructure
- AI orchestration layer with multiple integrations
- Media storage and GPS-based auto-tagging
- Map rendering with custom routes
- Weather API integration with proactive alerts
- Navigation export with waypoint sequences
- Creator/sharing platform with SEO-indexable pages

**A focused MVP: Yes, barely.** Two engineers working full-time for 6-9 months could ship a basic plan-and-go experience. But "basic" won't differentiate from Wanderlog or ChatGPT.

### Scaling Limits & Burnout Risks

| Risk | Severity | Detail |
|------|----------|--------|
| Feature scope creep | Critical | The vision document describes 5 phases. Staying focused on Phase 1 requires extreme discipline. |
| No designer | High | Trip planning is intensely visual/UX-heavy. Two engineers building UI will produce functional but uninspiring interfaces. |
| Infrastructure costs | Medium | Real-time collaboration, media storage, AI inference, map tiles — costs accumulate before revenue. |
| Marketing gap | High | No one on the team does marketing. Organic growth via shared trips requires existing users — circular dependency. |
| Seasonal demand | Medium | Travel planning peaks seasonally. Revenue will be lumpy. Development continues year-round. |

### Operational Bottlenecks

1. **AI integration maintenance:** Weather APIs, Places APIs, and LLM providers change frequently. Ongoing maintenance tax.
2. **Mobile app deployment:** App Store review cycles, platform-specific bugs, device fragmentation.
3. **Customer support:** Travel is emotional. When the app fails mid-trip, users are angry. Two engineers can't provide real-time support.
4. **Content moderation:** If shared trips are public, you need moderation infrastructure.

### Automation/Productization Opportunities

Limited. This is not a service that can be templated or automated — it's a full consumer product that requires continuous engineering. There's no "productized service" version of a mobile app.

---

## 4. Monetization Models

### Model A: Consumer Subscription (as proposed)

| Metric | Estimate |
|--------|----------|
| Price | $5-10/month ($60-120/year) |
| Sales effort | High (content marketing, SEO, creator partnerships, app store optimization) |
| Delivery effort | Very high (full mobile app + backend + AI + integrations) |
| Time to first dollar | 9-15 months |
| Revenue at 1,000 paying users | $5,000-10,000/month |
| Realistic conversion rate | 2-4% of free users |
| Free users needed for $10k/month | 25,000-50,000 MAU |

**Verdict:** Requires massive scale to generate meaningful income. Typical consumer app trajectory: 18-24 months to break even, if ever.

### Model B: B2B White-Label for Travel Agencies

| Metric | Estimate |
|--------|----------|
| Price | $500-2,000/month per agency |
| Sales effort | High (enterprise sales cycle, demos, customization requests) |
| Delivery effort | High (white-label requires multi-tenancy, branding, onboarding) |
| Time to first dollar | 6-9 months |
| Revenue at 10 clients | $5,000-20,000/month |

**Verdict:** Higher unit economics but requires enterprise sales skills, customization work, and a different product focus. Viable but a completely different business than what's described in IDEA.md.

### Model C: AI Trip Planning API / Developer Tool

| Metric | Estimate |
|--------|----------|
| Price | $0.01-0.05 per planning session (usage-based) |
| Sales effort | Medium (developer marketing, documentation, integrations) |
| Delivery effort | Medium (API + docs, no mobile app needed) |
| Time to first dollar | 4-6 months |
| Revenue at scale | Requires millions of API calls for meaningful revenue |

**Verdict:** Lower delivery effort but commoditized quickly. OpenAI, Google, and every AI company can offer this. No moat.

### Missing Model: The One That Might Actually Work

**Premium Trip Templates + AI Personalization (Digital Product)**

| Metric | Estimate |
|--------|----------|
| Price | $15-30 per trip template (one-time) or $99/year unlimited |
| Sales effort | Medium (content marketing, SEO, creator partnerships) |
| Delivery effort | Medium (web app, not mobile-first; simpler scope) |
| Time to first dollar | 3-5 months |

Sell AI-personalized trip plans as standalone digital products. No mobile app needed. Web-based. Creator marketplace where travel creators sell their routes (you take 20%). Lower engineering investment, faster to market, clearer unit economics.

---

## 5. Differentiation & Positioning

### How to Avoid Direct Competition

The proposed positioning ("we ARE the trip, not just the plan") is strong conceptually but requires the full product to deliver on it. Without the during-trip and post-trip features, you're just another planning tool — directly competing with Wanderlog, Layla, and ChatGPT.

### Current USP Assessment

| Proposed USP | Strength | Problem |
|--------------|----------|---------|
| "AI that learns across trips" | Strong long-term | Invisible until trip #3. No immediate hook. |
| "During-trip adaptation" | Genuinely unique | Requires full mobile app + integrations to deliver. Heavy build. |
| "Shared trips as interactive maps" | Visually compelling | Requires users to complete trips first. Chicken-and-egg. |
| "Group planning with voting" | Moderate | Wanderlog already does this. Not unique. |

### Blue-Ocean Positioning Angle

**"The travel companion that remembers"** — position against ChatGPT specifically (not against travel apps). Frame the competition as: "You already use AI for trip planning. We're the AI that actually remembers you."

This narrows the audience to people already using AI for travel (large and growing) and positions against a clear, specific alternative (ChatGPT) rather than a fragmented category.

### Personal Brand Opportunity

Two engineers who travel and document their own trips using the tool. Build in public. Share real trip data. "We're building the app we wish existed" — authentic, relatable, but hard to monetize quickly.

---

## 6. Final Verdict

### Viability Score: 38/100

### Green Flags (Proceed Signals)

1. **Genuine insight.** "Nobody owns the during-trip moment" is real and verifiable. The market gap exists.
2. **Technical founders building a technical product.** You can actually build this yourselves — no dependency on hiring.
3. **Growing market tailwind.** AI + travel intersection is hot. Investor interest is real if you choose to raise.
4. **Compounding moat if you survive.** The data flywheel (preferences, trip history, shared content) is genuinely defensible at scale.
5. **Clear content-led growth mechanic.** Shared interactive maps are inherently shareable — the Strava analogy is apt.

### Red Flags (Pivot or Stop Signals)

1. **Vitamin, not painkiller.** The problem is real but not urgent. People tolerate the status quo.
2. **18+ month time-to-differentiation.** The product only becomes meaningfully better than alternatives after multiple trips per user. That's a year+ of retention before the moat compounds.
3. **Consumer app economics are brutal.** 2-4% conversion, high CAC, seasonal demand. Two engineers cannot sustain this without funding or alternative income.
4. **Scope is a startup, not a side project.** The vision requires $1-2M and 12-18 months. This is incompatible with bootstrapping unless you radically reduce scope.
5. **No revenue for 9-15 months.** The product needs to be feature-complete enough to charge for. During that time, you're burning savings.
6. **Cold-start problem on three dimensions:** Need users to have trip data (for AI learning), need completed trips (for sharing), need shared trips (for organic growth). All three require existing users.
7. **Google risk is real.** Gemini + Maps integration in 2025-2026 could deliver 80% of the value at zero cost to users.

---

## Strategic Pivot: High-Leverage Alternative

### "Trip Intelligence Layer" — B2B2C Play

Instead of building the full consumer app, build the **AI trip adaptation engine** as an API/SDK that existing travel apps integrate.

**Why this might work better:**
- Leverages your core technical insight (during-trip intelligence) without building an entire mobile app
- Existing travel apps (Wanderlog, TripIt, hotel chains, airlines) need AI capabilities but don't have specialized travel-AI teams
- Faster to market (API vs. mobile app)
- B2B pricing ($0.05-0.50 per session) with enterprise contracts
- You become the "Stripe for trip intelligence" rather than another consumer app in a crowded market

**Why you probably won't do this:** It doesn't match the vision. The vision is the consumer product. But the question isn't "what's the best product?" — it's "what's the best return on energy for two engineers with limited capital?"

---

## 3-Step MVP Validation Plan

If you proceed despite the red flags, here's how to validate with minimum energy:

### Step 1: Validate Willingness to Pay (2 weeks)

- Build a landing page describing the during-trip adaptation feature specifically
- Run a "plan your next trip" waitlist with a $5/month early-bird signup (real payment, refundable)
- Target: 100 paid signups = strong signal. Under 20 = pivot.
- Distribution: Reddit r/travel, r/solotravel, travel Twitter/X, backpacker forums
- Cost: ~$50 (domain + hosting)

### Step 2: Validate the Magic Moment (4-6 weeks)

- Build a web-only (not mobile) prototype of ONE feature: the rainy-day adaptation
- User inputs their existing trip plan (paste from ChatGPT/notes)
- App monitors weather and sends a "your Day 3 has rain — here's a reshuffled plan" notification
- Deliver via email/SMS, not an app (eliminates mobile development)
- Target: 50 users go through one real trip with this feature. Measure: do they come back for trip #2?

### Step 3: Validate the Growth Loop (4-6 weeks)

- Add "share your trip" with an interactive map view (web only)
- Measure: of shared trips, how many viewers click "clone this trip"?
- Target: 10%+ clone rate = the growth flywheel has potential
- If under 2%: the sharing mechanic doesn't drive growth and the Strava analogy fails

**Total validation timeline: 10-14 weeks, minimal code, no mobile app, under $500 spent.**

If all three steps validate, you have evidence to either raise pre-seed funding or commit to full-time development. If any step fails, you've saved 12+ months of building the wrong thing.

---

## Summary Table

| Dimension | Assessment |
|-----------|-----------|
| Problem severity | Moderate (vitamin with painkiller moments) |
| Market size | Large but hard to capture |
| Competition | Intense and well-funded |
| Execution feasibility (2 engineers) | Possible for MVP, impossible for full vision without funding |
| Time to revenue | 9-15 months (consumer) / 4-6 months (B2B pivot) |
| ROE (Return on Energy) | Low for consumer app / Medium for B2B or digital product pivot |
| Recommended path | Validate with 10-week plan above; raise if validated; don't bootstrap the full vision |

---

*This report evaluates the idea through a bootstrapper's lens. If the team's actual goal is to raise venture capital and build a funded startup, the calculus changes — the insight is strong, the market is large, and the pitch is investable. But that's a different game with different rules, risk profiles, and timelines.*
`},{filename:"04-pitch-scorecard.md",title:"Pitch Scorecard",content:`# Pitch Scorecard: AI Trip Planner

*Skill: startup-pitch | Generated: 2026-05-16*

---

## Scoring

| Dimension | Score (1-10) | Rationale |
|-----------|-------------|-----------|
| **Clarity** — Can someone explain what you do after hearing 2 sentences? | 9 | The opener is concrete, jargon-free, and passes the "explain it back" test. The 6-app story makes it immediately tangible. |
| **Strength Sequencing** — Is the most impressive element in the first 60 seconds? | 8 | The insight (no one owns the during-trip moment) is genuinely differentiated and lands early. Only not a 9 because without a live demo, it's a claim, not proof. |
| **Traction Honesty** — Are numbers accurate, timeframed, and real? | 8 | Honestly states "no traction, idea stage." No vanity metrics. No fake waitlist. Points to validated pain through personal experience. Full marks for honesty, docked for the reality of having nothing to show. |
| **Insight Quality** — Is the insight genuinely non-obvious and specific? | 9 | "Everyone competes for the planning moment; nobody owns the trip itself" is specific, verifiable (you can check every competitor), and creates an "aha." The compounding intelligence angle is a bonus insight. |
| **Market Sizing** — Is the math bottom-up with clear assumptions? | 5 | The math exists but is loose. "200M planned trips" is estimated, not sourced. Conversion assumptions (5% penetration) are speculative. Needs real bottom-up validation before investor use. |
| **Business Model** — One model, clearly stated? | 6 | "Freemium, pay for AI power" is clear. But the upgrade trigger is hypothetical and multiple future revenue streams (affiliate, B2B, creator tools) signal uncertainty. Acceptable at pre-seed. |
| **Team Credentials** — Specific, verifiable accomplishments? | 4 | Two software engineers — no specific accomplishments mentioned, no named companies, no shipped products referenced. "We're the user" is good but generic. Needs concrete engineering wins. |
| **Ask Clarity** — Amount + milestones + timeframe, stated with confidence? | 6 | Since not actively raising, the ask is directional ("$500K-$1M when we raise"). Milestones are clear (prototype, 1,000 users, retention data). Missing: specific timeframe and round structure. Acceptable for clarity/planning purpose. |
| **Overall** | **55/80 (69%)** | |

---

## Verdict: Investor-ready with caveats (50-64 range: 55)

The pitch narrative is strong — the insight is sharp, the positioning is differentiated, and the story is clear. The gaps are all in the "proof" department: no traction, unspecific team credentials, and loose market math. These are normal for an idea-stage company and will self-resolve as you build.

---

## Improvement Recommendations

### Team (Score: 4) — Highest priority fix

**What's weak:** No specific engineering accomplishments. "Two software engineers" could be anyone.

**How to fix:** Add 1-2 specific, verifiable accomplishments per founder. Examples:
- "Built [specific system] at [named company] that handles [impressive scale]"
- "Shipped [named product] to [X users]"
- "Previously founded [company] — [outcome]"
- "Open source contributor to [relevant project]"

Even without big-name companies, specific shipped work beats vague credentials.

### Market Sizing (Score: 5)

**What's weak:** The "200M planned trips" number is estimated and the 5% penetration assumption is arbitrary.

**How to fix:** Find one real data source (UNWTO, Phocuswright, or Skyscanner reports) for number of multi-day leisure trips by digital-first travelers. Build up from there: "X million digitally-active travelers × Y trips/year × Z% who'd pay for planning tools = SAM."

### Business Model (Score: 6)

**What's weak:** Multiple future revenue streams signal "we don't know yet."

**How to fix:** In investor settings, commit to ONE primary model: "Subscription. That's it. Affiliate and B2B are optionality, not the plan." This shows conviction.

---

## Verification Results

| Check | Status | Note |
|-------|--------|------|
| Unlabeled claims | Pass | All research marked [Knowledge-Based] |
| Internal contradictions | Pass | 2-min and 10-min tell same story, Q&A aligns |
| Cross-format consistency | Pass | Key beats (6-app problem, during-trip gap, Strava analogy) appear in all formats |
| Traction honesty | Pass | No inflated metrics, no fake signals |
| Top-down TAM | Warning | Market math leans top-down. Flagged in scorecard. |
| Team accomplishments | Warning | No verifiable specifics. Flagged. |
| Stale data risk | Warning | All research knowledge-based (training data ~early 2025). Verify before investor use. |

---

## Delivery Tips

1. **Practice the 2-sentence opener** until you can deliver it to a stranger at a coffee shop without pausing. It's the most important 15 seconds.
2. **Demo the rainy-day adaptation,** not generic trip planning. That's your magic moment — the thing ChatGPT can't do.
3. **Invite questions after the insight.** When you say "nobody owns what happens after the plan is made" — pause. If an investor starts talking, let them. They're selling themselves.
4. **Own "we have no traction" confidently.** "We haven't launched — here's what we're building toward" is infinitely better than dodging the question. Investors respect honesty at pre-seed.
5. **Use the Strava analogy sparingly.** It's a hook, not a crutch. If an investor pushes on it ("Strava took 5 years"), pivot to: "The mechanic is similar (activity → share → discover), the timeline is compressed because AI makes every trip shareable by default."
`},{filename:"05-pitch-2min.md",title:"Pitch 2Min",content:`# 2-Minute Verbal Pitch (~300 words): AI Trip Planner

*Skill: startup-pitch | Generated: 2026-05-16*

---

## Script

> Last month I planned a road trip with my mother. I used ChatGPT for the itinerary, Google Maps for directions — which kept fighting me on scenic routes — AllTrails for hikes, a weather app, WhatsApp to coordinate, and my camera roll became a mess. Six apps. One trip. And my next trip? Start from scratch. Re-explain everything to ChatGPT like it never met me.
>
> Every travel app that's raised money — Wanderlog, Layla, TripIt — they compete for one moment: **planning**. Then they vanish. But trips don't break during planning. They break on Day 3 when it rains, when you're tired, when your friend finds something better. Nobody owns what happens after the plan is made.
>
> We're building the one app for your entire trip. Plan together with friends — suggest, vote, decide. Adapt on the fly — it rains, one tap reshuffles your day. Share when you're done — your trip becomes a beautiful interactive map that others can clone or cherry-pick from.
>
> The AI learns your style with every trip. Scenic roads over highways. Quiet beaches over crowds. Trip number 5 is dramatically better than trip number 1 — because the app knows you.
>
> This couldn't exist two years ago. AI inference costs dropped 97%. A full planning session costs less than a penny. Real-time mobile adaptation went from research project to production-ready. And Google hasn't built a unified trip product since killing Google Trips in 2019.
>
> We're two engineers who built this because we needed it. We're building toward a working prototype, then 1,000 beta users to validate the loop: plan, go, share, learn, repeat. Strava for travel — where every trip makes the next one better.

---

## Delivery Notes

**Pace:** ~150 words per minute. This script is ~290 words = just under 2 minutes.

**Emphasis points:**
- "Six apps. One trip." — pause after this. Let it land.
- "Nobody owns what happens after the plan is made." — this is your differentiator. Slow down.
- "Trip number 5 is dramatically better than trip number 1" — this is the moat. Eye contact.
- "Strava for travel" — your closing hook. Deliver with confidence.

**Pauses:**
- After the 6-app story (let them recognize themselves)
- After "nobody owns what happens after" (let the insight sink in)
- Before the closing line (signal you're wrapping up)

**Tone:** Conversational, not rehearsed. You're telling a friend about a frustration you solved. Not presenting slides.

**If you only have 60 seconds:** Cut to paragraph 1 (the story) + paragraph 3 (what we do) + the closing line. That's your elevator version.

---

## Red Flags

- No traction metrics — relies entirely on story and insight
- Business model not mentioned (acceptable at 2 min — they'll ask in Q&A)

## Yellow Flags

- "Strava for travel" analogy is strong but investors may push on whether the sharing loop actually works for travel (lower frequency than fitness)

## Sources

Knowledge-based research. Verify AI cost figures and Google Trips timeline before investor use.
`},{filename:"06-pitch-full.md",title:"Pitch Full",content:`# Full Pitch Narrative (10 minutes): AI Trip Planner

*Skill: startup-pitch | Generated: 2026-05-16*

---

## Structure: Insight-Led (Pre-Traction)

**Ordering rationale:** No traction to lead with. The strongest asset is the insight — the 6-app problem is viscerally relatable and the "no one owns the during-trip moment" positioning is genuinely differentiated. Leading with insight creates an "aha" before introducing the solution.

---

## 1. WHAT YOU DO (30 seconds)

> "We're building the one app for your entire trip — plan together, adapt on the fly, and share as interactive maps — powered by AI that learns your travel style with every trip you take. No more juggling Maps, notes, group chats, weather apps, and photo albums just to go on vacation."

**Specific example:**

> "Last month, I planned a road trip with my mother. I used ChatGPT to create the itinerary, Google Maps for navigation — but it kept fighting me on scenic routes — AllTrails for hikes, a weather app to check rain, WhatsApp to coordinate, and my phone's camera roll became a mess of unsorted photos. Six apps, one trip. And the next trip? I'd start from scratch, re-explaining everything to ChatGPT like it had never met me."

**[Speaker note: Pause here. Let the audience recognize themselves in this story. Most travelers will nod.]**

---

## 2. UNIQUE INSIGHT (90 seconds)

> "Here's what we realized: every travel app that's been funded — Wanderlog, Layla, TripIt, Mindtrip — they all compete for the same moment: **trip planning**. They help you build an itinerary. Then they disappear."

> "But planning isn't where trips break. Trips break on Day 3 when it rains. On Day 4 when you're exhausted and skip the hike. When your friend finds a better restaurant and everyone needs to re-coordinate. The plan is just the starting line — and nobody owns what happens after."

> "We also realized something else: trip planning is cumulative. I'm a better trip planner on trip number 10 than trip number 1 — because I know what I like, what pace I prefer, who I'm traveling with. But no tool accumulates that intelligence. Every app starts cold. Every conversation starts over."

> "Our insight is simple: **the trip itself is the product, not just the plan.** And the more trips you take, the smarter your next trip should be."

**[Speaker note: This is your strongest moment. Deliver "the trip itself is the product" with conviction. Pause. Let investors internalize. If they start asking questions here, let them — that's the pitch working.]**

---

## 3. PROBLEM (90 seconds)

> "Let me quantify the pain. A typical 5-day trip touches 6+ apps:"

| App | Role | What's broken |
|-----|------|---------------|
| ChatGPT / AI chat | Initial planning | Starts from zero every time. No memory. |
| Google Maps | Navigation | Optimizes for fastest, not scenic. Fights your intent. |
| Weather app | Forecasting | No connection to your plan. You notice rain but manually replan. |
| AllTrails / activity apps | Discovery | Siloed. Findings don't feed back into your itinerary. |
| Group chat | Coordination | Suggestions buried in messages. No voting, no structure. |
| Camera roll | Documentation | Untagged photos. Dead after the trip ends. |

> "The result? Planning is fragmented, execution is reactive, and the trip — the actual experience — dies the moment you get home. A pile of photos nobody revisits."

> "And here's the market reality: travel spending hit $9.5 trillion in 2024. Gen Z travelers use 4+ apps per trip. Google killed Google Trips in 2019 and never replaced it. There is no unified trip experience. The market has been fragmented for six years."

**[Speaker note: The table works great on a slide. In verbal delivery, pick 2-3 apps and make them vivid. The Google Trips fact lands well — "even Google gave up."]**

---

## 4. SOLUTION (2 minutes)

> "We're building a mobile-first trip planner that covers the entire lifecycle: plan, go, share."

**Planning (works without AI, AI makes it magic):**

> "You can plan manually — add activities, drag them between days, set times. But the magic path: open a conversation. Tell the AI 'plan me a week in Portugal, I like coastal drives and quiet beaches, I'm bringing my mom.' The AI already knows your preferences from past trips. It generates a full plan in minutes."

> "Groups plan together. Friends throw suggestions into a pool, vote on activities, and chosen ones get promoted into the plan. No more 47-message WhatsApp threads."

**Active trip (where we differentiate):**

> "When the trip starts, you get a day view. This morning's activities, tonight's restaurant, tomorrow's weather. It rains? The app surfaces a notification: 'Rain until 2pm. Want to swap the hike to Thursday and do the museum today?' One tap."

> "You're tired and want to skip something? Tell the AI, it reshuffles. Your friend finds a rooftop bar? Add it. Changes cascade — the whole plan adjusts. It's a living document, not a printout."

**Post-trip (the growth engine):**

> "When the trip ends, its final state IS the record. Photos auto-tagged to locations by GPS. Routes traced on a map. And you can share it — a beautiful interactive map with pins, photos, and the actual routes you drove. Think Strava's activity sharing, but for entire trips."

> "This is our growth loop: every shared trip is discoverable content. Other users find it, clone it as a template, cherry-pick individual activities. Creators publish trips. Followers use them as trusted recommendations. The AI weighs followed creators higher when planning — it's a trust signal, not a social feed."

**[Speaker note: If you're demoing, show the rainy-day adaptation — it's the "magic moment" that separates you from competitors. Don't demo generic trip generation (ChatGPT does that). Demo the mid-trip intelligence.]**

---

## 5. WHY NOW (60 seconds)

> "Two years ago, this product couldn't exist at consumer pricing."

> "AI inference costs dropped 97% in 18 months. A full multi-turn planning session now costs less than a penny. Real-time adaptation on mobile — re-routing your day because it's raining — that's not a research project anymore, it's production-ready."

> "Meanwhile, multimodal AI agents can now orchestrate Maps, Weather, Places, and Calendar APIs simultaneously. Function-calling, vision models parsing menus and signs — this was impossible in 2022, expensive in 2023, and now costs nothing."

> "The technology just caught up to what travelers actually need. And the window is open: Google hasn't built a unified trip product since killing Trips in 2019. No incumbent owns the plan-go-share loop. But that window closes in 18-24 months as Google integrates Gemini into Maps."

**[Speaker note: "Two years ago this couldn't exist" is a strong opener for this section. It immediately answers "why hasn't someone done this?" — the answer is: they couldn't.]**

---

## 6. MARKET SIZE (60 seconds)

> "Global travel spending: $9.5 trillion annually. But that's not our market — we're not selling flights."

**Bottom-up math:**

> "There are approximately 1.4 billion international trips per year (UNWTO). Add domestic trips and you're looking at billions of trip-planning events annually."

> "We target the 'planned trip' segment — multi-day trips that require real planning (not a weekend dinner). Conservatively, 200 million planned trips per year by digitally-active travelers."

> "At $5-10/month subscription (or ~$30-60 per trip equivalent), a 5% penetration of that market = 10 million paying users = $600M-$1.2B annual revenue opportunity."

> "Initial beachhead: English-speaking millennial/Gen Z travelers who already use AI for planning (5-10 million people today). Expand from there."

**[Speaker note: Investors will push on conversion assumptions. Be ready to say "we don't know yet — this is our hypothesis" honestly. The math shows the opportunity is large enough to be interesting.]**

---

## 7. BUSINESS MODEL (30 seconds)

> "Freemium subscription. Free tier: full planning and trip management, limited AI conversations per month. Paid tier: unlimited AI, advanced integrations (weather alerts, trail data, export to navigation apps), creator publishing tools, priority photo auto-tagging."

> "The free tier is a complete product — we don't cripple it. The paid tier makes you faster and smarter. People who travel frequently (3+ trips/year) are the natural upgrade cohort."

> "Long-term monetization: affiliate revenue from bookings (when users book hotels/activities through the app), B2B white-label for travel agencies, and premium creator features."

**[Speaker note: Keep this tight. "Freemium, pay for AI power" is understood instantly. Don't dwell on future monetization — it's directional, not proven.]**

---

## 8. TEAM (30 seconds)

> "We're two software engineers who built this product because we needed it. I planned a road trip with my mother — a real trip, to a real place — and documented every moment where I was frustrated, switching apps, re-explaining context. That frustration became this product spec."

> "We have the technical ability to build this ourselves — mobile, AI integration, backend infrastructure. We are the target user. And we're shipping."

**[Speaker note: At pre-seed with two engineers and no famous accomplishments, the pitch is: "we are the user, we can build it, and we're moving fast." If you have specific engineering accomplishments (scaled systems, shipped products at known companies), add them. Otherwise, keep it confident and brief.]**

---

## 9. THE ASK (30 seconds)

> "We're building toward a public prototype within [X weeks]. Our immediate focus: nail the during-trip experience — the day view, real-time adaptation, and the AI that remembers you. That's the magic moment that no competitor delivers."

> "When we raise, we'll be looking for $500K-$1M pre-seed to build the MVP, onboard 1,000 beta users, and validate retention through the plan-go-share loop."

> "We want partners who travel, who feel this pain, and who understand that the moat compounds: every trip makes the AI smarter, every shared map is organic distribution, and every adaptation builds switching cost."

**[Speaker note: Since you're not actively raising, frame this as vision + timeline + what you'd look for. If the audience is excited, they'll self-select. The "partners who travel" line lets investors see themselves as users — that's powerful.]**

---

## Transitions (for smooth delivery)

- After What You Do → Insight: "And here's what we noticed when we looked at the space..."
- After Insight → Problem: "Let me show you how bad the fragmentation actually is..."
- After Problem → Solution: "So what does a unified trip experience actually look like?"
- After Solution → Why Now: "Now, the obvious question: why hasn't someone built this before?"
- After Why Now → Market: "And the opportunity is massive..."
- After Market → Business Model: "Here's how we capture it..."
- After Business Model → Team: "And here's why we're building this..."
- After Team → Ask: "So where are we headed?"

---

## Red Flags

- **No traction.** The pitch relies entirely on insight, vision, and team. Investors at seed+ stages will want metrics. At pre-seed/angel, this is acceptable if the demo is strong.
- **Business model is unproven.** "Freemium" for consumer apps has a historically low conversion rate (2-5%). Will need validation.
- **Two engineers, no designer.** Trip planning is a visual, UX-heavy product. A design co-founder or early hire will be questioned.

## Yellow Flags

- **Market size math is top-down-ish.** The 200M "planned trips" number needs validation with real data.
- **"Google will do this" risk is real.** The answer (misaligned incentives) is good but not bulletproof.
- **Research is knowledge-based.** Figures should be verified with current sources before investor-facing use.

## Sources

All research findings are knowledge-based from training data through early 2025. Key data points to verify independently:
- UNWTO international arrival figures (2024)
- GPT-4 pricing history and current inference costs
- Competitor funding amounts (Layla, Wanderlog, Mindtrip)
- Google Trips shutdown date and aftermath
- Gen Z travel behavior statistics (Google/Phocuswright 2024)
`},{filename:"07-pitch-appendix.md",title:"Pitch Appendix",content:`# Q&A Appendix: AI Trip Planner

*Skill: startup-pitch | Generated: 2026-05-16*

---

## Top 10 Likely Investor Questions

### 1. "How is this different from just using ChatGPT + Google Maps?"

**Answer:** ChatGPT generates text — a static itinerary. It doesn't adapt when things change, it doesn't track where you are, it doesn't coordinate with your travel group, and it starts from zero every time. We orchestrate workflows: rerouting, notifying travel partners, adapting the live plan. The AI is the orchestration layer, not the interface. And critically — it learns. Trip 5 with us is nothing like your 5th conversation with ChatGPT.

### 2. "Google has Maps, Flights, Gemini — won't they just build this?"

**Answer:** Google killed Google Trips in 2019 and hasn't shipped a unified replacement in 7 years. Here's why: Google monetizes by sending you away — to hotel booking pages, to flight comparison sites, to ad-supported recommendations. A unified trip experience that keeps you *in the app* conflicts with their revenue model. We monetize by keeping you in. Fundamentally different incentives. Plus — Google has never shipped a collaborative social product that works.

### 3. "Travel is seasonal and low-frequency. How do you retain users?"

**Answer:** Three retention mechanisms:
1. **Between trips:** Your profile, preferences, and trip history live here. The app gets smarter over time — leaving means starting over.
2. **Social content:** Browsing others' shared trips, following creators, planning future trips. This creates year-round engagement between your own trips.
3. **Frequency compounding:** The average millennial takes 4-5 trips/year (including short getaways). And a "trip" in our system can be as small as a day exploring your own city.

### 4. "How do you make money? Consumer apps with freemium have terrible conversion rates."

**Answer:** Freemium with a natural upgrade trigger: AI usage. Free users get full planning and trip management with limited AI conversations per month. When you're mid-trip and it's raining and you want AI to reshuffle your day — that's a high-intent moment to upgrade. We don't cripple the free product; we make power users faster.

Longer term: affiliate revenue from bookings (hotels, activities booked through the app), creator tools (premium publishing features), and potentially B2B (white-label for travel agencies).

### 5. "What's your moat? What stops a well-funded competitor from copying this?"

**Answer:** The moat is compounding and multi-layered:
1. **Preference data:** Every trip trains the personalization model. A user with 10 trips on our platform gets dramatically better recommendations than a new user on any competitor. Switching means starting cold.
2. **Shared trip inventory:** Every completed and shared trip is searchable content — SEO, social distribution, creator recommendations. This inventory grows with every user.
3. **Real-time adaptation intelligence:** The more trips we see, the better our AI handles edge cases (what to do when it rains in Lisbon vs. Tokyo).
4. **Network effects (later):** Creator-follower relationships and group trip coordination create social lock-in.

None of these are defensible on day one. They compound over 12-24 months.

### 6. "How do you plan to acquire users? What's your distribution strategy?"

**Answer:** Three channels, prioritized:
1. **Organic/content-led (primary):** Every shared trip is a shareable link with an interactive map. Users share these on social media. This is earned distribution — the Strava model. One great trip shared publicly can drive thousands of views.
2. **SEO:** Shared trip content is indexable. "Best road trips in Scotland" results powered by real user trips, not blog posts.
3. **Creator partnerships:** Travel YouTubers link their app trip in video descriptions (like "my full Japan itinerary — explore it here"). This drives downloads from an audience with high travel intent.

We don't plan to buy users through paid ads at launch.

### 7. "You have no traction. Why should we believe people want this?"

**Answer:** Three things:
1. **Personal validation:** We built this product spec from a real trip we took. Every feature maps to a real frustration we documented in the moment — not hypothetical.
2. **Market signal:** 6 companies in this space raised money in the last 2 years (Layla, Mindtrip, Wanderlog, etc.). The demand is validated — the execution isn't.
3. **Behavioral evidence:** 200M+ people use ChatGPT weekly. Travel planning is one of the top use cases. They're already doing this — badly, in fragments, starting from scratch each time. We're unifying a workflow that already exists across 6 apps.

### 8. "Two engineers — who's doing product and design? This is a UX-heavy product."

**Answer:** We're builders first. The v1 prototype will be designed and built by us — we're targeting functional clarity over visual polish initially. Our first hire will be a product designer. We're also the target user — we travel frequently, we feel the pain, and we know what "good" looks like from using the fragmented alternatives.

### 9. "What's the competitive response? What happens when Wanderlog adds AI?"

**Answer:** Wanderlog adding AI chat is like TripAdvisor adding an AI button — it's a feature bolt-on, not a rethink. Their architecture is built around the planning moment. Adding a chatbot doesn't give them: live-trip adaptation, compounding personalization across trips, collaborative suggestion voting, or shared-trip-as-social-content. These require a different data model and a different product philosophy. We're building AI-native from day one — the AI isn't a feature, it's the orchestration layer.

### 10. "What milestones would make you ready for a seed round?"

**Answer:**
- Working prototype demonstrating the magic moment (real-time day adaptation)
- 1,000 beta users completing at least one full trip cycle (plan → active → share)
- Retention data: what % come back for trip #2?
- At least 100 shared trips generating organic inbound views
- Clear signal on which features drive upgrade (AI usage patterns)

---

## Objection Handling

### "This sounds like a 'nice to have,' not a 'must have.'"

> "It's a 'nice to have' on any individual trip. It becomes a 'must have' by trip #3, when the AI knows your pace, your preferences, and your travel partners. The switching cost compounds. Strava isn't essential for one run — it's essential after 50 runs of tracked data."

### "Consumer social products are graveyard territory."

> "We're not a social product. We're a productivity tool with a sharing feature. You use this because it makes YOUR trip better — not because your friends are here. The social layer (creator trips, discovery) is a growth engine, not the product's reason to exist."

### "What if AI becomes commoditized and everyone has this?"

> "The AI planning itself will be commoditized — we agree. That's why we're not betting on 'better prompts.' We're betting on the data layer: your trip history, your preferences, your group's decision patterns. The AI is replaceable; the data isn't. When everyone has good AI, the differentiator is who has the best context to feed it."

### "You're trying to do too much. Shouldn't you pick one thing?"

> "Our wedge is the during-trip experience — that's where we focus engineering first, because no one else is there. Planning and sharing extend naturally from having the trip data. We're not building 6 features at once — we're building one intelligent trip timeline that serves all three phases."

---

## Known Weaknesses (Honest Assessment)

| Weakness | Honest Answer | Mitigation |
|----------|--------------|------------|
| No traction | We haven't launched. This is pure vision. | Ship prototype fast. Get 100 users on real trips within 8 weeks of launch. |
| Low-frequency product | Trips happen 3-5x/year for most people | Expand "trip" definition (day trips, local exploration). Build between-trip engagement (browsing, planning future trips). |
| Consumer app economics | High CAC, low conversion historically | Organic/content-led growth (shared trips). No paid acquisition at early stage. |
| Design gap in team | Two engineers, no dedicated designer | First hire is a designer. v1 is functional-first; design polish comes with funding. |
| Monetization unproven | Freemium conversion rates unclear | Validate with beta: track which AI features drive upgrade intent. Iterate pricing. |
| Data privacy concerns | Location tracking, travel patterns are sensitive | Privacy-first architecture. No selling of user data. Location only used for user's own benefit. |

---

## Red Flags

- All market data is knowledge-based and should be verified before investor-facing use
- No financial projections possible at idea stage
- Competitive landscape moves fast — verify current state of Wanderlog, Layla, Mindtrip

## Yellow Flags

- "Strava for travel" analogy will be stress-tested by investors familiar with Strava's actual growth journey (took 5+ years to hit critical mass)
- The "Google won't do this" argument has historically been wrong for many startups

## Sources

Knowledge-based research through early 2025. Key claims to verify:
- Competitor funding amounts and current status
- UNWTO travel statistics
- AI inference cost data points
- Google/Phocuswright Gen Z travel behavior study
`},{filename:"08-intake.md",title:"Intake",content:`# Intake: AI Trip Planner

## 2-Sentence Opener

We're building the one app for your entire trip — plan together, adapt on the fly, and share as interactive maps — powered by AI that learns your travel style with every trip you take. No more juggling Maps, notes, group chats, weather apps, and photo albums just to go on vacation.

## Problem

Travelers currently juggle 6+ disconnected apps to plan, execute, and document a single trip:
- AI chat (ChatGPT) for initial planning — starts from zero every time
- Google Maps for navigation — fights you on scenic routes
- AllTrails for hiking trails
- Weather apps for forecasting
- Photo/video apps for media management
- YouTube for discovery (what did other people do here?)
- Group chats for coordination
- Notes/spreadsheets for the actual itinerary

Each app is a silo. No shared context. Plans created in AI can't adapt when weather changes. Photos don't auto-attach to locations. Friends can't collaborate on the plan. And the next trip starts from scratch with no memory of what you loved or hated.

## Solution

A mobile-first trip planning app that:
- Plans conversationally with AI OR manually — fully functional without AI
- Adapts in real-time during active trips (weather, fatigue, mood changes)
- Enables group collaboration with a suggestion/voting system
- Auto-associates photos to activities by GPS/timestamp
- Shares completed trips as interactive maps with photos
- Learns from every trip — preferences, pace, style — making each trip better than the last
- Treats driving routes as first-class activities (scenic roads, not just fastest routes)

## Unique Insight

Trip planning is inherently contextual and cumulative. The AI doesn't just need your preferences — it needs your structured trip history (what you did, what you skipped, what you loved, who you were with, how you paced). No existing tool accumulates this intelligence. ChatGPT starts from zero. Google Maps doesn't know your style. The more trips you take with us, the more valuable the app becomes — creating natural retention and lock-in.

## Traction

Pre-product, idea stage. Validated through personal experience — the founders planned a real trip using AI and documented every pain point, which became the product spec.

## Business Model

Freemium — free tier with core functionality, paid subscription for premium features (TBD: likely unlimited AI conversations, advanced integrations, creator publishing tools). Not finalized.

## Team

Two software engineer co-founders.

## Market Size

TBD — to be researched.

## Target Audience for Pitch

For clarity and planning purposes — crystallizing the vision. Not actively raising.

## Requested Formats

- 10-minute full narrative pitch
- 2-minute verbal pitch
- Q&A appendix (investor questions + objection handling)
`}]},{id:"02-V2",name:"V2",docs:[{filename:"01-idea.md",title:"Idea",content:`# TripSquad — Complete Idea Document

## Vision

One link. Everyone plans. Nobody downloads a spreadsheet. The group trip coordinator that replaces WhatsApp + Google Docs + Splitwise.

No more scattered suggestions in group chats, itineraries nobody reads, and the one friend who ends up doing everything.

---

## The Problem

### The 5-App Problem

Every group trip today is planned through the same broken stack. This isn't a theoretical problem — it's the single most consistently complained-about travel workflow across Reddit, travel forums, app reviews, and independent travel guides.

| App | What groups use it for | What's broken |
|-----|------------------------|---------------|
| **WhatsApp / iMessage** | Coordination & suggestions | Links get buried in 47 messages. No structure, no decisions, no record. |
| **Google Docs / Notes** | The shared itinerary | One person maintains it. Nobody else reads it. Version confusion. |
| **Splitwise** | Splitting costs | Disconnected from the trip plan. Manual entry. Currency conversion paywalled. |
| **Google Maps** | Finding places | Can't share collections that everyone can edit and vote on. |
| **Doodle / When2meet** | Date polling | Yet another tool. Results don't connect to the trip plan. |

### The Deeper Problem

**This is a painkiller, not a vitamin.** Unlike solo trip planning (which people tolerate), group coordination has real social costs — resentment toward the organizer, budget fights that ruin friendships, and trips that simply don't happen because the WhatsApp thread died. The organizer who "always ends up doing everything" is the person who will pay to make it stop.

---

## The Solution

An iOS-first group trip planning application that replaces the WhatsApp group chat + Google Doc + Splitwise stack. One person creates a trip, drops a pin on a city, and gets a shareable link. Everyone else opens the link — no spreadsheet, no chaos — and collaborates on a single living plan with polls, voting, a timeline, and photo sync.

After the trip, the whole experience — timeline, photos, map — becomes a shareable artifact. Vloggers and travel creators link it in their video descriptions so viewers can clone entire trips as templates or cherry-pick individual spots.

### Core Thesis

> "Group trips don't fail because people can't find places to go. They fail because 6 people can't decide in a WhatsApp thread. We fix the decision layer — then the plan builds itself."

### Core Insight

The app is **tool-first, AI-enhanced**:
- Fully functional without AI. Every feature works manually.
- AI makes timeline suggestions smarter — but is P1, not the core product.
- The core differentiator is the group decision layer: voting, shortlists, and structured collaboration.

---

## Core Concepts

### Trip

The top-level entity. A group travel plan centered around a destination.

**Key attributes:**
- Created with a name + city pin drop (minimum required input)
- Has an organizer (creator) and group members (invitees)
- Contains a shortlist (staging area) and a timeline (finalized plan)

### City Pin

The starting action for every trip. The organizer taps the map or searches for a city, which triggers the Famous Places feed for that area. Multiple pins are supported for multi-city trips — each pin gets its own place feed.

### Famous Places Feed

After pinning a city, the app surfaces top-rated and famous places in and around the area — restaurants, landmarks, activities, viewpoints. Powered by Google Places API, categorized as: eat, see, do, stay. Each place shows name, photo, rating, category, and distance from city center.

### Shortlist

The shared staging area where all group-suggested places live before being promoted to the timeline.

- Anyone in the trip can add places at any time
- Places come from the Famous Places feed, search, or pasting a Google Maps link
- Each place has an inline poll (yes/no/maybe)
- Sort by most votes, most recent, or category
- Discussion thread per place (short comments, not a full chat)

### Activity

A place that has been promoted from the shortlist to the day-by-day timeline.

**Attributes:**
- Location (geo-coordinates, name, address)
- Day assignment and time slot
- Category (eat, see, do — color-coded)
- Travel time to/from adjacent activities (auto-calculated)
- Open/close hours (where available)
- Associated photos (auto-tagged by GPS/timestamp)

### Day

A sequential container within the timeline. Maps to a real calendar date when the trip has confirmed dates. Activities are ordered chronologically within each day.

### Organizer

The person who creates the trip. Has additional powers:
- Promotes places from shortlist to timeline
- Locks days when finalized
- Can share the organizer role (co-organizers) for larger groups

### Group Member

Anyone who joins via the shareable link. Can:
- Browse the area's famous places
- Add places to the shared shortlist
- Vote on all shortlisted places
- View and rearrange the timeline
- Contribute photos during and after the trip

---

## Core User Flow

The entire product can be understood as one flow with five stages. Each stage solves a distinct problem in the group trip lifecycle.

### Stage 1: Create & Pin
**Who:** Organizer

Open app → Create trip → Drop a pin on a city (or search). The app surfaces famous places, landmarks, and top-rated spots in and around that area. Organizer can immediately add spots to a shared shortlist or leave it open for the group.

### Stage 2: Invite & Discover
**Who:** Organizer → Group

Organizer shares a link (iMessage, WhatsApp, email). Group members open the link and land in the trip. They browse the area's famous places, search for their own, and add anything to the shared shortlist. No friction — everyone can contribute from the moment they join.

### Stage 3: Vote & Decide
**Who:** Everyone

Every place on the shortlist gets a poll. Swipe right/left or tap yes/no/maybe. The organizer sees ranked results and promotes winners to the timeline. For contested picks (beach vs. museum), the group can see the vote split and discuss in-context — not in a separate chat thread.

### Stage 4: Build the Timeline
**Who:** Everyone, Organizer finalizes

Promoted places slot into a day-by-day timeline. The app suggests logical ordering based on geography (cluster nearby spots on the same day). Anyone can drag to rearrange. Organizer can lock days when finalized. Travel time between spots is shown automatically.

### Stage 5: Go, Capture, Share
**Who:** Everyone

During and after the trip: photos auto-tag to the timeline by GPS/timestamp. Each person confirms which photos to contribute. Duplicates are suppressed. One tap to share the entire trip — as a visual timeline with photos on a map — with anyone, or publish it as a public template.

---

## Features by Category

### Trip Planning

#### Drop-a-Pin City Selection \`P0\`
Tap the map or search for a city. This is the starting action for every trip.
- Map view with search bar at top. Supports city-level and region-level pins.
- On pin drop: reverse geocode to city name, store coordinates + bounding box.
- Immediately triggers the Famous Places feed for that area.
- Multiple pins supported (multi-city trips) — each pin gets its own place feed.

#### Famous Places Feed \`P0\`
After pinning a city, the app surfaces top-rated and famous places in and around the area — restaurants, landmarks, activities, viewpoints.
- Powered by Google Places API (or Foursquare as fallback). Categorized: eat, see, do, stay.
- Each place shows: name, photo, rating, category, distance from city center.
- One-tap to add any place to the trip's shared shortlist.
- Search within the feed for specific types ('ramen', 'sunset viewpoint', 'museum').
- AI suggestion layer (P1): once the timeline has dates and some spots, suggest gap-fillers based on what's popular nearby and what times are open.

#### Day-by-Day Timeline \`P0\`
Places promoted from the shortlist slot into a visual day-by-day timeline. Drag to reorder. Tap to see details.
- Each day is a vertical list of activities in time order.
- Auto-calculate travel time between consecutive spots (driving/walking/transit via Maps API).
- Show open/close hours per venue where available.
- Drag-and-drop between days. Reordering triggers travel-time recalculation.
- Color-coded by category (eat = orange, see = blue, do = green).
- Organizer can 'lock' a day to prevent further edits.

#### Smart Suggestions on Timeline Gaps \`P1\`
Once a timeline has some spots placed, the app notices gaps (empty mornings, long idle windows) and suggests nearby places that fit.
- Gap detection: if Day 2 has an activity at 10am and another at 4pm, suggest something for the middle.
- Suggestions ranked by: proximity to adjacent spots, rating, category diversity (don't suggest 3 museums in a row).
- Suggestions appear as ghost cards in the timeline — tap to add, swipe to dismiss.
- This is where light AI can add value without being the core product.

#### Map View \`P0\`
All shortlisted and timeline-placed spots shown on a single map. Color-coded by day.
- Toggle between map view and timeline view.
- Tap a pin on the map to see the place card (name, photo, which day it's on, vote count).
- Route lines connecting same-day spots to visualize the day's flow.
- Cluster view when zoomed out; individual pins when zoomed in.

#### Export to Google Maps / Apple Maps \`P2\`
One-tap export of a day's itinerary to native maps for turn-by-turn navigation.
- Generates a Google Maps URL with waypoints in order.
- Alternatively opens Apple Maps with the route.
- Solves the 'we planned it but now we're driving around lost' problem.

### Group Collaboration

#### Shareable Trip Link \`P0\`
One link to join the trip. Invitees get full access to browse, add places, and vote.
- Organizer taps 'Invite' → generates a unique URL.
- Shareable via iMessage, WhatsApp, email, or any messaging app.
- Link opens the trip in-app (if installed) or falls back to a web preview with an App Store prompt.
- Access model for invitees is an implementation decision to be finalized during development — options range from no-account (name only) to lightweight email signup.

#### Shared Shortlist with Voting \`P0\`
Anyone in the trip can add places to a shared shortlist. Every place gets an inline poll — swipe or tap yes/no/maybe.
- Shortlist is the staging area. Places live here until promoted to the timeline.
- Each place shows: total votes, vote breakdown (who said yes/no/maybe).
- Sort shortlist by: most votes, most recent, category.
- Anyone can add places at any time — from the Famous Places feed, from search, or by pasting a Google Maps link.
- Discussion thread per place (short comments, not a full chat) — keeps context next to the decision, not in WhatsApp.

#### Organizer Promotes to Timeline \`P0\`
The organizer reviews vote results and promotes winning places to the day-by-day timeline. The group suggests, the organizer decides.
- Promote button on any shortlisted place. Organizer picks which day and rough time slot.
- Batch promote: select multiple places and auto-assign to a day based on geography.
- Demote: move a timeline item back to the shortlist if plans change.
- The organizer role can be shared (co-organizers) for larger groups.

#### Date Polling \`P1\`
Before the trip has dates, the organizer can create a date poll — everyone marks which date ranges work for them.
- Organizer sets candidate date ranges (e.g., 'June 12–15' vs 'June 19–22').
- Each member marks available / not available / flexible per range.
- Results shown as a heat map — green = everyone available, red = conflicts.
- Once decided, the organizer locks the dates and the timeline maps to real calendar days.

#### In-Trip Expense Splitting \`P2\`
Basic expense tracking built into the trip. Someone pays for dinner — log it, split it, settle up at the end.
- Add an expense: amount, who paid, split equally or custom.
- Running balance per person: 'Alex owes Maria $47'.
- Settlement suggestions at trip end: minimum number of transfers to settle all debts.
- Currency conversion for international trips (potential paid feature).
- P2 because Splitwise exists and works. Only build this if user research shows people want it in the same app.

#### Real-Time Activity Feed \`P1\`
A chronological feed showing what's happening in the trip — who added a place, who voted, who promoted something to the timeline.
- Keeps everyone aware of changes without push-notification overload.
- Lightweight: just a feed, not a chat. No replies, no threads.
- Push notifications only for: new place added, vote results ready, timeline finalized by organizer.

### Photo Sync & Timeline Tagging

#### Auto-Detect & Suggest Upload \`P0\`
After (or during) the trip, the app scans your camera roll for photos matching the trip's dates and locations. It suggests which photos to contribute — you confirm before anything uploads.
- Uses iOS Photo Library access: filter by date range (trip start → trip end) and GPS coordinates (within radius of any timeline activity).
- Presents matched photos in a review screen: 'We found 43 photos from your trip. Select which to share.'
- Default: all matched photos are pre-selected. User can deselect any.
- Upload only happens after explicit confirmation. No surprise uploads.
- Also supports manual selection: browse camera roll and pick photos yourself.

#### Auto-Tag to Timeline \`P0\`
Each uploaded photo is automatically matched to the nearest activity on the timeline by GPS coordinates and timestamp.
- Matching logic: (1) find the timeline activity whose GPS coordinates are closest to the photo's GPS, within a 500m radius; (2) if multiple candidates, pick the one whose time window best matches the photo timestamp.
- Photos that don't match any activity go into an 'Unassigned' bucket — the user can manually drag them to an activity.
- Each activity on the timeline shows a photo count badge and a mini gallery preview.

#### Duplicate Suppression \`P1\`
When multiple people upload photos of the same moment, the app detects near-duplicates and keeps the best one (or lets the group pick).
- Detection method: perceptual hash (pHash) comparison on thumbnails. Photos taken within 30 seconds of each other at the same GPS location are flagged as potential duplicates.
- Default behavior: keep all but group them. Show one in the main timeline; tap to see all versions.
- Optional: auto-pick the 'best' (highest resolution, least blurry) and archive the rest.

#### Shared Photo Timeline View \`P0\`
Everyone in the trip sees the same photo timeline — a unified view of everyone's photos, organized by day and activity.
- Scroll through the trip day by day. Each activity shows its tagged photos.
- Filter by contributor ('Show only Maria's photos').
- Tap any photo to see full-screen with metadata: who took it, when, where.
- This is the core of the post-trip experience — the trip record everyone can revisit.

#### One-Tap Share Package \`P1\`
Share the entire trip's photo timeline with one button — as a link, not as 200 individual photos in a WhatsApp thread.
- Generates a shareable link to a web view of the trip: map + timeline + photos.
- Recipients don't need the app — it's a web page.
- Option to download all photos as a zip (organized by day).
- This is also the basis for the public sharing / vlogger feature.

#### Notification to Contribute \`P2\`
After the trip ends, send a push notification to all group members: 'The trip is over! Share your photos with the group.'
- Triggered 24 hours after the trip end date.
- Links directly to the auto-detect review screen.
- Follow-up reminder after 3 days if the person hasn't contributed.
- Solves the 'I forgot to send my photos' problem permanently.

### Public Sharing & Creator Distribution

#### Public Trip Page \`P1\`
A web-hosted page showing the full trip: interactive map with pins, day-by-day timeline, photos at each stop. No app needed to view.
- Rendered as a responsive web page at tripsquad.app/trip/{id}.
- Interactive map: pins for each activity, color-coded by day, route lines between stops.
- Timeline view: scroll through days, see photos, read notes/descriptions.
- Gallery view: all photos organized by activity.
- SEO-indexable: 'Best things to do in Lisbon' → real trips with real photos rank organically.

#### Clone Full Trip as Template \`P1\`
A viewer sees a trip they love and clones it into their own account as a starting template. All places and timeline intact — they customize dates, add/remove spots, invite their own group.
- One button: 'Use this trip as a template.'
- Creates a new trip in the viewer's account pre-populated with all places and the day structure.
- Photos and notes from the original are NOT cloned (privacy). Only places and timeline.
- The viewer's group can then vote, edit, and make it their own.

#### Cherry-Pick Individual Spots \`P1\`
Instead of cloning the whole trip, a viewer can tap any individual activity and save it to their own trip.
- 'Add to my trip' button on each activity card in the public view.
- Saved spots go into the viewer's shortlist on their own trip.
- If the viewer doesn't have a trip yet, saving a spot prompts them to create one.

#### Creator / Vlogger Link \`P1\`
Travel YouTubers and bloggers plan their trip in TripSquad. After the trip, they publish it and drop the link in their video description. Viewers explore the interactive map, clone the trip, and become users.
- This is the primary organic growth channel, modeled after Strava's activity-sharing loop.
- Creator workflow: plan trip → take trip → photos auto-tag → tap 'Publish' → get a public link.
- The link in a YouTube description targets high-intent viewers (they just watched a travel vlog — they want to go there).
- Vlogger's call-to-action: 'Full interactive itinerary linked below — clone it and make it your own.'
- No special 'creator' tier needed in v1. Every user can publish a trip publicly.

#### Discover Feed (Future) \`P2\`
A browse-and-discover feed of publicly shared trips, searchable by destination.
- Not in v1. The public trip pages + SEO + creator sharing generate the initial content inventory.
- Once there are 1,000+ public trips: build a simple discovery page.
- Search: 'trips in Portugal', 'road trips in Scotland', '5-day Japan itinerary.'
- Ranked by: recency, photo quality, clone count.

---

## User Stories

### Story 1: The Organizer Creates and Invites

**Alex, the friend who always plans, organizing a Barcelona weekend with 3 friends**

1. Alex opens TripSquad and creates a new Trip: "Barcelona Weekend"
2. He drops a pin on Barcelona — the Famous Places feed appears immediately
3. He browses the feed, adds a few spots to the shortlist: La Boqueria, Gothic Quarter, Barceloneta Beach
4. He taps 'Invite' and shares the link to their iMessage group
5. Maria, Tom, and Jen open the link and land in the trip — no signup friction
6. Everyone starts browsing Famous Places and adding their own finds to the shortlist

### Story 2: The Group Decides Together

**The Barcelona group votes and builds the timeline**

1. The shortlist has 12 places from all 4 members
2. Everyone votes: swipe yes/no/maybe on each place
3. Alex sees the ranked results — La Boqueria has 4 yes votes, the Picasso Museum has 2 yes and 2 maybe
4. Day 2 afternoon conflict: Tom wants beach, Maria wants Gaudi architecture — the vote split is visible
5. Alex promotes the top-voted places to the timeline, assigns them to days
6. He batch-promotes 5 places to Day 1, the app auto-orders them by geography
7. Travel times appear between spots — the day's flow makes sense
8. Alex locks Day 1. The group moves on to filling Day 2.

### Story 3: Photos Come Together

**The Barcelona group finishes their trip**

1. Everyone's back home. Push notification: "Barcelona Weekend is over! Share your photos with the group."
2. Maria opens the app — it scans her camera roll and finds 43 photos from the trip dates and locations
3. Review screen: all 43 pre-selected. She deselects a few blurry ones, confirms upload.
4. Her photos auto-tag to the timeline: 8 photos at La Boqueria, 5 at the beach, 12 at dinner spots
5. Tom and Jen contribute their photos too — the shared timeline now has 120 photos across all activities
6. Near-duplicates (3 people photographed the same sunset) are grouped — one shows in the main view, tap to see all versions
7. The group scrolls through the trip day by day, reliving it together

### Story 4: The Shareable Artifact

**Alex shares the completed Barcelona trip**

1. Alex taps "Share" — generates a public link
2. The web page shows an interactive map: pins at each spot, color-coded by day, route lines between stops
3. Timeline view: scroll through days, see everyone's photos at each activity
4. Alex shares the link on his Instagram Stories
5. His friend David opens it, explores the map
6. David cherry-picks 3 spots: the tapas place, the hidden beach, the rooftop bar
7. David creates his own Barcelona trip — those 3 spots appear in his shortlist, ready for his group to vote on

### Story 5: The Vlogger Growth Loop

**Travel creator "Jake Abroad" uses TripSquad for a 2-week Japan trip**

1. Jake plans his trip in TripSquad with his travel partner — adding spots, building the timeline
2. During the trip, photos auto-tag to the timeline
3. Trip complete. Jake taps "Publish" — gets a public link
4. He drops the link in his YouTube video descriptions: "Full interactive itinerary linked below — clone it and make it your own"
5. Viewers open the link → explore Jake's trip on an interactive map
6. They see the exact ramen shop from Episode 3, the temple from Episode 5
7. A viewer clones the entire trip as a template, invites their own friends, customizes dates
8. That viewer becomes a TripSquad user — organic acquisition, zero ad spend

### Story 6: The Organizer Who Upgrades

**Sarah, the perennial trip planner, hits free tier limits**

1. Sarah has organized 4 trips in TripSquad — her friend group won't plan without it now
2. On trip 5, she tries to invite 10 people (free tier: 8 max)
3. She also wants to run a date poll (Pro feature)
4. Sarah upgrades to Organizer Pro — $39/year
5. Her 10 friends all join for free. Everyone benefits, one person pays.
6. The Splitwise pattern: the organizer-personality converts at 3–5x the rate of casual users.

---

## Integrations (MVP: Curated Set)

### Places Data
- Google Places API for place search, details, and photos
- Categorized results: eat, see, do, stay
- Ratings, opening hours, distance calculations

### Maps
- MapKit for map rendering, pin drops, and route lines
- Google Maps API for travel time calculations (driving/walking/transit)
- Route visualization connecting same-day activities

### Photo Library
- iOS PhotoKit for camera roll access
- GPS metadata extraction for auto-tagging
- Timestamp matching for activity association

### Notifications
- Apple Push Notification Service
- Trip invites, vote results, photo contribution reminders
- Activity feed updates for group changes

### Deep Linking
- Universal Links for shareable trip URLs
- Opens in-app if installed, web preview with App Store prompt if not

### Future Integrations (Post-MVP)
- Export to Google Maps / Apple Maps with waypoints
- Booking affiliate links (hotels, experiences via Booking.com, GetYourGuide, Viator)
- Photo book printing partnerships (Peecho, Printful)

---

## Growth & Distribution Strategy

### The Strava Model

Every completed trip = a shareable artifact = organic distribution.

\`\`\`
Organizer creates trip → Invites 4–8 friends via link
                       → Group plans together (friends see the product)
                       → Trip happens, photos auto-tag
                       → Shared as public link (social, messaging, blog)
                       → Viewers explore the interactive map
                       → Viewers clone the trip OR cherry-pick spots
                       → Viewers become users
                       → New organizers create trips → (cycle repeats)
\`\`\`

### Creator Channel

Travel YouTubers and bloggers use the app as their trip planning tool. When they publish:
- They link their trip in video descriptions
- Their audience (high travel intent) explores the interactive map
- Viewers convert to users by wanting to clone/adapt the creator's trip
- No special creator tier needed in v1 — every user can publish publicly

### SEO

Every published trip is indexable content:
- "Best things to do in Lisbon" → real trips with real routes and photos
- More authentic than blog posts, more useful than TripAdvisor reviews
- Content inventory grows with every user who publishes

### Organic / Built-In Virality

The app is most valuable when used with others:
- Every trip starts with an invite link sent to 4–8 people
- The organizer is already the person who starts the WhatsApp chat — the natural behavior transfers
- "What app is this?" discovery happens on every trip

---

## Business Model

### Organizer Pro — $39/year or $4.99/month

The organizer pays. Group members always free. This mirrors the Splitwise pattern: the person who cares most about the tool (the organizer-personality) converts at 3–5x the rate of casual users. The paywall gates power-organizer features, not basic collaboration.

**Free tier (fully functional):**
- Unlimited trips
- Up to 8 group members
- Shared shortlist with voting
- Basic timeline
- Photo sync (50 photos per trip)
- 1 public trip link

**Pro tier unlocks:**
- Unlimited group size
- Unlimited photo sync
- Unlimited public trip links
- Date polling
- Expense splitting with multi-currency
- AI timeline suggestions
- Export to Google Maps
- Priority photo-book printing (future)

**Why the organizer-pays model:** Per-trip pricing ($5/trip) sounds simple but creates friction at the exact moment of highest enthusiasm. Annual subscription converts the organizer once and they plan 3–6 trips/year — higher LTV, lower churn. Splitwise, Flighty, and TripIt all use annual subscriptions, not per-use pricing.

### Future Revenue Streams

- **Printed Photo Books** — €36–€150 per book. Polarsteps' proven model: users generate trip content for free, then pay for a physical artifact at the emotional peak. Partner with a print-on-demand service (Peecho, Printful) — no inventory, no shipping logistics. Highest-margin revenue stream in consumer travel.
- **Booking Affiliate Links** — When a place on the timeline is a bookable hotel, restaurant, or experience, show a "Book this" button powered by affiliate programs (Booking.com, GetYourGuide, Viator). Earn 3–8% per booking. Only pursue after 10K+ monthly active trips generate enough volume.

---

## Technical Scope & Architecture

Designed for what two engineers can build in an 8-week MVP.

### iOS App (Swift / SwiftUI)
- Map view (MapKit) with pin-drop, place search, and route lines
- Trip creation flow with day-by-day timeline (drag-and-drop via native gestures)
- Shortlist with inline voting UI (swipe cards or yes/no/maybe buttons)
- Photo library access (PhotoKit) for auto-detect + manual selection
- Photo upload with GPS/timestamp metadata for auto-tagging
- Push notifications (APNs) for trip invites, vote results, photo contribution reminders
- Deep linking for shareable trip URLs (Universal Links)

### Backend
- Real-time sync for collaborative editing (consider Supabase Realtime or Firebase)
- REST/GraphQL API for trip CRUD, place search proxy, vote tallying
- Google Places API integration (place search, place details, photos)
- Photo storage (S3-compatible) with thumbnail generation
- Perceptual hashing for duplicate detection (server-side)
- Auth (email + Apple Sign In at minimum)
- Public trip page renderer (server-side rendered web page or static site per trip)

### External APIs & Services
- Google Places API — place search, details, photos ($17 per 1K detail requests)
- MapKit / Google Maps SDK — map rendering, directions, travel time
- Apple Push Notification Service — notifications
- S3 / Cloudflare R2 — photo storage (R2 has free egress, significantly cheaper)
- Supabase or Firebase — real-time sync, auth, database
- Optional: OpenAI API — for smart timeline suggestions (P1, not MVP)

### Cost Estimate (Pre-Scale)
At 1,000 monthly active trips with ~5 people each: Google Places API ~$85/mo, photo storage ~$20/mo, Supabase ~$25/mo, Apple Developer $99/yr. Total: ~$140/month + $99/year. Manageable for bootstrapping.

---

## Build Phases

Ruthlessly scoped to what two engineers can ship. Each phase has a kill/continue decision point.

### Phase 1: Core Loop — Plan & Invite (Weeks 1–4)
- Trip creation: name + city pin drop
- Famous Places feed from Google Places API
- Shared shortlist: add places, yes/no/maybe voting
- Shareable invite link (deep link into app)
- Organizer promotes voted places to day-by-day timeline
- Basic map view with pins
- Auth: Apple Sign In + email

**Kill criteria (week 4):** Can you get 5 real friend groups to plan a real trip using the app? If yes → continue. If nobody shares the link to their group → re-evaluate the invite flow.

### Phase 2: Photos & Polish (Weeks 5–8)
- Photo auto-detect from camera roll (by trip dates + GPS)
- Photo upload with auto-tag to timeline activities
- Shared photo timeline view (everyone sees all contributed photos)
- Basic duplicate detection (perceptual hash)
- Date polling for the group
- Activity feed (who added what, vote results)
- Push notifications: invites, votes, photo contribution reminder
- Public trip page (web-hosted, read-only, shareable link)

**Kill criteria (week 8):** Launch to TestFlight beta. Target: 20 completed trips with photos. Measure: do people actually share the public trip link? If share rate > 15% of completed trips → the growth loop works. If < 5% → sharing isn't a natural behavior and the Strava model fails.

### Phase 3: Growth & Monetization (Months 3–4)
- Clone / cherry-pick from public trips
- Organizer Pro subscription (paywall: unlimited photos, group size, date polls)
- AI timeline suggestions (fill gaps, smart ordering)
- Expense splitting (basic: equal split, who-paid-what, settlement math)
- App Store launch
- Creator outreach: seed 10 travel YouTubers with the app

**Kill criteria (month 4):** 100+ organizers have created trips. 10+ public trips cloned. 5%+ of organizers converted to Pro. If yes → you have a business. If no → diagnose which part of the funnel breaks.

### Phase 4: Scale & Expand (Months 5–12)
- Photo book printing (partner with Peecho/Printful)
- Discover feed (browse public trips by destination)
- Multi-currency expense splitting
- Export to Google Maps / Apple Maps
- Android app (if iOS validates)
- Booking affiliate links (hotels, experiences)
- SEO optimization for public trip pages

---

## Risks & Mitigations

### Vitamin, not painkiller \`High\`
*Source: Viability report #1*

We narrowed to group coordination — the one area where pain is acute and documented. The organizer who does everything is a real person with real resentment. Solo trip planning is a vitamin; group trip chaos is a painkiller for the organizer.

### 18+ month time-to-differentiation \`High\`
*Source: Viability report #2*

The full AI-learning vision takes 18 months. This proposal doesn't depend on it. The v1 differentiator is the voting/shortlist/timeline combo — that's useful on trip #1, not trip #3. AI suggestions are P1, not the core.

### Consumer app economics (2–4% conversion) \`High\`
*Source: Viability report #3*

We target the organizer, not the group. The organizer converts at 3–5x the rate of a random user (Splitwise pattern). And group members are free — they're distribution, not revenue. One organizer brings in 4–8 free users who see the product.

### Cold-start problem on three dimensions \`High\`
*Source: Viability report #6*

Eliminated two of the three cold starts. We don't need trip history for AI learning (no AI dependency in v1). We don't need a content library (Famous Places come from Google Places API, not user-generated content). The only cold start is: one organizer needs to invite their group. That's the natural behavior — the organizer is already the person who starts the WhatsApp chat.

### Google risk (Gemini + Maps) \`Medium\`
*Source: Viability report #7*

Google will never build group voting, social shortlists, or friend-group expense splitting inside Maps. Those are social features, not navigation features. Google killed Google Trips because it kept folding features into Maps — and Maps can't do social. Our moat is the group layer, not the places data.

### No designer on the team \`Medium\`
*Source: Viability report (feasibility)*

iOS native (SwiftUI) provides strong defaults. The product is fundamentally a list (shortlist), a vote (yes/no), and a timeline (vertical scroll) — not a complex visual design challenge. Ship functional, polish iteratively.

### Photo storage costs at scale \`Medium\`
*Source: Technical*

Use Cloudflare R2 (free egress). Compress uploads to 2048px max dimension. Limit free tier to 50 photos/trip. At 10K trips/month × 50 photos × 500KB = ~250GB/month = ~$4/month on R2. Cost only matters at success scale, which is a good problem.

### WhatsApp / iMessage is 'good enough' \`Medium\`
*Source: Viability report (market reality)*

The research shows groups tolerate chat because nothing better exists, not because it works. Wanderlog tried but paywalled group features per-user. Our bet: if the invite link is as easy as sharing a WhatsApp link, and the voting UI is faster than typing opinions, the organizer switches the group over.

---

## Key Design Principles

1. **Group-first, not solo-first** — every feature assumes 3–10 people. The organizer creates, the group decides. Solo planning is supported but not optimized for.

2. **Tool-first, AI-enhanced** — the app works fully without AI. Voting, shortlists, and timelines are the core. AI makes suggestions smarter but is never a gate.

3. **One link, zero friction** — joining a trip is as easy as clicking a link. No spreadsheets, no app-install requirements for viewing, no signup walls during the critical invite moment.

4. **The organizer is the customer** — the person who always plans is the person who pays. Group members are free users and distribution channels.

5. **Decide, don't discuss** — replace unstructured group chat with structured voting. The shortlist + polls eliminate the WhatsApp war.

6. **The trip becomes the artifact** — completed trips with photos are shareable, cloneable, and indexable. Every trip is organic distribution.

7. **Ship functional, polish iteratively** — SwiftUI defaults over custom design. Feature completeness over visual polish in v1.

8. **Kill criteria at every phase** — clear metrics at weeks 4, 8, and month 4. No building for 12 months before learning if it works.

---

## Competitive Landscape

### Direct Competitors and Our Differentiation

| Competitor | What they do | Where they stop | Our advantage |
|-----------|-------------|-----------------|---------------|
| **Wanderlog** | Collaborative trip planning (Notion for travel) | Paywalls group features per-user. Focused on solo planning with collaboration bolted on. | Group-first. Members are free. Voting/shortlist is the core, not an add-on. |
| **Splitwise** | Expense splitting | No trip planning. No places. No timeline. | We do what Splitwise does + everything that comes before and after it. |
| **Google Maps** | Finding and navigating to places | Can't share editable collections. No voting. No group decision-making. | The group decision layer that Maps will never build. |
| **WhatsApp / iMessage** | Coordinating with travel companions | No structure, no voting, no decisions. Links buried in messages. | Structured collaboration. Every suggestion is voteable, every decision is visible. |
| **TripIt** | Auto-organizes travel confirmations | Organization only. No group planning. Business-focused. | We plan collaboratively and create shareable memories. |
| **ChatGPT** | General AI for any planning | Text only. No group features. No photos. No sharing. | Structured group trips, not text conversations. |

### Our Positioning

**"They plan the trip. We plan it together."**

Every funded competitor positioned on solo planning or AI-generated itineraries. The white space is:
1. **Group decision-making** — structured voting replaces chat chaos
2. **Post-trip sharing** — completed trips as interactive, cloneable content
3. **Organizer-pays economics** — the planner is the customer, the group is distribution

### Moat (Compounds Over Time)

1. **Social lock-in** — your friend group uses TripSquad for every trip. Switching means convincing 8 people to move.
2. **Trip content inventory** — every shared trip is SEO/social inventory that drives organic acquisition.
3. **Organizer loyalty** — the organizer who paid $39/year and planned 4 trips won't switch for trip 5.
4. **Network density** — the more friend groups overlap, the more people are already on the platform when a new trip starts.

---

## Why Now

**The market gap is obvious:**

- Google killed Google Trips in 2019 and never built a replacement
- Wanderlog raised funding but paywalled group features per-user — leaving the group coordination space underserved
- Record travel demand + zero unified group solutions = massive opportunity

**The technology is ready:**

- SwiftUI makes native iOS development fast for a 2-person team
- Supabase/Firebase provide real-time sync out of the box — no custom infrastructure
- Google Places API is mature, affordable, and comprehensive
- Cloudflare R2 makes photo storage economically viable at any scale

**The behavior is established:**

- The organizer already creates the WhatsApp group and the Google Doc — we're replacing an existing workflow, not creating a new one
- Group trip planning is a repeated behavior (3–6 trips/year for active travelers) — not a one-time use case
- 75% of Gen Z travelers use 4+ apps per trip — the fragmentation pain is real and growing

---

## Summary

TripSquad is not another AI itinerary generator. It's the first group trip coordinator that:

1. **Unifies** — replaces WhatsApp + Google Docs + Splitwise with one shareable link
2. **Structures decisions** — voting and shortlists replace endless group chat debates
3. **Captures** — photos auto-tag to the timeline, creating a shared trip record
4. **Distributes** — completed trips become beautiful, interactive, cloneable artifacts
5. **Monetizes the organizer** — the planner pays, the group is free (and is distribution)

The competitive moat compounds: social lock-in makes friend groups stick, shared trips create content inventory, the organizer-pays model aligns incentives, and network density means more people are already on the platform for the next trip. The longer you use it, the harder it is to leave — and the easier every next trip gets.
`},{filename:"02-verification-report.md",title:"Verification Report",content:`# Verification Report: TripSquad
*Generated: 2026-05-20*

## Summary
- **Critical issues:** 0
- **Warnings:** 3
- **Info:** 4

## Critical Issues
None identified.

## Warnings

### 1. Splitwise conversion rate claim lacks primary source
- **File(s):** pitch-full.md, pitch-2min.md, pitch-appendix.md
- **Problem:** The "3-5x conversion for organizer personality" claim appears in all three pitch formats and the appendix. It is labeled [Estimate] but treated as a high-confidence anchor for the entire business model. No primary Splitwise data is cited — this is inferred from industry reporting and Splitwise's general model description.
- **Suggested fix:** Either (1) find primary/secondary source for Splitwise conversion rates (investor presentations, interviews, acquisition reporting), or (2) soften the claim to "Splitwise's model suggests organizers convert at significantly higher rates" without the specific 3-5x multiplier, or (3) label it explicitly as [Assumption] rather than [Estimate].

### 2. "50+ AI travel apps" count is approximate
- **File(s):** pitch-full.md, pitch-2min.md, why-now-timing.md, audience-narrative-competitive.md
- **Problem:** "50+ AI trip planning apps" is used as a key fact across all deliverables. The actual count is an estimate from industry observation, not a verified census. The number is directionally correct but could be challenged.
- **Suggested fix:** Either verify with a specific source (TechCrunch roundup, Product Hunt search, App Store category count) or soften to "dozens of AI trip planning apps."

### 3. Market sizing filters are assumption-heavy
- **File(s):** pitch-full.md, audience-narrative-competitive.md
- **Problem:** The bottom-up market sizing chains four assumptions: 40-50% group trips, 30% have identifiable organizer, English-speaking/iOS/age filter, 3+ trips/year filter. Each assumption is reasonable individually, but the compound effect means the final number (3-8M addressable organizers) has wide error bars. The pitch presents this as a range, which is appropriate, but doesn't flag the compounding uncertainty.
- **Suggested fix:** Add a line in the pitch acknowledging: "Each filter is an estimate — the real number could be 2x higher or lower. What matters is the unit economics work even at the low end of the range."

## Info

- **Cross-format consistency verified.** The 2-sentence opener is consistent across pitch-full.md and pitch-2min.md (faithful compression in the 2-min version). Market size figures, business model, and insight are consistent across all formats.
- **Pitch vs. appendix alignment verified.** All 10 Q&A answers in the appendix are consistent with claims in the pitch narratives. Known weaknesses match the Red/Yellow Flags.
- **No traction claimed.** The pitch honestly states "pre-product, idea stage" — no vanity metrics or inflated claims. Honesty check passed.
- **Team credentials flagged in Red Flags.** The pitch acknowledges the gap ("experienced agentic software engineers" lacks specifics) and notes it needs work for external use. This is appropriate self-awareness.

## Verification Checklist
- [x] All quantitative claims labeled
- [x] No internal contradictions found
- [x] Confidence ratings consistent with evidence
- [x] Data gaps declared in all deliverables
- [x] Red/Yellow flags present in all deliverables
- [x] No stale data unmarked (all data noted as knowledge-based, pre-May 2025)
- [x] No duplicate-source false corroboration
- [x] Pitch claims traceable to source data
- [x] Cross-format consistency verified
- [x] Pitch and appendix aligned
- [x] Honesty checks passed (no inflated traction, no top-down TAM, team gap acknowledged)
`},{filename:"03-viability-report.md",title:"Viability Report",content:`# Viability Report: TripSquad V2

**Phase:** 8 — Validation (Fast Track)
**Project:** tripsquad-v2
**Date:** 2026-05-21
**Confidence:** Medium (grounded in research and V1 lessons, but pre-product — all growth assumptions unvalidated)

---

## Executive Summary

**Viability Score: 68/100**

TripSquad V2 is a deliberate, well-structured pivot from V1 (38/100). Every major red flag from V1 has been addressed with a specific structural fix. The group coordination wedge turns a vitamin into a painkiller for the organizer — a real person with real exhaustion. The organizer-pays model ($39/year) follows Splitwise's proven pattern. The competitive gap in group trip coordination is genuine: no funded product owns voting, shortlists, or structured group decisions for travel. The technology stack (SwiftUI + Supabase + R2) makes a 4-week MVP feasible for two engineers at $140/month.

**What changed from V1 (38/100):**
- Vitamin → painkiller for the organizer (narrowed from "all travelers" to "the person who always plans")
- 18-month time-to-differentiation → value on trip #1 (voting works immediately, no AI learning needed)
- Consumer 2-4% conversion → organizer-pays at 5-8% (high-intent segment, Splitwise-validated pattern)
- Cold-start on 3 dimensions → eliminated 2 of 3 (no AI history needed, no content library needed)
- Startup-scale scope → 4-week Phase 1 MVP (pin + shortlist + voting + timeline + invite)

**What hasn't changed (still risky):**
- No customer validation. All pain-point validation is from personal experience and secondary sources.
- "WhatsApp is good enough" is the #1 existential risk and remains untested with real users.
- No designer on a UX-heavy product.
- Organic-only growth is a bet, not a strategy — it only works if the invite link and public trip loops actually compound.

**Bottom line:** V2 is a credible bootstrapped startup thesis. The unit economics work on paper, the competitive gap is real, and the scope is right-sized. But the entire model hinges on one unvalidated assumption: that organizers will share the invite link and groups will actually use it instead of WhatsApp. The kill criteria at weeks 4, 8, and month 4 are the real viability test.

---

## Scoring Breakdown

### Dimension Scores

| # | Dimension | Score | V1 Score | Weight | Weighted |
|---|-----------|:-----:|:--------:|:------:|:--------:|
| 1 | Problem severity | 7/10 | 4/10 | 15% | 1.05 |
| 2 | Market opportunity | 7/10 | 7/10 | 10% | 0.70 |
| 3 | Competitive position | 8/10 | 4/10 | 15% | 1.20 |
| 4 | Execution feasibility | 7/10 | 3/10 | 15% | 1.05 |
| 5 | Business model | 8/10 | 3/10 | 15% | 1.20 |
| 6 | Growth mechanics | 6/10 | 4/10 | 10% | 0.60 |
| 7 | Defensibility | 5/10 | 5/10 | 10% | 0.50 |
| 8 | Risk profile | 6/10 | 3/10 | 10% | 0.60 |
| | **Total** | | | **100%** | **6.90 → 69/100** |

**Final adjusted score: 68/100** (rounded down — no customer validation penalty)

### Verdict Scale

| Range | Verdict |
|-------|---------|
| 75-100 | Strong — build with confidence |
| 60-74 | **Viable — build, but validate early assumptions aggressively** |
| 45-59 | Marginal — significant pivots needed before committing |
| 30-44 | Weak — fundamental issues (V1 scored here) |
| 0-29 | Non-viable — walk away or completely rethink |

**TripSquad V2 verdict: Viable.** The thesis is sound, but execution and early validation will determine if the score holds or collapses.

---

## Dimension Analysis

### 1. Problem Severity — 7/10 (V1: 4/10)

**V1 problem:** "Travel planning is fragmented" — true but tolerable. Vitamin for most people.

**V2 problem:** "The organizer does all the work and gets zero thanks" — still a vitamin for group members, but a genuine painkiller for the organizer. The organizer is a specific, identifiable person who experiences real social costs: resentment, budget fights, trips that never happen.

| Factor | Assessment |
|--------|-----------|
| Problem frequency | High — organizers plan 3-6 trips/year |
| Problem intensity | Medium-High for organizers, Low for group members |
| Buyer = sufferer? | Yes — the organizer is the one who pays and the one who benefits most |
| Current alternatives adequate? | Barely — WhatsApp+Docs works but the organizer absorbs all the pain |
| Willingness to pay | Moderate-High for organizer personality (Splitwise validates this) |

**Why not 8+:** The problem is real but not urgent in the business sense. Nobody loses money or faces a deadline because of bad trip coordination. The organizer is frustrated, not desperate. And "WhatsApp is good enough" for 80%+ of groups.

### 2. Market Opportunity — 7/10 (V1: 7/10)

The market hasn't changed — group travel is large ($880M-$1.3B TAM) and growing (40-50% of leisure travel, 77% want friend trips per Booking.com). What changed is the targeting: V2 focuses on the organizer segment within that market, which is smaller but higher-intent and higher-converting.

| Metric | Value | Confidence |
|--------|-------|:----------:|
| TAM | $880M-$1.3B/year | Medium |
| SAM (English, iOS, 22-40) | $310M-$585M/year | Medium |
| SOM Year 1 (base) | $39K ARR | Low |
| SOM Year 3 (base) | $585K ARR | Low |

**Why not 8+:** SAM math is solid, but "group trip coordination" has no published market category. The 30% "identifiable organizer" rate is an assumption that could swing the TAM significantly. And no travel planning app has ever achieved dominant market share in this space.

### 3. Competitive Position — 8/10 (V1: 4/10)

**V1:** Competing directly with Wanderlog, TripIt, ChatGPT, and every AI planning tool. Crowded, funded, commoditized.

**V2:** The group decision-making layer is wide open. Zero funded competitors have voting, shortlists, or structured group decisions as a core feature. The positioning ("help us decide" not "help me plan") sidesteps the entire crowded AI planning market.

| Gap | Status |
|-----|--------|
| Group voting/shortlists | No competitor — wide open |
| Organizer-pays for planning | No competitor — Splitwise uses it for expenses only |
| Pre-trip + post-trip in one product | No competitor — planners stop at pre-trip, trackers start at during-trip |
| Completed trips as growth assets | No competitor — Strava playbook, not yet applied to travel |

**Why not 9+:** The moat at launch is thin — voting features are copyable in 2-3 months. Real defensibility requires scale (social lock-in, content network effects). Also, the data is from early 2025 — Wanderlog or a new entrant may have moved into this space since then.

### 4. Execution Feasibility — 7/10 (V1: 3/10)

**V1:** Full lifecycle AI trip planner = 2-3 year, 8-10 person product. Impossible for 2 engineers to bootstrap.

**V2:** Phase 1 MVP (pin + shortlist + voting + timeline + invite link) = 4 weeks for 2 experienced engineers. The tech stack (SwiftUI + Supabase Realtime + Google Places + MapKit + R2) is proven and affordable ($140/month).

| Factor | V1 | V2 |
|--------|----|----|
| MVP timeline | 6-9 months | 4 weeks |
| Core dependency | AI learning (needs data) | Voting (works immediately) |
| Infrastructure cost | $500+/month (AI inference) | $140/month (no AI in core) |
| Designers needed? | Yes (critically) | Yes (still a gap, but simpler UX) |
| Revenue timeline | 9-15 months | Month 3-4 |

**Why not 8+:** No designer is a genuine risk for a UX-heavy group coordination product. The feature list beyond Phase 1 (photos, expense splitting, AI suggestions, public pages) is still ambitious for 2 engineers. Scope discipline is not guaranteed.

### 5. Business Model — 8/10 (V1: 3/10)

**V1:** Consumer subscription at 2-4% conversion with 25,000-50,000 MAU needed for $10K/month. Brutal.

**V2:** Organizer-pays at $39/year. Only the organizer sees the paywall. Splitwise validated this exact model and was acquired for >$50M. Group members are free — they're distribution, not revenue.

| Metric | V1 | V2 |
|--------|----|----|
| Price | $5-10/month | $39/year ($3.25/month) |
| Who pays | Every user | Organizer only |
| Conversion target | 2-4% of all users | 5-8% of organizers |
| CAC | Unknown/high | ~$0 organic (if growth loops work) |
| LTV (at 35% churn) | Unknown | ~$111 |
| Gross margin | ~70% (AI costs) | ~95% (no AI in core) |
| Break-even | 25K-50K MAU | ~2,000 paying organizers |

**Why not 9+:** The 5-8% conversion assumption is aggressive for consumer apps (average is 2-4%). It's justified by the organizer-pays logic but completely unvalidated. Annual churn of 30-50% for a seasonal travel app is a real concern — you need 30-50% year-over-year growth just to stay flat.

### 6. Growth Mechanics — 6/10 (V1: 4/10)

**V2 growth loops:**
1. **Invite link loop (Splitwise model):** Organizer shares link → 4-8 members join → 20% become organizers for their own trips → repeat
2. **Public trip loop (Strava model):** Completed trip → shareable web page → viewer clones trip → downloads app → creates their own trip

Both loops are elegant on paper. Neither is validated.

| Factor | Assessment |
|--------|-----------|
| Invite link share rate needed | >80% of trips |
| Viral coefficient needed | >0.3 (1 in 3 members becomes organizer) |
| Public share rate needed | >15% of completed trips |
| Time to compound | 6-12 months minimum |

**Why 6 (not higher):** Organic-only growth is a constraint, not a strategy. If the invite link conversion is low (<50%) or public share rate is low (<10%), growth stalls and there's no paid marketing fallback at $140/month budget. Travel app Day-30 retention benchmarks (3-7%) are concerning. No travel planning app has achieved viral growth at scale through in-product mechanics alone.

### 7. Defensibility — 5/10 (V1: 5/10)

Unchanged from V1 in score, but the nature of the moat is different:

| Moat | V1 | V2 |
|------|----|----|
| At launch | AI learning (needs data → weak) | Voting features (copyable → weak) |
| At scale | Trip history + preferences (strong) | Social lock-in + content network (strong) |
| Timeline to defensible | 12-18 months | 6-12 months |

**The honest assessment:** At launch, TripSquad's moat is thin. The features are copyable in 2-3 months. Real defensibility comes from social lock-in (friend groups embedded in the product) and content network effects (public trips as SEO). Both require scale. The race: acquire enough organizers to build switching costs before Wanderlog, WhatsApp, or a new entrant claims the gap.

### 8. Risk Profile — 6/10 (V1: 3/10)

**V1 risks:** 7 red flags, most structural and unfixable without funding or pivoting.

**V2 risks:** Fewer, more testable, with clear kill criteria.

| Risk | Severity | Testable? | Kill Signal |
|------|----------|:---------:|-------------|
| "WhatsApp is good enough" | High | Yes — Week 4 | Nobody shares the invite link |
| Organic growth doesn't compound | High | Yes — Week 8 | <5% share rate on completed trips |
| Conversion below 5% | Medium | Yes — Month 4 | <2% organizer conversion |
| Scope creep beyond Phase 1 | Medium | Self-imposed | Feature list grows before metrics hit |
| No designer = poor UX | Medium | Observable | App Store ratings <4.0 |
| Platform risk (WhatsApp adds planning) | Low-Medium | Monitor | WhatsApp beta features |
| Seasonal churn spiral | Medium | Year 1 | Annual renewal rate <50% |

**Why 6 (not higher):** The #1 risk (WhatsApp inertia) is existential and has never been overcome by any travel app at scale. The kill criteria are well-designed, but they only tell you *when* to stop — they don't reduce the probability of failure.

---

## V1 → V2 Improvement Map

| V1 Red Flag | V1 Score | V2 Fix | V2 Score | Delta |
|-------------|:--------:|--------|:--------:|:-----:|
| Vitamin, not painkiller | 4/10 | Narrowed to organizer pain (painkiller for one person) | 7/10 | +3 |
| 18+ month time-to-differentiation | 3/10 | Value on trip #1 (voting works immediately) | 7/10 | +4 |
| Consumer economics (2-4% conversion) | 3/10 | Organizer-pays at 5-8% (Splitwise pattern) | 8/10 | +5 |
| Cold-start on 3 dimensions | 3/10 | Eliminated 2 of 3 (no AI data needed, no content library needed) | 7/10 | +4 |
| Startup scope, not side project | 3/10 | 4-week Phase 1 MVP | 7/10 | +4 |
| No revenue for 9-15 months | 3/10 | Revenue from Month 3-4 | 8/10 | +5 |
| Google risk | 4/10 | Google's ad model conflicts with group tools | 6/10 | +2 |
| **Overall** | **38/100** | | **68/100** | **+30** |

---

## Top 3 Validation Experiments

### Experiment 1: The Invite Link Test (Week 1-4)

**Hypothesis:** Organizers will share a TripSquad invite link to their group instead of creating a WhatsApp group or Google Doc.

**Method:**
1. Build Phase 1 MVP: create trip → pin city → Famous Places feed → shortlist → voting → timeline → invite link
2. Recruit 5 real friend groups planning real upcoming trips (personal network)
3. Give the organizer the app. Observe: do they share the link? Do group members join?
4. Track: invite link share rate, group member join rate, time-to-first-vote

**Success criteria:**
- 4 of 5 organizers share the invite link (80%)
- 60%+ of invited members join within 48 hours
- At least 1 group completes shortlisting + voting without reverting to WhatsApp for decisions

**Kill signal:** <3 of 5 organizers share the link, or groups immediately revert to WhatsApp for decision-making.

**Cost:** $0 (the MVP build is happening anyway). 5 friend groups from personal network.

**What it tests:** The single most important assumption — that groups will use a purpose-built tool instead of WhatsApp for trip decisions.

---

### Experiment 2: The Voting Engagement Test (Week 4-8)

**Hypothesis:** Group members will actively vote on shortlisted places, and voting will produce faster, better group decisions than unstructured WhatsApp discussion.

**Method:**
1. From the 5 groups in Experiment 1, track voting behavior in detail
2. Measure: votes per member, time from shortlist creation to decision, organizer satisfaction
3. Compare (qualitative): ask organizers "was this faster than how you usually decide?"
4. Look for the "aha moment" — when does the organizer realize this is better than WhatsApp?

**Success criteria:**
- 60%+ of group members vote on at least 1 place
- Organizers report decisions were faster/easier than WhatsApp (4 of 5)
- At least 1 organizer spontaneously tells a friend about the app

**Kill signal:** <40% of members vote, or organizers say "this wasn't faster than just asking in WhatsApp."

**Cost:** $0 (same groups, same MVP).

**What it tests:** Whether voting is actually useful for group trip decisions, or whether it's a feature that sounds good but doesn't change behavior.

---

### Experiment 3: The Organizer Conversion Test (Month 3-4)

**Hypothesis:** 5%+ of active organizers will pay $39/year for Pro features when they hit a natural upgrade trigger (group size >8, photo limit, date polling).

**Method:**
1. Launch on App Store with free tier + Pro tier paywall
2. Track organizer behavior through the free tier
3. Measure: which upgrade triggers fire most often? What's the conversion rate at each trigger?
4. A/B test: annual ($39) vs monthly ($4.99) default presentation

**Success criteria:**
- 5%+ of organizers who hit an upgrade trigger convert to Pro
- Annual subscription is chosen >60% of the time (vs monthly)
- At least 10 paying organizers within first month of paywall going live

**Kill signal:** <2% conversion at upgrade triggers, or <5 paying organizers in first month.

**Cost:** Apple Developer Program ($99/year, already budgeted).

**What it tests:** Whether the organizer-pays pricing model works at the proposed price point, and which Pro features actually drive upgrades.

---

## Kill Criteria Summary

| Checkpoint | When | Signal | Action |
|-----------|------|--------|--------|
| **Invite link adoption** | Week 4 | <3 of 5 friend groups use the link | Stop. The distribution thesis is dead. |
| **Voting engagement** | Week 8 | <40% member voting participation | Pivot. Voting isn't the wedge — find another hook. |
| **Share rate** | Week 8 | <5% of completed trips shared publicly | Reduce scope. Public trips aren't the growth loop — focus on invite loop only. |
| **Organizer conversion** | Month 4 | <2% organizer conversion to Pro | Reprice or change the paywall. Current model doesn't work. |
| **Growth stall** | Month 6 | <1,000 total organizers | Reassess. Organic growth isn't compounding. Consider paid channels or pivot. |

---

## Flags

**Red Flags:**
- No customer validation has been conducted. All demand signals are inferred from secondary sources and personal experience.
- "WhatsApp is good enough" remains the #1 existential risk and has never been overcome by any travel app.
- Knowledge-based research only (web search unavailable). Competitor states, market data, and new entrants may have changed since early 2025.

**Yellow Flags:**
- 5-8% organizer conversion is aggressive for consumer apps. The Splitwise organizer-pays analogy is compelling but unverified with primary data.
- No designer on a UX-intensive product. First hire should be a designer, not another engineer.
- The 18-24 month competitive window is an estimate. A well-funded team or platform move could close the gap faster.
- Annual churn of 30-50% for a seasonal app means you need significant year-over-year growth just to maintain flat revenue.

**Green Flags:**
- Every V1 red flag has a specific, structural V2 fix — this isn't a cosmetic rebrand, it's a genuine pivot.
- The competitive gap in group trip coordination is real and has persisted for 7+ years.
- Unit economics are favorable if organic growth works: 95%+ gross margin, near-zero CAC for group members, $111 LTV at 35% churn.
- The 4-week Phase 1 MVP is right-sized — you'll know if the core thesis works before over-investing.
- Clear kill criteria prevent prolonged investment in a failing thesis.

## Sources
- V1 Viability Report (38/100) — \`docs/01-V1/03-VIABILITY-REPORT.md\`
- Market analysis — \`docs/02-V2/01-discovery/market-analysis.md\`
- Competitor landscape — \`docs/02-V2/01-discovery/competitor-landscape.md\`
- Revenue model — \`docs/02-V2/05-financial/revenue-model.md\`
- Lean canvas — \`docs/02-V2/02-strategy/lean-canvas.md\`
- Pitch session research — \`docs/02-V2/raw/\`
- RevenueCat 2024, UNWTO, Booking.com surveys, Crunchbase [Data/Estimate]
`},{filename:"04-viability_report_standalone.md",title:"Viability_Report_Standalone",content:`# TripSquad — Viability Report

**Date:** 2026-05-21
**Confidence:** Medium (mix of live web data and training-data analysis; key claims cross-referenced where possible)
**Verdict:** CONDITIONAL GO (6.4 / 10)

---

## Executive Summary

TripSquad targets a real, validated pain point — group trip coordination is fragmented across 4-5 apps, and the "organizer friend" bears a disproportionate burden. The market demand is strong: 88% of Millennials and Gen Z plan to maintain or increase travel spending in 2026, 45% of Gen Z plan group tours in the next 12 months, and travel is a "non-negotiable" expense for 74% of young travelers.

However, the competitive landscape is **significantly more crowded than the idea document acknowledges**. At least 8-10 direct competitors now target group trip planning specifically — not just the legacy players (Wanderlog, TripIt, Splitwise) mentioned in the brief. Polarsteps has reached $10M revenue and 15M users profitably. Newer entrants like WePlanify, FlowTrip, SquadTrip, AvoSquado, and Pilot are all attacking the same "group-first" positioning TripSquad claims as its differentiator.

The idea is viable but faces three fundamental challenges: (1) the group adoption problem — getting 6-8 people to use a new app for something they do 3-6 times per year, (2) a more competitive landscape than assumed, and (3) unproven unit economics at the $39/year price point with an organizer-pays model. The path forward requires ruthless validation of these assumptions before significant investment.

---

## 1. Market Analysis

### Market Size

| Level | Size | Source | Confidence |
|-------|------|--------|------------|
| **TAM** (Global travel app market) | $11.8B–$14B (2025) | Business Research Insights, Dataintelo | Medium — reports vary by methodology |
| **SAM** (Travel planner app segment) | $3.4B (2025) | Market.us | Medium |
| **Niche** (Group travel planning apps) | $245M (2025) | Market Report Analytics | Low — single source, narrow definition |
| **SOM** (Realistic Year 1) | $200K–$500K | [Estimate] based on comparable trajectories | Low |

**Growth rates:** The broader travel app market grows at 11–20% CAGR depending on definition. The group travel planning niche is projected at 8.1% CAGR through 2033. [Data, Market Report Analytics]

**Key insight:** The $245M group travel planning niche is small by VC standards but viable for a bootstrapped/seed-stage business. At 5% penetration of the niche, that's ~$12M ARR — enough for a sustainable business but below typical Series A thresholds unless growth rate significantly outpaces the market.

### Demand Signals

**Strong signals:**
- 88% of Millennials and Gen Z maintaining or increasing travel budgets [Data, Web in Travel / Simon-Kucher 2026]
- 45% of Gen Z planning to join group tours in next 12 months [Data, EF Ultimate Break survey]
- Gen Z expected to spend $6,434 on international trips annually [Data, Globetrender / Simon-Kucher]
- 60% of 30-35 year olds interested in group travel with shared accommodations [Data, EF Ultimate Break]
- Nearly 60% of Gen Z took 2+ holidays in 2025 [Data, Condor Ferries]

**Weak/mixed signals:**
- Travel app Day 30 retention is only 2.8% [Data, Statista] — the "use it 3x/year" pattern makes habitual engagement hard
- Travel is episodic, not daily — unlike fitness (Strava) or finance (Splitwise) where the comparable growth models originate
- The "good enough" threshold for WhatsApp + Google Docs is high — most groups tolerate chaos because trips are infrequent

### Timing Assessment

| Factor | Signal | Impact |
|--------|--------|--------|
| Google killed Google Trips (2019) | No replacement built | Positive — vacuum persists |
| AI travel planning hype (2024-2026) | Every player adding AI | Neutral — AI alone is not a moat; everyone has it |
| Group travel demand growth | 30% YoY search growth | Positive |
| Competitor density increasing | 8-10 new entrants since 2023 | Negative — window narrowing |
| VC appetite for travel planning | Warming but selective | Positive for fundraising |
| Big tech encroachment | Google Maps adding collab features | Moderate risk |

**[Opinion] The window is open but closing.** The "pre-category-leader" phase for group travel planning has attracted many entrants. Within 18-24 months, a winner will likely emerge or the space will consolidate. TripSquad needs to move fast.

---

## 2. Competitive Landscape

### Critical Finding: The Idea Document Understates Competition

The TripSquad brief lists Wanderlog, Splitwise, Google Maps, WhatsApp, TripIt, and ChatGPT as competitors. **This significantly understates the competitive reality.** The group trip planning space has seen a wave of new entrants, many targeting the exact same "group-first" positioning.

### Direct Competitor Matrix

| Competitor | Group Features | Pricing | Funding | Traction | Threat Level |
|-----------|---------------|---------|---------|----------|-------------|
| **Wanderlog** | Collaborative itinerary, sharing | Free + Pro ($35/yr) | $1.65M (YC) | 8M+ trips, $1M rev (2024) | **High** |
| **Polarsteps** | Tracking, journaling, photo books, sharing | Free + Pro | $5M raised, now profitable | 15M users, $10M rev, 110 employees | **High** |
| **WePlanify** | Group polls, shared budget, packing lists, invite links | Free forever | Unknown | Unknown — new entrant | **Medium-High** |
| **FlowTrip** | AI planning, voting, shared expenses, group map | Free + Pro | Unknown (backed by MWM) | New (2025 launch) | **Medium** |
| **SquadTrip** | Payment collection, booking pages, itineraries | Free + $29/mo | Unknown | Active, payment-focused | **Medium** |
| **AvoSquado** | Group planning, bedroom assignments, 400K activities | Free | Unknown | Active | **Medium** |
| **Pilot Plans** | Collaborative booking + planning | Free | Unknown | Active | **Low-Medium** |
| **TripIt** (SAP) | Itinerary organization (weak group) | Free + Pro ($49/yr) | Acquired by SAP | Large install base, business-focused | **Low** (different segment) |
| **Splitwise** | Expense splitting only | Free + Pro ($40/yr) | $21M raised | 100M+ downloads | **Low** (adjacent, not direct) |

### What Competitors Already Have

Several competitors **already offer the features TripSquad positions as differentiators:**
- **Voting/polls on places:** WePlanify, FlowTrip both have this
- **Invite-link joining:** WePlanify ("join without downloads or sign-ups"), Wanderlog
- **Shared shortlists:** Wanderlog, WePlanify, FlowTrip
- **Map-based planning:** Wanderlog (map-first), FlowTrip (real-time group map)
- **Expense splitting:** FlowTrip, SquadTrip (more advanced with BNPL)
- **AI suggestions:** FlowTrip, Wanderlog (both have AI itinerary features)

### What No Competitor Does Well (TripSquad's Actual Whitespace)

1. **Post-trip photo sync + auto-tagging to timeline** — Polarsteps does tracking/journaling but not collaborative photo aggregation from multiple group members tagged to specific activities. This is genuinely novel.

2. **Public shareable trip artifacts as growth engine** — Polarsteps has sharing but not the "clone this trip" mechanic. No competitor has built the Strava-like public content loop for group trips specifically.

3. **Creator/vlogger distribution channel** — No competitor has explicitly targeted travel YouTubers as a distribution mechanism with shareable interactive maps.

### Competitive Moat Assessment

**[Opinion] The proposed moat is weak at launch.** The brief claims social lock-in, content inventory, organizer loyalty, and network density. These are real moats *at scale* but provide zero protection at launch. Any competitor can add photo sync, clone-a-trip, and creator links. The true moat question is: can TripSquad reach critical mass in friend-group adoption before competitors copy the novel features?

**Name collision risk:** SquadTrip already exists as an active competitor. "TripSquad" is perilously close and could create brand confusion, trademark issues, or App Store search cannibalization. **[Red Flag]**

---

## 3. Business Model Analysis

### Organizer-Pays Model: $39/year

**Strengths:**
- Correctly targets the person with highest willingness to pay (the "trip hero")
- Mirrors Splitwise's successful model — organizer-personality converts 3-5x vs. casual users [Assumption, sourced from Splitwise's public statements]
- Annual pricing avoids per-trip friction at the moment of highest enthusiasm

**Concerns:**

| Metric | TripSquad Assumption | Industry Benchmark | Assessment |
|--------|---------------------|-------------------|------------|
| Free-to-paid conversion | Not stated | 2-5% (B2C SaaS/Prosumer) | At 3% conversion with $39 ARPU, need 333K free users per $1M ARR |
| Monthly churn (annual plan) | Not stated | 3-7% monthly (B2C SaaS) | Annual plans help: upper quartile retain 60-75% [Data, RevenueCat 2025] |
| Trial-to-paid conversion | Not stated | 48.7% median for travel apps [Data, Business of Apps 2026] | Promising if trial is well-designed |
| LTV/CAC ratio | Not stated | 3:1 minimum healthy | Unknown — CAC is the critical unknown |

**Unit economics scenario (conservative):**
- 100K free users after Year 1 [Assumption — aggressive for a new app]
- 3% convert to Pro = 3,000 paying organizers
- $39/year ARPU = $117K ARR
- Assume 40% annual churn = net ~$70K recurring
- **[Yellow Flag]** This does not cover even one engineer's salary. The organizer-pays model at $39/year needs massive free-user volume to work.

**Revenue path to viability:**
- Break-even (2 engineers + infra): ~$300K–$400K/year
- Required paying organizers: ~8,000–10,000 at $39/year
- Required free users (at 3% conversion): ~270K–330K
- **[Estimate]** This is achievable within 18-24 months IF the viral loop works, but extremely ambitious for Year 1.

### Alternative Revenue Streams

| Stream | Potential | Timeline | Risk |
|--------|----------|----------|------|
| Photo books (Polarsteps model) | High ($36–$150/book, proven demand) | Month 6-12 | Production partnerships needed |
| Booking affiliates | Low-Medium (3-8% commission) | Month 12+ | Needs 10K+ active trips/month for meaningful revenue |
| Creator monetization | Low initially | Month 12+ | Creators need audience, you need creators |

**[Opinion]** Photo books are the most promising near-term revenue diversification. Polarsteps has proven this model works at scale — they generate significant revenue from print products. TripSquad's auto-tagged group photos are a natural fit for this. This should be elevated from Phase 4 to Phase 2.

---

## 4. Product & Technical Feasibility

### Build Scope Assessment

The proposed 8-week MVP scope for 2 engineers is **aggressive but plausible** if iOS-only, using SwiftUI + Supabase/Firebase:

| Phase 1 Features (Weeks 1-4) | Complexity | Feasible? |
|------------------------------|------------|-----------|
| Trip creation + city pin drop | Low | Yes |
| Google Places API integration | Medium | Yes |
| Shared shortlist with voting | Medium | Yes |
| Shareable invite link | Medium | Yes |
| Day-by-day timeline | Medium-High | Tight |
| Auth (Apple Sign In) | Low | Yes |

| Phase 2 Features (Weeks 5-8) | Complexity | Feasible? |
|------------------------------|------------|-----------|
| Photo auto-detect + upload | High | Tight — PhotoKit + GPS matching is non-trivial |
| Auto-tag to timeline | High | Risky in 4 weeks — GPS/timestamp matching has edge cases |
| Shared photo timeline | Medium | Yes |
| Duplicate detection (pHash) | Medium | Yes (server-side) |
| Date polling | Low | Yes |
| Public trip page (web) | Medium-High | Requires separate web stack |
| Push notifications | Low | Yes |

**[Yellow Flag]** The public trip page requires a web renderer (server-side rendered or static site) — this is a separate product surface from the iOS app and adds meaningful scope. The photo features in Phase 2 are technically complex: GPS matching within 500m radius, timestamp correlation, handling photos without GPS metadata, and managing uploads of 50-120 photos per user. Combined with building a web product, 4 weeks is optimistic.

**Cost estimate validation:** The $140/month pre-scale cost estimate is reasonable. Google Places API at ~$17/1K detail requests, Supabase at ~$25/mo, and Cloudflare R2 for photo storage are all well-priced. The cost curve stays manageable until ~10K monthly active trips.

---

## 5. Growth Model Evaluation

### The Strava Comparison: Why It's Imperfect

The idea document models growth on Strava's sharing loop. This comparison has significant structural differences:

| Factor | Strava | TripSquad |
|--------|--------|-----------|
| Usage frequency | Daily/weekly | 3-6x/year |
| Sharing motivation | Personal achievement | Group memory |
| Content creation effort | Automatic (GPS tracking) | Requires photo upload from all members |
| Viral coefficient | High (athletes share every run) | Lower (share 3-6 trips/year, not all publicly) |
| Time-to-value | Immediate (track a run) | Days/weeks (plan + execute a trip) |
| Network effect type | Individual → followers | Group → all members must adopt |

**[Opinion]** The Strava model works because content creation is effortless and frequent. TripSquad's shareable artifacts require the group to complete a trip AND upload photos AND the organizer to publish — this is a multi-step funnel with significant drop-off risk. The brief's own kill criteria (15% share rate) seems optimistic.

### Creator/Vlogger Channel: Promising but Unproven

The idea of travel YouTubers linking interactive trip maps in video descriptions is genuinely compelling. Travel creators currently monetize via affiliate links (GetYourGuide at 8%, Stay22 for accommodations, SafetyWing at 10%). A "clone this trip" link would be a new format.

**Risks:**
- Creators need the app to be good enough to replace their own planning workflow
- Creator audiences may browse but not convert (passive consumption)
- No creator will adopt unless they see clear value for themselves first
- Competitors could copy this feature trivially once proven

**[Estimate]** Seeding 10 travel YouTubers (as proposed in Phase 3) would cost $0 in direct spend but significant relationship-building time. If each creator averages 50K views/video and 2% click the trip link, and 10% of those create an account, that's ~100 users per video. At 10 creators publishing monthly, that's 1,000 users/month — meaningful but not explosive.

### Built-In Virality Analysis

Every trip invite theoretically brings 4-8 new users. This is the strongest growth mechanic.

**Model:**
- 1 organizer creates a trip, invites 5 friends
- 5 friends experience the product
- Assume 20% of those friends become organizers themselves (1 new organizer)
- Viral coefficient: ~1.0 (each organizer generates ~1 new organizer)

**[Yellow Flag]** A viral coefficient of 1.0 sustains growth but doesn't accelerate it. To go viral (k > 1), TripSquad needs >20% of group members to become organizers. This depends entirely on the product being dramatically better than WhatsApp + Google Docs — which requires testing.

---

## 6. Risk Analysis

### Risk Matrix

| Risk | Likelihood | Impact | Priority |
|------|-----------|--------|----------|
| **Group adoption barrier** — can't get 6-8 friends to adopt a new app | High | Critical | **#1** |
| **Competitive convergence** — competitors add same features | High | Major | **#2** |
| **Low share rate** — completed trips don't get published | Medium-High | Critical | **#3** |
| **Name collision with SquadTrip** | High | Major | **#4** |
| **Organizer-pays conversion too low** | Medium | Critical | **#5** |
| **Photo sync too complex for MVP timeline** | Medium | Major | **#6** |
| **Platform risk** — Google/Apple add group features | Low-Medium | Critical | **#7** |
| **Travel app retention** — 2.8% Day 30 retention | Medium | Major | **#8** |
| **iOS-only excludes Android users in the group** | High | Critical | **#9** |
| **App Store rejection for photo access** | Medium | Moderate | **#10** |

### Top 3 Risks Detailed

**Risk #1: The Group Adoption Problem**
This is the single biggest threat. Unlike individual-use apps, TripSquad requires multiple people in the same social group to adopt. The organizer is motivated, but group members face friction: download an app, create an account (or join via link), learn the interface, and actively participate — for something they do a few times a year. WhatsApp is already installed, already open, and "good enough."

*Mitigation:* The frictionless invite link (no account required to view/vote) is the right approach. But voting without an account means anonymous votes, which reduces engagement. The brief's access model is intentionally left open — this must be resolved with extreme care. The wrong auth wall at the invite step kills virality.

**Risk #2: Competitive Convergence**
WePlanify already offers group polls, shared budgets, and invite links — for free, forever. FlowTrip has AI + voting + shared expenses. The "group-first with voting" positioning that TripSquad claims as its core differentiator is **already occupied by multiple competitors**. This doesn't make TripSquad impossible, but it means the window for "first mover in group trip planning" has closed. The play is now "best execution" — which requires either more funding, faster shipping, or a truly unique wedge.

*Mitigation:* Double down on the photo sync + shareable artifact features as the true differentiator. No competitor does this well. Make the post-trip experience the hero, not the pre-trip planning.

**Risk #3: The Shareable Artifact Assumption**
The entire growth model depends on completed trips becoming public shareable content. But most people treat travel memories as personal/private. The brief assumes 15% share rate as the minimum — but most photo-sharing apps see public sharing rates of 5-10% for personal content.

*Mitigation:* Test this assumption before building the full public trip infrastructure. A simple landing page test showing "would you share your trip publicly?" would provide signal before investing in the web renderer.

---

## 7. Idea Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|-------------|-----------|
| **Problem severity** | 8 | Genuine, widely documented pain. Group trip planning is fragmented and the organizer burden is real. Strong customer voice evidence. |
| **Market size** | 5 | Group travel planning niche is ~$245M [Data]. Growing but small. Broader travel app TAM of $3.4B+ is accessible only if the product expands beyond pure planning. |
| **Competitive advantage** | 4 | The claimed differentiator (group voting/shortlists) is already offered by multiple competitors. Photo sync + shareable artifacts are genuinely novel but are P0/P1, not the core thesis. The name is dangerously close to an existing competitor (SquadTrip). |
| **Feasibility** | 7 | iOS + SwiftUI + Supabase is a proven stack. 2 engineers can build the core in 8 weeks, though photo features add risk. Cost structure is manageable pre-scale. |
| **Business model clarity** | 5 | Organizer-pays at $39/yr is logical but unproven. Unit economics require very high free-user volume (270K+) to reach sustainability. Photo books (Polarsteps model) could strengthen this but aren't in the MVP. |
| **Founder-market fit** | N/A | Not assessed — no founder background information provided beyond "two engineers." |
| **Timing** | 6 | Market demand is strong, but the competitive window is narrowing. 18-24 months ago this would score 8. Multiple new entrants in 2024-2025 have filled much of the whitespace. |
| **Overall** | **6.4** | |

### Verdict: CONDITIONAL GO

TripSquad targets a real problem with a thoughtful product vision. The idea document is exceptionally well-researched and demonstrates genuine strategic thinking. However, three conditions must be validated before committing significant resources:

1. **Validate the group adoption mechanic** — Can you get 5 real friend groups to plan a real trip through the app, with >50% of group members actively participating (not just the organizer)? If group members won't engage, the product becomes another solo planning tool in a crowded market.

2. **Validate the sharing behavior** — Will >10% of completed trips be shared publicly? If not, the Strava growth model fails and you need a different distribution strategy.

3. **Resolve the competitive positioning** — The "group-first with voting" angle is now contested by multiple entrants. Either (a) find a sharper wedge (the photo-to-artifact pipeline is the most promising candidate), (b) execute faster than competitors, or (c) identify a segment they're ignoring (e.g., travel creators specifically, or a geographic niche).

---

## 8. Flags Summary

### Red Flags

- **Name collision:** "TripSquad" is dangerously similar to "SquadTrip," an active competitor in the same space. This risks trademark disputes, App Store confusion, and SEO cannibalization. Strongly recommend a name change or legal clearance before any public launch.
- **Understated competition:** The competitive analysis in the idea document misses 5-8 direct competitors that have launched since 2023, several with the exact "group-first" positioning TripSquad claims as its differentiator.

### Yellow Flags

- **Episodic usage:** Travel apps have 2.8% Day 30 retention. TripSquad will be used intensely for 2-4 weeks per trip, then dormant for months. Retention metrics will look terrible by standard app benchmarks, making fundraising narratives harder.
- **Group coordination chicken-and-egg:** The product is most valuable when the whole group uses it, but each individual has low motivation to adopt for something they do 3-6x/year. The invite flow design is existentially important.
- **Photo sync complexity:** Auto-detecting, uploading, and GPS-tagging photos from multiple users is technically complex. Edge cases (no GPS metadata, indoor photos, timezone mismatches) could consume disproportionate engineering time.
- **$39/year may be too low:** At 3% conversion, you need 270K+ free users to reach sustainability. Consider whether a higher price point ($59-79/year) with fewer but more committed organizers would yield better unit economics — the "trip hero" personality may have higher WTP than assumed.
- **Share rate assumption:** The 15% public sharing threshold from the kill criteria may be optimistic for personal travel content. Most personal content sharing rates on social platforms are 5-10%.

---

## 9. Strategic Recommendations

### What to Keep (Strongest Elements)

1. **The organizer-pays insight** — Correctly identifies the customer (the planner, not the group). This is the right monetization axis.
2. **Photo sync + auto-tagging** — Genuinely differentiated. No competitor does collaborative group photo aggregation tied to an itinerary timeline. Make this the hero feature, not a Phase 2 add-on.
3. **Shareable trip artifacts** — The "clone this trip" mechanic is novel and could be the true competitive moat if it drives organic acquisition.
4. **The kill criteria approach** — Clear metrics at weeks 4, 8, and month 4 is exactly right. Most founders don't have the discipline to define failure conditions in advance.

### What to Change

1. **Change the name.** SquadTrip exists. "TripSquad" invites legal risk and brand confusion. Do this before anything else.

1b. **Solve the iOS-only problem.** This is existential for a group product. One Android user in a 6-person friend group breaks the chain — they can't vote, can't add places, can't contribute photos. Competitors like Wanderlog and WePlanify are cross-platform or web-based. The brief proposes Android in Phase 4 (Months 5-12), but for a group coordination tool, this may be too late. The web-first invite experience (Recommendation #5 below) partially mitigates this — if group members can do everything meaningful in a browser, iOS-only is less fatal.

2. **Reposition the core differentiator.** "Group voting and shortlists" is no longer unique — WePlanify, FlowTrip, and others already have it. Reposition around the **post-trip artifact**: "The only group trip app that turns your trip into a shareable, cloneable experience." Lead with the photo timeline and public sharing, not the planning features.

3. **Accelerate photo features to Phase 1.** The photo sync + shareable artifact is the strongest differentiator. Delaying it to Phase 2 means the MVP tests the least differentiated part of the product. Consider a "plan + capture" MVP that includes basic photo tagging from day one, even if the planning features are simpler.

4. **Price test at $59-79/year.** The "trip hero" personality is motivated and underserved. $39/year may leave money on the table. Test higher price points early — it's easier to lower prices than raise them.

5. **Build a web-first invite experience.** The invite link should open a fully functional web app (not just a preview with App Store prompt). If group members can vote and view the plan without downloading anything, adoption friction drops dramatically. This is how Figma and Notion won — the viewer experience is free and frictionless, native app is for power users.

6. **Add a photo book revenue stream by Month 4.** Polarsteps proves this works ($10M revenue, profitable). TripSquad's auto-tagged group photos are a natural input for photo books. Partner with Peecho or a print-on-demand service. This could become the primary revenue stream, reducing pressure on subscription conversion.

### What to Test First (Ordered by Cost/Speed)

| # | Experiment | Tests | Cost | Time |
|---|-----------|-------|------|------|
| 1 | Landing page with "Plan your next group trip" CTA | Email signup conversion, messaging resonance | $200 (domain + ads) | 1 week |
| 2 | Fake door test: "Clone this trip" on a sample trip page | Would viewers actually clone? | $0 (manual page) | 1 week |
| 3 | Interview 15 "organizer friends" about their last group trip | Pain validation, WTP, feature priority | $0 | 2 weeks |
| 4 | Prototype the invite flow (Figma) and test with 3 friend groups | Group adoption friction, auth wall impact | $0 | 2 weeks |
| 5 | Concierge MVP: manually help 5 groups plan trips using the app's proposed workflow | End-to-end validation, photo sharing behavior | $0 | 4 weeks |

---

## 10. Financial Viability Summary

### Path to Sustainability

| Milestone | Required | Timeline | Confidence |
|-----------|----------|----------|------------|
| 1,000 active trips/month | Validates product-market fit | Month 6-8 | Low |
| 5,000 paying organizers | $195K ARR — covers infra + 1 engineer | Month 12-18 | Low |
| 10,000 paying organizers + photo books | $390K ARR + $100K print = ~$490K | Month 18-24 | Very Low |
| Break-even (2 engineers) | ~$400K combined revenue | Month 18-24 | Very Low |

### Cost Structure (Year 1)

| Item | Monthly Cost | Annual |
|------|-------------|--------|
| Google Places API (1K MAT) | $85 | $1,020 |
| Supabase (Pro) | $25 | $300 |
| Cloudflare R2 (photo storage) | $20-50 | $240-600 |
| Apple Developer Account | — | $99 |
| Domain + web hosting | $15 | $180 |
| **Total infrastructure** | **~$150** | **~$1,800** |
| Engineer salaries (2, if employed) | $25K-40K | $300K-480K |

**[Opinion]** The infrastructure costs are trivially manageable. The existential cost question is whether 2 engineers can sustain themselves long enough to reach 5,000+ paying organizers. If bootstrapping, this likely requires both founders to have 12-18 months of personal runway or part-time income.

---

## Sources

- [Travel Planner App Market Size — Market.us](https://market.us/report/travel-planner-app-market/)
- [Group Travel Planning Apps Market — Market Report Analytics](https://www.marketreportanalytics.com/reports/group-travel-planning-apps-75334)
- [Travel Application Market — Business Research Insights](https://www.businessresearchinsights.com/market-reports/travel-application-market-116262)
- [Wanderlog Revenue — GetLatka](https://getlatka.com/companies/wanderlog.com)
- [Wanderlog Funding — Tracxn](https://tracxn.com/d/companies/wanderlog/__lelvNWkEOVXLC2fYXKoX0fazml8sWLb7U2Epc5HPuJA/funding-and-investors)
- [Polarsteps Funding & Users — Polarsteps News](https://news.polarsteps.com/news/polarsteps-hits-1-million-users-and-raises-3-million-in-funding)
- [Polarsteps Company Profile — Tracxn](https://tracxn.com/d/companies/polarsteps/__Q-i1_EyIFQ7H8ztDGL5LpHMOoZvC18hrwpY-xIskvKg)
- [SquadTrip](https://www.squadtrip.com/)
- [WePlanify](https://www.weplanify.com/en)
- [FlowTrip](https://www.flowtrip.app/blog/best-group-trip-planning-apps-2026)
- [App Subscription Trial Benchmarks 2026 — Business of Apps](https://www.businessofapps.com/data/app-subscription-trial-benchmarks/)
- [State of Subscription Apps 2025 — RevenueCat](https://www.revenuecat.com/state-of-subscription-apps-2025/)
- [Travel App Benchmarks 2026 — Business of Apps](https://www.businessofapps.com/data/travel-app-benchmarks/)
- [Gen Z Travel Spending — Globetrender / Simon-Kucher](https://globetrender.com/2025/10/07/gen-z-to-spend-most-on-international-travel-in-2026/)
- [Millennials and Gen Z Travel 2026 — Web in Travel](https://www.webintravel.com/88-of-millennials-and-gen-z-keeping-travel-spending-strong-in-2026/)
- [State of Gen Z Travel — EF Ultimate Break](https://www.efultimatebreak.com/blog/state-of-gen-z-and-millennial-travel-vol-iii)
- [2026 Global Travel Trends — American Express](https://www.americanexpress.com/en-us/travel/discover/get-inspired/global-travel-trends)
- [Best Group Trip Planning Tools 2026 — SquadTrip Guides](https://www.squadtrip.com/guides/best-tools-for-group-trip-planning/)
- [Best Group Travel Planning Apps 2026 — TripProf](https://tripprof.com/en/blog/best-group-travel-planning-apps/)
- [Best Group Trip Planner Apps 2026 — WePlanify](https://www.weplanify.com/en/alternatives/best-group-trip-planner-apps)
`},{filename:"05-pitch-scorecard.md",title:"Pitch Scorecard",content:`# Pitch Scorecard: TripSquad
*Skill: startup-pitch | Generated: 2026-05-20*

## Data Foundation
**Built with:** Self-reported data (intake + idea document) + knowledge-based research (web tools unavailable)

Note: This pitch was built without validated web research or primary user data. Scores in Market Sizing, Traction Honesty, and competitive Q&A may improve after running web verification or user interviews.

## Scoring Rubric

| Dimension | Score (1-10) | Rationale |
|-----------|-------------|-----------|
| **Clarity** | 9 | The 2-sentence opener is immediately understandable. "Replace WhatsApp + Google Docs + Splitwise with one link" is concrete, jargon-free, and passes the grandmother test. The Barcelona example makes the flow tangible. |
| **Strength Sequencing** | 8 | Leading with the insight ("nobody built the group decision layer") is the right call at pre-product stage. The organizer's burden hook in the first 20 seconds creates emotional buy-in before the analytical pitch begins. Could be a 9 if there were traction to put second. |
| **Traction Honesty** | 8 | Honestly stated as pre-product. No vanity metrics, no inflated claims. The pitch pivots cleanly to insight and timing instead of pretending traction exists. Kill criteria at weeks 4, 8, and month 4 demonstrate discipline. Loses points only because pre-product is inherently weak, not because the handling is poor. |
| **Insight Quality** | 9 | "Group trips fail at the decision layer, not the discovery layer" is genuinely non-obvious and specific. The competitive scan (50+ apps chased solo AI, none built group voting) is a strong structural observation. The insight directly powers the product direction — it's not decorative. |
| **Market Sizing** | 6 | Bottom-up math is present and the structure is right, but the chain of assumptions (group trip %, organizer %, filters) is long and each link is an estimate. The Splitwise and Flighty benchmarks ground the revenue scenarios well. Needs primary data or third-party research to strengthen. |
| **Business Model** | 8 | One clear model, well-articulated. "Organizer pays, group is free" is instantly understandable. The Splitwise analogy makes it credible. Loses 2 points because the 5% conversion rate is assumed, not validated, and the $39/year price point hasn't been tested with real users. |
| **Team Credentials** | 4 | "Experienced agentic software engineers" is too generic. No named accomplishments, no specific products shipped, no domain expertise articulated. For internal clarity this is fine, but this is the weakest dimension and would be a dealbreaker for any external pitch. |
| **Ask Clarity** | N/A | Not raising. Appropriately omitted. |
| **Overall** | **60** | |

## Verdict

**50-64: Investor-ready with caveats.** For internal clarity purposes, this pitch is strong — the narrative is sharp, the insight is genuine, and the competitive positioning is differentiated. For any external use (investors, accelerators, partners), two dimensions need work: team credentials (specific accomplishments) and market sizing (primary data to validate assumptions).

## Weak Dimensions (Score < 7)

### Team Credentials (Score: 4)
- **What's weak:** No specific accomplishments, companies, products, or technical achievements. "Experienced agentic software engineers" tells the listener nothing about what the team has actually done.
- **How to fix:** For each founder, identify: (1) the most impressive thing you've shipped (app name, scale, users, technical challenge solved), (2) relevant domain experience (travel? mobile? real-time collaboration?), (3) how long you've worked together, and (4) why YOU for this problem specifically.
- **Data needed:** Named accomplishments and specifics from each founder.

### Market Sizing (Score: 6)
- **What's weak:** The assumption chain (40-50% group trips × 30% identifiable organizer × English/iOS/age filter) is reasonable but unverified. Each filter narrows the estimate, and the compound uncertainty is significant.
- **How to fix:** (1) Find primary survey data on group trip frequency and organizer behavior (Phocuswright, Google travel studies). (2) Validate the "3-8M addressable organizers" estimate with at least one independent source. (3) Run a small survey (50-100 responses) asking: "Do you plan group trips? How many per year? Who does the planning?"
- **Data needed:** Third-party travel behavior surveys; optionally, primary survey data.

## Delivery Readiness
- [ ] 2-sentence opener practiced until effortless
- [ ] All numbers memorized (not read from notes) — market size, $39/year, 4-8 group members, $140/month infrastructure
- [ ] Prepared answers for top 5 investor questions (see appendix)
- [ ] Know the biggest weakness (no traction, WhatsApp-good-enough risk) and how to address it
- [ ] Practiced with at least one person (or investor roleplay)

## What V2 Fixed from V1

The V1 pitch (based on the AI-first vision) would have scored significantly lower:

| Dimension | V1 Score (est.) | V2 Score | What Changed |
|-----------|----------------|----------|--------------|
| Clarity | 7 | 9 | V1 tried to explain AI learning + full lifecycle. V2 is "one link, everyone plans." |
| Insight Quality | 6 | 9 | V1's insight ("AI should learn across trips") is interesting but requires 3+ trips. V2's insight ("group decisions, not discovery") is immediately testable. |
| Business Model | 5 | 8 | V1 was "freemium, TBD pricing." V2 is "organizer pays $39/year, Splitwise model." |
| Traction Honesty | 5 | 8 | V1 tried to pitch without acknowledging traction gaps. V2 owns it and pivots to insight/timing. |

The V1 viability report scored 38/100 and flagged vitamin-not-painkiller, 18-month time-to-differentiation, cold-start problems, and consumer economics. V2 directly addresses all four: narrowed to organizer pain (painkiller), value on trip #1 (no AI dependency), eliminated 2 of 3 cold starts, and organizer-pays model (Splitwise economics).

## Red Flags
- Pre-product pitch — all behavioral claims are assumptions until validated with real users.
- Team credentials need specific work before any external pitch.
- Research was knowledge-based (no live web verification) — data points should be spot-checked.

## Yellow Flags
- The "organizer pays" model is well-reasoned but untested. Actual organizer willingness to pay $39/year needs price-sensitivity testing.
- Photo book revenue (listed as future stream) is speculative — Polarsteps validated the model, but TripSquad's version is Phase 4+.
- SEO/content growth loop (public trip pages) requires volume (1,000+ published trips) to produce meaningful organic traffic.
`},{filename:"06-pitch-2min.md",title:"Pitch 2Min",content:`# Two-Minute Pitch: TripSquad
*Skill: startup-pitch | Generated: 2026-05-20*

## The Script (~300 words)

There's one person in every friend group who plans the whole trip. They make the WhatsApp group, write the Google Doc, set up Splitwise, research every restaurant. They're the organizer. They're exhausted. We built TripSquad for that person.

TripSquad replaces the WhatsApp + Google Docs + Splitwise stack with one shareable link. The organizer drops a pin on a city, the app surfaces famous places — restaurants, landmarks, viewpoints. They share the link. Everyone joins, browses, and adds places to a shared shortlist. Every place gets a poll — yes, no, maybe. The organizer promotes the winners to a day-by-day timeline. Done.

Here's the insight: every funded travel startup in the last three years built solo AI itinerary generators — there are 50+ of them now. All have single-digit retention. Because generating an itinerary was never the hard part. Getting 6 friends to decide was. Nobody built the group decision layer. No voting. No shortlists. That's the gap we fill.

After the trip, photos auto-tag to the timeline by GPS. One tap and the whole trip — map, photos, timeline — becomes a shareable web page. Viewers can clone the entire trip or cherry-pick spots. Every completed trip is organic distribution.

Business model: the organizer pays $39 a year. Group members are always free. This is the Splitwise model — the person who cares most converts at 3 to 5x the rate of casual users, and the free members are distribution, not lost revenue. Each organizer brings 4 to 8 friends into the app.

Why now? Google killed the only unified trip tool in 2019. Fifty AI apps chased solo planning. Nobody solved group coordination. And SwiftUI plus Supabase plus Cloudflare R2 means two engineers can ship the full stack on $140 a month.

We're not building another trip planning app. We're building the first group trip coordinator.

## Delivery Notes
- **Opener pace:** Slow and deliberate. "They make the WhatsApp group... write the Google Doc... set up Splitwise" — list each one with a beat between them. This builds the cumulative weight.
- **Emphasis points:** "They're the organizer. They're exhausted." — two short punches. "Getting 6 friends to decide" — this is the pivot sentence. "Group members are always free" — this surprises people.
- **Natural pauses:** After "We built TripSquad for that person." After "That's the gap we fill." After "organic distribution."
- **Energy peak:** "Nobody built the group decision layer." — this should land with conviction, not volume.
- **Close:** "The first group trip coordinator" — confident, direct, unhurried. Let it sit.

## Structure Breakdown
- **0:00 – 0:20:** The organizer's burden + what TripSquad does (2 sentences + example flow)
- **0:20 – 0:45:** The insight — solo AI saturation, group coordination gap
- **0:45 – 1:05:** Post-trip artifact + growth loop (photos, shareable page, cloning)
- **1:05 – 1:25:** Business model — organizer pays, group free, Splitwise model
- **1:25 – 1:45:** Why now — 3 converging forces
- **1:45 – 2:00:** Close — "first group trip coordinator"

## The Email Test
*What someone should be able to repeat after hearing this once:*

"TripSquad is an app for group trips. Instead of using WhatsApp and Google Docs, one person creates a trip, shares a link, and everyone adds places and votes on them. The organizer puts the winners on a timeline. After the trip, photos get tagged automatically and it turns into a shareable page. The organizer pays $39/year, everyone else is free — like Splitwise but for planning. They're going after group coordination because all the other travel apps just do solo AI planning."

## Red Flags
- **No traction to cite.** The 2-minute format relies entirely on insight and framing. If asked "do you have users?", the honest answer is "pre-product."
- **Team credentials omitted.** At 2 minutes, there's no room — but if this pitch opens a longer conversation, be ready for "who's building this?"
- **All market data is knowledge-based** (training data through early 2025). Verify independently before external use.

## Sources
- Google Trips shutdown: August 2019 [Data]
- AI travel app count (50+): industry observation 2023-2025 [Data/Estimate]
- Splitwise organizer conversion pattern (3-5x): inferred from Splitwise business model reporting [Estimate]
- Cloudflare R2, Supabase, SwiftUI maturity: 2023-2025 [Data]
`},{filename:"07-pitch-full.md",title:"Pitch Full",content:`# Full Pitch Narrative: TripSquad
*Skill: startup-pitch | Generated: 2026-05-20*

## Pitch DNA
- **Lead element:** Insight (pre-traction — the group coordination gap is the strongest signal)
- **2-sentence opener:** "TripSquad replaces the WhatsApp + Google Docs + Splitwise stack for group trips with one shareable link. Drop a pin on a city, share the link — everyone adds places, votes, and the organizer builds the timeline."
- **Unique insight:** Group trips fail at the decision layer, not the discovery layer. Every funded competitor chased solo AI planning — nobody built the group ballot.
- **Why now:** 7-year vacuum since Google killed Google Trips. 50+ AI apps chased solo planning. Group coordination is wide open. The tech stack is now buildable by 2 engineers at $140/month.
- **The ask:** Not raising — bootstrapping. This pitch is for internal clarity and narrative sharpening.
- **Data foundation:** Self-reported + knowledge-based research (web tools unavailable — verify data points independently before external use)

---

## Full Narrative (~10 minutes)

### Opening — What We Do

There's one person in every friend group who ends up planning the whole trip. They create the WhatsApp group. They write the Google Doc. They set up Splitwise. They research every restaurant, herd every opinion, and nobody thanks them.

We built TripSquad for that person.

TripSquad replaces the WhatsApp + Google Docs + Splitwise stack for group trips with one shareable link. The organizer drops a pin on a city, shares the link, and everyone lands in the same plan — browsing places, adding to a shared shortlist, and voting yes/no/maybe. The organizer promotes the winners to a day-by-day timeline. After the trip, photos auto-tag and the whole thing becomes a shareable interactive web page.

Here's what that looks like in practice: Alex is planning a Barcelona weekend with 5 friends. He opens TripSquad, drops a pin on Barcelona, and the app surfaces famous places — restaurants, landmarks, viewpoints. He adds a few to the shortlist and shares the link to the group chat. Within an hour, everyone's browsing and adding their own finds. By evening, the shortlist has 15 places and everyone has voted. Alex promotes the top-voted places to the timeline, drags them into days, and the app shows travel time between each stop. The group trip is planned. No Google Doc. No 200-message thread. No one person doing all the work.

> **Speaker notes:** Open with the "organizer's burden" — it's emotionally resonant and immediately identifies who the product is for. The Barcelona example makes it concrete. Deliver the 2-sentence description slowly and clearly. Pause after "no one person doing all the work."
> **Timing:** 0:00 – 1:30

---

### The Insight — What We Know That Others Don't

Group trips don't fail because people can't find places to go. Google Maps has every restaurant. TripAdvisor has every review. ChatGPT can generate an itinerary in 10 seconds.

Group trips fail because 6 people can't decide in a WhatsApp thread.

Every funded travel startup in the last three years built for the same moment: solo itinerary generation. "Tell the AI where you want to go, and it plans your trip." There are 50+ apps that do this now. And they all have the same problem: single-digit Day-30 retention. Because generating an itinerary was never the hard part. Deciding as a group was.

We looked at every funded competitor — Wanderlog, Layla, Mindtrip, Wonderplan — and noticed something: none of them built a group decision layer. No voting. No shortlists. No structured way for 6 people to say "yes to this, no to that" without a WhatsApp war.

That's the gap. Not better AI. Not better content. Better group decisions.

> **Speaker notes:** This is the "aha moment." Pause after "can't decide in a WhatsApp thread" — let it land. The competitive scan ("we looked at every funded competitor") adds credibility to the insight. Don't rush the gap statement.
> **Timing:** 1:30 – 3:00

---

### The Problem — The 5-App Stack

Show me your phone right before a group trip. You have:

1. **WhatsApp** for coordination — 200 messages, links buried, three people suggesting the same restaurant without knowing
2. **Google Docs** for the itinerary — one person maintains it, nobody else reads it, version confusion
3. **Splitwise** for expenses — disconnected from the plan, manual entry after every meal
4. **Google Maps** for finding places — can't share editable collections, no way for the group to vote
5. **Doodle** for date polling — yet another tool, results don't connect to anything

Five apps. One trip. None of them talk to each other.

And the organizer — the friend who "always ends up doing everything" — bears all of it. They compile the Google Doc. They chase opinions in the chat. They do the Splitwise math. And when the trip is over, they get "thanks for organizing!" while staring at a burned-out Sunday night.

This isn't a minor inconvenience. Group trips generate real social friction — resentment toward the organizer, budget fights that strain friendships, and trips that simply don't happen because the WhatsApp thread died at message 47.

> **Speaker notes:** The 5-app list is viscerally relatable. Count them on your fingers if presenting in person. The "organizer's burden" paragraph is emotional — land it, then move on. Don't dwell.
> **Timing:** 3:00 – 4:30

---

### The Solution — How TripSquad Works

The organizer opens TripSquad and creates a trip — "Barcelona Weekend." They drop a pin on Barcelona. Immediately, the app surfaces famous places from Google Places: top-rated restaurants, landmarks, beaches, viewpoints. Categorized: eat, see, do.

The organizer adds a few to the shortlist and taps "Invite." They get a link — one URL — that they drop into the existing WhatsApp group.

Everyone opens the link. They land in the trip. No signup wall, no app-install friction for viewing. They browse the famous places, search for their own ("best tapas near Gothic Quarter"), and add anything to the shared shortlist.

Now the shortlist has 15 places. Every place has an inline poll. Swipe or tap: yes, no, maybe. The results are visible to everyone — La Boqueria has 6 yes votes, the Picasso Museum has 3 yes and 2 maybe. For contested picks — Tom wants beach, Maria wants Gaudi architecture — the group sees the vote split and can discuss right there, in context, not buried in a separate chat thread.

The organizer reviews the results and promotes winners to a day-by-day timeline. The app auto-orders activities by geography — cluster nearby spots on the same day. Travel times appear between stops. The organizer locks Day 1 when it looks right. The group moves on.

After the trip, the app scans everyone's camera roll — filtering by the trip's dates and GPS coordinates. "We found 43 photos from your trip. Select which to share." Photos auto-tag to the timeline: 8 photos at La Boqueria, 5 at the beach, 12 at dinner spots. Duplicates are grouped. And with one tap, the whole trip — timeline, photos, map — becomes a public web page at tripsquad.app/trip/barcelona-weekend.

Anyone with the link can explore the interactive map: pins at each spot, color-coded by day, route lines between stops. Click a pin, see the photos. And if they want to do a similar trip? One button: "Use this trip as a template." Or cherry-pick individual spots into their own plan.

> **Speaker notes:** Walk through the flow step by step — this is the "demo in words" moment. Keep it concrete: names, numbers, screen descriptions. The audience should be able to picture every screen. The photo auto-tag and public trip page is the surprise — most people don't expect a planning app to produce a shareable artifact.
> **Timing:** 4:30 – 7:00

---

### Market Size — The Math

Let's size this from the bottom up.

There are roughly 1.4 billion international tourist trips per year globally. [Data — UNWTO] About 40-50% are group trips involving 3+ travelers. [Estimate — Booking.com, Phocuswright surveys] Roughly 30% of those have a clearly identifiable "organizer" — the person doing the coordination work. [Assumption]

That gives us 60-120 million potential organizer-users globally. Filter to English-speaking, iOS, age 22-40, takes 3+ trips per year: we're looking at 3-8 million realistic initial addressable organizers. [Assumption]

At $39/year for Organizer Pro and 5% conversion among active organizers:

| Scenario | Organizers in app | Paying (5%) | ARR |
|----------|------------------|-------------|-----|
| Sustainable (2 people) | 50,000 | 2,500 | $97,500 |
| Growth | 200,000 | 10,000 | $390,000 |
| Scale | 1,000,000 | 50,000 | $1,950,000 |

And each paying organizer brings 4-8 free group members into the app — users who see the product, experience the value, and become organizers for their own trips. At 50,000 paying organizers, that's 200,000-400,000 total active users, all acquired at near-zero CAC.

For benchmarks: Splitwise reached 50M+ registered users and was acquired by Silver Lake in 2023 at a reported $50M+ valuation, with estimated $15-25M ARR from a $39/year subscription targeting the same "organizer personality." [Data/Estimate] Flighty, a solo-developer iOS travel app at $49.99/year, generates an estimated $5-10M ARR. [Estimate]

> **Speaker notes:** Bottom-up math only. Walk through the filters transparently — investors respect the narrowing. The Splitwise and Flighty benchmarks ground the numbers in reality. Don't claim a TAM — show the beachhead math.
> **Timing:** 7:00 – 8:30

---

### Business Model — The Organizer Pays

One clear model: Organizer Pro at $39/year or $4.99/month.

The organizer pays. Group members are always free.

This is the Splitwise model applied to trip planning. Splitwise proved that the "organizer personality" — the person who cares enough to set up the tool — converts at 3-5x the rate of casual users. They also proved that the free members are distribution, not lost revenue. Every expense-sharing session exposed 3-6 new users to Splitwise. Every trip invitation exposes 4-8 new users to TripSquad.

**Free tier** (fully functional): Unlimited trips, up to 8 group members, shared shortlist with voting, basic timeline, 50 photos per trip, 1 public trip link.

**Pro tier** unlocks: Unlimited group size, unlimited photos, unlimited public trip links, date polling, expense splitting, AI timeline suggestions, export to Google Maps.

The paywall gates power-organizer features, not basic collaboration. Nobody's trip is blocked because they didn't pay.

Future revenue: printed photo books (Polarsteps validated this at EUR 36-150 per book — high margin, emotional peak timing) and booking affiliate links (3-8% per booking, only at volume).

> **Speaker notes:** "The organizer pays, group members are free" is the key line. The Splitwise analogy makes the model instantly credible. Don't linger on future revenue — keep the focus on the primary model.
> **Timing:** 8:30 – 9:15

---

### Why Now — The 7-Year Vacuum

Three things converged in 2025-2026:

**The vacuum.** Google killed Google Trips in August 2019. [Data] It was the only product that attempted unified trip planning with group sharing. Seven years later, no one has filled that space. An entire generation of travelers has never had a dedicated group trip tool — they assume WhatsApp + Google Docs is how it works.

**The distraction.** Between 2023 and 2025, 50+ AI trip planning apps launched — Layla, Roam Around, Tripnotes, Wonderplan, and dozens more. [Data] All of them chased solo itinerary generation. All of them have single-digit Day-30 retention. [Estimate] They saturated the part of trip planning that ChatGPT already does for free — and left the group coordination layer completely untouched.

**The stack.** SwiftUI reached UIKit parity. Supabase shipped Realtime v2 with multiplayer presence — purpose-built for collaborative apps. Cloudflare R2 offers photo storage at $0.015/GB with zero egress fees. Google Places API serves comprehensive place data at $17 per 1,000 requests. In 2020, building TripSquad would have required 4-6 engineers and $2K+/month in infrastructure. In 2026, two engineers can ship the whole thing on $140/month. [Data/Estimate]

The market gap, the competitive distraction, and the technology stack all converged at the same time. The window is approximately 18-24 months before a well-funded team or an incumbent notices the same gap.

> **Speaker notes:** Three beats: vacuum, distraction, stack. Each is one sentence of setup + one fact. The "window is 18-24 months" creates urgency without being alarmist. Deliver this section with energy — it's the momentum closer.
> **Timing:** 9:15 – 10:00

---

### Team

Two experienced agentic software engineers — full-stack, mobile and backend. Scalability is not a constraint.

The team is deliberately small. TripSquad's scope is deliberately narrow: group coordination, voting, timeline, photos. Not an AI platform. Not a super-app. A focused tool. Two engineers can ship the core loop — pin, shortlist, voting, timeline, invite link — in 4 weeks.

The first hire after validation: a designer. The product is fundamentally a list (shortlist), a vote (yes/no/maybe), and a timeline (vertical scroll). SwiftUI provides strong native defaults. Ship functional, polish iteratively.

> **Speaker notes:** Acknowledge the team gap (no designer) before anyone asks. "Deliberately small" reframes it as focus, not limitation.
> **Timing:** 10:00 – 10:30

---

### Close

Every travel app helps you find places. None of them help your group pick one.

That's the gap. That's what TripSquad fills. And every completed trip — timeline, photos, map — becomes a shareable artifact that drives the next user.

The plan: ship Phase 1 in 4 weeks, get 5 real friend groups using the app, validate the growth loop by week 8, and launch on the App Store by month 4 with clear kill criteria at every checkpoint.

We're not building another trip planning app. We're building the first group trip coordinator.

> **Speaker notes:** End on "group trip coordinator" — it's the positioning line. Don't rush. Let the last sentence hang. This is the line they should remember.
> **Timing:** 10:30 – 10:45

---

## Transition Sentences

- Opening → Insight: "So what did we discover when we looked at this problem?"
- Insight → Problem: "Here's what that gap looks like in practice — on your phone, right now."
- Problem → Solution: "That's the mess. Here's how TripSquad replaces it."
- Solution → Market: "Who is this for, and how big is the opportunity?"
- Market → Business Model: "How do we make money? One clear model."
- Business Model → Why Now: "Why hasn't someone done this already? Three reasons."
- Why Now → Team: "And who's building this?"
- Team → Close: "So where does this all land?"

---

## Red Flags
- **No traction.** Pre-product, idea stage. The entire pitch rests on insight and timing, not validation. This is honest — but it means every claim about user behavior (organizer conversion rates, group invite dynamics) is assumption, not data.
- **Team credentials are thin for a pitch.** "Experienced agentic software engineers" lacks the specificity investors expect. No named accomplishments, companies, or shipped products. For internal clarity this is fine; for external pitching, this section needs work.
- **Web research unavailable.** All market data is from training knowledge (through early 2025). Figures should be independently verified before any external use.

## Yellow Flags
- **WhatsApp-is-good-enough risk** is the single biggest objection. The pitch addresses it, but the answer ("we replace the decision layer, not the messaging") has not been validated with users.
- **Photo storage economics** are estimated, not proven at scale. R2 pricing is favorable, but real-world compression ratios and upload volumes are unknown.
- **Seasonal usage** and low trip frequency (3-6x/year) creates engagement gaps that the annual subscription model may not fully smooth.

## Sources
- UNWTO World Tourism Barometer (international arrivals, spending) [Data — verify with 2024/2025 reports]
- Booking.com "Travel Predictions" report (group travel trends) [Data — verify year]
- Google/Phocuswright "Traveler's Road to Decision" (multi-app usage) [Data — verify year]
- Google Trips shutdown (August 2019) [Data]
- Splitwise acquisition by Silver Lake (late 2023) [Data]
- Wanderlog funding and pricing [Data — verify current status on Crunchbase]
- Strava user statistics [Data — verify with 2024/2025 figures]
- Flighty revenue estimates [Estimate — based on App Store rankings and interviews]
- Cloudflare R2, Supabase, Google Places API pricing [Data — verify current pricing pages]
`},{filename:"08-pitch-appendix.md",title:"Pitch Appendix",content:`# Pitch Appendix: TripSquad
*Skill: startup-pitch | Generated: 2026-05-20*

## Top 10 Likely Questions (with Prepared Answers)

### Q1: "How is this different from Wanderlog?"
**Short answer:** Wanderlog is a shared document for trips — collaborative editing, like Notion for travel. TripSquad is a shared ballot. We have voting, shortlists, and structured group decisions. Wanderlog also charges every group member ($35/year per collaborator). We charge only the organizer — everyone else is free.
**Detailed answer:** Wanderlog's group collaboration is bolted onto a solo planning product. Every collaborator needs a paid account for group features, creating friction for casual groups. TripSquad is group-first: the shortlist, voting, and organizer-promotes-to-timeline flow is the core product, not an add-on. Additionally, Wanderlog has zero post-trip value — no photo sync, no shareable artifact, no cloning. TripSquad turns completed trips into interactive web pages that drive organic distribution.
**Source:** Wanderlog pricing page [Data — verify current pricing model]

### Q2: "Google will just build this into Maps."
**Short answer:** Google killed Google Trips in 2019 because unified trip planning conflicts with their ad-per-click revenue model. And Google has never shipped a social coordination product that survived — Google+, Spaces, Allo, all killed. Group voting on restaurant picks is a social feature, not a navigation feature.
**Detailed answer:** Maps monetizes by sending users to bookable services. A group planning layer would keep users inside Maps longer without generating ad clicks — the incentive structure is wrong. The social coordination features TripSquad needs (voting, shortlists, expense splitting) are fundamentally different from navigation. Google's track record with social products is 0-for-5. The risk is real but structural incentives work in TripSquad's favor.
**Source:** Google Trips shutdown August 2019 [Data]; Google social product history [Data]

### Q3: "Why would people switch from WhatsApp? It's good enough."
**Short answer:** TripSquad doesn't replace WhatsApp for messaging. It replaces the decision-making that happens poorly in WhatsApp. The invite link is shared via WhatsApp. The two products coexist — one for chatting, one for deciding.
**Detailed answer:** The "good enough" objection is the biggest risk. Our bet: if the invite link is as easy as sharing a WhatsApp link, and the voting UI is faster than typing opinions, the organizer switches the decision layer. Splitwise proved this pattern — nobody stopped using WhatsApp for chatting when Splitwise launched, but the "who owes what" conversation moved to a purpose-built tool because it was dramatically better.
**Source:** Splitwise growth pattern [Estimate]; V1 viability report analysis [Opinion]

### Q4: "Consumer apps have 2-4% conversion. How do you make money?"
**Short answer:** We don't target all users — we target organizers. The "organizer personality" converts at 3-5x the rate of casual users, per the Splitwise pattern. Group members are free distribution, not revenue targets. One $39/year organizer brings 4-8 free users who see the product.
**Detailed answer:** Standard consumer conversion math (2-4% of all users) doesn't apply because TripSquad's paywall targets a self-selected high-intent cohort. Splitwise reportedly achieves 3-5% conversion among active users, with the organizer type converting at significantly higher rates. At 50,000 organizers with 5% conversion = 2,500 paying users = ~$97,500 ARR. That's sustainable for a 2-person team. Each paying organizer generates 4-8 free users who may become organizers for their own trips — built-in viral coefficient.
**Source:** Splitwise conversion estimates [Estimate]; revenue scenarios in research [Assumption]

### Q5: "This is a vitamin, not a painkiller."
**Short answer:** For solo travelers, yes. For the organizer of a group trip — the person who creates the WhatsApp group, writes the Google Doc, sets up Splitwise, and gets no thanks — this is a painkiller. We narrowed to the one user for whom the pain is acute.
**Detailed answer:** The V1 viability report scored the original AI-first vision 38/100, with "vitamin, not painkiller" as the top critique. V2 directly addresses this by narrowing from "all travelers" to "the group trip organizer." Group coordination has real social costs: resentment, budget fights, trips that never happen because the thread died. The organizer's pain is documented across Reddit, travel forums, and app reviews. Unlike solo trip planning (which people tolerate), group trip chaos is something the organizer actively wants to solve.
**Source:** V1 viability report [Data]; V2 idea document analysis [Opinion]

### Q6: "Travel is seasonal. What happens between trips?"
**Short answer:** Three things: (1) the organizer plans 3-6 trips per year including weekends, creating 12-24 weeks of active engagement; (2) browsing and cloning public trips provides passive engagement between trips; (3) the annual subscription model ($39/year) smooths revenue across seasons.
**Detailed answer:** Travel apps will never have social-media-level daily engagement. The model is built for episodic, high-intent usage. Trip planning for a group typically starts 4-8 weeks before departure. The post-trip phase (photo sharing, artifact creation) extends engagement 1-2 weeks after return. For an organizer doing 4 trips/year, that's 20-40 weeks of active engagement — 40-75% of the year. The public trip page and clone/cherry-pick features create a browse-and-discover layer between trips.
**Source:** Travel frequency estimates [Assumption]; engagement model [Assumption]

### Q7: "Two engineers, no designer — how do you build a UX-heavy product?"
**Short answer:** The core product is three UI patterns: a list (shortlist), a vote (yes/no/maybe buttons), and a timeline (vertical scroll). SwiftUI provides strong native defaults for all three. Ship functional, hire a designer after validation.
**Detailed answer:** TripSquad's UX is deliberately simpler than it sounds. The shortlist is a scrollable card list with vote buttons. The timeline is a grouped vertical list with drag-and-drop. The map is MapKit with pins. None of these require custom visual design — SwiftUI's native components handle them. The first non-engineering hire after product-market fit validation will be a designer for polish and delight. But "beautiful" is not required for "useful" — Splitwise's early UI was functional, not pretty, and it reached 50M users.
**Source:** SwiftUI capability assessment [Opinion]; Splitwise early design [Opinion]

### Q8: "50+ AI travel apps failed. Why will you succeed?"
**Short answer:** We're not an AI travel app. We're a group decision tool for trips. The 50+ apps that failed all solved solo itinerary generation — the part ChatGPT already does for free. We solve group coordination, which nobody addressed.
**Detailed answer:** The AI travel app graveyard validates our thesis: solo itinerary generation is not a defensible product category. It's a feature of ChatGPT. The apps that failed competed on content quality (which AI commoditized) and had no group features, no post-trip value, and no retention mechanic. TripSquad competes on a completely different axis — social coordination — where ChatGPT and AI wrappers are structurally unable to compete.
**Source:** AI travel app retention data [Estimate]; competitive analysis [Opinion]

### Q9: "What's your growth strategy without paid acquisition?"
**Short answer:** Two organic loops. Loop 1: every trip starts with an invite link sent to 4-8 friends — built-in virality. Loop 2: every completed trip can become a public web page — SEO + social sharing drives discovery. The Strava model: every completed activity is organic distribution.
**Detailed answer:** The invite loop is the Splitwise pattern: one organizer brings in 4-8 group members per trip. If 20% of those members become organizers for their own trips, the viral coefficient is >1 without any paid acquisition. The sharing loop is the Strava pattern: completed trips become interactive web pages that are SEO-indexable ("5-day Barcelona itinerary with photos") and shareable on social media. The creator channel (travel YouTubers linking trip pages in video descriptions) is a future accelerant, not a launch dependency.
**Source:** Strava growth model [Data]; Splitwise invite dynamics [Estimate]; growth model [Assumption]

### Q10: "What are your kill criteria? When do you stop?"
**Short answer:** Three checkpoints with hard numbers. Week 4: 5 real friend groups using the app. Week 8: >15% of completed trips shared publicly. Month 4: >5% of organizers converted to Pro. If any checkpoint fails, we diagnose and either pivot or stop.
**Detailed answer:** Week 4 validates the invite mechanic (will organizers actually share the link?). Week 8 validates the Strava growth loop (will people share their completed trips?). Month 4 validates monetization (will organizers pay?). These are binary — not "we need more time." Each checkpoint tests a different thesis: distribution, content loop, and revenue. If all three pass, we have a business. If one fails, we know exactly which thesis broke and can decide whether to pivot or kill.
**Source:** V2 idea document, build phases [Data]

---

## Objection Handling

### "Just another trip planning app"
**Why they say this:** App fatigue. 50+ travel apps launched recently. "Trip planning" triggers pattern matching to failed products.
**Response:** "We're not a trip planning app. We're a group decision app for trips. The shortlist and voting are the product. The places data comes from Google Places API — we don't compete on content. We compete on coordination. Different category, different economics."
**Supporting data:** Zero funded competitors have voting/shortlists as core product. [Opinion]

### "This needs network effects and you have none"
**Why they say this:** Consumer social products typically need critical mass.
**Response:** "We don't need network effects — we need invite links to work. Each trip is a self-contained group of 3-10 people. The product is valuable for the first group that uses it, not the millionth. The growth model is viral (invite links + shared trips), not network-effect-dependent. You don't need everyone to be on TripSquad — you just need the organizer to share one link."
**Supporting data:** Splitwise grew via invite links without network effects. [Data]

### "Why iOS only?"
**Why they say this:** Excludes Android users (majority of global market).
**Response:** "iOS first for two reasons: (1) higher willingness to pay for subscription apps — App Store users convert at 2-3x Google Play rates for consumer subscriptions; (2) SwiftUI lets two engineers ship faster than any cross-platform framework. Android is Phase 4 if iOS validates."
**Supporting data:** App Store vs. Google Play conversion rates [Data/Estimate]

---

## Known Weaknesses

1. **No traction.** Everything about user behavior is assumption, not data. Organizer conversion rates, invite dynamics, sharing rates — all untested. The kill criteria at weeks 4, 8, and month 4 are designed to validate these quickly.

2. **Team credentials are generic.** "Experienced agentic software engineers" doesn't tell anyone what you've built or shipped. Before any external pitch, this needs specific accomplishments: apps shipped, scale handled, technical decisions made.

3. **The "WhatsApp is good enough" risk is real.** The pitch reframes it well ("we replace decisions, not messaging"), but this is the #1 existential risk. If organizers don't share the link — if they just keep using the WhatsApp thread — the product has no distribution.

4. **No designer.** Trip planning is visual and UX-heavy. SwiftUI defaults can carry v1, but "functional" is not "delightful." Early users may churn on UX before experiencing the coordination value.

5. **Photo storage is a cost center with no revenue.** Free tier includes 50 photos/trip. Until photo books launch (Phase 4), every photo is pure cost. R2 pricing is favorable but storage grows linearly with users.

6. **Annual subscription requires trust.** $39/year means the organizer needs to believe they'll use TripSquad for multiple trips. If the first trip experience isn't strong, they won't convert. Trial-to-paid conversion funnel is critical and undesigned.

---

## Competitive Detail

| Competitor | Founded | Funding | Users | Revenue Model | Group Features | Post-Trip |
|-----------|---------|---------|-------|--------------|----------------|-----------|
| **Wanderlog** | 2019 | ~$3.5M total | 2-5M est. | $35/yr per user | Collaborative editing (paid per-user) | None |
| **Layla AI** | 2023 | ~$12M total | Unknown | Freemium + affiliate | None | None |
| **Mindtrip** | 2023 | ~$7M | Unknown | TBD | Limited | None |
| **TripIt** | 2006 | ~$20M (acq. $120M) | 20M+ | $49/yr (Pro) | None | None |
| **Polarsteps** | 2015 | EUR 10M | 7M+ downloads | Photo books (EUR 36-150) | None | Tracking + books |
| **Splitwise** | 2011 | ~$9.5M (acq. >$50M) | 50M+ | $39/yr (Pro) | Expense splitting only | None |

**TripSquad's unique position:** Only product that combines group voting/shortlists (decision layer) + day-by-day timeline + photo sync + shareable artifact + organizer-pays model. No competitor occupies this intersection.

---

## Financial Backup

Financial projections not yet validated. Revenue scenarios from bottom-up market sizing:

- **Default alive threshold:** ~2,000 paying organizers = $78K ARR. Covers infrastructure (~$1,700/year) with significant margin for two bootstrapped engineers.
- **Sustainable:** 2,500 paying organizers = $97,500 ARR.
- **Growth:** 10,000 paying organizers = $390,000 ARR.
- **Infrastructure cost at 50K trips/month:** ~$140/month (Google Places ~$85, Supabase ~$25, photo storage ~$20, Apple Developer $99/year). [Estimate]

Consider running startup-design for detailed financial modeling if moving to external fundraising.

---

## Red Flags
- All traction claims are projections, not data. The pitch is built on insight, not evidence.
- Team section needs specific accomplishments before any external presentation.
- Market sizing assumptions (group trip percentage, organizer identification rate) are estimates — survey data would strengthen them.

## Yellow Flags
- Wanderlog's current pricing model should be verified — if they've shifted to organizer-pays, the competitive gap narrows.
- Splitwise acquisition terms are reported but not officially confirmed at all details.
- AI travel app retention figures are estimates from industry reporting, not primary data.

## Data Gaps & Limitations
- **No primary user research.** Pain points are inferred from personal experience and secondary sources (forums, reviews), not structured interviews.
- **No competitive product testing.** Wanderlog, Layla, and Mindtrip assessments are based on public information, not hands-on evaluation.
- **Web research unavailable.** All data points are from training knowledge (through early 2025). Figures from 2025-2026 are not verified.
- **Splitwise conversion rates (3-5x for organizers)** are industry estimates, not published Splitwise data.
- **Photo storage cost projections** assume average photo size of 500KB after compression — real-world sizes may vary significantly.

## Sources
- UNWTO World Tourism Barometer — international arrivals and spending [Data]
- Booking.com annual travel prediction reports — group travel trends [Data]
- Google/Phocuswright traveler behavior studies — multi-app usage [Data]
- Google Trips shutdown — August 2019 [Data]
- Splitwise acquisition by Silver Lake — late 2023 [Data]
- Wanderlog funding and pricing — Crunchbase, product pages [Data — verify current]
- Strava growth and revenue — company statements [Data]
- Cloudflare R2, Supabase, Google Places API — pricing documentation [Data]
- Flighty revenue — App Store rankings and public interviews [Estimate]
- Polarsteps — funding and revenue model [Data/Estimate]
- Skift Research — travel technology trends [Data]
`},{filename:"09-intake.md",title:"Intake",content:`# Intake: TripSquad

## 2-Sentence Opener

TripSquad replaces the WhatsApp group chat + Google Doc + Splitwise stack for planning group trips — one person creates a trip, drops a pin, and shares a link. Everyone opens the link and collaborates on a single living plan with voting, a timeline, photo sync, and a shareable trip artifact at the end.

## Problem

Every group trip is planned through the same broken stack:
- WhatsApp/iMessage for coordination — suggestions buried in 47 messages, no structure, no decisions
- Google Docs/Notes for the itinerary — one person maintains it, nobody else reads it
- Splitwise for expenses — disconnected from the trip plan, manual entry
- Google Maps for finding places — can't share editable collections with voting
- Doodle/When2meet for date polling — yet another tool that doesn't connect to the plan

The organizer who "always ends up doing everything" bears all the friction. Group coordination has real social costs — resentment, budget fights, trips that never happen because the thread died.

## Solution

An iOS-first group trip app:
- Drop a pin on a city → get a Famous Places feed (Google Places API)
- Share one link → everyone joins and adds places to a shared shortlist
- Vote on every place (yes/no/maybe) → organizer promotes winners to the timeline
- Day-by-day timeline with travel times, auto-ordered by geography
- Photos auto-tag to timeline by GPS/timestamp during and after the trip
- One tap to share the completed trip as an interactive web page (map + photos + timeline)
- Viewers can clone the entire trip or cherry-pick individual spots

## Unique Insight

Group trips don't fail because people can't find places to go. They fail because 6 people can't decide in a WhatsApp thread. Every funded competitor focused on solo planning or AI-generated itineraries. The white space is the group decision layer — structured voting that replaces chat chaos. The tool is useful on trip #1 (no AI learning curve required), and the organizer-pays model (Splitwise pattern) means group members are free distribution, not revenue targets.

## Traction

Pre-product, idea stage. Validated through:
- Personal experience planning real group trips and documenting every pain point
- V1 viability analysis (scored 38/100 for original AI-first vision — V2 directly addresses every critique)
- The pivot from AI-first to group-coordination-first is itself a validation signal

## Business Model

Organizer Pro — $39/year or $4.99/month. Free tier: unlimited trips, 8 group members, voting, basic timeline, 50 photos/trip, 1 public link. Pro: unlimited group size, unlimited photos, date polling, expense splitting, AI suggestions, export to maps.

Future: printed photo books (Polarsteps model, high margin), booking affiliate links.

## Team

Two experienced agentic software engineers. Strong mobile and backend skills. Scalability is not a constraint.

## Market Size

To be estimated via bottom-up math in research.

## Target Audience for Pitch

Internal clarity — crystallizing the vision and stress-testing the narrative. Not actively raising.

## Requested Formats

- Full pitch narrative (~10 minutes)
- 2-minute verbal pitch (~300 words)
- Q&A appendix
- Pitch scorecard
`}]}],sx=`
html, body { margin: 0; padding: 0; }
[data-theme="dark"] {
  --bg-page: #0f172a;
  --bg-card: #1e293b;
  --bg-subtle: #1e293b;
  --bg-hover: #334155;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --text-faint: #64748b;
  --border: #334155;
  --border-light: #1e293b;
  --border-muted: #475569;
  --shadow-color: rgba(0,0,0,0.3);
  --callout-red-bg: #450a0a;
  --callout-red-text: #fca5a5;
  --callout-red-border: #991b1b;
  --callout-amber-bg: #451a03;
  --callout-amber-text: #fbbf24;
  --callout-amber-border: #92400e;
  --callout-blue-bg: #172554;
  --callout-blue-text: #93c5fd;
  --callout-blue-border: #1e40af;
  --callout-purple-bg: #2e1065;
  --callout-purple-text: #c4b5fd;
  --callout-green-bg: #064e3b;
  --callout-green-text: #6ee7b7;
  --code-bg: #0c1322;
  --code-text: #e2e8f0;
  --code-inline-bg: #334155;
  --code-inline-text: #93c5fd;
  --toggle-bg: rgba(148, 163, 184, 0.2);
  --toggle-border: rgba(148, 163, 184, 0.3);
}
[data-theme="light"] {
  --bg-page: #f8f7f4;
  --bg-card: #ffffff;
  --bg-subtle: #f9fafb;
  --bg-hover: #f3f4f6;
  --text-primary: #111827;
  --text-secondary: #374151;
  --text-muted: #6b7280;
  --text-faint: #9ca3af;
  --border: #e5e7eb;
  --border-light: #f3f4f6;
  --border-muted: #d1d5db;
  --shadow-color: rgba(0,0,0,0.06);
  --callout-red-bg: #fee2e2;
  --callout-red-text: #991b1b;
  --callout-red-border: #fca5a5;
  --callout-amber-bg: #fef3c7;
  --callout-amber-text: #92400e;
  --callout-amber-border: #fcd34d;
  --callout-blue-bg: #dbeafe;
  --callout-blue-text: #1e40af;
  --callout-blue-border: #93c5fd;
  --callout-purple-bg: #ede9fe;
  --callout-purple-text: #5b21b6;
  --callout-green-bg: #d1fae5;
  --callout-green-text: #065f46;
  --code-bg: #1e293b;
  --code-text: #e2e8f0;
  --code-inline-bg: #f3f4f6;
  --code-inline-text: #1e40af;
  --toggle-bg: rgba(15, 23, 42, 0.9);
  --toggle-border: rgba(255, 255, 255, 0.1);
}
`;function lx(){const[e,t]=Ut.useState(!1),[n,r]=Ut.useState(null),[i,o]=Ut.useState(()=>{try{return localStorage.getItem("theme")||"dark"}catch{return"dark"}}),a=()=>{const u=i==="dark"?"light":"dark";o(u);try{localStorage.setItem("theme",u)}catch{}},s=(u,p)=>{const c=ap.find(h=>h.id===u),d=c==null?void 0:c.docs.find(h=>h.filename===p);d&&(r({sectionId:u,sectionName:c.name,...d}),t(!1),window.scrollTo(0,0))},l=()=>{r(null),t(!1),window.scrollTo(0,0)};return k.jsxs("div",{"data-theme":i,style:{position:"relative",minHeight:"100vh"},children:[k.jsx("style",{children:sx}),k.jsx("button",{onClick:()=>t(!e),"aria-label":e?"Close sidebar":"Open sidebar",style:{position:"fixed",top:"14px",left:"14px",zIndex:100,width:"34px",height:"34px",borderRadius:"8px",background:"var(--toggle-bg)",color:"#e2e8f0",border:"1px solid var(--toggle-border)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",backdropFilter:"blur(8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontFamily:"system-ui, sans-serif",lineHeight:1,padding:0},children:e?"✕":"☰"}),e&&k.jsxs(k.Fragment,{children:[k.jsx("div",{onClick:()=>t(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.25)",zIndex:50}}),k.jsx(ax,{manifest:ap,activeDoc:n,onDocSelect:s,onProposalSelect:l,theme:i,onThemeToggle:a})]}),n?k.jsx(ox,{doc:n}):k.jsx(py,{})]})}wh(document.getElementById("root")).render(k.jsx(Qf.StrictMode,{children:k.jsx(lx,{})}));
