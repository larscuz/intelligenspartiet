(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rp={exports:{}},kl={};var ov;function hM(){if(ov)return kl;ov=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return kl.Fragment=t,kl.jsx=i,kl.jsxs=i,kl}var lv;function dM(){return lv||(lv=1,rp.exports=hM()),rp.exports}var Tn=dM(),op={exports:{}},_e={};var cv;function pM(){if(cv)return _e;cv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function S(O,Y,dt){this.props=O,this.context=Y,this.refs=M,this.updater=dt||E}S.prototype.isReactComponent={},S.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function w(){}w.prototype=S.prototype;function P(O,Y,dt){this.props=O,this.context=Y,this.refs=M,this.updater=dt||E}var L=P.prototype=new w;L.constructor=P,N(L,S.prototype),L.isPureReactComponent=!0;var B=Array.isArray;function z(){}var H={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function C(O,Y,dt){var At=dt.ref;return{$$typeof:r,type:O,key:Y,ref:At!==void 0?At:null,props:dt}}function ct(O,Y){return C(O.type,Y,O.props)}function F(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function $(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(dt){return Y[dt]})}var J=/\/+/g;function tt(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?$(""+O.key):Y.toString(36)}function j(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(z,z):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function D(O,Y,dt,At,Dt){var it=typeof O;(it==="undefined"||it==="boolean")&&(O=null);var pt=!1;if(O===null)pt=!0;else switch(it){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(O.$$typeof){case r:case t:pt=!0;break;case _:return pt=O._init,D(pt(O._payload),Y,dt,At,Dt)}}if(pt)return Dt=Dt(O),pt=At===""?"."+tt(O,0):At,B(Dt)?(dt="",pt!=null&&(dt=pt.replace(J,"$&/")+"/"),D(Dt,Y,dt,"",function(Xt){return Xt})):Dt!=null&&(F(Dt)&&(Dt=ct(Dt,dt+(Dt.key==null||O&&O.key===Dt.key?"":(""+Dt.key).replace(J,"$&/")+"/")+pt)),Y.push(Dt)),1;pt=0;var yt=At===""?".":At+":";if(B(O))for(var Lt=0;Lt<O.length;Lt++)At=O[Lt],it=yt+tt(At,Lt),pt+=D(At,Y,dt,it,Dt);else if(Lt=y(O),typeof Lt=="function")for(O=Lt.call(O),Lt=0;!(At=O.next()).done;)At=At.value,it=yt+tt(At,Lt++),pt+=D(At,Y,dt,it,Dt);else if(it==="object"){if(typeof O.then=="function")return D(j(O),Y,dt,At,Dt);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return pt}function U(O,Y,dt){if(O==null)return O;var At=[],Dt=0;return D(O,At,"","",function(it){return Y.call(dt,it,Dt++)}),At}function q(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(dt){(O._status===0||O._status===-1)&&(O._status=1,O._result=dt)},function(dt){(O._status===0||O._status===-1)&&(O._status=2,O._result=dt)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var et=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},St={map:U,forEach:function(O,Y,dt){U(O,function(){Y.apply(this,arguments)},dt)},count:function(O){var Y=0;return U(O,function(){Y++}),Y},toArray:function(O){return U(O,function(Y){return Y})||[]},only:function(O){if(!F(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return _e.Activity=x,_e.Children=St,_e.Component=S,_e.Fragment=i,_e.Profiler=l,_e.PureComponent=P,_e.StrictMode=s,_e.Suspense=m,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,_e.__COMPILER_RUNTIME={__proto__:null,c:function(O){return H.H.useMemoCache(O)}},_e.cache=function(O){return function(){return O.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(O,Y,dt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=N({},O.props),Dt=O.key;if(Y!=null)for(it in Y.key!==void 0&&(Dt=""+Y.key),Y)!b.call(Y,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&Y.ref===void 0||(At[it]=Y[it]);var it=arguments.length-2;if(it===1)At.children=dt;else if(1<it){for(var pt=Array(it),yt=0;yt<it;yt++)pt[yt]=arguments[yt+2];At.children=pt}return C(O.type,Dt,At)},_e.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},_e.createElement=function(O,Y,dt){var At,Dt={},it=null;if(Y!=null)for(At in Y.key!==void 0&&(it=""+Y.key),Y)b.call(Y,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Dt[At]=Y[At]);var pt=arguments.length-2;if(pt===1)Dt.children=dt;else if(1<pt){for(var yt=Array(pt),Lt=0;Lt<pt;Lt++)yt[Lt]=arguments[Lt+2];Dt.children=yt}if(O&&O.defaultProps)for(At in pt=O.defaultProps,pt)Dt[At]===void 0&&(Dt[At]=pt[At]);return C(O,it,Dt)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(O){return{$$typeof:d,render:O}},_e.isValidElement=F,_e.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:q}},_e.memo=function(O,Y){return{$$typeof:p,type:O,compare:Y===void 0?null:Y}},_e.startTransition=function(O){var Y=H.T,dt={};H.T=dt;try{var At=O(),Dt=H.S;Dt!==null&&Dt(dt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(z,et)}catch(it){et(it)}finally{Y!==null&&dt.types!==null&&(Y.types=dt.types),H.T=Y}},_e.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},_e.use=function(O){return H.H.use(O)},_e.useActionState=function(O,Y,dt){return H.H.useActionState(O,Y,dt)},_e.useCallback=function(O,Y){return H.H.useCallback(O,Y)},_e.useContext=function(O){return H.H.useContext(O)},_e.useDebugValue=function(){},_e.useDeferredValue=function(O,Y){return H.H.useDeferredValue(O,Y)},_e.useEffect=function(O,Y){return H.H.useEffect(O,Y)},_e.useEffectEvent=function(O){return H.H.useEffectEvent(O)},_e.useId=function(){return H.H.useId()},_e.useImperativeHandle=function(O,Y,dt){return H.H.useImperativeHandle(O,Y,dt)},_e.useInsertionEffect=function(O,Y){return H.H.useInsertionEffect(O,Y)},_e.useLayoutEffect=function(O,Y){return H.H.useLayoutEffect(O,Y)},_e.useMemo=function(O,Y){return H.H.useMemo(O,Y)},_e.useOptimistic=function(O,Y){return H.H.useOptimistic(O,Y)},_e.useReducer=function(O,Y,dt){return H.H.useReducer(O,Y,dt)},_e.useRef=function(O){return H.H.useRef(O)},_e.useState=function(O){return H.H.useState(O)},_e.useSyncExternalStore=function(O,Y,dt){return H.H.useSyncExternalStore(O,Y,dt)},_e.useTransition=function(){return H.H.useTransition()},_e.version="19.2.4",_e}var uv;function cm(){return uv||(uv=1,op.exports=pM()),op.exports}var Sn=cm(),lp={exports:{}},Xl={},cp={exports:{}},up={};var fv;function mM(){return fv||(fv=1,(function(r){function t(D,U){var q=D.length;D.push(U);t:for(;0<q;){var et=q-1>>>1,St=D[et];if(0<l(St,U))D[et]=U,D[q]=St,q=et;else break t}}function i(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var U=D[0],q=D.pop();if(q!==U){D[0]=q;t:for(var et=0,St=D.length,O=St>>>1;et<O;){var Y=2*(et+1)-1,dt=D[Y],At=Y+1,Dt=D[At];if(0>l(dt,q))At<St&&0>l(Dt,dt)?(D[et]=Dt,D[At]=q,et=At):(D[et]=dt,D[Y]=q,et=Y);else if(At<St&&0>l(Dt,q))D[et]=Dt,D[At]=q,et=At;else break t}}return U}function l(D,U){var q=D.sortIndex-U.sortIndex;return q!==0?q:D.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,g=3,y=!1,E=!1,N=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(D){for(var U=i(p);U!==null;){if(U.callback===null)s(p);else if(U.startTime<=D)s(p),U.sortIndex=U.expirationTime,t(m,U);else break;U=i(p)}}function B(D){if(N=!1,L(D),!E)if(i(m)!==null)E=!0,z||(z=!0,$());else{var U=i(p);U!==null&&j(B,U.startTime-D)}}var z=!1,H=-1,b=5,C=-1;function ct(){return M?!0:!(r.unstable_now()-C<b)}function F(){if(M=!1,z){var D=r.unstable_now();C=D;var U=!0;try{t:{E=!1,N&&(N=!1,w(H),H=-1),y=!0;var q=g;try{e:{for(L(D),x=i(m);x!==null&&!(x.expirationTime>D&&ct());){var et=x.callback;if(typeof et=="function"){x.callback=null,g=x.priorityLevel;var St=et(x.expirationTime<=D);if(D=r.unstable_now(),typeof St=="function"){x.callback=St,L(D),U=!0;break e}x===i(m)&&s(m),L(D)}else s(m);x=i(m)}if(x!==null)U=!0;else{var O=i(p);O!==null&&j(B,O.startTime-D),U=!1}}break t}finally{x=null,g=q,y=!1}U=void 0}}finally{U?$():z=!1}}}var $;if(typeof P=="function")$=function(){P(F)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,tt=J.port2;J.port1.onmessage=F,$=function(){tt.postMessage(null)}}else $=function(){S(F,0)};function j(D,U){H=S(function(){D(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(D){switch(g){case 1:case 2:case 3:var U=3;break;default:U=g}var q=g;g=U;try{return D()}finally{g=q}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=g;g=D;try{return U()}finally{g=q}},r.unstable_scheduleCallback=function(D,U,q){var et=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?et+q:et):q=et,D){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=q+St,D={id:_++,callback:U,priorityLevel:D,startTime:q,expirationTime:St,sortIndex:-1},q>et?(D.sortIndex=q,t(p,D),i(m)===null&&D===i(p)&&(N?(w(H),H=-1):N=!0,j(B,q-et))):(D.sortIndex=St,t(m,D),E||y||(E=!0,z||(z=!0,$()))),D},r.unstable_shouldYield=ct,r.unstable_wrapCallback=function(D){var U=g;return function(){var q=g;g=U;try{return D.apply(this,arguments)}finally{g=q}}}})(up)),up}var hv;function gM(){return hv||(hv=1,cp.exports=mM()),cp.exports}var fp={exports:{}},di={};var dv;function _M(){if(dv)return di;dv=1;var r=cm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return di.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,di.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},di.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},di.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},di.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},di.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},di.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},di.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},di.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},di.requestFormReset=function(m){s.d.r(m)},di.unstable_batchedUpdates=function(m,p){return m(p)},di.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},di.useFormStatus=function(){return h.H.useHostTransitionStatus()},di.version="19.2.4",di}var pv;function vM(){if(pv)return fp.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fp.exports=_M(),fp.exports}var mv;function xM(){if(mv)return Xl;mv=1;var r=gM(),t=cm(),i=vM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case P:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var j=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},et=[],St=-1;function O(e){return{current:e}}function Y(e){0>St||(e.current=et[St],et[St]=null,St--)}function dt(e,n){St++,et[St]=e.current,e.current=n}var At=O(null),Dt=O(null),it=O(null),pt=O(null);function yt(e,n){switch(dt(it,n),dt(Dt,e),dt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?D_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=D_(n),e=U_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(At),dt(At,e)}function Lt(){Y(At),Y(Dt),Y(it)}function Xt(e){e.memoizedState!==null&&dt(pt,e);var n=At.current,a=U_(n,e.type);n!==a&&(dt(Dt,e),dt(At,a))}function ne(e){Dt.current===e&&(Y(At),Y(Dt)),pt.current===e&&(Y(pt),zl._currentValue=q)}var ln,ve;function oe(e){if(ln===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ln=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ln+e+ve}var ke=!1;function he(e,n){if(!e||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ut){var lt=ut}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ut){lt=ut}e.call(vt.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var G=v.split(`
`),ot=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ot.length)for(o=G.length-1,u=ot.length-1;1<=o&&0<=u&&G[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ot[u]){var gt=`
`+G[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function nn(e,n){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return oe("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=nn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $e=Object.prototype.hasOwnProperty,Ae=r.unstable_scheduleCallback,Xe=r.unstable_cancelCallback,Qt=r.unstable_shouldYield,I=r.unstable_requestPaint,T=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,mt=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,jt=r.unstable_LowPriority,Ct=r.unstable_IdlePriority,ie=r.log,re=r.unstable_setDisableYieldValue,bt=null,Tt=null;function zt(e){if(typeof ie=="function"&&re(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(bt,e)}catch{}}var Pt=Math.clz32?Math.clz32:W,Ht=Math.log,ge=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ht(e)/ge|0)|0}var wt=256,Et=262144,Ft=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Mt(o):(v&=R,v!==0?u=Mt(v):a||(a=R&~e,a!==0&&(u=Mt(a))))):(R=o&~f,R!==0?u=Mt(R):v!==0?u=Mt(v):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Vt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Jt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function ze(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function jn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zn(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,ot=e.hiddenUpdates;for(a=v&~a;0<a;){var gt=31-Pt(a),vt=1<<gt;R[gt]=0,G[gt]=-1;var lt=ot[gt];if(lt!==null)for(ot[gt]=null,gt=0;gt<lt.length;gt++){var ut=lt[gt];ut!==null&&(ut.lane&=-536870913)}a&=~vt}o!==0&&Na(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Na(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Fi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ys(e,n){var a=n&-n;return a=(a&42)!==0?1:Ya(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ya(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ki(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:tv(e.type))}function pa(e,n){var a=U.p;try{return U.p=e,n()}finally{U.p=a}}var bi=Math.random().toString(36).slice(2),An="__reactFiber$"+bi,Dn="__reactProps$"+bi,ma="__reactContainer$"+bi,La="__reactEvents$"+bi,Vr="__reactListeners$"+bi,kr="__reactHandles$"+bi,ar="__reactResources$"+bi,Ai="__reactMarker$"+bi;function Ms(e){delete e[An],delete e[Dn],delete e[La],delete e[Vr],delete e[kr]}function ga(e){var n=e[An];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ma]||a[An]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=B_(e);e!==null;){if(a=e[An])return a;e=B_(e)}return n}e=a,a=e.parentNode}return null}function cn(e){if(e=e[An]||e[ma]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function kn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function A(e){var n=e[ar];return n||(n=e[ar]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[Ai]=!0}var at=new Set,rt={};function nt(e,n){Nt(e,n),Nt(e+"Capture",n)}function Nt(e,n){for(rt[e]=n,e=0;e<n.length;e++)at.add(n[e])}var Gt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ot={},qt={};function $t(e){return $e.call(qt,e)?!0:$e.call(Ot,e)?!1:Gt.test(e)?qt[e]=!0:(Ot[e]=!0,!1)}function se(e,n,a){if($t(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function me(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function un(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ne(e){if(!e._valueTracker){var n=un(e)?"checked":"value";e._valueTracker=fn(e,n,""+e[n])}}function yn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=un(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kn=/[\n"\\]/g;function ue(e){return e.replace(Kn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Un(e,n,a,o,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+de(n)):e.value!==""+de(n)&&(e.value=""+de(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Ri(e,v,de(n)):a!=null?Ri(e,v,de(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+de(R):e.removeAttribute("name")}function ii(e,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ne(e);return}a=a!=null?""+de(a):"",n=n!=null?""+de(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ne(e)}function Ri(e,n,a){n==="number"&&kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ai(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+de(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function We(e,n,a){if(n!=null&&(n=""+de(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+de(a):""}function hn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(j(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=de(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ne(e)}function Rn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ci(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ci(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ci(e,f,n[f])}function qa(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sr(e){return gc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var rr=null;function Wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oa=null,ja=null;function nl(e){var n=cn(e);if(n&&(e=n.stateNode)){var a=e[Dn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Un(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Dn]||null;if(!u)throw Error(s(90));Un(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&yn(o)}break t;case"textarea":We(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ai(e,!!a.multiple,n,!1)}}}var Yr=!1;function il(e,n,a){if(Yr)return e(n,a);Yr=!0;try{var o=e(n);return o}finally{if(Yr=!1,(Oa!==null||ja!==null)&&($c(),Oa&&(n=Oa,e=ja,ja=Oa=null,nl(n),e)))for(n=0;n<e.length;n++)nl(e[n])}}function Rt(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Dn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=!1;if(Yt)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){te=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{te=!1}var It=null,fe=null,Re=null;function Qe(){if(Re)return Re;var e,n=fe,a=n.length,o,u="value"in It?It.value:It.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return Re=u.slice(e,1<o?1-o:void 0)}function Ye(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qn(){return!0}function hi(){return!1}function Fe(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Qn:hi,this.isPropagationStopped=hi,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),n}var Ce={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qe=Fe(Ce),dn=x({},Ce,{view:0,detail:0}),gn=Fe(dn),wi,_a,Di,_i=x({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Di&&(Di&&e.type==="mousemove"?(wi=e.screenX-Di.screenX,_a=e.screenY-Di.screenY):_a=wi=0,Di=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:_a}}),Ut=Fe(_i),Nn=x({},_i,{dataTransfer:0}),zi=Fe(Nn),Le=x({},dn,{relatedTarget:0}),we=Fe(Le),En=x({},Ce,{animationName:0,elapsedTime:0,pseudoElement:0}),Ln=Fe(En),vi=x({},Ce,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ee=Fe(vi),Pn=x({},Ce,{data:0}),si=Fe(Pn),ri={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},va={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function or(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=va[e])?!!n[e]:!1}function lr(){return or}var Za=x({},dn,{key:function(e){if(e.key){var n=ri[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ye(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(e){return e.type==="keypress"?Ye(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ye(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),al=Fe(Za),sl=x({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_c=Fe(sl),AS=x({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr}),RS=Fe(AS),CS=x({},Ce,{propertyName:0,elapsedTime:0,pseudoElement:0}),wS=Fe(CS),DS=x({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),US=Fe(DS),NS=x({},Ce,{newState:0,oldState:0}),LS=Fe(NS),OS=[9,13,27,32],hh=Yt&&"CompositionEvent"in window,rl=null;Yt&&"documentMode"in document&&(rl=document.documentMode);var IS=Yt&&"TextEvent"in window&&!rl,Pm=Yt&&(!hh||rl&&8<rl&&11>=rl),Fm=" ",Bm=!1;function zm(e,n){switch(e){case"keyup":return OS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function PS(e,n){switch(e){case"compositionend":return Hm(n);case"keypress":return n.which!==32?null:(Bm=!0,Fm);case"textInput":return e=n.data,e===Fm&&Bm?null:e;default:return null}}function FS(e,n){if(qr)return e==="compositionend"||!hh&&zm(e,n)?(e=Qe(),Re=fe=It=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pm&&n.locale!=="ko"?null:n.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!BS[e.type]:n==="textarea"}function Vm(e,n,a,o){Oa?ja?ja.push(o):ja=[o]:Oa=o,n=ru(n,"onChange"),0<n.length&&(a=new qe("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ol=null,ll=null;function zS(e){T_(e,0)}function vc(e){var n=kn(e);if(yn(n))return e}function km(e,n){if(e==="change")return n}var Xm=!1;if(Yt){var dh;if(Yt){var ph="oninput"in document;if(!ph){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),ph=typeof Wm.oninput=="function"}dh=ph}else dh=!1;Xm=dh&&(!document.documentMode||9<document.documentMode)}function Ym(){ol&&(ol.detachEvent("onpropertychange",qm),ll=ol=null)}function qm(e){if(e.propertyName==="value"&&vc(ll)){var n=[];Vm(n,ll,e,Wr(e)),il(zS,n)}}function HS(e,n,a){e==="focusin"?(Ym(),ol=n,ll=a,ol.attachEvent("onpropertychange",qm)):e==="focusout"&&Ym()}function GS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc(ll)}function VS(e,n){if(e==="click")return vc(n)}function kS(e,n){if(e==="input"||e==="change")return vc(n)}function XS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Hi=typeof Object.is=="function"?Object.is:XS;function cl(e,n){if(Hi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!$e.call(n,u)||!Hi(e[u],n[u]))return!1}return!0}function jm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zm(e,n){var a=jm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jm(a)}}function Km(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Km(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=kt(e.document)}return n}function mh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var WS=Yt&&"documentMode"in document&&11>=document.documentMode,jr=null,gh=null,ul=null,_h=!1;function Jm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_h||jr==null||jr!==kt(o)||(o=jr,"selectionStart"in o&&mh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ul&&cl(ul,o)||(ul=o,o=ru(gh,"onSelect"),0<o.length&&(n=new qe("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=jr)))}function cr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},vh={},$m={};Yt&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function ur(e){if(vh[e])return vh[e];if(!Zr[e])return e;var n=Zr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in $m)return vh[e]=n[a];return e}var t0=ur("animationend"),e0=ur("animationiteration"),n0=ur("animationstart"),YS=ur("transitionrun"),qS=ur("transitionstart"),jS=ur("transitioncancel"),i0=ur("transitionend"),a0=new Map,xh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xh.push("scrollEnd");function xa(e,n){a0.set(e,n),nt(n,[e])}var xc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$i=[],Kr=0,Sh=0;function Sc(){for(var e=Kr,n=Sh=Kr=0;n<e;){var a=$i[n];$i[n++]=null;var o=$i[n];$i[n++]=null;var u=$i[n];$i[n++]=null;var f=$i[n];if($i[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&s0(a,u,f)}}function yc(e,n,a,o){$i[Kr++]=e,$i[Kr++]=n,$i[Kr++]=a,$i[Kr++]=o,Sh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yh(e,n,a,o){return yc(e,n,a,o),Mc(e)}function fr(e,n){return yc(e,null,null,n),Mc(e)}function s0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Mc(e){if(50<Nl)throw Nl=0,Dd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qr={};function ZS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gi(e,n,a,o){return new ZS(e,n,a,o)}function Mh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ka(e,n){var a=e.alternate;return a===null?(a=Gi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function r0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ec(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Mh(e)&&(v=1);else if(typeof e=="string")v=tM(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Gi(31,a,n,u),e.elementType=C,e.lanes=f,e;case N:return hr(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=Gi(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case B:return e=Gi(13,a,n,u),e.elementType=B,e.lanes=f,e;case z:return e=Gi(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:v=10;break t;case w:v=9;break t;case L:v=11;break t;case H:v=14;break t;case b:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Gi(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function hr(e,n,a,o){return e=Gi(7,e,o,n),e.lanes=a,e}function Eh(e,n,a){return e=Gi(6,e,null,n),e.lanes=a,e}function o0(e){var n=Gi(18,null,null,0);return n.stateNode=e,n}function Th(e,n,a){return n=Gi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var l0=new WeakMap;function ta(e,n){if(typeof e=="object"&&e!==null){var a=l0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},l0.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Jr=[],$r=0,Tc=null,fl=0,ea=[],na=0,Es=null,Ia=1,Pa="";function Qa(e,n){Jr[$r++]=fl,Jr[$r++]=Tc,Tc=e,fl=n}function c0(e,n,a){ea[na++]=Ia,ea[na++]=Pa,ea[na++]=Es,Es=e;var o=Ia;e=Pa;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Ia=1<<32-Pt(n)+u|a<<u|o,Pa=f+e}else Ia=1<<f|a<<u|o,Pa=e}function bh(e){e.return!==null&&(Qa(e,1),c0(e,1,0))}function Ah(e){for(;e===Tc;)Tc=Jr[--$r],Jr[$r]=null,fl=Jr[--$r],Jr[$r]=null;for(;e===Es;)Es=ea[--na],ea[na]=null,Pa=ea[--na],ea[na]=null,Ia=ea[--na],ea[na]=null}function u0(e,n){ea[na++]=Ia,ea[na++]=Pa,ea[na++]=Es,Ia=n.id,Pa=n.overflow,Es=e}var oi=null,_n=null,Be=!1,Ts=null,ia=!1,Rh=Error(s(519));function bs(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hl(ta(n,e)),Rh}function f0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[An]=e,n[Dn]=o,a){case"dialog":Ue("cancel",n),Ue("close",n);break;case"iframe":case"object":case"embed":Ue("load",n);break;case"video":case"audio":for(a=0;a<Ol.length;a++)Ue(Ol[a],n);break;case"source":Ue("error",n);break;case"img":case"image":case"link":Ue("error",n),Ue("load",n);break;case"details":Ue("toggle",n);break;case"input":Ue("invalid",n),ii(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ue("invalid",n);break;case"textarea":Ue("invalid",n),hn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||C_(n.textContent,a)?(o.popover!=null&&(Ue("beforetoggle",n),Ue("toggle",n)),o.onScroll!=null&&Ue("scroll",n),o.onScrollEnd!=null&&Ue("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||bs(e,!0)}function h0(e){for(oi=e.return;oi;)switch(oi.tag){case 5:case 31:case 13:ia=!1;return;case 27:case 3:ia=!0;return;default:oi=oi.return}}function to(e){if(e!==oi)return!1;if(!Be)return h0(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wd(e.type,e.memoizedProps)),a=!a),a&&_n&&bs(e),h0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_n=F_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_n=F_(e)}else n===27?(n=_n,zs(e.type)?(e=Kd,Kd=null,_n=e):_n=n):_n=oi?sa(e.stateNode.nextSibling):null;return!0}function dr(){_n=oi=null,Be=!1}function Ch(){var e=Ts;return e!==null&&(Oi===null?Oi=e:Oi.push.apply(Oi,e),Ts=null),e}function hl(e){Ts===null?Ts=[e]:Ts.push(e)}var wh=O(null),pr=null,Ja=null;function As(e,n,a){dt(wh,n._currentValue),n._currentValue=a}function $a(e){e._currentValue=wh.current,Y(wh)}function Dh(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Uh(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Dh(f.return,a,e),o||(v=null);break t}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Dh(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function eo(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;Hi(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===pt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}u=u.return}e!==null&&Uh(n,e,a,o),n.flags|=262144}function bc(e){for(e=e.firstContext;e!==null;){if(!Hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mr(e){pr=e,Ja=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function li(e){return d0(pr,e)}function Ac(e,n){return pr===null&&mr(e),d0(e,n)}function d0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ja===null){if(e===null)throw Error(s(308));Ja=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ja=Ja.next=n;return a}var KS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},QS=r.unstable_scheduleCallback,JS=r.unstable_NormalPriority,Fn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nh(){return{controller:new KS,data:new Map,refCount:0}}function dl(e){e.refCount--,e.refCount===0&&QS(JS,function(){e.controller.abort()})}var pl=null,Lh=0,no=0,io=null;function $S(e,n){if(pl===null){var a=pl=[];Lh=0,no=Pd(),io={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Lh++,n.then(p0,p0),n}function p0(){if(--Lh===0&&pl!==null){io!==null&&(io.status="fulfilled");var e=pl;pl=null,no=0,io=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ty(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var m0=D.S;D.S=function(e,n){Jg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$S(e,n),m0!==null&&m0(e,n)};var gr=O(null);function Oh(){var e=gr.current;return e!==null?e:pn.pooledCache}function Rc(e,n){n===null?dt(gr,gr.current):dt(gr,n.pool)}function g0(){var e=Oh();return e===null?null:{parent:Fn._currentValue,pool:e}}var ao=Error(s(460)),Ih=Error(s(474)),Cc=Error(s(542)),wc={then:function(){}};function _0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function v0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,S0(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=pn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,S0(e),e}throw vr=n,ao}}function _r(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vr=a,ao):a}}var vr=null;function x0(){if(vr===null)throw Error(s(459));var e=vr;return vr=null,e}function S0(e){if(e===ao||e===Cc)throw Error(s(483))}var so=null,ml=0;function Dc(e){var n=ml;return ml+=1,so===null&&(so=[]),v0(so,e,n)}function gl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Uc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function y0(e){function n(K,k){if(e){var st=K.deletions;st===null?(K.deletions=[k],K.flags|=16):st.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=Ka(K,k),K.index=0,K.sibling=null,K}function f(K,k,st){return K.index=st,e?(st=K.alternate,st!==null?(st=st.index,st<k?(K.flags|=67108866,k):st):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function v(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,k,st,_t){return k===null||k.tag!==6?(k=Eh(st,K.mode,_t),k.return=K,k):(k=u(k,st),k.return=K,k)}function G(K,k,st,_t){var ae=st.type;return ae===N?gt(K,k,st.props.children,_t,st.key):k!==null&&(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===b&&_r(ae)===k.type)?(k=u(k,st.props),gl(k,st),k.return=K,k):(k=Ec(st.type,st.key,st.props,null,K.mode,_t),gl(k,st),k.return=K,k)}function ot(K,k,st,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==st.containerInfo||k.stateNode.implementation!==st.implementation?(k=Th(st,K.mode,_t),k.return=K,k):(k=u(k,st.children||[]),k.return=K,k)}function gt(K,k,st,_t,ae){return k===null||k.tag!==7?(k=hr(st,K.mode,_t,ae),k.return=K,k):(k=u(k,st),k.return=K,k)}function vt(K,k,st){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Eh(""+k,K.mode,st),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return st=Ec(k.type,k.key,k.props,null,K.mode,st),gl(st,k),st.return=K,st;case E:return k=Th(k,K.mode,st),k.return=K,k;case b:return k=_r(k),vt(K,k,st)}if(j(k)||$(k))return k=hr(k,K.mode,st,null),k.return=K,k;if(typeof k.then=="function")return vt(K,Dc(k),st);if(k.$$typeof===P)return vt(K,Ac(K,k),st);Uc(K,k)}return null}function lt(K,k,st,_t){var ae=k!==null?k.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return ae!==null?null:R(K,k,""+st,_t);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case y:return st.key===ae?G(K,k,st,_t):null;case E:return st.key===ae?ot(K,k,st,_t):null;case b:return st=_r(st),lt(K,k,st,_t)}if(j(st)||$(st))return ae!==null?null:gt(K,k,st,_t,null);if(typeof st.then=="function")return lt(K,k,Dc(st),_t);if(st.$$typeof===P)return lt(K,k,Ac(K,st),_t);Uc(K,st)}return null}function ut(K,k,st,_t,ae){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(st)||null,R(k,K,""+_t,ae);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return K=K.get(_t.key===null?st:_t.key)||null,G(k,K,_t,ae);case E:return K=K.get(_t.key===null?st:_t.key)||null,ot(k,K,_t,ae);case b:return _t=_r(_t),ut(K,k,st,_t,ae)}if(j(_t)||$(_t))return K=K.get(st)||null,gt(k,K,_t,ae,null);if(typeof _t.then=="function")return ut(K,k,st,Dc(_t),ae);if(_t.$$typeof===P)return ut(K,k,st,Ac(k,_t),ae);Uc(k,_t)}return null}function Kt(K,k,st,_t){for(var ae=null,je=null,ee=k,ye=k=0,Ie=null;ee!==null&&ye<st.length;ye++){ee.index>ye?(Ie=ee,ee=null):Ie=ee.sibling;var Ze=lt(K,ee,st[ye],_t);if(Ze===null){ee===null&&(ee=Ie);break}e&&ee&&Ze.alternate===null&&n(K,ee),k=f(Ze,k,ye),je===null?ae=Ze:je.sibling=Ze,je=Ze,ee=Ie}if(ye===st.length)return a(K,ee),Be&&Qa(K,ye),ae;if(ee===null){for(;ye<st.length;ye++)ee=vt(K,st[ye],_t),ee!==null&&(k=f(ee,k,ye),je===null?ae=ee:je.sibling=ee,je=ee);return Be&&Qa(K,ye),ae}for(ee=o(ee);ye<st.length;ye++)Ie=ut(ee,K,ye,st[ye],_t),Ie!==null&&(e&&Ie.alternate!==null&&ee.delete(Ie.key===null?ye:Ie.key),k=f(Ie,k,ye),je===null?ae=Ie:je.sibling=Ie,je=Ie);return e&&ee.forEach(function(Xs){return n(K,Xs)}),Be&&Qa(K,ye),ae}function ce(K,k,st,_t){if(st==null)throw Error(s(151));for(var ae=null,je=null,ee=k,ye=k=0,Ie=null,Ze=st.next();ee!==null&&!Ze.done;ye++,Ze=st.next()){ee.index>ye?(Ie=ee,ee=null):Ie=ee.sibling;var Xs=lt(K,ee,Ze.value,_t);if(Xs===null){ee===null&&(ee=Ie);break}e&&ee&&Xs.alternate===null&&n(K,ee),k=f(Xs,k,ye),je===null?ae=Xs:je.sibling=Xs,je=Xs,ee=Ie}if(Ze.done)return a(K,ee),Be&&Qa(K,ye),ae;if(ee===null){for(;!Ze.done;ye++,Ze=st.next())Ze=vt(K,Ze.value,_t),Ze!==null&&(k=f(Ze,k,ye),je===null?ae=Ze:je.sibling=Ze,je=Ze);return Be&&Qa(K,ye),ae}for(ee=o(ee);!Ze.done;ye++,Ze=st.next())Ze=ut(ee,K,ye,Ze.value,_t),Ze!==null&&(e&&Ze.alternate!==null&&ee.delete(Ze.key===null?ye:Ze.key),k=f(Ze,k,ye),je===null?ae=Ze:je.sibling=Ze,je=Ze);return e&&ee.forEach(function(fM){return n(K,fM)}),Be&&Qa(K,ye),ae}function rn(K,k,st,_t){if(typeof st=="object"&&st!==null&&st.type===N&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case y:t:{for(var ae=st.key;k!==null;){if(k.key===ae){if(ae=st.type,ae===N){if(k.tag===7){a(K,k.sibling),_t=u(k,st.props.children),_t.return=K,K=_t;break t}}else if(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===b&&_r(ae)===k.type){a(K,k.sibling),_t=u(k,st.props),gl(_t,st),_t.return=K,K=_t;break t}a(K,k);break}else n(K,k);k=k.sibling}st.type===N?(_t=hr(st.props.children,K.mode,_t,st.key),_t.return=K,K=_t):(_t=Ec(st.type,st.key,st.props,null,K.mode,_t),gl(_t,st),_t.return=K,K=_t)}return v(K);case E:t:{for(ae=st.key;k!==null;){if(k.key===ae)if(k.tag===4&&k.stateNode.containerInfo===st.containerInfo&&k.stateNode.implementation===st.implementation){a(K,k.sibling),_t=u(k,st.children||[]),_t.return=K,K=_t;break t}else{a(K,k);break}else n(K,k);k=k.sibling}_t=Th(st,K.mode,_t),_t.return=K,K=_t}return v(K);case b:return st=_r(st),rn(K,k,st,_t)}if(j(st))return Kt(K,k,st,_t);if($(st)){if(ae=$(st),typeof ae!="function")throw Error(s(150));return st=ae.call(st),ce(K,k,st,_t)}if(typeof st.then=="function")return rn(K,k,Dc(st),_t);if(st.$$typeof===P)return rn(K,k,Ac(K,st),_t);Uc(K,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,k!==null&&k.tag===6?(a(K,k.sibling),_t=u(k,st),_t.return=K,K=_t):(a(K,k),_t=Eh(st,K.mode,_t),_t.return=K,K=_t),v(K)):a(K,k)}return function(K,k,st,_t){try{ml=0;var ae=rn(K,k,st,_t);return so=null,ae}catch(ee){if(ee===ao||ee===Cc)throw ee;var je=Gi(29,ee,null,K.mode);return je.lanes=_t,je.return=K,je}}}var xr=y0(!0),M0=y0(!1),Rs=!1;function Ph(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ws(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ke&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Mc(e),s0(e,null,a),n}return yc(e,o,n,a),Mc(e)}function _l(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Fi(e,a)}}function Bh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var zh=!1;function vl(){if(zh){var e=io;if(e!==null)throw e}}function xl(e,n,a,o){zh=!1;var u=e.updateQueue;Rs=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,ot=G.next;G.next=null,v===null?f=ot:v.next=ot,v=G;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,R=gt.lastBaseUpdate,R!==v&&(R===null?gt.firstBaseUpdate=ot:R.next=ot,gt.lastBaseUpdate=G))}if(f!==null){var vt=u.baseState;v=0,gt=ot=G=null,R=f;do{var lt=R.lane&-536870913,ut=lt!==R.lane;if(ut?(Oe&lt)===lt:(o&lt)===lt){lt!==0&&lt===no&&(zh=!0),gt!==null&&(gt=gt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Kt=e,ce=R;lt=n;var rn=a;switch(ce.tag){case 1:if(Kt=ce.payload,typeof Kt=="function"){vt=Kt.call(rn,vt,lt);break t}vt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=ce.payload,lt=typeof Kt=="function"?Kt.call(rn,vt,lt):Kt,lt==null)break t;vt=x({},vt,lt);break t;case 2:Rs=!0}}lt=R.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},gt===null?(ot=gt=ut,G=vt):gt=gt.next=ut,v|=lt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);gt===null&&(G=vt),u.baseState=G,u.firstBaseUpdate=ot,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),Os|=v,e.lanes=v,e.memoizedState=vt}}function E0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function T0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)E0(a[e],n)}var ro=O(null),Nc=O(0);function b0(e,n){e=ls,dt(Nc,e),dt(ro,n),ls=e|n.baseLanes}function Hh(){dt(Nc,ls),dt(ro,ro.current)}function Gh(){ls=Nc.current,Y(ro),Y(Nc)}var Vi=O(null),aa=null;function Ds(e){var n=e.alternate;dt(On,On.current&1),dt(Vi,e),aa===null&&(n===null||ro.current!==null||n.memoizedState!==null)&&(aa=e)}function Vh(e){dt(On,On.current),dt(Vi,e),aa===null&&(aa=e)}function A0(e){e.tag===22?(dt(On,On.current),dt(Vi,e),aa===null&&(aa=e)):Us()}function Us(){dt(On,On.current),dt(Vi,Vi.current)}function ki(e){Y(Vi),aa===e&&(aa=null),Y(On)}var On=O(0);function Lc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jd(a)||Zd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ts=0,xe=null,an=null,Bn=null,Oc=!1,oo=!1,Sr=!1,Ic=0,Sl=0,lo=null,ey=0;function Cn(){throw Error(s(321))}function kh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Hi(e[a],n[a]))return!1;return!0}function Xh(e,n,a,o,u,f){return ts=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?cg:sd,Sr=!1,f=a(o,u),Sr=!1,oo&&(f=C0(n,a,o,u)),R0(e),f}function R0(e){D.H=El;var n=an!==null&&an.next!==null;if(ts=0,Bn=an=xe=null,Oc=!1,Sl=0,lo=null,n)throw Error(s(300));e===null||zn||(e=e.dependencies,e!==null&&bc(e)&&(zn=!0))}function C0(e,n,a,o){xe=e;var u=0;do{if(oo&&(lo=null),Sl=0,oo=!1,25<=u)throw Error(s(301));if(u+=1,Bn=an=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=ug,f=n(a,o)}while(oo);return f}function ny(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?yl(n):n,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(xe.flags|=1024),n}function Wh(){var e=Ic!==0;return Ic=0,e}function Yh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qh(e){if(Oc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Oc=!1}ts=0,Bn=an=xe=null,oo=!1,Sl=Ic=0,lo=null}function Si(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?xe.memoizedState=Bn=e:Bn=Bn.next=e,Bn}function In(){if(an===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var n=Bn===null?xe.memoizedState:Bn.next;if(n!==null)Bn=n,an=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},Bn===null?xe.memoizedState=Bn=e:Bn=Bn.next=e}return Bn}function Pc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(e){var n=Sl;return Sl+=1,lo===null&&(lo=[]),e=v0(lo,e,n),n=xe,(Bn===null?n.memoizedState:Bn.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?cg:sd),e}function Fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yl(e);if(e.$$typeof===P)return li(e)}throw Error(s(438,String(e)))}function jh(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pc(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ct;return n.index++,a}function es(e,n){return typeof n=="function"?n(e):n}function Bc(e){var n=In();return Zh(n,an,e)}function Zh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,G=null,ot=n,gt=!1;do{var vt=ot.lane&-536870913;if(vt!==ot.lane?(Oe&vt)===vt:(ts&vt)===vt){var lt=ot.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),vt===no&&(gt=!0);else if((ts&lt)===lt){ot=ot.next,lt===no&&(gt=!0);continue}else vt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},G===null?(R=G=vt,v=f):G=G.next=vt,xe.lanes|=lt,Os|=lt;vt=ot.action,Sr&&a(f,vt),f=ot.hasEagerState?ot.eagerState:a(f,vt)}else lt={lane:vt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},G===null?(R=G=lt,v=f):G=G.next=lt,xe.lanes|=vt,Os|=vt;ot=ot.next}while(ot!==null&&ot!==n);if(G===null?v=f:G.next=R,!Hi(f,e.memoizedState)&&(zn=!0,gt&&(a=io,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Kh(e){var n=In(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Hi(f,n.memoizedState)||(zn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function w0(e,n,a){var o=xe,u=In(),f=Be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Hi((an||u).memoizedState,a);if(v&&(u.memoizedState=a,zn=!0),u=u.queue,$h(N0.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||Bn!==null&&Bn.memoizedState.tag&1){if(o.flags|=2048,co(9,{destroy:void 0},U0.bind(null,o,u,a,n),null),pn===null)throw Error(s(349));f||(ts&127)!==0||D0(o,n,a)}return a}function D0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Pc(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function U0(e,n,a,o){n.value=a,n.getSnapshot=o,L0(n)&&O0(e)}function N0(e,n,a){return a(function(){L0(n)&&O0(e)})}function L0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Hi(e,a)}catch{return!0}}function O0(e){var n=fr(e,2);n!==null&&Ii(n,e,2)}function Qh(e){var n=Si();if(typeof e=="function"){var a=e;if(e=a(),Sr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},n}function I0(e,n,a,o){return e.baseState=a,Zh(e,an,typeof o=="function"?o:es)}function iy(e,n,a,o,u){if(Gc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};D.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,P0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function P0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=D.T,v={};D.T=v;try{var R=a(u,o),G=D.S;G!==null&&G(v,R),F0(e,n,R)}catch(ot){Jh(e,n,ot)}finally{f!==null&&v.types!==null&&(f.types=v.types),D.T=f}}else try{f=a(u,o),F0(e,n,f)}catch(ot){Jh(e,n,ot)}}function F0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){B0(e,n,o)},function(o){return Jh(e,n,o)}):B0(e,n,a)}function B0(e,n,a){n.status="fulfilled",n.value=a,z0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,P0(e,a)))}function Jh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,z0(n),n=n.next;while(n!==o)}e.action=null}function z0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function H0(e,n){return n}function G0(e,n){if(Be){var a=pn.formState;if(a!==null){t:{var o=xe;if(Be){if(_n){e:{for(var u=_n,f=ia;u.nodeType!==8;){if(!f){u=null;break e}if(u=sa(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){_n=sa(u.nextSibling),o=u.data==="F!";break t}}bs(o)}o=!1}o&&(n=a[0])}}return a=Si(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:H0,lastRenderedState:n},a.queue=o,a=rg.bind(null,xe,o),o.dispatch=a,o=Qh(!1),f=ad.bind(null,xe,!1,o.queue),o=Si(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=iy.bind(null,xe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function V0(e){var n=In();return k0(n,an,e)}function k0(e,n,a){if(n=Zh(e,n,H0)[0],e=Bc(es)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yl(n)}catch(v){throw v===ao?Cc:v}else o=n;n=In();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,co(9,{destroy:void 0},ay.bind(null,u,a),null)),[o,f,e]}function ay(e,n){e.action=n}function X0(e){var n=In(),a=an;if(a!==null)return k0(n,a,e);In(),n=n.memoizedState,a=In();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function co(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Pc(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function W0(){return In().memoizedState}function zc(e,n,a,o){var u=Si();xe.flags|=e,u.memoizedState=co(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hc(e,n,a,o){var u=In();o=o===void 0?null:o;var f=u.memoizedState.inst;an!==null&&o!==null&&kh(o,an.memoizedState.deps)?u.memoizedState=co(n,f,a,o):(xe.flags|=e,u.memoizedState=co(1|n,f,a,o))}function Y0(e,n){zc(8390656,8,e,n)}function $h(e,n){Hc(2048,8,e,n)}function sy(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Pc(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function q0(e){var n=In().memoizedState;return sy({ref:n,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function j0(e,n){return Hc(4,2,e,n)}function Z0(e,n){return Hc(4,4,e,n)}function K0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Q0(e,n,a){a=a!=null?a.concat([e]):null,Hc(4,4,K0.bind(null,n,e),a)}function td(){}function J0(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&kh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function $0(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&kh(n,o[1]))return o[0];if(o=e(),Sr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o}function ed(e,n,a){return a===void 0||(ts&1073741824)!==0&&(Oe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=t_(),xe.lanes|=e,Os|=e,a)}function tg(e,n,a,o){return Hi(a,n)?a:ro.current!==null?(e=ed(e,a,o),Hi(e,n)||(zn=!0),e):(ts&42)===0||(ts&1073741824)!==0&&(Oe&261930)===0?(zn=!0,e.memoizedState=a):(e=t_(),xe.lanes|=e,Os|=e,n)}function eg(e,n,a,o,u){var f=U.p;U.p=f!==0&&8>f?f:8;var v=D.T,R={};D.T=R,ad(e,!1,n,a);try{var G=u(),ot=D.S;if(ot!==null&&ot(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=ty(G,o);Ml(e,n,gt,Yi(e))}else Ml(e,n,o,Yi(e))}catch(vt){Ml(e,n,{then:function(){},status:"rejected",reason:vt},Yi())}finally{U.p=f,v!==null&&R.types!==null&&(v.types=R.types),D.T=v}}function ry(){}function nd(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=ng(e).queue;eg(e,u,n,q,a===null?ry:function(){return ig(e),a(o)})}function ng(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ig(e){var n=ng(e);n.next===null&&(n=e.alternate.memoizedState),Ml(e,n.next.queue,{},Yi())}function id(){return li(zl)}function ag(){return In().memoizedState}function sg(){return In().memoizedState}function oy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yi();e=Cs(a);var o=ws(n,e,a);o!==null&&(Ii(o,n,a),_l(o,n,a)),n={cache:Nh()},e.payload=n;return}n=n.return}}function ly(e,n,a){var o=Yi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gc(e)?og(n,a):(a=yh(e,n,a,o),a!==null&&(Ii(a,e,o),lg(a,n,o)))}function rg(e,n,a){var o=Yi();Ml(e,n,a,o)}function Ml(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))og(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,Hi(R,v))return yc(e,n,u,0),pn===null&&Sc(),!1}catch{}if(a=yh(e,n,u,o),a!==null)return Ii(a,e,o),lg(a,n,o),!0}return!1}function ad(e,n,a,o){if(o={lane:2,revertLane:Pd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gc(e)){if(n)throw Error(s(479))}else n=yh(e,a,o,2),n!==null&&Ii(n,e,2)}function Gc(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function og(e,n){oo=Oc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function lg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Fi(e,a)}}var El={readContext:li,use:Fc,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useLayoutEffect:Cn,useInsertionEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useSyncExternalStore:Cn,useId:Cn,useHostTransitionStatus:Cn,useFormState:Cn,useActionState:Cn,useOptimistic:Cn,useMemoCache:Cn,useCacheRefresh:Cn};El.useEffectEvent=Cn;var cg={readContext:li,use:Fc,useCallback:function(e,n){return Si().memoizedState=[e,n===void 0?null:n],e},useContext:li,useEffect:Y0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zc(4194308,4,K0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zc(4194308,4,e,n)},useInsertionEffect:function(e,n){zc(4,2,e,n)},useMemo:function(e,n){var a=Si();n=n===void 0?null:n;var o=e();if(Sr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Si();if(a!==void 0){var u=a(n);if(Sr){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ly.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=Si();return e={current:e},n.memoizedState=e},useState:function(e){e=Qh(e);var n=e.queue,a=rg.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:td,useDeferredValue:function(e,n){var a=Si();return ed(a,e,n)},useTransition:function(){var e=Qh(!1);return e=eg.bind(null,xe,e.queue,!0,!1),Si().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=xe,u=Si();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),pn===null)throw Error(s(349));(Oe&127)!==0||D0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Y0(N0.bind(null,o,f,e),[e]),o.flags|=2048,co(9,{destroy:void 0},U0.bind(null,o,f,a,n),null),a},useId:function(){var e=Si(),n=pn.identifierPrefix;if(Be){var a=Pa,o=Ia;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ic++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ey++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:id,useFormState:G0,useActionState:G0,useOptimistic:function(e){var n=Si();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ad.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:jh,useCacheRefresh:function(){return Si().memoizedState=oy.bind(null,xe)},useEffectEvent:function(e){var n=Si(),a={impl:e};return n.memoizedState=a,function(){if((Ke&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},sd={readContext:li,use:Fc,useCallback:J0,useContext:li,useEffect:$h,useImperativeHandle:Q0,useInsertionEffect:j0,useLayoutEffect:Z0,useMemo:$0,useReducer:Bc,useRef:W0,useState:function(){return Bc(es)},useDebugValue:td,useDeferredValue:function(e,n){var a=In();return tg(a,an.memoizedState,e,n)},useTransition:function(){var e=Bc(es)[0],n=In().memoizedState;return[typeof e=="boolean"?e:yl(e),n]},useSyncExternalStore:w0,useId:ag,useHostTransitionStatus:id,useFormState:V0,useActionState:V0,useOptimistic:function(e,n){var a=In();return I0(a,an,e,n)},useMemoCache:jh,useCacheRefresh:sg};sd.useEffectEvent=q0;var ug={readContext:li,use:Fc,useCallback:J0,useContext:li,useEffect:$h,useImperativeHandle:Q0,useInsertionEffect:j0,useLayoutEffect:Z0,useMemo:$0,useReducer:Kh,useRef:W0,useState:function(){return Kh(es)},useDebugValue:td,useDeferredValue:function(e,n){var a=In();return an===null?ed(a,e,n):tg(a,an.memoizedState,e,n)},useTransition:function(){var e=Kh(es)[0],n=In().memoizedState;return[typeof e=="boolean"?e:yl(e),n]},useSyncExternalStore:w0,useId:ag,useHostTransitionStatus:id,useFormState:X0,useActionState:X0,useOptimistic:function(e,n){var a=In();return an!==null?I0(a,an,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jh,useCacheRefresh:sg};ug.useEffectEvent=q0;function rd(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var od={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Yi(),u=Cs(o);u.payload=n,a!=null&&(u.callback=a),n=ws(e,u,o),n!==null&&(Ii(n,e,o),_l(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Yi(),u=Cs(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ws(e,u,o),n!==null&&(Ii(n,e,o),_l(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Yi(),o=Cs(a);o.tag=2,n!=null&&(o.callback=n),n=ws(e,o,a),n!==null&&(Ii(n,e,a),_l(n,e,a))}};function fg(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!cl(a,o)||!cl(u,f):!0}function hg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&od.enqueueReplaceState(n,n.state,null)}function yr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function dg(e){xc(e)}function pg(e){console.error(e)}function mg(e){xc(e)}function Vc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function gg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ld(e,n,a){return a=Cs(a),a.tag=3,a.payload={element:null},a.callback=function(){Vc(e,n)},a}function _g(e){return e=Cs(e),e.tag=3,e}function vg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){gg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){gg(n,a,o),typeof u!="function"&&(Is===null?Is=new Set([this]):Is.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function cy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=Vi.current,a!==null){switch(a.tag){case 31:case 13:return aa===null?tu():a.alternate===null&&wn===0&&(wn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ld(e,o,u)),!1;case 22:return a.flags|=65536,o===wc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ld(e,o,u)),!1}throw Error(s(435,a.tag))}return Ld(e,o,u),tu(),!1}if(Be)return n=Vi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Rh&&(e=Error(s(422),{cause:o}),hl(ta(e,a)))):(o!==Rh&&(n=Error(s(423),{cause:o}),hl(ta(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ta(o,a),u=ld(e.stateNode,o,u),Bh(e,u),wn!==4&&(wn=2)),!1;var f=Error(s(520),{cause:o});if(f=ta(f,a),Ul===null?Ul=[f]:Ul.push(f),wn!==4&&(wn=2),n===null)return!0;o=ta(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ld(a.stateNode,o,e),Bh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Is===null||!Is.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_g(u),vg(u,e,a,o),Bh(a,u),!1}a=a.return}while(a!==null);return!1}var cd=Error(s(461)),zn=!1;function ci(e,n,a,o){n.child=e===null?M0(n,null,a,o):xr(n,e.child,a,o)}function xg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return mr(n),o=Xh(e,n,a,v,f,u),R=Wh(),e!==null&&!zn?(Yh(e,n,u),ns(e,n,u)):(Be&&R&&bh(n),n.flags|=1,ci(e,n,o,u),n.child)}function Sg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Mh(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,yg(e,n,f,o,u)):(e=Ec(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_d(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:cl,a(v,o)&&e.ref===n.ref)return ns(e,n,u)}return n.flags|=1,e=Ka(f,o),e.ref=n.ref,e.return=n,n.child=e}function yg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(cl(f,o)&&e.ref===n.ref)if(zn=!1,n.pendingProps=o=f,_d(e,u))(e.flags&131072)!==0&&(zn=!0);else return n.lanes=e.lanes,ns(e,n,u)}return ud(e,n,a,o,u)}function Mg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Eg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rc(n,f!==null?f.cachePool:null),f!==null?b0(n,f):Hh(),A0(n);else return o=n.lanes=536870912,Eg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Rc(n,f.cachePool),b0(n,f),Us(),n.memoizedState=null):(e!==null&&Rc(n,null),Hh(),Us());return ci(e,n,u,a),n.child}function Tl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eg(e,n,a,o,u){var f=Oh();return f=f===null?null:{parent:Fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Rc(n,null),Hh(),A0(n),e!==null&&eo(e,n,o,!0),n.childLanes=u,null}function kc(e,n){return n=Wc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Tg(e,n,a){return xr(n,e.child,null,a),e=kc(n,n.pendingProps),e.flags|=2,ki(n),n.memoizedState=null,e}function uy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Be){if(o.mode==="hidden")return e=kc(n,o),n.lanes=536870912,Tl(null,e);if(Vh(n),(e=_n)?(e=P_(e,ia),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Es!==null?{id:Ia,overflow:Pa}:null,retryLane:536870912,hydrationErrors:null},a=o0(e),a.return=n,n.child=a,oi=n,_n=null)):e=null,e===null)throw bs(n);return n.lanes=536870912,null}return kc(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Vh(n),u)if(n.flags&256)n.flags&=-257,n=Tg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(zn||eo(e,n,a,!1),u=(a&e.childLanes)!==0,zn||u){if(o=pn,o!==null&&(v=ys(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,fr(e,v),Ii(o,e,v),cd;tu(),n=Tg(e,n,a)}else e=f.treeContext,_n=sa(v.nextSibling),oi=n,Be=!0,Ts=null,ia=!1,e!==null&&u0(n,e),n=kc(n,o),n.flags|=4096;return n}return e=Ka(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ud(e,n,a,o,u){return mr(n),a=Xh(e,n,a,o,void 0,u),o=Wh(),e!==null&&!zn?(Yh(e,n,u),ns(e,n,u)):(Be&&o&&bh(n),n.flags|=1,ci(e,n,a,u),n.child)}function bg(e,n,a,o,u,f){return mr(n),n.updateQueue=null,a=C0(n,o,a,u),R0(e),o=Wh(),e!==null&&!zn?(Yh(e,n,f),ns(e,n,f)):(Be&&o&&bh(n),n.flags|=1,ci(e,n,a,f),n.child)}function Ag(e,n,a,o,u){if(mr(n),n.stateNode===null){var f=Qr,v=a.contextType;typeof v=="object"&&v!==null&&(f=li(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=od,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ph(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?li(v):Qr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(rd(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&od.enqueueReplaceState(f,f.state,null),xl(n,o,f,u),vl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=yr(a,R);f.props=G;var ot=f.context,gt=a.contextType;v=Qr,typeof gt=="object"&&gt!==null&&(v=li(gt));var vt=a.getDerivedStateFromProps;gt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ot!==v)&&hg(n,f,o,v),Rs=!1;var lt=n.memoizedState;f.state=lt,xl(n,o,f,u),vl(),ot=n.memoizedState,R||lt!==ot||Rs?(typeof vt=="function"&&(rd(n,a,vt,o),ot=n.memoizedState),(G=Rs||fg(n,a,G,o,lt,ot,v))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=v,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Fh(e,n),v=n.memoizedProps,gt=yr(a,v),f.props=gt,vt=n.pendingProps,lt=f.context,ot=a.contextType,G=Qr,typeof ot=="object"&&ot!==null&&(G=li(ot)),R=a.getDerivedStateFromProps,(ot=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==vt||lt!==G)&&hg(n,f,o,G),Rs=!1,lt=n.memoizedState,f.state=lt,xl(n,o,f,u),vl();var ut=n.memoizedState;v!==vt||lt!==ut||Rs||e!==null&&e.dependencies!==null&&bc(e.dependencies)?(typeof R=="function"&&(rd(n,a,R,o),ut=n.memoizedState),(gt=Rs||fg(n,a,gt,o,lt,ut,G)||e!==null&&e.dependencies!==null&&bc(e.dependencies))?(ot||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=G,o=gt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Xc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=xr(n,e.child,null,u),n.child=xr(n,null,a,u)):ci(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ns(e,n,u),e}function Rg(e,n,a,o){return dr(),n.flags|=256,ci(e,n,a,o),n.child}var fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hd(e){return{baseLanes:e,cachePool:g0()}}function dd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Wi),e}function Cg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?Ds(n):Us(),(e=_n)?(e=P_(e,ia),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Es!==null?{id:Ia,overflow:Pa}:null,retryLane:536870912,hydrationErrors:null},a=o0(e),a.return=n,n.child=a,oi=n,_n=null)):e=null,e===null)throw bs(n);return Zd(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Us(),u=n.mode,R=Wc({mode:"hidden",children:R},u),o=hr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=hd(a),o.childLanes=dd(e,v,a),n.memoizedState=fd,Tl(null,o)):(Ds(n),pd(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Ds(n),n.flags&=-257,n=md(e,n,a)):n.memoizedState!==null?(Us(),n.child=e.child,n.flags|=128,n=null):(Us(),R=o.fallback,u=n.mode,o=Wc({mode:"visible",children:o.children},u),R=hr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,xr(n,e.child,null,a),o=n.child,o.memoizedState=hd(a),o.childLanes=dd(e,v,a),n.memoizedState=fd,n=Tl(null,o));else if(Ds(n),Zd(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var ot=v.dgst;v=ot,o=Error(s(419)),o.stack="",o.digest=v,hl({value:o,source:null,stack:null}),n=md(e,n,a)}else if(zn||eo(e,n,a,!1),v=(a&e.childLanes)!==0,zn||v){if(v=pn,v!==null&&(o=ys(v,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,fr(e,o),Ii(v,e,o),cd;jd(R)||tu(),n=md(e,n,a)}else jd(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,_n=sa(R.nextSibling),oi=n,Be=!0,Ts=null,ia=!1,e!==null&&u0(n,e),n=pd(n,o.children),n.flags|=4096);return n}return u?(Us(),R=o.fallback,u=n.mode,G=e.child,ot=G.sibling,o=Ka(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ot!==null?R=Ka(ot,R):(R=hr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Tl(null,o),o=n.child,R=e.child.memoizedState,R===null?R=hd(a):(u=R.cachePool,u!==null?(G=Fn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=g0(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=dd(e,v,a),n.memoizedState=fd,Tl(e.child,o)):(Ds(n),a=e.child,e=a.sibling,a=Ka(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function pd(e,n){return n=Wc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wc(e,n){return e=Gi(22,e,null,n),e.lanes=0,e}function md(e,n,a){return xr(n,e.child,null,a),e=pd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Dh(e.return,n,a)}function gd(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Dg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=On.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,dt(On,v),ci(e,n,o,a),o=Be?fl:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,a,n);else if(e.tag===19)wg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Lc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gd(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Lc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gd(n,!0,a,null,f,o);break;case"together":gd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ns(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Os|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(eo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ka(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ka(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _d(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bc(e)))}function fy(e,n,a){switch(n.tag){case 3:yt(n,n.stateNode.containerInfo),As(n,Fn,e.memoizedState.cache),dr();break;case 27:case 5:Xt(n);break;case 4:yt(n,n.stateNode.containerInfo);break;case 10:As(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ds(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cg(e,n,a):(Ds(n),e=ns(e,n,a),e!==null?e.sibling:null);Ds(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Dg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),dt(On,On.current),o)break;return null;case 22:return n.lanes=0,Mg(e,n,a,n.pendingProps);case 24:As(n,Fn,e.memoizedState.cache)}return ns(e,n,a)}function Ug(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)zn=!0;else{if(!_d(e,a)&&(n.flags&128)===0)return zn=!1,fy(e,n,a);zn=(e.flags&131072)!==0}else zn=!1,Be&&(n.flags&1048576)!==0&&c0(n,fl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=_r(n.elementType),n.type=e,typeof e=="function")Mh(e)?(o=yr(e,o),n.tag=1,n=Ag(null,n,e,o,a)):(n.tag=0,n=ud(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=xg(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=Sg(null,n,e,o,a);break t}}throw n=tt(e)||e,Error(s(306,n,""))}}return n;case 0:return ud(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=yr(o,n.pendingProps),Ag(e,n,o,u,a);case 3:t:{if(yt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Fh(e,n),xl(n,o,null,a);var v=n.memoizedState;if(o=v.cache,As(n,Fn,o),o!==f.cache&&Uh(n,[Fn],a,!0),vl(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Rg(e,n,o,a);break t}else if(o!==u){u=ta(Error(s(424)),n),hl(u),n=Rg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_n=sa(e.firstChild),oi=n,Be=!0,Ts=null,ia=!0,a=M0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(dr(),o===u){n=ns(e,n,a);break t}ci(e,n,o,a)}n=n.child}return n;case 26:return Xc(e,n),e===null?(a=V_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=ou(it.current).createElement(a),o[An]=n,o[Dn]=e,ui(o,a,e),X(o),n.stateNode=o):n.memoizedState=V_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Be&&(o=n.stateNode=z_(n.type,n.pendingProps,it.current),oi=n,ia=!0,u=_n,zs(n.type)?(Kd=u,_n=sa(o.firstChild)):_n=u),ci(e,n,n.pendingProps.children,a),Xc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=_n)&&(o=Gy(o,n.type,n.pendingProps,ia),o!==null?(n.stateNode=o,oi=n,_n=sa(o.firstChild),ia=!1,u=!0):u=!1),u||bs(n)),Xt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Wd(u,f)?o=null:v!==null&&Wd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Xh(e,n,ny,null,null,a),zl._currentValue=u),Xc(e,n),ci(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=_n)&&(a=Vy(a,n.pendingProps,ia),a!==null?(n.stateNode=a,oi=n,_n=null,e=!0):e=!1),e||bs(n)),null;case 13:return Cg(e,n,a);case 4:return yt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=xr(n,null,o,a):ci(e,n,o,a),n.child;case 11:return xg(e,n,n.type,n.pendingProps,a);case 7:return ci(e,n,n.pendingProps,a),n.child;case 8:return ci(e,n,n.pendingProps.children,a),n.child;case 12:return ci(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,As(n,n.type,o.value),ci(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,mr(n),u=li(u),o=o(u),n.flags|=1,ci(e,n,o,a),n.child;case 14:return Sg(e,n,n.type,n.pendingProps,a);case 15:return yg(e,n,n.type,n.pendingProps,a);case 19:return Dg(e,n,a);case 31:return uy(e,n,a);case 22:return Mg(e,n,a,n.pendingProps);case 24:return mr(n),o=li(Fn),e===null?(u=Oh(),u===null&&(u=pn,f=Nh(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ph(n),As(n,Fn,u)):((e.lanes&a)!==0&&(Fh(e,n),xl(n,null,null,a),vl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),As(n,Fn,o)):(o=f.cache,As(n,Fn,o),o!==u.cache&&Uh(n,[Fn],a,!0))),ci(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function is(e){e.flags|=4}function vd(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(a_())e.flags|=8192;else throw vr=wc,Ih}else e.flags&=-16777217}function Ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!q_(n))if(a_())e.flags|=8192;else throw vr=wc,Ih}function Yc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,po|=n)}function bl(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function vn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function hy(e,n,a){var o=n.pendingProps;switch(Ah(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$a(Fn),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(to(n)?is(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ch())),vn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(is(n),f!==null?(vn(n),Ng(n,f)):(vn(n),vd(n,u,null,o,a))):f?f!==e.memoizedState?(is(n),vn(n),Ng(n,f)):(vn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&is(n),vn(n),vd(n,u,e,o,a)),null;case 27:if(ne(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&is(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}e=At.current,to(n)?f0(n):(e=z_(u,o,a),n.stateNode=e,is(n))}return vn(n),null;case 5:if(ne(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&is(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}if(f=At.current,to(n))f0(n);else{var v=ou(it.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[An]=n,f[Dn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(ui(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&is(n)}}return vn(n),vd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&is(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,to(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=oi,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[An]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||C_(e.nodeValue,a)),e||bs(n,!0)}else e=ou(e).createTextNode(o),e[An]=n,n.stateNode=e}return vn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=to(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[An]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),e=!1}else a=Ch(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ki(n),n):(ki(n),null);if((n.flags&128)!==0)throw Error(s(558))}return vn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=to(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[An]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=Ch(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ki(n),n):(ki(n),null)}return ki(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yc(n,n.updateQueue),vn(n),null);case 4:return Lt(),e===null&&Hd(n.stateNode.containerInfo),vn(n),null;case 10:return $a(n.type),vn(n),null;case 19:if(Y(On),o=n.memoizedState,o===null)return vn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bl(o,!1);else{if(wn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Lc(e),f!==null){for(n.flags|=128,bl(o,!1),e=f.updateQueue,n.updateQueue=e,Yc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)r0(a,e),a=a.sibling;return dt(On,On.current&1|2),Be&&Qa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Qc&&(n.flags|=128,u=!0,bl(o,!1),n.lanes=4194304)}else{if(!u)if(e=Lc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yc(n,e),bl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Be)return vn(n),null}else 2*T()-o.renderingStartTime>Qc&&a!==536870912&&(n.flags|=128,u=!0,bl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=On.current,dt(On,u?a&1|2:a&1),Be&&Qa(n,o.treeForkCount),e):(vn(n),null);case 22:case 23:return ki(n),Gh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&Yc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Y(gr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$a(Fn),vn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function dy(e,n){switch(Ah(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $a(Fn),Lt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ne(n),null;case 31:if(n.memoizedState!==null){if(ki(n),n.alternate===null)throw Error(s(340));dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ki(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(On),null;case 4:return Lt(),null;case 10:return $a(n.type),null;case 22:case 23:return ki(n),Gh(),e!==null&&Y(gr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $a(Fn),null;case 25:return null;default:return null}}function Lg(e,n){switch(Ah(n),n.tag){case 3:$a(Fn),Lt();break;case 26:case 27:case 5:ne(n);break;case 4:Lt();break;case 31:n.memoizedState!==null&&ki(n);break;case 13:ki(n);break;case 19:Y(On);break;case 10:$a(n.type);break;case 22:case 23:ki(n),Gh(),e!==null&&Y(gr);break;case 24:$a(Fn)}}function Al(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){en(n,n.return,R)}}function Ns(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var G=a,ot=R;try{ot()}catch(gt){en(u,G,gt)}}}o=o.next}while(o!==f)}}catch(gt){en(n,n.return,gt)}}function Og(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{T0(n,a)}catch(o){en(e,e.return,o)}}}function Ig(e,n,a){a.props=yr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){en(e,n,o)}}function Rl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){en(e,n,u)}}function Fa(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){en(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){en(e,n,u)}else a.current=null}function Pg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){en(e,e.return,u)}}function xd(e,n,a){try{var o=e.stateNode;Iy(o,e.type,a,n),o[Dn]=n}catch(u){en(e,e.return,u)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zs(e.type)||e.tag===4}function Sd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yd(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&zs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(yd(e,n,a),e=e.sibling;e!==null;)yd(e,n,a),e=e.sibling}function qc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&zs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(qc(e,n,a),e=e.sibling;e!==null;)qc(e,n,a),e=e.sibling}function Bg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ui(n,o,a),n[An]=e,n[Dn]=a}catch(f){en(e,e.return,f)}}var as=!1,Hn=!1,Md=!1,zg=typeof WeakSet=="function"?WeakSet:Set,Jn=null;function py(e,n){if(e=e.containerInfo,kd=pu,e=Qm(e),mh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,R=-1,G=-1,ot=0,gt=0,vt=e,lt=null;e:for(;;){for(var ut;vt!==a||u!==0&&vt.nodeType!==3||(R=v+u),vt!==f||o!==0&&vt.nodeType!==3||(G=v+o),vt.nodeType===3&&(v+=vt.nodeValue.length),(ut=vt.firstChild)!==null;)lt=vt,vt=ut;for(;;){if(vt===e)break e;if(lt===a&&++ot===u&&(R=v),lt===f&&++gt===o&&(G=v),(ut=vt.nextSibling)!==null)break;vt=lt,lt=vt.parentNode}vt=ut}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xd={focusedElem:e,selectionRange:a},pu=!1,Jn=n;Jn!==null;)if(n=Jn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Jn=e;else for(;Jn!==null;){switch(n=Jn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Kt=yr(a.type,u);e=o.getSnapshotBeforeUpdate(Kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ce){en(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Jn=e;break}Jn=n.return}}function Hg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:rs(e,a),o&4&&Al(5,a);break;case 1:if(rs(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){en(a,a.return,v)}else{var u=yr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){en(a,a.return,v)}}o&64&&Og(a),o&512&&Rl(a,a.return);break;case 3:if(rs(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{T0(e,n)}catch(v){en(a,a.return,v)}}break;case 27:n===null&&o&4&&Bg(a);case 26:case 5:rs(e,a),n===null&&o&4&&Pg(a),o&512&&Rl(a,a.return);break;case 12:rs(e,a);break;case 31:rs(e,a),o&4&&kg(e,a);break;case 13:rs(e,a),o&4&&Xg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ey.bind(null,a),ky(e,a))));break;case 22:if(o=a.memoizedState!==null||as,!o){n=n!==null&&n.memoizedState!==null||Hn,u=as;var f=Hn;as=o,(Hn=n)&&!f?os(e,a,(a.subtreeFlags&8772)!==0):rs(e,a),as=u,Hn=f}break;case 30:break;default:rs(e,a)}}function Gg(e){var n=e.alternate;n!==null&&(e.alternate=null,Gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ms(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xn=null,Ui=!1;function ss(e,n,a){for(a=a.child;a!==null;)Vg(e,n,a),a=a.sibling}function Vg(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:Hn||Fa(a,n),ss(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hn||Fa(a,n);var o=xn,u=Ui;zs(a.type)&&(xn=a.stateNode,Ui=!1),ss(e,n,a),Pl(a.stateNode),xn=o,Ui=u;break;case 5:Hn||Fa(a,n);case 6:if(o=xn,u=Ui,xn=null,ss(e,n,a),xn=o,Ui=u,xn!==null)if(Ui)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(a.stateNode)}catch(f){en(a,n,f)}else try{xn.removeChild(a.stateNode)}catch(f){en(a,n,f)}break;case 18:xn!==null&&(Ui?(e=xn,O_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mo(e)):O_(xn,a.stateNode));break;case 4:o=xn,u=Ui,xn=a.stateNode.containerInfo,Ui=!0,ss(e,n,a),xn=o,Ui=u;break;case 0:case 11:case 14:case 15:Ns(2,a,n),Hn||Ns(4,a,n),ss(e,n,a);break;case 1:Hn||(Fa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ig(a,n,o)),ss(e,n,a);break;case 21:ss(e,n,a);break;case 22:Hn=(o=Hn)||a.memoizedState!==null,ss(e,n,a),Hn=o;break;default:ss(e,n,a)}}function kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mo(e)}catch(a){en(n,n.return,a)}}}function Xg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(a){en(n,n.return,a)}}function my(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new zg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new zg),n;default:throw Error(s(435,e.tag))}}function jc(e,n){var a=my(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ty.bind(null,e,o);o.then(u,u)}})}function Ni(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if(zs(R.type)){xn=R.stateNode,Ui=!1;break t}break;case 5:xn=R.stateNode,Ui=!1;break t;case 3:case 4:xn=R.stateNode.containerInfo,Ui=!0;break t}R=R.return}if(xn===null)throw Error(s(160));Vg(f,v,u),xn=null,Ui=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wg(n,e),n=n.sibling}var Sa=null;function Wg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ni(n,e),Li(e),o&4&&(Ns(3,e,e.return),Al(3,e),Ns(5,e,e.return));break;case 1:Ni(n,e),Li(e),o&512&&(Hn||a===null||Fa(a,a.return)),o&64&&as&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Sa;if(Ni(n,e),Li(e),o&512&&(Hn||a===null||Fa(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ai]||f[An]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),ui(f,o,a),f[An]=e,X(f),o=f;break t;case"link":var v=W_("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}f=u.createElement(o),ui(f,o,a),u.head.appendChild(f);break;case"meta":if(v=W_("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}f=u.createElement(o),ui(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[An]=e,X(f),o=f}e.stateNode=o}else Y_(u,e.type,e.stateNode);else e.stateNode=X_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Y_(u,e.type,e.stateNode):X_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xd(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ni(n,e),Li(e),o&512&&(Hn||a===null||Fa(a,a.return)),a!==null&&o&4&&xd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ni(n,e),Li(e),o&512&&(Hn||a===null||Fa(a,a.return)),e.flags&32){u=e.stateNode;try{Rn(u,"")}catch(Kt){en(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xd(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Md=!0);break;case 6:if(Ni(n,e),Li(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){en(e,e.return,Kt)}}break;case 3:if(uu=null,u=Sa,Sa=lu(n.containerInfo),Ni(n,e),Sa=u,Li(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(n.containerInfo)}catch(Kt){en(e,e.return,Kt)}Md&&(Md=!1,Yg(e));break;case 4:o=Sa,Sa=lu(e.stateNode.containerInfo),Ni(n,e),Li(e),Sa=o;break;case 12:Ni(n,e),Li(e);break;case 31:Ni(n,e),Li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jc(e,o)));break;case 13:Ni(n,e),Li(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ot=as,gt=Hn;if(as=ot||u,Hn=gt||G,Ni(n,e),Hn=gt,as=ot,Li(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||as||Hn||Mr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=G.stateNode;var vt=G.memoizedProps.style,lt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Kt){en(G,G.return,Kt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Kt){en(G,G.return,Kt)}}}else if(n.tag===18){if(a===null){G=n;try{var ut=G.stateNode;u?I_(ut,!0):I_(G.stateNode,!1)}catch(Kt){en(G,G.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jc(e,a))));break;case 19:Ni(n,e),Li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jc(e,o)));break;case 30:break;case 21:break;default:Ni(n,e),Li(e)}}function Li(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Fg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Sd(e);qc(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Rn(v,""),a.flags&=-33);var R=Sd(e);qc(e,R,v);break;case 3:case 4:var G=a.stateNode.containerInfo,ot=Sd(e);yd(e,ot,G);break;default:throw Error(s(161))}}catch(gt){en(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function rs(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hg(e,n.alternate,n),n=n.sibling}function Mr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ns(4,n,n.return),Mr(n);break;case 1:Fa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ig(n,n.return,a),Mr(n);break;case 27:Pl(n.stateNode);case 26:case 5:Fa(n,n.return),Mr(n);break;case 22:n.memoizedState===null&&Mr(n);break;case 30:Mr(n);break;default:Mr(n)}e=e.sibling}}function os(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:os(u,f,a),Al(4,f);break;case 1:if(os(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){en(o,o.return,ot)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)E0(G[u],R)}catch(ot){en(o,o.return,ot)}}a&&v&64&&Og(f),Rl(f,f.return);break;case 27:Bg(f);case 26:case 5:os(u,f,a),a&&o===null&&v&4&&Pg(f),Rl(f,f.return);break;case 12:os(u,f,a);break;case 31:os(u,f,a),a&&v&4&&kg(u,f);break;case 13:os(u,f,a),a&&v&4&&Xg(u,f);break;case 22:f.memoizedState===null&&os(u,f,a),Rl(f,f.return);break;case 30:break;default:os(u,f,a)}n=n.sibling}}function Ed(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&dl(a))}function Td(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&dl(e))}function ya(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qg(e,n,a,o),n=n.sibling}function qg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ya(e,n,a,o),u&2048&&Al(9,n);break;case 1:ya(e,n,a,o);break;case 3:ya(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&dl(e)));break;case 12:if(u&2048){ya(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){en(n,n.return,G)}}else ya(e,n,a,o);break;case 31:ya(e,n,a,o);break;case 13:ya(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?ya(e,n,a,o):Cl(e,n):f._visibility&2?ya(e,n,a,o):(f._visibility|=2,uo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ed(v,n);break;case 24:ya(e,n,a,o),u&2048&&Td(n.alternate,n);break;default:ya(e,n,a,o)}}function uo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,G=o,ot=v.flags;switch(v.tag){case 0:case 11:case 15:uo(f,v,R,G,u),Al(8,v);break;case 23:break;case 22:var gt=v.stateNode;v.memoizedState!==null?gt._visibility&2?uo(f,v,R,G,u):Cl(f,v):(gt._visibility|=2,uo(f,v,R,G,u)),u&&ot&2048&&Ed(v.alternate,v);break;case 24:uo(f,v,R,G,u),u&&ot&2048&&Td(v.alternate,v);break;default:uo(f,v,R,G,u)}n=n.sibling}}function Cl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Cl(a,o),u&2048&&Ed(o.alternate,o);break;case 24:Cl(a,o),u&2048&&Td(o.alternate,o);break;default:Cl(a,o)}n=n.sibling}}var wl=8192;function fo(e,n,a){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)jg(e,n,a),e=e.sibling}function jg(e,n,a){switch(e.tag){case 26:fo(e,n,a),e.flags&wl&&e.memoizedState!==null&&eM(a,Sa,e.memoizedState,e.memoizedProps);break;case 5:fo(e,n,a);break;case 3:case 4:var o=Sa;Sa=lu(e.stateNode.containerInfo),fo(e,n,a),Sa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wl,wl=16777216,fo(e,n,a),wl=o):fo(e,n,a));break;default:fo(e,n,a)}}function Zg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Dl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,Qg(o,e)}Zg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kg(e),e=e.sibling}function Kg(e){switch(e.tag){case 0:case 11:case 15:Dl(e),e.flags&2048&&Ns(9,e,e.return);break;case 3:Dl(e);break;case 12:Dl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zc(e)):Dl(e);break;default:Dl(e)}}function Zc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,Qg(o,e)}Zg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ns(8,n,n.return),Zc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zc(n));break;default:Zc(n)}e=e.sibling}}function Qg(e,n){for(;Jn!==null;){var a=Jn;switch(a.tag){case 0:case 11:case 15:Ns(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:dl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Jn=o;else t:for(a=e;Jn!==null;){o=Jn;var u=o.sibling,f=o.return;if(Gg(o),o===a){Jn=null;break t}if(u!==null){u.return=f,Jn=u;break t}Jn=f}}}var gy={getCacheForType:function(e){var n=li(Fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return li(Fn).controller.signal}},_y=typeof WeakMap=="function"?WeakMap:Map,Ke=0,pn=null,De=null,Oe=0,tn=0,Xi=null,Ls=!1,ho=!1,bd=!1,ls=0,wn=0,Os=0,Er=0,Ad=0,Wi=0,po=0,Ul=null,Oi=null,Rd=!1,Kc=0,Jg=0,Qc=1/0,Jc=null,Is=null,Xn=0,Ps=null,mo=null,cs=0,Cd=0,wd=null,$g=null,Nl=0,Dd=null;function Yi(){return(Ke&2)!==0&&Oe!==0?Oe&-Oe:D.T!==null?Pd():Ki()}function t_(){if(Wi===0)if((Oe&536870912)===0||Be){var e=Et;Et<<=1,(Et&3932160)===0&&(Et=262144),Wi=e}else Wi=536870912;return e=Vi.current,e!==null&&(e.flags|=32),Wi}function Ii(e,n,a){(e===pn&&(tn===2||tn===9)||e.cancelPendingCommit!==null)&&(go(e,0),Fs(e,Oe,Wi,!1)),jn(e,a),((Ke&2)===0||e!==pn)&&(e===pn&&((Ke&2)===0&&(Er|=a),wn===4&&Fs(e,Oe,Wi,!1)),Ba(e))}function e_(e,n,a){if((Ke&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Vt(e,n),u=o?Sy(e,n):Nd(e,n,!0),f=o;do{if(u===0){ho&&!o&&Fs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!vy(a)){u=Nd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=e;u=Ul;var G=R.current.memoizedState.isDehydrated;if(G&&(go(R,v).flags|=256),v=Nd(R,v,!1),v!==2){if(bd&&!G){R.errorRecoveryDisabledLanes|=f,Er|=f,u=4;break t}f=Oi,Oi=u,f!==null&&(Oi===null?Oi=f:Oi.push.apply(Oi,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){go(e,0),Fs(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Fs(o,n,Wi,!Ls);break t;case 2:Oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kc+300-T(),10<u)){if(Fs(o,n,Wi,!Ls),ht(o,0,!0)!==0)break t;cs=n,o.timeoutHandle=N_(n_.bind(null,o,a,Oi,Jc,Rd,n,Wi,Er,po,Ls,f,"Throttled",-0,0),u);break t}n_(o,a,Oi,Jc,Rd,n,Wi,Er,po,Ls,f,null,-0,0)}}break}while(!0);Ba(e)}function n_(e,n,a,o,u,f,v,R,G,ot,gt,vt,lt,ut){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},jg(n,f,vt);var Kt=(f&62914560)===f?Kc-T():(f&4194048)===f?Jg-T():0;if(Kt=nM(vt,Kt),Kt!==null){cs=f,e.cancelPendingCommit=Kt(u_.bind(null,e,n,f,a,o,u,v,R,G,gt,vt,null,lt,ut)),Fs(e,f,v,!ot);return}}u_(e,n,f,a,o,u,v,R,G)}function vy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Hi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fs(e,n,a,o){n&=~Ad,n&=~Er,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Na(e,a,n)}function $c(){return(Ke&6)===0?(Ll(0),!1):!0}function Ud(){if(De!==null){if(tn===0)var e=De.return;else e=De,Ja=pr=null,qh(e),so=null,ml=0,e=De;for(;e!==null;)Lg(e.alternate,e),e=e.return;De=null}}function go(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,By(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),cs=0,Ud(),pn=e,De=a=Ka(e.current,null),Oe=n,tn=0,Xi=null,Ls=!1,ho=Vt(e,n),bd=!1,po=Wi=Ad=Er=Os=wn=0,Oi=Ul=null,Rd=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return ls=n,Sc(),a}function i_(e,n){xe=null,D.H=El,n===ao||n===Cc?(n=x0(),tn=3):n===Ih?(n=x0(),tn=4):tn=n===cd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xi=n,De===null&&(wn=1,Vc(e,ta(n,e.current)))}function a_(){var e=Vi.current;return e===null?!0:(Oe&4194048)===Oe?aa===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?e===aa:!1}function s_(){var e=D.H;return D.H=El,e===null?El:e}function r_(){var e=D.A;return D.A=gy,e}function tu(){wn=4,Ls||(Oe&4194048)!==Oe&&Vi.current!==null||(ho=!0),(Os&134217727)===0&&(Er&134217727)===0||pn===null||Fs(pn,Oe,Wi,!1)}function Nd(e,n,a){var o=Ke;Ke|=2;var u=s_(),f=r_();(pn!==e||Oe!==n)&&(Jc=null,go(e,n)),n=!1;var v=wn;t:do try{if(tn!==0&&De!==null){var R=De,G=Xi;switch(tn){case 8:Ud(),v=6;break t;case 3:case 2:case 9:case 6:Vi.current===null&&(n=!0);var ot=tn;if(tn=0,Xi=null,_o(e,R,G,ot),a&&ho){v=0;break t}break;default:ot=tn,tn=0,Xi=null,_o(e,R,G,ot)}}xy(),v=wn;break}catch(gt){i_(e,gt)}while(!0);return n&&e.shellSuspendCounter++,Ja=pr=null,Ke=o,D.H=u,D.A=f,De===null&&(pn=null,Oe=0,Sc()),v}function xy(){for(;De!==null;)o_(De)}function Sy(e,n){var a=Ke;Ke|=2;var o=s_(),u=r_();pn!==e||Oe!==n?(Jc=null,Qc=T()+500,go(e,n)):ho=Vt(e,n);t:do try{if(tn!==0&&De!==null){n=De;var f=Xi;e:switch(tn){case 1:tn=0,Xi=null,_o(e,n,f,1);break;case 2:case 9:if(_0(f)){tn=0,Xi=null,l_(n);break}n=function(){tn!==2&&tn!==9||pn!==e||(tn=7),Ba(e)},f.then(n,n);break t;case 3:tn=7;break t;case 4:tn=5;break t;case 7:_0(f)?(tn=0,Xi=null,l_(n)):(tn=0,Xi=null,_o(e,n,f,7));break;case 5:var v=null;switch(De.tag){case 26:v=De.memoizedState;case 5:case 27:var R=De;if(v?q_(v):R.stateNode.complete){tn=0,Xi=null;var G=R.sibling;if(G!==null)De=G;else{var ot=R.return;ot!==null?(De=ot,eu(ot)):De=null}break e}}tn=0,Xi=null,_o(e,n,f,5);break;case 6:tn=0,Xi=null,_o(e,n,f,6);break;case 8:Ud(),wn=6;break t;default:throw Error(s(462))}}yy();break}catch(gt){i_(e,gt)}while(!0);return Ja=pr=null,D.H=o,D.A=u,Ke=a,De!==null?0:(pn=null,Oe=0,Sc(),wn)}function yy(){for(;De!==null&&!Qt();)o_(De)}function o_(e){var n=Ug(e.alternate,e,ls);e.memoizedProps=e.pendingProps,n===null?eu(e):De=n}function l_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=bg(a,n,n.pendingProps,n.type,void 0,Oe);break;case 11:n=bg(a,n,n.pendingProps,n.type.render,n.ref,Oe);break;case 5:qh(n);default:Lg(a,n),n=De=r0(n,ls),n=Ug(a,n,ls)}e.memoizedProps=e.pendingProps,n===null?eu(e):De=n}function _o(e,n,a,o){Ja=pr=null,qh(n),so=null,ml=0;var u=n.return;try{if(cy(e,u,n,a,Oe)){wn=1,Vc(e,ta(a,e.current)),De=null;return}}catch(f){if(u!==null)throw De=u,f;wn=1,Vc(e,ta(a,e.current)),De=null;return}n.flags&32768?(Be||o===1?e=!0:ho||(Oe&536870912)!==0?e=!1:(Ls=e=!0,(o===2||o===9||o===3||o===6)&&(o=Vi.current,o!==null&&o.tag===13&&(o.flags|=16384))),c_(n,e)):eu(n)}function eu(e){var n=e;do{if((n.flags&32768)!==0){c_(n,Ls);return}e=n.return;var a=hy(n.alternate,n,ls);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=e}while(n!==null);wn===0&&(wn=5)}function c_(e,n){do{var a=dy(e.alternate,e);if(a!==null){a.flags&=32767,De=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){De=e;return}De=e=a}while(e!==null);wn=6,De=null}function u_(e,n,a,o,u,f,v,R,G){e.cancelPendingCommit=null;do nu();while(Xn!==0);if((Ke&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Sh,Zn(e,a,f,v,R,G),e===pn&&(De=pn=null,Oe=0),mo=n,Ps=e,cs=a,Cd=f,wd=u,$g=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,by(ft,function(){return m_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,u=U.p,U.p=2,v=Ke,Ke|=4;try{py(e,n,a)}finally{Ke=v,U.p=u,D.T=o}}Xn=1,f_(),h_(),d_()}}function f_(){if(Xn===1){Xn=0;var e=Ps,n=mo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=U.p;U.p=2;var u=Ke;Ke|=4;try{Wg(n,e);var f=Xd,v=Qm(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Km(R.ownerDocument.documentElement,R)){if(G!==null&&mh(R)){var ot=G.start,gt=G.end;if(gt===void 0&&(gt=ot),"selectionStart"in R)R.selectionStart=ot,R.selectionEnd=Math.min(gt,R.value.length);else{var vt=R.ownerDocument||document,lt=vt&&vt.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),Kt=R.textContent.length,ce=Math.min(G.start,Kt),rn=G.end===void 0?ce:Math.min(G.end,Kt);!ut.extend&&ce>rn&&(v=rn,rn=ce,ce=v);var K=Zm(R,ce),k=Zm(R,rn);if(K&&k&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var st=vt.createRange();st.setStart(K.node,K.offset),ut.removeAllRanges(),ce>rn?(ut.addRange(st),ut.extend(k.node,k.offset)):(st.setEnd(k.node,k.offset),ut.addRange(st))}}}}for(vt=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&vt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var _t=vt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}pu=!!kd,Xd=kd=null}finally{Ke=u,U.p=o,D.T=a}}e.current=n,Xn=2}}function h_(){if(Xn===2){Xn=0;var e=Ps,n=mo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=U.p;U.p=2;var u=Ke;Ke|=4;try{Hg(e,n.alternate,n)}finally{Ke=u,U.p=o,D.T=a}}Xn=3}}function d_(){if(Xn===4||Xn===3){Xn=0,I();var e=Ps,n=mo,a=cs,o=$g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xn=5:(Xn=0,mo=Ps=null,p_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Is=null),Bi(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=D.T,u=U.p,U.p=2,D.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{D.T=n,U.p=u}}(cs&3)!==0&&nu(),Ba(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Dd?Nl++:(Nl=0,Dd=e):Nl=0,Ll(0)}}function p_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,dl(n)))}function nu(){return f_(),h_(),d_(),m_()}function m_(){if(Xn!==5)return!1;var e=Ps,n=Cd;Cd=0;var a=Bi(cs),o=D.T,u=U.p;try{U.p=32>a?32:a,D.T=null,a=wd,wd=null;var f=Ps,v=cs;if(Xn=0,mo=Ps=null,cs=0,(Ke&6)!==0)throw Error(s(331));var R=Ke;if(Ke|=4,Kg(f.current),qg(f,f.current,v,a),Ke=R,Ll(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{U.p=u,D.T=o,p_(e,n)}}function g_(e,n,a){n=ta(a,n),n=ld(e.stateNode,n,2),e=ws(e,n,2),e!==null&&(jn(e,2),Ba(e))}function en(e,n,a){if(e.tag===3)g_(e,e,a);else for(;n!==null;){if(n.tag===3){g_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Is===null||!Is.has(o))){e=ta(a,e),a=_g(2),o=ws(n,a,2),o!==null&&(vg(a,o,n,e),jn(o,2),Ba(o));break}}n=n.return}}function Ld(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new _y;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(bd=!0,u.add(a),e=My.bind(null,e,n,a),n.then(e,e))}function My(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,pn===e&&(Oe&a)===a&&(wn===4||wn===3&&(Oe&62914560)===Oe&&300>T()-Kc?(Ke&2)===0&&go(e,0):Ad|=a,po===Oe&&(po=0)),Ba(e)}function __(e,n){n===0&&(n=Pe()),e=fr(e,n),e!==null&&(jn(e,n),Ba(e))}function Ey(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),__(e,a)}function Ty(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),__(e,a)}function by(e,n){return Ae(e,n)}var iu=null,vo=null,Od=!1,au=!1,Id=!1,Bs=0;function Ba(e){e!==vo&&e.next===null&&(vo===null?iu=vo=e:vo=vo.next=e),au=!0,Od||(Od=!0,Ry())}function Ll(e,n){if(!Id&&au){Id=!0;do for(var a=!1,o=iu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,y_(o,f))}else f=Oe,f=ht(o,o===pn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Vt(o,f)||(a=!0,y_(o,f));o=o.next}while(a);Id=!1}}function Ay(){v_()}function v_(){au=Od=!1;var e=0;Bs!==0&&Fy()&&(e=Bs);for(var n=T(),a=null,o=iu;o!==null;){var u=o.next,f=x_(o,n);f===0?(o.next=null,a===null?iu=u:a.next=u,u===null&&(vo=a)):(a=o,(e!==0||(f&3)!==0)&&(au=!0)),o=u}Xn!==0&&Xn!==5||Ll(e),Bs!==0&&(Bs=0)}function x_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Pt(f),R=1<<v,G=u[v];G===-1?((R&a)===0||(R&o)!==0)&&(u[v]=Jt(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=pn,a=Oe,a=ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(tn===2||tn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Xe(o),Bi(a)){case 2:case 8:a=xt;break;case 32:a=ft;break;case 268435456:a=Ct;break;default:a=ft}return o=S_.bind(null,e),a=Ae(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Xe(o),e.callbackPriority=2,e.callbackNode=null,2}function S_(e,n){if(Xn!==0&&Xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nu()&&e.callbackNode!==a)return null;var o=Oe;return o=ht(e,e===pn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(e_(e,o,n),x_(e,T()),e.callbackNode!=null&&e.callbackNode===a?S_.bind(null,e):null)}function y_(e,n){if(nu())return null;e_(e,n,!0)}function Ry(){zy(function(){(Ke&6)!==0?Ae(mt,Ay):v_()})}function Pd(){if(Bs===0){var e=no;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Bs=e}return Bs}function M_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sr(""+e)}function E_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Cy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=M_((u[Dn]||null).action),v=o.submitter;v&&(n=(n=v[Dn]||null)?M_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new qe("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Bs!==0){var G=v?E_(u,v):new FormData(u);nd(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=v?E_(u,v):new FormData(u),nd(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Fd=0;Fd<xh.length;Fd++){var Bd=xh[Fd],wy=Bd.toLowerCase(),Dy=Bd[0].toUpperCase()+Bd.slice(1);xa(wy,"on"+Dy)}xa(t0,"onAnimationEnd"),xa(e0,"onAnimationIteration"),xa(n0,"onAnimationStart"),xa("dblclick","onDoubleClick"),xa("focusin","onFocus"),xa("focusout","onBlur"),xa(YS,"onTransitionRun"),xa(qS,"onTransitionStart"),xa(jS,"onTransitionCancel"),xa(i0,"onTransitionEnd"),Nt("onMouseEnter",["mouseout","mouseover"]),Nt("onMouseLeave",["mouseout","mouseover"]),Nt("onPointerEnter",["pointerout","pointerover"]),Nt("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function T_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],G=R.instance,ot=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=ot;try{f(u)}catch(gt){xc(gt)}u.currentTarget=null,f=G}else for(v=0;v<o.length;v++){if(R=o[v],G=R.instance,ot=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=ot;try{f(u)}catch(gt){xc(gt)}u.currentTarget=null,f=G}}}}function Ue(e,n){var a=n[La];a===void 0&&(a=n[La]=new Set);var o=e+"__bubble";a.has(o)||(b_(n,e,2,!1),a.add(o))}function zd(e,n,a){var o=0;n&&(o|=4),b_(a,e,o,n)}var su="_reactListening"+Math.random().toString(36).slice(2);function Hd(e){if(!e[su]){e[su]=!0,at.forEach(function(a){a!=="selectionchange"&&(Uy.has(a)||zd(a,!1,e),zd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[su]||(n[su]=!0,zd("selectionchange",!1,n))}}function b_(e,n,a,o){switch(tv(n)){case 2:var u=sM;break;case 8:u=rM;break;default:u=ep}a=u.bind(null,n,a,e),u=void 0,!te||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Gd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=ga(R),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){o=f=v;continue t}R=R.parentNode}}o=o.return}il(function(){var ot=f,gt=Wr(a),vt=[];t:{var lt=a0.get(e);if(lt!==void 0){var ut=qe,Kt=e;switch(e){case"keypress":if(Ye(a)===0)break t;case"keydown":case"keyup":ut=al;break;case"focusin":Kt="focus",ut=we;break;case"focusout":Kt="blur",ut=we;break;case"beforeblur":case"afterblur":ut=we;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Ut;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=zi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=RS;break;case t0:case e0:case n0:ut=Ln;break;case i0:ut=wS;break;case"scroll":case"scrollend":ut=gn;break;case"wheel":ut=US;break;case"copy":case"cut":case"paste":ut=Ee;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=_c;break;case"toggle":case"beforetoggle":ut=LS}var ce=(n&4)!==0,rn=!ce&&(e==="scroll"||e==="scrollend"),K=ce?lt!==null?lt+"Capture":null:lt;ce=[];for(var k=ot,st;k!==null;){var _t=k;if(st=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||st===null||K===null||(_t=Rt(k,K),_t!=null&&ce.push(Il(k,_t,st))),rn)break;k=k.return}0<ce.length&&(lt=new ut(lt,Kt,null,a,gt),vt.push({event:lt,listeners:ce}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&a!==rr&&(Kt=a.relatedTarget||a.fromElement)&&(ga(Kt)||Kt[ma]))break t;if((ut||lt)&&(lt=gt.window===gt?gt:(lt=gt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(Kt=a.relatedTarget||a.toElement,ut=ot,Kt=Kt?ga(Kt):null,Kt!==null&&(rn=c(Kt),ce=Kt.tag,Kt!==rn||ce!==5&&ce!==27&&ce!==6)&&(Kt=null)):(ut=null,Kt=ot),ut!==Kt)){if(ce=Ut,_t="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ce=_c,_t="onPointerLeave",K="onPointerEnter",k="pointer"),rn=ut==null?lt:kn(ut),st=Kt==null?lt:kn(Kt),lt=new ce(_t,k+"leave",ut,a,gt),lt.target=rn,lt.relatedTarget=st,_t=null,ga(gt)===ot&&(ce=new ce(K,k+"enter",Kt,a,gt),ce.target=st,ce.relatedTarget=rn,_t=ce),rn=_t,ut&&Kt)e:{for(ce=Ny,K=ut,k=Kt,st=0,_t=K;_t;_t=ce(_t))st++;_t=0;for(var ae=k;ae;ae=ce(ae))_t++;for(;0<st-_t;)K=ce(K),st--;for(;0<_t-st;)k=ce(k),_t--;for(;st--;){if(K===k||k!==null&&K===k.alternate){ce=K;break e}K=ce(K),k=ce(k)}ce=null}else ce=null;ut!==null&&A_(vt,lt,ut,ce,!1),Kt!==null&&rn!==null&&A_(vt,rn,Kt,ce,!0)}}t:{if(lt=ot?kn(ot):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var je=km;else if(Gm(lt))if(Xm)je=kS;else{je=GS;var ee=HS}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?ot&&qa(ot.elementType)&&(je=km):je=VS;if(je&&(je=je(e,ot))){Vm(vt,je,a,gt);break t}ee&&ee(e,lt,ot),e==="focusout"&&ot&&lt.type==="number"&&ot.memoizedProps.value!=null&&Ri(lt,"number",lt.value)}switch(ee=ot?kn(ot):window,e){case"focusin":(Gm(ee)||ee.contentEditable==="true")&&(jr=ee,gh=ot,ul=null);break;case"focusout":ul=gh=jr=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,Jm(vt,a,gt);break;case"selectionchange":if(WS)break;case"keydown":case"keyup":Jm(vt,a,gt)}var ye;if(hh)t:{switch(e){case"compositionstart":var Ie="onCompositionStart";break t;case"compositionend":Ie="onCompositionEnd";break t;case"compositionupdate":Ie="onCompositionUpdate";break t}Ie=void 0}else qr?zm(e,a)&&(Ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(Pm&&a.locale!=="ko"&&(qr||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&qr&&(ye=Qe()):(It=gt,fe="value"in It?It.value:It.textContent,qr=!0)),ee=ru(ot,Ie),0<ee.length&&(Ie=new si(Ie,e,null,a,gt),vt.push({event:Ie,listeners:ee}),ye?Ie.data=ye:(ye=Hm(a),ye!==null&&(Ie.data=ye)))),(ye=IS?PS(e,a):FS(e,a))&&(Ie=ru(ot,"onBeforeInput"),0<Ie.length&&(ee=new si("onBeforeInput","beforeinput",null,a,gt),vt.push({event:ee,listeners:Ie}),ee.data=ye)),Cy(vt,e,ot,a,gt)}T_(vt,n)})}function Il(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ru(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Rt(e,a),u!=null&&o.unshift(Il(e,u,f)),u=Rt(e,n),u!=null&&o.push(Il(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Ny(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function A_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,G=R.alternate,ot=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||ot===null||(G=ot,u?(ot=Rt(a,f),ot!=null&&v.unshift(Il(a,ot,G))):u||(ot=Rt(a,f),ot!=null&&v.push(Il(a,ot,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Ly=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function R_(e){return(typeof e=="string"?e:""+e).replace(Ly,`
`).replace(Oy,"")}function C_(e,n){return n=R_(n),R_(e)===n}function sn(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Rn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Rn(e,""+o);break;case"className":me(e,"class",o);break;case"tabIndex":me(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":me(e,a,o);break;case"style":Qi(e,o,f);break;case"data":if(n!=="object"){me(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&sn(e,n,"name",u.name,u,null),sn(e,n,"formEncType",u.formEncType,u,null),sn(e,n,"formMethod",u.formMethod,u,null),sn(e,n,"formTarget",u.formTarget,u,null)):(sn(e,n,"encType",u.encType,u,null),sn(e,n,"method",u.method,u,null),sn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&Ue("scroll",e);break;case"onScrollEnd":o!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),se(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xr.get(a)||a,se(e,a,o))}}function Vd(e,n,a,o,u,f){switch(a){case"style":Qi(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Rn(e,o):(typeof o=="number"||typeof o=="bigint")&&Rn(e,""+o);break;case"onScroll":o!=null&&Ue("scroll",e);break;case"onScrollEnd":o!=null&&Ue("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):se(e,a,o)}}}function ui(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(e,n,f,v,a,null)}}u&&sn(e,n,"srcSet",a.srcSet,a,null),o&&sn(e,n,"src",a.src,a,null);return;case"input":Ue("invalid",e);var R=f=v=u=null,G=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":v=gt;break;case"checked":G=gt;break;case"defaultChecked":ot=gt;break;case"value":f=gt;break;case"defaultValue":R=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:sn(e,n,o,gt,a,null)}}ii(e,f,R,G,ot,v,u,!1);return;case"select":Ue("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:sn(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?ai(e,!!o,n,!1):a!=null&&ai(e,!!o,a,!0);return;case"textarea":Ue("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:sn(e,n,v,R,a,null)}hn(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":sn(e,n,G,o,a,null));return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(o=0;o<Ol.length;o++)Ue(Ol[o],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(e,n,ot,o,a,null)}return;default:if(qa(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&Vd(e,n,gt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&sn(e,n,R,o,a,null))}function Iy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,G=null,ot=null,gt=null;for(ut in a){var vt=a[ut];if(a.hasOwnProperty(ut)&&vt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=vt;default:o.hasOwnProperty(ut)||sn(e,n,ut,null,o,vt)}}for(var lt in o){var ut=o[lt];if(vt=a[lt],o.hasOwnProperty(lt)&&(ut!=null||vt!=null))switch(lt){case"type":f=ut;break;case"name":u=ut;break;case"checked":ot=ut;break;case"defaultChecked":gt=ut;break;case"value":v=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==vt&&sn(e,n,lt,ut,o,vt)}}Un(e,v,R,G,ot,gt,f,u);return;case"select":ut=v=R=lt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ut=G;default:o.hasOwnProperty(f)||sn(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":lt=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==G&&sn(e,n,u,f,o,G)}n=R,a=v,o=ut,lt!=null?ai(e,!!a,lt,!1):!!o!=!!a&&(n!=null?ai(e,!!a,n,!0):ai(e,!!a,a?[]:"",!1));return;case"textarea":ut=lt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:sn(e,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":lt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&sn(e,n,v,u,o,f)}We(e,lt,ut);return;case"option":for(var Kt in a)lt=a[Kt],a.hasOwnProperty(Kt)&&lt!=null&&!o.hasOwnProperty(Kt)&&(Kt==="selected"?e.selected=!1:sn(e,n,Kt,null,o,lt));for(G in o)lt=o[G],ut=a[G],o.hasOwnProperty(G)&&lt!==ut&&(lt!=null||ut!=null)&&(G==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":sn(e,n,G,lt,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)lt=a[ce],a.hasOwnProperty(ce)&&lt!=null&&!o.hasOwnProperty(ce)&&sn(e,n,ce,null,o,lt);for(ot in o)if(lt=o[ot],ut=a[ot],o.hasOwnProperty(ot)&&lt!==ut&&(lt!=null||ut!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:sn(e,n,ot,lt,o,ut)}return;default:if(qa(n)){for(var rn in a)lt=a[rn],a.hasOwnProperty(rn)&&lt!==void 0&&!o.hasOwnProperty(rn)&&Vd(e,n,rn,void 0,o,lt);for(gt in o)lt=o[gt],ut=a[gt],!o.hasOwnProperty(gt)||lt===ut||lt===void 0&&ut===void 0||Vd(e,n,gt,lt,o,ut);return}}for(var K in a)lt=a[K],a.hasOwnProperty(K)&&lt!=null&&!o.hasOwnProperty(K)&&sn(e,n,K,null,o,lt);for(vt in o)lt=o[vt],ut=a[vt],!o.hasOwnProperty(vt)||lt===ut||lt==null&&ut==null||sn(e,n,vt,lt,o,ut)}function w_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Py(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&w_(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ot=G.startTime;if(ot>R)break;var gt=G.transferSize,vt=G.initiatorType;gt&&w_(vt)&&(G=G.responseEnd,v+=gt*(G<R?1:(R-ot)/(G-ot)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kd=null,Xd=null;function ou(e){return e.nodeType===9?e:e.ownerDocument}function D_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yd=null;function Fy(){var e=window.event;return e&&e.type==="popstate"?e===Yd?!1:(Yd=e,!0):(Yd=null,!1)}var N_=typeof setTimeout=="function"?setTimeout:void 0,By=typeof clearTimeout=="function"?clearTimeout:void 0,L_=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof L_<"u"?function(e){return L_.resolve(null).then(e).catch(Hy)}:N_;function Hy(e){setTimeout(function(){throw e})}function zs(e){return e==="head"}function O_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Mo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Pl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Pl(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Ai]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Pl(e.ownerDocument.body);a=u}while(a);Mo(n)}function I_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function qd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qd(a),Ms(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Gy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ai])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=sa(e.nextSibling),e===null)break}return null}function Vy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=sa(e.nextSibling),e===null))return null;return e}function P_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=sa(e.nextSibling),e===null))return null;return e}function jd(e){return e.data==="$?"||e.data==="$~"}function Zd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ky(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function sa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kd=null;function F_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return sa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function B_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function z_(e,n,a){switch(n=ou(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Pl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ms(e)}var ra=new Map,H_=new Set;function lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var us=U.d;U.d={f:Xy,r:Wy,D:Yy,C:qy,L:jy,m:Zy,X:Qy,S:Ky,M:Jy};function Xy(){var e=us.f(),n=$c();return e||n}function Wy(e){var n=cn(e);n!==null&&n.tag===5&&n.type==="form"?ig(n):us.r(e)}var xo=typeof document>"u"?null:document;function G_(e,n,a){var o=xo;if(o&&typeof n=="string"&&n){var u=ue(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),H_.has(u)||(H_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),ui(n,"link",e),X(n),o.head.appendChild(n)))}}function Yy(e){us.D(e),G_("dns-prefetch",e,null)}function qy(e,n){us.C(e,n),G_("preconnect",e,n)}function jy(e,n,a){us.L(e,n,a);var o=xo;if(o&&e&&n){var u='link[rel="preload"][as="'+ue(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ue(a.imageSizes)+'"]')):u+='[href="'+ue(e)+'"]';var f=u;switch(n){case"style":f=So(e);break;case"script":f=yo(e)}ra.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ra.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fl(f))||n==="script"&&o.querySelector(Bl(f))||(n=o.createElement("link"),ui(n,"link",e),X(n),o.head.appendChild(n)))}}function Zy(e,n){us.m(e,n);var a=xo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ue(o)+'"][href="'+ue(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=yo(e)}if(!ra.has(f)&&(e=x({rel:"modulepreload",href:e},n),ra.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bl(f)))return}o=a.createElement("link"),ui(o,"link",e),X(o),a.head.appendChild(o)}}}function Ky(e,n,a){us.S(e,n,a);var o=xo;if(o&&e){var u=A(o).hoistableStyles,f=So(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(Fl(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ra.get(f))&&Qd(e,a);var G=v=o.createElement("link");X(G),ui(G,"link",e),G._p=new Promise(function(ot,gt){G.onload=ot,G.onerror=gt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,cu(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function Qy(e,n){us.X(e,n);var a=xo;if(a&&e){var o=A(a).hoistableScripts,u=yo(e),f=o.get(u);f||(f=a.querySelector(Bl(u)),f||(e=x({src:e,async:!0},n),(n=ra.get(u))&&Jd(e,n),f=a.createElement("script"),X(f),ui(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Jy(e,n){us.M(e,n);var a=xo;if(a&&e){var o=A(a).hoistableScripts,u=yo(e),f=o.get(u);f||(f=a.querySelector(Bl(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=ra.get(u))&&Jd(e,n),f=a.createElement("script"),X(f),ui(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function V_(e,n,a,o){var u=(u=it.current)?lu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=So(a.href),a=A(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=So(a.href);var f=A(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Fl(e)))&&!f._p&&(v.instance=f,v.state.loading=5),ra.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ra.set(e,a),f||$y(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yo(a),a=A(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function So(e){return'href="'+ue(e)+'"'}function Fl(e){return'link[rel="stylesheet"]['+e+"]"}function k_(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function $y(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ui(n,"link",a),X(n),e.head.appendChild(n))}function yo(e){return'[src="'+ue(e)+'"]'}function Bl(e){return"script[async]"+e}function X_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ue(a.href)+'"]');if(o)return n.instance=o,X(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),ui(o,"style",u),cu(o,a.precedence,e),n.instance=o;case"stylesheet":u=So(a.href);var f=e.querySelector(Fl(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;o=k_(a),(u=ra.get(u))&&Qd(o,u),f=(e.ownerDocument||e).createElement("link"),X(f);var v=f;return v._p=new Promise(function(R,G){v.onload=R,v.onerror=G}),ui(f,"link",o),n.state.loading|=4,cu(f,a.precedence,e),n.instance=f;case"script":return f=yo(a.src),(u=e.querySelector(Bl(f)))?(n.instance=u,X(u),u):(o=a,(u=ra.get(f))&&(o=x({},a),Jd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),ui(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cu(o,a.precedence,e));return n.instance}function cu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uu=null;function W_(e,n,a){if(uu===null){var o=new Map,u=uu=new Map;u.set(a,o)}else u=uu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ai]||f[An]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function Y_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function tM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function eM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=So(o.href),f=n.querySelector(Fl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,o=k_(o),(u=ra.get(u))&&Qd(o,u),f=f.createElement("link"),X(f);var v=f;v._p=new Promise(function(R,G){v.onload=R,v.onerror=G}),ui(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $d=0;function nM(e,n){return e.stylesheets&&e.count===0&&du(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&du(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&$d===0&&($d=62500*Py());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&du(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>$d?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hu=null;function du(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hu=new Map,n.forEach(iM,e),hu=null,fu.call(e))}function iM(e,n){if(!(n.state.loading&4)){var a=hu.get(e);if(a)var o=a.get(null);else{a=new Map,hu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=fu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var zl={$$typeof:P,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function aM(e,n,a,o,u,f,v,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.hiddenUpdates=ze(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function j_(e,n,a,o,u,f,v,R,G,ot,gt,vt){return e=new aM(e,n,a,v,G,ot,gt,vt,R),n=1,f===!0&&(n|=24),f=Gi(3,null,null,n),e.current=f,f.stateNode=e,n=Nh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ph(f),e}function Z_(e){return e?(e=Qr,e):Qr}function K_(e,n,a,o,u,f){u=Z_(u),o.context===null?o.context=u:o.pendingContext=u,o=Cs(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ws(e,o,n),a!==null&&(Ii(a,e,n),_l(a,e,n))}function Q_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function tp(e,n){Q_(e,n),(e=e.alternate)&&Q_(e,n)}function J_(e){if(e.tag===13||e.tag===31){var n=fr(e,67108864);n!==null&&Ii(n,e,67108864),tp(e,67108864)}}function $_(e){if(e.tag===13||e.tag===31){var n=Yi();n=Ya(n);var a=fr(e,n);a!==null&&Ii(a,e,n),tp(e,n)}}var pu=!0;function sM(e,n,a,o){var u=D.T;D.T=null;var f=U.p;try{U.p=2,ep(e,n,a,o)}finally{U.p=f,D.T=u}}function rM(e,n,a,o){var u=D.T;D.T=null;var f=U.p;try{U.p=8,ep(e,n,a,o)}finally{U.p=f,D.T=u}}function ep(e,n,a,o){if(pu){var u=np(o);if(u===null)Gd(e,n,o,mu,a),ev(e,o);else if(lM(u,e,n,a,o))o.stopPropagation();else if(ev(e,o),n&4&&-1<oM.indexOf(e)){for(;u!==null;){var f=cn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Mt(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var G=1<<31-Pt(v);R.entanglements[1]|=G,v&=~G}Ba(f),(Ke&6)===0&&(Qc=T()+500,Ll(0))}}break;case 31:case 13:R=fr(f,2),R!==null&&Ii(R,f,2),$c(),tp(f,2)}if(f=np(o),f===null&&Gd(e,n,o,mu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Gd(e,n,o,null,a)}}function np(e){return e=Wr(e),ip(e)}var mu=null;function ip(e){if(mu=null,e=ga(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mu=e,null}function tv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case mt:return 2;case xt:return 8;case ft:case jt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var ap=!1,Hs=null,Gs=null,Vs=null,Hl=new Map,Gl=new Map,ks=[],oM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ev(e,n){switch(e){case"focusin":case"focusout":Hs=null;break;case"dragenter":case"dragleave":Gs=null;break;case"mouseover":case"mouseout":Vs=null;break;case"pointerover":case"pointerout":Hl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(n.pointerId)}}function Vl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=cn(n),n!==null&&J_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function lM(e,n,a,o,u){switch(n){case"focusin":return Hs=Vl(Hs,e,n,a,o,u),!0;case"dragenter":return Gs=Vl(Gs,e,n,a,o,u),!0;case"mouseover":return Vs=Vl(Vs,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Hl.set(f,Vl(Hl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Gl.set(f,Vl(Gl.get(f)||null,e,n,a,o,u)),!0}return!1}function nv(e){var n=ga(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,pa(e.priority,function(){$_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,pa(e.priority,function(){$_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=np(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);rr=o,a.target.dispatchEvent(o),rr=null}else return n=cn(a),n!==null&&J_(n),e.blockedOn=a,!1;n.shift()}return!0}function iv(e,n,a){gu(e)&&a.delete(n)}function cM(){ap=!1,Hs!==null&&gu(Hs)&&(Hs=null),Gs!==null&&gu(Gs)&&(Gs=null),Vs!==null&&gu(Vs)&&(Vs=null),Hl.forEach(iv),Gl.forEach(iv)}function _u(e,n){e.blockedOn===n&&(e.blockedOn=null,ap||(ap=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,cM)))}var vu=null;function av(e){vu!==e&&(vu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vu===e&&(vu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ip(o||a)===null)continue;break}var f=cn(a);f!==null&&(e.splice(n,3),n-=3,nd(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mo(e){function n(G){return _u(G,e)}Hs!==null&&_u(Hs,e),Gs!==null&&_u(Gs,e),Vs!==null&&_u(Vs,e),Hl.forEach(n),Gl.forEach(n);for(var a=0;a<ks.length;a++){var o=ks[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ks.length&&(a=ks[0],a.blockedOn===null);)nv(a),a.blockedOn===null&&ks.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[Dn]||null;if(typeof f=="function")v||av(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Dn]||null)R=v.formAction;else if(ip(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),av(a)}}}function sv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sp(e){this._internalRoot=e}xu.prototype.render=sp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Yi();K_(a,o,e,n,null,null)},xu.prototype.unmount=sp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;K_(e.current,2,null,e,null,null),$c(),n[ma]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ki();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ks.length&&n!==0&&n<ks[a].priority;a++);ks.splice(a,0,e),a===0&&nv(e)}};var rv=t.version;if(rv!=="19.2.4")throw Error(s(527,rv,"19.2.4"));U.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var uM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{bt=Su.inject(uM),Tt=Su}catch{}}return Xl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=dg,f=pg,v=mg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=j_(e,1,!1,null,null,a,o,null,u,f,v,sv),e[ma]=n.current,Hd(e),new sp(n)},Xl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=dg,v=pg,R=mg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=j_(e,1,!0,n,a??null,o,u,G,f,v,R,sv),n.context=Z_(null),a=n.current,o=Yi(),o=Ya(o),u=Cs(o),u.callback=null,ws(a,u,o),a=o,n.current.lanes=a,jn(n,a),Ba(n),e[ma]=n.current,Hd(e),new xu(n)},Xl.version="19.2.4",Xl}var gv;function SM(){if(gv)return lp.exports;gv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),lp.exports=xM(),lp.exports}var yM=SM();const Wf="183",mx=0,Zp=1,gx=2,ko=1,_x=2,Ho=3,Ss=0,gi=1,Vn=2,ka=0,Or=1,Kp=2,Qp=3,Jp=4,vx=5,Js=100,xx=101,Sx=102,yx=103,Mx=104,Ex=200,Tx=201,bx=202,Ax=203,tf=204,ef=205,Rx=206,Cx=207,wx=208,Dx=209,Ux=210,Nx=211,Lx=212,Ox=213,Ix=214,nf=0,af=1,sf=2,Ir=3,rf=4,of=5,lf=6,cf=7,Yf=0,Px=1,Fx=2,Ca=0,um=1,fm=2,hm=3,qf=4,dm=5,pm=6,mm=7,gm=300,er=301,Pr=302,ju=303,Zu=304,mc=306,Wo=1e3,Va=1001,uf=1002,ti=1003,Bx=1004,nc=1005,ei=1006,Ku=1007,vs=1008,Pi=1009,_m=1010,vm=1011,Yo=1012,jf=1013,Da=1014,ua=1015,Xa=1016,Zf=1017,Kf=1018,qo=1020,xm=35902,Sm=35899,ym=1021,Mm=1022,fa=1023,Wa=1026,$s=1027,Qf=1028,Jf=1029,Fr=1030,$f=1031,th=1033,ac=33776,sc=33777,rc=33778,oc=33779,ff=35840,hf=35841,df=35842,pf=35843,mf=36196,gf=37492,_f=37496,vf=37488,xf=37489,Sf=37490,yf=37491,Mf=37808,Ef=37809,Tf=37810,bf=37811,Af=37812,Rf=37813,Cf=37814,wf=37815,Df=37816,Uf=37817,Nf=37818,Lf=37819,Of=37820,If=37821,Pf=36492,Ff=36494,Bf=36495,zf=36283,Hf=36284,Gf=36285,Vf=36286,zx=3200,eh=0,Hx=1,gs="",Wn="srgb",Br="srgb-linear",fc="linear",Je="srgb",Ur=7680,$p=519,Gx=512,Vx=513,kx=514,nh=515,Xx=516,Wx=517,ih=518,Yx=519,tm=35044,em="300 es",Ra=2e3,jo=2001;function MM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function kf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qx(){const r=kf("canvas");return r.style.display="block",r}const _v={};function nm(...r){const t="THREE."+r.shift();console.log(t,...r)}function jx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function pe(...r){r=jx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ge(...r){r=jx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function hc(...r){const t=r.join(" ");t in _v||(_v[t]=!0,pe(...r))}function EM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const TM={[nf]:af,[sf]:lf,[rf]:cf,[Ir]:of,[af]:nf,[lf]:sf,[cf]:rf,[of]:Ir};class zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vv=1234567;const lc=Math.PI/180,Zo=180/Math.PI;function Jo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(pi[r&255]+pi[r>>8&255]+pi[r>>16&255]+pi[r>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[i&63|128]+pi[i>>8&255]+"-"+pi[i>>16&255]+pi[i>>24&255]+pi[s&255]+pi[s>>8&255]+pi[s>>16&255]+pi[s>>24&255]).toLowerCase()}function Te(r,t,i){return Math.max(t,Math.min(i,r))}function Em(r,t){return(r%t+t)%t}function bM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function AM(r,t,i){return r!==t?(i-r)/(t-r):0}function cc(r,t,i){return(1-i)*r+i*t}function RM(r,t,i,s){return cc(r,t,1-Math.exp(-i*s))}function CM(r,t=1){return t-Math.abs(Em(r,t*2)-t)}function wM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function DM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function UM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function NM(r,t){return r+Math.random()*(t-r)}function LM(r){return r*(.5-Math.random())}function OM(r){r!==void 0&&(vv=r);let t=vv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function IM(r){return r*lc}function PM(r){return r*Zo}function FM(r){return(r&r-1)===0&&r!==0}function BM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function HM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),_=h((t+s)/2),x=c((t-s)/2),g=h((t-s)/2),y=c((s-t)/2),E=h((s-t)/2);switch(l){case"XYX":r.set(d*_,m*x,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*x,d*p);break;case"ZXZ":r.set(m*x,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*E,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*E,d*p);break;case"ZYZ":r.set(m*E,m*y,d*_,d*p);break;default:pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function zo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mi={DEG2RAD:lc,RAD2DEG:Zo,generateUUID:Jo,clamp:Te,euclideanModulo:Em,mapLinear:bM,inverseLerp:AM,lerp:cc,damp:RM,pingpong:CM,smoothstep:wM,smootherstep:DM,randInt:UM,randFloat:NM,randFloatSpread:LM,seededRandom:OM,degToRad:IM,radToDeg:PM,isPowerOfTwo:FM,ceilPowerOfTwo:BM,floorPowerOfTwo:zM,setQuaternionFromProperEuler:HM,normalize:yi,denormalize:zo};class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Te(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],y=c[h+1],E=c[h+2],N=c[h+3];if(x!==N||m!==g||p!==y||_!==E){let M=m*g+p*y+_*E+x*N;M<0&&(g=-g,y=-y,E=-E,N=-N,M=-M);let S=1-d;if(M<.9995){const w=Math.acos(M),P=Math.sin(w);S=Math.sin(S*w)/P,d=Math.sin(d*w)/P,m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,x=x*S+N*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,x=x*S+N*d;const w=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=w,p*=w,_*=w,x*=w}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[h],g=c[h+1],y=c[h+2],E=c[h+3];return t[i]=d*E+_*x+m*y-p*g,t[i+1]=m*E+_*g+p*x-d*y,t[i+2]=p*E+_*y+d*g-m*x,t[i+3]=_*E-d*x-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),g=m(s/2),y=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=g*_*x+p*y*E,this._y=p*y*x-g*_*E,this._z=p*_*E+g*y*x,this._w=p*_*x-g*y*E;break;case"YXZ":this._x=g*_*x+p*y*E,this._y=p*y*x-g*_*E,this._z=p*_*E-g*y*x,this._w=p*_*x+g*y*E;break;case"ZXY":this._x=g*_*x-p*y*E,this._y=p*y*x+g*_*E,this._z=p*_*E+g*y*x,this._w=p*_*x-g*y*E;break;case"ZYX":this._x=g*_*x-p*y*E,this._y=p*y*x+g*_*E,this._z=p*_*E-g*y*x,this._w=p*_*x+g*y*E;break;case"YZX":this._x=g*_*x+p*y*E,this._y=p*y*x+g*_*E,this._z=p*_*E-g*y*x,this._w=p*_*x-g*y*E;break;case"XZY":this._x=g*_*x-p*y*E,this._y=p*y*x-g*_*E,this._z=p*_*E+g*y*x,this._w=p*_*x+g*y*E;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],g=s+d+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>x){const y=2*Math.sqrt(1+s-d-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-s-x);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(xv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(xv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return hp.copy(this).projectOnVector(t),this.sub(hp)}reflect(t){return this.sub(hp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Te(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hp=new Q,xv=new Hr;class Se{constructor(t,i,s,l,c,h,d,m,p){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],y=s[5],E=s[8],N=l[0],M=l[3],S=l[6],w=l[1],P=l[4],L=l[7],B=l[2],z=l[5],H=l[8];return c[0]=h*N+d*w+m*B,c[3]=h*M+d*P+m*z,c[6]=h*S+d*L+m*H,c[1]=p*N+_*w+x*B,c[4]=p*M+_*P+x*z,c[7]=p*S+_*L+x*H,c[2]=g*N+y*w+E*B,c[5]=g*M+y*P+E*z,c[8]=g*S+y*L+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,g=d*m-_*c,y=p*c-h*m,E=i*x+s*g+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/E;return t[0]=x*N,t[1]=(l*p-_*s)*N,t[2]=(d*s-l*h)*N,t[3]=g*N,t[4]=(_*i-l*m)*N,t[5]=(l*c-d*i)*N,t[6]=y*N,t[7]=(s*m-p*i)*N,t[8]=(h*i-s*c)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(dp.makeScale(t,i)),this}rotate(t){return this.premultiply(dp.makeRotation(-t)),this}translate(t,i){return this.premultiply(dp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dp=new Se,Sv=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yv=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GM(){const r={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Je&&(l.r=xs(l.r),l.g=xs(l.g),l.b=xs(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Je&&(l.r=Xo(l.r),l.g=Xo(l.g),l.b=Xo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===gs?fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return hc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return hc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Br]:{primaries:t,whitePoint:s,transfer:fc,toXYZ:Sv,fromXYZ:yv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:s,transfer:Je,toXYZ:Sv,fromXYZ:yv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const Ve=GM();function xs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Eo;class Zx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Eo===void 0&&(Eo=kf("canvas")),Eo.width=t.width,Eo.height=t.height;const l=Eo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Eo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xs(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xs(i[s]/255)*255):i[s]=xs(i[s]);return{data:i,width:t.width,height:t.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VM=0;class ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(pp(l[h].image)):c.push(pp(l[h]))}else c=pp(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function pp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let kM=0;const mp=new Q;class fi extends zr{constructor(t=fi.DEFAULT_IMAGE,i=fi.DEFAULT_MAPPING,s=Va,l=Va,c=ei,h=vs,d=fa,m=Pi,p=fi.DEFAULT_ANISOTROPY,_=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Jo(),this.name="",this.source=new ah(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mp).x}get height(){return this.source.getSize(mp).y}get depth(){return this.source.getSize(mp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){pe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Va:t.x=t.x<0?0:1;break;case uf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Va:t.y=t.y<0?0:1;break;case uf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=gm;fi.DEFAULT_ANISOTROPY=1;class bn{constructor(t=0,i=0,s=0,l=1){bn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],g=m[1],y=m[5],E=m[9],N=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-N)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+N)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,L=(y+1)/2,B=(S+1)/2,z=(_+g)/4,H=(x+N)/4,b=(E+M)/4;return P>L&&P>B?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=z/s,c=H/s):L>B?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=z/l,c=b/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=H/c,l=b/c),this.set(s,l,c,i),this}let w=Math.sqrt((M-E)*(M-E)+(x-N)*(x-N)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(x-N)/w,this.z=(g-_)/w,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this.w=Te(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this.w=Te(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kx extends zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new bn(0,0,t,i),this.scissorTest=!1,this.viewport=new bn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new fi(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ah(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wa extends Kx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Tm extends fi{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qx extends fi{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(t,i,s,l,c,h,d,m,p,_,x,g,y,E,N,M){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,x,g,y,E,N,M)}set(t,i,s,l,c,h,d,m,p,_,x,g,y,E,N,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=x,S[14]=g,S[3]=y,S[7]=E,S[11]=N,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/To.setFromMatrixColumn(t,0).length(),c=1/To.setFromMatrixColumn(t,1).length(),h=1/To.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*x,E=d*_,N=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+E*p,i[5]=g-N*p,i[9]=-d*m,i[2]=N-g*p,i[6]=E+y*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*x,E=p*_,N=p*x;i[0]=g+N*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=y*d-E,i[6]=N+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*x,E=p*_,N=p*x;i[0]=g-N*d,i[4]=-h*x,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*_,i[9]=N-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*x,E=d*_,N=d*x;i[0]=m*_,i[4]=E*p-y,i[8]=g*p+N,i[1]=m*x,i[5]=N*p+g,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*p,E=d*m,N=d*p;i[0]=m*_,i[4]=N-g*x,i[8]=E*x+y,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*x+E,i[10]=g-N*x}else if(t.order==="XZY"){const g=h*m,y=h*p,E=d*m,N=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=g*x+N,i[5]=h*_,i[9]=y*x-E,i[2]=E*x-y,i[6]=d*_,i[10]=N*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(XM,t,WM)}lookAt(t,i,s){const l=this.elements;return qi.subVectors(t,i),qi.lengthSq()===0&&(qi.z=1),qi.normalize(),Ws.crossVectors(s,qi),Ws.lengthSq()===0&&(Math.abs(s.z)===1?qi.x+=1e-4:qi.z+=1e-4,qi.normalize(),Ws.crossVectors(s,qi)),Ws.normalize(),yu.crossVectors(qi,Ws),l[0]=Ws.x,l[4]=yu.x,l[8]=qi.x,l[1]=Ws.y,l[5]=yu.y,l[9]=qi.y,l[2]=Ws.z,l[6]=yu.z,l[10]=qi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],y=s[13],E=s[2],N=s[6],M=s[10],S=s[14],w=s[3],P=s[7],L=s[11],B=s[15],z=l[0],H=l[4],b=l[8],C=l[12],ct=l[1],F=l[5],$=l[9],J=l[13],tt=l[2],j=l[6],D=l[10],U=l[14],q=l[3],et=l[7],St=l[11],O=l[15];return c[0]=h*z+d*ct+m*tt+p*q,c[4]=h*H+d*F+m*j+p*et,c[8]=h*b+d*$+m*D+p*St,c[12]=h*C+d*J+m*U+p*O,c[1]=_*z+x*ct+g*tt+y*q,c[5]=_*H+x*F+g*j+y*et,c[9]=_*b+x*$+g*D+y*St,c[13]=_*C+x*J+g*U+y*O,c[2]=E*z+N*ct+M*tt+S*q,c[6]=E*H+N*F+M*j+S*et,c[10]=E*b+N*$+M*D+S*St,c[14]=E*C+N*J+M*U+S*O,c[3]=w*z+P*ct+L*tt+B*q,c[7]=w*H+P*F+L*j+B*et,c[11]=w*b+P*$+L*D+B*St,c[15]=w*C+P*J+L*U+B*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],g=t[10],y=t[14],E=t[3],N=t[7],M=t[11],S=t[15],w=m*y-p*g,P=d*y-p*x,L=d*g-m*x,B=h*y-p*_,z=h*g-m*_,H=h*x-d*_;return i*(N*w-M*P+S*L)-s*(E*w-M*B+S*z)+l*(E*P-N*B+S*H)-c*(E*L-N*z+M*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],g=t[10],y=t[11],E=t[12],N=t[13],M=t[14],S=t[15],w=i*d-s*h,P=i*m-l*h,L=i*p-c*h,B=s*m-l*d,z=s*p-c*d,H=l*p-c*m,b=_*N-x*E,C=_*M-g*E,ct=_*S-y*E,F=x*M-g*N,$=x*S-y*N,J=g*S-y*M,tt=w*J-P*$+L*F+B*ct-z*C+H*b;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/tt;return t[0]=(d*J-m*$+p*F)*j,t[1]=(l*$-s*J-c*F)*j,t[2]=(N*H-M*z+S*B)*j,t[3]=(g*z-x*H-y*B)*j,t[4]=(m*ct-h*J-p*C)*j,t[5]=(i*J-l*ct+c*C)*j,t[6]=(M*L-E*H-S*P)*j,t[7]=(_*H-g*L+y*P)*j,t[8]=(h*$-d*ct+p*b)*j,t[9]=(s*ct-i*$-c*b)*j,t[10]=(E*z-N*L+S*w)*j,t[11]=(x*L-_*z-y*w)*j,t[12]=(d*C-h*F-m*b)*j,t[13]=(i*F-s*C+l*b)*j,t[14]=(N*P-E*B-M*w)*j,t[15]=(_*B-x*P+g*w)*j,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,g=c*p,y=c*_,E=c*x,N=h*_,M=h*x,S=d*x,w=m*p,P=m*_,L=m*x,B=s.x,z=s.y,H=s.z;return l[0]=(1-(N+S))*B,l[1]=(y+L)*B,l[2]=(E-P)*B,l[3]=0,l[4]=(y-L)*z,l[5]=(1-(g+S))*z,l[6]=(M+w)*z,l[7]=0,l[8]=(E+P)*H,l[9]=(M-w)*H,l[10]=(1-(g+N))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=To.set(l[0],l[1],l[2]).length();const d=To.set(l[4],l[5],l[6]).length(),m=To.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ma.copy(this);const p=1/h,_=1/d,x=1/m;return Ma.elements[0]*=p,Ma.elements[1]*=p,Ma.elements[2]*=p,Ma.elements[4]*=_,Ma.elements[5]*=_,Ma.elements[6]*=_,Ma.elements[8]*=x,Ma.elements[9]*=x,Ma.elements[10]*=x,i.setFromRotationMatrix(Ma),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=Ra,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let E,N;if(m)E=c/(h-c),N=h*c/(h-c);else if(d===Ra)E=-(h+c)/(h-c),N=-2*h*c/(h-c);else if(d===jo)E=-h/(h-c),N=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=N,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ra,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,N;if(m)E=1/(h-c),N=h/(h-c);else if(d===Ra)E=-2/(h-c),N=-(h+c)/(h-c);else if(d===jo)E=-1/(h-c),N=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=N,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const To=new Q,Ma=new on,XM=new Q(0,0,0),WM=new Q(1,1,1),Ws=new Q,yu=new Q,qi=new Q,Mv=new on,Ev=new Hr;class da{constructor(t=0,i=0,s=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Te(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Mv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ev.setFromEuler(this),this.setFromQuaternion(Ev,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let YM=0;const Tv=new Q,bo=new Hr,fs=new on,Mu=new Q,Wl=new Q,qM=new Q,jM=new Hr,bv=new Q(1,0,0),Av=new Q(0,1,0),Rv=new Q(0,0,1),Cv={type:"added"},ZM={type:"removed"},Ao={type:"childadded",child:null},gp={type:"childremoved",child:null};class mn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new Q,i=new da,s=new Hr,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new Se}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return bo.setFromAxisAngle(t,i),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,i){return bo.setFromAxisAngle(t,i),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(bv,t)}rotateY(t){return this.rotateOnAxis(Av,t)}rotateZ(t){return this.rotateOnAxis(Rv,t)}translateOnAxis(t,i){return Tv.copy(t).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(bv,t)}translateY(t){return this.translateOnAxis(Av,t)}translateZ(t){return this.translateOnAxis(Rv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mu.copy(t):Mu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(Wl,Mu,this.up):fs.lookAt(Mu,Wl,this.up),this.quaternion.setFromRotationMatrix(fs),l&&(fs.extractRotation(l.matrixWorld),bo.setFromRotationMatrix(fs),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cv),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ZM),gp.child=t,this.dispatchEvent(gp),gp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fs.multiply(t.parent.matrixWorld)),t.applyMatrix4(fs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cv),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,t,qM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,jM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}mn.DEFAULT_UP=new Q(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Go extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const N of t.hand.values()){const M=i.getJointPose(N,s),S=this._getHandJoint(p,N);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Go;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function _p(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class le{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ve.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ve.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ve.workingColorSpace){if(t=Em(t,1),i=Te(i,0,1),s=Te(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=_p(h,c,t+1/3),this.g=_p(h,c,t),this.b=_p(h,c,t-1/3)}return Ve.colorSpaceToWorking(this,l),this}setStyle(t,i=Wn){function s(c){c!==void 0&&parseFloat(c)<1&&pe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:pe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Wn){const s=Jx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=Xo(t.r),this.g=Xo(t.g),this.b=Xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Ve.workingToColorSpace(mi.copy(this),t),Math.round(Te(mi.r*255,0,255))*65536+Math.round(Te(mi.g*255,0,255))*256+Math.round(Te(mi.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ve.workingColorSpace){Ve.workingToColorSpace(mi.copy(this),i);const s=mi.r,l=mi.g,c=mi.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ve.workingColorSpace){return Ve.workingToColorSpace(mi.copy(this),i),t.r=mi.r,t.g=mi.g,t.b=mi.b,t}getStyle(t=Wn){Ve.workingToColorSpace(mi.copy(this),t);const i=mi.r,s=mi.g,l=mi.b;return t!==Wn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ys),this.setHSL(Ys.h+t,Ys.s+i,Ys.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ys),t.getHSL(Eu);const s=cc(Ys.h,Eu.h,i),l=cc(Ys.s,Eu.s,i),c=cc(Ys.l,Eu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mi=new le;le.NAMES=Jx;class dc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=i,this.far=s}clone(){return new dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bm extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ea=new Q,hs=new Q,vp=new Q,ds=new Q,Ro=new Q,Co=new Q,wv=new Q,xp=new Q,Sp=new Q,yp=new Q,Mp=new bn,Ep=new bn,Tp=new bn;class ca{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ea.subVectors(t,i),l.cross(Ea);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ea.subVectors(l,i),hs.subVectors(s,i),vp.subVectors(t,i);const h=Ea.dot(Ea),d=Ea.dot(hs),m=Ea.dot(vp),p=hs.dot(hs),_=hs.dot(vp),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(p*m-d*_)*g,E=(h*_-d*m)*g;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ds)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ds.x),m.addScaledVector(h,ds.y),m.addScaledVector(d,ds.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Mp.setScalar(0),Ep.setScalar(0),Tp.setScalar(0),Mp.fromBufferAttribute(t,i),Ep.fromBufferAttribute(t,s),Tp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Mp,c.x),h.addScaledVector(Ep,c.y),h.addScaledVector(Tp,c.z),h}static isFrontFacing(t,i,s,l){return Ea.subVectors(s,i),hs.subVectors(t,i),Ea.cross(hs).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ea.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),Ea.cross(hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ca.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ca.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ca.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ca.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ca.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Ro.subVectors(l,s),Co.subVectors(c,s),xp.subVectors(t,s);const m=Ro.dot(xp),p=Co.dot(xp);if(m<=0&&p<=0)return i.copy(s);Sp.subVectors(t,l);const _=Ro.dot(Sp),x=Co.dot(Sp);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Ro,h);yp.subVectors(t,c);const y=Ro.dot(yp),E=Co.dot(yp);if(E>=0&&y<=E)return i.copy(c);const N=y*p-m*E;if(N<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Co,d);const M=_*E-y*x;if(M<=0&&x-_>=0&&y-E>=0)return wv.subVectors(c,l),d=(x-_)/(x-_+(y-E)),i.copy(l).addScaledVector(wv,d);const S=1/(M+N+g);return h=N*S,d=g*S,i.copy(s).addScaledVector(Ro,h).addScaledVector(Co,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class nr{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ta.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ta.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ta.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ta):Ta.fromBufferAttribute(c,h),Ta.applyMatrix4(t.matrixWorld),this.expandByPoint(Ta);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tu.copy(s.boundingBox)),Tu.applyMatrix4(t.matrixWorld),this.union(Tu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ta),Ta.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yl),bu.subVectors(this.max,Yl),wo.subVectors(t.a,Yl),Do.subVectors(t.b,Yl),Uo.subVectors(t.c,Yl),qs.subVectors(Do,wo),js.subVectors(Uo,Do),Tr.subVectors(wo,Uo);let i=[0,-qs.z,qs.y,0,-js.z,js.y,0,-Tr.z,Tr.y,qs.z,0,-qs.x,js.z,0,-js.x,Tr.z,0,-Tr.x,-qs.y,qs.x,0,-js.y,js.x,0,-Tr.y,Tr.x,0];return!bp(i,wo,Do,Uo,bu)||(i=[1,0,0,0,1,0,0,0,1],!bp(i,wo,Do,Uo,bu))?!1:(Au.crossVectors(qs,js),i=[Au.x,Au.y,Au.z],bp(i,wo,Do,Uo,bu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ta).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ta).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ps),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ps=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ta=new Q,Tu=new nr,wo=new Q,Do=new Q,Uo=new Q,qs=new Q,js=new Q,Tr=new Q,Yl=new Q,bu=new Q,Au=new Q,br=new Q;function bp(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){br.fromArray(r,c);const d=l.x*Math.abs(br.x)+l.y*Math.abs(br.y)+l.z*Math.abs(br.z),m=t.dot(br),p=i.dot(br),_=s.dot(br);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Gn=new Q,Ru=new be;let QM=0;class ha{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=tm,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ru.fromBufferAttribute(this,i),Ru.applyMatrix3(t),this.setXY(i,Ru.x,Ru.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix3(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=zo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=yi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=yi(i,this.array),s=yi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=yi(i,this.array),s=yi(s,this.array),l=yi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=yi(i,this.array),s=yi(s,this.array),l=yi(l,this.array),c=yi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tm&&(t.usage=this.usage),t}}class Am extends ha{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Rm extends ha{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ni extends ha{constructor(t,i,s){super(new Float32Array(t),i,s)}}const JM=new nr,ql=new Q,Ap=new Q;class $o{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):JM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ql.subVectors(t,this.center);const i=ql.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ql,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ap.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ql.copy(t.center).add(Ap)),this.expandByPoint(ql.copy(t.center).sub(Ap))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $M=0;const oa=new on,Rp=new mn,No=new Q,ji=new nr,jl=new nr,$n=new Q;class Zi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(MM(t)?Rm:Am)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oa.makeRotationFromQuaternion(t),this.applyMatrix4(oa),this}rotateX(t){return oa.makeRotationX(t),this.applyMatrix4(oa),this}rotateY(t){return oa.makeRotationY(t),this.applyMatrix4(oa),this}rotateZ(t){return oa.makeRotationZ(t),this.applyMatrix4(oa),this}translate(t,i,s){return oa.makeTranslation(t,i,s),this.applyMatrix4(oa),this}scale(t,i,s){return oa.makeScale(t,i,s),this.applyMatrix4(oa),this}lookAt(t){return Rp.lookAt(t),Rp.updateMatrix(),this.applyMatrix4(Rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ni(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ji.setFromBufferAttribute(c),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,ji.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,ji.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(ji.min),this.boundingBox.expandByPoint(ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(ji.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];jl.setFromBufferAttribute(d),this.morphTargetsRelative?($n.addVectors(ji.min,jl.min),ji.expandByPoint($n),$n.addVectors(ji.max,jl.max),ji.expandByPoint($n)):(ji.expandByPoint(jl.min),ji.expandByPoint(jl.max))}ji.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)$n.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared($n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)$n.fromBufferAttribute(d,p),m&&(No.fromBufferAttribute(t,p),$n.add(No)),l=Math.max(l,s.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ha(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let b=0;b<s.count;b++)d[b]=new Q,m[b]=new Q;const p=new Q,_=new Q,x=new Q,g=new be,y=new be,E=new be,N=new Q,M=new Q;function S(b,C,ct){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,C),x.fromBufferAttribute(s,ct),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,ct),_.sub(p),x.sub(p),y.sub(g),E.sub(g);const F=1/(y.x*E.y-E.x*y.y);isFinite(F)&&(N.copy(_).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(F),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(F),d[b].add(N),d[C].add(N),d[ct].add(N),m[b].add(M),m[C].add(M),m[ct].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,C=w.length;b<C;++b){const ct=w[b],F=ct.start,$=ct.count;for(let J=F,tt=F+$;J<tt;J+=3)S(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const P=new Q,L=new Q,B=new Q,z=new Q;function H(b){B.fromBufferAttribute(l,b),z.copy(B);const C=d[b];P.copy(C),P.sub(B.multiplyScalar(B.dot(C))).normalize(),L.crossVectors(z,C);const F=L.dot(m[b])<0?-1:1;h.setXYZW(b,P.x,P.y,P.z,F)}for(let b=0,C=w.length;b<C;++b){const ct=w[b],F=ct.start,$=ct.count;for(let J=F,tt=F+$;J<tt;J+=3)H(t.getX(J+0)),H(t.getX(J+1)),H(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ha(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new Q,c=new Q,h=new Q,d=new Q,m=new Q,p=new Q,_=new Q,x=new Q;if(t)for(let g=0,y=t.count;g<y;g+=3){const E=t.getX(g+0),N=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,N),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(N,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)$n.fromBufferAttribute(t,i),$n.normalize(),t.setXYZ(i,$n.x,$n.y,$n.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,g=new p.constructor(m.length*_);let y=0,E=0;for(let N=0,M=m.length;N<M;N++){d.isInterleavedBufferAttribute?y=m[N]*d.data.stride+d.offset:y=m[N]*_;for(let S=0;S<_;S++)g[E++]=p[y++]}return new ha(g,_,x)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const y=p[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tE=0;class Gr extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Or,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=ef,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){pe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(s.blending=this.blending),this.side!==Ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==tf&&(s.blendSrc=this.blendSrc),this.blendDst!==ef&&(s.blendDst=this.blendDst),this.blendEquation!==Js&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ms=new Q,Cp=new Q,Cu=new Q,Zs=new Q,wp=new Q,wu=new Q,Dp=new Q;class Cm{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ms)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ms.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ms.copy(this.origin).addScaledVector(this.direction,i),ms.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Cp.copy(t).add(i).multiplyScalar(.5),Cu.copy(i).sub(t).normalize(),Zs.copy(this.origin).sub(Cp);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Cu),d=Zs.dot(this.direction),m=-Zs.dot(Cu),p=Zs.lengthSq(),_=Math.abs(1-h*h);let x,g,y,E;if(_>0)if(x=h*m-d,g=h*d-m,E=c*_,x>=0)if(g>=-E)if(g<=E){const N=1/_;x*=N,g*=N,y=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g<=-E?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p):g<=E?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Cp).addScaledVector(Cu,g),y}intersectSphere(t,i){ms.subVectors(t.center,this.origin);const s=ms.dot(this.direction),l=ms.dot(ms)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ms)!==null}intersectTriangle(t,i,s,l,c){wp.subVectors(i,t),wu.subVectors(s,t),Dp.crossVectors(wp,wu);let h=this.direction.dot(Dp),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Zs.subVectors(this.origin,t);const m=d*this.direction.dot(wu.crossVectors(Zs,wu));if(m<0)return null;const p=d*this.direction.dot(wp.cross(Zs));if(p<0||m+p>h)return null;const _=-d*Zs.dot(Dp);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pc extends Gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=Yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Dv=new on,Ar=new Cm,Du=new $o,Uv=new Q,Uu=new Q,Nu=new Q,Lu=new Q,Up=new Q,Ou=new Q,Nv=new Q,Iu=new Q;class He extends mn{constructor(t=new Zi,i=new pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ou.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Up.fromBufferAttribute(x,t),h?Ou.addScaledVector(Up,_):Ou.addScaledVector(Up.sub(i),_))}i.add(Ou)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Du.copy(s.boundingSphere),Du.applyMatrix4(c),Ar.copy(t.ray).recast(t.near),!(Du.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Du,Uv)===null||Ar.origin.distanceToSquared(Uv)>(t.far-t.near)**2))&&(Dv.copy(c).invert(),Ar.copy(t.ray).applyMatrix4(Dv),!(s.boundingBox!==null&&Ar.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ar)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,N=g.length;E<N;E++){const M=g[E],S=h[M.materialIndex],w=Math.max(M.start,y.start),P=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,B=P;L<B;L+=3){const z=d.getX(L),H=d.getX(L+1),b=d.getX(L+2);l=Pu(this,S,t,s,p,_,x,z,H,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),N=Math.min(d.count,y.start+y.count);for(let M=E,S=N;M<S;M+=3){const w=d.getX(M),P=d.getX(M+1),L=d.getX(M+2);l=Pu(this,h,t,s,p,_,x,w,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,N=g.length;E<N;E++){const M=g[E],S=h[M.materialIndex],w=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,B=P;L<B;L+=3){const z=L,H=L+1,b=L+2;l=Pu(this,S,t,s,p,_,x,z,H,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),N=Math.min(m.count,y.start+y.count);for(let M=E,S=N;M<S;M+=3){const w=M,P=M+1,L=M+2;l=Pu(this,h,t,s,p,_,x,w,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function eE(r,t,i,s,l,c,h,d){let m;if(t.side===gi?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ss,d),m===null)return null;Iu.copy(d),Iu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Iu);return p<i.near||p>i.far?null:{distance:p,point:Iu.clone(),object:r}}function Pu(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Uu),r.getVertexPosition(m,Nu),r.getVertexPosition(p,Lu);const _=eE(r,t,i,s,Uu,Nu,Lu,Nv);if(_){const x=new Q;ca.getBarycoord(Nv,Uu,Nu,Lu,x),l&&(_.uv=ca.getInterpolatedAttribute(l,d,m,p,x,new be)),c&&(_.uv1=ca.getInterpolatedAttribute(c,d,m,p,x,new be)),h&&(_.normal=ca.getInterpolatedAttribute(h,d,m,p,x,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new Q,materialIndex:0};ca.getNormal(Uu,Nu,Lu,g.normal),_.face=g,_.barycoord=x}return _}class wm extends fi{constructor(t=null,i=1,s=1,l,c,h,d,m,p=ti,_=ti,x,g){super(null,h,d,m,p,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class im extends ha{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Lo=new on,Lv=new on,Fu=[],Ov=new nr,nE=new on,Zl=new He,Kl=new $o;class $x extends He{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new im(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,nE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new nr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Lo),Ov.copy(t.boundingBox).applyMatrix4(Lo),this.boundingBox.union(Ov)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new $o),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Lo),Kl.copy(t.boundingSphere).applyMatrix4(Lo),this.boundingSphere.union(Kl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Zl.geometry=this.geometry,Zl.material=this.material,Zl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kl.copy(this.boundingSphere),Kl.applyMatrix4(s),t.ray.intersectsSphere(Kl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Lo),Lv.multiplyMatrices(s,Lo),Zl.matrixWorld=Lv,Zl.raycast(t,Fu);for(let h=0,d=Fu.length;h<d;h++){const m=Fu[h];m.instanceId=c,m.object=this,i.push(m)}Fu.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new im(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new wm(new Float32Array(l*this.count),l,this.count,Qf,ua));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Np=new Q,iE=new Q,aE=new Se;class Qs{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Np.subVectors(s,i).cross(iE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Np),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||aE.getNormalMatrix(t),l=this.coplanarPoint(Np).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new $o,sE=new be(.5,.5),Bu=new Q;class rh{constructor(t=new Qs,i=new Qs,s=new Qs,l=new Qs,c=new Qs,h=new Qs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ra,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],y=c[7],E=c[8],N=c[9],M=c[10],S=c[11],w=c[12],P=c[13],L=c[14],B=c[15];if(l[0].setComponents(p-h,y-_,S-E,B-w).normalize(),l[1].setComponents(p+h,y+_,S+E,B+w).normalize(),l[2].setComponents(p+d,y+x,S+N,B+P).normalize(),l[3].setComponents(p-d,y-x,S-N,B-P).normalize(),s)l[4].setComponents(m,g,M,L).normalize(),l[5].setComponents(p-m,y-g,S-M,B-L).normalize();else if(l[4].setComponents(p-m,y-g,S-M,B-L).normalize(),i===Ra)l[5].setComponents(p+m,y+g,S+M,B+L).normalize();else if(i===jo)l[5].setComponents(m,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){Rr.center.set(0,0,0);const i=sE.distanceTo(t.center);return Rr.radius=.7071067811865476+i,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bu.x=l.normal.x>0?t.max.x:t.min.x,Bu.y=l.normal.y>0?t.max.y:t.min.y,Bu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dm extends fi{constructor(t=[],i=er,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vo extends fi{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ko extends fi{constructor(t,i,s=Da,l,c,h,d=ti,m=ti,p,_=Wa,x=1){if(_!==Wa&&_!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ah(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tS extends Ko{constructor(t,i=Da,s=er,l,c,h=ti,d=ti,m,p=Wa){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Um extends fi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ir extends Zi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let g=0,y=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ni(p,3)),this.setAttribute("normal",new ni(_,3)),this.setAttribute("uv",new ni(x,2));function E(N,M,S,w,P,L,B,z,H,b,C){const ct=L/H,F=B/b,$=L/2,J=B/2,tt=z/2,j=H+1,D=b+1;let U=0,q=0;const et=new Q;for(let St=0;St<D;St++){const O=St*F-J;for(let Y=0;Y<j;Y++){const dt=Y*ct-$;et[N]=dt*w,et[M]=O*P,et[S]=tt,p.push(et.x,et.y,et.z),et[N]=0,et[M]=0,et[S]=z>0?1:-1,_.push(et.x,et.y,et.z),x.push(Y/H),x.push(1-St/b),U+=1}}for(let St=0;St<b;St++)for(let O=0;O<H;O++){const Y=g+O+j*St,dt=g+O+j*(St+1),At=g+(O+1)+j*(St+1),Dt=g+(O+1)+j*St;m.push(Y,dt,Dt),m.push(dt,At,Dt),q+=6}d.addGroup(y,q,C),y+=q,g+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class eS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pe("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(h-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new be:new Q);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Q,l=[],c=[],h=[],d=new Q,m=new on;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new Q)}c[0]=new Q,h[0]=new Q;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Te(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,E))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Te(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Nm(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,_,x){let g=(h-c)/p-(d-c)/(p+_)+(d-h)/_,y=(d-h)/_-(m-h)/(_+x)+(m-d)/x;g*=_,y*=_,l(h,d,g,y)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const zu=new Q,Lp=new Nm,Op=new Nm,Ip=new Nm;class nS extends eS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new Q){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(zu.subVectors(l[0],l[1]).add(l[0]),p=zu);const x=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(zu.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=zu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(x),y),N=Math.pow(x.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);N<1e-4&&(N=1),E<1e-4&&(E=N),M<1e-4&&(M=N),Lp.initNonuniformCatmullRom(p.x,x.x,g.x,_.x,E,N,M),Op.initNonuniformCatmullRom(p.y,x.y,g.y,_.y,E,N,M),Ip.initNonuniformCatmullRom(p.z,x.z,g.z,_.z,E,N,M)}else this.curveType==="catmullrom"&&(Lp.initCatmullRom(p.x,x.x,g.x,_.x,this.tension),Op.initCatmullRom(p.y,x.y,g.y,_.y,this.tension),Ip.initCatmullRom(p.z,x.z,g.z,_.z,this.tension));return s.set(Lp.calc(m),Op.calc(m),Ip.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ga extends Zi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,g=i/m,y=[],E=[],N=[],M=[];for(let S=0;S<_;S++){const w=S*g-h;for(let P=0;P<p;P++){const L=P*x-c;E.push(L,-w,0),N.push(0,0,1),M.push(P/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<d;w++){const P=w+p*S,L=w+p*(S+1),B=w+1+p*(S+1),z=w+1+p*S;y.push(P,L,z),y.push(L,B,z)}this.setIndex(y),this.setAttribute("position",new ni(E,3)),this.setAttribute("normal",new ni(N,3)),this.setAttribute("uv",new ni(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}class oh extends Zi{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let x=t;const g=(i-t)/l,y=new Q,E=new be;for(let N=0;N<=l;N++){for(let M=0;M<=s;M++){const S=c+M/s*h;y.x=x*Math.cos(S),y.y=x*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,_.push(E.x,E.y)}x+=g}for(let N=0;N<l;N++){const M=N*(s+1);for(let S=0;S<s;S++){const w=S+M,P=w,L=w+s+1,B=w+s+2,z=w+1;d.push(P,L,z),d.push(L,B,z)}}this.setIndex(d),this.setAttribute("position",new ni(m,3)),this.setAttribute("normal",new ni(p,3)),this.setAttribute("uv",new ni(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class lh extends Zi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],x=new Q,g=new Q,y=[],E=[],N=[],M=[];for(let S=0;S<=s;S++){const w=[],P=S/s;let L=0;S===0&&h===0?L=.5/i:S===s&&m===Math.PI&&(L=-.5/i);for(let B=0;B<=i;B++){const z=B/i;x.x=-t*Math.cos(l+z*c)*Math.sin(h+P*d),x.y=t*Math.cos(h+P*d),x.z=t*Math.sin(l+z*c)*Math.sin(h+P*d),E.push(x.x,x.y,x.z),g.copy(x).normalize(),N.push(g.x,g.y,g.z),M.push(z+L,1-P),w.push(p++)}_.push(w)}for(let S=0;S<s;S++)for(let w=0;w<i;w++){const P=_[S][w+1],L=_[S][w],B=_[S+1][w],z=_[S+1][w+1];(S!==0||h>0)&&y.push(P,L,z),(S!==s-1||m<Math.PI)&&y.push(L,B,z)}this.setIndex(y),this.setAttribute("position",new ni(E,3)),this.setAttribute("normal",new ni(N,3)),this.setAttribute("uv",new ni(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Qo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ei(r){const t={};for(let i=0;i<r.length;i++){const s=Qo(r[i]);for(const l in s)t[l]=s[l]}return t}function rE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function iS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}const aS={clone:Qo,merge:Ei};var oE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ua extends Gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qo(t.uniforms),this.uniformsGroups=rE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sS extends Ua{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _s extends Gr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nr extends _s{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class rS extends Gr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=Yf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oS extends Gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lS extends Gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tl extends mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class cS extends tl{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Pp=new on,Iv=new Q,Pv=new Q;class Lm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Iv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Iv),Pv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Pv),i.updateMatrixWorld(),Pp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pp,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===jo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Pp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hu=new Q,Gu=new Hr,za=new Q;class Om extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hu,Gu,za),za.x===1&&za.y===1&&za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Gu,za.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Hu,Gu,za),za.x===1&&za.y===1&&za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Gu,za.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ks=new Q,Fv=new be,Bv=new be;class Ti extends Om{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z)}getViewSize(t,i){return this.getViewBounds(t,Fv,Bv),i.subVectors(Bv,Fv)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(lc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cE extends Lm{constructor(){super(new Ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Zo*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ju extends tl{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new cE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class uE extends Lm{constructor(){super(new Ti(90,1,.5,500)),this.isPointLightShadow=!0}}class uc extends tl{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new uE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ch extends Om{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class fE extends Lm{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class am extends tl{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new fE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class uS extends tl{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Oo=-90,Io=1;class fS extends mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(Oo,Io,t,i);l.layers=this.layers,this.add(l);const c=new Ti(Oo,Io,t,i);c.layers=this.layers,this.add(c);const h=new Ti(Oo,Io,t,i);h.layers=this.layers,this.add(h);const d=new Ti(Oo,Io,t,i);d.layers=this.layers,this.add(d);const m=new Ti(Oo,Io,t,i);m.layers=this.layers,this.add(m);const p=new Ti(Oo,Io,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class hS extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const zv=new on;class dS{constructor(t,i,s=0,l=1/0){this.ray=new Cm(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ge("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return zv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zv),this}intersectObject(t,i=!0,s=[]){return sm(t,this,s,i),s.sort(Hv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)sm(t[l],this,s,i);return s.sort(Hv),s}}function Hv(r,t){return r.distance-t.distance}function sm(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)sm(c[h],t,i,!0)}}class pS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,pe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Gv(r,t,i,s){const l=hE(s);switch(i){case ym:return r*t;case Qf:return r*t/l.components*l.byteLength;case Jf:return r*t/l.components*l.byteLength;case Fr:return r*t*2/l.components*l.byteLength;case $f:return r*t*2/l.components*l.byteLength;case Mm:return r*t*3/l.components*l.byteLength;case fa:return r*t*4/l.components*l.byteLength;case th:return r*t*4/l.components*l.byteLength;case ac:case sc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case rc:case oc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hf:case pf:return Math.max(r,16)*Math.max(t,8)/4;case ff:case df:return Math.max(r,8)*Math.max(t,8)/2;case mf:case gf:case vf:case xf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _f:case Sf:case yf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ef:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Tf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case bf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Af:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Rf:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Cf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Df:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Uf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Lf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Of:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case If:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Pf:case Ff:case Bf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case zf:case Hf:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gf:case Vf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hE(r){switch(r){case Pi:case _m:return{byteLength:1,components:1};case Yo:case vm:case Xa:return{byteLength:2,components:1};case Zf:case Kf:return{byteLength:2,components:4};case Da:case jf:case ua:return{byteLength:4,components:1};case xm:case Sm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);function mS(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function dE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<x.length;y++){const E=x[g],N=x[y];N.start<=E.start+E.count+1?E.count=Math.max(E.count,N.start+N.count-E.start):(++g,x[g]=N)}x.length=g+1;for(let y=0,E=x.length;y<E;y++){const N=x[y];r.bufferSubData(p,N.start*_.BYTES_PER_ELEMENT,_,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RE=`#ifdef USE_IRIDESCENCE
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
#endif`,CE=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FE=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,zE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XE="gl_FragColor = linearToOutputTexel( gl_FragColor );",WE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eT=`#ifdef USE_GRADIENTMAP
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
}`,nT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,rT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	vec3 f0 = material.specularColorBlended;
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ST=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ET=`#if defined( USE_POINTS_UV )
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
#endif`,TT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,NT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,FT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$T=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nb=`#ifdef USE_SKINNING
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
#endif`,ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ob=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lb=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pb=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Sb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Cb=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Db=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Nb=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ob=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ib=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Xb=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:_E,alphatest_fragment:vE,alphatest_pars_fragment:xE,aomap_fragment:SE,aomap_pars_fragment:yE,batching_pars_vertex:ME,batching_vertex:EE,begin_vertex:TE,beginnormal_vertex:bE,bsdfs:AE,iridescence_fragment:RE,bumpmap_pars_fragment:CE,clipping_planes_fragment:wE,clipping_planes_pars_fragment:DE,clipping_planes_pars_vertex:UE,clipping_planes_vertex:NE,color_fragment:LE,color_pars_fragment:OE,color_pars_vertex:IE,color_vertex:PE,common:FE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:zE,displacementmap_pars_vertex:HE,displacementmap_vertex:GE,emissivemap_fragment:VE,emissivemap_pars_fragment:kE,colorspace_fragment:XE,colorspace_pars_fragment:WE,envmap_fragment:YE,envmap_common_pars_fragment:qE,envmap_pars_fragment:jE,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:rT,envmap_vertex:KE,fog_vertex:QE,fog_pars_vertex:JE,fog_fragment:$E,fog_pars_fragment:tT,gradientmap_pars_fragment:eT,lightmap_pars_fragment:nT,lights_lambert_fragment:iT,lights_lambert_pars_fragment:aT,lights_pars_begin:sT,lights_toon_fragment:oT,lights_toon_pars_fragment:lT,lights_phong_fragment:cT,lights_phong_pars_fragment:uT,lights_physical_fragment:fT,lights_physical_pars_fragment:hT,lights_fragment_begin:dT,lights_fragment_maps:pT,lights_fragment_end:mT,logdepthbuf_fragment:gT,logdepthbuf_pars_fragment:_T,logdepthbuf_pars_vertex:vT,logdepthbuf_vertex:xT,map_fragment:ST,map_pars_fragment:yT,map_particle_fragment:MT,map_particle_pars_fragment:ET,metalnessmap_fragment:TT,metalnessmap_pars_fragment:bT,morphinstance_vertex:AT,morphcolor_vertex:RT,morphnormal_vertex:CT,morphtarget_pars_vertex:wT,morphtarget_vertex:DT,normal_fragment_begin:UT,normal_fragment_maps:NT,normal_pars_fragment:LT,normal_pars_vertex:OT,normal_vertex:IT,normalmap_pars_fragment:PT,clearcoat_normal_fragment_begin:FT,clearcoat_normal_fragment_maps:BT,clearcoat_pars_fragment:zT,iridescence_pars_fragment:HT,opaque_fragment:GT,packing:VT,premultiplied_alpha_fragment:kT,project_vertex:XT,dithering_fragment:WT,dithering_pars_fragment:YT,roughnessmap_fragment:qT,roughnessmap_pars_fragment:jT,shadowmap_pars_fragment:ZT,shadowmap_pars_vertex:KT,shadowmap_vertex:QT,shadowmask_pars_fragment:JT,skinbase_vertex:$T,skinning_pars_vertex:tb,skinning_vertex:eb,skinnormal_vertex:nb,specularmap_fragment:ib,specularmap_pars_fragment:ab,tonemapping_fragment:sb,tonemapping_pars_fragment:rb,transmission_fragment:ob,transmission_pars_fragment:lb,uv_pars_fragment:cb,uv_pars_vertex:ub,uv_vertex:fb,worldpos_vertex:hb,background_vert:db,background_frag:pb,backgroundCube_vert:mb,backgroundCube_frag:gb,cube_vert:_b,cube_frag:vb,depth_vert:xb,depth_frag:Sb,distance_vert:yb,distance_frag:Mb,equirect_vert:Eb,equirect_frag:Tb,linedashed_vert:bb,linedashed_frag:Ab,meshbasic_vert:Rb,meshbasic_frag:Cb,meshlambert_vert:wb,meshlambert_frag:Db,meshmatcap_vert:Ub,meshmatcap_frag:Nb,meshnormal_vert:Lb,meshnormal_frag:Ob,meshphong_vert:Ib,meshphong_frag:Pb,meshphysical_vert:Fb,meshphysical_frag:Bb,meshtoon_vert:zb,meshtoon_frag:Hb,points_vert:Gb,points_frag:Vb,shadow_vert:kb,shadow_frag:Xb,sprite_vert:Wb,sprite_frag:Yb},Bt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Aa={basic:{uniforms:Ei([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Ei([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Ei([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Ei([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Ei([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new le(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Ei([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Ei([Bt.points,Bt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Ei([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Ei([Bt.common,Bt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Ei([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Ei([Bt.sprite,Bt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:Ei([Bt.common,Bt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:Ei([Bt.lights,Bt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Aa.physical={uniforms:Ei([Aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Vu={r:0,b:0,g:0},Cr=new da,qb=new on;function jb(r,t,i,s,l,c){const h=new le(0);let d=l===!0?0:1,m,p,_=null,x=0,g=null;function y(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const L=w.backgroundBlurriness>0;P=t.get(P,L)}return P}function E(w){let P=!1;const L=y(w);L===null?M(h,d):L&&L.isColor&&(M(L,1),P=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function N(w,P){const L=y(P);L&&(L.isCubeTexture||L.mapping===mc)?(p===void 0&&(p=new He(new ir(1,1,1),new Ua({name:"BackgroundCubeMaterial",uniforms:Qo(Aa.backgroundCube.uniforms),vertexShader:Aa.backgroundCube.vertexShader,fragmentShader:Aa.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Cr.copy(P.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(Cr)),p.material.toneMapped=Ve.getTransfer(L.colorSpace)!==Je,(_!==L||x!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=L,x=L.version,g=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new He(new Ga(2,2),new Ua({name:"BackgroundMaterial",uniforms:Qo(Aa.background.uniforms),vertexShader:Aa.background.vertexShader,fragmentShader:Aa.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ve.getTransfer(L.colorSpace)!==Je,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||x!==L.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=L,x=L.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,P){w.getRGB(Vu,iS(r)),i.buffers.color.setClear(Vu.r,Vu.g,Vu.b,P,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,P=1){h.set(w),d=P,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,M(h,d)},render:E,addToRenderList:N,dispose:S}}function Zb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(F,$,J,tt,j){let D=!1;const U=x(F,tt,J,$);c!==U&&(c=U,p(c.object)),D=y(F,tt,J,j),D&&E(F,tt,J,j),j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(D||h)&&(h=!1,L(F,$,J,tt),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function m(){return r.createVertexArray()}function p(F){return r.bindVertexArray(F)}function _(F){return r.deleteVertexArray(F)}function x(F,$,J,tt){const j=tt.wireframe===!0;let D=s[$.id];D===void 0&&(D={},s[$.id]=D);const U=F.isInstancedMesh===!0?F.id:0;let q=D[U];q===void 0&&(q={},D[U]=q);let et=q[J.id];et===void 0&&(et={},q[J.id]=et);let St=et[j];return St===void 0&&(St=g(m()),et[j]=St),St}function g(F){const $=[],J=[],tt=[];for(let j=0;j<i;j++)$[j]=0,J[j]=0,tt[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:J,attributeDivisors:tt,object:F,attributes:{},index:null}}function y(F,$,J,tt){const j=c.attributes,D=$.attributes;let U=0;const q=J.getAttributes();for(const et in q)if(q[et].location>=0){const O=j[et];let Y=D[et];if(Y===void 0&&(et==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),et==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;U++}return c.attributesNum!==U||c.index!==tt}function E(F,$,J,tt){const j={},D=$.attributes;let U=0;const q=J.getAttributes();for(const et in q)if(q[et].location>=0){let O=D[et];O===void 0&&(et==="instanceMatrix"&&F.instanceMatrix&&(O=F.instanceMatrix),et==="instanceColor"&&F.instanceColor&&(O=F.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),j[et]=Y,U++}c.attributes=j,c.attributesNum=U,c.index=tt}function N(){const F=c.newAttributes;for(let $=0,J=F.length;$<J;$++)F[$]=0}function M(F){S(F,0)}function S(F,$){const J=c.newAttributes,tt=c.enabledAttributes,j=c.attributeDivisors;J[F]=1,tt[F]===0&&(r.enableVertexAttribArray(F),tt[F]=1),j[F]!==$&&(r.vertexAttribDivisor(F,$),j[F]=$)}function w(){const F=c.newAttributes,$=c.enabledAttributes;for(let J=0,tt=$.length;J<tt;J++)$[J]!==F[J]&&(r.disableVertexAttribArray(J),$[J]=0)}function P(F,$,J,tt,j,D,U){U===!0?r.vertexAttribIPointer(F,$,J,j,D):r.vertexAttribPointer(F,$,J,tt,j,D)}function L(F,$,J,tt){N();const j=tt.attributes,D=J.getAttributes(),U=$.defaultAttributeValues;for(const q in D){const et=D[q];if(et.location>=0){let St=j[q];if(St===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(St=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(St=F.instanceColor)),St!==void 0){const O=St.normalized,Y=St.itemSize,dt=t.get(St);if(dt===void 0)continue;const At=dt.buffer,Dt=dt.type,it=dt.bytesPerElement,pt=Dt===r.INT||Dt===r.UNSIGNED_INT||St.gpuType===jf;if(St.isInterleavedBufferAttribute){const yt=St.data,Lt=yt.stride,Xt=St.offset;if(yt.isInstancedInterleavedBuffer){for(let ne=0;ne<et.locationSize;ne++)S(et.location+ne,yt.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ne=0;ne<et.locationSize;ne++)M(et.location+ne);r.bindBuffer(r.ARRAY_BUFFER,At);for(let ne=0;ne<et.locationSize;ne++)P(et.location+ne,Y/et.locationSize,Dt,O,Lt*it,(Xt+Y/et.locationSize*ne)*it,pt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<et.locationSize;yt++)S(et.location+yt,St.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<et.locationSize;yt++)M(et.location+yt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let yt=0;yt<et.locationSize;yt++)P(et.location+yt,Y/et.locationSize,Dt,O,Y*it,Y/et.locationSize*yt*it,pt)}}else if(U!==void 0){const O=U[q];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(et.location,O);break;case 3:r.vertexAttrib3fv(et.location,O);break;case 4:r.vertexAttrib4fv(et.location,O);break;default:r.vertexAttrib1fv(et.location,O)}}}}w()}function B(){C();for(const F in s){const $=s[F];for(const J in $){const tt=$[J];for(const j in tt){const D=tt[j];for(const U in D)_(D[U].object),delete D[U];delete tt[j]}}delete s[F]}}function z(F){if(s[F.id]===void 0)return;const $=s[F.id];for(const J in $){const tt=$[J];for(const j in tt){const D=tt[j];for(const U in D)_(D[U].object),delete D[U];delete tt[j]}}delete s[F.id]}function H(F){for(const $ in s){const J=s[$];for(const tt in J){const j=J[tt];if(j[F.id]===void 0)continue;const D=j[F.id];for(const U in D)_(D[U].object),delete D[U];delete j[F.id]}}}function b(F){for(const $ in s){const J=s[$],tt=F.isInstancedMesh===!0?F.id:0,j=J[tt];if(j!==void 0){for(const D in j){const U=j[D];for(const q in U)_(U[q].object),delete U[q];delete j[D]}delete J[tt],Object.keys(J).length===0&&delete s[$]}}}function C(){ct(),h=!0,c!==l&&(c=l,p(c.object))}function ct(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:C,resetDefaultState:ct,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfObject:b,releaseStatesOfProgram:H,initAttributes:N,enableAttribute:M,disableUnusedAttributes:w}}function Kb(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let y=0;for(let E=0;E<x;E++)y+=_[E];i.update(y,s,1)}function m(p,_,x,g){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],_[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,x);let E=0;for(let N=0;N<x;N++)E+=_[N]*g[N];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Qb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==fa&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const b=H===Xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Pi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ua&&!b)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(pe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:N,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:L,maxSamples:B,samples:z}}function Jb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Qs,d=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const E=x.clippingPlanes,N=x.clipIntersection,M=x.clipShadows,S=r.get(x);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const w=c?0:s,P=w*4;let L=S.clippingState||null;m.value=L,L=_(E,g,P,y);for(let B=0;B!==P;++B)L[B]=i[B];S.clippingState=L,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,y,E){const N=x!==null?x.length:0;let M=null;if(N!==0){if(M=m.value,E!==!0||M===null){const S=y+N*4,w=g.matrixWorldInverse;d.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let P=0,L=y;P!==N;++P,L+=4)h.copy(x[P]).applyMatrix4(w,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,M}}const tr=4,Vv=[.125,.215,.35,.446,.526,.582],Lr=20,$b=256,Ql=new ch,kv=new le;let Fp=null,Bp=0,zp=0,Hp=!1;const t1=new Q;class Xf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=t1}=c;Fp=this._renderer.getRenderTarget(),Bp=this._renderer.getActiveCubeFace(),zp=this._renderer.getActiveMipmapLevel(),Hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fp,Bp,zp),this._renderer.xr.enabled=Hp,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===er||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fp=this._renderer.getRenderTarget(),Bp=this._renderer.getActiveCubeFace(),zp=this._renderer.getActiveMipmapLevel(),Hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Xa,format:fa,colorSpace:Br,depthBuffer:!1},l=Xv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e1(c)),this._blurMaterial=i1(c,t,i),this._ggxMaterial=n1(c,t,i)}return l}_compileMaterial(t){const i=new He(new Zi,t);this._renderer.compile(i,Ql)}_sceneToCubeUV(t,i,s,l,c){const m=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(kv),x.toneMapping=Ca,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new ir,new pc({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let S=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,S=!0):(M.color.copy(kv),S=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[P],c.y,c.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[P]));const B=this._cubeSize;Po(l,L*B,P>2?B:0,B,B),x.setRenderTarget(l),S&&x.render(N,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===er||t.mapping===Pr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Po(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ql)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,y=x*g,{_lodMax:E}=this,N=this._sizeLods[s],M=3*N*(s>E-tr?s-E+tr:0),S=4*(this._cubeSize-N);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,Po(c,M,S,3*N,2*N),l.setRenderTarget(c),l.render(d,Ql),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Po(t,M,S,3*N,2*N),l.setRenderTarget(t),l.render(d,Ql)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Lr-1),N=c/E,M=isFinite(c)?1+Math.floor(_*N):Lr;M>Lr&&pe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Lr}`);const S=[];let w=0;for(let H=0;H<Lr;++H){const b=H/N,C=Math.exp(-b*b/2);S.push(C),H===0?w+=C:H<M&&(w+=2*C)}for(let H=0;H<S.length;H++)S[H]=S[H]/w;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:P}=this;g.dTheta.value=E,g.mipInt.value=P-s;const L=this._sizeLods[l],B=3*L*(l>P-tr?l-P+tr:0),z=4*(this._cubeSize-L);Po(i,B,z,3*L,2*L),m.setRenderTarget(i),m.render(x,Ql)}}function e1(r){const t=[],i=[],s=[];let l=r;const c=r-tr+1+Vv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-tr?m=Vv[h-r+tr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,E=6,N=3,M=2,S=1,w=new Float32Array(N*E*y),P=new Float32Array(M*E*y),L=new Float32Array(S*E*y);for(let z=0;z<y;z++){const H=z%3*2/3-1,b=z>2?0:-1,C=[H,b,0,H+2/3,b,0,H+2/3,b+1,0,H,b,0,H+2/3,b+1,0,H,b+1,0];w.set(C,N*E*z),P.set(g,M*E*z);const ct=[z,z,z,z,z,z];L.set(ct,S*E*z)}const B=new Zi;B.setAttribute("position",new ha(w,N)),B.setAttribute("uv",new ha(P,M)),B.setAttribute("faceIndex",new ha(L,S)),s.push(new He(B,null)),l>tr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Xv(r,t,i){const s=new wa(r,t,i);return s.texture.mapping=mc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Po(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function n1(r,t,i){return new Ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$b,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function i1(r,t,i){const s=new Float32Array(Lr),l=new Q(0,1,0);return new Ua({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uh(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Wv(){return new Ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Yv(){return new Ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}class Im extends wa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Dm(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ir(5,5,5),c=new Ua({name:"CubemapFromEquirect",uniforms:Qo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:gi,blending:ka});c.uniforms.tEquirect.value=i;const h=new He(l,c),d=i.minFilter;return i.minFilter===vs&&(i.minFilter=ei),new fS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function a1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===ju||y===Zu)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const N=new Im(E.height);return N.fromEquirectangularTexture(r,g),t.set(g,N),g.addEventListener("dispose",p),d(N.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,E=y===ju||y===Zu,N=y===er||y===Pr;if(E||N){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Xf(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const w=g.image;return E&&w&&w.height>0||N&&w&&m(w)?(s===null&&(s=new Xf(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===ju?g.mapping=er:y===Zu&&(g.mapping=Pr),g}function m(g){let y=0;const E=6;for(let N=0;N<E;N++)g[N]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function s1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&hc("WebGLRenderer: "+s+" extension not supported."),l}}}function r1(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(x){const g=[],y=x.index,E=x.attributes.position;let N=0;if(E===void 0)return;if(y!==null){const w=y.array;N=y.version;for(let P=0,L=w.length;P<L;P+=3){const B=w[P+0],z=w[P+1],H=w[P+2];g.push(B,z,z,H,H,B)}}else{const w=E.array;N=E.version;for(let P=0,L=w.length/3-1;P<L;P+=3){const B=P+0,z=P+1,H=P+2;g.push(B,z,z,H,H,B)}}const M=new(E.count>=65535?Rm:Am)(g,1);M.version=N;const S=c.get(x);S&&t.remove(S),c.set(x,M)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function o1(r,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*h),i.update(y,s,1)}function p(g,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,g*h,E),i.update(y,s,E))}function _(g,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,E);let M=0;for(let S=0;S<E;S++)M+=y[S];i.update(M,s,1)}function x(g,y,E,N){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/h,y[S],N[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,N,0,E);let S=0;for(let w=0;w<E;w++)S+=y[w]*N[w];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function l1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ge("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function c1(r,t,i){const s=new WeakMap,l=new bn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let ct=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",ct)};var y=ct;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,N=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let L=0;E===!0&&(L=1),N===!0&&(L=2),M===!0&&(L=3);let B=d.attributes.position.count*L,z=1;B>t.maxTextureSize&&(z=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const H=new Float32Array(B*z*4*x),b=new Tm(H,B,z,x);b.type=ua,b.needsUpdate=!0;const C=L*4;for(let F=0;F<x;F++){const $=S[F],J=w[F],tt=P[F],j=B*z*4*F;for(let D=0;D<$.count;D++){const U=D*C;E===!0&&(l.fromBufferAttribute($,D),H[j+U+0]=l.x,H[j+U+1]=l.y,H[j+U+2]=l.z,H[j+U+3]=0),N===!0&&(l.fromBufferAttribute(J,D),H[j+U+4]=l.x,H[j+U+5]=l.y,H[j+U+6]=l.z,H[j+U+7]=0),M===!0&&(l.fromBufferAttribute(tt,D),H[j+U+8]=l.x,H[j+U+9]=l.y,H[j+U+10]=l.z,H[j+U+11]=tt.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new be(B,z)},s.set(d,g),d.addEventListener("dispose",ct)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const N=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",N),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function u1(r,t,i,s,l){let c=new WeakMap;function h(p){const _=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const f1={[um]:"LINEAR_TONE_MAPPING",[fm]:"REINHARD_TONE_MAPPING",[hm]:"CINEON_TONE_MAPPING",[qf]:"ACES_FILMIC_TONE_MAPPING",[pm]:"AGX_TONE_MAPPING",[mm]:"NEUTRAL_TONE_MAPPING",[dm]:"CUSTOM_TONE_MAPPING"};function h1(r,t,i,s,l){const c=new wa(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new wa(t,i,{type:Xa,depthBuffer:!1,stencilBuffer:!1}),d=new Zi;d.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ni([0,2,0,0,2,0],2));const m=new sS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new He(d,m),_=new ch(-1,1,1,-1,0,1);let x=null,g=null,y=!1,E,N=null,M=[],S=!1;this.setSize=function(w,P){c.setSize(w,P),h.setSize(w,P);for(let L=0;L<M.length;L++){const B=M[L];B.setSize&&B.setSize(w,P)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const P=c.width,L=c.height;for(let B=0;B<M.length;B++){const z=M[B];z.setSize&&z.setSize(P,L)}},this.begin=function(w,P){if(y||w.toneMapping===Ca&&M.length===0)return!1;if(N=P,P!==null){const L=P.width,B=P.height;(c.width!==L||c.height!==B)&&this.setSize(L,B)}return S===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Ca,!0},this.hasRenderPass=function(){return S},this.end=function(w,P){w.toneMapping=E,y=!0;let L=c,B=h;for(let z=0;z<M.length;z++){const H=M[z];if(H.enabled!==!1&&(H.render(w,B,L,P),H.needsSwap!==!1)){const b=L;L=B,B=b}}if(x!==w.outputColorSpace||g!==w.toneMapping){x=w.outputColorSpace,g=w.toneMapping,m.defines={},Ve.getTransfer(x)===Je&&(m.defines.SRGB_TRANSFER="");const z=f1[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,w.setRenderTarget(N),w.render(p,_),N=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const gS=new fi,rm=new Ko(1,1),_S=new Tm,vS=new Qx,xS=new Dm,qv=[],jv=[],Zv=new Float32Array(16),Kv=new Float32Array(9),Qv=new Float32Array(4);function el(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=qv[l];if(c===void 0&&(c=new Float32Array(l),qv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function Yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function qn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function fh(r,t){let i=jv[t];i===void 0&&(i=new Int32Array(t),jv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function d1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function p1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2fv(this.addr,t),qn(i,t)}}function m1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Yn(i,t))return;r.uniform3fv(this.addr,t),qn(i,t)}}function g1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4fv(this.addr,t),qn(i,t)}}function _1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;Qv.set(s),r.uniformMatrix2fv(this.addr,!1,Qv),qn(i,s)}}function v1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;Kv.set(s),r.uniformMatrix3fv(this.addr,!1,Kv),qn(i,s)}}function x1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;Zv.set(s),r.uniformMatrix4fv(this.addr,!1,Zv),qn(i,s)}}function S1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2iv(this.addr,t),qn(i,t)}}function M1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yn(i,t))return;r.uniform3iv(this.addr,t),qn(i,t)}}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4iv(this.addr,t),qn(i,t)}}function T1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function b1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2uiv(this.addr,t),qn(i,t)}}function A1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yn(i,t))return;r.uniform3uiv(this.addr,t),qn(i,t)}}function R1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4uiv(this.addr,t),qn(i,t)}}function C1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(rm.compareFunction=i.isReversedDepthBuffer()?ih:nh,c=rm):c=gS,i.setTexture2D(t||c,l)}function w1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||vS,l)}function D1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||xS,l)}function U1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||_S,l)}function N1(r){switch(r){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return S1;case 35667:case 35671:return y1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return T1;case 36294:return b1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return U1}}function L1(r,t){r.uniform1fv(this.addr,t)}function O1(r,t){const i=el(t,this.size,2);r.uniform2fv(this.addr,i)}function I1(r,t){const i=el(t,this.size,3);r.uniform3fv(this.addr,i)}function P1(r,t){const i=el(t,this.size,4);r.uniform4fv(this.addr,i)}function F1(r,t){const i=el(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function B1(r,t){const i=el(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function z1(r,t){const i=el(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function H1(r,t){r.uniform1iv(this.addr,t)}function G1(r,t){r.uniform2iv(this.addr,t)}function V1(r,t){r.uniform3iv(this.addr,t)}function k1(r,t){r.uniform4iv(this.addr,t)}function X1(r,t){r.uniform1uiv(this.addr,t)}function W1(r,t){r.uniform2uiv(this.addr,t)}function Y1(r,t){r.uniform3uiv(this.addr,t)}function q1(r,t){r.uniform4uiv(this.addr,t)}function j1(r,t,i){const s=this.cache,l=t.length,c=fh(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=rm:h=gS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function Z1(r,t,i){const s=this.cache,l=t.length,c=fh(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||vS,c[h])}function K1(r,t,i){const s=this.cache,l=t.length,c=fh(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||xS,c[h])}function Q1(r,t,i){const s=this.cache,l=t.length,c=fh(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||_S,c[h])}function J1(r){switch(r){case 5126:return L1;case 35664:return O1;case 35665:return I1;case 35666:return P1;case 35674:return F1;case 35675:return B1;case 35676:return z1;case 5124:case 35670:return H1;case 35667:case 35671:return G1;case 35668:case 35672:return V1;case 35669:case 35673:return k1;case 5125:return X1;case 36294:return W1;case 36295:return Y1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Q1}}class $1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=N1(i.type)}}class tA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=J1(i.type)}}class eA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Gp=/(\w+)(\])?(\[|\.)?/g;function Jv(r,t){r.seq.push(t),r.map[t.id]=t}function nA(r,t,i){const s=r.name,l=s.length;for(Gp.lastIndex=0;;){const c=Gp.exec(s),h=Gp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Jv(i,p===void 0?new $1(d,r,t):new tA(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new eA(d),Jv(i,x)),i=x}}}class $u{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);nA(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function $v(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const iA=37297;let aA=0;function sA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const tx=new Se;function rA(r){Ve._getMatrix(tx,Ve.workingColorSpace,r);const t=`mat3( ${tx.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(r)){case fc:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ex(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+sA(r.getShaderSource(t),d)}else return c}function oA(r,t){const i=rA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const lA={[um]:"Linear",[fm]:"Reinhard",[hm]:"Cineon",[qf]:"ACESFilmic",[pm]:"AgX",[mm]:"Neutral",[dm]:"Custom"};function cA(r,t){const i=lA[t];return i===void 0?(pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ku=new Q;function uA(){Ve.getLuminanceCoefficients(ku);const r=ku.x.toFixed(4),t=ku.y.toFixed(4),i=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ic).join(`
`)}function hA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function dA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function ic(r){return r!==""}function nx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ix(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(r){return r.replace(pA,gA)}const mA=new Map;function gA(r,t){let i=Me[t];if(i===void 0){const s=mA.get(t);if(s!==void 0)i=Me[s],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return om(i)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ax(r){return r.replace(_A,vA)}function vA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function sx(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const xA={[ko]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function SA(r){return xA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yA={[er]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};function MA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":yA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const EA={[Pr]:"ENVMAP_MODE_REFRACTION"};function TA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":EA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bA={[Yf]:"ENVMAP_BLENDING_MULTIPLY",[Px]:"ENVMAP_BLENDING_MIX",[Fx]:"ENVMAP_BLENDING_ADD"};function AA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":bA[r.combine]||"ENVMAP_BLENDING_NONE"}function RA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function CA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=SA(i),p=MA(i),_=TA(i),x=AA(i),g=RA(i),y=fA(i),E=hA(c),N=l.createProgram();let M,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ic).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ic).join(`
`),S.length>0&&(S+=`
`)):(M=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ic).join(`
`),S=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ca?"#define TONE_MAPPING":"",i.toneMapping!==Ca?Me.tonemapping_pars_fragment:"",i.toneMapping!==Ca?cA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,oA("linearToOutputTexel",i.outputColorSpace),uA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ic).join(`
`)),h=om(h),h=nx(h,i),h=ix(h,i),d=om(d),d=nx(d,i),d=ix(d,i),h=ax(h),d=ax(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=w+M+h,L=w+S+d,B=$v(l,l.VERTEX_SHADER,P),z=$v(l,l.FRAGMENT_SHADER,L);l.attachShader(N,B),l.attachShader(N,z),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function H(F){if(r.debug.checkShaderErrors){const $=l.getProgramInfoLog(N)||"",J=l.getShaderInfoLog(B)||"",tt=l.getShaderInfoLog(z)||"",j=$.trim(),D=J.trim(),U=tt.trim();let q=!0,et=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,N,B,z);else{const St=ex(l,B,"vertex"),O=ex(l,z,"fragment");Ge("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+j+`
`+St+`
`+O)}else j!==""?pe("WebGLProgram: Program Info Log:",j):(D===""||U==="")&&(et=!1);et&&(F.diagnostics={runnable:q,programLog:j,vertexShader:{log:D,prefix:M},fragmentShader:{log:U,prefix:S}})}l.deleteShader(B),l.deleteShader(z),b=new $u(l,N),C=dA(l,N)}let b;this.getUniforms=function(){return b===void 0&&H(this),b};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let ct=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ct===!1&&(ct=l.getProgramParameter(N,iA)),ct},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aA++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=B,this.fragmentShader=z,this}let wA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new UA(t),i.set(t,s)),s}}class UA{constructor(t){this.id=wA++,this.code=t,this.usedTimes=0}}function NA(r,t,i,s,l,c){const h=new sh,d=new DA,m=new Set,p=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function N(b,C,ct,F,$){const J=F.fog,tt=$.geometry,j=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,D=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,U=t.get(b.envMap||j,D),q=U&&U.mapping===mc?U.image.height:null,et=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&pe("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const St=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,O=St!==void 0?St.length:0;let Y=0;tt.morphAttributes.position!==void 0&&(Y=1),tt.morphAttributes.normal!==void 0&&(Y=2),tt.morphAttributes.color!==void 0&&(Y=3);let dt,At,Dt,it;if(et){const ze=Aa[et];dt=ze.vertexShader,At=ze.fragmentShader}else dt=b.vertexShader,At=b.fragmentShader,d.update(b),Dt=d.getVertexShaderID(b),it=d.getFragmentShaderID(b);const pt=r.getRenderTarget(),yt=r.state.buffers.depth.getReversed(),Lt=$.isInstancedMesh===!0,Xt=$.isBatchedMesh===!0,ne=!!b.map,ln=!!b.matcap,ve=!!U,oe=!!b.aoMap,ke=!!b.lightMap,he=!!b.bumpMap,nn=!!b.normalMap,V=!!b.displacementMap,$e=!!b.emissiveMap,Ae=!!b.metalnessMap,Xe=!!b.roughnessMap,Qt=b.anisotropy>0,I=b.clearcoat>0,T=b.dispersion>0,Z=b.iridescence>0,mt=b.sheen>0,xt=b.transmission>0,ft=Qt&&!!b.anisotropyMap,jt=I&&!!b.clearcoatMap,Ct=I&&!!b.clearcoatNormalMap,ie=I&&!!b.clearcoatRoughnessMap,re=Z&&!!b.iridescenceMap,bt=Z&&!!b.iridescenceThicknessMap,Tt=mt&&!!b.sheenColorMap,zt=mt&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,Ht=!!b.specularColorMap,ge=!!b.specularIntensityMap,W=xt&&!!b.transmissionMap,wt=xt&&!!b.thicknessMap,Et=!!b.gradientMap,Ft=!!b.alphaMap,Mt=b.alphaTest>0,ht=!!b.alphaHash,Vt=!!b.extensions;let Jt=Ca;b.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Jt=r.toneMapping);const Pe={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:dt,fragmentShader:At,defines:b.defines,customVertexShaderID:Dt,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&$._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&$.instanceColor!==null,instancingMorph:Lt&&$.morphTexture!==null,outputColorSpace:pt===null?r.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Br,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:ln,envMap:ve,envMapMode:ve&&U.mapping,envMapCubeUVHeight:q,aoMap:oe,lightMap:ke,bumpMap:he,normalMap:nn,displacementMap:V,emissiveMap:$e,normalMapObjectSpace:nn&&b.normalMapType===Hx,normalMapTangentSpace:nn&&b.normalMapType===eh,metalnessMap:Ae,roughnessMap:Xe,anisotropy:Qt,anisotropyMap:ft,clearcoat:I,clearcoatMap:jt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:ie,dispersion:T,iridescence:Z,iridescenceMap:re,iridescenceThicknessMap:bt,sheen:mt,sheenColorMap:Tt,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:Ht,specularIntensityMap:ge,transmission:xt,transmissionMap:W,thicknessMap:wt,gradientMap:Et,opaque:b.transparent===!1&&b.blending===Or&&b.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:ht,combine:b.combine,mapUv:ne&&E(b.map.channel),aoMapUv:oe&&E(b.aoMap.channel),lightMapUv:ke&&E(b.lightMap.channel),bumpMapUv:he&&E(b.bumpMap.channel),normalMapUv:nn&&E(b.normalMap.channel),displacementMapUv:V&&E(b.displacementMap.channel),emissiveMapUv:$e&&E(b.emissiveMap.channel),metalnessMapUv:Ae&&E(b.metalnessMap.channel),roughnessMapUv:Xe&&E(b.roughnessMap.channel),anisotropyMapUv:ft&&E(b.anisotropyMap.channel),clearcoatMapUv:jt&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:zt&&E(b.sheenRoughnessMap.channel),specularMapUv:Pt&&E(b.specularMap.channel),specularColorMapUv:Ht&&E(b.specularColorMap.channel),specularIntensityMapUv:ge&&E(b.specularIntensityMap.channel),transmissionMapUv:W&&E(b.transmissionMap.channel),thicknessMapUv:wt&&E(b.thicknessMap.channel),alphaMapUv:Ft&&E(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(nn||Qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!tt.attributes.uv&&(ne||Ft),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||tt.attributes.normal===void 0&&nn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:yt,skinning:$.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&ct.length>0,shadowMapType:r.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&Ve.getTransfer(b.map.colorSpace)===Je,decodeVideoTextureEmissive:$e&&b.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(b.emissiveMap.colorSpace)===Je,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vn,flipSided:b.side===gi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Vt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&b.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pe.vertexUv1s=m.has(1),Pe.vertexUv2s=m.has(2),Pe.vertexUv3s=m.has(3),m.clear(),Pe}function M(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ct in b.defines)C.push(ct),C.push(b.defines[ct]);return b.isRawShaderMaterial===!1&&(S(C,b),w(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function S(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function w(b,C){h.disableAll(),C.instancing&&h.enable(0),C.instancingColor&&h.enable(1),C.instancingMorph&&h.enable(2),C.matcap&&h.enable(3),C.envMap&&h.enable(4),C.normalMapObjectSpace&&h.enable(5),C.normalMapTangentSpace&&h.enable(6),C.clearcoat&&h.enable(7),C.iridescence&&h.enable(8),C.alphaTest&&h.enable(9),C.vertexColors&&h.enable(10),C.vertexAlphas&&h.enable(11),C.vertexUv1s&&h.enable(12),C.vertexUv2s&&h.enable(13),C.vertexUv3s&&h.enable(14),C.vertexTangents&&h.enable(15),C.anisotropy&&h.enable(16),C.alphaHash&&h.enable(17),C.batching&&h.enable(18),C.dispersion&&h.enable(19),C.batchingColor&&h.enable(20),C.gradientMap&&h.enable(21),b.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),b.push(h.mask)}function P(b){const C=y[b.type];let ct;if(C){const F=Aa[C];ct=aS.clone(F.uniforms)}else ct=b.uniforms;return ct}function L(b,C){let ct=_.get(C);return ct!==void 0?++ct.usedTimes:(ct=new CA(r,C,b,l),p.push(ct),_.set(C,ct)),ct}function B(b){if(--b.usedTimes===0){const C=p.indexOf(b);p[C]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function z(b){d.remove(b)}function H(){d.dispose()}return{getParameters:N,getProgramCacheKey:M,getUniforms:P,acquireProgram:L,releaseProgram:B,releaseShaderCache:z,programs:p,dispose:H}}function LA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function OA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function rx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ox(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,E,N,M,S){let w=r[t];return w===void 0?(w={id:g.id,object:g,geometry:y,material:E,materialVariant:h(g),groupOrder:N,renderOrder:g.renderOrder,z:M,group:S},r[t]=w):(w.id=g.id,w.object=g,w.geometry=y,w.material=E,w.materialVariant=h(g),w.groupOrder=N,w.renderOrder=g.renderOrder,w.z=M,w.group=S),t++,w}function m(g,y,E,N,M,S){const w=d(g,y,E,N,M,S);E.transmission>0?s.push(w):E.transparent===!0?l.push(w):i.push(w)}function p(g,y,E,N,M,S){const w=d(g,y,E,N,M,S);E.transmission>0?s.unshift(w):E.transparent===!0?l.unshift(w):i.unshift(w)}function _(g,y){i.length>1&&i.sort(g||OA),s.length>1&&s.sort(y||rx),l.length>1&&l.sort(y||rx)}function x(){for(let g=t,y=r.length;g<y;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:_}}function IA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new ox,r.set(s,[h])):l>=c.length?(h=new ox,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function PA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new le};break;case"SpotLight":i={position:new Q,direction:new Q,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new le,groundColor:new le};break;case"RectAreaLight":i={color:new le,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function FA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let BA=0;function zA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function HA(r){const t=new PA,i=FA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,c=new on,h=new on;function d(p){let _=0,x=0,g=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,E=0,N=0,M=0,S=0,w=0,P=0,L=0,B=0,z=0,H=0;p.sort(zA);for(let C=0,ct=p.length;C<ct;C++){const F=p[C],$=F.color,J=F.intensity,tt=F.distance;let j=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Fr?j=F.shadow.map.texture:j=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)_+=$.r*J,x+=$.g*J,g+=$.b*J;else if(F.isLightProbe){for(let D=0;D<9;D++)s.probe[D].addScaledVector(F.sh.coefficients[D],J);H++}else if(F.isDirectionalLight){const D=t.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const U=F.shadow,q=i.get(F);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=j,s.directionalShadowMatrix[y]=F.shadow.matrix,w++}s.directional[y]=D,y++}else if(F.isSpotLight){const D=t.get(F);D.position.setFromMatrixPosition(F.matrixWorld),D.color.copy($).multiplyScalar(J),D.distance=tt,D.coneCos=Math.cos(F.angle),D.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),D.decay=F.decay,s.spot[N]=D;const U=F.shadow;if(F.map&&(s.spotLightMap[B]=F.map,B++,U.updateMatrices(F),F.castShadow&&z++),s.spotLightMatrix[N]=U.matrix,F.castShadow){const q=i.get(F);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,s.spotShadow[N]=q,s.spotShadowMap[N]=j,L++}N++}else if(F.isRectAreaLight){const D=t.get(F);D.color.copy($).multiplyScalar(J),D.halfWidth.set(F.width*.5,0,0),D.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=D,M++}else if(F.isPointLight){const D=t.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity),D.distance=F.distance,D.decay=F.decay,F.castShadow){const U=F.shadow,q=i.get(F);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,q.shadowCameraNear=U.camera.near,q.shadowCameraFar=U.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=j,s.pointShadowMatrix[E]=F.shadow.matrix,P++}s.point[E]=D,E++}else if(F.isHemisphereLight){const D=t.get(F);D.skyColor.copy(F.color).multiplyScalar(J),D.groundColor.copy(F.groundColor).multiplyScalar(J),s.hemi[S]=D,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==E||b.spotLength!==N||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==P||b.numSpotShadows!==L||b.numSpotMaps!==B||b.numLightProbes!==H)&&(s.directional.length=y,s.spot.length=N,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+B-z,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=H,b.directionalLength=y,b.pointLength=E,b.spotLength=N,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=P,b.numSpotShadows=L,b.numSpotMaps=B,b.numLightProbes=H,s.version=BA++)}function m(p,_){let x=0,g=0,y=0,E=0,N=0;const M=_.matrixWorldInverse;for(let S=0,w=p.length;S<w;S++){const P=p[S];if(P.isDirectionalLight){const L=s.directional[x];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),x++}else if(P.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),E++}else if(P.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),g++}else if(P.isHemisphereLight){const L=s.hemi[N];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(M),N++}}}return{setup:d,setupView:m,state:s}}function lx(r){const t=new HA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function GA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new lx(r),t.set(l,[d])):c>=h.length?(d=new lx(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const VA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XA=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],WA=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],cx=new on,Jl=new Q,Vp=new Q;function YA(r,t,i){let s=new rh;const l=new be,c=new be,h=new bn,d=new oS,m=new lS,p={},_=i.maxTextureSize,x={[Ss]:gi,[gi]:Ss,[Vn]:Vn},g=new Ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:VA,fragmentShader:kA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new Zi;E.setAttribute("position",new ha(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new He(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let S=this.type;this.render=function(z,H,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===_x&&(pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ko);const C=r.getRenderTarget(),ct=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),$=r.state;$.setBlending(ka),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=S!==this.type;J&&H.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(j=>j.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,j=z.length;tt<j;tt++){const D=z[tt],U=D.shadow;if(U===void 0){pe("WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;l.copy(U.mapSize);const q=U.getFrameExtents();l.multiply(q),c.copy(U.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/q.x),l.x=c.x*q.x,U.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/q.y),l.y=c.y*q.y,U.mapSize.y=c.y));const et=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=et,U.map===null||J===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ho){if(D.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new wa(l.x,l.y,{format:Fr,type:Xa,minFilter:ei,magFilter:ei,generateMipmaps:!1}),U.map.texture.name=D.name+".shadowMap",U.map.depthTexture=new Ko(l.x,l.y,ua),U.map.depthTexture.name=D.name+".shadowMapDepth",U.map.depthTexture.format=Wa,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ti,U.map.depthTexture.magFilter=ti}else D.isPointLight?(U.map=new Im(l.x),U.map.depthTexture=new tS(l.x,Da)):(U.map=new wa(l.x,l.y),U.map.depthTexture=new Ko(l.x,l.y,Da)),U.map.depthTexture.name=D.name+".shadowMap",U.map.depthTexture.format=Wa,this.type===ko?(U.map.depthTexture.compareFunction=et?ih:nh,U.map.depthTexture.minFilter=ei,U.map.depthTexture.magFilter=ei):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ti,U.map.depthTexture.magFilter=ti);U.camera.updateProjectionMatrix()}const St=U.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<St;O++){if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,O),r.clear();else{O===0&&(r.setRenderTarget(U.map),r.clear());const Y=U.getViewport(O);h.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),$.viewport(h)}if(D.isPointLight){const Y=U.camera,dt=U.matrix,At=D.distance||Y.far;At!==Y.far&&(Y.far=At,Y.updateProjectionMatrix()),Jl.setFromMatrixPosition(D.matrixWorld),Y.position.copy(Jl),Vp.copy(Y.position),Vp.add(XA[O]),Y.up.copy(WA[O]),Y.lookAt(Vp),Y.updateMatrixWorld(),dt.makeTranslation(-Jl.x,-Jl.y,-Jl.z),cx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),U._frustum.setFromProjectionMatrix(cx,Y.coordinateSystem,Y.reversedDepth)}else U.updateMatrices(D);s=U.getFrustum(),L(H,b,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===Ho&&w(U,b),U.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(C,ct,F)};function w(z,H){const b=t.update(N);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new wa(l.x,l.y,{format:Fr,type:Xa})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(H,null,b,g,N,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(H,null,b,y,N,null)}function P(z,H,b,C){let ct=null;const F=b.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)ct=F;else if(ct=b.isPointLight===!0?m:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const $=ct.uuid,J=H.uuid;let tt=p[$];tt===void 0&&(tt={},p[$]=tt);let j=tt[J];j===void 0&&(j=ct.clone(),tt[J]=j,H.addEventListener("dispose",B)),ct=j}if(ct.visible=H.visible,ct.wireframe=H.wireframe,C===Ho?ct.side=H.shadowSide!==null?H.shadowSide:H.side:ct.side=H.shadowSide!==null?H.shadowSide:x[H.side],ct.alphaMap=H.alphaMap,ct.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,ct.map=H.map,ct.clipShadows=H.clipShadows,ct.clippingPlanes=H.clippingPlanes,ct.clipIntersection=H.clipIntersection,ct.displacementMap=H.displacementMap,ct.displacementScale=H.displacementScale,ct.displacementBias=H.displacementBias,ct.wireframeLinewidth=H.wireframeLinewidth,ct.linewidth=H.linewidth,b.isPointLight===!0&&ct.isMeshDistanceMaterial===!0){const $=r.properties.get(ct);$.light=b}return ct}function L(z,H,b,C,ct){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&ct===Ho)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,z.matrixWorld);const J=t.update(z),tt=z.material;if(Array.isArray(tt)){const j=J.groups;for(let D=0,U=j.length;D<U;D++){const q=j[D],et=tt[q.materialIndex];if(et&&et.visible){const St=P(z,et,C,ct);z.onBeforeShadow(r,z,H,b,J,St,q),r.renderBufferDirect(b,null,J,St,z,q),z.onAfterShadow(r,z,H,b,J,St,q)}}}else if(tt.visible){const j=P(z,tt,C,ct);z.onBeforeShadow(r,z,H,b,J,j,null),r.renderBufferDirect(b,null,J,j,z,null),z.onAfterShadow(r,z,H,b,J,j,null)}}const $=z.children;for(let J=0,tt=$.length;J<tt;J++)L($[J],H,b,C,ct)}function B(z){z.target.removeEventListener("dispose",B);for(const b in p){const C=p[b],ct=z.target.uuid;ct in C&&(C[ct].dispose(),delete C[ct])}}}function qA(r,t){function i(){let W=!1;const wt=new bn;let Et=null;const Ft=new bn(0,0,0,0);return{setMask:function(Mt){Et!==Mt&&!W&&(r.colorMask(Mt,Mt,Mt,Mt),Et=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,ht,Vt,Jt,Pe){Pe===!0&&(Mt*=Jt,ht*=Jt,Vt*=Jt),wt.set(Mt,ht,Vt,Jt),Ft.equals(wt)===!1&&(r.clearColor(Mt,ht,Vt,Jt),Ft.copy(wt))},reset:function(){W=!1,Et=null,Ft.set(-1,0,0,0)}}}function s(){let W=!1,wt=!1,Et=null,Ft=null,Mt=null;return{setReversed:function(ht){if(wt!==ht){const Vt=t.get("EXT_clip_control");ht?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),wt=ht;const Jt=Mt;Mt=null,this.setClear(Jt)}},getReversed:function(){return wt},setTest:function(ht){ht?pt(r.DEPTH_TEST):yt(r.DEPTH_TEST)},setMask:function(ht){Et!==ht&&!W&&(r.depthMask(ht),Et=ht)},setFunc:function(ht){if(wt&&(ht=TM[ht]),Ft!==ht){switch(ht){case nf:r.depthFunc(r.NEVER);break;case af:r.depthFunc(r.ALWAYS);break;case sf:r.depthFunc(r.LESS);break;case Ir:r.depthFunc(r.LEQUAL);break;case rf:r.depthFunc(r.EQUAL);break;case of:r.depthFunc(r.GEQUAL);break;case lf:r.depthFunc(r.GREATER);break;case cf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=ht}},setLocked:function(ht){W=ht},setClear:function(ht){Mt!==ht&&(Mt=ht,wt&&(ht=1-ht),r.clearDepth(ht))},reset:function(){W=!1,Et=null,Ft=null,Mt=null,wt=!1}}}function l(){let W=!1,wt=null,Et=null,Ft=null,Mt=null,ht=null,Vt=null,Jt=null,Pe=null;return{setTest:function(ze){W||(ze?pt(r.STENCIL_TEST):yt(r.STENCIL_TEST))},setMask:function(ze){wt!==ze&&!W&&(r.stencilMask(ze),wt=ze)},setFunc:function(ze,jn,Zn){(Et!==ze||Ft!==jn||Mt!==Zn)&&(r.stencilFunc(ze,jn,Zn),Et=ze,Ft=jn,Mt=Zn)},setOp:function(ze,jn,Zn){(ht!==ze||Vt!==jn||Jt!==Zn)&&(r.stencilOp(ze,jn,Zn),ht=ze,Vt=jn,Jt=Zn)},setLocked:function(ze){W=ze},setClear:function(ze){Pe!==ze&&(r.clearStencil(ze),Pe=ze)},reset:function(){W=!1,wt=null,Et=null,Ft=null,Mt=null,ht=null,Vt=null,Jt=null,Pe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},g=new WeakMap,y=[],E=null,N=!1,M=null,S=null,w=null,P=null,L=null,B=null,z=null,H=new le(0,0,0),b=0,C=!1,ct=null,F=null,$=null,J=null,tt=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,U=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=U>=1):q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=U>=2);let et=null,St={};const O=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),dt=new bn().fromArray(O),At=new bn().fromArray(Y);function Dt(W,wt,Et,Ft){const Mt=new Uint8Array(4),ht=r.createTexture();r.bindTexture(W,ht),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Et;Vt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(wt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return ht}const it={};it[r.TEXTURE_2D]=Dt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),pt(r.DEPTH_TEST),h.setFunc(Ir),he(!1),nn(Zp),pt(r.CULL_FACE),oe(ka);function pt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function yt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Lt(W,wt){return x[W]!==wt?(r.bindFramebuffer(W,wt),x[W]=wt,W===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=wt),W===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function Xt(W,wt){let Et=y,Ft=!1;if(W){Et=g.get(wt),Et===void 0&&(Et=[],g.set(wt,Et));const Mt=W.textures;if(Et.length!==Mt.length||Et[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Vt=Mt.length;ht<Vt;ht++)Et[ht]=r.COLOR_ATTACHMENT0+ht;Et.length=Mt.length,Ft=!0}}else Et[0]!==r.BACK&&(Et[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(Et)}function ne(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const ln={[Js]:r.FUNC_ADD,[xx]:r.FUNC_SUBTRACT,[Sx]:r.FUNC_REVERSE_SUBTRACT};ln[yx]=r.MIN,ln[Mx]=r.MAX;const ve={[Ex]:r.ZERO,[Tx]:r.ONE,[bx]:r.SRC_COLOR,[tf]:r.SRC_ALPHA,[Ux]:r.SRC_ALPHA_SATURATE,[wx]:r.DST_COLOR,[Rx]:r.DST_ALPHA,[Ax]:r.ONE_MINUS_SRC_COLOR,[ef]:r.ONE_MINUS_SRC_ALPHA,[Dx]:r.ONE_MINUS_DST_COLOR,[Cx]:r.ONE_MINUS_DST_ALPHA,[Nx]:r.CONSTANT_COLOR,[Lx]:r.ONE_MINUS_CONSTANT_COLOR,[Ox]:r.CONSTANT_ALPHA,[Ix]:r.ONE_MINUS_CONSTANT_ALPHA};function oe(W,wt,Et,Ft,Mt,ht,Vt,Jt,Pe,ze){if(W===ka){N===!0&&(yt(r.BLEND),N=!1);return}if(N===!1&&(pt(r.BLEND),N=!0),W!==vx){if(W!==M||ze!==C){if((S!==Js||L!==Js)&&(r.blendEquation(r.FUNC_ADD),S=Js,L=Js),ze)switch(W){case Or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kp:r.blendFunc(r.ONE,r.ONE);break;case Qp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",W);break}else switch(W){case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Qp:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jp:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",W);break}w=null,P=null,B=null,z=null,H.set(0,0,0),b=0,M=W,C=ze}return}Mt=Mt||wt,ht=ht||Et,Vt=Vt||Ft,(wt!==S||Mt!==L)&&(r.blendEquationSeparate(ln[wt],ln[Mt]),S=wt,L=Mt),(Et!==w||Ft!==P||ht!==B||Vt!==z)&&(r.blendFuncSeparate(ve[Et],ve[Ft],ve[ht],ve[Vt]),w=Et,P=Ft,B=ht,z=Vt),(Jt.equals(H)===!1||Pe!==b)&&(r.blendColor(Jt.r,Jt.g,Jt.b,Pe),H.copy(Jt),b=Pe),M=W,C=!1}function ke(W,wt){W.side===Vn?yt(r.CULL_FACE):pt(r.CULL_FACE);let Et=W.side===gi;wt&&(Et=!Et),he(Et),W.blending===Or&&W.transparent===!1?oe(ka):oe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ft=W.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),$e(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pt(r.SAMPLE_ALPHA_TO_COVERAGE):yt(r.SAMPLE_ALPHA_TO_COVERAGE)}function he(W){ct!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),ct=W)}function nn(W){W!==mx?(pt(r.CULL_FACE),W!==F&&(W===Zp?r.cullFace(r.BACK):W===gx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):yt(r.CULL_FACE),F=W}function V(W){W!==$&&(D&&r.lineWidth(W),$=W)}function $e(W,wt,Et){W?(pt(r.POLYGON_OFFSET_FILL),(J!==wt||tt!==Et)&&(J=wt,tt=Et,h.getReversed()&&(wt=-wt),r.polygonOffset(wt,Et))):yt(r.POLYGON_OFFSET_FILL)}function Ae(W){W?pt(r.SCISSOR_TEST):yt(r.SCISSOR_TEST)}function Xe(W){W===void 0&&(W=r.TEXTURE0+j-1),et!==W&&(r.activeTexture(W),et=W)}function Qt(W,wt,Et){Et===void 0&&(et===null?Et=r.TEXTURE0+j-1:Et=et);let Ft=St[Et];Ft===void 0&&(Ft={type:void 0,texture:void 0},St[Et]=Ft),(Ft.type!==W||Ft.texture!==wt)&&(et!==Et&&(r.activeTexture(Et),et=Et),r.bindTexture(W,wt||it[W]),Ft.type=W,Ft.texture=wt)}function I(){const W=St[et];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function mt(){try{r.texSubImage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function xt(){try{r.texSubImage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function jt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function Ct(){try{r.texStorage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function ie(){try{r.texStorage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function re(){try{r.texImage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function bt(){try{r.texImage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function Tt(W){dt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),dt.copy(W))}function zt(W){At.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Pt(W,wt){let Et=p.get(wt);Et===void 0&&(Et=new WeakMap,p.set(wt,Et));let Ft=Et.get(W);Ft===void 0&&(Ft=r.getUniformBlockIndex(wt,W.name),Et.set(W,Ft))}function Ht(W,wt){const Ft=p.get(wt).get(W);m.get(wt)!==Ft&&(r.uniformBlockBinding(wt,Ft,W.__bindingPointIndex),m.set(wt,Ft))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},et=null,St={},x={},g=new WeakMap,y=[],E=null,N=!1,M=null,S=null,w=null,P=null,L=null,B=null,z=null,H=new le(0,0,0),b=0,C=!1,ct=null,F=null,$=null,J=null,tt=null,dt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:pt,disable:yt,bindFramebuffer:Lt,drawBuffers:Xt,useProgram:ne,setBlending:oe,setMaterial:ke,setFlipSided:he,setCullFace:nn,setLineWidth:V,setPolygonOffset:$e,setScissorTest:Ae,activeTexture:Xe,bindTexture:Qt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:Z,texImage2D:re,texImage3D:bt,updateUBOMapping:Pt,uniformBlockBinding:Ht,texStorage2D:Ct,texStorage3D:ie,texSubImage2D:mt,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:jt,scissor:Tt,viewport:zt,reset:ge}}function jA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new be,_=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,T){return y?new OffscreenCanvas(I,T):kf("canvas")}function N(I,T,Z){let mt=1;const xt=Qt(I);if((xt.width>Z||xt.height>Z)&&(mt=Z/Math.max(xt.width,xt.height)),mt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ft=Math.floor(mt*xt.width),jt=Math.floor(mt*xt.height);x===void 0&&(x=E(ft,jt));const Ct=T?E(ft,jt):x;return Ct.width=ft,Ct.height=jt,Ct.getContext("2d").drawImage(I,0,0,ft,jt),pe("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ft+"x"+jt+")."),Ct}else return"data"in I&&pe("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),I;return I}function M(I){return I.generateMipmaps}function S(I){r.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(I,T,Z,mt,xt=!1){if(I!==null){if(r[I]!==void 0)return r[I];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ft=T;if(T===r.RED&&(Z===r.FLOAT&&(ft=r.R32F),Z===r.HALF_FLOAT&&(ft=r.R16F),Z===r.UNSIGNED_BYTE&&(ft=r.R8)),T===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ft=r.R8UI),Z===r.UNSIGNED_SHORT&&(ft=r.R16UI),Z===r.UNSIGNED_INT&&(ft=r.R32UI),Z===r.BYTE&&(ft=r.R8I),Z===r.SHORT&&(ft=r.R16I),Z===r.INT&&(ft=r.R32I)),T===r.RG&&(Z===r.FLOAT&&(ft=r.RG32F),Z===r.HALF_FLOAT&&(ft=r.RG16F),Z===r.UNSIGNED_BYTE&&(ft=r.RG8)),T===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ft=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ft=r.RG16UI),Z===r.UNSIGNED_INT&&(ft=r.RG32UI),Z===r.BYTE&&(ft=r.RG8I),Z===r.SHORT&&(ft=r.RG16I),Z===r.INT&&(ft=r.RG32I)),T===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),Z===r.UNSIGNED_INT&&(ft=r.RGB32UI),Z===r.BYTE&&(ft=r.RGB8I),Z===r.SHORT&&(ft=r.RGB16I),Z===r.INT&&(ft=r.RGB32I)),T===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ft=r.RGBA32UI),Z===r.BYTE&&(ft=r.RGBA8I),Z===r.SHORT&&(ft=r.RGBA16I),Z===r.INT&&(ft=r.RGBA32I)),T===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),T===r.RGBA){const jt=xt?fc:Ve.getTransfer(mt);Z===r.FLOAT&&(ft=r.RGBA32F),Z===r.HALF_FLOAT&&(ft=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ft=jt===Je?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function L(I,T){let Z;return I?T===null||T===Da||T===qo?Z=r.DEPTH24_STENCIL8:T===ua?Z=r.DEPTH32F_STENCIL8:T===Yo&&(Z=r.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Da||T===qo?Z=r.DEPTH_COMPONENT24:T===ua?Z=r.DEPTH_COMPONENT32F:T===Yo&&(Z=r.DEPTH_COMPONENT16),Z}function B(I,T){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==ti&&I.minFilter!==ei?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function z(I){const T=I.target;T.removeEventListener("dispose",z),b(T),T.isVideoTexture&&_.delete(T)}function H(I){const T=I.target;T.removeEventListener("dispose",H),ct(T)}function b(I){const T=s.get(I);if(T.__webglInit===void 0)return;const Z=I.source,mt=g.get(Z);if(mt){const xt=mt[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(I),Object.keys(mt).length===0&&g.delete(Z)}s.remove(I)}function C(I){const T=s.get(I);r.deleteTexture(T.__webglTexture);const Z=I.source,mt=g.get(Z);delete mt[T.__cacheKey],h.memory.textures--}function ct(I){const T=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let xt=0;xt<T.__webglFramebuffer[mt].length;xt++)r.deleteFramebuffer(T.__webglFramebuffer[mt][xt]);else r.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[mt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=I.textures;for(let mt=0,xt=Z.length;mt<xt;mt++){const ft=s.get(Z[mt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove(Z[mt])}s.remove(I)}let F=0;function $(){F=0}function J(){const I=F;return I>=l.maxTextures&&pe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),F+=1,I}function tt(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function j(I,T){const Z=s.get(I);if(I.isVideoTexture&&Ae(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const mt=I.image;if(mt===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Z,I,T);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+T)}function D(I,T){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){it(Z,I,T);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+T)}function U(I,T){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){it(Z,I,T);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+T)}function q(I,T){const Z=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){pt(Z,I,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+T)}const et={[Wo]:r.REPEAT,[Va]:r.CLAMP_TO_EDGE,[uf]:r.MIRRORED_REPEAT},St={[ti]:r.NEAREST,[Bx]:r.NEAREST_MIPMAP_NEAREST,[nc]:r.NEAREST_MIPMAP_LINEAR,[ei]:r.LINEAR,[Ku]:r.LINEAR_MIPMAP_NEAREST,[vs]:r.LINEAR_MIPMAP_LINEAR},O={[Gx]:r.NEVER,[Yx]:r.ALWAYS,[Vx]:r.LESS,[nh]:r.LEQUAL,[kx]:r.EQUAL,[ih]:r.GEQUAL,[Xx]:r.GREATER,[Wx]:r.NOTEQUAL};function Y(I,T){if(T.type===ua&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ei||T.magFilter===Ku||T.magFilter===nc||T.magFilter===vs||T.minFilter===ei||T.minFilter===Ku||T.minFilter===nc||T.minFilter===vs)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,et[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,et[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,et[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,St[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ti||T.minFilter!==nc&&T.minFilter!==vs||T.type===ua&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function dt(I,T){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",z));const mt=T.source;let xt=g.get(mt);xt===void 0&&(xt={},g.set(mt,xt));const ft=tt(T);if(ft!==I.__cacheKey){xt[ft]===void 0&&(xt[ft]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),xt[ft].usedTimes++;const jt=xt[I.__cacheKey];jt!==void 0&&(xt[I.__cacheKey].usedTimes--,jt.usedTimes===0&&C(T)),I.__cacheKey=ft,I.__webglTexture=xt[ft].texture}return Z}function At(I,T,Z){return Math.floor(Math.floor(I/Z)/T)}function Dt(I,T,Z,mt){const ft=I.updateRanges;if(ft.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Z,mt,T.data);else{ft.sort((bt,Tt)=>bt.start-Tt.start);let jt=0;for(let bt=1;bt<ft.length;bt++){const Tt=ft[jt],zt=ft[bt],Pt=Tt.start+Tt.count,Ht=At(zt.start,T.width,4),ge=At(Tt.start,T.width,4);zt.start<=Pt+1&&Ht===ge&&At(zt.start+zt.count-1,T.width,4)===Ht?Tt.count=Math.max(Tt.count,zt.start+zt.count-Tt.start):(++jt,ft[jt]=zt)}ft.length=jt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),ie=r.getParameter(r.UNPACK_SKIP_PIXELS),re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let bt=0,Tt=ft.length;bt<Tt;bt++){const zt=ft[bt],Pt=Math.floor(zt.start/4),Ht=Math.ceil(zt.count/4),ge=Pt%T.width,W=Math.floor(Pt/T.width),wt=Ht,Et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ge,W,wt,Et,Z,mt,T.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,re)}}function it(I,T,Z){let mt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=r.TEXTURE_3D);const xt=dt(I,T),ft=T.source;i.bindTexture(mt,I.__webglTexture,r.TEXTURE0+Z);const jt=s.get(ft);if(ft.version!==jt.__version||xt===!0){i.activeTexture(r.TEXTURE0+Z);const Ct=Ve.getPrimaries(Ve.workingColorSpace),ie=T.colorSpace===gs?null:Ve.getPrimaries(T.colorSpace),re=T.colorSpace===gs||Ct===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let bt=N(T.image,!1,l.maxTextureSize);bt=Xe(T,bt);const Tt=c.convert(T.format,T.colorSpace),zt=c.convert(T.type);let Pt=P(T.internalFormat,Tt,zt,T.colorSpace,T.isVideoTexture);Y(mt,T);let Ht;const ge=T.mipmaps,W=T.isVideoTexture!==!0,wt=jt.__version===void 0||xt===!0,Et=ft.dataReady,Ft=B(T,bt);if(T.isDepthTexture)Pt=L(T.format===$s,T.type),wt&&(W?i.texStorage2D(r.TEXTURE_2D,1,Pt,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,Pt,bt.width,bt.height,0,Tt,zt,null));else if(T.isDataTexture)if(ge.length>0){W&&wt&&i.texStorage2D(r.TEXTURE_2D,Ft,Pt,ge[0].width,ge[0].height);for(let Mt=0,ht=ge.length;Mt<ht;Mt++)Ht=ge[Mt],W?Et&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ht.width,Ht.height,Tt,zt,Ht.data):i.texImage2D(r.TEXTURE_2D,Mt,Pt,Ht.width,Ht.height,0,Tt,zt,Ht.data);T.generateMipmaps=!1}else W?(wt&&i.texStorage2D(r.TEXTURE_2D,Ft,Pt,bt.width,bt.height),Et&&Dt(T,bt,Tt,zt)):i.texImage2D(r.TEXTURE_2D,0,Pt,bt.width,bt.height,0,Tt,zt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Pt,ge[0].width,ge[0].height,bt.depth);for(let Mt=0,ht=ge.length;Mt<ht;Mt++)if(Ht=ge[Mt],T.format!==fa)if(Tt!==null)if(W){if(Et)if(T.layerUpdates.size>0){const Vt=Gv(Ht.width,Ht.height,T.format,T.type);for(const Jt of T.layerUpdates){const Pe=Ht.data.subarray(Jt*Vt/Ht.data.BYTES_PER_ELEMENT,(Jt+1)*Vt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,Jt,Ht.width,Ht.height,1,Tt,Pe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ht.width,Ht.height,bt.depth,Tt,Ht.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Pt,Ht.width,Ht.height,bt.depth,0,Ht.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Et&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ht.width,Ht.height,bt.depth,Tt,zt,Ht.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Pt,Ht.width,Ht.height,bt.depth,0,Tt,zt,Ht.data)}else{W&&wt&&i.texStorage2D(r.TEXTURE_2D,Ft,Pt,ge[0].width,ge[0].height);for(let Mt=0,ht=ge.length;Mt<ht;Mt++)Ht=ge[Mt],T.format!==fa?Tt!==null?W?Et&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ht.width,Ht.height,Tt,Ht.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Pt,Ht.width,Ht.height,0,Ht.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Et&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ht.width,Ht.height,Tt,zt,Ht.data):i.texImage2D(r.TEXTURE_2D,Mt,Pt,Ht.width,Ht.height,0,Tt,zt,Ht.data)}else if(T.isDataArrayTexture)if(W){if(wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Pt,bt.width,bt.height,bt.depth),Et)if(T.layerUpdates.size>0){const Mt=Gv(bt.width,bt.height,T.format,T.type);for(const ht of T.layerUpdates){const Vt=bt.data.subarray(ht*Mt/bt.data.BYTES_PER_ELEMENT,(ht+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,bt.width,bt.height,1,Tt,zt,Vt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Tt,zt,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,bt.width,bt.height,bt.depth,0,Tt,zt,bt.data);else if(T.isData3DTexture)W?(wt&&i.texStorage3D(r.TEXTURE_3D,Ft,Pt,bt.width,bt.height,bt.depth),Et&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Tt,zt,bt.data)):i.texImage3D(r.TEXTURE_3D,0,Pt,bt.width,bt.height,bt.depth,0,Tt,zt,bt.data);else if(T.isFramebufferTexture){if(wt)if(W)i.texStorage2D(r.TEXTURE_2D,Ft,Pt,bt.width,bt.height);else{let Mt=bt.width,ht=bt.height;for(let Vt=0;Vt<Ft;Vt++)i.texImage2D(r.TEXTURE_2D,Vt,Pt,Mt,ht,0,Tt,zt,null),Mt>>=1,ht>>=1}}else if(ge.length>0){if(W&&wt){const Mt=Qt(ge[0]);i.texStorage2D(r.TEXTURE_2D,Ft,Pt,Mt.width,Mt.height)}for(let Mt=0,ht=ge.length;Mt<ht;Mt++)Ht=ge[Mt],W?Et&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Tt,zt,Ht):i.texImage2D(r.TEXTURE_2D,Mt,Pt,Tt,zt,Ht);T.generateMipmaps=!1}else if(W){if(wt){const Mt=Qt(bt);i.texStorage2D(r.TEXTURE_2D,Ft,Pt,Mt.width,Mt.height)}Et&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,zt,bt)}else i.texImage2D(r.TEXTURE_2D,0,Pt,Tt,zt,bt);M(T)&&S(mt),jt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function pt(I,T,Z){if(T.image.length!==6)return;const mt=dt(I,T),xt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Z);const ft=s.get(xt);if(xt.version!==ft.__version||mt===!0){i.activeTexture(r.TEXTURE0+Z);const jt=Ve.getPrimaries(Ve.workingColorSpace),Ct=T.colorSpace===gs?null:Ve.getPrimaries(T.colorSpace),ie=T.colorSpace===gs||jt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const re=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let ht=0;ht<6;ht++)!re&&!bt?Tt[ht]=N(T.image[ht],!0,l.maxCubemapSize):Tt[ht]=bt?T.image[ht].image:T.image[ht],Tt[ht]=Xe(T,Tt[ht]);const zt=Tt[0],Pt=c.convert(T.format,T.colorSpace),Ht=c.convert(T.type),ge=P(T.internalFormat,Pt,Ht,T.colorSpace),W=T.isVideoTexture!==!0,wt=ft.__version===void 0||mt===!0,Et=xt.dataReady;let Ft=B(T,zt);Y(r.TEXTURE_CUBE_MAP,T);let Mt;if(re){W&&wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ge,zt.width,zt.height);for(let ht=0;ht<6;ht++){Mt=Tt[ht].mipmaps;for(let Vt=0;Vt<Mt.length;Vt++){const Jt=Mt[Vt];T.format!==fa?Pt!==null?W?Et&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt,0,0,Jt.width,Jt.height,Pt,Jt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt,ge,Jt.width,Jt.height,0,Jt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt,0,0,Jt.width,Jt.height,Pt,Ht,Jt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt,ge,Jt.width,Jt.height,0,Pt,Ht,Jt.data)}}}else{if(Mt=T.mipmaps,W&&wt){Mt.length>0&&Ft++;const ht=Qt(Tt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ge,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(bt){W?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Tt[ht].width,Tt[ht].height,Pt,Ht,Tt[ht].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ge,Tt[ht].width,Tt[ht].height,0,Pt,Ht,Tt[ht].data);for(let Vt=0;Vt<Mt.length;Vt++){const Pe=Mt[Vt].image[ht].image;W?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt+1,0,0,Pe.width,Pe.height,Pt,Ht,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt+1,ge,Pe.width,Pe.height,0,Pt,Ht,Pe.data)}}else{W?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Pt,Ht,Tt[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ge,Pt,Ht,Tt[ht]);for(let Vt=0;Vt<Mt.length;Vt++){const Jt=Mt[Vt];W?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt+1,0,0,Pt,Ht,Jt.image[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt+1,ge,Pt,Ht,Jt.image[ht])}}}M(T)&&S(r.TEXTURE_CUBE_MAP),ft.__version=xt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function yt(I,T,Z,mt,xt,ft){const jt=c.convert(Z.format,Z.colorSpace),Ct=c.convert(Z.type),ie=P(Z.internalFormat,jt,Ct,Z.colorSpace),re=s.get(T),bt=s.get(Z);if(bt.__renderTarget=T,!re.__hasExternalTextures){const Tt=Math.max(1,T.width>>ft),zt=Math.max(1,T.height>>ft);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?i.texImage3D(xt,ft,ie,Tt,zt,T.depth,0,jt,Ct,null):i.texImage2D(xt,ft,ie,Tt,zt,0,jt,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),$e(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,xt,bt.__webglTexture,0,V(T)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,xt,bt.__webglTexture,ft),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(I,T,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){const mt=T.depthTexture,xt=mt&&mt.isDepthTexture?mt.type:null,ft=L(T.stencilBuffer,xt),jt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$e(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(T),ft,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(T),ft,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ft,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,jt,r.RENDERBUFFER,I)}else{const mt=T.textures;for(let xt=0;xt<mt.length;xt++){const ft=mt[xt],jt=c.convert(ft.format,ft.colorSpace),Ct=c.convert(ft.type),ie=P(ft.internalFormat,jt,Ct,ft.colorSpace);$e(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(T),ie,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(T),ie,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ie,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(I,T,Z){const mt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(T.depthTexture);if(xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),xt.__webglTexture===void 0){xt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(r.TEXTURE_CUBE_MAP,T.depthTexture);const re=c.convert(T.depthTexture.format),bt=c.convert(T.depthTexture.type);let Tt;T.depthTexture.format===Wa?Tt=r.DEPTH_COMPONENT24:T.depthTexture.format===$s&&(Tt=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Tt,T.width,T.height,0,re,bt,null)}}else j(T.depthTexture,0);const ft=xt.__webglTexture,jt=V(T),Ct=mt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,ie=T.depthTexture.format===$s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Wa)$e(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,Ct,ft,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,ie,Ct,ft,0);else if(T.depthTexture.format===$s)$e(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,Ct,ft,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,ie,Ct,ft,0);else throw new Error("Unknown depthTexture format")}function ne(I){const T=s.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const mt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",xt)};mt.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=mt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let mt=0;mt<6;mt++)Xt(T.__webglFramebuffer[mt],I,mt);else{const mt=I.texture.mipmaps;mt&&mt.length>0?Xt(T.__webglFramebuffer[0],I,0):Xt(T.__webglFramebuffer,I,0)}else if(Z){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=r.createRenderbuffer(),Lt(T.__webglDepthbuffer[mt],I,!1);else{const xt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ft)}}else{const mt=I.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Lt(T.__webglDepthbuffer,I,!1);else{const xt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ft)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ln(I,T,Z){const mt=s.get(I);T!==void 0&&yt(mt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&ne(I)}function ve(I){const T=I.texture,Z=s.get(I),mt=s.get(T);I.addEventListener("dispose",H);const xt=I.textures,ft=I.isWebGLCubeRenderTarget===!0,jt=xt.length>1;if(jt||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=T.version,h.memory.textures++),ft){Z.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ct]=[];for(let ie=0;ie<T.mipmaps.length;ie++)Z.__webglFramebuffer[Ct][ie]=r.createFramebuffer()}else Z.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)Z.__webglFramebuffer[Ct]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(jt)for(let Ct=0,ie=xt.length;Ct<ie;Ct++){const re=s.get(xt[Ct]);re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture(),h.memory.textures++)}if(I.samples>0&&$e(I)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const ie=xt[Ct];Z.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ct]);const re=c.convert(ie.format,ie.colorSpace),bt=c.convert(ie.type),Tt=P(ie.internalFormat,re,bt,ie.colorSpace,I.isXRRenderTarget===!0),zt=V(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Tt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(Z.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),Y(r.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)yt(Z.__webglFramebuffer[Ct][ie],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ie);else yt(Z.__webglFramebuffer[Ct],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(T)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ct=0,ie=xt.length;Ct<ie;Ct++){const re=xt[Ct],bt=s.get(re);let Tt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,bt.__webglTexture),Y(Tt,re),yt(Z.__webglFramebuffer,I,re,r.COLOR_ATTACHMENT0+Ct,Tt,0),M(re)&&S(Tt)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ct=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,mt.__webglTexture),Y(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)yt(Z.__webglFramebuffer[ie],I,T,r.COLOR_ATTACHMENT0,Ct,ie);else yt(Z.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,Ct,0);M(T)&&S(Ct),i.unbindTexture()}I.depthBuffer&&ne(I)}function oe(I){const T=I.textures;for(let Z=0,mt=T.length;Z<mt;Z++){const xt=T[Z];if(M(xt)){const ft=w(I),jt=s.get(xt).__webglTexture;i.bindTexture(ft,jt),S(ft),i.unbindTexture()}}}const ke=[],he=[];function nn(I){if(I.samples>0){if($e(I)===!1){const T=I.textures,Z=I.width,mt=I.height;let xt=r.COLOR_BUFFER_BIT;const ft=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=s.get(I),Ct=T.length>1;if(Ct)for(let re=0;re<T.length;re++)i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const ie=I.texture.mipmaps;ie&&ie.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let re=0;re<T.length;re++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[re]);const bt=s.get(T[re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,Z,mt,0,0,Z,mt,xt,r.NEAREST),m===!0&&(ke.length=0,he.length=0,ke.push(r.COLOR_ATTACHMENT0+re),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ke.push(ft),he.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,he)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let re=0;re<T.length;re++){i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,jt.__webglColorRenderbuffer[re]);const bt=s.get(T[re]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function V(I){return Math.min(l.maxSamples,I.samples)}function $e(I){const T=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ae(I){const T=h.render.frame;_.get(I)!==T&&(_.set(I,T),I.update())}function Xe(I,T){const Z=I.colorSpace,mt=I.format,xt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Br&&Z!==gs&&(Ve.getTransfer(Z)===Je?(mt!==fa||xt!==Pi)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",Z)),T}function Qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=$,this.setTexture2D=j,this.setTexture2DArray=D,this.setTexture3D=U,this.setTextureCube=q,this.rebindTextures=ln,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function SS(r,t){function i(s,l=gs){let c;const h=Ve.getTransfer(l);if(s===Pi)return r.UNSIGNED_BYTE;if(s===Zf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===xm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Sm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===_m)return r.BYTE;if(s===vm)return r.SHORT;if(s===Yo)return r.UNSIGNED_SHORT;if(s===jf)return r.INT;if(s===Da)return r.UNSIGNED_INT;if(s===ua)return r.FLOAT;if(s===Xa)return r.HALF_FLOAT;if(s===ym)return r.ALPHA;if(s===Mm)return r.RGB;if(s===fa)return r.RGBA;if(s===Wa)return r.DEPTH_COMPONENT;if(s===$s)return r.DEPTH_STENCIL;if(s===Qf)return r.RED;if(s===Jf)return r.RED_INTEGER;if(s===Fr)return r.RG;if(s===$f)return r.RG_INTEGER;if(s===th)return r.RGBA_INTEGER;if(s===ac||s===sc||s===rc||s===oc)if(h===Je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ac)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===sc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ac)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===sc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===oc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ff||s===hf||s===df||s===pf)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ff)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===df)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mf||s===gf||s===_f||s===vf||s===xf||s===Sf||s===yf)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===mf||s===gf)return h===Je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===_f)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===vf)return c.COMPRESSED_R11_EAC;if(s===xf)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Sf)return c.COMPRESSED_RG11_EAC;if(s===yf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Mf||s===Ef||s===Tf||s===bf||s===Af||s===Rf||s===Cf||s===wf||s===Df||s===Uf||s===Nf||s===Lf||s===Of||s===If)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Mf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ef)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Af)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Df)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Of)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===If)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pf||s===Ff||s===Bf)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Pf)return h===Je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ff)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zf||s===Hf||s===Gf||s===Vf)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===zf)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Hf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Um(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ua({vertexShader:ZA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new He(new Ga(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JA extends zr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,g=null,y=null,E=null;const N=typeof XRWebGLBinding<"u",M=new QA,S={},w=i.getContextAttributes();let P=null,L=null;const B=[],z=[],H=new be;let b=null;const C=new Ti;C.viewport=new bn;const ct=new Ti;ct.viewport=new bn;const F=[C,ct],$=new hS;let J=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let pt=B[it];return pt===void 0&&(pt=new Qu,B[it]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(it){let pt=B[it];return pt===void 0&&(pt=new Qu,B[it]=pt),pt.getGripSpace()},this.getHand=function(it){let pt=B[it];return pt===void 0&&(pt=new Qu,B[it]=pt),pt.getHandSpace()};function j(it){const pt=z.indexOf(it.inputSource);if(pt===-1)return;const yt=B[pt];yt!==void 0&&(yt.update(it.inputSource,it.frame,p||h),yt.dispatchEvent({type:it.type,data:it.inputSource}))}function D(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",D),l.removeEventListener("inputsourceschange",U);for(let it=0;it<B.length;it++){const pt=z[it];pt!==null&&(z[it]=null,B[it].disconnect(pt))}J=null,tt=null,M.reset();for(const it in S)delete S[it];t.setRenderTarget(P),y=null,g=null,x=null,l=null,L=null,Dt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&N&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",D),l.addEventListener("inputsourceschange",U),w.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(H),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Lt=null,Xt=null;w.depth&&(Xt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=w.stencil?$s:Wa,Lt=w.stencil?qo:Da);const ne={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(ne),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new wa(g.textureWidth,g.textureHeight,{format:fa,type:Pi,depthTexture:new Ko(g.textureWidth,g.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const yt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new wa(y.framebufferWidth,y.framebufferHeight,{format:fa,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Dt.setContext(l),Dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function U(it){for(let pt=0;pt<it.removed.length;pt++){const yt=it.removed[pt],Lt=z.indexOf(yt);Lt>=0&&(z[Lt]=null,B[Lt].disconnect(yt))}for(let pt=0;pt<it.added.length;pt++){const yt=it.added[pt];let Lt=z.indexOf(yt);if(Lt===-1){for(let ne=0;ne<B.length;ne++)if(ne>=z.length){z.push(yt),Lt=ne;break}else if(z[ne]===null){z[ne]=yt,Lt=ne;break}if(Lt===-1)break}const Xt=B[Lt];Xt&&Xt.connect(yt)}}const q=new Q,et=new Q;function St(it,pt,yt){q.setFromMatrixPosition(pt.matrixWorld),et.setFromMatrixPosition(yt.matrixWorld);const Lt=q.distanceTo(et),Xt=pt.projectionMatrix.elements,ne=yt.projectionMatrix.elements,ln=Xt[14]/(Xt[10]-1),ve=Xt[14]/(Xt[10]+1),oe=(Xt[9]+1)/Xt[5],ke=(Xt[9]-1)/Xt[5],he=(Xt[8]-1)/Xt[0],nn=(ne[8]+1)/ne[0],V=ln*he,$e=ln*nn,Ae=Lt/(-he+nn),Xe=Ae*-he;if(pt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Xe),it.translateZ(Ae),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Xt[10]===-1)it.projectionMatrix.copy(pt.projectionMatrix),it.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Qt=ln+Ae,I=ve+Ae,T=V-Xe,Z=$e+(Lt-Xe),mt=oe*ve/I*Qt,xt=ke*ve/I*Qt;it.projectionMatrix.makePerspective(T,Z,mt,xt,Qt,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function O(it,pt){pt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(pt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let pt=it.near,yt=it.far;M.texture!==null&&(M.depthNear>0&&(pt=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),$.near=ct.near=C.near=pt,$.far=ct.far=C.far=yt,(J!==$.near||tt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),J=$.near,tt=$.far),$.layers.mask=it.layers.mask|6,C.layers.mask=$.layers.mask&-5,ct.layers.mask=$.layers.mask&-3;const Lt=it.parent,Xt=$.cameras;O($,Lt);for(let ne=0;ne<Xt.length;ne++)O(Xt[ne],Lt);Xt.length===2?St($,C,ct):$.projectionMatrix.copy(C.projectionMatrix),Y(it,$,Lt)};function Y(it,pt,yt){yt===null?it.matrix.copy(pt.matrixWorld):(it.matrix.copy(yt.matrixWorld),it.matrix.invert(),it.matrix.multiply(pt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(pt.projectionMatrix),it.projectionMatrixInverse.copy(pt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Zo*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(it){m=it,g!==null&&(g.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(it){return S[it]};let dt=null;function At(it,pt){if(_=pt.getViewerPose(p||h),E=pt,_!==null){const yt=_.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Lt=!1;yt.length!==$.cameras.length&&($.cameras.length=0,Lt=!0);for(let ve=0;ve<yt.length;ve++){const oe=yt[ve];let ke=null;if(y!==null)ke=y.getViewport(oe);else{const nn=x.getViewSubImage(g,oe);ke=nn.viewport,ve===0&&(t.setRenderTargetTextures(L,nn.colorTexture,nn.depthStencilTexture),t.setRenderTarget(L))}let he=F[ve];he===void 0&&(he=new Ti,he.layers.enable(ve),he.viewport=new bn,F[ve]=he),he.matrix.fromArray(oe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(oe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ke.x,ke.y,ke.width,ke.height),ve===0&&($.matrix.copy(he.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Lt===!0&&$.cameras.push(he)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){x=s.getBinding();const ve=x.getDepthInformation(yt[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,l.renderState)}if(Xt&&Xt.includes("camera-access")&&N){t.state.unbindTexture(),x=s.getBinding();for(let ve=0;ve<yt.length;ve++){const oe=yt[ve].camera;if(oe){let ke=S[oe];ke||(ke=new Um,S[oe]=ke);const he=x.getCameraImage(oe);ke.sourceTexture=he}}}}for(let yt=0;yt<B.length;yt++){const Lt=z[yt],Xt=B[yt];Lt!==null&&Xt!==void 0&&Xt.update(Lt,pt,p||h)}dt&&dt(it,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),E=null}const Dt=new mS;Dt.setAnimationLoop(At),this.setAnimationLoop=function(it){dt=it},this.dispose=function(){}}}const wr=new da,$A=new on;function t2(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,iS(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,w,P,L){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,L)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),N(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,w,P):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===gi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===gi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=t.get(S),P=w.envMap,L=w.envMapRotation;P&&(M.envMap.value=P,wr.copy(L),wr.x*=-1,wr.y*=-1,wr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),M.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(wr)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,w,P){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=P*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===gi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function N(M,S){const w=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function e2(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const L=P.program;s.uniformBlockBinding(w,L)}function p(w,P){let L=l[w.id];L===void 0&&(E(w),L=_(w),l[w.id]=L,w.addEventListener("dispose",M));const B=P.program;s.updateUBOMapping(w,B);const z=t.render.frame;c[w.id]!==z&&(g(w),c[w.id]=z)}function _(w){const P=x();w.__bindingPointIndex=P;const L=r.createBuffer(),B=w.__size,z=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,L),L}function x(){for(let w=0;w<d;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const P=l[w.id],L=w.uniforms,B=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let z=0,H=L.length;z<H;z++){const b=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,ct=b.length;C<ct;C++){const F=b[C];if(y(F,z,C,B)===!0){const $=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let tt=0;for(let j=0;j<J.length;j++){const D=J[j],U=N(D);typeof D=="number"||typeof D=="boolean"?(F.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,$+tt,F.__data)):D.isMatrix3?(F.__data[0]=D.elements[0],F.__data[1]=D.elements[1],F.__data[2]=D.elements[2],F.__data[3]=0,F.__data[4]=D.elements[3],F.__data[5]=D.elements[4],F.__data[6]=D.elements[5],F.__data[7]=0,F.__data[8]=D.elements[6],F.__data[9]=D.elements[7],F.__data[10]=D.elements[8],F.__data[11]=0):(D.toArray(F.__data,tt),tt+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(w,P,L,B){const z=w.value,H=P+"_"+L;if(B[H]===void 0)return typeof z=="number"||typeof z=="boolean"?B[H]=z:B[H]=z.clone(),!0;{const b=B[H];if(typeof z=="number"||typeof z=="boolean"){if(b!==z)return B[H]=z,!0}else if(b.equals(z)===!1)return b.copy(z),!0}return!1}function E(w){const P=w.uniforms;let L=0;const B=16;for(let H=0,b=P.length;H<b;H++){const C=Array.isArray(P[H])?P[H]:[P[H]];for(let ct=0,F=C.length;ct<F;ct++){const $=C[ct],J=Array.isArray($.value)?$.value:[$.value];for(let tt=0,j=J.length;tt<j;tt++){const D=J[tt],U=N(D),q=L%B,et=q%U.boundary,St=q+et;L+=et,St!==0&&B-St<U.storage&&(L+=B-St),$.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=L,L+=U.storage}}}const z=L%B;return z>0&&(L+=B-z),w.__size=L,w.__cache={},this}function N(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",w),P}function M(w){const P=w.target;P.removeEventListener("dispose",M);const L=h.indexOf(P.__bindingPointIndex);h.splice(L,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function S(){for(const w in l)r.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const n2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ha=null;function i2(){return Ha===null&&(Ha=new wm(n2,16,16,Fr,Xa),Ha.name="DFG_LUT",Ha.minFilter=ei,Ha.magFilter=ei,Ha.wrapS=Va,Ha.wrapT=Va,Ha.generateMipmaps=!1,Ha.needsUpdate=!0),Ha}class yS{constructor(t={}){const{canvas:i=qx(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Pi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const N=y,M=new Set([th,$f,Jf]),S=new Set([Pi,Da,Yo,qo,Zf,Kf]),w=new Uint32Array(4),P=new Int32Array(4);let L=null,B=null;const z=[],H=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let ct=!1;this._outputColorSpace=Wn;let F=0,$=0,J=null,tt=-1,j=null;const D=new bn,U=new bn;let q=null;const et=new le(0);let St=0,O=i.width,Y=i.height,dt=1,At=null,Dt=null;const it=new bn(0,0,O,Y),pt=new bn(0,0,O,Y);let yt=!1;const Lt=new rh;let Xt=!1,ne=!1;const ln=new on,ve=new Q,oe=new bn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function nn(){return J===null?dt:1}let V=s;function $e(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wf}`),i.addEventListener("webglcontextlost",Vt,!1),i.addEventListener("webglcontextrestored",Jt,!1),i.addEventListener("webglcontextcreationerror",Pe,!1),V===null){const X="webgl2";if(V=$e(X,A),V===null)throw $e(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ge("WebGLRenderer: "+A.message),A}let Ae,Xe,Qt,I,T,Z,mt,xt,ft,jt,Ct,ie,re,bt,Tt,zt,Pt,Ht,ge,W,wt,Et,Ft;function Mt(){Ae=new s1(V),Ae.init(),wt=new SS(V,Ae),Xe=new Qb(V,Ae,t,wt),Qt=new qA(V,Ae),Xe.reversedDepthBuffer&&g&&Qt.buffers.depth.setReversed(!0),I=new l1(V),T=new LA,Z=new jA(V,Ae,Qt,T,Xe,wt,I),mt=new a1(C),xt=new dE(V),Et=new Zb(V,xt),ft=new r1(V,xt,I,Et),jt=new u1(V,ft,xt,Et,I),Ht=new c1(V,Xe,Z),Tt=new Jb(T),Ct=new NA(C,mt,Ae,Xe,Et,Tt),ie=new t2(C,T),re=new IA,bt=new GA(Ae),Pt=new jb(C,mt,Qt,jt,E,m),zt=new YA(C,jt,Xe),Ft=new e2(V,I,Xe,Qt),ge=new Kb(V,Ae,I),W=new o1(V,Ae,I),I.programs=Ct.programs,C.capabilities=Xe,C.extensions=Ae,C.properties=T,C.renderLists=re,C.shadowMap=zt,C.state=Qt,C.info=I}Mt(),N!==Pi&&(b=new h1(N,i.width,i.height,l,c));const ht=new JA(C,V);this.xr=ht,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(A){A!==void 0&&(dt=A,this.setSize(O,Y,!1))},this.getSize=function(A){return A.set(O,Y)},this.setSize=function(A,X,at=!0){if(ht.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Y=X,i.width=Math.floor(A*dt),i.height=Math.floor(X*dt),at===!0&&(i.style.width=A+"px",i.style.height=X+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(O*dt,Y*dt).floor()},this.setDrawingBufferSize=function(A,X,at){O=A,Y=X,dt=at,i.width=Math.floor(A*at),i.height=Math.floor(X*at),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(N===Pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(it)},this.setViewport=function(A,X,at,rt){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,X,at,rt),Qt.viewport(D.copy(it).multiplyScalar(dt).round())},this.getScissor=function(A){return A.copy(pt)},this.setScissor=function(A,X,at,rt){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,X,at,rt),Qt.scissor(U.copy(pt).multiplyScalar(dt).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Qt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){Dt=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,at=!0){let rt=0;if(A){let nt=!1;if(J!==null){const Nt=J.texture.format;nt=M.has(Nt)}if(nt){const Nt=J.texture.type,Gt=S.has(Nt),Ot=Pt.getClearColor(),qt=Pt.getClearAlpha(),$t=Ot.r,se=Ot.g,me=Ot.b;Gt?(w[0]=$t,w[1]=se,w[2]=me,w[3]=qt,V.clearBufferuiv(V.COLOR,0,w)):(P[0]=$t,P[1]=se,P[2]=me,P[3]=qt,V.clearBufferiv(V.COLOR,0,P))}else rt|=V.COLOR_BUFFER_BIT}X&&(rt|=V.DEPTH_BUFFER_BIT),at&&(rt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&V.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Vt,!1),i.removeEventListener("webglcontextrestored",Jt,!1),i.removeEventListener("webglcontextcreationerror",Pe,!1),Pt.dispose(),re.dispose(),bt.dispose(),T.dispose(),mt.dispose(),jt.dispose(),Et.dispose(),Ft.dispose(),Ct.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Ya),ht.removeEventListener("sessionend",Bi),Ki.stop()};function Vt(A){A.preventDefault(),nm("WebGLRenderer: Context Lost."),ct=!0}function Jt(){nm("WebGLRenderer: Context Restored."),ct=!1;const A=I.autoReset,X=zt.enabled,at=zt.autoUpdate,rt=zt.needsUpdate,nt=zt.type;Mt(),I.autoReset=A,zt.enabled=X,zt.autoUpdate=at,zt.needsUpdate=rt,zt.type=nt}function Pe(A){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){const X=A.target;X.removeEventListener("dispose",ze),jn(X)}function jn(A){Zn(A),T.remove(A)}function Zn(A){const X=T.get(A).programs;X!==void 0&&(X.forEach(function(at){Ct.releaseProgram(at)}),A.isShaderMaterial&&Ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,at,rt,nt,Nt){X===null&&(X=ke);const Gt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ot=ar(A,X,at,rt,nt);Qt.setMaterial(rt,Gt);let qt=at.index,$t=1;if(rt.wireframe===!0){if(qt=ft.getWireframeAttribute(at),qt===void 0)return;$t=2}const se=at.drawRange,me=at.attributes.position;let Wt=se.start*$t,de=(se.start+se.count)*$t;Nt!==null&&(Wt=Math.max(Wt,Nt.start*$t),de=Math.min(de,(Nt.start+Nt.count)*$t)),qt!==null?(Wt=Math.max(Wt,0),de=Math.min(de,qt.count)):me!=null&&(Wt=Math.max(Wt,0),de=Math.min(de,me.count));const un=de-Wt;if(un<0||un===1/0)return;Et.setup(nt,rt,Ot,at,qt);let fn,Ne=ge;if(qt!==null&&(fn=xt.get(qt),Ne=W,Ne.setIndex(fn)),nt.isMesh)rt.wireframe===!0?(Qt.setLineWidth(rt.wireframeLinewidth*nn()),Ne.setMode(V.LINES)):Ne.setMode(V.TRIANGLES);else if(nt.isLine){let yn=rt.linewidth;yn===void 0&&(yn=1),Qt.setLineWidth(yn*nn()),nt.isLineSegments?Ne.setMode(V.LINES):nt.isLineLoop?Ne.setMode(V.LINE_LOOP):Ne.setMode(V.LINE_STRIP)}else nt.isPoints?Ne.setMode(V.POINTS):nt.isSprite&&Ne.setMode(V.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)hc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Ne.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const yn=nt._multiDrawStarts,kt=nt._multiDrawCounts,Kn=nt._multiDrawCount,ue=qt?xt.get(qt).bytesPerElement:1,Un=T.get(rt).currentProgram.getUniforms();for(let ii=0;ii<Kn;ii++)Un.setValue(V,"_gl_DrawID",ii),Ne.render(yn[ii]/ue,kt[ii])}else if(nt.isInstancedMesh)Ne.renderInstances(Wt,un,nt.count);else if(at.isInstancedBufferGeometry){const yn=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,kt=Math.min(at.instanceCount,yn);Ne.renderInstances(Wt,un,kt)}else Ne.render(Wt,un)};function Na(A,X,at){A.transparent===!0&&A.side===Vn&&A.forceSinglePass===!1?(A.side=gi,A.needsUpdate=!0,La(A,X,at),A.side=Ss,A.needsUpdate=!0,La(A,X,at),A.side=Vn):La(A,X,at)}this.compile=function(A,X,at=null){at===null&&(at=A),B=bt.get(at),B.init(X),H.push(B),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(X.layers)&&(B.pushLight(nt),nt.castShadow&&B.pushShadow(nt))}),A!==at&&A.traverseVisible(function(nt){nt.isLight&&nt.layers.test(X.layers)&&(B.pushLight(nt),nt.castShadow&&B.pushShadow(nt))}),B.setupLights();const rt=new Set;return A.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Nt=nt.material;if(Nt)if(Array.isArray(Nt))for(let Gt=0;Gt<Nt.length;Gt++){const Ot=Nt[Gt];Na(Ot,at,nt),rt.add(Ot)}else Na(Nt,at,nt),rt.add(Nt)}),B=H.pop(),rt},this.compileAsync=function(A,X,at=null){const rt=this.compile(A,X,at);return new Promise(nt=>{function Nt(){if(rt.forEach(function(Gt){T.get(Gt).currentProgram.isReady()&&rt.delete(Gt)}),rt.size===0){nt(A);return}setTimeout(Nt,10)}Ae.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Fi=null;function ys(A){Fi&&Fi(A)}function Ya(){Ki.stop()}function Bi(){Ki.start()}const Ki=new mS;Ki.setAnimationLoop(ys),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(A){Fi=A,ht.setAnimationLoop(A),A===null?Ki.stop():Ki.start()},ht.addEventListener("sessionstart",Ya),ht.addEventListener("sessionend",Bi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ct===!0)return;const at=ht.enabled===!0&&ht.isPresenting===!0,rt=b!==null&&(J===null||at)&&b.begin(C,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(X),X=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,J),B=bt.get(A,H.length),B.init(X),H.push(B),ln.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Lt.setFromProjectionMatrix(ln,Ra,X.reversedDepth),ne=this.localClippingEnabled,Xt=Tt.init(this.clippingPlanes,ne),L=re.get(A,z.length),L.init(),z.push(L),ht.enabled===!0&&ht.isPresenting===!0){const Gt=C.xr.getDepthSensingMesh();Gt!==null&&pa(Gt,X,-1/0,C.sortObjects)}pa(A,X,0,C.sortObjects),L.finish(),C.sortObjects===!0&&L.sort(At,Dt),he=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,he&&Pt.addToRenderList(L,A),this.info.render.frame++,Xt===!0&&Tt.beginShadows();const nt=B.state.shadowsArray;if(zt.render(nt,A,X),Xt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&b.hasRenderPass())===!1){const Gt=L.opaque,Ot=L.transmissive;if(B.setupLights(),X.isArrayCamera){const qt=X.cameras;if(Ot.length>0)for(let $t=0,se=qt.length;$t<se;$t++){const me=qt[$t];An(Gt,Ot,A,me)}he&&Pt.render(A);for(let $t=0,se=qt.length;$t<se;$t++){const me=qt[$t];bi(L,A,me,me.viewport)}}else Ot.length>0&&An(Gt,Ot,A,X),he&&Pt.render(A),bi(L,A,X)}J!==null&&$===0&&(Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J)),rt&&b.end(C),A.isScene===!0&&A.onAfterRender(C,A,X),Et.resetDefaultState(),tt=-1,j=null,H.pop(),H.length>0?(B=H[H.length-1],Xt===!0&&Tt.setGlobalState(C.clippingPlanes,B.state.camera)):B=null,z.pop(),z.length>0?L=z[z.length-1]:L=null};function pa(A,X,at,rt){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)B.pushLight(A),A.castShadow&&B.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Lt.intersectsSprite(A)){rt&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ln);const Gt=jt.update(A),Ot=A.material;Ot.visible&&L.push(A,Gt,Ot,at,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Lt.intersectsObject(A))){const Gt=jt.update(A),Ot=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),oe.copy(Gt.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(ln)),Array.isArray(Ot)){const qt=Gt.groups;for(let $t=0,se=qt.length;$t<se;$t++){const me=qt[$t],Wt=Ot[me.materialIndex];Wt&&Wt.visible&&L.push(A,Gt,Wt,at,oe.z,me)}}else Ot.visible&&L.push(A,Gt,Ot,at,oe.z,null)}}const Nt=A.children;for(let Gt=0,Ot=Nt.length;Gt<Ot;Gt++)pa(Nt[Gt],X,at,rt)}function bi(A,X,at,rt){const{opaque:nt,transmissive:Nt,transparent:Gt}=A;B.setupLightsView(at),Xt===!0&&Tt.setGlobalState(C.clippingPlanes,at),rt&&Qt.viewport(D.copy(rt)),nt.length>0&&Dn(nt,X,at),Nt.length>0&&Dn(Nt,X,at),Gt.length>0&&Dn(Gt,X,at),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function An(A,X,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[rt.id]===void 0){const Wt=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[rt.id]=new wa(1,1,{generateMipmaps:!0,type:Wt?Xa:Pi,minFilter:vs,samples:Math.max(4,Xe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const Nt=B.state.transmissionRenderTarget[rt.id],Gt=rt.viewport||D;Nt.setSize(Gt.z*C.transmissionResolutionScale,Gt.w*C.transmissionResolutionScale);const Ot=C.getRenderTarget(),qt=C.getActiveCubeFace(),$t=C.getActiveMipmapLevel();C.setRenderTarget(Nt),C.getClearColor(et),St=C.getClearAlpha(),St<1&&C.setClearColor(16777215,.5),C.clear(),he&&Pt.render(at);const se=C.toneMapping;C.toneMapping=Ca;const me=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),B.setupLightsView(rt),Xt===!0&&Tt.setGlobalState(C.clippingPlanes,rt),Dn(A,at,rt),Z.updateMultisampleRenderTarget(Nt),Z.updateRenderTargetMipmap(Nt),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let de=0,un=X.length;de<un;de++){const fn=X[de],{object:Ne,geometry:yn,material:kt,group:Kn}=fn;if(kt.side===Vn&&Ne.layers.test(rt.layers)){const ue=kt.side;kt.side=gi,kt.needsUpdate=!0,ma(Ne,at,rt,yn,kt,Kn),kt.side=ue,kt.needsUpdate=!0,Wt=!0}}Wt===!0&&(Z.updateMultisampleRenderTarget(Nt),Z.updateRenderTargetMipmap(Nt))}C.setRenderTarget(Ot,qt,$t),C.setClearColor(et,St),me!==void 0&&(rt.viewport=me),C.toneMapping=se}function Dn(A,X,at){const rt=X.isScene===!0?X.overrideMaterial:null;for(let nt=0,Nt=A.length;nt<Nt;nt++){const Gt=A[nt],{object:Ot,geometry:qt,group:$t}=Gt;let se=Gt.material;se.allowOverride===!0&&rt!==null&&(se=rt),Ot.layers.test(at.layers)&&ma(Ot,X,at,qt,se,$t)}}function ma(A,X,at,rt,nt,Nt){A.onBeforeRender(C,X,at,rt,nt,Nt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),nt.onBeforeRender(C,X,at,rt,A,Nt),nt.transparent===!0&&nt.side===Vn&&nt.forceSinglePass===!1?(nt.side=gi,nt.needsUpdate=!0,C.renderBufferDirect(at,X,rt,nt,A,Nt),nt.side=Ss,nt.needsUpdate=!0,C.renderBufferDirect(at,X,rt,nt,A,Nt),nt.side=Vn):C.renderBufferDirect(at,X,rt,nt,A,Nt),A.onAfterRender(C,X,at,rt,nt,Nt)}function La(A,X,at){X.isScene!==!0&&(X=ke);const rt=T.get(A),nt=B.state.lights,Nt=B.state.shadowsArray,Gt=nt.state.version,Ot=Ct.getParameters(A,nt.state,Nt,X,at),qt=Ct.getProgramCacheKey(Ot);let $t=rt.programs;rt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,rt.fog=X.fog;const se=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;rt.envMap=mt.get(A.envMap||rt.environment,se),rt.envMapRotation=rt.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",ze),$t=new Map,rt.programs=$t);let me=$t.get(qt);if(me!==void 0){if(rt.currentProgram===me&&rt.lightsStateVersion===Gt)return kr(A,Ot),me}else Ot.uniforms=Ct.getUniforms(A),A.onBeforeCompile(Ot,C),me=Ct.acquireProgram(Ot,qt),$t.set(qt,me),rt.uniforms=Ot.uniforms;const Wt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Tt.uniform),kr(A,Ot),rt.needsLights=Ms(A),rt.lightsStateVersion=Gt,rt.needsLights&&(Wt.ambientLightColor.value=nt.state.ambient,Wt.lightProbe.value=nt.state.probe,Wt.directionalLights.value=nt.state.directional,Wt.directionalLightShadows.value=nt.state.directionalShadow,Wt.spotLights.value=nt.state.spot,Wt.spotLightShadows.value=nt.state.spotShadow,Wt.rectAreaLights.value=nt.state.rectArea,Wt.ltc_1.value=nt.state.rectAreaLTC1,Wt.ltc_2.value=nt.state.rectAreaLTC2,Wt.pointLights.value=nt.state.point,Wt.pointLightShadows.value=nt.state.pointShadow,Wt.hemisphereLights.value=nt.state.hemi,Wt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Wt.spotLightMatrix.value=nt.state.spotLightMatrix,Wt.spotLightMap.value=nt.state.spotLightMap,Wt.pointShadowMatrix.value=nt.state.pointShadowMatrix),rt.currentProgram=me,rt.uniformsList=null,me}function Vr(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=$u.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function kr(A,X){const at=T.get(A);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function ar(A,X,at,rt,nt){X.isScene!==!0&&(X=ke),Z.resetTextureUnits();const Nt=X.fog,Gt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?X.environment:null,Ot=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Br,qt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,$t=mt.get(rt.envMap||Gt,qt),se=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,me=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,de=!!at.morphAttributes.normal,un=!!at.morphAttributes.color;let fn=Ca;rt.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(fn=C.toneMapping);const Ne=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,yn=Ne!==void 0?Ne.length:0,kt=T.get(rt),Kn=B.state.lights;if(Xt===!0&&(ne===!0||A!==j)){const Mn=A===j&&rt.id===tt;Tt.setState(rt,A,Mn)}let ue=!1;rt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Kn.state.version||kt.outputColorSpace!==Ot||nt.isBatchedMesh&&kt.batching===!1||!nt.isBatchedMesh&&kt.batching===!0||nt.isBatchedMesh&&kt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&kt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&kt.instancing===!1||!nt.isInstancedMesh&&kt.instancing===!0||nt.isSkinnedMesh&&kt.skinning===!1||!nt.isSkinnedMesh&&kt.skinning===!0||nt.isInstancedMesh&&kt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&kt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&kt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&kt.instancingMorph===!1&&nt.morphTexture!==null||kt.envMap!==$t||rt.fog===!0&&kt.fog!==Nt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Tt.numPlanes||kt.numIntersection!==Tt.numIntersection)||kt.vertexAlphas!==se||kt.vertexTangents!==me||kt.morphTargets!==Wt||kt.morphNormals!==de||kt.morphColors!==un||kt.toneMapping!==fn||kt.morphTargetsCount!==yn)&&(ue=!0):(ue=!0,kt.__version=rt.version);let Un=kt.currentProgram;ue===!0&&(Un=La(rt,X,nt));let ii=!1,Ri=!1,ai=!1;const We=Un.getUniforms(),hn=kt.uniforms;if(Qt.useProgram(Un.program)&&(ii=!0,Ri=!0,ai=!0),rt.id!==tt&&(tt=rt.id,Ri=!0),ii||j!==A){Qt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),We.setValue(V,"projectionMatrix",A.projectionMatrix),We.setValue(V,"viewMatrix",A.matrixWorldInverse);const Ci=We.map.cameraPosition;Ci!==void 0&&Ci.setValue(V,ve.setFromMatrixPosition(A.matrixWorld)),Xe.logarithmicDepthBuffer&&We.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&We.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,Ri=!0,ai=!0)}if(kt.needsLights&&(Kn.state.directionalShadowMap.length>0&&We.setValue(V,"directionalShadowMap",Kn.state.directionalShadowMap,Z),Kn.state.spotShadowMap.length>0&&We.setValue(V,"spotShadowMap",Kn.state.spotShadowMap,Z),Kn.state.pointShadowMap.length>0&&We.setValue(V,"pointShadowMap",Kn.state.pointShadowMap,Z)),nt.isSkinnedMesh){We.setOptional(V,nt,"bindMatrix"),We.setOptional(V,nt,"bindMatrixInverse");const Mn=nt.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),We.setValue(V,"boneTexture",Mn.boneTexture,Z))}nt.isBatchedMesh&&(We.setOptional(V,nt,"batchingTexture"),We.setValue(V,"batchingTexture",nt._matricesTexture,Z),We.setOptional(V,nt,"batchingIdTexture"),We.setValue(V,"batchingIdTexture",nt._indirectTexture,Z),We.setOptional(V,nt,"batchingColorTexture"),nt._colorsTexture!==null&&We.setValue(V,"batchingColorTexture",nt._colorsTexture,Z));const Rn=at.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Ht.update(nt,at,Un),(Ri||kt.receiveShadow!==nt.receiveShadow)&&(kt.receiveShadow=nt.receiveShadow,We.setValue(V,"receiveShadow",nt.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&X.environment!==null&&(hn.envMapIntensity.value=X.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=i2()),Ri&&(We.setValue(V,"toneMappingExposure",C.toneMappingExposure),kt.needsLights&&Ai(hn,ai),Nt&&rt.fog===!0&&ie.refreshFogUniforms(hn,Nt),ie.refreshMaterialUniforms(hn,rt,dt,Y,B.state.transmissionRenderTarget[A.id]),$u.upload(V,Vr(kt),hn,Z)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&($u.upload(V,Vr(kt),hn,Z),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&We.setValue(V,"center",nt.center),We.setValue(V,"modelViewMatrix",nt.modelViewMatrix),We.setValue(V,"normalMatrix",nt.normalMatrix),We.setValue(V,"modelMatrix",nt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Mn=rt.uniformsGroups;for(let Ci=0,Qi=Mn.length;Ci<Qi;Ci++){const qa=Mn[Ci];Ft.update(qa,Un),Ft.bind(qa,Un)}}return Un}function Ai(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Ms(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,X,at){const rt=T.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),T.get(A.texture).__webglTexture=X,T.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const at=T.get(A);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0};const ga=V.createFramebuffer();this.setRenderTarget=function(A,X=0,at=0){J=A,F=X,$=at;let rt=null,nt=!1,Nt=!1;if(A){const Ot=T.get(A);if(Ot.__useDefaultFramebuffer!==void 0){Qt.bindFramebuffer(V.FRAMEBUFFER,Ot.__webglFramebuffer),D.copy(A.viewport),U.copy(A.scissor),q=A.scissorTest,Qt.viewport(D),Qt.scissor(U),Qt.setScissorTest(q),tt=-1;return}else if(Ot.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(Ot.__hasExternalTextures)Z.rebindTextures(A,T.get(A.texture).__webglTexture,T.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const se=A.depthTexture;if(Ot.__boundDepthTexture!==se){if(se!==null&&T.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Nt=!0);const $t=T.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[X])?rt=$t[X][at]:rt=$t[X],nt=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?rt=T.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?rt=$t[at]:rt=$t,D.copy(A.viewport),U.copy(A.scissor),q=A.scissorTest}else D.copy(it).multiplyScalar(dt).floor(),U.copy(pt).multiplyScalar(dt).floor(),q=yt;if(at!==0&&(rt=ga),Qt.bindFramebuffer(V.FRAMEBUFFER,rt)&&Qt.drawBuffers(A,rt),Qt.viewport(D),Qt.scissor(U),Qt.setScissorTest(q),nt){const Ot=T.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,at)}else if(Nt){const Ot=X;for(let qt=0;qt<A.textures.length;qt++){const $t=T.get(A.textures[qt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qt,$t.__webglTexture,at,Ot)}}else if(A!==null&&at!==0){const Ot=T.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ot.__webglTexture,at)}tt=-1},this.readRenderTargetPixels=function(A,X,at,rt,nt,Nt,Gt,Ot=0){if(!(A&&A.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt){Qt.bindFramebuffer(V.FRAMEBUFFER,qt);try{const $t=A.textures[Ot],se=$t.format,me=$t.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ot),!Xe.textureFormatReadable(se)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(me)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-rt&&at>=0&&at<=A.height-nt&&V.readPixels(X,at,rt,nt,wt.convert(se),wt.convert(me),Nt)}finally{const $t=J!==null?T.get(J).__webglFramebuffer:null;Qt.bindFramebuffer(V.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,X,at,rt,nt,Nt,Gt,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt)if(X>=0&&X<=A.width-rt&&at>=0&&at<=A.height-nt){Qt.bindFramebuffer(V.FRAMEBUFFER,qt);const $t=A.textures[Ot],se=$t.format,me=$t.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ot),!Xe.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Wt),V.bufferData(V.PIXEL_PACK_BUFFER,Nt.byteLength,V.STREAM_READ),V.readPixels(X,at,rt,nt,wt.convert(se),wt.convert(me),0);const de=J!==null?T.get(J).__webglFramebuffer:null;Qt.bindFramebuffer(V.FRAMEBUFFER,de);const un=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await EM(V,un,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Wt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Nt),V.deleteBuffer(Wt),V.deleteSync(un),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,at=0){const rt=Math.pow(2,-at),nt=Math.floor(A.image.width*rt),Nt=Math.floor(A.image.height*rt),Gt=X!==null?X.x:0,Ot=X!==null?X.y:0;Z.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,at,0,0,Gt,Ot,nt,Nt),Qt.unbindTexture()};const cn=V.createFramebuffer(),kn=V.createFramebuffer();this.copyTextureToTexture=function(A,X,at=null,rt=null,nt=0,Nt=0){let Gt,Ot,qt,$t,se,me,Wt,de,un;const fn=A.isCompressedTexture?A.mipmaps[Nt]:A.image;if(at!==null)Gt=at.max.x-at.min.x,Ot=at.max.y-at.min.y,qt=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,se=at.min.y,me=at.isBox3?at.min.z:0;else{const hn=Math.pow(2,-nt);Gt=Math.floor(fn.width*hn),Ot=Math.floor(fn.height*hn),A.isDataArrayTexture?qt=fn.depth:A.isData3DTexture?qt=Math.floor(fn.depth*hn):qt=1,$t=0,se=0,me=0}rt!==null?(Wt=rt.x,de=rt.y,un=rt.z):(Wt=0,de=0,un=0);const Ne=wt.convert(X.format),yn=wt.convert(X.type);let kt;X.isData3DTexture?(Z.setTexture3D(X,0),kt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Z.setTexture2DArray(X,0),kt=V.TEXTURE_2D_ARRAY):(Z.setTexture2D(X,0),kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Kn=V.getParameter(V.UNPACK_ROW_LENGTH),ue=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=V.getParameter(V.UNPACK_SKIP_PIXELS),ii=V.getParameter(V.UNPACK_SKIP_ROWS),Ri=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,fn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,fn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,$t),V.pixelStorei(V.UNPACK_SKIP_ROWS,se),V.pixelStorei(V.UNPACK_SKIP_IMAGES,me);const ai=A.isDataArrayTexture||A.isData3DTexture,We=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const hn=T.get(A),Rn=T.get(X),Mn=T.get(hn.__renderTarget),Ci=T.get(Rn.__renderTarget);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Qi=0;Qi<qt;Qi++)ai&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(A).__webglTexture,nt,me+Qi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(X).__webglTexture,Nt,un+Qi)),V.blitFramebuffer($t,se,Gt,Ot,Wt,de,Gt,Ot,V.DEPTH_BUFFER_BIT,V.NEAREST);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(nt!==0||A.isRenderTargetTexture||T.has(A)){const hn=T.get(A),Rn=T.get(X);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,cn),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,kn);for(let Mn=0;Mn<qt;Mn++)ai?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,nt,me+Mn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,nt),We?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rn.__webglTexture,Nt,un+Mn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rn.__webglTexture,Nt),nt!==0?V.blitFramebuffer($t,se,Gt,Ot,Wt,de,Gt,Ot,V.COLOR_BUFFER_BIT,V.NEAREST):We?V.copyTexSubImage3D(kt,Nt,Wt,de,un+Mn,$t,se,Gt,Ot):V.copyTexSubImage2D(kt,Nt,Wt,de,$t,se,Gt,Ot);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else We?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(kt,Nt,Wt,de,un,Gt,Ot,qt,Ne,yn,fn.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(kt,Nt,Wt,de,un,Gt,Ot,qt,Ne,fn.data):V.texSubImage3D(kt,Nt,Wt,de,un,Gt,Ot,qt,Ne,yn,fn):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Nt,Wt,de,Gt,Ot,Ne,yn,fn.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Nt,Wt,de,fn.width,fn.height,Ne,fn.data):V.texSubImage2D(V.TEXTURE_2D,Nt,Wt,de,Gt,Ot,Ne,yn,fn);V.pixelStorei(V.UNPACK_ROW_LENGTH,Kn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ue),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),V.pixelStorei(V.UNPACK_SKIP_ROWS,ii),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ri),Nt===0&&X.generateMipmaps&&V.generateMipmap(kt),Qt.unbindTexture()},this.initRenderTarget=function(A){T.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),Qt.unbindTexture()},this.resetState=function(){F=0,$=0,J=null,Qt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ve._getUnpackColorSpace()}}const a2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:qf,AddEquation:Js,AddOperation:Fx,AdditiveBlending:Kp,AgXToneMapping:pm,AlphaFormat:ym,AlwaysCompare:Yx,AlwaysDepth:af,AlwaysStencilFunc:$p,AmbientLight:uS,ArrayCamera:hS,BackSide:gi,BasicDepthPacking:zx,Box3:nr,BoxGeometry:ir,BufferAttribute:ha,BufferGeometry:Zi,ByteType:_m,Camera:Om,CanvasTexture:Vo,CatmullRomCurve3:nS,CineonToneMapping:hm,ClampToEdgeWrapping:Va,Clock:pS,Color:le,ColorManagement:Ve,ConstantAlphaFactor:Ox,ConstantColorFactor:Nx,CubeCamera:fS,CubeDepthTexture:tS,CubeReflectionMapping:er,CubeRefractionMapping:Pr,CubeTexture:Dm,CubeUVReflectionMapping:mc,CullFaceBack:Zp,CullFaceFront:gx,CullFaceNone:mx,Curve:eS,CustomBlending:vx,CustomToneMapping:dm,Data3DTexture:Qx,DataArrayTexture:Tm,DataTexture:wm,DepthFormat:Wa,DepthStencilFormat:$s,DepthTexture:Ko,DirectionalLight:am,DoubleSide:Vn,DstAlphaFactor:Rx,DstColorFactor:wx,EqualCompare:kx,EqualDepth:rf,EquirectangularReflectionMapping:ju,EquirectangularRefractionMapping:Zu,Euler:da,EventDispatcher:zr,ExternalTexture:Um,Float32BufferAttribute:ni,FloatType:ua,Fog:dc,FrontSide:Ss,Frustum:rh,GLSL3:em,GreaterCompare:Xx,GreaterDepth:lf,GreaterEqualCompare:ih,GreaterEqualDepth:of,Group:Go,HalfFloatType:Xa,HemisphereLight:cS,ImageUtils:Zx,InstancedBufferAttribute:im,InstancedMesh:$x,IntType:jf,KeepStencilOp:Ur,Layers:sh,LessCompare:Vx,LessDepth:sf,LessEqualCompare:nh,LessEqualDepth:Ir,Light:tl,LinearFilter:ei,LinearMipmapLinearFilter:vs,LinearMipmapNearestFilter:Ku,LinearSRGBColorSpace:Br,LinearToneMapping:um,LinearTransfer:fc,Material:Gr,MathUtils:Mi,Matrix3:Se,Matrix4:on,MaxEquation:Mx,Mesh:He,MeshBasicMaterial:pc,MeshDepthMaterial:oS,MeshDistanceMaterial:lS,MeshLambertMaterial:rS,MeshPhysicalMaterial:Nr,MeshStandardMaterial:_s,MinEquation:yx,MirroredRepeatWrapping:uf,MixOperation:Px,MultiplyBlending:Jp,MultiplyOperation:Yf,NearestFilter:ti,NearestMipmapLinearFilter:nc,NearestMipmapNearestFilter:Bx,NeutralToneMapping:mm,NeverCompare:Gx,NeverDepth:nf,NoBlending:ka,NoColorSpace:gs,NoToneMapping:Ca,NormalBlending:Or,NotEqualCompare:Wx,NotEqualDepth:cf,Object3D:mn,ObjectSpaceNormalMap:Hx,OneFactor:Tx,OneMinusConstantAlphaFactor:Ix,OneMinusConstantColorFactor:Lx,OneMinusDstAlphaFactor:Cx,OneMinusDstColorFactor:Dx,OneMinusSrcAlphaFactor:ef,OneMinusSrcColorFactor:Ax,OrthographicCamera:ch,PCFShadowMap:ko,PCFSoftShadowMap:_x,PMREMGenerator:Xf,PerspectiveCamera:Ti,Plane:Qs,PlaneGeometry:Ga,PointLight:uc,Quaternion:Hr,R11_EAC_Format:vf,RED_GREEN_RGTC2_Format:Gf,RED_RGTC1_Format:zf,REVISION:Wf,RG11_EAC_Format:Sf,RGBAFormat:fa,RGBAIntegerFormat:th,RGBA_ASTC_10x10_Format:Lf,RGBA_ASTC_10x5_Format:Df,RGBA_ASTC_10x6_Format:Uf,RGBA_ASTC_10x8_Format:Nf,RGBA_ASTC_12x10_Format:Of,RGBA_ASTC_12x12_Format:If,RGBA_ASTC_4x4_Format:Mf,RGBA_ASTC_5x4_Format:Ef,RGBA_ASTC_5x5_Format:Tf,RGBA_ASTC_6x5_Format:bf,RGBA_ASTC_6x6_Format:Af,RGBA_ASTC_8x5_Format:Rf,RGBA_ASTC_8x6_Format:Cf,RGBA_ASTC_8x8_Format:wf,RGBA_BPTC_Format:Pf,RGBA_ETC2_EAC_Format:_f,RGBA_PVRTC_2BPPV1_Format:pf,RGBA_PVRTC_4BPPV1_Format:df,RGBA_S3TC_DXT1_Format:sc,RGBA_S3TC_DXT3_Format:rc,RGBA_S3TC_DXT5_Format:oc,RGBFormat:Mm,RGB_BPTC_SIGNED_Format:Ff,RGB_BPTC_UNSIGNED_Format:Bf,RGB_ETC1_Format:mf,RGB_ETC2_Format:gf,RGB_PVRTC_2BPPV1_Format:hf,RGB_PVRTC_4BPPV1_Format:ff,RGB_S3TC_DXT1_Format:ac,RGFormat:Fr,RGIntegerFormat:$f,RawShaderMaterial:sS,Ray:Cm,Raycaster:dS,RedFormat:Qf,RedIntegerFormat:Jf,ReinhardToneMapping:fm,RenderTarget:Kx,RepeatWrapping:Wo,ReverseSubtractEquation:Sx,RingGeometry:oh,SIGNED_R11_EAC_Format:xf,SIGNED_RED_GREEN_RGTC2_Format:Vf,SIGNED_RED_RGTC1_Format:Hf,SIGNED_RG11_EAC_Format:yf,SRGBColorSpace:Wn,SRGBTransfer:Je,Scene:bm,ShaderChunk:Me,ShaderLib:Aa,ShaderMaterial:Ua,ShortType:vm,Source:ah,Sphere:$o,SphereGeometry:lh,SpotLight:Ju,SrcAlphaFactor:tf,SrcAlphaSaturateFactor:Ux,SrcColorFactor:bx,StaticDrawUsage:tm,SubtractEquation:xx,SubtractiveBlending:Qp,TangentSpaceNormalMap:eh,Texture:fi,Triangle:ca,UVMapping:gm,Uint16BufferAttribute:Am,Uint32BufferAttribute:Rm,UniformsLib:Bt,UniformsUtils:aS,UnsignedByteType:Pi,UnsignedInt101111Type:Sm,UnsignedInt248Type:qo,UnsignedInt5999Type:xm,UnsignedIntType:Da,UnsignedShort4444Type:Zf,UnsignedShort5551Type:Kf,UnsignedShortType:Yo,VSMShadowMap:Ho,Vector2:be,Vector3:Q,Vector4:bn,WebGLCoordinateSystem:Ra,WebGLCubeRenderTarget:Im,WebGLRenderTarget:wa,WebGLRenderer:yS,WebGLUtils:SS,WebGPUCoordinateSystem:jo,WebXRController:Qu,ZeroFactor:Ex,createCanvasElement:qx,error:Ge,log:nm,warn:pe,warnOnce:hc},Symbol.toStringTag,{value:"Module"}));class s2 extends bm{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new ir;t.deleteAttribute("uv");const i=new _s({side:gi}),s=new _s,l=new uc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new He(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new $x(t,s,6),d=new mn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const m=new He(t,Fo(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new He(t,Fo(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new He(t,Fo(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new He(t,Fo(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new He(t,Fo(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new He(t,Fo(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Fo(r){return new rS({color:0,emissive:16777215,emissiveIntensity:r})}const r2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],o2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],l2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],c2=["LOW","MEDIUM","HIGH","EXTREME"],u2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],f2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],h2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},d2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},p2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},m2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},g2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function MS(r){return(r-90)*Math.PI/180}function _2(r,t,i,s){const l=MS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function Bo(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function ES(r){Bo("subject",r.subject,r2),Bo("domain",r.domain,o2),Bo("verb",r.verb,l2),Bo("magnitude",r.magnitude,c2),Bo("time",r.time,u2),Bo("certainty",r.certainty,f2)}function v2(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const h=g2[l][c];if(!h)throw new Error(`Unknown ${l} token: ${c}`);return h}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return ES(s),s}function x2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,h=(-90+l*36)*(Math.PI/180),d=i.x+Math.cos(h)*c,m=i.y+Math.sin(h)*c;l===0&&r.beginPath(),l===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),h=i.x+Math.cos(c)*6,d=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(h,d):r.lineTo(h,d)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function $l(r,t,i,s,l){const c=i.x-t.x,h=i.y-t.y,d=Math.sqrt(c*c+h*h)||1,m=c/d,p=h/d,_=-p,x=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+x*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-x*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function tc(r,t,i,s,l,c){const h=m2[t.certainty];if(!(h<=0)){r.save(),r.fillStyle=l;for(let d=1;d<=h;d+=1){const m=d/(h+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const x=1-m;p=x*x*i.x+2*x*m*c.x+m*m*s.x,_=x*x*i.y+2*x*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function S2(r,t,i){ES(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),h=s*.5,d=l*.5,m=i?.backgroundColor,p=i?.lineColor,_=i?.gridColor;r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(h,d,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(h,d,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(h,d,c*.12,0,Math.PI*2),r.stroke();const x=h2[t.domain],g=d2[t.time]*c,y=p2[t.magnitude]*c,E=_2(h,d,g,x),N=MS(x),M=Math.cos(N),S=Math.sin(N),w=-S,P=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let L={x:E.x,y:E.y},B={x:E.x+M*y,y:E.y+S*y},z;if(t.verb==="EXISTS")L={x:E.x-w*(y*.48),y:E.y-P*(y*.48)},B={x:E.x+w*(y*.48),y:E.y+P*(y*.48)},r.beginPath(),r.moveTo(L.x,L.y),r.lineTo(B.x,B.y),r.stroke(),tc(r,t,L,B,p);else if(t.verb==="DECLINES")B={x:E.x-M*y,y:E.y-S*y},r.beginPath(),r.moveTo(L.x,L.y),r.lineTo(B.x,B.y),r.stroke(),$l(r,L,B,p,7),tc(r,t,L,B,p);else if(t.verb==="TRANSFORMS")z={x:E.x+w*(y*.34)+M*(y*.34),y:E.y+P*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(L.x,L.y),r.quadraticCurveTo(z.x,z.y,B.x,B.y),r.stroke(),$l(r,z,B,p,7),tc(r,t,L,B,p,z);else if(t.verb==="INFLUENCES"){const b={x:E.x+w*3.4,y:E.y+P*3.4},C={x:B.x+w*3.4,y:B.y+P*3.4},ct={x:E.x-w*3.4,y:E.y-P*3.4},F={x:B.x-w*3.4,y:B.y-P*3.4};r.beginPath(),r.moveTo(b.x,b.y),r.lineTo(C.x,C.y),r.moveTo(ct.x,ct.y),r.lineTo(F.x,F.y),r.stroke(),$l(r,b,C,p,6.6),$l(r,ct,F,p,6.6),tc(r,t,b,C,p)}else r.beginPath(),r.moveTo(L.x,L.y),r.lineTo(B.x,B.y),r.stroke(),$l(r,L,B,p,7),tc(r,t,L,B,p);r.fillStyle=p,r.beginPath(),r.arc(h,d,5,0,Math.PI*2),r.fill(),x2(r,t.subject,E,p)}function y2(r,t,i){const s=v2(t);S2(r,s,i)}const ux="intelligenspartiet:language",M2={nb:{siteName:"INTELLIGENSPARTIET",languageLabel:"Språk",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Videoer",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter"},en:{siteName:"INTELLIGENSPARTIET",languageLabel:"Language",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Videos",outsideSignatures:"Signatures",outsideAiNews:"AI news"}},E2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},kp=(r,t,i,s,l)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:E2}),Xu=[kp("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1),kp("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42),kp("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74)],T2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim().toUpperCase(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),ba=r=>{let t=r%1;return t<0&&(t+=1),t},b2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),ba(r+l*(1-Math.exp(-i*s)))},fx=12,Xp=9,Wp=.12,hx=-1,Yp=2.4,A2=.3,R2=1.2,C2=.3,dx=6741503,w2=5,D2=3.2,U2=.35,N2=.25,Wu=400,L2=2.5,px=16755251,Yu=3,O2=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),I2=(r,t,i,s,l,c)=>{TS(r,t,l).forEach((d,m)=>{r.fillText(d,i,s+m*c)})},TS=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let h=0;h<s.length;h+=1){const d=s[h];if(!d)continue;const m=`${c}${d} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${d} `):c=m}return c.trim()&&l.push(c.trim()),l},P2=/\(\s*bold\s*\)/gi,F2=/\(\s*new\s*line\s*\)/gi,B2=/\(\s*new\s*paragraph\s*\)/gi,z2=r=>{const i=r.replace(/\r\n?/g,`
`).replace(B2,`

`).replace(F2,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const d=/\(\s*bold\s*\)/i.test(c),m=c.replace(P2,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:d,paragraphBreak:s}),s=!1}),l},H2=(r,t,i,s,l,c,h,d,m=.6)=>{const p=z2(t);let _=s;p.forEach((x,g)=>{g>0&&x.paragraphBreak&&(_+=c*m),r.font=x.bold?d:h,TS(r,x.text,l).forEach(E=>{r.fillText(E,i,_),_+=c})}),r.font=h},G2=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,bS=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),V2=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),k2=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],X2=new Map(k2.map(([r,t])=>[bS(r),t])),W2=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],Y2=W2.map(([r,t])=>[new RegExp(V2(r),"gi"),t]),q2={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},j2=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),Z2=r=>{let t=r;return Y2.forEach(([i,s])=>{t=t.replace(i,s)}),t},K2=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=q2[t.toLowerCase()];return i?j2(t,i):t}),Q2=r=>{const t=r.trim();return t?(X2.get(bS(t))??K2(Z2(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},J2=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(G2,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>Q2(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},qp=r=>String(r||"").replace(/\bai(?=\b|-)/gi,"KI"),lm=Math.PI*2,Dr=r=>Math.min(1,Math.max(0,r)),ec=(r,t,i,s,l)=>{const c=lm*(r*i+s),h=lm*(t*i+l),d=Math.sin(c)*Math.cos(h),m=.5*Math.sin((c+h)*.65+s*6.37);return d+m},qu=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Vo(s)},la=(r,t,i,s,l=!1)=>{r.wrapS=Wo,r.wrapT=Wo,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=vs,r.magFilter=ei,l&&(r.colorSpace=Wn),r.needsUpdate=!0},jp=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:h,microFreq:d,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:x,seamDepth:g,seamWidth:y,roughnessBase:E,roughnessRange:N,normalStrength:M,aoStrength:S}=r,w=t*i,P=new le(l),L=new Float32Array(w);let B=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY;for(let tt=0;tt<i;tt+=1)for(let j=0;j<t;j+=1){const D=tt*t+j,U=j/t,q=tt/i,et=ec(U,q,c,s*.11,s*.23),St=ec(U,q,h,s*.41+.18,s*.29+.07),O=ec(U,q,d,s*.71+.43,s*.53+.31),Y=Math.sin(lm*((U+q*.33)*m+s*.17));let dt=0;if(_!=="none"&&x>0){const it=(_==="x"?U:q)*x%1,pt=Math.min(it,1-it);dt=Math.exp(-Math.pow(pt/Math.max(1e-4,y),2))}const At=et*.6+St*.28+O*.12+Y*p-dt*g;L[D]=At,At<B&&(B=At),At>z&&(z=At)}const H=new Float32Array(w),b=Math.max(1e-4,z-B),C=new Uint8ClampedArray(w*4),ct=new Uint8ClampedArray(w*4),F=new Uint8ClampedArray(w*4);for(let tt=0;tt<i;tt+=1)for(let j=0;j<t;j+=1){const D=tt*t+j,U=D*4,q=j/t,et=tt/i,St=Dr((L[D]-B)/b);H[D]=St;const O=ec(q,et,h*.6,s*.19+.62,s*.73+.14)*.5+.5,Y=Dr(.78+(St-.5)*.24+(O-.5)*.12),dt=ec(q,et,c*.5,s*.37+.89,s*.13+.44),At=1+dt*.017,Dt=1+dt*.007,it=1-dt*.013,pt=Dr(E+(1-St)*N+(O-.5)*.14),yt=Dr(.94-(1-St)*S);C[U]=Math.round(Dr(P.r*Y*At)*255),C[U+1]=Math.round(Dr(P.g*Y*Dt)*255),C[U+2]=Math.round(Dr(P.b*Y*it)*255),C[U+3]=255;const Lt=Math.round(pt*255);ct[U]=Lt,ct[U+1]=Lt,ct[U+2]=Lt,ct[U+3]=255;const Xt=Math.round(yt*255);F[U]=Xt,F[U+1]=Xt,F[U+2]=Xt,F[U+3]=255}const $=(tt,j)=>{const D=(tt+t)%t,U=(j+i)%i;return H[U*t+D]},J=new Uint8ClampedArray(w*4);for(let tt=0;tt<i;tt+=1)for(let j=0;j<t;j+=1){const U=(tt*t+j)*4,q=$(j+1,tt)-$(j-1,tt),et=$(j,tt+1)-$(j,tt-1),St=-q*M,O=-et*M,Y=1,dt=1/Math.hypot(St,O,Y);J[U]=Math.round((St*dt*.5+.5)*255),J[U+1]=Math.round((O*dt*.5+.5)*255),J[U+2]=Math.round((Y*dt*.5+.5)*255),J[U+3]=255}return{albedo:qu(C,t,i),normal:qu(J,t,i),roughness:qu(ct,t,i),ao:qu(F,t,i)}},$2=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,h=0;const d=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],h+=s[p+2];l/=d*255,c/=d*255,h/=d*255;const m=l*.2126+c*.7152+h*.0722;return{color:new le(l,c,h),luminance:m}};function tR(){const r=Sn.useRef(null),t=Sn.useRef([]),i=Sn.useRef(Wp),s=Sn.useRef(Wp);Sn.useEffect(()=>{const C=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=C,document.documentElement.style.overscrollBehavior=""}},[]);const[l,c]=Sn.useState(Xu),[h,d]=Sn.useState([]),[m,p]=Sn.useState(Xu[0].id),[_,x]=Sn.useState(!0),[g,y]=Sn.useState(!1),[E,N]=Sn.useState(!1),[M,S]=Sn.useState(()=>{if(typeof window>"u")return"nb";try{const C=window.localStorage.getItem(ux);if(C==="nb"||C==="en")return C}catch{}return"nb"});Sn.useEffect(()=>{try{window.localStorage.setItem(ux,M)}catch{}},[M]);const w=M2[M];Sn.useMemo(()=>C=>M==="nb"?J2(C):C,[M]),Sn.useEffect(()=>{let C=!1;return(async()=>{try{const F=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),$=F.headers.get("content-type")??"";if(!F.ok)throw new Error(`HTTP ${F.status} while loading glyph language map`);if(!$.toLowerCase().includes("application/json")){const j=await F.text();throw new Error(`Expected JSON but got '${$||"unknown"}' (${j.slice(0,120)})`)}const J=await F.json();if(!Array.isArray(J?.items))throw new Error("Glyph language payload missing 'items' array");const tt=J.items.map((j,D)=>T2(j,D)).filter(j=>j.enabled!==!1);if(C)return;d(tt)}catch(F){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",F),C)return;d([])}})(),()=>{C=!0}},[]);const P=Sn.useMemo(()=>h.filter(C=>C.enabled!==!1&&typeof C.canonical=="string"&&C.canonical.trim().length>0),[h]),L=Sn.useMemo(()=>{const C=new Map;if(!l.length||!P.length)return C;const ct=J=>{const tt=ba(J);return ba(Wp-tt)},F=[...l].sort((J,tt)=>{const j=typeof J.installation?.placement_t=="number"?J.installation.placement_t:0,D=typeof tt.installation?.placement_t=="number"?tt.installation.placement_t:0,U=ct(j),q=ct(D);return U===q?J.id.localeCompare(tt.id):U-q}),$=Math.min(F.length,P.length);for(let J=0;J<$;J+=1)C.set(F[J].id,P[J]);return C},[l,P]),B=Sn.useMemo(()=>{const C=new Map;return L.forEach((ct,F)=>{ct.canonical&&C.set(F,ct.canonical)}),C},[L]),z=Sn.useMemo(()=>{const C=new Map;return L.forEach((ct,F)=>{C.set(F,{label:ct.label||"",note:ct.note||"",labelNb:ct.label_nb||"",noteNb:ct.note_nb||""})}),C},[L]);Sn.useEffect(()=>{let C=!1;return(async()=>{x(!0),y(!1);try{const F=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),$=F.headers.get("content-type")??"";if(!F.ok)throw new Error(`HTTP ${F.status} while loading panel data`);if(!$.toLowerCase().includes("application/json")){const q=await F.text();throw new Error(`Expected JSON but got '${$||"unknown"}' (${q.slice(0,120)})`)}const J=await F.json();if(!Array.isArray(J?.panels))throw new Error("Panel payload missing 'panels' array");const tt=typeof J.media_root=="string"?J.media_root.replace(/\/+$/,""):"",j=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",D=q=>/^https?:\/\//i.test(q)&&j?`/proxy?url=${encodeURIComponent(q)}`:q,U=J.panels.map(q=>{const et=typeof q?.source=="string"?q.source.replace(/^\/+/,""):"",St=et?tt?`${tt}/${et}`:`/${et}`:void 0,O=St?D(St):void 0,Y=typeof q?.poster=="string"?q.poster.replace(/^\/+/,""):"",dt=Y?tt?`${tt}/${Y}`:`/${Y}`:void 0,At=dt?D(dt):void 0,Dt=q?.type==="image"||q?.type==="video"?q.type:"text";return{...q,kind:Dt,type:Dt,title:q?.content?.title??"Uten tittel",body:q?.content?.description??"",cta:q?.content?.cta,poster:At,image:Dt==="image"?O:void 0,video:Dt==="video"?O:void 0}});if(U.length===0)throw new Error("Panel payload contained 0 panels");if(C)return;c(U),p(U[0].id)}catch(F){if(console.error("Failed to load panels; using fallback data.",F),C)return;c(Xu),p(Xu[0].id),y(!0)}finally{C||x(!1)}})(),()=>{C=!0}},[]);const H=Sn.useMemo(()=>l.find(C=>C.id===m)??l[0]??{title:"",body:""},[m,l]),b=Sn.useMemo(()=>{const C=z.get(H.id);return M==="nb"?C?.labelNb||qp(C?.label||H.title||""):C?.label||H.title||""},[H.id,H.title,z,M]);return Sn.useEffect(()=>{if(l.length===0)return;const C=r.current;if(!C)return;N(!1);let ct=!1,F=()=>{};return(()=>{if(ct||!C)return;t.current=[];const J=window.matchMedia("(prefers-reduced-motion: reduce)"),tt=window.matchMedia("(max-width: 767px)"),j=J.matches,D=tt.matches,U=new bm;U.background=new le(987671),U.fog=new dc(987671,38,230);const q=new Ti(D?72:64,C.clientWidth/C.clientHeight,.1,1200),et=new yS({antialias:!D,alpha:!1,powerPreference:"high-performance"});et.setPixelRatio(Math.min(window.devicePixelRatio,D?1:1.5)),et.setSize(C.clientWidth,C.clientHeight),et.outputColorSpace=Wn,et.toneMapping=qf,et.toneMappingExposure=D?.76:.72,et.shadowMap.enabled=!D,et.shadowMap.type=ko,C.appendChild(et.domElement);const St=new Xf(et),O=St.fromScene(new s2,.06);U.environment=O.texture;const Y=new uS(16185599,.05);U.add(Y);const dt=new cS(14739442,1777446,.08);U.add(dt);const At=O2(a2),Dt=new nS(At,!0,"catmullrom",.17),it=D?180:300,pt=Math.min(8,et.capabilities.getMaxAnisotropy()),yt=D?256:512,Lt=jp({width:yt,height:yt,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});la(Lt.albedo,4.8,24,pt,!0),la(Lt.normal,4.8,24,pt),la(Lt.roughness,4.8,24,pt),la(Lt.ao,4.8,24,pt);const Xt=jp({width:yt,height:yt,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});la(Xt.albedo,2.2,24,pt,!0),la(Xt.normal,2.2,24,pt),la(Xt.roughness,2.2,24,pt),la(Xt.ao,2.2,24,pt);const ne=jp({width:yt,height:yt,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});la(ne.albedo,3.4,24,pt,!0),la(ne.normal,3.4,24,pt),la(ne.roughness,3.4,24,pt),la(ne.ao,3.4,24,pt);const ln=new Nr({color:9607586,map:Lt.albedo,normalMap:Lt.normal,normalScale:new be(.32,.32),roughnessMap:Lt.roughness,roughness:.38,metalness:0,aoMap:Lt.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Vn}),ve=new Nr({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Vn}),oe=new Nr({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new le(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Vn}),ke=()=>{const Rt=[],Yt=new Q(0,1,0);let te=new Q(1,0,0);for(let Ut=0;Ut<=it;Ut+=1){const Nn=Ut/it,zi=Dt.getPointAt(Nn),Le=Nn===1?zi.clone().sub(Dt.getPointAt(Nn-.001)).normalize():Dt.getPointAt(Nn+.001).sub(zi).normalize();let we=new Q().crossVectors(Le,Yt).normalize();we.lengthSq()<1e-4&&(we=te.clone()),we.dot(te)<0&&we.multiplyScalar(-1),te=we.clone();const En=new Q().crossVectors(we,Le).normalize();Rt.push({pt:zi,right:we,up:En,t:Nn})}const Zt=(Ut,Nn,zi=!1)=>{const Le=[],we=[],En=[];for(let Ee=0;Ee<=it;Ee+=1){const Pn=Rt[Ee],si=Ut(Pn),ri=Nn(Pn);Le.push(si.x,si.y,si.z,ri.x,ri.y,ri.z),we.push(0,Pn.t,1,Pn.t)}for(let Ee=0;Ee<it;Ee+=1){const Pn=Ee*2,si=Pn+1,ri=Pn+2,xi=Pn+3;zi?En.push(Pn,ri,si,ri,xi,si):En.push(Pn,si,ri,ri,si,xi)}const Ln=new Zi;Ln.setAttribute("position",new ni(Le,3));const vi=new ni(we,2);return Ln.setAttribute("uv",vi),Ln.setAttribute("uv2",vi.clone()),Ln.setIndex(En),Ln.computeVertexNormals(),Ln},It=fx*.5,fe=Xp*.5,Re=Zt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-fe)).add(Ut.right.clone().multiplyScalar(-It)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-fe)).add(Ut.right.clone().multiplyScalar(It))),Qe=Zt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe)).add(Ut.right.clone().multiplyScalar(-It)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe)).add(Ut.right.clone().multiplyScalar(It)),!0),Ye=Zt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-fe)).add(Ut.right.clone().multiplyScalar(-It)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe)).add(Ut.right.clone().multiplyScalar(-It)),!0),Qn=Zt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-fe)).add(Ut.right.clone().multiplyScalar(It)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe)).add(Ut.right.clone().multiplyScalar(It))),hi=.08,Fe=.015,Ce=Zt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe-hi)).add(Ut.right.clone().multiplyScalar(-It+Fe)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe)).add(Ut.right.clone().multiplyScalar(-It+Fe)),!0),qe=Zt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe-hi)).add(Ut.right.clone().multiplyScalar(It-Fe)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe)).add(Ut.right.clone().multiplyScalar(It-Fe)),!1),dn=.22,gn=.018,wi=Zt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-fe)).add(Ut.right.clone().multiplyScalar(-It+gn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-fe+dn)).add(Ut.right.clone().multiplyScalar(-It+gn)),!0),_a=Zt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-fe)).add(Ut.right.clone().multiplyScalar(It-gn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-fe+dn)).add(Ut.right.clone().multiplyScalar(It-gn)),!1),Di=.14,_i=Zt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe-.05)).add(Ut.right.clone().multiplyScalar(-Di)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(fe-.05)).add(Ut.right.clone().multiplyScalar(Di)),!0);return{floorGeo:Re,ceilGeo:Qe,leftGeo:Ye,rightGeo:Qn,leftSkirtGeo:wi,rightSkirtGeo:_a,trackRailGeo:_i,leftCrownGeo:Ce,rightCrownGeo:qe}},{floorGeo:he,ceilGeo:nn,leftGeo:V,rightGeo:$e,leftSkirtGeo:Ae,rightSkirtGeo:Xe,trackRailGeo:Qt,leftCrownGeo:I,rightCrownGeo:T}=ke(),Z=new He(he,ln),mt=new He(nn,oe),xt=new He(V,ve),ft=new He($e,ve),jt=new Nr({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),Ct=new _s({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Vn}),ie=new He(Ae,Ct),re=new He(Xe,Ct);ie.receiveShadow=!0,re.receiveShadow=!0;const bt=new He(I,Ct),Tt=new He(T,Ct);bt.receiveShadow=!1,Tt.receiveShadow=!1;const zt=new Nr({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Vn}),Pt=new He(Qt,zt);Pt.receiveShadow=!1,Z.receiveShadow=!0,Z.castShadow=!0,mt.receiveShadow=!0,mt.castShadow=!0,xt&&(xt.receiveShadow=!0,xt.castShadow=!0),ft&&(ft.receiveShadow=!0,ft.castShadow=!0),U.add(Z),U.add(mt),xt&&U.add(xt),ft&&U.add(ft),U.add(ie),U.add(re),U.add(bt),U.add(Tt),U.add(Pt);const Ht=new Q(0,1,0),ge=new mn,W=new mn,wt=new mn;U.add(ge),U.add(W),U.add(wt);const Et=new Ju(16773598,D?16:24,34,Math.PI/8.4,.44,2);Et.target=ge,Et.castShadow=!D,Et.castShadow&&(Et.shadow.mapSize.width=2048,Et.shadow.mapSize.height=2048,Et.shadow.bias=-35e-5,Et.shadow.normalBias=.012,Et.shadow.camera.near=.4,Et.shadow.camera.far=34),U.add(Et);const Ft=new Ju(12571903,D?6:9,34,Math.PI/6.5,.68,2);Ft.target=W,Ft.castShadow=!1,U.add(Ft);const Mt=new Ju(14083583,D?5:7,28,Math.PI/7.8,.6,2);Mt.target=wt,Mt.castShadow=!1,U.add(Mt);const ht=new mn,Vt=new mn;U.add(ht),U.add(Vt);const Jt=new am(16774374,0);if(Jt.target=ht,Jt.castShadow=!D,Jt.castShadow){Jt.shadow.mapSize.width=4096,Jt.shadow.mapSize.height=4096,Jt.shadow.bias=-2e-4,Jt.shadow.normalBias=.005;const Rt=320;Jt.shadow.camera.left=-Rt,Jt.shadow.camera.right=Rt,Jt.shadow.camera.top=Rt,Jt.shadow.camera.bottom=-Rt,Jt.shadow.camera.near=1,Jt.shadow.camera.far=1200}U.add(Jt);const Pe=new am(9090280,0);Pe.target=Vt,U.add(Pe),he.computeBoundingBox(),he.computeBoundingSphere(),nn.computeBoundingBox(),nn.computeBoundingSphere(),V.computeBoundingBox(),V.computeBoundingSphere(),$e.computeBoundingBox(),$e.computeBoundingSphere();const jn=l.some(Rt=>Rt.installation?.mount_type==="continuous_led_wall"||Rt.installation?.mount_type==="jutting_half_wall")?l:D?l.filter((Rt,Yt)=>Yt%2===0):l,Zn=[],Na=[],Fi=[],ys=[],Ya=[],Bi=[],Ki=[],pa=Rt=>{if(!Rt.paused&&Rt.currentTime>0)return;const Yt=Rt.play();Yt&&typeof Yt.catch=="function"&&Yt.catch(()=>{})},bi=setInterval(()=>{let Rt=!0;Bi.forEach(Yt=>{(Yt.paused||Yt.readyState<2)&&(Rt=!1,pa(Yt))}),Rt&&Bi.length>0&&clearInterval(bi)},500);Ya.push(()=>clearInterval(bi));const An=new ir(1,1,.2),Dn=new Ga(.82,.82),ma=new Nr({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),La=(Rt,Yt)=>{const Zt=document.createElement("canvas");Zt.width=512,Zt.height=512;const It=Zt.getContext("2d");It.clearRect(0,0,512,512);const fe=B.get(Yt);if(fe)try{y2(It,fe,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const qe=new Vo(Zt);return qe.colorSpace=Wn,qe}catch(qe){console.warn(`Invalid glyph canonical sentence for panel '${Yt}': '${fe}'. Falling back to procedural glyph.`,qe)}const Re=512/2,Qe=512/2,Ye=Rt*137.508;It.fillStyle="rgba(6,14,24,0.7)",It.beginPath(),It.arc(Re,Qe,512*.42,0,Math.PI*2),It.fill(),It.strokeStyle="rgba(102,221,255,0.95)",It.lineWidth=2.5,It.lineCap="round",It.beginPath(),It.arc(Re,Qe,512*.38,0,Math.PI*2),It.stroke();const Qn=3+Rt%4;for(let qe=0;qe<Qn;qe++){const dn=qe/Qn*Math.PI*2+Ye,gn=512*.08,wi=512*.32;It.beginPath(),It.moveTo(Re+Math.cos(dn)*gn,Qe+Math.sin(dn)*gn),It.lineTo(Re+Math.cos(dn)*wi,Qe+Math.sin(dn)*wi),It.stroke()}const hi=2+Rt%3;for(let qe=0;qe<hi;qe++){const dn=512*(.15+qe*.09),gn=Ye+qe*1.2;It.beginPath(),It.arc(Re,Qe,dn,gn,gn+Math.PI*(.4+Rt%3*.2)),It.stroke()}It.fillStyle="rgba(102,221,255,0.85)";const Fe=3+Rt%5;for(let qe=0;qe<Fe;qe++){const dn=Ye+qe/Fe*Math.PI*2,gn=512*(.2+qe%3*.06);It.beginPath(),It.arc(Re+Math.cos(dn)*gn,Qe+Math.sin(dn)*gn,4,0,Math.PI*2),It.fill()}It.strokeStyle="rgba(102,221,255,0.5)",It.lineWidth=1.5,It.beginPath(),It.arc(Re,Qe,512*.12,0,Math.PI*2),It.stroke(),It.fillStyle="rgba(102,221,255,0.95)",It.beginPath(),It.arc(Re,Qe,6,0,Math.PI*2),It.fill();const Ce=new Vo(Zt);return Ce.colorSpace=Wn,Ce},Vr=(Rt,Yt)=>{const te=document.createElement("canvas");te.width=1024,te.height=640;const Zt=te.getContext("2d");Zt.fillStyle="rgba(8,12,18,0.88)",Zt.beginPath(),Zt.roundRect(16,16,992,608,24),Zt.fill(),Zt.strokeStyle="rgba(102,221,255,0.25)",Zt.lineWidth=2,Zt.beginPath(),Zt.roundRect(16,16,992,608,24),Zt.stroke(),Zt.fillStyle="rgba(102,221,255,0.95)",Zt.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",I2(Zt,Rt.toUpperCase(),60,100,900,58),Zt.strokeStyle="rgba(102,221,255,0.3)",Zt.lineWidth=2,Zt.beginPath(),Zt.moveTo(60,180),Zt.lineTo(960,180),Zt.stroke(),Zt.fillStyle="rgba(220,230,240,0.9)";const It="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",fe="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";Zt.font=It,H2(Zt,Yt,60,230,900,42,It,fe);const Re=new Vo(te);return Re.colorSpace=Wn,Re},kr=()=>{const Yt=document.createElement("canvas");Yt.width=512,Yt.height=512;const te=Yt.getContext("2d"),Zt=512/2,It=512/2;te.beginPath(),te.arc(Zt,It,512*.42,0,Math.PI*2),te.fillStyle="rgba(6,14,24,0.7)",te.fill(),te.strokeStyle="rgba(255,170,51,0.9)",te.lineWidth=6,te.beginPath(),te.arc(Zt,It,512*.38,0,Math.PI*2),te.stroke();const fe=8;for(let Qe=0;Qe<fe;Qe++){const Ye=Qe/fe*Math.PI*2-Math.PI/2;te.strokeStyle=`rgba(255,${170+Math.round(Math.sin(Qe)*40)},51,0.8)`,te.lineWidth=4,te.beginPath(),te.moveTo(Zt+Math.cos(Ye)*512*.12,It+Math.sin(Ye)*512*.12),te.lineTo(Zt+Math.cos(Ye)*512*.34,It+Math.sin(Ye)*512*.34),te.stroke();const Qn=Zt+Math.cos(Ye)*512*.34,hi=It+Math.sin(Ye)*512*.34,Fe=512*.06;te.beginPath(),te.moveTo(Qn,hi),te.lineTo(Qn-Fe*Math.cos(Ye-.4),hi-Fe*Math.sin(Ye-.4)),te.moveTo(Qn,hi),te.lineTo(Qn-Fe*Math.cos(Ye+.4),hi-Fe*Math.sin(Ye+.4)),te.stroke()}te.beginPath(),te.arc(Zt,It,512*.06,0,Math.PI*2),te.fillStyle="rgba(255,200,80,0.95)",te.fill();const Re=new Vo(Yt);return Re.colorSpace=Wn,Re},ar=Rt=>{const Yt=ba(Rt),te=Dt.getPointAt(Yt),It=Dt.getPointAt(ba(Yt+.002)).clone().sub(te).normalize();let fe=new Q().crossVectors(It,Ht).normalize();fe.lengthSq()<1e-4&&(fe=new Q(1,0,0));const Re=new Q().crossVectors(fe,It).normalize();return{point:te,tangent:It,right:fe,up:Re}};Dt.getLength();const Ai=[],Ms=new Ga(Yp*2,Yp*2),ga=new Ga(w2,D2);jn.forEach((Rt,Yt)=>{const te=Rt.installation,Zt=ba(te?.placement_t??.05+Yt/jn.length),{point:It,right:fe,up:Re}=ar(Zt),Qe=te?.side==="left",hi=(te?.side==="center"?0:Qe?-1:1)*fx*.12,Fe=It.clone().add(fe.clone().multiplyScalar(hi)).add(Re.clone().multiplyScalar(.5)),Ce=La(Yt,Rt.id);Na.push(Ce);const qe=new _s({color:16777215,emissive:new le(dx),emissiveIntensity:1.2,map:Ce,emissiveMap:Ce,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});Fi.push(qe);const dn=new He(Ms,qe);dn.position.copy(Fe),dn.userData={panel:Rt,isGlyph:!0},Zn.push(dn),U.add(dn);const gn=z.get(Rt.id),wi=M==="nb"?gn?.labelNb||qp(gn?.label||Rt.title||""):gn?.label||Rt.title||"",_a=M==="nb"?gn?.noteNb||qp(gn?.note||Rt.body||""):gn?.note||Rt.body||"",Di=Vr(wi,_a);Na.push(Di);const _i=new _s({color:16777215,emissive:new le(1122867),emissiveIntensity:.3,map:Di,transparent:!0,opacity:0,side:Vn,depthWrite:!0});Fi.push(_i);const Ut=new He(ga,_i),Nn=new Go;Nn.add(Ut),Nn.position.copy(Fe),Nn.scale.setScalar(.01),Nn.visible=!1,U.add(Nn);const zi=new uc(dx,D?6:12,20,1.5);zi.position.copy(Fe),U.add(zi),Ai.push({mesh:dn,card:Nn,panel:Rt,progress:Zt,baseY:Fe.y,expanded:!1,expandT:0}),t.current.push({meta:Rt,progress:Zt})});let cn=!1,kn=0;const A=new Q,X=new Q,at=new Q,rt=32;for(let Rt=0;Rt<rt;Rt++)at.add(Dt.getPointAt(Rt/rt));at.divideScalar(rt);const nt=new Ga(Yu*2,Yu*2),Nt=kr();Na.push(Nt);const Gt=new _s({color:16777215,emissive:new le(px),emissiveIntensity:1.4,map:Nt,emissiveMap:Nt,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});Fi.push(Gt);const{point:Ot,up:qt}=ar(N2),$t=Ot.clone().add(qt.clone().multiplyScalar(1)),se=new He(nt,Gt);se.position.copy($t),se.userData={isExitGlyph:!0},U.add(se);const me=new Ga(Yu*5,Yu*5),Wt=new pc({visible:!1,side:Vn}),de=new He(me,Wt);de.position.copy($t),de.userData={isExitGlyph:!0},Zn.push(de),U.add(de);const un=new uc(px,D?6:12,20,1.5);un.position.copy($t),U.add(un);const fn=new lh(D?1.25:1.6,26,26);ys.push(fn);const Ne=new _s({color:16764788,emissive:new le(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});Fi.push(Ne);const yn=Ot.clone().add(qt.clone().multiplyScalar(Xp*.52+.32)),kt=new He(fn,Ne);kt.position.copy(yn),kt.userData={isReentryDot:!0},Zn.push(kt),U.add(kt);const Kn=new oh(D?1.75:2.2,D?2.35:2.95,52);ys.push(Kn);const ue=new pc({color:16761948,transparent:!0,opacity:0,side:Vn,depthWrite:!1});Fi.push(ue);const Un=new He(Kn,ue);Un.position.copy(yn),U.add(Un);const ii=new uc(16761948,0,D?34:44,2);ii.position.copy(yn),U.add(ii);const Ri=new dS,ai=new be,We=Rt=>{Bi.forEach(pa);const Yt=et.domElement.getBoundingClientRect();ai.x=(Rt.clientX-Yt.left)/Yt.width*2-1,ai.y=-((Rt.clientY-Yt.top)/Yt.height)*2+1,Ri.setFromCamera(ai,q);const te=Ri.intersectObjects(Zn,!1);if(te.length>0){const Zt=te[0].object;if(Zt.userData.isReentryDot&&cn){cn=!1,N(!1);return}if(Zt.userData.isExitGlyph){if(cn=!cn,N(cn),cn){const Re=q.position.clone().clone().sub(at).normalize();A.copy(at).add(Re.multiplyScalar(Wu)),A.y=at.y+Wu*.35,X.copy(at)}Ai.forEach(fe=>{fe.expanded=!1});return}if(cn){cn=!1,N(!1);return}const It=Zt.userData.panel;if(It){const fe=Ai.find(Re=>Re.panel.id===It.id);fe&&(fe.expanded?fe.expanded=!1:(Ai.forEach(Re=>{Re.expanded=!1}),fe.expanded=!0))}}else cn?(cn=!1,N(!1)):Ai.forEach(Zt=>{Zt.expanded=!1})};et.domElement.addEventListener("pointerdown",We);const hn={x:0,y:0},Rn={x:0,y:0},Mn=Rt=>{if(j||D)return;const Yt=et.domElement.getBoundingClientRect(),te=(Rt.clientX-Yt.left)/Yt.width,Zt=(Rt.clientY-Yt.top)/Yt.height;hn.x=(te-.5)*2,hn.y=(Zt-.5)*2},Ci=()=>{hn.x=0,hn.y=0};et.domElement.addEventListener("pointermove",Mn,{passive:!0}),et.domElement.addEventListener("pointerleave",Ci,{passive:!0});const Qi=Rt=>{Rt.preventDefault(),!cn&&(Bi.forEach(pa),i.current=ba(i.current+hx*Rt.deltaY*75e-6))};et.domElement.addEventListener("wheel",Qi,{passive:!1});const qa=Rt=>{if((Rt.key==="o"||Rt.key==="O")&&(cn=!cn,N(cn),cn)){const te=q.position.clone().clone().sub(at).normalize();A.copy(at).add(te.multiplyScalar(Wu)),A.y=at.y+Wu*.35,X.copy(at)}};window.addEventListener("keydown",qa);let Xr=0;const gc=Rt=>{Bi.forEach(pa),Xr=Rt.touches[0]?.clientY??0},sr=Rt=>{if(Rt.preventDefault(),cn)return;const Yt=Rt.touches[0]?.clientY??Xr,te=Xr-Yt;i.current=ba(i.current+hx*te*11e-5),Xr=Yt};et.domElement.addEventListener("touchstart",gc,{passive:!0}),et.domElement.addEventListener("touchmove",sr,{passive:!1});const Ji=()=>{C&&(q.aspect=C.clientWidth/C.clientHeight,q.updateProjectionMatrix(),et.setSize(C.clientWidth,C.clientHeight))};window.addEventListener("resize",Ji);const rr=new mn,Wr=new pS,Oa=new Q,ja=new Q,nl=new Q;let Yr=l.length>0?l[0].id:"";const il=()=>{if(ct)return;const Rt=Wr.getDelta(),Yt=Wr.getElapsedTime();s.current=b2(s.current,i.current,j?2.8:4.8,Rt),Rn.x+=(hn.x-Rn.x)*.07,Rn.y+=(hn.y-Rn.y)*.07;const te=s.current,Zt=ba(te+(D?.008:.01)),It=Dt.getPointAt(te),fe=Dt.getPointAt(Zt),Re=Dt.getPointAt(ba(te+.002)).sub(Dt.getPointAt(ba(te-.002))).normalize();let Qe=new Q().crossVectors(Re,Ht).normalize();Qe.lengthSq()<1e-4&&(Qe=new Q(1,0,0));const Ye=new Q().crossVectors(Qe,Re).normalize(),Qn=Qe.clone().multiplyScalar(Rn.x*(D?0:.62)).add(Ye.clone().multiplyScalar(Rn.y*(D?0:.42))),hi=j?new Q:Ye.clone().multiplyScalar(Math.sin(Yt*.45)*.12),Fe=1/L2;cn&&kn<1?kn=Math.min(1,kn+Fe*Rt):!cn&&kn>0&&(kn=Math.max(0,kn-Fe*Rt));const Ce=kn<.5?4*kn*kn*kn:1-Math.pow(-2*kn+2,3)/2;if(ht.position.copy(at),Vt.position.copy(at),Jt.position.set(at.x+500,at.y+600,at.z-300),Pe.position.set(at.x-400,at.y+150,at.z+350),Ce>.01){U.fog instanceof dc&&(U.fog.near=Mi.lerp(38,9999,Ce),U.fog.far=Mi.lerp(230,1e4,Ce));const Le=new le(987671),we=new le(395794);U.background.copy(Le).lerp(we,Ce),Y.intensity=Mi.lerp(.05,.08,Ce),dt.intensity=Mi.lerp(.08,.12,Ce),Jt.intensity=Mi.lerp(0,D?2.2:3.5,Ce),Pe.intensity=Mi.lerp(0,D?.25:.4,Ce),et.toneMappingExposure=Mi.lerp(D?.76:.72,D?1:1.1,Ce),[ln,ve].forEach(En=>{En.emissive.set(3359829),En.emissiveIntensity=.12*Ce}),oe.color.set(0).lerp(new le(16777215),Ce),oe.toneMapped=Ce>.5,oe.fog=Ce>.5,oe.emissive.set(16777215),oe.emissiveIntensity=Mi.lerp(1,.15,Ce),oe.envMapIntensity=Mi.lerp(0,.1,Ce)}else Y.intensity=.05,dt.intensity=.08,Jt.intensity=0,Pe.intensity=0,et.toneMappingExposure=D?.76:.72,U.background.set(987671),[ln,ve].forEach(Le=>{Le.emissive.set(0),Le.emissiveIntensity=0}),oe.color.set(0),oe.toneMapped=!1,oe.fog=!1,oe.emissive.set(16777215),oe.emissiveIntensity=1,oe.envMapIntensity=0;const qe=Ye.clone().multiplyScalar(-Xp*.2),dn=It.clone().add(qe).add(Qn).add(hi),gn=fe.clone().add(qe).add(Qn.multiplyScalar(.22));if(Ce>.99)q.position.copy(A),q.lookAt(X);else if(Ce>.001){q.position.lerpVectors(dn,A,Ce);const Le=gn.clone().lerp(X,Ce);q.lookAt(Le)}else q.position.copy(dn),rr.position.copy(q.position),rr.lookAt(gn),q.quaternion.slerp(rr.quaternion,1-Math.exp(-8.1*Rt));const wi=.94+Math.sin(Yt*.23)*.06,_a=fe.clone().add(qe);Et.position.copy(q.position).add(Ye.clone().multiplyScalar(2.9)).add(Qe.clone().multiplyScalar(2.1)).add(Re.clone().multiplyScalar(-2.2)),ge.position.copy(_a).add(Qe.clone().multiplyScalar(2.5)).add(Ye.clone().multiplyScalar(-.9)),Et.intensity=(D?14:21)*wi,Ft.position.copy(q.position).add(Ye.clone().multiplyScalar(2)).add(Qe.clone().multiplyScalar(-2.4)).add(Re.clone().multiplyScalar(-1.1)),W.position.copy(_a).add(Qe.clone().multiplyScalar(-2)).add(Ye.clone().multiplyScalar(-1.4)),Ft.intensity=(D?5:8)*wi,Mt.position.copy(q.position).add(Ye.clone().multiplyScalar(1.4)).add(Re.clone().multiplyScalar(2.8)).add(Qe.clone().multiplyScalar(.6)),wt.position.copy(_a).add(Ye.clone().multiplyScalar(-.8)),Mt.intensity=(D?4:6.2)*wi,Zn.forEach(Le=>{const we=Le.userData;if(!we||!we.shading||!we.material)return;const En=we.shading,Ln=we.material,vi=we.video,Ee=we;let Pn=1;En.lighting?.flicker_sync&&vi&&vi.readyState>=3&&(Pn=.88+Math.sin(Yt*22)*.1*Math.sin(Yt*6.7));let si=1;if(En.movement_reaction?.type==="viewing_angle_fade"){Oa.set(0,0,0),Le.getWorldPosition(Oa),ja.set(0,0,1).applyQuaternion(Le.quaternion),nl.copy(q.position).sub(Oa).normalize();const xi=ja,va=nl,or=Math.max(0,xi.dot(va)),lr=En.movement_reaction.cone_angle_degrees===60?3:1.5;si=Math.pow(or,lr)}const ri=we.baseEmissive*Pn*si;if(Ln.emissiveIntensity=ri,Ee.bounceLights&&Ee.bounceLights.length>0){const xi=Ee.bounceSampleCtx,va=Ee.bounceSampleCanvas;if(vi&&xi&&va&&(Ee.bounceNextSampleAt??0)<=Yt){const Za=$2(vi,va,xi);if(Za){Ee.bounceTargetColor||(Ee.bounceTargetColor=Za.color.clone());const al=Za.color.clone().lerp(new le(1,.97,.93),.18);Ee.bounceTargetColor.copy(al);const sl=Mi.clamp(.22+Za.luminance*1.9,.22,2.25);Ee.bounceTargetIntensity=(Ee.bounceBaseIntensity??5)*sl*(.25+ri*1.25)}Ee.bounceNextSampleAt=Yt+1/(D?2:4)}else vi||(Ee.bounceTargetIntensity=(Ee.bounceBaseIntensity??5)*(.22+ri*1.1));const or=Ee.bounceTargetIntensity??0,lr=Ee.bounceCurrentIntensity??0;Ee.bounceCurrentIntensity=Mi.lerp(lr,or,1-Math.exp(-6.2*Rt)),Ee.bounceCurrentColor||(Ee.bounceCurrentColor=(Ee.bounceTargetColor??new le(1,1,1)).clone()),Ee.bounceTargetColor&&Ee.bounceCurrentColor.lerp(Ee.bounceTargetColor,1-Math.exp(-5.4*Rt)),Ee.bounceLights.forEach((Za,al)=>{const sl=Math.max(1,Ee.bounceLights.length-1),_c=1-al/sl*.34;Za.color.copy(Ee.bounceCurrentColor),Za.intensity=(Ee.bounceCurrentIntensity??0)*_c})}}),Ki.forEach(({mesh:Le,basePosition:we,strength:En})=>{const Ln=Le.parent;if(!Ln)return;const vi=Ln.worldToLocal(q.position.clone()),Ee=Mi.clamp(vi.x*.008,-.18,.18)*En,Pn=Mi.clamp(vi.y*.006,-.14,.14)*En;Le.position.x=we.x+Ee,Le.position.y=we.y+Pn}),Ai.forEach((Le,we)=>{const{mesh:En,card:Ln}=Le;En.lookAt(q.position);const vi=we*.7,Ee=Le.baseY+Math.sin(Yt*R2+vi)*A2;En.position.y=Ee,En.rotateZ(C2*Rt);const Pn=En.material;Pn.emissiveIntensity=1+Math.sin(Yt*2+we)*.4;const si=Le.expanded?1:0,ri=1/U2;Le.expandT<si?Le.expandT=Math.min(1,Le.expandT+ri*Rt):Le.expandT>si&&(Le.expandT=Math.max(0,Le.expandT-ri*Rt));const xi=Le.expandT,va=xi<.5?4*xi*xi*xi:1-Math.pow(-2*xi+2,3)/2;if(va>.001){Ln.visible=!0,Ln.position.copy(En.position),Ln.position.y-=Yp+.3,Ln.lookAt(q.position),Ln.scale.setScalar(va);const or=Ln.children[0].material;or.opacity=va}else Ln.visible=!1;Pn.opacity=1-va*.4});const Di=$t.y+Math.sin(Yt*.8)*.35;se.lookAt(q.position),se.position.y=Di,se.rotateZ(.15*Rt),Gt.emissiveIntensity=1.2+Math.sin(Yt*1.5)*.5,de.lookAt(q.position),de.position.y=Di;const _i=.72+Math.sin(Yt*2.35)*.28,Ut=Mi.smoothstep(Ce,.2,.95);kt.visible=Ut>.001,Un.visible=Ut>.001,kt.scale.setScalar(.88+_i*.28),Ne.emissiveIntensity=Ut*(.48+_i*.45),ii.intensity=Ut*(D?4.6:7.4)*_i,Un.lookAt(q.position),Un.scale.setScalar(.95+_i*.18),ue.opacity=Ut*(.2+_i*.32);let Nn=t.current[0]?.meta.id??(l.length>0?l[0].id:""),zi=Number.POSITIVE_INFINITY;t.current.forEach(Le=>{let we=Math.abs(te-Le.progress);we>.5&&(we=1-we),we<zi&&(zi=we,Nn=Le.meta.id)}),Nn!==Yr&&(Yr=Nn,p(Nn)),et.render(U,q),requestAnimationFrame(il)};il(),F=()=>{et.domElement.removeEventListener("pointerdown",We),et.domElement.removeEventListener("pointermove",Mn),et.domElement.removeEventListener("pointerleave",Ci),et.domElement.removeEventListener("wheel",Qi),et.domElement.removeEventListener("touchstart",gc),et.domElement.removeEventListener("touchmove",sr),window.removeEventListener("resize",Ji),window.removeEventListener("keydown",qa),C.contains(et.domElement)&&C.removeChild(et.domElement),Zn.forEach(Rt=>{const Yt=Rt.userData?.video;Yt&&(Yt.pause(),Yt.src="",Yt.load())}),Bi.forEach(Rt=>{Rt.pause(),Rt.src="",Rt.load()}),Ya.forEach(Rt=>Rt()),Na.forEach(Rt=>Rt.dispose?.()),ys.forEach(Rt=>Rt.dispose()),Ms.dispose(),ga.dispose(),Lt.albedo.dispose(),Lt.normal.dispose(),Lt.roughness.dispose(),Lt.ao.dispose(),Xt.albedo.dispose(),Xt.normal.dispose(),Xt.roughness.dispose(),Xt.ao.dispose(),ne.albedo.dispose(),ne.normal.dispose(),ne.roughness.dispose(),ne.ao.dispose(),Fi.forEach(Rt=>Rt.dispose()),O.texture.dispose(),O.dispose(),St.dispose(),ln.dispose(),ve.dispose(),jt.dispose(),oe.dispose(),ma.dispose(),An.dispose(),Dn.dispose(),he.dispose(),nn.dispose(),V.dispose(),$e.dispose(),Ae.dispose(),Xe.dispose(),I.dispose(),T.dispose(),Qt.dispose(),Ct.dispose(),zt.dispose(),et.dispose()}})(),()=>{ct=!0,F()}},[l,B,z,M]),Tn.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Tn.jsx("div",{ref:r,className:"absolute inset-0"}),Tn.jsxs("div",{className:"absolute right-4 top-4 z-30 flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[Tn.jsx("span",{className:"px-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#5a5a5a]",children:w.languageLabel}),Tn.jsx("button",{type:"button",onClick:()=>S("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${M==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":M==="nb",children:"NO"}),Tn.jsx("button",{type:"button",onClick:()=>S("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${M==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":M==="en",children:"EN"})]}),_||g?Tn.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:_?w.loadingPanels:w.panelsFallback}):null,E?null:Tn.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Tn.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:w.siteName}),Tn.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[w.activeInstallation,": ",b]})]}),E?Tn.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Tn.jsx("style",{children:`
              @keyframes outsideLinkFloatA {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -14px, 0px); }
              }
              @keyframes outsideLinkFloatB {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -18px, 0px); }
              }
              @keyframes outsideLinkFloatC {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -12px, 0px); }
              }
              @keyframes outsideCorePulse {
                0%, 100% { opacity: 0.88; text-shadow: 0 0 20px rgba(171, 194, 232, 0.34); }
                50% { opacity: 1; text-shadow: 0 0 28px rgba(171, 194, 232, 0.58); }
              }
            `}),Tn.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:w.siteName}),Tn.jsx("a",{href:"#videos",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Tn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:w.outsideVideos})}),Tn.jsx("a",{href:"#signatures",className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Tn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:w.outsideSignatures})}),Tn.jsx("a",{href:"#news",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Tn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:w.outsideAiNews})})]}):null]})}function eR(){return Tn.jsx("div",{className:"min-h-screen bg-[#080604]",children:Tn.jsx(tR,{})})}yM.createRoot(document.getElementById("root")).render(Tn.jsx(Sn.StrictMode,{children:Tn.jsx(eR,{})}));
