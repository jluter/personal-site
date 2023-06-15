(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Bg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $h={exports:{}},qa={},Yh={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),Vg=Symbol.for("react.portal"),Gg=Symbol.for("react.fragment"),Hg=Symbol.for("react.strict_mode"),Wg=Symbol.for("react.profiler"),jg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),qg=Symbol.for("react.forward_ref"),$g=Symbol.for("react.suspense"),Yg=Symbol.for("react.memo"),Kg=Symbol.for("react.lazy"),Ef=Symbol.iterator;function Zg(n){return n===null||typeof n!="object"?null:(n=Ef&&n[Ef]||n["@@iterator"],typeof n=="function"?n:null)}var Kh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zh=Object.assign,Qh={};function hs(n,e,t){this.props=n,this.context=e,this.refs=Qh,this.updater=t||Kh}hs.prototype.isReactComponent={};hs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};hs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Jh(){}Jh.prototype=hs.prototype;function Mc(n,e,t){this.props=n,this.context=e,this.refs=Qh,this.updater=t||Kh}var wc=Mc.prototype=new Jh;wc.constructor=Mc;Zh(wc,hs.prototype);wc.isPureReactComponent=!0;var Tf=Array.isArray,ep=Object.prototype.hasOwnProperty,Ec={current:null},tp={key:!0,ref:!0,__self:!0,__source:!0};function np(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ep.call(e,i)&&!tp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ho,type:n,key:s,ref:o,props:r,_owner:Ec.current}}function Qg(n,e){return{$$typeof:ho,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Tc(n){return typeof n=="object"&&n!==null&&n.$$typeof===ho}function Jg(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Cf=/\/+/g;function _l(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Jg(""+n.key):e.toString(36)}function la(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ho:case Vg:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+_l(o,0):i,Tf(r)?(t="",n!=null&&(t=n.replace(Cf,"$&/")+"/"),la(r,e,t,"",function(u){return u})):r!=null&&(Tc(r)&&(r=Qg(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+_l(s,a);o+=la(s,e,t,l,r)}else if(l=Zg(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+_l(s,a++),o+=la(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wo(n,e,t){if(n==null)return n;var i=[],r=0;return la(n,i,"","",function(s){return e.call(t,s,r++)}),i}function e0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Bt={current:null},ua={transition:null},t0={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:ua,ReactCurrentOwner:Ec};Ie.Children={map:wo,forEach:function(n,e,t){wo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return wo(n,function(){e++}),e},toArray:function(n){return wo(n,function(e){return e})||[]},only:function(n){if(!Tc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ie.Component=hs;Ie.Fragment=Gg;Ie.Profiler=Wg;Ie.PureComponent=Mc;Ie.StrictMode=Hg;Ie.Suspense=$g;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;Ie.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Zh({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ec.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ep.call(e,l)&&!tp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ho,type:n.type,key:r,ref:s,props:i,_owner:o}};Ie.createContext=function(n){return n={$$typeof:Xg,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:jg,_context:n},n.Consumer=n};Ie.createElement=np;Ie.createFactory=function(n){var e=np.bind(null,n);return e.type=n,e};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(n){return{$$typeof:qg,render:n}};Ie.isValidElement=Tc;Ie.lazy=function(n){return{$$typeof:Kg,_payload:{_status:-1,_result:n},_init:e0}};Ie.memo=function(n,e){return{$$typeof:Yg,type:n,compare:e===void 0?null:e}};Ie.startTransition=function(n){var e=ua.transition;ua.transition={};try{n()}finally{ua.transition=e}};Ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ie.useCallback=function(n,e){return Bt.current.useCallback(n,e)};Ie.useContext=function(n){return Bt.current.useContext(n)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(n){return Bt.current.useDeferredValue(n)};Ie.useEffect=function(n,e){return Bt.current.useEffect(n,e)};Ie.useId=function(){return Bt.current.useId()};Ie.useImperativeHandle=function(n,e,t){return Bt.current.useImperativeHandle(n,e,t)};Ie.useInsertionEffect=function(n,e){return Bt.current.useInsertionEffect(n,e)};Ie.useLayoutEffect=function(n,e){return Bt.current.useLayoutEffect(n,e)};Ie.useMemo=function(n,e){return Bt.current.useMemo(n,e)};Ie.useReducer=function(n,e,t){return Bt.current.useReducer(n,e,t)};Ie.useRef=function(n){return Bt.current.useRef(n)};Ie.useState=function(n){return Bt.current.useState(n)};Ie.useSyncExternalStore=function(n,e,t){return Bt.current.useSyncExternalStore(n,e,t)};Ie.useTransition=function(){return Bt.current.useTransition()};Ie.version="18.2.0";Yh.exports=Ie;var Ft=Yh.exports;const Mi=Bg(Ft);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0=Ft,i0=Symbol.for("react.element"),r0=Symbol.for("react.fragment"),s0=Object.prototype.hasOwnProperty,o0=n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a0={key:!0,ref:!0,__self:!0,__source:!0};function ip(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)s0.call(e,i)&&!a0.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:i0,type:n,key:s,ref:o,props:r,_owner:o0.current}}qa.Fragment=r0;qa.jsx=ip;qa.jsxs=ip;$h.exports=qa;var xe=$h.exports,yu={},rp={exports:{}},ln={},sp={exports:{}},op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(R,B){var F=R.length;R.push(B);e:for(;0<F;){var ue=F-1>>>1,K=R[ue];if(0<r(K,B))R[ue]=B,R[F]=K,F=ue;else break e}}function t(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var B=R[0],F=R.pop();if(F!==B){R[0]=F;e:for(var ue=0,K=R.length,O=K>>>1;ue<O;){var q=2*(ue+1)-1,re=R[q],oe=q+1,k=R[oe];if(0>r(re,F))oe<K&&0>r(k,re)?(R[ue]=k,R[oe]=F,ue=oe):(R[ue]=re,R[q]=F,ue=q);else if(oe<K&&0>r(k,F))R[ue]=k,R[oe]=F,ue=oe;else break e}}return B}function r(R,B){var F=R.sortIndex-B.sortIndex;return F!==0?F:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var B=t(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=R)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=t(u)}}function x(R){if(y=!1,v(R),!_)if(t(l)!==null)_=!0,te(w);else{var B=t(u);B!==null&&Z(x,B.startTime-R)}}function w(R,B){_=!1,y&&(y=!1,c(P),P=-1),p=!0;var F=d;try{for(v(B),h=t(l);h!==null&&(!(h.expirationTime>B)||R&&!Y());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,d=h.priorityLevel;var K=ue(h.expirationTime<=B);B=n.unstable_now(),typeof K=="function"?h.callback=K:h===t(l)&&i(l),v(B)}else i(l);h=t(l)}if(h!==null)var O=!0;else{var q=t(u);q!==null&&Z(x,q.startTime-B),O=!1}return O}finally{h=null,d=F,p=!1}}var A=!1,b=null,P=-1,M=5,T=-1;function Y(){return!(n.unstable_now()-T<M)}function $(){if(b!==null){var R=n.unstable_now();T=R;var B=!0;try{B=b(!0,R)}finally{B?I():(A=!1,b=null)}}else A=!1}var I;if(typeof g=="function")I=function(){g($)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,W=z.port2;z.port1.onmessage=$,I=function(){W.postMessage(null)}}else I=function(){m($,0)};function te(R){b=R,A||(A=!0,I())}function Z(R,B){P=m(function(){R(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,te(w))},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(R){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var F=d;d=B;try{return R()}finally{d=F}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=d;d=R;try{return B()}finally{d=F}},n.unstable_scheduleCallback=function(R,B,F){var ue=n.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ue+F:ue):F=ue,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=F+K,R={id:f++,callback:B,priorityLevel:R,startTime:F,expirationTime:K,sortIndex:-1},F>ue?(R.sortIndex=F,e(u,R),t(l)===null&&R===t(u)&&(y?(c(P),P=-1):y=!0,Z(x,F-ue))):(R.sortIndex=K,e(l,R),_||p||(_=!0,te(w))),R},n.unstable_shouldYield=Y,n.unstable_wrapCallback=function(R){var B=d;return function(){var F=d;d=B;try{return R.apply(this,arguments)}finally{d=F}}}})(op);sp.exports=op;var l0=sp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=Ft,an=l0;function J(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lp=new Set,Xs={};function pr(n,e){ns(n,e),ns(n+"Capture",e)}function ns(n,e){for(Xs[n]=e,n=0;n<e.length;n++)lp.add(e[n])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=Object.prototype.hasOwnProperty,u0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Af={},bf={};function c0(n){return Su.call(bf,n)?!0:Su.call(Af,n)?!1:u0.test(n)?bf[n]=!0:(Af[n]=!0,!1)}function f0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function d0(n,e,t,i){if(e===null||typeof e>"u"||f0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Tt[n]=new Vt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Tt[e]=new Vt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Tt[n]=new Vt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Tt[n]=new Vt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Tt[n]=new Vt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Tt[n]=new Vt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Tt[n]=new Vt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Tt[n]=new Vt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Tt[n]=new Vt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Cc=/[\-:]([a-z])/g;function Ac(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Cc,Ac);Tt[e]=new Vt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Cc,Ac);Tt[e]=new Vt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Cc,Ac);Tt[e]=new Vt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Tt[n]=new Vt(n,1,!1,n.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Tt[n]=new Vt(n,1,!1,n.toLowerCase(),null,!0,!0)});function bc(n,e,t,i){var r=Tt.hasOwnProperty(e)?Tt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d0(e,t,r,i)&&(t=null),i||r===null?c0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ui=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),Pc=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),up=Symbol.for("react.provider"),cp=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),Rc=Symbol.for("react.memo"),gi=Symbol.for("react.lazy"),fp=Symbol.for("react.offscreen"),Pf=Symbol.iterator;function xs(n){return n===null||typeof n!="object"?null:(n=Pf&&n[Pf]||n["@@iterator"],typeof n=="function"?n:null)}var et=Object.assign,xl;function Rs(n){if(xl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);xl=e&&e[1]||""}return`
`+xl+n}var yl=!1;function Sl(n,e){if(!n||yl)return"";yl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Rs(n):""}function h0(n){switch(n.tag){case 5:return Rs(n.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return n=Sl(n.type,!1),n;case 11:return n=Sl(n.type.render,!1),n;case 1:return n=Sl(n.type,!0),n;default:return""}}function Tu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Nr:return"Fragment";case Ur:return"Portal";case Mu:return"Profiler";case Pc:return"StrictMode";case wu:return"Suspense";case Eu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case cp:return(n.displayName||"Context")+".Consumer";case up:return(n._context.displayName||"Context")+".Provider";case Lc:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Rc:return e=n.displayName||null,e!==null?e:Tu(n.type)||"Memo";case gi:e=n._payload,n=n._init;try{return Tu(n(e))}catch{}}return null}function p0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(e);case 8:return e===Pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function dp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m0(n){var e=dp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function To(n){n._valueTracker||(n._valueTracker=m0(n))}function hp(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=dp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Sa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Cu(n,e){var t=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Lf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ii(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pp(n,e){e=e.checked,e!=null&&bc(n,"checked",e,!1)}function Au(n,e){pp(n,e);var t=Ii(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?bu(n,e.type,t):e.hasOwnProperty("defaultValue")&&bu(n,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Rf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function bu(n,e,t){(e!=="number"||Sa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ds=Array.isArray;function qr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ii(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Pu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Df(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(J(92));if(Ds(t)){if(1<t.length)throw Error(J(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ii(t)}}function mp(n,e){var t=Ii(e.value),i=Ii(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function If(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function gp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?gp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Co,vp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Co.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function qs(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g0=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(n){g0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ks[e]=ks[n]})});function _p(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ks.hasOwnProperty(n)&&ks[n]?(""+e).trim():e+"px"}function xp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=_p(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var v0=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(n,e){if(e){if(v0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Du(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function Dc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Uu=null,$r=null,Yr=null;function Uf(n){if(n=go(n)){if(typeof Uu!="function")throw Error(J(280));var e=n.stateNode;e&&(e=Qa(e),Uu(n.stateNode,n.type,e))}}function yp(n){$r?Yr?Yr.push(n):Yr=[n]:$r=n}function Sp(){if($r){var n=$r,e=Yr;if(Yr=$r=null,Uf(n),e)for(n=0;n<e.length;n++)Uf(e[n])}}function Mp(n,e){return n(e)}function wp(){}var Ml=!1;function Ep(n,e,t){if(Ml)return n(e,t);Ml=!0;try{return Mp(n,e,t)}finally{Ml=!1,($r!==null||Yr!==null)&&(wp(),Sp())}}function $s(n,e){var t=n.stateNode;if(t===null)return null;var i=Qa(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(J(231,e,typeof t));return t}var Nu=!1;if(si)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Nu=!1}function _0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var Fs=!1,Ma=null,wa=!1,zu=null,x0={onError:function(n){Fs=!0,Ma=n}};function y0(n,e,t,i,r,s,o,a,l){Fs=!1,Ma=null,_0.apply(x0,arguments)}function S0(n,e,t,i,r,s,o,a,l){if(y0.apply(this,arguments),Fs){if(Fs){var u=Ma;Fs=!1,Ma=null}else throw Error(J(198));wa||(wa=!0,zu=u)}}function mr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Tp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Nf(n){if(mr(n)!==n)throw Error(J(188))}function M0(n){var e=n.alternate;if(!e){if(e=mr(n),e===null)throw Error(J(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Nf(r),n;if(s===i)return Nf(r),e;s=s.sibling}throw Error(J(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(t.alternate!==i)throw Error(J(190))}if(t.tag!==3)throw Error(J(188));return t.stateNode.current===t?n:e}function Cp(n){return n=M0(n),n!==null?Ap(n):null}function Ap(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ap(n);if(e!==null)return e;n=n.sibling}return null}var bp=an.unstable_scheduleCallback,zf=an.unstable_cancelCallback,w0=an.unstable_shouldYield,E0=an.unstable_requestPaint,st=an.unstable_now,T0=an.unstable_getCurrentPriorityLevel,Ic=an.unstable_ImmediatePriority,Pp=an.unstable_UserBlockingPriority,Ea=an.unstable_NormalPriority,C0=an.unstable_LowPriority,Lp=an.unstable_IdlePriority,$a=null,Hn=null;function A0(n){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot($a,n,void 0,(n.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:L0,b0=Math.log,P0=Math.LN2;function L0(n){return n>>>=0,n===0?32:31-(b0(n)/P0|0)|0}var Ao=64,bo=4194304;function Is(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ta(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Is(a):(s&=o,s!==0&&(i=Is(s)))}else o=t&~r,o!==0?i=Is(o):s!==0&&(i=Is(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Rn(e),r=1<<t,i|=n[t],e&=~r;return i}function R0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=R0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ku(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Rp(){var n=Ao;return Ao<<=1,!(Ao&4194240)&&(Ao=64),n}function wl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function po(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Rn(e),n[e]=t}function I0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Rn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Uc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Rn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Be=0;function Dp(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ip,Nc,Up,Np,zp,Fu=!1,Po=[],wi=null,Ei=null,Ti=null,Ys=new Map,Ks=new Map,_i=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(n,e){switch(n){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Ei=null;break;case"mouseover":case"mouseout":Ti=null;break;case"pointerover":case"pointerout":Ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(e.pointerId)}}function Ss(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=go(e),e!==null&&Nc(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function N0(n,e,t,i,r){switch(e){case"focusin":return wi=Ss(wi,n,e,t,i,r),!0;case"dragenter":return Ei=Ss(Ei,n,e,t,i,r),!0;case"mouseover":return Ti=Ss(Ti,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ys.set(s,Ss(Ys.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ks.set(s,Ss(Ks.get(s)||null,n,e,t,i,r)),!0}return!1}function kp(n){var e=Qi(n.target);if(e!==null){var t=mr(e);if(t!==null){if(e=t.tag,e===13){if(e=Tp(t),e!==null){n.blockedOn=e,zp(n.priority,function(){Up(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ca(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ou(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Iu=i,t.target.dispatchEvent(i),Iu=null}else return e=go(t),e!==null&&Nc(e),n.blockedOn=t,!1;e.shift()}return!0}function Ff(n,e,t){ca(n)&&t.delete(e)}function z0(){Fu=!1,wi!==null&&ca(wi)&&(wi=null),Ei!==null&&ca(Ei)&&(Ei=null),Ti!==null&&ca(Ti)&&(Ti=null),Ys.forEach(Ff),Ks.forEach(Ff)}function Ms(n,e){n.blockedOn===e&&(n.blockedOn=null,Fu||(Fu=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,z0)))}function Zs(n){function e(r){return Ms(r,n)}if(0<Po.length){Ms(Po[0],n);for(var t=1;t<Po.length;t++){var i=Po[t];i.blockedOn===n&&(i.blockedOn=null)}}for(wi!==null&&Ms(wi,n),Ei!==null&&Ms(Ei,n),Ti!==null&&Ms(Ti,n),Ys.forEach(e),Ks.forEach(e),t=0;t<_i.length;t++)i=_i[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<_i.length&&(t=_i[0],t.blockedOn===null);)kp(t),t.blockedOn===null&&_i.shift()}var Kr=ui.ReactCurrentBatchConfig,Ca=!0;function k0(n,e,t,i){var r=Be,s=Kr.transition;Kr.transition=null;try{Be=1,zc(n,e,t,i)}finally{Be=r,Kr.transition=s}}function F0(n,e,t,i){var r=Be,s=Kr.transition;Kr.transition=null;try{Be=4,zc(n,e,t,i)}finally{Be=r,Kr.transition=s}}function zc(n,e,t,i){if(Ca){var r=Ou(n,e,t,i);if(r===null)Il(n,e,i,Aa,t),kf(n,i);else if(N0(r,n,e,t,i))i.stopPropagation();else if(kf(n,i),e&4&&-1<U0.indexOf(n)){for(;r!==null;){var s=go(r);if(s!==null&&Ip(s),s=Ou(n,e,t,i),s===null&&Il(n,e,i,Aa,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Il(n,e,i,null,t)}}var Aa=null;function Ou(n,e,t,i){if(Aa=null,n=Dc(i),n=Qi(n),n!==null)if(e=mr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Tp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Aa=n,null}function Fp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T0()){case Ic:return 1;case Pp:return 4;case Ea:case C0:return 16;case Lp:return 536870912;default:return 16}default:return 16}}var yi=null,kc=null,fa=null;function Op(){if(fa)return fa;var n,e=kc,t=e.length,i,r="value"in yi?yi.value:yi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return fa=r.slice(n,1<i?1-i:void 0)}function da(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Lo(){return!0}function Of(){return!1}function un(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lo:Of,this.isPropagationStopped=Of,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=un(ps),mo=et({},ps,{view:0,detail:0}),O0=un(mo),El,Tl,ws,Ya=et({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ws&&(ws&&n.type==="mousemove"?(El=n.screenX-ws.screenX,Tl=n.screenY-ws.screenY):Tl=El=0,ws=n),El)},movementY:function(n){return"movementY"in n?n.movementY:Tl}}),Bf=un(Ya),B0=et({},Ya,{dataTransfer:0}),V0=un(B0),G0=et({},mo,{relatedTarget:0}),Cl=un(G0),H0=et({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=un(H0),j0=et({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),X0=un(j0),q0=et({},ps,{data:0}),Vf=un(q0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=K0[n])?!!e[n]:!1}function Oc(){return Z0}var Q0=et({},mo,{key:function(n){if(n.key){var e=$0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Y0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(n){return n.type==="keypress"?da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),J0=un(Q0),ev=et({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=un(ev),tv=et({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),nv=un(tv),iv=et({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=un(iv),sv=et({},Ya,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ov=un(sv),av=[9,13,27,32],Bc=si&&"CompositionEvent"in window,Os=null;si&&"documentMode"in document&&(Os=document.documentMode);var lv=si&&"TextEvent"in window&&!Os,Bp=si&&(!Bc||Os&&8<Os&&11>=Os),Hf=String.fromCharCode(32),Wf=!1;function Vp(n,e){switch(n){case"keyup":return av.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zr=!1;function uv(n,e){switch(n){case"compositionend":return Gp(e);case"keypress":return e.which!==32?null:(Wf=!0,Hf);case"textInput":return n=e.data,n===Hf&&Wf?null:n;default:return null}}function cv(n,e){if(zr)return n==="compositionend"||!Bc&&Vp(n,e)?(n=Op(),fa=kc=yi=null,zr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bp&&e.locale!=="ko"?null:e.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!fv[n.type]:e==="textarea"}function Hp(n,e,t,i){yp(i),e=ba(e,"onChange"),0<e.length&&(t=new Fc("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Bs=null,Qs=null;function dv(n){em(n,0)}function Ka(n){var e=Or(n);if(hp(e))return n}function hv(n,e){if(n==="change")return e}var Wp=!1;if(si){var Al;if(si){var bl="oninput"in document;if(!bl){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),bl=typeof Xf.oninput=="function"}Al=bl}else Al=!1;Wp=Al&&(!document.documentMode||9<document.documentMode)}function qf(){Bs&&(Bs.detachEvent("onpropertychange",jp),Qs=Bs=null)}function jp(n){if(n.propertyName==="value"&&Ka(Qs)){var e=[];Hp(e,Qs,n,Dc(n)),Ep(dv,e)}}function pv(n,e,t){n==="focusin"?(qf(),Bs=e,Qs=t,Bs.attachEvent("onpropertychange",jp)):n==="focusout"&&qf()}function mv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ka(Qs)}function gv(n,e){if(n==="click")return Ka(e)}function vv(n,e){if(n==="input"||n==="change")return Ka(e)}function _v(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var In=typeof Object.is=="function"?Object.is:_v;function Js(n,e){if(In(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Su.call(e,r)||!In(n[r],e[r]))return!1}return!0}function $f(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yf(n,e){var t=$f(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$f(t)}}function Xp(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Xp(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function qp(){for(var n=window,e=Sa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Sa(n.document)}return e}function Vc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function xv(n){var e=qp(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Xp(t.ownerDocument.documentElement,t)){if(i!==null&&Vc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Yf(t,s);var o=Yf(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yv=si&&"documentMode"in document&&11>=document.documentMode,kr=null,Bu=null,Vs=null,Vu=!1;function Kf(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vu||kr==null||kr!==Sa(i)||(i=kr,"selectionStart"in i&&Vc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vs&&Js(Vs,i)||(Vs=i,i=ba(Bu,"onSelect"),0<i.length&&(e=new Fc("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=kr)))}function Ro(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Fr={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Pl={},$p={};si&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function Za(n){if(Pl[n])return Pl[n];if(!Fr[n])return n;var e=Fr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in $p)return Pl[n]=e[t];return n}var Yp=Za("animationend"),Kp=Za("animationiteration"),Zp=Za("animationstart"),Qp=Za("transitionend"),Jp=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(n,e){Jp.set(n,e),pr(e,[n])}for(var Ll=0;Ll<Zf.length;Ll++){var Rl=Zf[Ll],Sv=Rl.toLowerCase(),Mv=Rl[0].toUpperCase()+Rl.slice(1);ki(Sv,"on"+Mv)}ki(Yp,"onAnimationEnd");ki(Kp,"onAnimationIteration");ki(Zp,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(Qp,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function Qf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,S0(i,e,void 0,n),n.currentTarget=null}function em(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qf(r,a,u),s=l}}}if(wa)throw n=zu,wa=!1,zu=null,n}function je(n,e){var t=e[Xu];t===void 0&&(t=e[Xu]=new Set);var i=n+"__bubble";t.has(i)||(tm(e,n,2,!1),t.add(i))}function Dl(n,e,t){var i=0;e&&(i|=4),tm(t,n,i,e)}var Do="_reactListening"+Math.random().toString(36).slice(2);function eo(n){if(!n[Do]){n[Do]=!0,lp.forEach(function(t){t!=="selectionchange"&&(wv.has(t)||Dl(t,!1,n),Dl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Do]||(e[Do]=!0,Dl("selectionchange",!1,e))}}function tm(n,e,t,i){switch(Fp(e)){case 1:var r=k0;break;case 4:r=F0;break;default:r=zc}t=r.bind(null,e,t,n),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Il(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Qi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ep(function(){var u=s,f=Dc(t),h=[];e:{var d=Jp.get(n);if(d!==void 0){var p=Fc,_=n;switch(n){case"keypress":if(da(t)===0)break e;case"keydown":case"keyup":p=J0;break;case"focusin":_="focus",p=Cl;break;case"focusout":_="blur",p=Cl;break;case"beforeblur":case"afterblur":p=Cl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nv;break;case Yp:case Kp:case Zp:p=W0;break;case Qp:p=rv;break;case"scroll":p=O0;break;case"wheel":p=ov;break;case"copy":case"cut":case"paste":p=X0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gf}var y=(e&4)!==0,m=!y&&n==="scroll",c=y?d!==null?d+"Capture":null:d;y=[];for(var g=u,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,c!==null&&(x=$s(g,c),x!=null&&y.push(to(g,x,v)))),m)break;g=g.return}0<y.length&&(d=new p(d,_,null,t,f),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Iu&&(_=t.relatedTarget||t.fromElement)&&(Qi(_)||_[oi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?Qi(_):null,_!==null&&(m=mr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Bf,x="onMouseLeave",c="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(y=Gf,x="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?d:Or(p),v=_==null?d:Or(_),d=new y(x,g+"leave",p,t,f),d.target=m,d.relatedTarget=v,x=null,Qi(f)===u&&(y=new y(c,g+"enter",_,t,f),y.target=v,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,c=_,g=0,v=y;v;v=gr(v))g++;for(v=0,x=c;x;x=gr(x))v++;for(;0<g-v;)y=gr(y),g--;for(;0<v-g;)c=gr(c),v--;for(;g--;){if(y===c||c!==null&&y===c.alternate)break t;y=gr(y),c=gr(c)}y=null}else y=null;p!==null&&Jf(h,d,p,y,!1),_!==null&&m!==null&&Jf(h,m,_,y,!0)}}e:{if(d=u?Or(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=hv;else if(jf(d))if(Wp)w=vv;else{w=mv;var A=pv}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=gv);if(w&&(w=w(n,u))){Hp(h,w,t,f);break e}A&&A(n,d,u),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&bu(d,"number",d.value)}switch(A=u?Or(u):window,n){case"focusin":(jf(A)||A.contentEditable==="true")&&(kr=A,Bu=u,Vs=null);break;case"focusout":Vs=Bu=kr=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Kf(h,t,f);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":Kf(h,t,f)}var b;if(Bc)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else zr?Vp(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Bp&&t.locale!=="ko"&&(zr||P!=="onCompositionStart"?P==="onCompositionEnd"&&zr&&(b=Op()):(yi=f,kc="value"in yi?yi.value:yi.textContent,zr=!0)),A=ba(u,P),0<A.length&&(P=new Vf(P,n,null,t,f),h.push({event:P,listeners:A}),b?P.data=b:(b=Gp(t),b!==null&&(P.data=b)))),(b=lv?uv(n,t):cv(n,t))&&(u=ba(u,"onBeforeInput"),0<u.length&&(f=new Vf("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:u}),f.data=b))}em(h,e)})}function to(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ba(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$s(n,t),s!=null&&i.unshift(to(n,s,r)),s=$s(n,e),s!=null&&i.push(to(n,s,r))),n=n.return}return i}function gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jf(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=$s(t,s),l!=null&&o.unshift(to(t,l,a))):r||(l=$s(t,s),l!=null&&o.push(to(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Ev=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function ed(n){return(typeof n=="string"?n:""+n).replace(Ev,`
`).replace(Tv,"")}function Io(n,e,t){if(e=ed(e),ed(n)!==e&&t)throw Error(J(425))}function Pa(){}var Gu=null,Hu=null;function Wu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,Av=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(n){return td.resolve(null).then(n).catch(bv)}:ju;function bv(n){setTimeout(function(){throw n})}function Ul(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Zs(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Zs(e)}function Ci(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function nd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),Bn="__reactFiber$"+ms,no="__reactProps$"+ms,oi="__reactContainer$"+ms,Xu="__reactEvents$"+ms,Pv="__reactListeners$"+ms,Lv="__reactHandles$"+ms;function Qi(n){var e=n[Bn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[oi]||t[Bn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=nd(n);n!==null;){if(t=n[Bn])return t;n=nd(n)}return e}n=t,t=n.parentNode}return null}function go(n){return n=n[Bn]||n[oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Or(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(J(33))}function Qa(n){return n[no]||null}var qu=[],Br=-1;function Fi(n){return{current:n}}function qe(n){0>Br||(n.current=qu[Br],qu[Br]=null,Br--)}function He(n,e){Br++,qu[Br]=n.current,n.current=e}var Ui={},Dt=Fi(Ui),Xt=Fi(!1),or=Ui;function is(n,e){var t=n.type.contextTypes;if(!t)return Ui;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function qt(n){return n=n.childContextTypes,n!=null}function La(){qe(Xt),qe(Dt)}function id(n,e,t){if(Dt.current!==Ui)throw Error(J(168));He(Dt,e),He(Xt,t)}function nm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,p0(n)||"Unknown",r));return et({},t,i)}function Ra(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ui,or=Dt.current,He(Dt,n),He(Xt,Xt.current),!0}function rd(n,e,t){var i=n.stateNode;if(!i)throw Error(J(169));t?(n=nm(n,e,or),i.__reactInternalMemoizedMergedChildContext=n,qe(Xt),qe(Dt),He(Dt,n)):qe(Xt),He(Xt,t)}var ei=null,Ja=!1,Nl=!1;function im(n){ei===null?ei=[n]:ei.push(n)}function Rv(n){Ja=!0,im(n)}function Oi(){if(!Nl&&ei!==null){Nl=!0;var n=0,e=Be;try{var t=ei;for(Be=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ei=null,Ja=!1}catch(r){throw ei!==null&&(ei=ei.slice(n+1)),bp(Ic,Oi),r}finally{Be=e,Nl=!1}}return null}var Vr=[],Gr=0,Da=null,Ia=0,dn=[],hn=0,ar=null,ti=1,ni="";function qi(n,e){Vr[Gr++]=Ia,Vr[Gr++]=Da,Da=n,Ia=e}function rm(n,e,t){dn[hn++]=ti,dn[hn++]=ni,dn[hn++]=ar,ar=n;var i=ti;n=ni;var r=32-Rn(i)-1;i&=~(1<<r),t+=1;var s=32-Rn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-Rn(e)+r|t<<r|i,ni=s+n}else ti=1<<s|t<<r|i,ni=n}function Gc(n){n.return!==null&&(qi(n,1),rm(n,1,0))}function Hc(n){for(;n===Da;)Da=Vr[--Gr],Vr[Gr]=null,Ia=Vr[--Gr],Vr[Gr]=null;for(;n===ar;)ar=dn[--hn],dn[hn]=null,ni=dn[--hn],dn[hn]=null,ti=dn[--hn],dn[hn]=null}var rn=null,nn=null,Ye=!1,An=null;function sm(n,e){var t=gn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function sd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,rn=n,nn=Ci(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,rn=n,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ar!==null?{id:ti,overflow:ni}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=gn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,rn=n,nn=null,!0):!1;default:return!1}}function $u(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yu(n){if(Ye){var e=nn;if(e){var t=e;if(!sd(n,e)){if($u(n))throw Error(J(418));e=Ci(t.nextSibling);var i=rn;e&&sd(n,e)?sm(i,t):(n.flags=n.flags&-4097|2,Ye=!1,rn=n)}}else{if($u(n))throw Error(J(418));n.flags=n.flags&-4097|2,Ye=!1,rn=n}}}function od(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Uo(n){if(n!==rn)return!1;if(!Ye)return od(n),Ye=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Wu(n.type,n.memoizedProps)),e&&(e=nn)){if($u(n))throw om(),Error(J(418));for(;e;)sm(n,e),e=Ci(e.nextSibling)}if(od(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){nn=Ci(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}nn=null}}else nn=rn?Ci(n.stateNode.nextSibling):null;return!0}function om(){for(var n=nn;n;)n=Ci(n.nextSibling)}function rs(){nn=rn=null,Ye=!1}function Wc(n){An===null?An=[n]:An.push(n)}var Dv=ui.ReactCurrentBatchConfig;function Tn(n,e){if(n&&n.defaultProps){e=et({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Ua=Fi(null),Na=null,Hr=null,jc=null;function Xc(){jc=Hr=Na=null}function qc(n){var e=Ua.current;qe(Ua),n._currentValue=e}function Ku(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Zr(n,e){Na=n,jc=Hr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(jt=!0),n.firstContext=null)}function _n(n){var e=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:e,next:null},Hr===null){if(Na===null)throw Error(J(308));Hr=n,Na.dependencies={lanes:0,firstContext:n}}else Hr=Hr.next=n;return e}var Ji=null;function $c(n){Ji===null?Ji=[n]:Ji.push(n)}function am(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,$c(e)):(t.next=r.next,r.next=t),e.interleaved=t,ai(n,i)}function ai(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var vi=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ii(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ai(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ai(n,t)}return r=i.interleaved,r===null?(e.next=e,$c(i)):(e.next=r.next,r.next=e),i.interleaved=e,ai(n,t)}function ha(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Uc(n,t)}}function ad(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function za(n,e,t,i){var r=n.updateQueue;vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=n.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,y=a;switch(d=e,p=t,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=et({},h,d);break e;case 2:vi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ur|=o,n.lanes=o,n.memoizedState=h}}function ld(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var um=new ap.Component().refs;function Zu(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:et({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var el={isMounted:function(n){return(n=n._reactInternals)?mr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Ot(),r=Pi(n),s=ii(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(Dn(e,n,r,i),ha(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Ot(),r=Pi(n),s=ii(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(Dn(e,n,r,i),ha(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ot(),i=Pi(n),r=ii(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ai(n,r,i),e!==null&&(Dn(e,n,i,t),ha(e,n,i))}};function ud(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Js(t,i)||!Js(r,s):!0}function cm(n,e,t){var i=!1,r=Ui,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(r=qt(e)?or:Dt.current,i=e.contextTypes,s=(i=i!=null)?is(n,r):Ui),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=el,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function cd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&el.enqueueReplaceState(e,e.state,null)}function Qu(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=um,Yc(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=_n(s):(s=qt(e)?or:Dt.current,r.context=is(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zu(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&el.enqueueReplaceState(r,r.state,null),za(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(J(309));var i=t.stateNode}if(!i)throw Error(J(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===um&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(J(284));if(!t._owner)throw Error(J(290,n))}return n}function No(n,e){throw n=Object.prototype.toString.call(e),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function fd(n){var e=n._init;return e(n._payload)}function fm(n){function e(c,g){if(n){var v=c.deletions;v===null?(c.deletions=[g],c.flags|=16):v.push(g)}}function t(c,g){if(!n)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Li(c,g),c.index=0,c.sibling=null,c}function s(c,g,v){return c.index=v,n?(v=c.alternate,v!==null?(v=v.index,v<g?(c.flags|=2,g):v):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return n&&c.alternate===null&&(c.flags|=2),c}function a(c,g,v,x){return g===null||g.tag!==6?(g=Gl(v,c.mode,x),g.return=c,g):(g=r(g,v),g.return=c,g)}function l(c,g,v,x){var w=v.type;return w===Nr?f(c,g,v.props.children,x,v.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===gi&&fd(w)===g.type)?(x=r(g,v.props),x.ref=Es(c,g,v),x.return=c,x):(x=xa(v.type,v.key,v.props,null,c.mode,x),x.ref=Es(c,g,v),x.return=c,x)}function u(c,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Hl(v,c.mode,x),g.return=c,g):(g=r(g,v.children||[]),g.return=c,g)}function f(c,g,v,x,w){return g===null||g.tag!==7?(g=rr(v,c.mode,x,w),g.return=c,g):(g=r(g,v),g.return=c,g)}function h(c,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Gl(""+g,c.mode,v),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Eo:return v=xa(g.type,g.key,g.props,null,c.mode,v),v.ref=Es(c,null,g),v.return=c,v;case Ur:return g=Hl(g,c.mode,v),g.return=c,g;case gi:var x=g._init;return h(c,x(g._payload),v)}if(Ds(g)||xs(g))return g=rr(g,c.mode,v,null),g.return=c,g;No(c,g)}return null}function d(c,g,v,x){var w=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return w!==null?null:a(c,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Eo:return v.key===w?l(c,g,v,x):null;case Ur:return v.key===w?u(c,g,v,x):null;case gi:return w=v._init,d(c,g,w(v._payload),x)}if(Ds(v)||xs(v))return w!==null?null:f(c,g,v,x,null);No(c,v)}return null}function p(c,g,v,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(v)||null,a(g,c,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Eo:return c=c.get(x.key===null?v:x.key)||null,l(g,c,x,w);case Ur:return c=c.get(x.key===null?v:x.key)||null,u(g,c,x,w);case gi:var A=x._init;return p(c,g,v,A(x._payload),w)}if(Ds(x)||xs(x))return c=c.get(v)||null,f(g,c,x,w,null);No(g,x)}return null}function _(c,g,v,x){for(var w=null,A=null,b=g,P=g=0,M=null;b!==null&&P<v.length;P++){b.index>P?(M=b,b=null):M=b.sibling;var T=d(c,b,v[P],x);if(T===null){b===null&&(b=M);break}n&&b&&T.alternate===null&&e(c,b),g=s(T,g,P),A===null?w=T:A.sibling=T,A=T,b=M}if(P===v.length)return t(c,b),Ye&&qi(c,P),w;if(b===null){for(;P<v.length;P++)b=h(c,v[P],x),b!==null&&(g=s(b,g,P),A===null?w=b:A.sibling=b,A=b);return Ye&&qi(c,P),w}for(b=i(c,b);P<v.length;P++)M=p(b,c,P,v[P],x),M!==null&&(n&&M.alternate!==null&&b.delete(M.key===null?P:M.key),g=s(M,g,P),A===null?w=M:A.sibling=M,A=M);return n&&b.forEach(function(Y){return e(c,Y)}),Ye&&qi(c,P),w}function y(c,g,v,x){var w=xs(v);if(typeof w!="function")throw Error(J(150));if(v=w.call(v),v==null)throw Error(J(151));for(var A=w=null,b=g,P=g=0,M=null,T=v.next();b!==null&&!T.done;P++,T=v.next()){b.index>P?(M=b,b=null):M=b.sibling;var Y=d(c,b,T.value,x);if(Y===null){b===null&&(b=M);break}n&&b&&Y.alternate===null&&e(c,b),g=s(Y,g,P),A===null?w=Y:A.sibling=Y,A=Y,b=M}if(T.done)return t(c,b),Ye&&qi(c,P),w;if(b===null){for(;!T.done;P++,T=v.next())T=h(c,T.value,x),T!==null&&(g=s(T,g,P),A===null?w=T:A.sibling=T,A=T);return Ye&&qi(c,P),w}for(b=i(c,b);!T.done;P++,T=v.next())T=p(b,c,P,T.value,x),T!==null&&(n&&T.alternate!==null&&b.delete(T.key===null?P:T.key),g=s(T,g,P),A===null?w=T:A.sibling=T,A=T);return n&&b.forEach(function($){return e(c,$)}),Ye&&qi(c,P),w}function m(c,g,v,x){if(typeof v=="object"&&v!==null&&v.type===Nr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Eo:e:{for(var w=v.key,A=g;A!==null;){if(A.key===w){if(w=v.type,w===Nr){if(A.tag===7){t(c,A.sibling),g=r(A,v.props.children),g.return=c,c=g;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===gi&&fd(w)===A.type){t(c,A.sibling),g=r(A,v.props),g.ref=Es(c,A,v),g.return=c,c=g;break e}t(c,A);break}else e(c,A);A=A.sibling}v.type===Nr?(g=rr(v.props.children,c.mode,x,v.key),g.return=c,c=g):(x=xa(v.type,v.key,v.props,null,c.mode,x),x.ref=Es(c,g,v),x.return=c,c=x)}return o(c);case Ur:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(c,g.sibling),g=r(g,v.children||[]),g.return=c,c=g;break e}else{t(c,g);break}else e(c,g);g=g.sibling}g=Hl(v,c.mode,x),g.return=c,c=g}return o(c);case gi:return A=v._init,m(c,g,A(v._payload),x)}if(Ds(v))return _(c,g,v,x);if(xs(v))return y(c,g,v,x);No(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(c,g.sibling),g=r(g,v),g.return=c,c=g):(t(c,g),g=Gl(v,c.mode,x),g.return=c,c=g),o(c)):t(c,g)}return m}var ss=fm(!0),dm=fm(!1),vo={},Wn=Fi(vo),io=Fi(vo),ro=Fi(vo);function er(n){if(n===vo)throw Error(J(174));return n}function Kc(n,e){switch(He(ro,e),He(io,n),He(Wn,vo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Lu(e,n)}qe(Wn),He(Wn,e)}function os(){qe(Wn),qe(io),qe(ro)}function hm(n){er(ro.current);var e=er(Wn.current),t=Lu(e,n.type);e!==t&&(He(io,n),He(Wn,t))}function Zc(n){io.current===n&&(qe(Wn),qe(io))}var Qe=Fi(0);function ka(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zl=[];function Qc(){for(var n=0;n<zl.length;n++)zl[n]._workInProgressVersionPrimary=null;zl.length=0}var pa=ui.ReactCurrentDispatcher,kl=ui.ReactCurrentBatchConfig,lr=0,Je=null,ct=null,_t=null,Fa=!1,Gs=!1,so=0,Iv=0;function At(){throw Error(J(321))}function Jc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!In(n[t],e[t]))return!1;return!0}function ef(n,e,t,i,r,s){if(lr=s,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=n===null||n.memoizedState===null?kv:Fv,n=t(i,r),Gs){s=0;do{if(Gs=!1,so=0,25<=s)throw Error(J(301));s+=1,_t=ct=null,e.updateQueue=null,pa.current=Ov,n=t(i,r)}while(Gs)}if(pa.current=Oa,e=ct!==null&&ct.next!==null,lr=0,_t=ct=Je=null,Fa=!1,e)throw Error(J(300));return n}function tf(){var n=so!==0;return so=0,n}function kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Je.memoizedState=_t=n:_t=_t.next=n,_t}function xn(){if(ct===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var e=_t===null?Je.memoizedState:_t.next;if(e!==null)_t=e,ct=n;else{if(n===null)throw Error(J(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},_t===null?Je.memoizedState=_t=n:_t=_t.next=n}return _t}function oo(n,e){return typeof e=="function"?e(n):e}function Fl(n){var e=xn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((lr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Je.lanes|=f,ur|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,In(i,e.memoizedState)||(jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Je.lanes|=s,ur|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ol(n){var e=xn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);In(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function pm(){}function mm(n,e){var t=Je,i=xn(),r=e(),s=!In(i.memoizedState,r);if(s&&(i.memoizedState=r,jt=!0),i=i.queue,nf(_m.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||_t!==null&&_t.memoizedState.tag&1){if(t.flags|=2048,ao(9,vm.bind(null,t,i,r,e),void 0,null),xt===null)throw Error(J(349));lr&30||gm(t,e,r)}return r}function gm(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function vm(n,e,t,i){e.value=t,e.getSnapshot=i,xm(e)&&ym(n)}function _m(n,e,t){return t(function(){xm(e)&&ym(n)})}function xm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!In(n,t)}catch{return!0}}function ym(n){var e=ai(n,1);e!==null&&Dn(e,n,1,-1)}function dd(n){var e=kn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:n},e.queue=n,n=n.dispatch=zv.bind(null,Je,n),[e.memoizedState,n]}function ao(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Sm(){return xn().memoizedState}function ma(n,e,t,i){var r=kn();Je.flags|=n,r.memoizedState=ao(1|e,t,void 0,i===void 0?null:i)}function tl(n,e,t,i){var r=xn();i=i===void 0?null:i;var s=void 0;if(ct!==null){var o=ct.memoizedState;if(s=o.destroy,i!==null&&Jc(i,o.deps)){r.memoizedState=ao(e,t,s,i);return}}Je.flags|=n,r.memoizedState=ao(1|e,t,s,i)}function hd(n,e){return ma(8390656,8,n,e)}function nf(n,e){return tl(2048,8,n,e)}function Mm(n,e){return tl(4,2,n,e)}function wm(n,e){return tl(4,4,n,e)}function Em(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Tm(n,e,t){return t=t!=null?t.concat([n]):null,tl(4,4,Em.bind(null,e,n),t)}function rf(){}function Cm(n,e){var t=xn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Jc(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Am(n,e){var t=xn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Jc(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function bm(n,e,t){return lr&21?(In(t,e)||(t=Rp(),Je.lanes|=t,ur|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,jt=!0),n.memoizedState=t)}function Uv(n,e){var t=Be;Be=t!==0&&4>t?t:4,n(!0);var i=kl.transition;kl.transition={};try{n(!1),e()}finally{Be=t,kl.transition=i}}function Pm(){return xn().memoizedState}function Nv(n,e,t){var i=Pi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Lm(n))Rm(e,t);else if(t=am(n,e,t,i),t!==null){var r=Ot();Dn(t,n,i,r),Dm(t,e,i)}}function zv(n,e,t){var i=Pi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Lm(n))Rm(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,In(a,o)){var l=e.interleaved;l===null?(r.next=r,$c(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=am(n,e,r,i),t!==null&&(r=Ot(),Dn(t,n,i,r),Dm(t,e,i))}}function Lm(n){var e=n.alternate;return n===Je||e!==null&&e===Je}function Rm(n,e){Gs=Fa=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Dm(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Uc(n,t)}}var Oa={readContext:_n,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},kv={readContext:_n,useCallback:function(n,e){return kn().memoizedState=[n,e===void 0?null:e],n},useContext:_n,useEffect:hd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ma(4194308,4,Em.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ma(4194308,4,n,e)},useInsertionEffect:function(n,e){return ma(4,2,n,e)},useMemo:function(n,e){var t=kn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=kn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Nv.bind(null,Je,n),[i.memoizedState,n]},useRef:function(n){var e=kn();return n={current:n},e.memoizedState=n},useState:dd,useDebugValue:rf,useDeferredValue:function(n){return kn().memoizedState=n},useTransition:function(){var n=dd(!1),e=n[0];return n=Uv.bind(null,n[1]),kn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Je,r=kn();if(Ye){if(t===void 0)throw Error(J(407));t=t()}else{if(t=e(),xt===null)throw Error(J(349));lr&30||gm(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,hd(_m.bind(null,i,s,n),[n]),i.flags|=2048,ao(9,vm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=kn(),e=xt.identifierPrefix;if(Ye){var t=ni,i=ti;t=(i&~(1<<32-Rn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=so++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Iv++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Fv={readContext:_n,useCallback:Cm,useContext:_n,useEffect:nf,useImperativeHandle:Tm,useInsertionEffect:Mm,useLayoutEffect:wm,useMemo:Am,useReducer:Fl,useRef:Sm,useState:function(){return Fl(oo)},useDebugValue:rf,useDeferredValue:function(n){var e=xn();return bm(e,ct.memoizedState,n)},useTransition:function(){var n=Fl(oo)[0],e=xn().memoizedState;return[n,e]},useMutableSource:pm,useSyncExternalStore:mm,useId:Pm,unstable_isNewReconciler:!1},Ov={readContext:_n,useCallback:Cm,useContext:_n,useEffect:nf,useImperativeHandle:Tm,useInsertionEffect:Mm,useLayoutEffect:wm,useMemo:Am,useReducer:Ol,useRef:Sm,useState:function(){return Ol(oo)},useDebugValue:rf,useDeferredValue:function(n){var e=xn();return ct===null?e.memoizedState=n:bm(e,ct.memoizedState,n)},useTransition:function(){var n=Ol(oo)[0],e=xn().memoizedState;return[n,e]},useMutableSource:pm,useSyncExternalStore:mm,useId:Pm,unstable_isNewReconciler:!1};function as(n,e){try{var t="",i=e;do t+=h0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Bl(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ju(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Bv=typeof WeakMap=="function"?WeakMap:Map;function Im(n,e,t){t=ii(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Va||(Va=!0,uc=i),Ju(n,e)},t}function Um(n,e,t){t=ii(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ju(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ju(n,e),typeof i!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function pd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Bv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=e_.bind(null,n,e,t),e.then(n,n))}function md(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function gd(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ii(-1,1),e.tag=2,Ai(t,e,1))),t.lanes|=1),n)}var Vv=ui.ReactCurrentOwner,jt=!1;function zt(n,e,t,i){e.child=n===null?dm(e,null,t,i):ss(e,n.child,t,i)}function vd(n,e,t,i,r){t=t.render;var s=e.ref;return Zr(e,r),i=ef(n,e,t,i,s,r),t=tf(),n!==null&&!jt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(Ye&&t&&Gc(e),e.flags|=1,zt(n,e,i,r),e.child)}function _d(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!df(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Nm(n,e,s,i,r)):(n=xa(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Js,t(o,i)&&n.ref===e.ref)return li(n,e,r)}return e.flags|=1,n=Li(s,i),n.ref=e.ref,n.return=e,e.child=n}function Nm(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Js(s,i)&&n.ref===e.ref)if(jt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(jt=!0);else return e.lanes=n.lanes,li(n,e,r)}return ec(n,e,t,i,r)}function zm(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(jr,tn),tn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,He(jr,tn),tn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,He(jr,tn),tn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,He(jr,tn),tn|=i;return zt(n,e,r,t),e.child}function km(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ec(n,e,t,i,r){var s=qt(t)?or:Dt.current;return s=is(e,s),Zr(e,r),t=ef(n,e,t,i,s,r),i=tf(),n!==null&&!jt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(Ye&&i&&Gc(e),e.flags|=1,zt(n,e,t,r),e.child)}function xd(n,e,t,i,r){if(qt(t)){var s=!0;Ra(e)}else s=!1;if(Zr(e,r),e.stateNode===null)ga(n,e),cm(e,t,i),Qu(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=qt(t)?or:Dt.current,u=is(e,u));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&cd(e,o,i,u),vi=!1;var d=e.memoizedState;o.state=d,za(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Xt.current||vi?(typeof f=="function"&&(Zu(e,t,f,i),l=e.memoizedState),(a=vi||ud(e,t,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,lm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Tn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=_n(l):(l=qt(t)?or:Dt.current,l=is(e,l));var p=t.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&cd(e,o,i,l),vi=!1,d=e.memoizedState,o.state=d,za(e,i,o,r);var _=e.memoizedState;a!==h||d!==_||Xt.current||vi?(typeof p=="function"&&(Zu(e,t,p,i),_=e.memoizedState),(u=vi||ud(e,t,u,i,d,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return tc(n,e,t,i,s,r)}function tc(n,e,t,i,r,s){km(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&rd(e,t,!1),li(n,e,s);i=e.stateNode,Vv.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ss(e,n.child,null,s),e.child=ss(e,null,a,s)):zt(n,e,a,s),e.memoizedState=i.state,r&&rd(e,t,!0),e.child}function Fm(n){var e=n.stateNode;e.pendingContext?id(n,e.pendingContext,e.pendingContext!==e.context):e.context&&id(n,e.context,!1),Kc(n,e.containerInfo)}function yd(n,e,t,i,r){return rs(),Wc(r),e.flags|=256,zt(n,e,t,i),e.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ic(n){return{baseLanes:n,cachePool:null,transitions:null}}function Om(n,e,t){var i=e.pendingProps,r=Qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),He(Qe,r&1),n===null)return Yu(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rl(o,i,0,null),n=rr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ic(t),e.memoizedState=nc,n):sf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Gv(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Li(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Li(a,s):(s=rr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ic(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=nc,i}return s=n.child,n=s.sibling,i=Li(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function sf(n,e){return e=rl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function zo(n,e,t,i){return i!==null&&Wc(i),ss(e,n.child,null,t),n=sf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Gv(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Bl(Error(J(422))),zo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rl({mode:"visible",children:i.children},r,0,null),s=rr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ss(e,n.child,null,o),e.child.memoizedState=ic(o),e.memoizedState=nc,s);if(!(e.mode&1))return zo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=Bl(s,i,void 0),zo(n,e,o,i)}if(a=(o&n.childLanes)!==0,jt||a){if(i=xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ai(n,r),Dn(i,n,r,-1))}return ff(),i=Bl(Error(J(421))),zo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=t_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,nn=Ci(r.nextSibling),rn=e,Ye=!0,An=null,n!==null&&(dn[hn++]=ti,dn[hn++]=ni,dn[hn++]=ar,ti=n.id,ni=n.overflow,ar=e),e=sf(e,i.children),e.flags|=4096,e)}function Sd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ku(n.return,e,t)}function Vl(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Bm(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zt(n,e,i.children,t),i=Qe.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sd(n,t,e);else if(n.tag===19)Sd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(He(Qe,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ka(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Vl(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ka(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Vl(e,!0,t,null,s);break;case"together":Vl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ga(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function li(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ur|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(J(153));if(e.child!==null){for(n=e.child,t=Li(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Li(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Hv(n,e,t){switch(e.tag){case 3:Fm(e),rs();break;case 5:hm(e);break;case 1:qt(e.type)&&Ra(e);break;case 4:Kc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;He(Ua,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(He(Qe,Qe.current&1),e.flags|=128,null):t&e.child.childLanes?Om(n,e,t):(He(Qe,Qe.current&1),n=li(n,e,t),n!==null?n.sibling:null);He(Qe,Qe.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Bm(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),He(Qe,Qe.current),i)break;return null;case 22:case 23:return e.lanes=0,zm(n,e,t)}return li(n,e,t)}var Vm,rc,Gm,Hm;Vm=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};rc=function(){};Gm=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,er(Wn.current);var s=null;switch(t){case"input":r=Cu(n,r),i=Cu(n,i),s=[];break;case"select":r=et({},r,{value:void 0}),i=et({},i,{value:void 0}),s=[];break;case"textarea":r=Pu(n,r),i=Pu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Pa)}Ru(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&je("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Hm=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ts(n,e){if(!Ye)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function bt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Wv(n,e,t){var i=e.pendingProps;switch(Hc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return qt(e.type)&&La(),bt(e),null;case 3:return i=e.stateNode,os(),qe(Xt),qe(Dt),Qc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Uo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(dc(An),An=null))),rc(n,e),bt(e),null;case 5:Zc(e);var r=er(ro.current);if(t=e.type,n!==null&&e.stateNode!=null)Gm(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return bt(e),null}if(n=er(Wn.current),Uo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Bn]=e,i[no]=s,n=(e.mode&1)!==0,t){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(r=0;r<Us.length;r++)je(Us[r],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":Lf(i,s),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},je("invalid",i);break;case"textarea":Df(i,s),je("invalid",i)}Ru(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,a,n),r=["children",""+a]):Xs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",i)}switch(t){case"input":To(i),Rf(i,s,!0);break;case"textarea":To(i),If(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=gp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Bn]=e,n[no]=i,Vm(n,e,!1,!1),e.stateNode=n;e:{switch(o=Du(t,i),t){case"dialog":je("cancel",n),je("close",n),r=i;break;case"iframe":case"object":case"embed":je("load",n),r=i;break;case"video":case"audio":for(r=0;r<Us.length;r++)je(Us[r],n);r=i;break;case"source":je("error",n),r=i;break;case"img":case"image":case"link":je("error",n),je("load",n),r=i;break;case"details":je("toggle",n),r=i;break;case"input":Lf(n,i),r=Cu(n,i),je("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=et({},i,{value:void 0}),je("invalid",n);break;case"textarea":Df(n,i),r=Pu(n,i),je("invalid",n);break;default:r=i}Ru(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xp(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&qs(n,l):typeof l=="number"&&qs(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&je("scroll",n):l!=null&&bc(n,s,l,o))}switch(t){case"input":To(n),Rf(n,i,!1);break;case"textarea":To(n),If(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ii(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?qr(n,!!i.multiple,s,!1):i.defaultValue!=null&&qr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Pa)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bt(e),null;case 6:if(n&&e.stateNode!=null)Hm(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=er(ro.current),er(Wn.current),Uo(e)){if(i=e.stateNode,t=e.memoizedProps,i[Bn]=e,(s=i.nodeValue!==t)&&(n=rn,n!==null))switch(n.tag){case 3:Io(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Bn]=e,e.stateNode=i}return bt(e),null;case 13:if(qe(Qe),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&nn!==null&&e.mode&1&&!(e.flags&128))om(),rs(),e.flags|=98560,s=!1;else if(s=Uo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Bn]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),s=!1}else An!==null&&(dc(An),An=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Qe.current&1?ft===0&&(ft=3):ff())),e.updateQueue!==null&&(e.flags|=4),bt(e),null);case 4:return os(),rc(n,e),n===null&&eo(e.stateNode.containerInfo),bt(e),null;case 10:return qc(e.type._context),bt(e),null;case 17:return qt(e.type)&&La(),bt(e),null;case 19:if(qe(Qe),s=e.memoizedState,s===null)return bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ts(s,!1);else{if(ft!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=ka(n),o!==null){for(e.flags|=128,Ts(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return He(Qe,Qe.current&1|2),e.child}n=n.sibling}s.tail!==null&&st()>ls&&(e.flags|=128,i=!0,Ts(s,!1),e.lanes=4194304)}else{if(!i)if(n=ka(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ye)return bt(e),null}else 2*st()-s.renderingStartTime>ls&&t!==1073741824&&(e.flags|=128,i=!0,Ts(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=st(),e.sibling=null,t=Qe.current,He(Qe,i?t&1|2:t&1),e):(bt(e),null);case 22:case 23:return cf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?tn&1073741824&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function jv(n,e){switch(Hc(e),e.tag){case 1:return qt(e.type)&&La(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return os(),qe(Xt),qe(Dt),Qc(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Zc(e),null;case 13:if(qe(Qe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(J(340));rs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return qe(Qe),null;case 4:return os(),null;case 10:return qc(e.type._context),null;case 22:case 23:return cf(),null;case 24:return null;default:return null}}var ko=!1,Rt=!1,Xv=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Wr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){nt(n,e,i)}else t.current=null}function sc(n,e,t){try{t()}catch(i){nt(n,e,i)}}var Md=!1;function qv(n,e){if(Gu=Ca,n=qp(),Vc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Hu={focusedElem:n,selectionRange:t},Ca=!1,ce=e;ce!==null;)if(e=ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ce=n;else for(;ce!==null;){e=ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:Tn(e.type,y),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(x){nt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}return _=Md,Md=!1,_}function Hs(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&sc(e,t,s)}r=r.next}while(r!==i)}}function nl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function oc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Wm(n){var e=n.alternate;e!==null&&(n.alternate=null,Wm(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Bn],delete e[no],delete e[Xu],delete e[Pv],delete e[Lv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jm(n){return n.tag===5||n.tag===3||n.tag===4}function wd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ac(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Pa));else if(i!==4&&(n=n.child,n!==null))for(ac(n,e,t),n=n.sibling;n!==null;)ac(n,e,t),n=n.sibling}function lc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(lc(n,e,t),n=n.sibling;n!==null;)lc(n,e,t),n=n.sibling}var St=null,Cn=!1;function fi(n,e,t){for(t=t.child;t!==null;)Xm(n,e,t),t=t.sibling}function Xm(n,e,t){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount($a,t)}catch{}switch(t.tag){case 5:Rt||Wr(t,e);case 6:var i=St,r=Cn;St=null,fi(n,e,t),St=i,Cn=r,St!==null&&(Cn?(n=St,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):St.removeChild(t.stateNode));break;case 18:St!==null&&(Cn?(n=St,t=t.stateNode,n.nodeType===8?Ul(n.parentNode,t):n.nodeType===1&&Ul(n,t),Zs(n)):Ul(St,t.stateNode));break;case 4:i=St,r=Cn,St=t.stateNode.containerInfo,Cn=!0,fi(n,e,t),St=i,Cn=r;break;case 0:case 11:case 14:case 15:if(!Rt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sc(t,e,o),r=r.next}while(r!==i)}fi(n,e,t);break;case 1:if(!Rt&&(Wr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){nt(t,e,a)}fi(n,e,t);break;case 21:fi(n,e,t);break;case 22:t.mode&1?(Rt=(i=Rt)||t.memoizedState!==null,fi(n,e,t),Rt=i):fi(n,e,t);break;default:fi(n,e,t)}}function Ed(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Xv),e.forEach(function(i){var r=n_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Sn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:St=a.stateNode,Cn=!1;break e;case 3:St=a.stateNode.containerInfo,Cn=!0;break e;case 4:St=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(St===null)throw Error(J(160));Xm(s,o,r),St=null,Cn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){nt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qm(e,n),e=e.sibling}function qm(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Sn(e,n),Nn(n),i&4){try{Hs(3,n,n.return),nl(3,n)}catch(y){nt(n,n.return,y)}try{Hs(5,n,n.return)}catch(y){nt(n,n.return,y)}}break;case 1:Sn(e,n),Nn(n),i&512&&t!==null&&Wr(t,t.return);break;case 5:if(Sn(e,n),Nn(n),i&512&&t!==null&&Wr(t,t.return),n.flags&32){var r=n.stateNode;try{qs(r,"")}catch(y){nt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pp(r,s),Du(a,o);var u=Du(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?xp(r,h):f==="dangerouslySetInnerHTML"?vp(r,h):f==="children"?qs(r,h):bc(r,f,h,u)}switch(a){case"input":Au(r,s);break;case"textarea":mp(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?qr(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?qr(r,!!s.multiple,s.defaultValue,!0):qr(r,!!s.multiple,s.multiple?[]:"",!1))}r[no]=s}catch(y){nt(n,n.return,y)}}break;case 6:if(Sn(e,n),Nn(n),i&4){if(n.stateNode===null)throw Error(J(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){nt(n,n.return,y)}}break;case 3:if(Sn(e,n),Nn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Zs(e.containerInfo)}catch(y){nt(n,n.return,y)}break;case 4:Sn(e,n),Nn(n);break;case 13:Sn(e,n),Nn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lf=st())),i&4&&Ed(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(Rt=(u=Rt)||f,Sn(e,n),Rt=u):Sn(e,n),Nn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!f&&n.mode&1)for(ce=n,f=n.child;f!==null;){for(h=ce=f;ce!==null;){switch(d=ce,p=d.child,d.tag){case 0:case 11:case 14:case 15:Hs(4,d,d.return);break;case 1:Wr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){nt(i,t,y)}}break;case 5:Wr(d,d.return);break;case 22:if(d.memoizedState!==null){Cd(h);continue}}p!==null?(p.return=d,ce=p):Cd(h)}f=f.sibling}e:for(f=null,h=n;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_p("display",o))}catch(y){nt(n,n.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){nt(n,n.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Sn(e,n),Nn(n),i&4&&Ed(n);break;case 21:break;default:Sn(e,n),Nn(n)}}function Nn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(jm(t)){var i=t;break e}t=t.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qs(r,""),i.flags&=-33);var s=wd(n);lc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wd(n);ac(n,a,o);break;default:throw Error(J(161))}}catch(l){nt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function $v(n,e,t){ce=n,$m(n)}function $m(n,e,t){for(var i=(n.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ko;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=ko;var u=Rt;if(ko=o,(Rt=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?Ad(r):l!==null?(l.return=o,ce=l):Ad(r);for(;s!==null;)ce=s,$m(s),s=s.sibling;ce=r,ko=a,Rt=u}Td(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):Td(n)}}function Td(n){for(;ce!==null;){var e=ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||nl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Tn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ld(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ld(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Zs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Rt||e.flags&512&&oc(e)}catch(d){nt(e,e.return,d)}}if(e===n){ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function Cd(n){for(;ce!==null;){var e=ce;if(e===n){ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ce=t;break}ce=e.return}}function Ad(n){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{nl(4,e)}catch(l){nt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){nt(e,r,l)}}var s=e.return;try{oc(e)}catch(l){nt(e,s,l)}break;case 5:var o=e.return;try{oc(e)}catch(l){nt(e,o,l)}}}catch(l){nt(e,e.return,l)}if(e===n){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var Yv=Math.ceil,Ba=ui.ReactCurrentDispatcher,of=ui.ReactCurrentOwner,vn=ui.ReactCurrentBatchConfig,ke=0,xt=null,lt=null,wt=0,tn=0,jr=Fi(0),ft=0,lo=null,ur=0,il=0,af=0,Ws=null,Ht=null,lf=0,ls=1/0,Jn=null,Va=!1,uc=null,bi=null,Fo=!1,Si=null,Ga=0,js=0,cc=null,va=-1,_a=0;function Ot(){return ke&6?st():va!==-1?va:va=st()}function Pi(n){return n.mode&1?ke&2&&wt!==0?wt&-wt:Dv.transition!==null?(_a===0&&(_a=Rp()),_a):(n=Be,n!==0||(n=window.event,n=n===void 0?16:Fp(n.type)),n):1}function Dn(n,e,t,i){if(50<js)throw js=0,cc=null,Error(J(185));po(n,t,i),(!(ke&2)||n!==xt)&&(n===xt&&(!(ke&2)&&(il|=t),ft===4&&xi(n,wt)),$t(n,i),t===1&&ke===0&&!(e.mode&1)&&(ls=st()+500,Ja&&Oi()))}function $t(n,e){var t=n.callbackNode;D0(n,e);var i=Ta(n,n===xt?wt:0);if(i===0)t!==null&&zf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&zf(t),e===1)n.tag===0?Rv(bd.bind(null,n)):im(bd.bind(null,n)),Av(function(){!(ke&6)&&Oi()}),t=null;else{switch(Dp(i)){case 1:t=Ic;break;case 4:t=Pp;break;case 16:t=Ea;break;case 536870912:t=Lp;break;default:t=Ea}t=ng(t,Ym.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ym(n,e){if(va=-1,_a=0,ke&6)throw Error(J(327));var t=n.callbackNode;if(Qr()&&n.callbackNode!==t)return null;var i=Ta(n,n===xt?wt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ha(n,i);else{e=i;var r=ke;ke|=2;var s=Zm();(xt!==n||wt!==e)&&(Jn=null,ls=st()+500,ir(n,e));do try{Qv();break}catch(a){Km(n,a)}while(1);Xc(),Ba.current=s,ke=r,lt!==null?e=0:(xt=null,wt=0,e=ft)}if(e!==0){if(e===2&&(r=ku(n),r!==0&&(i=r,e=fc(n,r))),e===1)throw t=lo,ir(n,0),xi(n,i),$t(n,st()),t;if(e===6)xi(n,i);else{if(r=n.current.alternate,!(i&30)&&!Kv(r)&&(e=Ha(n,i),e===2&&(s=ku(n),s!==0&&(i=s,e=fc(n,s))),e===1))throw t=lo,ir(n,0),xi(n,i),$t(n,st()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:$i(n,Ht,Jn);break;case 3:if(xi(n,i),(i&130023424)===i&&(e=lf+500-st(),10<e)){if(Ta(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Ot(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ju($i.bind(null,n,Ht,Jn),e);break}$i(n,Ht,Jn);break;case 4:if(xi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Rn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=st()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yv(i/1960))-i,10<i){n.timeoutHandle=ju($i.bind(null,n,Ht,Jn),i);break}$i(n,Ht,Jn);break;case 5:$i(n,Ht,Jn);break;default:throw Error(J(329))}}}return $t(n,st()),n.callbackNode===t?Ym.bind(null,n):null}function fc(n,e){var t=Ws;return n.current.memoizedState.isDehydrated&&(ir(n,e).flags|=256),n=Ha(n,e),n!==2&&(e=Ht,Ht=t,e!==null&&dc(e)),n}function dc(n){Ht===null?Ht=n:Ht.push.apply(Ht,n)}function Kv(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!In(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xi(n,e){for(e&=~af,e&=~il,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Rn(e),i=1<<t;n[t]=-1,e&=~i}}function bd(n){if(ke&6)throw Error(J(327));Qr();var e=Ta(n,0);if(!(e&1))return $t(n,st()),null;var t=Ha(n,e);if(n.tag!==0&&t===2){var i=ku(n);i!==0&&(e=i,t=fc(n,i))}if(t===1)throw t=lo,ir(n,0),xi(n,e),$t(n,st()),t;if(t===6)throw Error(J(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,$i(n,Ht,Jn),$t(n,st()),null}function uf(n,e){var t=ke;ke|=1;try{return n(e)}finally{ke=t,ke===0&&(ls=st()+500,Ja&&Oi())}}function cr(n){Si!==null&&Si.tag===0&&!(ke&6)&&Qr();var e=ke;ke|=1;var t=vn.transition,i=Be;try{if(vn.transition=null,Be=1,n)return n()}finally{Be=i,vn.transition=t,ke=e,!(ke&6)&&Oi()}}function cf(){tn=jr.current,qe(jr)}function ir(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Cv(t)),lt!==null)for(t=lt.return;t!==null;){var i=t;switch(Hc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&La();break;case 3:os(),qe(Xt),qe(Dt),Qc();break;case 5:Zc(i);break;case 4:os();break;case 13:qe(Qe);break;case 19:qe(Qe);break;case 10:qc(i.type._context);break;case 22:case 23:cf()}t=t.return}if(xt=n,lt=n=Li(n.current,null),wt=tn=e,ft=0,lo=null,af=il=ur=0,Ht=Ws=null,Ji!==null){for(e=0;e<Ji.length;e++)if(t=Ji[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Ji=null}return n}function Km(n,e){do{var t=lt;try{if(Xc(),pa.current=Oa,Fa){for(var i=Je.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fa=!1}if(lr=0,_t=ct=Je=null,Gs=!1,so=0,of.current=null,t===null||t.return===null){ft=1,lo=e,lt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=md(o);if(p!==null){p.flags&=-257,gd(p,o,a,s,e),p.mode&1&&pd(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){pd(s,u,e),ff();break e}l=Error(J(426))}}else if(Ye&&a.mode&1){var m=md(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),gd(m,o,a,s,e),Wc(as(l,a));break e}}s=l=as(l,a),ft!==4&&(ft=2),Ws===null?Ws=[s]:Ws.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Im(s,l,e);ad(s,c);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(bi===null||!bi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Um(s,a,e);ad(s,x);break e}}s=s.return}while(s!==null)}Jm(t)}catch(w){e=w,lt===t&&t!==null&&(lt=t=t.return);continue}break}while(1)}function Zm(){var n=Ba.current;return Ba.current=Oa,n===null?Oa:n}function ff(){(ft===0||ft===3||ft===2)&&(ft=4),xt===null||!(ur&268435455)&&!(il&268435455)||xi(xt,wt)}function Ha(n,e){var t=ke;ke|=2;var i=Zm();(xt!==n||wt!==e)&&(Jn=null,ir(n,e));do try{Zv();break}catch(r){Km(n,r)}while(1);if(Xc(),ke=t,Ba.current=i,lt!==null)throw Error(J(261));return xt=null,wt=0,ft}function Zv(){for(;lt!==null;)Qm(lt)}function Qv(){for(;lt!==null&&!w0();)Qm(lt)}function Qm(n){var e=tg(n.alternate,n,tn);n.memoizedProps=n.pendingProps,e===null?Jm(n):lt=e,of.current=null}function Jm(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=jv(t,e),t!==null){t.flags&=32767,lt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,lt=null;return}}else if(t=Wv(t,e,tn),t!==null){lt=t;return}if(e=e.sibling,e!==null){lt=e;return}lt=e=n}while(e!==null);ft===0&&(ft=5)}function $i(n,e,t){var i=Be,r=vn.transition;try{vn.transition=null,Be=1,Jv(n,e,t,i)}finally{vn.transition=r,Be=i}return null}function Jv(n,e,t,i){do Qr();while(Si!==null);if(ke&6)throw Error(J(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(I0(n,s),n===xt&&(lt=xt=null,wt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Fo||(Fo=!0,ng(Ea,function(){return Qr(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=Be;Be=1;var a=ke;ke|=4,of.current=null,qv(n,t),qm(t,n),xv(Hu),Ca=!!Gu,Hu=Gu=null,n.current=t,$v(t),E0(),ke=a,Be=o,vn.transition=s}else n.current=t;if(Fo&&(Fo=!1,Si=n,Ga=r),s=n.pendingLanes,s===0&&(bi=null),A0(t.stateNode),$t(n,st()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Va)throw Va=!1,n=uc,uc=null,n;return Ga&1&&n.tag!==0&&Qr(),s=n.pendingLanes,s&1?n===cc?js++:(js=0,cc=n):js=0,Oi(),null}function Qr(){if(Si!==null){var n=Dp(Ga),e=vn.transition,t=Be;try{if(vn.transition=null,Be=16>n?16:n,Si===null)var i=!1;else{if(n=Si,Si=null,Ga=0,ke&6)throw Error(J(331));var r=ke;for(ke|=4,ce=n.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var f=ce;switch(f.tag){case 0:case 11:case 15:Hs(8,f,s)}var h=f.child;if(h!==null)h.return=f,ce=h;else for(;ce!==null;){f=ce;var d=f.sibling,p=f.return;if(Wm(f),f===u){ce=null;break}if(d!==null){d.return=p,ce=d;break}ce=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hs(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ce=c;break e}ce=s.return}}var g=n.current;for(ce=g;ce!==null;){o=ce;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ce=v;else e:for(o=g;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nl(9,a)}}catch(w){nt(a,a.return,w)}if(a===o){ce=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ce=x;break e}ce=a.return}}if(ke=r,Oi(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot($a,n)}catch{}i=!0}return i}finally{Be=t,vn.transition=e}}return!1}function Pd(n,e,t){e=as(t,e),e=Im(n,e,1),n=Ai(n,e,1),e=Ot(),n!==null&&(po(n,1,e),$t(n,e))}function nt(n,e,t){if(n.tag===3)Pd(n,n,t);else for(;e!==null;){if(e.tag===3){Pd(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bi===null||!bi.has(i))){n=as(t,n),n=Um(e,n,1),e=Ai(e,n,1),n=Ot(),e!==null&&(po(e,1,n),$t(e,n));break}}e=e.return}}function e_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Ot(),n.pingedLanes|=n.suspendedLanes&t,xt===n&&(wt&t)===t&&(ft===4||ft===3&&(wt&130023424)===wt&&500>st()-lf?ir(n,0):af|=t),$t(n,e)}function eg(n,e){e===0&&(n.mode&1?(e=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):e=1);var t=Ot();n=ai(n,e),n!==null&&(po(n,e,t),$t(n,t))}function t_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),eg(n,t)}function n_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),eg(n,t)}var tg;tg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Xt.current)jt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return jt=!1,Hv(n,e,t);jt=!!(n.flags&131072)}else jt=!1,Ye&&e.flags&1048576&&rm(e,Ia,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ga(n,e),n=e.pendingProps;var r=is(e,Dt.current);Zr(e,t),r=ef(null,e,i,n,r,t);var s=tf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(i)?(s=!0,Ra(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yc(e),r.updater=el,e.stateNode=r,r._reactInternals=e,Qu(e,i,n,t),e=tc(null,e,i,!0,s,t)):(e.tag=0,Ye&&s&&Gc(e),zt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ga(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=r_(i),n=Tn(i,n),r){case 0:e=ec(null,e,i,n,t);break e;case 1:e=xd(null,e,i,n,t);break e;case 11:e=vd(null,e,i,n,t);break e;case 14:e=_d(null,e,i,Tn(i.type,n),t);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),ec(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),xd(n,e,i,r,t);case 3:e:{if(Fm(e),n===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,lm(n,e),za(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=as(Error(J(423)),e),e=yd(n,e,i,t,r);break e}else if(i!==r){r=as(Error(J(424)),e),e=yd(n,e,i,t,r);break e}else for(nn=Ci(e.stateNode.containerInfo.firstChild),rn=e,Ye=!0,An=null,t=dm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(rs(),i===r){e=li(n,e,t);break e}zt(n,e,i,t)}e=e.child}return e;case 5:return hm(e),n===null&&Yu(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Wu(i,r)?o=null:s!==null&&Wu(i,s)&&(e.flags|=32),km(n,e),zt(n,e,o,t),e.child;case 6:return n===null&&Yu(e),null;case 13:return Om(n,e,t);case 4:return Kc(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ss(e,null,i,t):zt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),vd(n,e,i,r,t);case 7:return zt(n,e,e.pendingProps,t),e.child;case 8:return zt(n,e,e.pendingProps.children,t),e.child;case 12:return zt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,He(Ua,i._currentValue),i._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===r.children&&!Xt.current){e=li(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ii(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ku(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ku(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zr(e,t),r=_n(r),i=i(r),e.flags|=1,zt(n,e,i,t),e.child;case 14:return i=e.type,r=Tn(i,e.pendingProps),r=Tn(i.type,r),_d(n,e,i,r,t);case 15:return Nm(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),ga(n,e),e.tag=1,qt(i)?(n=!0,Ra(e)):n=!1,Zr(e,t),cm(e,i,r),Qu(e,i,r,t),tc(null,e,i,!0,n,t);case 19:return Bm(n,e,t);case 22:return zm(n,e,t)}throw Error(J(156,e.tag))};function ng(n,e){return bp(n,e)}function i_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,e,t,i){return new i_(n,e,t,i)}function df(n){return n=n.prototype,!(!n||!n.isReactComponent)}function r_(n){if(typeof n=="function")return df(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Lc)return 11;if(n===Rc)return 14}return 2}function Li(n,e){var t=n.alternate;return t===null?(t=gn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function xa(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")df(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Nr:return rr(t.children,r,s,e);case Pc:o=8,r|=8;break;case Mu:return n=gn(12,t,e,r|2),n.elementType=Mu,n.lanes=s,n;case wu:return n=gn(13,t,e,r),n.elementType=wu,n.lanes=s,n;case Eu:return n=gn(19,t,e,r),n.elementType=Eu,n.lanes=s,n;case fp:return rl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case up:o=10;break e;case cp:o=9;break e;case Lc:o=11;break e;case Rc:o=14;break e;case gi:o=16,i=null;break e}throw Error(J(130,n==null?n:typeof n,""))}return e=gn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function rr(n,e,t,i){return n=gn(7,n,i,e),n.lanes=t,n}function rl(n,e,t,i){return n=gn(22,n,i,e),n.elementType=fp,n.lanes=t,n.stateNode={isHidden:!1},n}function Gl(n,e,t){return n=gn(6,n,null,e),n.lanes=t,n}function Hl(n,e,t){return e=gn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function s_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hf(n,e,t,i,r,s,o,a,l){return n=new s_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(s),n}function o_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ig(n){if(!n)return Ui;n=n._reactInternals;e:{if(mr(n)!==n||n.tag!==1)throw Error(J(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(n.tag===1){var t=n.type;if(qt(t))return nm(n,t,e)}return e}function rg(n,e,t,i,r,s,o,a,l){return n=hf(t,i,!0,n,r,s,o,a,l),n.context=ig(null),t=n.current,i=Ot(),r=Pi(t),s=ii(i,r),s.callback=e??null,Ai(t,s,r),n.current.lanes=r,po(n,r,i),$t(n,i),n}function sl(n,e,t,i){var r=e.current,s=Ot(),o=Pi(r);return t=ig(t),e.context===null?e.context=t:e.pendingContext=t,e=ii(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ai(r,e,o),n!==null&&(Dn(n,r,o,s),ha(n,r,o)),o}function Wa(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ld(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function pf(n,e){Ld(n,e),(n=n.alternate)&&Ld(n,e)}function a_(){return null}var sg=typeof reportError=="function"?reportError:function(n){console.error(n)};function mf(n){this._internalRoot=n}ol.prototype.render=mf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(J(409));sl(n,e,null,null)};ol.prototype.unmount=mf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;cr(function(){sl(null,n,null,null)}),e[oi]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var e=Np();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_i.length&&e!==0&&e<_i[t].priority;t++);_i.splice(t,0,n),t===0&&kp(n)}};function gf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rd(){}function l_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Wa(o);s.call(u)}}var o=rg(e,i,n,0,null,!1,!1,"",Rd);return n._reactRootContainer=o,n[oi]=o.current,eo(n.nodeType===8?n.parentNode:n),cr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Wa(l);a.call(u)}}var l=hf(n,0,!1,null,null,!1,!1,"",Rd);return n._reactRootContainer=l,n[oi]=l.current,eo(n.nodeType===8?n.parentNode:n),cr(function(){sl(e,l,t,i)}),l}function ll(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Wa(o);a.call(l)}}sl(e,o,n,r)}else o=l_(t,e,n,r,i);return Wa(o)}Ip=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Is(e.pendingLanes);t!==0&&(Uc(e,t|1),$t(e,st()),!(ke&6)&&(ls=st()+500,Oi()))}break;case 13:cr(function(){var i=ai(n,1);if(i!==null){var r=Ot();Dn(i,n,1,r)}}),pf(n,1)}};Nc=function(n){if(n.tag===13){var e=ai(n,134217728);if(e!==null){var t=Ot();Dn(e,n,134217728,t)}pf(n,134217728)}};Up=function(n){if(n.tag===13){var e=Pi(n),t=ai(n,e);if(t!==null){var i=Ot();Dn(t,n,e,i)}pf(n,e)}};Np=function(){return Be};zp=function(n,e){var t=Be;try{return Be=n,e()}finally{Be=t}};Uu=function(n,e,t){switch(e){case"input":if(Au(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Qa(i);if(!r)throw Error(J(90));hp(i),Au(i,r)}}}break;case"textarea":mp(n,t);break;case"select":e=t.value,e!=null&&qr(n,!!t.multiple,e,!1)}};Mp=uf;wp=cr;var u_={usingClientEntryPoint:!1,Events:[go,Or,Qa,yp,Sp,uf]},Cs={findFiberByHostInstance:Qi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},c_={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cp(n),n===null?null:n.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||a_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{$a=Oo.inject(c_),Hn=Oo}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u_;ln.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gf(e))throw Error(J(200));return o_(n,e,null,t)};ln.createRoot=function(n,e){if(!gf(n))throw Error(J(299));var t=!1,i="",r=sg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hf(n,1,!1,null,null,t,!1,i,r),n[oi]=e.current,eo(n.nodeType===8?n.parentNode:n),new mf(e)};ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=Cp(e),n=n===null?null:n.stateNode,n};ln.flushSync=function(n){return cr(n)};ln.hydrate=function(n,e,t){if(!al(e))throw Error(J(200));return ll(null,n,e,!0,t)};ln.hydrateRoot=function(n,e,t){if(!gf(n))throw Error(J(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=sg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=rg(e,null,n,1,t??null,r,!1,s,o),n[oi]=e.current,eo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new ol(e)};ln.render=function(n,e,t){if(!al(e))throw Error(J(200));return ll(null,n,e,!1,t)};ln.unmountComponentAtNode=function(n){if(!al(n))throw Error(J(40));return n._reactRootContainer?(cr(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[oi]=null})}),!0):!1};ln.unstable_batchedUpdates=uf;ln.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!al(t))throw Error(J(200));if(n==null||n._reactInternals===void 0)throw Error(J(38));return ll(n,e,t,!1,i)};ln.version="18.2.0-next-9e3b772b8-20220608";function og(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(og)}catch(n){console.error(n)}}og(),rp.exports=ln;var f_=rp.exports,Dd=f_;yu.createRoot=Dd.createRoot,yu.hydrateRoot=Dd.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vf="151",d_=0,Id=1,h_=2,ag=1,p_=2,Ns=3,Ni=0,Yt=1,Vn=2,Ri=0,Jr=1,Ud=2,Nd=3,zd=4,m_=5,Ir=100,g_=101,v_=102,kd=103,Fd=104,__=200,x_=201,y_=202,S_=203,lg=204,ug=205,M_=206,w_=207,E_=208,T_=209,C_=210,A_=0,b_=1,P_=2,hc=3,L_=4,R_=5,D_=6,I_=7,cg=0,U_=1,N_=2,ri=0,z_=1,k_=2,F_=3,O_=4,B_=5,fg=300,us=301,cs=302,pc=303,mc=304,ul=306,gc=1e3,Pn=1001,vc=1002,kt=1003,Od=1004,Wl=1005,pn=1006,V_=1007,uo=1008,fr=1009,G_=1010,H_=1011,dg=1012,W_=1013,tr=1014,nr=1015,co=1016,j_=1017,X_=1018,es=1020,q_=1021,Ln=1023,$_=1024,Y_=1025,sr=1026,fs=1027,K_=1028,Z_=1029,Q_=1030,J_=1031,ex=1033,jl=33776,Xl=33777,ql=33778,$l=33779,Bd=35840,Vd=35841,Gd=35842,Hd=35843,tx=36196,Wd=37492,jd=37496,Xd=37808,qd=37809,$d=37810,Yd=37811,Kd=37812,Zd=37813,Qd=37814,Jd=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,Yl=36492,nx=36283,oh=36284,ah=36285,lh=36286,dr=3e3,Xe=3001,ix=3200,rx=3201,sx=0,ox=1,Fn="srgb",fo="srgb-linear",hg="display-p3",Kl=7680,ax=519,uh=35044,ch="300 es",_c=1035;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=Math.PI/180,xc=180/Math.PI;function _o(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function lx(n,e){return(n%e+e)%e}function Ql(n,e,t){return(1-t)*n+t*e}function fh(n){return(n&n-1)===0&&n!==0}function ux(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bo(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],c=r[6],g=r[1],v=r[4],x=r[7],w=r[2],A=r[5],b=r[8];return s[0]=o*y+a*g+l*w,s[3]=o*m+a*v+l*A,s[6]=o*c+a*x+l*b,s[1]=u*y+f*g+h*w,s[4]=u*m+f*v+h*A,s[7]=u*c+f*x+h*b,s[2]=d*y+p*g+_*w,s[5]=d*m+p*v+_*A,s[8]=d*c+p*x+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,p=u*s-o*l,_=t*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(f*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-u*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jl.makeScale(e,t)),this}rotate(e){return this.premultiply(Jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jl=new Ue;function pg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function eu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const cx=new Ue().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fx=new Ue().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dx(n){return n.convertSRGBToLinear().applyMatrix3(fx)}function hx(n){return n.applyMatrix3(cx).convertLinearToSRGB()}const px={[fo]:n=>n,[Fn]:n=>n.convertSRGBToLinear(),[hg]:dx},mx={[fo]:n=>n,[Fn]:n=>n.convertLinearToSRGB(),[hg]:hx},Qt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return fo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=px[e],r=mx[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let vr;class mg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=ja("canvas")),vr.width=e.width,vr.height=e.height;const i=vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ts(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ts(t[i]/255)*255):t[i]=ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class gg{constructor(e=null){this.isSource=!0,this.uuid=_o(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tu(r[o].image)):s.push(tu(r[o]))}else s=tu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function tu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gx=0;class sn extends gs{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=Pn,r=Pn,s=pn,o=uo,a=Ln,l=fr,u=sn.DEFAULT_ANISOTROPY,f=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=_o(),this.name="",this.source=new gg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gc:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gc:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=fg;sn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,x=(p+1)/2,w=(c+1)/2,A=(f+d)/4,b=(h+y)/4,P=(_+m)/4;return v>x&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=b/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=P/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-y)/g,this.z=(d-f)/g,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hr extends gs{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vg extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vx extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(h!==y||l!==d||u!==p||f!==_){let m=1-a;const c=l*d+u*p+f*_+h*y,g=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const w=Math.sqrt(v),A=Math.atan2(w,c*g);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const x=a*g;if(l=l*m+d*x,u=u*m+p*x,f=f*m+_*x,h=h*m+y*x,m===1-a){const w=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=w,u*=w,f*=w,h*=w}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+f*h+l*p-u*d,e[t+1]=l*_+f*d+u*h-a*p,e[t+2]=u*_+f*p+a*d-l*h,e[t+3]=f*_-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*p*_,this._y=u*p*h-d*f*_,this._z=u*f*_+d*p*h,this._w=u*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+u*p*_,this._y=u*p*h-d*f*_,this._z=u*f*_-d*p*h,this._w=u*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-u*p*_,this._y=u*p*h+d*f*_,this._z=u*f*_+d*p*h,this._w=u*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-u*p*_,this._y=u*p*h+d*f*_,this._z=u*f*_-d*p*h,this._w=u*f*h+d*p*_;break;case"YZX":this._x=d*f*h+u*p*_,this._y=u*p*h+d*f*_,this._z=u*f*_-d*p*h,this._w=u*f*h-d*p*_;break;case"XZY":this._x=d*f*h-u*p*_,this._y=u*p*h-d*f*_,this._z=u*f*_+d*p*h,this._w=u*f*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],f=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-t)*f)/u,d=Math.sin(t*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,f=l*i+a*t-s*r,h=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=u*l+d*-s+f*-a-h*-o,this.y=f*l+d*-o+h*-s-u*-a,this.z=h*l+d*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nu=new N,dh=new xo;class yo{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox),_r.applyMatrix4(e.matrixWorld),this.union(_r);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)$n.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint($n)}else r.boundingBox===null&&r.computeBoundingBox(),_r.copy(r.boundingBox),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Vo.subVectors(this.max,As),xr.subVectors(e.a,As),yr.subVectors(e.b,As),Sr.subVectors(e.c,As),di.subVectors(yr,xr),hi.subVectors(Sr,yr),Wi.subVectors(xr,Sr);let t=[0,-di.z,di.y,0,-hi.z,hi.y,0,-Wi.z,Wi.y,di.z,0,-di.x,hi.z,0,-hi.x,Wi.z,0,-Wi.x,-di.y,di.x,0,-hi.y,hi.x,0,-Wi.y,Wi.x,0];return!iu(t,xr,yr,Sr,Vo)||(t=[1,0,0,0,1,0,0,0,1],!iu(t,xr,yr,Sr,Vo))?!1:(Go.crossVectors(di,hi),t=[Go.x,Go.y,Go.z],iu(t,xr,yr,Sr,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new N,new N,new N,new N,new N,new N,new N,new N],$n=new N,_r=new yo,xr=new N,yr=new N,Sr=new N,di=new N,hi=new N,Wi=new N,As=new N,Vo=new N,Go=new N,ji=new N;function iu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ji.fromArray(n,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),u=t.dot(ji),f=i.dot(ji);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const _x=new yo,bs=new N,ru=new N;class _f{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_x.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(ru)),this.expandByPoint(bs.copy(e.center).sub(ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new N,su=new N,Ho=new N,pi=new N,ou=new N,Wo=new N,au=new N;class xx{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){su.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(su);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ho),a=pi.dot(this.direction),l=-pi.dot(Ho),u=pi.lengthSq(),f=Math.abs(1-o*o);let h,d,p,_;if(f>0)if(h=o*l-a,d=o*a-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const y=1/f;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(su).addScaledVector(Ho,d),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,r,s){ou.subVectors(t,e),Wo.subVectors(i,e),au.crossVectors(ou,Wo);let o=this.direction.dot(au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(Wo.crossVectors(pi,Wo));if(l<0)return null;const u=a*this.direction.dot(ou.cross(pi));if(u<0||l+u>o)return null;const f=-a*pi.dot(au);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,f,h,d,p,_,y,m){const c=this.elements;return c[0]=e,c[4]=t,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=p,c[7]=_,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,_=a*f,y=a*h;t[0]=l*f,t[4]=-l*h,t[8]=u,t[1]=p+_*u,t[5]=d-y*u,t[9]=-a*l,t[2]=y-d*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,_=u*f,y=u*h;t[0]=d+y*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=p*a-_,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,_=u*f,y=u*h;t[0]=d-y*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*f,t[9]=y-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,_=a*f,y=a*h;t[0]=l*f,t[4]=_*u-p,t[8]=d*u+y,t[1]=l*h,t[5]=y*u+d,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,y=a*u;t[0]=l*f,t[4]=y-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=p*h+_,t[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,y=a*u;t[0]=l*f,t[4]=-h,t[8]=u*f,t[1]=d*h+y,t[5]=o*f,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*f,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yx,e,Sx)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),mi.crossVectors(i,Jt),mi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),mi.crossVectors(i,Jt)),mi.normalize(),jo.crossVectors(Jt,mi),r[0]=mi.x,r[4]=jo.x,r[8]=Jt.x,r[1]=mi.y,r[5]=jo.y,r[9]=Jt.y,r[2]=mi.z,r[6]=jo.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],c=i[14],g=i[3],v=i[7],x=i[11],w=i[15],A=r[0],b=r[4],P=r[8],M=r[12],T=r[1],Y=r[5],$=r[9],I=r[13],z=r[2],W=r[6],te=r[10],Z=r[14],R=r[3],B=r[7],F=r[11],ue=r[15];return s[0]=o*A+a*T+l*z+u*R,s[4]=o*b+a*Y+l*W+u*B,s[8]=o*P+a*$+l*te+u*F,s[12]=o*M+a*I+l*Z+u*ue,s[1]=f*A+h*T+d*z+p*R,s[5]=f*b+h*Y+d*W+p*B,s[9]=f*P+h*$+d*te+p*F,s[13]=f*M+h*I+d*Z+p*ue,s[2]=_*A+y*T+m*z+c*R,s[6]=_*b+y*Y+m*W+c*B,s[10]=_*P+y*$+m*te+c*F,s[14]=_*M+y*I+m*Z+c*ue,s[3]=g*A+v*T+x*z+w*R,s[7]=g*b+v*Y+x*W+w*B,s[11]=g*P+v*$+x*te+w*F,s[15]=g*M+v*I+x*Z+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],c=e[15];return _*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*f-s*l*f)+m*(+t*u*h-t*a*p-s*o*h+i*o*p+s*a*f-i*u*f)+c*(-r*a*f-t*l*h+t*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],c=e[15],g=h*m*u-y*d*u+y*l*p-a*m*p-h*l*c+a*d*c,v=_*d*u-f*m*u-_*l*p+o*m*p+f*l*c-o*d*c,x=f*y*u-_*h*u+_*a*p-o*y*p-f*a*c+o*h*c,w=_*h*l-f*y*l-_*a*d+o*y*d+f*a*m-o*h*m,A=t*g+i*v+r*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=g*b,e[1]=(y*d*s-h*m*s-y*r*p+i*m*p+h*r*c-i*d*c)*b,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*c+i*l*c)*b,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*b,e[4]=v*b,e[5]=(f*m*s-_*d*s+_*r*p-t*m*p-f*r*c+t*d*c)*b,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*c-t*l*c)*b,e[7]=(o*d*s-f*l*s+f*r*u-t*d*u-o*r*p+t*l*p)*b,e[8]=x*b,e[9]=(_*h*s-f*y*s-_*i*p+t*y*p+f*i*c-t*h*c)*b,e[10]=(o*y*s-_*a*s+_*i*u-t*y*u-o*i*c+t*a*c)*b,e[11]=(f*a*s-o*h*s-f*i*u+t*h*u+o*i*p-t*a*p)*b,e[12]=w*b,e[13]=(f*y*r-_*h*r+_*i*d-t*y*d-f*i*m+t*h*m)*b,e[14]=(_*a*r-o*y*r-_*i*l+t*y*l+o*i*m-t*a*m)*b,e[15]=(o*h*r-f*a*r+f*i*l-t*h*l-o*i*d+t*a*d)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,f=o+o,h=a+a,d=s*u,p=s*f,_=s*h,y=o*f,m=o*h,c=a*h,g=l*u,v=l*f,x=l*h,w=i.x,A=i.y,b=i.z;return r[0]=(1-(y+c))*w,r[1]=(p+x)*w,r[2]=(_-v)*w,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(d+c))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(_+v)*b,r[9]=(m-g)*b,r[10]=(1-(d+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const u=1/s,f=1/o,h=1/a;return Mn.elements[0]*=u,Mn.elements[1]*=u,Mn.elements[2]*=u,Mn.elements[4]*=f,Mn.elements[5]*=f,Mn.elements[6]*=f,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*l,d=(i+r)*u,p=(o+s)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mr=new N,Mn=new Et,yx=new N(0,0,0),Sx=new N(1,1,1),mi=new N,jo=new N,Jt=new N,hh=new Et,ph=new xo;class cl{constructor(e=0,t=0,i=0,r=cl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ph.setFromEuler(this),this.setFromQuaternion(ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cl.DEFAULT_ORDER="XYZ";class _g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mx=0;const mh=new N,wr=new xo,Kn=new Et,Xo=new N,Ps=new N,wx=new N,Ex=new xo,gh=new N(1,0,0),vh=new N(0,1,0),_h=new N(0,0,1),Tx={type:"added"},xh={type:"removed"};class on extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new N,t=new cl,i=new xo,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ue}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(gh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return mh.copy(e).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xo.copy(e):Xo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ps,Xo,this.up):Kn.lookAt(Xo,Ps,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Kn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new N(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new N,Zn=new N,lu=new N,Qn=new N,Er=new N,Tr=new N,yh=new N,uu=new N,cu=new N,fu=new N;let qo=!1;class bn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wn.subVectors(e,t),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){wn.subVectors(r,t),Zn.subVectors(i,t),lu.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Zn),l=wn.dot(lu),u=Zn.dot(Zn),f=Zn.dot(lu),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(u*l-a*f)*d,_=(o*f-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn),Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,t,i,r,s,o,a,l){return qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qo=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Qn),l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l}static isFrontFacing(e,t,i,r){return wn.subVectors(i,t),Zn.subVectors(e,t),wn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qo=!0),bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Er.subVectors(r,i),Tr.subVectors(s,i),uu.subVectors(e,i);const l=Er.dot(uu),u=Tr.dot(uu);if(l<=0&&u<=0)return t.copy(i);cu.subVectors(e,r);const f=Er.dot(cu),h=Tr.dot(cu);if(f>=0&&h<=f)return t.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Er,o);fu.subVectors(e,s);const p=Er.dot(fu),_=Tr.dot(fu);if(_>=0&&p<=_)return t.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Tr,a);const m=f*_-p*h;if(m<=0&&h-f>=0&&p-_>=0)return yh.subVectors(s,r),a=(h-f)/(h-f+(p-_)),t.copy(r).addScaledVector(yh,a);const c=1/(m+y+d);return o=y*c,a=d*c,t.copy(i).addScaledVector(Er,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cx=0;class fl extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=Jr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lg,this.blendDst=ug,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kl,this.stencilZFail=Kl,this.stencilZPass=Kl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},$o={h:0,s:0,l:0};function du(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qt.workingColorSpace){if(e=lx(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=du(o,s,e+1/3),this.g=du(o,s,e),this.b=du(o,s,e-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(e,t=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Qt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Qt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,f,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=xg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=eu(e.r),this.g=eu(e.g),this.b=eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Qt.fromWorkingColorSpace(Lt.copy(this),e),Wt(Lt.r*255,0,255)<<16^Wt(Lt.g*255,0,255)<<8^Wt(Lt.b*255,0,255)<<0}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Fn){Qt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(En),En.h+=e,En.s+=t,En.l+=i,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(En),e.getHSL($o);const i=Ql(En.h,$o.h,t),r=Ql(En.s,$o.s,t),s=Ql(En.l,$o.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ke;Ke.NAMES=xg;class yg extends fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new N,Yo=new $e;class jn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Sg extends jn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mg extends jn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xn extends jn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ax=0;const fn=new Et,hu=new on,Cr=new N,en=new yo,Ls=new yo,vt=new N;class Bi extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?Mg:Sg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _f);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(en.min,Ls.min),en.expandByPoint(vt),vt.addVectors(en.max,Ls.max),en.expandByPoint(vt)):(en.expandByPoint(Ls.min),en.expandByPoint(Ls.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)vt.fromBufferAttribute(a,u),l&&(Cr.fromBufferAttribute(e,u),vt.add(Cr)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let T=0;T<a;T++)u[T]=new N,f[T]=new N;const h=new N,d=new N,p=new N,_=new $e,y=new $e,m=new $e,c=new N,g=new N;function v(T,Y,$){h.fromArray(r,T*3),d.fromArray(r,Y*3),p.fromArray(r,$*3),_.fromArray(o,T*2),y.fromArray(o,Y*2),m.fromArray(o,$*2),d.sub(h),p.sub(h),y.sub(_),m.sub(_);const I=1/(y.x*m.y-m.x*y.y);isFinite(I)&&(c.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(I),g.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(I),u[T].add(c),u[Y].add(c),u[$].add(c),f[T].add(g),f[Y].add(g),f[$].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,Y=x.length;T<Y;++T){const $=x[T],I=$.start,z=$.count;for(let W=I,te=I+z;W<te;W+=3)v(i[W+0],i[W+1],i[W+2])}const w=new N,A=new N,b=new N,P=new N;function M(T){b.fromArray(s,T*3),P.copy(b);const Y=u[T];w.copy(Y),w.sub(b.multiplyScalar(b.dot(Y))).normalize(),A.crossVectors(P,Y);const I=A.dot(f[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=I}for(let T=0,Y=x.length;T<Y;++T){const $=x[T],I=$.start,z=$.count;for(let W=I,te=I+z;W<te;W+=3)M(i[W+0]),M(i[W+1]),M(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,f=new N,h=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let c=0;c<f;c++)d[_++]=u[p++]}return new jn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sh=new Et,zn=new xx,Ko=new _f,Mh=new N,Ar=new N,br=new N,Pr=new N,pu=new N,Zo=new N,Qo=new $e,Jo=new $e,ea=new $e,wh=new N,Eh=new N,Th=new N,ta=new N,na=new N;class Gn extends on{constructor(e=new Bi,t=new yg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(pu.fromBufferAttribute(h,e),o?Zo.addScaledVector(pu,f):Zo.addScaledVector(pu.sub(t),f))}t.add(Zo)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),zn.copy(e.ray).recast(e.near),Ko.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Ko,Mh)===null||zn.origin.distanceToSquared(Mh)>(e.far-e.near)**2))||(Sh.copy(s).invert(),zn.copy(e.ray).applyMatrix4(Sh),i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,f=i.attributes.uv2,h=i.attributes.normal,d=i.groups,p=i.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,y=d.length;_<y;_++){const m=d[_],c=r[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,w=v;x<w;x+=3){const A=a.getX(x),b=a.getX(x+1),P=a.getX(x+2);o=ia(this,c,e,zn,u,f,h,A,b,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,c=y;m<c;m+=3){const g=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);o=ia(this,r,e,zn,u,f,h,g,v,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,y=d.length;_<y;_++){const m=d[_],c=r[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,w=v;x<w;x+=3){const A=x,b=x+1,P=x+2;o=ia(this,c,e,zn,u,f,h,A,b,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,c=y;m<c;m+=3){const g=m,v=m+1,x=m+2;o=ia(this,r,e,zn,u,f,h,g,v,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function bx(n,e,t,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;na.copy(a),na.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(na);return u<t.near||u>t.far?null:{distance:u,point:na.clone(),object:n}}function ia(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ar),n.getVertexPosition(l,br),n.getVertexPosition(u,Pr);const f=bx(n,e,t,i,Ar,br,Pr,ta);if(f){r&&(Qo.fromBufferAttribute(r,a),Jo.fromBufferAttribute(r,l),ea.fromBufferAttribute(r,u),f.uv=bn.getInterpolation(ta,Ar,br,Pr,Qo,Jo,ea,new $e)),s&&(Qo.fromBufferAttribute(s,a),Jo.fromBufferAttribute(s,l),ea.fromBufferAttribute(s,u),f.uv2=bn.getInterpolation(ta,Ar,br,Pr,Qo,Jo,ea,new $e)),o&&(wh.fromBufferAttribute(o,a),Eh.fromBufferAttribute(o,l),Th.fromBufferAttribute(o,u),f.normal=bn.getInterpolation(ta,Ar,br,Pr,wh,Eh,Th,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new N,materialIndex:0};bn.getNormal(Ar,br,Pr,h.normal),f.face=h}return f}class So extends Bi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xn(u,3)),this.setAttribute("normal",new Xn(f,3)),this.setAttribute("uv",new Xn(h,2));function _(y,m,c,g,v,x,w,A,b,P,M){const T=x/b,Y=w/P,$=x/2,I=w/2,z=A/2,W=b+1,te=P+1;let Z=0,R=0;const B=new N;for(let F=0;F<te;F++){const ue=F*Y-I;for(let K=0;K<W;K++){const O=K*T-$;B[y]=O*g,B[m]=ue*v,B[c]=z,u.push(B.x,B.y,B.z),B[y]=0,B[m]=0,B[c]=A>0?1:-1,f.push(B.x,B.y,B.z),h.push(K/b),h.push(1-F/P),Z+=1}}for(let F=0;F<P;F++)for(let ue=0;ue<b;ue++){const K=d+ue+W*F,O=d+ue+W*(F+1),q=d+(ue+1)+W*(F+1),re=d+(ue+1)+W*F;l.push(K,O,re),l.push(O,q,re),R+=6}a.addGroup(p,R,M),p+=R,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=ds(n[t]);for(const r in i)e[r]=i[r]}return e}function Px(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wg(n){return n.getRenderTarget()===null&&n.outputEncoding===Xe?Fn:fo}const Lx={clone:ds,merge:Nt};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Eg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mn extends Eg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=-90,Rr=1;class Ix extends on{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new mn(Lr,Rr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new mn(Lr,Rr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new mn(Lr,Rr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new mn(Lr,Rr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new mn(Lr,Rr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new mn(Lr,Rr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,f=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(f),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Tg extends sn{constructor(e,t,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ux extends hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new So(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Ri});s.uniforms.tEquirect.value=t;const o=new Gn(r,s),a=t.minFilter;return t.minFilter===uo&&(t.minFilter=pn),new Ix(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const mu=new N,Nx=new N,zx=new Ue;class Yi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=mu.subVectors(i,t).cross(Nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zx.getNormalMatrix(e),r=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new _f,ra=new N;class Cg{constructor(e=new Yi,t=new Yi,i=new Yi,r=new Yi,s=new Yi,o=new Yi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],f=i[6],h=i[7],d=i[8],p=i[9],_=i[10],y=i[11],m=i[12],c=i[13],g=i[14],v=i[15];return t[0].setComponents(a-r,h-l,y-d,v-m).normalize(),t[1].setComponents(a+r,h+l,y+d,v+m).normalize(),t[2].setComponents(a+s,h+u,y+p,v+c).normalize(),t[3].setComponents(a-s,h-u,y-p,v-c).normalize(),t[4].setComponents(a-o,h-f,y-_,v-g).normalize(),t[5].setComponents(a+o,h+f,y+_,v+g).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ra.x=r.normal.x>0?e.max.x:e.min.x,ra.y=r.normal.y>0?e.max.y:e.min.y,ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ag(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function kx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,p=n.createBuffer();n.bindBuffer(f,p),n.bufferData(f,h,d),u.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,h){const d=f.array,p=f.updateRange;n.bindBuffer(h,u),p.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(n.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(s(h.buffer,u,f),h.version=u.version)}return{get:o,remove:a,update:l}}class xf extends Bi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=t/l,p=[],_=[],y=[],m=[];for(let c=0;c<f;c++){const g=c*d-o;for(let v=0;v<u;v++){const x=v*h-s;_.push(x,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const v=g+u*c,x=g+u*(c+1),w=g+1+u*(c+1),A=g+1+u*c;p.push(v,x,A),p.push(x,w,A)}this.setIndex(p),this.setAttribute("position",new Xn(_,3)),this.setAttribute("normal",new Xn(y,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wx="vec3 transformed = vec3( position );",jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",fy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,py=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,My=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ay=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Py=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Iy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ky=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,b1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,P1=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L1=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R1=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,O1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,V1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,j1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,fS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:Fx,alphamap_pars_fragment:Ox,alphatest_fragment:Bx,alphatest_pars_fragment:Vx,aomap_fragment:Gx,aomap_pars_fragment:Hx,begin_vertex:Wx,beginnormal_vertex:jx,bsdfs:Xx,iridescence_fragment:qx,bumpmap_pars_fragment:$x,clipping_planes_fragment:Yx,clipping_planes_pars_fragment:Kx,clipping_planes_pars_vertex:Zx,clipping_planes_vertex:Qx,color_fragment:Jx,color_pars_fragment:ey,color_pars_vertex:ty,color_vertex:ny,common:iy,cube_uv_reflection_fragment:ry,defaultnormal_vertex:sy,displacementmap_pars_vertex:oy,displacementmap_vertex:ay,emissivemap_fragment:ly,emissivemap_pars_fragment:uy,encodings_fragment:cy,encodings_pars_fragment:fy,envmap_fragment:dy,envmap_common_pars_fragment:hy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ay,envmap_vertex:gy,fog_vertex:vy,fog_pars_vertex:_y,fog_fragment:xy,fog_pars_fragment:yy,gradientmap_pars_fragment:Sy,lightmap_fragment:My,lightmap_pars_fragment:wy,lights_lambert_fragment:Ey,lights_lambert_pars_fragment:Ty,lights_pars_begin:Cy,lights_toon_fragment:by,lights_toon_pars_fragment:Py,lights_phong_fragment:Ly,lights_phong_pars_fragment:Ry,lights_physical_fragment:Dy,lights_physical_pars_fragment:Iy,lights_fragment_begin:Uy,lights_fragment_maps:Ny,lights_fragment_end:zy,logdepthbuf_fragment:ky,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:By,map_fragment:Vy,map_pars_fragment:Gy,map_particle_fragment:Hy,map_particle_pars_fragment:Wy,metalnessmap_fragment:jy,metalnessmap_pars_fragment:Xy,morphcolor_vertex:qy,morphnormal_vertex:$y,morphtarget_pars_vertex:Yy,morphtarget_vertex:Ky,normal_fragment_begin:Zy,normal_fragment_maps:Qy,normal_pars_fragment:Jy,normal_pars_vertex:e1,normal_vertex:t1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:o1,output_fragment:a1,packing:l1,premultiplied_alpha_fragment:u1,project_vertex:c1,dithering_fragment:f1,dithering_pars_fragment:d1,roughnessmap_fragment:h1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:g1,shadowmap_vertex:v1,shadowmask_pars_fragment:_1,skinbase_vertex:x1,skinning_pars_vertex:y1,skinning_vertex:S1,skinnormal_vertex:M1,specularmap_fragment:w1,specularmap_pars_fragment:E1,tonemapping_fragment:T1,tonemapping_pars_fragment:C1,transmission_fragment:A1,transmission_pars_fragment:b1,uv_pars_fragment:P1,uv_pars_vertex:L1,uv_vertex:R1,worldpos_vertex:D1,background_vert:I1,background_frag:U1,backgroundCube_vert:N1,backgroundCube_frag:z1,cube_vert:k1,cube_frag:F1,depth_vert:O1,depth_frag:B1,distanceRGBA_vert:V1,distanceRGBA_frag:G1,equirect_vert:H1,equirect_frag:W1,linedashed_vert:j1,linedashed_frag:X1,meshbasic_vert:q1,meshbasic_frag:$1,meshlambert_vert:Y1,meshlambert_frag:K1,meshmatcap_vert:Z1,meshmatcap_frag:Q1,meshnormal_vert:J1,meshnormal_frag:eS,meshphong_vert:tS,meshphong_frag:nS,meshphysical_vert:iS,meshphysical_frag:rS,meshtoon_vert:sS,meshtoon_frag:oS,points_vert:aS,points_frag:lS,shadow_vert:uS,shadow_frag:cS,sprite_vert:fS,sprite_frag:dS},ie={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaTest:{value:0}}},On={basic:{uniforms:Nt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Nt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Nt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Nt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Nt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Nt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Nt([ie.points,ie.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Nt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Nt([ie.common,ie.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Nt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Nt([ie.sprite,ie.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Nt([ie.common,ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Nt([ie.lights,ie.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};On.physical={uniforms:Nt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const sa={r:0,b:0,g:0};function hS(n,e,t,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,u,f,h=null,d=0,p=null;function _(m,c){let g=!1,v=c.isScene===!0?c.background:null;v&&v.isTexture&&(v=(c.backgroundBlurriness>0?t:e).get(v));const x=n.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?y(a,l):v&&v.isColor&&(y(v,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ul)?(f===void 0&&(f=new Gn(new So(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:ds(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=v.encoding!==Xe,(h!==v||d!==v.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,h=v,d=v.version,p=n.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Gn(new xf(2,2),new zi({name:"BackgroundMaterial",uniforms:ds(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=v.encoding!==Xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,c){m.getRGB(sa,wg(n)),i.buffers.color.setClear(sa.r,sa.g,sa.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function pS(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,f=!1;function h(z,W,te,Z,R){let B=!1;if(o){const F=y(Z,te,W);u!==F&&(u=F,p(u.object)),B=c(z,Z,te,R),B&&g(z,Z,te,R)}else{const F=W.wireframe===!0;(u.geometry!==Z.id||u.program!==te.id||u.wireframe!==F)&&(u.geometry=Z.id,u.program=te.id,u.wireframe=F,B=!0)}R!==null&&t.update(R,34963),(B||f)&&(f=!1,P(z,W,te,Z),R!==null&&n.bindBuffer(34963,t.get(R).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function y(z,W,te){const Z=te.wireframe===!0;let R=a[z.id];R===void 0&&(R={},a[z.id]=R);let B=R[W.id];B===void 0&&(B={},R[W.id]=B);let F=B[Z];return F===void 0&&(F=m(d()),B[Z]=F),F}function m(z){const W=[],te=[],Z=[];for(let R=0;R<r;R++)W[R]=0,te[R]=0,Z[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:te,attributeDivisors:Z,object:z,attributes:{},index:null}}function c(z,W,te,Z){const R=u.attributes,B=W.attributes;let F=0;const ue=te.getAttributes();for(const K in ue)if(ue[K].location>=0){const q=R[K];let re=B[K];if(re===void 0&&(K==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),K==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;F++}return u.attributesNum!==F||u.index!==Z}function g(z,W,te,Z){const R={},B=W.attributes;let F=0;const ue=te.getAttributes();for(const K in ue)if(ue[K].location>=0){let q=B[K];q===void 0&&(K==="instanceMatrix"&&z.instanceMatrix&&(q=z.instanceMatrix),K==="instanceColor"&&z.instanceColor&&(q=z.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),R[K]=re,F++}u.attributes=R,u.attributesNum=F,u.index=Z}function v(){const z=u.newAttributes;for(let W=0,te=z.length;W<te;W++)z[W]=0}function x(z){w(z,0)}function w(z,W){const te=u.newAttributes,Z=u.enabledAttributes,R=u.attributeDivisors;te[z]=1,Z[z]===0&&(n.enableVertexAttribArray(z),Z[z]=1),R[z]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,W),R[z]=W)}function A(){const z=u.newAttributes,W=u.enabledAttributes;for(let te=0,Z=W.length;te<Z;te++)W[te]!==z[te]&&(n.disableVertexAttribArray(te),W[te]=0)}function b(z,W,te,Z,R,B){i.isWebGL2===!0&&(te===5124||te===5125)?n.vertexAttribIPointer(z,W,te,R,B):n.vertexAttribPointer(z,W,te,Z,R,B)}function P(z,W,te,Z){if(i.isWebGL2===!1&&(z.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const R=Z.attributes,B=te.getAttributes(),F=W.defaultAttributeValues;for(const ue in B){const K=B[ue];if(K.location>=0){let O=R[ue];if(O===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(O=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(O=z.instanceColor)),O!==void 0){const q=O.normalized,re=O.itemSize,oe=t.get(O);if(oe===void 0)continue;const k=oe.buffer,Ce=oe.type,Ee=oe.bytesPerElement;if(O.isInterleavedBufferAttribute){const se=O.data,Se=se.stride,Fe=O.offset;if(se.isInstancedInterleavedBuffer){for(let ge=0;ge<K.locationSize;ge++)w(K.location+ge,se.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<K.locationSize;ge++)x(K.location+ge);n.bindBuffer(34962,k);for(let ge=0;ge<K.locationSize;ge++)b(K.location+ge,re/K.locationSize,Ce,q,Se*Ee,(Fe+re/K.locationSize*ge)*Ee)}else{if(O.isInstancedBufferAttribute){for(let se=0;se<K.locationSize;se++)w(K.location+se,O.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let se=0;se<K.locationSize;se++)x(K.location+se);n.bindBuffer(34962,k);for(let se=0;se<K.locationSize;se++)b(K.location+se,re/K.locationSize,Ce,q,re*Ee,re/K.locationSize*se*Ee)}}else if(F!==void 0){const q=F[ue];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(K.location,q);break;case 3:n.vertexAttrib3fv(K.location,q);break;case 4:n.vertexAttrib4fv(K.location,q);break;default:n.vertexAttrib1fv(K.location,q)}}}}A()}function M(){$();for(const z in a){const W=a[z];for(const te in W){const Z=W[te];for(const R in Z)_(Z[R].object),delete Z[R];delete W[te]}delete a[z]}}function T(z){if(a[z.id]===void 0)return;const W=a[z.id];for(const te in W){const Z=W[te];for(const R in Z)_(Z[R].object),delete Z[R];delete W[te]}delete a[z.id]}function Y(z){for(const W in a){const te=a[W];if(te[z.id]===void 0)continue;const Z=te[z.id];for(const R in Z)_(Z[R].object),delete Z[R];delete te[z.id]}}function $(){I(),f=!0,u!==l&&(u=l,p(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:x,disableUnusedAttributes:A}}function mS(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,f,h),t.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function gS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),d=n.getParameter(35660),p=n.getParameter(3379),_=n.getParameter(34076),y=n.getParameter(34921),m=n.getParameter(36347),c=n.getParameter(36348),g=n.getParameter(36349),v=d>0,x=o||e.has("OES_texture_float"),w=v&&x,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:A}}function vS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Yi,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,c=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?f(null):u();else{const g=s?0:i,v=g*4;let x=c.clippingState||null;l.value=x,x=f(_,d,v,p);for(let w=0;w!==v;++w)x[w]=t[w];c.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const c=p+y*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function _S(n){let e=new WeakMap;function t(o,a){return a===pc?o.mapping=us:a===mc&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===pc||a===mc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Ux(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class xS extends Eg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,Ch=[.125,.215,.35,.446,.526,.582],Zi=20,gu=new xS,Ah=new Ke;let vu=null;const Ki=(1+Math.sqrt(5))/2,Dr=1/Ki,bh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ki,Dr),new N(0,Ki,-Dr),new N(Dr,0,Ki),new N(-Dr,0,Ki),new N(Ki,Dr,0),new N(-Ki,Dr,0)];class Ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){vu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vu),e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:co,format:Ln,encoding:dr,depthBuffer:!1},r=Lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yS(s)),this._blurMaterial=SS(s,e,t)}return r}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,gu)}_sceneToCubeUV(e,t,i,r){const a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Ah),f.toneMapping=ri,f.autoClear=!1;const p=new yg({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new Gn(new So,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Ah),y=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const v=this._cubeSize;oa(r,g*v,c>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===us||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;oa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,gu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bh[(r-1)%bh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Gn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):Zi;m>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const c=[];let g=0;for(let b=0;b<Zi;++b){const P=b/y,M=Math.exp(-P*P/2);c.push(M),b===0?g+=M:b<m&&(g+=2*M)}for(let b=0;b<c.length;b++)c[b]=c[b]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const x=this._sizeLods[r],w=3*x*(r>v-Xr?r-v+Xr:0),A=4*(this._cubeSize-x);oa(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(h,gu)}}function yS(n){const e=[],t=[],i=[];let r=n;const s=n-Xr+1+Ch.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Xr?l=Ch[o-n+Xr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,y=3,m=2,c=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),x=new Float32Array(c*_*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,P=A>2?0:-1,M=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];g.set(M,y*_*A),v.set(d,m*_*A);const T=[A,A,A,A,A,A];x.set(T,c*_*A)}const w=new Bi;w.setAttribute("position",new jn(g,y)),w.setAttribute("uv",new jn(v,m)),w.setAttribute("faceIndex",new jn(x,c)),e.push(w),r>Xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lh(n,e,t){const i=new hr(n,e,t);return i.texture.mapping=ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function SS(n,e,t){const i=new Float32Array(Zi),r=new N(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Rh(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Dh(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function yf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===pc||l===mc,f=l===us||l===cs;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ph(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){t===null&&(t=new Ph(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ES(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],34962);const p=h.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,c=y.length;m<c;m++)e.update(y[m],34962)}}function u(h){const d=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,x=g.length;v<x;v+=3){const w=g[v+0],A=g[v+1],b=g[v+2];d.push(w,A,A,b,b,w)}}else{const g=_.array;y=_.version;for(let v=0,x=g.length/3-1;v<x;v+=3){const w=v+0,A=v+1,b=v+2;d.push(w,A,A,b,b,w)}}const m=new(pg(d)?Mg:Sg)(d,1);m.version=y;const c=s.get(h);c&&e.remove(c),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function TS(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function f(d,p){n.drawElements(s,p,a,d*l),t.update(p,s,1)}function h(d,p,_){if(_===0)return;let y,m;if(r)y=n,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](s,p,a,d*l,_),t.update(p,s,_)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h}function CS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AS(n,e){return n[0]-e[0]}function bS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function PS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Mt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(f);if(m===void 0||m.count!==y){let W=function(){I.dispose(),s.delete(f),f.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const v=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),w===!0&&(M=3);let T=f.attributes.position.count*M,Y=1;T>e.maxTextureSize&&(Y=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*Y*4*y),I=new vg($,T,Y,y);I.type=nr,I.needsUpdate=!0;const z=M*4;for(let te=0;te<y;te++){const Z=A[te],R=b[te],B=P[te],F=T*Y*4*te;for(let ue=0;ue<Z.count;ue++){const K=ue*z;v===!0&&(o.fromBufferAttribute(Z,ue),$[F+K+0]=o.x,$[F+K+1]=o.y,$[F+K+2]=o.z,$[F+K+3]=0),x===!0&&(o.fromBufferAttribute(R,ue),$[F+K+4]=o.x,$[F+K+5]=o.y,$[F+K+6]=o.z,$[F+K+7]=0),w===!0&&(o.fromBufferAttribute(B,ue),$[F+K+8]=o.x,$[F+K+9]=o.y,$[F+K+10]=o.z,$[F+K+11]=B.itemSize===4?o.w:1)}}m={count:y,texture:I,size:new $e(T,Y)},s.set(f,m),f.addEventListener("dispose",W)}let c=0;for(let v=0;v<d.length;v++)c+=d[v];const g=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[f.id]=y}for(let x=0;x<_;x++){const w=y[x];w[0]=x,w[1]=d[x]}y.sort(bS);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(AS);const m=f.morphAttributes.position,c=f.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const w=a[x],A=w[0],b=w[1];A!==Number.MAX_SAFE_INTEGER&&b?(m&&f.getAttribute("morphTarget"+x)!==m[A]&&f.setAttribute("morphTarget"+x,m[A]),c&&f.getAttribute("morphNormal"+x)!==c[A]&&f.setAttribute("morphNormal"+x,c[A]),r[x]=b,g+=b):(m&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),c&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),r[x]=0)}const v=f.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function LS(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);return r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const bg=new sn,Pg=new vg,Lg=new vx,Rg=new Tg,Ih=[],Uh=[],Nh=new Float32Array(16),zh=new Float32Array(9),kh=new Float32Array(4);function vs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ih[r];if(s===void 0&&(s=new Float32Array(r),Ih[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dl(n,e){let t=Uh[e];t===void 0&&(t=new Int32Array(e),Uh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function RS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function DS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function IS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function US(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function NS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,i))return;kh.set(i),n.uniformMatrix2fv(this.addr,!1,kh),ht(t,i)}}function zS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,i))return;zh.set(i),n.uniformMatrix3fv(this.addr,!1,zh),ht(t,i)}}function kS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,i))return;Nh.set(i),n.uniformMatrix4fv(this.addr,!1,Nh),ht(t,i)}}function FS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),ht(t,e)}}function BS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),ht(t,e)}}function VS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),ht(t,e)}}function GS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),ht(t,e)}}function WS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),ht(t,e)}}function jS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),ht(t,e)}}function XS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||bg,r)}function qS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Lg,r)}function $S(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rg,r)}function YS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pg,r)}function KS(n){switch(n){case 5126:return RS;case 35664:return DS;case 35665:return IS;case 35666:return US;case 35674:return NS;case 35675:return zS;case 35676:return kS;case 5124:case 35670:return FS;case 35667:case 35671:return OS;case 35668:case 35672:return BS;case 35669:case 35673:return VS;case 5125:return GS;case 36294:return HS;case 36295:return WS;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return YS}}function ZS(n,e){n.uniform1fv(this.addr,e)}function QS(n,e){const t=vs(e,this.size,2);n.uniform2fv(this.addr,t)}function JS(n,e){const t=vs(e,this.size,3);n.uniform3fv(this.addr,t)}function eM(n,e){const t=vs(e,this.size,4);n.uniform4fv(this.addr,t)}function tM(n,e){const t=vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nM(n,e){const t=vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iM(n,e){const t=vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rM(n,e){n.uniform1iv(this.addr,e)}function sM(n,e){n.uniform2iv(this.addr,e)}function oM(n,e){n.uniform3iv(this.addr,e)}function aM(n,e){n.uniform4iv(this.addr,e)}function lM(n,e){n.uniform1uiv(this.addr,e)}function uM(n,e){n.uniform2uiv(this.addr,e)}function cM(n,e){n.uniform3uiv(this.addr,e)}function fM(n,e){n.uniform4uiv(this.addr,e)}function dM(n,e,t){const i=this.cache,r=e.length,s=dl(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bg,s[o])}function hM(n,e,t){const i=this.cache,r=e.length,s=dl(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Lg,s[o])}function pM(n,e,t){const i=this.cache,r=e.length,s=dl(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rg,s[o])}function mM(n,e,t){const i=this.cache,r=e.length,s=dl(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pg,s[o])}function gM(n){switch(n){case 5126:return ZS;case 35664:return QS;case 35665:return JS;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return uM;case 36295:return cM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}class vM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=KS(t.type)}}class _M{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=gM(t.type)}}class xM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const _u=/(\w+)(\])?(\[|\.)?/g;function Fh(n,e){n.seq.push(e),n.map[e.id]=e}function yM(n,e,t){const i=n.name,r=i.length;for(_u.lastIndex=0;;){const s=_u.exec(i),o=_u.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Fh(t,u===void 0?new vM(a,n,e):new _M(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new xM(a),Fh(t,h)),t=h}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);yM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Oh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let SM=0;function MM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function wM(n){switch(n){case dr:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Bh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+MM(n.getShaderSource(e),o)}else return r}function EM(n,e){const t=wM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function TM(n,e){let t;switch(e){case z_:t="Linear";break;case k_:t="Reinhard";break;case F_:t="OptimizedCineon";break;case O_:t="ACESFilmic";break;case B_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function CM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function AM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zs(n){return n!==""}function Vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(PM,LM)}function LM(n,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yc(t)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(n){return n.replace(RM,DM)}function DM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ag?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ns&&(e="SHADOWMAP_TYPE_VSM"),e}function UM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case cs:e="ENVMAP_TYPE_CUBE";break;case ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function zM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cg:e="ENVMAP_BLENDING_MULTIPLY";break;case U_:e="ENVMAP_BLENDING_MIX";break;case N_:e="ENVMAP_BLENDING_ADD";break}return e}function kM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function FM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IM(t),u=UM(t),f=NM(t),h=zM(t),d=kM(t),p=t.isWebGL2?"":CM(t),_=AM(s),y=r.createProgram();let m,c,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(zs).join(`
`),m.length>0&&(m+=`
`),c=[p,_].filter(zs).join(`
`),c.length>0&&(c+=`
`)):(m=[Wh(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),c=[p,Wh(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?be.tonemapping_pars_fragment:"",t.toneMapping!==ri?TM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,EM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=yc(o),o=Vh(o,t),o=Gh(o,t),a=yc(a),a=Vh(a,t),a=Gh(a,t),o=Hh(o),a=Hh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=g+m+o,x=g+c+a,w=Oh(r,35633,v),A=Oh(r,35632,x);if(r.attachShader(y,w),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(y).trim(),T=r.getShaderInfoLog(w).trim(),Y=r.getShaderInfoLog(A).trim();let $=!0,I=!0;if(r.getProgramParameter(y,35714)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,w,A);else{const z=Bh(r,w,"vertex"),W=Bh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,35715)+`

Program Info Log: `+M+`
`+z+`
`+W)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||Y==="")&&(I=!1);I&&(this.diagnostics={runnable:$,programLog:M,vertexShader:{log:T,prefix:m},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(w),r.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new ya(r,y)),b};let P;return this.getAttributes=function(){return P===void 0&&(P=bM(r,y)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=A,this}let OM=0;class BM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VM(e),t.set(e,i)),i}}class VM{constructor(e){this.id=OM++,this.code=e,this.usedTimes=0}}function GM(n,e,t,i,r,s,o){const a=new _g,l=new BM,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===1?"uv2":"uv"}function m(M,T,Y,$,I){const z=$.fog,W=I.geometry,te=M.isMeshStandardMaterial?$.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),R=Z&&Z.mapping===ul?Z.image.height:null,B=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const F=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=F!==void 0?F.length:0;let K=0;W.morphAttributes.position!==void 0&&(K=1),W.morphAttributes.normal!==void 0&&(K=2),W.morphAttributes.color!==void 0&&(K=3);let O,q,re,oe;if(B){const le=On[B];O=le.vertexShader,q=le.fragmentShader}else O=M.vertexShader,q=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),oe=l.getFragmentShaderID(M);const k=n.getRenderTarget(),Ce=I.isInstancedMesh===!0,Ee=!!M.map,se=!!M.matcap,Se=!!Z,Fe=!!M.aoMap,ge=!!M.lightMap,Re=!!M.bumpMap,pt=!!M.normalMap,yt=!!M.displacementMap,mt=!!M.emissiveMap,ut=!!M.metalnessMap,Oe=!!M.roughnessMap,tt=M.clearcoat>0,Gt=M.iridescence>0,C=M.sheen>0,S=M.transmission>0,V=tt&&!!M.clearcoatMap,ee=tt&&!!M.clearcoatNormalMap,ne=tt&&!!M.clearcoatRoughnessMap,ae=Gt&&!!M.iridescenceMap,Me=Gt&&!!M.iridescenceThicknessMap,de=C&&!!M.sheenColorMap,j=C&&!!M.sheenRoughnessMap,he=!!M.specularMap,ve=!!M.specularColorMap,ye=!!M.specularIntensityMap,fe=S&&!!M.transmissionMap,pe=S&&!!M.thicknessMap,Ne=!!M.gradientMap,Ve=!!M.alphaMap,it=M.alphaTest>0,L=!!M.extensions,H=!!W.attributes.uv2;return{isWebGL2:f,shaderID:B,shaderName:M.type,vertexShader:O,fragmentShader:q,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Ce,instancingColor:Ce&&I.instanceColor!==null,supportsVertexTextures:d,outputEncoding:k===null?n.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:dr,map:Ee,matcap:se,envMap:Se,envMapMode:Se&&Z.mapping,envMapCubeUVHeight:R,aoMap:Fe,lightMap:ge,bumpMap:Re,normalMap:pt,displacementMap:d&&yt,emissiveMap:mt,normalMapObjectSpace:pt&&M.normalMapType===ox,normalMapTangentSpace:pt&&M.normalMapType===sx,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&M.map.encoding===Xe,metalnessMap:ut,roughnessMap:Oe,clearcoat:tt,clearcoatMap:V,clearcoatNormalMap:ee,clearcoatRoughnessMap:ne,iridescence:Gt,iridescenceMap:ae,iridescenceThicknessMap:Me,sheen:C,sheenColorMap:de,sheenRoughnessMap:j,specularMap:he,specularColorMap:ve,specularIntensityMap:ye,transmission:S,transmissionMap:fe,thicknessMap:pe,gradientMap:Ne,opaque:M.transparent===!1&&M.blending===Jr,alphaMap:Ve,alphaTest:it,combine:M.combine,mapUv:Ee&&y(M.map.channel),aoMapUv:Fe&&y(M.aoMap.channel),lightMapUv:ge&&y(M.lightMap.channel),bumpMapUv:Re&&y(M.bumpMap.channel),normalMapUv:pt&&y(M.normalMap.channel),displacementMapUv:yt&&y(M.displacementMap.channel),emissiveMapUv:mt&&y(M.emissiveMap.channel),metalnessMapUv:ut&&y(M.metalnessMap.channel),roughnessMapUv:Oe&&y(M.roughnessMap.channel),clearcoatMapUv:V&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:j&&y(M.sheenRoughnessMap.channel),specularMapUv:he&&y(M.specularMap.channel),specularColorMapUv:ve&&y(M.specularColorMap.channel),specularIntensityMapUv:ye&&y(M.specularIntensityMap.channel),transmissionMapUv:fe&&y(M.transmissionMap.channel),thicknessMapUv:pe&&y(M.thicknessMap.channel),alphaMapUv:Ve&&y(M.alphaMap.channel),vertexTangents:pt&&!!W.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUvs2:H,pointsUvs:I.isPoints===!0&&!!W.attributes.uv&&(Ee||Ve),fog:!!z,useFog:M.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:ri,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vn,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:L&&M.extensions.derivatives===!0,extensionFragDepth:L&&M.extensions.fragDepth===!0,extensionDrawBuffers:L&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)T.push(Y),T.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(g(T,M),v(T,M),T.push(n.outputEncoding)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputEncoding),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUvs2&&a.enable(13),T.vertexTangents&&a.enable(14),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.decodeVideoTexture&&a.enable(17),T.opaque&&a.enable(18),T.pointsUvs&&a.enable(19),M.push(a.mask)}function x(M){const T=_[M.type];let Y;if(T){const $=On[T];Y=Lx.clone($.uniforms)}else Y=M.uniforms;return Y}function w(M,T){let Y;for(let $=0,I=u.length;$<I;$++){const z=u[$];if(z.cacheKey===T){Y=z,++Y.usedTimes;break}}return Y===void 0&&(Y=new FM(n,T,M,s),u.push(Y)),Y}function A(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:P}}function HM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function WM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,_,y,m){let c=n[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},n[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=p,c.groupOrder=_,c.renderOrder=h.renderOrder,c.z=y,c.group=m),e++,c}function a(h,d,p,_,y,m){const c=o(h,d,p,_,y,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):t.push(c)}function l(h,d,p,_,y,m){const c=o(h,d,p,_,y,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):t.unshift(c)}function u(h,d){t.length>1&&t.sort(h||WM),i.length>1&&i.sort(d||jh),r.length>1&&r.sort(d||jh)}function f(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function jM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xh,n.set(i,[o])):r>=s.length?(o=new Xh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ke};break;case"SpotLight":t={position:new N,direction:new N,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function qM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $M=0;function YM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KM(n,e){const t=new XM,i=qM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new N);const s=new N,o=new Et,a=new Et;function l(f,h){let d=0,p=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,m=0,c=0,g=0,v=0,x=0,w=0,A=0,b=0,P=0;f.sort(YM);const M=h===!0?Math.PI:1;for(let Y=0,$=f.length;Y<$;Y++){const I=f[Y],z=I.color,W=I.intensity,te=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=z.r*W*M,p+=z.g*W*M,_+=z.b*W*M;else if(I.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(I.sh.coefficients[R],W);else if(I.isDirectionalLight){const R=t.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const B=I.shadow,F=i.get(I);F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,r.directionalShadow[y]=F,r.directionalShadowMap[y]=Z,r.directionalShadowMatrix[y]=I.shadow.matrix,x++}r.directional[y]=R,y++}else if(I.isSpotLight){const R=t.get(I);R.position.setFromMatrixPosition(I.matrixWorld),R.color.copy(z).multiplyScalar(W*M),R.distance=te,R.coneCos=Math.cos(I.angle),R.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),R.decay=I.decay,r.spot[c]=R;const B=I.shadow;if(I.map&&(r.spotLightMap[b]=I.map,b++,B.updateMatrices(I),I.castShadow&&P++),r.spotLightMatrix[c]=B.matrix,I.castShadow){const F=i.get(I);F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,r.spotShadow[c]=F,r.spotShadowMap[c]=Z,A++}c++}else if(I.isRectAreaLight){const R=t.get(I);R.color.copy(z).multiplyScalar(W),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=R,g++}else if(I.isPointLight){const R=t.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity*M),R.distance=I.distance,R.decay=I.decay,I.castShadow){const B=I.shadow,F=i.get(I);F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,F.shadowCameraNear=B.camera.near,F.shadowCameraFar=B.camera.far,r.pointShadow[m]=F,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=I.shadow.matrix,w++}r.point[m]=R,m++}else if(I.isHemisphereLight){const R=t.get(I);R.skyColor.copy(I.color).multiplyScalar(W*M),R.groundColor.copy(I.groundColor).multiplyScalar(W*M),r.hemi[v]=R,v++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==y||T.pointLength!==m||T.spotLength!==c||T.rectAreaLength!==g||T.hemiLength!==v||T.numDirectionalShadows!==x||T.numPointShadows!==w||T.numSpotShadows!==A||T.numSpotMaps!==b)&&(r.directional.length=y,r.spot.length=c,r.rectArea.length=g,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+b-P,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=P,T.directionalLength=y,T.pointLength=m,T.spotLength=c,T.rectAreaLength=g,T.hemiLength=v,T.numDirectionalShadows=x,T.numPointShadows=w,T.numSpotShadows=A,T.numSpotMaps=b,r.version=$M++)}function u(f,h){let d=0,p=0,_=0,y=0,m=0;const c=h.matrixWorldInverse;for(let g=0,v=f.length;g<v;g++){const x=f[g];if(x.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),d++}else if(x.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(c),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),_++}else if(x.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(c),a.identity(),o.copy(x.matrixWorld),o.premultiply(c),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(c),p++}else if(x.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:r}}function qh(n,e){const t=new KM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function ZM(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new qh(n,e),t.set(s,[l])):o>=a.length?(l=new qh(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class QM extends fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JM extends fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nw(n,e,t){let i=new Cg;const r=new $e,s=new $e,o=new Mt,a=new QM({depthPacking:rx}),l=new JM,u={},f=t.maxTextureSize,h={[Ni]:Yt,[Yt]:Ni,[Vn]:Vn},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:ew,fragmentShader:tw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Bi;_.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Gn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ag,this.render=function(x,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const b=n.getRenderTarget(),P=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),T=n.state;T.setBlending(Ri),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let Y=0,$=x.length;Y<$;Y++){const I=x[Y],z=I.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const W=z.getFrameExtents();if(r.multiply(W),s.copy(z.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/W.x),r.x=s.x*W.x,z.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/W.y),r.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null){const Z=this.type!==Ns?{minFilter:kt,magFilter:kt}:{};z.map=new hr(r.x,r.y,Z),z.map.texture.name=I.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const te=z.getViewportCount();for(let Z=0;Z<te;Z++){const R=z.getViewport(Z);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),T.viewport(o),z.updateMatrices(I,Z),i=z.getFrustum(),v(w,A,z.camera,I,this.type)}z.isPointLightShadow!==!0&&this.type===Ns&&c(z,A),z.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(b,P,M)};function c(x,w){const A=e.update(y);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new hr(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(w,null,A,d,y,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(w,null,A,p,y,null)}function g(x,w,A,b){let P=null;const M=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(M!==void 0)P=M;else if(P=A.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const T=P.uuid,Y=w.uuid;let $=u[T];$===void 0&&($={},u[T]=$);let I=$[Y];I===void 0&&(I=P.clone(),$[Y]=I),P=I}if(P.visible=w.visible,P.wireframe=w.wireframe,b===Ns?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:h[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const T=n.properties.get(P);T.light=A}return P}function v(x,w,A,b,P){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&P===Ns)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const Y=e.update(x),$=x.material;if(Array.isArray($)){const I=Y.groups;for(let z=0,W=I.length;z<W;z++){const te=I[z],Z=$[te.materialIndex];if(Z&&Z.visible){const R=g(x,Z,b,P);n.renderBufferDirect(A,null,Y,R,x,te)}}}else if($.visible){const I=g(x,$,b,P);n.renderBufferDirect(A,null,Y,I,x,null)}}const T=x.children;for(let Y=0,$=T.length;Y<$;Y++)v(T[Y],w,A,b,P)}}function iw(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const H=new Mt;let Q=null;const le=new Mt(0,0,0,0);return{setMask:function(me){Q!==me&&!L&&(n.colorMask(me,me,me,me),Q=me)},setLocked:function(me){L=me},setClear:function(me,We,Ze,Ct,ci){ci===!0&&(me*=Ct,We*=Ct,Ze*=Ct),H.set(me,We,Ze,Ct),le.equals(H)===!1&&(n.clearColor(me,We,Ze,Ct),le.copy(H))},reset:function(){L=!1,Q=null,le.set(-1,0,0,0)}}}function s(){let L=!1,H=null,Q=null,le=null;return{setTest:function(me){me?k(2929):Ce(2929)},setMask:function(me){H!==me&&!L&&(n.depthMask(me),H=me)},setFunc:function(me){if(Q!==me){switch(me){case A_:n.depthFunc(512);break;case b_:n.depthFunc(519);break;case P_:n.depthFunc(513);break;case hc:n.depthFunc(515);break;case L_:n.depthFunc(514);break;case R_:n.depthFunc(518);break;case D_:n.depthFunc(516);break;case I_:n.depthFunc(517);break;default:n.depthFunc(515)}Q=me}},setLocked:function(me){L=me},setClear:function(me){le!==me&&(n.clearDepth(me),le=me)},reset:function(){L=!1,H=null,Q=null,le=null}}}function o(){let L=!1,H=null,Q=null,le=null,me=null,We=null,Ze=null,Ct=null,ci=null;return{setTest:function(rt){L||(rt?k(2960):Ce(2960))},setMask:function(rt){H!==rt&&!L&&(n.stencilMask(rt),H=rt)},setFunc:function(rt,cn,Un){(Q!==rt||le!==cn||me!==Un)&&(n.stencilFunc(rt,cn,Un),Q=rt,le=cn,me=Un)},setOp:function(rt,cn,Un){(We!==rt||Ze!==cn||Ct!==Un)&&(n.stencilOp(rt,cn,Un),We=rt,Ze=cn,Ct=Un)},setLocked:function(rt){L=rt},setClear:function(rt){ci!==rt&&(n.clearStencil(rt),ci=rt)},reset:function(){L=!1,H=null,Q=null,le=null,me=null,We=null,Ze=null,Ct=null,ci=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,y=[],m=null,c=!1,g=null,v=null,x=null,w=null,A=null,b=null,P=null,M=!1,T=null,Y=null,$=null,I=null,z=null;const W=n.getParameter(35661);let te=!1,Z=0;const R=n.getParameter(7938);R.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(R)[1]),te=Z>=1):R.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),te=Z>=2);let B=null,F={};const ue=n.getParameter(3088),K=n.getParameter(2978),O=new Mt().fromArray(ue),q=new Mt().fromArray(K);function re(L,H,Q){const le=new Uint8Array(4),me=n.createTexture();n.bindTexture(L,me),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let We=0;We<Q;We++)n.texImage2D(H+We,0,6408,1,1,0,6408,5121,le);return me}const oe={};oe[3553]=re(3553,3553,1),oe[34067]=re(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),k(2929),l.setFunc(hc),yt(!1),mt(Id),k(2884),Re(Ri);function k(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Ce(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Ee(L,H){return p[L]!==H?(n.bindFramebuffer(L,H),p[L]=H,i&&(L===36009&&(p[36160]=H),L===36160&&(p[36009]=H)),!0):!1}function se(L,H){let Q=y,le=!1;if(L)if(Q=_.get(H),Q===void 0&&(Q=[],_.set(H,Q)),L.isWebGLMultipleRenderTargets){const me=L.texture;if(Q.length!==me.length||Q[0]!==36064){for(let We=0,Ze=me.length;We<Ze;We++)Q[We]=36064+We;Q.length=me.length,le=!0}}else Q[0]!==36064&&(Q[0]=36064,le=!0);else Q[0]!==1029&&(Q[0]=1029,le=!0);le&&(t.isWebGL2?n.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Se(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const Fe={[Ir]:32774,[g_]:32778,[v_]:32779};if(i)Fe[kd]=32775,Fe[Fd]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Fe[kd]=L.MIN_EXT,Fe[Fd]=L.MAX_EXT)}const ge={[__]:0,[x_]:1,[y_]:768,[lg]:770,[C_]:776,[E_]:774,[M_]:772,[S_]:769,[ug]:771,[T_]:775,[w_]:773};function Re(L,H,Q,le,me,We,Ze,Ct){if(L===Ri){c===!0&&(Ce(3042),c=!1);return}if(c===!1&&(k(3042),c=!0),L!==m_){if(L!==g||Ct!==M){if((v!==Ir||A!==Ir)&&(n.blendEquation(32774),v=Ir,A=Ir),Ct)switch(L){case Jr:n.blendFuncSeparate(1,771,1,771);break;case Ud:n.blendFunc(1,1);break;case Nd:n.blendFuncSeparate(0,769,0,1);break;case zd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Jr:n.blendFuncSeparate(770,771,1,771);break;case Ud:n.blendFunc(770,1);break;case Nd:n.blendFuncSeparate(0,769,0,1);break;case zd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,w=null,b=null,P=null,g=L,M=Ct}return}me=me||H,We=We||Q,Ze=Ze||le,(H!==v||me!==A)&&(n.blendEquationSeparate(Fe[H],Fe[me]),v=H,A=me),(Q!==x||le!==w||We!==b||Ze!==P)&&(n.blendFuncSeparate(ge[Q],ge[le],ge[We],ge[Ze]),x=Q,w=le,b=We,P=Ze),g=L,M=!1}function pt(L,H){L.side===Vn?Ce(2884):k(2884);let Q=L.side===Yt;H&&(Q=!Q),yt(Q),L.blending===Jr&&L.transparent===!1?Re(Ri):Re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const le=L.stencilWrite;u.setTest(le),le&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?k(32926):Ce(32926)}function yt(L){T!==L&&(L?n.frontFace(2304):n.frontFace(2305),T=L)}function mt(L){L!==d_?(k(2884),L!==Y&&(L===Id?n.cullFace(1029):L===h_?n.cullFace(1028):n.cullFace(1032))):Ce(2884),Y=L}function ut(L){L!==$&&(te&&n.lineWidth(L),$=L)}function Oe(L,H,Q){L?(k(32823),(I!==H||z!==Q)&&(n.polygonOffset(H,Q),I=H,z=Q)):Ce(32823)}function tt(L){L?k(3089):Ce(3089)}function Gt(L){L===void 0&&(L=33984+W-1),B!==L&&(n.activeTexture(L),B=L)}function C(L,H,Q){Q===void 0&&(B===null?Q=33984+W-1:Q=B);let le=F[Q];le===void 0&&(le={type:void 0,texture:void 0},F[Q]=le),(le.type!==L||le.texture!==H)&&(B!==Q&&(n.activeTexture(Q),B=Q),n.bindTexture(L,H||oe[L]),le.type=L,le.texture=H)}function S(){const L=F[B];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){O.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),O.copy(L))}function pe(L){q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Ne(L,H){let Q=h.get(H);Q===void 0&&(Q=new WeakMap,h.set(H,Q));let le=Q.get(L);le===void 0&&(le=n.getUniformBlockIndex(H,L.name),Q.set(L,le))}function Ve(L,H){const le=h.get(H).get(L);f.get(H)!==le&&(n.uniformBlockBinding(H,le,L.__bindingPointIndex),f.set(H,le))}function it(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},B=null,F={},p={},_=new WeakMap,y=[],m=null,c=!1,g=null,v=null,x=null,w=null,A=null,b=null,P=null,M=!1,T=null,Y=null,$=null,I=null,z=null,O.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:k,disable:Ce,bindFramebuffer:Ee,drawBuffers:se,useProgram:Se,setBlending:Re,setMaterial:pt,setFlipSided:yt,setCullFace:mt,setLineWidth:ut,setPolygonOffset:Oe,setScissorTest:tt,activeTexture:Gt,bindTexture:C,unbindTexture:S,compressedTexImage2D:V,compressedTexImage3D:ee,texImage2D:ve,texImage3D:ye,updateUBOMapping:Ne,uniformBlockBinding:Ve,texStorage2D:j,texStorage3D:he,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:de,scissor:fe,viewport:pe,reset:it}}function rw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const m=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return c?new OffscreenCanvas(C,S):ja("canvas")}function v(C,S,V,ee){let ne=1;if((C.width>ee||C.height>ee)&&(ne=ee/Math.max(C.width,C.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ae=S?ux:Math.floor,Me=ae(ne*C.width),de=ae(ne*C.height);y===void 0&&(y=g(Me,de));const j=V?g(Me,de):y;return j.width=Me,j.height=de,j.getContext("2d").drawImage(C,0,0,Me,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+de+")."),j}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return fh(C.width)&&fh(C.height)}function w(C){return a?!1:C.wrapS!==Pn||C.wrapT!==Pn||C.minFilter!==kt&&C.minFilter!==pn}function A(C,S){return C.generateMipmaps&&S&&C.minFilter!==kt&&C.minFilter!==pn}function b(C){n.generateMipmap(C)}function P(C,S,V,ee,ne=!1){if(a===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=S;return S===6403&&(V===5126&&(ae=33326),V===5131&&(ae=33325),V===5121&&(ae=33321)),S===33319&&(V===5126&&(ae=33328),V===5131&&(ae=33327),V===5121&&(ae=33323)),S===6408&&(V===5126&&(ae=34836),V===5131&&(ae=34842),V===5121&&(ae=ee===Xe&&ne===!1?35907:32856),V===32819&&(ae=32854),V===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function M(C,S,V){return A(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==pn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){return C===kt||C===Od||C===Wl?9728:9729}function Y(C){const S=C.target;S.removeEventListener("dispose",Y),I(S),S.isVideoTexture&&_.delete(S)}function $(C){const S=C.target;S.removeEventListener("dispose",$),W(S)}function I(C){const S=i.get(C);if(S.__webglInit===void 0)return;const V=C.source,ee=m.get(V);if(ee){const ne=ee[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&z(C),Object.keys(ee).length===0&&m.delete(V)}i.remove(C)}function z(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const V=C.source,ee=m.get(V);delete ee[S.__cacheKey],o.memory.textures--}function W(C){const S=C.texture,V=i.get(C),ee=i.get(S);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(V.__webglFramebuffer[ne]),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,ae=S.length;ne<ae;ne++){const Me=i.get(S[ne]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(S[ne])}i.remove(S),i.remove(C)}let te=0;function Z(){te=0}function R(){const C=te;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),te+=1,C}function B(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function F(C,S){const V=i.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(V,C,S);return}}t.bindTexture(3553,V.__webglTexture,33984+S)}function ue(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Ce(V,C,S);return}t.bindTexture(35866,V.__webglTexture,33984+S)}function K(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Ce(V,C,S);return}t.bindTexture(32879,V.__webglTexture,33984+S)}function O(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Ee(V,C,S);return}t.bindTexture(34067,V.__webglTexture,33984+S)}const q={[gc]:10497,[Pn]:33071,[vc]:33648},re={[kt]:9728,[Od]:9984,[Wl]:9986,[pn]:9729,[V_]:9985,[uo]:9987};function oe(C,S,V){if(V?(n.texParameteri(C,10242,q[S.wrapS]),n.texParameteri(C,10243,q[S.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,q[S.wrapR]),n.texParameteri(C,10240,re[S.magFilter]),n.texParameteri(C,10241,re[S.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(S.wrapS!==Pn||S.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,T(S.magFilter)),n.texParameteri(C,10241,T(S.minFilter)),S.minFilter!==kt&&S.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===kt||S.minFilter!==Wl&&S.minFilter!==uo||S.type===nr&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===co&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function k(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",Y));const ee=S.source;let ne=m.get(ee);ne===void 0&&(ne={},m.set(ee,ne));const ae=B(S);if(ae!==C.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[ae].usedTimes++;const Me=ne[C.__cacheKey];Me!==void 0&&(ne[C.__cacheKey].usedTimes--,Me.usedTimes===0&&z(S)),C.__cacheKey=ae,C.__webglTexture=ne[ae].texture}return V}function Ce(C,S,V){let ee=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=35866),S.isData3DTexture&&(ee=32879);const ne=k(C,S),ae=S.source;t.bindTexture(ee,C.__webglTexture,33984+V);const Me=i.get(ae);if(ae.version!==Me.__version||ne===!0){t.activeTexture(33984+V),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const de=w(S)&&x(S.image)===!1;let j=v(S.image,de,!1,f);j=Gt(S,j);const he=x(j)||a,ve=s.convert(S.format,S.encoding);let ye=s.convert(S.type),fe=P(S.internalFormat,ve,ye,S.encoding,S.isVideoTexture);oe(ee,S,he);let pe;const Ne=S.mipmaps,Ve=a&&S.isVideoTexture!==!0,it=Me.__version===void 0||ne===!0,L=M(S,j,he);if(S.isDepthTexture)fe=6402,a?S.type===nr?fe=36012:S.type===tr?fe=33190:S.type===es?fe=35056:fe=33189:S.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===sr&&fe===6402&&S.type!==dg&&S.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=tr,ye=s.convert(S.type)),S.format===fs&&fe===6402&&(fe=34041,S.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=es,ye=s.convert(S.type))),it&&(Ve?t.texStorage2D(3553,1,fe,j.width,j.height):t.texImage2D(3553,0,fe,j.width,j.height,0,ve,ye,null));else if(S.isDataTexture)if(Ne.length>0&&he){Ve&&it&&t.texStorage2D(3553,L,fe,Ne[0].width,Ne[0].height);for(let H=0,Q=Ne.length;H<Q;H++)pe=Ne[H],Ve?t.texSubImage2D(3553,H,0,0,pe.width,pe.height,ve,ye,pe.data):t.texImage2D(3553,H,fe,pe.width,pe.height,0,ve,ye,pe.data);S.generateMipmaps=!1}else Ve?(it&&t.texStorage2D(3553,L,fe,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,ve,ye,j.data)):t.texImage2D(3553,0,fe,j.width,j.height,0,ve,ye,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&it&&t.texStorage3D(35866,L,fe,Ne[0].width,Ne[0].height,j.depth);for(let H=0,Q=Ne.length;H<Q;H++)pe=Ne[H],S.format!==Ln?ve!==null?Ve?t.compressedTexSubImage3D(35866,H,0,0,0,pe.width,pe.height,j.depth,ve,pe.data,0,0):t.compressedTexImage3D(35866,H,fe,pe.width,pe.height,j.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,H,0,0,0,pe.width,pe.height,j.depth,ve,ye,pe.data):t.texImage3D(35866,H,fe,pe.width,pe.height,j.depth,0,ve,ye,pe.data)}else{Ve&&it&&t.texStorage2D(3553,L,fe,Ne[0].width,Ne[0].height);for(let H=0,Q=Ne.length;H<Q;H++)pe=Ne[H],S.format!==Ln?ve!==null?Ve?t.compressedTexSubImage2D(3553,H,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(3553,H,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,H,0,0,pe.width,pe.height,ve,ye,pe.data):t.texImage2D(3553,H,fe,pe.width,pe.height,0,ve,ye,pe.data)}else if(S.isDataArrayTexture)Ve?(it&&t.texStorage3D(35866,L,fe,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,ve,ye,j.data)):t.texImage3D(35866,0,fe,j.width,j.height,j.depth,0,ve,ye,j.data);else if(S.isData3DTexture)Ve?(it&&t.texStorage3D(32879,L,fe,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,ve,ye,j.data)):t.texImage3D(32879,0,fe,j.width,j.height,j.depth,0,ve,ye,j.data);else if(S.isFramebufferTexture){if(it)if(Ve)t.texStorage2D(3553,L,fe,j.width,j.height);else{let H=j.width,Q=j.height;for(let le=0;le<L;le++)t.texImage2D(3553,le,fe,H,Q,0,ve,ye,null),H>>=1,Q>>=1}}else if(Ne.length>0&&he){Ve&&it&&t.texStorage2D(3553,L,fe,Ne[0].width,Ne[0].height);for(let H=0,Q=Ne.length;H<Q;H++)pe=Ne[H],Ve?t.texSubImage2D(3553,H,0,0,ve,ye,pe):t.texImage2D(3553,H,fe,ve,ye,pe);S.generateMipmaps=!1}else Ve?(it&&t.texStorage2D(3553,L,fe,j.width,j.height),t.texSubImage2D(3553,0,0,0,ve,ye,j)):t.texImage2D(3553,0,fe,ve,ye,j);A(S,he)&&b(ee),Me.__version=ae.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ee(C,S,V){if(S.image.length!==6)return;const ee=k(C,S),ne=S.source;t.bindTexture(34067,C.__webglTexture,33984+V);const ae=i.get(ne);if(ne.version!==ae.__version||ee===!0){t.activeTexture(33984+V),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,j=[];for(let H=0;H<6;H++)!Me&&!de?j[H]=v(S.image[H],!1,!0,u):j[H]=de?S.image[H].image:S.image[H],j[H]=Gt(S,j[H]);const he=j[0],ve=x(he)||a,ye=s.convert(S.format,S.encoding),fe=s.convert(S.type),pe=P(S.internalFormat,ye,fe,S.encoding),Ne=a&&S.isVideoTexture!==!0,Ve=ae.__version===void 0||ee===!0;let it=M(S,he,ve);oe(34067,S,ve);let L;if(Me){Ne&&Ve&&t.texStorage2D(34067,it,pe,he.width,he.height);for(let H=0;H<6;H++){L=j[H].mipmaps;for(let Q=0;Q<L.length;Q++){const le=L[Q];S.format!==Ln?ye!==null?Ne?t.compressedTexSubImage2D(34069+H,Q,0,0,le.width,le.height,ye,le.data):t.compressedTexImage2D(34069+H,Q,pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+H,Q,0,0,le.width,le.height,ye,fe,le.data):t.texImage2D(34069+H,Q,pe,le.width,le.height,0,ye,fe,le.data)}}}else{L=S.mipmaps,Ne&&Ve&&(L.length>0&&it++,t.texStorage2D(34067,it,pe,j[0].width,j[0].height));for(let H=0;H<6;H++)if(de){Ne?t.texSubImage2D(34069+H,0,0,0,j[H].width,j[H].height,ye,fe,j[H].data):t.texImage2D(34069+H,0,pe,j[H].width,j[H].height,0,ye,fe,j[H].data);for(let Q=0;Q<L.length;Q++){const me=L[Q].image[H].image;Ne?t.texSubImage2D(34069+H,Q+1,0,0,me.width,me.height,ye,fe,me.data):t.texImage2D(34069+H,Q+1,pe,me.width,me.height,0,ye,fe,me.data)}}else{Ne?t.texSubImage2D(34069+H,0,0,0,ye,fe,j[H]):t.texImage2D(34069+H,0,pe,ye,fe,j[H]);for(let Q=0;Q<L.length;Q++){const le=L[Q];Ne?t.texSubImage2D(34069+H,Q+1,0,0,ye,fe,le.image[H]):t.texImage2D(34069+H,Q+1,pe,ye,fe,le.image[H])}}}A(S,ve)&&b(34067),ae.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function se(C,S,V,ee,ne){const ae=s.convert(V.format,V.encoding),Me=s.convert(V.type),de=P(V.internalFormat,ae,Me,V.encoding);i.get(S).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,de,S.width,S.height,S.depth,0,ae,Me,null):t.texImage2D(ne,0,de,S.width,S.height,0,ae,Me,null)),t.bindFramebuffer(36160,C),Oe(S)?d.framebufferTexture2DMultisampleEXT(36160,ee,ne,i.get(V).__webglTexture,0,ut(S)):(ne===3553||ne>=34069&&ne<=34074)&&n.framebufferTexture2D(36160,ee,ne,i.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(C,S,V){if(n.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(V||Oe(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===nr?ee=36012:ne.type===tr&&(ee=33190));const ae=ut(S);Oe(S)?d.renderbufferStorageMultisampleEXT(36161,ae,ee,S.width,S.height):n.renderbufferStorageMultisample(36161,ae,ee,S.width,S.height)}else n.renderbufferStorage(36161,ee,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const ee=ut(S);V&&Oe(S)===!1?n.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):Oe(S)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<ee.length;ne++){const ae=ee[ne],Me=s.convert(ae.format,ae.encoding),de=s.convert(ae.type),j=P(ae.internalFormat,Me,de,ae.encoding),he=ut(S);V&&Oe(S)===!1?n.renderbufferStorageMultisample(36161,he,j,S.width,S.height):Oe(S)?d.renderbufferStorageMultisampleEXT(36161,he,j,S.width,S.height):n.renderbufferStorage(36161,j,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function Fe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const ee=i.get(S.depthTexture).__webglTexture,ne=ut(S);if(S.depthTexture.format===sr)Oe(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===fs)Oe(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ge(C){const S=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Fe(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=n.createRenderbuffer(),Se(S.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Se(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Re(C,S,V){const ee=i.get(C);S!==void 0&&se(ee.__webglFramebuffer,C,C.texture,36064,3553),V!==void 0&&ge(C)}function pt(C){const S=C.texture,V=i.get(C),ee=i.get(S);C.addEventListener("dispose",$),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=S.version,o.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,Me=x(C)||a;if(ne){V.__webglFramebuffer=[];for(let de=0;de<6;de++)V.__webglFramebuffer[de]=n.createFramebuffer()}else{if(V.__webglFramebuffer=n.createFramebuffer(),ae)if(r.drawBuffers){const de=C.texture;for(let j=0,he=de.length;j<he;j++){const ve=i.get(de[j]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Oe(C)===!1){const de=ae?S:[S];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let j=0;j<de.length;j++){const he=de[j];V.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(36161,V.__webglColorRenderbuffer[j]);const ve=s.convert(he.format,he.encoding),ye=s.convert(he.type),fe=P(he.internalFormat,ve,ye,he.encoding,C.isXRRenderTarget===!0),pe=ut(C);n.renderbufferStorageMultisample(36161,pe,fe,C.width,C.height),n.framebufferRenderbuffer(36160,36064+j,36161,V.__webglColorRenderbuffer[j])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),oe(34067,S,Me);for(let de=0;de<6;de++)se(V.__webglFramebuffer[de],C,S,36064,34069+de);A(S,Me)&&b(34067),t.unbindTexture()}else if(ae){const de=C.texture;for(let j=0,he=de.length;j<he;j++){const ve=de[j],ye=i.get(ve);t.bindTexture(3553,ye.__webglTexture),oe(3553,ve,Me),se(V.__webglFramebuffer,C,ve,36064+j,3553),A(ve,Me)&&b(3553)}t.unbindTexture()}else{let de=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?de=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ee.__webglTexture),oe(de,S,Me),se(V.__webglFramebuffer,C,S,36064,de),A(S,Me)&&b(de),t.unbindTexture()}C.depthBuffer&&ge(C)}function yt(C){const S=x(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,ne=V.length;ee<ne;ee++){const ae=V[ee];if(A(ae,S)){const Me=C.isWebGLCubeRenderTarget?34067:3553,de=i.get(ae).__webglTexture;t.bindTexture(Me,de),b(Me),t.unbindTexture()}}}function mt(C){if(a&&C.samples>0&&Oe(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,ee=C.height;let ne=16384;const ae=[],Me=C.stencilBuffer?33306:36096,de=i.get(C),j=C.isWebGLMultipleRenderTargets===!0;if(j)for(let he=0;he<S.length;he++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),n.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let he=0;he<S.length;he++){ae.push(36064+he),C.depthBuffer&&ae.push(Me);const ve=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ve===!1&&(C.depthBuffer&&(ne|=256),C.stencilBuffer&&(ne|=1024)),j&&n.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[he]),ve===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),j){const ye=i.get(S[he]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ye,0)}n.blitFramebuffer(0,0,V,ee,0,0,V,ee,ne,9728),p&&n.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let he=0;he<S.length;he++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+he,36161,de.__webglColorRenderbuffer[he]);const ve=i.get(S[he]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),n.framebufferTexture2D(36009,36064+he,3553,ve,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function ut(C){return Math.min(h,C.samples)}function Oe(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function tt(C){const S=o.render.frame;_.get(C)!==S&&(_.set(C,S),C.update())}function Gt(C,S){const V=C.encoding,ee=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===_c||V!==dr&&(V===Xe?a===!1?e.has("EXT_sRGB")===!0&&ee===Ln?(C.format=_c,C.minFilter=pn,C.generateMipmaps=!1):S=mg.sRGBToLinear(S):(ee!==Ln||ne!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),S}this.allocateTextureUnit=R,this.resetTextureUnits=Z,this.setTexture2D=F,this.setTexture2DArray=ue,this.setTexture3D=K,this.setTextureCube=O,this.rebindTextures=Re,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Oe}function sw(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===fr)return 5121;if(s===j_)return 32819;if(s===X_)return 32820;if(s===G_)return 5120;if(s===H_)return 5122;if(s===dg)return 5123;if(s===W_)return 5124;if(s===tr)return 5125;if(s===nr)return 5126;if(s===co)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===q_)return 6406;if(s===Ln)return 6408;if(s===$_)return 6409;if(s===Y_)return 6410;if(s===sr)return 6402;if(s===fs)return 34041;if(s===_c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===K_)return 6403;if(s===Z_)return 36244;if(s===Q_)return 33319;if(s===J_)return 33320;if(s===ex)return 36249;if(s===jl||s===Xl||s===ql||s===$l)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===jl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===jl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ql)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bd||s===Vd||s===Gd||s===Hd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wd||s===jd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wd)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===jd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xd||s===qd||s===$d||s===Yd||s===Kd||s===Zd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$d)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===eh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===th)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ih)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Yl)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===nx||s===oh||s===ah||s===lh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Yl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===oh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===es?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ow extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aa extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aw={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class lw extends sn{constructor(e,t,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:sr,f!==sr&&f!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===sr&&(i=tr),i===void 0&&f===fs&&(i=es),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1}}class uw extends gs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,p=null,_=null;const y=t.getContextAttributes();let m=null,c=null;const g=[],v=[],x=new Set,w=new Map,A=new mn;A.layers.enable(1),A.viewport=new Mt;const b=new mn;b.layers.enable(2),b.viewport=new Mt;const P=[A,b],M=new ow;M.layers.enable(1),M.layers.enable(2);let T=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let q=g[O];return q===void 0&&(q=new xu,g[O]=q),q.getTargetRaySpace()},this.getControllerGrip=function(O){let q=g[O];return q===void 0&&(q=new xu,g[O]=q),q.getGripSpace()},this.getHand=function(O){let q=g[O];return q===void 0&&(q=new xu,g[O]=q),q.getHandSpace()};function $(O){const q=v.indexOf(O.inputSource);if(q===-1)return;const re=g[q];re!==void 0&&re.dispatchEvent({type:O.type,data:O.inputSource})}function I(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",z);for(let O=0;O<g.length;O++){const q=v[O];q!==null&&(v[O]=null,g[O].disconnect(q))}T=null,Y=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,c=null,K.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",I),r.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),c=new hr(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:fr,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let q=null,re=null,oe=null;y.depth&&(oe=y.stencil?35056:33190,q=y.stencil?fs:sr,re=y.stencil?es:tr);const k={colorFormat:32856,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(k),r.updateRenderState({layers:[d]}),c=new hr(d.textureWidth,d.textureHeight,{format:Ln,type:fr,depthTexture:new lw(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const Ce=e.properties.get(c);Ce.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(O){for(let q=0;q<O.removed.length;q++){const re=O.removed[q],oe=v.indexOf(re);oe>=0&&(v[oe]=null,g[oe].disconnect(re))}for(let q=0;q<O.added.length;q++){const re=O.added[q];let oe=v.indexOf(re);if(oe===-1){for(let Ce=0;Ce<g.length;Ce++)if(Ce>=v.length){v.push(re),oe=Ce;break}else if(v[Ce]===null){v[Ce]=re,oe=Ce;break}if(oe===-1)break}const k=g[oe];k&&k.connect(re)}}const W=new N,te=new N;function Z(O,q,re){W.setFromMatrixPosition(q.matrixWorld),te.setFromMatrixPosition(re.matrixWorld);const oe=W.distanceTo(te),k=q.projectionMatrix.elements,Ce=re.projectionMatrix.elements,Ee=k[14]/(k[10]-1),se=k[14]/(k[10]+1),Se=(k[9]+1)/k[5],Fe=(k[9]-1)/k[5],ge=(k[8]-1)/k[0],Re=(Ce[8]+1)/Ce[0],pt=Ee*ge,yt=Ee*Re,mt=oe/(-ge+Re),ut=mt*-ge;q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ut),O.translateZ(mt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Oe=Ee+mt,tt=se+mt,Gt=pt-ut,C=yt+(oe-ut),S=Se*se/tt*Oe,V=Fe*se/tt*Oe;O.projectionMatrix.makePerspective(Gt,C,S,V,Oe,tt),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function R(O,q){q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;M.near=b.near=A.near=O.near,M.far=b.far=A.far=O.far,(T!==M.near||Y!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,Y=M.far);const q=O.parent,re=M.cameras;R(M,q);for(let oe=0;oe<re.length;oe++)R(re[oe],q);re.length===2?Z(M,A,b):M.projectionMatrix.copy(A.projectionMatrix),B(O,M,q)};function B(O,q,re){re===null?O.matrix.copy(q.matrixWorld):(O.matrix.copy(re.matrixWorld),O.matrix.invert(),O.matrix.multiply(q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0);const oe=O.children;for(let k=0,Ce=oe.length;k<Ce;k++)oe[k].updateMatrixWorld(!0);O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=xc*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.getPlanes=function(){return x};let F=null;function ue(O,q){if(f=q.getViewerPose(u||o),_=q,f!==null){const re=f.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let oe=!1;re.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let k=0;k<re.length;k++){const Ce=re[k];let Ee=null;if(p!==null)Ee=p.getViewport(Ce);else{const Se=h.getViewSubImage(d,Ce);Ee=Se.viewport,k===0&&(e.setRenderTargetTextures(c,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(c))}let se=P[k];se===void 0&&(se=new mn,se.layers.enable(k),se.viewport=new Mt,P[k]=se),se.matrix.fromArray(Ce.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Ce.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),k===0&&(M.matrix.copy(se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(se)}}for(let re=0;re<g.length;re++){const oe=v[re],k=g[re];oe!==null&&k!==void 0&&k.update(oe,q,u||o)}if(F&&F(O,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let re=null;for(const oe of x)q.detectedPlanes.has(oe)||(re===null&&(re=[]),re.push(oe));if(re!==null)for(const oe of re)x.delete(oe),w.delete(oe),i.dispatchEvent({type:"planeremoved",data:oe});for(const oe of q.detectedPlanes)if(!x.has(oe))x.add(oe),w.set(oe,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:oe});else{const k=w.get(oe);oe.lastChangedTime>k&&(w.set(oe,oe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:oe}))}}_=null}const K=new Ag;K.setAnimationLoop(ue),this.setAnimationLoop=function(O){F=O},this.dispose=function(){}}}function cw(n,e){function t(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,wg(n)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,v,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),h(m,c)):c.isMeshPhongMaterial?(s(m,c),f(m,c)):c.isMeshStandardMaterial?(s(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,x)):c.isMeshMatcapMaterial?(s(m,c),_(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),y(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,v):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,t(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,t(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,t(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===Yt&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,t(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===Yt&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,t(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,t(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*v,t(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,t(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,v){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=v*.5,c.map&&(m.map.value=c.map,t(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,t(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Yt&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(g,v){const x=v.program;i.uniformBlockBinding(g,x)}function u(g,v){let x=r[g.id];x===void 0&&(_(g),x=f(g),r[g.id]=x,g.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(g,w);const A=e.render.frame;s[g.id]!==A&&(d(g),s[g.id]=A)}function f(g){const v=h();g.__bindingPointIndex=v;const x=n.createBuffer(),w=g.__size,A=g.usage;return n.bindBuffer(35345,x),n.bufferData(35345,w,A),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,x),x}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],x=g.uniforms,w=g.__cache;n.bindBuffer(35345,v);for(let A=0,b=x.length;A<b;A++){const P=x[A];if(p(P,A,w)===!0){const M=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let $=0;$<T.length;$++){const I=T[$],z=y(I);typeof I=="number"?(P.__data[0]=I,n.bufferSubData(35345,M+Y,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=I.elements[0],P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=I.elements[0],P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=I.elements[0]):(I.toArray(P.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,M,P.__data)}}n.bindBuffer(35345,null)}function p(g,v,x){const w=g.value;if(x[v]===void 0){if(typeof w=="number")x[v]=w;else{const A=Array.isArray(w)?w:[w],b=[];for(let P=0;P<A.length;P++)b.push(A[P].clone());x[v]=b}return!0}else if(typeof w=="number"){if(x[v]!==w)return x[v]=w,!0}else{const A=Array.isArray(x[v])?x[v]:[x[v]],b=Array.isArray(w)?w:[w];for(let P=0;P<A.length;P++){const M=A[P];if(M.equals(b[P])===!1)return M.copy(b[P]),!0}}return!1}function _(g){const v=g.uniforms;let x=0;const w=16;let A=0;for(let b=0,P=v.length;b<P;b++){const M=v[b],T={boundary:0,storage:0},Y=Array.isArray(M.value)?M.value:[M.value];for(let $=0,I=Y.length;$<I;$++){const z=Y[$],W=y(z);T.boundary+=W.boundary,T.storage+=W.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,b>0){A=x%w;const $=w-A;A!==0&&$-T.boundary<0&&(x+=w-A,M.__offset=x)}x+=T.storage}return A=x%w,A>0&&(x+=w-A),g.__size=x,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}function dw(){const n=ja("canvas");return n.style.display="block",n}class Dg{constructor(e={}){const{canvas:t=dw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=null,_=null;const y=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=dr,this.useLegacyLights=!0,this.toneMapping=ri,this.toneMappingExposure=1;const c=this;let g=!1,v=0,x=0,w=null,A=-1,b=null;const P=new Mt,M=new Mt;let T=null,Y=t.width,$=t.height,I=1,z=null,W=null;const te=new Mt(0,0,Y,$),Z=new Mt(0,0,Y,$);let R=!1;const B=new Cg;let F=!1,ue=!1,K=null;const O=new Et,q=new N,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return w===null?I:1}let k=i;function Ce(E,U){for(let G=0;G<E.length;G++){const D=E[G],X=t.getContext(D,U);if(X!==null)return X}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vf}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&U.shift(),k=Ce(U,E),k===null)throw Ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,se,Se,Fe,ge,Re,pt,yt,mt,ut,Oe,tt,Gt,C,S,V,ee,ne,ae,Me,de,j,he,ve;function ye(){Ee=new wS(k),se=new gS(k,Ee,e),Ee.init(se),j=new sw(k,Ee,se),Se=new iw(k,Ee,se),Fe=new CS,ge=new HM,Re=new rw(k,Ee,Se,ge,se,j,Fe),pt=new _S(c),yt=new MS(c),mt=new kx(k,se),he=new pS(k,Ee,mt,se),ut=new ES(k,mt,Fe,he),Oe=new LS(k,ut,mt,Fe),ae=new PS(k,se,Re),V=new vS(ge),tt=new GM(c,pt,yt,Ee,se,he,V),Gt=new cw(c,ge),C=new jM,S=new ZM(Ee,se),ne=new hS(c,pt,yt,Se,Oe,d,l),ee=new nw(c,Oe,se),ve=new fw(k,Fe,se,Se),Me=new mS(k,Ee,Fe,se),de=new TS(k,Ee,Fe,se),Fe.programs=tt.programs,c.capabilities=se,c.extensions=Ee,c.properties=ge,c.renderLists=C,c.shadowMap=ee,c.state=Se,c.info=Fe}ye();const fe=new uw(c,k);this.xr=fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(Y,$,!1))},this.getSize=function(E){return E.set(Y,$)},this.setSize=function(E,U,G=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,$=U,t.width=Math.floor(E*I),t.height=Math.floor(U*I),G===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Y*I,$*I).floor()},this.setDrawingBufferSize=function(E,U,G){Y=E,$=U,I=G,t.width=Math.floor(E*G),t.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,U,G,D){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,U,G,D),Se.viewport(P.copy(te).multiplyScalar(I).floor())},this.getScissor=function(E){return E.copy(Z)},this.setScissor=function(E,U,G,D){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,G,D),Se.scissor(M.copy(Z).multiplyScalar(I).floor())},this.getScissorTest=function(){return R},this.setScissorTest=function(E){Se.setScissorTest(R=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){W=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,U=!0,G=!0){let D=0;E&&(D|=16384),U&&(D|=256),G&&(D|=1024),k.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),C.dispose(),S.dispose(),ge.dispose(),pt.dispose(),yt.dispose(),Oe.dispose(),he.dispose(),ve.dispose(),tt.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",me),fe.removeEventListener("sessionend",We),K&&(K.dispose(),K=null),Ze.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const E=Fe.autoReset,U=ee.enabled,G=ee.autoUpdate,D=ee.needsUpdate,X=ee.type;ye(),Fe.autoReset=E,ee.enabled=U,ee.autoUpdate=G,ee.needsUpdate=D,ee.type=X}function Ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const U=E.target;U.removeEventListener("dispose",it),L(U)}function L(E){H(E),ge.remove(E)}function H(E){const U=ge.get(E).programs;U!==void 0&&(U.forEach(function(G){tt.releaseProgram(G)}),E.isShaderMaterial&&tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,D,X,_e){U===null&&(U=re);const we=X.isMesh&&X.matrixWorld.determinant()<0,Te=zg(E,U,G,D,X);Se.setMaterial(D,we);let Ae=G.index,Pe=1;D.wireframe===!0&&(Ae=ut.getWireframeAttribute(G),Pe=2);const Le=G.drawRange,De=G.attributes.position;let Ge=Le.start*Pe,It=(Le.start+Le.count)*Pe;_e!==null&&(Ge=Math.max(Ge,_e.start*Pe),It=Math.min(It,(_e.start+_e.count)*Pe)),Ae!==null?(Ge=Math.max(Ge,0),It=Math.min(It,Ae.count)):De!=null&&(Ge=Math.max(Ge,0),It=Math.min(It,De.count));const yn=It-Ge;if(yn<0||yn===1/0)return;he.setup(X,D,Te,G,Ae);let Vi,ot=Me;if(Ae!==null&&(Vi=mt.get(Ae),ot=de,ot.setIndex(Vi)),X.isMesh)D.wireframe===!0?(Se.setLineWidth(D.wireframeLinewidth*oe()),ot.setMode(1)):ot.setMode(4);else if(X.isLine){let ze=D.linewidth;ze===void 0&&(ze=1),Se.setLineWidth(ze*oe()),X.isLineSegments?ot.setMode(1):X.isLineLoop?ot.setMode(2):ot.setMode(3)}else X.isPoints?ot.setMode(0):X.isSprite&&ot.setMode(4);if(X.isInstancedMesh)ot.renderInstances(Ge,yn,X.count);else if(G.isInstancedBufferGeometry){const ze=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,pl=Math.min(G.instanceCount,ze);ot.renderInstances(Ge,yn,pl)}else ot.render(Ge,yn)},this.compile=function(E,U){function G(D,X,_e){D.transparent===!0&&D.side===Vn&&D.forceSinglePass===!1?(D.side=Yt,D.needsUpdate=!0,Mo(D,X,_e),D.side=Ni,D.needsUpdate=!0,Mo(D,X,_e),D.side=Vn):Mo(D,X,_e)}_=S.get(E),_.init(),m.push(_),E.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(_.pushLight(D),D.castShadow&&_.pushShadow(D))}),_.setupLights(c.useLegacyLights),E.traverse(function(D){const X=D.material;if(X)if(Array.isArray(X))for(let _e=0;_e<X.length;_e++){const we=X[_e];G(we,E,D)}else G(X,E,D)}),m.pop(),_=null};let Q=null;function le(E){Q&&Q(E)}function me(){Ze.stop()}function We(){Ze.start()}const Ze=new Ag;Ze.setAnimationLoop(le),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(E){Q=E,fe.setAnimationLoop(E),E===null?Ze.stop():Ze.start()},fe.addEventListener("sessionstart",me),fe.addEventListener("sessionend",We),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(c,E,U,w),_=S.get(E,m.length),_.init(),m.push(_),O.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),B.setFromProjectionMatrix(O),ue=this.localClippingEnabled,F=V.init(this.clippingPlanes,ue),p=C.get(E,y.length),p.init(),y.push(p),Ct(E,U,0,c.sortObjects),p.finish(),c.sortObjects===!0&&p.sort(z,W),F===!0&&V.beginShadows();const G=_.state.shadowsArray;if(ee.render(G,E,U),F===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(p,E),_.setupLights(c.useLegacyLights),U.isArrayCamera){const D=U.cameras;for(let X=0,_e=D.length;X<_e;X++){const we=D[X];ci(p,E,we,we.viewport)}}else ci(p,E,U);w!==null&&(Re.updateMultisampleRenderTarget(w),Re.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(c,E,U),he.resetDefaultState(),A=-1,b=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Ct(E,U,G,D){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||B.intersectsSprite(E)){D&&q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(O);const we=Oe.update(E),Te=E.material;Te.visible&&p.push(E,we,Te,G,q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Fe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Fe.render.frame),!E.frustumCulled||B.intersectsObject(E))){D&&q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(O);const we=Oe.update(E),Te=E.material;if(Array.isArray(Te)){const Ae=we.groups;for(let Pe=0,Le=Ae.length;Pe<Le;Pe++){const De=Ae[Pe],Ge=Te[De.materialIndex];Ge&&Ge.visible&&p.push(E,we,Ge,G,q.z,De)}}else Te.visible&&p.push(E,we,Te,G,q.z,null)}}const _e=E.children;for(let we=0,Te=_e.length;we<Te;we++)Ct(_e[we],U,G,D)}function ci(E,U,G,D){const X=E.opaque,_e=E.transmissive,we=E.transparent;_.setupLightsView(G),F===!0&&V.setGlobalState(c.clippingPlanes,G),_e.length>0&&rt(X,_e,U,G),D&&Se.viewport(P.copy(D)),X.length>0&&cn(X,U,G),_e.length>0&&cn(_e,U,G),we.length>0&&cn(we,U,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function rt(E,U,G,D){if(K===null){const Te=se.isWebGL2;K=new hr(1024,1024,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?co:fr,minFilter:uo,samples:Te&&a===!0?4:0})}const X=c.getRenderTarget();c.setRenderTarget(K),c.clear();const _e=c.toneMapping;c.toneMapping=ri,cn(E,G,D),Re.updateMultisampleRenderTarget(K),Re.updateRenderTargetMipmap(K);let we=!1;for(let Te=0,Ae=U.length;Te<Ae;Te++){const Pe=U[Te],Le=Pe.object,De=Pe.geometry,Ge=Pe.material,It=Pe.group;if(Ge.side===Vn&&Le.layers.test(D.layers)){const yn=Ge.side;Ge.side=Yt,Ge.needsUpdate=!0,Un(Le,G,D,De,Ge,It),Ge.side=yn,Ge.needsUpdate=!0,we=!0}}we===!0&&(Re.updateMultisampleRenderTarget(K),Re.updateRenderTargetMipmap(K)),c.setRenderTarget(X),c.toneMapping=_e}function cn(E,U,G){const D=U.isScene===!0?U.overrideMaterial:null;for(let X=0,_e=E.length;X<_e;X++){const we=E[X],Te=we.object,Ae=we.geometry,Pe=D===null?we.material:D,Le=we.group;Te.layers.test(G.layers)&&Un(Te,U,G,Ae,Pe,Le)}}function Un(E,U,G,D,X,_e){E.onBeforeRender(c,U,G,D,X,_e),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(c,U,G,D,E,_e),X.transparent===!0&&X.side===Vn&&X.forceSinglePass===!1?(X.side=Yt,X.needsUpdate=!0,c.renderBufferDirect(G,U,D,X,E,_e),X.side=Ni,X.needsUpdate=!0,c.renderBufferDirect(G,U,D,X,E,_e),X.side=Vn):c.renderBufferDirect(G,U,D,X,E,_e),E.onAfterRender(c,U,G,D,X,_e)}function Mo(E,U,G){U.isScene!==!0&&(U=re);const D=ge.get(E),X=_.state.lights,_e=_.state.shadowsArray,we=X.state.version,Te=tt.getParameters(E,X.state,_e,U,G),Ae=tt.getProgramCacheKey(Te);let Pe=D.programs;D.environment=E.isMeshStandardMaterial?U.environment:null,D.fog=U.fog,D.envMap=(E.isMeshStandardMaterial?yt:pt).get(E.envMap||D.environment),Pe===void 0&&(E.addEventListener("dispose",it),Pe=new Map,D.programs=Pe);let Le=Pe.get(Ae);if(Le!==void 0){if(D.currentProgram===Le&&D.lightsStateVersion===we)return Sf(E,Te),Le}else Te.uniforms=tt.getUniforms(E),E.onBuild(G,Te,c),E.onBeforeCompile(Te,c),Le=tt.acquireProgram(Te,Ae),Pe.set(Ae,Le),D.uniforms=Te.uniforms;const De=D.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=V.uniform),Sf(E,Te),D.needsLights=Fg(E),D.lightsStateVersion=we,D.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.directionalShadowMap.value=X.state.directionalShadowMap,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotShadowMap.value=X.state.spotShadowMap,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMap.value=X.state.pointShadowMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix);const Ge=Le.getUniforms(),It=ya.seqWithValue(Ge.seq,De);return D.currentProgram=Le,D.uniformsList=It,Le}function Sf(E,U){const G=ge.get(E);G.outputEncoding=U.outputEncoding,G.instancing=U.instancing,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function zg(E,U,G,D,X){U.isScene!==!0&&(U=re),Re.resetTextureUnits();const _e=U.fog,we=D.isMeshStandardMaterial?U.environment:null,Te=w===null?c.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:dr,Ae=(D.isMeshStandardMaterial?yt:pt).get(D.envMap||we),Pe=D.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!D.normalMap&&!!G.attributes.tangent,De=!!G.morphAttributes.position,Ge=!!G.morphAttributes.normal,It=!!G.morphAttributes.color,yn=D.toneMapped?c.toneMapping:ri,Vi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=Vi!==void 0?Vi.length:0,ze=ge.get(D),pl=_.state.lights;if(F===!0&&(ue===!0||E!==b)){const Kt=E===b&&D.id===A;V.setState(D,E,Kt)}let gt=!1;D.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==pl.state.version||ze.outputEncoding!==Te||X.isInstancedMesh&&ze.instancing===!1||!X.isInstancedMesh&&ze.instancing===!0||X.isSkinnedMesh&&ze.skinning===!1||!X.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Ae||D.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==V.numPlanes||ze.numIntersection!==V.numIntersection)||ze.vertexAlphas!==Pe||ze.vertexTangents!==Le||ze.morphTargets!==De||ze.morphNormals!==Ge||ze.morphColors!==It||ze.toneMapping!==yn||se.isWebGL2===!0&&ze.morphTargetsCount!==ot)&&(gt=!0):(gt=!0,ze.__version=D.version);let Gi=ze.currentProgram;gt===!0&&(Gi=Mo(D,U,X));let Mf=!1,_s=!1,ml=!1;const Ut=Gi.getUniforms(),Hi=ze.uniforms;if(Se.useProgram(Gi.program)&&(Mf=!0,_s=!0,ml=!0),D.id!==A&&(A=D.id,_s=!0),Mf||b!==E){if(Ut.setValue(k,"projectionMatrix",E.projectionMatrix),se.logarithmicDepthBuffer&&Ut.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,_s=!0,ml=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const Kt=Ut.map.cameraPosition;Kt!==void 0&&Kt.setValue(k,q.setFromMatrixPosition(E.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Ut.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||X.isSkinnedMesh)&&Ut.setValue(k,"viewMatrix",E.matrixWorldInverse)}if(X.isSkinnedMesh){Ut.setOptional(k,X,"bindMatrix"),Ut.setOptional(k,X,"bindMatrixInverse");const Kt=X.skeleton;Kt&&(se.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ut.setValue(k,"boneTexture",Kt.boneTexture,Re),Ut.setValue(k,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gl=G.morphAttributes;if((gl.position!==void 0||gl.normal!==void 0||gl.color!==void 0&&se.isWebGL2===!0)&&ae.update(X,G,Gi),(_s||ze.receiveShadow!==X.receiveShadow)&&(ze.receiveShadow=X.receiveShadow,Ut.setValue(k,"receiveShadow",X.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Hi.envMap.value=Ae,Hi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),_s&&(Ut.setValue(k,"toneMappingExposure",c.toneMappingExposure),ze.needsLights&&kg(Hi,ml),_e&&D.fog===!0&&Gt.refreshFogUniforms(Hi,_e),Gt.refreshMaterialUniforms(Hi,D,I,$,K),ya.upload(k,ze.uniformsList,Hi,Re)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(ya.upload(k,ze.uniformsList,Hi,Re),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Ut.setValue(k,"center",X.center),Ut.setValue(k,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(k,"normalMatrix",X.normalMatrix),Ut.setValue(k,"modelMatrix",X.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const Kt=D.uniformsGroups;for(let vl=0,Og=Kt.length;vl<Og;vl++)if(se.isWebGL2){const wf=Kt[vl];ve.update(wf,Gi),ve.bind(wf,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}function kg(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Fg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,G){ge.get(E.texture).__webglTexture=U,ge.get(E.depthTexture).__webglTexture=G;const D=ge.get(E);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=G===void 0,D.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const G=ge.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){w=E,v=U,x=G;let D=!0,X=null,_e=!1,we=!1;if(E){const Ae=ge.get(E);Ae.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(36160,null),D=!1):Ae.__webglFramebuffer===void 0?Re.setupRenderTarget(E):Ae.__hasExternalTextures&&Re.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(we=!0);const Le=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(X=Le[U],_e=!0):se.isWebGL2&&E.samples>0&&Re.useMultisampledRTT(E)===!1?X=ge.get(E).__webglMultisampledFramebuffer:X=Le,P.copy(E.viewport),M.copy(E.scissor),T=E.scissorTest}else P.copy(te).multiplyScalar(I).floor(),M.copy(Z).multiplyScalar(I).floor(),T=R;if(Se.bindFramebuffer(36160,X)&&se.drawBuffers&&D&&Se.drawBuffers(E,X),Se.viewport(P),Se.scissor(M),Se.setScissorTest(T),_e){const Ae=ge.get(E.texture);k.framebufferTexture2D(36160,36064,34069+U,Ae.__webglTexture,G)}else if(we){const Ae=ge.get(E.texture),Pe=U||0;k.framebufferTextureLayer(36160,36064,Ae.__webglTexture,G||0,Pe)}A=-1},this.readRenderTargetPixels=function(E,U,G,D,X,_e,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){Se.bindFramebuffer(36160,Te);try{const Ae=E.texture,Pe=Ae.format,Le=Ae.type;if(Pe!==Ln&&j.convert(Pe)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===co&&(Ee.has("EXT_color_buffer_half_float")||se.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Le!==fr&&j.convert(Le)!==k.getParameter(35738)&&!(Le===nr&&(se.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-D&&G>=0&&G<=E.height-X&&k.readPixels(U,G,D,X,j.convert(Pe),j.convert(Le),_e)}finally{const Ae=w!==null?ge.get(w).__webglFramebuffer:null;Se.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(E,U,G=0){const D=Math.pow(2,-G),X=Math.floor(U.image.width*D),_e=Math.floor(U.image.height*D);Re.setTexture2D(U,0),k.copyTexSubImage2D(3553,G,0,0,E.x,E.y,X,_e),Se.unbindTexture()},this.copyTextureToTexture=function(E,U,G,D=0){const X=U.image.width,_e=U.image.height,we=j.convert(G.format),Te=j.convert(G.type);Re.setTexture2D(G,0),k.pixelStorei(37440,G.flipY),k.pixelStorei(37441,G.premultiplyAlpha),k.pixelStorei(3317,G.unpackAlignment),U.isDataTexture?k.texSubImage2D(3553,D,E.x,E.y,X,_e,we,Te,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(3553,D,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,we,U.mipmaps[0].data):k.texSubImage2D(3553,D,E.x,E.y,we,Te,U.image),D===0&&G.generateMipmaps&&k.generateMipmap(3553),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G,D,X=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,Ae=j.convert(D.format),Pe=j.convert(D.type);let Le;if(D.isData3DTexture)Re.setTexture3D(D,0),Le=32879;else if(D.isDataArrayTexture)Re.setTexture2DArray(D,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,D.flipY),k.pixelStorei(37441,D.premultiplyAlpha),k.pixelStorei(3317,D.unpackAlignment);const De=k.getParameter(3314),Ge=k.getParameter(32878),It=k.getParameter(3316),yn=k.getParameter(3315),Vi=k.getParameter(32877),ot=G.isCompressedTexture?G.mipmaps[0]:G.image;k.pixelStorei(3314,ot.width),k.pixelStorei(32878,ot.height),k.pixelStorei(3316,E.min.x),k.pixelStorei(3315,E.min.y),k.pixelStorei(32877,E.min.z),G.isDataTexture||G.isData3DTexture?k.texSubImage3D(Le,X,U.x,U.y,U.z,_e,we,Te,Ae,Pe,ot.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Le,X,U.x,U.y,U.z,_e,we,Te,Ae,ot.data)):k.texSubImage3D(Le,X,U.x,U.y,U.z,_e,we,Te,Ae,Pe,ot),k.pixelStorei(3314,De),k.pixelStorei(32878,Ge),k.pixelStorei(3316,It),k.pixelStorei(3315,yn),k.pixelStorei(32877,Vi),X===0&&D.generateMipmaps&&k.generateMipmap(Le),Se.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Re.setTextureCube(E,0):E.isData3DTexture?Re.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Re.setTexture2DArray(E,0):Re.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){v=0,x=0,w=null,Se.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class hw extends Dg{}hw.prototype.isWebGL1Renderer=!0;class pw extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Xa extends Bi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],h=new N,d=new N,p=[],_=[],y=[],m=[];for(let c=0;c<=i;c++){const g=[],v=c/i;let x=0;c===0&&o===0?x=.5/t:c===i&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(A+x,1-v),g.push(u++)}f.push(g)}for(let c=0;c<i;c++)for(let g=0;g<t;g++){const v=f[c][g+1],x=f[c][g],w=f[c+1][g],A=f[c+1][g+1];(c!==0||o>0)&&p.push(v,x,A),(c!==i-1||l<Math.PI)&&p.push(x,w,A)}this.setIndex(p),this.setAttribute("position",new Xn(_,3)),this.setAttribute("normal",new Xn(y,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vf);const mw=({mainElementWidth:n,mainElementHeight:e,cameraState:t})=>{const[i,r]=Ft.useState(0),[s,o]=Ft.useState(0),[a,l]=Ft.useState(5),u=t.cameraX,f=t.cameraY,h=t.cameraZ,d=Ft.useRef(null);return Ft.useEffect(()=>{const p=new pw,_=d.current,y=new mn(50,n/e,.01,1e3);y.position.set(i,s,a);const m=new Dg({antialias:!1});m.setSize(n,e),m.setClearColor(0,0),m.setPixelRatio(window.devicePixelRatio),_&&_.appendChild(m.domElement);const c=new Xa(1,64,64),g=`
    varying vec2 vUv;

    varying vec2 vScreenSpace;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vNormal = normal;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vScreenSpace = gl_Position.xy/gl_Position.w;
    }
`,v=`
    varying vec2 vUv;
    uniform float time;
    
    varying vec2 vScreenSpace;
    varying vec3 vNormal;
    varying vec3 vPosition;

// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/stegu/webgl-noise
//

    vec3 mod289(vec3 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x)
    {
      return mod289(((x*34.0)+10.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r)
    {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    vec3 fade(vec3 t) {
      return t*t*t*(t*(t*6.0-15.0)+10.0);
    }
    
    // Classic Perlin noise
    float cnoise(vec3 P)
    {
      vec3 Pi0 = floor(P); // Integer part for indexing
      vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
      Pi0 = mod289(Pi0);
      Pi1 = mod289(Pi1);
      vec3 Pf0 = fract(P); // Fractional part for interpolation
      vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;
    
      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);
    
      vec4 gx0 = ixy0 * (1.0 / 7.0);
      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    
      vec4 gx1 = ixy1 * (1.0 / 7.0);
      vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.5);
      gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    
      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
    
      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
      g000 *= norm0.x;
      g010 *= norm0.y;
      g100 *= norm0.z;
      g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
      g001 *= norm1.x;
      g011 *= norm1.y;
      g101 *= norm1.z;
      g111 *= norm1.w;
    
      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);
    
      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
      return 2.2 * n_xyz;
    }
    
    void main() {
        vec3 position = vPosition;
        float noiseVal = cnoise(position * 10.0);
        vec3 color = vec3(noiseVal * 0.5 + 0.5);


        float light = dot(vNormal * (sin(vScreenSpace.x) *0.5 + 0.5) + 0.75, normalize(vec3(0.0, 0.0, 0.5)));


        //strokes
        float stroke = cos((vScreenSpace.x - vScreenSpace.y) * 500.0);

        float smallNoise = cnoise(vec3(vScreenSpace * 400.0, 1.0)) * 0.5 + 0.5;
        float bigNoise = cnoise(vec3(vScreenSpace * 5.0, 1.0)) * 0.5 + 0.5;
        
        light += sin(bigNoise * 2.0 - 1.0);
        
        stroke += (smallNoise - sin(stroke)) + (bigNoise - cos(stroke) * 0.5); 
        stroke = smoothstep(light - 0.5, light + 0.5,stroke);

        gl_FragColor = vec4(vec3(stroke), 0.85);
    }
`,x=new zi({side:Vn,uniforms:{time:{value:0}},vertexShader:g,fragmentShader:v}),w=new Gn(c,x),A=new Gn(new Xa(.33,64,64),x);p.add(w),p.add(A);const b=()=>{requestAnimationFrame(b),y.position.lerp(new N(u,f,h),.033),r(u),o(f),l(h);let M=1.5,T=Date.now()*77e-5;A.position.set(Math.cos(T)*M,Math.cos(T),Math.sin(T)*M),A.rotation.y+=5e-4,x.uniforms.time.value+=.1,w.rotation.x+=.0066,w.rotation.y+=.0033,m.render(p,y)};let P=()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",P,!1),b(),()=>{_&&_.removeChild(m.domElement)}},[n,e,t]),xe.jsx("div",{className:"three-js",ref:d})};const gw=({cameraState:n,handleHeaderListClick:e})=>{const t=window.innerWidth>440?" ":xe.jsx("br",{});let i=Math.min(1.5,window.innerWidth/window.innerHeight*2);return xe.jsxs("header",{className:"header",children:[xe.jsxs("h1",{className:"header__title",onClick:()=>e(0,0,5,""),children:["Jakob",t,"Luter"]}),xe.jsxs("ul",{className:"header__list",children:[xe.jsx("li",{className:"header__list-item",onClick:()=>e(i,1,2.5,"works"),children:"Works"}),xe.jsx("li",{className:"header__list-item",onClick:()=>e(-i,1,2.5,"about"),children:"About"}),xe.jsx("li",{className:"header__list-item",onClick:()=>e(i,0,2.5,"contact"),children:"Contact"})]})]})};const vw="/assets/ranch-website-fd0b9944.jpg",_w="/assets/pollution-poll-ddc64099.jpg",xw="/assets/12right-cc4af2c1.jpg",yw="/assets/factoryonesherco-77ec05f6.jpg",Sw="/assets/factoryonemotorsports-b9838749.jpg",Mw="/assets/shercousa-f1a21fad.jpg",ww="/assets/vault-shercousa-eefd2444.jpg",Ew="/assets/sanantoniochessclub-9f3b4293.jpg",Tw="/assets/completechess-945847b2.jpg",Cw="/assets/completechessfoundation-8b3b61f2.jpg",Aw=()=>{const[n,e]=Ft.useState({title:"",img:"",description:"",link:""}),t=[{id:4,title:"Sherco USA",img:Mw,description:"Company site for US importer of Sherco Motorcycles. Wrote custom PHP, JavaScript, HTML, and CSS. Improved site speed, SEO, and security by managing hosting, automating backups, and implementing analytics.",link:"https://shercousa.com"},{id:6,title:"FactoryONE Motorsports",img:Sw,description:"Off-road aftermarket ecommerce site. Increased conversion rate by 5% month over month and 20,000+ impressions by integrating with Meta and Google business & analytics platform.",link:"https://factoryonemotorsports.com"},{id:5,title:"FactoryONE Sherco",img:yw,description:"Race team site for Sherco USA. Involved cross-collaboration with Sherco Marketing team and Progressive sponsorhsip team.",link:"https://factoryonesherco.com/"},{id:7,title:"Sherco Vault",img:ww,description:"Subscription based WordPress site for US Sherco Dealers resulting in $12,000+ monthly. Features site security and custom plugins via JavaScript, PHP, HTML, and CSS.",link:"https://vault.shercousa.com"},{id:2,title:"Pollution Poll",img:_w,description:"A full-stack application made to assist in climate awareness. Created in React and Node.js, utilizing Axios for HTTP requests, and consuming the Climatiq REST API.",link:"https://github.com/jluter/pollution-poll"},{id:3,title:"12Right",img:xw,description:"Custom WordPress site made in under 24 hours for a hangar at San Antonio International Airport. Assisted in the $15 million sale of the hangar by contracting company.",link:"https://12right.com"},{id:1,title:"Ranch Website",img:vw,description:"A mockup site for a local farm/ranch. Features custom styling and WordPress theme building.",link:"https://ranch-website.net"},{id:8,title:"San Antonio Chess Club",img:Ew,description:"Local chess club site for San Antonio. Contracted to automate events and registration.",link:"https://sanantoniochessclub.com"},{id:9,title:"Complete Chess",img:Tw,description:"Afterschool chess program based. Contracted to assist with site maintenance, event registration, and automating email marketing.",link:"https://completechesseducation.com"},{id:10,title:"Complete Chess Foundation",img:Cw,description:"Non-profit organization supporting San Antonio youths through chess. Contracted for site maintenance and stability, event registration, and automating digital marketing.",link:"https://completechessfoundation.org"}],i=r=>{e({title:r.title,img:r.img,description:r.description,link:r.link})};return xe.jsxs(xe.Fragment,{children:[xe.jsx("div",{className:"works-container",children:xe.jsx("ul",{className:"works-list",children:t.map(r=>xe.jsx("li",{onClick:()=>{i(r)},className:"works-list__item",children:xe.jsx("p",{className:"works-list__item--text",children:r.title},`title_${r.id}`)},r.id))})}),n.title&&xe.jsx("div",{className:"works-article-container",children:xe.jsxs("article",{className:"works-article",children:[xe.jsx("h4",{className:"works-article__title",children:n.title}),xe.jsx("a",{className:"works-article__link",target:"_blank",rel:"noopener noreferrer",href:n.link,children:xe.jsx("img",{className:"works-article__img",src:n.img})}),xe.jsx("div",{className:"works-article__description-wrapper",children:xe.jsx("div",{className:"works-article__description",children:n.description})})]})})]})};const Ig="/assets/resume-9d793315.pdf";let bw=Math.min(1.5,window.innerWidth/window.innerHeight*2);const Pw=({handleHeaderListClick:n})=>xe.jsxs("div",{className:"about",children:[xe.jsx("p",{className:"about__paragraph",children:"Thank you for visiting. I'm a full stack developer interested in learning, collaborating, and exploring new opportunities."}),xe.jsxs("p",{className:"about__paragraph",children:["Outside of tech, I feel passionate about the environment, music, and tabletop gaming. Feel free to ",xe.jsx("span",{className:"about__contact-me",onClick:()=>{n(bw,-1,2.5,"contact")},children:"contact me"})," for any personal or professional inquiries. "]}),xe.jsxs("p",{className:"about__paragraph",children:["Please take a look at my ",xe.jsx("a",{className:"about__link",href:Ig,target:"_blank",rel:"noreferrer noopener",children:"resume"}),", or my ",xe.jsx("a",{className:"about__link",href:"https://stackshare.io/jluter/my-stack",target:"_blank",rel:"noreferrer noopener",children:"tech stack"}),"."]})]});var Ug={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sc=Mi.createContext&&Mi.createContext(Ug),Di=globalThis&&globalThis.__assign||function(){return Di=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Di.apply(this,arguments)},Lw=globalThis&&globalThis.__rest||function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t};function Ng(n){return n&&n.map(function(e,t){return Mi.createElement(e.tag,Di({key:t},e.attr),Ng(e.child))})}function hl(n){return function(e){return Mi.createElement(Rw,Di({attr:Di({},n.attr)},e),Ng(n.child))}}function Rw(n){var e=function(t){var i=n.attr,r=n.size,s=n.title,o=Lw(n,["attr","size","title"]),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),Mi.createElement("svg",Di({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:Di(Di({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Mi.createElement("title",null,s),n.children)};return Sc!==void 0?Mi.createElement(Sc.Consumer,null,function(t){return e(t)}):e(Ug)}function Dw(n){return hl({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(n)}function Iw(n){return hl({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(n)}function Uw(n){return hl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"}}]})(n)}function Nw(n){return hl({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"}}]})(n)}let zw=Math.min(1.5,window.innerWidth/window.innerHeight*2);const kw=({handleHeaderListClick:n})=>xe.jsx(Sc.Provider,{value:{className:"react-icons",size:`${zw}rem`},children:xe.jsxs("div",{className:"contact",children:[xe.jsxs("a",{href:"https://github.com/jluter",className:"contact__link",target:"_blank",rel:"norefferer noopener",children:[xe.jsx("div",{className:"contact__text",children:"github.com/jluter"}),xe.jsx(Dw,{})]}),xe.jsxs("a",{href:"https://www.linkedin.com/in/jakob-luter/",className:"contact__link",target:"_blank",rel:"norefferer noopener",children:[xe.jsx("div",{className:"contact__text",children:"linked.com/in/jakob-luter"}),xe.jsx(Iw,{})]}),xe.jsxs("a",{href:"mailto:jakobluter20@gmail.com",className:"contact__link",target:"_blank",rel:"norefferer noopener",children:[xe.jsx("div",{className:"contact__text",children:"jakobluter20@gmail.com"}),xe.jsx(Uw,{})]}),xe.jsxs("a",{href:Ig,className:"contact__link",target:"_blank",rel:"norefferer noopener",children:[xe.jsx("div",{className:"contact__text",children:"resume"}),xe.jsx(Nw,{})]})]})}),Fw=()=>{Ft.useEffect(()=>{function l(){n.current&&(t(n.current.clientHeight),r(n.current.clientWidth))}return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const n=Ft.useRef(null),[e,t]=Ft.useState(0),[i,r]=Ft.useState(0);Ft.useEffect(()=>{n.current&&(t(n.current.clientHeight),r(n.current.clientWidth))},[]);const[s,o]=Ft.useState({cameraX:0,cameraY:0,cameraZ:5,name:""}),a=(l,u,f,h)=>{o({cameraX:l,cameraY:u,cameraZ:f,name:h})};return xe.jsx("div",{className:"app",children:xe.jsxs("main",{ref:n,className:"main-container",children:[xe.jsx(gw,{cameraState:s,handleHeaderListClick:a}),s.name==="works"?xe.jsx(Aw,{}):"",s.name==="about"?xe.jsx(Pw,{handleHeaderListClick:a}):"",s.name==="contact"?xe.jsx(kw,{handleHeaderListClick:a}):"",xe.jsx(mw,{mainElementWidth:i,mainElementHeight:e,cameraState:s})]})})},Ow=yu.createRoot(document.getElementById("root"));Ow.render(xe.jsx(Mi.StrictMode,{children:xe.jsx(Fw,{})}));
